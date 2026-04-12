import { Icon } from "@/components/icon";
import type { SocialLink } from "@/types/content";

type SocialLinksProps = {
  items: SocialLink[];
};

export function SocialLinks({ items }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <a
          key={item.label}
          className="inline-flex items-center gap-3 rounded-full border border-border bg-white/80 px-4 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5"
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
        >
          <Icon icon={item.icon} className="h-4 w-4" />
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}

