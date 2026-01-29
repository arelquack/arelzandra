"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Efek deteksi scroll biar navbar makin glass pas di-scroll ke bawah
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 px-4 py-4 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
            {/* Container Utama (Bentuk Kapsul/Pill) */}
            <div className={`max-w-5xl mx-auto rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300 ${scrolled ? 'glass-nav shadow-2xl bg-black/60' : 'bg-transparent border border-transparent'}`}>
                
                {/* Logo Area */}
                <a href="#" className="text-xl font-bold tracking-tighter text-white flex items-center gap-1 group">
                    Arel<span className="text-blue-500 group-hover:rotate-12 transition-transform inline-block">.dev</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300 items-center">
                    <a href="#home" className="hover:text-blue-400 hover:scale-105 transition-all">Home</a>
                    <a href="#skills" className="hover:text-blue-400 hover:scale-105 transition-all">Skills</a>
                    <a href="#projects" className="hover:text-blue-400 hover:scale-105 transition-all">Projects</a>
                    <a href="/blog" className="hover:text-blue-400 hover:scale-105 transition-all">Blog</a>
                    
                    {/* Resume Button (Kecil di Navbar) */}
                    <a 
                        href="https://drive.google.com/uc?export=download&id=1fAXZPtR3pNAYOj4-usGyHeCC3uPO_9Pl"
                        className="bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2"
                    >
                        <FaDownload size={10} /> Resume
                    </a>
                </div>

                {/* Mobile Menu Button (Hamburger) */}
                <button 
                    className="md:hidden text-white hover:text-blue-400 transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu (Card Style) */}
            {menuOpen && (
                <div className="absolute top-20 left-4 right-4 glass-nav rounded-2xl p-6 flex flex-col space-y-4 md:hidden animate-in fade-in slide-in-from-top-5 shadow-2xl border border-white/10">
                    <a href="#home" className="text-white hover:text-blue-400 text-lg font-medium p-2" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#skills" className="text-white hover:text-blue-400 text-lg font-medium p-2" onClick={() => setMenuOpen(false)}>Skills</a>
                    <a href="#projects" className="text-white hover:text-blue-400 text-lg font-medium p-2" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#contact" className="text-white hover:text-blue-400 text-lg font-medium p-2" onClick={() => setMenuOpen(false)}>Contact</a>
                    <hr className="border-gray-700"/>
                    <a 
                        href="https://drive.google.com/uc?export=download&id=1fAXZPtR3pNAYOj4-usGyHeCC3uPO_9Pl"
                        className="text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition"
                    >
                        Download Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;