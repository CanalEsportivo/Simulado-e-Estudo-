import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

function getHash(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const fileBuffer = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(fileBuffer).digest('hex');
}

async function finalizeMapping() {
  const dir = path.join(process.cwd(), 'public', 'assets', 'questoes');
  const placeholderHash = '9747e618ee8e823eb6013684bca3cbb4';

  const questionsTsPath = path.join(process.cwd(), 'src', 'data', 'questions.ts');
  const fileContent = fs.readFileSync(questionsTsPath, 'utf8');

  const match = fileContent.match(/export const QUESTIONS: Question\[\] = (\[[\s\S]*\]);/);
  if (!match) {
    console.error("Could not find QUESTIONS array in questions.ts");
    return;
  }

  const QUESTIONS = eval(match[1]);

  let realImageCount = 0;
  let textOnlyCount = 0;

  QUESTIONS.forEach(q => {
    const filePath = path.join(dir, `imagem_${q.number}.jpg`);
    const hash = getHash(filePath);

    if (hash && hash !== placeholderHash) {
      q.imageUrl = `/assets/questoes/imagem_${q.number}.jpg`;
      realImageCount++;
    } else {
      delete q.imageUrl;
      textOnlyCount++;
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
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

export const QUESTIONS: Question[] = ${JSON.stringify(QUESTIONS, null, 2)};
`;

  fs.writeFileSync(questionsTsPath, newTs, 'utf8');

  console.log(`Finalization complete:`);
  console.log(`- Questions WITH real traffic scenario images: ${realImageCount}`);
  console.log(`- Questions WITHOUT images (text-only): ${textOnlyCount}`);
}

finalizeMapping().catch(console.error);
