import { NextResponse } from 'next/server';

const SITE_URL = process.env.SITE_URL || 'http://localhost:3000';

function generateSitemap() {
  const now = new Date().toISOString();

  const pages = [
    { path: '', priority: 1 },
    { path: 'about', priority: 0.8 },
    { path: 'work', priority: 0.8 },
    { path: 'projects', priority: 0.8 },
    { path: 'contact', priority: 0.6 },
    // CV hosted in public directory
    { path: 'MohanaSaravanan_CV.pdf', priority: 0.5, isFile: true },
  ];

  const urls = pages
    .map((page) => {
      const loc = page.path === '' ? SITE_URL : `${SITE_URL}/${page.path}`;
      return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSitemap();
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
