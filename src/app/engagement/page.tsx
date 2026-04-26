import Image from "next/image";
import { T, onDark, PHOTO_URL, GRADIENT_TEXT, SiteNav, SiteFooter } from "@/app/_shared";

export const metadata = {
  title: "Ангажираност и развитие – Coaching Real | Станислава Павлова",
  description:
    "Практическа програма за завършили KickSTART - изгради freebie, висококонвертираща фуния и растящ имейл списък. 5 фази, 6 месеца, €702.",
};

/* ─── DATA ──────────────────────────────────────────────────────────── */
const heroBullets = [
  'Създай freebie, който привлича точно твоите идеални клиенти.',
  'Изгради последователности от имейли, които превръщат студени абонати в реални купувачи.',
  'Настрой проста система за ежедневно привличане на нови абонати.',
];

const testimonials = [
  {
    quote: 'Изградих списък от 1300 ангажирани души с първия си безплатен курс - с бебе на 9 месеца и нула абонати в началото.',
    author: 'Емилия Б.',
    role: 'Коуч по отслабване',
  },
  {
    quote: 'Само с органични социални мрежи привлякох 4000 записвания за безплатен 4-седмичен курс по йога за лице.',
    author: 'М.Д.',
    role: 'Инструктор по йога за лице',
  },
];

const phases = [
  {
    number: '01',
    title: 'Прецизирай посланието си',
    items: [
      'Определи с хирургична точност кой е твоят идеален клиент.',
      'Обнови описанието на курса си, за да привлича правилните хора.',
      'Усъвършенствай посланията си на база реална обратна връзка от участници.',
    ],
  },
  {
    number: '02',
    title: 'Изгради ангажирана общност',
    items: [
      'Превърни своя имейл списък в активна и лоялна аудитория.',
      'Създавай съдържание, което категорично доказва твоята експертност.',
      'Поддържай връзка чрез имейл серии, които изграждат доверие.',
    ],
  },
  {
    number: '03',
    title: 'Създай оферти и продавай с увереност',
    items: [
      'Проектирай оферти, които хората наистина искат да купят.',
      'Научи се да пишеш имейли, които водят към конкретно действие.',
      'Изгради система за постоянен поток от продажби.',
    ],
  },
  {
    number: '04',
    title: 'Изгради своя онлайн дом',
    items: [
      'Създай прост, но професионален сайт, който работи за теб денонощно.',
      'Използвай ефективни копирайтинг текстове за привличане на клиенти.',
      'Изгради ясна пътека: от случаен посетител до лоялен купувач.',
    ],
  },
  {
    number: '05',
    title: 'Автоматизирай и скалирай растежа',
    items: [
      'Автоматизирай ключовите процеси за растеж.',
      'Създавай нови freebies, които ежедневно привличат свежи абонати.',
      'Повиши видимостта си в социалните мрежи устойчиво и без прегаряне.',
    ],
  },
];

const results = [
  { Icon: IconTrendUp, title: 'Растящ имейл списък', desc: 'От доказано ангажирани абонати, изградени с правилна стратегия.' },
  { Icon: IconTarget, title: 'Яснота за аудиторията', desc: 'Ще знаеш точно какво наистина иска да купи твоята аудитория.' },
  { Icon: IconGear, title: 'Работеща система', desc: 'За ежедневен растеж и автоматизирано привличане на лийдове.' },
  { Icon: IconSpark, title: 'Увереност в продажбите', desc: 'Продавай автентично, с лекота и без натиск - по своя собствен начин.' },
];

const support = [
  { value: '€997', label: 'Коучинг Q&A сесии', sub: 'на всеки две седмици' },
  { value: '€997', label: 'AI обновления', sub: 'тримесечни обучения' },
  { value: '∞', label: 'Разширена подкрепа', sub: 'обучение и общност' },
];

const bonuses = [
  {
    number: '1',
    title: 'Пакет с вайръл текстове за социални мрежи',
    value: '€500',
    desc: 'База данни от над 1500 доказано успешни поста, адаптирани с AI. Просто пренаписвай и използвай съдържание, което гарантирано работи за твоя бизнес.',
  },
  {
    number: '2',
    title: 'Достъп до Business Bootcamp',
    value: 'Безценна',
    desc: 'Над 50 мастъркласа, тримесечни AI обучения и достъп до затворена общност от жени предприемачи, които растат и се подкрепят заедно.',
  },
  {
    number: '★',
    title: 'Специален бонус при пълно плащане',
    value: '',
    desc: 'Модул „Продавай с увереност" - научи как да опаковаш курса си, да го промотираш с лекота и да продаваш по всяко време, напълно органично.',
  },
];

const programIncludes = [
  '5 структурирани фази с ясни задачи',
  'Коучинг Q&A сесии на всеки две седмици',
  'Тримесечни AI обновления и обучения',
  'Бонус: Пакет с 1500+ вайръл текста',
  'Бонус: Достъп до Business Bootcamp',
  '12 месеца достъп до всички ресурси',
  'Разсрочено плащане чрез TBI Bank',
];

/* ─── ICONS ──────────────────────────────────────────────────────────── */
function IconCheck({ dark = false }: { dark?: boolean }) {
  return (
    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
      <path
        d="M1 4.5L4 7.5L10 1"
        stroke={dark ? '#ffffff' : '#6b150e'}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconQuote() {
  return (
    <svg width="36" height="28" viewBox="0 0 36 28" fill="#6b150e" opacity="0.18">
      <path d="M0 28V16.8C0 12.267 1.067 8.533 3.2 5.6 5.467 2.667 8.933.8 13.6 0l1.6 3.2C11.067 4.267 8.8 6.133 7.6 8.8 6.533 11.2 6.133 13.6 6.4 16H14V28H0Zm22 0V16.8c0-4.533 1.067-8.267 3.2-11.2C27.467 2.667 30.933.8 35.6 0L37.2 3.2c-4.133 1.067-6.4 2.933-6.8 5.6C29.333 11.2 29 13.6 29.2 16H36V28H22Z" />
    </svg>
  );
}

function IconTrendUp({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function IconTarget({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconGear({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function IconSpark({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function IconMail({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconGift({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────── */
export default function EngagementPage() {
  return (
    <div style={{ fontFamily: 'var(--font-mv, sans-serif)' }}>
      <SiteNav />
      <HeroSection />
      <TestimonialsSection />
      <PhasesSection />
      <ResultsSection />
      <SupportSection />
      <BonusSection />
      <PricingSection />
      <FinalCTASection />
      <SiteFooter />
    </div>
  );
}

/* ─── HERO ──────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-20 overflow-hidden"
      style={{ backgroundColor: '#0f0808' }}
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
            <span className="mv-tag mv-tag-dark">За завършили KickSTART</span>
          </div>

          <h1 className="animate-fade-up delay-100 mt-6" style={{ lineHeight: 0.95, letterSpacing: '-0.03em' }}>
            <span
              className="block"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #6b150e 0%, #c94535 55%, #e85050 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 14px rgba(200,60,40,0.35)) drop-shadow(0 0 32px rgba(200,60,40,0.14))',
              }}
            >
              Ангажираност и развитие
            </span>
            <span
              className="block mt-4"
              style={{
                fontSize: 'clamp(1.1rem, 2.6vw, 1.6rem)',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.78)',
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
              }}
            >
              Създаде курса си. Сега изгради аудиторията, която го купува.
            </span>
          </h1>

          <p
            className="animate-fade-up delay-200 mt-6"
            style={{ fontSize: '16px', color: onDark.secondary, lineHeight: 1.8, maxWidth: '500px' }}
          >
            Практическа програма за завършили KickSTART, която ти помага да създадеш
            силен freebie, да изградиш висококонвертираща фуния и да увеличаваш имейл
            списъка си ежедневно - за да продаваш уверено, без сложни автоматизации.
          </p>

          <div className="animate-fade-up delay-200 mt-7 flex flex-col gap-2.5">
            {heroBullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-3">
                <span style={{
                  flexShrink: 0, width: '22px', height: '22px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6b150e 0%, #c94535 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
                }}>
                  <IconCheck dark />
                </span>
                <p style={{ fontSize: '14px', color: onDark.secondary, lineHeight: 1.65 }}>{bullet}</p>
              </div>
            ))}
          </div>

          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row flex-wrap gap-4 mt-9">
            <a href="#order" className="mv-btn mv-btn-primary" style={{ fontSize: '15px', padding: '14px 28px' }}>
              Присъедини се към програмата →
            </a>
            <a href="#phases" className="mv-btn mv-btn-outline-dark" style={{ fontSize: '15px', padding: '14px 28px' }}>
              Виж как работи
            </a>
          </div>
        </div>

        {/* Right - info card */}
        <div className="animate-fade-in delay-200 hidden lg:block">
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              borderRadius: T.radiusSm,
              border: '1px solid rgba(255,255,255,0.09)',
              padding: '28px',
            }}
          >
            <p style={{
              fontSize: '11px', fontWeight: 700, color: onDark.muted,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px',
            }}>
              Програмата включва
            </p>

            <div className="flex flex-col gap-2.5">
              {(
                [
                  ['calendar', '6 месеца активна програма'],
                  ['key',      '12 месеца достъп до ресурси'],
                  ['chat',     'Q&A сесии на всеки 2 седмици'],
                  ['ai',       'Тримесечни AI обучения'],
                ] as const
              ).map(([type, text]) => (
                <div
                  key={type}
                  className="flex gap-3 items-center px-3 py-2.5"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <span style={{ flexShrink: 0, display: 'flex' }}>
                    {type === 'calendar' && <IconCalendar color="rgba(255,255,255,0.45)" />}
                    {type === 'key'      && <IconKey      color="rgba(255,255,255,0.45)" />}
                    {type === 'chat'     && <IconMail     color="rgba(255,255,255,0.45)" />}
                    {type === 'ai'       && <IconSpark    color="rgba(255,255,255,0.45)" />}
                  </span>
                  <p style={{ fontSize: '13px', color: onDark.secondary, fontWeight: 500 }}>{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <p style={{
                fontSize: '11px', fontWeight: 700, color: onDark.muted,
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px',
              }}>
                Бонуси
              </p>
              <div className="flex flex-col gap-2">
                {[
                  '1500+ вайръл текста за социални мрежи',
                  'Достъп до Business Bootcamp',
                  'Специален бонус при пълно плащане',
                ].map((item, i) => (
                  <div key={i} className="flex gap-2.5 items-start">
                    <span style={{ flexShrink: 0, marginTop: '2px' }}><IconCheck dark /></span>
                    <p style={{ fontSize: '12px', color: onDark.secondary, lineHeight: 1.55 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <p style={{ fontSize: '11px', color: onDark.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
                Инвестиция
              </p>
              <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.03em' }}>
                €702
              </p>
              <p style={{ fontSize: '12px', color: onDark.muted, marginTop: '4px' }}>
                Месечни плащания · Разсрочване с TBI Bank
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ──────────────────────────────────────────────────── */
function TestimonialsSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-20 overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          background:
            'radial-gradient(ellipse 50% 50% at 0% 50%, rgba(107,21,14,0.04) 0%, transparent 65%),' +
            'radial-gradient(ellipse 40% 40% at 100% 0%, rgba(107,21,14,0.03) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <p style={{
          fontSize: '11px', fontWeight: 700, color: 'rgba(0,0,0,0.32)',
          letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px',
        }}>
          Истински резултати
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-7 flex flex-col gap-4"
              style={{
                backgroundColor: T.surfaceStrong,
                borderRadius: '14px',
                border: '1px solid rgba(107,21,14,0.08)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              <IconQuote />
              <p style={{ fontSize: '15px', color: T.textPrimary, lineHeight: 1.85, fontStyle: 'italic', flex: 1 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#6b150e' }}>{t.author}</p>
                <p style={{ fontSize: '12px', color: T.textSecondary, marginTop: '2px' }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PHASES ─────────────────────────────────────────────────────────── */
function PhasesSection() {
  return (
    <section
      id="phases"
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
          <span className="mv-tag mv-tag-light">Как работи програмата</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            5 фази, структурирани{' '}
            <span style={{ ...GRADIENT_TEXT }}>за реален растеж</span>
          </h2>
          <p className="mt-4" style={{ fontSize: '15px', color: T.textSecondary, lineHeight: 1.85 }}>
            Всяка стъпка надгражда предходната - не започваш отначало, а развиваш вече
            изградената здрава основа от KickSTART.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {phases.map(({ number, title, items }, i) => (
            <div key={i} className="flex gap-5 relative">
              {/* Timeline */}
              <div className="flex flex-col items-center" style={{ flexShrink: 0, width: '48px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, #6b150e 0%, #c94535 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginTop: '4px',
                }}>
                  <span style={{ fontSize: '11px', fontWeight: 900, color: '#ffffff', letterSpacing: '0.04em' }}>{number}</span>
                </div>
                {i < phases.length - 1 && (
                  <div style={{
                    width: '1.5px', flex: 1, minHeight: '24px',
                    background: 'linear-gradient(180deg, rgba(107,21,14,0.35) 0%, rgba(107,21,14,0.1) 100%)',
                    marginTop: '4px',
                  }} />
                )}
              </div>

              {/* Content */}
              <div
                className="mb-5 flex-1 p-6"
                style={{
                  backgroundColor: T.surfaceRaised,
                  borderRadius: '12px',
                  border: '1px solid rgba(107,21,14,0.08)',
                  boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
                }}
              >
                <h3 style={{
                  fontSize: '16px', fontWeight: 700, color: T.textPrimary,
                  lineHeight: 1.3, marginBottom: '12px', letterSpacing: '-0.01em',
                }}>
                  {title}
                </h3>
                <div className="flex flex-col gap-2">
                  {items.map((item, j) => (
                    <div key={j} className="flex gap-2.5 items-start">
                      <span style={{ flexShrink: 0, marginTop: '4px', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'rgba(107,21,14,0.4)', display: 'block' }} />
                      <p style={{ fontSize: '13px', color: T.textSecondary, lineHeight: 1.7 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a href="#order" className="mv-btn mv-btn-outline-light inline-flex">
            Присъедини се към програмата →
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
      style={{ backgroundColor: '#1a1010' }}
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
        <span className="mv-tag mv-tag-dark">Какво ще постигнеш</span>
        <h2
          className="mt-5"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: onDark.primary,
            lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '680px',
          }}
        >
          До края на програмата ти ще имаш{' '}
          <span style={{
            background: 'linear-gradient(135deg, #6b150e 0%, #c94535 55%, #e85050 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            реални резултати
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {results.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex gap-4 p-6"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div style={{
                flexShrink: 0, width: '44px', height: '44px', borderRadius: '11px',
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
        </div>

        <div className="mt-10">
          <a href="#order" className="mv-btn mv-btn-primary" style={{ fontSize: '16px', padding: '16px 40px' }}>
            Искам да постигна това →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── SUPPORT ───────────────────────────────────────────────────────── */
function SupportSection() {
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
            'radial-gradient(ellipse 55% 45% at 100% 50%, rgba(107,21,14,0.04) 0%, transparent 65%),' +
            'radial-gradient(ellipse 40% 40% at 0% 100%, rgba(107,21,14,0.03) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div className="relative max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <span className="mv-tag mv-tag-light">Подкрепа и инструменти</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Не си сама{' '}
            <span style={{ ...GRADIENT_TEXT }}>в този процес</span>
          </h2>
          <p className="mt-5" style={{ fontSize: '15px', color: T.textSecondary, lineHeight: 1.85 }}>
            В програмата получаваш не просто материали - получаваш жива подкрепа,
            редовни актуализации и общност, която те разбира.
          </p>

          <a href="#order" className="mv-btn mv-btn-outline-light mt-10 inline-flex">
            Присъедини се →
          </a>
        </div>

        <div className="flex flex-col gap-5">
          {support.map(({ value, label, sub }, i) => (
            <div
              key={i}
              className="flex gap-5 items-center p-6"
              style={{
                backgroundColor: T.surfaceStrong,
                borderRadius: '12px',
                border: '1px solid rgba(107,21,14,0.08)',
                boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ flexShrink: 0, textAlign: 'center', minWidth: '72px' }}>
                <p style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', fontWeight: 900,
                  ...GRADIENT_TEXT, lineHeight: 1, letterSpacing: '-0.02em',
                }}>
                  {value}
                </p>
                <p style={{ fontSize: '10px', color: 'rgba(0,0,0,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px' }}>
                  Стойност
                </p>
              </div>
              <div style={{ width: '1px', height: '48px', backgroundColor: 'rgba(107,21,14,0.1)' }} />
              <div>
                <p style={{ fontSize: '14px', fontWeight: 700, color: T.textPrimary, lineHeight: 1.3, marginBottom: '3px' }}>{label}</p>
                <p style={{ fontSize: '12px', color: T.textSecondary }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── BONUSES ───────────────────────────────────────────────────────── */
function BonusSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#100808' }}
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
        <span className="mv-tag mv-tag-dark">Ексклузивни бонуси</span>
        <h2
          className="mt-5"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: onDark.primary,
            lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '680px',
          }}
        >
          Всичко, от което се{' '}
          <span style={{
            background: 'linear-gradient(135deg, #6b150e 0%, #c94535 55%, #e85050 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            нуждаеш, за да успееш
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {bonuses.map(({ number, title, value, desc }, i) => (
            <div
              key={i}
              className="flex flex-col p-7"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                borderRadius: '14px',
                border: i === 2
                  ? '1px solid rgba(201,69,53,0.4)'
                  : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6b150e 0%, #c94535 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <span style={{ fontSize: '12px', fontWeight: 900, color: '#ffffff' }}>
                    {number === '★' ? <IconGift color="#ffffff" /> : number}
                  </span>
                </div>
                {value && (
                  <span style={{
                    fontSize: '11px', fontWeight: 700, color: '#e87070',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>
                    {value}
                  </span>
                )}
              </div>
              <h3 style={{
                fontSize: '15px', fontWeight: 700, color: onDark.primary,
                lineHeight: 1.3, marginBottom: '10px', letterSpacing: '-0.01em',
              }}>
                {title}
              </h3>
              <p style={{ fontSize: '13px', color: onDark.secondary, lineHeight: 1.75, flex: 1 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="#order" className="mv-btn mv-btn-primary" style={{ fontSize: '16px', padding: '16px 40px' }}>
            Вземи всичко сега →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ───────────────────────────────────────────────────────── */
function PricingSection() {
  return (
    <section
      id="order"
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: T.surfaceStrong }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(107,21,14,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="mv-tag mv-tag-light">Готова за устойчив растеж?</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Присъедини се сега &amp;{' '}
            <span style={{ ...GRADIENT_TEXT }}>започни своя растеж</span>
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{ fontSize: '16px', color: T.textSecondary, lineHeight: 1.8, maxWidth: '500px' }}
          >
            6 месеца програма · 12 месеца достъп · Разсрочено плащане с TBI Bank
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 items-start">

          {/* Main pricing card */}
          <div
            style={{
              backgroundColor: T.surfaceRaised,
              borderRadius: '16px',
              border: '2px solid rgba(107,21,14,0.2)',
              overflow: 'hidden',
              boxShadow: '0 4px 28px rgba(107,21,14,0.08)',
            }}
          >
            <div
              className="px-7 py-5"
              style={{ background: 'linear-gradient(135deg, #6b150e 0%, #c94535 100%)' }}
            >
              <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                Ангажираност и развитие
              </p>
              <p style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>
                Пълен достъп до всичко
              </p>
            </div>

            <div className="p-7">
              <div className="flex items-end gap-3 mb-2">
                <span style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: T.textPrimary,
                  lineHeight: 1, letterSpacing: '-0.03em',
                }}>
                  €702
                </span>
              </div>
              <p style={{ fontSize: '13px', color: T.textSecondary, lineHeight: 1.6, marginBottom: '20px' }}>
                Месечни плащания · Налична е възможност за разсрочено плащане чрез TBI Bank.
              </p>

              <p style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(0,0,0,0.32)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Включва:
              </p>
              <div className="flex flex-col gap-2.5 mb-7">
                {programIncludes.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <span style={{
                      flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6b150e 0%, #c94535 100%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <IconCheck dark />
                    </span>
                    <p style={{ fontSize: '13px', color: T.textPrimary, fontWeight: 500 }}>{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="/kickstart#waitlist"
                className="mv-btn mv-btn-primary"
                style={{ fontSize: '15px', padding: '14px 24px', display: 'flex', justifyContent: 'center' }}
              >
                Присъедини се сега и започни своя растеж →
              </a>
              <p className="text-center mt-3" style={{ fontSize: '11px', color: T.textSecondary }}>
                6 месеца програма · 12 месеца достъп
              </p>
            </div>
          </div>

          {/* Side info */}
          <div className="flex flex-col gap-5">
            <div
              className="p-6"
              style={{
                backgroundColor: T.surfaceRaised,
                borderRadius: '14px',
                border: '1px solid rgba(107,21,14,0.1)',
              }}
            >
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: T.textPrimary, marginBottom: '10px', letterSpacing: '-0.01em' }}>
                За кого е програмата?
              </h3>
              <p style={{ fontSize: '13px', color: T.textSecondary, lineHeight: 1.75 }}>
                Програмата е специално създадена за завършили KickSTART, които вече имат
                изграден курс или услуга и са готови да изградят устойчива аудитория и
                системи за продажби.
              </p>
            </div>

            <div
              className="p-6"
              style={{
                backgroundColor: T.surfaceRaised,
                borderRadius: '14px',
                border: '1px solid rgba(107,21,14,0.1)',
              }}
            >
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: T.textPrimary, marginBottom: '10px', letterSpacing: '-0.01em' }}>
                TBI Bank разсрочване
              </h3>
              <p style={{ fontSize: '13px', color: T.textSecondary, lineHeight: 1.75 }}>
                Налична е възможност за удобно разсрочено плащане. Свържи се с нас за
                повече информация и условия.
              </p>
            </div>

            <div
              className="p-6"
              style={{
                backgroundColor: 'rgba(107,21,14,0.06)',
                borderRadius: '14px',
                border: '1px solid rgba(107,21,14,0.15)',
              }}
            >
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#6b150e', marginBottom: '6px' }}>
                Специален бонус при пълно плащане
              </p>
              <p style={{ fontSize: '13px', color: T.textSecondary, lineHeight: 1.75 }}>
                Получаваш модул „Продавай с увереност" - как да опаковаш и промотираш
                курса си напълно органично.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA (includes personal message) ─────────────────────────── */
function FinalCTASection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#0f0808' }}
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
      <div className="relative max-w-4xl mx-auto">

        {/* Personal message */}
        <div
          className="grid lg:grid-cols-[auto_1fr] gap-8 items-start mb-16 pb-16"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="hidden lg:block" style={{ flexShrink: 0 }}>
            <div
              style={{
                position: 'relative', width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden',
                border: '2px solid rgba(107,21,14,0.4)',
              }}
            >
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
                Само за 13 седмици създаде курс, намери идеалните си клиенти и направи
                първите си стъпки в онлайн бизнеса. Сега е време да изградиш бизнес,
                който расте устойчиво.
              </p>
              <p className="mt-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: onDark.secondary, lineHeight: 1.9, fontStyle: 'italic' }}>
                С &bdquo;Ангажираност и развитие&rdquo; ще го направиш по своя собствен начин, със
                стабилна подкрепа и ясна посока. Аз съм с теб и те подкрепям по целия път!
              </p>
            </blockquote>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#e87070', marginTop: '16px', letterSpacing: '0.02em' }}>
              - Станислава Павлова
            </p>
          </div>
        </div>

        {/* CTA block */}
        <div className="text-center">
          <span
            className="mv-tag inline-block mb-8"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#e87070' }}
          >
            Готова ли си за устойчив растеж?
          </span>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: '#ffffff',
            lineHeight: 1.15, letterSpacing: '-0.02em',
          }}>
            Присъедини се сега и{' '}
            <span style={{ color: '#e85050' }}>започни своя растеж.</span>
          </h2>

          <p className="mt-5" style={{ fontSize: '16px', color: onDark.secondary, lineHeight: 1.8 }}>
            6 месеца програма · 12 месеца достъп · Разсрочване с TBI Bank
          </p>

          <div
            className="mt-10 mb-10 inline-flex flex-col items-center gap-4 px-10 py-6"
            style={{
              backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '14px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <p style={{ fontSize: '11px', color: onDark.muted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Инвестиция
            </p>
            <span style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.03em' }}>
              €702
            </span>
            <p style={{ fontSize: '13px', color: onDark.muted }}>
              Месечни плащания · Разсрочване с TBI Bank
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/kickstart#waitlist"
              className="mv-btn mv-btn-primary"
              style={{ fontSize: '17px', padding: '18px 44px' }}
            >
              Присъедини се сега и започни своя растеж →
            </a>
          </div>
          <p className="mt-4" style={{ fontSize: '13px', color: onDark.muted }}>
            Сигурна транзакция · 12 месеца достъп до всички ресурси
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── INLINE ICONS (used in hero card only) ─────────────────────────── */
function IconCalendar({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function IconKey({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}
