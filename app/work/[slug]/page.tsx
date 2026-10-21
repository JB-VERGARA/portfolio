import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const baseUrl = "https://johnbryanvergara.vercel.app";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
      description:
        "The requested project could not be found.",
    };
  }

  return {
    title: project.title,

    description: project.description,

    alternates: {
      canonical: `/work/${project.slug}`,
    },

    openGraph: {
      title: `${project.title} — John Bryan Vergara`,
      description: project.description,
      url: `${baseUrl}/work/${project.slug}`,
      siteName: "John Bryan Vergara",
      type: "article",
      locale: "en_US",
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} — John Bryan Vergara`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(
    (project) => project.slug === slug
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];

  const previousProject =
    projects[
      (projectIndex - 1 + projects.length) %
        projects.length
    ];

  const nextProject =
    projects[(projectIndex + 1) % projects.length];

  return (
    <main id="top" className="min-h-screen px-6 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Back */}
        <Link
          href="/#work"
          className="
            text-xs uppercase tracking-[0.2em] opacity-50
            transition-opacity hover:opacity-100
          "
        >
          ← Back to Work
        </Link>

        {/* Hero */}
        <Reveal>
          <section className="pb-24 pt-32 md:pb-32 md:pt-40">
            <div className="mb-8 flex flex-wrap gap-3">
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="
                    rounded-full border border-[var(--border)]
                    px-4 py-2 text-xs uppercase tracking-[0.15em]
                  "
                >
                  {category}
                </span>
              ))}
            </div>

            <h1
              className="
                max-w-6xl text-[16vw] font-semibold
                leading-[0.8] tracking-[-0.07em]
                md:text-[11vw]
              "
            >
              {project.title}
            </h1>

            <div className="mt-16 grid gap-10 border-t border-[var(--border)] pt-6 lg:grid-cols-3">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-40">
                  Year
                </p>
                <p className="text-sm">{project.year}</p>
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-40">
                  Role
                </p>
                <p className="text-sm">
                  {project.role || "—"}
                </p>
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-40">
                  Description
                </p>
                <p className="max-w-md text-sm leading-relaxed opacity-70">
                  {project.description}
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Main Image */}
        <Reveal delay={100}>
          <section className="mb-32">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </section>
        </Reveal>

        {/* Overview */}
        {project.overview && (
          <Reveal delay={100}>
            <section className="mb-32 grid gap-10 lg:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] opacity-40">
                  01 — Overview
                </p>
              </div>

              <p className="max-w-4xl text-2xl leading-relaxed tracking-tight md:text-4xl">
                {project.overview}
              </p>
            </section>
          </Reveal>
        )}

        {/* Details */}
        <Reveal delay={100}>
          <section className="mb-32 grid gap-16 border-t border-[var(--border)] pt-6 lg:grid-cols-3">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.3em] opacity-40">
                Technologies
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-sm opacity-70"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {project.process && (
              <div className="lg:col-span-2">
                <p className="mb-6 text-xs uppercase tracking-[0.3em] opacity-40">
                  Process
                </p>

                <p className="max-w-3xl text-lg leading-relaxed opacity-70 md:text-xl">
                  {project.process}
                </p>
              </div>
            )}
          </section>
        </Reveal>

        {/* Challenges */}
        {project.challenges && (
          <Reveal delay={100}>
            <section className="mb-32 grid gap-10 lg:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] opacity-40">
                  02 — Challenges
                </p>
              </div>

              <p className="max-w-3xl text-lg leading-relaxed opacity-70 md:text-2xl">
                {project.challenges}
              </p>
            </section>
          </Reveal>
        )}

        {/* Outcome */}
        {project.outcome && (
          <Reveal delay={100}>
            <section className="mb-32 grid gap-10 border-t border-[var(--border)] pt-6 lg:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] opacity-40">
                  03 — Outcome
                </p>
              </div>

              <p className="max-w-3xl text-2xl leading-relaxed tracking-tight md:text-4xl">
                {project.outcome}
              </p>
            </section>
          </Reveal>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <Reveal delay={100}>
            <section className="mb-32">
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.3em] opacity-40">
                  Gallery
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <div
                    key={image}
                    className="
                      relative aspect-[4/3] overflow-hidden
                      bg-[var(--foreground)]/5
                    "
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* Video */}
        {project.youtube && (
          <Reveal delay={100}>
            <YouTubeEmbed
              url={project.youtube}
              title={`${project.title} — YouTube`}
            />
          </Reveal>
        )}

        {/* Links */}
        {(project.github ||
          project.live ||
          project.youtube) && (
          <Reveal delay={100}>
            <section className="mb-32 border-t border-[var(--border)] pt-6">
              <p className="mb-8 text-xs uppercase tracking-[0.3em] opacity-40">
                Explore
              </p>

              <div className="flex flex-wrap gap-8">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-sm uppercase tracking-[0.2em]
                      transition-opacity hover:opacity-50
                    "
                  >
                    GitHub ↗
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-sm uppercase tracking-[0.2em]
                      transition-opacity hover:opacity-50
                    "
                  >
                    Live Site ↗
                  </a>
                )}

                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-sm uppercase tracking-[0.2em]
                      transition-opacity hover:opacity-50
                    "
                  >
                    YouTube ↗
                  </a>
                )}
              </div>
            </section>
          </Reveal>
        )}

        {/* Project Navigation */}
        <Reveal delay={100}>
          <section className="border-t border-[var(--border)] py-12">
            <div className="grid gap-8 md:grid-cols-2">
              <Link
                href={`/work/${previousProject.slug}`}
                className="group"
              >
                <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">
                  ← Previous
                </p>

                <p className="text-3xl tracking-tight transition-transform duration-300 group-hover:-translate-x-2 md:text-5xl">
                  {previousProject.title}
                </p>
              </Link>

              <Link
                href={`/work/${nextProject.slug}`}
                className="group text-left md:text-right"
              >
                <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">
                  Next →
                </p>

                <p className="text-3xl tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">
                  {nextProject.title}
                </p>
              </Link>
            </div>
          </section>
        </Reveal>

        {/* Back to top */}
        <Reveal delay={100}>
          <div className="flex justify-center py-16">
            <a
              href="#top"
              className="
                text-sm uppercase tracking-[0.2em]
                opacity-50 transition-opacity hover:opacity-100
              "
            >
              Back to top ↑
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}