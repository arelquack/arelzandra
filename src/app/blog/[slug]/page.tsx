import { getPostData, getSortedPostsData } from '@/lib/mdx';
import ReactMarkdown from 'react-markdown'; // <--- Engine baru yang lebih stabil
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
  
  // Ambil data post (kontennya masih string Markdown biasa)
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
            <div className="flex justify-center items-center gap-4 text-gray-500 text-sm">
                <span>{meta.date}</span>
                <span>•</span>
                <span className="flex gap-2">
                    {meta.tags.map((tag: string) => (
                        <span key={tag} className="text-blue-400">#{tag}</span>
                    ))}
                </span>
            </div>
        </header>
        
        {/* Konten Artikel */}
        {/* ReactMarkdown akan mengubah string markdown jadi HTML yang valid */}
        <article className="prose prose-invert prose-lg max-w-none prose-headings:text-gray-100 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-img:rounded-xl prose-code:text-pink-400 prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </main>

      <Footer />
    </div>
  );
}