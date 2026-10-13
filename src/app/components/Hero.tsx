import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaFileAlt } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* 1. MONUMENTAL EDITORIAL SERIF HEADLINE + FULLY ROUNDED STEPPED PORTRAIT CONTAINER */}
        <div>
          {/* Line 1 sits cleanly above the portrait container */}
          <h1 className="font-serif uppercase text-ink-primary tracking-[-0.02em] leading-[0.92] text-[2.5rem] sm:text-7xl md:text-8xl lg:text-[6.25rem] font-normal select-none">
            <span className="block pb-1 sm:pb-2">HEY, I&apos;M AREL</span>
          </h1>

          {/* Wide Rounded Portrait Banner with Stepped Rounded Cutouts */}
          <div className="relative rounded-[24px] sm:rounded-[36px] overflow-hidden bg-[#DDE1E8] h-[260px] sm:h-[390px] md:h-[460px] lg:h-[520px]">
            {/* Top-Left Stepped Cutout for "ZANDRA" with Smooth Inverted Rounded Corners */}
            <div className="absolute top-0 left-0 z-20 bg-canvas pr-5 sm:pr-10 pb-2 sm:pb-4 rounded-br-[24px] sm:rounded-br-[36px]">
              <span className="block font-serif uppercase text-ink-primary tracking-[-0.02em] leading-[0.88] text-[2.5rem] sm:text-7xl md:text-8xl lg:text-[6.25rem] font-normal select-none">
                ZANDRA
              </span>

              {/* Top-Right Inverted Corner Scoop (Rounds the top edge of the photo container) */}
              <svg
                className="w-6 h-6 sm:w-9 sm:h-9 text-canvas fill-current absolute top-0 -right-6 sm:-right-9 overflow-visible pointer-events-none"
                viewBox="0 0 36 36"
                aria-hidden="true"
              >
                <path d="M-2 36 L0 36 A36 36 0 0 1 36 0 L36 -2 L-2 -2 Z" />
              </svg>

              {/* Bottom-Left Inverted Corner Scoop (Rounds the left edge of the photo container) */}
              <svg
                className="w-6 h-6 sm:w-9 sm:h-9 text-canvas fill-current absolute -bottom-6 sm:-bottom-9 left-0 overflow-visible pointer-events-none"
                viewBox="0 0 36 36"
                aria-hidden="true"
              >
                <path d="M-2 36 L0 36 A36 36 0 0 1 36 0 L36 -2 L-2 -2 Z" />
              </svg>
            </div>

            <Image
              src="/images/foto-arel-hero.jpg"
              alt="Farrel Zandra — Frontend & Full-Stack Engineer"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="object-cover object-[72%_center] sm:object-center"
            />

            {/* Bottom-Left Subtle Role Caption */}
            <div className="hidden sm:block absolute bottom-6 left-8 z-10">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-primary/80">
                Frontend &amp; Full-Stack Engineer
              </p>
            </div>

            {/* Bottom-Right Stepped Cutout for Floating Circular "Work ↓" Badge */}
            <div className="absolute bottom-0 right-0 z-20 bg-canvas pl-2.5 pt-2.5 sm:pl-3.5 sm:pt-3.5 rounded-tl-[26px] sm:rounded-tl-[36px]">
              {/* Top-Right Inverted Corner Scoop */}
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-canvas fill-current absolute -top-6 sm:-top-8 right-0 overflow-visible pointer-events-none"
                viewBox="0 0 36 36"
                aria-hidden="true"
              >
                <path d="M38 0 L36 0 A36 36 0 0 1 0 36 L0 38 L38 38 Z" />
              </svg>

              {/* Bottom-Left Inverted Corner Scoop */}
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-canvas fill-current absolute bottom-0 -left-6 sm:-left-8 overflow-visible pointer-events-none"
                viewBox="0 0 36 36"
                aria-hidden="true"
              >
                <path d="M38 0 L36 0 A36 36 0 0 1 0 36 L0 38 L38 38 Z" />
              </svg>

              <a
                href="#projects"
                aria-label="Scroll to Featured Work"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-surface text-ink-primary flex flex-col items-center justify-center shadow-sm hover:scale-105 transition-transform border border-line"
              >
                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest">
                  Work
                </span>
                <span className="text-[10px] sm:text-xs leading-none mt-0.5">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. CONCISE, INTRIGUING EDITORIAL "ABOUT ->" HOOK */}
        <div className="mt-10 sm:mt-20 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start">
          {/* Left Micro Label */}
          <div className="md:col-span-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-secondary pt-1 md:pt-2">
            <span>ABOUT</span>
            <span className="inline-block w-8 h-px bg-ink-muted" />
            <span className="text-ink-primary">→</span>
          </div>

          {/* Right Dual-Tone Concise Narrative Hook */}
          <div className="md:col-span-8 space-y-5 sm:space-y-6">
            <p className="text-lg sm:text-2xl lg:text-[1.75rem] leading-[1.48] sm:leading-[1.38] font-normal text-ink-primary tracking-tight">
              I engineer{" "}
              <span className="text-ink-muted">
                production web platforms
              </span>{" "}
              and{" "}
              <span className="text-ink-muted">
                autonomous data systems
              </span>{" "}
              — translating complex{" "}
              <span className="text-ink-muted">system specifications</span>{" "}
              and{" "}
              <span className="text-ink-muted">TB-scale telemetry</span> into
              calm, high-speed interfaces.
            </p>

            {/* Clean Editorial Action Links */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3 border-t border-line">
              <a
                href="#projects"
                className="min-h-[44px] inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-ink-primary hover:opacity-70 transition-opacity"
              >
                Explore Selected Work
                <FaArrowRight size={11} />
              </a>

              <span className="hidden sm:inline text-line" aria-hidden="true">
                /
              </span>

              <Link
                href="/resume"
                className="min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-ink-secondary hover:text-ink-primary transition-colors"
              >
                <FaFileAlt size={12} />
                Read Full Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;