'use client';

import { useState, useEffect } from 'react';
import { EnrollForm } from '../masterclass/enroll-form';

// The "72-hour" window. Anchored to the visitor's first arrival (stored in a
// cookie) rather than to opt-in time, so someone who clicks the email on a
// different device than they opted in on still gets a real 72h window — and
// the urgency can't be reset just by reloading.
const WINDOW_MS = 72 * 60 * 60 * 1000;
const COOKIE = 'ab72_start';

function readStart(): number {
  const m = document.cookie.match(/(?:^|;\s*)ab72_start=(\d+)/);
  return m ? Number(m[1]) : 0;
}
function writeStart(ts: number) {
  document.cookie = `${COOKIE}=${ts}; path=/; max-age=${60 * 60 * 24 * 7}`;
}

function Box({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
      <span
        style={{
          minWidth: '64px',
          padding: '12px 8px',
          fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
          fontWeight: 900,
          color: '#70150E',
          background: '#ffffff',
          border: '1px solid rgba(107,21,14,0.12)',
          borderRadius: '12px',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {String(value).padStart(2, '0')}
      </span>
      <span
        style={{
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'rgba(15,19,26,0.45)',
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function Audiobook72Offer() {
  const [state, setState] = useState<'loading' | 'active' | 'expired'>('loading');
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    let start = readStart();
    if (!start) {
      start = Date.now();
      writeStart(start);
    }
    const deadline = start + WINDOW_MS;

    const tick = (): boolean => {
      const left = deadline - Date.now();
      if (left <= 0) {
        setState('expired');
        setRemaining(0);
        return false;
      }
      setRemaining(left);
      setState('active');
      return true;
    };

    if (!tick()) return;
    const id = setInterval(() => {
      if (!tick()) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (state === 'loading') return null;

  if (state === 'expired') {
    return (
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '15px', color: 'rgba(15,19,26,0.6)', lineHeight: 1.7, marginBottom: '20px' }}>
          Специалната цена вече не е активна. Можеш да вземеш аудиокнигата на редовната цена тук:
        </p>
        <a
          href="/audiobook"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px 28px',
            backgroundColor: '#70150E',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '15px',
            borderRadius: '10px',
            textDecoration: 'none',
          }}
        >
          Към аудиокнигата →
        </a>
      </div>
    );
  }

  const totalSec = Math.ceil(remaining / 1000);
  const hours = Math.floor(totalSec / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;

  return (
    <div>
      {/* Timer */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <p
          style={{
            fontSize: '13px',
            fontWeight: 700,
            color: 'rgba(15,19,26,0.45)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}
        >
          Специалната цена изтича след
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          <Box value={hours} label="часа" />
          <Box value={mins} label="мин" />
          <Box value={secs} label="сек" />
        </div>
      </div>

      {/* Price */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
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
            19.00 €
          </span>
          <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--mv-text-secondary)' }}>/ 37.16 лв.</span>
        </div>
      </div>

      {/* Checkout */}
      <div className="max-w-sm mx-auto">
        <EnrollForm product="audiobook-72h" cardOnly submitLabel="Да! Искам аудиокнигата за 19 €" />
      </div>
    </div>
  );
}
