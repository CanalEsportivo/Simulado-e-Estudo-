import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { PDFDocument, PDFName, PDFDict, PDFRawStream } from 'pdf-lib';
import sharp from 'sharp';

async function mapPdfImagesAccurately() {
  const data = new Uint8Array(fs.readFileSync('/tmp/tvde.pdf'));
  const pdfjsDoc = await pdfjsLib.getDocument({ data }).promise;

  const pdfLibDoc = await PDFDocument.load(fs.readFileSync('/tmp/tvde.pdf'));
  const pdfLibPages = pdfLibDoc.getPages();

  console.log(`Processing ${pdfjsDoc.numPages} pages with spatial matching...`);

  const outputDir = path.join(process.cwd(), 'public', 'assets', 'questoes');
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });

  const questionImageMap = {}; // questionNumber -> relative path

  for (let pageNum = 1; pageNum <= pdfjsDoc.numPages; pageNum++) {
    const page = await pdfjsDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.0 });
    const textContent = await page.getTextContent();

    // 1. Find all question headers on this page and their canvasY coordinates
    const pageQuestions = [];
    for (const item of textContent.items) {
      const text = item.str.trim();
      const match = text.match(/^(\d{1,3})\s*-\s*\(\s*id:/);
      if (match) {
        const [,,,,, y] = item.transform;
        const canvasY = viewport.height - y;
        pageQuestions.push({
          qNum: parseInt(match[1], 10),
          canvasY
        });
      }
    }

    if (pageQuestions.length === 0) continue;
    pageQuestions.sort((a, b) => a.canvasY - b.canvasY);

    // 2. Extract image operator transforms on this page
    const ops = await page.getOperatorList();
    let currentTransform = null;
    const pageImages = [];

    for (let i = 0; i < ops.fnArray.length; i++) {
      const fn = ops.fnArray[i];
      const args = ops.argsArray[i];

      if (fn === pdfjsLib.OPS.transform) {
        currentTransform = args;
      } else if (fn === pdfjsLib.OPS.paintImageXObject) {
        if (currentTransform) {
          const imgX = currentTransform[4];
          const imgY = currentTransform[5];
          const imgW = currentTransform[0];
          const imgH = currentTransform[3];
          const canvasY = viewport.height - imgY;

          // Filter out top header logo (Y near top < 80) or small non-question images
          if (canvasY > 80 && imgW > 50 && imgH > 30) {
            pageImages.push({
              name: args[0],
              canvasY,
              imgX,
              imgW,
              imgH
            });
          }
        }
      }
    }

    // Sort images top-to-bottom
    pageImages.sort((a, b) => a.canvasY - b.canvasY);

    // 3. Match each image to the corresponding question on the page
    // For each question block on page, find the image that falls inside or right below its Y position
    for (let i = 0; i < pageQuestions.length; i++) {
      const q = pageQuestions[i];
      const nextQY = (i < pageQuestions.length - 1) ? pageQuestions[i + 1].canvasY : viewport.height;

      // Find image between q.canvasY - 20 and nextQY + 10
      const matchedImg = pageImages.find(img => img.canvasY >= q.canvasY - 30 && img.canvasY <= nextQY + 20);

      if (matchedImg) {
        q.matchedImageName = matchedImg.name;
      }
    }

    // 4. Now extract the actual byte stream from pdfLib for this page's matched images!
    const libPage = pdfLibPages[pageNum - 1];
    const resources = libPage.node.get(PDFName.of('Resources'));

    if (resources instanceof PDFDict) {
      const xObject = resources.get(PDFName.of('XObject'));
      if (xObject instanceof PDFDict) {
        for (const q of pageQuestions) {
          if (!q.matchedImageName) continue;

          // In PDF.js matchedImageName is e.g. "img_p0_2" or "Res1".
          // In PDFDict xObject, the keys correspond to resources
          const pdfjsImgName = q.matchedImageName;

          // Get image streams from xObject in order of pageImages index
          const imgIndexOnPage = pageImages.findIndex(img => img.name === pdfjsImgName);
          if (imgIndexOnPage === -1) continue;

          // Extract streams from PDFDict xObject
          const keys = xObject.keys();
          const imageStreams = [];
          for (const key of keys) {
            const obj = xObject.get(key);
            const stream = pdfLibDoc.context.lookup(obj);
            if (stream instanceof PDFRawStream) {
              const dict = stream.dict;
              if (dict.get(PDFName.of('Subtype')) === PDFName.of('Image')) {
                const w = dict.get(PDFName.of('Width'))?.asNumber?.();
                const h = dict.get(PDFName.of('Height'))?.asNumber?.();
                if (w > 50 && h > 30) {
                  imageStreams.push({ key: key.name, bytes: stream.contents, dict, w, h });
                }
              }
            }
          }

          // Skip header logo stream if present (usually index 0 on page if logo is an XObject stream)
          // If there are N images on page and N questions, or N+1 streams (logo + N question images):
          let streamToUse = null;
          if (imageStreams.length === pageQuestions.length + 1) {
            // First stream is logo, streams 1..N match question images 0..N-1
            streamToUse = imageStreams[imgIndexOnPage + 1];
          } else if (imageStreams.length === pageQuestions.length) {
            streamToUse = imageStreams[imgIndexOnPage];
          } else if (imageStreams[imgIndexOnPage]) {
            streamToUse = imageStreams[imgIndexOnPage];
          }

          if (streamToUse) {
            const fileName = `q_${q.qNum}.jpg`;
            const filePath = path.join(outputDir, fileName);

            const filter = streamToUse.dict.get(PDFName.of('Filter'))?.toString();
            if (filter?.includes('DCTDecode')) {
              fs.writeFileSync(filePath, streamToUse.bytes);
              questionImageMap[q.qNum] = `assets/questoes/${fileName}`;
            } else {
              try {
                await sharp(streamToUse.bytes, {
                  raw: { width: streamToUse.w, height: streamToUse.h, channels: 3 }
                }).jpeg().toFile(filePath);
                questionImageMap[q.qNum] = `assets/questoes/${fileName}`;
              } catch (e) {
                console.log(`Error converting q${q.qNum}:`, e.message);
              }
            }
          }
        }
      }
    }
  }

  console.log(`Matched and saved images for ${Object.keys(questionImageMap).length} questions!`);
  console.log("Sample mapped questions:", Object.entries(questionImageMap).slice(0, 15));

  fs.writeFileSync('/tmp/exact_q_map.json', JSON.stringify(questionImageMap, null, 2));
}

mapPdfImagesAccurately().catch(console.error);
