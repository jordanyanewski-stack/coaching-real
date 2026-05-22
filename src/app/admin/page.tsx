import { AdminShell } from './_admin-shell';

export const metadata = {
  title: 'Admin · Coaching Real',
  robots: { index: false, follow: false },
};

export default function AdminHomePage() {
  return (
    <AdminShell title="Admin">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          href="/admin/blog"
          label="Блог"
          description="Управление на статиите · нова статия, редакция, премахване."
        />
        <Card
          href="/admin/bank-orders"
          label="Банкови преводи"
          description="Чакащи поръчки от клиенти, заплатени по банков път."
        />
      </div>
    </AdminShell>
  );
}

function Card({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description: string;
}) {
  return (
    <a
      href={href}
      style={{
        display: 'block',
        padding: '24px',
        backgroundColor: '#ffffff',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: '14px',
        textDecoration: 'none',
        color: 'inherit',
        boxShadow: '0 2px 16px rgba(0,0,0,0.03)',
        transition: 'transform 0.12s, box-shadow 0.12s',
      }}
    >
      <p
        style={{
          fontSize: '11px',
          fontWeight: 700,
          color: '#70150E',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}
      >
        Раздел
      </p>
      <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f131a', marginBottom: '6px' }}>
        {label}
      </h2>
      <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.6)', lineHeight: 1.7, margin: 0 }}>
        {description}
      </p>
    </a>
  );
}
