import { motion } from "motion/react";
import { User, MapPin, Mail, Phone, Globe, Award, Sparkles, Heart, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO, STATS, ACHIEVEMENTS, INTERESTS } from "../data";

export default function BentoAbout() {
  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto z-10 font-sans" id="about">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-indigo-400 bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20"
        >
          GET TO KNOW ME
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4"
        >
          About Me & Overview
        </motion.h2>
        <div className="h-1 w-12 bg-indigo-500 rounded-full mx-auto mt-4" />
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Bio (Large - Spans 2 cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 rounded-3xl bg-slate-900/50 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between hover:border-slate-700/65 transition-colors duration-300"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-2xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
                <User size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-100 font-display">My Journey</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line font-light">
              {PERSONAL_INFO.about}
            </p>
          </div>

          {/* Quick statement on bottom */}
          <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-emerald-400 font-medium">Currently seeking exciting engineering projects</span>
          </div>
        </motion.div>

        {/* Card 2: Quick Stats (Vertical Card - Spans 1 col) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900/50 to-indigo-950/20 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between hover:border-slate-700/65 transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-2xl bg-sky-500/15 text-sky-400 flex items-center justify-center">
              <Sparkles size={18} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 font-display">Performance</h3>
          </div>

          <div className="grid grid-cols-2 gap-4 my-auto">
            {STATS.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/50 flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-display font-extrabold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-sans text-slate-400 font-medium mt-1 uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 3: Personal Information Details (Spans 1 col) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-3xl bg-slate-900/50 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md hover:border-slate-700/65 transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-2xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
              <Globe size={18} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 font-display">Details</h3>
          </div>

          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm">
              <MapPin size={16} className="text-sky-400 flex-shrink-0" />
              <div>
                <span className="text-slate-500 text-xs block font-mono">LOCATION</span>
                <span className="text-slate-200">{PERSONAL_INFO.city}</span>
              </div>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Mail size={16} className="text-indigo-400 flex-shrink-0" />
              <div>
                <span className="text-slate-500 text-xs block font-mono">EMAIL</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-200 hover:text-sky-400 transition-colors break-all">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Phone size={16} className="text-emerald-400 flex-shrink-0" />
              <div>
                <span className="text-slate-500 text-xs block font-mono">PHONE</span>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-200 hover:text-emerald-300 transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Award size={16} className="text-rose-400 flex-shrink-0" />
              <div>
                <span className="text-slate-500 text-xs block font-mono">FREELANCE STATUS</span>
                <span className="text-emerald-400 font-medium">{PERSONAL_INFO.freelance}</span>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Card 4: Achievements & Certifications (Spans 1 col) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl bg-slate-900/50 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md hover:border-slate-700/65 transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-2xl bg-rose-500/15 text-rose-400 flex items-center justify-center">
              <Award size={18} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 font-display">Credentials</h3>
          </div>

          <div className="space-y-3.5">
            {ACHIEVEMENTS.map((ach, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-slate-300 leading-relaxed font-light">{ach}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 5: Personal Interests (Spans 1 col) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="rounded-3xl bg-slate-900/50 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md hover:border-slate-700/65 transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-2xl bg-teal-500/15 text-teal-400 flex items-center justify-center">
              <Heart size={18} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 font-display">Interests</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {INTERESTS.map((interest, idx) => (
              <span
                key={idx}
                className="text-xs font-mono font-medium tracking-wide bg-slate-800/70 text-slate-300 px-3 py-1.5 rounded-xl border border-slate-750"
              >
                {interest}
              </span>
            ))}
          </div>

          {/* Clean illustration mockup inside grid */}
          <div className="mt-8 p-3.5 rounded-2xl bg-indigo-950/20 border border-indigo-900/20 flex items-center gap-3">
            <Sparkles size={14} className="text-indigo-400 animate-spin" />
            <span className="text-[11px] text-slate-400 leading-tight">Always exploring modern tech stacks and AI integrations.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
