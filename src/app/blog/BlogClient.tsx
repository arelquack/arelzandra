"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaSortAmountDown,
  FaSortAmountUp,
  FaTimes,
} from "react-icons/fa";

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

interface BlogClientProps {
  postsId: Post[];
  postsEn: Post[];
  postsJa: Post[];
}

export default function BlogClient({ postsId, postsEn, postsJa }: BlogClientProps) {
  // State untuk Bahasa, Search, Filter, dan Sort
  const [lang, setLang] = useState<'id' | 'en' | 'ja'>('id');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  // Pilih dataset berdasarkan bahasa yang aktif
  const allPosts = useMemo(() => {
    if (lang === 'en') return postsEn;
    if (lang === 'ja') return postsJa;
    return postsId;
  }, [lang, postsId, postsEn, postsJa]);

  // Reset filter tag saat ganti bahasa agar tidak "nyangkut"
  const handleLangChange = (newLang: 'id' | 'en' | 'ja') => {
    setLang(newLang);
    setSelectedTag("All");
  };

  // Ambil semua tag unik dari post yang aktif
  const allTags = useMemo(() => {
    const tags = new Set<string>(["All"]);
    allPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, [allPosts]);

  // Logika Filter, Search, dan Sorting
  const filteredPosts = useMemo(() => {
    let results = allPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag =
        selectedTag === "All" || post.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });

    return results.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [allPosts, searchQuery, selectedTag, sortOrder]);

  return (
    <>
      {/* Language & Sort Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        {/* Language Switcher */}
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

        {/* Sort Button */}
        <button
          onClick={() => setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"))}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-white/5 border border-gray-800 px-4 py-2 rounded-lg"
        >
          {sortOrder === "newest" ? <FaSortAmountDown /> : <FaSortAmountUp />}
          {sortOrder === "newest" ? "Latest" : "Oldest"}
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative group mb-8">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
        <input
          type="text"
          placeholder={lang === 'ja' ? "記事を検索..." : lang === 'en' ? "Search articles..." : "Cari artikel..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white/5 border border-gray-800 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500/50 transition-all text-gray-200"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
          >
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

      {/* Grid Posts */}
      <div className="grid gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}?lang=${lang}`}>
              <article className="glass-card p-6 md:p-8 rounded-2xl hover:border-blue-500/50 transition-all group relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                  <h2 className="text-2xl font-bold group-hover:text-blue-400 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <span className="shrink-0 text-xs md:text-sm text-gray-500 border border-gray-800 px-3 py-1 rounded-full w-fit bg-black/20">
                    {post.date}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-gray-500 bg-white/5 border border-gray-800 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))
        ) : (
          <div className="text-center py-20 bg-white/5 border border-dashed border-gray-800 rounded-2xl text-gray-500">
            {lang === 'ja' ? "記事が見つかりませんでした。" : lang === 'en' ? "No articles found." : "Artikel tidak ditemukan."}
          </div>
        )}
      </div>
    </>
  );
}