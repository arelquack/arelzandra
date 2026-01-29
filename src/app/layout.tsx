import StarField from "@/app/components/StarField";
import { Geist, Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
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

// --- BAGIAN SEO UTAMA ---
export const metadata: Metadata = {
  // Ganti URL ini dengan domain asli lu nanti (misal: https://arel-zandra.vercel.app)
  metadataBase: new URL('https://arelzandra.vercel.app'), 
  
  title: {
    default: "Farrel Zandra | Informatics Engineering Portfolio",
    template: "%s | Farrel Zandra" // Kalau page lain punya title, bakal jadi "Projects | Farrel Zandra"
  },
  
  description: "Personal portfolio of Farrel Zandra (Arel), an Informatics Engineering student at Politeknik Negeri Bandung specializing in Next.js, Web Development, and Software Engineering.",
  
  keywords: [
    "Farrel Zandra", 
    "Arel", 
    "Arel Zandra",
    "Portfolio Web", 
    "Web Developer Bandung", 
    "Mahasiswa Polban", 
    "Informatics Engineering", 
    "Next.js Developer",
    "React Developer"
  ],

  authors: [{ name: "Farrel Zandra", url: "https://github.com/arelquack" }],
  creator: "Farrel Zandra",
  
  // Konfigurasi Open Graph (Tampilan saat link disebar di WA/FB/LinkedIn)
  openGraph: {
    title: "Farrel Zandra | Informatics Engineering Portfolio",
    description: "Explore the projects and skills of Farrel Zandra, a passionate IT student and developer.",
    url: 'https://arel-portfolio.vercel.app',
    siteName: "Farrel Zandra Portfolio",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg', // Nanti lu harus siapin gambar ini di folder public/images
        width: 1200,
        height: 630,
        alt: 'Farrel Zandra Portfolio Preview',
      },
    ],
  },

  // Konfigurasi Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Farrel Zandra | Informatics Engineering Portfolio",
    description: "Portfolio of Farrel Zandra (Arel), specializing in Next.js and Software Engineering.",
    images: ['/images/og-image.jpg'], // Samain aja gambarnya
  },

  // Biar di-crawl sama Google
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased relative bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200`}>
        
        {/* Background Gradient Statis (Buat Base Color yang Mahal) */}
        <div className="fixed inset-0 z-[-2] bg-[#050505]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/20 blur-[120px] rounded-full opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full opacity-30"></div>
        </div>

        {/* 3D Animation Layer */}
        <StarField />
        
        {/* Konten Utama */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}