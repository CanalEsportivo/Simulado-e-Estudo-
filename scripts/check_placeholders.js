import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

function getHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(fileBuffer).digest('hex');
}

async function checkPlaceholders() {
  const dir = path.join(process.cwd(), 'public', 'assets', 'questoes');

  const hashes = {};
  for (let i = 1; i <= 316; i++) {
    const filePath = path.join(dir, `imagem_${i}.jpg`);
    if (fs.existsSync(filePath)) {
      const hash = getHash(filePath);
      hashes[i] = hash;
    }
  }

  const hashCounts = {};
  Object.values(hashes).forEach(h => {
    hashCounts[h] = (hashCounts[h] || 0) + 1;
  });

  console.log("Hash frequencies across all 316 questions:", hashCounts);

  // Find which question numbers share the placeholder hash
  const placeholderHash = Object.entries(hashCounts).find(([_, count]) => count > 5)?.[0];
  if (placeholderHash) {
    const placeholderQs = Object.entries(hashes).filter(([_, h]) => h === placeholderHash).map(([q]) => parseInt(q));
    console.log(`Questions with placeholder image (${placeholderQs.length} total):`, placeholderQs);
  }
}

checkPlaceholders().catch(console.error);
