"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaGithub, FaExternalLinkAlt, FaLinkedin, FaCalendarAlt, FaBookOpen
} from 'react-icons/fa';

export interface Project {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
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
}

const projects: Project[] = [
  {
    id: "nexus",
    title: "Nexus",
    date: "Jun 2026",
    image: "/images/nexus-v2.png",
    description: "A modern all-in-one cybernetic personal ecosystem integrating academics, 2D force graph networking, financial ledgers, health telemetry, and a gamified XP leveling engine.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Supabase PostgreSQL", "HTML5 Canvas", "PWA"],
    links: {
      demo: null,
      repo: null
    },
    hasCaseStudy: true
  },
  {
    id: "votex",
    title: "VoteX",
    date: "May 2026",
    image: "/images/votex.png",
    description: "A Decentralized Autonomous Organization (DAO) application for transparent, secure, and immutable digital voting leveraging Ethereum.",
    stack: ["Solidity", "Ethereum", "Next.js", "Web3"],
    partners: [
      {
        name: "Zidan Taufiqurahman",
        linkedin: "https://www.linkedin.com/in/zidan-taufiqurahman-0208ba385/"
      }
    ],
    links: {
      demo: null, 
      repo: null
    }
  },
  {
    id: "newlymom",
    title: "Newlymom",
    date: "May 2026",
    image: "/images/newlymom.png",
    description: "An integrated multi-platform system for postpartum mental health support, featuring early detection alerts and sentiment analysis.",
    stack: ["Flutter", "Spring Boot", "Next.js", "Java"],
    partners: [
      {
        name: "Reqi Jumantara Hapid",
        linkedin: "https://www.linkedin.com/in/reqi-jumantara"
      },
      {
        name: "Umar Faruq Robbany",
        linkedin: "https://www.linkedin.com/in/umar-faruq-robbany/"
      }
    ],
    links: {
      demo: null,
      repo: null
    }
  },
  {
    id: "adkeskom",
    title: "AdkesKom",
    date: "Jan 2026",
    image: "/images/adkeskom.png",
    description: "Web application incorporating gamification elements to track member engagement and integrate cross-stack API endpoints.",
    stack: ["Next.js", "FastAPI", "Supabase", "Python"],
    partners: [
      {
        name: "Annisa Dian Fadillah",
        linkedin: "https://www.linkedin.com/in/annisadianfadillah"
      }
    ],
    links: {
      demo: "https://adkes-himakom.vercel.app",
      repo: null
    }
  },
  {
    id: "rekamedchain",
    title: "RekamedChain",
    date: "Oct 2025",
    image: "/images/rekamedchain.png",
    description: "MVP of an e-government digital medical record system securing patient data sovereignty through Self-Sovereign Identity (SSI) and IPFS.",
    stack: ["Golang", "Docker", "IPFS", "CI/CD"],
    partners: [
      {
        name: "Reqi Jumantara Hapid",
        linkedin: "https://www.linkedin.com/in/reqi-jumantara"
      },
      {
        name: "Umar Faruq Robbany",
        linkedin: "https://www.linkedin.com/in/umar-faruq-robbany/"
      }
    ],
    links: {
      demo: null,
      repo: null
    }
  },
  {
    id: "website-nk",
    title: "Nihongo Kurabu Portal",
    date: "Jan 2025",
    image: "/images/website-nk.png",
    description: "A comprehensive web-based information system and admin dashboard with custom SEO optimization yielding top organic search rankings.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Supabase", "Cloudinary", "GSAP", "TipTap"],
    links: {
      demo: "https://nk-project.vercel.app",
      repo: null
    },
    hasCaseStudy: true
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10 overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Featured <span className="text-glow-gradient">Projects & Case Studies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Architecting complex applications from self-hosted personal operating systems to decentralized blockchain DAO networks.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card shimmer-container rounded-2xl overflow-hidden flex flex-col h-full group hover:border-blue-500/60 transition-all duration-500 shadow-xl relative"
            >
              
              {/* Image Banner */}
              <div className="relative h-52 overflow-hidden bg-neutral-900 group">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={800} 
                  height={500}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80 z-20" />
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-7 flex flex-col flex-grow relative z-30 -mt-4">
                
                {/* Date Badge */}
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold tracking-wider bg-white/5 text-gray-300 border border-white/10">
                    <FaCalendarAlt className="text-gray-400" />
                    {project.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-xs md:text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Partners (if any) */}
                {project.partners && project.partners.length > 0 && (
                  <div className="mb-4">
                    <p className="text-[11px] text-gray-500 font-medium mb-1">Co-developed with:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.partners.map((partner, pIdx) => (
                        <a 
                          key={pIdx}
                          href={partner.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <FaLinkedin size={12} />
                          {partner.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-medium text-gray-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded hover:bg-white/10 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Buttons */}
                <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                  
                  {/* Case Study Link (Only if project has dedicated caseStudy page) */}
                  {project.hasCaseStudy ? (
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white border border-blue-400/40 text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.4)] group"
                    >
                      <FaBookOpen className="text-white group-hover:scale-110 transition-transform" /> Read Case Study
                    </Link>
                  ) : project.links.demo ? (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </a>
                  ) : (
                    <span className="px-3 py-1.5 rounded-xl bg-white/5 text-gray-400 border border-white/10 text-xs font-medium">
                      Private Project
                    </span>
                  )}

                  {/* External Demo Link for projects with case study that also have a demo */}
                  {project.hasCaseStudy && project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-xs font-bold transition-all flex items-center gap-1.5"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={11} /> Demo
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;