export type SocialIcon = "github" | "linkedin" | "email" | "x" | "website";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string | "Present";
  location?: string;
  summary: string;
  bullets: string[];
  tech?: string[];
};

export type ProjectItem = {
  slug: string;
  name: string;
  status: "completed";
  summary: string;
  description?: string;
  tech: string[];
  links: {
    live?: string;
    repo?: string;
  };
  image?: string;
  featured: boolean;
};

export type PlannedProjectItem = {
  slug: string;
  name: string;
  targetWindow: string;
  summary: string;
  goal: string;
  tech: string[];
  status: "planned" | "in-progress";
};

export type StackItem = {
  name: string;
  icon?: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  shortBio: string;
  longBio?: string;
  resumeUrl?: string;
};
