import { getLearnData, getSortedLearnData } from "@/lib/mdx";
import ReactMarkdown from "react-markdown";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FaArrowLeft } from "react-icons/fa";
import { notFound } from "next/navigation";

const OsnkQuizPage = dynamic(
  () => import("@/app/components/learn/OsnkQuizPage"),
  {
    loading: () => (
      <div className="w-full h-[520px] rounded-[28px] bg-surface border border-line p-8 flex items-center justify-center">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted animate-pulse">
          Loading Competitive Programming Simulation...
        </span>
      </div>
    ),
  }
);

const DataEngineeringSimPage = dynamic(
  () => import("@/app/components/learn/DataEngineeringSimPage"),
  {
    loading: () => (
      <div className="w-full h-[540px] rounded-[28px] bg-surface border border-line p-8 flex items-center justify-center">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted animate-pulse">
          Loading Data Engineering Pipeline Sandbox...
        </span>
      </div>
    ),
  }
);

const LatihanAsetQuizPage = dynamic(
  () => import("@/app/components/learn/LatihanAsetQuizPage"),
  {
    loading: () => (
      <div className="w-full h-[520px] rounded-[28px] bg-surface border border-line p-8 flex items-center justify-center">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted animate-pulse">
          Loading Full-Stack API Integration Sandbox...
        </span>
      </div>
    ),
  }
);

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}

export async function generateStaticParams() {
  const languages = ["id", "en", "ja"];
  const slugSet = new Set<string>([
    "simulasi-time-attack-osnk-informatika",
    "simulasi-pipeline-data-engineering",
  ]);

  for (const lang of languages) {
    try {
      const learnModules = getSortedLearnData(lang);
      for (const mod of learnModules) {
        slugSet.add(mod.slug);
      }
    } catch {
      // Ignore missing language directories
    }
  }

  return Array.from(slugSet).map((slug) => ({ slug }));
}

export async function generateMetadata({ params, searchParams }: Props) {
  const { slug } = await params;
  const { lang = "id" } = await searchParams;

  if (slug === "simulasi-time-attack-osnk-informatika") {
    return {
      title: "Simulasi OSN-K Informatika - Time Attack",
      description:
        "Uji kesiapan kompetisi olimpiade informatika dengan tantangan kuis interaktif.",
    };
  }

  if (slug === "simulasi-pipeline-data-engineering") {
    return {
      title: "Simulasi ETL Pipeline Data Engineering",
      description:
        "Pecahkan tantangan interaktif pemrosesan data (ETL) telekomunikasi menggunakan Pandas, PostgreSQL, SQL, dan Airflow.",
    };
  }

  try {
    const moduleData = getLearnData(slug, lang);
    return {
      title: moduleData.meta.title,
      description: moduleData.meta.description,
    };
  } catch {
    return { title: "Material Not Found" };
  }
}

function renderContentWithComponents(content: string) {
  const parts = content.split(
    /(<LatihanAsetQuizPage\s*\/?>|<OsnkQuizPage\s*\/?>|<DataEngineeringSimPage\s*\/?>)/gi
  );

  return parts.map((part, index) => {
    const trimmed = part.trim().toLowerCase();
    if (
      trimmed === "<latihanasetquizpage />" ||
      trimmed === "<latihanasetquizpage/>"
    ) {
      return (
        <div key={index} className="not-prose my-10">
          <LatihanAsetQuizPage />
        </div>
      );
    }
    if (trimmed === "<osnkquizpage />" || trimmed === "<osnkquizpage/>") {
      return (
        <div key={index} className="not-prose my-10">
          <OsnkQuizPage />
        </div>
      );
    }
    if (
      trimmed === "<dataengineeringsimpage />" ||
      trimmed === "<dataengineeringsimpage/>"
    ) {
      return (
        <div key={index} className="not-prose my-10">
          <DataEngineeringSimPage />
        </div>
      );
    }
    if (!part.trim()) return null;
    return <ReactMarkdown key={index}>{part}</ReactMarkdown>;
  });
}

export default async function LearnDetailPage({
  params,
  searchParams,
}: Props) {
  const { slug } = await params;
  const { lang = "id" } = await searchParams;

  if (slug === "simulasi-time-attack-osnk-informatika") {
    return (
      <div className="min-h-screen bg-canvas text-ink-primary flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-5xl w-full mx-auto px-6 pt-32 pb-24">
          <Link
            href={`/learn?lang=${lang}`}
            className="md:hidden inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-secondary hover:text-ink-primary mb-8 transition-colors group"
          >
            <FaArrowLeft
              size={10}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />
            {lang === "ja"
              ? "戻る"
              : lang === "en"
              ? "Back to Learn"
              : "Kembali ke Modul Belajar"}
          </Link>
          <OsnkQuizPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (slug === "simulasi-pipeline-data-engineering") {
    return (
      <div className="min-h-screen bg-canvas text-ink-primary flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-6xl w-full mx-auto px-6 pt-32 pb-24">
          <Link
            href={`/learn?lang=${lang}`}
            className="md:hidden inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-secondary hover:text-ink-primary mb-8 transition-colors group"
          >
            <FaArrowLeft
              size={10}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />
            {lang === "ja"
              ? "戻る"
              : lang === "en"
              ? "Back to Learn"
              : "Kembali ke Modul Belajar"}
          </Link>
          <DataEngineeringSimPage />
        </main>
        <Footer />
      </div>
    );
  }

  let moduleData;
  try {
    moduleData = getLearnData(slug, lang);
  } catch {
    return notFound();
  }

  const { meta, content } = moduleData;
  const hasInteractiveQuiz =
    content.toLowerCase().includes("latihanasetquizpage") ||
    content.toLowerCase().includes("dataengineeringsimpage");

  return (
    <div className="min-h-screen bg-canvas text-ink-primary flex flex-col">
      <Navbar />

      <main
        className={`flex-grow w-full mx-auto px-6 pt-32 pb-24 ${
          hasInteractiveQuiz ? "max-w-5xl" : "max-w-3xl"
        }`}
      >
        <Link
          href={`/learn?lang=${lang}`}
          className="md:hidden inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-secondary hover:text-ink-primary mb-8 transition-colors group"
        >
          <FaArrowLeft
            size={10}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          Back to Learn
        </Link>

        <header className="mb-12 pb-8 border-b border-line space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-muted">
            <span>{meta.date}</span>
            {meta.tags && meta.tags.length > 0 && (
              <>
                <span>·</span>
                <span>{meta.tags.map((t: string) => `#${t}`).join(" · ")}</span>
              </>
            )}
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-ink-primary leading-[1.08] tracking-tight">
            {meta.title}
          </h1>
        </header>

        <article
          className="prose prose-neutral prose-lg max-w-none
            prose-headings:text-ink-primary prose-headings:font-semibold prose-headings:tracking-tight
            prose-p:text-ink-secondary prose-p:leading-relaxed
            prose-li:text-ink-secondary
            prose-strong:text-ink-primary
            prose-a:text-ink-primary prose-a:underline hover:prose-a:opacity-70
            prose-img:rounded-2xl prose-img:border prose-img:border-line
            prose-code:text-ink-primary prose-code:bg-surface-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-surface-muted prose-pre:text-ink-primary prose-pre:border prose-pre:border-line prose-pre:rounded-2xl
            prose-blockquote:border-l-ink-primary prose-blockquote:bg-surface-muted prose-blockquote:px-5 prose-blockquote:py-2 prose-blockquote:rounded-r-xl prose-blockquote:not-italic"
        >
          {renderContentWithComponents(content)}
        </article>
      </main>

      <Footer />
    </div>
  );
}