"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaArrowUp, FaCode } from "react-icons/fa";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-footer-bg text-ink-inverse pt-16 pb-12 px-6 border-t border-footer-border">
      <div className="max-w-6xl mx-auto">
        {/* Top Multi-Column Editorial Grid (Matching Reference Image Footer) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-footer-border">
          {/* Column 1: Brand & Location Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-ink-inverse">
              Arel<span className="text-footer-muted">.dev</span>
            </h2>
            <p className="text-footer-muted text-xs sm:text-sm leading-relaxed max-w-xs">
              Crafting scalable software and engaging digital experiences from
              Bandung, Indonesia.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-2.5 text-xs">
            <p className="uppercase tracking-[0.16em] text-ink-inverse font-semibold mb-3">
              Pages
            </p>
            <ul className="space-y-2 text-footer-muted">
              <li>
                <Link href="/" className="hover:text-ink-inverse transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-ink-inverse transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-ink-inverse transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-ink-inverse transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:text-ink-inverse transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-ink-inverse transition-colors">
                  Resume &amp; CV
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Socials & Contact */}
          <div className="lg:col-span-4 space-y-5 text-xs">
            <div className="space-y-1.5">
              <p className="uppercase tracking-[0.16em] text-ink-inverse font-semibold mb-2">
                Contact
              </p>
              <a
                href="mailto:arel.zandra@gmail.com"
                className="text-footer-muted hover:text-ink-inverse transition-colors block"
              >
                arel.zandra@gmail.com
              </a>
              <a
                href="tel:+6285264348888"
                className="text-footer-muted hover:text-ink-inverse transition-colors block"
              >
                +62 852-6434-8888
              </a>
            </div>

            <div>
              <p className="uppercase tracking-[0.16em] text-ink-inverse font-semibold mb-3">
                Socials
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/arelquack"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="min-w-[40px] min-h-[40px] rounded-full bg-white/5 border border-footer-border flex items-center justify-center text-footer-muted hover:text-ink-inverse hover:border-white/40 transition-all"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/farrel-zandra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="min-w-[40px] min-h-[40px] rounded-full bg-white/5 border border-footer-border flex items-center justify-center text-footer-muted hover:text-ink-inverse hover:border-white/40 transition-all"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href="https://instagram.com/farrel29__"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="min-w-[40px] min-h-[40px] rounded-full bg-white/5 border border-footer-border flex items-center justify-center text-footer-muted hover:text-ink-inverse hover:border-white/40 transition-all"
                >
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Far Right: Vertical Back to Top Button (Matching Reference Image) */}
          <div className="lg:col-span-1 flex lg:justify-end items-start">
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex lg:flex-col items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-footer-muted hover:text-ink-inverse transition-colors min-h-[44px]"
            >
              <FaArrowUp
                size={11}
                className="group-hover:-translate-y-1 transition-transform"
              />
              <span className="lg:[writing-mode:vertical-rl]">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Row (Professional Icon instead of hardcoded emoji) */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-footer-muted">
          <p>
            &copy; {new Date().getFullYear()} Farrel Zandra. All Rights
            Reserved.
          </p>
          <p className="inline-flex items-center gap-2">
            <FaCode className="text-footer-muted" size={12} />
            <span>Engineered in Bandung, Indonesia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;