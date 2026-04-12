import Image from "next/image";
import { Icon } from "@/components/icon";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";

export function HeroSection() {
  return (
    <section className="relative section-shell overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <span className="eyebrow">Software Engineer</span>
          <div className="mt-6 flex items-start gap-5 sm:gap-6">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[1.6rem] border border-border bg-[#ded9d1] shadow-sm sm:h-28 sm:w-28">
              <Image
                src="/matthew-headshot-hero.jpg"
                alt="Matthew Larrosa"
                fill
                className="object-cover object-center"
                sizes="(min-width: 640px) 112px, 96px"
                priority
              />
            </div>
            <div className="pt-1 sm:pt-2">
              <h1 className="text-4xl font-semibold tracking-[0.02em] text-foreground sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg tracking-[-0.03em] text-foreground/90 sm:text-xl">
                {profile.title}
              </p>
              <p className="mt-1 text-sm text-muted">{profile.location}</p>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {profile.shortBio}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{profile.longBio}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="inline-flex items-center rounded-full bg-foreground px-5 py-3 font-mono text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
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
