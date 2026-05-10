'use client';

import { useState, useRef } from 'react';
import { trackInitiateCheckout } from '@/app/pixel';

type PaymentMethod = 'card' | 'bank';

export function EnrollForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [method, setMethod] = useState<PaymentMethod>('card');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (method === 'bank') {
        const res = await fetch('/api/checkout/bank-transfer', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email }),
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error ?? 'Нещо се обърка. Опитай отново.');
        }

        const { orderId } = await res.json() as { orderId: string };
        trackInitiateCheckout(34);
        window.location.href = `/masterclass/bank-transfer/${orderId}`;
        return;
      }

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

  const inputStyle: React.CSSProperties = {
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
  };

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
          style={inputStyle}
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
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = '#c94535')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(107,21,14,0.18)')}
        />

        <fieldset
          disabled={loading}
          style={{
            border: 'none',
            padding: 0,
            margin: '4px 0 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <legend
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.5)',
              padding: 0,
              marginBottom: '4px',
            }}
          >
            Начин на плащане
          </legend>

          <PaymentOption
            checked={method === 'card'}
            onSelect={() => setMethod('card')}
            title="Плати с карта"
            subtitle="Мигновен достъп · Visa / Mastercard"
          />
          <PaymentOption
            checked={method === 'bank'}
            onSelect={() => setMethod('bank')}
            title="Банков превод"
            subtitle="Потвърждение в рамките на 1–2 работни дни"
          />
        </fieldset>

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
          {loading
            ? 'Пренасочване...'
            : method === 'bank'
              ? 'Продължи към банковия превод →'
              : 'Да - Готова съм да вляза →'}
        </button>
      </div>

      <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.4)', marginTop: '12px', textAlign: 'center' }}>
        {method === 'bank'
          ? 'След запис ще видиш IBAN, сума и основание за превода'
          : 'Сигурна транзакция · Получаваш потвърждение с всички детайли'}
      </p>
    </form>
  );
}

function PaymentOption({
  checked,
  onSelect,
  title,
  subtitle,
}: {
  checked: boolean;
  onSelect: () => void;
  title: string;
  subtitle: string;
}) {
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 14px',
        backgroundColor: checked ? '#fbf6f5' : '#ffffff',
        border: `1.5px solid ${checked ? '#70150E' : 'rgba(107,21,14,0.18)'}`,
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'all 0.15s',
        textAlign: 'left',
      }}
    >
      <input
        type="radio"
        name="payment-method"
        checked={checked}
        onChange={onSelect}
        style={{
          width: '18px',
          height: '18px',
          accentColor: '#70150E',
          cursor: 'pointer',
          margin: 0,
        }}
      />
      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>{title}</span>
        <span style={{ fontSize: '12px', color: 'rgba(0,0,0,0.55)' }}>{subtitle}</span>
      </span>
    </label>
  );
}
