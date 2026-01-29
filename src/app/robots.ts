import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Kalau ada folder rahasia
    },
    sitemap: 'https://arelzandra.vercel.app/sitemap.xml', 
  };
}