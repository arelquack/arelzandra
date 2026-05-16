"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaSortAmountDown,
  FaSortAmountUp,
  FaTimes,
} from "react-icons/fa";
import { Code2 } from "lucide-react";

interface LearnModule {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  level?: string;
}

interface LearnClientProps {
  modulesId: LearnModule[];
  modulesEn: LearnModule[];
  modulesJa: LearnModule[];
  initialLang: 'id' | 'en' | 'ja';
}

export default function LearnClient({ modulesId, modulesEn, modulesJa, initialLang }: LearnClientProps) {
  const [lang, setLang] = useState<'id' | 'en' | 'ja'>(initialLang);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const formatDate = (dateString: string, currentLang: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    if (currentLang === 'ja') {
      return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const allModules = useMemo(() => {
    if (lang === 'en') return modulesEn;
    if (lang === 'ja') return modulesJa;
    return modulesId;
  }, [lang, modulesId, modulesEn, modulesJa]);

  const handleLangChange = (newLang: 'id' | 'en' | 'ja') => {
    setLang(newLang);
    setSelectedTag("All");
  };

  const allTags = useMemo(() => {
    const tags = new Set<string>(["All"]);
    allModules.forEach((mod) => {
      mod.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, [allModules]);

  const filteredModules = useMemo(() => {
    let results = allModules.filter((mod) => {
      const title = mod.title?.toLowerCase() || "";
      const description = mod.description?.toLowerCase() || "";
      const search = searchQuery.toLowerCase();

      const matchesSearch = title.includes(search) || description.includes(search);
      const matchesTag = selectedTag === "All" || (mod.tags?.includes(selectedTag) ?? false);
      
      return matchesSearch && matchesTag;
    });

    return results.sort((a, b) => {
      const dateA = new Date(a.date || 0).getTime();
      const dateB = new Date(b.date || 0).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [allModules, searchQuery, selectedTag, sortOrder]);

  return (
    <>
      {/* Header Dinamis */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight flex flex-col md:flex-row items-center gap-3">
          <Code2 className="w-10 h-10 text-blue-500" />
          <span>Interactive <span className="text-glow-gradient">Learn</span></span>
        </h1>
        <p className="text-gray-400 text-lg">
          {lang === 'ja' 
            ? '技術を磨くためのインタラクティブな学習モジュール。' 
            : lang === 'en' 
            ? 'Interactive challenges and materials to level up your skills.' 
            : 'Materi dan tantangan interaktif untuk mengasah skill teknis kamu.'}
        </p>
      </div>

      {/* Language & Sort Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="bg-white/5 border border-gray-800 p-1 rounded-xl flex gap-1">
          {[
            { code: 'id', label: 'ID' },
            { code: 'en', label: 'EN' },
            { code: 'ja', label: 'JP' }
          ].map((l) => (
            <button
              key={l.code}
              onClick={() => handleLangChange(l.code as any)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                lang === l.code 
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" 
                : "text-gray-500 hover:text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"))}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-white/5 border border-gray-800 px-4 py-2 rounded-lg"
        >
          {sortOrder === "newest" ? <FaSortAmountDown /> : <FaSortAmountUp />}
          {lang === 'ja' ? (sortOrder === "newest" ? "最新順" : "古い順") 
            : lang === 'en' ? (sortOrder === "newest" ? "Latest" : "Oldest") 
            : (sortOrder === "newest" ? "Terbaru" : "Terlama")}
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative group mb-8">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
        <input
          type="text"
          placeholder={lang === 'ja' ? "モジュールを検索..." : lang === 'en' ? "Search modules..." : "Cari materi belajar..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white/5 border border-gray-800 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500/50 transition-all text-gray-200"
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
            <FaTimes />
          </button>
        )}
      </div>

      {/* Tag Filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all border ${
              selectedTag === tag
                ? "bg-blue-500/20 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                : "bg-white/5 border-gray-800 text-gray-400 hover:border-gray-600"
            }`}
          >
            {tag === "All" ? (lang === 'ja' ? "すべて" : tag) : `#${tag}`}
          </button>
        ))}
      </div>

      {/* Grid Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredModules.length > 0 ? (
          filteredModules.map((mod) => (
            <Link key={mod.slug} href={`/learn/${mod.slug}?lang=${lang}`}>
              <article className="bg-white/5 border border-gray-800 p-6 md:p-8 rounded-2xl hover:border-blue-500/50 hover:bg-white/10 transition-all group relative overflow-hidden h-full flex flex-col">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                  <h2 className="text-xl font-bold group-hover:text-blue-400 transition-colors leading-tight">
                    {mod.title}
                  </h2>
                  <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full w-fit bg-blue-500/10">
                    {mod.level || 'Beginner'}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm flex-grow">
                  {mod.description}
                </p>
                
                <div className="flex justify-between items-end mt-auto pt-4 border-t border-gray-800/50">
                    <div className="flex flex-wrap gap-2">
                    {mod.tags?.map((tag) => (
                        <span key={tag} className="text-xs font-medium text-gray-500 bg-white/5 border border-gray-800 px-2 py-1 rounded">
                        #{tag}
                        </span>
                    ))}
                    </div>
                    <span className="text-xs text-gray-500">
                        {formatDate(mod.date, lang)}
                    </span>
                </div>
              </article>
            </Link>
          ))
        ) : (
          <div className="md:col-span-2 text-center py-20 bg-white/5 border border-dashed border-gray-800 rounded-2xl text-gray-500">
            {lang === 'ja' ? "モジュールが見つかりませんでした。" : lang === 'en' ? "No modules found." : "Materi tidak ditemukan."}
          </div>
        )}
      </div>
    </>
  );
}