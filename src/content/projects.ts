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
      repo: "https://github.com/matthewLarrosa/portfilio-mlarrosa"
    },
    featured: true
  }
];
