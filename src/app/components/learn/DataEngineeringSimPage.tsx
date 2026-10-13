"use client";

import React, { useState } from "react";
import {
  Database,
  Terminal,
  Workflow,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Server,
  ArrowDown,
  HardDrive,
  BarChart3,
  Layers,
  FileCode,
  AlertCircle,
} from "lucide-react";

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
      telan_semua:
        "Kalau ditelan semua, RAM 8GB komputer kita langsung hang/crash karena memori tidak kuat!",
      read_all:
        "read_all akan memuat seluruh data ke memori sekaligus, menyebabkan Out Of Memory!",
    },
  },
  {
    id: 2,
    title: "Misi 2: Sapu Bersih Data Kosong",
    desc: "Banyak pelanggan yang kolom nomor teleponnya kosong (NaN). Kita harus membuang baris tersebut agar tidak error.",
    options: [
      "dropna (Buang Kosong)",
      "fillna (Isi Kosong)",
      "keep_all (Simpan Semua)",
    ],
    answer: "dropna (Buang Kosong)",
    wrongHints: {
      "fillna (Isi Kosong)":
        "fillna akan mengisi kolom kosong dengan nilai palsu, bukan membuang data kotor.",
      "keep_all (Simpan Semua)":
        "Menyimpan data kosong (NaN) akan merusak perhitungan kita di database.",
    },
  },
  {
    id: 3,
    title: "Misi 3: Filter Tagihan Minus",
    desc: "Ada anomali data pemakaian internet minus (-150MB). Kita hanya mau data yang valid (lebih besar dari 0).",
    options: ["> 0", "== 0", "< 0"],
    answer: "> 0",
    wrongHints: {
      "== 0":
        "Ini hanya akan mengambil pelanggan yang tidak menggunakan kuota internet sama sekali.",
      "< 0":
        "Ini malah menyaring data pemakaian internet minus yang salah saja.",
    },
  },
  {
    id: 4,
    title: "Misi 4: Kunci Kontak Database",
    desc: "Data sudah bersih. Sekarang kita butuh 'kunci kontak' untuk menyalakan mesin database PostgreSQL menggunakan SQLAlchemy.",
    options: ["create_engine", "buka_database", "start_sql"],
    answer: "create_engine",
    wrongHints: {
      buka_database:
        "Ini adalah istilah karangan. SQLAlchemy membutuhkan mesin engine resmi untuk tersambung.",
      start_sql: "start_sql bukan fungsi bawaan library Python SQLAlchemy.",
    },
  },
  {
    id: 5,
    title: "Misi 5: Menambah, Bukan Merobek",
    desc: "Saat memuat data ke tabel 'network_usage', kita ingin menambahkan catatan di bawahnya, BUKAN menimpa/menghapus data lama.",
    options: ["append", "replace", "delete"],
    answer: "append",
    wrongHints: {
      replace:
        "Bahaya! Opsi 'replace' akan menghapus tabel lama beserta isinya sebelum membuat tabel baru.",
      delete:
        "Opsi 'delete' akan menghapus isi tabel, bukan mengunggah data baru.",
    },
  },
  {
    id: 6,
    title: "Misi 6: Kalkulator Agregasi (SQL)",
    desc: "Tim bisnis minta total kuota tiap pelanggan. Fungsi SQL apa yang bertugas menjumlahkan angka?",
    options: ["SUM", "COUNT", "MAX"],
    answer: "SUM",
    wrongHints: {
      COUNT:
        "COUNT hanya menghitung jumlah baris/kejadian, bukan menjumlahkan angka kuota.",
      MAX: "MAX hanya mengambil nilai pemakaian terbesar dari satu baris.",
    },
  },
  {
    id: 7,
    title: "Misi 7: Sang Mandor (Airflow)",
    desc: "Agar proses ini jalan otomatis tiap tengah malam, kita jadikan fungsi Python ini sebagai Airflow DAG (Directed Acyclic Graph).",
    options: ["@dag", "@jadwal", "@robot"],
    answer: "@dag",
    wrongHints: {
      "@jadwal":
        "Jadwal bukan decorator resmi untuk mendefinisikan alur kerja di Apache Airflow.",
      "@robot":
        "Robot bukan decorator resmi untuk mendefinisikan alur kerja di Apache Airflow.",
    },
  },
  {
    id: 8,
    title: "Misi 8: Atur Lalu Lintas",
    desc: "Airflow butuh urutan kerja. Task 'Transform' hanya boleh jalan JIKA 'Extract' sudah sukses. Operator apa untuk mengatur panah alur ini?",
    options: [">>", "+", "="],
    answer: ">>",
    wrongHints: {
      "+": "Tanda tambah (+) digunakan untuk penjumlahan matematika, bukan dependensi alur kerja.",
      "=": "Tanda sama dengan (=) untuk penugasan variabel, bukan alur kerja DAG.",
    },
  },
];

export default function DataEngineeringSimPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [showHint, setShowHint] = useState<string | null>(null);

  const isFinished = currentStep >= DE_QUIZ_STEPS.length;
  const progressPercent = Math.min(
    (currentStep / DE_QUIZ_STEPS.length) * 100,
    100
  );

  const getCurrentPhase = () => {
    if (isFinished) return 4;
    if (currentStep <= 2) return 1;
    if (currentStep <= 4) return 2;
    if (currentStep <= 5) return 3;
    return 4;
  };

  const currentPhase = getCurrentPhase();

  const getPhaseInfo = (phase: number) => {
    switch (phase) {
      case 1:
        return {
          title: "Phase 01 — Extract & Transform (Pandas)",
          icon: <FileCode className="w-4 h-4 text-ink-primary" />,
        };
      case 2:
        return {
          title: "Phase 02 — Load (PostgreSQL & SQLAlchemy)",
          icon: <Server className="w-4 h-4 text-ink-primary" />,
        };
      case 3:
        return {
          title: "Phase 03 — Analytics & Data Mart (SQL)",
          icon: <BarChart3 className="w-4 h-4 text-ink-primary" />,
        };
      case 4:
      default:
        return {
          title: "Phase 04 — Orchestration (Apache Airflow DAG)",
          icon: <Workflow className="w-4 h-4 text-ink-primary" />,
        };
    }
  };

  const phaseInfo = getPhaseInfo(currentPhase);

  const handleAnswer = (opt: string) => {
    setSelectedAnswer(opt);
    const stepData = DE_QUIZ_STEPS[currentStep];

    if (opt === stepData.answer) {
      setIsError(false);
      setShowHint(null);
      setTimeout(() => {
        setSelectedAnswer(null);
        setCurrentStep((prev) => prev + 1);
      }, 650);
    } else {
      setIsError(true);
      setShowHint(
        stepData.wrongHints[opt] ||
          "Jawabanmu kurang tepat. Coba pikirkan lagi!"
      );
      setTimeout(() => {
        setSelectedAnswer(null);
        setIsError(false);
      }, 1000);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswer(null);
    setIsError(false);
    setShowHint(null);
  };

  const renderVisualizer = () => {
    // PHASE 1: Extract & Transform (Pandas Raw Logs)
    if (currentStep <= 3) {
      const isNanHighlighted = currentStep === 1;
      const isNanRemoved = currentStep >= 2;
      const isMinusHighlighted = currentStep === 2;
      const isMinusRemoved = currentStep >= 3;
      const showCleanSticker = currentStep >= 3;

      return (
        <div className="bg-surface-muted border border-line rounded-2xl p-5 sm:p-7 flex flex-col h-full justify-between gap-5">
          {/* Editorial Module Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-line">
            <span className="text-xs font-mono font-semibold text-ink-primary flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-ink-secondary" />
              pandas_cleaner.py
            </span>
            {showCleanSticker ? (
              <span className="bg-ink-primary text-ink-inverse px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3" /> DATA 100% CLEAN
              </span>
            ) : (
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-muted">
                STAGE 01 · DATAFRAME SANDBOX
              </span>
            )}
          </div>

          {/* Code Execution Sheet */}
          <div className="bg-surface border border-line rounded-xl p-4 font-mono text-xs space-y-1.5 overflow-x-auto">
            <div className="text-ink-muted">
              # Misi 1-3: Pembersihan Data di Pandas
            </div>
            <div className="text-ink-secondary">&gt;&gt;&gt; import pandas as pd</div>
            {currentStep > 0 && (
              <div className="text-ink-primary font-semibold">
                &gt;&gt;&gt; chunks = pd.read_csv(&apos;telco_raw.csv&apos;,
                chunksize=50000)
              </div>
            )}
            {currentStep > 1 && (
              <div className="text-ink-primary font-semibold">
                &gt;&gt;&gt; df =
                next(chunks).dropna(subset=[&apos;phone_number&apos;])
              </div>
            )}
            {currentStep > 2 && (
              <div className="text-ink-primary font-semibold">
                &gt;&gt;&gt; df_clean = df[df[&apos;data_used_mb&apos;] &gt; 0]
              </div>
            )}
          </div>

          {/* Data Inspection Table */}
          <div className="space-y-2.5">
            <div className="text-[11px] font-mono text-ink-muted uppercase tracking-[0.14em] flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5 text-ink-secondary" />
              <span>RAM View: raw_telecom_data</span>
            </div>

            <div className="bg-surface border border-line rounded-xl overflow-x-auto">
              <table className="w-full text-left border-collapse font-mono text-xs">
                <thead>
                  <tr className="border-b border-line bg-surface-muted/50 text-ink-muted text-[10px] uppercase tracking-wider">
                    <th className="py-2.5 px-3">IDX</th>
                    <th className="py-2.5 px-3">Phone Number</th>
                    <th className="py-2.5 px-3 text-right">Data Used (MB)</th>
                    <th className="py-2.5 px-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  <tr>
                    <td className="py-2.5 px-3 text-ink-muted">0</td>
                    <td className="py-2.5 px-3 text-ink-primary">
                      +628129876543
                    </td>
                    <td className="py-2.5 px-3 text-right text-ink-primary">
                      124.5
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <span className="inline-block px-2 py-0.5 rounded-md border border-line bg-surface-muted text-ink-primary text-[10px] font-bold">
                        OK
                      </span>
                    </td>
                  </tr>

                  <tr
                    className={`transition-opacity ${
                      isNanRemoved
                        ? "opacity-35 line-through text-ink-muted"
                        : isNanHighlighted
                        ? "bg-surface-muted text-ink-primary font-semibold"
                        : "bg-surface-muted/40 text-ink-secondary"
                    }`}
                  >
                    <td className="py-2.5 px-3 text-ink-muted">1</td>
                    <td className="py-2.5 px-3 font-bold text-ink-primary">
                      NaN
                    </td>
                    <td className="py-2.5 px-3 text-right">45.2</td>
                    <td className="py-2.5 px-3 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          isNanRemoved
                            ? "border border-line bg-surface text-ink-muted"
                            : "bg-ink-primary text-ink-inverse"
                        }`}
                      >
                        {isNanRemoved ? "DROPPED" : "DIRTY"}
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2.5 px-3 text-ink-muted">2</td>
                    <td className="py-2.5 px-3 text-ink-primary">
                      +628198889990
                    </td>
                    <td className="py-2.5 px-3 text-right text-ink-primary">
                      12.8
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <span className="inline-block px-2 py-0.5 rounded-md border border-line bg-surface-muted text-ink-primary text-[10px] font-bold">
                        OK
                      </span>
                    </td>
                  </tr>

                  <tr
                    className={`transition-opacity ${
                      isMinusRemoved
                        ? "opacity-35 line-through text-ink-muted"
                        : isMinusHighlighted
                        ? "bg-surface-muted text-ink-primary font-semibold"
                        : "bg-surface-muted/40 text-ink-secondary"
                    }`}
                  >
                    <td className="py-2.5 px-3 text-ink-muted">3</td>
                    <td className="py-2.5 px-3">+628131112223</td>
                    <td className="py-2.5 px-3 text-right font-bold text-ink-primary">
                      -150.0
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          isMinusRemoved
                            ? "border border-line bg-surface text-ink-muted"
                            : "bg-ink-primary text-ink-inverse"
                        }`}
                      >
                        {isMinusRemoved ? "FILTERED" : "DIRTY"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Editorial Telemetry Footer */}
          <div className="pt-4 border-t border-line font-mono text-[11px] text-ink-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>
              <strong className="text-ink-primary">Memory Size:</strong>{" "}
              {currentStep === 0 ? "100 GB (Locked)" : "50,000 rows (Chunk)"}
            </span>
            <span className="text-ink-primary font-medium">
              {currentStep === 0 && "Menunggu inisialisasi chunksize..."}
              {currentStep === 1 && "Menghapus nomor telepon kosong..."}
              {currentStep === 2 && "Menyaring pemakaian internet minus..."}
              {currentStep === 3 && "Semua anomali data di Pandas bersih."}
            </span>
          </div>
        </div>
      );
    }

    // PHASE 2: Load (PostgreSQL DB)
    if (currentStep <= 5) {
      const isConnecting = currentStep === 4;
      const isInserting = currentStep === 5;

      return (
        <div className="bg-surface-muted border border-line rounded-2xl p-5 sm:p-7 flex flex-col h-full justify-between gap-5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-line">
            <span className="text-xs font-mono font-semibold text-ink-primary flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-ink-secondary" />
              postgresql_conn.py
            </span>
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-muted">
              STAGE 02 · POSTGRESQL LOAD
            </span>
          </div>

          <div className="bg-surface border border-line rounded-xl p-4 font-mono text-xs space-y-1.5 overflow-x-auto">
            <div className="text-ink-muted">
              # Misi 4-5: Load ke PostgreSQL (SQLAlchemy)
            </div>
            <div className="text-ink-primary font-semibold">
              {currentStep > 4
                ? "telecom=# SELECT * FROM network_usage ORDER BY id DESC LIMIT 2;"
                : "telecom=# Connecting to PostgreSQL database..."}
            </div>
          </div>

          {isConnecting && (
            <div className="my-auto bg-surface border border-line rounded-xl p-8 text-center flex flex-col items-center gap-2.5">
              <Server className="w-8 h-8 text-ink-primary" />
              <span className="text-ink-primary font-mono text-xs font-bold uppercase tracking-widest">
                Connecting to Database Engine
              </span>
              <span className="text-ink-muted font-mono text-[11px]">
                Menunggu pemanggilan SQLAlchemy create_engine()
              </span>
            </div>
          )}

          {isInserting && (
            <div className="space-y-2.5">
              <div className="text-[11px] font-mono text-ink-muted uppercase tracking-[0.14em] flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-ink-secondary" />
                <span>Tabel PostgreSQL: network_usage</span>
              </div>

              <div className="bg-surface border border-line rounded-xl overflow-x-auto">
                <table className="w-full text-left border-collapse font-mono text-xs">
                  <thead>
                    <tr className="border-b border-line bg-surface-muted/50 text-ink-muted text-[10px] uppercase tracking-wider">
                      <th className="py-2.5 px-3">ID</th>
                      <th className="py-2.5 px-3">Phone Number</th>
                      <th className="py-2.5 px-3 text-right">Data (MB)</th>
                      <th className="py-2.5 px-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    <tr>
                      <td className="py-2.5 px-3 text-ink-muted">10052</td>
                      <td className="py-2.5 px-3 text-ink-primary">
                        +628129876543
                      </td>
                      <td className="py-2.5 px-3 text-right text-ink-primary">
                        124.5
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <span className="inline-block px-2 py-0.5 rounded-md border border-line bg-surface-muted text-ink-primary text-[10px] font-bold">
                          APPENDED
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 text-ink-muted">10053</td>
                      <td className="py-2.5 px-3 text-ink-primary">
                        +628198889990
                      </td>
                      <td className="py-2.5 px-3 text-right text-ink-primary">
                        12.8
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <span className="inline-block px-2 py-0.5 rounded-md border border-line bg-surface-muted text-ink-primary text-[10px] font-bold">
                          APPENDED
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-line font-mono text-[11px]">
            {isInserting ? (
              <div className="text-ink-primary font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ink-primary shrink-0" />
                <span>
                  450,000 clean rows appended to &apos;network_usage&apos;
                  table.
                </span>
              </div>
            ) : (
              <div className="text-ink-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span>Engine Status: Offline</span>
                <span>Connection Pool: Idle</span>
              </div>
            )}
          </div>
        </div>
      );
    }

    // PHASE 3: Analytics (SQL Aggregation)
    if (currentStep === 6) {
      return (
        <div className="bg-surface-muted border border-line rounded-2xl p-5 sm:p-7 flex flex-col h-full justify-between gap-5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-line">
            <span className="text-xs font-mono font-semibold text-ink-primary flex items-center gap-2">
              <BarChart3 className="w-3.5 h-3.5 text-ink-secondary" />
              sql_aggregations.sql
            </span>
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-muted">
              STAGE 03 · SQL DATA MART
            </span>
          </div>

          <div className="bg-surface border border-line rounded-xl p-4 font-mono text-xs space-y-1.5 overflow-x-auto">
            <div className="text-ink-muted">
              # Misi 6: Analytics &amp; Data Mart (SQL Aggregation)
            </div>
            <div className="text-ink-primary font-semibold">
              telecom_marts=# SELECT name, SUM(data_used_mb) AS total_data FROM
              usage_summary GROUP BY name;
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="text-[11px] font-mono text-ink-muted uppercase tracking-[0.14em] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-ink-secondary" />
              <span>Data Mart: dm_customer_usage (Top 3)</span>
            </div>

            <div className="bg-surface border border-line rounded-xl overflow-x-auto">
              <table className="w-full text-left border-collapse font-mono text-xs">
                <thead>
                  <tr className="border-b border-line bg-surface-muted/50 text-ink-muted text-[10px] uppercase tracking-wider">
                    <th className="py-2.5 px-3">Rank</th>
                    <th className="py-2.5 px-3">Customer Name</th>
                    <th className="py-2.5 px-3 text-right">Total Usage</th>
                    <th className="py-2.5 px-3 text-center">Aggregation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  <tr>
                    <td className="py-2.5 px-3 text-ink-muted">1</td>
                    <td className="py-2.5 px-3 font-semibold text-ink-primary">
                      Ahmad Ridwan
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-ink-primary">
                      245.8 GB
                    </td>
                    <td className="py-2.5 px-3 text-center text-ink-secondary">
                      SUM()
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-ink-muted">2</td>
                    <td className="py-2.5 px-3 text-ink-primary">
                      Citra Lestari
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-ink-primary">
                      189.2 GB
                    </td>
                    <td className="py-2.5 px-3 text-center text-ink-secondary">
                      SUM()
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-ink-muted">3</td>
                    <td className="py-2.5 px-3 text-ink-primary">
                      Budi Santoso
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-ink-primary">
                      124.5 GB
                    </td>
                    <td className="py-2.5 px-3 text-center text-ink-secondary">
                      SUM()
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-4 border-t border-line font-mono text-[11px] text-ink-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>Mart Table: dm_customer_usage</span>
            <span>Calculation logic: SUM(MB) / 1024</span>
          </div>
        </div>
      );
    }

    // PHASE 4: Orchestration (Airflow DAG)
    const isOrchestrationSuccess = isFinished;
    const isSequenceDefined = currentStep >= 8;

    const dagNodes = [
      { id: "extract", label: "01. Extract — Bash / API" },
      { id: "transform", label: "02. Transform — Pandas" },
      { id: "load", label: "03. Load — PostgreSQL" },
      { id: "analytics", label: "04. Analytics — SQL Data Mart" },
    ];

    return (
      <div className="bg-surface-muted border border-line rounded-2xl p-5 sm:p-7 flex flex-col h-full justify-between gap-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-line">
          <span className="text-xs font-mono font-semibold text-ink-primary flex items-center gap-2">
            <Workflow className="w-3.5 h-3.5 text-ink-secondary" />
            airflow_dag.py
          </span>
          <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-muted">
            STAGE 04 · AIRFLOW ORCHESTRATION
          </span>
        </div>

        <div className="bg-surface border border-line rounded-xl p-4 font-mono text-xs space-y-1.5 overflow-x-auto">
          <div className="text-ink-muted">
            # Misi 7-8: Alur Kerja Apache Airflow
          </div>
          <div className="text-ink-primary font-semibold">
            {isOrchestrationSuccess
              ? "dag_run_status: ACTIVE · Scheduled daily at 00:00 UTC"
              : "dag_run_status: PENDING · Menunggu definisi urutan task (>>)..."}
          </div>
        </div>

        {/* Editorial DAG Flow Visualization */}
        <div className="py-2 flex flex-col items-center justify-center">
          {dagNodes.map((node, index) => (
            <React.Fragment key={node.id}>
              <div
                className={`w-full max-w-xs px-4 py-3 rounded-xl border text-center font-mono text-xs font-semibold transition-colors ${
                  isSequenceDefined
                    ? "bg-ink-primary border-ink-primary text-ink-inverse"
                    : "bg-surface border-line text-ink-primary"
                }`}
              >
                {node.label}
              </div>
              {index < dagNodes.length - 1 && (
                <div className="py-1.5 flex flex-col items-center">
                  <ArrowDown
                    className={`w-4 h-4 ${
                      isSequenceDefined ? "text-ink-primary" : "text-ink-muted"
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="pt-4 border-t border-line font-mono text-[11px] text-ink-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>DAG ID: telecom_etl_pipeline</span>
          <span className="text-ink-primary font-bold">
            {isOrchestrationSuccess
              ? "RUNNING SUCCESSFUL"
              : "WAITING FOR SEQUENCING (>>)"}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="not-prose w-full bg-surface text-ink-primary p-6 sm:p-10 font-sans flex flex-col lg:flex-row gap-8 rounded-[28px] border border-line my-10 shadow-[0_12px_32px_rgba(20,20,22,0.03)]">
      {/* Left: Mission Control Panel */}
      <div className="w-full lg:w-[42%] flex flex-col gap-6">
        <div className="border-b border-line pb-4">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-muted mb-1">
            INTERACTIVE DATA ENGINEERING SANDBOX
          </p>
          <h2 className="font-serif uppercase text-2xl sm:text-3xl text-ink-primary tracking-tight">
            Misi ETL Pipeline
          </h2>
          <p className="text-ink-secondary text-xs sm:text-sm mt-1 leading-relaxed">
            Simulasi interaktif pemrosesan data telekomunikasi berskala besar
            menggunakan Pandas, PostgreSQL, dan Apache Airflow.
          </p>
        </div>

        {!isFinished ? (
          <div className="bg-surface-muted border border-line p-6 rounded-2xl flex flex-col flex-grow justify-between space-y-6">
            <div>
              {/* Progress Bar */}
              <div className="h-1.5 bg-line rounded-full w-full overflow-hidden mb-4">
                <div
                  className="h-full bg-ink-primary transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="text-[11px] font-mono uppercase tracking-wider mb-4 flex justify-between items-center text-ink-muted">
                <span>
                  Step {currentStep + 1} of {DE_QUIZ_STEPS.length}
                </span>
                <span>{Math.round(progressPercent)}% Complete</span>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-mono text-ink-primary bg-surface px-3 py-1.5 rounded-lg border border-line mb-3">
                {phaseInfo.icon}
                <span>{phaseInfo.title}</span>
              </div>

              <h3 className="text-lg font-semibold text-ink-primary leading-snug">
                {DE_QUIZ_STEPS[currentStep].title}
              </h3>
              <p className="text-ink-secondary text-xs sm:text-sm mt-2 leading-relaxed">
                {DE_QUIZ_STEPS[currentStep].desc}
              </p>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-1 gap-2.5">
              {DE_QUIZ_STEPS[currentStep].options.map((opt) => {
                const isSelected = selectedAnswer === opt;
                const isCorrect =
                  isSelected && opt === DE_QUIZ_STEPS[currentStep].answer;
                const isWrong = isSelected && isError;

                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => !selectedAnswer && handleAnswer(opt)}
                    disabled={selectedAnswer !== null}
                    className={`p-3.5 rounded-xl border text-left font-mono text-xs sm:text-sm transition-colors flex justify-between items-center ${
                      isCorrect
                        ? "bg-ink-primary border-ink-primary text-ink-inverse font-semibold"
                        : isWrong
                        ? "bg-surface border-ink-primary text-ink-primary font-semibold"
                        : "bg-surface border-line text-ink-primary hover:border-ink-primary"
                    }`}
                  >
                    <span>{opt}</span>
                    {isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-ink-inverse shrink-0" />
                    )}
                    {isWrong && (
                      <XCircle className="w-4 h-4 text-ink-primary shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Hint when wrong */}
            {showHint && (
              <div className="p-3.5 bg-surface border border-line rounded-xl flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-ink-primary shrink-0 mt-0.5" />
                <span className="text-xs text-ink-secondary leading-relaxed">
                  {showHint}
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-surface-muted border border-line p-8 rounded-2xl text-center flex flex-col justify-center flex-grow space-y-4">
            <div className="w-14 h-14 bg-surface text-ink-primary rounded-full flex items-center justify-center mx-auto border border-line">
              <CheckCircle2 className="w-7 h-7 text-ink-primary" />
            </div>
            <h3 className="font-serif uppercase text-2xl text-ink-primary">
              Pipeline Operational
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed max-w-xs mx-auto">
              Seluruh 8 misi ETL Pipeline telah selesai dipecahkan. Data
              dibersihkan, dimuat ke PostgreSQL, dan dijadwalkan di Apache
              Airflow.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="min-h-[44px] px-6 py-2.5 bg-ink-primary text-ink-inverse font-semibold text-xs uppercase tracking-[0.14em] rounded-full hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 mx-auto"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Ulangi Simulasi
            </button>
          </div>
        )}
      </div>

      {/* Right: Dynamic Editorial Data & Pipeline Visualizer */}
      <div className="w-full lg:w-[58%] flex flex-col min-h-[500px]">
        {renderVisualizer()}
      </div>
    </div>
  );
}
