"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4 fixed w-full z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-white ml-2">
                    Arel
                </a>
                <button
                    id="menu-btn"
                    className="block md:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div
                    id="menu"
                    className={`${
                        menuOpen ? "flex" : "hidden"
                    } md:flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0`}
                >
                    <a href="#" className="text-white hover:text-blue-400 transition">Home</a>
                    <a href="#skills" className="text-white hover:text-blue-400 transition">Skills</a>
                    <a href="#projects" className="text-white hover:text-blue-400 transition">Projects</a>
                    <a href="#contact" className="text-white hover:text-blue-400 transition">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
