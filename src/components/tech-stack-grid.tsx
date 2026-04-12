import type { StackItem } from "@/types/content";

type TechStackGridProps = {
  items: StackItem[];
};

export function TechStackGrid({ items }: TechStackGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
      {items.map((item) => (
        <div key={item.name} className="rounded-[1.4rem] border border-border bg-white/70 px-4 py-5 text-center shadow-sm">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-border bg-[var(--color-panel-strong)] text-sm font-semibold tracking-[-0.04em] text-foreground">
            {item.name.slice(0, 2).toUpperCase()}
          </div>
          <p className="mt-3 text-sm font-medium text-foreground">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

