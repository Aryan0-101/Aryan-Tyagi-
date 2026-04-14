import { motion } from "motion/react";
import { ReactNode } from "react";

export function BentoCard({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, scale: 1.01 }}
      className={`bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:bg-zinc-900/60 hover:border-white/10 hover:shadow-emerald-500/5 relative overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 border-t border-white/10 rounded-3xl pointer-events-none mix-blend-overlay"></div>
      {children}
    </motion.div>
  );
}
