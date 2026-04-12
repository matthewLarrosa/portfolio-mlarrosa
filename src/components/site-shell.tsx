import { BackgroundTreatment } from "@/components/background-treatment";
import { ExperienceList } from "@/components/experience-list";
import { HeroSection } from "@/components/hero-section";
import { PlannedProjectsList } from "@/components/planned-projects-list";
import { ProjectsGrid } from "@/components/projects-grid";
import { ResumeButton } from "@/components/resume-button";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { TechStackGrid } from "@/components/tech-stack-grid";
import { experience } from "@/content/experience";
import { plannedProjects } from "@/content/planned-projects";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { socials } from "@/content/socials";
import { stack } from "@/content/stack";

export function SiteShell() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main id="top" className="relative overflow-hidden">
      <BackgroundTreatment />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-5 pb-24 pt-10 sm:px-8">
        <HeroSection />

        <section id="about" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-shell p-6 sm:p-8">
            <SectionHeading
              eyebrow="About"
              title="Simple presentation, serious intent."
              description="The site is designed to make the important parts of my work legible quickly: what I do, how I think, what I have built, and what I am aiming to ship next."
            />
          </div>
          <div className="section-shell p-6 sm:p-8">
            <p className="section-copy">
              I care about software that earns trust through clarity. That means dependable foundations, strong naming, interfaces that stay out of the way, and product choices that respect the user&apos;s time.
            </p>
            <p className="section-copy mt-4">
              This portfolio keeps that same posture: a compact layout, restrained styling, and enough personality to feel specific without overpowering the work itself.
            </p>
          </div>
        </section>

        <section id="experience" className="section-shell p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Experience"
            title="How I approach engineering work"
            description="A snapshot of the roles, habits, and technical focus areas that shape how I build and ship software."
          />
          <div className="mt-8">
            <ExperienceList items={experience} />
          </div>
        </section>

        <section id="projects" className="section-shell p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Recent work that reflects how I build"
            description="Featured projects are presented with enough detail to show technical direction, product thinking, and implementation discipline without turning the page into a case-study dump."
          />
          <div className="mt-8">
            <ProjectsGrid items={featuredProjects} />
          </div>
        </section>

        <section id="roadmap" className="section-shell p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="This Year"
            title="Projects I intend to create next"
            description="A forward-looking roadmap that shows where I want to push next across systems, tooling, and user-facing product design."
          />
          <div className="mt-8">
            <PlannedProjectsList items={plannedProjects} />
          </div>
        </section>

        <section className="section-shell p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Tools I reach for regularly"
            description="The stack here is intentionally broad enough to reflect the way I work today while staying easy to update as the portfolio evolves."
          />
          <div className="mt-8">
            <TechStackGrid items={stack} />
          </div>
        </section>

        <section id="contact" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="section-shell p-6 sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow="Contact"
              title="Open to thoughtful work and good collaboration"
              description="If you want to talk through engineering work, product ideas, or an opportunity that needs steady execution, this is the easiest place to reach me."
            />
            <div className="mt-8">
              <SocialLinks items={socials} />
            </div>
          </div>
          <div className="section-shell flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
            <div>
              <p className="eyebrow">Resume CTA</p>
              <h3 className="mt-4 font-display text-3xl tracking-[-0.04em] text-foreground">
                Built to launch fast and update easily.
              </h3>
              <p className="section-copy mt-4">
                The content for this site lives in typed files, so adding experience, updating projects, or replacing placeholder links stays straightforward.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <ResumeButton href={profile.resumeUrl} />
              <span className="text-sm text-muted">Deployed with Next.js and Vercel.</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

