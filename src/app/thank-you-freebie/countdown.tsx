'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
  expiresAt: number;
}

export function Countdown({ expiresAt }: CountdownProps) {
  const [remaining, setRemaining] = useState(() => Math.max(0, expiresAt - Date.now()));

  useEffect(() => {
    if (expiresAt - Date.now() <= 0) return;
    const id = setInterval(() => {
      const left = Math.max(0, expiresAt - Date.now());
      setRemaining(left);
      if (left <= 0) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
    // Depend only on expiresAt — `remaining` updates each tick, and including it
    // here tore down + recreated the interval every second.
  }, [expiresAt]);

  if (remaining <= 0) return null;

  const totalSec = Math.ceil(remaining / 1000);
  const hours = Math.floor(totalSec / 3600);
  const min = Math.floor((totalSec % 3600) / 60);
  const sec = totalSec % 60;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {hours > 0 && (
        <>
          <Digit value={hours} label="часа" />
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#70150E', lineHeight: 1 }}>:</span>
        </>
      )}
      <Digit value={min} label="мин" />
      <span style={{ fontSize: '28px', fontWeight: 800, color: '#70150E', lineHeight: 1 }}>:</span>
      <Digit value={sec} label="сек" />
    </div>
  );
}

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          fontSize: '42px',
          fontWeight: 900,
          color: '#70150E',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          minWidth: '72px',
          padding: '12px 8px',
          backgroundColor: 'rgba(112,21,14,0.06)',
          borderRadius: '10px',
          border: '1px solid rgba(112,21,14,0.1)',
        }}
      >
        {String(value).padStart(2, '0')}
      </div>
      <span
        style={{
          fontSize: '11px',
          fontWeight: 600,
          color: 'rgba(15,19,26,0.45)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginTop: '6px',
          display: 'block',
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function OfferExpired() {
  return (
    <div
      style={{
        padding: '32px',
        backgroundColor: 'rgba(15,19,26,0.04)',
        borderRadius: '14px',
        border: '1px solid rgba(15,19,26,0.08)',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--mv-text-primary)', marginBottom: '8px' }}>
        Тази оферта е изтекла
      </p>
      <p style={{ fontSize: '14px', color: 'var(--mv-text-secondary)', lineHeight: 1.7 }}>
        Можеш да вземеш аудиокнигата на редовна цена от{' '}
        <a href="/audiobook" style={{ color: '#70150E', fontWeight: 600, textDecoration: 'underline' }}>
          нашата страница
        </a>.
      </p>
    </div>
  );
}
