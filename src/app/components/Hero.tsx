import React from "react";
import { FaExternalLinkAlt, FaRocket } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-4 pt-20">
      
      {/* Ambient Background Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[650px] h-[350px] md:h-[650px] bg-blue-600/15 rounded-full blur-[140px] -z-10 animate-pulse-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-float-delayed pointer-events-none" />

      <div className="relative z-10 max-w-4xl space-y-6 animate-fade-in-up">
        
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Hi, I'm <span className="text-glow-gradient">Arel Zandra</span>
          <br />
          <span className="text-gray-400 text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 block">
            Full-Stack & Data Engineer
          </span>
        </h1>

        {/* Subtext Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mt-4 font-light">
          Informatics Engineering student at <span className="text-white font-medium">Politeknik Negeri Bandung</span>.<br /> 
          Bridging the gap between intuitive front-end interfaces, high-concurrency back-end logic, and data engineering pipelines.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 pt-2">
          <a 
            href="#projects"
            className="btn-primary shimmer-container px-8 py-3.5 rounded-2xl font-bold text-base md:text-lg shadow-lg flex items-center gap-2 group"
          >
            <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            View Featured Work
          </a>
          
          <a 
            href="https://drive.google.com/file/d/12io5xiNZb28nr_xbRPaMY8xxm8hx7gRZ/view?usp=sharing"
            target="_blank" 
            rel="noopener noreferrer"
            className="group shimmer-container flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-white/15 bg-white/5 text-gray-200 font-medium hover:bg-white/10 hover:border-white/40 transition-all hover:text-white text-base md:text-lg shadow-md"
          >
            <FaExternalLinkAlt className="text-gray-400 group-hover:text-white transition-colors" />
            View Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;