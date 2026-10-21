import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import VisualWorkGallery from "@/components/VisualWorkGallery";

export const metadata = {
  title: "Visual Work — Bryan Vergara",
  description:
    "A collection of UI concepts, Figma explorations, visual experiments, and design work by Bryan Vergara.",
};

export default function VisualWorkPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 pb-32 pt-32 md:px-10 md:pb-40 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 flex items-center justify-between gap-6">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.3em] opacity-50">
                  Visual Work
                </p>

                <h1 className="max-w-4xl text-5xl font-medium leading-tight tracking-tight md:text-8xl">
                  A collection of visual experiments.
                </h1>
              </div>

              <Link
                href="/#visuals"
                className="
                  hidden shrink-0
                  text-xs uppercase tracking-[0.2em]
                  opacity-40 transition-opacity
                  hover:opacity-100
                  md:block
                "
              >
                ← Back
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="mb-20 max-w-2xl text-sm leading-relaxed opacity-60 md:text-base">
              UI concepts, Figma explorations, posters, visual experiments,
              and other design work that sits alongside my technical projects.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <VisualWorkGallery />
          </Reveal>

          <div className="mt-20 border-t border-[var(--border)] pt-6 md:hidden">
            <Link
              href="/#visuals"
              className="
                text-xs uppercase tracking-[0.2em]
                opacity-40 transition-opacity
                hover:opacity-100
              "
            >
              ← Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}