import Image from 'next/image';
import { LOGO_URL } from '@/app/_shared';
import { getDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Bank transfer orders · Admin',
  robots: { index: false, follow: false },
};

type Row = {
  name: string;
  email: string;
  amount: string;
  currency: string;
  status: string;
  mypos_order_id: string;
  created_at: string;
};

function shortCode(orderId: string): string {
  return orderId.replace(/-/g, '').slice(-6).toUpperCase();
}

function formatAmount(amount: string, currency: string): string {
  const n = parseFloat(amount);
  if (Number.isNaN(n)) return `${amount} ${currency}`;
  const symbol = currency === 'EUR' ? '€' : currency;
  return `${symbol}${n.toFixed(2)}`;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString('bg-BG', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

async function loadOrders(): Promise<Row[]> {
  const sql = getDb();
  const rows = await sql`
    SELECT
      name,
      email,
      amount::text AS amount,
      currency,
      status,
      mypos_order_id,
      created_at
    FROM orders
    WHERE status = 'awaiting_bank_transfer'
    ORDER BY created_at DESC
  `;
  return rows as Row[];
}

export default async function AdminBankOrdersPage() {
  const rows = await loadOrders();

  return (
    <div
      style={{
        fontFamily: 'var(--font-mv, system-ui, sans-serif)',
        minHeight: '100vh',
        backgroundColor: '#faf8f5',
      }}
    >
      <header
        style={{
          padding: '20px 32px',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Image
            src={LOGO_URL}
            alt="Coaching Real"
            width={0}
            height={0}
            sizes="100vw"
            style={{ height: '32px', width: 'auto' }}
          />
        </a>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.5)',
          }}
        >
          Admin · Bank transfer queue
        </span>
      </header>

      <main style={{ padding: '40px 32px 80px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '28px' }}>
          <h1
            style={{
              fontSize: '28px',
              fontWeight: 900,
              color: '#1a1a1a',
              letterSpacing: '-0.02em',
              margin: '0 0 6px',
            }}
          >
            Чакащи банкови преводи
          </h1>
          <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.6)', margin: 0 }}>
            {rows.length === 0
              ? 'Няма чакащи поръчки за банков превод.'
              : `${rows.length} ${rows.length === 1 ? 'поръчка чака' : 'поръчки чакат'} потвърждение от банка.`}
          </p>
        </div>

        {rows.length === 0 ? (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: '14px',
              padding: '48px 24px',
              textAlign: 'center',
              color: 'rgba(0,0,0,0.45)',
              fontSize: '14px',
            }}
          >
            Когато някой избере „Банков превод" в /masterclass, ще се появи тук.
          </div>
        ) : (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 2px 16px rgba(0,0,0,0.03)',
            }}
          >
            <div
              role="table"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div
                role="row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '150px 1.1fr 1.4fr 110px 100px',
                  gap: '12px',
                  padding: '14px 20px',
                  backgroundColor: '#fbf6f5',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(0,0,0,0.55)',
                }}
              >
                <div>Дата</div>
                <div>Име</div>
                <div>Имейл</div>
                <div>Основание</div>
                <div style={{ textAlign: 'right' }}>Сума</div>
              </div>

              {rows.map((row) => {
                const ref = shortCode(row.mypos_order_id);
                return (
                  <div
                    key={row.mypos_order_id}
                    role="row"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '150px 1.1fr 1.4fr 110px 100px',
                      gap: '12px',
                      padding: '16px 20px',
                      borderBottom: '1px solid rgba(0,0,0,0.05)',
                      alignItems: 'center',
                      fontSize: '14px',
                      color: '#1a1a1a',
                    }}
                  >
                    <div style={{ color: 'rgba(0,0,0,0.6)', fontSize: '13px' }}>
                      {formatDate(row.created_at)}
                    </div>
                    <div style={{ fontWeight: 600 }}>{row.name}</div>
                    <div>
                      <a
                        href={`mailto:${row.email}`}
                        style={{
                          color: '#70150E',
                          textDecoration: 'none',
                          wordBreak: 'break-all',
                        }}
                      >
                        {row.email}
                      </a>
                    </div>
                    <div
                      style={{
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                        fontSize: '13px',
                        letterSpacing: '0.02em',
                        color: 'rgba(0,0,0,0.7)',
                      }}
                    >
                      {ref}
                    </div>
                    <div style={{ textAlign: 'right', fontWeight: 700 }}>
                      {formatAmount(row.amount, row.currency)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <p
          style={{
            marginTop: '24px',
            fontSize: '12px',
            color: 'rgba(0,0,0,0.45)',
            lineHeight: 1.7,
          }}
        >
          Поръчките изчезват от тази страница, след като статусът им се промени от
          <code style={{ margin: '0 4px', padding: '1px 6px', background: '#fbf6f5', borderRadius: '4px' }}>awaiting_bank_transfer</code>
          (например когато ги маркираш като платени).
          Основанието е последните 6 символа от order ID — точно това, което
          клиентът копира на страницата с IBAN, така че трябва да съвпадне с
          описанието в банковото извлечение.
        </p>
      </main>
    </div>
  );
}
