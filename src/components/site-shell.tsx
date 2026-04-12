import Image from "next/image";
import { BackgroundTreatment } from "@/components/background-treatment";
import { EducationList } from "@/components/education-list";
import { ExperienceList } from "@/components/experience-list";
import { HeroSection } from "@/components/hero-section";
import { PlannedProjectsList } from "@/components/planned-projects-list";
import { ProjectsGrid } from "@/components/projects-grid";
import { ResumeButton } from "@/components/resume-button";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { TechStackGrid } from "@/components/tech-stack-grid";
import { education } from "@/content/education";
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
              I&apos;m a software engineer based in Miami, Florida, currently working at American Express. I care about software that earns trust through clarity: dependable foundations, clean interfaces, and implementation details that make systems easier to evolve.
            </p>
            <p className="section-copy mt-4">
              My background spans product-facing frontend work, backend integrations, academic technical programs, and fast-paced team environments. This portfolio keeps that same posture: compact, intentional, and focused on the work.
            </p>
          </div>
        </section>

        <section id="experience" className="section-shell p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Experience"
            title="Recent roles and engineering context"
            description="A timeline of the work that shaped how I build, collaborate, and think about product and platform quality."
          />
          <div className="mt-8">
            <ExperienceList items={experience} />
          </div>
        </section>

        <section id="education" className="section-shell p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_14rem] lg:items-start">
            <SectionHeading
              eyebrow="Education"
              title="Computer science foundation and community"
              description="The academic and extracurricular context behind my growth as an engineer, teammate, and competitor."
            />
            <aside className="flex justify-start lg:justify-end">
              <div className="relative h-24 w-24 grayscale sm:h-28 sm:w-28 lg:h-32 lg:w-32">
                <Image
                  src="/fiu-seal.png"
                  alt="Florida International University seal"
                  fill
                  className="object-contain opacity-60"
                  sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
                />
              </div>
            </aside>
          </div>
          <div className="mt-8">
            <EducationList items={education} />
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
            description="A snapshot of the tools and technologies that reflect both my day-to-day work and the environments I have trained in recently."
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
