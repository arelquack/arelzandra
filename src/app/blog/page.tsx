import { getSortedPostsData } from '@/lib/mdx';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import BlogClient from './BlogClient';

export const metadata = {
  title: 'Blog | Arel Zandra',
  description: 'Thoughts on software engineering, Web3, and life.',
};

export default function BlogPage() {
  // Mengambil data dari file sistem di lingkungan Server untuk ketiga bahasa
  const postsId = getSortedPostsData('id');
  const postsEn = getSortedPostsData('en');
  const postsJa = getSortedPostsData('ja');

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        {/* Header "Writing Corner" sekarang ada di dalam BlogClient 
            agar teks judul & deskripsinya ikut berubah saat user ganti bahasa.
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