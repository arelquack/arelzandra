"use client";

import React, { useEffect, useRef, memo } from "react";

interface MermaidProps {
  chart: string;
}

let isInitialized = false;

function MermaidDiagramComponent({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    const renderChart = async () => {
      if (!containerRef.current || !chart) return;
      try {
        const mermaidModule = await import("mermaid");
        const mermaid = mermaidModule.default;

        if (!isInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            theme: "neutral",
            securityLevel: "loose",
          });
          isInitialized = true;
        }

        const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        if (isMounted && containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error("Failed to render Mermaid diagram:", error);
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  return (
    <div
      ref={containerRef}
      className="flex justify-center my-4 overflow-x-auto min-h-[64px]"
    />
  );
}

const MermaidDiagram = memo(MermaidDiagramComponent);
export default MermaidDiagram;