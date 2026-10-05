/** Accent colours available in the theme. Used by Tag, Card, Section etc. */
export type Accent = "primary" | "secondary" | "tertiary";

export interface SocialLink {
  label: string;
  href: string;
  /** Short handle shown in the UI, e.g. `github.com/Deepak0844` */
  display: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  handle: string;
  title: string;
  roles: string[];
  location: string;
  status: string;
  summary: string;
  email: string;
  links: SocialLink[];
  stats: Stat[];
  /** Optional URL of the resume, e.g. a Google Drive share link */
  resumeUrl?: string;
}

export interface SkillGroup {
  category: string;
  accent: Accent;
  items: string[];
}

export interface Role {
  title: string;
  product: string;
  period: string;
  stack: string[];
  highlights: string[];
}

export interface Experience {
  company: string;
  location: string;
  period: string;
  roles: Role[];
}

export interface Project {
  name: string;
  type: string;
  description: string;
  stack: string[];
  repoUrl: string;
  accent: Accent;
}

export interface Achievement {
  kind: "award" | "education" | "certification" | "language";
  title: string;
  subtitle: string;
  period?: string;
  detail?: string;
}

export interface NavItem {
  id: string;
  label: string;
}
