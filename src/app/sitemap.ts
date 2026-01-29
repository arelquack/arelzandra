import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/mdx'; // Import fungsi blog tadi

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arelzandra.vercel.app'; // GANTI PAKE DOMAIN ASLI LO

  // 1. Halaman Statis
  const routes = [
    '',
    '/blog',
    '/uses',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));

  // 2. Halaman Blog Dinamis (Biar artikel baru langsung ke-detect)
  const posts = getSortedPostsData().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date), // Pake tanggal artikel
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...routes, ...posts];
}