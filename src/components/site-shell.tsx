import { profile } from "@/content/profile";

export function SiteShell() {
  return (
    <main id="top" className="mx-auto flex min-h-screen max-w-6xl flex-col px-5 pb-24 pt-10 sm:px-8">
      <section className="section-shell p-8 sm:p-10">
        <span className="eyebrow">Foundation in place</span>
        <h1 className="mt-4 font-display text-4xl tracking-[-0.05em] text-foreground sm:text-6xl">
          {profile.name}, {profile.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {profile.longBio}
        </p>
      </section>
    </main>
  );
}
