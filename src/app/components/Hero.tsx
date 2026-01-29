import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-4 pt-16">
            
            {/* Ambient Background Glow (Bola Cahaya Biru di belakang) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="relative z-10 max-w-4xl space-y-6">

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                    Hi, I'm <span className="text-glow-gradient">Arel Zandra</span>
                    <br />
                    <span className="text-gray-500 text-3xl md:text-5xl font-semibold mt-2 block">
                        Fullstack Developer
                    </span>
                </h1>

                {/* Subtext Description */}
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mt-4">
                    Passionate Informatics Engineering student at <span className="text-gray-200 font-medium">Politeknik Negeri Bandung</span>.<br /> 
                    I build accessible, pixel-perfect, and performant web experiences.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-10">
                    <a 
                        href="#projects"
                        className="btn-primary px-8 py-3.5 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-blue-500/25"
                    >
                        View My Work
                    </a>
                    
                    <a 
                        href="https://drive.google.com/uc?export=download&id=1fAXZPtR3pNAYOj4-usGyHeCC3uPO_9Pl"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-700 text-gray-300 font-medium hover:bg-white/5 hover:border-white transition-all hover:text-white"
                    >
                        <FaDownload className="text-gray-500 group-hover:text-white transition-colors" />
                        Download CV
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;