'use client';

import { useState, useRef } from 'react';
import { trackInitiateCheckout } from '@/app/pixel';
import { CampaignContact } from '@/components/campaign-contact';
import { PRODUCTS, type ProductSlug } from '@/lib/products';

type PaymentMethod = 'card' | 'bank';
type Variant = 'light' | 'light-gold' | 'dark' | 'dark-warm' | 'dark-sage' | 'dark-rose' | 'dark-bordeaux';

interface EnrollFormProps {
  product?: ProductSlug;
  cardOnly?: boolean;
  variant?: Variant;
  submitLabel?: string;
  /**
   * Shows an "Имаш промо код?" toggle + code input. A filled code submits to
   * /api/checkout/free-code (free enrollment, no myPOS) instead of the paid flow.
   */
  allowPromoCode?: boolean;
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
  'light-gold': {
    inputBg: '#FFFDF8',
    inputBorder: 'rgba(36,22,17,0.16)',
    inputBorderFocus: '#B9862E',
    inputText: '#241611',
    legendText: '#6B5A4C',
    hintText: '#6B5A4C',
    errorText: '#A63F48',
    buttonGradient: 'linear-gradient(135deg, #B9862E 0%, #8A6420 100%)',
    buttonShadow: '0 12px 28px rgba(185,134,46,0.28)',
    paymentBg: '#FFFDF8',
    paymentBgChecked: '#FBF5EC',
    paymentBorderChecked: '#B9862E',
    paymentAccent: '#B9862E',
    paymentTitle: '#241611',
    paymentSubtitle: '#6B5A4C',
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
  'dark-warm': {
    inputBg: 'rgba(255,255,255,0.08)',
    inputBorder: 'rgba(255,255,255,0.18)',
    inputBorderFocus: '#c9a23c',
    inputText: '#ffffff',
    legendText: 'rgba(255,255,255,0.55)',
    hintText: 'rgba(255,255,255,0.55)',
    errorText: '#fca5a5',
    buttonGradient: 'linear-gradient(135deg, #8b6914 0%, #6d5210 100%)',
    buttonShadow: '0 8px 22px rgba(139,105,20,0.30)',
    paymentBg: 'rgba(255,255,255,0.04)',
    paymentBgChecked: 'rgba(139,105,20,0.12)',
    paymentBorderChecked: '#c9a23c',
    paymentAccent: '#c9a23c',
    paymentTitle: '#ffffff',
    paymentSubtitle: 'rgba(255,255,255,0.62)',
  },
  'dark-sage': {
    inputBg: 'rgba(255,255,255,0.08)',
    inputBorder: 'rgba(255,255,255,0.18)',
    inputBorderFocus: '#8aab7a',
    inputText: '#ffffff',
    legendText: 'rgba(255,255,255,0.55)',
    hintText: 'rgba(255,255,255,0.55)',
    errorText: '#fca5a5',
    buttonGradient: 'linear-gradient(135deg, #5a7a4e 0%, #3d5a34 100%)',
    buttonShadow: '0 8px 22px rgba(90,122,78,0.30)',
    paymentBg: 'rgba(255,255,255,0.04)',
    paymentBgChecked: 'rgba(90,122,78,0.12)',
    paymentBorderChecked: '#8aab7a',
    paymentAccent: '#8aab7a',
    paymentTitle: '#ffffff',
    paymentSubtitle: 'rgba(255,255,255,0.62)',
  },
  'dark-rose': {
    inputBg: 'rgba(255,255,255,0.08)',
    inputBorder: 'rgba(255,255,255,0.18)',
    inputBorderFocus: '#e0728a',
    inputText: '#ffffff',
    legendText: 'rgba(255,255,255,0.55)',
    hintText: 'rgba(255,255,255,0.55)',
    errorText: '#fca5a5',
    buttonGradient: 'linear-gradient(135deg, #c4385a 0%, #9e2a48 100%)',
    buttonShadow: '0 8px 22px rgba(196,56,90,0.30)',
    paymentBg: 'rgba(255,255,255,0.04)',
    paymentBgChecked: 'rgba(196,56,90,0.12)',
    paymentBorderChecked: '#e0728a',
    paymentAccent: '#e0728a',
    paymentTitle: '#ffffff',
    paymentSubtitle: 'rgba(255,255,255,0.62)',
  },
  // Deep bordeaux #a10406 — Христина / „Излез от вътрешния застой".
  'dark-bordeaux': {
    inputBg: 'rgba(255,255,255,0.08)',
    inputBorder: 'rgba(255,255,255,0.18)',
    inputBorderFocus: '#d6484b',
    inputText: '#ffffff',
    legendText: 'rgba(255,255,255,0.55)',
    hintText: 'rgba(255,255,255,0.55)',
    errorText: '#fca5a5',
    buttonGradient: 'linear-gradient(135deg, #a10406 0%, #780304 100%)',
    buttonShadow: '0 8px 22px rgba(161,4,6,0.32)',
    paymentBg: 'rgba(255,255,255,0.04)',
    paymentBgChecked: 'rgba(161,4,6,0.14)',
    paymentBorderChecked: '#d6484b',
    paymentAccent: '#d6484b',
    paymentTitle: '#ffffff',
    paymentSubtitle: 'rgba(255,255,255,0.62)',
  },
};

// POST JSON with a hard timeout so a slow/cold server can never leave the submit
// button stuck on "Пренасочване..." forever — the user gets a retryable error.
async function postJson(url: string, payload: unknown, timeoutMs = 20000): Promise<Response> {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(t);
  }
}

export function EnrollForm({ product = 'masterclass', cardOnly = false, variant = 'light', submitLabel, allowPromoCode = false }: EnrollFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [method, setMethod] = useState<PaymentMethod>('card');
  const [promoCode, setPromoCode] = useState('');
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
      // A filled promo code wins over the payment method — free enrollment,
      // no myPOS. An invalid code errors out instead of silently charging.
      if (allowPromoCode && promoCode.trim()) {
        const res = await postJson('/api/checkout/free-code', { name, email, code: promoCode });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error ?? 'Нещо се обърка. Опитай отново.');
        }

        const { orderId } = await res.json() as { orderId: string };
        window.location.href = `/thank-you?order=${orderId}`;
        return;
      }

      if (method === 'bank') {
        const res = await postJson('/api/checkout/bank-transfer', { name, email, product });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error ?? 'Нещо се обърка. Опитай отново.');
        }

        const { orderId } = await res.json() as { orderId: string };
        trackInitiateCheckout(priceForPixel);
        window.location.href = `/bank-transfer/${orderId}`;
        return;
      }

      const res = await postJson('/api/checkout/create', { name, email, product });

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
      const aborted = err instanceof DOMException && err.name === 'AbortError';
      setError(
        aborted
          ? 'Връзката се забави. Провери интернет връзката си и опитай отново.'
          : err instanceof Error
            ? err.message
            : 'Нещо се обърка. Опитай отново.'
      );
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
    variant !== 'light'
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

        {allowPromoCode && (
          <input
            type="text"
            placeholder="Промо код (по избор)"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            disabled={loading}
            autoCapitalize="characters"
            autoCorrect="off"
            spellCheck={false}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = t.inputBorderFocus)}
            onBlur={(e) => (e.target.style.borderColor = t.inputBorder)}
          />
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
            : allowPromoCode && promoCode.trim()
              ? 'Запиши се с промо код →'
              : method === 'bank'
                ? 'Продължи към банковия превод →'
                : submitLabel ?? 'Да - готов/а съм да вляза →'}
        </button>
      </div>

      <p style={{ fontSize: '12px', color: t.hintText, marginTop: '12px', textAlign: 'center' }}>
        {allowPromoCode && promoCode.trim()
          ? 'Безплатно записване с промо код · Получаваш имейл с детайлите'
          : method === 'bank'
            ? 'След запис ще видиш IBAN, сума и основание за превода'
            : 'Сигурна транзакция · Получаваш потвърждение с всички детайли'}
      </p>
      <CampaignContact color={t.legendText} style={{ marginTop: '8px' }} />
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
