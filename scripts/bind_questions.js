import fs from 'fs';
import path from 'path';

const questionsTsPath = path.join(process.cwd(), 'src', 'data', 'questions.ts');
let questionsCode = fs.readFileSync(questionsTsPath, 'utf8');
const match = questionsCode.match(/export const QUESTIONS: Question\[\] = (\[[\s\S]*\]);/);

if (match) {
  const qList = eval(match[1]);

  // Questions with traffic images in IMT PDF
  const targetNumbers = [];
  for (let i = 21; i <= 126; i++) targetNumbers.push(i);
  for (let i = 241; i <= 276; i++) targetNumbers.push(i);

  let imageIndex = 1;
  let mappedCount = 0;

  qList.forEach(q => {
    if (targetNumbers.includes(q.number)) {
      const fileName = `imagem_${imageIndex}.jpg`;
      const fullPath = path.join(process.cwd(), 'public', 'assets', 'questoes', fileName);
      if (fs.existsSync(fullPath)) {
        q.imageUrl = `assets/questoes/${fileName}`;
      } else {
        q.imageUrl = `assets/questoes/imagem_${q.number}.jpg`;
      }
      imageIndex++;
      mappedCount++;
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
  console.log(`Successfully mapped ${mappedCount} questions to original PDF JPEG images in assets/questoes/!`);
}
