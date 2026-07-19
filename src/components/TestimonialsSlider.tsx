import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function TestimonialsSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="relative py-24 px-4 max-w-4xl mx-auto z-10 font-sans" id="testimonials">
      {/* Decorative quotes background */}
      <div className="absolute top-10 left-10 text-indigo-500/5 select-none pointer-events-none hidden sm:block">
        <Quote size={180} style={{ transform: 'scaleX(-1)' }} />
      </div>

      <div className="relative text-center">
        <Quote size={40} className="text-indigo-500 mx-auto opacity-80" />

        {/* Dynamic Slideshow */}
        <div className="h-[200px] sm:h-[160px] flex items-center justify-center mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="space-y-6"
            >
              <p className="text-base sm:text-xl font-light text-slate-200 leading-relaxed max-w-2xl mx-auto italic font-sans">
                "{TESTIMONIALS[currentIdx].feedback}"
              </p>

              <div>
                <h4 className="text-sm font-bold text-slate-100 font-display uppercase tracking-wide">
                  {TESTIMONIALS[currentIdx].name}
                </h4>
                <span className="text-xs font-mono text-slate-500 mt-1 block">
                  {TESTIMONIALS[currentIdx].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controllers */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-850 flex items-center justify-center transition-all cursor-pointer hover:scale-105"
            title="Previous Testimonial"
          >
            <ArrowLeft size={16} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIdx === idx ? "w-6 bg-indigo-500" : "w-2 bg-slate-800 hover:bg-slate-700"
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-850 flex items-center justify-center transition-all cursor-pointer hover:scale-105"
            title="Next Testimonial"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
