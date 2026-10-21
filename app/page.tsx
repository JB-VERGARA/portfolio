const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Bryan Vergara",
  alternateName: "Bryan Vergara",
  url: "https://johnbryanvergara.vercel.app",
  jobTitle: "IT Professional",
  sameAs: [
    "https://github.com/JB-VERGARA",
    "https://www.youtube.com/@WorksOnMyMachineYesterday",
    "https://www.linkedin.com/in/john-bryan-vergara-466a3933b/",
  ],
};

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/ProjectGrid";
import Reveal from "@/components/Reveal";
import VisualWorkGallery from "@/components/VisualWorkGallery";
import { experience } from "@/data/experience";
import { credentials } from "@/data/credentials";

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
        <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
      <Navbar />

{/* Hero */}
<section className="flex min-h-[82vh] items-end px-6 pb-16 pt-20 text-center md:px-10 md:pb-20 md:text-left">
  <div className="mx-auto w-full max-w-7xl">
    <Reveal>
      <p className="mb-8 text-xs uppercase tracking-[0.3em] opacity-50">
        IT · Development · Design · Automation
      </p>
    </Reveal>

    <Reveal delay={100}>
      <h1 className="max-w-6xl text-[18vw] font-semibold leading-[0.78] tracking-[-0.08em] md:text-[14vw] lg:text-[10vw]">
        <span className="block">John Bryan</span>
        <span className="block">Vergara.</span>
      </h1>
    </Reveal>

    <Reveal delay={200}>
      <div className="mt-15 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <p className="max-w-xl text-sm leading-relaxed opacity-60 md:text-base">
          IT professional exploring software development, design, and
          automation through practical projects and creative experiments.
        </p>

        <div className="flex items-end justify-center md:justify-start lg:justify-end">
          <a
            href="#work"
            className="
              group inline-flex items-center gap-5
              text-sm font-medium uppercase
              tracking-[0.22em]
            "
          >
            <span className="relative">
              Explore Work
              <span
                className="
                  absolute -bottom-3 left-0 h-px w-full
                  origin-left bg-current
                  transition-transform duration-300
                  scale-x-0 group-hover:scale-x-100
                "
              />
            </span>

            <span
              className="
                animate-bounce text-lg leading-none
                [animation-duration:1.5s]
              "
            >
              ↓
            </span>
          </a>
        </div>
      </div>
    </Reveal>
  </div>
</section>

      {/* About */}
      <section id="about" className="px-6 py-24 md:px-10 md:py-35 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-20 flex items-end justify-between border-b border-[var(--border)] pb-6">
              <p className="text-xs uppercase tracking-[0.3em] opacity-50">
                01 — About
              </p>

              <span className="hidden text-xs uppercase tracking-[0.2em] opacity-30 md:block">
                A little about me
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-20 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[7.5rem]">
                  I&apos;m interested in
                  <br />
                  <span className="opacity-30">how things work.</span>
                </h2>
              </div>

              <div className="flex flex-col justify-end lg:pb-3">
                <p className="text-xl leading-relaxed md:text-2xl">
                  I&apos;m Bryan, an IT professional who likes building
                  things, solving problems, and figuring out what happens
                  behind the screen.
                </p>

                <p className="mt-8 max-w-lg text-sm leading-relaxed opacity-50 md:text-base">
                  My work sits somewhere between technology and creativity.
                  I&apos;ve explored web development, technical support,
                  software, automation, and design — usually learning by
                  actually making something.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-24 border-t border-[var(--border)]">
              <div className="grid lg:grid-cols-3">
                <div className="border-b border-[var(--border)] py-10 lg:border-b-0 lg:border-r lg:pr-12">
                  <span className="text-xs uppercase tracking-[0.2em] opacity-30">
                    01
                  </span>

                  <h3 className="mt-8 text-2xl font-medium md:text-3xl">
                    Build
                  </h3>

                  <p className="mt-5 text-sm leading-relaxed opacity-50 md:text-base">
                    I enjoy turning ideas into working products — from
                    websites and interfaces to small tools and experiments.
                  </p>
                </div>

                <div className="border-b border-[var(--border)] py-10 lg:border-b-0 lg:border-r lg:px-12">
                  <span className="text-xs uppercase tracking-[0.2em] opacity-30">
                    02
                  </span>

                  <h3 className="mt-8 text-2xl font-medium md:text-3xl">
                    Solve
                  </h3>

                  <p className="mt-5 text-sm leading-relaxed opacity-50 md:text-base">
                    I like taking messy technical problems, understanding what
                    is actually happening, and finding a practical way
                    forward.
                  </p>
                </div>

                <div className="py-10 lg:pl-12">
                  <span className="text-xs uppercase tracking-[0.2em] opacity-30">
                    03
                  </span>

                  <h3 className="mt-8 text-2xl font-medium md:text-3xl">
                    Explore
                  </h3>

                  <p className="mt-5 text-sm leading-relaxed opacity-50 md:text-base">
                    I&apos;m always experimenting with new technologies, design
                    ideas, workflows, and better ways to do things.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-24 grid gap-12 border-t border-[var(--border)] pt-8 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] opacity-30">
                  Currently interested in
                </p>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4 text-2xl tracking-tight md:text-4xl">
                <span>Software</span>
                <span className="opacity-30">/</span>
                <span>Automation</span>
                <span className="opacity-30">/</span>
                <span>Interfaces</span>
                <span className="opacity-30">/</span>
                <span>IT</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="px-6 py-24 md:px-10 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-16 text-xs uppercase tracking-[0.3em] opacity-50">
              02 — Selected Work
            </p>
          </Reveal>

          <Reveal delay={100}>
<h2 className="mb-20 max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
  Things I&apos;ve built, designed, and experimented with.
</h2>
          </Reveal>

          <Reveal delay={150}>
            <ProjectGrid />
          </Reveal>
        </div>
      </section>

      {/* Visual Work */}
      <section id="visuals" className="px-6 py-24 md:px-10 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-16 text-xs uppercase tracking-[0.3em] opacity-50">
              03 — Visual Work
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mb-24 grid gap-12 lg:grid-cols-[1fr_1fr]">
              <h2 className="max-w-3xl text-5xl font-medium leading-tight tracking-tight md:text-7xl">
                Visual experiments, interfaces, and ideas.
              </h2>

              <div className="flex items-center lg:justify-end">
                <div className="max-w-lg lg:text-right">
                  <p className="text-sm leading-relaxed opacity-60 md:text-base">
                    A collection of UI concepts, Figma explorations, visual
                    experiments, and design work that sits alongside my
                    technical projects.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.18em] opacity-35 lg:justify-end">
                    <span>UI / UX</span>
                    <span>Figma</span>
                    <span>Visual Design</span>
                    <span>Experiments</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <VisualWorkGallery showViewAll />
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 py-24 md:px-10 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 flex items-end justify-between border-b border-[var(--border)] pb-6">
              <p className="text-xs uppercase tracking-[0.3em] opacity-50">
                04 — Experience
              </p>

              <span className="hidden text-xs uppercase tracking-[0.2em] opacity-30 md:block">
                Professional experience
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
              <div>
                <h2 className="text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl">
                  Where I&apos;ve
                  <br />
                  <span className="opacity-30">worked.</span>
                </h2>

                <p className="mt-8 max-w-sm text-sm leading-relaxed opacity-50 md:text-base">
                  A look at the roles, environments, and technical experience
                  that have shaped how I approach work and problem solving.
                </p>
              </div>

              <div className="border-t border-[var(--border)]">
                {experience.length > 0 ? (
                  experience.map((item) => (
                    <article
                      key={item.slug}
                      className="
                        grid gap-6 border-b border-[var(--border)] py-8
                        lg:grid-cols-[1fr_2fr_auto]
                      "
                    >
                      <div>
                        <p className="text-sm font-medium">{item.role}</p>
                        <p className="mt-1 text-sm opacity-40">
                          {item.company}
                        </p>
                      </div>

                      <div>
                        <p className="max-w-xl text-sm leading-relaxed opacity-60 md:text-base">
                          {item.description}
                        </p>

                        {item.technologies &&
                          item.technologies.length > 0 && (
                            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                              {item.technologies.map((technology) => (
                                <span
                                  key={technology}
                                  className="
                                    text-xs uppercase tracking-[0.12em]
                                    opacity-40
                                  "
                                >
                                  {technology}
                                </span>
                              ))}
                            </div>
                          )}
                      </div>

                      <span
                        className="
                          text-xs uppercase tracking-[0.15em] opacity-40
                          lg:text-right
                        "
                      >
                        {item.startYear} — {item.endYear}
                      </span>
                    </article>
                  ))
                ) : (
                  <div className="border-b border-[var(--border)] py-20">
                    <p className="text-sm uppercase tracking-[0.2em] opacity-40">
                      Experience coming soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Credentials */}
      <section id="credentials" className="px-6 py-24 md:px-10 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 flex items-end justify-between border-b border-[var(--border)] pb-6">
              <p className="text-xs uppercase tracking-[0.3em] opacity-50">
                05 — Credentials
              </p>

              <span className="hidden text-xs uppercase tracking-[0.2em] opacity-30 md:block">
                Learning &amp; training
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
              <div>
                <h2 className="text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl">
                  Things I&apos;ve
                  <br />
                  <span className="opacity-30">learned.</span>
                </h2>

                <p className="mt-8 max-w-sm text-sm leading-relaxed opacity-50 md:text-base">
                  Certifications, training, and learning experiences that have
                  contributed to how I approach technology and problem solving.
                </p>
              </div>

              <div>
                {credentials.length > 0 ? (
                  <div className="space-y-4">
                    {credentials.map((item, index) => (
                      <article
                        key={item.slug}
                        className="
                          border border-[var(--border)] p-6
                          md:p-8
                        "
                      >
                        <div className="flex items-start justify-between gap-6">
                          <span className="text-xs uppercase tracking-[0.15em] opacity-30">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-xs uppercase tracking-[0.15em] opacity-40">
                            {item.year}
                          </span>
                        </div>

                        <div className="mt-10 grid gap-6 md:grid-cols-[1.4fr_1fr]">
                          <div>
                            <h3 className="text-xl font-medium md:text-2xl">
                              {item.title}
                            </h3>

                            <p className="mt-2 text-sm opacity-40">
                              {item.issuer}
                            </p>
                          </div>

                          <div>
                            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">
                              {item.type}
                            </span>

                            {item.description && (
                              <p className="mt-4 text-sm leading-relaxed opacity-50">
                                {item.description}
                              </p>
                            )}

                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                  mt-6 inline-flex items-center gap-2
                                  text-xs uppercase tracking-[0.15em]
                                  opacity-50 transition-opacity
                                  hover:opacity-100
                                "
                              >
                                View Credential
                                <span>↗</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="border border-[var(--border)] p-10">
                    <p className="text-sm uppercase tracking-[0.2em] opacity-40">
                      Credentials coming soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

{/* Contact */}
<section
  id="contact"
  className="px-6 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40"
>
  <div className="mx-auto max-w-7xl">
    <Reveal>
      <p className="mb-16 text-xs uppercase tracking-[0.3em] opacity-50">
        06 — Contact
      </p>
    </Reveal>

    <Reveal delay={100}>
      <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
        <h2 className="text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          Let&apos;s build
          <br />
          <span className="opacity-30">something.</span>
        </h2>

        <div className="max-w-2xl">
          <p className="text-xl leading-relaxed md:text-3xl">
            Open to opportunities, collaborations, technical projects,
            and interesting ideas.
          </p>

          <a
            href="mailto:vergarajohnbryan.dev@gmail.com"
            className="
              group mt-10 inline-flex items-center gap-4
              text-base transition-opacity hover:opacity-50
              md:text-xl
            "
          >
            <span>vergarajohnbryan.dev@gmail.com</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <div className="mt-12">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">
              Check my socials
            </p>

            <div className="grid border-t border-[var(--border)] sm:grid-cols-3">
              {/* GitHub */}
              <a
                href="https://github.com/JB-VERGARA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  group flex items-center gap-4 border-b
                  border-[var(--border)] py-6 transition-opacity
                  hover:opacity-50 sm:border-b-0 sm:border-r sm:pr-6
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.02c.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>

                <span className="text-xs uppercase tracking-[0.18em]">
                  GitHub
                </span>

                <span className="ml-auto opacity-30 transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@WorksOnMyMachineYesterday"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="
                  group flex items-center gap-4 border-b
                  border-[var(--border)] py-6 transition-opacity
                  hover:opacity-50 sm:border-b-0 sm:border-r sm:px-6
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.85.6 9.4.6 9.4.6s7.55 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.8 3.9-6.8 3.9Z" />
                </svg>

                <span className="text-xs uppercase tracking-[0.18em]">
                  YouTube
                </span>

                <span className="ml-auto opacity-30 transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/john-bryan-vergara-466a3933b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  group flex items-center gap-4 py-6 transition-opacity
                  hover:opacity-50 sm:pl-6
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.41v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.4a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.98H3.54v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                </svg>

                <span className="text-xs uppercase tracking-[0.18em]">
                  LinkedIn
                </span>

                <span className="ml-auto opacity-30 transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>

    <Reveal delay={150}>
      <div
        className="
          mt-32 flex flex-col gap-6 border-t border-[var(--border)]
          pt-6 text-xs uppercase tracking-[0.15em] opacity-40
          md:flex-row md:items-center md:justify-between
        "
      >
        <span>© 2026 John Bryan Vergara</span>

        <Link
          href="#top"
          className="transition-opacity hover:opacity-100"
        >
          Back to top ↑
        </Link>
      </div>
    </Reveal>
  </div>
</section>
    </main>
  );
}
