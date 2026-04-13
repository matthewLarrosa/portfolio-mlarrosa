const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          className="inline-flex h-11 w-11 items-center justify-center rounded-[0.9rem] border border-foreground/20 bg-transparent text-sm font-semibold uppercase tracking-[0.16em] text-foreground transition-colors duration-300 hover:border-foreground/35"
          href="#top"
          aria-label="Matthew Larrosa home"
        >
          ML
        </a>
        <nav aria-label="Primary" className="hidden gap-6 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="transition-colors duration-300 hover:text-foreground" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
