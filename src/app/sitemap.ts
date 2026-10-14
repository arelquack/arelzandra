import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/mdx'; // Import fungsi blog tadi

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arelzandra.vercel.app'; // GANTI PAKE DOMAIN ASLI LO

  // 1. Halaman Statis Utama
  const staticRoutes = [
    '',
    '/projects',
    '/achievements',
    '/resume',
    '/blog',
    '/learn',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));

  // 2. Halaman Studi Kasus Proyek
  const projectSlugs = [
    'musubix',
    'superflow',
    'simona-polban',
    'nexus',
    'website-nk',
    'rekamedchain',
  ].map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // 3. Halaman Blog Dinamis
  const posts = getSortedPostsData().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectSlugs, ...posts];
}