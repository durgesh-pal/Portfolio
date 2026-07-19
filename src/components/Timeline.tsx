import { motion } from "motion/react";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { EXPERIENCE, EDUCATION } from "../data";

export default function Timeline() {
  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto z-10 font-sans" id="journey">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20"
        >
          TIMELINE
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4"
        >
          Education & Experience
        </motion.h2>
        <div className="h-1 w-12 bg-emerald-500 rounded-full mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column: Professional Experience */}
        <div>
          <div className="flex items-center gap-3.5 mb-10 pl-2">
            <div className="h-11 w-11 rounded-2xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center border border-indigo-500/10">
              <Briefcase size={20} />
            </div>
            <h3 className="text-2xl font-bold font-display text-white">Work Experience</h3>
          </div>

          <div className="relative border-l border-slate-800/80 ml-6 space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                key={exp.role}
                className="relative pl-8 group"
              >
                {/* Timeline Pin Indicator */}
                <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center group-hover:bg-indigo-500 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-300 group-hover:bg-white" />
                </div>

                {/* Card Container */}
                <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm group-hover:border-slate-700/65 transition-colors duration-300">
                  {/* Meta Details */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-medium text-indigo-400 flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.duration}
                    </span>
                    <span className="text-xs font-mono tracking-wide text-slate-500 uppercase font-semibold">
                      {exp.company}
                    </span>
                  </div>

                  {/* Heading */}
                  <h4 className="text-lg font-bold text-slate-100 font-display mb-4">
                    {exp.role}
                  </h4>

                  {/* Accomplishment Bullet Items */}
                  <ul className="space-y-2.5">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed font-light">
                        <CheckCircle2 size={14} className="text-sky-400 mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Education */}
        <div>
          <div className="flex items-center gap-3.5 mb-10 pl-2">
            <div className="h-11 w-11 rounded-2xl bg-sky-500/15 text-sky-400 flex items-center justify-center border border-sky-500/10">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-2xl font-bold font-display text-white">Education History</h3>
          </div>

          <div className="relative border-l border-slate-800/80 ml-6 space-y-12">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                key={edu.degree}
                className="relative pl-8 group"
              >
                {/* Timeline Pin Indicator */}
                <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-slate-950 border-2 border-sky-500 flex items-center justify-center group-hover:bg-sky-500 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-sky-300 group-hover:bg-white" />
                </div>

                {/* Card Container */}
                <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm group-hover:border-slate-700/65 transition-colors duration-300">
                  {/* Meta Details */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-medium text-sky-400 flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.duration}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">
                      {edu.grade}
                    </span>
                  </div>

                  {/* Heading */}
                  <h4 className="text-lg font-bold text-slate-100 font-display">
                    {edu.degree}
                  </h4>

                  <span className="text-sm text-slate-400 font-mono mt-1 block">
                    {edu.institution}
                  </span>

                  <span className="text-xs text-slate-500 flex items-center gap-1.5 mt-4">
                    <MapPin size={12} />
                    {edu.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
