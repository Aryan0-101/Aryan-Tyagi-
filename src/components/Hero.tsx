import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Portrait } from "./Portrait";
import { MagneticButton } from "./ui/MagneticButton";
import { Typewriter } from "./ui/Typewriter";
import { charRise, easeOut, staggerParent } from "../lib/motion";

const NAME = "Aryan Tyagi";
const TYPED = [
  "Machine Learning systems",
  "Computer Vision pipelines",
  "LLM & RAG applications",
  "Reinforcement Learning agents",
  "Full-stack, cloud-native apps",
];

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // Whole hero drifts up + fades slightly as you scroll past it.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);

  const container = staggerParent(reduce ? 0 : 0.04);

  return (
    <header
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-24"
    >
      <motion.div style={{ y: contentY }} className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left: identity */}
        <div className="relative z-10">
          {/* The name — the centerpiece. Per-char blur-rise. */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            aria-label={NAME}
            className="font-display text-[clamp(3.2rem,11vw,8rem)] font-semibold leading-[0.9] tracking-[-0.025em] text-ink"
          >
            {NAME.split(" ").map((word, wi) => (
              <span
                key={wi}
                className="block overflow-hidden pb-[0.14em] mb-[-0.14em]"
              >
                <span className="inline-block">
                  {word.split("").map((c, ci) => (
                    <motion.span
                      key={ci}
                      variants={charRise}
                      className="inline-block will-change-transform"
                    >
                      {c}
                    </motion.span>
                  ))}
                </span>
              </span>
            ))}
          </motion.h1>

          {/* Chalk underline sweep */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: easeOut, delay: reduce ? 0.2 : 0.7 }}
            className="mt-6 h-[3px] w-32 origin-left rounded-full bg-chalk"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: reduce ? 0.3 : 0.9 }}
            className="mt-8 max-w-xl text-[clamp(1.05rem,2vw,1.3rem)] leading-relaxed text-ink-muted"
          >
            <span className="font-mono text-sm text-ink">ML / AI Engineer</span>
            <span className="mx-2 text-ink-faint">—</span>
            building intelligent systems across computer vision, LLMs, and
            reinforcement learning, with the full-stack and cloud craft to ship them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: reduce ? 0.35 : 1.05 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="mailto:aryantyagi0504@gmail.com" variant="primary" data-cursor="email">
              <Mail size={17} /> Get in touch
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
          </motion.div>
        </div>

        {/* Portrait dissolving into the page, with a typing skills box beneath */}
        <div className="order-first flex flex-col gap-6 opacity-90 sm:opacity-100 lg:order-none">
          <Portrait />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: reduce ? 0.4 : 1.2 }}
            className="mx-auto w-full max-w-[27rem] rounded-xl border border-line bg-surface/40 p-4 backdrop-blur-sm"
          >
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
              <span className="ml-2 font-mono text-[11px] text-ink-faint">~/what-i-build</span>
            </div>
            <div className="font-mono text-sm leading-relaxed text-ink-muted">
              <span className="text-ink-faint">$</span>{" "}
              <span className="text-ink-faint">building</span>{" "}
              <Typewriter phrases={TYPED} className="text-ink" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
