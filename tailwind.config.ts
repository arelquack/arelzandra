import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'], // Default font jadi Jakarta Sans
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Warna Custom Web3
        brand: {
          dark: "#050505",
          primary: "#2563eb",
          cyan: "#22d3ee",
          purple: "#7c3aed"
        }
      },
      animation: {
        'text-glow': 'glowingText 3s infinite alternate',
      },
    },
  },
  plugins: [],
} satisfies Config;