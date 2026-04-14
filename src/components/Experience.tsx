import { BentoCard } from "./BentoGrid";
import { Briefcase } from "lucide-react";
import { motion } from "motion/react";

export function Experience() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 text-2xl font-semibold">
        <Briefcase className="text-zinc-400" />
        <h2>Experience & Leadership</h2>
      </div>
      
      <BentoCard>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] group-hover:bg-cyan-500/20 transition-colors duration-700 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-zinc-100">Co-Founder</h3>
              <p className="text-xl text-cyan-400 mt-1">Trawell</p>
            </div>
            <div className="text-left md:text-right">
              <span className="inline-block px-3 py-1 bg-zinc-950/50 border border-white/5 text-zinc-300 rounded-full text-sm mb-2">Jul 2025 – Jan 2026</span>
              <p className="text-zinc-400">Ghaziabad, India</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <p className="text-zinc-300 leading-relaxed text-lg">
              Leading product strategy and development for a travel technology platform, conducting market research and competitive analysis to identify user needs and market opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
              <div>
                <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {["Product Strategy", "Problem Solving", "Critical Thinking", "Cross-functional Communication"].map(skill => (
                    <motion.span 
                      whileHover={{ scale: 1.05, backgroundColor: "#06b6d4", color: "#000", borderColor: "#06b6d4" }}
                      key={skill} 
                      className="px-3 py-1.5 bg-zinc-950/50 rounded-lg text-sm text-zinc-300 cursor-default transition-colors border border-white/5"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Workflow & Management</h4>
                <div className="flex flex-wrap gap-2">
                  {["Project Management", "JIRA", "Agile", "Market Research"].map(tool => (
                    <motion.span 
                      whileHover={{ scale: 1.05, backgroundColor: "#06b6d4", color: "#000", borderColor: "#06b6d4" }}
                      key={tool} 
                      className="px-3 py-1.5 bg-zinc-950/50 rounded-lg text-sm text-zinc-300 cursor-default transition-colors border border-white/5"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BentoCard>
    </div>
  );
}
