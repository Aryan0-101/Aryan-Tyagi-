import { motion } from "motion/react";
import { Github, Linkedin, Mail, FileText, Code2, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-white/5 backdrop-blur-md text-zinc-300 text-sm font-medium cursor-default shadow-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for opportunities
          </motion.div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Hi, I'm <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">Aryan Tyagi</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-light">
              A passionate software engineer specializing in <strong className="text-zinc-200 font-medium">AI, Machine Learning</strong>, and <strong className="text-zinc-200 font-medium">Full-Stack Development</strong>. Building intelligent systems and scalable applications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              href="mailto:aryantyagi0504@gmail.com" 
              className="flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 rounded-xl font-semibold hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              href="/resume.pdf" 
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900/50 backdrop-blur-md text-zinc-100 rounded-xl font-medium border border-white/10 hover:bg-zinc-800 transition-colors"
            >
              <FileText size={20} />
              Download CV
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              href="https://github.com/Aryan0-101" target="_blank" rel="noreferrer" 
              className="flex items-center gap-2 px-4 py-3 bg-zinc-900/50 backdrop-blur-md text-zinc-100 rounded-xl font-medium border border-white/10 hover:bg-zinc-800 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              href="https://linkedin.com/in/aryan-tyagi05" target="_blank" rel="noreferrer" 
              className="flex items-center gap-2 px-4 py-3 bg-zinc-900/50 backdrop-blur-md text-zinc-100 rounded-xl font-medium border border-white/10 hover:bg-zinc-800 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="hidden lg:flex justify-center relative"
        >
          <div className="w-96 h-96 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-3xl absolute animate-pulse" style={{ animationDuration: '6s' }}></div>
          <motion.div 
            whileHover={{ rotate: 0, scale: 1.05, y: -10 }}
            className="w-80 h-80 bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl rotate-3 shadow-2xl overflow-hidden relative z-10 flex flex-col items-center justify-center gap-6 transition-all duration-500 group"
          >
            <div className="absolute inset-0 border-t border-white/20 rounded-3xl pointer-events-none mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative">
              <Code2 size={80} className="text-zinc-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
              <Sparkles size={24} className="text-emerald-400 absolute -top-4 -right-4 animate-pulse" />
            </div>
            
            <div className="text-zinc-400 font-mono text-sm bg-zinc-950/50 px-4 py-2 rounded-lg border border-white/5">
              <span className="text-emerald-400">const</span> developer = <span className="text-cyan-400">true</span>;
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
