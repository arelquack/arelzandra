import { Geist, Geist_Mono, Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "@/app/globals.css";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

// --- BAGIAN SEO UTAMA ---
export const metadata: Metadata = {
  metadataBase: new URL("https://arelzandra.vercel.app"),

  title: {
    default: "Arel",
    template: "%s | Arel",
  },

  description:
    "Personal portfolio of Farrel Zandra (Arel), a Frontend & Full-Stack Software Engineer and Informatics Engineering student at Politeknik Negeri Bandung specializing in Next.js, React, TypeScript, and Distributed Data Engineering.",

  keywords: [
    "Farrel Zandra",
    "Arel",
    "Arel Zandra",
    "Portfolio Web",
    "Web Developer Bandung",
    "Mahasiswa Polban",
    "Informatics Engineering",
    "Next.js Developer",
    "React Developer",
  ],

  authors: [{ name: "Farrel Zandra", url: "https://github.com/arelquack" }],
  creator: "Farrel Zandra",

  openGraph: {
    title: "Arel",
    description:
      "Explore the projects, architecture case studies, and engineering portfolio of Farrel Zandra.",
    url: "https://arelzandra.vercel.app",
    siteName: "Arel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Farrel Zandra Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arel",
    description:
      "Portfolio of Farrel Zandra (Arel), specializing in Next.js, Full-Stack & Data Engineering.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${cormorant.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased relative bg-canvas text-ink-primary overflow-x-hidden selection:bg-ink-primary selection:text-ink-inverse`}
      >
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}