'use client';

type Props = {
  libraryId: string;
  videoId: string;
  thumbnailUrl?: string;
};

/**
 * Renders the Bunny Stream embed directly with its native player controls.
 * The iframe is loaded immediately so clicking play has zero swap delay.
 */
export function HeroVideo({ libraryId, videoId }: Props) {
  return (
    <iframe
      src={`https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}?autoplay=true&loop=false&muted=true&preload=true&responsive=true`}
      title="12 Измерения на твоята мисия"
      loading="eager"
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
