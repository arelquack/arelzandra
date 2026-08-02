"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { 
  Database, 
  Terminal, 
  Workflow, 
  CheckCircle2, 
  XCircle, 
  RefreshCw,
  Server,
  ArrowRight,
  HardDrive,
  BarChart3,
  Layers,
  Cpu,
  FileCode,
  Tag,
  AlertCircle,
  HelpCircle
} from "lucide-react";

// Dynamic import for MermaidDiagram to prevent SSR/Turbopack rendering issues
const MermaidDiagram = dynamic(() => import("./MermaidDiagram"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center p-8 bg-neutral-950 rounded-xl border border-white/5">
      <span className="font-mono text-sm text-emerald-400 animate-pulse">Memuat Visualisasi Pipeline...</span>
    </div>
  )
});

interface QuizStep {
  id: number;
  title: string;
  desc: string;
  options: string[];
  answer: string;
  wrongHints: { [key: string]: string };
}

const DE_QUIZ_STEPS: QuizStep[] = [
  {
    id: 1,
    title: "Misi 1: Menelan Data Raksasa",
    desc: "File 100GB tidak muat di RAM 8GB. Analogi: Makan pizza raksasa harus dipotong-potong. Argumen apa di Pandas untuk memotong data?",
    options: ["chunksize", "telan_semua", "read_all"],
    answer: "chunksize",
    wrongHints: {
      "telan_semua": "Kalau ditelan semua, RAM 8GB komputer kita langsung hang/crash karena memori tidak kuat!",
      "read_all": "read_all akan memuat seluruh data ke memori sekaligus, menyebabkan Out Of Memory!"
    }
  },
  {
    id: 2,
    title: "Misi 2: Sapu Bersih Data Kosong",
    desc: "Banyak pelanggan yang kolom nomor teleponnya kosong (NaN). Kita harus membuang baris tersebut agar tidak error.",
    options: ["dropna (Buang Kosong)", "fillna (Isi Kosong)", "keep_all (Simpan Semua)"],
    answer: "dropna (Buang Kosong)",
    wrongHints: {
      "fillna (Isi Kosong)": "fillna akan mengisi kolom kosong dengan nilai palsu, bukan membuang data kotor.",
      "keep_all (Simpan Semua)": "Menyimpan data kosong (NaN) akan merusak perhitungan kita di database."
    }
  },
  {
    id: 3,
    title: "Misi 3: Filter Tagihan Minus",
    desc: "Ada anomali data pemakaian internet minus (-150MB). Kita hanya mau data yang valid (lebih besar dari 0).",
    options: ["> 0", "== 0", "< 0"],
    answer: "> 0",
    wrongHints: {
      "== 0": "Ini hanya akan mengambil pelanggan yang tidak menggunakan kuota internet sama sekali.",
      "< 0": "Ini malah menyaring data pemakaian internet minus yang salah saja."
    }
  },
  {
    id: 4,
    title: "Misi 4: Kunci Kontak Database",
    desc: "Data sudah bersih. Sekarang kita butuh 'kunci kontak' untuk menyalakan mesin database PostgreSQL menggunakan SQLAlchemy.",
    options: ["create_engine", "buka_database", "start_sql"],
    answer: "create_engine",
    wrongHints: {
      "buka_database": "Ini adalah istilah karangan. SQLAlchemy membutuhkan mesin engine resmi untuk tersambung.",
      "start_sql": "start_sql bukan fungsi bawaan library Python SQLAlchemy."
    }
  },
  {
    id: 5,
    title: "Misi 5: Menambah, Bukan Merobek",
    desc: "Saat memuat data ke tabel 'network_usage', kita ingin menambahkan catatan di bawahnya, BUKAN menimpa/menghapus data lama.",
    options: ["append", "replace", "delete"],
    answer: "append",
    wrongHints: {
      "replace": "Bahaya! Opsi 'replace' akan menghapus tabel lama beserta isinya sebelum membuat tabel baru.",
      "delete": "Opsi 'delete' akan menghapus isi tabel, bukan mengunggah data baru."
    }
  },
  {
    id: 6,
    title: "Misi 6: Kalkulator Agregasi (SQL)",
    desc: "Tim bisnis minta total kuota tiap pelanggan. Fungsi SQL apa yang bertugas menjumlahkan angka?",
    options: ["SUM", "COUNT", "MAX"],
    answer: "SUM",
    wrongHints: {
      "COUNT": "COUNT hanya menghitung jumlah baris/kejadian, bukan menjumlahkan angka kuota.",
      "MAX": "MAX hanya mengambil nilai pemakaian terbesar dari satu baris."
    }
  },
  {
    id: 7,
    title: "Misi 7: Sang Mandor (Airflow)",
    desc: "Agar proses ini jalan otomatis tiap tengah malam, kita jadikan fungsi Python ini sebagai Airflow DAG (Directed Acyclic Graph).",
    options: ["@dag", "@jadwal", "@robot"],
    answer: "@dag",
    wrongHints: {
      "@jadwal": "Jadwal bukan decorator resmi untuk mendefinisikan alur kerja di Apache Airflow.",
      "@robot": "Robot bukan decorator resmi untuk mendefinisikan alur kerja di Apache Airflow."
    }
  },
  {
    id: 8,
    title: "Misi 8: Atur Lalu Lintas",
    desc: "Airflow butuh urutan kerja. Task 'Transform' hanya boleh jalan JIKA 'Extract' sudah sukses. Operator apa untuk mengatur panah alur ini?",
    options: [">>", "+", "="],
    answer: ">>",
    wrongHints: {
      "+": "Tanda tambah (+) digunakan untuk penjumlahan matematika, bukan dependensi alur kerja.",
      "=": "Tanda sama dengan (=) untuk penugasan variabel, bukan alur kerja DAG."
    }
  }
];

export default function DataEngineeringSimPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [wrongOption, setWrongOption] = useState<string | null>(null);
  const [showHint, setShowHint] = useState<string | null>(null);

  const isFinished = currentStep >= DE_QUIZ_STEPS.length;
  const progressPercent = Math.min((currentStep / DE_QUIZ_STEPS.length) * 100, 100);

  // Cari Fase Aktif Berdasarkan Step Saat Ini
  const getCurrentPhase = () => {
    if (isFinished) return 4;
    if (currentStep <= 2) return 1; // Extract & Transform (Pandas)
    if (currentStep <= 4) return 2; // Load (PostgreSQL)
    if (currentStep <= 5) return 3; // Analytics (SQL)
    return 4; // Orchestration (Airflow)
  };

  const currentPhase = getCurrentPhase();

  // Detail styling dinamis berdasarkan fase aktif
  const getPhaseStyles = (phase: number) => {
    switch (phase) {
      case 1:
        return {
          text: "text-rose-400",
          bgGlow: "rgba(244,63,94,0.06)",
          border: "border-rose-500/20",
          progressBg: "bg-rose-500",
          badge: "bg-rose-500/10 text-rose-400 border-rose-500/20",
          title: "Fase 1: Extract & Transform (Pandas)",
          titleIcon: <FileCode className="w-5 h-5 text-rose-400" />
        };
      case 2:
        return {
          text: "text-blue-400",
          bgGlow: "rgba(59,130,246,0.06)",
          border: "border-blue-500/20",
          progressBg: "bg-blue-500",
          badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
          title: "Fase 2: Load (PostgreSQL)",
          titleIcon: <Server className="w-5 h-5 text-blue-400" />
        };
      case 3:
        return {
          text: "text-indigo-400",
          bgGlow: "rgba(99,102,241,0.06)",
          border: "border-indigo-500/20",
          progressBg: "bg-indigo-500",
          badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
          title: "Fase 3: Analytics (SQL)",
          titleIcon: <BarChart3 className="w-5 h-5 text-indigo-400" />
        };
      case 4:
      default:
        return {
          text: "text-emerald-400",
          bgGlow: "rgba(16,185,129,0.06)",
          border: "border-emerald-500/20",
          progressBg: "bg-emerald-500",
          badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
          title: "Fase 4: Orchestration (Airflow)",
          titleIcon: <Workflow className="w-5 h-5 text-emerald-400" />
        };
    }
  };

  const currentStyles = getPhaseStyles(currentPhase);

  const handleAnswer = (opt: string) => {
    setSelectedAnswer(opt);
    const stepData = DE_QUIZ_STEPS[currentStep];
    
    if (opt === stepData.answer) {
      setIsError(false);
      setWrongOption(null);
      setShowHint(null);
      setTimeout(() => {
        setSelectedAnswer(null);
        setCurrentStep((prev) => prev + 1);
      }, 800);
    } else {
      setIsError(true);
      setWrongOption(opt);
      // Tampilkan hint yang spesifik dari opsi salah yang ditekan
      setShowHint(stepData.wrongHints[opt] || "Jawabanmu kurang tepat. Coba pikirkan lagi!");
      setTimeout(() => {
        setSelectedAnswer(null);
        setIsError(false);
        setWrongOption(null);
      }, 1200);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswer(null);
    setIsError(false);
    setWrongOption(null);
    setShowHint(null);
  };

  // --- RENDERING DYNAMIC VISUALIZER ---
  const renderVisualizer = () => {
    // FASE 1: Extract & Transform (Pandas Raw Logs)
    if (currentStep <= 3) {
      // Step 0: Data mentah apa adanya
      // Step 1: Data mentah dengan baris NaN mulai berkedip
      // Step 2: Baris NaN dicoret, baris pemakaian minus mulai disorot
      // Step 3: Baris minus dicoret, sticker "DATA CLEAN" muncul
      
      const isNanHighlighted = currentStep === 1;
      const isNanRemoved = currentStep >= 2;
      const isMinusHighlighted = currentStep === 2;
      const isMinusRemoved = currentStep >= 3;
      const showCleanSticker = currentStep >= 3;

      return (
        <div className="flex flex-col h-full animate-in fade-in duration-500">
          <div className="bg-[#18181b] px-4 py-3 rounded-t-2xl flex items-center justify-between border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
            </div>
            <span className="text-[11px] font-mono text-white/40 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" /> pandas_cleaner.py
            </span>
            <div className="w-10"></div>
          </div>
          
          <div className="bg-[#0c0c0e] p-6 rounded-b-2xl border border-t-0 border-white/5 font-mono text-xs overflow-x-auto flex-grow flex flex-col gap-4 shadow-inner relative justify-between">
            {/* Sticker Data Clean */}
            {showCleanSticker && (
              <div className="absolute top-16 right-6 rotate-12 scale-110 z-20 animate-in zoom-in duration-300">
                <div className="bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500 px-4 py-1.5 rounded-lg text-xs font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] select-none uppercase tracking-widest flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> DATA 100% CLEAN
                </div>
              </div>
            )}

            <div>
              <span className="text-rose-400"># Misi 1-3: Pembersihan Data di Pandas</span>
              <br />
              <span className="text-white/30">&gt;&gt;&gt; import pandas as pd</span>
              <br />
              {currentStep > 0 && <><span className="text-white/40">&gt;&gt;&gt; chunks = pd.read_csv('telco_raw.csv', chunksize=50000)</span><br /></>}
              {currentStep > 1 && <><span className="text-white/40">&gt;&gt;&gt; df = next(chunks).dropna(subset=['phone_number'])</span><br /></>}
              {currentStep > 2 && <><span className="text-white/40">&gt;&gt;&gt; df_clean = df[df['data_used_mb'] &gt; 0]</span><br /></>}
            </div>

            <div className="mt-2 text-white/80">
              <div className="text-[10px] text-rose-500/70 uppercase font-bold tracking-wider mb-2 flex items-center gap-1.5">
                <HardDrive className="w-3 h-3 text-rose-400" /> RAM View: raw_telecom_data
              </div>
              <table className="w-full text-left border-collapse text-[11px]">
                <thead>
                  <tr className="border-b border-white/10 text-white/50 bg-white/[0.02]">
                    <th className="py-2 px-2 text-white/40">IDX</th>
                    <th className="py-2 px-2">Phone Number</th>
                    <th className="py-2 px-2 text-right">Data Used (MB)</th>
                    <th className="py-2 px-2 text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Baris Normal 1 */}
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-2 px-2 text-white/30">0</td>
                    <td className="py-2 px-2 text-white/80">+628129876543</td>
                    <td className="py-2 px-2 text-right">124.5</td>
                    <td className="py-2 px-2 text-center text-emerald-400 font-bold">OK</td>
                  </tr>

                  {/* Baris NaN Phone Number */}
                  <tr className={`border-b border-white/5 transition-all duration-700
                    ${isNanRemoved ? "opacity-10 scale-95 line-through decoration-rose-500/80 text-rose-500/30" : ""}
                    ${isNanHighlighted ? "bg-rose-500/20 text-rose-300 font-bold ring-1 ring-rose-500/50" : "text-rose-400 bg-rose-500/5"}
                  `}>
                    <td className="py-2 px-2 opacity-40">1</td>
                    <td className="py-2 px-2 font-bold bg-rose-950/20 px-1 py-0.5 rounded text-rose-200">NaN</td>
                    <td className="py-2 px-2 text-right">45.2</td>
                    <td className="py-2 px-2 text-center text-rose-400 font-bold">DIRTY</td>
                  </tr>

                  {/* Baris Normal 2 */}
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-2 px-2 text-white/30">2</td>
                    <td className="py-2 px-2 text-white/80">+628198889990</td>
                    <td className="py-2 px-2 text-right">12.8</td>
                    <td className="py-2 px-2 text-center text-emerald-400 font-bold">OK</td>
                  </tr>

                  {/* Baris internet usage minus */}
                  <tr className={`border-b border-white/5 transition-all duration-700
                    ${isMinusRemoved ? "opacity-10 scale-95 line-through decoration-rose-500/80 text-rose-500/30" : ""}
                    ${isMinusHighlighted ? "bg-rose-500/20 text-rose-300 font-bold ring-1 ring-rose-500/50" : "text-rose-400 bg-rose-500/5"}
                  `}>
                    <td className="py-2 px-2 opacity-40">3</td>
                    <td className="py-2 px-2 text-white/80">+628131112223</td>
                    <td className="py-2 px-2 text-right font-bold bg-rose-950/20 px-1 py-0.5 rounded text-rose-200">-150.0</td>
                    <td className="py-2 px-2 text-center text-rose-400 font-bold">DIRTY</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 border-t border-white/5 pt-4 text-[10px] text-white/40 flex justify-between">
              <span>Memory Size: {currentStep === 0 ? "100 GB (Locked)" : "50,000 rows (Chunk)"}</span>
              <span className="text-rose-400 font-semibold animate-pulse">
                {currentStep === 0 && "Menunggu inisialisasi chunksize..."}
                {currentStep === 1 && "Menghapus nomor telepon kosong..."}
                {currentStep === 2 && "Menyaring pemakaian internet minus..."}
                {currentStep === 3 && "Semua anomali data di Pandas bersih!"}
              </span>
            </div>
          </div>
        </div>
      );
    }
    
    // FASE 2: Load (PostgreSQL DB with Blue theme)
    if (currentStep <= 5) {
      const isConnecting = currentStep === 4;
      const isInserting = currentStep === 5;

      return (
        <div className="flex flex-col h-full animate-in fade-in duration-500">
          <div className="bg-[#18181b] px-4 py-3 rounded-t-2xl flex items-center justify-between border-b border-blue-500/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
            </div>
            <span className="text-[11px] font-mono text-white/40 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-blue-400" /> postgresql_conn
            </span>
            <div className="w-10"></div>
          </div>
          
          <div className="bg-[#090b11] p-6 rounded-b-2xl border border-t-0 border-blue-500/20 font-mono text-xs overflow-x-auto flex-grow flex flex-col gap-6 shadow-inner justify-between">
            <div>
              <span className="text-blue-400"># Misi 4-5: Load ke PostgreSQL (SQLAlchemy)</span>
              <br />
              <span className="text-white/40">
                {currentStep > 4 
                  ? "telecom=# SELECT * FROM network_usage ORDER BY id DESC LIMIT 2;" 
                  : "telecom=# Connecting to PostgreSQL database..."
                }
              </span>
            </div>

            {isConnecting && (
              <div className="my-auto text-center flex flex-col items-center gap-3 animate-pulse">
                <Server className="w-12 h-12 text-blue-400 animate-bounce" />
                <span className="text-blue-400 text-xs font-bold tracking-widest">CONNECTING TO DATABASE (Engine)...</span>
                <span className="text-white/30 text-[10px]">Memanggil SQLAlchemy create_engine()</span>
              </div>
            )}

            {isInserting && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="text-[10px] text-blue-400 uppercase font-bold tracking-wider flex items-center gap-1.5">
                  <Database className="w-3 h-3" /> Tabel PostgreSQL: network_usage
                </div>
                
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="border-b border-blue-500/20 text-blue-300/60 bg-blue-500/[0.02]">
                      <th className="py-2 px-2">ID</th>
                      <th className="py-2 px-2">Phone Number</th>
                      <th className="py-2 px-2 text-right">Data (MB)</th>
                      <th className="py-2 px-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-blue-500/10 bg-blue-500/5 text-blue-100">
                      <td className="py-2 px-2 text-blue-400/40">10052</td>
                      <td className="py-2 px-2">+628129876543</td>
                      <td className="py-2 px-2 text-right">124.5</td>
                      <td className="py-2 px-2 text-center text-emerald-400 font-bold">APPENDED</td>
                    </tr>
                    <tr className="border-b border-blue-500/10 bg-blue-500/5 text-blue-100">
                      <td className="py-2 px-2 text-blue-400/40">10053</td>
                      <td className="py-2 px-2">+628198889990</td>
                      <td className="py-2 px-2 text-right">12.8</td>
                      <td className="py-2 px-2 text-center text-emerald-400 font-bold">APPENDED</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            <div className="mt-auto border-t border-blue-500/20 pt-4">
              {isInserting ? (
                <div className="text-emerald-400 font-bold text-xs flex items-center gap-1.5 animate-pulse">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  [SUCCESS] 450,000 clean rows successfully appended to 'network_usage' table.
                </div>
              ) : (
                <div className="text-white/30 text-[10px]">
                  Engine Status: Offline | Connection Pool: Idle
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // FASE 3: Analytics (SQL Aggregation with Purple theme)
    if (currentStep === 6) {
      return (
        <div className="flex flex-col h-full animate-in fade-in duration-500">
          <div className="bg-[#18181b] px-4 py-3 rounded-t-2xl flex items-center justify-between border-b border-indigo-500/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></div>
            </div>
            <span className="text-[11px] font-mono text-white/40 flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-indigo-400" /> sql_aggregations.sql
            </span>
            <div className="w-10"></div>
          </div>
          
          <div className="bg-[#0b0a13] p-6 rounded-b-2xl border border-t-0 border-indigo-500/20 font-mono text-xs overflow-x-auto flex-grow flex flex-col gap-4 shadow-inner justify-between">
            <div>
              <span className="text-indigo-400"># Misi 6: Analytics & Data Mart (SQL Aggregation)</span>
              <br />
              <span className="text-white/40">telecom_marts=# SELECT name, SUM(data_used_mb) AS total_data FROM usage_summary GROUP BY name;</span>
            </div>

            <div className="mt-2 text-white/80">
              <div className="text-[10px] text-indigo-400 uppercase font-bold tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-indigo-400" /> Data Mart: dm_customer_usage (TOP 3 VIP)
              </div>
              <table className="w-full text-left border-collapse text-[11px]">
                <thead>
                  <tr className="border-b border-indigo-500/20 text-indigo-300/60 bg-indigo-500/[0.02]">
                    <th className="py-2 px-2">Rank</th>
                    <th className="py-2 px-2">Customer Name</th>
                    <th className="py-2 px-2 text-right">Total Internet Usage</th>
                    <th className="py-2 px-2 text-center">Segment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-indigo-500/10 hover:bg-indigo-500/5 transition-colors">
                    <td className="py-2 px-2 text-indigo-400/40">1</td>
                    <td className="py-2 px-2 text-indigo-200 font-bold">Ahmad Ridwan</td>
                    <td className="py-2 px-2 text-right text-emerald-400 font-bold">245.8 GB</td>
                    <td className="py-2 px-2 text-center"><span className="text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded text-[10px] border border-indigo-500/30 font-bold">VIP ACCUMULATED (SUM)</span></td>
                  </tr>
                  <tr className="border-b border-indigo-500/10 hover:bg-indigo-500/5 transition-colors">
                    <td className="py-2 px-2 text-indigo-400/40">2</td>
                    <td className="py-2 px-2 text-indigo-200">Citra Lestari</td>
                    <td className="py-2 px-2 text-right text-emerald-400 font-bold">189.2 GB</td>
                    <td className="py-2 px-2 text-center"><span className="text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded text-[10px] border border-indigo-500/30 font-bold">VIP ACCUMULATED (SUM)</span></td>
                  </tr>
                  <tr className="border-b border-indigo-500/10 hover:bg-indigo-500/5 transition-colors">
                    <td className="py-2 px-2 text-indigo-400/40">3</td>
                    <td className="py-2 px-2 text-indigo-200">Budi Santoso</td>
                    <td className="py-2 px-2 text-right text-emerald-400">124.5 GB</td>
                    <td className="py-2 px-2 text-center"><span className="text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded text-[10px] border border-indigo-500/30 font-bold">VIP ACCUMULATED (SUM)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-auto border-t border-indigo-500/20 pt-4 text-[10px] text-white/40 flex justify-between">
              <span>Mart Table: dm_customer_usage</span>
              <span>Calculation logic: SUM(MB) / 1024</span>
            </div>
          </div>
        </div>
      );
    }

    // FASE 4: Orchestration (Airflow DAG with Emerald theme)
    if (currentStep >= 7) {
      // Step 7: Dotted DAG (no connection arrow between Transform -> Load -> Analytics yet, showing pending workflow)
      // Step 8 & Selesai: Solid active green DAG

      const isOrchestrationSuccess = isFinished;
      const isSequenceDefined = currentStep >= 8;

      const graphCode = isSequenceDefined 
        ? `graph TD
            E[Extract - Bash/API] --> T[Transform - Pandas]
            T --> L[Load - Postgres]
            L --> A[Analytics - SQL]

            style E fill:#10b981,stroke:#6ee7b7,stroke-width:1px,color:#fff
            style T fill:#10b981,stroke:#6ee7b7,stroke-width:1px,color:#fff
            style L fill:#10b981,stroke:#6ee7b7,stroke-width:1px,color:#fff
            style A fill:#10b981,stroke:#6ee7b7,stroke-width:1px,color:#fff
          ` 
        : `graph TD
            E[Extract - Bash/API] .-> T[Transform - Pandas]
            T .-> L[Load - Postgres]
            L .-> A[Analytics - SQL]

            style E fill:#3f3f46,stroke:#71717a,stroke-width:1px,color:#a1a1aa
            style T fill:#3f3f46,stroke:#71717a,stroke-width:1px,color:#a1a1aa
            style L fill:#3f3f46,stroke:#71717a,stroke-width:1px,color:#a1a1aa
            style A fill:#3f3f46,stroke:#71717a,stroke-width:1px,color:#a1a1aa
          `;

      return (
        <div className="flex flex-col h-full animate-in fade-in duration-500">
          <div className="bg-[#18181b] px-4 py-3 rounded-t-2xl flex items-center justify-between border-b border-emerald-500/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
            <span className="text-[11px] font-mono text-white/40 flex items-center gap-1.5">
              <Workflow className="w-3.5 h-3.5" /> Airflow DAG (Orchestration)
            </span>
            <div className="w-10"></div>
          </div>
          
          <div className="bg-[#050b08] p-6 rounded-b-2xl border border-t-0 border-emerald-500/20 font-mono text-xs overflow-x-auto flex-grow flex flex-col gap-4 shadow-inner justify-between">
            <div>
              <span className="text-emerald-400"># Misi 7-8: Alur Kerja Airflow</span>
              <br />
              <span className="text-white/40">
                {isOrchestrationSuccess 
                  ? "dag_run_status: ACTIVE | Running daily at midnight..." 
                  : "dag_run_status: PENDING | Silakan urutkan alur kerja..."
                }
              </span>
            </div>

            {/* Render dynamic flowchart */}
            <div className="bg-neutral-950 p-4 rounded-xl border border-white/5 my-2 flex justify-center items-center">
              <div className="w-full max-w-sm text-center">
                <MermaidDiagram chart={graphCode} />
              </div>
            </div>

            <div className="mt-auto border-t border-emerald-500/20 pt-4 text-xs space-y-2">
              <div className="flex justify-between text-white/50 text-[10px]">
                <span>DAG ID: telecom_etl_pipeline</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  {isOrchestrationSuccess ? "RUNNING SUCCESSFUL" : "WAITING FOR SEQUENCING (>>)"}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-[9px] font-bold text-white">
                <div className={`${isOrchestrationSuccess ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-neutral-800 text-neutral-500 border-neutral-700"} border rounded p-1`}>
                  Extract: {isOrchestrationSuccess ? "OK" : "PENDING"}
                </div>
                <div className={`${isOrchestrationSuccess ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-neutral-800 text-neutral-500 border-neutral-700"} border rounded p-1`}>
                  Transform: {isOrchestrationSuccess ? "OK" : "PENDING"}
                </div>
                <div className={`${isOrchestrationSuccess ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-neutral-800 text-neutral-500 border-neutral-700"} border rounded p-1`}>
                  Load: {isOrchestrationSuccess ? "OK" : "PENDING"}
                </div>
                <div className={`${isOrchestrationSuccess ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-neutral-800 text-neutral-500 border-neutral-700"} border rounded p-1`}>
                  Analytics: {isOrchestrationSuccess ? "OK" : "PENDING"}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="not-prose w-full max-w-6xl mx-auto bg-[#0a0a0c] text-white p-4 md:p-8 font-sans flex flex-col lg:flex-row gap-8 rounded-3xl border border-white/10 my-12 transition-all duration-700 shadow-2xl overflow-hidden">
      
      {/* Background soft glow linked to phase color */}
      <div 
        className="absolute -top-48 -left-48 w-[400px] h-[400px] rounded-full blur-[140px] mix-blend-screen pointer-events-none transition-all duration-1000" 
        style={{ backgroundColor: currentStyles.bgGlow }} 
      />

      {/* CSS Shake Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}} />

      {/* KIRI: PANEL KUIS */}
      <div className="w-full lg:w-[38%] flex flex-col gap-6 relative z-10">
        <div>
          <h1 className="text-xl md:text-2xl font-black tracking-tight uppercase flex items-center gap-2.5 transition-colors duration-500">
            {currentStyles.titleIcon}
            <span className={currentStyles.text}>Misi Data Engineering</span>
          </h1>
          <p className="text-white/40 text-xs mt-1.5 font-medium leading-relaxed">
            Panduan ETL Pipeline telekomunikasi interaktif untuk pemula. Pahami aliran data besar secara bertahap.
          </p>
        </div>

        {!isFinished ? (
          <div className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl backdrop-blur-md relative overflow-hidden flex flex-col min-h-[480px] shadow-inner">
            {/* Dynamic Phase Progress Bar */}
            <div className="absolute top-0 left-0 h-1 bg-white/5 w-full">
              <div 
                className={`h-full transition-all duration-500 ${currentStyles.progressBg}`} 
                style={{ width: `${progressPercent}%` }} 
              />
            </div>
            
            <div className="text-[10px] font-bold uppercase tracking-wider mb-4 mt-2 flex justify-between items-center">
              <span className={currentStyles.text}>Langkah {currentStep + 1} dari {DE_QUIZ_STEPS.length}</span>
              <span className="text-white/30">{Math.round(progressPercent)}% Selesai</span>
            </div>
            
            <div className="mb-4">
              <div className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide border mb-2 transition-all duration-500 ${currentStyles.badge}`}>
                {currentStyles.title}
              </div>
              <h2 className="text-base font-bold text-white/95 leading-snug">{DE_QUIZ_STEPS[currentStep].title}</h2>
              <p className="text-white/50 text-xs mt-1.5 leading-relaxed">{DE_QUIZ_STEPS[currentStep].desc}</p>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-1 gap-3 mt-auto">
              {DE_QUIZ_STEPS[currentStep].options.map((opt) => {
                const isSelected = selectedAnswer === opt;
                const isCorrect = isSelected && opt === DE_QUIZ_STEPS[currentStep].answer;
                const isWrong = isSelected && isError;

                return (
                  <button
                    key={opt}
                    onClick={() => !selectedAnswer && handleAnswer(opt)}
                    disabled={selectedAnswer !== null}
                    className={`p-3.5 rounded-xl border text-left font-mono text-xs transition-all duration-300 flex justify-between items-center
                      ${isCorrect ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 font-semibold shadow-[0_0_15px_rgba(16,185,129,0.15)] animate-pulse" : 
                        isWrong ? "bg-rose-500/10 border-rose-500 text-rose-400 font-semibold animate-shake shadow-[0_0_15px_rgba(244,63,94,0.15)]" : 
                        selectedAnswer !== null ? "bg-white/5 border-white/5 text-white/20 cursor-not-allowed" :
                        "bg-white/[0.03] border-white/5 text-white/80 hover:text-white hover:border-white/20 hover:bg-white/[0.06]"
                      }`}
                  >
                    <span>{opt}</span>
                    {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                    {isWrong && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* FITUR HINT KETIKA SALAH */}
            {showHint && (
              <div className="mt-4 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-start gap-2 animate-in slide-in-from-top-1 duration-300">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span className="text-[11px] text-rose-300 font-medium leading-relaxed">
                  {showHint}
                </span>
              </div>
            )}
          </div>
        ) : (
          /* FINISHED CARD */
          <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-2xl text-center flex flex-col justify-center min-h-[480px] relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div className="w-20 h-20 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20 animate-pulse">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-xl font-black text-emerald-400 mb-2 uppercase tracking-tight">Pipeline Aktif!</h2>
            <p className="text-xs text-white/60 mb-8 leading-relaxed max-w-xs mx-auto">
              Luar biasa! Seluruh 8 misi ETL Pipeline telah selesai dipecahkan. Data terproses, tersimpan, dan terjadwal otomatis di Apache Airflow.
            </p>
            
            <button 
              onClick={handleReset}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 mx-auto w-full max-w-xs"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Ulangi Misi
            </button>
          </div>
        )}
      </div>

      {/* KANAN: DYNAMIC LIVE VISUALIZER PANEL */}
      <div className="w-full lg:w-[62%] bg-[#08080a] border border-white/5 rounded-3xl p-4 md:p-6 relative flex flex-col min-h-[580px] overflow-hidden justify-between shadow-inner">
        {/* Status pill dinamis */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 px-3.5 py-1.5 rounded-full border border-white/5 z-20">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isFinished ? "bg-emerald-400" : "bg-rose-400"}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isFinished ? "bg-emerald-500" : "bg-rose-500"}`}></span>
          </span>
          <span className="text-[9px] uppercase font-bold tracking-widest text-white/50 select-none">
            {isFinished ? "Pipeline Aktif (100% OK)" : `Membangun Pipeline: Langkah ${currentStep + 1}`}
          </span>
        </div>

        {/* Visualizer content based on current progress step */}
        <div className="flex-grow mt-10 md:mt-8 h-full">
          {renderVisualizer()}
        </div>
      </div>
    </div>
  );
}
