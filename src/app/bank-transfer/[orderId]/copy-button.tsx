'use client';

import { useState } from 'react';

export function CopyButton({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = value;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label ?? 'Копирай'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.02em',
        color: copied ? '#1a7f3c' : '#70150E',
        backgroundColor: copied ? 'rgba(26,127,60,0.08)' : 'rgba(107,21,14,0.06)',
        border: `1px solid ${copied ? 'rgba(26,127,60,0.25)' : 'rgba(107,21,14,0.18)'}`,
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.15s',
        whiteSpace: 'nowrap',
      }}
    >
      {copied ? '✓ Копирано' : 'Копирай'}
    </button>
  );
}
