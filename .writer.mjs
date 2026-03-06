import { writeFileSync, readFileSync } from 'fs';

// AgnoDesignSection
const agnoDesign = readFileSync('C:/agno/.agnodesign_src.txt', 'utf8');
writeFileSync('C:/agno/apps/web/components/sections/AgnoDesignSection.tsx', agnoDesign, 'utf8');

// PortfolioSection  
const portfolio = readFileSync('C:/agno/.portfolio_src.txt', 'utf8');
writeFileSync('C:/agno/apps/web/components/sections/PortfolioSection.tsx', portfolio, 'utf8');

// TestimonialsSection
const testimonials = readFileSync('C:/agno/.testimonials_src.txt', 'utf8');
writeFileSync('C:/agno/apps/web/components/sections/TestimonialsSection.tsx', testimonials, 'utf8');

// ContactCTASection
const cta = readFileSync('C:/agno/.cta_src.txt', 'utf8');
writeFileSync('C:/agno/apps/web/components/sections/ContactCTASection.tsx', cta, 'utf8');

console.log('All files written');
