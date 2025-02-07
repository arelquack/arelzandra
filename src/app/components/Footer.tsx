import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6 text-center">
            <div className="flex justify-center space-x-6 mb-3">
                <a href="https://github.com/arelquack" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    <FaGithub size={24} />
                </a>
                <a href="https://instagram.com/farrel29__" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                    <FaInstagram size={24} />
                </a>
                <a href="http://www.linkedin.com/in/farrel-zandra-75007034a" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://facebook.com/arrelalvarro" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                    <FaFacebook size={24} />
                </a>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Arel Zandra. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
