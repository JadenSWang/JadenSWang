import { Experience, Project, SocialLink } from "@/types";

export const siteConfig = {
  name: "Jaden S. Wang",
  title: "Engineer",
  bio: "Working at the intersection of infrastructure, AI, drones, and the blurring line between hardware and software. From GPU cloud platforms to autonomous systems — building the foundations that power the next generation of computing.",
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
  {
    id: "tensordock",
    company: "TensorDock",
    role: "Software Engineer → General Manager",
    period: "",
    description:
      "Managed operations and growth for a cloud GPU marketplace, scaling infrastructure for AI and machine learning workloads.",
  },
  {
    id: "heaviside-hosting",
    company: "Heaviside Hosting",
    role: "CEO",
    period: "",
    description:
      "Founded and led a hosting company, building reliable infrastructure and services for clients at scale.",
  },
  {
    id: "dashrd",
    company: "DashRD",
    role: "Partner",
    period: "",
    description:
      "Founded and led DashRD, driving product strategy and company growth from the ground up.",
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
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume" },
];
