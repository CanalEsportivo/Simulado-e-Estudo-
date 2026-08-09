import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

async function testPdfJsObjs() {
  const data = new Uint8Array(fs.readFileSync('/tmp/tvde.pdf'));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  const page = await doc.getPage(5); // Page 5
  const ops = await page.getOperatorList();

  console.log("Page 5 operator list retrieved.");
  console.log("Page commonObjs keys:", Object.keys(page.commonObjs || {}));
  console.log("Page objs keys:", Object.keys(page.objs || {}));

  // Find paintImageXObject calls
  for (let i = 0; i < ops.fnArray.length; i++) {
    if (ops.fnArray[i] === pdfjsLib.OPS.paintImageXObject) {
      const imgName = ops.argsArray[i][0];
      console.log("Found paintImageXObject with name:", imgName);

      // Try page.objs.get or page.commonObjs.get
      page.objs.get(imgName, (imgData) => {
        console.log(`Image data for ${imgName}:`, {
          width: imgData?.width,
          height: imgData?.height,
          kind: imgData?.kind,
          hasData: !!imgData?.data,
          dataLen: imgData?.data?.length
        });
      });
    }
  }
}

testPdfJsObjs().catch(console.error);
