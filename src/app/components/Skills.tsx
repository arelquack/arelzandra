import React from "react";
import { FaPython, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiSupabase, SiJupyter, SiTailwindcss } from 'react-icons/si';

const skills = [
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Python", icon: FaPython, color: "#FFD43B" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80 -z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
                        My Tech <span className="text-glow-gradient">Stack</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Tools and technologies I use to bring ideas to life.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-default transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Icon Wrapper dengan Glow Effect saat hover */}
                            <div 
                                className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors relative"
                            >
                                {/* Shadow glow sesuai warna brand */}
                                <div 
                                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{ backgroundColor: skill.color }}
                                ></div>
                                
                                <skill.icon 
                                    size={48} 
                                    color={skill.color} 
                                    className="relative z-10 drop-shadow-lg"
                                />
                            </div>
                            
                            {/* Skill Name */}
                            <h3 className="text-gray-200 font-medium text-lg tracking-wide group-hover:text-white transition-colors">
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