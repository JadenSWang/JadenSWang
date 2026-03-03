export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}
