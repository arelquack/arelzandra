import Link from 'next/link';
import { getSortedPostsData } from '@/lib/mdx';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Blog | Arel Zandra',
  description: 'Thoughts on software engineering, Web3, and life.',
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Writing <span className="text-glow-gradient">Corner</span>
        </h1>
        <p className="text-gray-400 mb-12 text-lg">
            Sharing my journey in tech, tutorials, and random thoughts.
        </p>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="glass-card p-6 md:p-8 rounded-2xl hover:border-blue-500/50 transition-all cursor-pointer group">
                
                {/* REVISI RESPONSIVITAS DI SINI */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                    <h2 className="text-2xl font-bold group-hover:text-blue-400 transition-colors leading-tight">
                        {post.title}
                    </h2>
                    
                    {/* shrink-0 biar kotak tanggal ngga mengecil kalau judulnya panjang */}
                    <span className="shrink-0 text-xs md:text-sm text-gray-500 border border-gray-800 px-3 py-1 rounded-full w-fit">
                        {post.date}
                    </span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                    {post.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-gray-300 bg-white/5 border border-gray-800 px-2 py-1 rounded hover:border-gray-600 transition-colors">
                            #{tag}
                        </span>
                    ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}