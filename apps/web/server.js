'use strict';
const path = require('path');
const fs = require('fs');

const PORT = parseInt(process.env.PORT || '3000', 10);
process.env.PORT     = String(PORT);
process.env.HOSTNAME = '0.0.0.0';
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Deploy sonrasi olasiliklar:
// A) standalone icerigi dogrudan app root'a yuklendiyse:
//    - apps/web/server.js (monorepo standalone)
//    - server.js          (flat standalone)
// B) Kaynak dizinden test ediliyorsa:
//    - .next/standalone/apps/web/server.js
//    - .next/standalone/server.js
const candidates = [
  path.join(__dirname, 'apps', 'web', 'server.js'), // deploy: monorepo standalone
  path.join(__dirname, 'server.js'),                // deploy: flat standalone — self (skip ile ele alinir)
  path.join(__dirname, '.next', 'standalone', 'apps', 'web', 'server.js'), // kaynak dizin test
  path.join(__dirname, '.next', 'standalone', 'server.js'),                // kaynak dizin test
];

// Kendimizi (bu dosyayi) atlayarak ilk gecerli entry'i bul
const self = __filename;
const entry = candidates.find(p => p !== self && fs.existsSync(p));

if (!entry) {
  console.error('[agno] HATA: Next.js standalone server bulunamadi.');
  console.error('[agno] Cozum: bash setup.sh calistirip deploy/ klasorunu yukleyin.');
  process.exit(1);
}

process.chdir(path.dirname(entry));
console.log('[agno] Sunucu baslatiliyor — port ' + PORT);
require(entry);
