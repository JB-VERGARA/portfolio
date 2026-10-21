"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center px-6 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] opacity-40">
          Something went wrong
        </p>

        <h1 className="max-w-5xl text-6xl font-semibold leading-none tracking-[-0.06em] md:text-8xl lg:text-[9vw]">
          Try again.
        </h1>

        <div className="mt-12 flex flex-wrap gap-6">
          <button
            onClick={() => reset()}
            className="
              rounded-full
              border border-[var(--foreground)]/20
              px-5 py-3
              text-xs uppercase tracking-[0.15em]
              transition-all duration-300
              hover:border-[var(--foreground)]
              hover:bg-[var(--foreground)]
              hover:text-[var(--background)]
            "
          >
            Try Again
          </button>

          <a
            href="/"
            className="
              rounded-full
              border border-[var(--border)]
              px-5 py-3
              text-xs uppercase tracking-[0.15em]
              opacity-50
              transition-opacity hover:opacity-100
            "
          >
            Back Home
          </a>
        </div>
      </div>
    </main>
  );
}