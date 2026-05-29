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
    // Tunggu resolusi parameter bahasa
    const resolvedSearchParams = await searchParams;
    const initialLang = (resolvedSearchParams.lang as 'id' | 'en' | 'ja') || 'id';

    // 1. Ambil data asli dari file sistem (.mdx) biar gak ilang
    const mdxModulesId = getSortedLearnData('id');
    const mdxModulesEn = getSortedLearnData('en');
    const mdxModulesJa = getSortedLearnData('ja');

    // 2. Data kuis khusus adek lo (Kuis lokal/interaktif)
    const osnkQuizId = {
        slug: "simulasi-time-attack-osnk-informatika",
        title: "Simulasi OSN-K Informatika - Time Attack",
        date: "2026-05-29",
        description: "Uji kesiapan kompetisi olimpiade informatika dengan tantangan kuis interaktif: pilihan ganda, isian singkat, benar/salah terikat batas waktu ujian asli.",
        tags: ["Olimpiade", "Informatika", "Logika", "Kuis Interaktif"],
        level: "Advanced"
    };

    const osnkQuizEn = {
        slug: "simulasi-time-attack-osnk-informatika",
        title: "Informatics OSN-K Simulation - Time Attack",
        date: "2026-05-29",
        description: "Test your competitive programming readiness with interactive challenges: multiple choice, short answers, and true/false tasks under real test time limits.",
        tags: ["Olimpiade", "Informatika", "Logika", "Kuis Interaktif"],
        level: "Advanced"
    };

    const osnkQuizJa = {
        slug: "simulasi-time-attack-osnk-informatika",
        title: "情報学オリンピック (OSN-K) シミュレーション - タイムアタック",
        date: "2026-05-29",
        description: "論理、組合せ論、グラフ、C++コードデバッグ問題を含むインタラクティブなクイズ。本番同様の制限時間内に挑戦可能。",
        tags: ["Olimpiade", "Informatika", "Logika", "Kuis Interaktif"],
        level: "Advanced"
    };

    // 3. Gabungin kuis baru di baris paling depan, lalu spread data MDX lama di belakangnya
    const modulesId = [osnkQuizId, ...mdxModulesId];
    const modulesEn = [osnkQuizEn, ...mdxModulesEn];
    const modulesJa = [osnkQuizJa, ...mdxModulesJa];

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Navbar />
            <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
                
                {/* Kirim data gabungan yang super aman ke Client Component */}
                <LearnClient 
                    modulesId={modulesId as any} 
                    modulesEn={modulesEn as any} 
                    modulesJa={modulesJa as any} 
                    initialLang={initialLang} 
                />

            </main>
            <Footer />
        </div>
    );
}