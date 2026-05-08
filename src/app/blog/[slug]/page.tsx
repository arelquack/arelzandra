import { getPostData, getSortedPostsData } from '@/lib/mdx';
import ReactMarkdown from 'react-markdown';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

// Generate Static Params (Aman)
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Metadata (Aman)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostData(slug);
  return {
    title: `${post.meta.title} | Arel Zandra`,
    description: post.meta.description,
  };
}

// Component Utama
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Ambil data post
  const { meta, content } = getPostData(slug);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-20 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>

        {/* Header Artikel */}
        <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                {meta.title}
            </h1>
            
            {/* REVISI: flex-wrap biar di HP ngga tumpah, dan styling tag disamakan dengan list blog */}
            <div className="flex flex-wrap justify-center items-center gap-3 text-gray-500 text-sm">
                <span>{meta.date}</span>
                <span className="hidden sm:inline">•</span> {/* Titik pemisah disembunyikan di HP kalau layarnya terlalu kecil */}
                <div className="flex flex-wrap justify-center gap-2">
                    {meta.tags.map((tag: string) => (
                        <span key={tag} className="text-xs font-medium text-gray-300 bg-white/5 border border-gray-800 px-2 py-1 rounded cursor-default">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </header>
        
        {/* Konten Artikel */}
        {/* REVISI SEDIKIT: Nambahin styling buat blockquote dan pre (code block) biar makin nyatu sama tema gelap */}
        <article className="prose prose-invert prose-lg max-w-none 
            prose-headings:text-gray-100 
            prose-a:text-blue-400 hover:prose-a:text-blue-300 transition-colors
            prose-img:rounded-2xl prose-img:border prose-img:border-gray-800
            prose-code:text-pink-400 prose-code:bg-gray-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-gray-800 prose-pre:shadow-2xl
            prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-900/10 prose-blockquote:px-4 prose-blockquote:py-1 prose-blockquote:rounded-r-lg prose-blockquote:not-italic">
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </main>

      <Footer />
    </div>
  );
}