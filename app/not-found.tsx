import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center px-6 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] opacity-40">
          404 — Not Found
        </p>

        <h1 className="max-w-5xl text-[18vw] font-semibold leading-[0.78] tracking-[-0.08em] md:text-[12vw] lg:text-[10vw]">
          Lost.
        </h1>

        <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-sm leading-relaxed opacity-60 md:text-base">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved somewhere else.
          </p>

          <Link
            href="/"
            className="
              text-xs uppercase tracking-[0.2em]
              transition-opacity hover:opacity-50
            "
          >
            Back to home →
          </Link>
        </div>
      </div>
    </main>
  );
}