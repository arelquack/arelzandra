import { getLearnData, getSortedLearnData } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { notFound } from 'next/navigation';

// Nanti kita uncomment ini pas komponen kuisnya udah dibuat!
import LatihanAsetQuizPage from '@/app/components/learn/LatihanAsetQuizPage';

interface Props {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ lang?: string }>;
}

export async function generateStaticParams() {
    const languages = ['id', 'en', 'ja'];
    const allParams = [];
    for (const lang of languages) {
        const posts = getSortedLearnData(lang);
        const params = posts.map((post) => ({ slug: post.slug }));
        allParams.push(...params);
    }
    return allParams;
}

export async function generateMetadata({ params, searchParams }: Props) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    
    try {
        const post = getLearnData(resolvedParams.slug, resolvedSearchParams.lang || 'id');
        return { title: `${post.meta.title} | Learn`, description: post.meta.description };
    } catch {
        return { title: 'Not Found' };
    }
}

export default async function LearnDetailPage({ params, searchParams }: Props) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const slug = resolvedParams.slug;
    const lang = resolvedSearchParams.lang || 'id';
    
    let post;
    try {
        post = getLearnData(slug, lang);
    } catch (e) {
        return notFound();
    }

    // DAFTARKAN SEMUA KOMPONEN KUIS KE DALAM MDX DI SINI
    const mdxComponents = {
        LatihanAsetQuizPage: () => <LatihanAsetQuizPage />,
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Navbar />
            <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
                <Link href={`/learn?lang=${lang}`} className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                    <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
                    Back to Learn
                </Link>

                <header className="mb-12 border-b border-white/10 pb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full">
                            {post.meta.level || 'Beginner'}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
                        {post.meta.title}
                    </h1>
                    <p className="text-gray-400 text-lg">{post.meta.description}</p>
                </header>
                
                {/* Engine MDXRemote menggantikan react-markdown */}
                <article className="prose prose-invert prose-lg max-w-none 
                    prose-headings:text-gray-100 prose-a:text-amber-500 hover:prose-a:text-amber-400 
                    prose-code:text-pink-400 prose-code:bg-gray-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded">
                    <MDXRemote source={post.content} components={mdxComponents} />
                </article>
            </main>
            <Footer />
        </div>
    );
}