import { motion } from "motion/react";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiKeras,
  SiOpencv,
  SiHuggingface,
  SiLangchain,
  SiOnnx,
  SiPython,
  SiCplusplus,
  SiOpenjdk,
  SiJavascript,
  SiFastapi,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiPandas,
  SiNumpy,
  SiJira,
  SiN8N,
  SiJupyter,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import {
  SiClaude,
  SiGithubcopilot,
  SiGooglegemini,
  SiCursor,
  SiPerplexity,
  SiOllama,
  SiGithub,
  SiPostman,
  SiGooglecolab,
  SiKaggle,
  SiStreamlit,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TerminalSquare } from "lucide-react";
import { SectionHeading } from "./ui/Section";
import { Marquee } from "./ui/Marquee";
import { easeOut } from "../lib/motion";

type Tool = { name: string; Icon: IconType; color: string };
type Tech = { name: string; Icon: IconType; color: string };

// AI assistants + everyday dev tools — distinct from the stack above (no repeats).
const TOOLS: Tool[] = [
  { name: "Claude Code", Icon: SiClaude, color: "#D97757" },
  { name: "Codex", Icon: TerminalSquare, color: "#10A37F" },
  { name: "GitHub Copilot", Icon: SiGithubcopilot, color: "#F4F3EE" },
  { name: "Gemini", Icon: SiGooglegemini, color: "#8E7CF0" },
  { name: "Cursor", Icon: SiCursor, color: "#F4F3EE" },
  { name: "Perplexity", Icon: SiPerplexity, color: "#20B8CD" },
  { name: "Ollama", Icon: SiOllama, color: "#F4F3EE" },
  { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
  { name: "Git", Icon: SiGithub, color: "#F4F3EE" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Google Colab", Icon: SiGooglecolab, color: "#F9AB00" },
  { name: "Kaggle", Icon: SiKaggle, color: "#20BEFF" },
  { name: "Streamlit", Icon: SiStreamlit, color: "#FF4B4B" },
];
type Group = { label: string; note: string; featured?: boolean; items: Tech[] };

const GROUPS: Group[] = [
  {
    label: "AI / Machine Learning",
    note: "where I spend most of my time",
    featured: true,
    items: [
      { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
      { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
      { name: "scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
      { name: "Keras", Icon: SiKeras, color: "#D00000" },
      { name: "OpenCV", Icon: SiOpencv, color: "#5C3EE8" },
      { name: "Hugging Face", Icon: SiHuggingface, color: "#FFD21E" },
      { name: "LangChain", Icon: SiLangchain, color: "#1C3C3C" },
      { name: "ONNX", Icon: SiOnnx, color: "#FFFFFF" },
    ],
  },
  {
    label: "Languages & Backend",
    note: "what I build with",
    items: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "Java", Icon: SiOpenjdk, color: "#EA2D2E" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    label: "Cloud, DevOps & Data",
    note: "how I ship it",
    items: [
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
      { name: "Pandas", Icon: SiPandas, color: "#150458" },
      { name: "NumPy", Icon: SiNumpy, color: "#013243" },
      { name: "Jupyter", Icon: SiJupyter, color: "#F37626" },
      { name: "JIRA", Icon: SiJira, color: "#0052CC" },
      { name: "n8n", Icon: SiN8N, color: "#EA4B71" },
    ],
  },
];

export function Skills() {
  return (
    <div>
      <SectionHeading title="My stack" kicker="Tools of the trade" />

      {/* Featured group: prominent stacked tiles */}
      {GROUPS.filter((g) => g.featured).map((group) => (
        <div key={group.label} className="mb-16">
          <GroupLabel label={group.label} note={group.note} />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {group.items.map((t, i) => (
              <TechTile key={t.name} tech={t} delay={i * 0.04} />
            ))}
          </div>
        </div>
      ))}

      {/* Secondary groups: compact inline rows, two-up on desktop */}
      <div className="grid gap-x-12 gap-y-12 border-t border-line pt-12 md:grid-cols-2">
        {GROUPS.filter((g) => !g.featured).map((group) => (
          <div key={group.label}>
            <GroupLabel label={group.label} note={group.note} />
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((t, i) => (
                <TechChip key={t.name} tech={t} delay={i * 0.03} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tools ribbon — AI assistants + dev tools not covered above. The only
          place color escapes into the monochrome, revealed on hover. */}
      <div className="mt-16">
        <GroupLabel label="Tools & AI assistants" note="what I reach for daily" />
        <div className="border-y border-line py-6">
          <Marquee duration={34} gap="2.75rem">
            {TOOLS.map(({ name, Icon, color }) => (
              <span key={name} className="group/logo flex items-center gap-2.5">
                <Icon
                  size={22}
                  className="text-ink-faint transition-colors duration-300 group-hover/logo:[color:var(--b)]"
                  style={{ ["--b" as string]: color }}
                />
                <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                  {name}
                </span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

function GroupLabel({ label, note }: { label: string; note: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <h3 className="text-lg font-semibold text-ink">{label}</h3>
      <span className="text-sm text-ink-faint">— {note}</span>
    </div>
  );
}

/** Large tile: icon above name, for the featured group. */
function TechTile({ tech, delay }: { tech: Tech; delay: number }) {
  const { Icon, name, color } = tech;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, ease: easeOut, delay }}
      whileHover={{ y: -4 }}
      style={{ "--brand": color } as CSSProperties}
      className="group flex flex-col gap-3 rounded-xl border border-line bg-surface/40 p-5 transition-colors hover:border-ink-faint/30 hover:bg-surface/70"
    >
      <Icon
        size={26}
        className="text-ink-faint transition-colors duration-300 group-hover:[color:var(--brand)]"
      />
      <span className="text-sm font-medium text-ink-muted transition-colors group-hover:text-ink">
        {name}
      </span>
    </motion.div>
  );
}

/** Compact chip: icon + name inline, for secondary groups. */
function TechChip({ tech, delay }: { tech: Tech; delay: number }) {
  const { Icon, name, color } = tech;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: easeOut, delay }}
      whileHover={{ y: -2 }}
      style={{ "--brand": color } as CSSProperties}
      className="group inline-flex items-center gap-2.5 rounded-lg border border-line bg-surface/40 px-3.5 py-2 transition-colors hover:border-ink-faint/30 hover:bg-surface/70"
    >
      <Icon
        size={18}
        className="shrink-0 text-ink-faint transition-colors duration-300 group-hover:[color:var(--brand)]"
      />
      <span className="text-sm text-ink-muted transition-colors group-hover:text-ink">
        {name}
      </span>
    </motion.div>
  );
}
