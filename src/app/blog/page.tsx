import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { getSortedPostsData } from "@/lib/mdx";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog",
  description: "Thoughts on software engineering, architecture, and technology.",
};

export default function BlogPage() {
  const postsId = getSortedPostsData("id");
  const postsEn = getSortedPostsData("en");
  const postsJa = getSortedPostsData("ja");

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

        <BlogClient postsId={postsId} postsEn={postsEn} postsJa={postsJa} />
      </main>

      <Footer />
    </div>
  );
}