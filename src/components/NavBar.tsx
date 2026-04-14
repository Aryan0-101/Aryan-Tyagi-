import { motion } from "motion/react";
import { User, Briefcase, Code2, GraduationCap } from "lucide-react";

export function NavBar() {
  const links = [
    { name: "Skills", href: "#skills", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Code2 },
    { name: "Education", href: "#education", icon: GraduationCap },
  ];

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="absolute inset-0 border-t border-white/10 rounded-full pointer-events-none mix-blend-overlay"></div>
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="relative p-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-full transition-all duration-300 group" 
            title={link.name}
          >
            <link.icon size={20} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}
