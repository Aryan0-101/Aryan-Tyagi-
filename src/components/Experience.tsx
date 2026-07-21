import { motion } from "motion/react";
import { Building2, Target, Workflow, Lightbulb, Brain, MessageSquare, KanbanSquare, GitBranch, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./ui/Section";
import { easeOut } from "../lib/motion";

export function Experience() {
  return (
    <div>
      <SectionHeading title="Experience" kicker="Where I've worked" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="group relative overflow-hidden rounded-2xl border border-line bg-surface/40 p-8 transition-colors hover:border-line-strong md:p-10"
      >
        {/* Big index-free watermark */}
        <span
          aria-hidden
          className="text-outline pointer-events-none absolute -right-4 -top-8 select-none font-display text-[9rem] font-semibold leading-none opacity-[0.06]"
        >
          01
        </span>

        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-start">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-bg/50 text-ink">
              <Building2 size={22} />
            </span>
            <div>
              <h3 className="text-2xl font-semibold text-ink">Co-Founder</h3>
              <p className="mt-0.5 text-lg text-ink-muted">Trawell</p>
              <p className="mt-0.5 text-sm text-ink-faint">Ghaziabad, India</p>
            </div>
          </div>
          <span className="font-mono text-sm text-ink-faint md:pt-1">Jul 2025 – Jan 2026</span>
        </div>

        <p className="max-w-2xl leading-relaxed text-ink-muted">
          Led product strategy and end-to-end development for a travel technology
          platform. Ran market research and competitive analysis to identify user
          needs and market opportunities, shaping the product roadmap from the ground up.
        </p>

        <div className="mt-8 grid gap-8 border-t border-line pt-6 md:grid-cols-2">
          <TagGroup
            label="Focus"
            tags={[
              { name: "Product Strategy", Icon: Target },
              { name: "Problem Solving", Icon: Lightbulb },
              { name: "Critical Thinking", Icon: Brain },
              { name: "Communication", Icon: MessageSquare },
            ]}
          />
          <TagGroup
            label="Workflow"
            tags={[
              { name: "Project Management", Icon: KanbanSquare },
              { name: "JIRA", Icon: Workflow },
              { name: "Agile", Icon: GitBranch },
              { name: "Market Research", Icon: LineChart },
            ]}
          />
        </div>
      </motion.div>
    </div>
  );
}

function TagGroup({
  label,
  tags,
}: {
  label: string;
  tags: { name: string; Icon: LucideIcon }[];
}) {
  return (
    <div>
      <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-faint">{label}</h4>
      <div className="flex flex-wrap gap-2">
        {tags.map(({ name, Icon }) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface/50 px-3 py-1.5 text-sm text-ink-muted"
          >
            <Icon size={14} className="text-ink-faint transition-colors group-hover:text-ink" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
