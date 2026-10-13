"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/achievements", label: "Achievements" },
    { href: "/blog", label: "Blog" },
    { href: "/learn", label: "Learn" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-canvas/90 backdrop-blur-md border-b border-line py-3.5"
          : "bg-canvas/75 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between">
        {/* Left: Brand Identity (Acts as Home Link) */}
        <Link
          href="/"
          className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-ink-primary hover:opacity-70 transition-opacity min-h-[44px] inline-flex items-center"
        >
          AREL<span className="text-ink-muted">.DEV</span>
        </Link>

        {/* Center: Primary Navigation Destinations */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[11px] uppercase tracking-[0.18em] font-medium text-ink-secondary">
          {navLinks.map((item) => {
            const isHashLink = item.href.startsWith("/#");
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : !isHashLink &&
                  (pathname === item.href ||
                    pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 transition-colors relative ${
                  isActive
                    ? "text-ink-primary font-semibold after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0.5 after:h-px after:bg-ink-primary"
                    : "hover:text-ink-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Primary Contact CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#contact"
            className="text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-primary hover:text-ink-secondary transition-colors min-h-[44px] inline-flex items-center"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button (44x44px touch target) */}
        <button
          type="button"
          aria-label="Toggle Menu"
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-ink-primary hover:opacity-70 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-line px-6 py-5 shadow-lg space-y-2">
          <div className="flex flex-col divide-y divide-line/60 text-xs uppercase tracking-[0.16em] font-semibold text-ink-primary">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3.5 hover:text-ink-secondary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="py-3.5 hover:text-ink-secondary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;