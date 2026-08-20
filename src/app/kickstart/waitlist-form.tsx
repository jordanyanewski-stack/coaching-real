'use client';

import { useState, type FormEvent } from 'react';
import { T } from '@/app/_shared';
import { CampaignContact } from '@/components/campaign-contact';

interface Tokens {
  primary: string;
  secondary: string;
}

interface Props {
  onDark: Tokens;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function WaitlistForm({ onDark }: Props) {
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
      phone: String(data.get('phone') ?? '').trim(),
    };

    try {
      const res = await fetch('/api/kickstart/waitlist', {
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
      setMessage('Записа си в списъка на чакащите. Очаквай имейл когато стартираме следващия прием.');
      form.reset();
    } catch {
      setStatus('error');
      setMessage('Мрежова грешка. Опитай отново след малко.');
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          padding: '24px',
          backgroundColor: 'rgba(34,197,94,0.10)',
          border: '1px solid rgba(34,197,94,0.25)',
          borderRadius: T.radiusSm,
          color: onDark.primary,
          fontSize: '15px',
          lineHeight: 1.7,
          textAlign: 'center',
        }}
      >
        {message}
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit} noValidate>
      {[
        { id: 'name',  label: 'Имена',          type: 'text',  placeholder: 'Твоето пълно име',  required: true, autoComplete: 'name' },
        { id: 'email', label: 'Имейл',           type: 'email', placeholder: 'email@example.com', required: true, autoComplete: 'email' },
        { id: 'phone', label: 'Телефонен номер', type: 'tel',   placeholder: '+359 8XX XXX XXX',  required: false, autoComplete: 'tel' },
      ].map(f => (
        <div key={f.id} className="flex flex-col gap-2">
          <label
            htmlFor={f.id}
            style={{ fontSize: '13px', fontWeight: 600, color: onDark.secondary, letterSpacing: '0.02em' }}
          >
            {f.label}
          </label>
          <input
            id={f.id}
            name={f.id}
            type={f.type}
            placeholder={f.placeholder}
            autoComplete={f.autoComplete}
            required={f.required}
            disabled={status === 'submitting'}
            style={{
              backgroundColor: 'rgba(112,21,14,0.05)',
              border: '1px solid rgba(112,21,14,0.09)',
              borderRadius: T.radiusSm,
              padding: '14px 16px',
              fontSize: '15px',
              color: onDark.primary,
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
        {status === 'submitting' ? 'Записване...' : 'Запиши се →'}
      </button>
      <CampaignContact color={onDark.secondary} />
    </form>
  );
}
