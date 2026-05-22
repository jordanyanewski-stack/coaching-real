import Image from 'next/image';
import { LOGO_URL } from '@/app/_shared';

export function AdminShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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
          flexWrap: 'wrap',
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
        <nav style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <AdminNavLink href="/admin">Начало</AdminNavLink>
          <AdminNavLink href="/admin/blog">Блог</AdminNavLink>
          <AdminNavLink href="/admin/bank-orders">Банкови преводи</AdminNavLink>
        </nav>
      </header>
      <main style={{ padding: '40px 32px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '28px',
            fontWeight: 900,
            color: '#1a1a1a',
            letterSpacing: '-0.02em',
            margin: '0 0 24px',
          }}
        >
          {title}
        </h1>
        {children}
      </main>
    </div>
  );
}

function AdminNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        padding: '8px 14px',
        fontSize: '13px',
        fontWeight: 600,
        color: 'rgba(0,0,0,0.7)',
        backgroundColor: '#fbf6f5',
        border: '1px solid rgba(107,21,14,0.1)',
        borderRadius: '8px',
        textDecoration: 'none',
        letterSpacing: '0.01em',
      }}
    >
      {children}
    </a>
  );
}
