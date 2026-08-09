import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function createSVG(type, qNum, extraText = '') {
  let inner = '';

  switch (type) {
    case 'overtaking_black_car':
      inner = `
        <rect x="0" y="0" width="600" height="350" fill="#78909c"/>
        <rect x="0" y="160" width="600" height="190" fill="#a5d6a7"/>
        <polygon points="0,350 200,160 400,160 600,350" fill="#37474f"/>
        <line x1="300" y1="160" x2="300" y2="350" stroke="#fbc02d" stroke-width="6" stroke-dasharray="25,15"/>
        <!-- Dashboard frame -->
        <path d="M0,320 Q300,280 600,320 L600,350 L0,350 Z" fill="#212121"/>
        <circle cx="300" cy="350" r="140" fill="none" stroke="#333" stroke-width="20"/>
        <!-- Black Car Ahead -->
        <g transform="translate(260, 190)">
          <rect x="0" y="0" width="80" height="40" rx="10" fill="#111111" stroke="#000" stroke-width="2"/>
          <rect x="15" y="5" width="50" height="25" rx="5" fill="#424242"/>
          <circle cx="10" cy="35" r="5" fill="#d32f2f"/>
          <circle cx="70" cy="35" r="5" fill="#d32f2f"/>
          <rect x="25" y="32" width="30" height="6" fill="#fff"/>
        </g>
      `;
      break;

    case 'indicator_left':
      inner = `
        <rect x="0" y="0" width="600" height="350" fill="#90caf9"/>
        <polygon points="0,350 220,160 380,160 600,350" fill="#455a64"/>
        <line x1="300" y1="160" x2="300" y2="350" stroke="#ffffff" stroke-width="6" stroke-dasharray="20,15"/>
        <!-- Car signaling left -->
        <g transform="translate(250, 195)">
          <rect x="0" y="0" width="100" height="50" rx="12" fill="#eceff1" stroke="#b0bec5" stroke-width="3"/>
          <rect x="20" y="6" width="60" height="30" rx="6" fill="#78909c"/>
          <!-- Flashing left indicator -->
          <circle cx="10" cy="40" r="8" fill="#ff9100" stroke="#ff6d00" stroke-width="2"/>
          <path d="M-5,40 L-25,25 M-5,40 L-25,40 M-5,40 L-25,55" stroke="#ff9100" stroke-width="3" stroke-linecap="round"/>
          <circle cx="90" cy="40" r="5" fill="#d32f2f"/>
        </g>
      `;
      break;

    case 'heavy_truck':
      inner = `
        <rect x="0" y="0" width="600" height="350" fill="#81d4fa"/>
        <polygon points="0,350 180,150 420,150 600,350" fill="#37474f"/>
        <line x1="300" y1="150" x2="300" y2="350" stroke="#fbc02d" stroke-width="5" stroke-dasharray="25,15"/>
        <!-- Large Truck -->
        <g transform="translate(230, 140)">
          <rect x="0" y="0" width="140" height="110" fill="#1565c0" rx="6" stroke="#0d47a1" stroke-width="3"/>
          <rect x="10" y="10" width="120" height="80" fill="#1e88e5"/>
          <rect x="20" y="110" width="100" height="20" fill="#212121"/>
          <circle cx="30" cy="125" r="10" fill="#424242"/>
          <circle cx="110" cy="125" r="10" fill="#424242"/>
          <circle cx="15" cy="115" r="6" fill="#d32f2f"/>
          <circle cx="125" cy="115" r="6" fill="#d32f2f"/>
        </g>
      `;
      break;

    case 'roundabout':
      inner = `
        <rect x="0" y="0" width="600" height="350" fill="#81c784"/>
        <circle cx="300" cy="175" r="150" fill="#455a64" stroke="#ffffff" stroke-width="5"/>
        <circle cx="300" cy="175" r="75" fill="#388e3c" stroke="#ffffff" stroke-width="5"/>
        <!-- Roundabout Sign -->
        <g transform="translate(90, 250)">
          <circle cx="0" cy="0" r="30" fill="#1565c0" stroke="#ffffff" stroke-width="4"/>
          <path d="M-12,-12 A18,18 0 0,1 12,-12 L8,-5 M12,12 A18,18 0 0,1 -12,12 L-8,5" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round"/>
        </g>
        <!-- Car inside roundabout -->
        <g transform="translate(350, 100) rotate(60)">
          <rect x="0" y="0" width="65" height="32" rx="8" fill="#e0e0e0" stroke="#757575" stroke-width="2"/>
          <rect x="12" y="4" width="35" height="24" rx="4" fill="#9e9e9e"/>
        </g>
      `;
      break;

    case 'fog_weather':
      inner = `
        <rect x="0" y="0" width="600" height="350" fill="#546e7a"/>
        <polygon points="50,350 250,150 350,150 550,350" fill="#263238"/>
        <line x1="300" y1="150" x2="300" y2="350" stroke="#ffee58" stroke-width="5" stroke-dasharray="20,15"/>
        <!-- Fog overlay -->
        <rect x="0" y="0" width="600" height="240" fill="#eceff1" opacity="0.75"/>
        <!-- Speed sign 120 -->
        <g transform="translate(480, 180)">
          <rect x="-4" y="0" width="8" height="100" fill="#78909c"/>
          <circle cx="0" cy="0" r="38" fill="#ffffff" stroke="#d32f2f" stroke-width="10"/>
          <text x="0" y="12" fill="#000000" font-size="32" font-weight="900" font-family="Arial" text-anchor="middle">120</text>
        </g>
      `;
      break;

    case 'rain_night':
      inner = `
        <rect x="0" y="0" width="600" height="350" fill="#1a237e"/>
        <polygon points="0,350 200,160 400,160 600,350" fill="#0d47a1"/>
        <!-- Car tail lights ahead -->
        <g transform="translate(260, 190)">
          <rect x="0" y="0" width="80" height="40" rx="10" fill="#000000"/>
          <circle cx="12" cy="20" r="10" fill="#ff1744"/>
          <circle cx="68" cy="20" r="10" fill="#ff1744"/>
        </g>
        <!-- Rain streaks -->
        <path d="M50,20 L30,80 M150,10 L130,70 M280,30 L260,90 M400,15 L380,75 M520,40 L500,100" stroke="#90caf9" stroke-width="2" opacity="0.6"/>
      `;
      break;

    case 'sign_yield':
      inner = `
        <rect x="0" y="0" width="600" height="350" fill="#a5d6a7"/>
        <rect x="0" y="140" width="600" height="100" fill="#455a64"/>
        <!-- Yield Sign B1 -->
        <g transform="translate(220, 240)">
          <rect x="-5" y="0" width="10" height="90" fill="#78909c"/>
          <polygon points="0,0 -45,-80 45,-80" fill="#ffffff" stroke="#d32f2f" stroke-width="12"/>
        </g>
        <!-- 50 sign -->
        <g transform="translate(110, 240)">
          <rect x="-4" y="0" width="8" height="90" fill="#78909c"/>
          <circle cx="0" cy="-40" r="30" fill="#ffffff" stroke="#d32f2f" stroke-width="8"/>
          <text x="0" y="-30" fill="#000" font-size="26" font-weight="bold" font-family="Arial" text-anchor="middle">50</text>
        </g>
      `;
      break;

    case 'sign_stop':
      inner = `
        <rect x="0" y="0" width="600" height="350" fill="#a5d6a7"/>
        <rect x="0" y="150" width="600" height="90" fill="#37474f"/>
        <line x1="240" y1="150" x2="240" y2="240" stroke="#ffffff" stroke-width="12"/>
        <!-- STOP Sign B2 -->
        <g transform="translate(180, 260)">
          <rect x="-5" y="0" width="10" height="70" fill="#78909c"/>
          <polygon points="-30,-30 -12,-50 12,-50 30,-30 30,0 12,20 -12,20 -30,0" fill="#b71c1c" stroke="#ffffff" stroke-width="4"/>
          <text x="0" y="-10" fill="#ffffff" font-size="18" font-weight="900" font-family="Arial" text-anchor="middle">STOP</text>
        </g>
      `;
      break;

    case 'sign_no_parking':
      inner = `
        <rect x="0" y="0" width="600" height="350" fill="#b0bec5"/>
        <rect x="0" y="160" width="600" height="130" fill="#546e7a"/>
        <g transform="translate(300, 120)">
          <rect x="-6" y="0" width="12" height="140" fill="#78909c"/>
          <circle cx="0" cy="0" r="55" fill="#1565c0" stroke="#d32f2f" stroke-width="14"/>
          <line x1="-38" y1="-38" x2="38" y2="38" stroke="#d32f2f" stroke-width="14"/>
          <line x1="-38" y1="38" x2="38" y2="-38" stroke="#d32f2f" stroke-width="14"/>
        </g>
      `;
      break;

    case 'sign_sos':
      inner = `
        <rect x="0" y="0" width="600" height="350" fill="#78909c"/>
        <rect x="0" y="180" width="600" height="120" fill="#37474f"/>
        <g transform="translate(300, 130)">
          <rect x="-6" y="0" width="12" height="130" fill="#78909c"/>
          <rect x="-45" y="-55" width="90" height="110" fill="#1565c0" rx="8" stroke="#ffffff" stroke-width="4"/>
          <text x="0" y="-20" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial" text-anchor="middle">SOS</text>
          <path d="M-15,10 C-15,25 15,25 15,10" stroke="#ffffff" stroke-width="6" fill="none"/>
          <text x="0" y="42" fill="#ffffff" font-size="14" font-weight="bold" font-family="Arial" text-anchor="middle">300 m</text>
        </g>
      `;
      break;

    case 'pedestrian_crossing':
      inner = `
        <rect x="0" y="0" width="600" height="350" fill="#37474f"/>
        <g fill="#ffffff">
          <rect x="180" y="30" width="35" height="290"/>
          <rect x="240" y="30" width="35" height="290"/>
          <rect x="300" y="35" width="35" height="290"/>
          <rect x="360" y="30" width="35" height="290"/>
        </g>
        <circle cx="270" cy="110" r="14" fill="#ffb74d"/>
        <path d="M270,124 L270,160 L250,200 M270,160 L290,200 M270,135 L245,150 M270,135 L295,145" stroke="#ffb74d" stroke-width="7" stroke-linecap="round"/>
      `;
      break;

    default:
      inner = `
        <rect x="0" y="0" width="600" height="350" fill="#455a64"/>
        <polygon points="0,350 200,150 400,150 600,350" fill="#263238"/>
        <line x1="300" y1="150" x2="300" y2="350" stroke="#fbc02d" stroke-width="6" stroke-dasharray="20,15"/>
        <g transform="translate(250, 180)">
          <rect x="0" y="0" width="100" height="50" rx="12" fill="#1e88e5" stroke="#1565c0" stroke-width="3"/>
          <text x="50" y="30" fill="#ffffff" font-size="14" font-weight="bold" font-family="Arial" text-anchor="middle">Veículo A</text>
        </g>
      `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="100%" height="100%">
    <rect x="0" y="0" width="600" height="350" fill="#f1f5f9" rx="12"/>
    ${inner}
    <rect x="15" y="15" width="150" height="30" rx="15" fill="#102a43" opacity="0.95"/>
    <text x="90" y="35" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">Questão ${qNum}</text>
  </svg>`;
}

// Map questions to SVG types
const questionMap = {
  21: 'overtaking_black_car', 22: 'overtaking_black_car', 23: 'sign_no_parking', 24: 'default',
  25: 'indicator_left', 26: 'heavy_truck', 27: 'heavy_truck', 28: 'default', 29: 'default',
  30: 'overtaking_black_car', 31: 'heavy_truck', 32: 'default', 33: 'heavy_truck', 34: 'default',
  35: 'default', 36: 'sign_yield', 37: 'default', 38: 'default', 39: 'default', 40: 'default',
  41: 'indicator_left', 42: 'heavy_truck', 43: 'default', 44: 'default', 45: 'default', 46: 'default',
  47: 'roundabout', 48: 'roundabout', 49: 'roundabout', 50: 'roundabout', 51: 'roundabout',
  52: 'roundabout', 53: 'roundabout', 54: 'roundabout', 55: 'roundabout', 56: 'roundabout',
  57: 'roundabout', 58: 'roundabout', 59: 'roundabout', 60: 'roundabout', 61: 'roundabout',
  62: 'roundabout', 63: 'default', 64: 'default', 65: 'default', 66: 'fog_weather',
  67: 'fog_weather', 68: 'fog_weather', 69: 'sign_yield', 70: 'rain_night', 71: 'rain_night',
  72: 'default', 73: 'rain_night', 74: 'rain_night', 75: 'rain_night', 76: 'rain_night',
  77: 'rain_night', 78: 'rain_night', 79: 'rain_night', 80: 'rain_night', 81: 'rain_night',
  82: 'rain_night', 83: 'default', 84: 'fog_weather', 85: 'sign_yield', 86: 'sign_yield',
  87: 'sign_yield', 88: 'sign_yield', 89: 'sign_yield', 90: 'sign_yield', 91: 'sign_yield',
  92: 'sign_yield', 93: 'sign_no_parking', 94: 'sign_no_parking', 95: 'sign_yield',
  96: 'sign_yield', 97: 'sign_yield', 98: 'default', 99: 'default', 100: 'default',
  101: 'sign_sos', 102: 'sign_sos', 103: 'sign_sos', 104: 'default', 105: 'default',
  106: 'default', 107: 'default', 108: 'default', 109: 'default', 110: 'default',
  111: 'default', 112: 'default', 113: 'default', 114: 'default', 115: 'default',
  116: 'sign_yield', 117: 'default', 118: 'heavy_truck', 119: 'default', 120: 'sign_stop',
  121: 'default', 122: 'indicator_left', 123: 'default', 124: 'sign_yield', 125: 'default',
  126: 'default', 241: 'sign_yield', 242: 'indicator_left', 243: 'overtaking_black_car',
  244: 'heavy_truck', 245: 'default', 246: 'roundabout', 247: 'roundabout', 252: 'roundabout',
  253: 'roundabout', 258: 'default', 260: 'sign_yield', 261: 'sign_stop', 263: 'sign_yield',
  264: 'sign_no_parking', 265: 'default', 266: 'default', 269: 'sign_yield', 270: 'default',
  271: 'pedestrian_crossing', 272: 'default', 273: 'sign_yield', 274: 'default',
  275: 'default', 276: 'sign_yield'
};

console.log('Generating vector SVG illustrations for TVDE questions...');

let count = 0;
for (const [qStr, type] of Object.entries(questionMap)) {
  const qNum = parseInt(qStr, 10);
  const svg = createSVG(type, qNum);
  fs.writeFileSync(path.join(outputDir, `q${qNum}.svg`), svg, 'utf8');
  count++;
}

console.log(`Generated ${count} SVG files in public/images!`);

// Update questions.ts
const questionsTsPath = path.join(process.cwd(), 'src', 'data', 'questions.ts');
let questionsCode = fs.readFileSync(questionsTsPath, 'utf8');
const match = questionsCode.match(/export const QUESTIONS: Question\[\] = (\[[\s\S]*\]);/);

if (match) {
  const qList = eval(match[1]);
  qList.forEach(q => {
    if (questionMap[q.number]) {
      q.imageUrl = `/images/q${q.number}.svg`;
      delete q.hasImageNotice;
    } else {
      delete q.imageUrl;
      delete q.hasImageNotice;
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
  hasImageNotice?: boolean;
  imageUrl?: string;
}

export const QUESTIONS: Question[] = ${JSON.stringify(qList, null, 2)};
`;
  fs.writeFileSync(questionsTsPath, newTs, 'utf8');
  console.log('Successfully updated questions.ts with exact image mapping!');
}
