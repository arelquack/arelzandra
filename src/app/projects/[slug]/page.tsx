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
    { slug: "musubix" },
    { slug: "superflow" },
    { slug: "simona-polban" },
    { slug: "nexus" },
    { slug: "website-nk" },
    { slug: "rekamedchain" },
  ];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (slug === "musubix") {
    return {
      title: "Musubix — Case Study",
      description:
        "Architectural case study of Musubix, a Borderless Micro-Freelance Marketplace powered by Stellar Network, Soroban Smart Escrow (Rust), and Google Gemini AI.",
    };
  }
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
  if (slug === "rekamedchain") {
    return {
      title: "RekamedChain — Case Study",
      description:
        "Architectural case study of RekamedChain, a Decentralized Electronic Medical Record (RME) Platform with Permissioned Blockchain, Self-Sovereign Identity (SSI), and Off-Chain Encrypted Storage.",
    };
  }
  return { title: "Project Case Study" };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;

  if (
    slug !== "musubix" &&
    slug !== "superflow" &&
    slug !== "simona-polban" &&
    slug !== "nexus" &&
    slug !== "website-nk" &&
    slug !== "rekamedchain"
  ) {
    return notFound();
  }

  // =========================================================================
  // 0. MUSUBIX — BORDERLESS MICRO-FREELANCE MARKETPLACE
  // =========================================================================
  if (slug === "musubix") {
    const corePillars = [
      {
        number: "01",
        name: "Full Custodial Wallet Abstraction",
        badge: "Web2 Experience",
        icon: FaUsers,
        description:
          "Eliminates the Web3 steep learning curve. Users sign up via standard email without ever having to install browser extensions (Freighter, MetaMask), memorize 12-word seed phrases, or manage volatile gas fees.",
        highlights: [
          "Automated server-side Stellar keypair generation encrypted with AES-256",
          "Seamless Web2 login flow masking raw cryptographic transaction hashes and gas fee complexity",
          "Drives frictionless onboarding for mainstream freelancers and local SMEs unfamiliar with Web3",
        ],
      },
      {
        number: "02",
        name: "Zero-Trust Smart Escrow Engine",
        badge: "Soroban Smart Contracts",
        icon: FaLock,
        description:
          "Autonomous escrow contracts written in Rust using Soroban SDK (#![no_std]). Locks client payments on the Stellar ledger upon job agreement and programmatically releases tokens only upon client delivery approval.",
        highlights: [
          "State machine operations: initialize (bind parties), deposit (lock funds), approve_and_pay (release tokens)",
          "Protects freelancers against non-payment and protects employers against contractor ghosting",
          "Cuts intermediary platform commissions from traditional 10–20% down to flat ~5% with fractions of a cent network fees",
        ],
      },
      {
        number: "03",
        name: "Stellar Path Payment & DEX Liquidity",
        badge: "Cross-Border Settlement",
        icon: FaCoins,
        description:
          "Leverages native Stellar Path Payment and on-chain Decentralized Exchange (DEX) liquidity pools. International clients fund gigs in USD/USDC/XLM, and funds settle into liquid IDR ready for instant local bank disbursement.",
        highlights: [
          "Sub-5-second finality compared to 3–7 business days required by SWIFT wire transfers or PayPal",
          "Near-zero network transaction fees (< $0.0001) preserving margins on $20–$100 micro-tasks",
          "Direct settlement to local payment channels (BCA, Mandiri, BNI, GoPay, QRIS) without exorbitant FX markups",
        ],
      },
      {
        number: "04",
        name: "AI Job Integrity & Budget Auditing",
        badge: "Google Gemini AI",
        icon: FaChartLine,
        description:
          "Deep integration with Google Gemini multi-model API to audit job postings in real time before publication, scoring specifications from 1–100 and providing proactive fairness feedback.",
        highlights: [
          "Protects freelancers by flagging severely underpriced budgets and ambiguous requirements",
          "Provides constructive optimization prompts to employers for higher application conversion",
          "Automates marketplace moderation to maintain high quality standards across micro-task listings",
        ],
      },
    ];

    const userJourneys = [
      {
        title: "Client Workflow (Employer)",
        role: "Job Poster & Funder",
        icon: FaBuilding,
        steps: [
          "Frictionless email login with automatic backend Stellar account initialization",
          "Post job requirements evaluated instantly by Gemini AI for budget & scope integrity",
          "Hire applicant & fund contract via QRIS/fiat simulation, locking funds into Soroban Escrow",
          "Review delivered work artifacts, submit star rating, and trigger automated token release",
        ],
      },
      {
        title: "Freelancer Workflow (Talent)",
        role: "Micro-Task Contributor",
        icon: FaTasks,
        steps: [
          "Explore open gigs with AI quality scores and real-time IDR currency conversion estimates",
          "Accept job with cryptographic certainty that employer deposit is already locked in escrow",
          "Execute task and submit repository commits, design assets, or documentation deliverables",
          "Receive instant payment disbursement into local bank accounts via Stellar DEX Path Payment",
        ],
      },
    ];

    const competitiveComparison = [
      {
        metric: "Platform Commission",
        traditional: "10% – 20% + withdrawal & wire fees",
        musubix: "Flat ~5% (Stellar fee < $0.0001)",
      },
      {
        metric: "Disbursement Latency",
        traditional: "3 – 7 business days (SWIFT / PayPal)",
        musubix: "< 5 seconds instant on-chain finality",
      },
      {
        metric: "Fund Custody Security",
        traditional: "Held by centralized platform balance sheet",
        musubix: "Non-custodial Soroban Smart Escrow contract",
      },
      {
        metric: "FX & Cross-Border Friction",
        traditional: "High conversion markups & intermediary fees",
        musubix: "Automated Stellar Path Payment (USD → IDR)",
      },
      {
        metric: "Web3 Barrier to Entry",
        traditional: "Not Web3 (or requires seed phrase & wallet extension)",
        musubix: "Email login + server-side wallet abstraction",
      },
      {
        metric: "Job Specification Quality",
        traditional: "Manual report queue & frequent ghosting",
        musubix: "Pre-screened by Gemini AI (fairness & scope score)",
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
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono uppercase tracking-[0.16em] text-ink-muted">
                <span>
                  CASE STUDY &amp; ARCHITECTURE · JUL 2026 · WEB3 &amp; STELLAR
                </span>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 text-ink-primary font-semibold">
                    <FaTrophy size={11} /> APAC Stellar Hackathon MVP
                  </span>
                  <a
                    href="https://musubix.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink-primary font-semibold hover:underline"
                  >
                    Live Platform <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              </div>

              <h1 className="font-serif uppercase text-4xl sm:text-6xl md:text-7xl text-ink-primary leading-[0.95] tracking-tight">
                Musubix
              </h1>

              <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed">
                Borderless Micro-Freelance Marketplace powered by the{" "}
                <strong className="text-ink-primary font-semibold">
                  Stellar Network
                </strong>{" "}
                and{" "}
                <strong className="text-ink-primary font-semibold">
                  Soroban Smart Contracts
                </strong>{" "}
                — uniting custodial wallet abstraction, automated Rust smart escrows,
                sub-5-second cross-border payments into local IDR, and Google Gemini
                AI job integrity auditing to dismantle fee gouging in the gig economy.
              </p>

              <div className="pt-2">
                <TechStackIcons
                  stack={[
                    "Next.js 16",
                    "React 19",
                    "TypeScript",
                    "NestJS",
                    "Prisma",
                    "Stellar SDK",
                    "Soroban (Rust)",
                    "Google Gemini AI",
                    "Tailwind CSS",
                  ]}
                />
              </div>
            </header>

            {/* Hero Banner Image */}
            <div className="rounded-[24px] sm:rounded-[28px] bg-surface-muted p-3.5 sm:p-6 border border-line mb-16">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-line bg-surface shadow-[0_12px_32px_rgba(20,20,22,0.05)]">
                <Image
                  src="/images/projects/musubix.png"
                  alt="Musubix — Borderless Micro-Freelance Platform Powered by Stellar"
                  width={1920}
                  height={920}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>

            <article className="space-y-16 text-ink-secondary leading-relaxed">
              {/* Value Proposition Callout */}
              <div className="p-6 sm:p-8 rounded-[24px] bg-surface-muted border border-line flex items-start gap-4">
                <FaShieldAlt className="w-5 h-5 text-ink-primary shrink-0 mt-1" />
                <div className="space-y-1.5">
                  <strong className="text-ink-primary font-semibold text-base block">
                    Web2 Simplicity with Web3 Sovereign Guarantees
                  </strong>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    Musubix bridges the gap between Web2 usability and Web3 financial
                    sovereignty: users sign up via standard email without wallet
                    extensions or gas tokens, while funds are programmatically secured
                    inside non-custodial Soroban smart contracts and settled instantly to
                    local currency via Stellar DEX liquidity.
                  </p>
                </div>
              </div>

              {/* 01 — Problem Statement & The Why */}
              <section className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted">
                  01 — Problem Statement: The Gig Economy Trilemma
                </h2>
                <div className="text-base sm:text-lg text-ink-primary bg-surface p-6 sm:p-8 rounded-[24px] border border-line leading-relaxed space-y-4">
                  <p>
                    The global digital gig economy provides boundless remote opportunities
                    for young professionals across Southeast Asia. Yet, conventional
                    freelancing platforms suffer from severe structural bottlenecks:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-ink-secondary pt-2">
                    <div className="p-4 rounded-xl bg-surface-muted border border-line space-y-1.5">
                      <strong className="text-ink-primary font-semibold block">
                        Exorbitant Platform Commissions (10%–20%)
                      </strong>
                      <span>
                        Traditional giants take predatory commissions on small gigs,
                        disproportionately penalizing developing-nation talent on $20–$100
                        micro-projects.
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-muted border border-line space-y-1.5">
                      <strong className="text-ink-primary font-semibold block">
                        Slow Cross-Border Payouts (3–7 Days)
                      </strong>
                      <span>
                        SWIFT wire transfers and PayPal enforce predatory FX exchange rates
                        and delay crucial living expenses for days.
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-muted border border-line space-y-1.5">
                      <strong className="text-ink-primary font-semibold block">
                        The Trust Gap &amp; Ghosting Risks
                      </strong>
                      <span>
                        Employers fear unfulfilled upfront deposits, while freelancers fear
                        unpaid labor after deliverable handover.
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-muted border border-line space-y-1.5">
                      <strong className="text-ink-primary font-semibold block">
                        The Web3 UX Barrier
                      </strong>
                      <span>
                        Existing crypto dApps mandate confusing browser extensions, seed
                        phrases, and gas fee management that alienates 95% of users.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 02 — 4 Core System Pillars */}
              <section className="space-y-6">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted mb-2">
                    02 — Core System Architecture &amp; Innovation Pillars
                  </h2>
                  <p className="text-ink-secondary text-sm sm:text-base">
                    Engineered from ideation to production as an end-to-end full-stack
                    solution uniting microservices, AI, and smart contracts:
                  </p>
                </div>

                <div className="space-y-6">
                  {corePillars.map((pillar) => {
                    const PillarIcon = pillar.icon;
                    return (
                      <div
                        key={pillar.number}
                        className="p-6 sm:p-8 rounded-[24px] bg-surface border border-line space-y-4"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
                          <div className="flex items-center gap-3.5">
                            <span className="text-xs font-mono text-ink-muted">
                              {pillar.number}
                            </span>
                            <div className="p-2.5 rounded-xl bg-surface-muted text-ink-primary">
                              <PillarIcon size={16} />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-ink-primary">
                              {pillar.name}
                            </h3>
                          </div>
                          <span className="text-xs font-mono text-ink-muted uppercase tracking-wider">
                            {pillar.badge}
                          </span>
                        </div>

                        <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                          {pillar.description}
                        </p>

                        <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                          {pillar.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <FaCheckCircle className="text-ink-primary w-3.5 h-3.5 shrink-0 mt-1" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 03 — Technical Monorepo Architecture */}
              <section className="space-y-6 pt-6 border-t border-line">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted mb-2">
                    03 — Technical Microservice Architecture
                  </h2>
                  <p className="text-ink-secondary text-sm sm:text-base">
                    Organized across high-performance modular layers connecting Web2
                    presentation with on-chain Soroban state:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaCode className="text-ink-primary" /> Frontend Presentation
                    </div>
                    <h3 className="text-ink-primary font-semibold text-base sm:text-lg">
                      Next.js 16 App Router
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      Role-tailored dashboards for clients and freelancers with QRIS
                      simulations, real-time job queues, and responsive Tailwind UI.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaServer className="text-ink-primary" /> Backend Microservices
                    </div>
                    <h3 className="text-ink-primary font-semibold text-base sm:text-lg">
                      NestJS TCP Microservices
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      API Gateway routing to user-job-service (Prisma ORM), stellar-service
                      (AES key management &amp; RPC), and ai-analyzer (Gemini).
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface border border-line space-y-2">
                    <div className="flex items-center gap-2 text-ink-muted font-mono text-xs uppercase tracking-wider">
                      <FaLock className="text-ink-primary" /> Smart Contracts
                    </div>
                    <h3 className="text-ink-primary font-semibold text-base sm:text-lg">
                      Soroban Escrow (Rust)
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      Deterministic escrow logic written in no_std Rust enforcing
                      deposit initialization and atomic milestone-verified disbursements.
                    </p>
                  </div>
                </div>
              </section>

              {/* 04 — Dual User Journey Workflows */}
              <section className="space-y-6 pt-6 border-t border-line">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted mb-2">
                    04 — Dual Persona Workflows (Client &amp; Freelancer)
                  </h2>
                  <p className="text-ink-secondary text-sm sm:text-base">
                    End-to-end task lifecycle reconciling transparent job auditing with
                    milestone escrow protection:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userJourneys.map((j) => {
                    const JourneyIcon = j.icon;
                    return (
                      <div
                        key={j.title}
                        className="p-6 sm:p-7 rounded-[24px] bg-surface border border-line space-y-4"
                      >
                        <div className="flex items-center gap-3 border-b border-line pb-3.5">
                          <div className="p-2.5 rounded-xl bg-surface-muted text-ink-primary">
                            <JourneyIcon size={16} />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-ink-primary">
                              {j.title}
                            </h3>
                            <span className="text-xs font-mono text-ink-muted">
                              {j.role}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                          {j.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="font-mono text-xs text-ink-muted font-bold shrink-0 mt-0.5">
                                0{idx + 1}.
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 05 — Competitive Benchmarks */}
              <section className="space-y-6 pt-6 border-t border-line">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted mb-2">
                    05 — Operational Benchmark: Legacy Platforms vs Musubix
                  </h2>
                  <p className="text-ink-secondary text-sm sm:text-base">
                    Direct architectural comparison against legacy Web2 gig platforms:
                  </p>
                </div>

                <div className="rounded-[24px] bg-surface border border-line overflow-hidden">
                  <div className="divide-y divide-line">
                    {competitiveComparison.map((row, idx) => (
                      <div
                        key={idx}
                        className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-start text-xs sm:text-sm"
                      >
                        <div className="md:col-span-4 font-semibold text-ink-primary">
                          {row.metric}
                        </div>
                        <div className="md:col-span-4 text-ink-muted">
                          <span className="font-mono text-[10px] uppercase tracking-wider block mb-0.5">
                            Traditional (Upwork / Fiverr):
                          </span>
                          {row.traditional}
                        </div>
                        <div className="md:col-span-4 text-ink-primary font-medium">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted block mb-0.5">
                            Musubix (Stellar &amp; Soroban):
                          </span>
                          {row.musubix}
                        </div>
                      </div>
                    ))}
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
                Musubix Case Study · APAC Stellar Hackathon · Founder &amp; Architect
              </span>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // =========================================================================
  // 1. SUPERFLOW ENTERPRISE — AUTONOMOUS CONVERSATIONAL BI AGENT
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
  if (slug === "nexus") {
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

  // =========================================================================
  // 4. REKAMEDCHAIN — DECENTRALIZED DIGITAL HEALTH RECORD PLATFORM
  // =========================================================================
  if (slug === "rekamedchain") {
    const architecturalLayers = [
      {
        number: "01",
        name: "Consensus & Integrity Layer",
        badge: "Permissioned Blockchain",
        icon: FaServer,
        tech: "Hyperledger Fabric & Go (Chaincode)",
        description:
          "Enforces verifiable network participation exclusively for accredited hospitals, licensed clinicians, patients, and healthcare authorities. Operates an immutable distributed ledger recording cryptographic document hash anchors and tamper-proof access audit trails without central points of failure.",
        highlights: [
          "Eliminates single-point-of-failure vulnerabilities that plague centralized health servers",
          "Stores SHA-256 cryptographic hashes and metadata on-chain rather than heavy raw records to maintain high throughput",
          "Maintains an immutable, chronologically ordered audit log of all permission requests, approvals, and revocations",
        ],
      },
      {
        number: "02",
        name: "Patient Sovereignty Layer",
        badge: "Self-Sovereign Identity (SSI)",
        icon: FaLock,
        tech: "Asymmetric Cryptography & Dynamic UCON",
        description:
          "Reverses provider-centric data ownership by providing patients with self-sovereign digital health identities. Asymmetric key pairs are generated and secured directly on the patient's device, enabling dynamic, time-bound Usage Control (UCON) over clinical records.",
        highlights: [
          "Patient holds unique cryptographic private keys on-device as an unforgeable digital signature",
          "Granular consent management: patients can grant 24-hour temporary access, indefinite access, or instant revocation",
          "Restores legal data ownership to patients in alignment with Indonesian medical practice laws (UU Praktik Kedokteran)",
        ],
      },
      {
        number: "03",
        name: "Scalability & Distributed Storage Layer",
        badge: "Encrypted Off-Chain Storage",
        icon: FaDatabase,
        tech: "IPFS & CP-ABE / ECC Encryption",
        description:
          "Solves blockchain storage bloat and latency bottlenecks through a hybrid architecture. High-volume electronic medical data (radiology imagery, lab diagnostics, clinical records) are strongly encrypted off-chain, while on-chain smart contracts store verifiable hash commitments.",
        highlights: [
          "Off-chain storage via distributed InterPlanetary File System (IPFS) and secure hospital cluster nodes",
          "Strong encryption using Ciphertext-Policy Attribute-Based Encryption (CP-ABE) and Elliptic Curve Cryptography (ECC)",
          "Enables national-scale throughput and scalability without sacrificing zero-knowledge data privacy",
        ],
      },
    ];

    const platformFlows = [
      {
        title: "Patient Mobile Application (Flutter)",
        role: "Citizen Sovereignty Interface",
        icon: FaMobileAlt,
        steps: [
          "e-KTP Digital Identity Verification & On-Device Keypair Generation (SSI)",
          "Live Health Telemetry Dashboard & Real-Time Access Request Notifications",
          "Granular Consent Management (Approve 24 Hours, Approve Indefinitely, or Reject)",
          "Cryptographic Access Audit Trail: Review who, when, and what records were inspected",
        ],
      },
      {
        title: "Clinician & Administrative Web Portal (Next.js)",
        role: "Healthcare Provider Portal",
        icon: FaCode,
        steps: [
          "Patient Lookup by Unique RekamedChain Universal ID",
          "One-Click Access Request Dispatch to Patient Mobile Device",
          "Unified Longitudinal EHR Visualization across Disparate Hospital Systems",
          "Encrypted New Clinical Diagnosis Input Anchored to Hyperledger Fabric",
        ],
      },
    ];

    const implementationRoadmap = [
      {
        phase: "Phase 1 (Months 1–2)",
        title: "Concept Validation & Strategic Regulatory Alignment",
        desc: "In-depth user needs validation across RSUD Kiwari hospital administrators, clinicians, and patients. Legal & regulatory alignment with Permenkes No. 24/2022 (RME) and national SATUSEHAT standards.",
      },
      {
        phase: "Phase 2 (Month 3)",
        title: "Technical Architecture & Infrastructure Setup",
        desc: "Deployment of Hyperledger Fabric permissioned network nodes, IPFS distributed storage cluster configuration, and cryptographic schema specification (ECC & CP-ABE).",
      },
      {
        phase: "Phase 3 (Months 4–8)",
        title: "Agile Dual-Platform Development & Security Hardening",
        desc: "Iterative development of the patient Flutter mobile application, Next.js clinical web portal, Go chaincode smart contracts, and comprehensive penetration & smart contract audits.",
      },
      {
        phase: "Phase 4 (Months 9–12)",
        title: "RSUD Kiwari Pilot Deployment & National Blueprint",
        desc: "Controlled clinical rollout at RSUD Kiwari living laboratory, staff training, transaction latency & throughput monitoring, and formulation of a scalable national e-Government blueprint.",
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
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono uppercase tracking-[0.16em] text-ink-muted">
                <span>
                  CASE STUDY &amp; ARCHITECTURE · 2025 · E-GOVERNMENT INNOVATION
                </span>
                <span className="inline-flex items-center gap-1.5 text-ink-primary font-semibold">
                  <FaTrophy size={11} /> KMIPN VII Juara 1 UI/UX
                </span>
              </div>

              <h1 className="font-serif uppercase text-4xl sm:text-6xl md:text-7xl text-ink-primary leading-[0.95] tracking-tight">
                RekamedChain
              </h1>

              <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed">
                Decentralized Electronic Medical Record (RME) Platform engineered
                with{" "}
                <strong className="text-ink-primary font-semibold">
                  Trifur Polban
                </strong>{" "}
                — uniting{" "}
                <strong className="text-ink-primary font-semibold">
                  Permissioned Blockchain (Hyperledger Fabric)
                </strong>
                ,{" "}
                <strong className="text-ink-primary font-semibold">
                  Self-Sovereign Identity (SSI)
                </strong>
                , and{" "}
                <strong className="text-ink-primary font-semibold">
                  Off-Chain Encrypted IPFS Storage
                </strong>{" "}
                to resolve data fragmentation, eliminate single points of
                failure, and guarantee patient data sovereignty in compliance
                with Permenkes No. 24/2022.
              </p>

              <div className="pt-2">
                <TechStackIcons
                  stack={[
                    "Hyperledger Fabric",
                    "Golang",
                    "Next.js",
                    "Flutter",
                    "IPFS",
                    "Docker",
                  ]}
                />
              </div>
            </header>

            {/* Hero Banner Image */}
            <div className="rounded-[24px] sm:rounded-[28px] bg-surface-muted p-3.5 sm:p-6 border border-line mb-16">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-line bg-surface shadow-[0_12px_32px_rgba(20,20,22,0.05)]">
                <Image
                  src="/images/projects/rekamedchain.png"
                  alt="RekamedChain — Decentralized Medical Records System"
                  width={1920}
                  height={920}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>

            <article className="space-y-16 text-ink-secondary leading-relaxed">
              {/* Security & Regulatory Alignment Callout */}
              <div className="p-6 sm:p-8 rounded-[24px] bg-surface-muted border border-line flex items-start gap-4">
                <FaShieldAlt className="w-5 h-5 text-ink-primary shrink-0 mt-1" />
                <div className="space-y-1.5">
                  <strong className="text-ink-primary font-semibold text-base block">
                    Patient Data Sovereignty &amp; SATUSEHAT Interoperability Alignment
                  </strong>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    Under Indonesian medical regulations (Permenkes No. 24/2022
                    and UU Praktik Kedokteran), medical record content belongs
                    legally to the patient. RekamedChain replaces vulnerable,
                    siloed hospital servers with cryptographic certainty: raw
                    health records are strongly encrypted off-chain, while the
                    blockchain enforces unalterable audit trails and dynamic
                    consent verifications controlled solely by the patient.
                  </p>
                </div>
              </div>

              {/* 01 — Executive Overview & Problem Statement */}
              <section className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted">
                  01 — Executive Overview &amp; The Systemic Healthcare Trilemma
                </h2>
                <div className="text-base sm:text-lg text-ink-primary bg-surface p-6 sm:p-8 rounded-[24px] border border-line leading-relaxed space-y-4">
                  <p>
                    Indonesia&apos;s healthcare digital transformation stands at a
                    critical juncture. While government initiatives mandate
                    Electronic Medical Records (RME) and national integration via
                    SATUSEHAT, existing implementations remain plagued by three
                    systemic failures:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm text-ink-secondary pt-2">
                    <div className="p-4 rounded-xl bg-surface-muted border border-line space-y-1.5">
                      <strong className="text-ink-primary font-semibold block">
                        1. Data Fragmentation
                      </strong>
                      <span>
                        Heterogeneous, isolated hospital databases create data silos,
                        causing repeated diagnostic examinations and delayed clinical
                        decision-making.
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-muted border border-line space-y-1.5">
                      <strong className="text-ink-primary font-semibold block">
                        2. Centralized Vulnerabilities
                      </strong>
                      <span>
                        Centralized database servers represent catastrophic single
                        points of failure and lucrative targets for cyber attacks and
                        ransomware leaks.
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-muted border border-line space-y-1.5">
                      <strong className="text-ink-primary font-semibold block">
                        3. Lost Patient Sovereignty
                      </strong>
                      <span>
                        Conventional provider-centric models deny patients real-time
                        visibility and consent control over who accesses their
                        confidential medical history.
                      </span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-ink-secondary pt-2">
                    Engineered by{" "}
                    <strong className="text-ink-primary font-medium">
                      Trifur Polban
                    </strong>{" "}
                    (Farrel Zandra, Reqi Jumantara Hapid, and Umar Faruq Robbany) and
                    awarded{" "}
                    <strong className="text-ink-primary font-medium">
                      Juara 1 UI/UX E-Government Category at KMIPN VII 2025
                    </strong>
                    , RekamedChain delivers a tested architectural blueprint for
                    national e-Government health interoperability, with a living
                    laboratory pilot deployment designed for RSUD Kiwari Bandung.
                  </p>
                </div>
              </section>

              {/* 02 — Tri-Layer System Architecture */}
              <section className="space-y-6">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted mb-2">
                    02 — Tri-Layer Decentralized Architecture
                  </h2>
                  <p className="text-ink-secondary text-sm sm:text-base">
                    RekamedChain solves the blockchain healthcare trilemma through
                    a synergistic three-layer technical separation:
                  </p>
                </div>

                <div className="space-y-6">
                  {architecturalLayers.map((layer) => {
                    const Icon = layer.icon;
                    return (
                      <div
                        key={layer.number}
                        className="p-6 sm:p-8 rounded-[24px] bg-surface border border-line space-y-4"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
                          <div className="flex items-center gap-3.5">
                            <span className="text-xs font-mono text-ink-muted">
                              {layer.number}
                            </span>
                            <div className="p-2.5 rounded-xl bg-surface-muted text-ink-primary">
                              <Icon size={16} />
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-xl font-semibold text-ink-primary">
                                {layer.name}
                              </h3>
                              <p className="text-xs font-mono text-ink-muted">
                                {layer.tech}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-mono text-ink-muted uppercase tracking-wider">
                            {layer.badge}
                          </span>
                        </div>

                        <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                          {layer.description}
                        </p>

                        <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                          {layer.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <FaCheckCircle className="text-ink-primary w-3.5 h-3.5 shrink-0 mt-1" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 03 — Dual-Interface Ecosystem */}
              <section className="space-y-6 pt-6 border-t border-line">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted mb-2">
                    03 — Dual-Interface Application Workflows
                  </h2>
                  <p className="text-ink-secondary text-sm sm:text-base">
                    Tailored public and clinical touchpoints ensuring seamless
                    coordination across patients and hospital staff:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {platformFlows.map((flow) => {
                    const FlowIcon = flow.icon;
                    return (
                      <div
                        key={flow.title}
                        className="p-6 sm:p-7 rounded-[24px] bg-surface border border-line space-y-4"
                      >
                        <div className="flex items-center gap-3 border-b border-line pb-3.5">
                          <div className="p-2.5 rounded-xl bg-surface-muted text-ink-primary">
                            <FlowIcon size={16} />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-ink-primary">
                              {flow.title}
                            </h3>
                            <span className="text-xs font-mono text-ink-muted">
                              {flow.role}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                          {flow.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="font-mono text-xs text-ink-muted font-bold shrink-0 mt-0.5">
                                0{idx + 1}.
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 04 — 4-Phase Implementation Strategy */}
              <section className="space-y-6 pt-6 border-t border-line">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-ink-muted mb-2">
                    04 — 12-Month Pilot Implementation Strategy (RSUD Kiwari)
                  </h2>
                  <p className="text-ink-secondary text-sm sm:text-base">
                    A measured four-phase roadmap bridging technical proof-of-concept
                    into an operational hospital living laboratory:
                  </p>
                </div>

                <div className="space-y-4">
                  {implementationRoadmap.map((item) => (
                    <div
                      key={item.phase}
                      className="p-6 rounded-[24px] bg-surface border border-line space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-primary">
                          {item.phase}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-ink-primary">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed pt-1">
                        {item.desc}
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
                RekamedChain Case Study · KMIPN VII 2025 Juara 1 · Team Trifur Polban
              </span>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return notFound();
}

