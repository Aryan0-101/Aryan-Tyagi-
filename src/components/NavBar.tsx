import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const LINKS = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function NavBar() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: reduce ? 0 : 1.2 }}
      className="fixed left-1/2 top-5 z-40 -translate-x-1/2"
    >
      <div className="glass flex items-center gap-1 rounded-full border border-line bg-surface/55 px-2 py-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        {LINKS.map((link) => {
          const isActive = active === link.href.slice(1);
          return (
            <a
              key={link.name}
              href={link.href}
              className="relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors"
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-chalk"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors ${
                  isActive ? "text-[#0a0a0b]" : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.name}
              </span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
