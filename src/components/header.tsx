const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a className="font-display text-xl tracking-[-0.04em] text-foreground" href="#top">
          MATTHEW
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

