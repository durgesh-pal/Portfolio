import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SKILLS } from "../data";

const CATEGORIES = ["All", "Frontend", "Backend", "Database", "Tools", "Cloud"] as const;

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[number]>("All");

  const filteredSkills = selectedCategory === "All"
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto z-10 font-sans" id="skills">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-sky-400 bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20"
        >
          ABILITIES
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4"
        >
          My Technical Arsenal
        </motion.h2>
        <div className="h-1 w-12 bg-sky-500 rounded-full mx-auto mt-4" />
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`relative px-4 py-2 text-xs sm:text-sm font-mono rounded-xl border transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-gradient-to-tr from-sky-500 to-indigo-600 text-white border-transparent shadow-lg shadow-sky-500/15"
                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, delay: idx * 0.02 }}
              whileHover={{ y: -4, borderColor: "rgba(147, 197, 253, 0.4)" }}
              key={skill.name}
              className="flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm cursor-default hover:bg-slate-850/50 transition-colors"
            >
              {/* Abstract Tech icon placeholders with styled letters */}
              <div className="h-10 w-10 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-300 font-mono text-sm font-bold shadow-inner mb-3 group-hover:scale-110 transition-transform">
                {skill.name.substring(0, 2).toUpperCase()}
              </div>

              <span className="text-sm font-semibold text-slate-200 text-center tracking-tight">
                {skill.name}
              </span>

              <span className="text-[10px] font-mono text-slate-500 mt-1 uppercase tracking-wider">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
