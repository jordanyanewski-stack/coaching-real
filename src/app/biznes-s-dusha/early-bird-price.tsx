'use client';

import { useState, useEffect } from 'react';
import { EnrollForm } from '../masterclass/enroll-form';

/**
 * Early-bird pricing for „Бизнес с душа, без хаос".
 * €37 until the end of 15 June 2026 (Sofia / EEST = UTC+3), then €97.
 * A live countdown ticks every second to the deadline and auto-flips the price
 * to €97 when it reaches zero — no redeploy. Same calendar source as sticky-cta.tsx.
 *
 * SSR renders the early-bird state (€37) — the truth for the whole launch window —
 * so there's no layout flash before June 15. The countdown numbers only render
 * after mount (remaining !== null), so there's no hydration mismatch; the price
 * spans use suppressHydrationWarning for the one-time post-deadline correction.
 */
const EARLY_BIRD_END = Date.parse('2026-06-16T00:00:00+03:00'); // end of 15 June, Sofia
const REGULAR = '€97';
const EARLY = '€37';

interface EarlyBirdPriceProps {
  variant: 'hero' | 'value-stack' | 'final-cta';
}

function Countdown({ remaining }: { remaining: number }) {
  const d = Math.floor(remaining / 86_400_000);
  const h = Math.floor((remaining % 86_400_000) / 3_600_000);
  const m = Math.floor((remaining % 3_600_000) / 60_000);
  const s = Math.floor((remaining % 60_000) / 1_000);
  const units = [
    { v: d, label: 'дни' },
    { v: h, label: 'часа' },
    { v: m, label: 'мин' },
    { v: s, label: 'сек' },
  ];
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '5px' }}>
      {units.map((u, i) => (
        <div key={u.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '5px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '32px' }}>
            <span
              style={{
                fontSize: '20px',
                fontWeight: 900,
                color: '#70150E',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '0.01em',
              }}
            >
              {String(u.v).padStart(2, '0')}
            </span>
            <span
              style={{
                fontSize: '8.5px',
                fontWeight: 700,
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                color: '#9a8b7a',
                marginTop: '3px',
              }}
            >
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span style={{ fontSize: '18px', fontWeight: 800, color: 'rgba(112,21,14,0.28)', lineHeight: 1.05 }}>:</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function EarlyBirdPrice({ variant }: EarlyBirdPriceProps) {
  // null until mounted → SSR/initial render shows the early-bird price with a
  // static label (no ticking numbers) so hydration matches.
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(EARLY_BIRD_END - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const isEarly = remaining === null ? true : remaining > 0;
  const price = isEarly ? EARLY : REGULAR;

  // Early-bird note: live countdown after mount, static label before mount.
  const note = (align: 'flex-start' | 'center') => {
    if (remaining === null) {
      return (
        <span style={{ fontSize: '12px', fontWeight: 700, color: '#70150E', letterSpacing: '0.02em' }}>
          Ранно записване · до 15 юни
        </span>
      );
    }
    if (remaining <= 0) return null;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: align, gap: '7px' }}>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#70150E',
          }}
        >
          ⚡ Ранното записване свършва след
        </span>
        <Countdown remaining={remaining} />
      </div>
    );
  };

  if (variant === 'hero') {
    return (
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
          padding: '22px 26px',
          background: 'linear-gradient(135deg, #ffffff 0%, #fdf6ee 100%)',
          borderRadius: '18px',
          border: '1px solid rgba(107,21,14,0.16)',
          boxShadow: '0 12px 40px rgba(107,21,14,0.10), 0 1px 2px rgba(0,0,0,0.04)',
          maxWidth: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', rowGap: '8px' }}>
          {isEarly && (
            <span
              suppressHydrationWarning
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: 'rgba(15,19,26,0.4)',
                textDecoration: 'line-through',
                letterSpacing: '-0.01em',
              }}
            >
              {REGULAR}
            </span>
          )}
          <span
            suppressHydrationWarning
            style={{
              fontSize: 'clamp(2.4rem, 7vw, 3.2rem)',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}
          >
            {price}
          </span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#595e67', letterSpacing: '0.02em', alignSelf: 'center' }}>
            за всички 12 дни
          </span>
        </div>
        {isEarly && note('center')}
      </div>
    );
  }

  if (variant === 'value-stack') {
    return (
      <div
        style={{
          padding: '26px 24px 30px',
          backgroundColor: '#ffffff',
          borderTop: '1px solid rgba(107,21,14,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '18px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '12px' }}>
          {isEarly && (
            <span
              suppressHydrationWarning
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: 'rgba(15,19,26,0.4)',
                textDecoration: 'line-through',
              }}
            >
              {REGULAR}
            </span>
          )}
          <span
            suppressHydrationWarning
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 3.4rem)',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}
          >
            {price}
          </span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#595e67', letterSpacing: '0.02em', alignSelf: 'center' }}>
            за всички 12 дни
          </span>
        </div>
        {isEarly && note('center')}
        <a
          href="#enroll"
          className="mv-btn mv-btn-primary"
          style={{ fontSize: '16px', padding: '16px 32px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
        >
          Запиши се &rarr;
        </a>
      </div>
    );
  }

  // final-cta — price block + the EnrollForm bound to the date-correct product
  return (
    <div>
      <div
        className="mt-10 mb-10 inline-flex flex-col items-center gap-4 px-10 py-7"
        style={{
          backgroundColor: '#faf8f5',
          borderRadius: '14px',
          border: '1px solid rgba(107,21,14,0.1)',
        }}
      >
        <div className="flex items-baseline gap-3">
          {isEarly && (
            <span
              suppressHydrationWarning
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: 'rgba(15,19,26,0.4)',
                textDecoration: 'line-through',
              }}
            >
              {REGULAR}
            </span>
          )}
          <span
            suppressHydrationWarning
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 900,
              color: 'var(--mv-text-primary)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            {price}
          </span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#595e67', letterSpacing: '0.02em' }}>
            за всички 12 дни
          </span>
        </div>
        {isEarly && note('center')}
      </div>

      <div className="flex flex-col items-center gap-4">
        <EnrollForm product={isEarly ? 'biznes-dusha-early' : 'biznes-dusha'} allowPromoCode />
      </div>
    </div>
  );
}
