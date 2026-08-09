import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import sharp from 'sharp';

async function extractAllQuestionsPerfect() {
  const pdfPath = '/tmp/tvde.pdf';
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  console.log(`Processing ${doc.numPages} pages...`);

  const outputDir = path.join(process.cwd(), 'public', 'assets', 'questoes');
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });

  const questionImageMap = {}; // qNum -> relative path e.g. "assets/questoes/imagem_21.jpg"
  let totalSaved = 0;

  for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.0 });

    // 1. Get question numbers in top-to-bottom vertical position order on this page
    const textContent = await page.getTextContent();
    const questionsOnPage = [];

    for (const item of textContent.items) {
      const text = item.str.trim();
      const match = text.match(/^(\d{1,3})\s*-\s*\(\s*id:/);
      if (match) {
        const [,,,,, y] = item.transform;
        const canvasY = viewport.height - y;
        questionsOnPage.push({
          qNum: parseInt(match[1], 10),
          canvasY
        });
      }
    }

    questionsOnPage.sort((a, b) => a.canvasY - b.canvasY);

    if (questionsOnPage.length === 0) continue;

    // 2. Get operator list and process images in operator sequence
    const ops = await page.getOperatorList();
    let qIndex = 0;

    for (let i = 0; i < ops.fnArray.length; i++) {
      if (ops.fnArray[i] === pdfjsLib.OPS.paintImageXObject) {
        const imgName = ops.argsArray[i][0];

        await new Promise((resolve) => {
          page.objs.get(imgName, async (imgData) => {
            if (imgData && imgData.width > 200 && imgData.height > 100) {
              if (qIndex < questionsOnPage.length) {
                const qNum = questionsOnPage[qIndex].qNum;
                qIndex++;

                const fileName = `imagem_${qNum}.jpg`;
                const filePath = path.join(outputDir, fileName);

                const channels = imgData.kind === 2 ? 3 : imgData.kind === 3 ? 4 : 1;
                const buffer = Buffer.from(imgData.data);

                try {
                  await sharp(buffer, {
                    raw: {
                      width: imgData.width,
                      height: imgData.height,
                      channels: channels
                    }
                  }).jpeg({ quality: 90 }).toFile(filePath);

                  questionImageMap[qNum] = `assets/questoes/${fileName}`;
                  totalSaved++;
                } catch (err) {
                  console.error(`Failed to save question ${qNum}:`, err.message);
                }
              }
            }
            resolve();
          });
        });
      }
    }
  }

  console.log(`Successfully extracted and saved ${totalSaved} images perfectly mapped to their question numbers!`);

  // 3. Update questions.ts
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
    console.log(`Updated questions.ts: correctly bound images for ${matchedCount} questions!`);
  }
}

extractAllQuestionsPerfect().catch(console.error);
