"use client";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "arel.zandra@gmail.com";
  const phone = "+62 852-6434-8888";

  const mailtoSubject = encodeURIComponent(
    "Inquiry regarding Project/Collaboration"
  );
  const mailtoBody = encodeURIComponent(
    "Hi Arel,\n\nI saw your portfolio and I'm interested in discussing..."
  );
  const mailtoUrl = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Asymmetric Editorial Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start mb-10 sm:mb-12">
          <div className="md:col-span-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-secondary pt-1 md:pt-2">
            <span>GET IN TOUCH</span>
            <span className="inline-block w-8 h-px bg-ink-muted" />
            <span className="text-ink-primary">→</span>
          </div>

          <div className="md:col-span-8">
            <h2 className="text-lg sm:text-2xl lg:text-[1.75rem] leading-[1.45] sm:leading-[1.38] font-normal text-ink-primary tracking-tight">
              Have a{" "}
              <span className="text-ink-muted">project in mind</span> or want
              to discuss a{" "}
              <span className="text-ink-muted">potential partnership</span>?
            </h2>
          </div>
        </div>

        {/* Editorial Contact Card */}
        <div className="rounded-[24px] sm:rounded-[32px] bg-surface-muted border border-line p-6 sm:p-12 lg:p-16 text-center">
          <h3 className="font-serif uppercase text-3xl sm:text-5xl lg:text-6xl text-ink-primary tracking-tight leading-[1.06] sm:leading-none mb-5 sm:mb-6">
            Let&apos;s build something amazing together.
          </h3>

          <p className="text-ink-secondary mb-7 sm:mb-8 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            I&apos;m currently available for freelance projects, software
            engineering roles, and cross-border collaboration. Whether you have
            a question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono text-ink-secondary mb-7 sm:mb-8">
            <span className="inline-flex items-center gap-2">
              <FaEnvelope className="text-ink-muted" />
              {email}
            </span>
            <span className="hidden sm:inline text-line">·</span>
            <a
              href="tel:+6285264348888"
              className="inline-flex items-center gap-2 hover:text-ink-primary transition-colors"
            >
              <FaPhoneAlt className="text-ink-muted" size={11} />
              {phone}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center items-center mb-9 sm:mb-10">
            {/* Send Email Button */}
            <a
              href={mailtoUrl}
              className="w-full sm:w-auto justify-center min-h-[48px] px-8 py-3.5 rounded-full bg-ink-primary text-ink-inverse text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] inline-flex items-center gap-3 hover:opacity-90 transition-all"
            >
              <FaEnvelope size={14} /> Say Hello
            </a>

            {/* Copy Email Button */}
            <button
              type="button"
              onClick={handleCopy}
              className={`w-full sm:w-auto justify-center min-h-[48px] px-8 py-3.5 rounded-full border text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] inline-flex items-center gap-3 transition-all ${
                copied
                  ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                  : "border-line bg-surface text-ink-primary hover:border-ink-primary"
              }`}
            >
              {copied ? (
                <>
                  <FaCheck className="text-emerald-600" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy className="text-ink-muted" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-4 max-w-xs mx-auto mb-6">
            <div className="h-px bg-line flex-1" />
            <span className="text-ink-muted text-[11px] font-medium uppercase tracking-[0.18em]">
              Connect with me
            </span>
            <div className="h-px bg-line flex-1" />
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/farrel-zandra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="min-w-[44px] min-h-[44px] rounded-full bg-surface border border-line flex items-center justify-center text-ink-secondary hover:text-ink-primary hover:border-ink-primary transition-all"
            >
              <FaLinkedin size={18} title="LinkedIn" />
            </a>
            <a
              href="https://github.com/arelquack"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="min-w-[44px] min-h-[44px] rounded-full bg-surface border border-line flex items-center justify-center text-ink-secondary hover:text-ink-primary hover:border-ink-primary transition-all"
            >
              <FaGithub size={18} title="GitHub" />
            </a>
            <a
              href="https://instagram.com/farrel29__"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="min-w-[44px] min-h-[44px] rounded-full bg-surface border border-line flex items-center justify-center text-ink-secondary hover:text-ink-primary hover:border-ink-primary transition-all"
            >
              <FaInstagram size={18} title="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;