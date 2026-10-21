"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import VisualWorkViewer from "@/components/VisualWorkViewer";
import { visualWork } from "@/data/visual-work";

type VisualWorkGalleryProps = {
  showViewAll?: boolean;
};

export default function VisualWorkGallery({
  showViewAll = false,
}: VisualWorkGalleryProps) {
  const displayedWork = showViewAll
    ? visualWork.slice(0, 6)
    : visualWork;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    null,
  );

  const [viewerItems, setViewerItems] = useState(displayedWork);

  const [openedFromSearch, setOpenedFromSearch] = useState(false);

  const [mounted, setMounted] = useState(false);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleMediaChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleMediaChange();

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  /*
   * Open a visual work from the global SearchCommand.
   */
  useEffect(() => {
    const handleOpenVisualWork = (event: Event) => {
      const customEvent = event as CustomEvent<{ slug: string }>;
      const slug = customEvent.detail?.slug;

      if (!slug) return;

      const index = visualWork.findIndex(
        (item) => item.slug === slug,
      );

      if (index === -1) return;

      setViewerItems(visualWork);
      setSelectedIndex(index);
      setOpenedFromSearch(true);
    };

    window.addEventListener(
      "open-visual-work",
      handleOpenVisualWork,
    );

    return () => {
      window.removeEventListener(
        "open-visual-work",
        handleOpenVisualWork,
      );
    };
  }, []);

  const openViewer = (index: number) => {
    const viewerWork =
      showViewAll && !isDesktop
        ? displayedWork.slice(0, 3)
        : displayedWork;

    setViewerItems(viewerWork);
    setSelectedIndex(index);
    setOpenedFromSearch(false);
  };

  const closeViewer = () => {
    const shouldReturnToGallery = openedFromSearch;

    setSelectedIndex(null);
    setOpenedFromSearch(false);

    if (shouldReturnToGallery) {
      window.setTimeout(() => {
        const gallery = document.getElementById("visuals");

        if (gallery) {
          gallery.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 50);
    }
  };

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null || viewerItems.length === 0) {
        return current;
      }

      return (
        (current - 1 + viewerItems.length) %
        viewerItems.length
      );
    });
  };

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null || viewerItems.length === 0) {
        return current;
      }

      return (current + 1) % viewerItems.length;
    });
  };

  return (
    <>
      {displayedWork.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16 lg:grid-cols-3">
          {displayedWork.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => {
                if (item.image) {
                  openViewer(index);
                }
              }}
              disabled={!item.image}
              className={`
                group
                block
                w-full
                text-left
                focus-visible:outline-none
                focus-visible:ring-1
                focus-visible:ring-[var(--foreground)]
                focus-visible:ring-offset-4
                disabled:cursor-default
                ${index >= 3 ? "hidden lg:block" : ""}
              `}
              aria-label={
                item.image
                  ? `View ${item.title}`
                  : item.title
              }
            >
              {/* Image */}
              {item.image ? (
                <div
                  className="
                    relative
                    aspect-square
                    overflow-hidden
                    bg-[var(--background)]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      block
                      h-full
                      w-full
                      object-cover
                      grayscale
                      transition-all
                      duration-700
                      ease-out
                      group-hover:scale-[1.03]
                      group-hover:grayscale-0
                    "
                    loading="lazy"
                    draggable={false}
                  />

                  {/* Hover Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      transition-all
                      duration-500
                      group-hover:bg-black/20
                    "
                  >
                    <span
                      className="
                        translate-y-3
                        rounded-full
                        bg-white
                        px-5
                        py-3
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-black
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      View →
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className="
                    flex
                    aspect-square
                    items-center
                    justify-center
                    border
                    border-[var(--border)]
                    bg-[var(--background)]
                  "
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-30">
                    No image
                  </span>
                </div>
              )}

              {/* Metadata */}
              <div className="mt-4 md:mt-5">
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className="
                      text-sm
                      font-medium
                      tracking-tight
                      transition-opacity
                      duration-300
                      group-hover:opacity-60
                      md:text-base
                    "
                  >
                    {item.title}
                  </h3>

                  <span className="shrink-0 text-[10px] uppercase tracking-[0.15em] opacity-30">
                    {item.year}
                  </span>
                </div>

                <p className="mt-2 text-[10px] uppercase tracking-[0.15em] opacity-40">
                  {item.category}
                </p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="border-t border-[var(--border)] py-20">
          <p className="text-sm uppercase tracking-[0.2em] opacity-40">
            Visual work coming soon.
          </p>
        </div>
      )}

      {/* View Full Gallery */}
      {showViewAll && visualWork.length > 6 && (
        <div className="mt-16 flex justify-center">
          <a
            href="/visual-work"
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              opacity-50
              transition-opacity
              hover:opacity-100
            "
          >
            View Full Gallery →
          </a>
        </div>
      )}

      {/* Viewer */}
      {mounted &&
        selectedIndex !== null &&
        createPortal(
          <VisualWorkViewer
            items={viewerItems}
            selectedIndex={selectedIndex}
            onClose={closeViewer}
            onPrevious={showPrevious}
            onNext={showNext}
          />,
          document.body,
        )}
    </>
  );
}