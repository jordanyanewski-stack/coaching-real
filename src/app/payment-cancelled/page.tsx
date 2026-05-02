import { LOGO_URL, SiteFooter } from '@/app/_shared';
import Image from 'next/image';

export const metadata = {
  title: 'Плащането е отменено - Coaching Real',
};

export default function PaymentCancelledPage() {
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
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 24px',
          backgroundColor: '#faf8f5',
        }}
      >
        <div
          style={{
            maxWidth: '520px',
            width: '100%',
            textAlign: 'center',
            padding: '56px 40px',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1px solid rgba(107,21,14,0.08)',
            boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 28px',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </div>

          <h1 style={{ fontSize: '26px', fontWeight: 900, color: '#1a1a1a', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Плащането не беше завършено
          </h1>

          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: '36px' }}>
            Не е направено задържане. Можеш да опиташ отново по всяко време.
          </p>

          <a
            href="/masterclass#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: '15px', padding: '14px 36px', display: 'inline-block', textDecoration: 'none' }}
          >
            Опитай отново
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
