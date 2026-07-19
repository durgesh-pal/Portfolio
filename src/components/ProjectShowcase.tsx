import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Sparkles, X, ArrowRight, Code } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto z-10 font-sans" id="projects">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-rose-400 bg-rose-500/10 px-3.5 py-1.5 rounded-full border border-rose-500/20"
        >
          CREATIONS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4"
        >
          Featured Showcases
        </motion.h2>
        <div className="h-1 w-12 bg-rose-500 rounded-full mx-auto mt-4" />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative h-[360px] rounded-3xl overflow-hidden bg-slate-950 border border-slate-850 cursor-pointer shadow-xl flex flex-col justify-end p-6 sm:p-8"
          >
            {/* Visual Theme Backdrop Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-tr ${project.imageTheme} opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-0`} />

            {/* Aesthetic Tech Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />

            {/* Glowing Accent Spot */}
            <div className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
              <Code size={18} />
            </div>

            {/* Project Copy Details */}
            <div className="relative z-10 space-y-4">
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono bg-slate-900/90 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight flex items-center gap-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                  <Sparkles size={16} className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Read More Indicator */}
              <div className="pt-2 flex items-center gap-1 text-xs font-mono font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">
                VIEW SPECIFICATIONS
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Immersive Specifications Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 font-sans"
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Gradient */}
              <div className={`h-32 bg-gradient-to-r ${selectedProject.imageTheme} relative flex items-end p-6 sm:p-8`}>
                <div className="absolute inset-0 bg-black/30" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-slate-950/40 hover:bg-slate-950/65 text-slate-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer z-20"
                >
                  <X size={18} />
                </button>
                <h3 className="relative text-2xl sm:text-3xl font-extrabold font-display text-white z-10 tracking-tight leading-none">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Content Panel */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-indigo-400 tracking-widest font-semibold block uppercase">
                    PROJECT OVERVIEW
                  </span>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-sky-400 tracking-widest font-semibold block uppercase">
                    TECHNICAL SPECIFICATIONS
                  </span>
                  <ul className="space-y-3">
                    {selectedProject.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed font-light">
                        <div className="h-5 w-5 rounded-lg bg-emerald-500/10 border border-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                          <Sparkles size={11} className="animate-pulse" />
                        </div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-slate-500 tracking-widest font-semibold block uppercase">
                    DEPLOYED STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono font-medium tracking-wide bg-slate-800 text-slate-300 px-3.5 py-1.5 rounded-xl border border-slate-750"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="pt-6 border-t border-slate-800 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-mono font-semibold text-slate-400 hover:text-white hover:bg-slate-850 transition-all cursor-pointer"
                  >
                    Close Specifications
                  </button>
                  <a
                    href="https://github.com/durgesh-pal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-mono font-semibold text-slate-300 hover:text-white transition-all hover:scale-[1.02]"
                  >
                    <Github size={14} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
