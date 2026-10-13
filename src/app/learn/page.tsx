import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { getSortedLearnData } from "@/lib/mdx";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LearnClient from "./LearnClient";

export const metadata = {
  title: "Learn",
  description: "Interactive coding challenges and learning materials.",
};

export default async function LearnCatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const initialLang = (resolvedSearchParams.lang as "id" | "en" | "ja") || "id";

  const mdxModulesId = getSortedLearnData("id");
  const mdxModulesEn = getSortedLearnData("en");
  const mdxModulesJa = getSortedLearnData("ja");

  const osnkQuizId = {
    slug: "simulasi-time-attack-osnk-informatika",
    title: "Simulasi OSN-K Informatika - Time Attack",
    date: "2026-05-29",
    description:
      "Uji kesiapan kompetisi olimpiade informatika dengan tantangan kuis interaktif: pilihan ganda, isian singkat, benar/salah terikat batas waktu ujian asli.",
    tags: ["Olimpiade", "Informatika", "Logika", "Kuis Interaktif"],
    level: "Advanced",
  };

  const osnkQuizEn = {
    slug: "simulasi-time-attack-osnk-informatika",
    title: "Informatics OSN-K Simulation - Time Attack",
    date: "2026-05-29",
    description:
      "Test your competitive programming readiness with interactive challenges: multiple choice, short answers, and true/false tasks under real test time limits.",
    tags: ["Olimpiade", "Informatika", "Logika", "Kuis Interaktif"],
    level: "Advanced",
  };

  const osnkQuizJa = {
    slug: "simulasi-time-attack-osnk-informatika",
    title: "情報学オリンピック (OSN-K) シミュレーション - タイムアタック",
    date: "2026-05-29",
    description:
      "論理、組合せ論、グラフ、C++コードデバッグ問題を含むインタラクティブなクイズ。本番同様の時間制限下で挑戦。",
    tags: ["Olimpiade", "Informatika", "Logika", "Kuis Interaktif"],
    level: "Advanced",
  };

  const deSimId = {
    slug: "simulasi-pipeline-data-engineering",
    title: "Simulasi ETL Pipeline Data Engineering",
    date: "2026-07-14",
    description:
      "Pecahkan teka-teki logika pemrosesan data (ETL) telekomunikasi menggunakan Pandas, PostgreSQL, SQL, dan Airflow secara interaktif dengan visualisasi dynamic live.",
    tags: ["Data Engineering", "ETL", "Python", "SQL", "Airflow"],
    level: "Intermediate",
  };

  const deSimEn = {
    slug: "simulasi-pipeline-data-engineering",
    title: "Data Engineering ETL Pipeline Simulation",
    date: "2026-07-14",
    description:
      "Solve interactive logical puzzles for telecommunications data processing (ETL) using Pandas, PostgreSQL, SQL, and Airflow with a dynamic live visualizer.",
    tags: ["Data Engineering", "ETL", "Python", "SQL", "Airflow"],
    level: "Intermediate",
  };

  const deSimJa = {
    slug: "simulasi-pipeline-data-engineering",
    title: "データエンジニアリング ETLパイプラインシミュレーション",
    date: "2026-07-14",
    description:
      "Pandas、PostgreSQL、SQL、Airflowを使用した通信データ処理(ETL)の論理パズルを、動的なライブビジュアライザでインタラクティブに解決します。",
    tags: ["Data Engineering", "ETL", "Python", "SQL", "Airflow"],
    level: "Intermediate",
  };

  const modulesId = [deSimId, osnkQuizId, ...mdxModulesId];
  const modulesEn = [deSimEn, osnkQuizEn, ...mdxModulesEn];
  const modulesJa = [deSimJa, osnkQuizJa, ...mdxModulesJa];

  return (
    <div className="min-h-screen bg-canvas text-ink-primary flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-5xl w-full mx-auto px-6 pt-32 pb-24">
        <Link
          href="/"
          className="md:hidden inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-secondary hover:text-ink-primary mb-8 transition-colors group"
        >
          <FaArrowLeft
            size={10}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          Back to Home
        </Link>

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