"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { achievementsData } from "@/lib/achievementsData";
import { FaArrowLeft, FaSearch, FaTimes } from "react-icons/fa";

const categories = [
  { id: "all", label: "All Records" },
  { id: "informatics", label: "Informatics & RnD" },
  { id: "scientific", label: "Scientific & Innovation" },
  { id: "japanese", label: "Japanese Language & Culture" },
] as const;

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredItems = useMemo(() => {
    return achievementsData.filter((item) => {
      const matchesCat =
        activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        item.title.toLowerCase().includes(q) ||
        item.award.toLowerCase().includes(q) ||
        item.field.toLowerCase().includes(q) ||
        item.organizer.toLowerCase().includes(q) ||
        item.year.includes(q);
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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

        {/* Editorial Header */}
        <header className="mb-14">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-secondary mb-4">
            <span>HONORS &amp; CHAMPIONSHIPS ARCHIVE</span>
            <span className="inline-block w-8 h-px bg-ink-muted" />
          </div>

          <h1 className="font-serif uppercase text-5xl sm:text-6xl md:text-7xl text-ink-primary tracking-tight leading-[0.95] mb-4">
            Awards &amp; Recognition
          </h1>

          <p className="text-ink-secondary text-base sm:text-lg max-w-2xl">
            Complete record of national informatics competitions, scientific
            innovation finals, and language championships ({achievementsData.length}{" "}
            verified honors from 2021 – 2026).
          </p>
        </header>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 border-b border-line mb-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`py-2 transition-colors relative ${
                  activeCategory === cat.id
                    ? "text-ink-primary font-bold after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-ink-primary"
                    : "text-ink-secondary hover:text-ink-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted text-xs" />
            <input
              type="text"
              placeholder="Search competition or year..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full min-h-[40px] bg-surface border border-line rounded-xl py-2 pl-9 pr-8 text-xs sm:text-sm text-ink-primary placeholder-ink-muted focus:outline-none focus:border-ink-primary transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink-primary"
              >
                <FaTimes size={11} />
              </button>
            )}
          </div>
        </div>

        {/* Editorial Archive Table / List */}
        <div className="divide-y divide-line border-t border-b border-line">
          {filteredItems.map((item, idx) => (
            <article
              key={item.id}
              className="py-7 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
            >
              {/* Left Column: Index, Year & Scale */}
              <div className="md:col-span-3 space-y-1">
                <p className="text-xs font-mono text-ink-muted">
                  {String(idx + 1).padStart(2, "0")} — {item.year}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-secondary">
                  {item.scale}
                </p>
              </div>

              {/* Center Column: Award, Title & Field */}
              <div className="md:col-span-6 space-y-1.5">
                <p className="text-xs font-mono uppercase tracking-[0.14em] text-ink-primary font-semibold">
                  {item.award}
                </p>
                <h2 className="text-lg sm:text-xl font-semibold text-ink-primary tracking-tight leading-snug">
                  {item.title}
                </h2>
                <p className="text-sm text-ink-secondary">{item.field}</p>
              </div>

              {/* Right Column: Organizer & Location */}
              <div className="md:col-span-3 md:text-right space-y-1">
                <p className="text-xs font-medium text-ink-secondary leading-relaxed">
                  {item.organizer}
                </p>
                <p className="text-xs font-mono text-ink-muted">
                  {item.location}
                </p>
              </div>
            </article>
          ))}

          {filteredItems.length === 0 && (
            <div className="py-16 text-center text-sm text-ink-secondary">
              No records found matching &quot;{searchQuery}&quot;.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
