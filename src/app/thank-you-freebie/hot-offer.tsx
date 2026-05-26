'use client';

import { useState, useEffect } from 'react';
import { Countdown, OfferExpired } from './countdown';
import { EnrollForm } from '../masterclass/enroll-form';

const THIRTY_MINUTES = 30 * 60 * 1000;

function getOptinTimestamp(): number | null {
  const match = document.cookie.match(/(?:^|;\s*)funnel_optin=(\d+)/);
  return match ? Number(match[1]) : null;
}

export function HotOffer() {
  const [state, setState] = useState<'loading' | 'active' | 'expired' | 'no-optin'>('loading');
  const [expiresAt, setExpiresAt] = useState(0);

  useEffect(() => {
    const ts = getOptinTimestamp();
    if (!ts) {
      setState('no-optin');
      return;
    }
    const deadline = ts + THIRTY_MINUTES;
    if (Date.now() >= deadline) {
      setState('expired');
    } else {
      setExpiresAt(deadline);
      setState('active');
    }
  }, []);

  if (state === 'loading') return null;

  if (state === 'no-optin' || state === 'expired') {
    return <OfferExpired />;
  }

  return (
    <div>
      {/* Timer */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <p
          style={{
            fontSize: '13px',
            fontWeight: 700,
            color: 'rgba(15,19,26,0.45)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          Тази оферта изтича след
        </p>
        <Countdown expiresAt={expiresAt} />
      </div>

      {/* Price */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '12px' }}>
          <span
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: 'rgba(15,19,26,0.4)',
              textDecoration: 'line-through',
            }}
          >
            25.00 € / 48.90 лв.
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '8px', marginTop: '4px' }}>
          <span
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 900,
              color: '#70150E',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            9.00 €
          </span>
          <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--mv-text-secondary)' }}>
            / 17.60 лв.
          </span>
        </div>
      </div>

      {/* Checkout form */}
      <div className="max-w-sm mx-auto">
        <EnrollForm product="audiobook-hot" cardOnly submitLabel="Да! Искам аудиокнигата за 9 €" />
      </div>
    </div>
  );
}
