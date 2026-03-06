#!/usr/bin/env bash
# ================================================
# AGNO — Lokal Build & Paketleme Scripti
# Kullanim: bash setup.sh
# Bu script LOKAL makinede calistirilir.
# Cikan 'deploy/' klasoru cPanel'e yukleyin.
# ================================================
set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

log()  { echo -e "${GREEN}[agno]${NC} $1"; }
warn() { echo -e "${YELLOW}[warn]${NC} $1"; }
err()  { echo -e "${RED}[hata]${NC} $1"; exit 1; }

echo ''
echo -e "${CYAN}  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄${NC}"
echo -e "${CYAN}    AGNO — Deploy Build v2.0${NC}"
echo -e "${CYAN}  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀${NC}"
echo ''

# ----- 1. Gereksinim kontrolleri -----
command -v node &>/dev/null  || err 'Node.js bulunamadi.'
command -v pnpm &>/dev/null  || err 'pnpm bulunamadi. Kurmak icin: npm install -g pnpm'

NODE_VER=$(node -v | cut -d. -f1 | tr -d 'v')
[ "$NODE_VER" -ge 18 ] || err "Node.js 18+ gerekli. Mevcut: $(node -v)"
log "Node.js $(node -v) + pnpm $(pnpm -v) OK"

# ----- 2. .env kontrolu -----
if [ ! -f apps/web/.env ]; then
  if [ -f apps/web/.env.example ]; then
    cp apps/web/.env.example apps/web/.env
    warn '.env olusturuldu. apps/web/.env icindeki degerleri doldurun, sonra tekrar calistirin.'
    exit 1
  else
    err 'apps/web/.env bulunamadi. Once ortam degiskenlerini tanimlayin.'
  fi
fi
log '.env mevcut OK'

# ----- 3. Bagimliliklar -----
log 'Bagimliliklar yukleniyor...'
pnpm install --frozen-lockfile

# ----- 4. Prisma -----
log 'Prisma client olusturuluyor...'
pnpm --filter @agno/web db:generate

# ----- 5. Build -----
log 'Uygulama derleniyor...'
export NODE_ENV=production
pnpm --filter @agno/web build

# ----- 6. Standalone kontrolu -----
STANDALONE_MONO='apps/web/.next/standalone/apps/web'
STANDALONE_FLAT='apps/web/.next/standalone'

if [ -f "$STANDALONE_MONO/server.js" ]; then
  STANDALONE_ENTRY="$STANDALONE_MONO"
  log "Standalone bulundu (monorepo yolu)"
elif [ -f "$STANDALONE_FLAT/server.js" ]; then
  STANDALONE_ENTRY="$STANDALONE_FLAT"
  log "Standalone bulundu (duz yol)"
else
  err 'Standalone build bulunamadi. next.config.js icinde output: "standalone" var mi?'
fi

# ----- 7. Deploy klasoru olustur -----
log 'Deploy paketi hazirlaniyor...'
rm -rf deploy
mkdir -p deploy

# Standalone icerigi kopyala
cp -r apps/web/.next/standalone/. deploy/

# Statik dosyalar (standalone icine)
if [ -d "$STANDALONE_ENTRY/apps/web" ]; then
  # monorepo yapi
  mkdir -p "deploy/apps/web/.next"
  cp -r apps/web/.next/static "deploy/apps/web/.next/static"
  cp -r apps/web/public       "deploy/apps/web/public"
else
  # duz yapi
  mkdir -p "deploy/.next"
  cp -r apps/web/.next/static "deploy/.next/static"
  cp -r apps/web/public       "deploy/public"
fi

# Baslangic dosyasi (cPanel startup file)
cp apps/web/server.js deploy/server.js

# .env kopyala
cp apps/web/.env deploy/.env
warn 'deploy/.env icindeki NEXTAUTH_URL ve diger URL degiskenlerini sunucu adresinize gore guncelleyin!'

# CloudLinux icin minimal package.json (bagimlilik YOK - standalone kullanir)
cat > deploy/package.json << 'PKGJSON'
{
  "name": "agno-web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "node server.js"
  },
  "engines": {
    "node": ">=18"
  }
}
PKGJSON

log 'package.json (minimal, bagimsiz) olusturuldu'

# ----- Tamamlandi -----
DEPLOY_SIZE=$(du -sh deploy | cut -f1)
echo ''
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}  Build tamamlandi!  Paket boyutu: ${DEPLOY_SIZE}${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ''
echo '  ADIMLAR:'
echo ''
echo '  1. deploy/ klasorunu FTP/SCP ile cPanel uygulama kokune yukleyin'
echo '     Ornek: scp -r deploy/* kullanici@sunucu:/home/kullanici/agno/'
echo ''
echo '  2. cPanel > Setup Node.js App:'
echo '     Node.js version  : 18.x veya 20.x'
echo '     App root         : /home/kullanici/agno   (deploy/ icerigi)'
echo '     Startup file     : server.js'
echo '     App URL          : https://agno.com.tr'
echo ''
echo '  3. "Install NPM packages" tusuna basin'
echo '     (bagimlilik yok, sadece CloudLinux venv olusturur)'
echo ''
echo '  4. "Run NPM Install" veya "Restart" tusuna basin'
echo ''
echo -e "  NOT: node_modules/ dizinine dokunmayin — CloudLinux yonetir.${NC}"
echo '       Uygulama bagimliliklarini .next/standalone/node_modules/ icerir.'
echo ''
