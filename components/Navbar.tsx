"use client";

import { useEffect, useRef, useState } from "react";
import ModeSwitcher from "@/components/ModeSwitcher";
import SearchCommand from "@/components/SearchCommand";

const navItems = [
  "Work",
  "About",
  "Visuals",
  "Experience",
  "Credentials",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Work");
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      const firstButton = menuRef.current?.querySelector(
        "button",
      ) as HTMLButtonElement | null;

      firstButton?.focus();
    }
  }, [open]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const currentSection = visibleSections[0].target.id;

          const matchingItem = navItems.find(
            (item) => item.toLowerCase() === currentSection,
          );

          if (matchingItem) {
            setActiveSection(matchingItem);
          }
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavigation = (item: string) => {
    setOpen(false);
    setActiveSection(item);

    const section = document.getElementById(item.toLowerCase());

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    window.setTimeout(() => {
      menuButtonRef.current?.focus();
    }, 300);
  };

  const handleLogoClick = () => {
    setOpen(false);
    setActiveSection("Work");
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-5 sm:px-6 sm:py-6 md:px-10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/#top"
          onClick={handleLogoClick}
          className="text-sm font-semibold uppercase tracking-[0.2em]"
          aria-label="Back to top"
        >
          JBV
        </a>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4">
          <SearchCommand />
          <ModeSwitcher />

          <button
            ref={menuButtonRef}
            onClick={() => setOpen((current) => !current)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              transition-opacity
              duration-300
              hover:opacity-50
              md:h-auto
              md:w-auto
              md:rounded-none
            "
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="main-navigation-menu"
            aria-haspopup="true"
          >
            {/* Mobile / Tablet */}
            <span className="flex flex-col gap-1.5 md:hidden">
              <span
                className={`
                  h-px
                  w-5
                  bg-current
                  transition-transform
                  duration-300
                  ${open ? "translate-y-[3px] rotate-45" : ""}
                `}
              />
              <span
                className={`
                  h-px
                  w-5
                  bg-current
                  transition-transform
                  duration-300
                  ${open ? "-translate-y-[3px] -rotate-45" : ""}
                `}
              />
            </span>

            {/* Desktop */}
            <span className="hidden text-sm uppercase tracking-[0.2em] md:inline">
              {open ? "Close" : "Menu"}
            </span>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          id="main-navigation-menu"
          ref={menuRef}
          className={`
            absolute
            right-4
            top-16
            flex
            w-[calc(100vw-2rem)]
            flex-col
            gap-4
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--background)]
            p-6
            shadow-lg
            transition-all
            duration-300
            sm:right-6
            sm:w-auto
            md:right-60
            md:top-16
            md:p-6
            ${
              open
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }
          `}
          aria-hidden={!open}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item;

            return (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                tabIndex={open ? 0 : -1}
                className={`
                  flex
                  items-center
                  gap-3
                  text-left
                  text-sm
                  uppercase
                  tracking-[0.15em]
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "text-[var(--foreground)]"
                      : "text-[var(--foreground)]/40 hover:text-[var(--foreground)]"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={`
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[var(--foreground)]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }
                  `}
                  aria-hidden="true"
                />

                {item}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}