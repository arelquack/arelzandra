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
        sans: ["var(--font-jakarta)", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        canvas: "#FAFAFA",
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#EEF0F3",
          subtle: "#F4F5F7",
        },
        ink: {
          primary: "#141416",
          secondary: "#525866",
          muted: "#A1A7B0",
          inverse: "#FFFFFF",
        },
        footer: {
          bg: "#1E1F22",
          muted: "#9CA3AF",
          border: "#2E3036",
        },
        line: "#E5E7EB",
        brand: {
          dark: "#050505",
          primary: "#2563eb",
          cyan: "#22d3ee",
          purple: "#7c3aed",
        },
      },
      animation: {
        "text-glow": "glowingText 3s infinite alternate",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;