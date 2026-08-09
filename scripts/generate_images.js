import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to generate rich vector SVG road situations for each question
function generateSVG(qNum, title, desc, type) {
  let innerElements = '';

  switch (type) {
    case 'overtaking_black_car':
      innerElements = `
        <!-- Road -->
        <rect x="0" y="80" width="600" height="240" fill="#3a4750"/>
        <line x1="0" y1="200" x2="600" y2="200" stroke="#f4d03f" stroke-width="4" stroke-dasharray="25,15"/>
        <line x1="0" y1="85" x2="600" y2="85" stroke="#ffffff" stroke-width="6"/>
        <line x1="0" y1="315" x2="600" y2="315" stroke="#ffffff" stroke-width="6"/>

        <!-- Own Car (Bottom lane / Behind) -->
        <g transform="translate(100, 230)">
          <rect x="0" y="0" width="80" height="40" rx="10" fill="#2c3e50" stroke="#1a252f" stroke-width="2"/>
          <rect x="15" y="5" width="30" height="30" rx="5" fill="#aeb6bf"/>
          <circle cx="15" cy="-2" r="4" fill="#f39c12"/>
          <circle cx="15" cy="42" r="4" fill="#f39c12"/>
          <text x="40" y="25" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">EU</text>
        </g>

        <!-- Black Car Ahead -->
        <g transform="translate(320, 230)">
          <rect x="0" y="0" width="80" height="40" rx="10" fill="#17202a" stroke="#000" stroke-width="2"/>
          <rect x="15" y="5" width="30" height="30" rx="5" fill="#566573"/>
          <circle cx="75" cy="5" r="4" fill="#e74c3c"/>
          <circle cx="75" cy="35" r="4" fill="#e74c3c"/>
        </g>
      `;
      break;

    case 'roundabout':
      innerElements = `
        <!-- Roundabout center -->
        <rect x="0" y="0" width="600" height="350" fill="#2e7d32"/>
        <circle cx="300" cy="175" r="140" fill="#3a4750" stroke="#ffffff" stroke-width="4"/>
        <circle cx="300" cy="175" r="70" fill="#4caf50" stroke="#ffffff" stroke-width="4"/>

        <!-- Roundabout Sign -->
        <g transform="translate(80, 260)">
          <circle cx="0" cy="0" r="28" fill="#1769aa" stroke="#ffffff" stroke-width="3"/>
          <path d="M-10,-10 A15,15 0 0,1 10,-10 L7,-4 M10,10 A15,15 0 0,1 -10,10 L-7,4 M-12,5 A15,15 0 0,1 -12,-5 L-6,-7" stroke="#ffffff" stroke-width="4" fill="none" stroke-linecap="round"/>
        </g>

        <!-- Vehicle in roundabout -->
        <g transform="translate(320, 80) rotate(45)">
          <rect x="0" y="0" width="60" height="30" rx="8" fill="#7f8c8d"/>
          <text x="30" y="20" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">Veículo</text>
        </g>
      `;
      break;

    case 'sign_speed_limit':
      innerElements = `
        <!-- Landscape Background -->
        <rect x="0" y="0" width="600" height="220" fill="#81d4fa"/>
        <rect x="0" y="220" width="600" height="130" fill="#a5d6a7"/>
        <polygon points="0,350 250,220 350,220 600,350" fill="#546e7a"/>
        <line x1="300" y1="220" x2="300" y2="350" stroke="#fbc02d" stroke-width="4" stroke-dasharray="15,10"/>

        <!-- Speed Sign -->
        <g transform="translate(480, 160)">
          <rect x="-4" y="0" width="8" height="120" fill="#78909c"/>
          <circle cx="0" cy="0" r="45" fill="#ffffff" stroke="#d32f2f" stroke-width="12"/>
          <text x="0" y="14" fill="#000000" font-size="42" font-weight="900" font-family="Arial, sans-serif" text-anchor="middle">${desc || '100'}</text>
        </g>
      `;
      break;

    case 'sign_yield':
      innerElements = `
        <!-- Road Intersection -->
        <rect x="0" y="0" width="600" height="350" fill="#81c784"/>
        <rect x="0" y="130" width="600" height="90" fill="#455a64"/>
        <rect x="250" y="0" width="100" height="350" fill="#455a64"/>

        <!-- Yield Sign -->
        <g transform="translate(200, 260)">
          <rect x="-4" y="0" width="8" height="70" fill="#78909c"/>
          <polygon points="0,0 -35,-60 35,-60" fill="#ffffff" stroke="#d32f2f" stroke-width="8"/>
        </g>
      `;
      break;

    case 'sign_stop':
      innerElements = `
        <!-- Intersection -->
        <rect x="0" y="0" width="600" height="350" fill="#a5d6a7"/>
        <rect x="0" y="140" width="600" height="80" fill="#37474f"/>
        <line x1="220" y1="140" x2="220" y2="220" stroke="#ffffff" stroke-width="10"/>

        <!-- STOP Sign -->
        <g transform="translate(180, 270)">
          <rect x="-4" y="0" width="8" height="60" fill="#78909c"/>
          <polygon points="-25,-25 -10,-40 10,-40 25,-25 25,0 10,15 -10,15 -25,0" fill="#d32f2f" stroke="#ffffff" stroke-width="3"/>
          <text x="0" y="-10" fill="#ffffff" font-size="14" font-weight="900" font-family="Arial" text-anchor="middle">STOP</text>
        </g>
      `;
      break;

    case 'weather_rain_fog':
      innerElements = `
        <!-- Rainy / Foggy Road -->
        <rect x="0" y="0" width="600" height="350" fill="#455a64"/>
        <polygon points="100,350 260,150 340,150 500,350" fill="#263238"/>
        <line x1="300" y1="150" x2="300" y2="350" stroke="#ffee58" stroke-width="4" stroke-dasharray="20,15"/>

        <!-- Fog overlay -->
        <rect x="0" y="0" width="600" height="200" fill="url(#fogGradient)" opacity="0.85"/>
        
        <!-- Car Tail lights in fog -->
        <g transform="translate(270, 180)">
          <rect x="0" y="0" width="60" height="30" rx="6" fill="#1c2833"/>
          <circle cx="10" cy="25" r="6" fill="#ff1744" filter="blur(2px)"/>
          <circle cx="50" cy="25" r="6" fill="#ff1744" filter="blur(2px)"/>
        </g>
      `;
      break;

    case 'pedestrian_crossing':
      innerElements = `
        <!-- Road with Zebra Crossing -->
        <rect x="0" y="0" width="600" height="350" fill="#37474f"/>
        <g fill="#ffffff">
          <rect x="200" y="40" width="30" height="270"/>
          <rect x="250" y="40" width="30" height="270"/>
          <rect x="300" y="40" width="30" height="270"/>
          <rect x="350" y="40" width="30" height="270"/>
        </g>
        
        <!-- Pedestrian Symbol -->
        <circle cx="280" cy="100" r="12" fill="#ffb74d"/>
        <path d="M280,112 L280,150 L265,180 M280,150 L295,180 M280,125 L260,140 M280,125 L300,135" stroke="#ffb74d" stroke-width="6" stroke-linecap="round"/>
      `;
      break;

    case 'traffic_light_yellow':
      innerElements = `
        <!-- Road -->
        <rect x="0" y="0" width="600" height="350" fill="#455a64"/>
        
        <!-- Traffic Light Post -->
        <g transform="translate(450, 80)">
          <rect x="0" y="0" width="50" height="140" rx="10" fill="#212121" stroke="#424242" stroke-width="3"/>
          <circle cx="25" cy="25" r="16" fill="#37474f"/>
          <circle cx="25" cy="70" r="18" fill="#ffb300" stroke="#ffe082" stroke-width="4"/>
          <circle cx="25" cy="115" r="16" fill="#37474f"/>
        </g>
      `;
      break;

    default:
      innerElements = `
        <!-- Generic Road Situation -->
        <rect x="0" y="0" width="600" height="350" fill="#37474f"/>
        <line x1="0" y1="175" x2="600" y2="175" stroke="#ffeb3b" stroke-width="6" stroke-dasharray="30,20"/>
        
        <g transform="translate(150, 200)">
          <rect x="0" y="0" width="90" height="45" rx="10" fill="#1e88e5"/>
          <text x="45" y="28" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">Veículo A</text>
        </g>

        <g transform="translate(360, 110)">
          <rect x="0" y="0" width="90" height="45" rx="10" fill="#e53935"/>
          <text x="45" y="28" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">Veículo B</text>
        </g>
      `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="100%" height="100%">
    <defs>
      <linearGradient id="fogGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#eceff1" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#cfd8dc" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Background card Frame -->
    <rect x="0" y="0" width="600" height="350" fill="#f8fafc" rx="12"/>

    ${innerElements}

    <!-- Top Badge -->
    <rect x="15" y="15" width="140" height="28" rx="14" fill="#102a43" opacity="0.9"/>
    <text x="85" y="33" fill="#ffffff" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle">Questão ${qNum}</text>
  </svg>`;
}

// Mapping of questions with images and their type
const imageQuestions = {
  21: { type: 'overtaking_black_car', desc: 'Ultrapassagem' },
  22: { type: 'default', desc: 'Aumentar velocidade' },
  23: { type: 'default', desc: 'Sinal de Estacionamento P' },
  24: { type: 'default', desc: 'Ponte / Estreitamento' },
  25: { type: 'default', desc: 'Mudança de Direção à Esquerda' },
  26: { type: 'default', desc: 'Veículo Pesado' },
  27: { type: 'default', desc: 'Ultrapassagem de Pesado' },
  28: { type: 'default', desc: 'Veículo à Retaguarda' },
  29: { type: 'default', desc: 'Ultrapassagem pela Direita' },
  30: { type: 'default', desc: 'Manobra de Ultrapassagem' },
  31: { type: 'default', desc: 'Veículo de Mercadorias' },
  32: { type: 'default', desc: 'Duas Vias no mesmo sentido' },
  33: { type: 'default', desc: 'Sinalização Proibitiva' },
  34: { type: 'default', desc: 'Motociclo a 60 km/h' },
  35: { type: 'default', desc: 'Ultrapassagem em Ponte' },
  36: { type: 'sign_speed_limit', desc: 'Proibição Pesados' },
  37: { type: 'default', desc: 'Linha Descontínua' },
  38: { type: 'default', desc: 'Posicionamento na Faixa' },
  39: { type: 'default', desc: 'Ultrapassagem em Ponte' },
  40: { type: 'default', desc: 'Local com Obstáculo' },
  41: { type: 'default', desc: 'Sinal de Pisca à Esquerda' },
  42: { type: 'default', desc: 'Sinalização Luminosa' },
  43: { type: 'default', desc: 'Auto-estrada' },
  44: { type: 'default', desc: 'Linha Descontínua' },
  45: { type: 'default', desc: 'Faixa de Rodagem' },
  46: { type: 'default', desc: 'Ultrapassagem Correcta' },
  47: { type: 'roundabout', desc: 'Entrada na Rotunda com Velocípede' },
  48: { type: 'roundabout', desc: 'Rotunda e Velocípede' },
  49: { type: 'roundabout', desc: 'Entrada em Rotunda' },

  // Roundabouts group
  50: { type: 'roundabout', desc: 'Serviço de Urgência em Rotunda' },
  51: { type: 'roundabout', desc: 'Escolta Policial em Rotunda' },
  52: { type: 'roundabout', desc: 'Prioridade na Rotunda' },
  53: { type: 'roundabout', desc: 'Prioridade ao Entrar' },
  54: { type: 'roundabout', desc: 'Ciclista na Rotunda' },
  55: { type: 'roundabout', desc: 'Velocípede em Rotunda' },
  56: { type: 'roundabout', desc: 'Velocípede e Prioritários' },
  57: { type: 'roundabout', desc: 'Regra da Rotunda' },
  58: { type: 'roundabout', desc: 'Cedência em Rotunda' },
  59: { type: 'roundabout', desc: 'Veículos Prioritários' },
  60: { type: 'roundabout', desc: 'Veículo de Duas Rodas' },
  61: { type: 'roundabout', desc: 'Veículo Cinzento na Rotunda' },
  62: { type: 'roundabout', desc: 'Automóvel Ligeiro na Rotunda' },
  63: { type: 'default', desc: 'Visibilidade em Rua Estreita' },
  64: { type: 'default', desc: 'Passagem Estreita em Aldeia' },
  65: { type: 'default', desc: 'Velocidade em Rua Estreita' },
  66: { type: 'sign_speed_limit', desc: '120' },

  // Speed & Weather group
  67: { type: 'weather_rain_fog', desc: 'Nevoeiro e 120 km/h' },
  68: { type: 'weather_rain_fog', desc: 'Uso de Luzes em Nevoeiro' },
  69: { type: 'sign_speed_limit', desc: '100' },
  70: { type: 'weather_rain_fog', desc: 'Piso Molhado e Aderência' },
  71: { type: 'weather_rain_fog', desc: 'Distância de Segurança na Chuva' },
  72: { type: 'default', desc: 'Estrada Secundária' },
  73: { type: 'weather_rain_fog', desc: 'Distância do Veículo à Frente' },
  74: { type: 'weather_rain_fog', desc: 'Veículo em Sentido Contrário' },
  75: { type: 'weather_rain_fog', desc: 'Aderência ao Piso' },
  76: { type: 'weather_rain_fog', desc: 'Uso do Travão do Motor' },
  77: { type: 'weather_rain_fog', desc: 'Redução de Velocidade' },
  78: { type: 'weather_rain_fog', desc: 'Visibilidade Insuficiente à Noite' },
  79: { type: 'weather_rain_fog', desc: 'Condução Noturna' },
  80: { type: 'weather_rain_fog', desc: 'Condução Noturna com Luzes' },
  81: { type: 'weather_rain_fog', desc: 'Trânsito Intenso Noturno' },
  82: { type: 'weather_rain_fog', desc: 'Luzes em Condução Noturna' },
  83: { type: 'default', desc: 'Visibilidade na Via' },
  84: { type: 'sign_speed_limit', desc: '120' },
  85: { type: 'sign_yield', desc: 'Cedência de Passagem 50' },
  86: { type: 'sign_yield', desc: 'Sinal Vertical de Cedência' },
  87: { type: 'sign_yield', desc: 'Sinalização Vertical' },

  // Signs group
  88: { type: 'sign_yield', desc: 'Sinal Triangular' },
  89: { type: 'sign_yield', desc: 'Cruzamento com Via' },
  90: { type: 'sign_yield', desc: 'Entroncamento' },
  91: { type: 'sign_yield', desc: 'Prioridade no Entroncamento' },
  92: { type: 'sign_speed_limit', desc: '70' },
  93: { type: 'default', desc: 'Proibição de Paragem/Estacionamento' },
  94: { type: 'default', desc: 'Sinal de Proibição' },
  95: { type: 'default', desc: 'Estreitamento de Faixa' },
  96: { type: 'default', desc: 'Estreitamento de Rodagem' },
  97: { type: 'default', desc: 'Curva Perigosa' },
  98: { type: 'default', desc: 'Aproximação de Vias' },
  99: { type: 'default', desc: 'Sentido Único' },
  100: { type: 'default', desc: 'Pórtico de Sinalização' },
  101: { type: 'default', desc: 'Telefone SOS 300m' },
  102: { type: 'default', desc: 'Utilização de Telefone SOS' },
  103: { type: 'default', desc: 'Sinal de Indicação SOS' },
  104: { type: 'default', desc: 'Parque de Campismo' },
  105: { type: 'default', desc: 'Via de Sentido Único' },
  106: { type: 'default', desc: 'Veículo a Sair de Propriedade' },
  107: { type: 'default', desc: 'Passagem Estreita' },
  108: { type: 'default', desc: 'Veículo de Tração Animal' },

  // Priority group
  109: { type: 'default', desc: 'Mudar de Direção à Direita' },
  110: { type: 'default', desc: 'Cruzamento com Carroça e Bici' },
  111: { type: 'default', desc: 'Ambulância e Prioridade' },
  112: { type: 'default', desc: 'Passagem de Nível' },
  113: { type: 'default', desc: 'Saída de Parque de Estacionamento' },
  114: { type: 'default', desc: 'Saída de Prédio Particular' },
  115: { type: 'default', desc: 'Saída de Prédio com Velocípede' },
  116: { type: 'sign_yield', desc: 'Cedência a Todos os Veículos' },
  117: { type: 'default', desc: 'Caminho Particular' },
  118: { type: 'default', desc: 'Cruzamento com Pesado' },
  119: { type: 'default', desc: 'Via Estreita em Inclinação' },
  120: { type: 'sign_stop', desc: 'Cruzamento com STOP' },
  121: { type: 'default', desc: 'Veículo à Frente' },
  122: { type: 'default', desc: 'Mudança de Direção' },
  123: { type: 'default', desc: 'Cruzamento com Ligeiro e Bici' },
  124: { type: 'sign_yield', desc: 'Sinal de Cedência' },
  125: { type: 'default', desc: 'Passagem Estreita Prioritária' },
  126: { type: 'default', desc: 'Interseção com Motociclo' },

  // Group 13210+
  241: { type: 'sign_speed_limit', desc: 'Proibição de Ultrapassagem Pesados' },
  242: { type: 'default', desc: 'Pisca à Esquerda' },
  243: { type: 'default', desc: 'Ultrapassagem de Ligeiro' },
  244: { type: 'default', desc: 'Ultrapassagem de Camião' },
  245: { type: 'default', desc: 'Local com Ilha/Sinal' },
  246: { type: 'roundabout', desc: 'Motociclo na Rotunda' },
  247: { type: 'roundabout', desc: 'Entrada na Rotunda' },

  // Group 13220+
  252: { type: 'roundabout', desc: 'Veículo Cinzento' },
  253: { type: 'roundabout', desc: 'Bicicleta na Rotunda' },

  // Group 13230+
  258: { type: 'default', desc: 'Rua Estreita' },
  260: { type: 'sign_speed_limit', desc: '40' },
  261: { type: 'sign_stop', desc: 'Paragem Obrigatória STOP' },

  // Group 13240+
  263: { type: 'default', desc: 'Sinal de Curva' },
  264: { type: 'default', desc: 'Sinal P Estacionamento' },
  265: { type: 'default', desc: 'Entrada de Túnel' },
  266: { type: 'traffic_light_yellow', desc: 'Sinal Amarelo Intermitente' },
  269: { type: 'sign_yield', desc: 'Sinal de Triângulo' },
  270: { type: 'default', desc: 'Cruzamento sem Sinalização' },
  271: { type: 'pedestrian_crossing', desc: 'Passadeira de Peões' },
  272: { type: 'default', desc: 'Saída de Caminho Particular' },
  273: { type: 'sign_yield', desc: 'Entroncamento' },

  // Group 13250+
  274: { type: 'default', desc: 'Sinal de Prioridade' },
  275: { type: 'default', desc: 'Passagem de Nível' },
  276: { type: 'sign_yield', desc: 'Cedência de Passagem' },
};

console.log('Generating SVG images for TVDE questions...');

let generatedCount = 0;
for (const [qStr, info] of Object.entries(imageQuestions)) {
  const qNum = parseInt(qStr, 10);
  const svgContent = generateSVG(qNum, `Questão ${qNum}`, info.desc, info.type);
  const filePath = path.join(outputDir, `q${qNum}.svg`);
  fs.writeFileSync(filePath, svgContent, 'utf8');
  generatedCount++;
}

console.log(`Successfully generated ${generatedCount} SVG images in ${outputDir}!`);

// Now update src/data/questions.ts
const questionsTsPath = path.join(process.cwd(), 'src', 'data', 'questions.ts');
let questionsCode = fs.readFileSync(questionsTsPath, 'utf8');

// Parse the QUESTIONS array from the ts file
const questionsArrayMatch = questionsCode.match(/export const QUESTIONS: Question\[\] = (\[[\s\S]*\]);/);

if (questionsArrayMatch) {
  const questionsObj = eval(questionsArrayMatch[1]);
  
  // Attach imageUrl to matching questions
  questionsObj.forEach(q => {
    if (imageQuestions[q.number]) {
      q.imageUrl = `/images/q${q.number}.svg`;
      delete q.hasImageNotice;
    }
  });

  const updatedTsContent = `export interface Alternative {
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
  hasImageNotice?: boolean;
  imageUrl?: string;
}

export const QUESTIONS: Question[] = ${JSON.stringify(questionsObj, null, 2)};
`;

  fs.writeFileSync(questionsTsPath, updatedTsContent, 'utf8');
  console.log(`Successfully updated src/data/questions.ts with imageUrl paths!`);
} else {
  console.error('Could not parse QUESTIONS array from questions.ts');
}
