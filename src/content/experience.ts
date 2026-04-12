import type { ExperienceItem } from "@/types/content";

export const experience: ExperienceItem[] = [
  {
    company: "Independent Projects",
    role: "Software Engineer",
    start: "2024",
    end: "Present",
    location: "United States",
    summary:
      "Building and refining full-stack and systems-oriented projects with an emphasis on maintainability, product clarity, and strong developer experience.",
    bullets: [
      "Designed and shipped personal and collaborative applications with practical scope and maintainable architecture.",
      "Improved project quality through iterative delivery, cleaner abstractions, and a sharper eye for interaction details.",
      "Used each project as a way to deepen fundamentals across frontend, backend, and tooling workflows."
    ],
    tech: ["React", "TypeScript", "C#", "SQL"]
  },
  {
    company: "Portfolio Rebrand",
    role: "Product-minded Engineer",
    start: "2026",
    end: "Present",
    summary:
      "Reframing my online presence around thoughtful execution, polished presentation, and the work I intend to deliver this year.",
    bullets: [
      "Defined a typed content model so the portfolio stays easy to update as my experience and projects change.",
      "Balanced a minimal editorial layout with a restrained sci-fi visual treatment inspired by the Death Star surface.",
      "Optimized the implementation for static delivery, maintainability, and a clean deployment workflow on Vercel."
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel"]
  }
];

