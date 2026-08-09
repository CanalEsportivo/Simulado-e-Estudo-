import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function inspectImageTypes() {
  const dir = path.join(process.cwd(), 'public', 'assets', 'questoes');
  const files = fs.readdirSync(dir);

  console.log(`Total files in public/assets/questoes: ${files.length}`);

  const q1_20 = [];
  const q21_126 = [];

  for (let i = 1; i <= 20; i++) {
    const filePath = path.join(dir, `imagem_${i}.jpg`);
    if (fs.existsSync(filePath)) {
      const meta = await sharp(filePath).metadata();
      q1_20.push({ q: i, w: meta.width, h: meta.h, size: fs.statSync(filePath).size });
    }
  }

  for (let i = 21; i <= 30; i++) {
    const filePath = path.join(dir, `imagem_${i}.jpg`);
    if (fs.existsSync(filePath)) {
      const meta = await sharp(filePath).metadata();
      q21_126.push({ q: i, w: meta.width, h: meta.h, size: fs.statSync(filePath).size });
    }
  }

  console.log("Sample Q1-20 images:", q1_20);
  console.log("Sample Q21-30 traffic images:", q21_126);
}

inspectImageTypes().catch(console.error);
