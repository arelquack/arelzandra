import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  fileName: string;
};

/**
 * 1. Fungsi pembuat Slug (Hanya digunakan jika ingin normalisasi teks tertentu)
 */
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')         // Ganti spasi jadi -
    .replace(/[^\w\-]+/g, '')     // Hapus karakter non-alfanumerik
    .replace(/\-\-+/g, '-');      // Hapus dash ganda
}

/**
 * 2. Ambil Semua Post berdasarkan Bahasa
 * @param lang - 'id' | 'en' | 'ja'
 */
export function getSortedPostsData(lang: string = 'id') {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(`.${lang}.mdx`)) // Hanya ambil file dengan akhiran bahasa yang sesuai
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      // PERBAIKAN UTAMA: Slug diambil dari nama file agar URL tetap Romaji meski judulnya Kanji
      // Contoh: "aldi-taher.ja.mdx" -> slug: "aldi-taher"
      const slug = fileName.replace(/\.(id|en|ja)\.mdx$/, '');

      return {
        slug,
        fileName,
        // Fallback data agar tidak undefined saat diakses di Client Component
        title: data.title || "Untitled",
        date: data.date || "",
        description: data.description || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        ...data, 
      };
    });

  // Urutkan berdasarkan tanggal terbaru
  return allPostsData.sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime();
    const dateB = new Date(b.date || 0).getTime();
    return dateB - dateA;
  });
}

/**
 * 3. Ambil Satu Post Berdasarkan Slug dan Bahasa
 */
export function getPostData(slug: string, lang: string = 'id') {
  // Urutan pencarian: bahasa yang diminta -> indonesia -> inggris -> jepang
  const languages = [lang, 'id', 'en', 'ja'];
  let post;
  let currentLang = lang;

  for (const l of languages) {
    const allPosts = getSortedPostsData(l);
    post = allPosts.find((p) => p.slug === slug);
    if (post) {
      currentLang = l;
      break;
    }
  }

  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const fullPath = path.join(postsDirectory, post.fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    lang: currentLang,
    meta: {
      title: data.title || "Untitled",
      date: data.date || "",
      description: data.description || "",
      // Proteksi agar .map() di page [slug] tidak error
      tags: Array.isArray(data.tags) ? data.tags : [],
    },
    content,
  };
}