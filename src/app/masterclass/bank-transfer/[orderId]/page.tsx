import { notFound } from 'next/navigation';
import Image from 'next/image';
import { LOGO_URL, SiteFooter } from '@/app/_shared';
import { getDb } from '@/lib/db';
import { CopyButton } from './copy-button';

export const metadata = {
  title: 'Банков превод - 12 Дни Мастъркласове | Coaching Real',
  description: 'Детайли за плащане по банков път.',
};

const IBAN = 'BG69UNCR70001525696890';
const ACCOUNT_HOLDER = 'БИЗНЕС МАЙНД КОУЧИНГ ЕООД';
const BIC = 'UNCRBGSF';
const REFERENCE_PREFIX = '12 Мастъркласове';

type Order = {
  name: string;
  email: string;
  amount: string;
  currency: string;
  status: string;
};

async function loadOrder(orderId: string): Promise<Order | null> {
  const sql = getDb();
  const rows = await sql`
    SELECT name, email, amount::text AS amount, currency, status
    FROM orders
    WHERE mypos_order_id = ${orderId}
    LIMIT 1
  ` as Order[];
  return rows[0] ?? null;
}

function formatAmount(amount: string, currency: string): string {
  const n = parseFloat(amount);
  if (Number.isNaN(n)) return `${amount} ${currency}`;
  const symbol = currency === 'EUR' ? '€' : currency;
  return `${symbol}${n.toFixed(2)}`;
}

function shortCode(orderId: string): string {
  return orderId.replace(/-/g, '').slice(-6).toUpperCase();
}

export default async function BankTransferPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  const order = await loadOrder(orderId);
  if (!order) notFound();

  const reference = `${REFERENCE_PREFIX} ${order.name} ${shortCode(orderId)}`;
  const amountDisplay = formatAmount(order.amount, order.currency);
  const amountForCopy = parseFloat(order.amount).toFixed(2);

  const rows: Array<{ label: string; value: string; copy: string; mono?: boolean; emphasis?: boolean }> = [
    { label: 'Сума',            value: amountDisplay,   copy: amountForCopy, emphasis: true },
    { label: 'IBAN',            value: IBAN,            copy: IBAN,          mono: true, emphasis: true },
    { label: 'Титуляр',         value: ACCOUNT_HOLDER,  copy: ACCOUNT_HOLDER },
    { label: 'BIC / SWIFT',     value: BIC,             copy: BIC,           mono: true },
    { label: 'Основание',       value: reference,       copy: reference,     emphasis: true },
  ];

  return (
    <div style={{ fontFamily: 'var(--font-mv, sans-serif)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '20px 32px' }}>
        <a href="/">
          <Image src={LOGO_URL} alt="Coaching Real" width={0} height={0} sizes="100vw" style={{ height: '38px', width: 'auto' }} />
        </a>
      </header>

      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '32px 24px 64px',
          backgroundColor: '#faf8f5',
        }}
      >
        <div
          style={{
            maxWidth: '620px',
            width: '100%',
            padding: '40px 36px',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1px solid rgba(107,21,14,0.08)',
            boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div
              style={{
                display: 'inline-flex',
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3 21h18M5 21V10m4 11V10m6 11V10m4 11V10M2 8l10-5 10 5H2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h1 style={{ fontSize: '26px', fontWeight: 900, color: '#1a1a1a', letterSpacing: '-0.02em', marginBottom: '12px' }}>
              Резервацията ти е приета
            </h1>

            <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.6)', lineHeight: 1.7, margin: 0 }}>
              {order.name}, за да потвърдим участието ти, направи превод по сметката по-долу.
              Веднага щом получим плащането (1–2 работни дни), ще ти изпратим имейл с
              Zoom линк и всички детайли.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#fff8e6',
              border: '1px solid rgba(180,120,0,0.18)',
              borderRadius: '12px',
              padding: '14px 18px',
              marginBottom: '24px',
              fontSize: '13px',
              color: '#6b4500',
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: '#4a3000' }}>Важно:</strong> Преводът трябва да достигне сметката
            до <strong>14 май 2026 г.</strong>, за да заключим цената от <strong>€34</strong>.
            След тази дата участието е €67.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {rows.map((row) => (
              <div
                key={row.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  padding: '14px 18px',
                  backgroundColor: row.emphasis ? '#fbf6f5' : '#f8f5f1',
                  border: `1px solid ${row.emphasis ? 'rgba(107,21,14,0.14)' : 'rgba(0,0,0,0.06)'}`,
                  borderRadius: '12px',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0, flex: 1 }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.5)',
                    }}
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontSize: row.emphasis ? '17px' : '15px',
                      fontWeight: row.emphasis ? 700 : 500,
                      color: '#1a1a1a',
                      fontFamily: row.mono ? 'ui-monospace, SFMono-Regular, Menlo, monospace' : undefined,
                      letterSpacing: row.mono ? '0.02em' : undefined,
                      wordBreak: 'break-word',
                    }}
                  >
                    {row.value}
                  </span>
                </div>
                <CopyButton value={row.copy} label={`Копирай ${row.label}`} />
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '28px',
              padding: '20px 22px',
              backgroundColor: '#f8f5f1',
              borderRadius: '12px',
              border: '1px solid rgba(0,0,0,0.05)',
            }}
          >
            <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 12px' }}>
              Какво следва
            </h2>
            <ol style={{ margin: 0, padding: '0 0 0 20px', fontSize: '14px', color: 'rgba(0,0,0,0.7)', lineHeight: 1.8 }}>
              <li>Направи превода по сметката по-горе с посоченото основание.</li>
              <li>Ще получиш потвърждение на <strong>{order.email}</strong> в рамките на 1–2 работни дни след постъпване на плащането.</li>
              <li>Имейлът съдържа Zoom линка, програмата и инструкциите за първия мастърклас (18 май, 19:00 ч.).</li>
            </ol>
          </div>

          <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.4)', textAlign: 'center', marginTop: '24px' }}>
            Въпроси? Пиши на <a href="mailto:info@coachingreallive.com" style={{ color: '#70150E' }}>info@coachingreallive.com</a>
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
