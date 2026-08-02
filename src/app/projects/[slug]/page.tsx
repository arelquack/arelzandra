// src/app/projects/[slug]/page.tsx

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  FaArrowLeft, FaCalendarAlt, FaLock, FaShieldAlt, FaCheckCircle, 
  FaChartLine, FaGraduationCap, FaProjectDiagram, FaCoins, FaTasks, 
  FaHeartbeat, FaBook, FaGamepad, FaCode, FaServer, FaDatabase,
  FaExternalLinkAlt, FaUserCheck, FaTrophy, FaNewspaper, FaImages,
  FaPalette, FaUsers, FaChartPie, FaChartBar, FaFileAlt, FaLayerGroup
} from 'react-icons/fa';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "nexus" },
    { slug: "website-nk" }
  ];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (slug === "nexus") {
    return {
      title: "Nexus - Technical Case Study & Architecture | Arel Zandra",
      description: "Deep dive architectural case study of Nexus, a self-hosted personal operating system built with Next.js 16, Supabase PostgreSQL, HTML5 Canvas 2D Force Graph, and PWA.",
    };
  }
  if (slug === "website-nk") {
    return {
      title: "Nihongo Kurabu Portal (NK Project) - Technical Case Study | Arel Zandra",
      description: "Deep dive architectural case study of NK Project, a modern full-stack web application & CMS dashboard built for Nihongo Kurabu SMAN 3 Bukittinggi using Next.js 16, Supabase, Cloudinary, and GSAP.",
    };
  }
  return { title: "Project Case Study | Arel Zandra" };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;

  if (slug !== "nexus" && slug !== "website-nk") {
    return notFound();
  }

  // =========================================================================
  // DATA FOR NIHONGO KURABU PORTAL (NK PROJECT)
  // =========================================================================
  if (slug === "website-nk") {
    const divisions = [
      { id: "kana", name: "Kana（かな）", desc: "Fundamental to advanced Hiragana, Katakana, Kanji, and vocabulary studies.", icon: "🔤" },
      { id: "shoudou", name: "Shoudou（書道）", desc: "Traditional Japanese calligraphy art utilizing brush and ink techniques.", icon: "🖌️" },
      { id: "sakubun", name: "Sakubun（作文）", desc: "Japanese essay writing and grammatical composition arts.", icon: "✍️" },
      { id: "minidrama", name: "Mini Drama（ミニ・ドラマ）", desc: "Japanese performing arts, roleplay, theatrical acting, and scriptwriting.", icon: "🎭" },
      { id: "roudoku", name: "Roudoku（朗読）", desc: "Expressive Japanese storytelling and precision aloud reading.", icon: "📖" },
      { id: "speech", name: "Speech（スピーチ）", desc: "Formal Japanese oratorical speech crafting for Bunkasai competition readiness.", icon: "🎙️" },
      { id: "akustik", name: "Akustik（アコースティック）", desc: "Acoustic musical arrangements and vocal performances of Japanese songs.", icon: "🎸" },
      { id: "origami", name: "Origami（折り紙）", desc: "High-precision traditional paper folding art creating intricate ornaments.", icon: "📄" },
      { id: "anime", name: "Anime（アニメ）", desc: "Character design, comic illustration, and Manga visual arts.", icon: "🎨" }
    ];

    const adminModules = [
      { id: "members", name: "Members & Registration", desc: "Online applicant verification and integrated active member database management.", icon: FaUsers },
      { id: "achievements", name: "Achievement Catalog", desc: "Input and live updates for competition championship records (LKS, Bunkasai, Speech).", icon: FaTrophy },
      { id: "blogs", name: "Article & Blog CMS", desc: "Publishing educational articles and news using the TipTap WYSIWYG Editor.", icon: FaNewspaper },
      { id: "events", name: "Events & Agenda", desc: "Club activity scheduling, venue management, and event calendar orchestration.", icon: FaCalendarAlt },
      { id: "finance", name: "Financial Ledger System", desc: "Cash tracking, income/expense auditing, category tagging, and automatic balance calculations.", icon: FaCoins },
      { id: "gallery", name: "Cloudinary Gallery Cloud", desc: "Activity documentation image uploading via Cloudinary with automatic Supabase URL metadata syncing.", icon: FaImages },
      { id: "alumni", name: "Alumni Directory", desc: "Graduated alumni directory and contact tracing for ongoing alumni network collaboration.", icon: FaGraduationCap },
      { id: "managements", name: "Executive Management", desc: "Core organizational executive structure and division head management per operational period.", icon: FaLayerGroup }
    ];

    return (
      <div className="min-h-screen bg-[#050505] text-white selection:bg-pink-500 selection:text-white">
        <Navbar />

        <main className="pt-32 pb-24 px-6">
          <div className="container mx-auto max-w-4xl">
            
            {/* Back Button */}
            <Link 
              href="/#projects" 
              className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white mb-10 transition-colors group"
            >
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1.5 transition-transform" /> 
              Back to Projects
            </Link>

            {/* Article Header (Medium Style) */}
            <header className="mb-12 border-b border-white/10 pb-12">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-pink-600/20 text-pink-400 border border-pink-500/30">
                  CASE STUDY & ARCHITECTURE
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-300 border border-white/10 flex items-center gap-1.5">
                  <FaCalendarAlt className="text-gray-400" /> Jan 2025
                </span>
                <a 
                  href="https://nk-project.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 hover:bg-emerald-500/20 transition-colors"
                >
                  <FaExternalLinkAlt size={10} /> Live Platform
                </a>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white">
                Nihongo Kurabu Portal <span className="text-pink-400 font-normal text-2xl md:text-4xl block mt-1">(NK Project)</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                Modern Full-Stack Organization Portal, Media Publication, Online Member Registration & Integrated Admin CMS built for <strong className="text-pink-300 font-semibold">Nihongo Kurabu (日本語クラブ) SMAN 3 Bukittinggi</strong>.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Next.js 16", "TypeScript", "Tailwind CSS", "Supabase", "Cloudinary", "GSAP", "TipTap", "Chart.js"].map((tech, idx) => (
                  <span key={idx} className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    #{tech}
                  </span>
                ))}
              </div>
            </header>

            {/* Hero Banner Image */}
            <div className="relative h-72 md:h-[420px] rounded-3xl overflow-hidden mb-16 border border-white/15 shadow-2xl group">
              <Image
                src="/images/website-nk.png"
                alt="Nihongo Kurabu Portal"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>

            {/* Medium Article Body Container */}
            <article className="space-y-16 text-gray-300 leading-relaxed text-base md:text-lg">

              {/* Executive Overview */}
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)]" /> Executive Overview
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10">
                  NK Project is a modern web platform and integrated CMS built with Next.js 16 designed as the official portal, media publication channel, online member registration system, and internal management hub for the <strong>NIHONGO KURABU (日本語クラブ)</strong> organization at SMA Negeri 3 Bukittinggi. The platform blends a modern Japanese-themed public interface (Sakura Pink, Mountain Dark, Tosca Green) with a robust administrative backend for managing student members, event schedules, published blogs, photo galleries, competition achievements, and financial ledgers.
                </p>
              </section>

              {/* Tech Architecture Stack */}
              <section className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]" /> System Architecture & Tech Stack
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-pink-400 font-bold text-sm">
                      <FaCode /> Core Framework
                    </div>
                    <h3 className="text-white font-bold text-lg">Next.js 16 & TypeScript</h3>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                      App Router architecture, React Server & Client Components, and strict full-stack TypeScript data contracts.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                      <FaDatabase /> Database & Auth
                    </div>
                    <h3 className="text-white font-bold text-lg">Supabase PostgreSQL</h3>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                      Relational database managing members, achievements, blog articles, events, finance ledgers, alumni, and admin session auth.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                      <FaImages /> Media Storage Cloud
                    </div>
                    <h3 className="text-white font-bold text-lg">Cloudinary Cloud Storage</h3>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                      High-performance image uploading, cloud optimization, and automatic CDN delivery for activity galleries.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <FaFileAlt /> Rich Text & Charts
                    </div>
                    <h3 className="text-white font-bold text-lg">TipTap Editor & Chart.js</h3>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                      WYSIWYG article editor for student publication alongside real-time Chart.js financial & demographic metrics.
                    </p>
                  </div>
                </div>
              </section>

              {/* 9 Learning Divisions Section */}
              <section className="space-y-6">
                <div className="border-t border-white/10 pt-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(244,114,182,0.8)]" /> 9 Specialized Learning Divisions
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base mb-6">
                    The platform provides interactive syllabus exploration for 9 distinct Japanese culture & language learning divisions:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {divisions.map((div) => (
                    <div key={div.id} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/40 transition-colors space-y-2">
                      <div className="flex items-center gap-2 text-2xl mb-1">
                        <span>{div.icon}</span>
                        <h3 className="text-white font-bold text-base">{div.name}</h3>
                      </div>
                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                        {div.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Admin System & CMS Dashboard Section */}
              <section className="space-y-8">
                <div className="border-t border-white/10 pt-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" /> Admin System & Management Dashboard
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base mb-6">
                    Dedicated managerial portal protected by secure admin authentication (<code className="text-pink-300 font-mono text-xs">/admin/login</code>):
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {adminModules.map((mod) => (
                    <div key={mod.id} className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
                          <mod.icon size={20} />
                        </div>
                        <h3 className="text-white font-bold text-base md:text-lg">{mod.name}</h3>
                      </div>
                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Design & UX Highlights */}
              <section className="p-8 rounded-3xl bg-gradient-to-r from-pink-950/30 via-neutral-900 to-cyan-950/30 border border-pink-500/30 space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FaPalette className="text-pink-400" /> Japanese Aesthetic & High Performance UX
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-pink-400 mt-1 shrink-0" />
                    <span><strong>Modern Japanese Aesthetic Theme</strong>: Blending <i>Sakura Pink</i>, <i>Mountain Dark</i>, and <i>Tosca Green</i> accents with kanji typography <code className="text-pink-300 font-mono">日本語クラブ</code>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-pink-400 mt-1 shrink-0" />
                    <span><strong>GSAP Smooth Animations</strong>: Staggered animation reveals, smooth scroll transitions, and dynamic typewriter text animation on the Hero section.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-pink-400 mt-1 shrink-0" />
                    <span><strong>Fast & SEO Optimized</strong>: Pre-rendered static pages achieving top organic search engine rankings for student organization queries.</span>
                  </li>
                </ul>
              </section>

            </article>

            {/* Footer Navigation */}
            <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
              <Link 
                href="/#projects" 
                className="inline-flex items-center text-pink-400 hover:text-pink-300 font-bold transition-colors group"
              >
                <FaArrowLeft className="mr-2 group-hover:-translate-x-1.5 transition-transform" /> 
                Back to Featured Projects
              </Link>
              <span className="font-mono text-xs text-gray-500">
                NK Project Case Study • Architected by Farrel Zandra
              </span>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // =========================================================================
  // DATA FOR NEXUS PERSONAL OPERATING SYSTEM (LIFEOS)
  // =========================================================================
  const modules = [
    {
      id: "overview",
      number: "01",
      name: "Main Portal & Live Metrics Dashboard",
      badge: "Core System Telemetry",
      icon: FaChartLine,
      description: "Real-time aggregated telemetry portal displaying net cash balance, active tasks, daily schedules, and dynamic LifeOS XP level progress rings.",
      highlights: [
        "Real-time aggregated metrics computed dynamically from 8 underlying module databases",
        "Dynamic XP level ring calculation updated instantly upon task completion",
        "Quick-action widgets for daily journal entries, cash transactions, and upcoming events"
      ]
    },
    {
      id: "portfolio",
      number: "02",
      name: "Academic & Career Portfolio Engine",
      badge: "Transcripts & SNBP Graph",
      icon: FaGraduationCap,
      description: "Official D4 Teknik Informatika Polban transcript manager (122 SKS, 3.50 Cumulative GPA) & High School SNBP 72-subject grade evolution analyzer.",
      highlights: [
        "Full Semester 1-6 D4 TI Polban transcript with SKS credit weights & GPA mathematics",
        "High School SNBP grade evolution graph from 88.33 to 95.07 Peak Performance (Rank 1 Parallel)",
        "15 National & Provincial Competition Championship Award repository"
      ]
    },
    {
      id: "network",
      number: "03",
      name: "Nexus Network Constellation",
      badge: "HTML5 Canvas 2D Graph",
      icon: FaProjectDiagram,
      description: "An interactive 2D HTML5 Canvas Visual Force Graph connecting Farrel Zandra with 15 Hub Clusters and 119 contacts.",
      highlights: [
        "Interactive physics-based force graph rendering 119 nodes dynamically on HTML5 Canvas",
        "Human-Centric Dual-Naming System (Full Legal Name & Call Name for natural lookup)",
        "Multi-context cross-referencing badges for contacts appearing in multiple community hubs"
      ]
    },
    {
      id: "finance",
      number: "04",
      name: "Finance & Health Restock Planner",
      badge: "Ledger & Inventory",
      icon: FaCoins,
      description: "Real-time multi-account cash ledger (Wallet, Bank Accounts, E-Wallets), automatic health supply countdown planner, and dynamic savings coverage wishlist.",
      highlights: [
        "Multi-source cash flow ledger tracking income & expense habit patterns",
        "Periodic Health Restock Planner calculating exact countdown days for medical supplies",
        "Dynamic wishlist coverage analyzer comparing active cash balance against savings goals"
      ]
    },
    {
      id: "tasks",
      number: "05",
      name: "Task & Priority Matrix",
      badge: "Eisenhower Matrix",
      icon: FaTasks,
      description: "Prioritized task management engine categorized using the Eisenhower Matrix (High, Medium, Low) with deadline tracking.",
      highlights: [
        "Eisenhower Matrix categorization for urgent vs important task delegation",
        "Deadline countdown timers and automated status transitions",
        "Search and category filtering across active and completed task queues"
      ]
    },
    {
      id: "health",
      number: "06",
      name: "Health & Telemetry Tracker",
      badge: "Biometric Logs",
      icon: FaHeartbeat,
      description: "Running activity logger (distance, duration, pace, calories burned) and daily physical biometric condition journals.",
      highlights: [
        "Running telemetry logs tracking pace, distance in kilometers, and energy burn",
        "Biometric condition journals recording sleep quality and physical wellness"
      ]
    },
    {
      id: "learning",
      number: "07",
      name: "Japanese Kanji Spaced Repetition",
      badge: "Memory Engine",
      icon: FaBook,
      description: "Spaced repetition flashcard system for Japanese vocabulary and Kanji with mastery level indicators.",
      highlights: [
        "Spaced Repetition Algorithm tailoring review intervals based on user recall accuracy",
        "JLPT Kanji and vocabulary database categorized by mastery levels"
      ]
    },
    {
      id: "lifeos",
      number: "08",
      name: "LifeOS Gamification Engine",
      badge: "XP & Leveling Mathematics",
      icon: FaGamepad,
      description: "Gamified leveling engine calculating progressive XP formulas across Level 1 to 100 with dynamic tier titles (Novice to Nexus Sovereign).",
      highlights: [
        "Mathematical XP Progression Formula: TotalXP(L) = floor(2.36 * (L - 1)^2 + 100 * (L - 1))",
        "100 Level progression tiers with titles (Apprentice, Specialist, Master, Grandmaster, Nexus Sovereign)",
        "Real-time positive activity log rewarding constructive daily habits"
      ],
      formula: "TotalXP(L) = ⌊2.36 × (L - 1)² + 100 × (L - 1)⌋"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Back Button */}
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white mb-10 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1.5 transition-transform" /> 
            Back to Projects
          </Link>

          {/* Article Header (Medium Style) */}
          <header className="mb-12 border-b border-white/10 pb-12">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-600/20 text-blue-400 border border-blue-500/30">
                CASE STUDY & ARCHITECTURE
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-300 border border-white/10 flex items-center gap-1.5">
                <FaCalendarAlt className="text-gray-400" /> Jun 2026
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1.5">
                <FaLock size={10} /> Private System
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white">
              Nexus
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
              A modern all-in-one cybernetic personal ecosystem integrating academics, 2D force graph networking, financial ledgers, health telemetry, and a gamified XP leveling engine.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Next.js 16", "TypeScript", "Tailwind CSS", "Supabase PostgreSQL", "HTML5 Canvas", "PWA"].map((tech, idx) => (
                <span key={idx} className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                  #{tech}
                </span>
              ))}
            </div>
          </header>

          {/* Hero Banner Image */}
          <div className="relative h-72 md:h-[420px] rounded-3xl overflow-hidden mb-16 border border-white/15 shadow-2xl group">
            <Image
              src="/images/nexus-v2.png"
              alt="Nexus Personal Operating System"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
          </div>

          {/* Medium Article Body Container */}
          <article className="space-y-16 text-gray-300 leading-relaxed text-base md:text-lg">

            {/* Security & Privacy Callout */}
            <div className="p-6 md:p-8 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-4 text-amber-200/90 shadow-xl">
              <FaShieldAlt className="w-7 h-7 text-amber-400 shrink-0 mt-1" />
              <div className="space-y-2">
                <strong className="text-amber-300 font-bold text-lg block">Data Privacy & Security Specification</strong>
                <p className="text-sm md:text-base text-amber-100/80 leading-relaxed">
                  Nexus contains personal financial ledgers, biometric health telemetry, and academic transcripts. Public live demo access and source code repositories are restricted to protect data privacy, but full architectural specifications and detailed module walkthroughs are documented below.
                </p>
              </div>
            </div>

            {/* Executive Overview Section */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" /> Executive Overview
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10">
                Nexus is a private, self-hosted web-based Personal Operating System (LifeOS) designed to integrate productivity, academic transcripts, financial intelligence, health telemetry, and social networking into one unified futuristic portal. Built with high reliability, performance optimization, PWA offline support, and native data backup mechanisms, Nexus serves as a centralized digital nervous system for personal growth.
              </p>
            </section>

            {/* Core Architecture Section */}
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" /> Core System Architecture
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                    <FaCode /> Frontend Framework
                  </div>
                  <h3 className="text-white font-bold text-lg">Next.js 16 & TypeScript</h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    App Router, Server Components & Server Actions for zero-latency data mutations and strict type safety across all 8 modules.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                    <FaDatabase /> Database & Cloud
                  </div>
                  <h3 className="text-white font-bold text-lg">Supabase PostgreSQL</h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    Relational data modeling, Row Level Security (RLS), and real-time client subscriptions for instant state sync.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <FaProjectDiagram /> Interactive Graph
                  </div>
                  <h3 className="text-white font-bold text-lg">HTML5 Canvas 2D Engine</h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    Custom physics-based force graph rendering 119 contacts across 15 Hub Clusters in real time.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <FaServer /> Offline & Backup
                  </div>
                  <h3 className="text-white font-bold text-lg">PWA & JSON Snapshot Exporter</h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    Webpack PWA Service Worker for offline access and native full database JSON backup & restore pipeline (<code className="text-amber-300 font-mono text-xs">backup.ts</code>).
                  </p>
                </div>
              </div>
            </section>

            {/* Detailed Modules Deep Dive */}
            <section className="space-y-10 pt-6">
              <div className="border-t border-white/10 pt-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                  Module Deep Dive ({modules.length} Core Modules)
                </h2>
                <p className="text-gray-400 text-base md:text-lg">
                  Detailed breakdown of system modules, database models, and mathematical engines powering Nexus.
                </p>
              </div>

              <div className="space-y-12">
                {modules.map((mod) => (
                  <div 
                    key={mod.id}
                    className="p-8 rounded-3xl bg-neutral-900/60 border border-white/10 space-y-6 hover:border-blue-500/40 transition-colors shadow-2xl relative overflow-hidden"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-mono font-extrabold text-blue-500/40">
                          {mod.number}
                        </span>
                        <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                          <mod.icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white">{mod.name}</h3>
                          <span className="text-xs text-gray-400 font-mono">Module Architecture</span>
                        </div>
                      </div>

                      <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {mod.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {mod.description}
                    </p>

                    {/* Formula if any */}
                    {mod.formula && (
                      <div className="p-5 rounded-2xl bg-black/80 border border-purple-500/40 text-purple-300 font-mono text-center shadow-inner">
                        <span className="text-purple-400 font-bold block mb-1 uppercase tracking-wider text-xs">Mathematical XP Formula:</span>
                        <span className="text-lg md:text-xl font-extrabold text-white">{mod.formula}</span>
                      </div>
                    )}

                    {/* Key Engineering Highlights */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Key Engineering Features:</h4>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {mod.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs md:text-sm text-gray-200 flex items-start gap-3">
                            <FaCheckCircle className="text-emerald-400 w-4 h-4 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* Footer Navigation */}
          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
            <Link 
              href="/#projects" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-bold transition-colors group"
            >
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1.5 transition-transform" /> 
              Back to Featured Projects
            </Link>
            <span className="font-mono text-xs text-gray-500">
              Nexus Architecture Case Study • Designed by Farrel Zandra
            </span>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
