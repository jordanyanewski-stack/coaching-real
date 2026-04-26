import Image from "next/image";
import { T, onDark, PHOTO_URL, GRADIENT_TEXT, SiteNav, SiteFooter } from "@/app/_shared";

export const metadata = {
  title: "AI Кампания Асистент - Твоят Интелигентен Партньор | Coaching Real",
  description:
    "Custom GPT, обучен с 8 години реален опит. Планирай, структурирай и напиши следващата си кампания с доказана AI система. €496.",
};

/* ─── DATA ──────────────────────────────────────────────────────────── */
const capabilities = [
  'Обхваща всички 5 фази на успешното стартиране, за да не пропуснеш нищо.',
  'Показва точно какво да правиш и кога - от първоначалната идея до финалния тласък за продажби.',
  'Синхронизира перфектно твоето предложение, послание и тайминг.',
  'Дава готова стратегия, структура и активи, за да действаш с пълна увереност.',
  'Работи безотказно, независимо дали започваш от нулата, или надграждаш предишна кампания.',
];

const features = [
  {
    Icon: IconTarget,
    title: 'Неустоими оферти',
    desc: 'Използва 7 доказани съставки от 6- и 7-цифрени кампании, включително стратегия за ценообразуване и бонуси.',
  },
  {
    Icon: IconPen,
    title: 'Конвертиращ копирайтинг',
    desc: 'Пише продажбени страници, имейли, реклами и социални постове в твоя собствен глас.',
  },
  {
    Icon: IconCalendar,
    title: 'Предварително съдържание',
    desc: 'Генерира идеи за лайфове, постове и безплатни ресурси, изграждащи авторитет и очакване преди старта.',
  },
  {
    Icon: IconPresentation,
    title: 'Уебинари и Уъркшопи',
    desc: 'Създава пълна структура и план за слайдове, за да презентираш с увереност.',
  },
  {
    Icon: IconShield,
    title: 'Оборване на възражения',
    desc: 'Превръща съмненията на клиентите в причини за покупка - готови отговори за всяка ситуация.',
  },
  {
    Icon: IconLayout,
    title: 'Лендинг страници',
    desc: 'Пише високо конвертиращи регистрационни и благодарствени страници с ясни призиви за действие.',
  },
  {
    Icon: IconMail,
    title: 'Имейл маркетинг',
    desc: 'Генерира пълни последователности - покани, напомняния и финални имейли за затваряне на продажбите.',
  },
  {
    Icon: IconMegaphone,
    title: 'Реклами (FB, IG, LinkedIn)',
    desc: 'Готови заглавия, куки и призиви за действие, съгласувани с основното ти послание.',
  },
  {
    Icon: IconChart,
    title: 'Следкампаниен анализ',
    desc: 'Помага ти да анализираш резултатите и да планираш следващия си старт още по-добре.',
  },
];

const packageGroups = [
  {
    category: 'Стратегия и структура',
    items: ['Кампания стратегия асистент', 'Идеален клиент асистент', 'Неустоима оферта асистент'],
  },
  {
    category: 'Копирайтинг и съдържание',
    items: [
      'Послание и копи асистент',
      'Лендинг страница асистент',
      'Продажбена страница асистент',
      'Отворени врати (Open Cart) асистент',
    ],
  },
  {
    category: 'Бонус инструменти',
    items: [
      'Уъркшоп дизайн асистент',
      'Оборване на възраженията асистент',
      'Асистент Анализ след старта',
    ],
  },
];

const bonuses = [
  'Идеален клиент GPT',
  'Неустоима оферта GPT',
  'Библиотека с визуални шаблони за Кампания',
];

const afterPurchase = [
  'Пълен достъп за 12 месеца.',
  'Видео уроци за работа с AI асистента.',
  'Редовни обновления с нови файлове и видеа.',
];

const faqs = [
  {
    q: 'Включен ли е AI Кампания Асистент в други програми?',
    a: 'Да. Ако се включиш в програмата Кампания и продажби, получаваш 12 месеца достъп до асистента като част от нея.',
  },
  {
    q: 'Каква е разликата между програмата Кампания и продажби и AI Асистента?',
    a: 'Кампания и продажби е интензивна групова коучинг програма (10 седмици на живо, техническа подкрепа, ментор и общност). AI Кампания Асистент е самостоятелна DIY версия - дава ти всички стратегии, шаблони и структури, но работиш сам, в твое темпо, без груповите срещи.',
  },
];

/* ─── ICONS ──────────────────────────────────────────────────────────── */
function IconTarget({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconPen({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function IconCalendar({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function IconPresentation({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function IconShield({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconLayout({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="9" x2="9" y1="21" y2="9" />
    </svg>
  );
}

function IconMail({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconMegaphone({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  );
}

function IconChart({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" x2="18" y1="20" y2="10" />
      <line x1="12" x2="12" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="14" />
    </svg>
  );
}

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

function IconBrain({ color = '#6b150e' }: { color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1 1L9 9M9 1L1 9" stroke="#e85050" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────── */
export default function AIAssistantPage() {
  return (
    <div style={{ fontFamily: 'var(--font-mv, sans-serif)' }}>
      <SiteNav />
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <DifferenceSection />
      <PackageSection />
      <AboutSection />
      <OfferSection />
      <FAQSection />
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

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <div className="animate-fade-up">
            <span className="mv-tag mv-tag-dark">AI Инструмент · Custom GPT · 12 месеца достъп</span>
          </div>

          <h1
            className="animate-fade-up delay-100 mt-6"
            style={{ lineHeight: 1, letterSpacing: '-0.03em' }}
          >
            <span
              className="block"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #6b150e 0%, #c94535 55%, #e85050 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 14px rgba(200,60,40,0.35)) drop-shadow(0 0 32px rgba(200,60,40,0.14))',
              }}
            >
              AI Кампания
            </span>
            <span
              className="block"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.93)',
                marginTop: '2px',
              }}
            >
              Асистент
            </span>
            <span
              className="block"
              style={{
                fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.38)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginTop: '12px',
              }}
            >
              Твоят интелигентен партньор за стартиране
            </span>
          </h1>

          <p
            className="animate-fade-up delay-200 mt-5"
            style={{ fontSize: '16px', color: onDark.secondary, lineHeight: 1.8, maxWidth: '480px' }}
          >
            Всичко, от което се нуждаеш, за да планираш, структурираш и напишеш следващата
            си кампания - базирано на доказани 7-цифрени шаблони и персонализирано
            според твоята оферта.
          </p>

          {/* Price block */}
          <div className="animate-fade-up delay-300 mt-10">
            <div className="flex items-end gap-3 mb-2">
              <span style={{
                fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1,
                letterSpacing: '-0.03em',
              }}>
                €496
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span style={{
                fontSize: '15px',
                color: onDark.muted,
                textDecoration: 'line-through',
                textDecorationColor: 'rgba(255,255,255,0.3)',
                fontWeight: 600,
              }}>
                €957
              </span>
              <span
                className="flex items-center gap-1.5"
                style={{ fontSize: '12px', color: '#e87070', fontWeight: 700, letterSpacing: '0.04em' }}
              >
                <span style={{
                  width: 7, height: 7, borderRadius: '50%', backgroundColor: '#e85050',
                  display: 'inline-block', boxShadow: '0 0 0 2px rgba(232,80,80,0.28)', flexShrink: 0,
                }} />
                Специална цена
              </span>
            </div>
            <a href="#order" className="mv-btn mv-btn-primary" style={{ fontSize: '16px', padding: '16px 40px' }}>
              Вземи пълен достъп сега →
            </a>
          </div>
        </div>

        {/* Right - capabilities card */}
        <div className="animate-fade-in delay-200">
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            borderRadius: T.radiusSm,
            border: '1px solid rgba(255,255,255,0.09)',
            padding: '24px',
          }}>
            <p style={{
              fontSize: '11px', fontWeight: 700, color: onDark.muted,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px',
            }}>
              Асистентът ти помага да:
            </p>
            <div className="flex flex-col gap-2.5">
              {capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start px-3 py-2.5"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <span style={{
                    flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6b150e 0%, #c94535 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
                  }}>
                    <IconCheck dark />
                  </span>
                  <p style={{ fontSize: '13px', color: onDark.secondary, lineHeight: 1.6, fontWeight: 500 }}>{cap}</p>
                </div>
              ))}
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
      style={{ backgroundColor: T.surfaceRaised }}
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
          <span className="mv-tag mv-tag-light">Запознай се с асистента</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Новият{' '}
            <span style={{ ...GRADIENT_TEXT }}>член на твоя екип</span>
          </h2>
          <p className="mt-5" style={{ fontSize: '15px', color: T.textSecondary, lineHeight: 1.85 }}>
            Този инструмент е обучен с над 8 години реален опит, доказани стратегии и
            всеки шаблон или имейл, използван в реални програми и кампании. Готов да
            работи за теб незабавно.
          </p>

          <div
            className="mt-8 p-7"
            style={{
              background: 'linear-gradient(135deg, #fff4f3 0%, #f9f9f9 100%)',
              borderRadius: '14px',
              border: '1px solid rgba(107,21,14,0.12)',
              boxShadow: '0 4px 24px rgba(107,21,14,0.07)',
            }}
          >
            <p style={{
              fontSize: '11px', fontWeight: 700, ...GRADIENT_TEXT,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px',
            }}>
              Обучен върху
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Цялата методология Кампания и продажби',
                'Конкретни рамки, графици и шаблони',
                'Доказано работещи послания и позициониране на оферти',
                'Реални примери и копи, донесли стотици продажби',
              ].map((item, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <span style={{ flexShrink: 0, marginTop: '3px' }}><IconCheck /></span>
                  <p style={{ fontSize: '13px', color: T.textPrimary, lineHeight: 1.65 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - stats grid + CTA */}
        <div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { value: '8+', label: 'Години реален опит', sub: 'в онлайн кампании' },
              { value: '30+', label: 'Тествани кампании', sub: 'доказана методология' },
              { value: '5', label: 'Фази на стартиране', sub: 'обхванати изцяло' },
              { value: '10', label: 'AI асистента', sub: 'в един пакет' },
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
            Искам да стартирам с AI →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURES ──────────────────────────────────────────────────────── */
function FeaturesSection() {
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
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="mv-tag mv-tag-light">Какво ще създаде за теб</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
              lineHeight: 1.15, letterSpacing: '-0.02em',
            }}
          >
            9 ключови области,{' '}
            <span style={{ ...GRADIENT_TEXT }}>покрити изцяло</span>
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{ fontSize: '16px', color: T.textSecondary, lineHeight: 1.8, maxWidth: '500px' }}
          >
            От офертата до финалния имейл - всичко, от което се нуждаеш за успешно стартиране.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex gap-4 p-5"
              style={{
                backgroundColor: T.surfaceRaised,
                borderRadius: '10px',
                border: '1px solid rgba(107,21,14,0.08)',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
            >
              <div style={{
                flexShrink: 0, width: '38px', height: '38px', borderRadius: '9px',
                background: 'linear-gradient(135deg, rgba(107,21,14,0.12) 0%, rgba(107,21,14,0.06) 100%)',
                border: '1px solid rgba(107,21,14,0.14)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon />
              </div>
              <div>
                <h3 style={{
                  fontSize: '14px', fontWeight: 700, color: T.textPrimary,
                  lineHeight: 1.3, marginBottom: '5px', letterSpacing: '-0.01em',
                }}>
                  {title}
                </h3>
                <p style={{ fontSize: '12px', color: T.textSecondary, lineHeight: 1.7 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#order"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: '16px', padding: '16px 44px' }}
          >
            Вземи всички 9 инструмента →
          </a>
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
        <span className="mv-tag mv-tag-dark">Защо не обикновен ChatGPT?</span>
        <h2
          className="mt-5"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: onDark.primary,
            lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '680px',
          }}
        >
          AI Асистент vs.{' '}
          <span style={{
            background: 'linear-gradient(135deg, #6b150e 0%, #c94535 55%, #e85050 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            безплатен ChatGPT
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* ChatGPT - problems */}
          <div className="p-7" style={{
            backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '14px',
            border: '1px solid rgba(255,255,255,0.07)',
          }}>
            <p style={{
              fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px',
            }}>
              Обикновен ChatGPT
            </p>
            <div className="flex flex-col gap-4">
              {[
                'Дава общи съвети от интернет',
                'Не знае какво реално продава',
                'Не може да изгради цялостен план без пропуски',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span style={{
                    flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
                    backgroundColor: 'rgba(232,80,80,0.15)', border: '1px solid rgba(232,80,80,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
                  }}>
                    <IconX />
                  </span>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Assistant - benefits */}
          <div className="p-7" style={{
            backgroundColor: 'rgba(107,21,14,0.14)', borderRadius: '14px',
            border: '1px solid rgba(107,21,14,0.3)',
          }}>
            <p style={{
              fontSize: '13px', fontWeight: 700, color: '#e87070',
              letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px',
            }}>
              AI Кампания Асистент
            </p>
            <div className="flex flex-col gap-4">
              {[
                'Обучен с цялата методология Кампания и продажби',
                'Конкретни рамки, графици и шаблони, доказали се в практиката',
                'Реални примери и копи, донесли стотици продажби',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span style={{
                    flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6b150e 0%, #c94535 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
                  }}>
                    <IconCheck dark />
                  </span>
                  <p style={{ fontSize: '14px', color: onDark.secondary, lineHeight: 1.65 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brain quote */}
        <div
          className="mt-10 p-8 md:p-10"
          style={{
            backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '14px',
            border: '1px solid rgba(255,255,255,0.09)',
          }}
        >
          <div className="flex gap-5 items-start">
            <div style={{ flexShrink: 0, marginTop: '2px' }}>
              <IconBrain color="#e87070" />
            </div>
            <div>
              <IconQuote />
              <p
                className="mt-3"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: onDark.secondary,
                  lineHeight: 1.9, fontStyle: 'italic',
                }}
              >
                Все едно имаш моя маркетингов мозък на разположение 24/7 през следващите 12 месеца.
              </p>
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#e87070', marginTop: '10px', letterSpacing: '0.02em' }}>
                - Станислава Павлова
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <a href="#order" className="mv-btn mv-btn-primary" style={{ fontSize: '16px', padding: '16px 40px' }}>
            Искам моя AI партньор →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── PACKAGE ───────────────────────────────────────────────────────── */
function PackageSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: T.surfaceRaised }}
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
        <span className="mv-tag mv-tag-light">Какво включва пакетът</span>
        <h2
          className="mt-5"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
            lineHeight: 1.1, letterSpacing: '-0.02em',
          }}
        >
          10 AI асистента.{' '}
          <span style={{ ...GRADIENT_TEXT }}>3 категории. Пълна система.</span>
        </h2>
        <p
          className="mt-4"
          style={{ fontSize: '15px', color: T.textSecondary, lineHeight: 1.8, maxWidth: '560px' }}
        >
          Системата следва доказания процес на Кампания и продажби - самостоятелна версия без живия коучинг.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {packageGroups.map(({ category, items }, gi) => (
            <div
              key={gi}
              className="p-6"
              style={{
                backgroundColor: T.surfaceStrong,
                borderRadius: '12px',
                border: '1px solid rgba(107,21,14,0.1)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              <p style={{
                fontSize: '11px', fontWeight: 700, ...GRADIENT_TEXT,
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px',
              }}>
                {category}
              </p>
              <div className="flex flex-col gap-2.5">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-center p-3"
                    style={{
                      backgroundColor: T.surfaceRaised,
                      borderRadius: '8px',
                      border: '1px solid rgba(107,21,14,0.07)',
                    }}
                  >
                    <span style={{
                      flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6b150e 0%, #c94535 100%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <IconCheck dark />
                    </span>
                    <p style={{ fontSize: '13px', color: T.textPrimary, fontWeight: 500, lineHeight: 1.4 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="#order" className="mv-btn mv-btn-outline-light inline-flex">
            Виж пълния пакет и се запиши →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─────────────────────────────────────────────────────────── */
function AboutSection() {
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
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="hidden lg:block relative" style={{ height: '500px' }}>
          <div
            className="h-full w-full overflow-hidden"
            style={{ position: 'relative', borderRadius: '14px', border: '1.5px solid rgba(107,21,14,0.3)' }}
          >
            <Image
              src={PHOTO_URL}
              alt="Станислава Павлова - бизнес ментор и стратег"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              sizes="(max-width: 1024px) 0px, 50vw"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="mv-tag mv-tag-dark">Авторитет и стойност</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: onDark.primary,
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Станислава Павлова
          </h2>
          <p style={{
            fontSize: '13px', fontWeight: 700,
            background: 'linear-gradient(135deg, #6b150e 0%, #c94535 55%, #e85050 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            marginTop: '6px', letterSpacing: '0.04em', textTransform: 'uppercase',
          }}>
            Бизнес ментор · Стратег · Създател на KickSTART
          </p>

          <p className="mt-6" style={{ fontSize: '15px', color: onDark.secondary, lineHeight: 1.85 }}>
            През 2015 г. инвестирах £5,000, за да науча основите на успешното стартиране.
            Оттогава усъвършенствам и тествам моя подход през над 30 кампании за последните
            8 години.
          </p>

          <div
            className="mt-8 p-6"
            style={{
              backgroundColor: 'rgba(107,21,14,0.18)', borderRadius: '12px',
              border: '1px solid rgba(107,21,14,0.35)',
            }}
          >
            <p style={{
              fontSize: '11px', fontWeight: 700, color: '#e87070',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px',
            }}>
              Какво получаваш
            </p>
            <p style={{ fontSize: '15px', color: onDark.secondary, lineHeight: 1.85 }}>
              AI Кампания Асистент ти дава директен достъп до тази изпитана стратегия в
              един интелигентен инструмент. Независимо дали това е първата или десетата ти
              кампания - ще я направиш по-бързо, по-качествено и с повече увереност.
            </p>
          </div>

          <blockquote className="mt-6 pl-5" style={{ borderLeft: '3px solid #6b150e' }}>
            <p style={{ fontSize: '15px', color: onDark.secondary, lineHeight: 1.8, fontStyle: 'italic' }}>
              &ldquo;Осем години изграждах тази система - сега я имаш на едно място, готова да
              работи за твоите цели.&rdquo;
            </p>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#e87070', marginTop: '10px', letterSpacing: '0.02em' }}>
              - Станислава Павлова
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ─── OFFER ─────────────────────────────────────────────────────────── */
function OfferSection() {
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
      <div className="relative max-w-5xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-14 items-start">
        {/* Left */}
        <div>
          <span className="mv-tag mv-tag-light">Специална оферта</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: T.textPrimary,
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Вземи пълен достъп{' '}
            <span style={{ ...GRADIENT_TEXT }}>само сега</span>
          </h2>

          {/* Price card */}
          <div
            className="mt-8 p-7"
            style={{
              backgroundColor: T.surfaceRaised, borderRadius: '14px',
              border: '1px solid rgba(107,21,14,0.15)',
              boxShadow: '0 4px 24px rgba(107,21,14,0.07)',
            }}
          >
            <div className="flex items-end gap-3 mb-3">
              <span style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: T.textPrimary,
                lineHeight: 1, letterSpacing: '-0.03em',
              }}>
                €496
              </span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <span style={{
                fontSize: '14px', color: T.textSecondary,
                textDecoration: 'line-through', fontWeight: 500,
              }}>
                €957
              </span>
              <span style={{
                fontSize: '11px', fontWeight: 700, color: '#6b150e',
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                Промо цена
              </span>
            </div>
            <div className="flex flex-col gap-1.5" style={{ fontSize: '13px', color: T.textSecondary }}>
              <span>Еднократно плащане · Без абонамент</span>
              <span>Без възстановяване на средства</span>
            </div>
          </div>

          {/* Bonuses */}
          <div className="mt-6">
            <p style={{
              fontSize: '12px', fontWeight: 700, color: 'rgba(0,0,0,0.32)',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px',
            }}>
              Включени бонуси:
            </p>
            <div className="flex flex-col gap-2.5">
              {bonuses.map((bonus, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-center p-4"
                  style={{
                    backgroundColor: T.surfaceRaised, borderRadius: '9px',
                    border: '1px solid rgba(107,21,14,0.08)',
                  }}
                >
                  <span style={{
                    flexShrink: 0, width: '22px', height: '22px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6b150e 0%, #c94535 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <IconCheck dark />
                  </span>
                  <p style={{ fontSize: '13px', color: T.textPrimary, fontWeight: 500 }}>{bonus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          <div
            className="p-7"
            style={{
              backgroundColor: T.surfaceRaised, borderRadius: '14px',
              border: '1px solid rgba(107,21,14,0.12)',
              boxShadow: '0 4px 24px rgba(107,21,14,0.06)',
            }}
          >
            <p style={{
              fontSize: '12px', fontWeight: 700, ...GRADIENT_TEXT,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px',
            }}>
              Какво следва след плащане?
            </p>
            <p style={{ fontSize: '14px', color: T.textSecondary, lineHeight: 1.7, marginBottom: '16px' }}>
              Получаваш незабавен достъп до:
            </p>
            <div className="flex flex-col gap-3">
              {afterPurchase.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span style={{
                    flexShrink: 0, width: '22px', height: '22px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6b150e 0%, #c94535 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
                  }}>
                    <IconCheck dark />
                  </span>
                  <p style={{ fontSize: '14px', color: T.textPrimary, fontWeight: 500, lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#order"
            className="mv-btn mv-btn-primary mt-8"
            style={{ fontSize: '16px', padding: '16px 32px', display: 'flex', justifyContent: 'center' }}
          >
            Вземи пълен достъп (€496) →
          </a>
          <p className="text-center mt-3" style={{ fontSize: '12px', color: T.textSecondary }}>
            Сигурна транзакция · Незабавен достъп · Без абонамент
          </p>
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
      style={{ backgroundColor: T.surfaceRaised }}
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
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">Чести въпроси</span>
          <h2
            className="mt-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: T.textPrimary,
              lineHeight: 1.15, letterSpacing: '-0.02em',
            }}
          >
            Имаш въпрос?{' '}
            <span style={{ ...GRADIENT_TEXT }}>Ето отговорите.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <details
              key={i}
              style={{
                backgroundColor: T.surfaceStrong,
                borderRadius: '10px',
                border: '1px solid rgba(107,21,14,0.1)',
                overflow: 'hidden',
              }}
            >
              <summary
                style={{
                  padding: '18px 20px', fontSize: '15px', fontWeight: 700,
                  color: T.textPrimary, lineHeight: 1.4, cursor: 'pointer',
                  listStyle: 'none', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: '12px',
                }}
              >
                {item.q}
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  stroke="#6b150e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </summary>
              <div style={{ padding: '0 20px 18px', borderTop: '1px solid rgba(107,21,14,0.08)' }}>
                <p style={{ fontSize: '14px', color: T.textSecondary, lineHeight: 1.8, paddingTop: '14px' }}>
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─────────────────────────────────────────────────────── */
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
      <div className="relative max-w-3xl mx-auto text-center">
        <span
          className="mv-tag inline-block mb-8"
          style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#e87070' }}
        >
          Нека направим следващата ти кампания най-успешната досега.
        </span>

        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: '#ffffff',
          lineHeight: 1.15, letterSpacing: '-0.02em',
        }}>
          Без повече догадки.{' '}
          <span style={{ color: '#e85050' }}>
            Само стратегия, структура и копи, което продава.
          </span>
        </h2>

        <p className="mt-5" style={{ fontSize: '16px', color: onDark.secondary, lineHeight: 1.8 }}>
          Готови веднага, когато ти си готов/а.
        </p>

        {/* Price block */}
        <div
          className="mt-10 mb-10 inline-flex flex-col items-center gap-2 px-10 py-6"
          style={{
            backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '14px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <span style={{ fontSize: '13px', color: onDark.muted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Само сега за
          </span>
          <div className="flex items-baseline gap-3">
            <span style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', fontWeight: 900, color: '#ffffff',
              lineHeight: 1, letterSpacing: '-0.03em',
            }}>
              €496
            </span>
            <span style={{
              fontSize: '16px', fontWeight: 600, color: onDark.muted,
              textDecoration: 'line-through', textDecorationColor: 'rgba(255,255,255,0.25)',
            }}>
              €957
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{
              width: 7, height: 7, borderRadius: '50%', backgroundColor: '#e85050',
              display: 'inline-block', boxShadow: '0 0 0 2px rgba(232,80,80,0.28)', flexShrink: 0,
            }} />
            <span style={{ fontSize: '12px', color: '#e87070', fontWeight: 700, letterSpacing: '0.04em' }}>
              Специална цена
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <a
            href="#order"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: '17px', padding: '18px 52px' }}
          >
            Вземи пълен достъп до AI Асистента →
          </a>
          <p style={{ fontSize: '13px', color: onDark.muted }}>
            Сигурна транзакция · Незабавен достъп · 12 месеца · Без абонамент
          </p>
        </div>
      </div>
    </section>
  );
}
