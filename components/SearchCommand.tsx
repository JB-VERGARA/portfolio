"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { visualWork } from "@/data/visual-work";

type SearchResult =
  | {
      type: "project";
      slug: string;
      title: string;
      description: string;
      year: string;
      categories: string[];
      href: string;
    }
  | {
      type: "visual";
      slug: string;
      title: string;
      description: string;
      year: string;
      categories: string[];
    };

export default function SearchCommand() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo<SearchResult[]>(() => {
    const search = query.trim().toLowerCase();

    const projectResults: SearchResult[] = projects
      .filter((project) => {
        if (!search) return true;

        const searchableText = [
          project.title,
          project.description,
          project.year,
          ...project.categories,
          ...project.technologies,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(search);
      })
      .map((project) => ({
        type: "project" as const,
        slug: project.slug,
        title: project.title,
        description: project.description,
        year: project.year,
        categories: project.categories,
        href: `/work/${project.slug}`,
      }));

    const visualResults: SearchResult[] = visualWork
      .filter((work) => {
        if (!search) return true;

        const searchableText = [
          work.title,
          work.description,
          work.category,
          work.year,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(search);
      })
      .map((work) => ({
        type: "visual" as const,
        slug: work.slug,
        title: work.title,
        description: work.description,
        year: work.year,
        categories: [work.category],
      }));

    return [...projectResults, ...visualResults];
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isShortcut =
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k";

      if (isShortcut) {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (open) {
      window.setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeSearch = () => {
    setOpen(false);
    setQuery("");
  };

  const openVisualWork = (slug: string) => {
    closeSearch();

    window.setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("open-visual-work", {
          detail: { slug },
        }),
      );
    }, 0);
  };

  return (
    <>
      {/* Search Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="
          flex items-center gap-2
          rounded-full
          border border-[var(--foreground)]/20
          px-3 py-2
          text-xs uppercase tracking-[0.15em]
          transition-all duration-300
          hover:border-[var(--foreground)]
          hover:bg-[var(--foreground)]
          hover:text-[var(--background)]
        "
        aria-label="Open search"
      >
        <span>Search</span>
        <span className="hidden opacity-50 sm:inline">
          ⌘K
        </span>
      </button>

      {/* Search Overlay */}
      {open && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-start justify-center
            bg-[var(--background)]/90
            px-6 pt-[15vh]
            backdrop-blur-md
          "
          role="dialog"
          aria-modal="true"
          aria-label="Search portfolio"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeSearch();
            }
          }}
        >
          <div className="w-full max-w-3xl">
            {/* Search Input */}
            <div className="border-b-2 border-[var(--foreground)] pb-4">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects, visual work, technologies..."
                className="
                  w-full
                  bg-transparent
                  text-2xl
                  font-medium
                  tracking-tight
                  outline-none
                  placeholder:text-[var(--foreground)]/30
                  md:text-4xl
                "
              />
            </div>

            {/* Results */}
            <div className="mt-8 max-h-[55vh] overflow-y-auto">
              {results.length > 0 ? (
                <div className="space-y-2">
                  {results.map((result) => {
                    if (result.type === "visual") {
                      return (
                        <button
                          key={`visual-${result.slug}`}
                          type="button"
                          onClick={() => openVisualWork(result.slug)}
                          className="
                            group
                            flex
                            w-full
                            items-center
                            justify-between
                            border-b
                            border-[var(--border)]
                            px-2
                            py-5
                            text-left
                            transition-all
                            duration-300
                            hover:px-5
                            hover:bg-[var(--foreground)]/5
                          "
                        >
                          <div>
                            <div className="mb-2 flex items-center gap-3">
                              <span className="text-[9px] uppercase tracking-[0.2em] opacity-30">
                                Visual Work
                              </span>

                              <span className="text-[9px] uppercase tracking-[0.2em] opacity-20">
                                {result.year}
                              </span>
                            </div>

                            <p className="text-xl font-medium tracking-tight md:text-2xl">
                              {result.title}
                            </p>

                            <div className="mt-2 flex flex-wrap gap-3">
                              {result.categories.map((category) => (
                                <span
                                  key={category}
                                  className="
                                    text-[10px]
                                    uppercase
                                    tracking-[0.15em]
                                    opacity-40
                                  "
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                          </div>

                          <span
                            className="
                              ml-6
                              shrink-0
                              text-xs
                              uppercase
                              tracking-[0.15em]
                              opacity-30
                              transition-opacity
                              group-hover:opacity-100
                            "
                          >
                            View ↗
                          </span>
                        </button>
                      );
                    }

                    return (
                      <Link
                        key={`project-${result.slug}`}
                        href={result.href}
                        onClick={closeSearch}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          border-b
                          border-[var(--border)]
                          px-2
                          py-5
                          transition-all
                          duration-300
                          hover:px-5
                          hover:bg-[var(--foreground)]/5
                        "
                      >
                        <div>
                          <div className="mb-2 flex items-center gap-3">
                            <span className="text-[9px] uppercase tracking-[0.2em] opacity-30">
                              Project
                            </span>

                            <span className="text-[9px] uppercase tracking-[0.2em] opacity-20">
                              {result.year}
                            </span>
                          </div>

                          <p className="text-xl font-medium tracking-tight md:text-2xl">
                            {result.title}
                          </p>

                          <div className="mt-2 flex flex-wrap gap-3">
                            {result.categories.map((category) => (
                              <span
                                key={category}
                                className="
                                  text-[10px]
                                  uppercase
                                  tracking-[0.15em]
                                  opacity-40
                                "
                              >
                                {category}
                              </span>
                            ))}
                          </div>
                        </div>

                        <span
                          className="
                            ml-6
                            shrink-0
                            text-xs
                            uppercase
                            tracking-[0.15em]
                            opacity-30
                            transition-opacity
                            group-hover:opacity-100
                          "
                        >
                          View ↗
                        </span>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-sm uppercase tracking-[0.2em] opacity-40">
                    No results found.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between text-[10px] uppercase tracking-[0.15em] opacity-40">
              <span>
                {results.length}{" "}
                {results.length === 1 ? "result" : "results"}
              </span>

              <button
                onClick={closeSearch}
                className="transition-opacity hover:opacity-100"
              >
                ESC · Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}