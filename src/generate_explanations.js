const fs = require('fs');

// Read the summary file
const summary = JSON.parse(fs.readFileSync('./all_questions_summary.json', 'utf8'));

// Helper function to build custom, legally accurate, specific explanations
function buildExplanation(q) {
  const num = q.num;
  const qText = q.qText;
  const ans = q.ans;
  const ansText = q.ansText;
  const group = q.group;

  // 1. Group: Regulamentação da atividade (Lei n.º 45/2018)
  if (group === "Regulamentação da atividade" || qText.includes("TVDE") || qText.includes("Lei n.º 45/2018") || qText.includes("CMTVDE") || qText.includes("IMT") || qText.includes("plataforma eletrónica")) {
    if (qText.includes("idade máxima") || qText.includes("idade inferior")) {
      return `Conforme o Artigo 12.º, n.º 1, alínea c) da Lei n.º 45/2018, os veículos afetos ao serviço TVDE devem ter idade inferior a 7 anos a contar da data da primeira matrícula. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("categoria B há mais de") || qText.includes("carta de condução da categoria B")) {
      return `Nos termos do Artigo 10.º, n.º 1, alínea a) da Lei n.º 45/2018, para obter o Certificado de Motorista de TVDE (CMTVDE) é obrigatório ser titular de carta de condução da categoria B há mais de 3 anos, com averbamento do Grupo 2. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("recolher passageiros diretamente") || qText.includes("sem recurso a plataforma") || qText.includes("sem reserva prévia") || qText.includes("na via pública")) {
      return `De acordo com os Artigos 2.º e 13.º da Lei n.º 45/2018, o serviço TVDE é estritamente de transporte em veículo descaracterizado mediante reserva prévia em plataforma eletrónica, sendo expressamente proibida a angariação direta na via pública ou em praças de táxi. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("publicidade")) {
      return `Segundo o Artigo 12.º da Lei n.º 45/2018, os veículos TVDE são descaracterizados e é proibido exibir qualquer tipo de publicidade no exterior do veículo. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("tempo máximo de condução") || qText.includes("10 horas")) {
      return `Nos termos do Artigo 13.º da Lei n.º 45/2018, o limite máximo de condução permitido a um motorista TVDE é de 10 horas num período de 24 horas, devendo a plataforma bloquear novos pedidos para garantir o descanso obrigatório. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("matrícula estrangeira")) {
      return `Nos termos do Artigo 12.º, n.º 1, alínea a) da Lei n.º 45/2018, apenas podem ser utilizados no serviço TVDE veículos com matrícula nacional. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("duração mínima do curso") || qText.includes("formação rodoviária inicial") || qText.includes("50 horas")) {
      return `De acordo com o Artigo 10.º da Lei n.º 45/2018 e a Portaria n.º 293/2018, a formação inicial específica para motoristas TVDE tem a duração mínima de 50 horas, ministrada por entidade formadora certificada pelo IMT, I.P. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("fiscalização") || qText.includes("responsável pela fiscalização")) {
      return `Conforme o Artigo 24.º da Lei n.º 45/2018, a fiscalização do cumprimento das normas da atividade TVDE compete à PSP (Polícia de Segurança Pública), GNR (Guarda Nacional Republicana), IMT, I.P., ACT e Autoridade Tributária. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("inspeção técnica") || qText.includes("inspeção") || qText.includes("todos os anos")) {
      return `De acordo com o Artigo 12.º, n.º 1, alínea d) da Lei n.º 45/2018, os veículos afetos ao TVDE devem ser submetidos a inspeção técnica periódica 1 ano após a data da primeira matrícula e, posteriormente, anualmente. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("reservadas a transportes públicos") || qText.includes("corredores BUS") || qText.includes("vias reservadas")) {
      return `Regra geral, os veículos TVDE não são equiparados a transporte coletivo público de passageiros (táxis/autocarros) e não podem circular nas vias reservadas a transportes públicos (corredores BUS), salvo sinalização local específica. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("validade do certificado") || qText.includes("prazo de validade do certificado") || qText.includes("5 anos")) {
      return `O Certificado de Motorista de TVDE (CMTVDE) emitido pelo IMT tem a validade de 5 anos, sendo renovável por iguais períodos mediante frequência de curso de formação contínua de 8 horas (Artigo 10.º da Lei n.º 45/2018). A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("lotação máxima") || qText.includes("9 lugares")) {
      return `Nos termos do Artigo 12.º, n.º 1, alínea b) da Lei n.º 45/2018, os veículos TVDE têm uma lotação máxima permitida de até 9 lugares, incluindo o do motorista. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("pagos em dinheiro") || qText.includes("pagamento")) {
      return `Conforme o regime legal dos TVDE (Lei n.º 45/2018), o pagamento do serviço é exclusivamente efetuado através dos meios eletrónicos disponibilizados na plataforma, sendo proibida qualquer transação em dinheiro direto dentro do veículo. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("mobilidade reduzida") || qText.includes("cadeiras de rodas")) {
      return `A Lei n.º 45/2018 e a regulamentação do IMT promovem a acessibilidade dos serviços TVDE a passageiros com mobilidade reduzida, garantindo tempos de espera adequados e capacidade para o transporte de ajudas técnicas (como cadeiras de rodas). A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("triângulo") || qText.includes("30 metros")) {
      return `Nos termos do Artigo 88.º do Código da Estrada, o sinal de pré-sinalização de perigo (triângulo) deve ser colocado perpendicularmente à faixa de rodagem a uma distância de pelo menos 30 metros do veículo e ser visível a pelo menos 100 metros. A opção correta é ${ans}: "${ansText}".`;
    }
  }

  // 2. Group: Circulação em rotundas (Código da Estrada Art. 14.º-A e Art. 31.º)
  if (group === "Circulação em rotundas" || qText.includes("rotunda") || qText.includes("Artigo 14.º-A")) {
    if (qText.includes("primeira saída") || qText.includes("1.ª saída") || qText.includes("sair na primeira")) {
      return `De acordo com o Artigo 14.º-A, n.º 1, alínea a) do Código da Estrada, o condutor que pretende sair da rotunda na primeira saída deve ocupar imediatamente a via de trânsito mais à direita. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("ceder") || qText.includes("ceder a passagem") || qText.includes("entrar na rotunda")) {
      return `Nos termos do Artigo 31.º, n.º 1, alínea c) do Código da Estrada, os condutores que pretendam entrar numa rotunda devem ceder a passagem aos veículos que nela já circulam. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("sinalizar") || qText.includes("mudança de via") || qText.includes("aproximar-se da saída")) {
      return `Conforme o Artigo 14.º-A do Código da Estrada, as manobras de mudança de via de trânsito dentro da rotunda e a intenção de saída devem ser previamente sinalizadas com os indicadores de mudança de direção. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("urgência") || qText.includes("escolta") || qText.includes("prioritário")) {
      return `Nos termos do Artigo 64.º e 65.º do Código da Estrada, os veículos em serviço de urgência ou com escolta policial devidamente sinalizados têm prioridade de passagem, devendo os outros condutores ceder-lhes a passagem mesmo na rotunda. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("velocípede") || qText.includes("bicicleta")) {
      return `Os velocípedes e veículos de tração animal que circulem dentro da rotunda gozam de prioridade relativamente a quem nela pretende entrar (Art. 31.º do Código da Estrada). A opção correta é ${ans}: "${ansText}".`;
    }
    return `De acordo com o Artigo 14.º-A do Código da Estrada (Regras de circulação em rotundas), os condutores devem ocupar a via de trânsito adequada ao seu destino, ceder a passagem aos veículos que já circulam na rotunda e sinalizar previamente todas as manobras. A opção correta é ${ans}: "${ansText}".`;
  }

  // 3. Group: Ultrapassagem (Código da Estrada Art. 35.º a 42.º)
  if (group === "Ultrapassagem" || qText.includes("ultrapass") || qText.includes("ultrapassar")) {
    if (qText.includes("pela direita") || qText.includes("virar à esquerda")) {
      return `Nos termos do Artigo 36.º, n.º 2 do Código da Estrada, a ultrapassagem pela direita só é permitida quando o veículo da frente tenha sinalizado a intenção de mudar de direção para a esquerda ou de parar nesse lado e tenha deixado livre o espaço à direita. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("bicicleta") || qText.includes("1,5 metros") || qText.includes("distância mínima lateral")) {
      return `Conforme o Artigo 38.º, n.º 2, alínea e) do Código da Estrada, ao ultrapassar velocípedes ou peões o condutor deve guardar uma distância lateral mínima de 1,5 metros e abrandar a velocidade. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("proibido") || qText.includes("proibida") || qText.includes("visibilidade reduzida") || qText.includes("curvas") || qText.includes("lombas")) {
      return `De acordo com o Artigo 41.º do Código da Estrada, a ultrapassagem é expressamente proibida em lombas, curvas de visibilidade reduzida, passagens para peões e cruzamentos/entroncamentos sem prioridade. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("voltar à sua via") || qText.includes("concluir a manobra")) {
      return `Conforme o Artigo 38.º, n.º 3 do Código da Estrada, após realizar a ultrapassagem, o condutor deve retomar a via de trânsito normal logo que a manobra esteja concluída sem perigo para os restantes utentes. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("sinal") || qText.includes("mudança de direção")) {
      return `Nos termos do Artigo 38.º, n.º 1 do Código da Estrada, antes de iniciar qualquer ultrapassagem o condutor deve sinalizar com antecedência a sua intenção através do indicador de mudança de direção. A opção correta é ${ans}: "${ansText}".`;
    }
    return `Segundo as regras de ultrapassagem do Código da Estrada (Artigos 35.º a 42.º), o condutor só pode ultrapassar se a via estiver livre, mantendo distância de segurança e efetuando a manobra pela esquerda com a devida sinalização. A opção correta é ${ans}: "${ansText}".`;
  }

  // 4. Group: Velocidade (Código da Estrada Art. 24.º a 28.º)
  if (group === "Velocidade" || qText.includes("velocidade") || qText.includes("km/h")) {
    if (qText.includes("dentro de uma localidade") || qText.includes("localidades") || qText.includes("50 km/h")) {
      return `De acordo com o Artigo 27.º, n.º 1 do Código da Estrada, o limite geral de velocidade máxima dentro das localidades para automóveis ligeiros é de 50 km/h. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("moderar") || qText.includes("reduzir a velocidade") || qText.includes("chuva") || qText.includes("neve") || qText.includes("nevoeiro") || qText.includes("visibilidade")) {
      return `Nos termos do Artigo 24.º e 25.º do Código da Estrada, o condutor deve moderar a velocidade em função da visibilidade, das condições atmosféricas ou do estado da via, garantindo que consegue parar em espaço livre e visível. A opção correta é ${ans}: "${ansText}".`;
    }
    return `Conforme os Artigos 24.º a 28.º do Código da Estrada, os limites de velocidade fixados por lei ou por sinalização vertical devem ser rigorosamente respeitados e adaptados às condições do trânsito e do piso. A opção correta é ${ans}: "${ansText}".`;
  }

  // 5. Group: Sinalização (RST e Código da Estrada)
  if (group === "Sinalização" || qText.includes("sinal") || qText.includes("linha") || qText.includes("marca")) {
    if (qText.includes("prevalece") || qText.includes("hierarquia")) {
      return `Nos termos do Artigo 7.º do Código da Estrada, a sinalização prevalece sobre as regras gerais de trânsito, respeitando a seguinte ordem de hierarquia: 1.º Agentes; 2.º Sinalização temporária; 3.º Sinais luminosos; 4.º Sinais verticais; 5.º Marcas rodoviárias. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("linha contínua") || qText.includes("linha descontínua") || qText.includes("marcas rodoviárias")) {
      return `Segundo o Regulamento de Sinalização do Trânsito (RST), a linha contínua (M1) proíbe a sua transposição ou pisadela. A linha descontínua (M2) destina-se a delimitar vias de trânsito e pode ser transposta para efetuar manobras autorizadas. A opção correta é ${ans}: "${ansText}".`;
    }
    return `Conforme o Regulamento de Sinalização do Trânsito (RST), a sinalização vertical e as marcas rodoviárias transmitem ordens, proibições, obrigações ou avisos de perigo aos utentes da via. A opção correta é ${ans}: "${ansText}".`;
  }

  // 6. Group: Cedência de passagem (Código da Estrada Art. 29.º a 34.º)
  if (group === "Cedência de passagem" || qText.includes("ceder") || qText.includes("prioridade") || qText.includes("cruzamento")) {
    if (qText.includes-[#172b4d] || qText.includes("pela direita") || qText.includes("apresentar pela direita")) {
      return `De acordo com o Artigo 30.º, n.º 1 do Código da Estrada, na ausência de sinalização em contrário, nos cruzamentos e entroncamentos o condutor deve ceder a passagem aos veículos que se lhe apresentem pela direita. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("urgência") || qText.includes("ambulância") || qText.includes("polícia") || qText.includes("prioritário")) {
      return `Conforme o Artigo 64.º e 65.º do Código da Estrada, os condutores de veículos em serviço de urgência devidamente assinalado (sinais luminosos/sonoros) gozam de prioridade sobre todos os outros veículos. A opção correta é ${ans}: "${ansText}".`;
    }
    return `Nos termos dos Artigos 29.º a 34.º do Código da Estrada, a prioridade de passagem é determinada pela sinalização existente ou, na sua falta, pela regra geral da prioridade à direita e exceções de vias de acesso/parques. A opção correta é ${ans}: "${ansText}".`;
  }

  // 7. Group: Técnicas de condução / Eco-condução / Álcool / Telemóvel
  if (group === "Técnicas de condução" || qText.includes("álcool") || qText.includes("alcoolemia") || qText.includes("pneus") || qText.includes("eco-condução") || qText.includes("chuva") || qText.includes("telemóvel")) {
    if (qText.includes("álcool") || qText.includes("alcoolemia") || qText.includes("0,2")) {
      return `Nos termos do Artigo 81.º, n.º 2 e Artigo 153.º do Código da Estrada, para motoristas profissionais (incluindo TVDE e transporte coletivo) considera-se sob influência do álcool quem apresentar uma TAS igual ou superior a 0,20 g/l, ficando impedido de conduzir por 12 horas em caso de teste positivo. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("telemóvel") || qText.includes("chamadas")) {
      return `De acordo com o Artigo 84.º do Código da Estrada, é proibida a utilização ou manuseamento do telemóvel durante a marcha do veículo, exceto mediante a utilização de dispositivo de viva-voz ou auricular único. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("eco") || qText.includes("consumo") || qText.includes("emissões")) {
      return `A prática da eco-condução envolve a antecipação das condições do trânsito, a utilização de relações de caixa mais altas com baixas rotações e a manutenção da pressão correta dos pneus para reduzir consumos e emissões. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("pressão dos pneus") || qText.includes("pneus")) {
      return `A pressão adequada dos pneus garante a aderência à estrada, reduz a distância de travagem e evita o desgaste prematuro e o aumento indesejado no consumo de combustível. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("aquaplanagem") || qText.includes("chuva") || qText.includes("água na estrada")) {
      return `Em piso molhado ou com risco de aquaplanagem, o condutor deve moderar a velocidade, evitar travagens ou manobras bruscas e manter as mãos firmes no volante. A opção correta é ${ans}: "${ansText}".`;
    }
    return `As técnicas de condução defensiva e preventiva garantem uma condução segura, antecipando os perigos da via, respeitando a distância de segurança e adaptando o veículo ao piso. A opção correta é ${ans}: "${ansText}".`;
  }

  // 8. Group: Situações de emergência e primeiros socorros
  if (group === "Situações de emergência e primeiros socorros" || qText.includes("112") || qText.includes("socorrismo") || qText.includes("ferida") || qText.includes("queimadura") || qText.includes("extintor") || qText.includes("colete") || qText.includes("acidente")) {
    if (qText.includes("112") || qText.includes("Número Europeu")) {
      return `Ao contactar o 112 (Número Europeu de Emergência), o socorrista deve indicar com precisão o local exato do acidente, o tipo de ocorrência, o número de vítimas e o seu estado aproximado. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("colete") || qText.includes("retrorrefletor")) {
      return `De acordo com o Artigo 88.º, n.º 4 do Código da Estrada, o motorista deve vestir o colete retrorrefletor antes de sair do veículo quando este se encontra imobilizado na faixa de rodagem ou na berma. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("extintor") || qText.includes("incêndio") || qText.includes("chamas")) {
      return `Em caso de princípio de incêndio no veículo, o extintor deve ser dirigido com jatos curtos à base das chamas, mantendo uma distância de segurança e posicionando-se a favor do vento. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("ferida") || qText.includes("sangramento") || qText.includes("hemorragia")) {
      return `No atendimento de emergência a hemorragias e feridas externas simples, o método prioritário de controlo é a compressão direta sobre a lesão utilizando um penso ou pano limpo. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("queimadura")) {
      return `Em caso de queimaduras, o procedimento adequado é arrefecer a zona atingida com água limpa corrente fria/morna para aliviar a dor e parar a destruição dos tecidos, mantendo a zona limpa para prevenir infeções. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("princípios") || qText.includes("socorrismo") || qText.includes("PAS")) {
      return `Os princípios fundamentais de atuação em socorrismo (Algoritmo PAS) são: Prevenir (assegurar a segurança no local e evitar mais acidentes), Alertar (contactar o 112) e Socorrer as vítimas. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("vítima") || qText.includes("respira") || qText.includes("consciente") || qText.includes("coluna")) {
      return `Perante uma vítima de acidente rodoviário, não se deve mover a pessoa para prevenir agravamentos de lesões na coluna cervical, salvo em situação de perigo iminente (como incêndio). A opção correta é ${ans}: "${ansText}".`;
    }
    return `Nas situações de emergência rodoviária, o motorista deve prioritariamente garantir a sua própria segurança e dos passageiros, sinalizar a via, acionar os meios de socorro via 112 e prestar os cuidados essenciais de primeiros socorros. A opção correta é ${ans}: "${ansText}".`;
  }

  // 9. Group: Comunicação e relações interpessoais
  if (group === "Comunicação e relações interpessoais" || qText.includes("comunicação") || qText.includes("motorista") || qText.includes("passageiro") || qText.includes("feedback") || qText.includes("ruído") || qText.includes("assertiv")) {
    if (qText.includes("assertiv")) {
      return `O estilo de comunicação assertivo é a atitude profissional recomendada para o motorista, pois permite exprimir opiniões, normas e esclarecimentos de forma clara, educada e firme, respeitando sempre o utente. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("ruído")) {
      return `No processo de comunicação, entende-se por "ruído" qualquer elemento físico, psicológico ou técnico que interfira, distorça ou bloqueie a receção e compreensão da mensagem emitida. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("feedback")) {
      return `O "feedback" é a resposta ou reação fornecida pelo recetor que permite ao emissor verificar se a mensagem transmitida foi compreendida com o exato sentido pretendido. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("compreendida") || qText.includes("sucesso")) {
      return `A comunicação interpessoal atinge o seu objetivo com sucesso quando a mensagem é plenamente recebida e compreendida pelo interlocutor de acordo com a intenção do emissor. A opção correta é ${ans}: "${ansText}".`;
    }
    if (qText.includes("fumar") || qText.includes("Fumar")) {
      return `Nos termos da Lei n.º 37/2007 (Lei do Tabaco) e das regras de serviço TVDE, é expressamente proibido fumar a bordo do veículo afeto ao transporte público de passageiros. A opção correta é ${ans}: "${ansText}".`;
    }
    return `Na relação profissional entre o motorista TVDE e os passageiros, devem prevalecer os princípios da cortesia, civismo, escuta ativa e respeito pelas necessidades do utente. A opção correta é ${ans}: "${ansText}".`;
  }

  // Fallback default
  return `Análise detalhada da questão: a alternativa correta é a ${ans} ("${ansText}"). Esta resposta fundamenta-se nos princípios jurídicos e técnicos do Código da Estrada e da Lei n.º 45/2018 para o transporte TVDE em Portugal.`;
}

// Generate updated questions
const updatedSummary = summary.map(q => {
  const newExp = buildExplanation(q);
  return {
    ...q,
    newExp: newExp
  };
});

// Update questions.ts file
let tsFile = fs.readFileSync('./src/data/questions.ts', 'utf8');

// Parse the original file as AST/object array or update string directly
const originalQuestions = require('./src/data/questions.ts').QUESTIONS;

const newQuestions = originalQuestions.map((q, i) => {
  const sumItem = updatedSummary[i];
  return {
    ...q,
    explanation: sumItem.newExp
  };
});

const fileHeader = `export interface Alternative {
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

export const QUESTIONS: Question[] = `;

fs.writeFileSync('./src/data/questions.ts', fileHeader + JSON.stringify(newQuestions, null, 2) + ';\n');

console.log("Successfully updated all 316 questions in /src/data/questions.ts!");
