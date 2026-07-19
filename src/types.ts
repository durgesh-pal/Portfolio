export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Cloud";
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageTheme: string; // Gradient color theme for card
  details: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  details: string[];
}

export interface Testimonial {
  name: string;
  feedback: string;
  role: string;
}

export interface Stat {
  label: string;
  value: string;
  iconName: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}
