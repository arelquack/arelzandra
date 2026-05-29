// src/app/learn/[slug]/page.tsx

import { getPostData, getSortedPostsData } from '@/lib/mdx'; // Sesuaikan dengan fungsi pembaca MDX learn lo
import ReactMarkdown from 'react-markdown';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import OsnkQuizPage from '@/app/components/learn/OsnkQuizPage';

interface Props {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ lang?: string }>;
}

/**
 * 1. Generate Static Params
 * Kita harus daftarkan slug kuis secara manual di sini, jika tidak Next.js akan melempar 404 saat build / dev!
 */
export async function generateStaticParams() {
    const languages = ['id', 'en', 'ja'];
    const allParams = [];

    // Daftarkan slug kuis adek lo untuk semua bahasa
    for (const lang of languages) {
        allParams.push({ slug: "simulasi-time-attack-osnk-informatika" });
    }

    // Daftarkan juga seluruh slug dari file MDX learn lo yang sudah ada
    for (const lang of languages) {
        try {
            const posts = getSortedPostsData(lang); // Asumsi mengambil data dari folder content/learn
            const params = posts.map((post) => ({
                slug: post.slug,
            }));
            allParams.push(...params);
        } catch (e) {
            // Taruh di dalam try-catch supaya jika salah satu folder bahasa kosong tidak merusak proses build
            console.log("No MDX files found for lang:", lang);
        }
    }
    
    return allParams;
}

/**
 * 2. Dynamic Metadata
 */
export async function generateMetadata({ params, searchParams }: Props) {
    const { slug } = await params;
    const { lang = 'id' } = await searchParams;
    
    if (slug === "simulasi-time-attack-osnk-informatika") {
        return {
            title: "Simulasi OSN-K Informatika - Time Attack | Arel Zandra",
            description: "Uji kesiapan kompetisi olimpiade informatika dengan tantangan kuis interaktif.",
        };
    }

    try {
        const post = getPostData(slug, lang);
        return {
            title: `${post.meta.title} | Arel Zandra`,
            description: post.meta.description,
        };
    } catch {
        return { title: 'Material Not Found | Arel Zandra' };
    }
}

/**
 * 3. Component Utama (Mencegat rute kuis & merender MDX)
 */
export default async function LearnDetailPage({ params, searchParams }: Props) {
    const { slug } = await params;
    const { lang = 'id' } = await searchParams;
    
    // INTERCEPT: Jika slug mengarah ke kuis adek lo, langsung bypass dan render kuisnya!
    if (slug === "simulasi-time-attack-osnk-informatika") {
        return (
            <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
                <Navbar />
                <main className="container mx-auto max-w-4xl">
                    <Link href={`/learn?lang=${lang}`} className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                        <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
                        {lang === 'ja' ? '戻る' : lang === 'en' ? 'Back to Learn' : 'Kembali'}
                    </Link>
                    <OsnkQuizPage />
                </main>
                <Footer />
            </div>
        );
    }

    // LOGIC LAMA: Jika bukan slug kuis, baca file MDX integrasi FE-BE seperti biasa
    let post;
    try {
        post = getPostData(slug, lang);
    } catch (e) {
        return notFound();
    }

    const { meta, content } = post;

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Navbar />

            <main className="container mx-auto px-6 pt-32 pb-20 max-w-3xl">
                <Link href={`/learn?lang=${lang}`} className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                    <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
                    Back to Learn
                </Link>

                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                        {meta.title}
                    </h1>
                    <div className="flex flex-wrap justify-center items-center gap-3 text-gray-500 text-sm">
                        <span>{meta.date}</span>
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
                
                <article className="prose prose-invert prose-lg max-w-none">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </article>
            </main>

            <Footer />
        </div>
    );
}