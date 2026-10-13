"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaBookOpen,
  FaArrowUpRightFromSquare,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
} from "react-icons/fa6";
import { projectsData } from "@/lib/projectsData";
import TechStackIcons from "@/app/components/TechStackIcons";

const Projects: React.FC = () => {
  const [expandedHighlights, setExpandedHighlights] = useState<
    Record<string, boolean>
  >({});

  const featuredProjects = projectsData.filter((p) => p.featured);

  const toggleProjectHighlights = (id: string) => {
    setExpandedHighlights((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="py-16 sm:py-24 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Editorial Asymmetric Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start mb-12 sm:mb-20">
          <div className="md:col-span-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-secondary pt-1 md:pt-2">
            <span>SELECTED WORK</span>
            <span className="inline-block w-8 h-px bg-ink-muted" />
          </div>

          <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-ink-primary leading-[1.38] sm:leading-[1.3] max-w-2xl">
              Featured{" "}
              <span className="text-ink-muted">Projects &amp; Case Studies</span>{" "}
              — Architecting production platforms from{" "}
              <span className="text-ink-muted">
                autonomous enterprise BI agents &amp; monorepo PWAs
              </span>{" "}
              to{" "}
              <span className="text-ink-muted">
                self-hosted personal operating systems
              </span>
              .
            </h2>

            <Link
              href="/projects"
              className="min-h-[40px] inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-primary hover:opacity-70 transition-opacity border-b border-ink-primary pb-1 shrink-0 self-start sm:self-auto"
            >
              View All {projectsData.length} Projects <FaArrowRight size={10} />
            </Link>
          </div>
        </div>

        {/* Staggered Showcase Frames */}
        <div className="space-y-12 sm:space-y-24">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const isExpanded = !!expandedHighlights[project.id];

            return (
              <article
                key={project.id}
                className={`w-full lg:w-[82%] ${
                  isEven ? "lg:ml-auto" : "lg:mr-auto"
                } rounded-[24px] sm:rounded-[36px] bg-surface-muted p-4 sm:p-8 lg:p-12 border border-line/70 transition-all duration-300`}
              >
                {/* Clean Rounded Screenshot Frame (No Fake URL Bar Clutter) */}
                <div className="rounded-xl sm:rounded-2xl bg-surface border border-line shadow-[0_12px_32px_rgba(20,20,22,0.06)] overflow-hidden group">
                  <div className="relative w-full overflow-hidden bg-surface-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1920}
                      height={920}
                      sizes="(max-width: 1024px) 100vw, 920px"
                      className="w-full h-auto block group-hover:scale-[1.015] transition-transform duration-700"
                    />

                    {/* Centered Circular VIEW Button ONLY for projects with a public Live Demo */}
                    {project.links.demo && (
                      <div className="hidden sm:flex absolute inset-0 bg-ink-primary/0 group-hover:bg-ink-primary/15 transition-colors items-center justify-center">
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-footer-bg/95 text-ink-inverse text-[11px] font-semibold uppercase tracking-[0.2em] flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
                        >
                          View
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Clean Editorial Project Details Below Frame */}
                <div className="mt-5 sm:mt-9 space-y-4 sm:space-y-5 px-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-[0.14em] text-ink-muted border-b border-line pb-3">
                    <span>
                      0{idx + 1} — {project.role || "Software Engineering"}
                    </span>
                    <span>{project.date}</span>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5 sm:gap-6">
                    <div className="space-y-3 max-w-2xl">
                      <div>
                        <h3 className="text-xl sm:text-3xl font-semibold text-ink-primary tracking-tight">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-xs sm:text-sm font-medium text-ink-secondary mt-1 leading-snug">
                            {project.subtitle}
                          </p>
                        )}
                      </div>

                      <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                        {project.description}
                      </p>

                      {/* Expandable "Read More" Technical Highlights */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div className="pt-1 space-y-2.5">
                          {isExpanded && (
                            <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary leading-relaxed list-disc pl-4 sm:pl-5">
                              {project.highlights.map((h, hIdx) => (
                                <li key={hIdx} className="pl-1">
                                  {h}
                                </li>
                              ))}
                            </ul>
                          )}

                          <button
                            type="button"
                            onClick={() => toggleProjectHighlights(project.id)}
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
                                  Read More ({project.highlights.length} Key
                                  Highlights)
                                </span>
                                <FaChevronDown size={10} />
                              </>
                            )}
                          </button>
                        </div>
                      )}

                      {project.partners && project.partners.length > 0 && (
                        <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-ink-secondary">
                          <span className="text-ink-muted">
                            Co-developed with:
                          </span>
                          {project.partners.map((partner, pIdx) => (
                            <a
                              key={pIdx}
                              href={partner.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 font-medium text-ink-primary hover:underline"
                            >
                              <FaLinkedin size={12} className="text-ink-muted" />
                              {partner.name}
                            </a>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Icons with Hover Tooltips */}
                      <TechStackIcons stack={project.stack} />
                    </div>

                    <div className="flex flex-wrap items-center gap-5 shrink-0 pt-1">
                      {project.hasCaseStudy && (
                        <Link
                          href={`/projects/${project.id}`}
                          className="min-h-[44px] inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-primary hover:opacity-70 transition-opacity border-b border-ink-primary pb-1"
                        >
                          <FaBookOpen size={12} /> Read Case Study
                        </Link>
                      )}

                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[44px] inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-secondary hover:text-ink-primary transition-colors border-b border-line hover:border-ink-primary pb-1"
                        >
                          Live Demo <FaArrowUpRightFromSquare size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Dedicated /projects Archive Page Button */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-line flex justify-center">
          <Link
            href="/projects"
            className="min-h-[48px] px-6 sm:px-8 py-3 rounded-full border border-line bg-surface hover:border-ink-primary text-ink-primary text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em] inline-flex items-center gap-3 transition-all"
          >
            <span>
              Explore Complete Project Archive ({projectsData.length} Projects)
            </span>
            <FaArrowRight size={11} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;