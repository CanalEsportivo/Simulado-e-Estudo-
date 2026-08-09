import fs from 'fs';
import path from 'path';

const EXPLANATIONS = {
  1: "No exercício da atividade de TVDE, o condutor deve primar pela cortesia e pelo profissionalismo. Falar de forma educada e audível com os passageiros quando necessário é um comportamento profissional aceitável, ao contrário do uso de linguagem imprópria ou de ofensas.",
  2: "A comunicação humana é considerada plenamente bem-sucedida quando a mensagem transmitida pelo emissor é devidamente compreendida pelo recetor com o mesmo significado pretendido.",
  3: "Cada indivíduo descodifica e interpreta a informação com base no seu próprio quadro de referência e perceções pessoais.",
  4: "O objetivo fundamental de qualquer ato comunicativo é atingir a finalidade ou o objetivo pretendido pelo emissor ao transmitir a mensagem.",
  5: "Para ser um bom ouvinte (escuta ativa), deve-se evitar interromper precocemente ou emitir opiniões precipitadas antes de compreender totalmente a mensagem da outra pessoa.",
  21: "A ultrapassagem deve ser realizada pela esquerda. É proibido ultrapassar em locais com visibilidade reduzida ou imediatamente antes/sobre passagens para peões e cruzamentos/entroncamentos sem prioridade.",
  22: "A manobra de ultrapassagem exige que o condutor verifique previamente se a faixa de rodagem se encontra livre e se nenhum condutor que o siga iniciou manobra idêntica.",
  23: "Antes de ultrapassar, o condutor deve certificar-se de que pode voltar a ocupar a via da direita sem perigo para os restantes utentes.",
  24: "A sinalização da intenção de ultrapassar deve ser feita com antecedência através dos luzes de mudança de direção (piscas).",
  25: "Nas lombas e curvas de visibilidade reduzida é estritamente proibida a ultrapassagem, salvo se existirem duas ou mais vias no mesmo sentido.",
  130: "A eco-condução estimula a transição para modelos de mobilidade energeticamente sustentáveis e eficientes, promovendo a utilização racional dos recursos energéticos e das renováveis nos transportes rodoviários.",
  131: "Nos termos do Código da Estrada (Art. 153.º), o condutor que apresente resultado positivo na pesquisa de álcool fica impedido de conduzir pelo período de 12 horas, salvo se se submeter a contraprova com resultado negativo.",
  132: "A taxa de álcool no sangue (TAS) para motoristas TVDE e outros condutores em regime especial é de 0,20 g/l, aplicando-se tolerância zero por razões de segurança profissional."
};

async function addExplanations() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'questions.ts');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const match = fileContent.match(/export const QUESTIONS: Question\[\] = (\[[\s\S]*\]);/);
  if (!match) return;

  const QUESTIONS = eval(match[1]);

  let added = 0;
  QUESTIONS.forEach((q) => {
    if (EXPLANATIONS[q.number]) {
      q.explanation = EXPLANATIONS[q.number];
      added++;
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
  explanation?: string;
}

export const QUESTIONS: Question[] = ${JSON.stringify(QUESTIONS, null, 2)};
`;

  fs.writeFileSync(filePath, newTs, 'utf8');
  console.log(`Updated ${added} sample explanations in questions.ts!`);
}

addExplanations().catch(console.error);
