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

// 1. Fungsi pembuat Slug (Lowercase + Dash)
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
    .filter((fileName) => fileName.endsWith(`.${lang}.mdx`))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      // PERBAIKAN: Slug diambil dari nama file, bukan title
      // Contoh: "kenapa-aldi-taher.en.mdx" -> slug: "kenapa-aldi-taher"
      const slug = fileName.replace(/\.(id|en|ja)\.mdx$/, '');

      return {
        slug,
        fileName,
        ...(data as Omit<PostMeta, 'slug' | 'fileName'>),
      };
    });

  return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * 3. Ambil Satu Post Berdasarkan Slug dan Bahasa
 * Digunakan di page [slug] untuk merender konten
 */
export function getPostData(slug: string, lang: string = 'id') {
  const languages = [lang, 'id', 'en', 'ja']; // Urutan pencarian
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
    meta: data as Omit<PostMeta, 'slug' | 'fileName'>,
    content,
  };
}