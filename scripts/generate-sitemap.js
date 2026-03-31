import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://innoam.tn';

// Liste de toutes les routes de votre application
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/medoryx', priority: '0.7', changefreq: 'monthly' },
  { path: '/the-life-residence', priority: '0.7', changefreq: 'monthly' },
  { path: '/deeptech', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/blog/intelligence-artificielle-tunisie-2024', priority: '0.6', changefreq: 'monthly' },
  { path: '/blog/react-nextjs-performance-web', priority: '0.6', changefreq: 'monthly' },
  { path: '/blog/saas-startup-tunisie-guide', priority: '0.6', changefreq: 'monthly' },
];

// Fonction pour générer le sitemap XML
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach((route) => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
}

// Écrire le sitemap dans le dossier public
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const sitemapContent = generateSitemap();

fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

console.log('✅ Sitemap généré avec succès:', sitemapPath);
console.log(`📄 ${routes.length} URLs ajoutées au sitemap`);
