import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { createCanvas } from 'canvas';

async function renderPage5() {
  const data = new Uint8Array(fs.readFileSync('/tmp/tvde.pdf'));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  const page = await doc.getPage(5); // Page 5 contains Q21-26
  const scale = 2.0;
  const viewport = page.getViewport({ scale });

  const canvas = createCanvas(viewport.width, viewport.height);
  const ctx = canvas.getContext('2d');

  await page.render({ canvasContext: ctx, viewport }).promise;

  fs.writeFileSync('/tmp/page_5.png', canvas.toBuffer('image/png'));
  console.log(`Page 5 rendered to /tmp/page_5.png (${viewport.width}x${viewport.height})`);

  // Let's also print all text items with scale 2.0 coordinates
  const textContent = await page.getTextContent();
  for (const item of textContent.items) {
    const text = item.str.trim();
    if (text.length > 0) {
      const [,,,,, y] = item.transform;
      const [,,,, x] = item.transform;
      const canvasX = x * scale;
      const canvasY = viewport.height - (y * scale);
      if (text.includes('id:')) {
        console.log(`HEADER: "${text}" at X=${canvasX.toFixed(1)}, Y=${canvasY.toFixed(1)}`);
      }
    }
  }

  // Print image operators with scale 2.0 coordinates
  const ops = await page.getOperatorList();
  let currentTransform = null;
  for (let i = 0; i < ops.fnArray.length; i++) {
    const fn = ops.fnArray[i];
    const args = ops.argsArray[i];

    if (fn === pdfjsLib.OPS.transform) {
      currentTransform = args;
    } else if (fn === pdfjsLib.OPS.paintImageXObject) {
      if (currentTransform) {
        const [a, b, c, d, e, f] = currentTransform;
        const imgX = e * scale;
        const imgY = f * scale;
        const imgW = a * scale;
        const imgH = d * scale;
        const canvasY = viewport.height - imgY - imgH; // Top Y in canvas
        console.log(`IMAGE: ${args[0]} at X=${imgX.toFixed(1)}, TopY=${canvasY.toFixed(1)}, W=${imgW.toFixed(1)}, H=${imgH.toFixed(1)}`);
      }
    }
  }
}

renderPage5().catch(console.error);
