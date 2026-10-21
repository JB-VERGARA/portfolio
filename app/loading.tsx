export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] opacity-40">
          Loading
        </p>

        <div className="mt-6 h-px w-24 overflow-hidden bg-[var(--border)]">
          <div className="h-full w-1/2 animate-pulse bg-[var(--foreground)]" />
        </div>
      </div>
    </main>
  );
}