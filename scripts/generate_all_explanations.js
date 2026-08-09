import fs from 'fs';
import path from 'path';

function generateExplanation(q) {
  const correctOpt = q.alternatives.find(a => a.letter === q.answer);
  const correctText = correctOpt ? correctOpt.text : '';

  // Tailored rules per category/topic
  switch (q.group) {
    case 'Comunicação e relações interpessoais':
      if (q.question.includes('comunicação tem sucesso') || q.question.includes('sucesso')) {
        return `A comunicação é considerada eficaz quando a mensagem enviada pelo emissor é devidamente recebida e compreendida pelo recetor com o exato significado pretendido.`;
      }
      if (q.question.includes('TVDE') || q.question.includes('motorista')) {
        return `No exercício profissional de TVDE, o motorista deve manter sempre a postura cívica, o respeito e a urbanidade, garantindo a satisfação e segurança do passageiro. A resposta correta ("${correctText}") reflete as boas práticas regulamentadas.`;
      }
      return `De acordo com os princípios de comunicação interpessoal e atitude profissional, a opção correta é a ${q.answer}: "${correctText}". Esta postura assegura a clareza na transmissão de informação e a boa relação com os utentes.`;

    case 'Ultrapassagem':
      if (q.question.includes('proibido') || q.question.includes('Proibido')) {
        return `Nos termos do Artigo 38.º e 41.º do Código da Estrada, a ultrapassagem é proibida em locais de visibilidade reduzida (lombas, curvas acentuadas) e imediatamente antes ou sobre passagens de peões e cruzamentos sem prioridade.`;
      }
      if (q.question.includes('esquerda') || q.question.includes('direita')) {
        return `Regra geral (Artigo 36.º do Código da Estrada), a ultrapassagem deve ser efetuada pela esquerda, exceto quando o veículo da frente tenha sinalizado a intenção de mudar de direção para a esquerda.`;
      }
      return `Conforme as regras de ultrapassagem do Código da Estrada (Art. 36.º a 42.º), antes de iniciar a manobra o condutor deve certificar-se de que a via está livre e sinalizar antecedência. A alternativa correta é a ${q.answer}: "${correctText}".`;

    case 'Circulação em rotundas':
      return `De acordo com o Artigo 14.º-A do Código da Estrada (regras de circulação em rotundas), o condutor deve ocupar a via de trânsito mais conveniente ao seu destino. Para sair na primeira saída deve ocupar a via da direita; para as restantes saídas deve ocupar a via da esquerda até aproximar-se da saída desejada. Alternativa correta: ${q.answer}.`;

    case 'Velocidade':
      if (q.question.includes('localidade') || q.question.includes('dentro')) {
        return `Nos termos do Artigo 27.º do Código da Estrada, dentro das localidades os limites gerais de velocidade são de 50 km/h para ligeiros de passageiros, salvo sinalização em contrário.`;
      }
      if (q.question.includes('autoestrada') || q.question.includes('auto-estrada')) {
        return `O limite máximo geral de velocidade nas autoestradas para automóveis ligeiros de passageiros é de 120 km/h e o limite mínimo é de 50 km/h (Artigo 27.º do Código da Estrada).`;
      }
      return `Nos termos dos limites de velocidade e adequação à intensidade do trânsito e visibilidade (Artigos 24.º e 27.º do Código da Estrada), a resposta correta é a ${q.answer}: "${correctText}".`;

    case 'Sinalização':
      return `Conforme o Regulamento de Sinalização do Trânsito (RST), a sinalização prevalece sobre as regras gerais de prioridade. A alternativa correta é a ${q.answer}: "${correctText}".`;

    case 'Cedência de passagem':
      if (q.question.includes('direita')) {
        return `Nos termos do Artigo 30.º do Código da Estrada, na ausência de sinalização em contrário, em cruzamentos e entroncamentos o condutor deve ceder a passagem aos veículos que se lhe apresentem pela direita.`;
      }
      return `Nos termos das regras de cedência de passagem do Código da Estrada (Art. 29.º a 32.º), a alternativa correta é a ${q.answer}: "${correctText}".`;

    case 'Técnicas de condução':
      if (q.question.includes('álcool') || q.question.includes('TAS')) {
        return `Para condutores profissionais (incluindo TVDE e transportes coletivos), a legislação prevê tolerância reduzida/zero (TAS máxima permitida de 0,20 g/l), com coimas e sanções graves em caso de incumprimento.`;
      }
      if (q.question.includes('eco') || q.question.includes('combustível')) {
        return `A condução ecológica (eco-condução) envolve antecipar o trânsito, usar engrenagens mais altas, evitar travagens e acelerações bruscas, reduzindo significativamente o consumo e as emissões poluentes.`;
      }
      return `De acordo com as boas práticas e técnicas de condução defensiva do IMT, a opção correta é a ${q.answer}: "${correctText}".`;

    case 'Regulamentação da atividade':
      return `Em conformidade com a Lei n.º 45/2018 (Regime jurídico da atividade de TVDE em Portugal), a resposta correta é a ${q.answer}: "${correctText}".`;

    case 'Situações de emergência e primeiros socorros':
      if (q.question.includes('112') || q.question.includes('socorro') || q.question.includes('ligar')) {
        return `Em caso de acidente com feridos, deve-se contactar imediatamente o Número Europeu de Emergência (112), indicando o local exato, número de vítimas e gravidade visível.`;
      }
      return `Em situações de primeiros socorros e emergência rodoviária, o princípio fundamental é garantir a segurança do local (sinalizar com o triângulo e colete), socorrer sem mover indevidamente as vítimas e ligar 112. Resposta correta: ${q.answer}.`;

    default:
      return `Fundamentação IMT: A alternativa correta é a ${q.answer} ("${correctText}"), estando em conformidade com as normas regulamentares de segurança rodoviária e tráfego.`;
  }
}

async function populateAll() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'questions.ts');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const match = fileContent.match(/export const QUESTIONS: Question\[\] = (\[[\s\S]*\]);/);
  if (!match) {
    console.error("ARRAY NOT FOUND");
    return;
  }

  const QUESTIONS = eval(match[1]);

  let updatedCount = 0;
  QUESTIONS.forEach(q => {
    if (!q.explanation || q.explanation.length < 15) {
      q.explanation = generateExplanation(q);
      updatedCount++;
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
  console.log(`Successfully populated explanations for all ${QUESTIONS.length} questions (newly updated: ${updatedCount})!`);
}

populateAll().catch(console.error);
