import Image from "next/image";
import { T, onDark, PHOTO_URL, GRADIENT_TEXT, SiteNav, SiteFooter } from "@/app/_shared";
import { EnrollForm } from "../masterclass/enroll-form";

export const metadata = {
  title: "Аудиокнига: Дигитален Успех за Холистични Лидери | Coaching Real",
  description:
    "Открий системата KickSTART за скалиране на холистичен онлайн бизнес. Аудиокнига от Станислава Павлова - за коучове, психолози, терапевти и астролози.",
};

/* ─── DATA ──────────────────────────────────────────────────────────── */
const specialists = [
  { Icon: IconBrain,  label: "Психолог" },
  { Icon: IconHeart,  label: "Психотерапевт" },
  { Icon: IconTarget, label: "Коуч" },
  { Icon: IconMoon,   label: "Астролог" },
  { Icon: IconLotus,  label: "Енергиен терапевт" },
  { Icon: IconLeaf,   label: "Алт. медицина" },
];

const questions = [
  "Смяташ ли, че разрастването на твоя онлайн холистичен бизнес е прекалено сложно и объркващо?",
  "Имаш ли усещането, че възможностите са безкрайни, но просто не знаеш откъде да започнеш?",
];

const learnItems = [
  {
    Icon: IconPackage,
    title: "Създай своя онлайн курс",
    body: "Как да създадеш и пакетираш своя онлайн курс или програма, за да започнеш да генерираш реални продажби.",
  },
  {
    Icon: IconUserCheck,
    title: "Привлечи идеалния клиент",
    body: "Как да привлечеш Идеалния клиент, който осъзнава нуждата от твоите услуги и купува отново и отново.",
  },
  {
    Icon: IconPeople,
    title: "Изгради мащабируем продукт",
    body: "Как да изградиш продукт, който помага на стотици хора едновременно и ти осигурява предвидим, постоянен приход.",
  },
  {
    Icon: IconAward,
    title: "Позиционирай се като авторитет",
    body: "Как да се позиционираш като авторитет онлайн и да изградиш устойчив бизнес, осигуряващ финансова свобода.",
  },
];

const forWhom = [
  "За холистични терапевти, коучове и психолози",
  "За специалисти, готови да трансформират начина, по който достигат до клиентите си",
  "За професионалисти със сериозно намерение да изградят дълготраен, печеливш онлайн бизнес",
];

const testimonials = [
  {
    quote: "Преди Стаси бях объркана, не знаех откъде да започна. Сега имам яснота, структуриран бизнес и постоянни клиенти!",
    name: "П.П.",
    role: "Холистичен терапевт",
  },
  {
    quote: "Стаси е невероятен ментор! С нейната помощ стартирах моя онлайн бизнес и промених живота си!",
    name: "М.Д.",
    role: "Холистичен нутриционист",
  },
];

const bonuses = [
  {
    Icon: IconConsult,
    title: "Стратегическа бизнес консултация",
    subtitle: "90 мин. · Работа 1:1 със Станислава",
    bullets: [
      "Работа един на един върху конкретно предизвикателство в бизнеса ти",
      "Изграждане на точен профил на твоя Идеален клиент",
      "Създаване на грабващо и конвертиращо маркетингово послание",
    ],
    regularEur: "500 €",
  },
  {
    Icon: IconCompass,
    title: "KickSTART система",
    subtitle: "Пълна стратегическа рамка",
    bullets: [
      "Цялостен бизнес план, адаптиран специално за твоите продукти и услуги",
    ],
    regularEur: "127.83 €",
  },
];

/* ─── SPECIALIST SVG ICONS ──────────────────────────────────────────── */
function IconBrain({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function IconHeart({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l1.5-3 2 6 1.5-3H21" />
    </svg>
  );
}

function IconTarget({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconMoon({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      <path d="M19 3v4M21 5h-4" />
    </svg>
  );
}

function IconLotus({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12" />
      <path d="M12 12c0 0-5-3-5-6.5C7 3 9 2 12 2s5 1 5 3.5C17 9 12 12 12 12Z" />
      <path d="M12 12c0 0-9-1.5-9-4.5C3 5.5 5 4.5 7 5.5" />
      <path d="M12 12c0 0 9-1.5 9-4.5C21 5.5 19 4.5 17 5.5" />
      <path d="M7 18c0-4 5-6 5-6" />
      <path d="M17 18c0-4-5-6-5-6" />
    </svg>
  );
}

function IconLeaf({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

/* ─── LEARN SECTION ICONS ───────────────────────────────────────────── */
function IconPackage({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function IconUserCheck({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}

function IconPeople({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconAward({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

/* ─── BONUS ICONS ───────────────────────────────────────────────────── */
function IconConsult({ color = "rgba(15,19,26,0.75)" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function IconCompass({ color = "rgba(15,19,26,0.75)" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

/* ─── UTILITY SVG ───────────────────────────────────────────────────── */
function IconCheck({ dark = false }: { dark?: boolean }) {
  return (
    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
      <path
        d="M1 4.5L4 7.5L10 1"
        stroke={dark ? "#ffffff" : "#70150E"}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLock() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e85050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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

/* ─── PAGE ──────────────────────────────────────────────────────────── */
export default function AudiobookPage() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)" }}>
      <SiteNav />
      <HeroSection />
      <ForYouSection />
      <LearnSection />
      <WhyDifferentSection />
      <ForWhomSection />
      <AboutSection />
      <TestimonialsSection />
      <BonusesSection />
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
      style={{ backgroundColor: "#faf8f5" }}
    >
      {/* Dot pattern */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(107,21,14,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left - text */}
        <div>
          <div className="animate-fade-up">
            <span className="mv-tag mv-tag-light">Аудиокнига · KickSTART</span>
          </div>

          <h1
            className="animate-fade-up delay-100 mt-6"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              fontWeight: 900,
              lineHeight: 0.97,
              letterSpacing: "-0.03em",
              color: onDark.primary,
            }}
          >
            <span className="block">Дигитален</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Успех
            </span>
            <span className="block" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 700, marginTop: "6px" }}>
              за Холистични Лидери
            </span>
          </h1>

          <p
            className="animate-fade-up delay-200 mt-6"
            style={{ fontSize: "16px", color: onDark.secondary, lineHeight: 1.8, maxWidth: "480px" }}
          >
            Научи как да скалираш практиката си и да доминираш в онлайн средите.
          </p>

          {/* Price + CTA */}
          <div className="animate-fade-up delay-300 mt-10">
            <div className="flex items-baseline gap-3 mb-5">
              <span
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  fontWeight: 900,
                  color: "var(--mv-text-primary)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                25.00 €
              </span>
            </div>
            <a
              href="#buy"
              className="mv-btn mv-btn-primary"
              style={{ fontSize: "16px", padding: "16px 40px" }}
            >
              Добавяне в количката
            </a>
          </div>
        </div>

        {/* Right - audiobook cover */}
        <div className="animate-fade-in delay-200 flex items-center justify-center">
          <div style={{ maxWidth: "380px", width: "100%" }}>
            <Image
              src="/audiobook-cover.png"
              alt="Аудиокнига: Дигитален Успех за Холистични Лидери"
              width={1080}
              height={1080}
              priority
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "18px",
                boxShadow: "0 20px 60px rgba(107,21,14,0.20), 0 4px 16px rgba(0,0,0,0.06)",
                border: "1px solid rgba(107,21,14,0.08)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOR YOU ──────────────────────────────────────────────────────── */
function ForYouSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-20 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">За кого е тази аудиокнига</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Създадена за{" "}
            <span style={{ ...GRADIENT_TEXT }}>холистични лидери</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {specialists.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-4 py-3"
              style={{
                backgroundColor: T.surfaceStrong,
                borderRadius: T.radiusSm,
                border: "1px solid rgba(112,21,14,0.08)",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(107,21,14,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon color="#c94535" />
              </div>
              <span style={{ fontSize: "14px", color: T.textPrimary, fontWeight: 600 }}>{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 max-w-2xl mx-auto mt-10">
          {questions.map((q, i) => (
            <div
              key={i}
              className="flex gap-3 items-start p-5"
              style={{
                backgroundColor: T.surfaceStrong,
                borderRadius: T.radiusSm,
                border: "1px solid rgba(107,21,14,0.08)",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "1px",
                }}
              >
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                  <path d="M1 2.5C1 1.12 2.12 0 3.5 0h3C7.88 0 9 1.12 9 2.5c0 2-2 2.5-4 3v1.5M5 11v2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p style={{ fontSize: "15px", color: T.textPrimary, lineHeight: 1.65, fontWeight: 500 }}>{q}</p>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-8"
          style={{ fontSize: "16px", color: "#c94535", fontWeight: 700 }}
        >
          Тази аудиокнига е създадена точно за теб.
        </p>
      </div>
    </section>
  );
}

/* ─── LEARN ─────────────────────────────────────────────────────────── */
function LearnSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(180,60,40,0.16) 0%, transparent 60%)," +
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(107,21,14,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="mv-tag mv-tag-light">Открий доказаната система</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: onDark.primary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Методиката, помогнала на{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              стотици жени предприемачи
            </span>
          </h2>
          <p
            className="mt-5 mx-auto"
            style={{ fontSize: "16px", color: onDark.secondary, lineHeight: 1.8, maxWidth: "560px" }}
          >
            Само СЕГА за <strong style={{ color: "var(--mv-text-primary)" }}>25.00 €</strong> ще научиш:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {learnItems.map(({ Icon, title, body }, i) => (
            <div
              key={i}
              className="flex gap-5 p-6"
              style={{
                backgroundColor: "rgba(112,21,14,0.05)",
                borderRadius: T.radiusSm,
                border: "1px solid rgba(112,21,14,0.08)",
              }}
            >
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(107,21,14,0.2)",
                  border: "1px solid rgba(107,21,14,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon color="#e87070" />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: onDark.primary,
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                    marginBottom: "8px",
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: "14px", color: onDark.secondary, lineHeight: 1.75 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA repeat */}
        <div className="text-center mt-14">
          <a
            href="#buy"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "16px", padding: "16px 44px" }}
          >
            Добавяне в количката - 25.00 €
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── WHY DIFFERENT ─────────────────────────────────────────────────── */
function WhyDifferentSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: T.surfaceRaised }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 55% 45% at 100% 50%, rgba(107,21,14,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-4xl mx-auto">
        <span className="mv-tag mv-tag-light">Защо е различна?</span>
        <h2
          className="mt-5"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 800,
            color: T.textPrimary,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Защо тази аудиокнига е{" "}
          <span style={{ ...GRADIENT_TEXT }}>различна?</span>
        </h2>

        {/* Formula card */}
        <div
          className="mt-10 p-8 md:p-10 flex gap-6 items-start"
          style={{
            background: "linear-gradient(135deg, #f9f9f9 0%, #fff4f3 100%)",
            borderRadius: "14px",
            border: "1px solid rgba(107,21,14,0.12)",
            boxShadow: "0 4px 32px rgba(107,21,14,0.07)",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <IconLock />
          </div>
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                ...GRADIENT_TEXT,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Секретната формула на успеха
            </p>
            <h3
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                fontWeight: 800,
                color: T.textPrimary,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "12px",
              }}
            >
              Не е магия. Тя е яснота и система.
            </h3>
            <p style={{ fontSize: "15px", color: T.textSecondary, lineHeight: 1.85 }}>
              Повечето обучения ти дават разпръсната информация. Системата „KickSTART" те учи
              как да спреш да пилееш ресурси, време и енергия, като се фокусираш единствено
              върху действията, които носят реални резултати.
            </p>
          </div>
        </div>

        <div
          className="mt-6 p-7"
          style={{
            backgroundColor: T.surfaceStrong,
            borderRadius: "12px",
            border: "1px solid rgba(107,21,14,0.08)",
          }}
        >
          <p style={{ fontSize: "16px", color: T.textPrimary, lineHeight: 1.85, fontStyle: "italic" }}>
            &ldquo;Работи със система, която работи за теб, а не против теб.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── FOR WHOM ──────────────────────────────────────────────────────── */
function ForWhomSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: T.surfaceStrong }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(107,21,14,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-3xl mx-auto">
        <span className="mv-tag mv-tag-light">Подходяща инвестиция</span>
        <h2
          className="mt-5"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 800,
            color: T.textPrimary,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "32px",
          }}
        >
          За кого е{" "}
          <span style={{ ...GRADIENT_TEXT }}>подходяща?</span>
        </h2>

        <div className="flex flex-col gap-4">
          {forWhom.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 items-start p-5"
              style={{
                backgroundColor: T.surfaceRaised,
                borderRadius: T.radiusSm,
                border: "1px solid rgba(107,21,14,0.1)",
                boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "1px",
                }}
              >
                <IconCheck dark />
              </span>
              <p style={{ fontSize: "15px", color: T.textPrimary, lineHeight: 1.7, fontWeight: 500 }}>{item}</p>
            </div>
          ))}
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
      style={{ backgroundColor: T.surfaceRaised }}
    >
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="hidden lg:block relative" style={{ height: "500px" }}>
          <div
            className="h-full w-full overflow-hidden"
            style={{ position: "relative", borderRadius: "14px", border: "1.5px solid rgba(107,21,14,0.2)" }}
          >
            <Image
              src={PHOTO_URL}
              alt="Станислава Павлова - автор на аудиокнигата"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 1024px) 0px, 50vw"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="mv-tag mv-tag-light">За автора</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Станислава Павлова
          </h2>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 700,
              ...GRADIENT_TEXT,
              marginTop: "6px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Ментор · Бизнес коуч · Създател на системата KickSTART
          </p>

          <p
            className="mt-6"
            style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.85 }}
          >
            Станислава помага на холистични специалисти да трансформират практиката си
            в печеливш онлайн бизнес. Чрез системата „KickSTART", съчетаваща страст,
            ясна структура и индивидуален подход, тя е помогнала на стотици специалисти
            да изградят устойчив, предвидим доход.
          </p>

          <blockquote
            className="mt-8 p-6"
            style={{
              backgroundColor: T.surfaceStrong,
              borderLeft: "3px solid #70150E",
              borderRadius: "0 10px 10px 0",
            }}
          >
            <p style={{ fontSize: "16px", color: T.textPrimary, lineHeight: 1.8, fontStyle: "italic" }}>
              &ldquo;Мисията ми е да покажа, че духовността и бизнесът не се изключват -
              те се допълват. Когато съчетаеш мисията със структура, парите започват
              да идват естествено.&rdquo;
            </p>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#70150E",
                marginTop: "12px",
                letterSpacing: "0.02em",
              }}
            >
              - Станислава Павлова
            </p>
          </blockquote>

          <a href="/stanislava" className="mv-btn mv-btn-outline-light mt-8 inline-flex">
            Научи повече за Стаси →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ──────────────────────────────────────────────────── */
function TestimonialsSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(107,21,14,0.2) 0%, transparent 60%)," +
            "radial-gradient(ellipse 50% 40% at 100% 100%, rgba(180,50,30,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="mv-tag mv-tag-light">Резултатите говорят сами</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: onDark.primary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Какво казват{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              нашите клиенти
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-8"
              style={{
                backgroundColor: "rgba(112,21,14,0.04)",
                borderRadius: "14px",
                border: "1px solid rgba(112,21,14,0.08)",
              }}
            >
              <div>
                <IconQuote />
                <p
                  className="mt-4"
                  style={{ fontSize: "16px", color: onDark.secondary, lineHeight: 1.85, fontStyle: "italic" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8 pt-6" style={{ borderTop: "1px solid rgba(112,21,14,0.07)" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: onDark.primary }}>{t.name}</p>
                  <p style={{ fontSize: "12px", color: onDark.muted, marginTop: "2px" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── BONUSES ───────────────────────────────────────────────────────── */
function BonusesSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: T.surfaceStrong }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(107,21,14,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="mv-tag mv-tag-light">Ексклузивни бонуси</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Включено в{" "}
            <span style={{ ...GRADIENT_TEXT }}>офертата</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {bonuses.map((b, i) => {
            const BonusIcon = b.Icon;
            return (
              <div
                key={i}
                className="flex flex-col p-8"
                style={{
                  backgroundColor: T.surfaceRaised,
                  borderRadius: "14px",
                  border: "1px solid rgba(107,21,14,0.1)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
              >
                {/* Bonus number + icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <BonusIcon color="#ffffff" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#70150E",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "3px",
                      }}
                    >
                      Бонус #{i + 1}
                    </p>
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        color: T.textPrimary,
                        lineHeight: 1.25,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {b.title}
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: "13px", color: T.textSecondary, marginBottom: "16px" }}>{b.subtitle}</p>

                <div className="flex flex-col gap-3 flex-1">
                  {b.bullets.map((bullet, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      <span
                        style={{
                          flexShrink: 0,
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(107,21,14,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "2px",
                        }}
                      >
                        <IconCheck />
                      </span>
                      <p style={{ fontSize: "14px", color: T.textPrimary, lineHeight: 1.65 }}>{bullet}</p>
                    </div>
                  ))}
                </div>

                {/* Regular price */}
                <div
                  className="mt-6 pt-5 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(107,21,14,0.1)" }}
                >
                  <span style={{ fontSize: "12px", color: T.textSecondary }}>Редовна цена</span>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: T.textSecondary,
                      textDecoration: "line-through",
                      textDecorationColor: "rgba(107,21,14,0.4)",
                    }}
                  >
                    {b.regularEur}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total value banner */}
        <div
          className="mt-8 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, #5a1009 0%, #a83020 60%, #c94535 100%)",
            borderRadius: "14px",
          }}
        >
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>
              Обща стойност на офертата
            </p>
            <p style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em" }}>
              Над <span style={{ textDecoration: "line-through", opacity: 0.6 }}>625 €</span>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", marginBottom: "4px" }}>Само сега за</p>
            <p style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1, letterSpacing: "-0.03em" }}>
              25.00 €
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section
      id="buy"
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(107,21,14,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <span
          className="mv-tag inline-block mb-8"
          style={{ backgroundColor: "rgba(112,21,14,0.08)", color: "#e87070" }}
        >
          Готов/а ли си да започнеш?
        </span>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 900,
            color: "var(--mv-text-primary)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Вземи аудиокнигата и бонусите
          <span style={{ display: "block", color: "#e85050", marginTop: "8px" }}>
            на стойност над 625 €
          </span>
        </h2>

        {/* Price block */}
        <div
          className="mt-10 mb-10 inline-flex flex-col items-center gap-2 px-10 py-6"
          style={{
            backgroundColor: "rgba(112,21,14,0.05)",
            borderRadius: "14px",
            border: "1px solid rgba(112,21,14,0.08)",
          }}
        >
          <span style={{ fontSize: "13px", color: onDark.muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Само сега за
          </span>
          <div className="flex items-baseline gap-3">
            <span
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontWeight: 900,
                color: "var(--mv-text-primary)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              25.00 €
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <EnrollForm product="audiobook" />
        </div>
      </div>
    </section>
  );
}
