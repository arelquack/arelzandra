import { getPostData, getSortedPostsData } from "@/lib/mdx";
import ReactMarkdown from "react-markdown";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}

export async function generateStaticParams() {
  const languages = ["id", "en", "ja"];
  const slugSet = new Set<string>();

  for (const lang of languages) {
    try {
      const posts = getSortedPostsData(lang);
      for (const post of posts) {
        slugSet.add(post.slug);
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

  try {
    const post = getPostData(slug, lang);
    return {
      title: post.meta.title,
      description: post.meta.description,
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function PostPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { lang = "id" } = await searchParams;

  let post;
  try {
    post = getPostData(slug, lang);
  } catch {
    return notFound();
  }

  const { meta, content } = post;

  const formatDisplayDate = (dateString: string, currentLang: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    return date.toLocaleDateString(currentLang === "ja" ? "ja-JP" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-canvas text-ink-primary flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-3xl w-full mx-auto px-6 pt-32 pb-24">
        <Link
          href={`/blog?lang=${lang}`}
          className="md:hidden inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-secondary hover:text-ink-primary mb-8 transition-colors group"
        >
          <FaArrowLeft
            size={10}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          Back to Blog
        </Link>

        {/* Editorial Article Header */}
        <header className="mb-12 pb-8 border-b border-line space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-muted">
            <span>{formatDisplayDate(meta.date, lang)}</span>
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

        {/* Editorial Article Body */}
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
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </main>

      <Footer />
    </div>
  );
}