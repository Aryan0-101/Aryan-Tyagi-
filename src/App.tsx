import { motion, useScroll, useSpring } from "motion/react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Section } from "./components/ui/Section";
import { NavBar } from "./components/NavBar";
import { SmoothScroll } from "./components/SmoothScroll";
import { Cursor } from "./components/ui/Cursor";
import { RevealText } from "./components/ui/RevealText";
import { MagneticButton } from "./components/ui/MagneticButton";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <SmoothScroll>
      <div className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
        {/* Scroll progress — chalk hairline */}
        <motion.div
          style={{ scaleX }}
          className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-chalk"
        />

        {/* Chalkboard atmosphere */}
        <div className="bg-grid" aria-hidden />
        <div className="vignette" aria-hidden />
        <div className="grain-layer" aria-hidden />

        <Cursor />
        <NavBar />

        <main className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
          <Hero />

          <Section id="about">
            <About />
          </Section>

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

          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-line py-28 md:py-40">
      <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
        <span className="h-1.5 w-1.5 rounded-full bg-chalk" />
        Say hello
      </div>

      <RevealText
        as="h2"
        text="Let's build something intelligent."
        className="block max-w-4xl font-display text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-ink"
      />

      <p className="mt-8 max-w-lg text-lg text-ink-muted">
        Open to Machine Learning Engineer roles and collaborations. The fastest
        way to reach me is email — I read everything.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <MagneticButton href="mailto:aryantyagi0504@gmail.com" variant="primary" data-cursor="email">
          <Mail size={17} /> aryantyagi0504@gmail.com
        </MagneticButton>
        <MagneticButton href="/resume.pdf" target="_blank" rel="noreferrer" data-cursor="pdf">
          <Download size={17} /> Résumé
        </MagneticButton>
        <MagneticButton
          href="https://github.com/Aryan0-101"
          target="_blank"
          rel="noreferrer"
          className="!px-3.5"
          aria-label="GitHub"
        >
          <Github size={18} />
        </MagneticButton>
        <MagneticButton
          href="https://linkedin.com/in/aryan-tyagi05"
          target="_blank"
          rel="noreferrer"
          className="!px-3.5"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </MagneticButton>
      </div>

      <footer className="mt-28 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 font-mono text-xs text-ink-faint sm:flex-row">
        <span>© {new Date().getFullYear()} Aryan Tyagi</span>
        <span>Ghaziabad, India</span>
      </footer>
    </section>
  );
}
