import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { createCanvas } from 'canvas';
import sharp from 'sharp';

async function extractExactQuestionImages() {
  const pdfPath = '/tmp/tvde.pdf';
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  console.log(`Extracting images from ${doc.numPages} PDF pages...`);

  const outputDir = path.join(process.cwd(), 'public', 'assets', 'questoes');
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });

  const questionImageMap = {}; // questionNumber -> imageUrl

  // Group 2 (Sinalização, Ultrapassagem, etc.) where images exist:
  // Questions 21 to 126, and 241 to 276
  const imageQuestionNumbers = new Set([
    ...Array.from({ length: 106 }, (_, i) => i + 21),   // 21-126
    ...Array.from({ length: 36 }, (_, i) => i + 241)   // 241-276
  ]);

  let totalCropped = 0;

  for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 2.0 }); // High resolution

    // Render page to canvas
    const canvas = createCanvas(viewport.width, viewport.height);
    const ctx = canvas.getContext('2d');

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };

    await page.render(renderContext).promise;

    // Get text content to locate question Y coordinates
    const textContent = await page.getTextContent();
    const items = textContent.items;

    // Find question headers, e.g. "21 - (id: 9101"
    const questionsOnPage = [];
    for (const item of items) {
      const text = item.str.trim();
      const match = text.match(/^(\d{1,3})\s*-\s*\(id:/);
      if (match) {
        const qNum = parseInt(match[1], 10);
        // Calculate Y position in canvas coordinates (PDF origin is bottom-left)
        const [,,,,, y] = item.transform;
        const canvasY = viewport.height - (y * 2.0);
        questionsOnPage.push({ qNum, pdfY: y, canvasY });
      }
    }

    // Sort questions by top-to-bottom position on the page
    questionsOnPage.sort((a, b) => a.canvasY - b.canvasY);

    if (questionsOnPage.length === 0) continue;

    const pageBuffer = canvas.toBuffer('image/png');

    for (let i = 0; i < questionsOnPage.length; i++) {
      const q = questionsOnPage[i];
      if (!imageQuestionNumbers.has(q.qNum)) continue;

      // The question block starts at q.canvasY.
      // In IMT PDFs, the question image is located right next to/below the question title/text
      // The image area is typically on the right or middle of the question block.
      // Let's crop the question block area carefully.
      const topY = Math.max(0, Math.floor(q.canvasY - 10));
      const nextTopY = i < questionsOnPage.length - 1 ? questionsOnPage[i + 1].canvasY : viewport.height - 40;
      const blockHeight = Math.max(100, Math.floor(nextTopY - topY - 15));

      // In IMT TVDE PDF layout, the image occupies the right/center portion of the question item.
      // Let's crop the image region from x = 50% to 95% of width, or full width of the question box
      const cropX = Math.floor(viewport.width * 0.48);
      const cropW = Math.floor(viewport.width * 0.48);

      const fileName = `q${q.qNum}.png`;
      const filePath = path.join(outputDir, fileName);

      try {
        await sharp(pageBuffer)
          .extract({
            left: cropX,
            top: topY,
            width: cropW,
            height: Math.min(blockHeight, viewport.height - topY)
          })
          .trim() // Remove white borders around the image
          .toFile(filePath);

        questionImageMap[q.qNum] = `/assets/questoes/${fileName}`;
        totalCropped++;
      } catch (err) {
        console.error(`Failed to crop question ${q.qNum}:`, err.message);
      }
    }
  }

  console.log(`Successfully extracted and saved ${totalCropped} original PDF question images!`);

  // Update questions.ts
  const questionsTsPath = path.join(process.cwd(), 'src', 'data', 'questions.ts');
  let questionsCode = fs.readFileSync(questionsTsPath, 'utf8');
  const match = questionsCode.match(/export const QUESTIONS: Question\[\] = (\[[\s\S]*\]);/);

  if (match) {
    const qList = eval(match[1]);
    let matchedCount = 0;
    qList.forEach(q => {
      if (questionImageMap[q.number]) {
        q.imageUrl = questionImageMap[q.number];
        matchedCount++;
      } else {
        delete q.imageUrl;
      }
      delete q.hasImageNotice;
    });

    const newTs = `export interface Alternative {
  letter: string;
  text: string;
}

export interface Question {
  idx: number;
  number: number;
  group: string;
  question: string;
  alternatives: Alternative[];
  answer: string;
  imageUrl?: string;
}

export const QUESTIONS: Question[] = ${JSON.stringify(qList, null, 2)};
`;
    fs.writeFileSync(questionsTsPath, newTs, 'utf8');
    console.log(`Updated questions.ts: attached original PDF images to ${matchedCount} questions!`);
  }
}

extractExactQuestionImages().catch(console.error);
