import type { PlannedProjectItem } from "@/types/content";

type PlannedProjectsListProps = {
  items: PlannedProjectItem[];
};

export function PlannedProjectsList({ items }: PlannedProjectsListProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.slug} className="rounded-[1.6rem] border border-border bg-white/70 p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">{item.name}</h3>
            <span className="rounded-full border border-border bg-white/80 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted">
              {item.status === "in-progress" ? "In Progress" : "Planned"}
            </span>
          </div>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted">{item.targetWindow}</p>
          <p className="mt-4 text-sm leading-7 text-foreground/85 sm:text-base">{item.summary}</p>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{item.goal}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted">
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

