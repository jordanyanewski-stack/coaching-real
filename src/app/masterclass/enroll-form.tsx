'use client';

import { useState, useRef } from 'react';
import { trackInitiateCheckout } from '@/app/pixel';
import { PRODUCTS, type ProductSlug } from '@/lib/products';

type PaymentMethod = 'card' | 'bank';
type Variant = 'light' | 'dark';

interface EnrollFormProps {
  product?: ProductSlug;
  cardOnly?: boolean;
  variant?: Variant;
}

// Color tokens keyed by variant. Light = warm-red on white (masterclass default).
// Dark = blue accent on translucent panels for use on the navy career-course page.
const THEME: Record<Variant, {
  inputBg: string;
  inputBorder: string;
  inputBorderFocus: string;
  inputText: string;
  legendText: string;
  hintText: string;
  errorText: string;
  buttonGradient: string;
  buttonShadow: string;
  paymentBg: string;
  paymentBgChecked: string;
  paymentBorderChecked: string;
  paymentAccent: string;
  paymentTitle: string;
  paymentSubtitle: string;
}> = {
  light: {
    inputBg: '#ffffff',
    inputBorder: 'rgba(107,21,14,0.18)',
    inputBorderFocus: '#c94535',
    inputText: '#1a1a1a',
    legendText: 'rgba(0,0,0,0.5)',
    hintText: 'rgba(0,0,0,0.4)',
    errorText: '#c94535',
    buttonGradient: '',  // light uses mv-btn-primary className
    buttonShadow: '',
    paymentBg: '#ffffff',
    paymentBgChecked: '#fbf6f5',
    paymentBorderChecked: '#70150E',
    paymentAccent: '#70150E',
    paymentTitle: '#1a1a1a',
    paymentSubtitle: 'rgba(0,0,0,0.55)',
  },
  dark: {
    inputBg: 'rgba(255,255,255,0.08)',
    inputBorder: 'rgba(255,255,255,0.18)',
    inputBorderFocus: '#60a5fa',
    inputText: '#ffffff',
    legendText: 'rgba(255,255,255,0.55)',
    hintText: 'rgba(255,255,255,0.55)',
    errorText: '#fca5a5',
    buttonGradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    buttonShadow: '0 8px 22px rgba(37,99,235,0.30)',
    paymentBg: 'rgba(255,255,255,0.04)',
    paymentBgChecked: 'rgba(37,99,235,0.12)',
    paymentBorderChecked: '#60a5fa',
    paymentAccent: '#60a5fa',
    paymentTitle: '#ffffff',
    paymentSubtitle: 'rgba(255,255,255,0.62)',
  },
};

export function EnrollForm({ product = 'masterclass', cardOnly = false, variant = 'light' }: EnrollFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [method, setMethod] = useState<PaymentMethod>('card');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const priceForPixel = parseFloat(PRODUCTS[product].price);
  const supportsBank = PRODUCTS[product].supportsBankTransfer && !cardOnly;
  const t = THEME[variant];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (method === 'bank') {
        const res = await fetch('/api/checkout/bank-transfer', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, product }),
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error ?? 'Нещо се обърка. Опитай отново.');
        }

        const { orderId } = await res.json() as { orderId: string };
        trackInitiateCheckout(priceForPixel);
        window.location.href = `/bank-transfer/${orderId}`;
        return;
      }

      const res = await fetch('/api/checkout/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, product }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? 'Нещо се обърка. Опитай отново.');
      }

      const { action, fields } = await res.json() as {
        action: string;
        fields: Record<string, string>;
      };

      trackInitiateCheckout(priceForPixel);

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
    border: `1.5px solid ${t.inputBorder}`,
    borderRadius: '10px',
    outline: 'none',
    backgroundColor: t.inputBg,
    color: t.inputText,
    transition: 'border-color 0.15s',
    boxSizing: 'border-box',
  };

  const buttonBase: React.CSSProperties = {
    fontSize: '16px',
    padding: '16px 40px',
    opacity: loading ? 0.7 : 1,
    cursor: loading ? 'not-allowed' : 'pointer',
    border: 'none',
  };

  const buttonDarkStyle: React.CSSProperties =
    variant === 'dark'
      ? {
          ...buttonBase,
          background: t.buttonGradient,
          color: '#ffffff',
          fontWeight: 700,
          borderRadius: '10px',
          boxShadow: t.buttonShadow,
          width: '100%',
          letterSpacing: '0.01em',
        }
      : buttonBase;

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
          onFocus={(e) => (e.target.style.borderColor = t.inputBorderFocus)}
          onBlur={(e) => (e.target.style.borderColor = t.inputBorder)}
        />
        <input
          type="email"
          placeholder="Твоят имейл адрес"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = t.inputBorderFocus)}
          onBlur={(e) => (e.target.style.borderColor = t.inputBorder)}
        />

        {supportsBank && (
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
                color: t.legendText,
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
              theme={t}
            />
            <PaymentOption
              checked={method === 'bank'}
              onSelect={() => setMethod('bank')}
              title="Банков превод"
              subtitle="Потвърждение в рамките на 1–2 работни дни"
              theme={t}
            />
          </fieldset>
        )}

        {error && (
          <p style={{ fontSize: '13px', color: t.errorText, margin: 0 }}>{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={variant === 'light' ? 'mv-btn mv-btn-primary' : undefined}
          style={buttonDarkStyle}
        >
          {loading
            ? 'Пренасочване...'
            : method === 'bank'
              ? 'Продължи към банковия превод →'
              : 'Да - готов/а съм да вляза →'}
        </button>
      </div>

      <p style={{ fontSize: '12px', color: t.hintText, marginTop: '12px', textAlign: 'center' }}>
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
  theme,
}: {
  checked: boolean;
  onSelect: () => void;
  title: string;
  subtitle: string;
  theme: (typeof THEME)['light'];
}) {
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 14px',
        backgroundColor: checked ? theme.paymentBgChecked : theme.paymentBg,
        border: `1.5px solid ${checked ? theme.paymentBorderChecked : theme.inputBorder}`,
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
          accentColor: theme.paymentAccent,
          cursor: 'pointer',
          margin: 0,
        }}
      />
      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontSize: '14px', fontWeight: 600, color: theme.paymentTitle }}>{title}</span>
        <span style={{ fontSize: '12px', color: theme.paymentSubtitle }}>{subtitle}</span>
      </span>
    </label>
  );
}
