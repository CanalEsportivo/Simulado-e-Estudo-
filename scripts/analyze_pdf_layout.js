import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

async function analyzePdfPages() {
  const data = new Uint8Array(fs.readFileSync('/tmp/tvde.pdf'));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  console.log(`PDF Loaded: ${doc.numPages} pages.`);

  for (let pageNum = 1; pageNum <= 15; pageNum++) {
    const page = await doc.getPage(pageNum);
    const textContent = await page.getTextContent();
    const viewport = page.getViewport({ scale: 1.0 });

    const items = textContent.items;
    
    // Find question titles with coordinates
    const questions = [];
    for (const item of items) {
      const text = item.str.trim();
      const match = text.match(/^(\d{1,3})\s*-\s*\(\s*id:/);
      if (match) {
        const [,,,,, y] = item.transform;
        const [,,,, x] = item.transform;
        questions.push({ qNum: parseInt(match[1], 10), x, y, canvasY: viewport.height - y });
      }
    }

    // Find operator objects (images) with coordinates if possible
    const ops = await page.getOperatorList();
    // In PDF.js, transform matrix for image operator is set before paintImageXObject call!
    let currentTransform = null;
    const imageOps = [];

    for (let i = 0; i < ops.fnArray.length; i++) {
      const fn = ops.fnArray[i];
      const args = ops.argsArray[i];

      if (fn === pdfjsLib.OPS.transform) {
        currentTransform = args; // [a, b, c, d, e, f] where e=x, f=y
      } else if (fn === pdfjsLib.OPS.paintImageXObject) {
        imageOps.push({
          imgName: args[0],
          transform: currentTransform,
          pdfY: currentTransform ? currentTransform[5] : null,
          pdfX: currentTransform ? currentTransform[4] : null,
          canvasY: currentTransform ? viewport.height - currentTransform[5] : null
        });
      }
    }

    console.log(`--- PAGE ${pageNum} (Height: ${viewport.height}) ---`);
    console.log(`Questions found (${questions.length}):`, questions.map(q => `Q${q.qNum} at Y=${q.canvasY.toFixed(1)}`));
    console.log(`Images found (${imageOps.length}):`, imageOps.map(img => `${img.imgName} at Y=${img.canvasY?.toFixed(1)} X=${img.pdfX?.toFixed(1)}`));
  }
}

analyzePdfPages().catch(console.error);
