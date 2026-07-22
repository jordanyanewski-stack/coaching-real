import { AdminShell } from '../_admin-shell';
import { markBankOrderPaid } from './actions';
import { getDb } from '@/lib/db';
import {
  matchesPaymentAttempt,
  paymentAttemptAge,
  paymentAttemptMethod,
  shortOrderCode,
  type ReviewablePaymentStatus,
} from '@/lib/payment-attempts';
import { getProduct } from '@/lib/products';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Плащания за проверка · Admin',
  robots: { index: false, follow: false },
};

const ROW_LIMIT = 300;

type Row = {
  name: string;
  email: string;
  product: string;
  amount: string;
  currency: string;
  status: ReviewablePaymentStatus;
  mypos_order_id: string;
  created_at: string;
};

type QueueTone = {
  accent: string;
  background: string;
  badgeBackground: string;
};

const BANK_TONE: QueueTone = {
  accent: '#1e5a96',
  background: 'rgba(30,90,150,0.055)',
  badgeBackground: 'rgba(30,90,150,0.1)',
};

const CARD_TONE: QueueTone = {
  accent: '#8a6200',
  background: 'rgba(200,150,20,0.065)',
  badgeBackground: 'rgba(200,150,20,0.13)',
};

function formatAmount(amount: string, currency: string): string {
  const value = Number.parseFloat(amount);
  if (Number.isNaN(value)) return `${amount} ${currency}`;
  const symbol = currency === 'EUR' ? '€' : currency;
  return `${symbol}${value.toFixed(2)}`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString('bg-BG', {
    timeZone: 'Europe/Sofia',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function productName(slug: string): string {
  return getProduct(slug)?.name ?? slug;
}

async function loadAttempts(): Promise<Row[]> {
  const sql = getDb();
  const rows = await sql`
    SELECT
      name,
      email,
      product,
      amount::text AS amount,
      currency,
      status,
      mypos_order_id,
      created_at
    FROM orders
    WHERE status IN ('awaiting_bank_transfer', 'pending')
    ORDER BY created_at DESC
    LIMIT ${ROW_LIMIT}
  `;
  return rows as Row[];
}

function SummaryCard({
  label,
  count,
  detail,
  tone,
}: {
  label: string;
  count: number;
  detail: string;
  tone: QueueTone;
}) {
  return (
    <div
      style={{
        flex: '1 1 240px',
        padding: '18px 22px',
        backgroundColor: '#ffffff',
        border: `1px solid ${tone.badgeBackground}`,
        borderRadius: '14px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.03)',
      }}
    >
      <p
        style={{
          margin: '0 0 6px',
          color: 'rgba(0,0,0,0.55)',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.09em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </p>
      <p style={{ margin: 0, color: tone.accent, fontSize: '28px', fontWeight: 900 }}>
        {count}
      </p>
      <p style={{ margin: '4px 0 0', color: 'rgba(0,0,0,0.55)', fontSize: '12px' }}>
        {detail}
      </p>
    </div>
  );
}

function AttemptQueue({
  title,
  description,
  emptyMessage,
  rows,
  tone,
  now,
}: {
  title: string;
  description: string;
  emptyMessage: string;
  rows: Row[];
  tone: QueueTone;
  now: Date;
}) {
  return (
    <section style={{ marginTop: '32px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '12px',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h2 style={{ margin: '0 0 5px', color: '#1a1a1a', fontSize: '20px' }}>{title}</h2>
          <p style={{ margin: 0, color: 'rgba(0,0,0,0.58)', fontSize: '13px', lineHeight: 1.6 }}>
            {description}
          </p>
        </div>
        <span
          style={{
            padding: '5px 11px',
            color: tone.accent,
            backgroundColor: tone.badgeBackground,
            borderRadius: '999px',
            fontSize: '12px',
            fontWeight: 800,
          }}
        >
          {rows.length} {rows.length === 1 ? 'запис' : 'записа'}
        </span>
      </div>

      {rows.length === 0 ? (
        <div
          style={{
            padding: '34px 24px',
            color: 'rgba(0,0,0,0.5)',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(0,0,0,0.06)',
            borderRadius: '14px',
            textAlign: 'center',
            fontSize: '13px',
          }}
        >
          {emptyMessage}
        </div>
      ) : (
        <div
          style={{
            overflowX: 'auto',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(0,0,0,0.06)',
            borderRadius: '14px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.03)',
          }}
        >
          <div role="table" style={{ minWidth: '1180px', display: 'flex', flexDirection: 'column' }}>
            <div
              role="row"
              style={{
                display: 'grid',
                gridTemplateColumns: '130px 105px 1.35fr 1fr 1.25fr 120px 90px 145px',
                gap: '12px',
                padding: '13px 18px',
                color: 'rgba(0,0,0,0.55)',
                backgroundColor: tone.background,
                borderBottom: '1px solid rgba(0,0,0,0.06)',
                fontSize: '10px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              <div>Дата</div>
              <div>Възраст</div>
              <div>Продукт</div>
              <div>Име</div>
              <div>Имейл</div>
              <div>Метод</div>
              <div>Основание</div>
              <div style={{ textAlign: 'right' }}>Сума / действие</div>
            </div>

            {rows.map((row) => {
              const method = paymentAttemptMethod(row.status);
              const age = paymentAttemptAge(row.created_at, row.status, now);
              const reference = shortOrderCode(row.mypos_order_id);

              return (
                <div
                  key={row.mypos_order_id}
                  role="row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '130px 105px 1.35fr 1fr 1.25fr 120px 90px 145px',
                    gap: '12px',
                    alignItems: 'center',
                    padding: '15px 18px',
                    color: '#1a1a1a',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    fontSize: '13px',
                  }}
                >
                  <div style={{ color: 'rgba(0,0,0,0.62)', fontSize: '12px' }}>
                    {formatDate(row.created_at)}
                  </div>
                  <div>
                    <span style={{ color: age.stale ? '#9c3d22' : 'rgba(0,0,0,0.62)', fontSize: '12px' }}>
                      {age.label}
                    </span>
                    {age.stale && (
                      <span
                        style={{
                          display: 'block',
                          width: 'fit-content',
                          marginTop: '4px',
                          padding: '2px 6px',
                          color: '#9c3d22',
                          backgroundColor: 'rgba(156,61,34,0.08)',
                          borderRadius: '999px',
                          fontSize: '9px',
                          fontWeight: 800,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                        }}
                      >
                        За проверка
                      </span>
                    )}
                  </div>
                  <div style={{ fontWeight: 700 }}>{productName(row.product)}</div>
                  <div>{row.name}</div>
                  <div>
                    <a
                      href={`mailto:${row.email}`}
                      style={{ color: '#70150E', textDecoration: 'none', wordBreak: 'break-all' }}
                    >
                      {row.email}
                    </a>
                  </div>
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '4px 9px',
                        color: tone.accent,
                        backgroundColor: tone.badgeBackground,
                        borderRadius: '999px',
                        fontSize: '11px',
                        fontWeight: 800,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {method === 'bank' ? 'Банков превод' : 'Карта · myPOS'}
                    </span>
                  </div>
                  <div
                    style={{
                      color: 'rgba(0,0,0,0.72)',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {reference}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ marginBottom: method === 'bank' ? '7px' : 0, fontWeight: 800 }}>
                      {formatAmount(row.amount, row.currency)}
                    </div>
                    {method === 'bank' ? (
                      <form action={markBankOrderPaid}>
                        <input type="hidden" name="orderId" value={row.mypos_order_id} />
                        <button
                          type="submit"
                          aria-label={`Маркирай поръчка ${reference} като платена`}
                          style={{
                            padding: '7px 10px',
                            color: '#ffffff',
                            backgroundColor: '#1a7f3c',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                            fontSize: '11px',
                            fontWeight: 800,
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Маркирай платена
                        </button>
                      </form>
                    ) : (
                      <span style={{ color: 'rgba(0,0,0,0.45)', fontSize: '10px' }}>
                        Няма потвърдена транзакция
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default async function AdminPaymentReviewPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const params = await searchParams;
  const rawQuery = Array.isArray(params.q) ? params.q[0] : params.q;
  const query = rawQuery?.trim() ?? '';
  const allRows = await loadAttempts();
  const filteredRows = query
    ? allRows.filter((row) => matchesPaymentAttempt(row, query, productName(row.product)))
    : allRows;
  const bankRows = filteredRows.filter((row) => paymentAttemptMethod(row.status) === 'bank');
  const cardRows = filteredRows.filter((row) => paymentAttemptMethod(row.status) === 'card');
  const allBankCount = allRows.filter((row) => paymentAttemptMethod(row.status) === 'bank').length;
  const allCardCount = allRows.length - allBankCount;
  const now = new Date();

  return (
    <AdminShell title="Плащания за проверка">
      <div
        style={{
          marginBottom: '22px',
          padding: '16px 18px',
          color: '#5d4810',
          backgroundColor: '#fff9e8',
          border: '1px solid rgba(154,107,0,0.16)',
          borderRadius: '12px',
          fontSize: '13px',
          lineHeight: 1.65,
        }}
      >
        <strong>Записът не е доказателство за плащане.</strong> Банков превод се маркира като платен
        само след съвпадение в банковото извлечение. Картов запис „pending“ означава започнат, но
        непотвърден myPOS checkout и няма бутон за ръчно плащане.
      </div>

      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '22px' }}>
        <SummaryCard
          label="Чакат банково потвърждение"
          count={allBankCount}
          detail="Провери основанието в банката"
          tone={BANK_TONE}
        />
        <SummaryCard
          label="Незавършени картови плащания"
          count={allCardCount}
          detail="Няма успешен myPOS webhook"
          tone={CARD_TONE}
        />
      </div>

      <form
        action="/admin/bank-orders"
        method="get"
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '10px',
          flexWrap: 'wrap',
          padding: '16px',
          backgroundColor: '#ffffff',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: '12px',
        }}
      >
        <label style={{ flex: '1 1 320px', color: '#1a1a1a', fontSize: '12px', fontWeight: 700 }}>
          Търси по име, имейл, продукт или основание
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Напр. Мария, biznes-dusha или 05AD6F"
            style={{
              display: 'block',
              width: '100%',
              marginTop: '7px',
              padding: '10px 12px',
              color: '#1a1a1a',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0,0,0,0.16)',
              borderRadius: '8px',
              font: 'inherit',
              fontSize: '13px',
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: '10px 16px',
            color: '#ffffff',
            backgroundColor: '#70150E',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            font: 'inherit',
            fontSize: '12px',
            fontWeight: 800,
          }}
        >
          Търси
        </button>
        {query && (
          <a
            href="/admin/bank-orders"
            style={{ padding: '10px 8px', color: '#70150E', fontSize: '12px', fontWeight: 700 }}
          >
            Изчисти
          </a>
        )}
      </form>

      {query && (
        <p style={{ margin: '12px 0 0', color: 'rgba(0,0,0,0.55)', fontSize: '12px' }}>
          Намерени: {filteredRows.length} от {allRows.length} записа за „{query}“.
        </p>
      )}

      <AttemptQueue
        title="Чакат банково потвърждение"
        description="Тези хора са избрали банков превод. Търси шестсимволното основание в банковото извлечение."
        emptyMessage={query ? 'Няма банкови записи за това търсене.' : 'Няма чакащи банкови преводи.'}
        rows={bankRows}
        tone={BANK_TONE}
        now={now}
      />

      <AttemptQueue
        title="Незавършени картови плащания"
        description="Тези хора са започнали myPOS checkout, но сайтът няма успешна транзакция или платен webhook."
        emptyMessage={query ? 'Няма картови записи за това търсене.' : 'Няма незавършени картови плащания.'}
        rows={cardRows}
        tone={CARD_TONE}
        now={now}
      />

      <p style={{ marginTop: '24px', color: 'rgba(0,0,0,0.46)', fontSize: '12px', lineHeight: 1.7 }}>
        Показани са до {ROW_LIMIT} активни записа за проверка. Стари картови записи се маркират за
        проверка след 2 часа, а банкови — след 48 часа. Това е визуален сигнал и не променя статуса им.
      </p>
    </AdminShell>
  );
}
