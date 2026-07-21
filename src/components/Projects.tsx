import { Github, ExternalLink, X, ArrowUpRight, Boxes } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiFastapi,
  SiPython,
  SiDocker,
  SiSqlite,
  SiExpo,
  SiReact,
  SiGooglegemini,
  SiOpenjdk,
  SiSpringboot,
  SiAndroid,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SectionHeading } from "./ui/Section";
import { easeOut, springDefault } from "../lib/motion";

type Project = {
  slug: string;
  title: string;
  type: string;
  date: string;
  tech: string[];
  stack: { name: string; Icon: IconType }[];
  github?: string;
  live?: string;
  wip?: boolean;
  /** "portrait" for phone-app screenshots — shown whole on a blurred backdrop. */
  shot?: "landscape" | "portrait";
  /** Phone apps: 2–3 screenshot filenames in public/projects/, shown in a row.
   *  Missing files self-drop; if all are absent the placeholder shows. */
  gallery?: string[];
  summary: string;
  points: string[];
  details: string;
};

// Screenshots: drop a 16:10 image at public/projects/<slug>.png to replace the
// generated placeholder preview. Add repo links via `github`, demos via `live`.
const projects: Project[] = [
  {
    slug: "carval",
    title: "CarVal — Vehicle Valuation Engine",
    type: "AI · Full-stack",
    date: "2026 – Present",
    tech: ["Python", "FastAPI", "Conformal Prediction", "Docker", "AWS"],
    stack: [
      { name: "Python", Icon: SiPython },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "Docker", Icon: SiDocker },
      { name: "AWS", Icon: FaAws },
    ],
    github: "https://github.com/Aryan0-101/CarVal",
    live: "https://carval.pages.dev",
    summary:
      "Vision-scored condition plus gradient-boosted pricing, wrapped in conformal 90% confidence intervals.",
    points: [
      "Image-driven condition scoring feeding a gradient-boosted price model.",
      "Mapie conformal prediction for calibrated 90% confidence intervals.",
      "Playwright-scraped data, served via FastAPI on Dockerized AWS EC2.",
    ],
    details:
      "An end-to-end AI valuation platform for used cars. Image-based condition scoring feeds a gradient-boosting regressor whose outputs are wrapped in Mapie conformal prediction for calibrated 90% confidence intervals. Training data is gathered by an async Playwright scraper into SQLite; the model is served through a FastAPI backend behind an Nginx/Certbot TLS proxy, containerized with Docker and auto-deployed to AWS EC2 via GitHub Actions, with a Vite + Tailwind SPA front-end on Cloudflare Pages.",
  },
  {
    slug: "gymini",
    title: "Gymini — AI Gym Planner",
    type: "Mobile · AI",
    date: "2026 · 50+ users",
    tech: ["React Native", "Expo", "TypeScript", "SQLite", "Gemini"],
    stack: [
      { name: "Expo", Icon: SiExpo },
      { name: "React Native", Icon: SiReact },
      { name: "SQLite", Icon: SiSqlite },
      { name: "Gemini", Icon: SiGooglegemini },
    ],
    github: "https://github.com/Aryan0-101/Gymini",
    live: "https://get-gymini.vercel.app/",
    shot: "portrait",
    gallery: ["gymini-1.png", "gymini-2.png", "gymini-3.png"],
    summary:
      "An offline-first workout app that pairs an 800+ exercise SQLite library with Gemini-generated routines.",
    points: [
      "Cross-platform React Native + Expo app, adopted by 50+ users.",
      "Offline-first library of 800+ exercises in local expo-sqlite.",
      "Google Gemini generates personalized, goal-aware workout plans.",
    ],
    details:
      "An intelligent, open-source fitness tracker built with React Native and Expo. It ships an offline-first library of 800+ exercises in a local expo-sqlite database, so the app stays fully usable without a connection, and calls the Google Gemini API to generate personalized, goal-aware workout routines. Navigation uses React Navigation's native stack, all wrapped in a hand-rolled vanilla StyleSheet design system. Now used by 50+ people.",
  },
  {
    slug: "rate-limiter",
    title: "Rate Limiter API",
    type: "Backend · Systems",
    date: "Jun 2026 – Jul 2026",
    tech: ["Java", "Spring Boot", "Token Bucket", "Maven", "Docker"],
    stack: [
      { name: "Java", Icon: SiOpenjdk },
      { name: "Spring Boot", Icon: SiSpringboot },
      { name: "Docker", Icon: SiDocker },
    ],
    github: "https://github.com/Aryan0-101/Token-Bucket-Rate-limiter",
    summary:
      "A Token-Bucket limiter service with per-client policies, thread-safe under 500+ req/sec.",
    points: [
      "Configurable Token Bucket rate limiter with per-client policies.",
      "Thread-safe request handling with persistent bucket state.",
      "Load-tested at 500+ concurrent requests per second.",
    ],
    details:
      "A production-style API rate limiter built in Java on the Token Bucket algorithm. It supports per-client policies, thread-safe concurrent request handling, and persistent bucket state, exposing REST endpoints to configure clients. Built with Maven and validated under load at over 500 concurrent requests per second — a service whose whole job is to rate-limit other APIs.",
  },
  {
    slug: "mrrms",
    title: "MRRMS — Society Super-App",
    type: "Android · Product",
    date: "2025 · 200+ users",
    tech: ["Android", "Kotlin", "Multi-role", "Realtime"],
    stack: [
      { name: "Android", Icon: SiAndroid },
      { name: "Java", Icon: SiOpenjdk },
    ],
    github: "https://github.com/Aryan0-101/MRRMS",
    shot: "portrait",
    gallery: ["mrrms-1.png", "mrrms-2.png", "mrrms-3.png"],
    summary:
      "A triple-app Android system for my society — residents, management, and guards — serving 200+ users.",
    points: [
      "One platform, three coordinated apps: residents, management, guards.",
      "Built for Migsun Roof, my own residential society.",
      "In daily use by 200+ residents and staff.",
    ],
    details:
      "MRRMS is a residential-society management platform I built for Migsun Roof, my own society. It's a triple-app system — a resident app, a management app, and a guard app — that coordinate around a shared backend so residents, the management office, and the security gate all work from the same source of truth for visitors, complaints, and notices. It's in daily use by 200+ residents and staff.",
  },
  {
    slug: "h2o",
    title: "H2O — Home to Office",
    type: "Full-stack · WIP",
    date: "Currently building",
    tech: ["TypeScript", "Express", "Prisma", "PostgreSQL", "Redis", "Socket.io"],
    stack: [
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Express", Icon: SiExpress },
      { name: "Prisma", Icon: SiPrisma },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Socket.io", Icon: SiSocketdotio },
    ],
    github: "https://github.com/Aryan0-101/H2O-Home-to-Office--build",
    wip: true,
    summary:
      "A monthly-subscription commuter ride-share with live GPS, built as a Turborepo monorepo.",
    points: [
      "Subscription ride-sharing for daily commuters on fixed routes and times.",
      "Real-time GPS streaming over Socket.io, Redis pub/sub, Prisma + PostgreSQL.",
      "pnpm + Turborepo monorepo with a React 19 client and shared types.",
    ],
    details:
      "H2O is a monthly-subscription ride-sharing app for daily commuters who travel fixed routes at fixed times. The Express + TypeScript API uses Prisma over PostgreSQL, Redis for caching and pub/sub, and Socket.io for real-time GPS location streaming, with Zod validation and an OpenAPI 3.0 spec. The React 19 + Vite client shares types through a pnpm-workspace Turborepo monorepo. Actively in development.",
  },
];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [hovered, setHovered] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  // Floating preview follows the cursor with a soft spring lag.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const fx = useSpring(px, { stiffness: 200, damping: 26, mass: 0.6 });
  const fy = useSpring(py, { stiffness: 200, damping: 26, mass: 0.6 });

  const open = (project: Project, el: HTMLElement) => {
    triggerRef.current = el;
    setSelected(project);
  };
  const close = () => {
    setSelected(null);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const onListMove = (e: React.PointerEvent) => {
    if (reduce) return;
    px.set(e.clientX);
    py.set(e.clientY);
  };

  return (
    <div>
      <SectionHeading title="Selected work" kicker="Things I've built" />

      {/* Interactive list. Hovering a row floats its preview near the cursor
          and expands the row downward to reveal a short overview. */}
      <ul
        className="relative border-t border-line"
        onPointerMove={onListMove}
        onPointerLeave={() => setHovered(null)}
      >
        {projects.map((p, i) => (
          <ProjectRow
            key={p.slug}
            project={p}
            index={i}
            active={hovered?.slug === p.slug}
            onOpen={open}
            onHover={setHovered}
          />
        ))}

        {/* Cursor-following preview (desktop / fine-pointer only) */}
        <AnimatePresence>
          {hovered && !reduce && (
            <motion.div
              key={hovered.slug}
              style={{ x: fx, y: fy }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.28, ease: easeOut }}
              className="pointer-events-none fixed left-0 top-0 z-30 hidden -translate-x-1/2 -translate-y-1/2 md:block"
            >
              <div className="h-52 w-80 -rotate-2 overflow-hidden rounded-xl border border-line-strong bg-surface shadow-2xl">
                <FloatingPreview project={hovered} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ul>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={close} />}
      </AnimatePresence>
    </div>
  );
}

function ProjectRow({
  project,
  index,
  active,
  onOpen,
  onHover,
}: {
  project: Project;
  index: number;
  active: boolean;
  onOpen: (p: Project, el: HTMLElement) => void;
  onHover: (p: Project | null) => void;
}) {
  const reduce = useReducedMotion();
  const activate = (e: React.MouseEvent | React.KeyboardEvent) =>
    onOpen(project, e.currentTarget as HTMLElement);

  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: easeOut, delay: index * 0.05 }}
      className="group relative border-b border-line"
    >
      <div
        role="button"
        tabIndex={0}
        aria-label={`View details for ${project.title}`}
        aria-expanded={active}
        data-cursor="view"
        onClick={activate}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            activate(e);
          }
        }}
        onPointerEnter={() => onHover(project)}
        onFocus={() => onHover(project)}
        onBlur={() => onHover(null)}
        className="relative cursor-pointer py-7 outline-none transition-colors focus-visible:bg-surface/40 md:py-9"
      >
        {/* Chalk fill that wipes in on hover behind the row */}
        <span className="pointer-events-none absolute inset-0 -z-0 origin-bottom scale-y-0 bg-surface/50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

        <div className="relative flex items-center gap-6">
          <span className="relative z-10 w-10 shrink-0 font-mono text-sm text-ink-faint">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="relative z-10 min-w-0 flex-1">
            <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-[clamp(1.5rem,3.6vw,2.6rem)] font-semibold leading-none tracking-tight text-ink-muted transition-colors duration-300 group-hover:text-ink">
              {project.title}
              {project.wip && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink-faint">
                  <Boxes size={11} />
                  Building
                </span>
              )}
            </h3>
            <p className="mt-2 hidden font-mono text-xs text-ink-faint sm:block">
              {project.type} · {project.date}
            </p>
          </div>

          <div className="relative z-10 hidden items-center gap-1.5 lg:flex">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-md border border-line px-2 py-0.5 text-xs text-ink-faint"
              >
                {t}
              </span>
            ))}
          </div>

          <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink-faint transition-all duration-300 group-hover:border-line-strong group-hover:text-ink">
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </span>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${project.title} source on GitHub`}
              className="relative z-10 hidden text-ink-faint transition-colors hover:text-ink sm:block"
            >
              <Github size={18} />
            </a>
          )}
        </div>

        {/* Overview drawer — expands the card downward on hover / focus */}
        <motion.div
          initial={false}
          animate={{
            height: active && !reduce ? "auto" : 0,
            opacity: active ? 1 : 0,
          }}
          transition={{
            height: { duration: 0.5, ease: easeOut },
            opacity: { duration: active ? 0.4 : 0.2, ease: easeOut, delay: active ? 0.08 : 0 },
          }}
          className="relative z-10 overflow-hidden"
          aria-hidden={!active}
        >
          <div className="flex flex-col gap-4 pl-16 pr-2 pt-5 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
              {project.summary}
            </p>
            <span className="flex shrink-0 items-center gap-3 font-mono text-xs text-ink-faint">
              {project.stack.map(({ name, Icon }) => (
                <Icon key={name} size={18} title={name} className="text-ink-muted" />
              ))}
              <span className="ml-1 inline-flex items-center gap-1 text-ink">
                Read more <ArrowUpRight size={13} />
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </motion.li>
  );
}

/** A single grayscale phone screenshot that removes itself if the file is
 *  missing, so a gallery of 3 gracefully collapses to whatever exists. */
function PhoneShot({ src, index }: { src: string; index: number }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <motion.img
      src={src}
      alt=""
      onError={() => setOk(false)}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOut, delay: 0.08 * index }}
      className="h-full w-auto shrink-0 rounded-xl border border-line-strong object-contain grayscale shadow-xl transition-[filter,transform] duration-500 hover:z-10 hover:grayscale-0 md:hover:scale-[1.03]"
    />
  );
}

/** Row of 2–3 phone screenshots on a blurred backdrop — the App-Store look
 *  for Android apps. Falls back to the single FloatingPreview if none load. */
function PortraitGallery({ project }: { project: Project }) {
  const shots = (project.gallery ?? []).map((f) => `/projects/${f}`);
  const [failed, setFailed] = useState(false);
  const backdrop = shots[0] ?? `/projects/${project.slug}.png`;

  if (failed || shots.length === 0) {
    return <FloatingPreview project={project} position="center" />;
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-bg">
      {/* Blurred, zoomed fill so the wide frame stays cohesive */}
      <img
        src={backdrop}
        alt=""
        aria-hidden
        onError={() => setFailed(true)}
        className="absolute inset-0 h-full w-full scale-110 object-cover grayscale blur-2xl brightness-[0.5]"
      />
      {/* The real screenshots, whole and centered in a scrollable row */}
      <div
        data-lenis-prevent
        className="relative z-10 flex h-full items-center justify-center gap-3 overflow-x-auto px-4 py-4 md:gap-4"
      >
        {shots.map((src, i) => (
          <PhoneShot key={src} src={src} index={i} />
        ))}
      </div>
    </div>
  );
}

/** Screenshot if present; otherwise a monochrome generated placeholder.
 *  Portrait (phone-app) shots are shown whole on a blurred backdrop of
 *  themselves, so a tall image never gets cropped into a thin slice. */
function FloatingPreview({
  project,
  position = "top",
}: {
  project: Project;
  position?: "top" | "center";
}) {
  const [hasImg, setHasImg] = useState(true);
  // Gallery apps have no <slug>.png — use the first gallery shot for previews.
  const src = project.gallery?.[0]
    ? `/projects/${project.gallery[0]}`
    : `/projects/${project.slug}.png`;

  if (hasImg && project.shot === "portrait") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-bg">
        {/* Blurred, zoomed fill so the wide frame stays cohesive */}
        <img
          src={src}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full scale-110 object-cover grayscale blur-2xl brightness-[0.55]"
        />
        {/* The actual screenshot, shown whole and centered */}
        <img
          src={src}
          alt=""
          onError={() => setHasImg(false)}
          className="relative z-10 mx-auto h-full w-auto max-w-full object-contain grayscale"
        />
      </div>
    );
  }

  return hasImg ? (
    <img
      src={src}
      alt=""
      onError={() => setHasImg(false)}
      className={`h-full w-full object-cover grayscale ${
        position === "center" ? "object-center" : "object-top"
      }`}
    />
  ) : (
    <div className="relative h-full w-full">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 80% at 25% 15%, rgba(244,243,238,0.12), transparent 60%), linear-gradient(135deg, #1e1e21, #0a0a0b)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center gap-3 text-ink-faint">
        {project.stack.map(({ name, Icon }) => (
          <Icon key={name} size={26} />
        ))}
      </div>
      <span className="absolute bottom-3 left-4 font-display text-lg font-semibold text-ink/30">
        {project.title.split(" ").map((w) => w[0]).join("")}
      </span>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const panel = panelRef.current;
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    panel.addEventListener("keydown", onKey);
    return () => panel.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-bg/85 backdrop-blur-sm"
      />
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        data-lenis-prevent
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={springDefault}
        className="glass relative max-h-[88vh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-3xl border border-line-strong bg-surface/85 p-6 shadow-2xl backdrop-blur-2xl md:p-8"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-bg/60 text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chalk"
        >
          <X size={18} />
        </button>

        {/* Preview banner inside the modal — taller for phone-app portraits */}
        <div
          className={`mb-6 w-full overflow-hidden rounded-2xl border border-line ${
            project.shot === "portrait" ? "h-80 md:h-96" : "h-44 md:h-52"
          }`}
        >
          {project.gallery && project.gallery.length > 0 ? (
            <PortraitGallery project={project} />
          ) : (
            <FloatingPreview project={project} position="center" />
          )}
        </div>

        <p className="mb-2 font-mono text-xs text-ink-faint">
          {project.type} · {project.date}
        </p>
        <h3 className="mb-5 pr-10 text-2xl font-semibold text-ink md:text-3xl">
          {project.title}
        </h3>

        <div className="mb-7 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-line bg-bg/40 px-3 py-1 text-sm text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mb-7 leading-relaxed text-ink-muted">{project.details}</p>

        <ul className="mb-8 space-y-3">
          {project.points.map((pt, i) => (
            <li key={i} className="flex gap-3 text-sm text-ink-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chalk" />
              {pt}
            </li>
          ))}
        </ul>

        {(project.live || project.github) && (
          <div className="flex flex-wrap items-center gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-chalk px-5 py-2.5 text-sm font-medium text-[#0a0a0b] transition-opacity hover:opacity-90"
              >
                <ExternalLink size={16} /> Live demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  project.live
                    ? "border border-line-strong text-ink hover:bg-surface/60"
                    : "bg-chalk text-[#0a0a0b] hover:opacity-90"
                }`}
              >
                <Github size={17} /> View source
              </a>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
