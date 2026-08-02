import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Skills from '@/app/components/Skills';
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
