"use client";
import React, { useState, useMemo } from "react";
import { 
  SiTypescript, SiJavascript, SiPython, SiGo, SiHtml5, 
  SiReact, SiNextdotjs, SiVuedotjs, SiNuxtdotjs, SiTailwindcss,
  SiNodedotjs, SiFastapi, SiPostgresql, SiSupabase, 
  SiDocker, SiGithubactions, SiVercel, SiEslint, SiLinux, SiCloudinary 
} from "react-icons/si";
import { FaGitAlt, FaServer, FaNetworkWired, FaSearch } from "react-icons/fa";

export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "devops";
  badge: string;
  icon: React.ElementType;
  color: string;
}

const allSkills: SkillItem[] = [
  // Languages & Frontend
  { name: "JavaScript", category: "frontend", badge: "Language", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", category: "frontend", badge: "Language", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", category: "frontend", badge: "Language", icon: SiPython, color: "#3776AB" },
  { name: "Golang", category: "frontend", badge: "Language", icon: SiGo, color: "#00ADD8" },
  { name: "HTML5 / CSS3", category: "frontend", badge: "Frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "React.js", category: "frontend", badge: "Frontend", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", category: "frontend", badge: "Frontend", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Vue.js", category: "frontend", badge: "Frontend", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Nuxt.js", category: "frontend", badge: "Frontend", icon: SiNuxtdotjs, color: "#00DC82" },
  { name: "Tailwind CSS", category: "frontend", badge: "Frontend", icon: SiTailwindcss, color: "#06B6D4" },

  // Backend & Databases
  { name: "Node.js", category: "backend", badge: "Backend Runtime", icon: SiNodedotjs, color: "#339933" },
  { name: "FastAPI (Python)", category: "backend", badge: "Backend Framework", icon: SiFastapi, color: "#009688" },
  { name: "Golang Backend", category: "backend", badge: "Backend Language", icon: SiGo, color: "#00ADD8" },
  { name: "PostgreSQL", category: "backend", badge: "Database", icon: SiPostgresql, color: "#4169E1" },
  { name: "Supabase", category: "backend", badge: "BaaS / DB", icon: SiSupabase, color: "#3ECF8E" },
  { name: "RESTful APIs", category: "backend", badge: "Architecture", icon: FaServer, color: "#3B82F6" },
  { name: "Distributed Systems", category: "backend", badge: "Architecture", icon: FaNetworkWired, color: "#8B5CF6" },

  // DevOps & Tools
  { name: "Docker (Engine/CLI)", category: "devops", badge: "Containerization", icon: SiDocker, color: "#2496ED" },
  { name: "Git / GitHub", category: "devops", badge: "Version Control", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub Actions", category: "devops", badge: "CI/CD Pipeline", icon: SiGithubactions, color: "#2088FF" },
  { name: "Vercel", category: "devops", badge: "Cloud Platform", icon: SiVercel, color: "#FFFFFF" },
  { name: "ESLint & Prettier", category: "devops", badge: "Code Quality", icon: SiEslint, color: "#4B32C3" },
  { name: "Linux / Unix", category: "devops", badge: "OS Environment", icon: SiLinux, color: "#FCC624" },
  { name: "Cloudinary", category: "devops", badge: "Media CDN", icon: SiCloudinary, color: "#3448C5" },
];

const categories = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Languages & Frontend" },
  { id: "backend", label: "Backend & Databases" },
  { id: "devops", label: "DevOps & Tools" },
] as const;

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredSkills = useMemo(() => {
    return allSkills.filter((skill) => {
      const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            skill.badge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden z-10">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Technical <span className="text-glow-gradient">Stack & Skills</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            A comprehensive, battle-tested suite of technologies I leverage across Frontend, Backend, Data Engineering, and DevOps.
          </p>
        </div>

        {/* Filter Controls (Tabs + Search Bar) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white/5 p-3 rounded-2xl border border-white/10 backdrop-blur-md">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
            <input
              type="text"
              placeholder="Search skill (e.g. Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

        </div>

        {/* Counter Badge */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-6 px-1">
          <span>Showing <strong className="text-gray-300">{filteredSkills.length}</strong> of {allSkills.length} Technologies</span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")} 
              className="text-blue-400 hover:underline text-xs"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Responsive Skill Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              className="glass-card p-5 rounded-2xl flex flex-col items-center justify-between gap-3 group cursor-default transition-all duration-300 hover:-translate-y-1.5 border border-white/5 hover:border-white/20 relative overflow-hidden"
            >
              {/* Glow Accent on Hover */}
              <div 
                className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: skill.color }}
              />

              {/* Icon Container */}
              <div className="p-3.5 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors relative">
                <skill.icon size={36} color={skill.color} className="relative z-10 drop-shadow-md" />
              </div>

              {/* Name & Badge */}
              <div className="text-center w-full">
                <h3 className="text-gray-100 font-semibold text-sm tracking-wide group-hover:text-white transition-colors truncate">
                  {skill.name}
                </h3>
                <span className="inline-block text-[10px] font-mono text-gray-500 mt-1 uppercase tracking-wider">
                  {skill.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-gray-400 text-sm">No skills found matching &quot;{searchQuery}&quot;.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;