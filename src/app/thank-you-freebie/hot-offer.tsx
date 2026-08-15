'use client';

import { useState, useEffect } from 'react';
import { Countdown, OfferExpired } from './countdown';
import { EnrollForm } from '../masterclass/enroll-form';

const THIRTY_MINUTES = 30 * 60 * 1000;
const SEVENTY_TWO_HOURS = 72 * 60 * 60 * 1000;

function getOptinTimestamp(): number | null {
  const match = document.cookie.match(/(?:^|;\s*)funnel_optin=(\d+)/);
  return match ? Number(match[1]) : null;
}

// Price tiers, anchored to the funnel_optin cookie timestamp:
//   ≤ 30 min → €9  hot offer      (audiobook-hot)
//   ≤ 72 h   → €19 special price  (audiobook-72h)
//   after    → €25 regular price  (audiobook)
interface Tier {
  product: 'audiobook-hot' | 'audiobook-72h' | 'audiobook';
  price: string;
  submitLabel: string;
  deadline: number | null; // ms epoch for the countdown, or null at regular price
}

function tierFor(optinTs: number): Tier {
  const elapsed = Date.now() - optinTs;
  if (elapsed < THIRTY_MINUTES) {
    return {
      product: 'audiobook-hot',
      price: '9.00',
      submitLabel: 'Да! Искам аудиокнигата за 9 €',
      deadline: optinTs + THIRTY_MINUTES,
    };
  }
  if (elapsed < SEVENTY_TWO_HOURS) {
    return {
      product: 'audiobook-72h',
      price: '19.00',
      submitLabel: 'Да! Искам аудиокнигата за 19 €',
      deadline: optinTs + SEVENTY_TWO_HOURS,
    };
  }
  return {
    product: 'audiobook',
    price: '25.00',
    submitLabel: 'Да! Искам аудиокнигата за 25 €',
    deadline: null,
  };
}

export function HotOffer() {
  const [state, setState] = useState<'loading' | 'offer' | 'no-optin'>('loading');
  const [tier, setTier] = useState<Tier | null>(null);

  useEffect(() => {
    const ts = getOptinTimestamp();
    if (!ts) {
      setState('no-optin');
      return;
    }
    setTier(tierFor(ts));
    setState('offer');
  }, []);

  if (state === 'loading') return null;

  if (state === 'no-optin' || !tier) {
    return <OfferExpired />;
  }

  const discounted = tier.price !== '25.00';

  return (
    <div>
      {/* Timer — only while the offer is time-limited (€9 / €19 tiers) */}
      {tier.deadline !== null && (
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
          <Countdown expiresAt={tier.deadline} />
        </div>
      )}

      {/* Price */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        {discounted && (
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '12px' }}>
            <span
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(15,19,26,0.4)',
                textDecoration: 'line-through',
              }}
            >
              25.00 €
            </span>
          </div>
        )}
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
            {tier.price} €
          </span>
        </div>
      </div>

      {/* Checkout form */}
      <div className="max-w-sm mx-auto">
        <EnrollForm product={tier.product} cardOnly submitLabel={tier.submitLabel} />
      </div>
    </div>
  );
}
