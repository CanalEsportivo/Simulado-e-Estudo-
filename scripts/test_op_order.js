import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

async function testOperatorOrder() {
  const data = new Uint8Array(fs.readFileSync('/tmp/tvde.pdf'));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  for (let pageNum = 1; pageNum <= 10; pageNum++) {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.0 });
    const textContent = await page.getTextContent();

    // Collect questions
    const pageQuestions = [];
    for (const item of textContent.items) {
      const text = item.str.trim();
      const match = text.match(/^(\d{1,3})\s*-\s*\(\s*id:/);
      if (match) {
        const [,,,,, y] = item.transform;
        const canvasY = viewport.height - y;
        pageQuestions.push({ qNum: parseInt(match[1], 10), canvasY });
      }
    }
    pageQuestions.sort((a, b) => a.canvasY - b.canvasY);

    // Collect image operator calls
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

    console.log(`\n=== PAGE ${pageNum} ===`);
    console.log(`Questions (${pageQuestions.length}):`, pageQuestions.map(q => `Q${q.qNum} (Y=${q.canvasY.toFixed(1)})`));
    console.log(`Images (${pageImages.length}):`, pageImages.map(img => `${img.name} (Y=${img.canvasY.toFixed(1)}, W=${img.imgW.toFixed(1)}, H=${img.imgH.toFixed(1)})`));
  }
}

testOperatorOrder().catch(console.error);
