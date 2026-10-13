"use client";

import React, { useState, useEffect, memo } from "react";
import { osnkPaket1 } from "@/lib/osnkData";
import {
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import dynamic from "next/dynamic";

const MermaidDiagram = dynamic(
  () => import("@/app/components/learn/MermaidDiagram"),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center p-8 bg-surface-muted rounded-2xl border border-line">
        <span className="font-mono text-xs uppercase tracking-widest text-ink-muted animate-pulse">
          Rendering Diagram...
        </span>
      </div>
    ),
  }
);

const ExamTimer = memo(function ExamTimer({
  isSubmitted,
  onTimeUp,
}: {
  isSubmitted: boolean;
  onTimeUp: () => void;
}) {
  const [timeLeft, setTimeLeft] = useState(9000);

  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, onTimeUp]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full font-mono text-xs sm:text-sm border ${
        timeLeft < 600 && !isSubmitted
          ? "border-red-300 bg-red-50 text-red-700"
          : "border-line bg-surface-muted text-ink-primary"
      }`}
    >
      <FaClock size={12} className="text-ink-muted" />
      <span>{isSubmitted ? "COMPLETED" : formatTime(timeLeft)}</span>
    </div>
  );
});

export default function OsnkQuizPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectAnswer = (qId: number, value: string) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const calculateScore = () => {
    let score = 0;
    osnkPaket1.forEach((q) => {
      if (
        answers[q.id]?.trim().toLowerCase() === q.correctAnswer.toLowerCase()
      ) {
        score += 1;
      }
    });
    return score;
  };

  const q = osnkPaket1[currentIdx];

  return (
    <div className="w-full p-6 sm:p-10 bg-surface border border-line rounded-[28px] shadow-[0_12px_32px_rgba(20,20,22,0.03)]">
      {/* Top Bar: Progress & Timer */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-line mb-8">
        <div>
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-muted mb-1">
            INTERACTIVE COMPETITIVE PROGRAMMING SIMULATION
          </p>
          <h2 className="font-serif uppercase text-2xl sm:text-3xl text-ink-primary tracking-tight">
            Simulasi OSN-K Informatika
          </h2>
          <p className="text-xs font-mono text-ink-secondary mt-1">
            Problem {currentIdx + 1} of {osnkPaket1.length}
          </p>
        </div>

        <ExamTimer
          isSubmitted={isSubmitted}
          onTimeUp={() => setIsSubmitted(true)}
        />
      </div>

      {/* Main Grid: Question Matrix & Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Question Index Matrix */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-ink-muted mb-3">
            Question Matrix
          </p>
          <div className="flex flex-wrap lg:grid lg:grid-cols-4 gap-2">
            {osnkPaket1.map((question, idx) => {
              const isFilled =
                answers[question.id] !== undefined &&
                answers[question.id] !== "";
              const isCorrect =
                answers[question.id]?.trim().toLowerCase() ===
                question.correctAnswer.toLowerCase();

              return (
                <button
                  key={question.id}
                  type="button"
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-10 h-10 rounded-xl text-xs font-mono font-bold flex items-center justify-center border transition-colors ${
                    idx === currentIdx
                      ? "bg-ink-primary border-ink-primary text-ink-inverse"
                      : isSubmitted
                      ? isCorrect
                        ? "bg-surface-muted border-ink-primary text-ink-primary"
                        : "bg-surface border-line text-ink-muted line-through"
                      : isFilled
                      ? "bg-surface-muted border-ink-primary/40 text-ink-primary"
                      : "bg-surface border-line text-ink-muted hover:border-ink-primary"
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {!isSubmitted && (
            <button
              type="button"
              onClick={() => {
                if (confirm("Akhiri dan evaluasi seluruh jawaban ujian?")) {
                  setIsSubmitted(true);
                }
              }}
              className="w-full mt-6 min-h-[44px] bg-ink-primary text-ink-inverse hover:opacity-90 py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-opacity"
            >
              Submit &amp; Evaluate
            </button>
          )}
        </div>

        {/* Question Workspace */}
        <div className="lg:col-span-3 order-1 lg:order-2 space-y-6">
          <div className="bg-surface-muted border border-line p-6 sm:p-8 rounded-2xl space-y-5">
            <p className="text-ink-primary leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
              {q.question}
            </p>

            {/* Visualization 1: Mermaid Graph */}
            {q.visualType === "mermaid" && q.visualCode && (
              <div className="bg-surface p-4 rounded-2xl overflow-x-auto border border-line">
                <MermaidDiagram chart={q.visualCode} />
              </div>
            )}

            {/* Visualization 2: ASCII Grid/Maze */}
            {q.visualType === "ascii" && q.visualCode && (
              <div className="bg-surface text-ink-primary border border-line p-5 rounded-2xl overflow-x-auto">
                <pre className="font-mono text-xs sm:text-sm leading-tight">
                  {q.visualCode}
                </pre>
              </div>
            )}

            {q.codeBlock && (
              <pre className="bg-surface text-ink-primary border border-line p-5 rounded-2xl overflow-x-auto text-xs sm:text-sm font-mono mt-4">
                <code>{q.codeBlock}</code>
              </pre>
            )}
          </div>

          {/* Answer Input Section */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.16em] text-ink-muted">
              Your Response:
            </p>

            {/* 1. Multiple Choice */}
            {q.type === "pg" &&
              q.options?.map((opt) => {
                const optChar = opt.charAt(0);
                const isSelected = answers[q.id] === optChar;
                return (
                  <button
                    key={optChar}
                    type="button"
                    disabled={isSubmitted}
                    onClick={() => handleSelectAnswer(q.id, optChar)}
                    className={`w-full text-left p-4 rounded-2xl border text-sm sm:text-base transition-colors ${
                      isSelected
                        ? "bg-ink-primary border-ink-primary text-ink-inverse font-medium"
                        : "bg-surface border-line text-ink-secondary hover:border-ink-primary hover:text-ink-primary"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}

            {/* 2. Short Answer */}
            {q.type === "isian" && (
              <input
                type="text"
                disabled={isSubmitted}
                placeholder="Ketik jawaban angka / nilai eksak..."
                value={answers[q.id] || ""}
                onChange={(e) => handleSelectAnswer(q.id, e.target.value)}
                className="w-full bg-surface border border-line focus:border-ink-primary rounded-2xl py-3.5 px-4 focus:outline-none text-ink-primary font-mono text-sm tracking-wide"
              />
            )}

            {/* 3. True / False */}
            {q.type === "bs" && (
              <div className="flex gap-4">
                {["BENAR", "SALAH"].map((val) => {
                  const isSelected = answers[q.id] === val;
                  return (
                    <button
                      key={val}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => handleSelectAnswer(q.id, val)}
                      className={`flex-1 py-4 rounded-2xl border text-center text-xs font-mono font-bold uppercase tracking-[0.16em] transition-colors ${
                        isSelected
                          ? "bg-ink-primary border-ink-primary text-ink-inverse"
                          : "bg-surface border-line text-ink-secondary hover:border-ink-primary"
                      }`}
                    >
                      {val}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Solution Analysis Sheet */}
          {isSubmitted && (
            <div className="p-6 bg-surface-muted border border-line rounded-2xl space-y-3">
              <div className="flex items-center gap-2 font-semibold text-sm text-ink-primary">
                {answers[q.id]?.trim().toLowerCase() ===
                q.correctAnswer.toLowerCase() ? (
                  <>
                    <FaCheckCircle className="text-ink-primary" />
                    <span>Jawaban Tepat</span>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="text-ink-secondary" />
                    <span>Jawaban Kurang Tepat</span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm text-ink-secondary">
                <strong className="text-ink-primary">Kunci Jawaban:</strong>{" "}
                <code className="font-mono font-bold text-ink-primary">
                  {q.correctAnswer}
                </code>
              </p>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                <strong className="text-ink-primary">Analisis Solusi:</strong>{" "}
                {q.explanation}
              </p>
            </div>
          )}

          {/* Bottom Navigation */}
          <div className="flex justify-between items-center pt-6 border-t border-line">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((prev) => prev - 1)}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-secondary hover:text-ink-primary disabled:opacity-30 transition-colors"
            >
              <FaArrowLeft size={10} /> Sebelumnya
            </button>
            {isSubmitted && (
              <div className="text-xs font-mono font-bold text-ink-primary border border-line bg-surface-muted px-4 py-1.5 rounded-full">
                Score: {calculateScore()} / {osnkPaket1.length}
              </div>
            )}
            <button
              type="button"
              disabled={currentIdx === osnkPaket1.length - 1}
              onClick={() => setCurrentIdx((prev) => prev + 1)}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-secondary hover:text-ink-primary disabled:opacity-30 transition-colors"
            >
              Selanjutnya <FaArrowRight size={10} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}