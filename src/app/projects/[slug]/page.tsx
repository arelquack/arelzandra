import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import TechStackIcons from "@/app/components/TechStackIcons";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaShieldAlt,
  FaCheckCircle,
  FaChartLine,
  FaGraduationCap,
  FaProjectDiagram,
  FaCoins,
  FaTasks,
  FaHeartbeat,
  FaBook,
  FaGamepad,
  FaCode,
  FaServer,
  FaDatabase,
  FaExternalLinkAlt,
  FaTrophy,
  FaNewspaper,
  FaImages,
  FaPalette,
  FaUsers,
  FaFileAlt,
  FaLayerGroup,
  FaCalendarAlt,
  FaLanguage,
  FaPaintBrush,
  FaPenNib,
  FaTheaterMasks,
  FaBookOpen,
  FaMicrophoneAlt,
  FaGuitar,
  FaPaperPlane,
  FaMobileAlt,
  FaClipboardCheck,
  FaBuilding,
  FaBullhorn,
  FaLock,
  FaTachometerAlt,
} from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "superflow" },
    { slug: "simona-polban" },
    { slug: "nexus" },
    { slug: "website-nk" },
  ];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (slug === "superflow") {
    return {
      title: "Superflow Enterprise — Case Study",
      description:
        "Architectural case study of Superflow Enterprise, an Autonomous Conversational BI Agent & Automated Apache Superset Engineering platform built for Tier-1 Telecom Data Analytics.",
    };
  }
  if (slug === "simona-polban") {
    return {
      title: "SiMona Polban — Case Study",
      description:
        "Architectural case study of SiMona Polban, an Integrated Dormitory Operations Platform (Web & Mobile PWA) built with Turborepo, Next.js 15, React 19, MUI v6, NestJS 11, Prisma, and PostgreSQL.",
    };
  }
  if (slug === "nexus") {
    return {
      title: "Nexus — Case Study",
      description:
        "Deep dive architectural case study of Nexus, a self-hosted personal operating system built with Next.js 16, Supabase PostgreSQL, HTML5 Canvas 2D Force Graph, and PWA.",
    };
  }
  if (slug === "website-nk") {
    return {
      title: "Nihongo Kurabu Portal — Case Study",
      description:
        "Deep dive architectural case study of NK Project, a modern full-stack web application & CMS dashboard built for Nihongo Kurabu SMAN 3 Bukittinggi.",
    };
  }
  return { title: "Project Case Study" };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;

  if (
    slug !== "superflow" &&
    slug !== "simona-polban" &&
    slug !== "nexus" &&
    slug !== "website-nk"
  ) {
    return notFound();
  }

  // =========================================================================
  // 0. SUPERFLOW ENTERPRISE — AUTONOMOUS CONVERSATIONAL BI AGENT
  // =========================================================================
  if (slug === "superflow") {
    const reactTools = [
      {
        name: "create_superset_dashboard",
        desc: "Automates virtual dataset registration, multi-chart slice creation, 2x2 grid assembly, and live Apache Superset dashboard publication.",
      },
      {
        name: "apply_dashboard_advanced_evaluations",
        desc: "Applies advanced statistical visualization transformations concurrently across target dashboards.",
      },
      {
        name: "troubleshoot_and_fix_chart",
        desc: "Autonomously diagnoses and heals SQL query errors, axis mismatches, and invalid temporal filters on non-timeseries tables.",
      },
      {
        name: "mutate_dashboard_card_layout",
        desc: "Mutates Superset AST position_json dimensions (1–12 columns) via natural language with an Auto-Reflow Guardrail.",
      },
      {
        name: "mutate_superset_chart_viz",
        desc: "Performs isolated in-place chart visualization type mutations via HTTP PUT without creating duplicate slices.",
      },
      {
        name: "mutate_superset_chart_colors",
        desc: "Synchronizes two-layer corporate and semantic color palettes (Telkomsel Corporate, Bright Vibrant, Luxury Jewel Tone).",
      },
      {
        name: "apply_table_conditional_formatting",
        desc: "Injects dynamic row-level conditional formatting rules (e.g., highlighting Delayed pipeline statuses).",
      },
      {
        name: "search_superset_assets",
        desc: "Reads directly from live Superset REST API (GET /api/v1/dashboard/) to eliminate 100% of stale catalog hallucinations.",
      },
      {
        name: "get_schema_tables & execute_sql_query",
        desc: "Inspects schema metadata and executes strictly sanitized read-only SQL probes across multi-server PostgreSQL clusters.",
      },
      {
        name: "get_dashboard_sources_and_lineage",
        desc: "Traces end-to-end data lineage from upstream PostgreSQL schemas down to individual Superset visualization slices.",
      },
      {
        name: "get_dashboard_freshness_status",
        desc: "Monitors real-time ETL pipeline freshness and detects delayed data ingestion across production tables.",
      },
    ];

    const comparisonMatrix = [
      {
        metric: "Dashboard Creation Cycle Time",
        before: "15 to 30 minutes per dashboard (Manual SQL Lab + Drag & Drop)",
        after: "1.5 to 3.5 seconds end-to-end (Autonomous ReAct Generation)",
      },
      {
        metric: "Chart & Palette Modification",
        before: "Create new slice from scratch, delete old chart, rebuild layout",
        after: "In-Place Mutation (HTTP PUT) with zero duplicate dashboard sprawl",
      },
      {
        metric: "Grid Sizing & Layout Orchestration",
        before: "Manual mouse drag-and-drop inside Superset edit mode",
        after: "Natural language ('widen', 'full width') with AST Auto-Reflow Guardrail",
      },
      {
        metric: "Data Dictionary & Schema Lookup",
        before: "Search static Excel/Confluence docs or ask a Data Engineer",
        after: "Sub-10ms in-memory Fast-Path Catalog Router across 45+ schemas",
      },
      {
        metric: "Customer Data Privacy (UU PDP)",
        before: "Risk of sensitive exposure if raw rows are exported to external tools",
        after: "Zero-Knowledge Data Plane (AI only sees DDL schema metadata)",
      },
      {
        metric: "Query & Axis Error Recovery",
        before: "User must manually debug SQL and Superset form_data parameters",
        after: "Autonomous Troubleshooting Engine diagnoses & self-heals chart axes",
      },
    ];

    const sprintRoadmap = [
      {
        sprint: "Phase 1",
        title: "Foundation, 2x2 Multi-Chart Grid & Corporate Styling",
        desc: "Established workflow orchestration, Gemini LLM + Superset REST API integration, 2x2 complementary multi-chart planning, SQL LIMIT/non-destructive guardrails, and corporate color palettes.",
      },
      {
        sprint: "Phase 2",
        title: "Sub-10ms Fast-Path Router & Smart Visual Heuristics",
        desc: "Built an in-memory catalog router answering schema queries in <10ms without LLM token overhead, paired with heuristic chart selection (Time-Series → Line, Categorical → Bar, Low-Cardinality → Donut).",
      },
      {
        sprint: "Phase 3",
        title: "In-Place Mutation & Multi-Server Database Integration",
        desc: "Eliminated dashboard duplication via in-place HTTP PUT updates, proactive empty-table detection, and unified multi-server PostgreSQL integration across distributed database clusters.",
      },
      {
        sprint: "Phase 4",
        title: "Pure Next.js App Router Migration & ReAct Agentic Trace",
        desc: "Migrated to a native Next.js App Router + TypeScript architecture featuring a transparent ReAct Execution Loop (Thinking, Action, Observation, Verification) and interactive Agentic Trace Widget.",
      },
      {
        sprint: "Phase 5",
        title: "Dynamic AST Grid Engine, Viz Intelligence & Self-Healing",
        desc: "Delivered Live Superset Asset Discovery, AST position_json card resizing with Auto-Reflow, Data Visualization Intelligence (mitigating Map Area Bias & Pie anti-patterns), and Autonomous Chart Troubleshooting.",
      },
    ];

    return (
      <div className="min-h-screen bg-canvas text-ink-primary flex flex-col">
        <Navbar />

        <main className="flex-grow pt-32 pb-24 px-5 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/projects"
              className="md:hidden inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-secondary hover:text-ink-primary mb-8 transition-colors group"
            >
              <FaArrowLeft
                size={10}
                className="mr-2 group-hover:-translate-x-1 transition-transform"
              />
              Back to Projects
            </Link>

            <header className="mb-12 border-b border-line pb-10 space-y-5">
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-ink-muted">
                CASE STUDY &amp; ARCHITECTURE · ENTERPRISE CONVERSATIONAL BI
              </p>

              <h1 className="font-serif uppercase text-4xl sm:text-6xl md:text-7xl text-ink-primary leading-[0.95] tracking-tight">
                Superflow Enterprise
              </h1>

              <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed">
                Autonomous Enterprise AI Agent for{" "}
                <strong className="text-ink-primary font-semibold">
                  Apache Superset &amp; Telecom Network Analytics
                </strong>{" "}
                — transforming natural-language executive instructions into
                production multi-chart dashboards, in-place grid mutations, and
                self-healing visualizations under a strict Zero-Knowledge Data
                Plane.
              </p>

              <div className="pt-2">
                <TechStackIcons
                  stack={[
                    "Next.js 16 (App Router)",
                    "TypeScript",
                    "Google Gemini Multi-Model Cascade",
                    "Apache Superset REST API",
                    "n8n",
                    "Multi-Server PostgreSQL",
                    "Tailwind CSS",
                  ]}
                />
              </div>
            </header>

            {/* Hero Banner Image */}
            <div className="rounded-[24px] sm:rounded-[28px] bg-surface-muted p-3.5 sm:p-6 border border-line mb-16">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-line bg-surface shadow-[0_12px_32px_rgba(20,20,22,0.05)]">
                <Image
                  src="/images/projects/superflow-chatbot.png"
                  alt="Superflow Enterprise — Autonomous Conversational BI Agent"
                  width={1920}
                  height={920}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>

            <article className="space-y-16 text-ink-secondary leading-relaxed">
              {/* Security & Zero-Knowledge Callout */}
              <div className="p-6 sm:p-8 rounded-[24px] bg-surface-muted border border-line flex items-start gap-4">
                <FaShieldAlt className="w-5 h-5 text-ink-primary shrink-0 mt-1" />
                <div className="space-y-1.5">
                  <strong className="text-ink-primary font-semibold text-base block">
                    Zero-Knowledge Data Plane &amp; UU PDP Compliance
                  </strong>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    Superflow enforces a strict physical separation between the{" "}
                    <strong className="text-ink-primary">Control Plane</strong>{" "}
                    (DDL schema metadata, SQL definitions, and Superset JSON
                    layout AST) and the{" "}
                    <strong className="text-ink-primary">Data Plane</strong>{" "}
                    (isolated behind corporate VPN). The AI model never receives
                    or stores raw customer records, and destructive SQL verbs
                    (<code className="font-mono text-xs">DROP, DELETE, TRUNCATE, ALTER</code>)
                    are blocked at the lexical parser level.
                  </p>
                </div>
              </div>

              {/* 01 — Executive Overview & Problem Statement */}
              <section className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted">
                  01 — Executive Overview &amp; Problem Statement
                </h2>
                <div className="text-base sm:text-lg text-ink-primary bg-surface p-6 sm:p-8 rounded-[24px] border border-line leading-relaxed space-y-4">
                  <p>
                    Managing telecom network performance analytics across
                    multi-server PostgreSQL clusters (45+ active schemas and
                    4,792 analytical tables covering 4G/5G radio capacity, CSSR,
                    DCR, competitor benchmarks, and incident tickets) previously
                    required a manual{" "}
                    <strong className="font-semibold">
                      15 to 30 minute cycle per dashboard request
                    </strong>
                    . Analysts had to manually write complex SQL in Superset SQL
                    Lab, register virtual datasets, configure individual chart
                    slices, and drag-and-drop grid layouts.
                  </p>
                  <p className="text-sm sm:text-base text-ink-secondary">
                    Furthermore, minor visual revisions in conventional BI
                    workflows caused severe{" "}
                    <strong className="text-ink-primary font-medium">
                      Dashboard Sprawl
                    </strong>{" "}
                    (hundreds of duplicate dashboards), while schema changes
                    frequently triggered blind <code className="font-mono text-xs">Network Error</code>{" "}
                    failures.{" "}
                    <strong className="text-ink-primary font-medium">
                      Superflow Enterprise
                    </strong>{" "}
                    solves this end-to-end: translating natural-language
                    prompts into verified multi-chart Apache Superset dashboards
                    in <strong className="text-ink-primary">1.5–3.5 seconds</strong>{" "}
                    with live in-place mutation and autonomous self-healing.
                  </p>
                </div>
              </section>

              {/* 02 — Operational Impact Matrix (Before vs After) */}
              <section className="space-y-6">
                <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted">
                  02 — Operational Impact (Manual Process vs Superflow Enterprise)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-surface border border-line space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase">
                      <FaTachometerAlt className="text-ink-primary" /> Time-to-Insight
                    </div>
                    <p className="text-2xl font-serif font-bold text-ink-primary">
                      ~2.1 Seconds
                    </p>
                    <p className="text-xs text-ink-secondary">
                      Down from 15–30 minutes per multi-chart dashboard request
                      (&gt;85% operational time saved).
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface border border-line space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase">
                      <FaDatabase className="text-ink-primary" /> Fast-Path Router
                    </div>
                    <p className="text-2xl font-serif font-bold text-ink-primary">
                      &lt; 10 ms
                    </p>
                    <p className="text-xs text-ink-secondary">
                      In-memory schema &amp; table catalog lookup across 4,792
                      tables with zero LLM token consumption.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface border border-line space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase">
                      <FaLayerGroup className="text-ink-primary" /> Dashboard Sprawl
                    </div>
                    <p className="text-2xl font-serif font-bold text-ink-primary">
                      0% Duplicates
                    </p>
                    <p className="text-xs text-ink-secondary">
                      Isolated in-place mutation via{" "}
                      <code className="font-mono text-[11px]">
                        PUT /api/v1/dashboard/&lt;id&gt;
                      </code>
                      .
                    </p>
                  </div>
                </div>

                <div className="rounded-[24px] bg-surface border border-line overflow-hidden">
                  <div className="divide-y divide-line">
                    {comparisonMatrix.map((row, idx) => (
                      <div
                        key={idx}
                        className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-start text-xs sm:text-sm"
                      >
                        <div className="md:col-span-4 font-semibold text-ink-primary">
                          {row.metric}
                        </div>
                        <div className="md:col-span-4 text-ink-muted">
                          <span className="font-mono text-[10px] uppercase tracking-wider block mb-0.5">
                            Before (Manual):
                          </span>
                          {row.before}
                        </div>
                        <div className="md:col-span-4 text-ink-primary font-medium">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted block mb-0.5">
                            After (Superflow):
                          </span>
                          {row.after}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 03 — Core System Innovations */}
              <section className="space-y-6 pt-6 border-t border-line">
                <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted">
                  03 — Core System Architecture &amp; Guardrails
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaCode className="text-ink-primary" /> Autonomous ReAct Loop
                    </div>
                    <h3 className="text-ink-primary font-semibold text-lg">
                      Thinking → Action → Observation → Verification
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      Visualized live in the chat UI via{" "}
                      <code className="font-mono text-xs text-ink-primary">
                        AgenticTraceWidget.tsx
                      </code>
                      , coupled with a Strict Anti-Blindness Guardrail that
                      verifies physical Superset API responses before confirming
                      success.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaServer className="text-ink-primary" /> High Availability AI
                    </div>
                    <h3 className="text-ink-primary font-semibold text-lg">
                      6-Tier Gemini Multi-Model Cascade
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      Eliminates rate-limit downtime through automatic tiered
                      fallback across Gemini Flash and Pro model families with
                      session-scoped conversational memory.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaLayerGroup className="text-ink-primary" /> Layout AST Engine
                    </div>
                    <h3 className="text-ink-primary font-semibold text-lg">
                      Dynamic Grid &amp; Auto-Reflow Guardrail
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      Manipulates Superset&apos;s{" "}
                      <code className="font-mono text-xs text-ink-primary">
                        position_json
                      </code>{" "}
                      tree via natural language (&ldquo;narrow&rdquo;,
                      &ldquo;widen&rdquo;, &ldquo;full width&rdquo;),
                      automatically isolating 12-column full-width cards into
                      dedicated rows so adjacent charts never overlap.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaChartLine className="text-ink-primary" /> Viz Intelligence
                    </div>
                    <h3 className="text-ink-primary font-semibold text-lg">
                      Anti-Pattern &amp; Area Bias Mitigation
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      Prevents Pie/Donut charts on high-cardinality dimensions
                      (&gt;5–7 regions), mitigates Choropleth Map Area Bias via
                      Horizontal Ranked Bar Charts, and supports Confidence
                      Bands, Box Plots, and Treemaps.
                    </p>
                  </div>
                </div>
              </section>

              {/* 04 — 11 Autonomous ReAct Tools */}
              <section className="space-y-6 pt-6 border-t border-line">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted mb-2">
                    04 — Dynamic Tool Dispatcher (11 Integrated Agent Tools)
                  </h2>
                  <p className="text-ink-secondary text-sm sm:text-base">
                    Registered in{" "}
                    <code className="font-mono text-xs text-ink-primary">
                      src/lib/agentTools.ts
                    </code>{" "}
                    to orchestrate live Apache Superset REST APIs and multi-node
                    PostgreSQL introspection:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {reactTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="p-5 rounded-2xl bg-surface border border-line space-y-1.5"
                    >
                      <code className="text-xs font-mono font-bold text-ink-primary block">
                        {tool.name}
                      </code>
                      <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                        {tool.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 05 — Cumulative Sprint Evolution (Sprint 1 to Sprint 9) */}
              <section className="space-y-6 pt-6 border-t border-line">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted mb-2">
                    05 — Engineering Evolution (Sprint 1 — Sprint 9 Roadmap)
                  </h2>
                  <p className="text-ink-secondary text-sm sm:text-base">
                    Iterative progression from a single-chart generator PoC to a
                    self-healing autonomous conversational BI platform:
                  </p>
                </div>

                <div className="space-y-4">
                  {sprintRoadmap.map((s) => (
                    <div
                      key={s.sprint}
                      className="p-6 rounded-[24px] bg-surface border border-line space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-primary">
                          {s.sprint}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-ink-primary">
                          {s.title}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed pt-1">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            {/* Footer Navigation */}
            <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-secondary">
              <Link
                href="/projects"
                className="md:hidden inline-flex items-center text-ink-primary font-semibold uppercase tracking-[0.16em] hover:opacity-70 transition-opacity group"
              >
                <FaArrowLeft
                  size={10}
                  className="mr-2 group-hover:-translate-x-1 transition-transform"
                />
                Back to Projects
              </Link>
              <span className="font-mono text-ink-muted">
                Superflow Enterprise Case Study · Architected by Farrel Zandra
              </span>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // =========================================================================
  // 1. SIMONA POLBAN — INTEGRATED DORMITORY OPERATIONS PLATFORM
  // =========================================================================
  if (slug === "simona-polban") {
    const simonaModules = [
      {
        number: "01",
        name: "Incident Ticketing & Facility Reporting Engine",
        badge: "Facility & Safety Workflows",
        icon: FaTasks,
        description:
          "Digital ticketing pipeline replacing unstructured chat logs with structured facility damage and behavioral violation workflows across 48 dormitory rooms.",
        highlights: [
          "Supports photo evidence uploads (JPG/PNG up to 2MB) with client-side validation",
          "Emergency priority alerts and an Anonymous Toggle that masks reporter identity from public/staff views while preserving encrypted audit logs",
          "Strict state machine progression: PENDING → IN_PROGRESS → RESOLVED / REJECTED with mandatory rejection notes",
        ],
      },
      {
        number: "02",
        name: "Room Quota & Personal Inventory Governance",
        badge: "Spatial & Asset Management",
        icon: FaBuilding,
        description:
          "Spatial and asset management system governing 2 dormitory buildings (24 rooms per building, 48 rooms total, 4 residents per room).",
        highlights: [
          "Enforces hard capacity guard of maximum 4 active residents per room before permitting check-in assignment",
          "Tracks room-level shared facility states (Good, Damaged, Under Repair) alongside resident-owned personal electronics",
          "Dynamic electronic item registration directly feeds the quarterly tariff calculation engine",
        ],
      },
      {
        number: "03",
        name: "Resident Profile & Population Lifecycle",
        badge: "Multi-Cohort Directory",
        icon: FaUsers,
        description:
          "Centralized population directory supporting multi-cohort student onboarding, role-based filtering, and historical offboarding.",
        highlights: [
          "Supports 3 scholarship & program tracks (KIP-K, ADik, and Regular cohorts) with automated billing exemptions",
          "Soft-delete offboarding architecture vacating room slots without breaking historical ticket or payment foreign keys",
          "Self-service profile onboarding requiring emergency contact and study program verification on first login",
        ],
      },
      {
        number: "04",
        name: "Digital Leave & Late-Return Permit Workflow",
        badge: "Curfew & Leave Auditing",
        icon: FaCalendarAlt,
        description:
          "End-to-end digital curfew and overnight leave authorization replacing paper logbooks with timestamped approval trails.",
        highlights: [
          "Validates temporal integrity (return date strictly >= departure date) before queueing permits for mentor review",
          "Real-time approval/rejection dispatch with mandatory rejection notes and automated curfew monitoring",
          "Auto-flags overdue status when a resident passes their approved return timestamp without check-in confirmation",
        ],
      },
      {
        number: "05",
        name: "Quarterly Rent & Electronics Tariff Verification",
        badge: "Automated Billing Engine",
        icon: FaCoins,
        description:
          "Automated billing calculation and manual transfer receipt verification dashboard for quarterly dormitory rent cycles.",
        highlights: [
          "Automatic tariff formula: Total Quarterly Bill = (Base Monthly Rent + (Registered Electronics × Rp 20,000)) × 3 Months",
          "Automated Rp 0 exemption tagging for KIP-K and ADik scholarship residents while preserving full audit trails",
          "Side-by-side receipt inspection modal converting transfer proof status from PENDING to VERIFIED or REJECTED",
        ],
      },
      {
        number: "06",
        name: "Targeted Broadcast & Announcement CMS",
        badge: "Role-Aware Bulletins",
        icon: FaBullhorn,
        description:
          "Role-aware bulletin publisher delivering urgent operational notices to targeted dormitory buildings or the entire resident population.",
        highlights: [
          "Granular target-audience routing (All Residents, Building A Only, or Building B Only)",
          "Supports PDF circular attachments and priority pinning to the top of the resident mobile PWA feed",
          "Scheduled auto-archiving after expiration dates to keep the resident dashboard clutter-free",
        ],
      },
    ];

    return (
      <div className="min-h-screen bg-canvas text-ink-primary flex flex-col">
        <Navbar />

        <main className="flex-grow pt-32 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/projects"
              className="md:hidden inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-secondary hover:text-ink-primary mb-8 transition-colors group"
            >
              <FaArrowLeft
                size={10}
                className="mr-2 group-hover:-translate-x-1 transition-transform"
              />
              Back to Projects
            </Link>

            <header className="mb-12 border-b border-line pb-10 space-y-5">
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-ink-muted">
                CASE STUDY &amp; ARCHITECTURE · 2026 · FRONTEND LEAD &amp; REQUIREMENT ENGINEER
              </p>

              <h1 className="font-serif uppercase text-5xl sm:text-6xl md:text-7xl text-ink-primary leading-[0.95] tracking-tight">
                SiMona Polban
              </h1>

              <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed">
                Integrated Dormitory Operations Platform (Web &amp; Mobile PWA)
                engineered with{" "}
                <strong className="text-ink-primary font-semibold">
                  Trifur Group
                </strong>{" "}
                to digitize administration, incident ticketing, and financial
                reconciliation for 192 residents across 48 rooms at Politeknik
                Negeri Bandung.
              </p>

              <div className="pt-2">
                <TechStackIcons
                  stack={[
                    "Turborepo",
                    "Next.js 15",
                    "React 19",
                    "TypeScript",
                    "MUI v6",
                    "NestJS 11",
                    "Prisma",
                    "PostgreSQL",
                    "Docker",
                  ]}
                />
              </div>
            </header>

            {/* Hero Banner Image */}
            <div className="rounded-[24px] sm:rounded-[28px] bg-surface-muted p-3.5 sm:p-6 border border-line mb-16">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-line bg-surface shadow-[0_12px_32px_rgba(20,20,22,0.05)]">
                <Image
                  src="/images/projects/simona-landing-page.png"
                  alt="SiMona Polban — Integrated Dormitory Operations Platform"
                  width={1920}
                  height={920}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>

            <article className="space-y-16 text-ink-secondary leading-relaxed">
              {/* 01 — Executive Overview */}
              <section className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted">
                  01 — Executive Overview &amp; Problem Statement
                </h2>
                <div className="text-base sm:text-lg text-ink-primary bg-surface p-6 sm:p-8 rounded-[24px] border border-line leading-relaxed space-y-4">
                  <p>
                    Prior to{" "}
                    <strong className="font-semibold">SiMona Polban</strong>,
                    dormitory operations at Politeknik Negeri Bandung relied on
                    fragmented WhatsApp chats, manual spreadsheets, and physical
                    logbooks across 2 dormitory buildings (48 rooms, 192
                    residents). Damage reports frequently lost tracking history,
                    overnight permits lacked real-time curfew auditing, and
                    quarterly rent + personal electronics tariff calculations
                    required error-prone manual reconciliation.
                  </p>
                  <p className="text-sm sm:text-base text-ink-secondary">
                    Leading the upstream{" "}
                    <strong className="text-ink-primary font-medium">
                      System Requirements &amp; Domain Modeling
                    </strong>{" "}
                    and{" "}
                    <strong className="text-ink-primary font-medium">
                      Frontend Monorepo Architecture
                    </strong>
                    , we designed a dual-interface platform: an installable,
                    thumb-friendly Mobile PWA for dormitory residents and a
                    high-density Web Management Dashboard for administrators and
                    mentors.
                  </p>
                </div>
              </section>

              {/* 02 — System Architecture */}
              <section className="space-y-6">
                <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted">
                  02 — 3-Tier Monorepo System Architecture
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaMobileAlt className="text-ink-primary" /> Presentation Layer
                    </div>
                    <h3 className="text-ink-primary font-semibold text-lg">
                      Next.js 15, React 19 &amp; MUI v6 PWA
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      Managed inside a Turborepo monorepo with shared UI
                      primitives, delivering a desktop data-table dashboard for
                      staff and an installable Mobile-First PWA with Service
                      Workers for residents.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaServer className="text-ink-primary" /> Application Layer
                    </div>
                    <h3 className="text-ink-primary font-semibold text-lg">
                      NestJS 11 Modular REST API
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      Strict modular domain boundaries enforcing RBAC guards
                      (Admin, Mentor, Resident), automated tariff math, and rate
                      limiting.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaDatabase className="text-ink-primary" /> Data &amp; ORM Layer
                    </div>
                    <h3 className="text-ink-primary font-semibold text-lg">
                      PostgreSQL &amp; Prisma ORM
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      Type-safe relational schema governing rooms, cohorts,
                      electronic assets, tickets, permits, and payment ledgers
                      with automated daily database backups.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaLock className="text-ink-primary" /> Security &amp; Auth
                    </div>
                    <h3 className="text-ink-primary font-semibold text-lg">
                      JWT HTTP-Only Cookies &amp; Bcrypt
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      Dual-TTL session policies: 7-day persistent sessions on
                      resident Mobile PWA vs 24-hour staff Web sessions with
                      60-minute idle auto-logout.
                    </p>
                  </div>
                </div>
              </section>

              {/* 03 — 6 Core Functional Modules */}
              <section className="space-y-6 pt-6 border-t border-line">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted mb-2">
                    03 — Core Platform Modules (6 Domain Engines)
                  </h2>
                  <p className="text-ink-secondary text-sm sm:text-base">
                    End-to-end operational modules uniting resident self-service
                    and administrative governance:
                  </p>
                </div>

                <div className="space-y-6">
                  {simonaModules.map((mod) => (
                    <div
                      key={mod.number}
                      className="p-6 sm:p-8 rounded-[24px] bg-surface border border-line space-y-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
                        <div className="flex items-center gap-3.5">
                          <span className="text-xs font-mono text-ink-muted">
                            {mod.number}
                          </span>
                          <div className="p-2.5 rounded-xl bg-surface-muted text-ink-primary">
                            <mod.icon size={16} />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-ink-primary">
                            {mod.name}
                          </h3>
                        </div>
                        <span className="text-xs font-mono text-ink-muted uppercase tracking-wider">
                          {mod.badge}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                        {mod.description}
                      </p>

                      <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                        {mod.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <FaCheckCircle className="text-ink-primary w-3.5 h-3.5 shrink-0 mt-1" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* 04 — Performance & Operational Benchmarks */}
              <section className="space-y-6 pt-6 border-t border-line">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted mb-2">
                    04 — Performance &amp; Operational Targets
                  </h2>
                  <p className="text-ink-secondary text-sm sm:text-base">
                    Key responsiveness and concurrency benchmarks engineered
                    across the web and mobile PWA interfaces:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-surface border border-line space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase">
                      <FaTachometerAlt className="text-ink-primary" /> Mobile PWA Load
                    </div>
                    <p className="text-xl font-serif font-bold text-ink-primary">
                      &le; 3.0 Seconds
                    </p>
                    <p className="text-xs text-ink-secondary">
                      Maximum initial load time for Resident Mobile PWA over
                      standard 4G connections.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface border border-line space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase">
                      <FaChartLine className="text-ink-primary" /> Admin Query Latency
                    </div>
                    <p className="text-xl font-serif font-bold text-ink-primary">
                      &le; 2.0 Seconds
                    </p>
                    <p className="text-xs text-ink-secondary">
                      Maximum server query &amp; table render latency for Admin
                      dashboards on campus Wi-Fi.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface border border-line space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase">
                      <FaClipboardCheck className="text-ink-primary" /> Peak Concurrency
                    </div>
                    <p className="text-xl font-serif font-bold text-ink-primary">
                      300+ Sessions
                    </p>
                    <p className="text-xs text-ink-secondary">
                      Simultaneous active sessions supported without degradation
                      during peak curfew hours.
                    </p>
                  </div>
                </div>
              </section>
            </article>

            {/* Footer Navigation */}
            <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-secondary">
              <Link
                href="/projects"
                className="md:hidden inline-flex items-center text-ink-primary font-semibold uppercase tracking-[0.16em] hover:opacity-70 transition-opacity group"
              >
                <FaArrowLeft
                  size={10}
                  className="mr-2 group-hover:-translate-x-1 transition-transform"
                />
                Back to Projects
              </Link>
              <span className="font-mono text-ink-muted">
                SiMona Polban Case Study · Trifur Group
              </span>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // =========================================================================
  // 2. NIHONGO KURABU PORTAL (NK PROJECT)
  // =========================================================================
  if (slug === "website-nk") {
    const divisions = [
      {
        id: "kana",
        name: "Kana（かな）",
        desc: "Fundamental to advanced Hiragana, Katakana, Kanji, and vocabulary studies.",
        icon: FaLanguage,
      },
      {
        id: "shoudou",
        name: "Shoudou（書道）",
        desc: "Traditional Japanese calligraphy art utilizing brush and ink techniques.",
        icon: FaPaintBrush,
      },
      {
        id: "sakubun",
        name: "Sakubun（作文）",
        desc: "Japanese essay writing and grammatical composition arts.",
        icon: FaPenNib,
      },
      {
        id: "minidrama",
        name: "Mini Drama（ミニ・ドラマ）",
        desc: "Japanese performing arts, roleplay, theatrical acting, and scriptwriting.",
        icon: FaTheaterMasks,
      },
      {
        id: "roudoku",
        name: "Roudoku（朗読）",
        desc: "Expressive Japanese storytelling and precision aloud reading.",
        icon: FaBookOpen,
      },
      {
        id: "speech",
        name: "Speech（スピーチ）",
        desc: "Formal Japanese oratorical speech crafting for Bunkasai competition readiness.",
        icon: FaMicrophoneAlt,
      },
      {
        id: "akustik",
        name: "Akustik（アコースティック）",
        desc: "Acoustic musical arrangements and vocal performances of Japanese songs.",
        icon: FaGuitar,
      },
      {
        id: "origami",
        name: "Origami（折り紙）",
        desc: "High-precision traditional paper folding art creating intricate ornaments.",
        icon: FaPaperPlane,
      },
      {
        id: "anime",
        name: "Anime（アニメ）",
        desc: "Character design, comic illustration, and Manga visual arts.",
        icon: FaPalette,
      },
    ];

    const adminModules = [
      {
        id: "members",
        name: "Members & Registration",
        desc: "Online applicant verification and integrated active member database management.",
        icon: FaUsers,
      },
      {
        id: "achievements",
        name: "Achievement Catalog",
        desc: "Input and live updates for competition championship records (LKS, Bunkasai, Speech).",
        icon: FaTrophy,
      },
      {
        id: "blogs",
        name: "Article & Blog CMS",
        desc: "Publishing educational articles and news using the TipTap WYSIWYG Editor.",
        icon: FaNewspaper,
      },
      {
        id: "events",
        name: "Events & Agenda",
        desc: "Club activity scheduling, venue management, and event calendar orchestration.",
        icon: FaCalendarAlt,
      },
      {
        id: "finance",
        name: "Financial Ledger System",
        desc: "Cash tracking, income/expense auditing, category tagging, and automatic balance calculations.",
        icon: FaCoins,
      },
      {
        id: "gallery",
        name: "Cloudinary Gallery Cloud",
        desc: "Activity documentation image uploading via Cloudinary with automatic Supabase URL metadata syncing.",
        icon: FaImages,
      },
      {
        id: "alumni",
        name: "Alumni Directory",
        desc: "Graduated alumni directory and contact tracing for ongoing alumni network collaboration.",
        icon: FaGraduationCap,
      },
      {
        id: "managements",
        name: "Executive Management",
        desc: "Core organizational executive structure and division head management per operational period.",
        icon: FaLayerGroup,
      },
    ];

    return (
      <div className="min-h-screen bg-canvas text-ink-primary flex flex-col">
        <Navbar />

        <main className="flex-grow pt-32 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/projects"
              className="md:hidden inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-secondary hover:text-ink-primary mb-8 transition-colors group"
            >
              <FaArrowLeft
                size={10}
                className="mr-2 group-hover:-translate-x-1 transition-transform"
              />
              Back to Projects
            </Link>

            {/* Editorial Header */}
            <header className="mb-12 border-b border-line pb-10 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.16em] text-ink-muted">
                <span>CASE STUDY &amp; ARCHITECTURE · JAN 2025</span>
                <a
                  href="https://nk-project.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-ink-primary font-semibold hover:underline"
                >
                  Live Platform <FaExternalLinkAlt size={10} />
                </a>
              </div>

              <h1 className="font-serif uppercase text-5xl sm:text-6xl md:text-7xl text-ink-primary leading-[0.95] tracking-tight">
                Nihongo Kurabu Portal
              </h1>

              <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed">
                Modern Full-Stack Organization Portal, Media Publication, Online
                Member Registration &amp; Integrated Admin CMS built for{" "}
                <strong className="text-ink-primary font-semibold">
                  Nihongo Kurabu (日本語クラブ) SMAN 3 Bukittinggi
                </strong>
                .
              </p>

              <div className="pt-2">
                <TechStackIcons
                  stack={[
                    "Next.js 16",
                    "TypeScript",
                    "Tailwind CSS",
                    "Supabase",
                    "Cloudinary",
                    "GSAP",
                    "TipTap",
                    "Chart.js",
                  ]}
                />
              </div>
            </header>

            {/* Hero Banner Image */}
            <div className="rounded-[24px] sm:rounded-[28px] bg-surface-muted p-3.5 sm:p-6 border border-line mb-16">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-line bg-surface shadow-[0_12px_32px_rgba(20,20,22,0.05)]">
                <Image
                  src="/images/website-nk.png"
                  alt="Nihongo Kurabu Portal"
                  width={1920}
                  height={920}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>

            <article className="space-y-16 text-ink-secondary leading-relaxed">
              {/* Executive Overview */}
              <section className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted">
                  01 — Executive Overview
                </h2>
                <p className="text-base sm:text-lg text-ink-primary bg-surface p-6 sm:p-8 rounded-[24px] border border-line leading-relaxed">
                  NK Project is a modern web platform and integrated CMS built
                  with Next.js 16 designed as the official portal, media
                  publication channel, online member registration system, and
                  internal management hub for the{" "}
                  <strong>NIHONGO KURABU (日本語クラブ)</strong> organization at
                  SMA Negeri 3 Bukittinggi. The platform blends a modern
                  Japanese-inspired public interface with a robust
                  administrative backend for managing student members, event
                  schedules, published blogs, photo galleries, competition
                  achievements, and financial ledgers.
                </p>
              </section>

              {/* System Architecture & Tech Stack */}
              <section className="space-y-6">
                <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted">
                  02 — System Architecture &amp; Tech Stack
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaCode className="text-ink-primary" /> Core Framework
                    </div>
                    <h3 className="text-ink-primary font-semibold text-lg">
                      Next.js 16 &amp; TypeScript
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      App Router architecture, React Server &amp; Client
                      Components, and strict full-stack TypeScript data
                      contracts.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaDatabase className="text-ink-primary" /> Database &amp; Auth
                    </div>
                    <h3 className="text-ink-primary font-semibold text-lg">
                      Supabase PostgreSQL
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      Relational database managing members, achievements, blog
                      articles, events, finance ledgers, alumni, and admin
                      session auth.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaImages className="text-ink-primary" /> Media Storage Cloud
                    </div>
                    <h3 className="text-ink-primary font-semibold text-lg">
                      Cloudinary Cloud Storage
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      High-performance image uploading, cloud optimization, and
                      automatic CDN delivery for activity galleries.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaFileAlt className="text-ink-primary" /> Rich Text &amp; Charts
                    </div>
                    <h3 className="text-ink-primary font-semibold text-lg">
                      TipTap Editor &amp; Chart.js
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      WYSIWYG article editor for student publication alongside
                      real-time Chart.js financial &amp; demographic metrics.
                    </p>
                  </div>
                </div>
              </section>

              {/* 9 Specialized Learning Divisions */}
              <section className="space-y-6 pt-6 border-t border-line">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted mb-2">
                    03 — 9 Specialized Learning Divisions
                  </h2>
                  <p className="text-ink-secondary text-sm sm:text-base">
                    The platform provides interactive syllabus exploration for 9
                    distinct Japanese culture &amp; language learning divisions:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {divisions.map((div) => {
                    const IconComp = div.icon;
                    return (
                      <div
                        key={div.id}
                        className="p-5 rounded-2xl bg-surface border border-line hover:border-ink-primary transition-colors space-y-2.5"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-surface-muted text-ink-primary">
                            <IconComp size={15} />
                          </div>
                          <h3 className="text-ink-primary font-semibold text-sm sm:text-base">
                            {div.name}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                          {div.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Admin System & Management Dashboard */}
              <section className="space-y-6 pt-6 border-t border-line">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted mb-2">
                    04 — Admin System &amp; Management Dashboard
                  </h2>
                  <p className="text-ink-secondary text-sm sm:text-base">
                    Dedicated managerial portal protected by secure admin
                    authentication (
                    <code className="font-mono text-xs text-ink-primary">
                      /admin/login
                    </code>
                    ):
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {adminModules.map((mod) => (
                    <div
                      key={mod.id}
                      className="p-6 rounded-2xl bg-surface border border-line space-y-2.5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-surface-muted text-ink-primary">
                          <mod.icon size={16} />
                        </div>
                        <h3 className="text-ink-primary font-semibold text-base">
                          {mod.name}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Design & UX Highlights */}
              <section className="p-6 sm:p-8 rounded-[24px] bg-surface-muted border border-line space-y-4">
                <h3 className="text-lg font-semibold text-ink-primary flex items-center gap-2.5">
                  <FaPalette className="text-ink-primary" size={16} /> Japanese
                  Aesthetic &amp; High Performance UX
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                  <li className="flex items-start gap-2.5">
                    <FaCheckCircle className="text-ink-primary mt-1 shrink-0" />
                    <span>
                      <strong className="text-ink-primary">
                        Modern Japanese Aesthetic Theme:
                      </strong>{" "}
                      Blending Sakura Pink, Mountain Dark, and Tosca Green
                      accents with kanji typography{" "}
                      <code className="font-mono text-ink-primary">
                        日本語クラブ
                      </code>
                      .
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheckCircle className="text-ink-primary mt-1 shrink-0" />
                    <span>
                      <strong className="text-ink-primary">
                        GSAP Smooth Animations:
                      </strong>{" "}
                      Staggered animation reveals, smooth scroll transitions,
                      and dynamic typewriter text animation on the Hero section.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheckCircle className="text-ink-primary mt-1 shrink-0" />
                    <span>
                      <strong className="text-ink-primary">
                        Fast &amp; SEO Optimized:
                      </strong>{" "}
                      Pre-rendered static pages achieving top organic search
                      engine rankings for student organization queries.
                    </span>
                  </li>
                </ul>
              </section>
            </article>

            {/* Footer Navigation */}
            <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-secondary">
              <Link
                href="/projects"
                className="md:hidden inline-flex items-center text-ink-primary font-semibold uppercase tracking-[0.16em] hover:opacity-70 transition-opacity group"
              >
                <FaArrowLeft
                  size={10}
                  className="mr-2 group-hover:-translate-x-1 transition-transform"
                />
                Back to Projects
              </Link>
              <span className="font-mono text-ink-muted">
                NK Project Case Study · Architected by Farrel Zandra
              </span>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // =========================================================================
  // 3. NEXUS PERSONAL OPERATING SYSTEM (LIFEOS)
  // =========================================================================
  const modules = [
    {
      id: "overview",
      number: "01",
      name: "Main Portal & Live Metrics Dashboard",
      badge: "Core System Telemetry",
      icon: FaChartLine,
      description:
        "Real-time aggregated telemetry portal displaying multi-module status summaries, active task queues, daily schedules, and dynamic LifeOS XP progression rings.",
      highlights: [
        "Real-time aggregated metrics computed dynamically from 8 underlying PostgreSQL module schemas",
        "Dynamic XP level ring calculation updated instantly via Server Actions upon task completion",
        "Quick-action command widgets for daily journal entries, ledger entries, and upcoming events",
      ],
    },
    {
      id: "portfolio",
      number: "02",
      name: "Academic Curriculum & Achievement Repository",
      badge: "Credit Weight & Analytics Engine",
      icon: FaGraduationCap,
      description:
        "Multi-semester academic curriculum tracker, credit-weight analytics engine, and centralized competition award repository.",
      highlights: [
        "Relational semester course schema with automated credit-weight computation and longitudinal trend visualization",
        "Historical multi-subject performance charting with semester-over-semester delta analytics",
        "Structured repository indexing national and provincial competition awards with certificate metadata",
      ],
    },
    {
      id: "network",
      number: "03",
      name: "Nexus Network Constellation",
      badge: "HTML5 Canvas 2D Graph",
      icon: FaProjectDiagram,
      description:
        "Interactive 2D HTML5 Canvas physics-based force-directed graph mapping multi-hub community clusters and cross-organization relationships.",
      highlights: [
        "Custom physics-based force graph engine rendering interactive nodes and edges at 60 FPS on HTML5 Canvas",
        "Human-centric dual-indexing system supporting both formal legal names and natural call-name lookup",
        "Multi-context cross-referencing nodes connecting individuals shared across multiple organizational hubs",
      ],
    },
    {
      id: "finance",
      number: "04",
      name: "Multi-Account Ledger & Supply Forecast Engine",
      badge: "Ledger & Inventory Math",
      icon: FaCoins,
      description:
        "Real-time multi-account cash flow ledger, automated recurring supply depletion forecaster, and dynamic savings goal analyzer.",
      highlights: [
        "Multi-source double-entry-inspired ledger tracking categorized income and expense patterns across accounts",
        "Predictive supply restock planner computing remaining depletion days based on daily consumption rates",
        "Dynamic target coverage analyzer comparing liquid account balances against prioritized acquisition goals",
      ],
    },
    {
      id: "tasks",
      number: "05",
      name: "Task & Priority Matrix",
      badge: "Eisenhower Matrix",
      icon: FaTasks,
      description:
        "Prioritized task execution engine structured around the Eisenhower Matrix (Urgent/Important quadrants) with automated deadline tracking.",
      highlights: [
        "Eisenhower Matrix categorization for high-signal prioritization and urgency delegation",
        "Automated deadline countdown timers and state transitions across active and archived queues",
        "Instant client-side search and multi-tag filtering across project workstreams",
      ],
    },
    {
      id: "health",
      number: "06",
      name: "Biometric & Athletic Telemetry Tracker",
      badge: "Telemetry Logs",
      icon: FaHeartbeat,
      description:
        "Athletic endurance logger (distance, duration, pace, energy expenditure) paired with daily physical readiness journals.",
      highlights: [
        "Running telemetry calculator computing pace per kilometer, distance trends, and estimated energy burn",
        "Structured daily readiness and sleep quality logs for longitudinal wellness correlation",
      ],
    },
    {
      id: "learning",
      number: "07",
      name: "Japanese Kanji Spaced Repetition Engine",
      badge: "Memory Algorithm",
      icon: FaBook,
      description:
        "Algorithmic spaced-repetition flashcard system for Japanese JLPT vocabulary and Kanji mastery.",
      highlights: [
        "Spaced Repetition Algorithm dynamically scheduling review intervals based on recall accuracy",
        "JLPT Kanji and vocabulary corpus categorized by mastery stages and reading compounds",
      ],
    },
    {
      id: "lifeos",
      number: "08",
      name: "LifeOS Gamification Engine",
      badge: "XP & Leveling Mathematics",
      icon: FaGamepad,
      description:
        "Gamified progression engine computing non-linear XP curves across Levels 1 to 100 with dynamic rank milestones.",
      highlights: [
        "Mathematical XP Progression Formula: TotalXP(L) = floor(2.36 * (L - 1)^2 + 100 * (L - 1))",
        "100-tier progression curve with automated rank promotions (Apprentice, Specialist, Master, Nexus Sovereign)",
        "Event-driven habit telemetry rewarding completed engineering tasks, study sessions, and athletic logs",
      ],
      formula: "TotalXP(L) = ⌊2.36 × (L - 1)² + 100 × (L - 1)⌋",
    },
  ];

  return (
    <div className="min-h-screen bg-canvas text-ink-primary flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/projects"
            className="md:hidden inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-secondary hover:text-ink-primary mb-8 transition-colors group"
          >
            <FaArrowLeft
              size={10}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />
            Back to Projects
          </Link>

          {/* Editorial Header */}
          <header className="mb-12 border-b border-line pb-10 space-y-5">
            <p className="text-xs font-mono uppercase tracking-[0.16em] text-ink-muted">
              CASE STUDY &amp; ARCHITECTURE · JUN 2026 · PRIVATE SYSTEM
            </p>

            <h1 className="font-serif uppercase text-5xl sm:text-6xl md:text-7xl text-ink-primary leading-[0.95] tracking-tight">
              Nexus
            </h1>

            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed">
              A modern all-in-one personal operating system integrating
              curriculum analytics, 2D force-directed graph networking,
              multi-account financial ledgers, athletic telemetry, and a
              gamified XP leveling engine.
            </p>

            <div className="pt-2">
              <TechStackIcons
                stack={[
                  "Next.js 16",
                  "TypeScript",
                  "Tailwind CSS",
                  "Supabase PostgreSQL",
                  "HTML5 Canvas",
                  "PWA",
                ]}
              />
            </div>
          </header>

          {/* Hero Banner Image */}
          <div className="rounded-[24px] sm:rounded-[28px] bg-surface-muted p-3.5 sm:p-6 border border-line mb-16">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-line bg-surface shadow-[0_12px_32px_rgba(20,20,22,0.05)]">
              <Image
                src="/images/projects/nexus.jpg"
                alt="Nexus Personal Operating System"
                width={1920}
                height={920}
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>

          <article className="space-y-16 text-ink-secondary leading-relaxed">
            {/* Security & Privacy Callout */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-surface-muted border border-line flex items-start gap-4">
              <FaShieldAlt className="w-5 h-5 text-ink-primary shrink-0 mt-1" />
              <div className="space-y-1.5">
                <strong className="text-ink-primary font-semibold text-base block">
                  Data Privacy &amp; Security Specification
                </strong>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Nexus operates as a private, self-hosted instance managing
                  personal ledgers, telemetry logs, and private records. Public
                  live demo access and source repositories are restricted by
                  design, while full system architecture and mathematical module
                  specifications are documented below.
                </p>
              </div>
            </div>

            {/* Executive Overview Section */}
            <section className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted">
                01 — Executive Overview
              </h2>
              <p className="text-base sm:text-lg text-ink-primary bg-surface p-6 sm:p-8 rounded-[24px] border border-line leading-relaxed">
                Nexus is a self-hosted web-based Personal Operating System
                (LifeOS) engineered to unify task prioritization, curriculum
                analytics, financial ledgers, athletic telemetry, spaced-repetition
                learning, and force-graph relationship mapping into a single
                low-latency portal. Built with Next.js 16 Server Actions,
                Supabase PostgreSQL Row Level Security (RLS), PWA offline
                caching, and native JSON snapshot backup pipelines, Nexus serves
                as a centralized digital nervous system.
              </p>
            </section>

            {/* Core Architecture Section */}
            <section className="space-y-6">
              <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted">
                02 — Core System Architecture
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                  <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                    <FaCode className="text-ink-primary" /> Frontend Framework
                  </div>
                  <h3 className="text-ink-primary font-semibold text-lg">
                    Next.js 16 &amp; TypeScript
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    App Router, Server Components &amp; Server Actions for
                    zero-latency data mutations and strict type safety across
                    all 8 modules.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                  <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                    <FaDatabase className="text-ink-primary" /> Database &amp; Cloud
                  </div>
                  <h3 className="text-ink-primary font-semibold text-lg">
                    Supabase PostgreSQL
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    Relational data modeling, Row Level Security (RLS), and
                    real-time client subscriptions for instant state sync.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                  <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                    <FaProjectDiagram className="text-ink-primary" /> Interactive Graph
                  </div>
                  <h3 className="text-ink-primary font-semibold text-lg">
                    HTML5 Canvas 2D Engine
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    Custom physics-based force-directed graph rendering
                    multi-cluster relationship topologies in real time.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                  <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                    <FaServer className="text-ink-primary" /> Offline &amp; Backup
                  </div>
                  <h3 className="text-ink-primary font-semibold text-lg">
                    PWA &amp; JSON Snapshot Exporter
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    Service Worker for offline access and native full database
                    JSON backup &amp; restore pipeline (
                    <code className="font-mono text-xs text-ink-primary">
                      backup.ts
                    </code>
                    ).
                  </p>
                </div>
              </div>
            </section>

            {/* Detailed Modules Deep Dive */}
            <section className="space-y-8 pt-6 border-t border-line">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted mb-2">
                  03 — Module Deep Dive ({modules.length} Core Modules)
                </h2>
                <p className="text-ink-secondary text-sm sm:text-base">
                  Detailed breakdown of system modules, database models, and
                  mathematical engines powering Nexus.
                </p>
              </div>

              <div className="space-y-6">
                {modules.map((mod) => (
                  <div
                    key={mod.id}
                    className="p-6 sm:p-8 rounded-[24px] bg-surface border border-line space-y-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
                      <div className="flex items-center gap-3.5">
                        <span className="text-xs font-mono text-ink-muted">
                          {mod.number}
                        </span>
                        <div className="p-2.5 rounded-xl bg-surface-muted text-ink-primary">
                          <mod.icon size={16} />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-ink-primary">
                          {mod.name}
                        </h3>
                      </div>

                      <span className="text-xs font-mono text-ink-muted uppercase tracking-wider">
                        {mod.badge}
                      </span>
                    </div>

                    <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
                      {mod.description}
                    </p>

                    {mod.formula && (
                      <div className="p-4 rounded-xl bg-surface-muted border border-line font-mono text-center">
                        <span className="text-ink-muted block mb-1 uppercase tracking-wider text-[10px]">
                          Mathematical XP Formula
                        </span>
                        <span className="text-base sm:text-lg font-bold text-ink-primary">
                          {mod.formula}
                        </span>
                      </div>
                    )}

                    <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                      {mod.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <FaCheckCircle className="text-ink-primary w-3.5 h-3.5 shrink-0 mt-1" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-secondary">
            <Link
              href="/projects"
              className="md:hidden inline-flex items-center text-ink-primary font-semibold uppercase tracking-[0.16em] hover:opacity-70 transition-opacity group"
            >
              <FaArrowLeft
                size={10}
                className="mr-2 group-hover:-translate-x-1 transition-transform"
              />
              Back to Projects
            </Link>
            <span className="font-mono text-ink-muted">
              Nexus Architecture Case Study · Designed by Farrel Zandra
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
