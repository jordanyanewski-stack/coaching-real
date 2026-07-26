import { LOGO_URL, SiteFooter } from '@/app/_shared';
import Image from 'next/image';
import { getDb } from '@/lib/db';
import { getProduct, type ProductSlug } from '@/lib/products';
import { TrackPurchase } from './track-purchase';
import { SetBuyerCookie } from './set-buyer-cookie';
import { PendingPaymentWatcher } from './pending-payment-watcher';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Благодаря! | Coaching Real',
  description: 'Плащането е успешно. Ще получиш имейл с всички детайли.',
  // Mid-funnel page reachable only post-checkout — keep it out of search.
  robots: { index: false, follow: false },
};

type OrderRow = {
  amount: string;          // numeric — neon returns as string
  currency: string;
  product: string;
  status: string;
};

async function loadOrder(orderId: string | undefined): Promise<OrderRow | null> {
  if (!orderId) return null;
  try {
    const sql = getDb();
    const rows = (await sql`
      SELECT amount, currency, product, status FROM orders WHERE mypos_order_id = ${orderId} LIMIT 1
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

type CtaBtn = {
  label: string;
  href: string;
  viber?: boolean;
  telegram?: boolean;
  skool?: boolean;
  facebook?: boolean;
  external?: boolean;
  bullets?: string[];
};

type CourseDetail = { label: string; value: string };

type TyStep = {
  badge: string;               // e.g. "Стъпка 1 — Задължително"
  title: string;
  body?: string;
  cta?: CtaBtn;                // reuses CtaButton → FB-blue etc.
  note?: string;              // important/warning callout under the CTA
  details?: CourseDetail[];   // "Детайли за курса" key/value grid
  checklist?: string[];
};

interface ProductCopy {
  eyebrow?: string;
  title: string;
  body: string;
  primaryCta?: CtaBtn;
  extraCtas?: CtaBtn[];
  secondaryCtaHref: string;
  whatNext?: string;
  ps?: string;
  /**
   * Additive (currently only izlez-ot-zastoy): a richer multi-step post-purchase
   * layout for courses delivered via a closed group — numbered steps, a course-
   * details grid, a checklist, a personal note from the coach + a contact line.
   * Products that omit these render exactly as before.
   */
  steps?: TyStep[];
  personalNote?: { heading: string; body: string };
  contactLine?: string;
  theme?: 'zhiva-vol-2';
}

const MASTERCLASS_VIBER =
  'https://invite.viber.com/?g2=AQBBHCyONP2cNVPVyUuCy2RxRXH9Qe9wX18biT2LifkWu9sxYovJlzjCBPTGEtGQ';
const BIZNES_FB_GROUP = 'https://www.facebook.com/groups/1641246887138088';
const HRISTINA_FB_GROUP = 'https://www.facebook.com/groups/1497653248724998';
const ZHIVA_VOL2_FB_GROUP = 'https://www.facebook.com/groups/2047210579211062/';
const ZHIVA_VOL2_CALENDAR =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=%D0%96%D0%98%D0%92%D0%90+vol.+2%3A+%D0%A1%D1%8A%D0%B6%D0%B8%D0%B2%D0%B8+%D1%81%D0%B5%21&dates=20260821%2F20260824&details=%D0%A2%D1%80%D0%B8+%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD+%D1%81%D1%80%D0%B5%D1%89%D0%B8+%D0%BD%D0%B0+%D0%B6%D0%B8%D0%B2%D0%BE+%D1%81+%D0%A2%D0%B0%D0%BD%D1%8F+%D0%9A%D0%B0%D1%81%D0%B0%D0%B1%D0%BE%D0%B2%D0%B0.&location=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F2047210579211062%2F';

function copyFor(productSlug: string | undefined): ProductCopy {
  switch (productSlug as ProductSlug) {
    case 'audiobook':
    case 'audiobook-hot':
    case 'audiobook-72h':
      return {
        title: 'Добре дошла!',
        body: 'Плащането е успешно. Аудиокнигата вече е достъпна в твоя профил.',
        primaryCta: { label: 'Отвори профила си', href: '/dashboard' },
        secondaryCtaHref: '/audiobook',
      };
    case 'career-course':
      return {
        title: 'Добре дошла!',
        body: 'Плащането е успешно. Курсът „Кариерно развитие в ерата на AI“ се провежда в Skool общността „Career Compass“ — влез от бутона по-долу, за да започнеш. Ще получиш и имейл с достъп до всички материали.',
        primaryCta: {
          label: 'Влез в Skool общността',
          href: 'https://www.skool.com/career-compass-7781/about',
          skool: true,
          external: true,
        },
        secondaryCtaHref: '/career-course',
      };
    // Free Day-1 promo-code tier — deliberately NO Viber CTA: the participant
    // Viber group shares the daily Zoom links, which would hand the free tier
    // the whole program. They get only the Day-1 email from MailerLite.
    case 'biznes-dusha-day1':
      return {
        title: 'Добре дошла!',
        body: 'Записването е успешно. Ще получиш имейл със Zoom линка за първия мастърклас на „Бизнес с душа, без хаос“ — 17 юни, 17:00 ч.',
        secondaryCtaHref: '/biznes-s-dusha',
      };
    case 'biznes-dusha':
    case 'biznes-dusha-early':
      return {
        title: 'Мястото ти е запазено!',
        body: 'Благодаря ти за регистрацията! Добре дошла в общността от жени, които създават бизнес в синхрон с мисията си. Включи се в каналите за комуникация по-долу.',
        extraCtas: [
          {
            label: 'Присъедини се към Facebook групата',
            href: BIZNES_FB_GROUP,
            facebook: true,
            bullets: [
              'достъп до лайфовете',
              'важни напомняния',
              'бонуси и допълнителни ресурси',
              'пространство за въпроси и подкрепа',
            ],
          },
          {
            label: 'Влез във Viber общността',
            href: MASTERCLASS_VIBER,
            viber: true,
            bullets: [
              'бързи известия',
              'директни линкове',
              'материали и напомняния в реално време',
            ],
          },
        ],
        whatNext:
          'До няколко минути ще получиш имейл с детайли за събитието и инструкции за подготовка. Ако не пристигне, провери папка Промоции или Спам.',
        ps: 'Благодаря ти за доверието. Този избор ще ти донесе яснота, растеж и реални резултати. Нямам търпение да те видя в процеса!\n— Стаси',
        secondaryCtaHref: '/biznes-s-dusha',
      };
    // „Излез от вътрешния застой" (Христина / ALIGN) — доставка в ЗАТВОРЕНА
    // Facebook група, не Skool/Zoom. Двустъпков layout (steps): Стъпка 1 = влез
    // в групата (задължително), Стъпка 2 = детайли + чеклист. Копи 1:1 от Христина.
    case 'izlez-ot-zastoy-regular':
    case 'izlez-ot-zastoy':
      return {
        title: 'Записана си!',
        body: 'Добре дошла в курса. Радвам се, че направи тази стъпка за себе си. Прочети внимателно какво те очаква.',
        steps: [
          {
            badge: 'Стъпка 1 — Задължително',
            title: 'Присъедини се към групата във Facebook',
            body: 'Там ще получаваш всички материали, задачи и подкрепа по време на курса. Без групата нямаш достъп до съдържанието.',
            cta: {
              label: 'Влез в групата сега',
              href: HRISTINA_FB_GROUP,
              facebook: true,
              external: true,
            },
            note: 'Присъединяването към групата е задължително условие за участие в курса. Ако не го направиш, ще пропуснеш материали и живи сесии.',
          },
          {
            badge: 'Стъпка 2 — Запази си датите',
            title: 'Детайли за курса',
            details: [
              { label: 'Старт', value: '24 юли 2026' },
              { label: 'Продължителност', value: '4 седмици' },
              { label: 'Формат', value: 'Онлайн, на живо' },
              { label: 'Платформа', value: 'Facebook група' },
            ],
            checklist: [
              'Провери имейла си — ще получиш потвърждение с всички детайли.',
              'Включи известията в групата, за да не пропускаш нищо.',
              'Запази 24 юли в календара си — живата сесия започва точно в обявения час.',
            ],
          },
        ],
        personalNote: {
          heading: 'Лично от Христина',
          body: 'Направи тази стъпка за себе си.\nРадвам се, че избра да излезеш от вътрешния застой. Следващите 4 седмици ще бъдат различни — не защото ще получиш още информация, а защото ще се видиш ясно.\nДо скоро,\nХристина',
        },
        contactLine: 'Въпроси? Пиши на info@coachingreallive.com',
        secondaryCtaHref: '/izlez-ot-zastoy',
      };
    case 'zhiva':
      return {
        title: 'Добре дошла!',
        body: 'Плащането е успешно. Достъпът ти до 4-седмичния курс „ЖИВА“ е в нашата Skool общност — влез от бутона по-долу, за да започнеш.',
        primaryCta: {
          label: 'Влез в Skool общността',
          href: 'https://www.skool.com/tanya-kasabova-5879/about?ref=307d82e69f7946efb3f50e830833489a',
          skool: true,
          external: true,
        },
        secondaryCtaHref: '/zhiva',
      };
    case 'zhiva-vol-2':
      return {
        eyebrow: 'Регистрацията е потвърдена',
        title: 'Мястото ти е запазено.',
        body: 'Благодарим ти, че избра себе си. До 21 август остава съвсем малко — ето какво следва.',
        extraCtas: [
          {
            label: 'Влез във Facebook групата — задължително',
            href: ZHIVA_VOL2_FB_GROUP,
            facebook: true,
            external: true,
            bullets: ['Там ще се проведат и трите срещи на живо.'],
          },
        ],
        steps: [
          {
            badge: 'Събитие',
            title: 'ЖИВА vol. 2: Съживи се!',
            details: [
              { label: 'Дати', value: '21–23 август' },
              { label: 'Формат', value: 'Онлайн на живо' },
              { label: 'Платено', value: '37 €' },
              { label: 'Водеща', value: 'Таня Касабова' },
            ],
          },
          {
            badge: 'Стъпка 1',
            title: 'Провери имейла си',
            body: 'Изпратихме ти потвърждение с детайлите за трите онлайн срещи. Ако не го виждаш до 10 минути, провери папка „Спам“ или „Промоции“.',
          },
          {
            badge: 'Стъпка 2',
            title: 'Добави датите в календара си',
            body: '21, 22 и 23 август — онлайн срещи на живо. Дай си дума, че тези три дни са само твои.',
            cta: {
              label: 'Добави в календара',
              href: ZHIVA_VOL2_CALENDAR,
              external: true,
            },
          },
          {
            badge: 'Стъпка 3',
            title: 'Присъедини се към групата преди старта',
            body: 'Затворена общност само за участничките — за въпроси, настройка и малко спокойствие преди първата среща.',
            cta: {
              label: 'Влез в групата',
              href: ZHIVA_VOL2_FB_GROUP,
              facebook: true,
              external: true,
            },
          },
        ],
        personalNote: {
          heading: 'Кратко напомняне какво ще преживееш',
          body:
            'Три срещи, всяка с различна, но свързана тема — от разпознаване на режима на оцеляване, през разбиране на подсъзнателната програма, до първата ти различна стъпка.\n\n21 август — Кога спрях да бъда жива?\n22 август — Защо винаги очаквам болката да се повтори?\n23 август — Връщам се в живота си',
        },
        ps:
          'Между другото — на втория ден Таня ще ти покаже и следващата стъпка.\n\nЖИВА VOL. 2: СЪЖИВИ СЕ! — ТАНЯ КАСАБОВА',
        secondaryCtaHref: '/zhiva-vol-2',
        theme: 'zhiva-vol-2',
      };
    case 'rodov-model':
      return {
        title: 'Добре дошла!',
        body: 'Плащането е успешно. Достъпът ти до 4-седмичния курс „Прекъсни родовия модел в любовта“ е в общността ни — влез от бутоните по-долу, за да започнеш.',
        primaryCta: {
          label: 'Влез в Skool общността',
          href: 'https://www.skool.com/galyatodorova-1060/about',
          skool: true,
          external: true,
        },
        extraCtas: [
          {
            label: 'Влез в Telegram групата',
            href: 'https://t.me/+g7Q99S4mfZoxZjI0',
            telegram: true,
          },
        ],
        secondaryCtaHref: '/rodov-model',
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

function CtaButton({ cta }: { cta: CtaBtn }) {
  const isExternal = !!(cta.viber || cta.telegram || cta.facebook || cta.external);
  const bg = cta.viber
    ? '#7360F2'
    : cta.telegram
      ? '#229ED9'
      : cta.facebook
        ? '#1877F2'
        : '#70150E';
  const shadow = cta.viber
    ? '0 4px 14px rgba(115,96,242,0.35)'
    : cta.telegram
      ? '0 4px 14px rgba(34,158,217,0.35)'
      : cta.facebook
        ? '0 4px 14px rgba(24,119,242,0.35)'
        : '0 4px 14px rgba(112,21,14,0.35)';
  return (
    <div style={{ marginBottom: '20px' }}>
      <a
        href={cta.href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          width: '100%',
          padding: '16px 24px',
          backgroundColor: bg,
          color: '#ffffff',
          fontSize: '15px',
          fontWeight: 700,
          borderRadius: '12px',
          textDecoration: 'none',
          boxShadow: shadow,
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
      >
        {cta.telegram && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
          </svg>
        )}
        {cta.facebook && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79v8.44C19.61 23.08 24 18.09 24 12.07z" />
          </svg>
        )}
        {cta.viber && (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z" />
          </svg>
        )}
        {cta.label}
      </a>
      {cta.bullets && cta.bullets.length > 0 && (
        <ul style={{ listStyle: 'none', margin: '12px 0 0', padding: '0 4px', textAlign: 'left' }}>
          {cta.bullets.map((b) => (
            <li
              key={b}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                fontSize: '13.5px',
                color: 'rgba(0,0,0,0.55)',
                lineHeight: 1.6,
                marginBottom: '6px',
              }}
            >
              <span style={{ color: bg, fontWeight: 700 }} aria-hidden="true">
                •
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TyStepCard({ step, warm = false }: { step: TyStep; warm?: boolean }) {
  return (
    <div
      style={{
        padding: '24px',
        backgroundColor: warm ? '#FFFDF8' : '#ffffff',
        borderRadius: '14px',
        border: warm ? '1px solid rgba(36,22,17,0.12)' : '1px solid rgba(107,21,14,0.12)',
        textAlign: 'left',
        boxShadow: warm ? '0 12px 34px rgba(36,22,17,0.045)' : '0 2px 16px rgba(0,0,0,0.03)',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          padding: '5px 12px',
          borderRadius: '6px',
          backgroundColor: warm ? '#F1E3CE' : 'rgba(112,21,14,0.08)',
          color: warm ? '#8A6420' : '#70150E',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '14px',
        }}
      >
        {step.badge}
      </div>

      <h2 style={{ fontSize: '18px', fontWeight: 800, color: warm ? '#241611' : '#1a1a1a', letterSpacing: '-0.01em', marginBottom: step.body ? '8px' : '16px' }}>
        {step.title}
      </h2>

      {step.body && (
        <p style={{ fontSize: '14px', color: warm ? '#6B5A4C' : 'rgba(0,0,0,0.6)', lineHeight: 1.7, marginBottom: '16px' }}>
          {step.body}
        </p>
      )}

      {step.cta && <CtaButton cta={step.cta} />}

      {step.note && (
        <div
          style={{
            padding: '12px 16px',
            backgroundColor: warm ? '#FBF5EC' : 'rgba(112,21,14,0.05)',
            borderLeft: warm ? '3px solid #B9862E' : '3px solid #70150E',
            borderRadius: '6px',
            fontSize: '13px',
            color: warm ? '#8A6420' : '#70150E',
            lineHeight: 1.6,
          }}
        >
          {step.note}
        </div>
      )}

      {step.details && step.details.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            marginBottom: step.checklist && step.checklist.length > 0 ? '20px' : 0,
          }}
        >
          {step.details.map((d) => (
            <div
              key={d.label}
              style={{
                padding: '14px 16px',
                backgroundColor: warm ? '#FBF5EC' : '#faf8f5',
                borderRadius: '10px',
                border: '1px solid rgba(107,21,14,0.08)',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: warm ? '#8A6420' : 'rgba(0,0,0,0.45)', marginBottom: '4px' }}>
                {d.label}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: warm ? '#241611' : '#1a1a1a' }}>{d.value}</div>
            </div>
          ))}
        </div>
      )}

      {step.checklist && step.checklist.length > 0 && (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {step.checklist.map((c) => (
            <li key={c} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '13.5px', color: warm ? '#6B5A4C' : 'rgba(0,0,0,0.62)', lineHeight: 1.6 }}>
              <span
                aria-hidden
                style={{ width: '18px', height: '18px', borderRadius: '5px', backgroundColor: warm ? '#F1E3CE' : 'rgba(112,21,14,0.10)', color: warm ? '#8A6420' : '#70150E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const orderId = typeof params.order === 'string' ? params.order : undefined;
  const order = await loadOrder(orderId);
  // Preview: ?product=<slug> renders that product's copy when there's no real order,
  // so any thank-you variant can be eyeballed. Pixel + buyer cookie stay gated to real orders.
  const previewSlug =
    !order && typeof params.product === 'string' && getProduct(params.product)
      ? params.product
      : undefined;
  const productSlug = order?.product ?? previewSlug;
  const product = getProduct(productSlug);
  const copy = copyFor(productSlug);
  const warmThankYou = copy.theme === 'zhiva-vol-2';
  const purchaseValue = order ? parseFloat(order.amount) : product ? parseFloat(product.price) : 0;
  const purchaseCurrency = order?.currency ?? product?.currency ?? 'EUR';
  // Only a genuinely PAID order may fire the Purchase pixel or set the buyer
  // cookie. A pending/abandoned order (its id can land in the URL before the
  // myPOS webhook flips it to 'paid') must do neither — it would pollute the
  // pixel's optimization signal and hand out the €97 promo without payment.
  const isPaid = order?.status === 'paid';

  return (
    <div style={{ fontFamily: 'var(--font-mv, sans-serif)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* €0 promo-code signups must not fire a Purchase event — zero-value
          purchases skew the pixel's conversion optimization. */}
      {isPaid && purchaseValue > 0 && (
        <TrackPurchase value={purchaseValue} currency={purchaseCurrency} eventId={orderId} />
      )}
      {isPaid && productSlug && <SetBuyerCookie product={productSlug} />}
      {/* Landed before the myPOS webhook flipped the order — wait for it, then
          re-render so the Purchase pixel still fires for this real payment. */}
      {orderId && order?.status === 'pending' && <PendingPaymentWatcher orderId={orderId} />}
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
          backgroundColor: warmThankYou ? '#FBF5EC' : '#faf8f5',
        }}
      >
        <div
          style={{
            maxWidth: warmThankYou ? '720px' : '520px',
            width: '100%',
            textAlign: 'center',
            padding: '56px 40px',
            backgroundColor: warmThankYou ? '#FFFDF8' : '#ffffff',
            borderRadius: '20px',
            border: warmThankYou ? '1px solid rgba(36,22,17,0.10)' : '1px solid rgba(107,21,14,0.08)',
            boxShadow: warmThankYou ? '0 24px 70px rgba(36,22,17,0.08)' : '0 4px 40px rgba(0,0,0,0.06)',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: warmThankYou
                ? 'linear-gradient(135deg, #B9862E 0%, #8A6420 100%)'
                : 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
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

          {copy.eyebrow && (
            <p
              style={{
                color: warmThankYou ? '#A63F48' : '#70150E',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              {copy.eyebrow}
            </p>
          )}

          <h1 style={{ fontSize: warmThankYou ? '34px' : '28px', fontWeight: 900, color: warmThankYou ? '#241611' : '#1a1a1a', letterSpacing: '-0.02em', marginBottom: '16px', textWrap: 'balance' }}>
            {copy.title}
          </h1>

          <p style={{ fontSize: '16px', color: warmThankYou ? '#6B5A4C' : 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: '28px', textWrap: 'pretty' }}>
            {copy.body}
          </p>

          {copy.primaryCta && (
            <a
              href={copy.primaryCta.href}
              target={copy.primaryCta.viber || copy.primaryCta.external ? '_blank' : undefined}
              rel={copy.primaryCta.viber || copy.primaryCta.external ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                padding: '16px 24px',
                backgroundColor: copy.primaryCta.viber
                  ? '#7360F2'
                  : copy.primaryCta.skool
                    ? '#FFCC00'
                    : '#70150E',
                color: copy.primaryCta.skool ? '#1a1a1a' : '#ffffff',
                fontSize: '15px',
                fontWeight: 700,
                borderRadius: '12px',
                textDecoration: 'none',
                marginBottom: '20px',
                boxShadow: copy.primaryCta.viber
                  ? '0 4px 14px rgba(115,96,242,0.35)'
                  : copy.primaryCta.skool
                    ? '0 4px 14px rgba(255,204,0,0.40)'
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

          {copy.extraCtas?.map((c) => (
            <CtaButton key={c.href} cta={c} />
          ))}

          {copy.steps && copy.steps.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              {copy.steps.map((s) => (
                <TyStepCard key={s.badge} step={s} warm={warmThankYou} />
              ))}
            </div>
          )}

          {copy.whatNext ? (
            <div
              style={{
                padding: '20px 24px',
                backgroundColor: warmThankYou ? '#FBF5EC' : '#faf8f5',
                borderRadius: '12px',
                marginBottom: copy.ps ? '20px' : '32px',
                border: warmThankYou ? '1px solid rgba(36,22,17,0.10)' : '1px solid rgba(107,21,14,0.08)',
                textAlign: 'left',
              }}
            >
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>Какво следва?</p>
              <p style={{ fontSize: '13.5px', color: 'rgba(0,0,0,0.55)', lineHeight: 1.7 }}>{copy.whatNext}</p>
            </div>
          ) : copy.steps ? null : (
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
          )}

          {copy.ps && (
            <p
              style={{
                fontSize: '13.5px',
                color: warmThankYou ? '#6B5A4C' : 'rgba(0,0,0,0.5)',
                lineHeight: 1.7,
                fontStyle: 'italic',
                marginBottom: '28px',
                whiteSpace: 'pre-line',
              }}
            >
              {copy.ps}
            </p>
          )}

          {copy.personalNote && (
            <div
              style={{
                padding: '22px 24px',
                backgroundColor: warmThankYou ? '#F1E3CE' : '#faf8f5',
                borderRadius: '12px',
                marginBottom: '20px',
                border: warmThankYou ? '1px solid rgba(36,22,17,0.10)' : '1px solid rgba(107,21,14,0.08)',
                textAlign: 'left',
              }}
            >
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: warmThankYou ? '#A63F48' : '#70150E', marginBottom: '10px' }}>
                {copy.personalNote.heading}
              </p>
              <p style={{ fontSize: '14px', color: warmThankYou ? '#6B5A4C' : 'rgba(0,0,0,0.62)', lineHeight: 1.75, whiteSpace: 'pre-line' }}>
                {copy.personalNote.body}
              </p>
            </div>
          )}

          {copy.contactLine && (
            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '28px' }}>
              {copy.contactLine}
            </p>
          )}

          <a href={copy.secondaryCtaHref} style={{ fontSize: '14px', color: warmThankYou ? '#A63F48' : '#70150E', fontWeight: 600, textDecoration: 'none' }}>
            Обратно към страницата
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
