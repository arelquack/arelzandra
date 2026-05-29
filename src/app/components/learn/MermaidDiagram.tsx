'use client';
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inisialisasi tema mermaid, bisa disesuaikan dengan dark/light mode Arel.dev
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default', // ganti 'dark' kalau UI kamu dark mode
      securityLevel: 'loose',
    });

    const renderChart = async () => {
      if (containerRef.current && chart) {
        // Membersihkan render sebelumnya
        containerRef.current.innerHTML = '';
        try {
          const { svg } = await mermaid.render(`mermaid-${Math.random().toString(36).substring(7)}`, chart);
          containerRef.current.innerHTML = svg;
        } catch (error) {
          console.error("Gagal merender Mermaid:", error);
        }
      }
    };

    renderChart();
  }, [chart]);

  return <div ref={containerRef} className="flex justify-center my-4 overflow-x-auto" />;
}