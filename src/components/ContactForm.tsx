import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle, Mail, Phone, MapPin, MessageSquare, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Dispatch global event to let AIChatbot know a contact form was submitted
      const event = new CustomEvent("contact-submitted", {
        detail: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });
      window.dispatchEvent(event);

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto z-10 font-sans" id="contact">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-indigo-400 bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20"
        >
          CONNECT
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4"
        >
          Get In Touch
        </motion.h2>
        <div className="h-1 w-12 bg-indigo-500 rounded-full mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Info Sidebar (Spans 5 columns on desktop) */}
        <div className="lg:col-span-5 space-y-8 lg:pr-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display text-white">Let's talk about your next big project</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Main hamesha collaborate karne aur custom web development challenges ko solve karne ke liye available hoon. Chaahe aapko complete full stack react application banani ho ya simple elegant UI/UX design. Let's make something amazing together!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 flex items-center justify-center flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold block">Email me directly</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-200 text-sm sm:text-base hover:text-indigo-400 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold block">Call or WhatsApp</span>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-200 text-sm sm:text-base hover:text-sky-400 transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-slate-900 border border-slate-800 text-rose-400 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold block">Operating from</span>
                <span className="text-slate-200 text-sm sm:text-base">{PERSONAL_INFO.city}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container (Spans 7 columns on desktop) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 font-semibold uppercase">YOUR NAME</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Durgesh Pal"
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-850 focus:border-indigo-500 rounded-xl focus:outline-none text-sm text-slate-200 placeholder-slate-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 font-semibold uppercase">YOUR EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-850 focus:border-indigo-500 rounded-xl focus:outline-none text-sm text-slate-200 placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 font-semibold uppercase">SUBJECT (OPTIONAL)</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Freelance Project Inquiry"
                    className="w-full px-4 py-3 bg-slate-950/80 border border-slate-850 focus:border-indigo-500 rounded-xl focus:outline-none text-sm text-slate-200 placeholder-slate-600 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 font-semibold uppercase">YOUR MESSAGE</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your design parameters or code challenge..."
                    className="w-full px-4 py-3 bg-slate-950/80 border border-slate-850 focus:border-indigo-500 rounded-xl focus:outline-none text-sm text-slate-200 placeholder-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 hover:opacity-95 text-white font-semibold shadow-lg shadow-indigo-500/15 transition-all scale-100 hover:scale-[1.01] cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Transmitting message..."
                  ) : (
                    <>
                      Transmit Message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle size={32} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold font-display text-white">Message Transmitted!</h4>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed font-light">
                    Thank you! Your message has been safely received. I have also passed this to my AI Portfolio Assistant.
                  </p>
                </div>

                {/* Awesome connector call to action */}
                <div className="pt-4 max-w-sm mx-auto">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-950 border border-slate-850 hover:border-slate-700 text-slate-300 hover:text-white font-semibold transition-all cursor-pointer"
                  >
                    <MessageSquare size={14} className="text-indigo-400" />
                    Open AI Chat Assistant
                    <Sparkles size={11} className="text-amber-400 animate-pulse" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
