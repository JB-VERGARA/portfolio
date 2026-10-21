type YouTubeEmbedProps = {
  url: string;
  title: string;
};

function getYouTubeId(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.slice(1);
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      return parsedUrl.searchParams.get("v");
    }

    return null;
  } catch {
    return null;
  }
}

export default function YouTubeEmbed({
  url,
  title,
}: YouTubeEmbedProps) {
  const videoId = getYouTubeId(url);

  if (!videoId) {
    return null;
  }

  return (
    <section className="mb-32">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] opacity-40">
          Video
        </p>
      </div>

      <div className="relative aspect-video overflow-hidden bg-[var(--foreground)]/5">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}