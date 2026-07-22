import { AdminShell } from '../_admin-shell';
import { getDb } from '@/lib/db';
import { shortOrderCode } from '@/lib/payment-attempts';
import { PRODUCTS, type ProductSlug } from '@/lib/products';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Поръчки · Admin',
  robots: { index: false, follow: false },
};

const ROW_LIMIT = 300;

type Row = {
  name: string;
  email: string;
  product: string;
  amount: string;
  currency: string;
  status: string;
  mypos_order_id: string;
  mypos_transaction_id: string | null;
  created_at: string;
};

type Stats = {
  paid_count: number;
  paid_total: string;
  month_count: number;
  month_total: string;
  today_count: number;
  today_total: string;
};

const STATUS_BADGES: Record<string, { label: string; color: string; bg: string }> = {
  paid: { label: 'Платена', color: '#1a7f3c', bg: 'rgba(26,127,60,0.09)' },
  pending: { label: 'Незавършена карта', color: '#9a6b00', bg: 'rgba(200,150,20,0.12)' },
  awaiting_bank_transfer: { label: 'Чака банков превод', color: '#1e5a96', bg: 'rgba(30,90,150,0.09)' },
  free: { label: 'Промо код', color: 'rgba(0,0,0,0.55)', bg: 'rgba(0,0,0,0.06)' },
};

function productName(slug: string): string {
  return PRODUCTS[slug as ProductSlug]?.name ?? slug;
}

function formatAmount(amount: string, currency: string): string {
  const n = parseFloat(amount);
  if (Number.isNaN(n)) return `${amount} ${currency}`;
  const symbol = currency === 'EUR' ? '€' : currency;
  return `${symbol}${n.toFixed(2)}`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString('bg-BG', {
    timeZone: 'Europe/Sofia',
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

async function loadData(): Promise<{ rows: Row[]; stats: Stats }> {
  const sql = getDb();
  const [rows, statsRows] = await Promise.all([
    sql`
      SELECT
        name,
        email,
        product,
        amount::text AS amount,
        currency,
        status,
        mypos_order_id,
        mypos_transaction_id,
        created_at
      FROM orders
      ORDER BY created_at DESC
      LIMIT ${ROW_LIMIT}
    `,
    // Month/day boundaries in Sofia local time (the server runs on UTC).
    sql`
      WITH bounds AS (
        SELECT
          (date_trunc('month', now() AT TIME ZONE 'Europe/Sofia') AT TIME ZONE 'Europe/Sofia') AS month_start,
          (date_trunc('day', now() AT TIME ZONE 'Europe/Sofia') AT TIME ZONE 'Europe/Sofia') AS day_start
      )
      SELECT
        COUNT(*) FILTER (WHERE status = 'paid')::int AS paid_count,
        COALESCE(SUM(amount) FILTER (WHERE status = 'paid'), 0)::text AS paid_total,
        COUNT(*) FILTER (WHERE status = 'paid' AND created_at >= month_start)::int AS month_count,
        COALESCE(SUM(amount) FILTER (WHERE status = 'paid' AND created_at >= month_start), 0)::text AS month_total,
        COUNT(*) FILTER (WHERE status = 'paid' AND created_at >= day_start)::int AS today_count,
        COALESCE(SUM(amount) FILTER (WHERE status = 'paid' AND created_at >= day_start), 0)::text AS today_total
      FROM orders, bounds
    `,
  ]);
  return { rows: rows as Row[], stats: statsRows[0] as Stats };
}

function StatCard({ label, count, total }: { label: string; count: number; total: string }) {
  return (
    <div
      style={{
        flex: '1 1 160px',
        padding: '18px 22px',
        backgroundColor: '#ffffff',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: '14px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.03)',
      }}
    >
      <p
        style={{
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'rgba(0,0,0,0.5)',
          margin: '0 0 8px',
        }}
      >
        {label}
      </p>
      <p style={{ fontSize: '24px', fontWeight: 900, color: '#70150E', margin: 0, letterSpacing: '-0.02em' }}>
        {formatAmount(total, 'EUR')}
      </p>
      <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.55)', margin: '4px 0 0' }}>
        {count} {count === 1 ? 'платена поръчка' : 'платени поръчки'}
      </p>
    </div>
  );
}

export default async function AdminOrdersPage() {
  const { rows, stats } = await loadData();

  return (
    <AdminShell title="Поръчки">
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
        <StatCard label="Днес" count={stats.today_count} total={stats.today_total} />
        <StatCard label="Този месец" count={stats.month_count} total={stats.month_total} />
        <StatCard label="Общо" count={stats.paid_count} total={stats.paid_total} />
      </div>

      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: '14px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.03)',
          overflowX: 'auto',
        }}
      >
        <div role="table" style={{ minWidth: '920px', display: 'flex', flexDirection: 'column' }}>
          <div
            role="row"
            style={{
              display: 'grid',
              gridTemplateColumns: '110px 1.4fr 1fr 1.2fr 80px 120px 110px',
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
            <div>Продукт</div>
            <div>Име</div>
            <div>Имейл</div>
            <div style={{ textAlign: 'right' }}>Сума</div>
            <div>Статус</div>
            <div>Транзакция / основание</div>
          </div>

          {rows.map((row) => {
            const badge = STATUS_BADGES[row.status] ?? {
              label: row.status,
              color: 'rgba(0,0,0,0.55)',
              bg: 'rgba(0,0,0,0.06)',
            };
            return (
              <div
                key={row.mypos_order_id}
                role="row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '110px 1.4fr 1fr 1.2fr 80px 120px 110px',
                  gap: '12px',
                  padding: '14px 20px',
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                  alignItems: 'center',
                  fontSize: '13px',
                  color: '#1a1a1a',
                }}
              >
                <div style={{ color: 'rgba(0,0,0,0.6)' }}>{formatDate(row.created_at)}</div>
                <div style={{ fontWeight: 600 }}>{productName(row.product)}</div>
                <div>{row.name}</div>
                <div>
                  <a
                    href={`mailto:${row.email}`}
                    style={{ color: '#70150E', textDecoration: 'none', wordBreak: 'break-all' }}
                  >
                    {row.email}
                  </a>
                </div>
                <div style={{ textAlign: 'right', fontWeight: 700 }}>
                  {formatAmount(row.amount, row.currency)}
                </div>
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: badge.color,
                      backgroundColor: badge.bg,
                      borderRadius: '999px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {badge.label}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    fontSize: '12px',
                    color: 'rgba(0,0,0,0.6)',
                    wordBreak: 'break-all',
                  }}
                >
                  {row.mypos_transaction_id || shortOrderCode(row.mypos_order_id)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p style={{ marginTop: '24px', fontSize: '12px', color: 'rgba(0,0,0,0.45)', lineHeight: 1.7 }}>
        Показани са последните {ROW_LIMIT} поръчки. „Платена" = завършено картово плащане
        (номерът на транзакцията идва от myPOS). „Незавършена карта" = започнат, но
        непотвърден myPOS checkout. „Чака банков превод" = записано намерение без банково
        потвърждение — управлява се от „Плащания за проверка". Сумите в картите горе включват
        само платени поръчки.
      </p>
    </AdminShell>
  );
}
