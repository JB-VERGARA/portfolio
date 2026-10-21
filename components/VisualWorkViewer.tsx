"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { VisualWork } from "@/data/visual-work";

type VisualWorkViewerProps = {
  items: VisualWork[];
  selectedIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function VisualWorkViewer({
  items,
  selectedIndex,
  onClose,
  onPrevious,
  onNext,
}: VisualWorkViewerProps) {
  const item = items[selectedIndex];
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
        return;
      }

      if (event.key === "Tab") {
        const dialog = document.querySelector(
          '[data-visual-viewer="true"]',
        ) as HTMLElement | null;

        if (!dialog) return;

        const focusable = dialog.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])',
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrevious, onNext]);

  if (!item) {
    return null;
  }

  const showGalleryLink =
    (items.length === 3 && selectedIndex === 2) ||
    (items.length === 6 && selectedIndex === 5);

  return (
    <div
      data-visual-viewer="true"
      className="
        fixed
        inset-0
        z-[9998]
        flex
        items-start
        justify-center
        overflow-y-auto
        bg-black/30
        p-3
        backdrop-blur-md
        sm:items-center
        sm:p-6
        lg:p-8
      "
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} visual work viewer`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Close */}
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="
          fixed
          right-4
          top-4
          z-[10000]
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-[var(--background)]
          text-xl
          leading-none
          shadow-lg
          transition-opacity
          hover:opacity-70
          focus-visible:outline-none
          focus-visible:ring-1
          focus-visible:ring-[var(--foreground)]
          sm:right-6
          sm:top-6
        "
        aria-label="Close visual work viewer"
      >
        ×
      </button>

      <div
        className="
          relative
          flex
          w-full
          max-w-[1320px]
          flex-col
          overflow-hidden
          bg-[var(--background)]
          shadow-2xl
          lg:max-h-[90vh]
          lg:flex-row
        "
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        {/* Image */}
        <div
          className="
            relative
            flex
            w-full
            shrink-0
            items-center
            justify-center
            overflow-hidden
            p-5
            pt-12
            sm:p-8
            sm:pt-14
            lg:min-h-0
            lg:flex-1
            lg:p-11
            lg:pt-11
          "
        >
          {item.image ? (
            <img
              key={item.slug}
              src={item.image}
              alt={item.title}
              className="
                block
                max-h-[45vh]
                max-w-full
                object-contain
                animate-[visualWorkIn_300ms_ease-out]
                select-none
                sm:max-h-[50vh]
                lg:max-h-full
              "
              draggable={false}
            />
          ) : (
            <div
              className="
                flex
                aspect-[4/3]
                w-full
                items-center
                justify-center
                border
                border-[var(--border)]
              "
            >
              <span className="text-xs uppercase tracking-[0.2em] opacity-30">
                No image
              </span>
            </div>
          )}

          <button
            type="button"
            onClick={onPrevious}
            className="
              absolute
              left-1
              top-1/2
              z-20
              -translate-y-1/2
              rounded-full
              p-3
              text-lg
              opacity-50
              transition-all
              hover:bg-black/5
              hover:opacity-100
              focus-visible:outline-none
              focus-visible:ring-1
              focus-visible:ring-[var(--foreground)]
              sm:left-3
              lg:left-5
            "
            aria-label="Previous visual work"
          >
            ←
          </button>

          <button
            type="button"
            onClick={onNext}
            className="
              absolute
              right-1
              top-1/2
              z-20
              -translate-y-1/2
              rounded-full
              p-3
              text-lg
              opacity-50
              transition-all
              hover:bg-black/5
              hover:opacity-100
              focus-visible:outline-none
              focus-visible:ring-1
              focus-visible:ring-[var(--foreground)]
              sm:right-3
              lg:right-5
            "
            aria-label="Next visual work"
          >
            →
          </button>
        </div>

        {/* Details */}
        <aside
          className="
            flex
            w-full
            shrink-0
            flex-col
            justify-between
            border-t
            border-[var(--border)]
            p-6
            sm:p-8
            lg:max-h-none
            lg:w-[395px]
            lg:overflow-y-auto
            lg:border-l
            lg:border-t-0
            lg:p-9
            xl:w-[425px]
          "
        >
          <div>
            <div className="mb-8 flex items-center justify-between pr-12 sm:mb-10">
              <span className="text-[10px] uppercase tracking-[0.25em] opacity-40">
                Visual Work
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] opacity-30">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </span>
            </div>

            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] opacity-40">
              {item.category} · {item.year}
            </p>

            <h2 className="text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
              {item.title}
            </h2>

            <p className="mt-5 text-sm leading-relaxed opacity-60">
              {item.description}
            </p>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-7
                  inline-block
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  opacity-50
                  transition-opacity
                  hover:opacity-100
                "
              >
                View Project ↗
              </a>
            )}
          </div>

          <div className="mt-8 border-t border-[var(--border)] pt-5 sm:mt-10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={onPrevious}
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  opacity-50
                  transition-opacity
                  hover:opacity-100
                  focus-visible:outline-none
                  focus-visible:ring-1
                  focus-visible:ring-[var(--foreground)]
                "
                aria-label="Previous visual work"
              >
                ← Previous
              </button>

              <button
                type="button"
                onClick={onNext}
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  opacity-50
                  transition-opacity
                  hover:opacity-100
                  focus-visible:outline-none
                  focus-visible:ring-1
                  focus-visible:ring-[var(--foreground)]
                "
                aria-label="Next visual work"
              >
                Next →
              </button>
            </div>

            {showGalleryLink && (
              <Link
                href="/visual-work"
                className="
                  mt-6
                  block
                  border-t
                  border-[var(--border)]
                  pt-5
                  text-center
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  opacity-50
                  transition-opacity
                  hover:opacity-100
                "
              >
                See more? Check the full gallery →
              </Link>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}