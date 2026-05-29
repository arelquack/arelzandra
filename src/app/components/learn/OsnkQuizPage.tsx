"use client";

import React, { useState, useEffect } from 'react';
import { osnkPaket1 } from '@/lib/osnkData';
import { FaClock, FaCheckCircle, FaTimesCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Import komponen secara dinamis dan matikan SSR khusus untuk Mermaid
const MermaidDiagram = dynamic(() => import('@/app/components/learn/MermaidDiagram'), {
  ssr: false, // Ini kunci utamanya agar tidak di-render di server/Turbopack!
  loading: () => (
    <div className="flex justify-center items-center p-8 bg-neutral-900 rounded-xl border border-neutral-800">
      <span className="font-mono text-sm text-blue-400 animate-pulse">Memuat Visualisasi Diagram...</span>
    </div>
  )
});

export default function OsnkQuizPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Timer: 2 Jam 30 Menit = 9000 detik
  const [timeLeft, setTimeLeft] = useState(9000);

  useEffect(() => {
    if (timeLeft <= 0 || isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  // Otomatis submit kalau waktu habis
  useEffect(() => {
    if (timeLeft === 0 && !isSubmitted) {
      setIsSubmitted(true);
    }
  }, [timeLeft, isSubmitted]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (qId: number, value: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [qId]: value }));
  };

  const calculateScore = () => {
    let score = 0;
    osnkPaket1.forEach((q) => {
      if (answers[q.id]?.trim().toLowerCase() === q.correctAnswer.toLowerCase()) {
        score += 1;
      }
    });
    return score;
  };

  const q = osnkPaket1[currentIdx];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 bg-neutral-900/40 border border-neutral-800 rounded-2xl backdrop-blur-md">
      {/* Top Bar: Progress & Timer */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-neutral-800 mb-8">
        <div>
          <h2 className="text-xl font-bold text-white">Simulasi OSN-K Informatika</h2>
          <p className="text-sm text-neutral-400">Soal {currentIdx + 1} dari {osnkPaket1.length}</p>
        </div>
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-lg border ${timeLeft < 600 ? 'border-red-500/30 bg-red-500/10 text-red-400' : 'border-blue-500/30 bg-blue-500/10 text-blue-400'}`}>
          <FaClock />
          <span>{isSubmitted ? "WAKTU SELESAI" : formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* Grid Utama Nomor Soal & Konten */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigasi Nomor */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">Navigasi Soal</p>
          <div className="flex flex-wrap lg:grid lg:grid-cols-4 gap-2">
            {osnkPaket1.map((question, idx) => {
              const isFilled = answers[question.id] !== undefined && answers[question.id] !== "";
              return (
                <button
                  key={question.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-10 h-10 rounded-lg text-sm font-bold flex items-center justify-center border transition-all ${
                    idx === currentIdx
                      ? 'bg-blue-500 border-blue-400 text-white shadow-lg shadow-blue-500/20'
                      : isSubmitted
                      ? (answers[question.id]?.trim().toLowerCase() === question.correctAnswer.toLowerCase() ? 'bg-green-500/10 border-green-500/40 text-green-400' : 'bg-red-500/10 border-red-500/40 text-red-400')
                      : isFilled
                      ? 'bg-neutral-800 border-neutral-600 text-neutral-200'
                      : 'bg-transparent border-neutral-800 text-neutral-500 hover:border-neutral-600'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {!isSubmitted && (
            <button
              onClick={() => { if(confirm("Kamu yakin mau mengakhiri kuis?")) setIsSubmitted(true); }}
              className="w-full mt-6 bg-red-500/10 hover:bg-red-500 border border-red-500/30 text-red-400 hover:text-white py-2.5 rounded-xl text-sm font-bold transition-all shadow-md"
            >
              Akhiri & Submit Ujian
            </button>
          )}
        </div>

        {/* Area Soal */}
        <div className="lg:col-span-3 order-1 lg:order-2 space-y-6">
          <div className="bg-neutral-950/40 border border-neutral-800 p-6 rounded-xl space-y-4">
            <p className="text-neutral-200 leading-relaxed whitespace-pre-wrap text-base md:text-lg">{q.question}</p>
            
            {/* --- MULAI RENDERING VISUALISASI --- */}
            
            {/* Visualisasi 1: Mermaid Graph */}
            {q.visualType === 'mermaid' && q.visualCode && (
              <div className="bg-neutral-100 p-4 rounded-xl overflow-x-auto border border-neutral-300">
                <MermaidDiagram chart={q.visualCode} />
              </div>
            )}

            {/* Visualisasi 2: ASCII Grid/Maze */}
            {q.visualType === 'ascii' && q.visualCode && (
              <div className="bg-black/80 border border-neutral-800 p-4 rounded-xl overflow-x-auto shadow-inner">
                <pre className="font-mono text-sm md:text-base text-green-400 leading-tight">
                  {q.visualCode}
                </pre>
              </div>
            )}
            
            {/* --- SELESAI RENDERING VISUALISASI --- */}

            {q.codeBlock && (
              <pre className="bg-black/60 border border-neutral-800 p-4 rounded-xl overflow-x-auto text-sm font-mono text-pink-400 mt-4">
                <code>{q.codeBlock}</code>
              </pre>
            )}
          </div>

          {/* Area Input Jawaban Berdasarkan Tipe */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Input Jawaban Kamu:</p>
            
            {/* 1. Tipe Pilihan Ganda */}
            {q.type === 'pg' && q.options?.map((opt) => {
              const optChar = opt.charAt(0);
              const isSelected = answers[q.id] === optChar;
              return (
                <button
                  key={optChar}
                  disabled={isSubmitted}
                  onClick={() => handleSelectAnswer(q.id, optChar)}
                  className={`w-full text-left p-4 rounded-xl border text-sm md:text-base font-medium transition-all ${
                    isSelected 
                      ? 'bg-blue-500/10 border-blue-500 text-blue-400' 
                      : 'bg-neutral-950/20 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  {opt}
                </button>
              );
            })}

            {/* 2. Tipe Isian Singkat */}
            {q.type === 'isian' && (
              <input
                type="text"
                disabled={isSubmitted}
                placeholder="Ketik jawaban angka saja..."
                value={answers[q.id] || ""}
                onChange={(e) => handleSelectAnswer(q.id, e.target.value)}
                className="w-full bg-neutral-950/40 border border-neutral-800 focus:border-blue-500/50 rounded-xl py-3 px-4 focus:outline-none text-white font-mono tracking-wide"
              />
            )}

            {/* 3. Tipe Benar / Salah */}
            {q.type === 'bs' && (
              <div className="flex gap-4">
                {['BENAR', 'SALAH'].map((val) => {
                  const isSelected = answers[q.id] === val;
                  return (
                    <button
                      key={val}
                      disabled={isSubmitted}
                      onClick={() => handleSelectAnswer(q.id, val)}
                      className={`flex-1 py-4 rounded-xl border text-center font-bold tracking-wide transition-all ${
                        isSelected
                          ? val === 'BENAR' ? 'bg-green-500/10 border-green-500 text-green-400' : 'bg-red-500/10 border-red-500 text-red-400'
                          : 'bg-neutral-950/20 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      {val}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Bagian Lembar Pembahasan (Terbuka Otomatis Setelah Submit) */}
          {isSubmitted && (
            <div className={`p-6 border rounded-xl space-y-3 ${answers[q.id]?.trim().toLowerCase() === q.correctAnswer.toLowerCase() ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
              <div className="flex items-center gap-2 font-bold text-base">
                {answers[q.id]?.trim().toLowerCase() === q.correctAnswer.toLowerCase() ? (
                  <><FaCheckCircle className="text-green-400" /> <span className="text-green-400">Jawaban Tepat</span></>
                ) : (
                  <><FaTimesCircle className="text-red-400" /> <span className="text-red-400">Jawaban Kurang Tepat</span></>
                )}
              </div>
              <p className="text-sm text-neutral-400"><strong className="text-neutral-200">Kunci Jawaban:</strong> {q.correctAnswer}</p>
              <p className="text-sm text-neutral-300 leading-relaxed"><strong className="text-neutral-200">Analisis Solusi:</strong> {q.explanation}</p>
            </div>
          )}

          {/* Tombol Navigasi Bawah */}
          <div className="flex justify-between items-center pt-4 border-t border-neutral-800">
            <button
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx(prev => prev - 1)}
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 transition-colors"
            >
              <FaArrowLeft /> Sebelumnya
            </button>
            {isSubmitted && (
              <div className="text-sm font-bold text-blue-400 border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 rounded-full">
                Total Skor: {calculateScore()} / {osnkPaket1.length}
              </div>
            )}
            <button
              disabled={currentIdx === osnkPaket1.length - 1}
              onClick={() => setCurrentIdx(prev => prev + 1)}
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 transition-colors"
            >
              Selanjutnya <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}