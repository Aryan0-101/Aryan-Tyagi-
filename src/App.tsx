import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Section } from "./components/ui/Section";
import { NavBar } from "./components/NavBar";
import { motion, useScroll } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-800 selection:text-zinc-50">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-zinc-100 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      <NavBar />
      
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]"></div>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        
        <Section id="skills">
          <Skills />
        </Section>

        <Section id="experience">
          <Experience />
        </Section>

        <Section id="projects">
          <Projects />
        </Section>

        <Section id="education">
          <Education />
        </Section>

        <footer className="py-12 text-center text-zinc-500 border-t border-zinc-900 mt-20">
          <p>© {new Date().getFullYear()} Aryan Tyagi. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
