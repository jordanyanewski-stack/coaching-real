"use client";
import { useState, useEffect } from "react";
import { T, GRADIENT_TEXT } from "@/app/_shared";
import { EpisodeThumbnail } from "@/components/episode-thumbnail";

export type Episode = {
  id: string;
  videoId: string;
  season: number;
  episode: number;
  title: string;
  featured?: boolean;
  thumbnail?: string;
};

export function PodcastPlayer({
  season2Episodes,
  season1Episodes,
}: {
  season2Episodes: Episode[];
  season1Episodes: Episode[];
}) {
  const [activeSeason, setActiveSeason] = useState<1 | 2>(2);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const episodes = activeSeason === 2 ? season2Episodes : season1Episodes;
  const featured = episodes.find((e) => e.featured)!;
  const catalogue = episodes.filter((e) => !e.featured);
  const activeEpisode = [...season2Episodes, ...season1Episodes].find(
    (e) => e.videoId === activeVideoId
  );

  useEffect(() => {
    if (!activeVideoId) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveVideoId(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeVideoId]);

  useEffect(() => {
    document.body.style.overflow = activeVideoId ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeVideoId]);

  return (
    <>
      <SeasonToggle activeSeason={activeSeason} onChange={setActiveSeason} />
      <FeaturedSection episode={featured} onPlay={() => setActiveVideoId(featured.videoId)} />
      <CatalogueSection
        episodes={catalogue}
        season={activeSeason}
        onPlay={setActiveVideoId}
      />
      {activeVideoId && (
        <VideoModal
          videoId={activeVideoId}
          title={activeEpisode?.title ?? ""}
          season={activeEpisode?.season ?? activeSeason}
          episode={activeEpisode?.episode ?? 0}
          onClose={() => setActiveVideoId(null)}
        />
      )}
    </>
  );
}

/* ─── SEASON TOGGLE ──────────────────────────────────────────────────── */
function SeasonToggle({
  activeSeason,
  onChange,
}: {
  activeSeason: 1 | 2;
  onChange: (s: 1 | 2) => void;
}) {
  return (
    <div className="px-6 md:px-16 lg:px-24 pt-2 pb-6">
      <div className="max-w-6xl mx-auto">
        <div
          style={{
            display: "inline-flex",
            gap: "4px",
            backgroundColor: "#f0f0f0",
            borderRadius: "999px",
            padding: "4px",
          }}
          role="tablist"
          aria-label="Избери сезон"
        >
          {([2, 1] as const).map((s) => {
            const isActive = activeSeason === s;
            return (
              <button
                key={s}
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(s)}
                style={{
                  padding: "8px 24px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.01em",
                  transition: "all 200ms ease",
                  backgroundColor: isActive ? "#6b150e" : "transparent",
                  color: isActive ? "#ffffff" : "rgba(0,0,0,0.45)",
                  boxShadow: isActive ? "0 2px 8px rgba(107,21,14,0.25)" : "none",
                }}
              >
                Сезон {s}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── VIDEO MODAL ────────────────────────────────────────────────────── */
function VideoModal({
  videoId,
  title,
  season,
  episode,
  onClose,
}: {
  videoId: string;
  title: string;
  season: number;
  episode: number;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{ position: "relative", width: "100%", maxWidth: "920px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "14px",
            gap: "16px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#e87070",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Сезон {season} · Епизод {episode}
            </p>
            <h2
              style={{
                fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
                fontWeight: 800,
                ...GRADIENT_TEXT,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Затвори"
            style={{
              flexShrink: 0,
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              backgroundColor: "rgba(255,255,255,0.08)",
              color: "#ffffff",
              fontSize: "18px",
              lineHeight: 1,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 200ms",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "rgba(255,255,255,0.18)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "rgba(255,255,255,0.08)";
            }}
          >
            ✕
          </button>
        </div>

        {/* Player */}
        <div
          style={{
            position: "relative",
            aspectRatio: "16/9",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "#000",
            boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>

        {/* Hint */}
        <p
          style={{
            marginTop: "10px",
            fontSize: "12px",
            color: "rgba(255,255,255,0.3)",
            textAlign: "center",
          }}
        >
          Натисни ESC или кликни извън видеото за да затвориш
        </p>
      </div>
    </div>
  );
}

/* ─── FEATURED EPISODE ──────────────────────────────────────────────── */
function FeaturedSection({
  episode,
  onPlay,
}: {
  episode: Episode;
  onPlay: () => void;
}) {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-8">
      <div className="max-w-6xl mx-auto">
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "rgba(0,0,0,0.32)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Последен епизод
        </p>

        <button
          onClick={onPlay}
          className="group block w-full text-left overflow-hidden"
          style={{
            borderRadius: "14px",
            border: "1px solid rgba(107,21,14,0.15)",
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <div className="grid lg:grid-cols-[1.4fr_1fr]" style={{ minHeight: "340px" }}>
            {/* Thumbnail */}
            <div className="relative overflow-hidden" style={{ minHeight: "220px" }}>
              <EpisodeThumbnail
                videoId={episode.videoId}
                localSrc={episode.thumbnail}
                alt={episode.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s ease",
                }}
                className="group-hover:scale-105"
              />
              {/* Play overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                style={{
                  background: "rgba(0,0,0,0.35)",
                  transition: "opacity 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.95)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5.14v14l11-7-11-7z" fill="#0a0a0a" />
                  </svg>
                </div>
              </div>
              {/* Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  backgroundColor: "rgba(107,21,14,0.85)",
                  backdropFilter: "blur(8px)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                С{episode.season} · Еп. {episode.episode}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#6b150e",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Сезон {episode.season} · Епизод {episode.episode}
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                  fontWeight: 900,
                  ...GRADIENT_TEXT,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginBottom: "24px",
                }}
              >
                {episode.title}
              </h2>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#6b150e",
                }}
              >
                ▶ Гледай епизода
              </span>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}

/* ─── CATALOGUE GRID ─────────────────────────────────────────────────── */
function CatalogueSection({
  episodes,
  season,
  onPlay,
}: {
  episodes: Episode[];
  season: 1 | 2;
  onPlay: (videoId: string) => void;
}) {
  return (
    <section
      className="px-6 md:px-16 lg:px-24 pt-12 pb-24"
      style={{ backgroundColor: "#f3f4f6" }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "rgba(0,0,0,0.32)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Всички епизоди · Сезон {season}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {episodes.map((episode) => (
            <EpisodeCard
              key={episode.id}
              episode={episode}
              onPlay={() => onPlay(episode.videoId)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EPISODE CARD ──────────────────────────────────────────────────── */
function EpisodeCard({
  episode,
  onPlay,
}: {
  episode: Episode;
  onPlay: () => void;
}) {
  return (
    <button
      onClick={onPlay}
      className="mv-program-card group flex flex-col overflow-hidden text-left w-full"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        border: "1px solid rgba(0,0,0,0.08)",
        cursor: "pointer",
        padding: 0,
      }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <EpisodeThumbnail
          videoId={episode.videoId}
          localSrc={episode.thumbnail}
          alt={episode.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s ease",
          }}
          className="group-hover:scale-105"
        />
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
          style={{
            background: "rgba(0,0,0,0.35)",
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M8 5.14v14l11-7-11-7z" fill="#0a0a0a" />
            </svg>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            padding: "3px 9px",
            borderRadius: "999px",
            backgroundColor: "rgba(107,21,14,0.82)",
            backdropFilter: "blur(6px)",
            fontSize: "10px",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Еп. {episode.episode}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 800,
            color: T.textPrimary,
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            marginBottom: "8px",
          }}
        >
          {episode.title}
        </h3>
        <p
          style={{
            fontSize: "12px",
            color: "rgba(0,0,0,0.35)",
            fontWeight: 500,
            marginTop: "auto",
          }}
        >
          Сезон {episode.season} · Епизод {episode.episode}
        </p>
      </div>
    </button>
  );
}
