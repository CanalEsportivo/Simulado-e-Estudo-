import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

async function mapPdfImagesToQuestions() {
  const data = new Uint8Array(fs.readFileSync('/tmp/tvde.pdf'));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  console.log(`Document loaded with ${doc.numPages} pages`);

  // We will collect each question found on each page along with the images on that page
  const pageDetails = [];

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const textContent = await page.getTextContent();
    
    // Group text items roughly by Y position to extract questions in order
    const items = textContent.items;
    const pageText = items.map(item => item.str).join(' ');

    // Find all question lines, e.g. "21 - (id:" or "120 - (id:"
    const qMatches = [];
    const regex = /(\d{1,3})\s*-\s*\(\s*id\s*:\s*\d+/g;
    let match;
    while ((match = regex.exec(pageText)) !== null) {
      qMatches.push(parseInt(match[1], 10));
    }

    // Get operator list for image XObjects
    const ops = await page.getOperatorList();
    const imagesOnPage = [];
    for (let j = 0; j < ops.fnArray.length; j++) {
      if (ops.fnArray[j] === pdfjsLib.OPS.paintImageXObject) {
        imagesOnPage.push(ops.argsArray[j][0]);
      }
    }

    pageDetails.push({
      pageNumber: i,
      questions: qMatches,
      images: imagesOnPage
    });
  }

  console.log("PDF Analysis complete. Sample page details:");
  console.log(JSON.stringify(pageDetails.slice(0, 10), null, 2));

  fs.writeFileSync('/tmp/pdf_page_details.json', JSON.stringify(pageDetails, null, 2));
}

mapPdfImagesToQuestions().catch(console.error);
