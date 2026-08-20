import Image from "next/image";
import { T, onDark, PHOTO_URL, GRADIENT_TEXT, SiteNav, SiteFooter } from "@/app/_shared";
import { CampaignContact } from "@/components/campaign-contact";

export const metadata = {
  title: "Business Bootcamp: Ikigai Marketing – Coaching Real | Станислава Павлова",
  description:
    "10-дневен интензивен Bootcamp за коучове и холистични специалисти - ясна позиция, мини-оферта, 2-платформена видимост и лек процес на продажба. Без натиск. Бизнес с душа.",
};

/* ─── DATA ──────────────────────────────────────────────────────────── */
const audiencePoints = [
  'Устойчивост, не хаос: Да спреш с „хвърляй всичко и виж какво залепва" тактиките и да подредиш проста система, която работи всеки ден.',
  'Да продаваш без натиск: Ще създадеш оферта, която резонира естествено, и процес за плавна покана към покупка - без манипулация.',
  'Мисия & Печалба (Ikigai маркетинг): Да превърнеш мисията си в доход с пълно уважение към себе си и към своите клиенти.',
];

const results = [
  { Icon: IconTarget, title: 'Ясна позиция', desc: 'Elevator pitch, който филтрира и привлича точно твоите идеални клиенти - без обяснения и без насилване.' },
  { Icon: IconBox, title: 'Мини-оферта или дигитален продукт', desc: 'Лайв клас в Zoom или мини-курс с изцяло работеща структура, ценообразуване и обещание.' },
  { Icon: IconMobile, title: 'Фокус върху 2 платформи', desc: 'Ясен план за следващите 90 дни - Instagram + TikTok, YouTube + имейл или друга комбинация.' },
  { Icon: IconZap, title: 'Лек процес на продажба', desc: 'Story-архитектура, ясни CTA призиви и готови скриптове за DM и имейл - без грам натиск.' },
  { Icon: IconCalendar, title: 'Календар за съдържание', desc: 'Теми за Reels/Shorts и имейли за 4 седмици напред - готови, разписани, приложими веднага.' },
];

const howWeWork = [
  { Icon: IconCamera, title: 'Дневни лайв сесии', desc: 'С включен достъп до пълните записи - гледаш кога ти е удобно.' },
  { Icon: IconTemplate, title: 'Практически задания', desc: 'Готови шаблони в Canva и Google Docs - без да измисляш от нулата.' },
  { Icon: IconUsers, title: 'Общност', desc: 'Групов канал за обратна връзка, въпроси и подкрепа - ти не си сам/а в това.' },
];

const days = [
  {
    number: '01',
    label: 'Ден 1',
    title: 'Позициониране',
    subtitle: 'Коя е душата на твоя бизнес?',
    items: [
      'Ikigai позициониране: мисия, стойност, публика.',
      'Elevator pitch, който продава без натиск.',
      'Филтри за идеален клиент (женска аудитория 30–55 г.).',
    ],
  },
  {
    number: '02',
    label: 'Ден 2',
    title: 'Оферта',
    subtitle: 'Мини-оферта с висока конверсия',
    items: [
      'Видове „първи продукт": мини-курс, лайв клас, пакет ресурси.',
      'Структура, ценообразуване и обещание.',
      'Бонуси и ограничители - приложени етично.',
    ],
  },
  {
    number: '03',
    label: 'Ден 3',
    title: 'Видимост',
    subtitle: '2 платформи, 1 план',
    items: [
      'Избор на 2 ключови канала за следващите 90 дни.',
      'Шаблон за 4-седмичен календар на съдържанието.',
      'Hook формули (куки) за Reels/Shorts + библиотеки с CTA.',
    ],
  },
  {
    number: '04',
    label: 'Ден 4',
    title: 'Продажба',
    subtitle: 'Мека продажба, силен резултат',
    items: [
      'Story-архитектура за невидими продажби.',
      'DM и имейл скриптове без грам натиск.',
      'Мини фуния: пост → Reels → имейл → оферта.',
    ],
  },
  {
    number: '05',
    label: 'Ден 5',
    title: 'Система',
    subtitle: 'От хаос към повторяемост',
    items: [
      'Седмичен ритъм: съдържание, оферта, общност.',
      'KPI табло и план по правилото 20/80 (Парето).',
      'Стъпки към 3-месечния „KickSTART".',
    ],
  },
];

const bonusItems = [
  'Готови скриптове за Reels, Stories и имейли.',
  'Чеклист за умно преизползване на съдържание.',
  'Шаблони за анкети и стимулиране на интеракции.',
];

const credentials = [
  'Първият български сертифициран Ikigai коуч (Ikigai Tribe).',
  'Акредитиран обучител към CPD UK.',
  'Опит в работата със стотици жени (30–55 г.) - коучове, терапевти и холистични специалисти.',
];

const faq = [
  {
    q: 'Нямам голяма аудитория. Има ли смисъл?',
    a: 'Абсолютно! Bootcamp-ът е създаден именно за хора в начален или среден стадий на изграждане на онлайн присъствие. Ще научиш как да растеш органично, без да ти трябва голяма аудитория предварително.',
  },
  {
    q: 'Колко време ще ми отнема на ден?',
    a: 'Очаквай 60–90 минути на ден за живата сесия, плюс 30–45 минути за дневното задание. Всичко е записано, така че можеш да гледаш и в удобно за теб време.',
  },
  {
    q: 'Какво, ако вече имам създадена услуга?',
    a: 'Перфектно! Ще използваш Bootcamp-а, за да прецизираш офертата, да подобриш видимостта и да изградиш по-ефективен процес на продажба за това, което вече предлагаш.',
  },
  {
    q: 'Има ли гаранция за програмата?',
    a: 'Давам ти честен и тестван процес, който работи - при условие, че и ти действаш. Гаранция „Чиста съвест": не обещавам магически чудеса, но обещавам ясни стъпки и реална подкрепа по пътя.',
  },
];

/* ─── ICONS ──────────────────────────────────────────────────────────── */
function IconCheck({ dark = false }: { dark?: boolean }) {
  return (
    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
      <path d="M1 4.5L4 7.5L10 1" stroke={dark ? '#ffffff' : '#70150E'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconQuote() {
  return (
    <svg width="36" height="28" viewBox="0 0 36 28" fill="#70150E" opacity="0.18">
      <path d="M0 28V16.8C0 12.267 1.067 8.533 3.2 5.6 5.467 2.667 8.933.8 13.6 0l1.6 3.2C11.067 4.267 8.8 6.133 7.6 8.8 6.533 11.2 6.133 13.6 6.4 16H14V28H0Zm22 0V16.8c0-4.533 1.067-8.267 3.2-11.2C27.467 2.667 30.933.8 35.6 0L37.2 3.2c-4.133 1.067-6.4 2.933-6.8 5.6C29.333 11.2 29 13.6 29.2 16H36V28H22Z" />
    </svg>
  );
}

function IconTarget({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconBox({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" x2="12" y1="22.08" y2="12" />
    </svg>
  );
}

function IconMobile({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" x2="12.01" y1="18" y2="18" />
    </svg>
  );
}

function IconZap({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconCalendar({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function IconCamera({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

function IconTemplate({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

function IconUsers({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconStar({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconShield({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconSmallCalendar({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function IconGlobe({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconMail({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────── */
export default function BootcampPage() {
  return (
    <div style={{ fontFamily: 'var(--font-mv, sans-serif)' }}>
      <SiteNav />
      <HeroSection />
      <AudienceSection />
      <ResultsSection />
      <ProcessSection />
      <ProgramSection />
      <BonusSection />
      <AuthoritySection />
      <FAQSection />
      <WaitlistSection />
      <SiteFooter />
    </div>
  );
}

/* ─── HERO ──────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-20 overflow-hidden"
      style={{ backgroundColor: '#faf8f5' }}
    >
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '-8%', width: '55%', aspectRatio: '1',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(107,21,14,0.55) 0%, transparent 65%)',
          filter: 'blur(90px)', animation: 'heroOrbA 10s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', left: '-5%', width: '40%', aspectRatio: '1',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(107,21,14,0.35) 0%, transparent 65%)',
          filter: 'blur(100px)', animation: 'heroOrbB 13s ease-in-out infinite',
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <div className="animate-fade-up">
            <span className="mv-tag mv-tag-light">Видео курс · 10 дни · Онлайн</span>
          </div>

          <h1 className="animate-fade-up delay-100 mt-6" style={{ lineHeight: 0.95, letterSpacing: '-0.03em' }}>
            <span
              className="block"
              style={{
                fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 14px rgba(200,60,40,0.35)) drop-shadow(0 0 32px rgba(200,60,40,0.14))',
              }}
            >
              BUSINESS BOOTCAMP
            </span>
            <span
              className="block mt-2"
              style={{
                fontSize: 'clamp(1.1rem, 2.8vw, 1.9rem)',
                fontWeight: 700,
                color: 'rgba(15,19,26,0.65)',
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
              }}
            >
              Ikigai Marketing
            </span>
            <span
              className="block mt-2"
              style={{
                fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.46)',
                lineHeight: 1.4,
              }}
            >
              Без натиск. Бизнес с душа.
            </span>
          </h1>

          <p
            className="animate-fade-up delay-200 mt-6"
            style={{ fontSize: '16px', color: onDark.secondary, lineHeight: 1.8, maxWidth: '480px' }}
          >
            Система за устойчив онлайн доход, без да губиш мисията си. Създай ясна позиция,
            привличай клиенти като магнит и продавай с лекота и автентичност.
          </p>

          {/* Stat grid */}
          <div className="animate-fade-up delay-200 mt-7 grid grid-cols-2 gap-2.5">
            {(
              [
                ['10', 'дни', 'ясни стъпки и ежедневни задачи'],
                ['2', 'платформи', 'фокус за следващите 90 дни'],
                ['1', 'продукт', 'твоят първи (или следващ) дигитален продукт'],
                ['0', 'натиск', 'продажби в пълен синхрон с мисията ти'],
              ] as const
            ).map(([num, label, sub]) => (
              <div
                key={num + label}
                className="px-4 py-3"
                style={{
                  backgroundColor: 'rgba(112,21,14,0.04)',
                  borderRadius: '10px',
                  border: '1px solid rgba(112,21,14,0.06)',
                }}
              >
                <p style={{
                  fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 900,
                  background: 'linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '2px',
                }}>{num}</p>
                <p style={{ fontSize: '13px', fontWeight: 700, color: onDark.primary, marginBottom: '1px' }}>{label}</p>
                <p style={{ fontSize: '11px', color: onDark.muted, lineHeight: 1.4 }}>{sub}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row flex-wrap gap-4 mt-9">
            <a href="#waitlist" className="mv-btn mv-btn-primary" style={{ fontSize: '15px', padding: '14px 28px' }}>
              Влез в списъка с чакащи →
            </a>
            <a href="#program" className="mv-btn mv-btn-outline-light" style={{ fontSize: '15px', padding: '14px 28px' }}>
              Виж програмата
            </a>
          </div>
        </div>

        {/* Right - info card */}
        <div className="animate-fade-in delay-200 hidden lg:block">
          <div
            style={{
              backgroundColor: 'rgba(112,21,14,0.04)',
              borderRadius: T.radiusSm,
              border: '1px solid rgba(112,21,14,0.08)',
              padding: '28px',
            }}
          >
            <p style={{
              fontSize: '11px', fontWeight: 700, color: onDark.muted,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px',
            }}>
              За коучове · терапевти · холистични специалисти
            </p>

            <div className="flex flex-col gap-2.5">
              {(
                [
                  ['calendar', '10 концентрирани дни с ежедневни задачи'],
                  ['globe',    'Изцяло онлайн - от всяка точка'],
                  ['mail',     'Записи + всички материали включени'],
                  ['users',    'Групов канал за подкрепа и Q&A'],
                ] as const
              ).map(([type, text]) => (
                <div
                  key={type}
                  className="flex gap-3 items-center px-3 py-2.5"
                  style={{
                    backgroundColor: 'rgba(112,21,14,0.04)',
                    borderRadius: '8px',
                    border: '1px solid rgba(112,21,14,0.06)',
                  }}
                >
                  <span style={{ flexShrink: 0, display: 'flex' }}>
                    {type === 'calendar' && <IconSmallCalendar color="rgba(255,255,255,0.45)" />}
                    {type === 'globe'    && <IconGlobe         color="rgba(255,255,255,0.45)" />}
                    {type === 'mail'     && <IconMail          color="rgba(255,255,255,0.45)" />}
                    {type === 'users'    && <IconUsers         color="rgba(255,255,255,0.45)" />}
                  </span>
                  <p style={{ fontSize: '13px', color: onDark.secondary, fontWeight: 500 }}>{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(112,21,14,0.07)' }}>
              <p style={{
                fontSize: '11px', fontWeight: 700, color: onDark.muted,
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px',
              }}>
                След 10 дни ще имаш
              </p>
              <div className="flex flex-col gap-2">
                {[
                  'Ясна позиция и elevator pitch',
                  'Мини-оферта готова за продажба',
                  'Фокус в 2 платформи за 90 дни',
                  'Готов 4-седмичен контент план',
                ].map((item, i) => (
                  <div key={i} className="flex gap-2.5 items-start">
                    <span style={{ flexShrink: 0, marginTop: '2px' }}><IconCheck dark /></span>
                    <p style={{ fontSize: '12px', color: onDark.secondary, lineHeight: 1.55 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── AUDIENCE ──────────────────────────────────────────────────────── */
function AudienceSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          background:
            'radial-gradient(ellipse 55% 45% at 0% 50%, rgba(107,21,14,0.04) 0%, transparent 65%),' +
            'radial-gradient(ellipse 40% 40% at 100% 100%, rgba(107,21,14,0.03) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <span className="mv-tag mv-tag-light">За кого е Bootcamp-ът</span>
        <h2
          className="mt-5"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
            lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: '680px',
          }}
        >
          За коучове, терапевти и{' '}
          <span style={{ ...GRADIENT_TEXT }}>холистични специалисти</span>
        </h2>
        <p className="mt-5" style={{ fontSize: '15px', color: T.textSecondary, lineHeight: 1.85, maxWidth: '580px' }}>
          Жени 30–55 г., които искат бизнес, носещ едновременно стойност и доходи - без да
          се чувстват като натрапчиви „продавачи".
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {audiencePoints.map((point, i) => {
            const colonIdx = point.indexOf(':');
            const label = colonIdx > -1 ? point.slice(0, colonIdx) : null;
            const body = colonIdx > -1 ? point.slice(colonIdx + 1).trim() : point;
            return (
              <div
                key={i}
                className="flex gap-4 p-6"
                style={{
                  backgroundColor: T.surfaceStrong,
                  borderRadius: '12px',
                  border: '1px solid rgba(107,21,14,0.08)',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                }}
              >
                <span style={{
                  flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px',
                }}>
                  <IconCheck dark />
                </span>
                <p style={{ fontSize: '15px', color: T.textPrimary, lineHeight: 1.75 }}>
                  {label && <strong style={{ fontWeight: 700 }}>{label}:</strong>}
                  {label ? ` ${body}` : body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <a href="#waitlist" className="mv-btn mv-btn-outline-light inline-flex">
            Искам да се запиша →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── RESULTS ───────────────────────────────────────────────────────── */
function ResultsSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#faf8f5' }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          background:
            'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(180,60,40,0.18) 0%, transparent 60%),' +
            'radial-gradient(ellipse 60% 50% at 100% 100%, rgba(107,21,14,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <span className="mv-tag mv-tag-light">Какво ще постигнеш</span>
        <h2
          className="mt-5"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: onDark.primary,
            lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '680px',
          }}
        >
          5 конкретни резултата{' '}
          <span style={{
            background: 'linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            за 10 дни
          </span>
        </h2>
        <p className="mt-4" style={{ fontSize: '15px', color: onDark.secondary, lineHeight: 1.8, maxWidth: '540px' }}>
          Не мотивационни речи. Не общи стратегии. Реални инструменти, приложими от следващия ден.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {results.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex gap-4 p-6"
              style={{
                backgroundColor: 'rgba(112,21,14,0.04)',
                borderRadius: '12px',
                border: '1px solid rgba(112,21,14,0.07)',
              }}
            >
              <div style={{
                flexShrink: 0, width: '40px', height: '40px', borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(107,21,14,0.35) 0%, rgba(107,21,14,0.18) 100%)',
                border: '1px solid rgba(107,21,14,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon color="#e87070" />
              </div>
              <div>
                <h3 style={{
                  fontSize: '15px', fontWeight: 700, color: onDark.primary,
                  lineHeight: 1.3, marginBottom: '6px', letterSpacing: '-0.01em',
                }}>
                  {title}
                </h3>
                <p style={{ fontSize: '13px', color: onDark.secondary, lineHeight: 1.7 }}>{desc}</p>
              </div>
            </div>
          ))}

          {/* Closing card */}
          <div
            className="flex items-center justify-center p-6 md:col-span-2 lg:col-span-1"
            style={{
              backgroundColor: 'rgba(107,21,14,0.18)',
              borderRadius: '12px',
              border: '1px solid rgba(107,21,14,0.35)',
              textAlign: 'center',
            }}
          >
            <p style={{
              fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
              color: onDark.secondary,
              lineHeight: 1.9,
              fontStyle: 'italic',
            }}>
              Ще напуснеш Bootcamp-а с ясен план и готова оферта - точно в синхрон с душата ти.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <a href="#waitlist" className="mv-btn mv-btn-primary" style={{ fontSize: '16px', padding: '16px 40px' }}>
            Искам тези резултати →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS ───────────────────────────────────────────────────────── */
function ProcessSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 100% 50%, rgba(107,21,14,0.04) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <div className="max-w-xl mb-14">
          <span className="mv-tag mv-tag-light">Как работим</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Практично. Конкретно.{' '}
            <span style={{ ...GRADIENT_TEXT }}>Веднага приложимо.</span>
          </h2>
          <p className="mt-5" style={{ fontSize: '15px', color: T.textSecondary, lineHeight: 1.85 }}>
            Всеки ден завършва с ясна задача, която директно движи бизнеса ти напред.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {howWeWork.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="p-7"
              style={{
                backgroundColor: T.surfaceStrong,
                borderRadius: '14px',
                border: '1px solid rgba(107,21,14,0.08)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '11px',
                background: 'linear-gradient(135deg, rgba(107,21,14,0.1) 0%, rgba(201,69,53,0.08) 100%)',
                border: '1px solid rgba(107,21,14,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
              }}>
                <Icon color="#70150E" />
              </div>
              <h3 style={{
                fontSize: '16px', fontWeight: 700, color: T.textPrimary,
                lineHeight: 1.3, marginBottom: '8px', letterSpacing: '-0.01em',
              }}>
                {title}
              </h3>
              <p style={{ fontSize: '14px', color: T.textSecondary, lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* KickSTART note */}
        <div
          className="mt-8 flex gap-4 p-6"
          style={{
            backgroundColor: 'rgba(107,21,14,0.04)',
            borderRadius: '12px',
            border: '1px solid rgba(107,21,14,0.12)',
          }}
        >
          <span style={{
            flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px',
          }}>
            <IconStar color="#ffffff" />
          </span>
          <p style={{ fontSize: '14px', color: T.textPrimary, lineHeight: 1.75 }}>
            <strong>Важно:</strong> Този Bootcamp подгрява 3-месечната менторска програма{' '}
            <strong>KickSTART</strong>. Участниците получават приоритетни места и специални
            бонуси за нея.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── PROGRAM DAY BY DAY ────────────────────────────────────────────── */
function ProgramSection() {
  return (
    <section
      id="program"
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: T.surfaceStrong }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 55% 45% at 50% 0%, rgba(107,21,14,0.04) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <div className="max-w-xl mb-14">
          <span className="mv-tag mv-tag-light">Програмата</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Ден по ден -{' '}
            <span style={{ ...GRADIENT_TEXT }}>стъпка по стъпка</span>
          </h2>
          <p className="mt-5" style={{ fontSize: '15px', color: T.textSecondary, lineHeight: 1.85 }}>
            Кратки, концентрирани модули с примери, скриптове и мини упражнения.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {days.map(({ number, label, title, subtitle, items }, i) => (
            <div key={i} className="flex gap-5 relative">
              {/* Timeline */}
              <div className="flex flex-col items-center" style={{ flexShrink: 0, width: '44px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: '11px', fontWeight: 900, color: 'var(--mv-text-primary)' }}>{number}</span>
                </div>
                {i < days.length - 1 && (
                  <div style={{
                    width: '1.5px', flex: 1, minHeight: '24px',
                    background: 'linear-gradient(180deg, rgba(107,21,14,0.35) 0%, rgba(107,21,14,0.1) 100%)',
                    marginTop: '4px',
                  }} />
                )}
              </div>

              {/* Content */}
              <div className="pb-8" style={{ flex: 1 }}>
                <span style={{
                  fontSize: '11px', fontWeight: 700, color: 'rgba(0,0,0,0.35)',
                  letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '3px',
                }}>
                  {label}
                </span>
                <h3 style={{
                  fontSize: '18px', fontWeight: 800, color: T.textPrimary,
                  lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '2px',
                }}>
                  {title}
                </h3>
                <p style={{ fontSize: '13px', color: '#70150E', fontWeight: 600, marginBottom: '12px' }}>{subtitle}</p>
                <div className="flex flex-col gap-2">
                  {items.map((item, j) => (
                    <div key={j} className="flex gap-2.5 items-start">
                      <span style={{
                        flexShrink: 0, marginTop: '6px', width: '5px', height: '5px',
                        borderRadius: '50%', backgroundColor: 'rgba(107,21,14,0.4)', display: 'block',
                      }} />
                      <p style={{ fontSize: '14px', color: T.textSecondary, lineHeight: 1.7 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <a href="#waitlist" className="mv-btn mv-btn-outline-light inline-flex">
            Влез в списъка с чакащи →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── BONUS ─────────────────────────────────────────────────────────── */
function BonusSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#faf8f5' }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          background:
            'radial-gradient(ellipse 70% 55% at 0% 50%, rgba(107,21,14,0.2) 0%, transparent 60%),' +
            'radial-gradient(ellipse 50% 40% at 100% 0%, rgba(180,50,30,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <span className="mv-tag mv-tag-light">Ексклузивен бонус</span>
        <div className="mt-8 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: onDark.primary,
                lineHeight: 1.1, letterSpacing: '-0.02em',
              }}
            >
              Visibility Sprint{' '}
              <span style={{
                background: 'linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                (10 дни)
              </span>
            </h2>
            <p className="mt-5" style={{ fontSize: '15px', color: onDark.secondary, lineHeight: 1.85 }}>
              Цел: 100 регистрации за 10 дни спринт. Пълен пакет инструменти за видимост,
              приложими веднага след края на Bootcamp-а.
            </p>
            <a href="#waitlist" className="mv-btn mv-btn-primary mt-8 inline-flex" style={{ fontSize: '15px' }}>
              Включи се и вземи бонуса →
            </a>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(112,21,14,0.04)',
              borderRadius: '14px',
              border: '1px solid rgba(112,21,14,0.08)',
              padding: '28px',
            }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'rgba(107,21,14,0.35)', borderRadius: '8px',
              border: '1px solid rgba(107,21,14,0.5)',
              padding: '6px 12px', marginBottom: '20px',
            }}>
              <IconStar color="#e87070" />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#e87070', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Включен в Bootcamp-а
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {bonusItems.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span style={{
                    flexShrink: 0, width: '22px', height: '22px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
                  }}>
                    <IconCheck dark />
                  </span>
                  <p style={{ fontSize: '14px', color: onDark.secondary, lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── AUTHORITY ─────────────────────────────────────────────────────── */
function AuthoritySection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          background:
            'radial-gradient(ellipse 55% 45% at 0% 50%, rgba(107,21,14,0.04) 0%, transparent 65%),' +
            'radial-gradient(ellipse 40% 40% at 100% 0%, rgba(107,21,14,0.03) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div className="relative max-w-5xl mx-auto grid lg:grid-cols-[auto_1fr] gap-12 items-start">
        {/* Photo */}
        <div className="hidden lg:block" style={{ flexShrink: 0 }}>
          <div
            style={{
              position: 'relative', width: '160px', height: '200px', borderRadius: T.radiusSm, overflow: 'hidden',
              border: '2px solid rgba(107,21,14,0.2)',
              boxShadow: '0 8px 32px rgba(107,21,14,0.1)',
            }}
          >
            <Image
              src={PHOTO_URL}
              alt="Станислава Павлова"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              sizes="160px"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="mv-tag mv-tag-light">Защо да ми се довериш</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Станислава Павлова -{' '}
            <span style={{ ...GRADIENT_TEXT }}>Ikigai коуч</span>
          </h2>
          <p
            className="mt-3"
            style={{ fontSize: '12px', color: T.textSecondary, lineHeight: 1.5, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}
          >
            Бизнес ментор · Ikigai коуч · CPD акредитиран обучител
          </p>
          <p className="mt-5" style={{ fontSize: '15px', color: T.textSecondary, lineHeight: 1.85 }}>
            Създавам системи за онлайн предприемачи, които пазят душата на бизнеса и водят до
            устойчив доход. Моята мисия: да ти помогна да продаваш в пълен синхрон с душата си,
            без абсолютно никакъв компромис с ценностите ти.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {credentials.map((cred, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span style={{
                  flexShrink: 0, width: '22px', height: '22px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px',
                }}>
                  <IconCheck dark />
                </span>
                <p style={{ fontSize: '14px', color: T.textPrimary, lineHeight: 1.7, fontWeight: 500 }}>{cred}</p>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div
            className="mt-8 flex gap-4 p-6"
            style={{
              backgroundColor: T.surfaceStrong,
              borderRadius: '12px',
              border: '1px solid rgba(107,21,14,0.1)',
            }}
          >
            <div style={{
              flexShrink: 0, width: '40px', height: '40px', borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(107,21,14,0.12) 0%, rgba(107,21,14,0.07) 100%)',
              border: '1px solid rgba(107,21,14,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <IconShield color="#70150E" />
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 700, color: T.textPrimary, marginBottom: '4px' }}>
                Гаранция „Чиста съвест"
              </p>
              <p style={{ fontSize: '13px', color: T.textSecondary, lineHeight: 1.7 }}>
                Не обещавам магически чудеса. Давам ти прост, честен и тестван процес,
                който гарантирано работи - стига ти да действаш.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────────────── */
function FAQSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: T.surfaceStrong }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(107,21,14,0.04) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div className="relative max-w-3xl mx-auto">
        <span className="mv-tag mv-tag-light">Имаш въпроси?</span>
        <h2
          className="mt-5 mb-12"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
            lineHeight: 1.1, letterSpacing: '-0.02em',
          }}
        >
          Често задавани{' '}
          <span style={{ ...GRADIENT_TEXT }}>въпроси</span>
        </h2>

        <div className="flex flex-col gap-4">
          {faq.map(({ q, a }, i) => (
            <div
              key={i}
              className="p-6"
              style={{
                backgroundColor: T.surfaceRaised,
                borderRadius: '12px',
                border: '1px solid rgba(107,21,14,0.08)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
              }}
            >
              <p style={{
                fontSize: '16px', fontWeight: 700, color: T.textPrimary,
                lineHeight: 1.35, marginBottom: '10px', letterSpacing: '-0.01em',
              }}>
                {q}
              </p>
              <p style={{ fontSize: '14px', color: T.textSecondary, lineHeight: 1.8 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WAITLIST ──────────────────────────────────────────────────────── */
function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#faf8f5' }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(107,21,14,0.3) 0%, transparent 65%),' +
            'radial-gradient(ellipse 40% 30% at 20% 80%, rgba(180,50,30,0.14) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div className="relative max-w-3xl mx-auto">
        {/* Personal message */}
        <div
          className="grid lg:grid-cols-[auto_1fr] gap-8 items-start mb-16 pb-16"
          style={{ borderBottom: '1px solid rgba(112,21,14,0.07)' }}
        >
          <div className="hidden lg:block" style={{ flexShrink: 0 }}>
            <div style={{
              position: 'relative', width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden',
              border: '2px solid rgba(107,21,14,0.4)',
            }}>
              <Image
                src={PHOTO_URL}
                alt="Станислава Павлова"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                sizes="120px"
              />
            </div>
          </div>
          <div>
            <IconQuote />
            <blockquote className="mt-4">
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: onDark.secondary, lineHeight: 1.9, fontStyle: 'italic' }}>
                Вярвам, че продажбата е акт на любов - когато помагаш на точния човек да намери
                точното решение, без натиск и без манипулация. Business Bootcamp е твоята отправна
                точка към бизнес, в който мисията и печалбата вървят ръка за ръка.
              </p>
            </blockquote>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#e87070', marginTop: '16px', letterSpacing: '0.02em' }}>
              - Станислава Павлова
            </p>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <span
            className="mv-tag inline-block mb-8"
            style={{ backgroundColor: 'rgba(112,21,14,0.08)', color: '#e87070' }}
          >
            Следващо издание: ОЧАКВАЙТЕ СКОРО
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--mv-text-primary)',
            lineHeight: 1.15, letterSpacing: '-0.02em',
          }}>
            Готова ли си да продаваш{' '}
            <span style={{ color: '#e85050' }}>с лекота?</span>
          </h2>
          <p className="mt-4" style={{ fontSize: '16px', color: onDark.secondary, lineHeight: 1.8 }}>
            Всички сесии са онлайн (Europe/Sofia). Ако не можеш да присъстваш на живо -
            получаваш достъп до пълен запис и всички материали.
          </p>
        </div>

        {/* Form */}
        <form
          action="#"
          method="POST"
          style={{
            backgroundColor: 'rgba(112,21,14,0.04)',
            borderRadius: '16px',
            border: '1px solid rgba(112,21,14,0.08)',
            padding: '32px',
          }}
        >
          <p style={{
            fontSize: '11px', fontWeight: 700, color: onDark.muted,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px',
          }}>
            Влез в списъка с чакащи
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="bc-name"
                style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: onDark.secondary, marginBottom: '6px' }}
              >
                Имена
              </label>
              <input
                id="bc-name"
                name="name"
                type="text"
                placeholder="Твоето пълно име"
                style={{
                  width: '100%', padding: '12px 14px',
                  backgroundColor: 'rgba(112,21,14,0.06)',
                  border: '1px solid rgba(112,21,14,0.09)',
                  borderRadius: '8px',
                  fontSize: '14px', color: 'var(--mv-text-primary)',
                  outline: 'none',
                }}
              />
            </div>
            <div>
              <label
                htmlFor="bc-email"
                style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: onDark.secondary, marginBottom: '6px' }}
              >
                Имейл
              </label>
              <input
                id="bc-email"
                name="email"
                type="email"
                placeholder="example@email.com"
                style={{
                  width: '100%', padding: '12px 14px',
                  backgroundColor: 'rgba(112,21,14,0.06)',
                  border: '1px solid rgba(112,21,14,0.09)',
                  borderRadius: '8px',
                  fontSize: '14px', color: 'var(--mv-text-primary)',
                  outline: 'none',
                }}
              />
            </div>
            <div>
              <label
                htmlFor="bc-phone"
                style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: onDark.secondary, marginBottom: '6px' }}
              >
                Телефонен номер
              </label>
              <input
                id="bc-phone"
                name="phone"
                type="tel"
                placeholder="+359 ..."
                style={{
                  width: '100%', padding: '12px 14px',
                  backgroundColor: 'rgba(112,21,14,0.06)',
                  border: '1px solid rgba(112,21,14,0.09)',
                  borderRadius: '8px',
                  fontSize: '14px', color: 'var(--mv-text-primary)',
                  outline: 'none',
                }}
              />
            </div>

            <button
              type="submit"
              className="mv-btn mv-btn-primary"
              style={{ fontSize: '16px', padding: '16px 32px', marginTop: '8px', width: '100%', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
            >
              Включи се в списъка →
            </button>
            <p style={{ fontSize: '11px', color: onDark.muted, textAlign: 'center' }}>
              Без спам. Само важни новини за следващото издание.
            </p>
            <CampaignContact color={onDark.muted} />
          </div>
        </form>
      </div>
    </section>
  );
}
