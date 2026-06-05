'use client';

type Props = {
  libraryId: string;
  videoId: string;
  thumbnailUrl?: string;
};

/**
 * Bunny Stream VSL player for the /biznes-s-dusha campaign page.
 * Renders the Bunny Stream embed with the auto-generated poster + native play
 * button. No autoplay and not muted — this is a dedicated sales-video section
 * (not a hero loop), so it plays with sound the moment the visitor clicks play.
 */
export function HeroVideo({ libraryId, videoId }: Props) {
  return (
    <iframe
      src={`https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}?autoplay=false&loop=false&muted=false&preload=true&responsive=true`}
      title="Бизнес с душа, без хаос — видео"
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
