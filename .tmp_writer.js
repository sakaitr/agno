
const fs2 = require('fs');
const c = fs2.readFileSync('C:/agno/.tmp_content.txt', 'utf8');
fs2.writeFileSync('C:/agno/apps/web/components/sections/AgnoDesignSection.tsx', c, 'utf8');
console.log('done');
