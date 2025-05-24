import fs from 'node:fs';
import path from 'node:path';
import { SITE_URL } from '../config.ts';
import { fiches } from '../data/fiches.ts';

const BASE_URL = SITE_URL;

function generateSitemap() {
  const pages = [
    '', // page d'accueil
    'fiches',
    'cours',
    'contact',
    'mentions-legales',
    'politique-confidentialite',
  ];

  fiches.forEach((fiche: any) => {
    pages.push(`fiches/${fiche.id}`);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${BASE_URL}/${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
      )
      .join('')}
  </urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), sitemap.trim());
  console.log('✅ sitemap.xml generated!');
}

generateSitemap();
