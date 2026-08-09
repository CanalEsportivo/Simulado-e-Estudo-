import fs from 'fs';
import path from 'path';
import { PDFDocument, PDFName, PDFRawStream } from 'pdf-lib';
import sharp from 'sharp';

async function extractImages() {
  const pdfBuffer = fs.readFileSync('/tmp/tvde.pdf');
  const pdfDoc = await PDFDocument.load(pdfBuffer);
  const pages = pdfDoc.getPages();

  console.log(`PDF loaded. Total pages: ${pages.length}`);

  const outputDir = path.join(process.cwd(), 'public', 'assets', 'questoes');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Iterate over PDF indirect objects to extract all XObject images
  const enumeratedObjects = pdfDoc.context.enumerateIndirectObjects();
  let imgCount = 0;
  const images = [];

  for (const [ref, obj] of enumeratedObjects) {
    if (obj instanceof PDFRawStream) {
      const { dict } = obj;
      const subtype = dict.get(PDFName.of('Subtype'));
      if (subtype === PDFName.of('Image')) {
        const width = dict.get(PDFName.of('Width'))?.asNumber?.();
        const height = dict.get(PDFName.of('Height'))?.asNumber?.();
        const filter = dict.get(PDFName.of('Filter'));
        
        console.log(`Image object found: Ref ${ref.tag}, W: ${width}, H: ${height}, Filter: ${filter}`);
        
        // Exclude tiny icons or non-question images (e.g., logo < 50px or tiny decorative elements if any)
        if (width > 60 && height > 60) {
          imgCount++;
          const imgBytes = obj.contents;
          images.push({ ref: ref.tag, width, height, bytes: imgBytes, filter: filter?.toString() });
        }
      }
    }
  }

  console.log(`Total valid images extracted from PDF stream objects: ${images.length}`);
}

extractImages().catch(err => {
  console.error("Error extracting images:", err);
});
