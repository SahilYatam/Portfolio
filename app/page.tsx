import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground antialiased">
            <Navbar />
            <main id="top" className="mx-auto max-w-6xl px-5 sm:px-6">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
