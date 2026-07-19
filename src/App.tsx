import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Code } from "lucide-react";
import InteractiveCanvas from "./components/InteractiveCanvas";
import Hero from "./components/Hero";
import BentoAbout from "./components/BentoAbout";
import SkillsGrid from "./components/SkillsGrid";
import Timeline from "./components/Timeline";
import ProjectShowcase from "./components/ProjectShowcase";
import ServicesGrid from "./components/ServicesGrid";
import TestimonialsSlider from "./components/TestimonialsSlider";
import ContactForm from "./components/ContactForm";
import AIChatbot from "./components/AIChatbot";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden font-sans relative">
      {/* Interactive Background Particle Canvas */}
      <InteractiveCanvas />

      {/* Navigation Header */}
      <nav
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-900/60 py-4 shadow-lg shadow-black/10"
            : "bg-transparent py-6"
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#home" className="flex items-center gap-2 group cursor-pointer select-none">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform shadow-lg shadow-indigo-500/10">
              <Code size={18} />
            </div>
            <span className="text-base font-extrabold font-display tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              Durgesh Pal
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-mono font-medium text-slate-400 hover:text-white px-4 py-2 rounded-xl hover:bg-slate-900/40 transition-all"
              >
                {item.label.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900/50 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu pane */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full inset-x-0 bg-slate-950/95 backdrop-blur-lg border-b border-slate-900/80 shadow-2xl py-6 px-6 space-y-3 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono font-bold text-slate-400 hover:text-white py-2"
              >
                {item.label.toUpperCase()}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Main Sections Wrapper */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Bento About Section */}
        <BentoAbout />

        {/* Skills Catalog Grid Section */}
        <SkillsGrid />

        {/* Journey Timeline Section */}
        <Timeline />

        {/* Projects Grid Section */}
        <ProjectShowcase />

        {/* Services Grid Section */}
        <ServicesGrid />

        {/* Testimonials Slideshow Section */}
        <TestimonialsSlider />

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      {/* Floating Interactive AI Assistant Chatbot */}
      <AIChatbot />

      {/* Aesthetic Footer */}
      <footer className="relative border-t border-slate-900/80 bg-slate-950/90 py-12 px-6 z-10 text-center text-xs font-mono text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sparkles size={12} className="text-indigo-400" />
            <span className="text-slate-500 font-sans font-medium">Durgesh Pal © 2026</span>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/durgesh-pal" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              GITHUB
            </a>
            <a href="https://www.linkedin.com/in/durgesh-pal-0a6209379?utm_source=" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              LINKEDIN
            </a>
            <a href="https://twitter.com/Lalla389140" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              TWITTER
            </a>
          </div>

          <span className="text-[10px] text-slate-700">DESIGNED WITH AMBIENT 3D TRANSFORMS</span>
        </div>
      </footer>
    </div>
  );
}
