import StarField from "@/app/components/StarField"; // Import StarField
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arel",
  description: "Personal Portfolio Web by Farrel Zandra",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* Latar belakang StarField */}
        <StarField /> {/* Memastikan ini ada di seluruh halaman */}
        
        {/* Konten utama, pastikan z-10 ada untuk konten */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
