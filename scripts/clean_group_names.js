import fs from 'fs';
import path from 'path';

function cleanGroupName(group) {
  let clean = group.replace(/^Grupo\s*\d+\s*[\u2014\u2013-]\s*/i, '');
  clean = clean.replace(/^[0-9][A-Z]\s+/, '');
  clean = clean.trim();
  if (clean === 'Situações de emergência e primeiros') {
    clean = 'Situações de emergência e primeiros socorros';
  }
  return clean;
}

async function cleanQuestionsGroup() {
  const questionsTsPath = path.join(process.cwd(), 'src', 'data', 'questions.ts');
  const fileContent = fs.readFileSync(questionsTsPath, 'utf8');

  const match = fileContent.match(/export const QUESTIONS: Question\[\] = (\[[\s\S]*\]);/);
  if (!match) {
    console.error("Could not find QUESTIONS array in questions.ts");
    return;
  }

  const QUESTIONS = eval(match[1]);

  QUESTIONS.forEach(q => {
    q.group = cleanGroupName(q.group);
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
  console.log("Successfully cleaned all question group names!");
}

cleanQuestionsGroup().catch(console.error);
