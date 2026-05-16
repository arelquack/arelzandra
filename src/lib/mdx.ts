import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Kita arahkan ke root direktori 'content' agar fleksibel
const contentDirectory = path.join(process.cwd(), 'content');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  fileName: string;
  level?: string; // Tambahan untuk kategori kesulitan di halaman Learn
  [key: string]: any; 
};

/**
 * 1. Fungsi pembuat Slug
 */
export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

/**
 * 2. Fungsi Inti: Ambil Semua Konten Berdasarkan Folder dan Bahasa
 * @param folder - Nama folder ('posts' atau 'learn')
 * @param lang - 'id' | 'en' | 'ja'
 */
function getSortedContentData(folder: string, lang: string = 'id') {
  const targetDirectory = path.join(contentDirectory, folder);
  
  // Return array kosong jika folder belum ada (mencegah error)
  if (!fs.existsSync(targetDirectory)) return [];

  const fileNames = fs.readdirSync(targetDirectory);

  const allContentData = fileNames
    .filter((fileName) => fileName.endsWith(`.${lang}.mdx`))
    .map((fileName) => {
      const fullPath = path.join(targetDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      const slug = fileName.replace(/\.(id|en|ja)\.mdx$/, '');

      return {
        slug,
        fileName,
        title: data.title || "Untitled",
        date: data.date || "",
        description: data.description || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        level: data.level || "Beginner", // Fallback default
        ...data,
      } as PostMeta;
    });

  return allContentData.sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime();
    const dateB = new Date(b.date || 0).getTime();
    return dateB - dateA; // Urutkan terbaru ke terlama
  });
}

/**
 * 3. Fungsi Inti: Ambil Satu Konten Berdasarkan Folder, Slug, dan Bahasa
 */
function getContentData(folder: string, slug: string, lang: string = 'id') {
  const languages = [lang, 'id', 'en', 'ja'];
  let post;
  let currentLang = lang;

  for (const l of languages) {
    const allPosts = getSortedContentData(folder, l);
    post = allPosts.find((p) => p.slug === slug);
    if (post) {
      currentLang = l;
      break;
    }
  }

  if (!post) {
    throw new Error(`Content not found for slug: ${slug} in folder: ${folder}`);
  }

  const targetDirectory = path.join(contentDirectory, folder);
  const fullPath = path.join(targetDirectory, post.fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    lang: currentLang,
    meta: {
      title: data.title || "Untitled",
      date: data.date || "",
      description: data.description || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      level: data.level || "Beginner",
      ...data,
    },
    content,
  };
}

// =====================================================================
// EXPORT ALIAS (Mencegah Halaman Blog Error & Membuka Akses Halaman Learn)
// =====================================================================

// Alias untuk Blog (Halaman lama Anda akan tetap memanggil fungsi ini)
export const getSortedPostsData = (lang?: string) => getSortedContentData('posts', lang);
export const getPostData = (slug: string, lang?: string) => getContentData('posts', slug, lang);

// Alias untuk Learn (Fungsi baru yang akan kita gunakan di Phase 3)
export const getSortedLearnData = (lang?: string) => getSortedContentData('learn', lang);
export const getLearnData = (slug: string, lang?: string) => getContentData('learn', slug, lang);