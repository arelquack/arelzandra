import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink-primary">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
