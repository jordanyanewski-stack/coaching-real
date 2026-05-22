import Image from "next/image";
import { T, GRADIENT_TEXT, LOGO_URL, SiteFooter } from "@/app/_shared";
import { FAQAccordion } from "./faq-accordion";
import { ScrollReveal } from "./scroll-reveal";
import { EnrollForm } from "./enroll-form";
import { HeroVideo } from "./hero-video";
import { StickyCTABar } from "./sticky-cta-bar";

export const metadata = {
  title: "Дипломата ти виси на стената. А клиентите не идват. · 12 дни Мастъркласове® | Coaching Real",
  description:
    "12 дни мастъркласове за терапевти, коучове и лечители — спри да чакаш препоръки, започни да привличаш клиенти онлайн. €67 за всички 12 дни. 18-29 май 2026.",
};

/* ─── DATA ──────────────────────────────────────────────────────────── */
const painQuestions = [
  "Завърши обучение, инвестира в сертификати — и все още чакаш „правилните“ клиенти?",
  "Разчиташ само на препоръки от уста на уста и не знаеш как да привличаш клиенти онлайн?",
  "Публикуваш понякога в социалните мрежи, но не знаеш дали работи и защо?",
  "Онлайн пространството ти изглежда объркващо, притеснително, неясно?",
  "Имаш страхотна терапия — но нямаш представа как да я „продаваш“ без да се чувстваш неловко?",
];

const honestReasons = [
  "Разчиташ на препоръки, но те са непредвидими и не можеш да ги контролираш",
  "Нямаш ежедневно присъствие онлайн или публикуваш хаотично без стратегия",
  "Не знаеш как да говориш за работата си така, че правилните хора да те разберат",
  "Нямаш ясна оферта — продаваш „сесии“ вместо конкретна трансформация",
  "Не знаеш как да се позиционираш онлайн без да се чувстваш като „продавач“",
];

const outcomes = [
  "Ясен профил на идеалния клиент — в думите, с които той описва болката си",
  "Разбиране защо нямаш клиенти сега — и точно кое трябва да промениш",
  "Оформена оферта — не „сесии“, а конкретна трансформация с конкретна цена",
  "Стратегия за онлайн присъствие — без да се чувстваш като продавач",
  "Идея за твоя онлайн курс или програма — от главата на хартия, готова",
  "AI инструменти, спестяващи часове маркетинг всяка седмица",
  "Конкретен план за 90 дни — не вдъхновение. Документ.",
];

const curriculum = [
  { day: "Ден 1",  date: "18 Май", title: "Защо онлайн пространството не ти работи сега",   outcome: "Ще знаеш кои 3 грешки правиш в момента" },
  { day: "Ден 2",  date: "19 Май", title: "Как да говориш за работата си с увереност",      outcome: "Ще спреш да се извиняваш за цената и работата си" },
  { day: "Ден 3",  date: "20 Май", title: "Защо хаосът те коства клиенти",                  outcome: "Ще знаеш точно кое действие движи бизнеса ти" },
  { day: "Ден 4",  date: "21 Май", title: "Кой е твоят идеален клиент — в дълбочина",       outcome: "Профил толкова конкретен, че следващият пост ще пише сам себе си" },
  { day: "Ден 5",  date: "22 Май", title: "Как да монетизираш експертизата си с онлайн курс", outcome: "Идеята от главата на хартия, оценена, готова" },
  { day: "Ден 6",  date: "23 Май", title: "Как да се откроиш без да се сравняваш",          outcome: "Ще знаеш какво те прави различна и как да го кажеш" },
  { day: "Ден 7",  date: "24 Май", title: "Как да спреш да продаваш времето си",            outcome: "Модел при който доходът не зависи от броя часове" },
  { day: "Ден 8",  date: "25 Май", title: "Как да създадеш оферта, която се продава",       outcome: "Оферта позиционирана, оценена, готова за публикуване" },
  { day: "Ден 9",  date: "26 Май", title: "AI стратегии за намиране на клиенти",            outcome: "Спестяваш часове маркетинг всяка седмица" },
  { day: "Ден 10", date: "27 Май", title: "Как да поддържаш клиентопоток без бърнаут",      outcome: "Малки стъпки, водещи до предвидим доход" },
  { day: "Ден 11", date: "28 Май", title: "Вътрешните блокажи, които спират клиентите",     outcome: "Страхът от „продажба“ спира да взима решения вместо теб" },
  { day: "Ден 12", date: "29 Май", title: "Твоят план за следващите 90 дни",                outcome: "Не вдъхновение. Конкретен документ, готов за изпълнение утре" },
];

const valueStack = [
  { label: "12 живи мастъркласа с мен",           tag: "€197" },
  { label: "Записи на всичките 12 сесии",         tag: "включено" },
  { label: "AI prompt библиотека за бизнеса",     tag: "включено" },
  { label: "KickSTART система за работа",         tag: "включено" },
  { label: "Затворена група след събитието",      tag: "включено" },
];

const textTestimonials = [
  {
    quote: "Преди не знаех как да говоря за работата си онлайн. След Ден 4 написах пост и ми се обадиха 3 жени за сесия същата седмица.",
    name: "Стефани Булмез",
    role: "Холистичен специалист",
  },
  {
    quote: "Имах идея за курс от 18 месеца. След Ден 5 беше на хартия, оценена и готова. Не мога да повярвам, че чаках толкова дълго.",
    name: "Надежда Клисарска",
    role: "Коуч",
  },
  {
    quote: "Разбрах защо клиентите не идват въпреки че работя от 5 години. Никой не ми беше казал тези неща досега.",
    name: "Гергана Гаджева",
    role: "Терапевт",
  },
];

const aboutCredentials = [
  "11 години опит",
  "CPD UK акредитация",
  "Noble Manhattan UK",
  "200+ клиентки",
];

const faqs = [
  {
    q: "Трябва ли вече да имам онлайн присъствие?",
    a: "Не. Програмата работи и ако тепърва започваш онлайн, и ако вече имаш присъствие, но то не ти носи клиенти.",
  },
  {
    q: "Колко ще ми отнема на ден?",
    a: "90 минути вечер от 19:00 до 20:30 ч. Плюс кратка задача след всяка сесия. Всичко е записано, ако пропуснеш.",
  },
  {
    q: "Подходящо ли е, ако съм начинаеща?",
    a: "Да. Единственото изискване е да имаш желание да помагаш на хора и да искаш клиентите да те намират онлайн.",
  },
  {
    q: "Ще има ли запис?",
    a: "Да, записите са включени. Но присъствието на живо е много по-ценно — там се случват истинските промени.",
  },
];

/* ─── UTILITY ICONS ─────────────────────────────────────────────────── */
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

/* ─── CAMPAIGN HEADER ───────────────────────────────────────────────── */
function CampaignHeader() {
  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <a href="/" style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
        <Image
          src={LOGO_URL}
          alt="Coaching Real"
          width={0}
          height={0}
          sizes="100vw"
          style={{ height: "40px", width: "auto", display: "block" }}
        />
      </a>
      <a
        href="#enroll"
        className="mv-btn mv-btn-primary"
        style={{ padding: "10px 22px", fontSize: "14px", flexShrink: 0 }}
      >
        Искам клиенти онлайн - €67
      </a>
    </header>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────── */
export default function MasterclassPage() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)" }}>
      <ScrollReveal />
      <CampaignHeader />
      <HeroSection />
      <PainRecognitionSection />
      <HonestReasonSection />
      <OutcomesSection />
      <VideoTestimonialsSection />
      <TestimonialsSection />
      <CurriculumSection />
      <ValueStackSection />
      <GuaranteeSection />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
      <SiteFooter />
      <StickyCTABar />
    </div>
  );
}

/* ─── HERO ───────────────────────────────────────────────────────────── */
const HERO_VIDEO = {
  libraryId:    "653527",
  videoId:      "b32c246d-b7a5-4289-ae4d-ee866c2657cd",
  thumbnailUrl: "https://vz-84c41e4d-6a7.b-cdn.net/b32c246d-b7a5-4289-ae4d-ee866c2657cd/thumbnail.jpg",
};

function HeroSection() {
  return (
    <section
      className="mc-hero relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-28 pb-20"
      style={{ backgroundColor: "#faf8f5" }}
    >
      {/* Background animation */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div
          className="mc-orb"
          style={{
            position: "absolute",
            top: "-10%",
            right: "-10%",
            width: "55%",
            aspectRatio: "1",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(107,21,14,0.09) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "-5%",
            width: "40%",
            aspectRatio: "1",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,69,53,0.07) 0%, transparent 65%)",
            filter: "blur(80px)",
            animation: "mcOrbB 14s ease-in-out infinite 2s",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "35%",
            width: "35%",
            aspectRatio: "1",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(107,21,14,0.05) 0%, transparent 65%)",
            filter: "blur(90px)",
            animation: "mcOrbC 18s ease-in-out infinite 5s",
          }}
        />
        <div
          className="mc-dots"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(107,21,14,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
          }}
        />
      </div>

      <div className="mc-hero-content max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left - text */}
        <div className="mc-hero-text">
          <div className="animate-fade-up flex flex-wrap items-center gap-3">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                fontWeight: 700,
                color: "#70150E",
                backgroundColor: "rgba(107,21,14,0.06)",
                padding: "5px 14px",
                borderRadius: "20px",
                border: "1px solid rgba(107,21,14,0.14)",
              }}
            >
              18 – 29 Май 2026
            </span>
            <span style={{ fontSize: "13px", color: T.textSecondary, fontWeight: 600 }}>
              Zoom · всяка вечер от 19:00 ч.
            </span>
          </div>

          {/* Social proof strip */}
          <div
            className="animate-fade-up delay-100 mt-4 flex items-center gap-3 flex-wrap"
            aria-label="Социално доказателство"
          >
            <div style={{ display: "flex", flexShrink: 0 }}>
              {[
                { src: "/Стефани Булмез.jpg", alt: "Стефани Булмез" },
                { src: "/Красимира Кондова.jpg", alt: "Красимира Кондова" },
                { src: "/Надежда Клисарска.jpg", alt: "Надежда Клисарска" },
              ].map(({ src, alt }, i) => (
                <span
                  key={src}
                  style={{
                    position: "relative",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid #faf8f5",
                    boxShadow: "0 1px 4px rgba(107,21,14,0.15)",
                    marginLeft: i === 0 ? 0 : "-8px",
                    backgroundColor: "#f0ebe4",
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="32px"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                </span>
              ))}
            </div>
            <span
              style={{
                fontSize: "13px",
                color: T.textSecondary,
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              <strong style={{ color: T.textPrimary, fontWeight: 800 }}>100+</strong>{" "}
              терапевти, коучове и лечители вече минаха през KickSTART
            </span>
          </div>

          {/* Eyebrow */}
          <div className="animate-fade-up delay-75 mt-6">
            <span
              style={{
                display: "inline-block",
                fontSize: "11px",
                fontWeight: 800,
                color: "#70150E",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                lineHeight: 1.4,
              }}
            >
              12 ДНИ МАСТЪРКЛАСОВЕ® · KICKSTART
            </span>
          </div>

          <h1
            className="animate-fade-up delay-100 mt-3"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 900,
              color: T.textPrimary,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "620px",
              margin: "12px 0 0",
            }}
          >
            Дипломата ти виси на стената.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              А клиентите не идват.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-up delay-150 mt-5"
            style={{
              fontSize: "17px",
              color: T.textSecondary,
              lineHeight: 1.55,
              maxWidth: "580px",
              fontWeight: 500,
            }}
          >
            За{" "}
            <strong style={{ color: T.textPrimary, fontWeight: 700 }}>
              терапевти, коучинг специалисти, психолози, НЛП практици и холистични специалисти
            </strong>
            , които са уморени да разчитат само на препоръки, случайни постове и „дано някой ми пише“.
          </p>

          {/* Unified pricing card */}
          <div
            className="animate-fade-up delay-250 mt-7 mc-pricing-card"
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: "18px",
              padding: "22px 26px",
              background: "linear-gradient(135deg, #ffffff 0%, #fdf6ee 100%)",
              borderRadius: "18px",
              border: "1px solid rgba(107,21,14,0.16)",
              boxShadow: "0 12px 40px rgba(107,21,14,0.10), 0 1px 2px rgba(0,0,0,0.04)",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "12px",
                flexWrap: "wrap",
                rowGap: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(2.4rem, 7vw, 3.2rem)",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                €67
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: T.textSecondary,
                  letterSpacing: "0.02em",
                  alignSelf: "center",
                }}
              >
                за всички 12 дни
              </span>
            </div>
          </div>

          {/* Big CTA */}
          <div className="animate-fade-up delay-300 mt-6">
            <a
              href="#enroll"
              className="mv-btn mv-btn-primary mc-hero-cta"
              style={{
                fontSize: "17px",
                padding: "18px 36px",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                fontWeight: 700,
                boxShadow: "0 12px 32px rgba(107,21,14,0.30), 0 1px 2px rgba(0,0,0,0.04)",
              }}
            >
              Искам да знам как да привличам клиенти онлайн
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="animate-fade-up delay-300 mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2"
            style={{ fontSize: "12px", color: T.textSecondary, fontWeight: 600 }}
          >
            {[
              "Сигурна транзакция",
              "Потвърждение веднага",
              "30-дневна гаранция",
            ].map((label) => (
              <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#70150E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right - video (or photo fallback) */}
        <div className="mc-hero-visual animate-fade-in delay-200 flex flex-col items-center justify-center gap-4 order-first lg:order-none">
          {HERO_VIDEO.libraryId && HERO_VIDEO.videoId ? (
            <div style={{ width: "100%", maxWidth: "500px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
              <div
                className="hero-video-cue"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 18px",
                  background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                  borderRadius: "999px",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  boxShadow: "0 8px 24px rgba(112,21,14,0.35)",
                  whiteSpace: "nowrap",
                }}
              >
                <svg width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#ffffff" stroke="#ffffff" />
                  <line x1="22" y1="9" x2="16" y2="15" />
                  <line x1="16" y1="9" x2="22" y2="15" />
                </svg>
                Кликни за звук
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 12px 48px rgba(107,21,14,0.18)",
                  border: "1px solid rgba(107,21,14,0.12)",
                }}
              >
                <HeroVideo
                  libraryId={HERO_VIDEO.libraryId}
                  videoId={HERO_VIDEO.videoId}
                  thumbnailUrl={HERO_VIDEO.thumbnailUrl}
                />
              </div>
            </div>
          ) : (
            <div
              style={{
                position: "relative",
                width: "420px",
                height: "420px",
                borderRadius: "50%",
                padding: "4px",
                background: "linear-gradient(135deg, #70150E, #c94535, #e85050, #70150E)",
                boxShadow: "none",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/stasi-4.jpg"
                  alt="Станислава Павлова"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  sizes="420px"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── PAIN RECOGNITION ──────────────────────────────────────────────── */
function PainRecognitionSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">Спри да чакаш</span>
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
            Разпознаваш ли се{" "}
            <span style={{ ...GRADIENT_TEXT }}>в тези въпроси?</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {painQuestions.map((q, i) => (
            <div
              key={i}
              className="flex gap-4 items-start p-5"
              style={{
                backgroundColor: T.surfaceStrong,
                borderRadius: T.radiusSm,
                border: "1px solid rgba(107,21,14,0.08)",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                  color: "#ffffff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 800,
                  lineHeight: 1,
                  marginTop: "2px",
                }}
              >
                {i + 1}
              </span>
              <p style={{ fontSize: "15px", color: T.textPrimary, lineHeight: 1.65, fontWeight: 500 }}>
                {q}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-10 text-center"
          style={{
            fontSize: "17px",
            fontWeight: 700,
            color: T.textPrimary,
            letterSpacing: "-0.005em",
            lineHeight: 1.5,
          }}
        >
          Ако поне 3 от тях те описват —{" "}
          <span style={{ ...GRADIENT_TEXT }}>тези 12 дни са точно за теб.</span>
        </p>

        <div className="mt-8 text-center">
          <a href="#enroll" className="mv-btn mv-btn-primary" style={{ fontSize: "15px", padding: "16px 28px" }}>
            Искам да знам как да привличам клиенти онлайн →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── HONEST REASON ─────────────────────────────────────────────────── */
function HonestReasonSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="mv-tag mv-tag-light">Честният отговор</span>
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
            Защо нямаш клиенти —{" "}
            <span style={{ ...GRADIENT_TEXT }}>честният отговор</span>
          </h2>
          <p
            className="mt-5"
            style={{
              fontSize: "17px",
              color: T.textSecondary,
              lineHeight: 1.65,
              fontWeight: 500,
              maxWidth: "640px",
              margin: "20px auto 0",
            }}
          >
            Не е защото не си добра. Не е защото нямаш талант.
            <br />
            Проблемът е, че са те учили да лекуваш. Никой обаче не те е учил
            как да достигаш до твоите клиенти онлайн. В 12-те дни ще разбереш
            защо нямаш постоянен поток от клиенти и как да го изградиш.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {honestReasons.map((r, i) => (
            <div
              key={i}
              className="flex gap-4 items-start p-5"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: T.radiusSm,
                border: "1px solid rgba(107,21,14,0.08)",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                  marginTop: "10px",
                  boxShadow: "0 0 0 3px rgba(201,69,53,0.18)",
                }}
              />
              <p style={{ fontSize: "15px", color: T.textPrimary, lineHeight: 1.7, fontWeight: 500 }}>
                {r}
              </p>
            </div>
          ))}
        </div>

        {/* Krasimira pull-quote */}
        <figure
          className="mt-12"
          style={{
            margin: "48px 0 0",
            padding: "26px 28px",
            background: "linear-gradient(135deg, #70150E 0%, #8a1c14 100%)",
            borderRadius: "18px",
            color: "#ffffff",
            position: "relative",
            boxShadow: "0 18px 42px rgba(107,21,14,0.30)",
          }}
        >
          <svg
            width="32"
            height="26"
            viewBox="0 0 32 26"
            fill="rgba(255,255,255,0.18)"
            aria-hidden
            style={{ marginBottom: "10px" }}
          >
            <path d="M0 26V14.4C0 10.4 1 7.07 3 4.4 5.13 1.6 8.4 0 12.8 0l1.6 3.2C10.27 4.27 8 6.13 6.8 8.8 5.73 11.2 5.33 13.6 5.6 16H13V26H0Zm19 0V14.4c0-4 1-7.33 3-10C24.13 1.6 27.4 0 31.8 0L33.4 3.2c-4.13 1.07-6.4 2.93-7.6 5.6C24.73 11.2 24.4 13.6 24.6 16H32V26H19Z" />
          </svg>
          <blockquote
            style={{
              fontSize: "17px",
              lineHeight: 1.6,
              fontWeight: 500,
              margin: 0,
            }}
          >
            С Красимира разбрахме кой е идеалният й клиент. До 2 месеца след
            програмата имаше пълен календар за първи път от 4 години.
          </blockquote>
          <figcaption
            style={{
              marginTop: "14px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.02em",
              opacity: 0.92,
            }}
          >
            Красимира Такева · Терапевт
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ─── OUTCOMES ──────────────────────────────────────────────────────── */
function OutcomesSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">Какво ще постигнеш</span>
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
            След тези 12 дни{" "}
            <span style={{ ...GRADIENT_TEXT }}>ще имаш:</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {outcomes.map((o, i) => (
            <div
              key={i}
              className="flex gap-4 items-start p-5"
              style={{
                backgroundColor: T.surfaceStrong,
                borderRadius: T.radiusSm,
                border: "1px solid rgba(107,21,14,0.08)",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "1px",
                }}
              >
                <IconCheck dark />
              </span>
              <p style={{ fontSize: "15px", color: T.textPrimary, lineHeight: 1.7, fontWeight: 500 }}>
                {o}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#enroll" className="mv-btn mv-btn-primary" style={{ fontSize: "15px", padding: "16px 28px" }}>
            Искам тези резултати — €67 →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── VIDEO TESTIMONIALS (slider + 3 text quotes) ───────────────────── */
const videoTestimonials = [
  { id: "P7uagO2iKQU" },
  { id: "YaXXwMVzYCE" },
  { id: "KCKlgVLQfnI" },
  { id: "qxwjEwrPclE" },
  { id: "XCbVcEi6p84" },
];

function VideoTestimonialsSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">Какво казват жените</span>
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
            Реални истории.{" "}
            <span style={{ ...GRADIENT_TEXT }}>Реални резултати.</span>
          </h2>
        </div>

        {/* 3 text quotes */}
        <div
          className="grid gap-5 mb-14"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {textTestimonials.map(({ quote, name, role }) => (
            <figure
              key={name}
              style={{
                margin: 0,
                padding: "26px 24px",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                border: "1px solid rgba(107,21,14,0.10)",
                boxShadow: "0 4px 18px rgba(107,21,14,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <svg width="22" height="18" viewBox="0 0 32 26" fill="rgba(112,21,14,0.18)" aria-hidden>
                <path d="M0 26V14.4C0 10.4 1 7.07 3 4.4 5.13 1.6 8.4 0 12.8 0l1.6 3.2C10.27 4.27 8 6.13 6.8 8.8 5.73 11.2 5.33 13.6 5.6 16H13V26H0Zm19 0V14.4c0-4 1-7.33 3-10C24.13 1.6 27.4 0 31.8 0L33.4 3.2c-4.13 1.07-6.4 2.93-7.6 5.6C24.73 11.2 24.4 13.6 24.6 16H32V26H19Z" />
              </svg>
              <blockquote
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: T.textPrimary,
                  fontWeight: 500,
                  flex: 1,
                }}
              >
                {quote}
              </blockquote>
              <figcaption
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#70150E",
                  letterSpacing: "0.01em",
                }}
              >
                {name}
                <span style={{ color: T.textSecondary, fontWeight: 500 }}> · {role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Video slider */}
        <div style={{ position: "relative" }}>
          <div
            className="mc-testimonials-scroll"
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              paddingBottom: "12px",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
              scrollSnapType: "x mandatory",
              scrollPaddingLeft: "0px",
            }}
          >
            {videoTestimonials.map(({ id }) => (
              <div
                key={id}
                style={{
                  flexShrink: 0,
                  width: "220px",
                  aspectRatio: "9/16",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(107,21,14,0.1)",
                  border: "1px solid rgba(107,21,14,0.1)",
                  scrollSnapAlign: "start",
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                  title={`Testimonial ${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                />
              </div>
            ))}
          </div>

          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              bottom: 12,
              right: 0,
              width: "72px",
              pointerEvents: "none",
              background: "linear-gradient(90deg, rgba(250,248,245,0) 0%, rgba(250,248,245,0.95) 100%)",
            }}
          />
        </div>

        <div
          className="md:hidden mc-swipe-hint"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginTop: "16px",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#70150E",
            opacity: 0.7,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        <div className="text-center mt-12">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "10px" }}
          >
            Искам същите резултати →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS (screenshots) ────────────────────────────────────── */
const testimonials = [
  {
    src: "/testimonials/testimonial-04-elitsa-diamandieva.jpg",
    alt: "Елица Диамандиева — отзив от Facebook",
    width: 1169,
    height: 697,
  },
  {
    src: "/testimonials/testimonial-02-gergana-gadjeva.jpg",
    alt: "Гергана Гаджева — коментар от Facebook",
    width: 939,
    height: 882,
  },
  {
    src: "/testimonials/testimonial-01-stefani-bulmez.jpg",
    alt: "Стефани Булмез — препоръка във Facebook",
    width: 1170,
    height: 638,
  },
  {
    src: "/testimonials/testimonial-05-mia-petrova.jpg",
    alt: "Миа Петрова — съобщение в Messenger",
    width: 1169,
    height: 660,
  },
  {
    src: "/testimonials/testimonial-03-tanita.jpg",
    alt: "Танита — съобщение във Viber",
    width: 861,
    height: 513,
  },
];

function TestimonialsSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">Думите на жените</span>
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
            Животът им се раздели{" "}
            <span style={{ ...GRADIENT_TEXT }}>на преди и след.</span>
          </h2>
        </div>

        <div className="mc-testimonials-grid">
          {testimonials.map(({ src, alt, width, height }) => (
            <figure
              key={src}
              style={{
                margin: 0,
                breakInside: "avoid",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(107,21,14,0.1)",
                border: "1px solid rgba(107,21,14,0.1)",
                background: "#ffffff",
                marginBottom: "20px",
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 540px"
                style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
              />
            </figure>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "10px" }}
          >
            Искам същите резултати - €67
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CURRICULUM ────────────────────────────────────────────────────── */
function CurriculumSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="mv-tag mv-tag-light">Програмата</span>
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
            12 дни.{" "}
            <span style={{ ...GRADIENT_TEXT }}>
              12 отговора на въпроса „защо нямам клиенти".
            </span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {curriculum.map((c) => (
            <article
              key={c.day}
              style={{
                padding: "22px 22px 24px",
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                border: "1px solid rgba(107,21,14,0.10)",
                boxShadow: "0 4px 14px rgba(107,21,14,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#70150E",
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                  }}
                >
                  {c.day}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: T.textSecondary,
                    backgroundColor: "rgba(107,21,14,0.06)",
                    padding: "2px 8px",
                    borderRadius: "999px",
                  }}
                >
                  {c.date}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 800,
                  color: T.textPrimary,
                  lineHeight: 1.3,
                  letterSpacing: "-0.005em",
                  margin: 0,
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: T.textSecondary,
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                <span style={{ color: "#70150E", fontWeight: 700 }}>→</span> {c.outcome}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#enroll" className="mv-btn mv-btn-primary" style={{ fontSize: "15px", padding: "16px 28px" }}>
            Искам да разбера защо нямам клиенти — €67 →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── VALUE STACK ───────────────────────────────────────────────────── */
function ValueStackSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">Стойността</span>
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
            Всичко,{" "}
            <span style={{ ...GRADIENT_TEXT }}>което получаваш</span>
          </h2>
        </div>

        <div
          style={{
            background: "linear-gradient(180deg, #faf8f5 0%, #ffffff 100%)",
            borderRadius: "20px",
            border: "1px solid rgba(107,21,14,0.10)",
            boxShadow: "0 12px 40px rgba(107,21,14,0.08)",
            overflow: "hidden",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {valueStack.map((row, i) => (
              <li
                key={row.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "18px 24px",
                  borderTop: i === 0 ? "none" : "1px solid rgba(107,21,14,0.08)",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: T.textPrimary,
                    lineHeight: 1.4,
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconCheck dark />
                  </span>
                  {row.label}
                </span>
                <span
                  style={{
                    fontSize: row.tag === "включено" ? "12px" : "16px",
                    fontWeight: row.tag === "включено" ? 700 : 800,
                    color: row.tag === "включено" ? "#1a7f3c" : "#70150E",
                    backgroundColor: row.tag === "включено" ? "rgba(26,127,60,0.10)" : "transparent",
                    padding: row.tag === "включено" ? "4px 10px" : "0",
                    borderRadius: row.tag === "включено" ? "999px" : "0",
                    letterSpacing: row.tag === "включено" ? "0.04em" : "-0.02em",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.tag}
                </span>
              </li>
            ))}
          </ul>

          <div
            style={{
              padding: "20px 24px",
              borderTop: "1px dashed rgba(107,21,14,0.20)",
              fontSize: "13px",
              fontWeight: 700,
              color: "#70150E",
              letterSpacing: "0.02em",
              textAlign: "center",
              backgroundColor: "rgba(107,21,14,0.04)",
            }}
          >
            Всичко останало е включено безплатно.
          </div>

          <div
            style={{
              padding: "26px 24px 30px",
              backgroundColor: "#ffffff",
              borderTop: "1px solid rgba(107,21,14,0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 3.4rem)",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                €67
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: T.textSecondary,
                  letterSpacing: "0.02em",
                  alignSelf: "center",
                }}
              >
                за всички 12 дни
              </span>
            </div>
            <a
              href="#enroll"
              className="mv-btn mv-btn-primary"
              style={{
                fontSize: "16px",
                padding: "16px 32px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Запиши се →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── GUARANTEE ─────────────────────────────────────────────────────── */
function GuaranteeSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-20 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-3xl mx-auto text-center">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
            boxShadow: "0 14px 36px rgba(107,21,14,0.30)",
            margin: "0 auto 24px",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 2l9 4v6c0 5-3.5 9.5-9 10-5.5-.5-9-5-9-10V6l9-4z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>

        <span
          style={{
            display: "block",
            fontSize: "11px",
            fontWeight: 800,
            color: "#70150E",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            lineHeight: 1.4,
          }}
        >
          30-дневна гаранция
        </span>

        <h2
          className="mt-4"
          style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 800,
            color: T.textPrimary,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            maxWidth: "560px",
            margin: "12px auto 0",
          }}
        >
          Ако след първите 3 дни усетиш, че програмата не е за теб —{" "}
          <span style={{ ...GRADIENT_TEXT }}>връщам парите изцяло.</span>
        </h2>

        <p
          className="mt-5"
          style={{
            fontSize: "16px",
            color: T.textSecondary,
            lineHeight: 1.65,
            fontWeight: 500,
            maxWidth: "520px",
            margin: "20px auto 0",
          }}
        >
          Без въпроси. Рискът е мой.
        </p>
      </div>
    </section>
  );
}

/* ─── ABOUT ─────────────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">За мен</span>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-start">
          <div className="flex justify-center lg:justify-start">
            <div
              style={{
                position: "relative",
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                padding: "4px",
                background: "linear-gradient(135deg, #70150E, #c94535, #e85050, #70150E)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/stasi-4.jpg"
                  alt="Станислава Павлова"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  sizes="260px"
                />
              </div>
            </div>
          </div>

          <div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 900,
                color: T.textPrimary,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Станислава Павлова
            </h2>
            <p
              className="mt-2"
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#70150E",
                letterSpacing: "0.02em",
              }}
            >
              Бизнес ментор · Стратег · Създател на KickSTART
            </p>

            <p
              className="mt-5"
              style={{
                fontSize: "16px",
                color: T.textSecondary,
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              Работя с терапевти, коучове, лечители и холистични специалисти от{" "}
              <strong style={{ color: T.textPrimary, fontWeight: 700 }}>11 години</strong>.
              Виждала съм стотици жени с огромна стойност и нулева представа как да
              намират клиенти онлайн. Моята работа е да запълня тази пропаст —{" "}
              <strong style={{ color: T.textPrimary, fontWeight: 700 }}>
                не с мотивация, а с конкретна система.
              </strong>
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {aboutCredentials.map((c) => (
                <span
                  key={c}
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#70150E",
                    backgroundColor: "rgba(107,21,14,0.06)",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    border: "1px solid rgba(107,21,14,0.14)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {c}
                </span>
              ))}
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
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">Въпроси</span>
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
            Преди да се запишеш —{" "}
            <span style={{ ...GRADIENT_TEXT }}>всичко, което може би питаш</span>
          </h2>
        </div>

        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section
      id="enroll"
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-3xl mx-auto text-center">
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 900,
            color: T.textPrimary,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          Спри да чакаш клиентите{" "}
          <span style={{ ...GRADIENT_TEXT }}>да те намерят сами.</span>
        </h2>

        <p
          className="mt-5"
          style={{
            fontSize: "17px",
            color: T.textSecondary,
            lineHeight: 1.55,
            fontWeight: 600,
          }}
        >
          18 - 29 Май 2026 · Zoom · всяка вечер от 19:00 ч.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "#70150E",
              backgroundColor: "rgba(107,21,14,0.06)",
              padding: "5px 14px",
              borderRadius: "20px",
              border: "1px solid rgba(107,21,14,0.14)",
            }}
          >
            18 – 29 Май 2026
          </span>
          <span style={{ fontSize: "13px", color: T.textSecondary, fontWeight: 600 }}>
            Zoom · всяка вечер от 19:00 ч.
          </span>
        </div>

        {/* Price block */}
        <div
          className="mt-10 mb-10 inline-flex flex-col items-center gap-5 px-10 py-7"
          style={{
            backgroundColor: "#faf8f5",
            borderRadius: "14px",
            border: "1px solid rgba(107,21,14,0.1)",
          }}
        >
          <div className="flex items-baseline gap-3">
            <span
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontWeight: 900,
                color: T.textPrimary,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              €67
            </span>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: T.textSecondary,
                letterSpacing: "0.02em",
              }}
            >
              за всички 12 дни
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <EnrollForm product="masterclass" />
        </div>

        {/* Trust strip */}
        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          style={{ fontSize: "12px", color: T.textSecondary, fontWeight: 600 }}
        >
          {[
            "Сигурна транзакция",
            "30-дневна гаранция",
            "Потвърждение веднага",
          ].map((label) => (
            <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#70150E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
