import { Icon } from "@/components/icon";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";

export function HeroSection() {
  return (
    <section className="relative section-shell overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <span className="eyebrow">Software Engineer</span>
          <div className="mt-6 flex items-start gap-4 sm:gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.4rem] border border-border bg-[#ded9d1] text-3xl font-semibold tracking-[-0.08em] text-foreground shadow-sm">
              ML
            </div>
            <div>
              <h1 className="font-display text-4xl tracking-[-0.05em] text-foreground sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-xl text-foreground/90">{profile.title}</p>
              <p className="mt-1 text-sm text-muted">{profile.location}</p>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {profile.shortBio}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{profile.longBio}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              href={profile.resumeUrl}
            >
              Resume & Contact
            </a>
            {socials.map((item) => (
              <a
                key={item.label}
                aria-label={item.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/80 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon icon={item.icon} />
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-[1.5rem] border border-border bg-[var(--color-panel-strong)] p-5">
            <p className="eyebrow">Current focus</p>
            <p className="mt-4 text-lg font-medium leading-8 text-foreground">
              Building polished, maintainable products that feel simple to use and straightforward to evolve.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-[var(--color-panel-strong)] p-5">
            <p className="eyebrow">This year</p>
            <p className="mt-4 text-lg font-medium leading-8 text-foreground">
              Shipping a stronger public body of work across systems, tooling, and product-minded interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

