"use client";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";

const Footer: React.FC = () => {
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative bg-black py-12 border-t border-white/10 overflow-hidden">
            
            {/* Background Glow (biar nyambung sama tema atas) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white tracking-tighter mb-2">
                            Arel<span className="text-blue-500">.dev</span>
                        </h2>
                        <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
                            Crafting scalable software and engaging digital experiences from Bandung, Indonesia.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        <a 
                            href="https://github.com/arelquack" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all border border-white/5"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a 
                            href="http://www.linkedin.com/in/farrel-zandra-75007034a" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 hover:scale-110 transition-all border border-white/5"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a 
                            href="https://instagram.com/farrel29__" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-pink-500 hover:bg-pink-500/10 hover:scale-110 transition-all border border-white/5"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a 
                            href="https://facebook.com/arrelalvarro" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-600/10 hover:scale-110 transition-all border border-white/5"
                        >
                            <FaFacebook size={20} />
                        </a>
                    </div>
                </div>

                {/* Separator Line */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Farrel Zandra. All Rights Reserved.</p>
                    
                    <div className="flex items-center gap-6">
                        <p>Made with <span className="text-red-500 animate-pulse">❤</span> in Bandung</p>
                        
                        {/* Back to Top Button */}
                        <button 
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group"
                        >
                            Back to Top 
                            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" size={12}/>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;