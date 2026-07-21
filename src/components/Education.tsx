import { motion } from "motion/react";
import { Award, BrainCircuit, Database, BookMarked } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./ui/Section";
import { easeOut } from "../lib/motion";

const COURSEWORK = [
  "Software Engineering",
  "Data Structures",
  "Algorithms",
  "DBMS",
  "Artificial Intelligence",
  "Machine Learning",
];

const CREDENTIALS: { title: string; org: string; Icon: LucideIcon }[] = [
  { title: "Dean's List", org: "Bennett University — academic excellence", Icon: Award },
  { title: "Machine Learning Specialization", org: "DeepLearning.AI", Icon: BrainCircuit },
  { title: "Databases & SQL for Data Science", org: "IBM", Icon: Database },
  { title: "Software Engineering", org: "NPTEL", Icon: BookMarked },
];

export function Education() {
  return (
    <div>
      <SectionHeading title="Education & credentials" kicker="The paper trail" />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="rounded-2xl border border-line bg-surface/40 p-8"
        >
          <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <div>
              <h3 className="text-2xl font-semibold text-ink">Bennett University</h3>
              <p className="mt-1 text-ink-muted">B.Tech, Computer Science</p>
              <p className="mt-0.5 text-sm text-ink-faint">Greater Noida, India</p>
            </div>
            <span className="font-mono text-sm text-ink-faint">2023 – 2027</span>
          </div>

          <div className="mb-8 flex items-baseline gap-3">
            <span className="font-display text-5xl font-semibold text-ink">9.04</span>
            <span className="text-sm text-ink-faint">/ 10.0 GPA</span>
          </div>

          <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-faint">
            Relevant coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {COURSEWORK.map((c) => (
              <span
                key={c}
                className="rounded-lg border border-line bg-bg/40 px-3 py-1.5 text-sm text-ink-muted"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.08 }}
          className="flex flex-col divide-y divide-line rounded-2xl border border-line bg-surface/40"
        >
          {CREDENTIALS.map((c) => (
            <li key={c.title} className="group flex items-start gap-4 p-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-bg/40 text-ink-faint transition-colors group-hover:border-line-strong group-hover:text-ink">
                <c.Icon size={17} />
              </span>
              <div>
                <p className="font-medium text-ink">{c.title}</p>
                <p className="mt-0.5 text-sm text-ink-faint">{c.org}</p>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
