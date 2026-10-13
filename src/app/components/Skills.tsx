import React from "react";
import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiFramer,
  SiFlutter,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiClickhouse,
  SiPython,
  SiPrisma,
  SiSupabase,
  SiN8N,
  SiGooglegemini,
  SiApacheairflow,
  SiDatadog,
  SiGithubactions,
  SiDocker,
  SiLinux,
  SiTurborepo,
} from "react-icons/si";
import {
  FaClipboardCheck,
  FaProjectDiagram,
  FaBolt,
} from "react-icons/fa";

interface SkillItem {
  name: string;
  detail: string;
  icons: IconType[];
}

interface SkillGroup {
  number: string;
  title: string;
  summary: string;
  items: SkillItem[];
}

const curatedSkillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Frontend & Web Engineering",
    summary: "App Router SSR/CSR, Modern Component Systems & Mobile-First PWAs",
    items: [
      {
        name: "Next.js 15/16",
        detail: "App Router, RSC & Server Actions",
        icons: [SiNextdotjs],
      },
      {
        name: "React 19 & TypeScript",
        detail: "Strict Type-Safe UI Architecture",
        icons: [SiReact, SiTypescript],
      },
      {
        name: "Tailwind CSS v4 & MUI v6",
        detail: "Design Tokens & Component Systems",
        icons: [SiTailwindcss, SiMui],
      },
      {
        name: "Recharts & Framer Motion",
        detail: "Analytical Charts & Micro-Interactions",
        icons: [SiFramer],
      },
      {
        name: "PWA Manifest & Flutter",
        detail: "Installable Mobile-First & Cross-Platform",
        icons: [SiFlutter],
      },
    ],
  },
  {
    number: "02",
    title: "Backend, APIs & Distributed Data",
    summary: "High-Concurrency Services, Relational Modeling & TB-Scale Databases",
    items: [
      {
        name: "NestJS 11 & Node.js",
        detail: "Modular Enterprise RESTful APIs",
        icons: [SiNestjs, SiNodedotjs],
      },
      {
        name: "Express.js & FastAPI",
        detail: "Lightweight Microservices & Python APIs",
        icons: [SiExpress, SiFastapi],
      },
      {
        name: "PostgreSQL (Citus)",
        detail: "Distributed Sharding & PL/pgSQL Tuning",
        icons: [SiPostgresql],
      },
      {
        name: "ClickHouse & PyArrow",
        detail: "Columnar OLAP & Parquet Pipelines",
        icons: [SiClickhouse, SiPython],
      },
      {
        name: "Prisma ORM & Supabase",
        detail: "Schema Governance, Auth & Telemetry",
        icons: [SiPrisma, SiSupabase],
      },
    ],
  },
  {
    number: "03",
    title: "DevOps, Observability & AI",
    summary: "Automated Workflows, Agentic Orchestration & Production Telemetry",
    items: [
      {
        name: "n8n & Gemini API",
        detail: "Autonomous BI Agents & AI Orchestration",
        icons: [SiN8N, SiGooglegemini],
      },
      {
        name: "Apache Airflow",
        detail: "Automated DAG & ETL Scheduling",
        icons: [SiApacheairflow],
      },
      {
        name: "Datadog (APM & RUM)",
        detail: "Latency Logging & System Observability",
        icons: [SiDatadog],
      },
      {
        name: "GitHub Actions & Docker",
        detail: "CI/CD Pipelines & Containerization",
        icons: [SiGithubactions, SiDocker],
      },
      {
        name: "Linux (Ubuntu/Debian)",
        detail: "Server CLI & Production Deployment",
        icons: [SiLinux],
      },
    ],
  },
  {
    number: "04",
    title: "Software Engineering & Process",
    summary: "Upstream Requirements Specification & Scalable Workspace Design",
    items: [
      {
        name: "Turborepo Monorepo",
        detail: "Multi-App Workspace Isolation",
        icons: [SiTurborepo],
      },
      {
        name: "System Requirements & RBAC",
        detail: "Upstream Architecture & Role Modeling",
        icons: [FaClipboardCheck],
      },
      {
        name: "Software Analysis & Design",
        detail: "Domain Workflows & Business Rules",
        icons: [FaProjectDiagram],
      },
      {
        name: "SSR / CSR Hybrid Design",
        detail: "Performance & Core Web Vitals Tuning",
        icons: [FaBolt],
      },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Asymmetric Editorial Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start mb-12 sm:mb-20">
          <div className="md:col-span-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-secondary pt-1 md:pt-2">
            <span>TECHNICAL STACK</span>
            <span className="inline-block w-8 h-px bg-ink-muted" />
          </div>

          <div className="md:col-span-8">
            <h2 className="text-lg sm:text-2xl lg:text-[1.75rem] leading-[1.45] sm:leading-[1.38] font-normal text-ink-primary tracking-tight">
              A focused,{" "}
              <span className="text-ink-muted">production-proven stack</span>{" "}
              aligned with my engineering resume — spanning{" "}
              <span className="text-ink-muted">
                upstream system architecture
              </span>
              ,{" "}
              <span className="text-ink-muted">
                Next.js/Turborepo frontends
              </span>
              , and{" "}
              <span className="text-ink-muted">
                TB-scale distributed databases
              </span>
              .
            </h2>
          </div>
        </div>

        {/* 4-Pillar Editorial Specification Grid with Official Technology Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {curatedSkillGroups.map((group) => (
            <div
              key={group.number}
              className="rounded-[24px] sm:rounded-[28px] bg-surface border border-line p-5 sm:p-8 lg:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 border-b border-line pb-4 mb-4 sm:mb-5">
                  <div>
                    <span className="text-xs font-mono text-ink-muted block mb-1">
                      {group.number}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-semibold text-ink-primary tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-ink-secondary mb-5 leading-relaxed">
                  {group.summary}
                </p>

                <ul className="divide-y divide-line/70">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="py-3.5 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        {/* Icon Container */}
                        <div className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-surface-muted border border-line text-ink-primary shrink-0">
                          {item.icons.map((Icon, iIdx) => (
                            <Icon key={iIdx} className="w-4 h-4" />
                          ))}
                        </div>

                        <div className="min-w-0">
                          <span className="text-sm font-semibold text-ink-primary block truncate">
                            {item.name}
                          </span>
                          <span className="text-[11px] sm:hidden font-mono text-ink-secondary block truncate mt-0.5">
                            {item.detail}
                          </span>
                        </div>
                      </div>

                      <span className="hidden sm:inline-block text-xs font-mono text-ink-secondary text-right shrink-0">
                        {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;