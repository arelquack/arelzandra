import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ResumeClient from "./ResumeClient";

export const metadata = {
  title: "Resume",
  description:
    "Official Curriculum Vitae & Resume of Farrel Zandra — Frontend & Full-Stack Software Engineer.",
};

export default function ResumePage() {
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

        {/* Editorial Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-secondary mb-4">
            <span>CURRICULUM VITAE</span>
            <span className="inline-block w-8 h-px bg-ink-muted" />
            <span className="text-ink-primary">→</span>
          </div>

          <h1 className="font-serif uppercase text-5xl sm:text-6xl md:text-7xl text-ink-primary tracking-tight leading-[0.95]">
            Resume &amp; CV
          </h1>
        </div>

        <ResumeClient />
      </main>

      <Footer />
    </div>
  );
}
