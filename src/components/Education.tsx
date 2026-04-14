import { BentoCard } from "./BentoGrid";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "motion/react";

export function Education() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-2xl font-semibold mb-2">
          <GraduationCap className="text-zinc-400" />
          <h2>Education</h2>
        </div>
        <BentoCard className="h-[calc(100%-3rem)]">
          <div className="absolute inset-0 border-t border-white/10 rounded-3xl pointer-events-none mix-blend-overlay"></div>
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-colors duration-700 -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-zinc-100">Bennett University</h3>
                <p className="text-lg text-emerald-400 mt-1">Bachelor of Technology in Computer Science</p>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-block px-3 py-1 bg-zinc-950/50 border border-white/5 text-zinc-300 rounded-full text-sm mb-2">Sep 2023 – Mar 2027</span>
                <p className="text-zinc-400">Greater Noida, India</p>
              </div>
            </div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl font-medium shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                GPA: 9.13 / 10.0
              </span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {["Software Engineering", "Data Structures", "Algorithms", "DBMS", "Artificial Intelligence", "Machine Learning"].map(course => (
                  <motion.span 
                    whileHover={{ scale: 1.05, backgroundColor: "#10b981", color: "#000", borderColor: "#10b981" }}
                    key={course} 
                    className="px-3 py-1.5 bg-zinc-950/50 rounded-lg text-sm text-zinc-300 cursor-default transition-colors border border-white/5"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </BentoCard>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-3 text-2xl font-semibold mb-2">
          <Award className="text-zinc-400" />
          <h2>Certifications & Achievements</h2>
        </div>
        <BentoCard className="h-[calc(100%-3rem)] flex flex-col justify-between">
          <div className="absolute inset-0 border-t border-white/10 rounded-3xl pointer-events-none mix-blend-overlay"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-colors duration-700 translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
          <div className="relative z-10">
            <ul className="space-y-6">
              <motion.li whileHover={{ x: 5 }} className="flex gap-4 cursor-default group/item">
                <div className="w-2 h-2 rounded-full bg-zinc-600 mt-2 shrink-0 transition-colors group-hover/item:bg-indigo-400 group-hover/item:shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                <div>
                  <p className="text-zinc-200 font-medium text-lg group-hover/item:text-indigo-300 transition-colors">Dean's List Award</p>
                  <p className="text-zinc-400 text-sm mt-1">Excellent performance in 1st Semester</p>
                </div>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex gap-4 cursor-default group/item">
                <div className="w-2 h-2 rounded-full bg-zinc-600 mt-2 shrink-0 transition-colors group-hover/item:bg-indigo-400 group-hover/item:shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                <div>
                  <p className="text-zinc-200 font-medium text-lg group-hover/item:text-indigo-300 transition-colors">Machine Learning Specialization</p>
                  <p className="text-zinc-400 text-sm mt-1">DeepLearning.AI</p>
                </div>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex gap-4 cursor-default group/item">
                <div className="w-2 h-2 rounded-full bg-zinc-600 mt-2 shrink-0 transition-colors group-hover/item:bg-indigo-400 group-hover/item:shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                <div>
                  <p className="text-zinc-200 font-medium text-lg group-hover/item:text-indigo-300 transition-colors">Databases and SQL for Data Science</p>
                  <p className="text-zinc-400 text-sm mt-1">IBM</p>
                </div>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex gap-4 cursor-default group/item">
                <div className="w-2 h-2 rounded-full bg-zinc-600 mt-2 shrink-0 transition-colors group-hover/item:bg-indigo-400 group-hover/item:shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                <div>
                  <p className="text-zinc-200 font-medium text-lg group-hover/item:text-indigo-300 transition-colors">Software Engineering</p>
                  <p className="text-zinc-400 text-sm mt-1">NPTEL</p>
                </div>
              </motion.li>
            </ul>
          </div>
        </BentoCard>
      </div>
    </div>
  );
}
