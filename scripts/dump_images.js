import fs from 'fs';
import path from 'path';
import { PDFDocument, PDFName, PDFRawStream } from 'pdf-lib';
import sharp from 'sharp';

async function extractAllImages() {
  const pdfBuffer = fs.readFileSync('/tmp/tvde.pdf');
  const pdfDoc = await PDFDocument.load(pdfBuffer);

  const outputDir = path.join(process.cwd(), 'public', 'assets', 'questoes');
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });

  const enumeratedObjects = pdfDoc.context.enumerateIndirectObjects();
  let count = 0;
  const imageList = [];

  for (const [ref, obj] of enumeratedObjects) {
    if (obj instanceof PDFRawStream) {
      const { dict } = obj;
      const subtype = dict.get(PDFName.of('Subtype'));
      if (subtype === PDFName.of('Image')) {
        const width = dict.get(PDFName.of('Width'))?.asNumber?.();
        const height = dict.get(PDFName.of('Height'))?.asNumber?.();
        const filter = dict.get(PDFName.of('Filter'))?.toString();

        // Check if it's a traffic situation image (Width is typically around 278 and Height around 184)
        if (width > 200 && height > 100) {
          count++;
          const bytes = obj.contents;
          const fileName = `raw_img_${count}_w${width}_h${height}.jpg`;
          const filePath = path.join(outputDir, fileName);
          
          // If DCTDecode (JPEG), write directly
          if (filter?.includes('DCTDecode')) {
            fs.writeFileSync(filePath, bytes);
            imageList.push({ count, ref: ref.tag, width, height, filter, path: filePath, type: 'jpeg' });
          } else {
            // Convert raw flate bytes using sharp
            try {
              const image = sharp(bytes, {
                raw: {
                  width,
                  height,
                  channels: 3
                }
              });
              const pngPath = path.join(outputDir, `raw_img_${count}_w${width}_h${height}.png`);
              await image.toFile(pngPath);
              imageList.push({ count, ref: ref.tag, width, height, filter, path: pngPath, type: 'png' });
            } catch (err) {
              console.log(`Could not sharp convert ref ${ref.tag}:`, err.message);
            }
          }
        }
      }
    }
  }

  console.log(`Extracted ${imageList.length} question images!`);
  fs.writeFileSync('/tmp/extracted_list.json', JSON.stringify(imageList, null, 2));
}

extractAllImages().catch(console.error);
