const fs = require('fs');
const path = require('path');
const { fiches } = require('../data/fiches');

const BASE_URL = 'https://ton-site.com'; // Remplace par ton vrai domaine

function generateSitemap() {
  const pages = [
    '', // page d'accueil
    'fiches',
    'cours',
    'contact',
    'mentions-legales',
    'politique-confidentialite',
    // ajoute d'autres pages statiques ici si besoin
  ];

  // Ajout des URLs de toutes les fiches
  fiches.forEach(fiche => pages.push(fiche.url.replace(/^\//, '')));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${BASE_URL}/${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap.trim());

  console.log('✅ sitemap.xml generated!');
}

generateSitemap();
