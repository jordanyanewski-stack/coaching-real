import { LOGO_URL, SiteFooter } from '@/app/_shared';
import Image from 'next/image';

export const metadata = {
  title: 'Благодаря! - 12 Дни Мастъркласове | Coaching Real',
  description: 'Плащането е успешно. Ще получиш имейл с всички детайли.',
};

export default function ThankYouPage() {
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
              background: 'linear-gradient(135deg, #6b150e 0%, #c94535 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 28px',
            }}
          >
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
              <path d="M2 11L10 19L26 2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#1a1a1a', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Добре дошла!
          </h1>

          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: '28px' }}>
            Плащането е успешно. Ще получиш имейл с всички детайли за мастъркласовете - дати, часове и линк за достъп.
          </p>

          <div
            style={{
              padding: '20px 24px',
              backgroundColor: '#faf8f5',
              borderRadius: '12px',
              marginBottom: '32px',
              border: '1px solid rgba(107,21,14,0.08)',
            }}
          >
            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '4px' }}>Провери папката</p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>Промоции или Спам</p>
            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.45)', marginTop: '4px' }}>
              Ако имейлът не пристига в рамките на 5 минути
            </p>
          </div>

          <a href="/masterclass" style={{ fontSize: '14px', color: '#6b150e', fontWeight: 600, textDecoration: 'none' }}>
            Обратно към страницата
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
