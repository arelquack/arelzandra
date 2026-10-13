import React from "react";
import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiSupabase,
  SiFlutter,
  SiSpringboot,
  SiCloudinary,
  SiGreensock,
  SiSolidity,
  SiEthereum,
  SiFastapi,
  SiPython,
  SiGo,
  SiDocker,
  SiIpfs,
  SiGithubactions,
  SiTurborepo,
  SiGooglegemini,
  SiN8N,
  SiApache,
  SiHtml5,
  SiPwa,
} from "react-icons/si";
import {
  FaChartBar,
  FaJava,
  FaFileSignature,
  FaCubes,
  FaCode,
} from "react-icons/fa";

function getTechIcon(techName: string): IconType {
  const lower = techName.toLowerCase();

  if (lower.includes("next.js")) return SiNextdotjs;
  if (lower.includes("react")) return SiReact;
  if (lower.includes("typescript")) return SiTypescript;
  if (lower.includes("tailwind")) return SiTailwindcss;
  if (lower.includes("mui") || lower.includes("material")) return SiMui;
  if (lower.includes("nestjs")) return SiNestjs;
  if (lower.includes("prisma")) return SiPrisma;
  if (lower.includes("supabase")) return SiSupabase;
  if (lower.includes("postgres")) return SiPostgresql;
  if (lower.includes("flutter")) return SiFlutter;
  if (lower.includes("spring")) return SiSpringboot;
  if (lower.includes("java")) return FaJava;
  if (lower.includes("recharts")) return FaChartBar;
  if (lower.includes("cloudinary")) return SiCloudinary;
  if (lower.includes("gsap")) return SiGreensock;
  if (lower.includes("tiptap")) return FaFileSignature;
  if (lower.includes("solidity")) return SiSolidity;
  if (lower.includes("ethereum")) return SiEthereum;
  if (lower.includes("web3")) return FaCubes;
  if (lower.includes("fastapi")) return SiFastapi;
  if (lower.includes("python")) return SiPython;
  if (lower.includes("golang") || lower === "go") return SiGo;
  if (lower.includes("docker")) return SiDocker;
  if (lower.includes("ipfs")) return SiIpfs;
  if (lower.includes("ci/cd") || lower.includes("github")) return SiGithubactions;
  if (lower.includes("turborepo")) return SiTurborepo;
  if (lower.includes("gemini")) return SiGooglegemini;
  if (lower.includes("n8n")) return SiN8N;
  if (lower.includes("superset") || lower.includes("apache")) return SiApache;
  if (lower.includes("canvas") || lower.includes("html5")) return SiHtml5;
  if (lower.includes("pwa")) return SiPwa;

  return FaCode;
}

interface TechStackIconsProps {
  stack: string[];
}

export default function TechStackIcons({ stack }: TechStackIconsProps) {
  return (
    <div className="pt-2 flex flex-wrap items-center gap-2">
      {stack.map((tech) => {
        const Icon = getTechIcon(tech);
        return (
          <div
            key={tech}
            tabIndex={0}
            aria-label={tech}
            className="group/tech relative w-9 h-9 rounded-xl bg-surface border border-line flex items-center justify-center text-ink-secondary hover:text-ink-primary hover:border-ink-primary focus:text-ink-primary focus:border-ink-primary focus:outline-none transition-colors cursor-default"
          >
            <Icon className="w-4 h-4" />

            {/* Hover / Focus Tooltip */}
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-footer-bg text-ink-inverse text-[11px] font-mono whitespace-nowrap opacity-0 scale-95 group-hover/tech:opacity-100 group-hover/tech:scale-100 group-focus/tech:opacity-100 group-focus/tech:scale-100 transition-all shadow-md z-30">
              {tech}
            </span>
          </div>
        );
      })}
    </div>
  );
}
