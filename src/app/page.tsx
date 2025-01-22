import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
