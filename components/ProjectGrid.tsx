"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { projects, ProjectCategory } from "@/data/projects";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "IT",
  "Development",
  "Design",
  "Automation",
];

const INITIAL_PROJECT_COUNT = 2;

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<
    "All" | ProjectCategory
  >("All");

  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === "All" ||
      project.categories.includes(activeFilter);

    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return matchesCategory;
    }

    const searchableText = [
      project.title,
      project.description,
      project.year,
      ...project.categories,
      ...project.technologies,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(query);

    return matchesCategory && matchesSearch;
  });

  const displayedProjects =
    activeFilter === "All" &&
    !showAll &&
    !searchQuery.trim()
      ? filteredProjects.slice(0, INITIAL_PROJECT_COUNT)
      : filteredProjects;

  const shouldShowButton =
    activeFilter === "All" &&
    !searchQuery.trim() &&
    filteredProjects.length > INITIAL_PROJECT_COUNT;

  const handleFilterChange = (
    filter: "All" | ProjectCategory
  ) => {
    setActiveFilter(filter);
    setShowAll(false);

    window.requestAnimationFrame(() => {
      const grid = document.getElementById("project-grid");

      if (grid) {
        const offset = 120;
        const top =
          grid.getBoundingClientRect().top +
          window.scrollY -
          offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    });
  };

  const handleShowAll = () => {
    if (showAll) {
      setShowAll(false);

      window.requestAnimationFrame(() => {
        const lastVisibleProject =
          filteredProjects[INITIAL_PROJECT_COUNT - 1];

        if (!lastVisibleProject) return;

        const element = document.getElementById(
          `project-${lastVisibleProject.slug}`,
        );

        if (element) {
          const offset = 120;
          const top =
            element.getBoundingClientRect().top +
            window.scrollY -
            offset;

          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }
      });

      return;
    }

    setShowAll(true);
  };

  return (
    <div>
      {/* Filters + Search */}
      <div className="mb-20 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => {
            const count =
              filter === "All"
                ? projects.length
                : projects.filter((project) =>
                    project.categories.includes(filter)
                  ).length;

            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-4
                  py-2
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
                      : "border-[var(--border)] hover:border-[var(--foreground)] hover:bg-[var(--foreground)]/5"
                  }
                `}
              >
                <span>{filter}</span>

                <span
                  className={`
                    text-[10px]
                    transition-opacity
                    duration-300
                    ${
                      isActive
                        ? "opacity-60"
                        : "opacity-30 group-hover:opacity-60"
                    }
                  `}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full shrink-0 md:w-64 lg:w-72">
          <span
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-sm
              opacity-40
            "
            aria-hidden="true"
          >
            ⌕
          </span>

          <input
            type="search"
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
              setShowAll(false);
            }}
            placeholder="Search projects..."
            aria-label="Search projects"
            className="
              h-10
              w-full
              rounded-full
              border
              border-[var(--border)]
              bg-transparent
              pl-10
              pr-4
              text-xs
              uppercase
              tracking-[0.12em]
              outline-none
              transition-all
              duration-300
              placeholder:opacity-40
              focus:border-[var(--foreground)]
            "
          />
        </div>
      </div>

      {/* Projects */}
      <div id="project-grid" className="space-y-32">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project, index) => (
            <Link
              key={project.slug}
              id={`project-${project.slug}`}
              href={`/work/${project.slug}`}
              className="group block"
            >
              {/* Project Image */}
              <Reveal>
                <div
                  className="
                    relative
                    mx-auto
                    mb-8
                    aspect-[16/8]
                    w-full
                    overflow-hidden
                    bg-[var(--background)]
                    transition-transform
                    duration-700
                    ease-out
                    md:group-hover:-translate-y-1
                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{
                      filter: "grayscale(100%)",
                    }}
                    className="
                      object-cover
                      scale-[1.04]
                      transition-all
                      duration-1000
                      ease-out
                      md:group-hover:scale-105
                      lg:group-hover:scale-[1.06]
                    "
                    sizes="100vw"
                  />

                  {/* Hover Overlay */}
                  <div
                    className="
                      project-hover-overlay
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      transition-all
                      duration-500
                      group-hover:bg-black/60
                    "
                  >
                    <div
                      className="
                        flex
                        w-full
                        flex-col
                        items-center
                        gap-8
                        px-6
                        opacity-0
                        translate-y-4
                        transition-all
                        duration-500
                        ease-out
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <h3
                        className="
                          project-hover-title
                          w-full
                          text-center
                          text-[12vw]
                          font-bold
                          uppercase
                          leading-[0.8]
                          tracking-[-0.08em]
                          text-white
                          transition-all
                          duration-500
                          ease-out
                          group-hover:-translate-y-2
                          md:text-[9vw]
                        "
                      >
                        {project.title}
                      </h3>

                      <span
                        className="
                          artistic-view
                          flex
                          h-16
                          w-16
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          text-xs
                          font-medium
                          uppercase
                          tracking-wider
                          text-black
                          transition-all
                          duration-500
                          ease-out
                          group-hover:scale-110
                          group-hover:translate-y-1
                        "
                      >
                        View
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Project Information */}
              <div className="grid gap-6 md:grid-cols-[1fr_auto]">
                <div>
                  <div className="mb-4 flex items-center gap-4">
                    <span className="text-xs uppercase tracking-[0.2em] opacity-40">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {project.year}
                    </span>

                    <span className="h-px w-8 bg-[var(--border)]" />

                    <div className="flex flex-wrap gap-2">
                      {project.categories.map((category) => (
                        <span
                          key={category}
                          className="text-xs uppercase tracking-[0.15em] opacity-50"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3
                    className="
                      text-5xl
                      font-medium
                      tracking-[-0.04em]
                      transition-all
                      duration-500
                      md:group-hover:translate-x-2
                      md:group-hover:opacity-60
                      md:text-7xl
                    "
                  >
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-sm leading-relaxed opacity-60 md:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap content-start gap-x-4 gap-y-2 md:max-w-[220px] md:justify-end">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-xs uppercase tracking-[0.12em] opacity-40 transition-opacity duration-300 group-hover:opacity-60"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="border-t border-[var(--border)] py-20">
            <p className="text-sm uppercase tracking-[0.2em] opacity-50">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* Show More */}
      {shouldShowButton && (
        <div className="mt-24 flex justify-center">
          <button
            onClick={handleShowAll}
            className="group flex items-center gap-4 text-sm uppercase tracking-[0.2em]"
          >
            <span>
              {showAll ? "— Show Less" : "+ Show More"}
            </span>

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            >
              →
            </span>
          </button>
        </div>
      )}
    </div>
  );
}