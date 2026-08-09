import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import sharp from 'sharp';

async function processPdf() {
  const data = new Uint8Array(fs.readFileSync('/tmp/tvde.pdf'));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  console.log(`Total PDF Pages: ${doc.numPages}`);

  const outputDir = path.join(process.cwd(), 'public', 'assets', 'questoes');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let totalQuestionsFound = 0;
  const pageMappings = [];

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map((item) => item.str).join(' ');

    // Match question numbers on page, e.g. "Questão 21", "21.", "Questão nº 21" etc.
    const qMatches = [...pageText.matchAll(/(?:Questão\s*(?:nº\s*)?|Q\.\s*|^\s*)(\d{1,3})/gi)];
    
    // Check if page has operator objects (images)
    const ops = await page.getOperatorList();
    const imageNames = [];
    for (let j = 0; j < ops.fnArray.length; j++) {
      if (ops.fnArray[j] === pdfjsLib.OPS.paintImageXObject || ops.fnArray[j] === pdfjsLib.OPS.paintInlineImageXObject) {
        imageNames.push(ops.argsArray[j][0]);
      }
    }

    pageMappings.push({
      page: i,
      textSnippet: pageText.slice(0, 150),
      imageCount: imageNames.length,
      imageNames
    });
  }

  console.log("Page processing complete!");
  fs.writeFileSync('/tmp/page_map.json', JSON.stringify(pageMappings, null, 2));
  console.log("Saved page map to /tmp/page_map.json");
}

processPdf().catch(console.error);
