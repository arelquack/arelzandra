import React from "react";
import { Briefcase, GraduationCap, Calendar, Building2, MapPin, Award } from "lucide-react";

interface TimelineItem {
  id: string;
  type: "experience" | "education";
  role: string;
  institution: string;
  location: string;
  period: string;
  statusBadge?: string;
  description: string[];
  tags: string[];
  current?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    id: "neural-tech",
    type: "experience",
    role: "Data Engineer Intern",
    institution: "PT Neural Technologies Indonesia",
    location: "South Jakarta, DKI Jakarta, Indonesia",
    period: "Jul 2026 – Oct 2026 (Expected)",
    statusBadge: "Active Internship",
    current: true,
    description: [
      "Engineered database views and 4 custom SQL procedures/functions in PostgreSQL for the DTAP (Dynamic Threshold Adaptive Projection) project for Telcomsel client solutions.",
      "Developed an automated web scraping pipeline to ingest Jakarta & Banten event data (May, June, July 2026) for Telkomsel network assessment dashboard simulations.",
      "Explored Apache Airflow for DAG orchestration and pipeline workflow automation."
    ],
    tags: ["Python", "PostgreSQL", "SQL Functions", "Telkomsel DTAP", "Apache Airflow", "Web Scraping", "Data Engineering"]
  },
  {
    id: "polban",
    type: "education",
    role: "D4 - Informatics Engineering (Teknik Informatika)",
    institution: "Politeknik Negeri Bandung (POLBAN)",
    location: "Bandung, West Java, Indonesia",
    period: "Jul 2023 – Sep 2027 (Expected)",
    statusBadge: "Undergraduate",
    current: true,
    description: [
      "Specializing in Software Engineering, Database Architecture, Distributed Systems, and Applied Algorithms.",
      "Architecting interactive full-stack web applications, educational simulators, and RESTful backend APIs."
    ],
    tags: ["Software Engineering", "Database Systems", "Web Architecture", "Algorithms", "Distributed Systems"]
  },
  {
    id: "sman3-bukittinggi",
    type: "education",
    role: "Natural Sciences (MIPA) & Japanese Language Proficiency",
    institution: "SMA Negeri 3 Bukittinggi",
    location: "Bukittinggi, West Sumatra, Indonesia",
    period: "2020 – 2023",
    statusBadge: "Alumni & JLPT N3 Certified",
    current: false,
    description: [
      "Achieved JLPT N3 Certification in Japanese Language Proficiency (2022).",
      "Awarded 3rd Place in the National High School Japanese Presentation Contest organized by The Japan Foundation (2023).",
      "Served as President / Leader of Nihongo Kurabu (Japanese Club) in 2022, steering language workshops and cultural programs."
    ],
    tags: ["JLPT N3 Certified", "Japan Foundation Contest Winner", "Japanese Club President", "MIPA", "Leadership"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Career & <span className="text-glow-gradient">Education</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            My professional internship, real-world Telco engineering projects, and academic background.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
          {timelineData.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Indicator Icon */}
              <div 
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                  item.current 
                    ? "bg-blue-600/20 border-blue-500 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)]" 
                    : "bg-neutral-900 border-white/20 text-gray-400 group-hover:border-white/40 group-hover:text-white"
                }`}
              >
                {item.type === "experience" ? (
                  <Briefcase className="w-5 h-5" />
                ) : item.id === "sman3-bukittinggi" ? (
                  <Award className="w-5 h-5 text-amber-400" />
                ) : (
                  <GraduationCap className="w-5 h-5" />
                )}
              </div>

              {/* Glassmorphism Card */}
              <div className="glass-card shimmer-container rounded-2xl p-6 md:p-8 transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden">
                
                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span 
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                        item.type === "experience"
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                          : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                      }`}
                    >
                      {item.type === "experience" ? "Work Experience" : "Education"}
                    </span>
                    {item.statusBadge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {item.statusBadge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    {item.period}
                  </span>
                </div>

                {/* Role Title & Institution */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {item.role}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5 text-gray-300 font-medium">
                    <Building2 className="w-4 h-4 text-blue-500" />
                    {item.institution}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500 text-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>

                {/* Description Bullet Points */}
                <ul className="space-y-2 mb-6 text-sm text-gray-300 leading-relaxed list-disc list-inside">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-300/90">
                      <span className="ml-1">{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {item.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-medium text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md hover:border-gray-500 hover:text-white transition-colors cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
