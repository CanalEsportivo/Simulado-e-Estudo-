import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import sharp from 'sharp';

async function testExtractPage5() {
  const data = new Uint8Array(fs.readFileSync('/tmp/tvde.pdf'));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  const page = await doc.getPage(5);
  const ops = await page.getOperatorList();

  const outputDir = path.join(process.cwd(), 'public', 'assets', 'questoes');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Question headers on page 5 in order: Q21, Q22, Q23, Q24, Q25, Q26
  const qNums = [21, 22, 23, 24, 25, 26];
  let qIdx = 0;

  for (let i = 0; i < ops.fnArray.length; i++) {
    if (ops.fnArray[i] === pdfjsLib.OPS.paintImageXObject) {
      const imgName = ops.argsArray[i][0];

      await new Promise((resolve) => {
        page.objs.get(imgName, async (imgData) => {
          if (imgData && imgData.width > 200 && imgData.height > 100) {
            const qNum = qNums[qIdx++];
            console.log(`Extracting Q${qNum} from ${imgName} (${imgData.width}x${imgData.height}, kind: ${imgData.kind})...`);

            const channels = imgData.kind === 2 ? 3 : imgData.kind === 3 ? 4 : 1;
            const buffer = Buffer.from(imgData.data);

            const filePath = path.join(outputDir, `q${qNum}.jpg`);
            await sharp(buffer, {
              raw: {
                width: imgData.width,
                height: imgData.height,
                channels: channels
              }
            }).jpeg().toFile(filePath);

            console.log(`-> Successfully saved ${filePath}!`);
          }
          resolve();
        });
      });
    }
  }
}

testExtractPage5().catch(console.error);
