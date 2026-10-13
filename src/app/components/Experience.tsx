"use client";
import React, { useState } from "react";
import Link from "next/link";
import { achievementsData } from "@/lib/achievementsData";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface TimelineItem {
  id: string;
  categoryLabel: string;
  role: string;
  institution: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: "neural-tech",
    categoryLabel: "Work Experience · Tier-1 Telco Client",
    role: "Database Engineer Intern",
    institution: "PT Neural Technologies Indonesia",
    location: "South Jakarta, Indonesia",
    period: "Jul 2026 – Present",
    description: [
      "Spearheaded the frontend and full-stack architecture of Superflow, an autonomous BI agent powered by Gemini API, n8n workflow automation, and Apache Superset REST API, proposed for an enterprise-wide Big Data Analytics Platform initiative.",
      "Engineered an interactive Agentic Trace Widget in Next.js that visualizes AI multi-step reasoning processes and dynamically renders analytical charts from multi-node database clusters.",
      "Optimized 90+ complex SQL/PL-pgSQL stored procedures across 94 enterprise tables and 2,700+ Citus PostgreSQL partitions processing TB-scale telecom records, alongside custom DTAP (Dynamic Threshold Adaptive Projection) procedures.",
      "Automated ETL data pipelines using Apache Airflow and ClickHouse/PyArrow, processing 16.8M+ raw records into compressed Parquet datasets, and developed automated web scraping pipelines for Jakarta & Banten Telkomsel network assessments.",
    ],
    tags: [
      "Next.js",
      "Gemini API",
      "n8n",
      "Apache Superset",
      "Citus PostgreSQL",
      "PL/pgSQL",
      "Apache Airflow",
      "ClickHouse / PyArrow",
      "Python",
    ],
  },
  {
    id: "polban",
    categoryLabel: "Higher Education · Undergraduate",
    role: "Bachelor of Applied Science (D4) in Informatics Engineering",
    institution: "Politeknik Negeri Bandung (POLBAN)",
    location: "Bandung, West Java, Indonesia",
    period: "Aug 2023 – Aug 2027 (Expected)",
    description: [
      "Relevant Coursework: Software Analysis & Design, Data Structures & Algorithms, Software Architecture, Web Programming, Database Systems, and Distributed Systems.",
      "Architecting production full-stack web applications, monorepo PWAs, educational simulators, and RESTful backend APIs.",
    ],
    tags: [
      "Software Analysis & Design",
      "Data Structures & Algorithms",
      "Software Architecture",
      "Web Programming",
      "Database Systems",
      "Distributed Systems",
    ],
  },
  {
    id: "sman3-bukittinggi",
    categoryLabel: "Secondary Education · Alumni",
    role: "Natural Sciences (MIPA) & Japanese Language Proficiency",
    institution: "SMA Negeri 3 Bukittinggi",
    location: "Bukittinggi, West Sumatra, Indonesia",
    period: "2020 – 2023",
    description: [
      "Achieved JLPT N3 Certification in Japanese Language Proficiency (2022).",
      "Awarded 3rd Place in the National High School Japanese Presentation Contest organized by The Japan Foundation x MoECRT (2023).",
      "Served as President / Leader of Nihongo Kurabu (Japanese Language & Culture Club, 2021 – 2023), steering language workshops and cultural programs.",
    ],
    tags: [
      "JLPT N3 Certified",
      "The Japan Foundation Awardee",
      "Nihongo Kurabu President",
      "MIPA",
    ],
  },
];

const Experience: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const featuredHonors = achievementsData.filter((item) => item.featured);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="py-16 sm:py-24 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-20 sm:space-y-24">
        {/* 1. CAREER & EDUCATION TIMELINE */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start mb-10 sm:mb-14">
            <div className="md:col-span-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-secondary pt-1 md:pt-2">
              <span>CAREER &amp; EDUCATION</span>
              <span className="inline-block w-8 h-px bg-ink-muted" />
            </div>

            <div className="md:col-span-8">
              <h2 className="text-lg sm:text-2xl lg:text-[1.75rem] leading-[1.45] sm:leading-[1.38] font-normal text-ink-primary tracking-tight">
                Enterprise{" "}
                <span className="text-ink-muted">
                  database &amp; full-stack engineering
                </span>{" "}
                for a Tier-1 Telco provider alongside formal training in{" "}
                <span className="text-ink-muted">
                  software architecture &amp; applied informatics
                </span>
                .
              </h2>
            </div>
          </div>

          <div className="divide-y divide-line border-t border-b border-line">
            {timelineData.map((item, index) => {
              const isExpanded = !!expandedIds[item.id];
              const hasMore = item.description.length > 2;
              const visibleDescriptions =
                hasMore && !isExpanded
                  ? item.description.slice(0, 2)
                  : item.description;

              return (
                <div
                  key={item.id}
                  className="py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-start"
                >
                  <div className="lg:col-span-4 space-y-1">
                    <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.15em] text-ink-muted">
                      0{index + 1} — {item.categoryLabel}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-ink-primary">
                      {item.period}
                    </p>
                    <p className="text-xs text-ink-secondary">{item.location}</p>
                  </div>

                  <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-semibold text-ink-primary tracking-tight leading-snug">
                        {item.role}
                      </h3>
                      <p className="text-xs sm:text-base font-medium text-ink-secondary mt-1">
                        {item.institution}
                      </p>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-base text-ink-secondary leading-[1.65] sm:leading-relaxed list-disc pl-4 sm:pl-5">
                      {visibleDescriptions.map((desc, idx) => (
                        <li key={idx} className="pl-1">
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {hasMore && (
                      <div>
                        <button
                          type="button"
                          onClick={() => toggleExpand(item.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-primary hover:opacity-70 transition-opacity"
                        >
                          {isExpanded ? (
                            <>
                              <span>Show Less</span>
                              <FaChevronUp size={10} />
                            </>
                          ) : (
                            <>
                              <span>
                                Read More ({item.description.length - 2} More)
                              </span>
                              <FaChevronDown size={10} />
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    <p className="pt-1 sm:pt-2 text-[11px] sm:text-xs font-mono text-ink-muted leading-relaxed">
                      {item.tags.join(" · ")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. SELECTED HONORS & AWARDS (Latest 6 + Link to Full /achievements Archive) */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start mb-10 sm:mb-12">
            <div className="md:col-span-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-secondary pt-1 md:pt-2">
              <span>HONORS &amp; AWARDS</span>
              <span className="inline-block w-8 h-px bg-ink-muted" />
            </div>

            <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-lg sm:text-2xl lg:text-[1.75rem] leading-[1.45] sm:leading-[1.38] font-normal text-ink-primary tracking-tight max-w-xl">
                Selected{" "}
                <span className="text-ink-muted">national championships</span>,{" "}
                <span className="text-ink-muted">scientific finals</span>, and{" "}
                <span className="text-ink-muted">language certifications</span>.
              </h2>

              <Link
                href="/achievements"
                className="min-h-[40px] inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-primary hover:opacity-70 transition-opacity border-b border-ink-primary pb-1 shrink-0 self-start sm:self-auto"
              >
                View All {achievementsData.length} Awards{" "}
                <FaArrowRight size={10} />
              </Link>
            </div>
          </div>

          <div className="divide-y divide-line border-t border-b border-line">
            {featuredHonors.map((item, idx) => (
              <div
                key={item.id}
                className="py-5 sm:py-7 grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 items-baseline"
              >
                <div className="md:col-span-3 text-[11px] sm:text-xs font-mono text-ink-muted">
                  0{idx + 1} — {item.year} · {item.scale.toUpperCase()}
                </div>

                <div className="md:col-span-6 space-y-1">
                  <h3 className="text-sm sm:text-lg font-semibold text-ink-primary tracking-tight leading-snug">
                    {item.award} — {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary">
                    {item.field}
                  </p>
                </div>

                <div className="md:col-span-3 md:text-right text-xs text-ink-muted sm:text-ink-secondary">
                  {item.organizer}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/achievements"
              className="min-h-[48px] px-6 sm:px-8 py-3 rounded-full border border-line bg-surface hover:border-ink-primary text-ink-primary text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.18em] inline-flex items-center gap-3 transition-all text-center"
            >
              <span>
                Explore Complete Archive ({achievementsData.length} Records)
              </span>
              <FaArrowRight size={11} className="shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
