import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Loader2, Sparkles, User, HelpCircle } from "lucide-react";
import { ChatMessage } from "../types";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Namaste! 🙏 Main Durgesh Pal ka AI Portfolio Assistant hoon. Aap unke skills, projects, certifications, ya contact information ke baare mein kuch bhi pooch sakte hain! How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on message updates
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Listen to contact form submissions to trigger custom welcome flow
  useEffect(() => {
    const handleContactSubmit = (e: Event) => {
      const customEvent = e as CustomEvent<{ name: string; email: string; message: string }>;
      const { name, email, message } = customEvent.detail;
      setIsOpen(true);
      setHasNewMessage(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(7),
          sender: "user",
          text: `Contact form submitted. Name: ${name}, Email: ${email}. Message: "${message}"`,
          timestamp: new Date(),
        },
        {
          id: Math.random().toString(36).substring(7),
          sender: "bot",
          text: `Aapka bahut-bahut dhanyawad **${name}**! 🙏 Main ne aapka message receive kar liya hai:\n\n"${message}"\n\nDurgesh Pal jald hi aap se **${email}** par contact karenge. Tab tak agar aap ke paas unke projects ya experience ke baare mein koi aur sawal hai, toh aap mujhse pooch sakte hain!`,
          timestamp: new Date(),
        },
      ]);
    };

    window.addEventListener("contact-submitted", handleContactSubmit);
    return () => window.removeEventListener("contact-submitted", handleContactSubmit);
  }, []);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Math.random().toString(36).substring(7),
      sender: "user",
      text: inputText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            sender: m.sender,
            text: m.text,
          })),
        }),
      });

      const data = await response.json();
      const botMessage: ChatMessage = {
        id: Math.random().toString(36).substring(7),
        sender: "bot",
        text: data.reply || "Aapke is query par mujhe abhi thodi kam jankari hai, but aap Durgesh ko dharmendradharmendrapal640@gmail.com par direct contact kar sakte hain!",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error communicating with AI server:", error);
      const errorMessage: ChatMessage = {
        id: Math.random().toString(36).substring(7),
        sender: "bot",
        text: "Oops! Technical difficulty. Par aap Durgesh se contact karne ke liye dharmendradharmendrapal640@gmail.com par email drop kar sakte hain!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const parseMarkdown = (text: string) => {
    // Simple inline parser for bold and lists
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      // Check for bullet points
      if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
        const content = line.trim().substring(2);
        return (
          <li key={idx} className="ml-4 list-disc text-sm text-slate-300 mb-1 leading-relaxed">
            {renderBoldText(content)}
          </li>
        );
      }
      return (
        <p key={idx} className="text-sm text-slate-200 mb-2 leading-relaxed">
          {renderBoldText(line)}
        </p>
      );
    });
  };

  const renderBoldText = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i} className="font-semibold text-sky-400">{part}</strong>;
      }
      return part;
    });
  };

  const handleSuggestionClick = (query: string) => {
    setInputText(query);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setHasNewMessage(false);
  };

  // Trigger notification ping after a delay if chat is closed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setHasNewMessage(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const suggestions = [
    "Tell me about Durgesh Pal",
    "What are his top skills?",
    "Show featured projects",
    "How can I hire him?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="ai-chatbot">
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/20 focus:outline-none cursor-pointer"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {hasNewMessage && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 text-[10px] items-center justify-center text-white font-bold">1</span>
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-[360px] sm:w-[400px] h-[520px] rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-slate-900 to-indigo-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600/30 text-sky-400">
                  <Sparkles size={18} className="animate-pulse" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border border-slate-900"></span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">Durgesh's AI Assistant</h3>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                    Online • powered by Gemini
                  </span>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div className={`flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center text-xs font-semibold ${msg.sender === "user" ? "bg-sky-500/15 text-sky-300 border border-sky-500/20" : "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20"}`}>
                    {msg.sender === "user" ? <User size={13} /> : <Sparkles size={13} />}
                  </div>

                  {/* Message Bubble */}
                  <div className="flex flex-col max-w-[80%]">
                    <div
                      className={`px-3.5 py-2.5 rounded-2xl text-sm ${
                        msg.sender === "user"
                          ? "bg-gradient-to-br from-indigo-600 to-blue-600 text-slate-50 rounded-tr-none"
                          : "bg-slate-800/80 text-slate-200 rounded-tl-none border border-slate-700/50"
                      }`}
                    >
                      {msg.sender === "user" ? (
                        <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                      ) : (
                        <div className="space-y-1">
                          {parseMarkdown(msg.text)}
                        </div>
                      )}
                    </div>
                    <span className={`text-[10px] text-slate-500 mt-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2.5 items-center">
                  <div className="flex-shrink-0 h-7 w-7 rounded-full bg-indigo-500/15 flex items-center justify-center text-indigo-300">
                    <Loader2 size={13} className="animate-spin" />
                  </div>
                  <div className="bg-slate-800/60 border border-slate-700/30 px-3.5 py-2.5 rounded-2xl rounded-tl-none text-slate-400 text-xs flex items-center gap-1">
                    Thinking of a response...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions (Shown when input is empty and not loading) */}
            {inputText === "" && !isLoading && (
              <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/50 flex flex-wrap gap-1.5 justify-start">
                {suggestions.map((sug, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestionClick(sug)}
                    className="text-[11px] font-medium px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg border border-slate-700/40 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <HelpCircle size={10} />
                    {sug}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask Durgesh's AI..."
                className="flex-1 bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:outline-none rounded-xl px-3.5 py-2 text-sm text-slate-100 placeholder-slate-500"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow hover:opacity-90 disabled:opacity-50 transition-all cursor-pointer flex-shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
