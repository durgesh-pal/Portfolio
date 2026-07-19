import { Skill, Project, Education, Experience, Testimonial, Stat } from "./types";

export const PERSONAL_INFO = {
  name: "Durgesh Pal",
  title: "Full Stack Developer | UI/UX Designer | AI Enthusiast",
  tagline: "I build modern, fast, and user-friendly digital experiences that solve real-world problems.",
  about: "Hello! I'm Durgesh Pal, a passionate Full Stack Developer from Uttar Pradesh, India, with over 4 years of year of study journey in designing and developing web applications. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.\n\nI specialize in creating responsive websites, scalable web applications, and AI-powered solutions using modern technologies. I believe in continuous learning and love contributing to open-source projects.",
  age: 21,
  city: "Jaunpur, Uttar Pradesh, India",
  email: "dharmendradharmendrapal640@gmail.com",
  phone: "+91 9839078740",
  website: "www.durgeshpal.dev", // Corrected placeholder/personal website
  languages: ["English", "Hindi"],
  freelance: "Available",
  github: "https://github.com/durgesh-pal",
  linkedin: "https://www.linkedin.com/in/durgesh-pal-0a6209379?utm_source=",
  twitter: "https://twitter.com/Lalla389140",
  location: "UP, India"
};

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Abdul Kalam Technical University",
    location: "Lucknow, UP, India",
    duration: "2024 – 2028",
    grade: "CGPA: 8.4/10"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Freelance & Open Source Projects",
    duration: "2024 - Present",
    details: [
      "Developed scalable web applications and turned complex specs into elegant UIs.",
      "Improved web application performance by up to 45% using code-splitting and asset optimization.",
      "Integrated smart AI chatbot and assistant features utilizing Large Language Models.",
      "Worked extensively with RESTful APIs, modern database schema designs, and server management.",
      "Managed deployment workflows using Docker, GitHub Actions, and AWS instances."
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "CodeCraft Technologies",
    duration: "Jan 2026 – June 2026",
    details: [
      "Built responsive, accessibility-compliant web dashboards with real-time analytics views.",
      "Collaborated closely with UI/UX designers to translate Figma design tokens into production code.",
      "Optimized load speeds by over 30% through advanced image lazy loading and component caching.",
      "Resolved critical cross-browser display issues and verified WCAG AA compliance."
    ]
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML5", category: "Frontend", iconName: "Html5" },
  { name: "CSS3", category: "Frontend", iconName: "Css3" },
  { name: "JavaScript", category: "Frontend", iconName: "Js" },
  { name: "TypeScript", category: "Frontend", iconName: "Ts" },
  { name: "React.js", category: "Frontend", iconName: "React" },
  { name: "Next.js", category: "Frontend", iconName: "Next" },
  { name: "Tailwind CSS", category: "Frontend", iconName: "Tailwind" },
  { name: "Bootstrap", category: "Frontend", iconName: "Bootstrap" },
  // Backend
  { name: "Node.js", category: "Backend", iconName: "Node" },
  { name: "Express.js", category: "Backend", iconName: "Express" },
  { name: "Python", category: "Backend", iconName: "Python" },
  { name: "Django", category: "Backend", iconName: "Django" },
  // Database
  { name: "MongoDB", category: "Database", iconName: "Mongo" },
  { name: "MySQL", category: "Database", iconName: "Mysql" },
  { name: "PostgreSQL", category: "Database", iconName: "Postgres" },
  { name: "Firebase", category: "Database", iconName: "Firebase" },
  // Tools
  { name: "Git", category: "Tools", iconName: "Git" },
  { name: "GitHub", category: "Tools", iconName: "Github" },
  { name: "Docker", category: "Tools", iconName: "Docker" },
  { name: "Figma", category: "Tools", iconName: "Figma" },
  { name: "VS Code", category: "Tools", iconName: "Vscode" },
  { name: "Postman", category: "Tools", iconName: "Postman" },
  // Cloud
  { name: "AWS", category: "Cloud", iconName: "Aws" },
  { name: "Vercel", category: "Cloud", iconName: "Vercel" },
  { name: "Netlify", category: "Cloud", iconName: "Netlify" }
];

export const PROJECTS: Project[] = [
  {
    id: "resume-builder",
    title: "AI Resume Builder",
    description: "An AI-based platform that generates ATS-friendly resumes within minutes.",
    techStack: ["React", "Node.js", "MongoDB", "OpenAI API"],
    imageTheme: "from-purple-600 via-indigo-600 to-blue-600",
    details: [
      "Generates ATS (Applicant Tracking System) optimized resumes on the fly.",
      "Adapts styling to various templates customized for different roles dynamically.",
      "Integrates natural language editing and professional content suggestion.",
      "Allows instantaneous PDF exports with custom margins and sizing."
    ]
  },
  {
    id: "smart-notes",
    title: "Smart Notes App",
    description: "A note-taking application with AI summarization and cloud sync.",
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    imageTheme: "from-emerald-500 via-teal-600 to-cyan-600",
    details: [
      "Leverages real-time sync with offline state backup via Firebase Firestore.",
      "AI Summarizer takes long markdown notes and extracts action items in seconds.",
      "Full tag search and categorization system with clean drag and drop organization.",
      "Robust modern markdown editor with direct live visual previews."
    ]
  },
  {
    id: "e-commerce",
    title: "E-Commerce Website",
    description: "A complete shopping platform with payment gateway integration.",
    techStack: ["React", "Express.js", "MongoDB", "Razorpay"],
    imageTheme: "from-amber-500 via-orange-600 to-red-600",
    details: [
      "Features a modern storefront with full cart, wishlist, and dynamic category filtering.",
      "Secure payment processing via seamless Razorpay integration.",
      "Admin dashboard to track inventory, adjust item pricing, and dispatch orders.",
      "User session persistence and secure password token reset flows."
    ]
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "A modern animated portfolio with an interactive Gemini AI chatbot assistant and 3D effects.",
    techStack: ["Vite", "React.js", "Tailwind CSS", "Gemini API"],
    imageTheme: "from-pink-500 via-rose-600 to-indigo-600",
    details: [
      "Custom 3D depth tilt layers calculated directly on mouse coordinate shifts.",
      "Features an intelligent assistant powered by Gemini 3.5 Flash server-side integration.",
      "Smooth micro-interactions and scroll animation tracks driven by motion/react.",
      "Fully responsive bento-grid structure that scales elegantly across devices."
    ]
  }
];

export const ACHIEVEMENTS = [
  "Google Developer Student Club Member",
  "Hackathon Involve (2026)",
  "LeetCode Problem Solving & Coding Streak",
  "20+ Completed Projects",
  "AWS Cloud Practitioner Certified",
  "Microsoft Azure Fundamentals Certified"
];

export const SERVICES = [
  { name: "Website Development", description: "Creating blazing-fast, responsive websites with state-of-the-art architectures." },
  { name: "Portfolio Design", description: "Designing gorgeous, premium interactive developer cards and landing pages." },
  { name: "Landing Page Development", description: "Crafting conversions-optimized landing pages with micro-animations." },
  { name: "React Applications", description: "Building highly interactive single-page and server-rendered React applications." },
  { name: "Backend API Development", description: "Developing secure, typed, robust RESTful APIs using Node and Django." },
  { name: "UI/UX Design", description: "Prototyping intuitive, accessible user layouts on Figma with seamless user journeys." },
  { name: "AI Integration", description: "Adding intelligence to standard platforms with custom conversational interfaces." },
  { name: "Website Maintenance", description: "Deploying updates, auditing performance, and managing regular backups." }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rahul Sharma",
    feedback: "Durgesh delivered our website before the deadline with outstanding quality. His coding skills and professionalism are top notch.",
    role: "Tech Lead, UP Startups"
  },
  {
    name: "Priya Kapoor",
    feedback: "Professional communication and excellent coding skills. He understood our complicated design requirements instantly.",
    role: "Co-Founder, DesignHQ"
  },
  {
    name: "David Wilson",
    feedback: "Highly recommended for modern web applications. He optimized our system load speeds dramatically and integrated smart chat features.",
    role: "Product Owner, CloudSystems"
  }
];

export const STATS: Stat[] = [
  { label: "Happy Clients", value: "50+", iconName: "Smile" },
  { label: "Projects Completed", value: "40+", iconName: "Briefcase" },
  { label: "Technologies Mastered", value: "15+", iconName: "Cpu" },
  { label: "Client Satisfaction", value: "99%", iconName: "ThumbsUp" }
];

export const INTERESTS = [
  "Artificial Intelligence",
  "Web Development",
  "Open Source",
  "Reading Tech Blogs",
  "Traveling"
];
