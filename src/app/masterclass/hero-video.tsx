'use client';

import { useState } from 'react';

type Props = {
  libraryId: string;
  videoId: string;
  thumbnailUrl: string;
};

export function HeroVideo({ libraryId, videoId, thumbnailUrl }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`}
        title="12 Измерения на твоята мисия"
        loading="lazy"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Гледай видеото - натисни тук за старт"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0,
        border: 'none',
        cursor: 'pointer',
        background: 'transparent',
        overflow: 'hidden',
      }}
    >
      {/* Poster image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnailUrl}
        alt=""
        loading="eager"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Dark gradient overlay for text contrast */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      {/* Top label */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#ffffff',
          fontSize: '13px',
          fontWeight: 800,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          textShadow: '0 2px 12px rgba(0,0,0,0.7)',
          whiteSpace: 'nowrap',
        }}
      >
        Гледай видеото
      </div>

      {/* Play button */}
      <div
        className="hero-video-play"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '92px',
          height: '92px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow:
            '0 0 0 8px rgba(255,255,255,0.18), 0 12px 40px rgba(112,21,14,0.55)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        <svg width="30" height="34" viewBox="0 0 30 34" fill="none" aria-hidden>
          <path d="M28 17L1.75 32.1554L1.75 1.84462L28 17Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          position: 'absolute',
          bottom: '18px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: 700,
          textShadow: '0 2px 12px rgba(0,0,0,0.7)',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        Натисни тук за старт
      </div>

      <style jsx>{`
        button:hover :global(.hero-video-play) {
          transform: translate(-50%, -50%) scale(1.06);
          box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.22),
            0 16px 48px rgba(112, 21, 14, 0.6);
        }
      `}</style>
    </button>
  );
}
