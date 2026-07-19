import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini safely to prevent startup crashes if key is missing
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      console.warn("GEMINI_API_KEY is missing or is the default placeholder. AI Chatbot will run in local fallback mode.");
      return null;
    }
    try {
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    } catch (e) {
      console.error("Failed to initialize GoogleGenAI client:", e);
      return null;
    }
  }
  return aiClient;
}

// Durgesh's prompt context
const DURGESH_SYSTEM_INSTRUCTION = `
You are Durgesh Pal's personal AI Portfolio Assistant. Your job is to interact with visitors on Durgesh's professional portfolio website and answer questions on his behalf.

Durgesh Pal's Professional Profile:
- Name: Durgesh Pal
- Age: 21
- City: Jaunpur, Uttar Pradesh, India
- Role: Full Stack Developer | UI/UX Designer | AI Enthusiast
- Tagline: "I build modern, fast, and user-friendly digital experiences that solve real-world problems."
- About: Durgesh is a passionate Full Stack Developer with over 4 years of study/journey in designing and developing web applications. He enjoys turning complex problems into simple, beautiful, and intuitive solutions. He specializes in creating responsive websites, scalable web applications, and AI-powered solutions using modern technologies. He believes in continuous learning and loves contributing to open-source projects.
- Freelance Status: Available for freelance projects!
- Languages: English, Hindi, and Hinglish.

Education:
- B.Tech in Computer Science and Engineering from Abdul Kalam Technical University (AKTU), Lucknow, UP, India (2024 – 2028).
- Current CGPA: 8.4/10

Technical Skills:
- Frontend: HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Bootstrap.
- Backend: Node.js, Express.js, Python, Django.
- Database: MongoDB, MySQL, PostgreSQL, Firebase.
- Tools: Git, GitHub, Docker, Figma, VS Code, Postman.
- Cloud Platforms: AWS (Amazon Web Services), Vercel, Netlify.

Experience:
1. Full Stack Developer (Freelance & Open Source, 2024 - Present):
   - Developed scalable web applications.
   - Improved website performance by 45%.
   - Integrated AI chatbot features.
   - Worked extensively with REST APIs.
   - Managed deployment using Docker and AWS.
2. Frontend Developer Intern at CodeCraft Technologies (Jan 2026 – June 2026):
   - Built responsive dashboards.
   - Collaborated closely with UI/UX designers on Figma.
   - Optimized loading speeds by 30%.
   - Fixed accessibility and cross-browser display issues.

Featured Projects:
1. AI Resume Builder: An AI-based platform that generates ATS-friendly resumes within minutes. Tech: React, Node.js, MongoDB, OpenAI API.
2. Smart Notes App: A note-taking application with AI summarization and cloud sync. Tech: Next.js, Firebase, Tailwind CSS.
3. E-Commerce Website: A complete shopping platform with payment gateway integration. Tech: React, Express.js, MongoDB, Razorpay.
4. Portfolio Website: A modern animated portfolio with an integrated Gemini AI chatbot assistant and custom mouse-tracked 3D transforms. Tech: Vite, React.js, Tailwind CSS, Gemini API.

Achievements:
- Google Developer Student Club (GDSC) Member.
- Active Hackathon participant (Hackathon Involve 2026).
- Solve problems on LeetCode.
- Completed 20+ projects.
- AWS Cloud Practitioner Certified.
- Microsoft Azure Fundamentals Certified.

Services Offered:
- Website Development, Portfolio Design, Landing Page Development, React Applications, Backend API Development, UI/UX Design, AI Integration, and Website Maintenance.

Interests:
- Artificial Intelligence, Web Development, Open Source, Reading Tech Blogs, Traveling.

Contact Details:
- Email: dharmendradharmendrapal640@gmail.com
- Phone: +91 9839078740
- Location: UP, India
- LinkedIn: https://www.linkedin.com/in/durgesh-pal-0a6209379?utm_source=
- GitHub: https://github.com/durgesh-pal
- Twitter/X: @Lalla389140

Guidelines for your behavior:
1. Be warm, welcoming, professional, and confident.
2. Use a mix of Hindi and English (Hinglish) by default as the visitor might appreciate a friendly Indian touch, but adjust to their language choice (if they speak pure English, respond in English; if pure Hindi, respond in Hindi).
3. Be succinct! Keep responses relatively short (max 2-3 paragraphs or structured bullet points) so it is easy to read in a small chat window.
4. Do not make up facts. If someone asks a question about something not in his resume, reply politely that you don't have that information but they can contact Durgesh directly at dharmendradharmendrapal640@gmail.com or +91 9839078740.
5. If someone asks you to write code, provide brief snippets and mention that Durgesh can build custom solutions for them.
6. If someone submits a contact form, they might also talk to you. Welcome them and thank them for reaching out.
`;

// Helper for local mock responses if GEMINI_API_KEY is not configured
function getFallbackResponse(prompt: string): string {
  const p = prompt.toLowerCase();
  if (p.includes("hello") || p.includes("hi") || p.includes("hey") || p.includes("namaste")) {
    return "Hello! main Durgesh Pal ka AI Assistant hoon. Aur bataiye, aap unke portfolio ke baare mein kya janna chahte hain? Main unke skills, projects, education aur contact details ke baare mein sab kuch janta hoon! 😊";
  }
  if (p.includes("skill") || p.includes("technolog") || p.includes("language")) {
    return "Durgesh ke paas Frontend, Backend, Database, Cloud aur Development Tools ka achha experience hai:\n- **Frontend**: React.js, Next.js, Tailwind CSS, TypeScript, HTML5/CSS3\n- **Backend**: Node.js, Express.js, Django, Python\n- **Database**: MongoDB, PostgreSQL, MySQL, Firebase\n- **Cloud & Tools**: AWS, Docker, Figma, Git, Vercel\n\nAap kisi specific skill ke baare mein detail mein janna chahte hain?";
  }
  if (p.includes("project") || p.includes("work") || p.includes("portfolio")) {
    return "Durgesh ne kai exciting projects banaye hain. Kuch featured projects ye hain:\n1. **AI Resume Builder** (React, Node.js, MongoDB, AI API)\n2. **Smart Notes App** (Next.js, Firebase, Tailwind CSS)\n3. **E-Commerce Website** (React, Express, MongoDB, Razorpay)\n4. **Personal Portfolio** (Vite, React, Tailwind, Gemini AI)\n\nInme se kis project ke baare mein aap aur janna chahte hain?";
  }
  if (p.includes("contact") || p.includes("email") || p.includes("phone") || p.includes("hire") || p.includes("call")) {
    return "Aap Durgesh se direct contact kar sakte hain:\n- **Email**: dharmendradharmendrapal640@gmail.com\n- **Phone**: +91 9839078740\n- **GitHub**: github.com/durgesh-pal\n- **LinkedIn**: linkedin.com/in/durgesh-pal-0a6209379\n\nWoh freelance opportunities aur exciting collaborations ke liye available hain!";
  }
  if (p.includes("education") || p.includes("btech") || p.includes("college") || p.includes("aktu")) {
    return "Durgesh abhi **B.Tech in Computer Science and Engineering** kar rahe hain **Abdul Kalam Technical University (AKTU), Lucknow** se (Batch: 2024 - 2028). Unka current CGPA **8.4/10** hai. Woh padhai ke sath-sath active open-source contribution aur real-world development bhi karte hain.";
  }
  if (p.includes("experience") || p.includes("intern")) {
    return "Durgesh ka professional experience:\n- **Full Stack Developer (Freelance, 2024 - Present)**: Scalable web applications deploy kiye, website performance ko 45% improve kiya aur Docker + AWS manage kiya.\n- **Frontend Developer Intern @ CodeCraft Technologies (Jan 2026 - June 2026)**: Web dashboards design aur optimize kiye, cross-browser issues fix kiye aur load speeds ko 30% badhaya.";
  }
  return "Durgesh's AI Assistant: Main aapka sawal samajh gaya. Durgesh ke full stack development, smart AI resume builder, ya unke educational details ke baare mein aur janne ke liye aap mujhse pooch sakte hain. Direct connect karne ke liye aap dharmendradharmendrapal640@gmail.com par email bhi bhej sakte hain!";
}

// API endpoint for Chat
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages array." });
  }

  // Get the last user message
  const userMessages = messages.filter(m => m.sender === "user");
  const lastUserText = userMessages.length > 0 ? userMessages[userMessages.length - 1].text : "";

  const client = getGeminiClient();
  if (!client) {
    // Return fallback mock response if no key
    const replyText = getFallbackResponse(lastUserText);
    return res.json({ reply: replyText });
  }

  try {
    // Map client messages to Gemini content format (roles must be 'user' or 'model')
    // Let's take the last 10 messages to keep the token size reasonable
    const conversationHistory = messages.slice(-10).map((m) => ({
      role: m.sender === "user" ? "user" : "model",
      parts: [{ text: m.text }]
    }));

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: conversationHistory,
      config: {
        systemInstruction: DURGESH_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    res.json({ reply: response.text || "I'm not sure how to answer that. Let me know if there's anything else about Durgesh's profile I can help with!" });
  } catch (error: any) {
    console.error("Gemini API Error in chat endpoint:", error);
    const fallbackText = getFallbackResponse(lastUserText);
    res.json({
      reply: fallbackText,
      warning: "Ran in fallback mode due to a technical error."
    });
  }
});

// Start the server after configuring static/Vite paths
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Vite Dev Server middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve production static files
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running on http://localhost:${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

startServer();
