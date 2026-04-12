import type { ProjectItem } from "@/types/content";

type ProjectsGridProps = {
  items: ProjectItem[];
};

export function ProjectsGrid({ items }: ProjectsGridProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((project, index) => (
        <article key={project.slug} className="rounded-[1.8rem] border border-border bg-white/72 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:p-6">
          <div className="project-preview flex min-h-[12rem] flex-col justify-between p-5">
            <div className="relative z-10 flex items-center justify-between">
              <span className="rounded-full border border-border bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted">
                Featured {index + 1}
              </span>
              <span className="text-sm text-muted">{project.status}</span>
            </div>
            <div className="relative z-10 max-w-xs">
              <h3 className="font-display text-3xl tracking-[-0.04em] text-foreground">{project.name}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/80">{project.summary}</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-muted sm:text-base">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-foreground">
            {project.links.repo ? (
              <a className="rounded-full border border-border px-4 py-2 transition-colors duration-300 hover:bg-foreground hover:text-white" href={project.links.repo} target="_blank" rel="noreferrer">
                Repository
              </a>
            ) : null}
            {project.links.live ? (
              <a className="rounded-full border border-border px-4 py-2 transition-colors duration-300 hover:bg-foreground hover:text-white" href={project.links.live} target="_blank" rel="noreferrer">
                Live Site
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

