import { motion } from "motion/react";
import { Globe, Palette, Compass, Zap, Terminal, Layers, Bot, Settings, CheckCircle } from "lucide-react";
import { SERVICES } from "../data";

// Helper to resolve services to matching Lucide icons
const getServiceIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("website development")) return <Globe size={20} className="text-sky-400" />;
  if (n.includes("portfolio design")) return <Layers size={20} className="text-indigo-400" />;
  if (n.includes("landing page")) return <Compass size={20} className="text-rose-400" />;
  if (n.includes("react")) return <Zap size={20} className="text-amber-400 animate-pulse" />;
  if (n.includes("backend")) return <Terminal size={20} className="text-emerald-400" />;
  if (n.includes("ui/ux")) return <Palette size={20} className="text-fuchsia-400" />;
  if (n.includes("ai integration")) return <Bot size={20} className="text-purple-400 animate-bounce" style={{ animationDuration: '3s' }} />;
  return <Settings size={20} className="text-slate-400" />;
};

export default function ServicesGrid() {
  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto z-10 font-sans" id="services">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-indigo-400 bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20"
        >
          OFFERINGS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4"
        >
          Services I Provide
        </motion.h2>
        <div className="h-1 w-12 bg-indigo-500 rounded-full mx-auto mt-4" />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            whileHover={{ y: -6, borderColor: "rgba(129, 140, 248, 0.4)" }}
            key={service.name}
            className="group relative p-6 rounded-2xl bg-slate-900/45 border border-slate-800/80 backdrop-blur-sm flex flex-col justify-between hover:bg-slate-850/40 transition-colors cursor-default"
          >
            {/* Header / Icon */}
            <div>
              <div className="h-11 w-11 rounded-xl bg-slate-800/80 border border-slate-750 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {getServiceIcon(service.name)}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-100 font-display mb-2 group-hover:text-indigo-300 transition-colors">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </div>

            {/* Checkmark stamp indicator */}
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-[10px] font-mono text-indigo-400 font-medium tracking-wide">
              <CheckCircle size={10} className="text-emerald-500" />
              AVAILABLE NOW
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
