"use client";

import React, { useState } from "react";
import {
  FaDownload,
  FaExternalLinkAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaMapMarkerAlt,
  FaFilePdf,
} from "react-icons/fa";

export default function ResumeClient() {
  const [activeTab, setActiveTab] = useState<"en" | "ja" | "pdf">("en");

  return (
    <div className="space-y-12">
      {/* Top Action & Language Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
        {/* View Mode Tabs */}
        <div className="flex items-center gap-6 text-xs uppercase tracking-[0.16em]">
          <button
            type="button"
            onClick={() => setActiveTab("en")}
            className={`py-2 transition-colors relative ${
              activeTab === "en"
                ? "text-ink-primary font-bold after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-ink-primary"
                : "text-ink-secondary hover:text-ink-primary"
            }`}
          >
            English Resume
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("ja")}
            className={`py-2 transition-colors relative ${
              activeTab === "ja"
                ? "text-ink-primary font-bold after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-ink-primary"
                : "text-ink-secondary hover:text-ink-primary"
            }`}
          >
            職務経歴書 (日本語)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("pdf")}
            className={`py-2 inline-flex items-center gap-1.5 transition-colors relative ${
              activeTab === "pdf"
                ? "text-ink-primary font-bold after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-ink-primary"
                : "text-ink-secondary hover:text-ink-primary"
            }`}
          >
            <FaFilePdf size={11} /> PDF Viewer
          </button>
        </div>

        {/* Download / Open PDF Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/Resume_Farrel_Zandra_Web_Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[40px] px-4 py-2 rounded-full border border-line bg-surface text-ink-primary text-xs font-semibold uppercase tracking-[0.14em] inline-flex items-center gap-2 hover:border-ink-primary transition-colors"
          >
            Open PDF <FaExternalLinkAlt size={10} />
          </a>

          <a
            href="/Resume_Farrel_Zandra_Web_Engineer.pdf"
            download="Resume_Farrel_Zandra_Web_Engineer.pdf"
            className="min-h-[40px] px-5 py-2 rounded-full bg-ink-primary text-ink-inverse text-xs font-semibold uppercase tracking-[0.14em] inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <FaDownload size={11} /> Download PDF
          </a>
        </div>
      </div>

      {/* PDF VIEWER MODE */}
      {activeTab === "pdf" && (
        <div className="rounded-[28px] bg-surface-muted p-4 sm:p-6 border border-line">
          <div className="rounded-2xl overflow-hidden border border-line bg-surface h-[780px]">
            <iframe
              src="/Resume_Farrel_Zandra_Web_Engineer.pdf"
              title="Farrel Zandra Resume PDF"
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* ENGLISH EDITORIAL RESUME SHEET */}
      {activeTab === "en" && (
        <article className="rounded-[28px] sm:rounded-[36px] bg-surface border border-line p-6 sm:p-12 lg:p-16 shadow-[0_12px_32px_rgba(20,20,22,0.03)] space-y-12">
          {/* Header */}
          <header className="border-b border-line pb-8 space-y-4">
            <div>
              <h1 className="font-serif uppercase text-4xl sm:text-6xl text-ink-primary tracking-tight leading-none">
                Farrel Zandra
              </h1>
              <p className="text-sm sm:text-base font-semibold text-ink-secondary mt-2 tracking-wide">
                Frontend &amp; Full-Stack Engineer
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-secondary pt-1">
              <span className="inline-flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-ink-muted" /> Bandung, Indonesia
              </span>
              <a
                href="mailto:arel.zandra@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-ink-primary transition-colors"
              >
                <FaEnvelope className="text-ink-muted" /> arel.zandra@gmail.com
              </a>
              <a
                href="tel:+6285264348888"
                className="inline-flex items-center gap-1.5 hover:text-ink-primary transition-colors"
              >
                <FaPhoneAlt className="text-ink-muted" size={10} /> +62 852-6434-8888
              </a>
              <a
                href="https://www.linkedin.com/in/farrel-zandra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-ink-primary transition-colors"
              >
                <FaLinkedin className="text-ink-muted" /> linkedin.com/in/farrel-zandra
              </a>
              <a
                href="https://github.com/arelquack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-ink-primary transition-colors"
              >
                <FaGithub className="text-ink-muted" /> github.com/arelquack
              </a>
              <a
                href="https://arelzandra.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-ink-primary transition-colors"
              >
                <FaGlobe className="text-ink-muted" /> arelzandra.vercel.app
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted pt-1">
              Summary
            </div>
            <div className="md:col-span-9 text-sm sm:text-base text-ink-secondary leading-relaxed">
              Versatile Frontend &amp; Full-Stack Software Engineer with proven
              experience delivering production-grade web platforms using Next.js
              (App Router), React, TypeScript, and modern component systems.
              Proven expertise across the engineering lifecycle: Turborepo
              monorepo architecture, upstream requirements engineering, client
              backoffice CMS delivery, installable mobile-first web
              applications, and AI workflow orchestration (n8n/Gemini),
              complemented by enterprise experience managing TB-scale
              distributed databases at PT Neural Technologies Indonesia.
              Certified JLPT N3 holder with professional working English
              proficiency, prepared to contribute clean architecture and
              high-performance UI/UX to cross-border engineering teams.
            </div>
          </section>

          {/* Technical Skills */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 border-t border-line">
            <div className="md:col-span-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted pt-1">
              Technical Skills
            </div>
            <div className="md:col-span-9 space-y-3 text-sm text-ink-secondary leading-relaxed">
              <p>
                <strong className="text-ink-primary font-semibold">
                  Frontend &amp; Web:
                </strong>{" "}
                Next.js 15/16 (App Router), React 19, TypeScript, JavaScript
                (ES6+), Tailwind CSS v4, Material UI (MUI v6), Recharts, Framer
                Motion, PWA Manifest, Flutter
              </p>
              <p>
                <strong className="text-ink-primary font-semibold">
                  Backend &amp; APIs:
                </strong>{" "}
                NestJS 11, Node.js, Express.js, RESTful APIs, Prisma ORM,
                PostgreSQL (Citus), ClickHouse, Supabase
              </p>
              <p>
                <strong className="text-ink-primary font-semibold">
                  DevOps &amp; Observability:
                </strong>{" "}
                GitHub Actions (CI/CD), Datadog (APM &amp; RUM Basics),
                Telemetry &amp; Latency Logging, n8n Automation, Docker, Linux
                (Ubuntu/Debian CLI)
              </p>
              <p>
                <strong className="text-ink-primary font-semibold">
                  Software Engineering:
                </strong>{" "}
                Monorepo (Turborepo), Upstream Requirements Specification,
                Software Analysis &amp; Design, SSR/CSR Hybrid Architecture,
                Responsive UI/UX
              </p>
            </div>
          </section>

          {/* Work Experience */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 border-t border-line">
            <div className="md:col-span-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted pt-1">
              Work Experience
            </div>
            <div className="md:col-span-9 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-ink-primary">
                    PT Neural Technologies Indonesia · South Jakarta, Indonesia
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-ink-secondary italic">
                    Database Engineer Intern (Client: Tier-1 Telco Provider in
                    Indonesia)
                  </p>
                </div>
                <span className="text-xs font-mono text-ink-muted shrink-0">
                  Jul 2026 – Present
                </span>
              </div>

              <ul className="space-y-2 text-sm text-ink-secondary leading-relaxed list-disc list-inside">
                <li>
                  Spearheaded the frontend and full-stack architecture of{" "}
                  <strong className="text-ink-primary font-medium">
                    Superflow
                  </strong>
                  , an autonomous BI agent powered by Gemini API, n8n workflow
                  automation, and Apache Superset REST API, proposed for an
                  enterprise-wide Big Data Analytics Platform initiative.
                </li>
                <li>
                  Engineered an interactive{" "}
                  <strong className="text-ink-primary font-medium">
                    Agentic Trace Widget
                  </strong>{" "}
                  in Next.js that visualizes AI multi-step reasoning processes
                  and dynamically renders analytical charts from multi-node
                  database clusters.
                </li>
                <li>
                  Optimized 90+ complex SQL/PL-pgSQL stored procedures across 94
                  enterprise tables and 2,700+ Citus PostgreSQL partitions
                  processing TB-scale telecom records.
                </li>
                <li>
                  Automated ETL data pipelines using Apache Airflow and
                  ClickHouse/PyArrow, processing 16.8M+ raw records into
                  compressed Parquet datasets.
                </li>
              </ul>
            </div>
          </section>

          {/* Key Software Projects */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 border-t border-line">
            <div className="md:col-span-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted pt-1">
              Key Projects
            </div>
            <div className="md:col-span-9 space-y-8">
              {/* Project 1: SiMona Polban */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-ink-primary">
                      SiMona Polban · Integrated Dormitory Operations Platform
                      (Web &amp; Mobile) | Trifur Group
                    </h3>
                    <p className="text-xs font-mono text-ink-muted mt-0.5">
                      Role: Frontend Lead &amp; Requirement Engineer · Tech:
                      Turborepo, Next.js 15, React 19, TypeScript, MUI v6,
                      NestJS 11, Prisma, PostgreSQL
                    </p>
                  </div>
                  <span className="text-xs font-mono text-ink-muted shrink-0">
                    Jun 2026 – Present
                  </span>
                </div>
                <ul className="space-y-1.5 text-sm text-ink-secondary leading-relaxed list-disc list-inside">
                  <li>
                    Co-authored comprehensive system requirements specifications
                    establishing domain rules for room quotas, ticketing
                    workflows, and multi-role RBAC across 48 units (192
                    residents).
                  </li>
                  <li>
                    Architected an installable mobile-first PWA for resident
                    interactions, delivering a seamless app-like experience with
                    homescreen prompts and unified Material UI components across
                    device viewports.
                  </li>
                  <li>
                    Developed incident ticketing modules with photo attachments
                    and anonymous reporting toggles, alongside administrative
                    verification dashboards for quarterly rent payments.
                  </li>
                </ul>
              </div>

              {/* Project 2: NewlyMom */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-ink-primary">
                      NewlyMom · Maternal Mental Health Ecosystem (Web Admin CMS
                      &amp; Mobile App) | Client Project
                    </h3>
                    <p className="text-xs font-mono text-ink-muted mt-0.5">
                      Role: Frontend Web Lead &amp; Mobile Integrator · Tech:
                      Next.js 16, React 19, TypeScript, Tailwind CSS v4,
                      Recharts, Supabase, Flutter
                    </p>
                  </div>
                  <span className="text-xs font-mono text-ink-muted shrink-0">
                    Feb 2026 – Jun 2026
                  </span>
                </div>
                <ul className="space-y-1.5 text-sm text-ink-secondary leading-relaxed list-disc list-inside">
                  <li>
                    Architected a client backoffice CMS using Next.js App Router
                    and TypeScript to manage user directories, educational
                    content taxonomy, and community forum moderation.
                  </li>
                  <li>
                    Built an analytics dashboard using Recharts to visualize
                    EPDS screening risk distributions, daily mood trends, and
                    system telemetry metrics.
                  </li>
                  <li>
                    Implemented non-blocking API latency logging to Supabase to
                    monitor backend response health, alongside session-secure
                    HTTP-only cookie authentication.
                  </li>
                  <li>
                    Co-developed the Flutter mobile application featuring EPDS
                    depression screening, PIN-protected journaling, and smart
                    recommendation triggers.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 border-t border-line">
            <div className="md:col-span-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted pt-1">
              Education
            </div>
            <div className="md:col-span-9 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-ink-primary">
                    Politeknik Negeri Bandung (POLBAN) · Bandung, Indonesia
                  </h3>
                  <p className="text-sm font-medium text-ink-secondary italic">
                    Bachelor of Applied Science (D4) in Informatics Engineering
                  </p>
                </div>
                <span className="text-xs font-mono text-ink-muted shrink-0">
                  Aug 2023 – Aug 2027 (Expected)
                </span>
              </div>
              <p className="text-sm text-ink-secondary">
                Relevant Coursework: Software Analysis &amp; Design, Data
                Structures &amp; Algorithms, Software Architecture, Web
                Programming, Database Systems.
              </p>
            </div>
          </section>

          {/* Honors & Certifications */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 border-t border-line">
            <div className="md:col-span-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted pt-1">
              Honors &amp; Certifications
            </div>
            <div className="md:col-span-9">
              <ul className="space-y-2 text-sm text-ink-secondary leading-relaxed list-disc list-inside">
                <li>
                  <strong className="text-ink-primary font-semibold">
                    Japanese Language:
                  </strong>{" "}
                  JLPT N3 Certified (2022) | Conversational &amp; Daily
                  Communicative Proficiency
                </li>
                <li>
                  <strong className="text-ink-primary font-semibold">
                    English Language:
                  </strong>{" "}
                  Professional Working Proficiency (Technical Documentation
                  &amp; Team Collaboration)
                </li>
                <li>
                  <strong className="text-ink-primary font-semibold">
                    3rd Place Winner:
                  </strong>{" "}
                  National Japanese Presentation Competition (The Japan
                  Foundation x MoECRT, 2023)
                </li>
                <li>
                  <strong className="text-ink-primary font-semibold">
                    1st Place Winner:
                  </strong>{" "}
                  KMIPN VII National Polytechnic Informatics Competition (UI/UX
                  Category, 2025)
                </li>
                <li>
                  <strong className="text-ink-primary font-semibold">
                    Top 10 National Finalist:
                  </strong>{" "}
                  Samsung Innovation Campus Batch 7 (2026)
                </li>
                <li>
                  <strong className="text-ink-primary font-semibold">
                    Finalist (Top 20):
                  </strong>{" "}
                  Gemastik XIX Data Mining Competition (Puspresnas / MoECRT,
                  2026)
                </li>
                <li>
                  <strong className="text-ink-primary font-semibold">
                    Former President:
                  </strong>{" "}
                  Nihongo Kurabu (Japanese Language &amp; Culture Club, 2021 –
                  2023)
                </li>
              </ul>
            </div>
          </section>
        </article>
      )}

      {/* JAPANESE 職務経歴書 (CV) SHEET */}
      {activeTab === "ja" && (
        <article className="rounded-[28px] sm:rounded-[36px] bg-surface border border-line p-6 sm:p-12 lg:p-16 shadow-[0_12px_32px_rgba(20,20,22,0.03)] space-y-12">
          <header className="border-b border-line pb-8 space-y-3">
            <h1 className="text-2xl sm:text-4xl font-bold text-ink-primary tracking-tight">
              職務経歴書 (Curriculum Vitae)
            </h1>
            <p className="text-sm sm:text-base font-semibold text-ink-secondary">
              氏名: ファレル・ザンドラ (Farrel Zandra) | 希望職種:
              Webエンジニア（フロントエンド / フルスタック）
            </p>
            <p className="text-xs text-ink-secondary">
              生年/国籍: 2005年 / インドネシア · メール: arel.zandra@gmail.com ·
              電話: +62 852-6434-8888 · LinkedIn: linkedin.com/in/farrel-zandra
              · GitHub: github.com/arelquack
            </p>
          </header>

          {/* 自己PR / 概要 */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-3 text-xs font-semibold text-ink-muted pt-1">
              自己PR / 概要
            </div>
            <div className="md:col-span-9 text-sm sm:text-base text-ink-secondary leading-relaxed">
              Next.js、React、TypeScriptを中核としたモダンフロントエンド開発およびフルスタックWeb開発を得意とするソフトウェアエンジニアです。バンドン国立工科大学（POLBAN）にて情報工学を専攻し、ソフトウェア分析・設計や要件定義書の策定といった上流工程から、Turborepoモノレポ構成によるWeb/モバイル画面開発、Next.js
              16による受託CMS開発、TB規模の大規模分散DB運用まで一貫した開発経験を有しています。PT
              Neural
              Technologiesでは、大手通信キャリア向け分析基盤の提案案件として、n8nおよびGemini
              APIを活用した企業向け自律型BIエージェント「Superflow」のフロントエンド・フルスタック開発をリードしました。日本語能力試験（JLPT）N3を保有し、全国日本語プレゼンテーション大会で3位入賞の実績があります。確かな技術力と誠実なチームコミュニケーションを通じて、貴社のグローバル開発チームに貢献いたします。
            </div>
          </section>

          {/* 技術スキル */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 border-t border-line">
            <div className="md:col-span-3 text-xs font-semibold text-ink-muted pt-1">
              技術スキル
            </div>
            <div className="md:col-span-9 space-y-2.5 text-sm text-ink-secondary leading-relaxed">
              <p>
                <strong className="text-ink-primary font-semibold">
                  フロントエンド:
                </strong>{" "}
                Next.js 15/16 (App Router), React 19, TypeScript, JavaScript,
                Tailwind CSS v4, Material UI (MUI v6), Recharts, Framer Motion,
                PWA Manifest, Flutter
              </p>
              <p>
                <strong className="text-ink-primary font-semibold">
                  バックエンド・DB:
                </strong>{" "}
                NestJS 11, Node.js, Express, REST API, Prisma ORM, PostgreSQL
                (Citus), ClickHouse, Supabase
              </p>
              <p>
                <strong className="text-ink-primary font-semibold">
                  DevOps・監視:
                </strong>{" "}
                GitHub Actions (CI/CD), Datadog（APM・RUM基礎）,
                テレメトリ／APMレイテンシ監視, n8n 自動化, Docker, Linux
                (Ubuntu/Debian CLI)
              </p>
              <p>
                <strong className="text-ink-primary font-semibold">
                  開発プロセス:
                </strong>{" "}
                モノレポ (Turborepo), 上流工程・要件定義,
                ソフトウェア分析・設計, SSR/CSRハイブリッド設計, UI/UX設計
              </p>
            </div>
          </section>

          {/* 実務経験 */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 border-t border-line">
            <div className="md:col-span-3 text-xs font-semibold text-ink-muted pt-1">
              実務経験
            </div>
            <div className="md:col-span-9 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h2 className="text-base font-semibold text-ink-primary">
                    PT Neural Technologies Indonesia · インドネシア・南ジャカルタ
                  </h2>
                  <p className="text-xs text-ink-secondary">
                    データベースエンジニア
                    インターン（クライアント: インドネシア最大手通信キャリア）
                  </p>
                </div>
                <span className="text-xs font-mono text-ink-muted shrink-0">
                  2026年7月 – 現在
                </span>
              </div>
              <ul className="space-y-2 text-sm text-ink-secondary leading-relaxed list-disc list-inside">
                <li>
                  自律型企業BIエージェント「Superflow」の開発リード（大手通信キャリア向け提案案件）:
                  Next.js、Gemini API、n8n自動化ワークフロー、Apache Superset
                  REST
                  APIを統合したAIデータ検索アシスタントを開発。AIの思考ステップを可視化する「Agentic
                  Trace Widget」および動的グラフ生成UIを実装。
                </li>
                <li>
                  テラバイト規模の分散データベース最適化:
                  94テーブル、2,700以上のパーティションで構成されるCitus
                  PostgreSQLクラスターにおいて、90以上のPL/pgSQLストアドプロシージャの性能チューニングを実施し、クエリ遅延を削減。
                </li>
                <li>
                  データパイプライン構築:
                  AirflowおよびClickHouse/PyArrowを用いて、1,680万件以上の通信生データを圧縮Parquet形式へ変換する自動ETL処理を構築。
                </li>
              </ul>
            </div>
          </section>

          {/* 主要開発プロジェクト */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 border-t border-line">
            <div className="md:col-span-3 text-xs font-semibold text-ink-muted pt-1">
              主要開発プロジェクト
            </div>
            <div className="md:col-span-9 space-y-6">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-semibold text-ink-primary">
                    1. 学生寮統合管理プラットフォーム「SiMona Polban」（Web &amp;
                    モバイル） | Trifur Group
                  </h3>
                  <span className="text-xs font-mono text-ink-muted shrink-0">
                    2026年6月 – 現在
                  </span>
                </div>
                <p className="text-xs font-mono text-ink-muted">
                  担当: フロントエンド開発リード、要件定義 | 技術: Turborepo,
                  Next.js 15, React 19, TypeScript, MUI v6, NestJS 11, Prisma,
                  PostgreSQL
                </p>
                <ul className="space-y-1.5 text-sm text-ink-secondary leading-relaxed list-disc list-inside">
                  <li>
                    寮生192名・48部屋を管理するソフトウェア要件仕様書を策定し、定員管理やマルチロール権限管理を設計。
                  </li>
                  <li>
                    Turborepoモノレポ構成を採用し、端末に直接追加可能なモバイルファーストPWA画面を構築。MUI
                    v6を用いた統一感のあるUIと軽快な操作性を実現。
                  </li>
                  <li>
                    写真添付・匿名投稿が可能な不具合報告チケット管理および寮費支払い確認ダッシュボードを開発。
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-semibold text-ink-primary">
                    2. 産後メンタルヘルス支援プラットフォーム「NewlyMom」（Web管理CMS
                    &amp; モバイルアプリ） | 受託案件
                  </h3>
                  <span className="text-xs font-mono text-ink-muted shrink-0">
                    2026年2月 – 2026年6月
                  </span>
                </div>
                <p className="text-xs font-mono text-ink-muted">
                  担当: Webフロントエンド開発リード、モバイル連携 | 技術:
                  Next.js 16, React 19, TypeScript, Tailwind CSS v4, Recharts,
                  Supabase, Flutter
                </p>
                <ul className="space-y-1.5 text-sm text-ink-secondary leading-relaxed list-disc list-inside">
                  <li>
                    Next.js
                    16およびTypeScriptを用い、ユーザー管理・教材CRUD・フォーラム投稿モデレーションを行う運用CMSを設計・実装。
                  </li>
                  <li>
                    Rechartsを活用し、エジンバラ産後うつ病自己評価票（EPDS）の受診リスク分布や気分傾向、システム負荷を可視化するダッシュボードを構築。
                  </li>
                  <li>
                    Supabaseと連携した非同期テレメトリ監視により、API応答遅延（レイテンシ）のロギング機構を導入。
                  </li>
                  <li>
                    EPDS診断機能やPIN保護付き日記機能を備えたFlutter製モバイルアプリの共同開発。
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 学歴 & 語学力・主な受賞歴 */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 border-t border-line">
            <div className="md:col-span-3 text-xs font-semibold text-ink-muted pt-1">
              学歴・受賞歴
            </div>
            <div className="md:col-span-9 space-y-4 text-sm text-ink-secondary">
              <div>
                <p className="font-semibold text-ink-primary">
                  バンドン国立工科大学 (POLBAN) 情報工学科 (D4 / 4年制学士課程) ·
                  2023年8月 – 2027年8月 卒業見込み
                </p>
                <p className="text-xs mt-1">
                  主要履修科目:
                  ソフトウェア分析・設計、データ構造とアルゴリズム、ソフトウェア工学、Webプログラミング、データベース工学
                </p>
                <p className="font-semibold text-ink-primary mt-2">
                  国立ブキティンギ第3高等学校 自然科学科 (MIPA) · 2020年 –
                  2023年 卒業
                </p>
              </div>

              <ul className="space-y-1.5 list-disc list-inside pt-2">
                <li>
                  日本語能力: JLPT N3
                  認定取得（2022年）／日常会話・基礎的な業務コミュニケーション可能
                </li>
                <li>
                  英語能力:
                  業務レベル（技術文書作成・GitHub等での英語コミュニケーション可能）
                </li>
                <li>
                  全国第3位: 国際交流基金 × インドネシア教育文化研究技術省
                  全国日本語プレゼンテーション大会 (2023)
                </li>
                <li>
                  全国第1位: KMIPN VII 全国ポリテク情報コンテスト
                  UI/UXデザイン部門 (2025)
                </li>
                <li>
                  全国トップ10: Samsung Innovation Campus Batch 7 (2026)
                </li>
                <li>
                  全国本選進出: 文部省主催 全国学生ITコンテスト GEMASTIK XIX
                  データマイニング部門 (2026)
                </li>
                <li>
                  元部長: 日本語日本文化部（Nihongo Kurabu） (2021 – 2023)
                </li>
              </ul>
            </div>
          </section>
        </article>
      )}
    </div>
  );
}
