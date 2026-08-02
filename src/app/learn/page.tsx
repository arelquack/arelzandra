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
        description: "論理、組合せ論、グラフ、C++コードデバッグ問題を含むインタラクティブなクイズ。本番同様 di bawah waktu ujian asli.",
        tags: ["Olimpiade", "Informatika", "Logika", "Kuis Interaktif"],
        level: "Advanced"
    };

    // 2.1 Data Simulasi Data Engineering
    const deSimId = {
        slug: "simulasi-pipeline-data-engineering",
        title: "Simulasi ETL Pipeline Data Engineering",
        date: "2026-07-14",
        description: "Pecahkan teka-teki logika pemrosesan data (ETL) telekomunikasi menggunakan Pandas, PostgreSQL, SQL, dan Airflow secara interaktif dengan visualisasi dynamic live.",
        tags: ["Data Engineering", "ETL", "Python", "SQL", "Airflow"],
        level: "Intermediate"
    };

    const deSimEn = {
        slug: "simulasi-pipeline-data-engineering",
        title: "Data Engineering ETL Pipeline Simulation",
        date: "2026-07-14",
        description: "Solve interactive logical puzzles for telecommunications data processing (ETL) using Pandas, PostgreSQL, SQL, and Airflow with a dynamic live visualizer.",
        tags: ["Data Engineering", "ETL", "Python", "SQL", "Airflow"],
        level: "Intermediate"
    };

    const deSimJa = {
        slug: "simulasi-pipeline-data-engineering",
        title: "データエンジニアリング ETLパイプラインシミュレーション",
        date: "2026-07-14",
        description: "Pandas、PostgreSQL、SQL、Airflowを使用した通信データ処理(ETL)の論理パズルを、動的なライブビジュアライザでインタラクティブに解決します。",
        tags: ["Data Engineering", "ETL", "Python", "SQL", "Airflow"],
        level: "Intermediate"
      };

    // 3. Gabungin kuis baru di baris paling depan, lalu spread data MDX lama di belakangnya
    const modulesId = [deSimId, osnkQuizId, ...mdxModulesId];
    const modulesEn = [deSimEn, osnkQuizEn, ...mdxModulesEn];
    const modulesJa = [deSimJa, osnkQuizJa, ...mdxModulesJa];

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