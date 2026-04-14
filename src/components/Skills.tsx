import { motion } from "motion/react";
import { BrainCircuit, Layers, LineChart } from "lucide-react";

export function Skills() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 text-2xl font-semibold">
        <BrainCircuit className="text-zinc-400" />
        <h2>Technical Expertise</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* AI & ML - Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-8 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-2xl transition-all duration-500 hover:bg-zinc-900/60 hover:border-white/10"
        >
          <div className="absolute inset-0 border-t border-white/10 rounded-3xl pointer-events-none mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] group-hover:bg-emerald-500/20 transition-colors duration-700 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="relative z-10">
            <BrainCircuit className="w-12 h-12 text-emerald-400 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
            <h3 className="text-3xl font-bold mb-4 text-zinc-100">AI & Machine Learning</h3>
            <p className="text-zinc-400 mb-8 max-w-md text-lg">Building intelligent systems using state-of-the-art language models, computer vision, and deep learning architectures.</p>
            <div className="flex flex-wrap gap-3">
              {["LLMs", "RAG", "LangChain", "LangGraph", "PyTorch", "TensorFlow", "Computer Vision", "Reinforcement Learning"].map(skill => (
                <motion.span 
                  whileHover={{ scale: 1.05, backgroundColor: "#10b981", color: "#000", borderColor: "#10b981" }}
                  key={skill} 
                  className="px-4 py-2 bg-zinc-950/50 backdrop-blur-sm border border-white/5 rounded-xl text-sm font-medium text-zinc-300 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Full Stack - Medium Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-4 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-2xl transition-all duration-500 hover:bg-zinc-900/60 hover:border-white/10"
        >
          <div className="absolute inset-0 border-t border-white/10 rounded-3xl pointer-events-none mix-blend-overlay"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-colors duration-700 translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
          <div className="relative z-10">
            <Layers className="w-12 h-12 text-cyan-400 mb-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]" />
            <h3 className="text-3xl font-bold mb-8 text-zinc-100">Full-Stack</h3>
            <div className="flex flex-wrap gap-3">
              {["React", "Node.js", "FastAPI", "MongoDB", "SQL", "JavaScript", "C++"].map(skill => (
                <motion.span 
                  whileHover={{ scale: 1.05, backgroundColor: "#06b6d4", color: "#000", borderColor: "#06b6d4" }}
                  key={skill} 
                  className="px-4 py-2 bg-zinc-950/50 backdrop-blur-sm border border-white/5 rounded-xl text-sm font-medium text-zinc-300 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Data Science & Analytics - Wide Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-12 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-2xl transition-all duration-500 hover:bg-zinc-900/60 hover:border-white/10"
        >
          <div className="absolute inset-0 border-t border-white/10 rounded-3xl pointer-events-none mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[200px] bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-colors duration-700 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <LineChart className="w-12 h-12 text-blue-400 mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
              <h3 className="text-3xl font-bold text-zinc-100 mb-2">Data & Analytics</h3>
              <p className="text-zinc-400">Tools for data processing and visualization</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end md:max-w-[60%]">
              {["Pandas", "Seaborn", "MATLAB", "Tableau", "Excel"].map(skill => (
                <motion.span 
                  whileHover={{ scale: 1.05, backgroundColor: "#3b82f6", color: "#fff", borderColor: "#3b82f6" }}
                  key={skill} 
                  className="px-5 py-3 bg-zinc-950/50 backdrop-blur-sm border border-white/5 rounded-xl text-sm font-medium text-zinc-300 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
