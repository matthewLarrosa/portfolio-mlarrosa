import Image from "next/image";
import { BackgroundTreatment } from "@/components/background-treatment";
import { EducationList } from "@/components/education-list";
import { ExperienceList } from "@/components/experience-list";
import { HeroSection } from "@/components/hero-section";
import { ProjectsGrid } from "@/components/projects-grid";
import { ResumeButton } from "@/components/resume-button";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { TechStackGrid } from "@/components/tech-stack-grid";
import { education } from "@/content/education";
import { experience } from "@/content/experience";
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

        {/* Saved for later reuse:
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
        */}

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
              eyebrow="Socials"
              title="Here are my socials"
              description="For open role opportunities, please reach out to me by email."
            />
            <div className="mt-8">
              <SocialLinks items={socials} />
            </div>
          </div>
          <div className="section-shell flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
            <div>
              <p className="eyebrow">Resume CTA</p>
              <h3 className="mt-4 font-display text-3xl tracking-[-0.04em] text-foreground">
                Need my resume?
              </h3>
              <p className="section-copy mt-4">
                You can find my resume here whenever you need it.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <ResumeButton href={profile.resumeUrl} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
