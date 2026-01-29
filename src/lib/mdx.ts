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
    .replace(/\s+/g, '-')        // Ganti spasi jadi -
    .replace(/[^\w\-]+/g, '')    // Hapus karakter aneh (misal: ?, !, :)
    .replace(/\-\-+/g, '-');     // Hapus dash ganda
}

// 2. Ambil Semua Post (Sekarang slug-nya dari Title)
export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    // SLUG DIBUAT DARI TITLE DI SINI
    const slug = slugify(data.title || ''); 

    return {
      slug,
      fileName, // Simpan nama file asli biar gampang dicari nanti
      ...(data as Omit<PostMeta, 'slug' | 'fileName'>),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 3. Ambil Satu Post Berdasarkan Slug (Logic Baru: Cari yg cocok)
export function getPostData(slug: string) {
  // Ambil semua data dulu buat dicocokin
  const allPosts = getSortedPostsData();
  
  // Cari postingan yang slug-nya sama dengan request URL
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  // Baca file berdasarkan 'fileName' asli yang udah kita simpan tadi
  const fullPath = path.join(postsDirectory, post.fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    meta: {
      ...data,
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags,
    } as Omit<PostMeta, 'slug' | 'fileName'>,
    content,
  };
}