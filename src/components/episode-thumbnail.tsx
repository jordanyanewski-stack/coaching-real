"use client";
import { useState } from "react";

// YouTube serves a tiny gray placeholder (≤120px wide) via HTTP 200 when
// a given quality tier doesn't exist - onError never fires for those.
// We detect it via naturalWidth in onLoad and step down to the next size.
const SIZES = ["maxresdefault", "sddefault", "hqdefault", "mqdefault"] as const;
const PLACEHOLDER_WIDTH = 120;

export function EpisodeThumbnail({
  videoId,
  alt,
  className,
  style,
}: {
  videoId: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [sizeIdx, setSizeIdx] = useState(0);
  const [allFailed, setAllFailed] = useState(false);

  const advance = () => {
    if (sizeIdx < SIZES.length - 1) {
      setSizeIdx((i) => i + 1);
    } else {
      setAllFailed(true);
    }
  };

  if (allFailed) {
    return <BrandedPlaceholder alt={alt} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={sizeIdx}
      src={`https://img.youtube.com/vi/${videoId}/${SIZES[sizeIdx]}.jpg`}
      alt={alt}
      className={className}
      style={style}
      onLoad={(e) => {
        if ((e.currentTarget as HTMLImageElement).naturalWidth <= PLACEHOLDER_WIDTH) {
          advance();
        }
      }}
      onError={advance}
    />
  );
}

function BrandedPlaceholder({ alt }: { alt: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(135deg, #f5eded 0%, #ede0df 60%, #e8d5d3 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="11" fill="rgba(107,21,14,0.12)" />
        <path d="M10 8.5l6 3.5-6 3.5V8.5z" fill="rgba(107,21,14,0.5)" />
      </svg>
      <span
        style={{
          fontSize: "11px",
          color: "rgba(107,21,14,0.55)",
          fontWeight: 600,
          textAlign: "center",
          padding: "0 12px",
          maxWidth: "160px",
          lineHeight: 1.4,
        }}
      >
        {alt}
      </span>
    </div>
  );
}
