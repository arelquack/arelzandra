import { getPostData, getSortedPostsData } from '@/lib/mdx';
import ReactMarkdown from 'react-markdown';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ lang?: string }>;
}

// 1. Generate Static Params
export async function generateStaticParams() {
    const languages = ['id', 'en', 'ja'];
    const allParams = [];

    for (const lang of languages) {
        const posts = getSortedPostsData(lang);
        const params = posts.map((post) => ({
            slug: post.slug,
        }));
        allParams.push(...params);
    }
    
    return allParams;
}

// 2. Dynamic Metadata
export async function generateMetadata({ params, searchParams }: Props) {
    const { slug } = await params;
    const { lang = 'id' } = await searchParams;
    
    try {
        const post = getPostData(slug, lang);
        return {
            title: `${post.meta.title} | Arel Zandra`,
            description: post.meta.description,
        };
    } catch {
        return { title: 'Post Not Found | Arel Zandra' };
    }
}

// 3. Component Utama
export default async function PostPage({ params, searchParams }: Props) {
    const { slug } = await params;
    const { lang = 'id' } = await searchParams;
    
    let post;
    try {
        post = getPostData(slug, lang);
    } catch (e) {
        return notFound();
    }

    const { meta, content } = post;

    // Fungsi untuk format tanggal sesuai bahasa (Lokalisasi)
    const formatDisplayDate = (dateString: string, currentLang: string) => {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;

        return date.toLocaleDateString(currentLang === 'ja' ? 'ja-JP' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Navbar />

            <main className="container mx-auto px-6 pt-32 pb-20 max-w-3xl">
                <Link href={`/blog?lang=${lang}`} className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                    <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
                    Back to Blog
                </Link>

                {/* Header Artikel */}
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                        {meta.title}
                    </h1>
                    
                    <div className="flex flex-wrap justify-center items-center gap-3 text-gray-500 text-sm">
                        {/* Tanggal otomatis berubah format kalau bahasa Jepang */}
                        <span>{formatDisplayDate(meta.date, lang)}</span>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex flex-wrap justify-center gap-2">
                            {meta.tags?.map((tag: string) => (
                                <span key={tag} className="text-xs font-medium text-gray-300 bg-white/5 border border-gray-800 px-2 py-1 rounded cursor-default">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </header>
                
                {/* Konten Artikel */}
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