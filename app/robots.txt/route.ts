import { NextResponse } from 'next/server';

const SITE_URL = process.env.SITE_URL || 'http://localhost:3000';

export async function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml

# Allow public access for recruiters and bots
User-agent: AdsBot-Google
Allow: /
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
