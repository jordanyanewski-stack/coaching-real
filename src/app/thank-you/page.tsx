import { LOGO_URL, SiteFooter } from '@/app/_shared';
import Image from 'next/image';
import { getDb } from '@/lib/db';
import { getProduct, type ProductSlug } from '@/lib/products';
import { TrackPurchase } from './track-purchase';
import { SetBuyerCookie } from './set-buyer-cookie';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Благодаря! | Coaching Real',
  description: 'Плащането е успешно. Ще получиш имейл с всички детайли.',
};

type OrderRow = {
  amount: string;          // numeric — neon returns as string
  currency: string;
  product: string;
};

async function loadOrder(orderId: string | undefined): Promise<OrderRow | null> {
  if (!orderId) return null;
  try {
    const sql = getDb();
    const rows = (await sql`
      SELECT amount, currency, product FROM orders WHERE mypos_order_id = ${orderId} LIMIT 1
    `) as OrderRow[];
    return rows[0] ?? null;
  } catch (err) {
    console.error('[thank-you] order lookup failed', {
      orderId,
      error: (err as Error).message,
    });
    return null;
  }
}

interface ProductCopy {
  title: string;
  body: string;
  primaryCta?: { label: string; href: string; viber?: boolean };
  secondaryCtaHref: string;
}

const MASTERCLASS_VIBER =
  'https://invite.viber.com/?g2=AQBBHCyONP2cNVPVyUuCy2RxRXH9Qe9wX18biT2LifkWu9sxYovJlzjCBPTGEtGQ';

function copyFor(productSlug: string | undefined): ProductCopy {
  switch (productSlug as ProductSlug) {
    case 'audiobook':
    case 'audiobook-hot':
      return {
        title: 'Добре дошла!',
        body: 'Плащането е успешно. Аудиокнигата вече е достъпна в твоя профил.',
        primaryCta: { label: 'Отвори профила си', href: '/dashboard' },
        secondaryCtaHref: '/audiobook',
      };
    case 'career-course':
      return {
        title: 'Добре дошла!',
        body: 'Плащането е успешно. Ще получиш имейл с достъп до пълния 4-седмичен курс и всички материали.',
        secondaryCtaHref: '/career-course',
      };
    case 'biznes-dusha':
    case 'biznes-dusha-early':
      return {
        title: 'Добре дошла!',
        body: 'Плащането е успешно. Ще получиш имейл с всички детайли за „Бизнес с душа, без хаос“ — дати, часове и Zoom линк за първата вечер (17 юни, 17:00 ч.).',
        primaryCta: {
          label: 'Присъедини се към Viber групата',
          href: MASTERCLASS_VIBER,
          viber: true,
        },
        secondaryCtaHref: '/biznes-s-dusha',
      };
    case 'masterclass':
    default:
      return {
        title: 'Добре дошла!',
        body: 'Плащането е успешно. Ще получиш имейл с всички детайли за мастъркласовете - дати, часове и линк за достъп.',
        primaryCta: {
          label: 'Присъедини се към Viber групата',
          href: MASTERCLASS_VIBER,
          viber: true,
        },
        secondaryCtaHref: '/masterclass',
      };
  }
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const orderId = typeof params.order === 'string' ? params.order : undefined;
  const order = await loadOrder(orderId);
  const productSlug = order?.product;
  const product = getProduct(productSlug);
  const copy = copyFor(productSlug);
  const purchaseValue = order ? parseFloat(order.amount) : product ? parseFloat(product.price) : 0;
  const purchaseCurrency = order?.currency ?? product?.currency ?? 'EUR';

  return (
    <div style={{ fontFamily: 'var(--font-mv, sans-serif)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TrackPurchase value={purchaseValue} currency={purchaseCurrency} />
      {productSlug && <SetBuyerCookie product={productSlug} />}
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
              background: 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
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
            {copy.title}
          </h1>

          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: '28px' }}>
            {copy.body}
          </p>

          {copy.primaryCta && (
            <a
              href={copy.primaryCta.href}
              target={copy.primaryCta.viber ? '_blank' : undefined}
              rel={copy.primaryCta.viber ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                padding: '16px 24px',
                backgroundColor: copy.primaryCta.viber ? '#7360F2' : '#70150E',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 700,
                borderRadius: '12px',
                textDecoration: 'none',
                marginBottom: '20px',
                boxShadow: copy.primaryCta.viber
                  ? '0 4px 14px rgba(115,96,242,0.35)'
                  : '0 4px 14px rgba(112,21,14,0.35)',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
            >
              {copy.primaryCta.viber && (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z" />
                </svg>
              )}
              {copy.primaryCta.label}
            </a>
          )}

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

          <a href={copy.secondaryCtaHref} style={{ fontSize: '14px', color: '#70150E', fontWeight: 600, textDecoration: 'none' }}>
            Обратно към страницата
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
