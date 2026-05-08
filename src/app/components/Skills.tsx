import React from "react";
import { FaPython, FaGitAlt, FaDocker, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiFastapi, SiGo, SiSolidity, SiPostgresql, SiFlutter } from 'react-icons/si';

const skills = [
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Golang", icon: SiGo, color: "#00ADD8" },
    { name: "Python / FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "Java / Spring", icon: FaJava, color: "#ED8B00" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Solidity", icon: SiSolidity, color: "#363636" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Git / CI/CD", icon: FaGitAlt, color: "#F05032" },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80 -z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
                        My Tech <span className="text-glow-gradient">Stack</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Industry-standard tools and technologies I use to architect and deploy systems.
                    </p>
                </div>

                {/* Grid diubah jadi 5 kolom di layar besar biar lebih padat dan muat banyak */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-default transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors relative">
                                <div 
                                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{ backgroundColor: skill.color }}
                                ></div>
                                <skill.icon size={48} color={skill.color} className="relative z-10 drop-shadow-lg" />
                            </div>
                            <h3 className="text-gray-200 font-medium text-lg tracking-wide text-center group-hover:text-white transition-colors">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;