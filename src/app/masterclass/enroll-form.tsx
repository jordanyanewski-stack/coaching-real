'use client';

import { useState, useRef } from 'react';
import { trackInitiateCheckout } from '@/app/pixel';

export function EnrollForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/checkout/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? 'Нещо се обърка. Опитай отново.');
      }

      const { action, fields } = await res.json() as {
        action: string;
        fields: Record<string, string>;
      };

      trackInitiateCheckout(34);

      // Build hidden form and submit to myPOS
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = action;
      for (const [key, value] of Object.entries(fields)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      }
      document.body.appendChild(form);
      form.submit();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Нещо се обърка. Опитай отново.');
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '440px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input
          type="text"
          placeholder="Твоето име"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px 18px',
            fontSize: '15px',
            border: '1.5px solid rgba(107,21,14,0.18)',
            borderRadius: '10px',
            outline: 'none',
            backgroundColor: '#ffffff',
            color: '#1a1a1a',
            transition: 'border-color 0.15s',
            boxSizing: 'border-box',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#c94535')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(107,21,14,0.18)')}
        />
        <input
          type="email"
          placeholder="Твоят имейл адрес"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px 18px',
            fontSize: '15px',
            border: '1.5px solid rgba(107,21,14,0.18)',
            borderRadius: '10px',
            outline: 'none',
            backgroundColor: '#ffffff',
            color: '#1a1a1a',
            transition: 'border-color 0.15s',
            boxSizing: 'border-box',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#c94535')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(107,21,14,0.18)')}
        />

        {error && (
          <p style={{ fontSize: '13px', color: '#c94535', margin: 0 }}>{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mv-btn mv-btn-primary"
          style={{
            fontSize: '16px',
            padding: '16px 40px',
            opacity: loading ? 0.7 : 1,
            cursor: loading ? 'not-allowed' : 'pointer',
            border: 'none',
          }}
        >
          {loading ? 'Пренасочване...' : 'Да - Готова съм да вляза →'}
        </button>
      </div>

      <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.4)', marginTop: '12px', textAlign: 'center' }}>
        Сигурна транзакция · Получаваш потвърждение с всички детайли
      </p>
    </form>
  );
}
