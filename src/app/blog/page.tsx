import { getSortedPostsData } from '@/lib/mdx';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import BlogClient from './BlogClient';

export const metadata = {
  title: 'Blog | Arel Zandra',
  description: 'Thoughts on software engineering, Web3, and life.',
};

export default function BlogPage() {
  // Mengambil data dari file sistem di lingkungan Server
  // 'fs' akan berjalan aman di sini
  const postsId = getSortedPostsData('id');
  const postsEn = getSortedPostsData('en');
  const postsJa = getSortedPostsData('ja');

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Writing <span className="text-glow-gradient">Corner</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Sharing my journey in tech, tutorials, and random thoughts.
          </p>
        </div>

        {/* Mengirimkan ketiga dataset bahasa ke Client Component.
          User bisa berpindah bahasa secara instan di sisi client.
        */}
        <BlogClient 
          postsId={postsId} 
          postsEn={postsEn} 
          postsJa={postsJa} 
        />
      </main>

      <Footer />
    </div>
  );
}