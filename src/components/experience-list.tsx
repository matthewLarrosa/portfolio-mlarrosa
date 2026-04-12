import type { ExperienceItem } from "@/types/content";

type ExperienceListProps = {
  items: ExperienceItem[];
};

export function ExperienceList({ items }: ExperienceListProps) {
  return (
    <div className="grid gap-5">
      {items.map((item) => (
        <article key={`${item.company}-${item.role}`} className="rounded-[1.6rem] border border-border bg-white/70 p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">{item.role}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted">{item.company}</p>
            </div>
            <p className="text-sm text-muted">
              {item.start} - {item.end}
              {item.location ? ` • ${item.location}` : ""}
            </p>
          </div>
          <p className="mt-5 text-sm leading-7 text-muted sm:text-base">{item.summary}</p>
          <ul className="mt-5 grid gap-3 text-sm leading-7 text-foreground/85 sm:text-base">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          {item.tech?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted">
                  {tech}
                </span>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

