import type { ProjectItem } from "@/types/content";

export const projects: ProjectItem[] = [
  {
    slug: "portfolio-rebrand",
    name: "Portfolio Rebrand",
    status: "completed",
    summary:
      "A clean personal site designed to present experience, selected work, and upcoming projects without visual clutter.",
    description:
      "Built as a statically generated Next.js experience with typed content, responsive sections, and a subtle cinematic background treatment.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      repo: "https://github.com/matthewLarrosa/portfolio-mlarrosa"
    },
    featured: true
  },
  {
    slug: "developer-tooling-lab",
    name: "Developer Tooling Lab",
    status: "completed",
    summary:
      "A workspace for experimenting with scripts, automation, and workflow improvements that make delivery smoother.",
    description:
      "A practical sandbox for exploring tooling ideas that strengthen build pipelines, local workflows, and project setup quality.",
    tech: ["Node.js", "TypeScript", "GitHub Actions"],
    links: {},
    featured: true
  }
];

