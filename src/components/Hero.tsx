import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Github, Linkedin, Twitter, Terminal, ArrowDown } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates around the center of the screen (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden py-24 select-none font-sans"
      id="home"
    >
      {/* Decorative Aurora Glow Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none transition-transform duration-300"
        style={{
          transform: `translate(${coords.x * -30}px, ${coords.y * -30}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none transition-transform duration-300"
        style={{
          transform: `translate(${coords.x * 40}px, ${coords.y * 40}px)`,
        }}
      />

      {/* Floating 3D Parallax Badges */}
      <div className="absolute inset-0 w-full h-full pointer-events-none max-w-7xl mx-auto z-10">
        {/* Fullstack Badge */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          style={{
            transform: `translate3d(${coords.x * 40}px, ${coords.y * 40}px, 0)`,
          }}
          className="absolute top-[18%] left-[8%] md:left-[15%] hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/85 border border-slate-800/80 shadow-xl backdrop-blur-md"
        >
          <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-xs font-mono font-medium text-slate-300">Full Stack JS/TS</span>
        </motion.div>

        {/* AI Enthusiast Badge */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
          style={{
            transform: `translate3d(${coords.x * -35}px, ${coords.y * -35}px, 0)`,
          }}
          className="absolute bottom-[28%] left-[5%] md:left-[12%] hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-900/85 border border-slate-800/80 shadow-xl backdrop-blur-md"
        >
          <Sparkles size={14} className="text-sky-400 animate-spin" style={{ animationDuration: '4s' }} />
          <span className="text-xs font-mono font-medium text-slate-300">AI Integration</span>
        </motion.div>

        {/* Cloud Native Badge */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
          style={{
            transform: `translate3d(${coords.x * 50}px, ${coords.y * -25}px, 0)`,
          }}
          className="absolute top-[22%] right-[8%] md:right-[15%] hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/85 border border-slate-800/80 shadow-xl backdrop-blur-md"
        >
          <Terminal size={14} className="text-rose-400" />
          <span className="text-xs font-mono font-medium text-slate-300">Docker & AWS Certified</span>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-4xl mx-auto text-center z-20 flex flex-col items-center">
        {/* Intro Chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800/60 shadow-inner mb-6 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-amber-400 animate-pulse" />
          <span className="text-xs font-mono font-medium tracking-wide bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-transparent">
            Welcome to my Digital Space
          </span>
        </motion.div>

        {/* Main Heading with Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-none text-white">
            <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <div className="h-1.5 w-24 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 rounded-full mx-auto my-4 shadow-lg shadow-indigo-500/20" />

          <h2 className="text-lg sm:text-2xl font-mono font-semibold tracking-tight text-indigo-400">
            {PERSONAL_INFO.title}
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-400 text-sm sm:text-lg max-w-2xl mt-6 font-sans leading-relaxed px-2"
        >
          "{PERSONAL_INFO.tagline}"
        </motion.p>

        {/* Buttons / Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-10 w-full max-w-sm sm:max-w-none"
        >
          {/* Main call to action */}
          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 hover:opacity-95 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all duration-300 scale-100 hover:scale-[1.03] cursor-pointer"
          >
            Explore Portfolio
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>

          {/* Social Links buttons */}
          <div className="flex gap-3 justify-center">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850 hover:border-slate-700 transition-all duration-300 hover:scale-105"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850 hover:border-slate-700 transition-all duration-300 hover:scale-105"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850 hover:border-slate-700 transition-all duration-300 hover:scale-105"
              title="Twitter / X"
            >
              <Twitter size={20} />
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="absolute bottom-6 flex flex-col items-center gap-1 cursor-pointer"
          onClick={scrollToAbout}
        >
          <span className="text-[10px] font-mono tracking-widest text-slate-500">SCROLL DOWN</span>
          <ArrowDown size={14} className="text-slate-500" />
        </motion.div>
      </div>
    </section>
  );
}
