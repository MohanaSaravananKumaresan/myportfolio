import { NextResponse } from "next/server";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://mohanasaravanan.in";

function generateSitemapXml() {
  const now = new Date().toISOString();

  // Only include real URLs (not section anchors like #about)
  const pages = [
    { path: "", priority: 1.0 },
    { path: "MohanaSaravanan_CV.pdf", priority: 0.5 },
  ];

  const urls = pages
      .map((page) => {
        const loc = page.path === "" ? `${SITE_URL}/` : `${SITE_URL}/${page.path}`;

        return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
      })
      .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSitemapXml();

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
