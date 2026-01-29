"use client";
import React, { useState } from "react";
import { FaEnvelope, FaCopy, FaCheck, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const email = "arel.zandra@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
                        Get in <span className="text-glow-gradient">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind or want to discuss a potential partnership?
                    </p>
                </div>

                {/* Main Card */}
                <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group">
                    
                    {/* Background Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] -z-10 group-hover:bg-blue-500/30 transition-all duration-700"></div>

                    <h3 className="text-3xl font-bold text-white mb-6">
                        Let's build something <span className="text-blue-400">amazing</span> together.
                    </h3>
                    
                    <p className="text-gray-300 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
                        I'm currently available for freelance projects and internship opportunities. 
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    {/* Action Buttons Area */}
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
                        
                        {/* Send Email Button */}
                        <a 
                            href={`mailto:${email}`}
                            className="btn-primary px-8 py-4 rounded-full text-lg font-bold flex items-center gap-3 hover:scale-105 transition-transform"
                        >
                            <FaEnvelope /> Say Hello
                        </a>

                        {/* Copy Email Button */}
                        <button 
                            onClick={handleCopy}
                            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-gray-600 bg-black/20 text-gray-300 hover:border-white hover:text-white transition-all backdrop-blur-sm relative overflow-hidden"
                        >
                            {/* Efek visual feedback pas dicopy */}
                            {copied ? (
                                <>
                                    <FaCheck className="text-green-400" /> 
                                    <span className="text-green-400 font-bold">Email Copied!</span>
                                </>
                            ) : (
                                <>
                                    <FaCopy className="group-hover:text-blue-400 transition-colors" /> 
                                    <span>Copy Email</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Socials Divider */}
                    <div className="flex items-center gap-4 max-w-xs mx-auto mb-8">
                        <div className="h-px bg-gray-700 flex-1"></div>
                        <span className="text-gray-500 text-sm font-medium uppercase tracking-widest">Or find me on</span>
                        <div className="h-px bg-gray-700 flex-1"></div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-8">
                        <a href="http://www.linkedin.com/in/farrel-zandra-75007034a" target="_blank" className="text-gray-400 hover:text-blue-400 transition-transform hover:scale-110">
                            <FaLinkedin size={32} />
                        </a>
                        <a href="https://github.com/arelquack" target="_blank" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
                            <FaGithub size={32} />
                        </a>
                        <a href="https://instagram.com/farrel29__" target="_blank" className="text-gray-400 hover:text-pink-500 transition-transform hover:scale-110">
                            <FaInstagram size={32} />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;