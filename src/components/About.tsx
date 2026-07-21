import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Gauge, CalendarClock, Rocket, Sparkles, Heart } from "lucide-react";
import { easeOut } from "../lib/motion";

const STATS = [
  { Icon: CalendarClock, value: "2+", label: "years building ML systems" },
  { Icon: Rocket, value: "5+", label: "AI / ML projects shipped" },
  { Icon: Sparkles, value: "9k+", label: "images self-scraped for CV" },
  { Icon: Gauge, value: "500+", label: "req/sec load-tested" },
];

/** Chalk white at rest; each keyword ignites into its own hue as it passes the
 *  reading band, then settles back — a spotlight that follows your scroll. */
const INK = "#f4f3ee";

function Kw({ color, children }: { color: string; children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });

  // Bell curve: ink → color across a held central plateau → ink.
  const c = useTransform(
    scrollYProgress,
    [0, 0.32, 0.5, 0.68, 1],
    [INK, color, color, color, INK],
  );

  if (reduce) {
    return (
      <span className="font-semibold" style={{ color }}>
        {children}
      </span>
    );
  }

  return (
    <motion.span ref={ref} className="font-semibold" style={{ color: c }}>
      {children}
    </motion.span>
  );
}

export function About() {
  const reduce = useReducedMotion();

  return (
    <div id="about">
      <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
        <span className="h-1.5 w-1.5 rounded-full bg-chalk" />
        This is me
      </div>

      {/* Keyword-dense statement — hues bloom as each term scrolls through */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="max-w-5xl font-display text-[clamp(1.4rem,3.7vw,2.7rem)] font-medium leading-[1.28] tracking-tight text-ink-muted"
      >
        I'm a CS undergrad who turns research into systems that ship — training{" "}
        <Kw color="#38BDF8">computer&nbsp;vision</Kw> classifiers and{" "}
        <Kw color="#34D399">reinforcement&nbsp;learning</Kw> agents, wiring{" "}
        <Kw color="#A78BFA">LLM</Kw> &amp; <Kw color="#F472B6">RAG</Kw> pipelines in{" "}
        <Kw color="#F97316">PyTorch</Kw>, then serving them behind{" "}
        <Kw color="#14B8A6">FastAPI</Kw>, packing them into{" "}
        <Kw color="#2496ED">Docker</Kw>, orchestrating with{" "}
        <Kw color="#6366F1">Kubernetes</Kw>, and shipping to{" "}
        <Kw color="#F59E0B">AWS</Kw>.
      </motion.p>

      {/* The "experience card" — quick-hit stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
        className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4"
      >
        {STATS.map(({ Icon, value, label }) => (
          <div key={label} className="group bg-bg p-6 transition-colors hover:bg-surface/50 md:p-7">
            <Icon size={20} className="mb-4 text-ink-faint transition-colors group-hover:text-ink" />
            <div className="font-display text-3xl font-semibold text-ink md:text-4xl">
              {value}
            </div>
            <div className="mt-1 text-sm text-ink-faint">{label}</div>
          </div>
        ))}
      </motion.div>

      {/* Empty-space delight — a little happy note that draws itself in */}
      <div className="mt-20 flex justify-center md:mt-24">
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 26, rotate: -2 }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, rotate: -1.2 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="relative text-center font-display text-[clamp(1.5rem,4.4vw,2.9rem)] font-medium leading-tight text-ink"
        >
          <span className="text-ink-faint">p.s.</span> — honestly, I just{" "}
          <span className="relative inline-flex items-center">
            <Heart
              size="0.7em"
              className={`mr-1.5 fill-ink text-ink ${reduce ? "" : "animate-[float-y_2.6s_ease-in-out_infinite]"}`}
            />
            love
          </span>{" "}
          <span className="relative inline-block">
            building things.
            <ScribbleUnderline reduce={!!reduce} />
          </span>
        </motion.p>
      </div>
    </div>
  );
}

/** Hand-drawn chalk underline that strokes itself on as it enters view. */
function ScribbleUnderline({ reduce }: { reduce: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-3 left-0 h-3 w-full overflow-visible"
    >
      <motion.path
        d="M4 15 Q 45 6 88 13 T 172 12 Q 214 7 258 14 T 296 11"
        fill="none"
        stroke="var(--color-chalk)"
        strokeWidth={3}
        strokeLinecap="round"
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: easeOut, delay: 0.35 }}
      />
    </svg>
  );
}
