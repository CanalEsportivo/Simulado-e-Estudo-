import fs from 'fs';
import path from 'path';
import { PDFDocument, PDFName, PDFDict, PDFRawStream } from 'pdf-lib';

async function mapPageImageStreams() {
  const pdfBuffer = fs.readFileSync('/tmp/tvde.pdf');
  const pdfDoc = await PDFDocument.load(pdfBuffer);
  const pages = pdfDoc.getPages();

  console.log(`Processing ${pages.length} pages...`);

  const outputDir = path.join(process.cwd(), 'public', 'assets', 'questoes');
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });

  const questionMap = {};
  let imageCounter = 1;

  for (let pageIdx = 0; pageIdx < pages.length; pageIdx++) {
    const page = pages[pageIdx];
    const pageNode = page.node;
    const resources = pageNode.get(PDFName.of('Resources'));

    if (!(resources instanceof PDFDict)) continue;

    const xObject = resources.get(PDFName.of('XObject'));
    if (!(xObject instanceof PDFDict)) continue;

    // Get list of XObjects on this page
    const keys = xObject.keys();
    const pageImages = [];

    for (const key of keys) {
      const obj = xObject.get(key);
      const stream = pdfDoc.context.lookup(obj);
      if (stream instanceof PDFRawStream) {
        const dict = stream.dict;
        const subtype = dict.get(PDFName.of('Subtype'));
        if (subtype === PDFName.of('Image')) {
          const width = dict.get(PDFName.of('Width'))?.asNumber?.();
          const height = dict.get(PDFName.of('Height'))?.asNumber?.();
          const filter = dict.get(PDFName.of('Filter'))?.toString();

          // Traffic images in this PDF are JPEG (/DCTDecode) with width around 278 and height around 184
          if (width > 200 && height > 100 && filter?.includes('DCTDecode')) {
            pageImages.push({
              key: key.name,
              width,
              height,
              bytes: stream.contents
            });
          }
        }
      }
    }

    if (pageImages.length > 0) {
      console.log(`Page ${pageIdx + 1}: found ${pageImages.length} traffic images`);
      pageImages.forEach((img, idx) => {
        const fileName = `imagem_${imageCounter}.jpg`;
        const filePath = path.join(outputDir, fileName);
        fs.writeFileSync(filePath, img.bytes);
        console.log(`  -> Saved ${fileName} (${img.width}x${img.height})`);
        imageCounter++;
      });
    }
  }

  console.log(`Total extracted traffic JPEG images: ${imageCounter - 1}`);
}

mapPageImageStreams().catch(console.error);
