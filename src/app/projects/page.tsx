import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { projectsData } from "@/lib/projectsData";
import ProjectsArchiveClient from "@/app/projects/ProjectsArchiveClient";

export const metadata = {
  title: "Projects & Case Studies",
  description:
    "Complete portfolio archive of production web platforms, autonomous enterprise BI agents, monorepo PWAs, and distributed systems engineered by Farrel Zandra.",
};

export default function ProjectsArchivePage() {
  return (
    <div className="min-h-screen bg-canvas text-ink-primary flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
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

          <header className="mb-12 sm:mb-16 border-b border-line pb-8 sm:pb-10 space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted">
              PORTFOLIO ARCHIVE · {projectsData.length} PRODUCTION SYSTEMS &amp;
              CASE STUDIES
            </p>

            <h1 className="font-serif uppercase text-4xl sm:text-6xl md:text-7xl text-ink-primary leading-[0.95] tracking-tight">
              Selected Works
            </h1>

            <p className="text-base sm:text-xl text-ink-secondary max-w-2xl leading-relaxed">
              A complete archive of enterprise AI agents, monorepo web &amp;
              mobile applications, clinical backoffice CMS platforms, and
              decentralized systems.
            </p>
          </header>

          <ProjectsArchiveClient />
        </div>
      </main>

      <Footer />
    </div>
  );
}
