import { Experience, Project, SocialLink } from "@/types";

export const siteConfig = {
  name: "Jaden S. Wang",
  title: "Software Engineer",
  bio: "I build thoughtful digital experiences at the intersection of design and engineering. Passionate about clean code, elegant interfaces, and the details that make software feel alive.",
};

export const experience: Experience[] = [
  {
    id: "lightning-ai",
    company: "Lightning.ai",
    role: "Software Engineering Manager",
    period: "Formerly Voltage Park",
    description:
      "Led engineering teams building infrastructure and tools for scalable AI development and GPU cloud computing.",
  },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project One",
    description:
      "A full-stack web application with real-time collaboration features and an intuitive drag-and-drop interface.",
    tags: ["React", "TypeScript", "Node.js"],
    href: "#",
  },
  {
    id: "project-2",
    title: "Project Two",
    description:
      "A command-line tool that automates complex workflows and integrates with popular developer tools.",
    tags: ["Rust", "CLI", "DevTools"],
    href: "#",
  },
  {
    id: "project-3",
    title: "Project Three",
    description:
      "A high-performance API service handling millions of requests with sub-millisecond latency.",
    tags: ["Go", "gRPC", "PostgreSQL"],
    href: "#",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    href: "https://github.com/JadenSWang",
    label: "GitHub",
  },
  {
    platform: "LinkedIn",
    href: "https://linkedin.com/in/",
    label: "LinkedIn",
  },
  {
    platform: "Email",
    href: "mailto:hello@example.com",
    label: "Email",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
