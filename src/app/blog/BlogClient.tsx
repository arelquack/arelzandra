"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaSortAmountDown,
  FaSortAmountUp,
  FaTimes,
  FaArrowRight,
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

export default function BlogClient({
  postsId,
  postsEn,
  postsJa,
}: BlogClientProps) {
  const [lang, setLang] = useState<"id" | "en" | "ja">("id");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const formatDate = (dateString: string, currentLang: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    if (currentLang === "ja") {
      return date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const allPosts = useMemo(() => {
    if (lang === "en") return postsEn;
    if (lang === "ja") return postsJa;
    return postsId;
  }, [lang, postsId, postsEn, postsJa]);

  const handleLangChange = (newLang: "id" | "en" | "ja") => {
    setLang(newLang);
    setSelectedTag("All");
  };

  const allTags = useMemo(() => {
    const tags = new Set<string>(["All"]);
    allPosts.forEach((post) => {
      post.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, [allPosts]);

  const filteredPosts = useMemo(() => {
    const results = allPosts.filter((post) => {
      const title = post.title?.toLowerCase() || "";
      const description = post.description?.toLowerCase() || "";
      const search = searchQuery.toLowerCase();

      const matchesSearch =
        title.includes(search) || description.includes(search);
      const matchesTag =
        selectedTag === "All" || (post.tags?.includes(selectedTag) ?? false);

      return matchesSearch && matchesTag;
    });

    return results.sort((a, b) => {
      const dateA = new Date(a.date || 0).getTime();
      const dateB = new Date(b.date || 0).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [allPosts, searchQuery, selectedTag, sortOrder]);

  return (
    <div>
      {/* Editorial Header */}
      <div className="mb-14">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-secondary mb-4">
          <span>WRITING CORNER</span>
          <span className="inline-block w-8 h-px bg-ink-muted" />
          <span className="text-ink-primary">→</span>
        </div>

        <h1 className="font-serif uppercase text-5xl sm:text-6xl md:text-7xl text-ink-primary tracking-tight leading-[0.95] mb-4">
          {lang === "ja"
            ? "ライティング コーナー"
            : lang === "en"
            ? "Writing Corner"
            : "Sudut Tulisan"}
        </h1>

        <p className="text-ink-secondary text-base sm:text-lg max-w-2xl">
          {lang === "ja"
            ? "技術、チュートリアル、そして日常の考え。"
            : lang === "en"
            ? "Sharing my journey in software architecture, tutorials, and engineering notes."
            : "Berbagi perjalanan di dunia rekayasa perangkat lunak, tutorial, dan catatan teknis."}
        </p>
      </div>

      {/* Language, Search & Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 pb-6 border-b border-line mb-6">
        {/* Clean Editorial Language Switcher */}
        <div className="flex items-center gap-6 text-xs uppercase tracking-[0.16em]">
          {[
            { code: "id", label: "ID" },
            { code: "en", label: "EN" },
            { code: "ja", label: "JP" },
          ].map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => handleLangChange(l.code as "id" | "en" | "ja")}
              className={`py-2 transition-colors relative ${
                lang === l.code
                  ? "text-ink-primary font-bold after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-ink-primary"
                  : "text-ink-secondary hover:text-ink-primary"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted text-xs" />
            <input
              type="text"
              placeholder={
                lang === "ja"
                  ? "記事を検索..."
                  : lang === "en"
                  ? "Search articles..."
                  : "Cari artikel..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full min-h-[40px] bg-surface border border-line rounded-xl py-2 pl-9 pr-8 text-xs sm:text-sm text-ink-primary placeholder-ink-muted focus:outline-none focus:border-ink-primary transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink-primary"
              >
                <FaTimes size={11} />
              </button>
            )}
          </div>

          {/* Sort Button */}
          <button
            type="button"
            onClick={() =>
              setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"))
            }
            className="min-h-[40px] inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-secondary hover:text-ink-primary transition-colors bg-surface border border-line px-4 py-2 rounded-xl"
          >
            {sortOrder === "newest" ? <FaSortAmountDown /> : <FaSortAmountUp />}
            {lang === "ja"
              ? sortOrder === "newest"
                ? "最新順"
                : "古い順"
              : lang === "en"
              ? sortOrder === "newest"
                ? "Latest"
                : "Oldest"
              : sortOrder === "newest"
              ? "Terbaru"
              : "Terlama"}
          </button>
        </div>
      </div>

      {/* Minimal Tag Filter Bar */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-12 text-xs">
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setSelectedTag(tag)}
            className={`py-1 transition-colors ${
              selectedTag === tag
                ? "text-ink-primary font-bold underline underline-offset-4"
                : "text-ink-muted hover:text-ink-primary"
            }`}
          >
            {tag === "All"
              ? lang === "ja"
                ? "すべて (All)"
                : "All Topics"
              : `#${tag}`}
          </button>
        ))}
      </div>

      {/* Editorial Post List */}
      <div className="divide-y divide-line border-t border-b border-line">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, idx) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}?lang=${lang}`}
              className="block py-8 sm:py-10 group"
            >
              <article className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                {/* Date & Index */}
                <div className="md:col-span-3 text-xs font-mono text-ink-muted flex items-center gap-3">
                  <span>0{idx + 1}</span>
                  <span>—</span>
                  <span>{formatDate(post.date, lang)}</span>
                </div>

                {/* Title, Excerpt & Tags */}
                <div className="md:col-span-9 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-ink-primary group-hover:opacity-70 transition-opacity leading-snug tracking-tight">
                      {post.title}
                    </h2>
                    <FaArrowRight
                      size={12}
                      className="text-ink-muted group-hover:text-ink-primary group-hover:translate-x-1 transition-all shrink-0 mt-2"
                    />
                  </div>

                  <p className="text-ink-secondary leading-relaxed text-sm sm:text-base">
                    {post.description}
                  </p>

                  {post.tags && post.tags.length > 0 && (
                    <p className="text-xs font-mono text-ink-muted pt-1">
                      {post.tags.map((t) => `#${t}`).join(" · ")}
                    </p>
                  )}
                </div>
              </article>
            </Link>
          ))
        ) : (
          <div className="text-center py-16 text-ink-secondary text-sm">
            {lang === "ja"
              ? "記事が見つかりませんでした。"
              : lang === "en"
              ? "No articles found."
              : "Artikel tidak ditemukan."}
          </div>
        )}
      </div>
    </div>
  );
}