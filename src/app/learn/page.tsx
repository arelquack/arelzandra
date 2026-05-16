import { getSortedLearnData } from '@/lib/mdx';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import LearnClient from './LearnClient';

export const metadata = {
    title: 'Learn | Arel Zandra',
    description: 'Interactive coding challenges and learning materials.',
};

export default async function LearnCatalogPage({
    searchParams,
}: {
    searchParams: Promise<{ lang?: string }>;
}) {
    // Tunggu resolusi parameter
    const resolvedSearchParams = await searchParams;
    const initialLang = (resolvedSearchParams.lang as 'id' | 'en' | 'ja') || 'id';

    // Ambil data untuk ketiga bahasa sekaligus dari folder "learn"
    const modulesId = getSortedLearnData('id');
    const modulesEn = getSortedLearnData('en');
    const modulesJa = getSortedLearnData('ja');

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Navbar />
            <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
                
                {/* Panggil Client Component dan kirim datanya */}
                <LearnClient 
                    modulesId={modulesId} 
                    modulesEn={modulesEn} 
                    modulesJa={modulesJa} 
                    initialLang={initialLang} 
                />

            </main>
            <Footer />
        </div>
    );
}