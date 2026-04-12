import type { PlannedProjectItem } from "@/types/content";

export const plannedProjects: PlannedProjectItem[] = [
  {
    slug: "systems-dashboard",
    name: "Systems Dashboard",
    targetWindow: "Summer 2026",
    summary: "An operations-focused dashboard that turns noisy system data into a usable decision surface.",
    goal:
      "Demonstrate clear information architecture, strong state management, and practical observability thinking.",
    tech: ["React", "TypeScript", "Charts"],
    status: "planned"
  },
  {
    slug: "collaboration-notes",
    name: "Collaboration Notes",
    targetWindow: "Fall 2026",
    summary: "A lightweight product for capturing structured technical notes, decisions, and follow-up work in one place.",
    goal:
      "Show how I approach product design, editor workflows, and everyday experience quality in team tools.",
    tech: ["Next.js", "Postgres", "Authentication"],
    status: "planned"
  },
  {
    slug: "performance-workbench",
    name: "Performance Workbench",
    targetWindow: "Winter 2026",
    summary: "A lab-style environment for profiling, benchmarking, and explaining performance tradeoffs across small apps.",
    goal:
      "Create a project that reflects engineering depth while still being approachable and useful to other developers.",
    tech: ["Node.js", "Benchmarking", "Visualization"],
    status: "in-progress"
  }
];

