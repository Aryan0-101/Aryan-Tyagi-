import { BentoCard } from "./BentoGrid";
import { Code2, Github, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const projects = [
  {
    title: "Landmark and Scene Detector",
    type: "Personal Project",
    date: "Nov 2025 – Present",
    tech: ["CNN", "Vision Transformer", "Computer Vision"],
    color: "bg-emerald-500",
    hoverColor: "#10b981",
    points: [
      "An AI-powered system to classify Indian architectural landmarks from images.",
      "Manually Web-Scraped entire data of 9000+ images.",
      "Applied various Deep Learning techniques to classify the images."
    ],
    details: "Built a robust computer vision pipeline to identify Indian architectural landmarks. The core challenge was acquiring a diverse dataset, which I solved by building a custom web scraper to collect over 9,000 images. I experimented with both traditional CNNs and modern Vision Transformers (ViT) to compare feature extraction capabilities, ultimately achieving highly accurate classifications across diverse lighting and weather conditions."
  },
  {
    title: "Smart Traffic Automation System",
    type: "Academic Project",
    date: "Sep 2024 – Dec 2024",
    tech: ["Reinforcement Learning", "DQN", "Object Detection"],
    github: "https://github.com/MASTERJAYESH14/SMART-TRAFFIC-AUTOMATION",
    color: "bg-cyan-500",
    hoverColor: "#06b6d4",
    points: [
      "Working on a traffic automation system to optimize traffic light signal timings.",
      "Using Reinforcement Learning to predict the optimal traffic light durations.",
      "Reduced simulated vehicle wait times by 20% and alleviated congestion."
    ],
    details: "Developed an intelligent traffic management system using Deep Q-Networks (DQN). The system uses object detection to assess real-time traffic density at intersections and dynamically adjusts signal timings. By framing the traffic flow as a reinforcement learning problem, the agent learned to prioritize lanes with higher congestion, resulting in a 20% reduction in average wait times in simulation environments."
  },
  {
    title: "Music Genre Classification",
    type: "Academic Project",
    date: "Apr 2024 – May 2024",
    tech: ["CNN", "Mel Spectrogram", "React", "Next.js"],
    github: "https://github.com/harshitdhar9/Music_Genre_Classification",
    color: "bg-blue-500",
    hoverColor: "#3b82f6",
    points: [
      "Classify the genre of music by converting audio to spectrograms.",
      "Achieved 92% accuracy in classification using Convolutional Neural Networks.",
      "Similar music generation using Variational Autoencoders (VAE)."
    ],
    details: "Created a full-stack application that allows users to upload audio files and instantly receive genre classifications. The backend processes the audio into Mel Spectrograms, treating the audio classification as an image recognition problem using CNNs (achieving 92% accuracy). Additionally, implemented a Variational Autoencoder (VAE) to experiment with generating novel, similar-sounding audio segments based on the latent space of the input."
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 text-2xl font-semibold">
        <Code2 className="text-zinc-400" />
        <h2>Featured Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <BentoCard key={idx} delay={idx * 0.1} className="flex flex-col h-full cursor-pointer group" >
            <div className={`absolute top-0 right-0 w-[300px] h-[300px] ${project.color}/5 rounded-full blur-[80px] group-hover:${project.color}/10 transition-colors duration-700 -translate-y-1/2 translate-x-1/3 pointer-events-none`}></div>
            <div className="relative z-10 flex flex-col h-full" onClick={() => setSelectedProject(project)}>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">{project.title}</h3>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-zinc-400 hover:text-zinc-100 transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                  <p className="text-zinc-400 mt-1">{project.type}</p>
                </div>
                <span className="text-sm text-zinc-400 whitespace-nowrap bg-zinc-950/50 border border-white/5 px-3 py-1 rounded-full">{project.date}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span 
                    key={t} 
                    className="px-2.5 py-1 bg-zinc-950/50 border border-white/5 text-zinc-300 text-xs rounded-md transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-3 text-zinc-400 mt-auto mb-6">
                {project.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base">
                    <span className="text-zinc-600 mt-1.5">▪</span>
                    <span className="text-zinc-300">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
                View Project Details <ExternalLink size={16} className="ml-2" />
              </div>
            </div>
          </BentoCard>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="absolute inset-0 border-t border-white/10 rounded-3xl pointer-events-none mix-blend-overlay"></div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors bg-zinc-800/50 p-2 rounded-full z-10"
              >
                <X size={20} />
              </button>

              <div className="pr-12 relative z-10">
                <h3 className="text-3xl font-bold text-zinc-100 mb-2">{selectedProject.title}</h3>
                <p className="text-zinc-400 mb-6">{selectedProject.type} • {selectedProject.date}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-3 py-1.5 bg-zinc-950/50 border border-white/5 text-zinc-300 text-sm rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-200 mb-3">Project Overview</h4>
                    <p className="text-zinc-300 leading-relaxed">
                      {selectedProject.details}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-zinc-200 mb-3">Key Achievements</h4>
                    <ul className="space-y-3">
                      {selectedProject.points.map((point, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-emerald-500 mt-1">✓</span>
                          <span className="text-zinc-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProject.github && (
                    <div className="pt-6">
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 rounded-xl font-medium hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                      >
                        <Github size={20} />
                        View Source Code
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
