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
              <article className="glass-card p-8 rounded-2xl hover:border-blue-500/50 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                        {post.title}
                    </h2>
                    <span className="text-sm text-gray-500 border border-gray-800 px-3 py-1 rounded-full">
                        {post.date}
                    </span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">
                    {post.description}
                </p>
                <div className="flex gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-blue-300 bg-blue-900/20 px-2 py-1 rounded">
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