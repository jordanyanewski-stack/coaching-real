import Image from "next/image";
import { T, onDark, PHOTO_URL, GRADIENT_TEXT, SiteNav, SiteFooter } from "@/app/_shared";

export const metadata = {
  title: "KICKDAY – Денят, в който рестартираш своя бизнес | Coaching Real",
  description:
    "Един ден за стратегия, яснота и реален 3-месечен бизнес план. VIP зала Интерпред, гр. София + онлайн чрез Zoom. Само 20 места на живо. От €50.",
};

/* ─── DATA ──────────────────────────────────────────────────────────── */
const whatToExpect = [
  'Изградиш стратегически 3-месечен план за силен завършек на годината и летящ старт на следващата.',
  'Изясниш ключовите си приоритети и точната посока за следващото бизнес ниво.',
  'Откриеш нови канали и начини да достигнеш до повече клиенти.',
  'Създадеш своя осъзнат и устойчив бизнес модел, който работи за теб.',
  'Получиш безценна подкрепа и нетуъркинг в силна женска предприемаческа среда.',
];

const audience = [
  'Имаш собствен бизнес (услуги, коучинг, консултации или продукти) и искаш да внесеш повече структура и устойчивост.',
  'Усещаш, че си "пораснала" извън стария си модел и имаш нужда от нова стратегия за разширяване.',
  'Имаш голяма визия, но ти липсва конкретната пътна карта как да я превърнеш в реалност.',
  'Цениш подкрепата и енергията на други осъзнати, целеустремени жени.',
  'Искаш да работиш с фокус и висока вибрация, без прегаряне.',
];

const results = [
  { Icon: IconCompass, title: 'Ясна посока', desc: 'Ще знаеш къде да насочиш енергията и ресурсите си за максимален ефект.' },
  { Icon: IconMap, title: '3-месечен бизнес план', desc: 'Структурирана рамка за незабавно действие.' },
  { Icon: IconZap, title: 'Нови идеи и стратегии', desc: 'За развитие, монетизиране и растеж в твоя конкретен бизнес модел.' },
  { Icon: IconHeart, title: 'Формула за устойчивост', desc: 'Как да планираш и скалираш, без да прегаряш, запазвайки време за себе си.' },
  { Icon: IconUsers, title: 'Свързаност и вдъхновение', desc: 'Общност от жени на същата честота, които мислят мащабно.' },
];

const schedule = [
  {
    time: '10:00 – 13:00',
    title: 'Сутрешна сесия: Стратегия и яснота',
    items: [
      'Отваряне и енергийна настройка.',
      'Анализ на настоящия ти бизнес модел.',
      'Дефиниране на визията и приоритетите за следващия етап.',
    ],
  },
  {
    time: '13:00 – 14:00',
    title: 'Обедна пауза и нетуъркинг',
    items: [
      'Вкусен кетъринг, смислени разговори и изграждане на вдъхновяващи контакти. (Включено за участниците на живо)',
    ],
  },
  {
    time: '14:00 – 16:30',
    title: 'Следобедна сесия: Практика и трансформация',
    items: [
      'Изграждане на личен 3-месечен бизнес план.',
      'Работа по конкретни, измерими цели.',
      'Финална интеграция на наученото и задаване на следващи стъпки.',
    ],
  },
  {
    time: '16:30 – 17:00',
    title: 'Затваряне на деня',
    items: [
      'Рефлексия, споделяне на осъзнавания и енергийно приключване.',
      'Специален подарък и покана за следващото ниво.',
    ],
  },
];

const differentiators = [
  { Icon: IconZap, title: 'Стратегия + Енергия', desc: 'Обединяваме хладнокръвния бизнес фокус с дълбоката вътрешна яснота.' },
  { Icon: IconUsers, title: 'Ексклузивна среда', desc: 'Подкрепяща и автентична общност от жени предприемачи.' },
  { Icon: IconMap, title: 'Практически резултат', desc: 'Не просто слушаш лекции - напускаш залата с готов, разписан план.' },
  { Icon: IconStar, title: 'Елегантно преживяване', desc: 'VIP атмосфера в Интерпред с внимание към всеки детайл.' },
];

const liveIncludes = [
  'Пълно участие на живо',
  'Кетъринг и кафе паузи',
  'Работни материали',
  'Специален подарък',
  'Нетуъркинг на живо',
];

const onlineIncludes = [
  'Пълно виртуално участие',
  'Всички сесии чрез Zoom',
  'Работни материали (дигитално)',
];

/* ─── ICONS ──────────────────────────────────────────────────────────── */
function IconCheck({ dark = false }: { dark?: boolean }) {
  return (
    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
      <path
        d="M1 4.5L4 7.5L10 1"
        stroke={dark ? '#ffffff' : '#70150E'}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

function IconCompass({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function IconMap({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
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

function IconHeart({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
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

function IconClock({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconMapPin({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconLaptop({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="2" x2="22" y1="20" y2="20" />
    </svg>
  );
}

function IconStar({ color = '#70150E' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────── */
export default function KickdayPage() {
  return (
    <div style={{ fontFamily: 'var(--font-mv, sans-serif)' }}>
      <SiteNav />
      <HeroSection />
      <IntroSection />
      <AudienceSection />
      <ResultsSection />
      <ScheduleSection />
      <DifferenceSection />
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
            <span className="mv-tag mv-tag-light">Уъркшоп · 1 ден · Живо и онлайн</span>
          </div>

          <h1 className="animate-fade-up delay-100 mt-6" style={{ lineHeight: 0.95, letterSpacing: '-0.03em' }}>
            <span
              className="block"
              style={{
                fontSize: 'clamp(3.2rem, 8vw, 6rem)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 14px rgba(200,60,40,0.35)) drop-shadow(0 0 32px rgba(200,60,40,0.14))',
              }}
            >
              KICKDAY
            </span>
            <span
              className="block mt-3"
              style={{
                fontSize: 'clamp(1rem, 2.4vw, 1.45rem)',
                fontWeight: 700,
                color: 'rgba(15,19,26,0.65)',
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
              }}
            >
              Денят, в който рестартираш своя бизнес
            </span>
          </h1>

          <p
            className="animate-fade-up delay-200 mt-6"
            style={{ fontSize: '16px', color: onDark.secondary, lineHeight: 1.8, maxWidth: '480px' }}
          >
            За един ден ще създадеш ясен 3-месечен бизнес план, ще откриеш нови
            възможности за привличане на клиенти (онлайн и офлайн) и ще си тръгнеш с
            увереност, яснота и непоколебим фокус.
          </p>

          {/* Location / date strip */}
          <div className="animate-fade-up delay-200 mt-7 flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <IconMapPin color="rgba(255,255,255,0.38)" />
              <span style={{ fontSize: '13px', color: onDark.muted }}>
                Интерпред – VIP зала, гр. София &nbsp;·&nbsp; 10:00–17:00 ч.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <IconLaptop color="rgba(255,255,255,0.38)" />
              <span style={{ fontSize: '13px', color: onDark.muted }}>Онлайн чрез Zoom</span>
            </div>
            <div className="flex items-center gap-2">
              <IconClock color="#e87070" />
              <span style={{ fontSize: '13px', color: '#e87070', fontWeight: 600 }}>
                Очаквайте нова дата &nbsp;·&nbsp; Само 20 места на живо!
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row flex-wrap gap-4 mt-9">
            <a href="#order" className="mv-btn mv-btn-primary" style={{ fontSize: '15px', padding: '14px 28px' }}>
              Резервирай на живо (€77) →
            </a>
            <a href="#order" className="mv-btn mv-btn-outline-light" style={{ fontSize: '15px', padding: '14px 28px' }}>
              Резервирай онлайн (€50)
            </a>
          </div>
          <p
            className="animate-fade-up delay-300 mt-3"
            style={{ fontSize: '12px', color: onDark.muted }}
          >
            Ранна цена за живо &nbsp;·&nbsp; Редовна цена €128
          </p>
        </div>

        {/* Right - event info card */}
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
              Елитно преживяване за жени предприемачи
            </p>

            {/* Event detail rows */}
            <div className="flex flex-col gap-2.5">
              {(
                [
                  ['pin',    'Интерпред – VIP зала, гр. София'],
                  ['laptop', 'Онлайн чрез Zoom'],
                  ['clock',  '10:00 – 17:00 ч.'],
                  ['users',  'Само 20 места на живо'],
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
                    {type === 'pin'    && <IconMapPin color="rgba(255,255,255,0.45)" />}
                    {type === 'laptop' && <IconLaptop color="rgba(255,255,255,0.45)" />}
                    {type === 'clock'  && <IconClock  color="rgba(255,255,255,0.45)" />}
                    {type === 'users'  && <IconUsers  color="rgba(255,255,255,0.45)" />}
                  </span>
                  <p style={{ fontSize: '13px', color: onDark.secondary, fontWeight: 500 }}>{text}</p>
                </div>
              ))}
            </div>

            {/* Quick highlights */}
            <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(112,21,14,0.07)' }}>
              <p style={{
                fontSize: '11px', fontWeight: 700, color: onDark.muted,
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px',
              }}>
                Ще напуснеш деня с
              </p>
              <div className="flex flex-col gap-2">
                {[
                  'Стратегия и яснота за следващото ниво',
                  '3-месечен личен бизнес план',
                  'Нетуъркинг с вдъхновяващи жени',
                  'Специален подарък от организатора',
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

/* ─── INTRO ──────────────────────────────────────────────────────────── */
function IntroSection() {
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
      <div className="relative max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        {/* Left */}
        <div>
          <span className="mv-tag mv-tag-light">Какво те очаква</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Един ден,{' '}
            <span style={{ ...GRADIENT_TEXT }}>посветен изцяло на теб</span>
          </h2>
          <p className="mt-5" style={{ fontSize: '15px', color: T.textSecondary, lineHeight: 1.85 }}>
            Този ден е създаден за жената предприемач, която не чака &ldquo;подходящия момент&rdquo;,
            а го създава сама. Ще излезеш не просто с шепа идеи, а с конкретен план за
            действие и нова вяра в посоката си.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {whatToExpect.map((item, i) => (
              <div
                key={i}
                className="flex gap-3 items-start px-4 py-3.5"
                style={{
                  backgroundColor: T.surfaceStrong,
                  borderRadius: '10px',
                  border: '1px solid rgba(107,21,14,0.08)',
                }}
              >
                <span style={{
                  flexShrink: 0, width: '22px', height: '22px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
                }}>
                  <IconCheck dark />
                </span>
                <p style={{ fontSize: '14px', color: T.textPrimary, lineHeight: 1.65, fontWeight: 500 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - stats */}
        <div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { value: '1', label: 'Ден', sub: 'изцяло посветен на теб' },
              { value: '20', label: 'Места на живо', sub: 'ограничена бройка' },
              { value: '3', label: 'Месечен план', sub: 'разписан и готов' },
              { value: '2', label: 'Формата', sub: 'на живо или онлайн' },
            ].map(({ value, label, sub }) => (
              <div
                key={value}
                className="p-5"
                style={{
                  backgroundColor: T.surfaceStrong,
                  borderRadius: '10px',
                  border: '1px solid rgba(107,21,14,0.08)',
                  boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
                }}
              >
                <p style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900,
                  ...GRADIENT_TEXT, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '5px',
                }}>
                  {value}
                </p>
                <p style={{ fontSize: '13px', fontWeight: 700, color: T.textPrimary, lineHeight: 1.3, marginBottom: '2px' }}>{label}</p>
                <p style={{ fontSize: '11px', color: T.textSecondary }}>{sub}</p>
              </div>
            ))}
          </div>
          <a href="#order" className="mv-btn mv-btn-primary" style={{ fontSize: '15px' }}>
            Запази своето място →
          </a>
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
        <div className="max-w-xl mb-12">
          <span className="mv-tag mv-tag-light">За кого е събитието</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            KICKDAY е точно{' '}
            <span style={{ ...GRADIENT_TEXT }}>за теб, ако:</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {audience.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-5"
              style={{
                backgroundColor: T.surfaceRaised,
                borderRadius: '12px',
                border: '1px solid rgba(107,21,14,0.08)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
              }}
            >
              <span style={{
                flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
              }}>
                <IconCheck dark />
              </span>
              <p style={{ fontSize: '14px', color: T.textPrimary, lineHeight: 1.7, fontWeight: 500 }}>{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a href="#order" className="mv-btn mv-btn-outline-light inline-flex">
            Готова съм - запиши ме →
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
          След KICKDAY спираш да мислиш за{' '}
          <span style={{
            background: 'linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            &ldquo;някой ден&rdquo;
          </span>
        </h2>
        <p className="mt-4" style={{ fontSize: '15px', color: onDark.secondary, lineHeight: 1.8, maxWidth: '560px' }}>
          Ще знаеш точно какво, кога и как да направиш.
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

          {/* Closing statement card */}
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
              Ще си тръгнеш с лекотата и увереността на истински лидер в своя бизнес.
            </p>
          </div>
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

/* ─── SCHEDULE ──────────────────────────────────────────────────────── */
function ScheduleSection() {
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
      <div className="relative max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
        {/* Left - heading */}
        <div>
          <span className="mv-tag mv-tag-light">Програма на деня</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            График{' '}
            <span style={{ ...GRADIENT_TEXT }}>10:00 – 17:00 ч.</span>
          </h2>
          <p className="mt-5" style={{ fontSize: '15px', color: T.textSecondary, lineHeight: 1.85 }}>
            Всяка минута от деня е внимателно планирана - за максимален фокус,
            дълбока работа и вдъхновяващо преживяване.
          </p>

          <a href="#order" className="mv-btn mv-btn-outline-light mt-10 inline-flex">
            Запази своето място →
          </a>
        </div>

        {/* Right - timeline */}
        <div className="flex flex-col gap-0">
          {schedule.map(({ time, title, items }, i) => (
            <div key={i} className="flex gap-5 relative">
              {/* Timeline line */}
              <div className="flex flex-col items-center" style={{ flexShrink: 0, width: '20px' }}>
                <div style={{
                  width: '12px', height: '12px', borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
                  border: '2px solid rgba(107,21,14,0.25)',
                  marginTop: '4px',
                }} />
                {i < schedule.length - 1 && (
                  <div style={{
                    width: '1.5px', flex: 1, minHeight: '24px',
                    background: 'linear-gradient(180deg, rgba(107,21,14,0.35) 0%, rgba(107,21,14,0.1) 100%)',
                    marginTop: '4px',
                  }} />
                )}
              </div>

              {/* Content */}
              <div className="pb-8" style={{ flex: 1 }}>
                <div
                  className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1"
                  style={{
                    backgroundColor: 'rgba(107,21,14,0.07)',
                    borderRadius: '6px',
                    border: '1px solid rgba(107,21,14,0.12)',
                  }}
                >
                  <IconClock color="#70150E" />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#70150E', letterSpacing: '0.06em' }}>
                    {time}
                  </span>
                </div>
                <h3 style={{
                  fontSize: '15px', fontWeight: 700, color: T.textPrimary,
                  lineHeight: 1.3, marginBottom: '10px', letterSpacing: '-0.01em',
                }}>
                  {title}
                </h3>
                <div className="flex flex-col gap-1.5">
                  {items.map((item, j) => (
                    <div key={j} className="flex gap-2 items-start">
                      <span style={{ flexShrink: 0, marginTop: '4px', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'rgba(107,21,14,0.4)', display: 'block' }} />
                      <p style={{ fontSize: '13px', color: T.textSecondary, lineHeight: 1.7 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── DIFFERENCE ────────────────────────────────────────────────────── */
function DifferenceSection() {
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
        <span className="mv-tag mv-tag-light">Защо KICKDAY</span>
        <h2
          className="mt-5"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: onDark.primary,
            lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '680px',
          }}
        >
          Не е просто{' '}
          <span style={{
            background: 'linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            поредното събитие
          </span>
        </h2>
        <p className="mt-4" style={{ fontSize: '15px', color: onDark.secondary, lineHeight: 1.8, maxWidth: '560px' }}>
          Без празни мотивационни речи и общи приказки - всичко е практично, осъзнато и
          веднага приложимо.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {differentiators.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex gap-5 p-7"
              style={{
                backgroundColor: 'rgba(112,21,14,0.04)',
                borderRadius: '14px',
                border: '1px solid rgba(112,21,14,0.07)',
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
                  fontSize: '16px', fontWeight: 700, color: onDark.primary,
                  lineHeight: 1.3, marginBottom: '8px', letterSpacing: '-0.01em',
                }}>
                  {title}
                </h3>
                <p style={{ fontSize: '14px', color: onDark.secondary, lineHeight: 1.7 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="#order" className="mv-btn mv-btn-primary" style={{ fontSize: '16px', padding: '16px 40px' }}>
            Готова съм за следващото ниво →
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
          <span className="mv-tag mv-tag-light">Избери своя формат</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Запиши се сега &amp;{' '}
            <span style={{ ...GRADIENT_TEXT }}>осигури своето място</span>
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{ fontSize: '16px', color: T.textSecondary, lineHeight: 1.8, maxWidth: '500px' }}
          >
            Само 20 места на живо! Изборът е твой - в залата или от дома.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Live card */}
          <div
            style={{
              backgroundColor: T.surfaceRaised,
              borderRadius: '16px',
              border: '2px solid rgba(107,21,14,0.2)',
              overflow: 'hidden',
              boxShadow: '0 4px 28px rgba(107,21,14,0.08)',
            }}
          >
            {/* Card header */}
            <div
              className="px-7 py-5"
              style={{
                background: 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
              }}
            >
              <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(15,19,26,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                На живо
              </p>
              <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--mv-text-primary)' }}>
                Интерпред – VIP зала, гр. София
              </p>
            </div>

            <div className="p-7">
              {/* Price */}
              <div className="flex items-end gap-3 mb-2">
                <span style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: T.textPrimary,
                  lineHeight: 1, letterSpacing: '-0.03em',
                }}>
                  €77
                </span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span style={{ fontSize: '14px', color: T.textSecondary, textDecoration: 'line-through', fontWeight: 500 }}>
                  €128
                </span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#70150E', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Ранна цена
                </span>
              </div>
              <p style={{ fontSize: '13px', color: T.textSecondary, lineHeight: 1.6, marginBottom: '20px' }}>
                Ограничено до 20 места!
              </p>

              {/* Includes */}
              <p style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(0,0,0,0.32)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Включва:
              </p>
              <div className="flex flex-col gap-2.5 mb-7">
                {liveIncludes.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <span style={{
                      flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <IconCheck dark />
                    </span>
                    <p style={{ fontSize: '13px', color: T.textPrimary, fontWeight: 500 }}>{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="mv-btn mv-btn-primary"
                style={{ fontSize: '15px', padding: '14px 24px', display: 'flex', justifyContent: 'center' }}
              >
                Резервирай място на живо (€77) →
              </a>
              <p className="text-center mt-3" style={{ fontSize: '11px', color: T.textSecondary }}>
                Редовна цена €128 · Ограничени места
              </p>
            </div>
          </div>

          {/* Online card */}
          <div
            style={{
              backgroundColor: T.surfaceRaised,
              borderRadius: '16px',
              border: '1px solid rgba(107,21,14,0.12)',
              overflow: 'hidden',
              boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
            }}
          >
            {/* Card header */}
            <div
              className="px-7 py-5"
              style={{
                backgroundColor: T.surfaceStrong,
                borderBottom: '1px solid rgba(107,21,14,0.08)',
              }}
            >
              <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                Онлайн
              </p>
              <p style={{ fontSize: '15px', fontWeight: 700, color: T.textPrimary }}>
                Чрез Zoom - от всяка точка
              </p>
            </div>

            <div className="p-7">
              {/* Price */}
              <div className="flex items-end gap-3 mb-5">
                <span style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: T.textPrimary,
                  lineHeight: 1, letterSpacing: '-0.03em',
                }}>
                  €50
                </span>
              </div>
              <p style={{ fontSize: '13px', color: T.textSecondary, lineHeight: 1.6, marginBottom: '20px' }}>
                Пълно виртуално участие в реално време.
              </p>

              {/* Includes */}
              <p style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(0,0,0,0.32)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Включва:
              </p>
              <div className="flex flex-col gap-2.5 mb-7">
                {onlineIncludes.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <span style={{
                      flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, #70150E 0%, #c94535 100%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <IconCheck dark />
                    </span>
                    <p style={{ fontSize: '13px', color: T.textPrimary, fontWeight: 500 }}>{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="mv-btn mv-btn-outline-light"
                style={{ fontSize: '15px', padding: '14px 24px', display: 'flex', justifyContent: 'center' }}
              >
                Резервирай онлайн място (€50) →
              </a>
              <p className="text-center mt-3" style={{ fontSize: '11px', color: T.textSecondary }}>
                Еднократно плащане · Без абонамент
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
      <div className="relative max-w-4xl mx-auto">

        {/* Personal message from Stanislava */}
        <div
          className="grid lg:grid-cols-[auto_1fr] gap-8 items-start mb-16 pb-16"
          style={{ borderBottom: '1px solid rgba(112,21,14,0.07)' }}
        >
          {/* Photo */}
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

          {/* Quote */}
          <div>
            <IconQuote />
            <blockquote className="mt-4">
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: onDark.secondary, lineHeight: 1.9, fontStyle: 'italic' }}>
                Вярвам, че бизнесът е нещо много повече от стратегия - той е проявление на душата
                в действие. Когато си позволим да спрем, да подредим мислите си и да създадем
                яснота, се раждат истинските пробиви.
              </p>
              <p className="mt-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: onDark.secondary, lineHeight: 1.9, fontStyle: 'italic' }}>
                KICKDAY е денят, в който си даваш разрешение да бъдеш едновременно визионер,
                лидер и жена. Да се свържеш с онази своя част, която знае, че е време за
                следващото ниво - без страх, без съмнение, с дълбока вяра в себе си.
              </p>
              <p className="mt-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: onDark.secondary, lineHeight: 1.9, fontStyle: 'italic' }}>
                Ще бъде чест да споделя този ден с теб.
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
            style={{ backgroundColor: 'rgba(112,21,14,0.08)', color: '#e87070' }}
          >
            Готова ли си за следващото ниво?
          </span>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--mv-text-primary)',
            lineHeight: 1.15, letterSpacing: '-0.02em',
          }}>
            Запиши се сега и{' '}
            <span style={{ color: '#e85050' }}>осигури своето място.</span>
          </h2>

          <p className="mt-5" style={{ fontSize: '16px', color: onDark.secondary, lineHeight: 1.8 }}>
            Само 20 места на живо. Онлайн форматът е без ограничение.
          </p>

          {/* Price summary */}
          <div
            className="mt-10 mb-10 inline-flex flex-col sm:flex-row items-center gap-6 px-10 py-6"
            style={{
              backgroundColor: 'rgba(112,21,14,0.05)', borderRadius: '14px',
              border: '1px solid rgba(112,21,14,0.08)',
            }}
          >
            <div className="text-center">
              <p style={{ fontSize: '11px', color: onDark.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>На живо · Ранна цена</p>
              <div className="flex items-baseline justify-center gap-2">
                <span style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: 'var(--mv-text-primary)', lineHeight: 1, letterSpacing: '-0.03em' }}>€77</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: onDark.muted, textDecoration: 'line-through', textDecorationColor: 'rgba(255,255,255,0.25)' }}>€128</span>
              </div>
            </div>
            <div style={{ width: '1px', height: '48px', backgroundColor: 'rgba(112,21,14,0.09)' }} className="hidden sm:block" />
            <div className="text-center">
              <p style={{ fontSize: '11px', color: onDark.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>Онлайн</p>
              <span style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: 'var(--mv-text-primary)', lineHeight: 1, letterSpacing: '-0.03em' }}>€50</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#order"
              className="mv-btn mv-btn-primary"
              style={{ fontSize: '17px', padding: '18px 44px' }}
            >
              Готова съм - запиши ме! →
            </a>
            <a
              href="#order"
              className="mv-btn mv-btn-outline-light"
              style={{ fontSize: '17px', padding: '18px 44px' }}
            >
              Онлайн място (€50)
            </a>
          </div>
          <p className="mt-4" style={{ fontSize: '13px', color: onDark.muted }}>
            Сигурна транзакция · Ограничени места на живо
          </p>
        </div>
      </div>
    </section>
  );
}
