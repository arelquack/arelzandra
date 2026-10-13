export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  role?: string;
  date: string;
  image: string;
  description: string;
  highlights?: string[];
  stack: string[];
  partners?: {
    name: string;
    linkedin: string;
  }[];
  links: {
    demo: string | null;
    repo: string | null;
  };
  hasCaseStudy?: boolean;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "musubix",
    title: "Musubix",
    subtitle:
      "Borderless Micro-Freelance Marketplace & Smart Escrow | Stellar APAC Hackathon",
    role: "Founder & Full-Stack Architect",
    date: "Jul 2026",
    image: "/images/projects/musubix.png",
    description:
      "A next-generation Web3 micro-freelance marketplace built on the Stellar Network and Soroban Smart Contracts, delivering custodial wallet abstraction, automated Rust smart escrows, instant cross-border path payments to local IDR, and Google Gemini AI job integrity auditing.",
    highlights: [
      "Built complete Web2-first custodial wallet abstraction: users log in via email while server-side AES-256 encrypted Stellar keypairs eliminate gas fees and seed phrase friction.",
      "Engineered a zero-trust Smart Escrow contract in Rust using Soroban SDK (#![no_std]), securing client deposits until milestone authorization without third-party intermediaries.",
      "Integrated Stellar Path Payment and DEX liquidity pools to settle cross-border transactions (USD/USDC/XLM) to liquid IDR in < 5 seconds with negligible transaction fees (< $0.0001).",
      "Integrated Google Gemini AI for automated job description and budget audits, protecting freelancers from unfair compensation and ambiguous requirements.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "NestJS",
      "Prisma",
      "Stellar SDK",
      "Soroban (Rust)",
      "Google Gemini AI",
      "Tailwind CSS",
    ],
    links: {
      demo: "https://musubix.vercel.app/",
      repo: null,
    },
    hasCaseStudy: true,
    featured: true,
  },
  {
    id: "superflow",
    title: "Superflow Enterprise",
    subtitle:
      "Autonomous Conversational BI Agent & Apache Superset Automation | Tier-1 Telco",
    role: "Lead Frontend & Full-Stack AI Engineer",
    date: "Jul 2026 – Present",
    image: "/images/projects/superflow-chatbot.png",
    description:
      "Autonomous enterprise AI agent transforming natural-language executive prompts into multi-chart Apache Superset dashboards in seconds (down from 15–30 minutes manually) under a strict Zero-Knowledge Data Plane architecture.",
    highlights: [
      "Engineered a multi-step ReAct Execution Loop (Thinking, Action, Observation, Verification) with 11 autonomous tools and an interactive Agentic Trace Widget in Next.js App Router.",
      "Built Live Asset Discovery and In-Place Dashboard Mutation with automated layout reflow, eliminating duplicate dashboard sprawl across teams.",
      "Developed Data Visualization Intelligence and Autonomous Troubleshooting engines to prevent chart anti-patterns, mitigate map area bias, and self-heal SQL/axis errors.",
      "Enforced a Zero-Knowledge Data Plane across 45+ database schemas and 4,792 telecom tables with a sub-10ms in-memory catalog router and multi-model Gemini fallback.",
    ],
    stack: [
      "Next.js App Router",
      "TypeScript",
      "Gemini Multi-Model API",
      "Apache Superset REST API",
      "n8n",
      "PostgreSQL (Multi-Server)",
      "Tailwind CSS",
    ],
    links: {
      demo: null,
      repo: null,
    },
    hasCaseStudy: true,
    featured: true,
  },
  {
    id: "simona-polban",
    title: "SiMona Polban",
    subtitle:
      "Integrated Dormitory Operations Platform (Web & Mobile) | Trifur Group",
    role: "Frontend Lead & Requirement Engineer",
    date: "Jun 2026 – Present",
    image: "/images/projects/simona-landing-page.png",
    description:
      "Integrated dormitory operations platform managing 192 residents across 48 units with installable mobile-first PWA capabilities, incident ticketing workflows, and administrative rent verification dashboards.",
    highlights: [
      "Led upstream system requirements and behavioral modeling for room capacity governance, curfew permits, and multi-role access control across 48 units (192 residents).",
      "Architected an installable mobile-first PWA inside a Turborepo monorepo, delivering a seamless app-like experience with homescreen prompts and unified Material UI v6 components.",
      "Developed incident ticketing modules with photo attachments and anonymous reporting toggles, alongside quarterly rent verification and broadcast announcement CMS dashboards.",
    ],
    stack: [
      "Turborepo",
      "Next.js 15",
      "React 19",
      "TypeScript",
      "MUI v6",
      "NestJS 11",
      "Prisma",
      "PostgreSQL",
    ],
    partners: [
      {
        name: "Reqi Jumantara Hapid",
        linkedin: "https://www.linkedin.com/in/reqi-jumantara",
      },
      {
        name: "Umar Faruq Robbany",
        linkedin: "https://www.linkedin.com/in/umar-faruq-robbany/",
      },
    ],
    links: {
      demo: null,
      repo: null,
    },
    hasCaseStudy: true,
    featured: true,
  },
  {
    id: "newlymom",
    title: "NewlyMom",
    subtitle:
      "Maternal Mental Health Ecosystem (Web Admin CMS & Mobile App) | Client Project",
    role: "Frontend Developer",
    date: "Feb 2026 – Jun 2026",
    image: "/images/newlymom.png",
    description:
      "An integrated multi-platform maternal mental health ecosystem featuring a Next.js client backoffice CMS, EPDS screening analytics dashboard, early detection alerts, sentiment analysis, and a Flutter mobile app.",
    highlights: [
      "Architected a client backoffice CMS using Next.js App Router and TypeScript to manage user directories, educational content taxonomy, and community forum moderation.",
      "Built an analytics dashboard using Recharts to visualize EPDS screening risk distributions, daily mood trends, and system telemetry metrics.",
      "Implemented non-blocking API latency logging to Supabase to monitor backend response health, alongside session-secure HTTP-only cookie authentication.",
      "Co-developed the Flutter mobile application featuring EPDS depression screening, PIN-protected journaling, and smart recommendation triggers.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Recharts",
      "Supabase",
      "Flutter",
      "Spring Boot",
      "Java",
    ],
    partners: [
      {
        name: "Reqi Jumantara Hapid",
        linkedin: "https://www.linkedin.com/in/reqi-jumantara",
      },
      {
        name: "Umar Faruq Robbany",
        linkedin: "https://www.linkedin.com/in/umar-faruq-robbany/",
      },
    ],
    links: {
      demo: null,
      repo: null,
    },
    featured: true,
  },
  {
    id: "nexus",
    title: "Nexus",
    subtitle: "Cybernetic Personal Operating System (LifeOS)",
    role: "System Architect & Full-Stack Engineer",
    date: "Jun 2026",
    image: "/images/projects/nexus.jpg",
    description:
      "A modern all-in-one cybernetic personal ecosystem integrating academic curriculum analytics, 2D force graph networking, multi-account financial ledgers, health telemetry, and a gamified XP leveling engine.",
    highlights: [
      "Engineered 8 interconnected PostgreSQL schemas with Next.js 16 Server Actions for zero-latency mutations and real-time XP progression ring telemetry.",
      "Built a custom 60 FPS HTML5 Canvas 2D physics-based force-directed graph engine mapping multi-cluster relationship networks.",
      "Implemented an algorithmic Spaced Repetition memory engine for JLPT Kanji mastery and a native full-database JSON snapshot backup & restore pipeline.",
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Supabase PostgreSQL",
      "HTML5 Canvas",
      "PWA",
    ],
    links: {
      demo: null,
      repo: null,
    },
    hasCaseStudy: true,
    featured: true,
  },
  {
    id: "website-nk",
    title: "Nihongo Kurabu Portal",
    subtitle: "Organization Information System, Media Publication & Admin CMS",
    role: "Full-Stack Developer",
    date: "Jan 2025",
    image: "/images/website-nk.png",
    description:
      "A comprehensive web-based information system and admin dashboard with custom SEO optimization yielding top organic search rankings.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Cloudinary",
      "GSAP",
      "TipTap",
    ],
    links: {
      demo: "https://nk-project.vercel.app",
      repo: null,
    },
    hasCaseStudy: true,
    featured: false,
  },
  {
    id: "votex",
    title: "VoteX",
    subtitle: "Decentralized Autonomous Organization (DAO) Voting Network",
    role: "Backend & Smart Contract Developer",
    date: "May 2026",
    image: "/images/votex.png",
    description:
      "A Decentralized Autonomous Organization (DAO) application for transparent, secure, and immutable digital voting leveraging Ethereum.",
    stack: ["Solidity", "Ethereum", "Next.js", "Web3"],
    partners: [
      {
        name: "Zidan Taufiqurahman",
        linkedin:
          "https://www.linkedin.com/in/zidan-taufiqurahman-0208ba385/",
      },
    ],
    links: {
      demo: null,
      repo: null,
    },
    featured: false,
  },
  {
    id: "adkeskom",
    title: "AdkesKom",
    subtitle: "Gamified Student Advocacy & Member Engagement Platform",
    role: "Frontend Developer",
    date: "Jan 2026",
    image: "/images/adkeskom.png",
    description:
      "Web application incorporating gamification elements to track member engagement and integrate cross-stack API endpoints.",
    stack: ["Next.js", "FastAPI", "Supabase", "Python"],
    partners: [
      {
        name: "Annisa Dian Fadillah",
        linkedin: "https://www.linkedin.com/in/annisadianfadillah",
      },
    ],
    links: {
      demo: "https://adkes-himakom.vercel.app",
      repo: null,
    },
    featured: false,
  },
  {
    id: "rekamedchain",
    title: "RekamedChain",
    subtitle:
      "Decentralized Digital Health Record Platform (KMIPN VII 1st Winner)",
    role: "Full-Stack Engineer",
    date: "2025",
    image: "/images/projects/rekamedchain.png",
    description:
      "A decentralized e-government electronic health records platform built with Permissioned Blockchain (Hyperledger Fabric), Self-Sovereign Identity (SSI), and encrypted off-chain storage to guarantee patient data sovereignty.",
    highlights: [
      "Won 1st Place (Juara 1) UI/UX E-Government Category at KMIPN VII 2025.",
      "Architected a 3-tier decentralized topology: Permissioned Blockchain consensus, SSI patient sovereignty, and CP-ABE encrypted off-chain IPFS storage.",
      "Developed a dual-interface ecosystem: a patient mobile app with time-bound consent management and a clinical web portal with unified cross-facility health timelines.",
    ],
    stack: [
      "Hyperledger Fabric",
      "Golang",
      "Next.js",
      "Flutter",
      "IPFS",
      "Docker",
    ],
    partners: [
      {
        name: "Reqi Jumantara Hapid",
        linkedin: "https://www.linkedin.com/in/reqi-jumantara",
      },
      {
        name: "Umar Faruq Robbany",
        linkedin: "https://www.linkedin.com/in/umar-faruq-robbany/",
      },
    ],
    links: {
      demo: null,
      repo: null,
    },
    hasCaseStudy: true,
    featured: false,
  },
];
