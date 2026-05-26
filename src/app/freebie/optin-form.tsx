'use client';

import { useState, type FormEvent } from 'react';
import { T } from '@/app/_shared';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function OptinForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
    };

    try {
      const res = await fetch('/api/freebie/optin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setMessage(body?.error || 'Нещо се обърка. Опитай отново.');
        return;
      }
      setStatus('success');
      window.location.href = '/thank-you-freebie';
    } catch {
      setStatus('error');
      setMessage('Мрежова грешка. Опитай отново след малко.');
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit} noValidate>
      {[
        { id: 'name', label: 'Имена', type: 'text', placeholder: 'Твоето пълно име', autoComplete: 'name' },
        { id: 'email', label: 'Имейл', type: 'email', placeholder: 'email@example.com', autoComplete: 'email' },
      ].map(f => (
        <div key={f.id} className="flex flex-col gap-2">
          <label
            htmlFor={`optin-${f.id}`}
            style={{ fontSize: '13px', fontWeight: 600, color: 'var(--mv-text-secondary)', letterSpacing: '0.02em', textAlign: 'left' }}
          >
            {f.label}
          </label>
          <input
            id={`optin-${f.id}`}
            name={f.id}
            type={f.type}
            placeholder={f.placeholder}
            autoComplete={f.autoComplete}
            required
            disabled={status === 'submitting'}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(107,21,14,0.15)',
              borderRadius: T.radiusSm,
              padding: '14px 16px',
              fontSize: '15px',
              color: 'var(--mv-text-primary)',
              outline: 'none',
              width: '100%',
              fontFamily: 'inherit',
            }}
          />
        </div>
      ))}

      {status === 'error' && message && (
        <p
          style={{
            margin: 0,
            padding: '10px 14px',
            backgroundColor: 'rgba(244,63,94,0.08)',
            border: '1px solid rgba(244,63,94,0.18)',
            borderRadius: T.radiusSm,
            color: '#9f1239',
            fontSize: '13px',
          }}
        >
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mv-btn mv-btn-primary mt-2"
        style={{
          fontSize: '16px',
          padding: '16px',
          width: '100%',
          justifyContent: 'center',
          opacity: status === 'submitting' ? 0.7 : 1,
          cursor: status === 'submitting' ? 'wait' : 'pointer',
        }}
      >
        {status === 'submitting'
          ? 'Изпращане...'
          : 'Да! Искам мини-гайда!'}
      </button>
    </form>
  );
}
