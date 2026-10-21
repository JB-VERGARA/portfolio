"use client";

import { useEffect, useRef, useState } from "react";

const modes = ["Original", "Dark", "Artistic"] as const;

type Mode = (typeof modes)[number];

const modeMessages: Record<Mode, string> = {
  Original: "Clean, structured, practical.",
  Dark: "Focused, technical, minimal.",
  Artistic: "Experimental, creative, visual.",
};

export default function ModeSwitcher() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("Original");
  const [showIntro, setShowIntro] = useState(false);
  const [message, setMessage] = useState("");
  const modeButtonRef = useRef<HTMLButtonElement>(null);
  const modeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedMode = localStorage.getItem("portfolio-mode") as Mode | null;
    const introSeen = localStorage.getItem("portfolio-mode-intro-seen");

    if (savedMode && modes.includes(savedMode)) {
      setMode(savedMode);
      document.documentElement.dataset.mode = savedMode.toLowerCase();
    } else {
      document.documentElement.dataset.mode = "original";
    }

    if (!introSeen) {
      setMessage(
        "Three sides of the same portfolio. Choose a mode to explore."
      );
      setShowIntro(true);
    }
  }, []);

  // Close mode menu with Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        modeButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Focus first mode when menu opens
  useEffect(() => {
    if (open) {
      const firstButton = modeMenuRef.current?.querySelector(
        "button"
      ) as HTMLButtonElement | null;

      firstButton?.focus();
    }
  }, [open]);

  const handleToggle = () => {
    setOpen((current) => !current);
  };

  const dismissIntro = () => {
    setShowIntro(false);
    localStorage.setItem("portfolio-mode-intro-seen", "true");
  };

  const changeMode = (newMode: Mode) => {
    setMode(newMode);
    setOpen(false);

    localStorage.setItem("portfolio-mode", newMode);
    document.documentElement.dataset.mode = newMode.toLowerCase();

    localStorage.setItem("portfolio-mode-intro-seen", "true");

    setMessage(modeMessages[newMode]);
    setShowIntro(true);

    window.setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    window.setTimeout(() => {
      modeButtonRef.current?.focus();
    }, 0);
  };

  return (
    <div className="relative">
      {/* Mode Introduction / Tooltip */}
      {showIntro && (
        <div
          className="
                 mode-intro
                  absolute
                  top-12
                  right-0
                  z-50
                  w-[min(260px,calc(100vw-2rem))]
                  rounded-2xl
                  border
                  border-[var(--foreground)]/10
                  bg-[var(--background)]
                  p-4
                  shadow-xl
                  md:top-5
                  md:right-34
                "
                role="status"
                aria-live="polite"
        >
          <button
            onClick={dismissIntro}
            className="
              absolute
              right-3
              top-3
              text-xs
              opacity-40
              transition-opacity
              hover:opacity-100
            "
            aria-label="Dismiss mode introduction"
          >
            ×
          </button>

          <p className="pr-5 text-sm leading-relaxed">{message}</p>
        </div>
      )}

      {/* Mode Button */}
<button
  ref={modeButtonRef}
  onClick={handleToggle}
  className="
    rounded-full
    border
    border-[var(--foreground)]/20
    px-3
    py-2
    text-xs
    uppercase
    tracking-[0.15em]
    text-[var(--foreground)]
    transition-all
    duration-300
    hover:border-[var(--foreground)]
    hover:bg-[var(--foreground)]
    hover:text-[var(--background)]
    sm:px-4
  "
  aria-label={`Current mode: ${mode}. Change portfolio mode`}
  aria-expanded={open}
  aria-controls="portfolio-mode-menu"
  aria-haspopup="menu"
>
  <span className="sm:hidden">◐</span>
  <span className="hidden sm:inline">◐ {mode}</span>
</button>

      {/* Mode Menu */}
      {open && (
        <div
          id="portfolio-mode-menu"
          ref={modeMenuRef}
          className="
            absolute
            right-0
            top-12
            z-40
            flex
            min-w-[130px]
            flex-col
            rounded-xl
            border
            border-[var(--foreground)]/10
            bg-[var(--background)]
            p-2
            shadow-lg
          "
          role="menu"
          aria-label="Portfolio modes"
        >
          {modes.map((item) => (
            <button
              key={item}
              onClick={() => changeMode(item)}
              className={`
                rounded-lg
                px-3
                py-2
                text-left
                text-xs
                uppercase
                tracking-[0.15em]
                transition-colors
                ${
                  mode === item
                    ? "bg-[var(--foreground)] text-[var(--background)]"
                    : "text-[var(--foreground)] hover:bg-[var(--foreground)]/5"
                }
              `}
              role="menuitemradio"
              aria-checked={mode === item}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}