import Image from "next/image";
import { T, onDark, PHOTO_URL, GRADIENT_TEXT, LOGO_URL, SiteFooter } from "@/app/_shared";
import { FAQAccordion } from "./faq-accordion";
import { ScrollReveal } from "./scroll-reveal";
import { EnrollForm } from "./enroll-form";
import { HeroVideo } from "./hero-video";
import { CountdownTimer } from "./countdown-timer";
import { StickyCTABar } from "./sticky-cta-bar";

export const metadata = {
  title: "Краят на оцеляването · 12 дни Мастъркласове® | Coaching Real",
  description:
    "Никой не те е научил на това. Научиха те само да лекуваш. 12 дни на трансформация — системата зад успешната онлайн терапевтична практика. 18-29 май 2026 · €34 (€67 след 14 май).",
};

/* ─── DATA ──────────────────────────────────────────────────────────── */
const audienceWants = [
  "да структурират своя онлайн бизнес",
  "да намерят идеалния си клиент",
  "да създадат първия си онлайн курс или програма",
  "да скалират със спокойствие, яснота и подкрепа",
  "да използват силата на AI в бизнеса си",
  "да спрат хаоса и да започнат да действат системно",
];

const whatYouGetBullets = [
  "освободиш менталния шум",
  "видиш какво работи и какво не",
  "усетиш увереност за следващите 12 месеца",
  "подготвиш основите за своя онлайн курс или програма",
  "изградиш стабилност в бизнеса си",
];

const whyNowChallenges = [
  "клиентското поведение се променя",
  "хората купуват по-различно",
  "доверието се изгражда по-бавно",
  "конкуренцията вече не е в обема, а в качеството",
  "интуитивното публикуване и „ще видим каквото стане“ вече не работи",
];

const whyNowConstants = [
  "Твоята експертиза",
  "Желанието ти да помагаш",
  "Способността ти да водиш хора",
  "Мечтата ти за стабилен, структуриран онлайн бизнес",
];

const forWhomChecklist = [
  "имат експертиза, но усещат застой",
  "искат да я превърнат в стабилен и структуриран доход",
  "искат да създадат своя първи онлайн курс или програма",
  "или искат да скалират вече съществуваща оферта",
  "усещат, че хаосът им пречи да действат",
  "липсва им структура, посока и система",
  "искат да започнат с яснота и план",
  "искат да използват AI, за да облекчат и ускорят бизнеса си",
];

const forWhomFinds = [
  "яснота",
  "посока",
  "структура",
  "подкрепа",
  "инерция",
  "спокойствие",
];

const whatMakesDifferent = [
  "дълбочина без усложнение",
  "яснота без натиск",
  "практичност без претоварване",
  "структура, която създава инерция",
  "подкрепа, която отключва решения",
];

const whatYouGetChecklist = [
  "Ще подредиш бизнеса си",
  "Ще откриеш идеалния си клиент",
  "Ще намериш идеята за първия си онлайн курс",
  "Ще изградиш бизнес структура",
  "Ще създадеш увереност в продажбите",
  "Ще използваш AI за скалиране",
  "Ще създадеш инерция с ежедневни стъпки",
];

const whyWomenCome = [
  "получават яснота",
  "чувстват се видени",
  "взимат решения",
  "виждат резултати",
  "намират пространство",
  "действат по-лесно",
];

const curriculum = [
  { day: "Ден 1",  date: "18 Май", title: "Новият онлайн свят",                  outcome: "Какво работи, какво не работи и какво създава реални резултати." },
  { day: "Ден 2",  date: "19 Май", title: "Твоята автентична визия",            outcome: "Възстановяване на връзката с мисията, смелостта и посоката." },
  { day: "Ден 3",  date: "20 Май", title: "Изчистване на хаоса в бизнеса",      outcome: "Как да подредиш всичко, което те претоварва." },
  { day: "Ден 4",  date: "21 Май", title: "Идеалният клиент: кой е и как да го откриеш", outcome: "С истинска дълбочина, не с повърхностни упражнения." },
  { day: "Ден 5",  date: "22 Май", title: "Идеята за твоя онлайн курс / програма", outcome: "Формула за откриване на печеливша тема." },
  { day: "Ден 6",  date: "23 Май", title: "Позициониране без натиск",           outcome: "Как да бъдеш лидер, не „още един профил“." },
  { day: "Ден 7",  date: "24 Май", title: "Да продаваш стойността си (не времето си)", outcome: "Модел за жени в мисия." },
  { day: "Ден 8",  date: "25 Май", title: "Как да създаваш оферти, които се продават", outcome: "Във всяка икономика." },
  { day: "Ден 9",  date: "26 Май", title: "AI стратегии за по-лек и скалиращ бизнес", outcome: "Как да спестиш време и да увеличиш резултатите." },
  { day: "Ден 10", date: "27 Май", title: "Бизнес инерция: малки стъпки → големи резултати", outcome: "Как да се движиш напред без претоварване." },
  { day: "Ден 11", date: "28 Май", title: "Вътрешните блокажи, които спират растежа", outcome: "И как да ги трансформираш завинаги." },
  { day: "Ден 12", date: "29 Май", title: "Планът за успех",                    outcome: "Готова рамка, която можеш да следваш веднага." },
];

const valueStack = [
  { label: "12 живи мастъркласа с Станислава", price: "€197" },
  { label: "Записи на всичките 12 сесии",       price: "€97"  },
  { label: "AI prompt библиотека за бизнеса",   price: "€47"  },
  { label: "KickSTART система за работа",       price: "€500" },
  { label: "Затворена група за събитието",      price: "€50"  },
];

const faqs = [
  {
    q: "Ще има ли запис?",
    a: "Записите са включени в пакета. Но препоръчвам присъствие на живо — там се случва истинската трансформация.",
  },
  {
    q: "Подходящо ли е, ако съм начинаеща?",
    a: "Да. Програмата работи и за стартиращи, и за жени с вече изграден бизнес, които искат да скалират.",
  },
  {
    q: "Колко ще ми отнема на ден?",
    a: "90 минути вечер от 19:00 до 20:30 ч. Плюс кратка задача след всяка сесия.",
  },
  {
    q: "Какво ако имам въпрос по време на програмата?",
    a: "Всяка сесия включва пространство за въпроси. Освен това имаш достъп до затворена група след събитието.",
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
        Запиши се
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
      <VSLSection />
      <ShortAudienceSection />
      <WhatYouGetForPriceSection />
      <WhyNowSection />
      <ForWhomDetailedSection />
      <WhatMakesItDifferentSection />
      <WhatYouGetChecklistSection />
      <CurriculumSection />
      <WhyWomenComeSection />
      <ValueStackSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <AboutSection />
      <FinalCTASection />
      <FAQSection />
      <SiteFooter />
      <StickyCTABar />
    </div>
  );
}

/* ─── VSL ───────────────────────────────────────────────────────────── */
function VSLSection() {
  // Swap VSL_VIDEO_ID with the actual YouTube video ID when the video is ready
  const VSL_VIDEO_ID = "REPLACE_WITH_VIDEO_ID";
  if (VSL_VIDEO_ID === "REPLACE_WITH_VIDEO_ID") return null;

  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-16 md:py-20"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="mv-tag mv-tag-light">Лично послание от Станислава</span>
        </div>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 12px 48px rgba(107,21,14,0.12)",
            border: "1px solid rgba(107,21,14,0.1)",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${VSL_VIDEO_ID}?rel=0&modestbranding=1`}
            title="Лично послание от Станислава Павлова"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ──────────────────────────────────────────────────── */
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
            Искам да спра да оцелявам          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── HERO ───────────────────────────────────────────────────────────── */
// Bunny Stream library ID (numeric) and video ID (UUID).
// Once uploaded to Bunny, set both. Until then the photo shows.
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
        {/* Orb top-right */}
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
        {/* Orb bottom-left */}
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
        {/* Orb center */}
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
        {/* Dot grid */}
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
              <strong style={{ color: T.textPrimary, fontWeight: 800 }}>200+</strong>{" "}
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
              12 ИЗМЕРЕНИЯ НА ТВОЯТА МИСИЯ — 12 ДНИ МАСТЪРКЛАСОВЕ®
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
              maxWidth: "580px",
              margin: "12px 0 0",
            }}
          >
            Пренареди{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              своя онлайн бизнес
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-up delay-150 mt-5"
            style={{
              fontSize: "17px",
              color: T.textSecondary,
              lineHeight: 1.55,
              maxWidth: "560px",
              fontWeight: 500,
            }}
          >
            Създай{" "}
            <strong style={{ color: T.textPrimary, fontWeight: 700 }}>
              яснота, посока и план за растеж
            </strong>
            <span style={{ whiteSpace: "nowrap" }}>
              {" "}— само за{" "}
              <strong style={{ color: "#70150E", fontWeight: 800 }}>€34</strong>
            </span>
          </p>

          {/* Unified pricing card — price + countdown together */}
          <div
            className="animate-fade-up delay-250 mt-7 mc-pricing-card"
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: "18px",
              padding: "22px 26px",
              background:
                "linear-gradient(135deg, #ffffff 0%, #fdf6ee 100%)",
              borderRadius: "18px",
              border: "1px solid rgba(107,21,14,0.16)",
              boxShadow:
                "0 12px 40px rgba(107,21,14,0.10), 0 1px 2px rgba(0,0,0,0.04)",
              maxWidth: "100%",
            }}
          >
            {/* Tier badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#c94535",
                  flexShrink: 0,
                  boxShadow: "0 0 0 3px rgba(201,69,53,0.20)",
                  animation: "stickyDotPulse 1.6s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#70150E",
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                }}
              >
                Ранна цена · изтича на 14 май
              </span>
            </div>

            {/* Price row */}
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
                  background:
                    "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                €34
              </span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: T.textSecondary,
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(0,0,0,0.35)",
                  lineHeight: 1,
                }}
              >
                €67
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#70150E",
                  backgroundColor: "rgba(232,80,80,0.16)",
                  padding: "4px 9px",
                  borderRadius: "6px",
                  letterSpacing: "0.04em",
                  alignSelf: "center",
                }}
              >
                Спести €33
              </span>
            </div>

            {/* Divider + countdown */}
            <div
              style={{
                paddingTop: "16px",
                borderTop: "1px dashed rgba(107,21,14,0.20)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: T.textSecondary,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Цената скача след
              </span>
              <CountdownTimer bare />
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
                boxShadow:
                  "0 12px 32px rgba(107,21,14,0.30), 0 1px 2px rgba(0,0,0,0.04)",
              }}
            >
              Искам да спра да оцелявам
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Trust strip with checkmark icons */}
          <div
            className="animate-fade-up delay-300 mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2"
            style={{ fontSize: "12px", color: T.textSecondary, fontWeight: 600 }}
          >
            {[
              "Сигурна транзакция",
              "Потвърждение веднага",
              "30-дневна гаранция",
            ].map((label) => (
              <span
                key={label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#70150E"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right - video (or photo fallback until HERO_VIDEO is set) */}
        <div className="mc-hero-visual animate-fade-in delay-200 flex flex-col items-center justify-center gap-4 order-first lg:order-none">
          {HERO_VIDEO.libraryId && HERO_VIDEO.videoId ? (
            <div style={{ width: "100%", maxWidth: "500px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
              {/* Pulse cue above the video */}
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

      {/* Scroll prompt - desktop only */}
      <div
        aria-hidden
        className="mc-scroll-prompt hidden md:flex"
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.45,
        }}
      >
        <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#70150E" }}>
          Скролни надолу
        </span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
          <svg
            className="mc-scroll-chevron"
            width="16" height="10" viewBox="0 0 16 10" fill="none"
            stroke="#70150E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M1 1l7 7 7-7" />
          </svg>
          <svg
            className="mc-scroll-chevron mc-scroll-chevron-2"
            width="16" height="10" viewBox="0 0 16 10" fill="none"
            stroke="#70150E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M1 1l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ─── SHORT AUDIENCE — replaces pain recognition ────────────────────── */
function ShortAudienceSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">За кого е</span>
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
            За жени предприемачи и практици,{" "}
            <span style={{ ...GRADIENT_TEXT }}>които искат:</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {audienceWants.map((item, i) => (
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
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                  marginTop: "10px",
                  boxShadow: "0 0 0 3px rgba(201,69,53,0.18)",
                }}
              />
              <p style={{ fontSize: "15px", color: T.textPrimary, lineHeight: 1.75, fontWeight: 500 }}>
                {item}
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
          }}
        >
          Това са 12 дни за:{" "}
          <span style={{ ...GRADIENT_TEXT }}>
            посока → яснота → структура → инерция → растеж
          </span>
        </p>

        <div className="mt-8 text-center">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "15px", padding: "16px 28px" }}
          >
            ЗАПИСВАМ СЕ ЗА 12-ДНЕВНИТЕ МАСТЪРКЛАСОВЕ (€34)
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── WHAT YOU GET FOR €34 ──────────────────────────────────────────── */
function WhatYouGetForPriceSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="mv-tag mv-tag-light">Само €34</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Само <span style={{ ...GRADIENT_TEXT }}>€34</span> за 12 дни дълбока работа по твоя бизнес
          </h2>
          <p
            className="mt-5"
            style={{
              fontSize: "17px",
              color: T.textSecondary,
              lineHeight: 1.6,
              fontWeight: 600,
            }}
          >
            🎁 Стойност над <strong style={{ color: T.textPrimary }}>€891</strong> — натрупана яснота, структура и посока
          </p>
        </div>

        <p
          className="mb-6 text-center"
          style={{ fontSize: "16px", color: T.textPrimary, fontWeight: 600 }}
        >
          12 последователни мастъркласа, в които ще:
        </p>

        <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {whatYouGetBullets.map((item) => (
            <li
              key={item}
              className="flex gap-3 items-start p-4"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                border: "1px solid rgba(107,21,14,0.08)",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2px",
                }}
              >
                <IconCheck dark />
              </span>
              <p style={{ fontSize: "15px", color: T.textPrimary, lineHeight: 1.6, fontWeight: 500 }}>
                {item}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "15px", padding: "16px 28px" }}
          >
            ДА, ИСКАМ ДОСТЪП ДО ВСИЧКИ 12 МАСТЪРКЛАСА (€34)
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── WHY NOW ───────────────────────────────────────────────────────── */
function WhyNowSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="mv-tag mv-tag-light">Защо точно сега</span>
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
            Защо точно сега е{" "}
            <span style={{ ...GRADIENT_TEXT }}>моментът да действаш</span>
          </h2>
        </div>

        <p
          className="mb-8"
          style={{
            fontSize: "16px",
            color: T.textSecondary,
            lineHeight: 1.75,
            textAlign: "center",
          }}
        >
          Ако усещаш, че онлайн пространството се променя — права си.
          <br />
          <strong style={{ color: T.textPrimary }}>
            Това е моментът на разделение
          </strong>{" "}
          между тези, които{" "}
          <span style={{ color: "#c94535", fontWeight: 700 }}>
            👉 реагират на хаоса
          </span>
          , и тези, които{" "}
          <span style={{ color: "#70150E", fontWeight: 700 }}>
            👉 създават яснота, структура и посока.
          </span>
        </p>

        {/* Истината */}
        <div
          className="p-6 mb-6"
          style={{
            backgroundColor: T.surfaceStrong,
            borderRadius: "14px",
            border: "1px solid rgba(107,21,14,0.10)",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 800,
              color: "#70150E",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Истината е:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {whyNowChallenges.map((item) => (
              <li
                key={item}
                style={{
                  fontSize: "15px",
                  color: T.textPrimary,
                  lineHeight: 1.65,
                  fontWeight: 500,
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#c94535",
                    marginTop: "9px",
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Но има нещо */}
        <div
          className="p-6"
          style={{
            background: "linear-gradient(135deg, #fff7f4 0%, #faf3e8 100%)",
            borderRadius: "14px",
            border: "1px solid rgba(107,21,14,0.16)",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 800,
              color: "#70150E",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Но има нещо, което не се е променило:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
            {whyNowConstants.map((item) => (
              <li
                key={item}
                style={{
                  fontSize: "16px",
                  color: T.textPrimary,
                  lineHeight: 1.55,
                  fontWeight: 600,
                }}
              >
                ✨ {item}
              </li>
            ))}
          </ul>
        </div>

        <p
          className="mt-8 text-center"
          style={{
            fontSize: "17px",
            color: T.textPrimary,
            lineHeight: 1.6,
            fontWeight: 600,
          }}
        >
          Сега не е момент за „повече“, а за{" "}
          <span style={{ ...GRADIENT_TEXT }}>по-добре:</span>
          <br />
          <span style={{ fontSize: "15px", fontWeight: 500, color: T.textSecondary }}>
            по-добра структура, по-добро позициониране, по-добра оферта, по-добра стратегия.
          </span>
        </p>

        <p
          className="mt-6 text-center"
          style={{ fontSize: "15px", color: T.textSecondary, lineHeight: 1.7 }}
        >
          Точно затова създадох{" "}
          <strong style={{ color: T.textPrimary }}>
            12-те дни Мастъркласове® за €34
          </strong>{" "}
          — пространство, в което да се подготвиш, да се подредиш вътрешно и да започнеш с увереност и фокус.
        </p>

        <div className="mt-10 text-center">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "15px", padding: "16px 28px" }}
          >
            ГОТОВА СЪМ ДА ВЛЯЗА В 12-ТЕ МАСТЪРКЛАСА (€34)
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── FOR WHOM (DETAILED) ───────────────────────────────────────────── */
function ForWhomDetailedSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="mv-tag mv-tag-light">За кого</span>
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
            За кого са тези{" "}
            <span style={{ ...GRADIENT_TEXT }}>12 дни Мастъркласове®</span>
          </h2>
        </div>

        <p
          className="mb-8"
          style={{
            fontSize: "16px",
            color: T.textSecondary,
            lineHeight: 1.75,
            textAlign: "center",
          }}
        >
          Този формат е създаден специално за{" "}
          <strong style={{ color: T.textPrimary }}>жени</strong>, които работят в помощни и трансформиращи професии:{" "}
          <em style={{ color: T.textPrimary }}>
            терапевти, коучове, констелатори, нутриционисти, психолози, НЛП практици, астролози, родолози, консултанти
          </em>{" "}
          и жени предприемачи, които искат да изградят или развият своя онлайн бизнес.
        </p>

        <p
          className="mb-4"
          style={{ fontSize: "16px", color: T.textPrimary, fontWeight: 700 }}
        >
          Ако си една от жените, които:
        </p>

        <ul className="flex flex-col gap-2 mb-10" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {forWhomChecklist.map((item) => (
            <li
              key={item}
              className="flex gap-3 items-start p-3"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                border: "1px solid rgba(107,21,14,0.06)",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  marginTop: "3px",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#70150E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <p style={{ fontSize: "15px", color: T.textPrimary, lineHeight: 1.6 }}>{item}</p>
            </li>
          ))}
        </ul>

        <p
          className="text-center mb-8"
          style={{ fontSize: "17px", color: T.textPrimary, fontWeight: 700 }}
        >
          …тогава тези 12 дни са{" "}
          <span style={{ ...GRADIENT_TEXT }}>перфектното пространство за теб.</span>
        </p>

        <div
          className="p-6"
          style={{
            background: "linear-gradient(135deg, #fff7f4 0%, #faf3e8 100%)",
            borderRadius: "14px",
            border: "1px solid rgba(107,21,14,0.16)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 800,
              color: "#70150E",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Тук ще намериш:
          </p>
          <div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            style={{ fontSize: "16px", fontWeight: 600, color: T.textPrimary }}
          >
            {forWhomFinds.map((item) => (
              <span key={item}>✨ {item}</span>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "15px", padding: "16px 28px" }}
          >
            ДА, ТОВА Е ЗА МЕН — ЗАПИСВАМ СЕ (€34)
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── WHAT MAKES IT DIFFERENT ───────────────────────────────────────── */
function WhatMakesItDifferentSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="mv-tag mv-tag-light">Различното</span>
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
            Какво прави тези 12 дни{" "}
            <span style={{ ...GRADIENT_TEXT }}>толкова различни</span>{" "}
            — и толкова нужни точно сега
          </h2>
        </div>

        <p
          className="mb-3 text-center"
          style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.7 }}
        >
          Повечето онлайн обучения претоварват. Бързат. Обещават трансформация, но дават хаос.
        </p>

        <p
          className="mb-10 text-center"
          style={{ fontSize: "17px", color: T.textPrimary, lineHeight: 1.6, fontWeight: 600 }}
        >
          Тези 12 дни са създадени различно — не като „още информация“, а като{" "}
          <span style={{ ...GRADIENT_TEXT }}>структурирано пространство за яснота и развитие.</span>
        </p>

        <div
          className="p-6"
          style={{
            backgroundColor: T.surfaceStrong,
            borderRadius: "14px",
            border: "1px solid rgba(107,21,14,0.10)",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 800,
              color: "#70150E",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Това, което прави този формат уникален:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {whatMakesDifferent.map((item) => (
              <li
                key={item}
                style={{
                  fontSize: "16px",
                  color: T.textPrimary,
                  lineHeight: 1.55,
                  fontWeight: 600,
                }}
              >
                ✨ {item}
              </li>
            ))}
          </ul>
        </div>

        <p
          className="mt-8 text-center"
          style={{ fontSize: "17px", color: T.textPrimary, lineHeight: 1.55, fontWeight: 700 }}
        >
          Това не са просто 12 дни — това е{" "}
          <span style={{ ...GRADIENT_TEXT }}>място, което създава яснота, движение и увереност.</span>
        </p>

        <div className="mt-10 text-center">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "15px", padding: "16px 28px" }}
          >
            ИСКАМ ДА СЕ ПРИСЪЕДИНЯ (€34)
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── WHAT YOU'LL GET — CHECKLIST ───────────────────────────────────── */
function WhatYouGetChecklistSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="mv-tag mv-tag-light">Какво получаваш</span>
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
            Какво ще получиш в{" "}
            <span style={{ ...GRADIENT_TEXT }}>тези 12 дни</span>
          </h2>
        </div>

        <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {whatYouGetChecklist.map((item) => (
            <li
              key={item}
              className="flex gap-3 items-start p-4"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                border: "1px solid rgba(107,21,14,0.08)",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2px",
                }}
              >
                <IconCheck dark />
              </span>
              <p style={{ fontSize: "15px", color: T.textPrimary, lineHeight: 1.6, fontWeight: 500 }}>
                {item}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "15px", padding: "16px 28px" }}
          >
            ПРИСЪЕДИНЯВАМ СЕ (€34)
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── WHY WOMEN COME ────────────────────────────────────────────────── */
function WhyWomenComeSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="mv-tag mv-tag-light">Защо точно тук</span>
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
            Защо жените{" "}
            <span style={{ ...GRADIENT_TEXT }}>идват точно тук</span>
          </h2>
        </div>

        <div
          className="p-8"
          style={{
            background: "linear-gradient(135deg, #fff7f4 0%, #faf3e8 100%)",
            borderRadius: "16px",
            border: "1px solid rgba(107,21,14,0.16)",
          }}
        >
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            {whyWomenCome.map((item) => (
              <li
                key={item}
                style={{
                  fontSize: "17px",
                  color: T.textPrimary,
                  fontWeight: 600,
                  lineHeight: 1.4,
                  textAlign: "center",
                }}
              >
                ✨ {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "15px", padding: "16px 28px" }}
          >
            ИСКАМ ДА БЪДА ЧАСТ (€34)
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
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
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
            Стойността, която получаваш за €34, е{" "}
            <span style={{ ...GRADIENT_TEXT }}>многократно по-голяма</span>
          </h2>
        </div>

        <div
          className="p-6 md:p-8"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            border: "1px solid rgba(107,21,14,0.1)",
            boxShadow: "0 4px 24px rgba(107,21,14,0.06)",
          }}
        >
          <ul className="flex flex-col" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {valueStack.map(({ label, price }, i) => (
              <li
                key={label}
                className="flex items-center justify-between gap-4 py-4"
                style={{
                  borderBottom: i < valueStack.length - 1 ? "1px solid rgba(107,21,14,0.08)" : "none",
                }}
              >
                <div className="flex items-start gap-3">
                  <span
                    style={{
                      flexShrink: 0,
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2px",
                    }}
                  >
                    <IconCheck dark />
                  </span>
                  <span style={{ fontSize: "15px", color: T.textPrimary, lineHeight: 1.5, fontWeight: 600 }}>
                    {label}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: T.textSecondary,
                    flexShrink: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {price}
                </span>
              </li>
            ))}
          </ul>

          <div
            className="mt-6 pt-6 flex flex-wrap items-end justify-between gap-4"
            style={{ borderTop: "2px solid rgba(107,21,14,0.12)" }}
          >
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "rgba(0,0,0,0.32)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                Обща стойност
              </p>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: T.textSecondary,
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(0,0,0,0.3)",
                }}
              >
                €891
              </span>
            </div>
            <div className="text-right">
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  ...GRADIENT_TEXT,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                Днес получаваш всичко за
              </p>
              <span
                style={{
                  fontSize: "clamp(2.4rem, 4.5vw, 3rem)",
                  fontWeight: 900,
                  ...GRADIENT_TEXT,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                €34
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "15px", padding: "16px 28px" }}
          >
            ДА, ИСКАМ ДОСТЪП (€34)
          </a>
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
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <div
          className="flex flex-col items-center text-center gap-5 px-6 md:px-12 py-12 md:py-14"
          style={{
            background: "linear-gradient(135deg, #fff7f4 0%, #faf3e8 100%)",
            borderRadius: "20px",
            border: "1px solid rgba(107,21,14,0.14)",
            boxShadow: "0 4px 32px rgba(107,21,14,0.08)",
          }}
        >
          <span
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 8px 20px rgba(107,21,14,0.18)",
            }}
            aria-hidden
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </span>

          <span className="mv-tag mv-tag-light">Гаранция за задоволеност</span>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: "560px",
            }}
          >
            Ако след първите 3 дни усетиш, че програмата не е за теб —{" "}
            <span style={{ ...GRADIENT_TEXT }}>връщам парите изцяло.</span>
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: T.textSecondary,
              lineHeight: 1.8,
              maxWidth: "520px",
            }}
          >
            Без въпроси. Защото вярвам в работата си.
          </p>
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
      <div className="reveal relative max-w-6xl mx-auto">
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
            12 дни. 12 обещания.{" "}
            <span style={{ ...GRADIENT_TEXT }}>Едно ново начало.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              transform: "translateX(-50%)",
              background: "linear-gradient(180deg, transparent 0%, #c94535 8%, #c94535 92%, transparent 100%)",
              opacity: 0.25,
            }}
          />

          <div className="flex flex-col gap-8">
            {curriculum.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="relative grid"
                  style={{ gridTemplateColumns: "1fr 40px 1fr", alignItems: "center", gap: "0" }}
                >
                  {/* Left slot */}
                  <div style={{ paddingRight: "28px", display: "flex", justifyContent: "flex-end" }}>
                    {isLeft && (
                      <div
                        className="p-5 w-full"
                        style={{
                          backgroundColor: "#ffffff",
                          borderRadius: "12px",
                          border: "1px solid rgba(107,21,14,0.08)",
                          boxShadow: "0 2px 12px rgba(107,21,14,0.05)",
                          maxWidth: "320px",
                        }}
                      >
                        <p style={{ fontSize: "10px", fontWeight: 700, color: "#c94535", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                          {item.day} · {item.date}
                        </p>
                        <h3 style={{ fontSize: "15px", fontWeight: 700, color: T.textPrimary, letterSpacing: "-0.01em", marginBottom: "6px" }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: "12px", color: T.textSecondary, lineHeight: 1.65 }}>{item.outcome}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 1 }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 0 0 4px #faf8f5, 0 0 0 5px rgba(201,69,53,0.2)",
                      }}
                    >
                      <span style={{ fontSize: "11px", fontWeight: 900, color: "#ffffff", lineHeight: 1 }}>
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Right slot */}
                  <div style={{ paddingLeft: "28px" }}>
                    {!isLeft && (
                      <div
                        className="p-5"
                        style={{
                          backgroundColor: "#ffffff",
                          borderRadius: "12px",
                          border: "1px solid rgba(107,21,14,0.08)",
                          boxShadow: "0 2px 12px rgba(107,21,14,0.05)",
                          maxWidth: "320px",
                        }}
                      >
                        <p style={{ fontSize: "10px", fontWeight: 700, color: "#c94535", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                          {item.day} · {item.date}
                        </p>
                        <h3 style={{ fontSize: "15px", fontWeight: 700, color: T.textPrimary, letterSpacing: "-0.01em", marginBottom: "6px" }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: "12px", color: T.textSecondary, lineHeight: 1.65 }}>{item.outcome}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-14">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "15px", padding: "16px 28px" }}
          >
            ОБИЧАМ ТЕЗИ ТЕМИ — ВКЛЮЧИ МЕ (€34)
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
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-6xl mx-auto">
        {/* Tag - above image on all screens */}
        <div className="mb-5">
          <span className="mv-tag mv-tag-light">За мен</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="relative" style={{ height: "340px" }}>
          <div
            className="h-full w-full overflow-hidden"
            style={{ position: "relative", borderRadius: "14px", border: "1px solid rgba(107,21,14,0.1)", boxShadow: "0 8px 32px rgba(107,21,14,0.07)" }}
          >
            <Image
              src={PHOTO_URL}
              alt="Станислава Павлова - бизнес ментор и стратег"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <h2
            className="mt-0"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.1,
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
            Бизнес ментор · Стратег · Създател на KickSTART
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["11 години опит", "CPD UK акредитация", "Noble Manhattan UK"].map((badge) => (
              <span
                key={badge}
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#70150E",
                  backgroundColor: "rgba(107,21,14,0.06)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  border: "1px solid rgba(107,21,14,0.12)",
                  letterSpacing: "0.02em",
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="mt-6" style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.85 }}>
            Аз съм{" "}
            <strong style={{ color: T.textPrimary }}>Станислава Павлова</strong>
            , бизнес ментор и стратег, и помагам на жени в професии като
            психолози, коучове, терапевти и още да изградят, структурират и
            скалират своя онлайн бизнес с яснота, женска енергия и стабилност.
          </p>

          <p className="mt-4" style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.85 }}>
            Мисията ми е проста: да покажа, че духовността и бизнесът не се
            изключват. Когато ги съчетаеш с правилната структура, резултатите
            идват естествено.
          </p>

          <div className="mt-8">
            <a
              href="#enroll"
              className="mv-btn mv-btn-primary"
              style={{ fontSize: "15px", padding: "16px 28px" }}
            >
              ГОТОВА СЪМ ДА СЕ ПРИСЪЕДИНЯ (€34)
            </a>
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
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Имаш въпрос?{" "}
            <span style={{ ...GRADIENT_TEXT }}>Ето честните отговори.</span>
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
          Твоят нов бизнес цикъл{" "}
          <span style={{ ...GRADIENT_TEXT }}>започва тук.</span>
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
          12 дни. 12 теми.{" "}
          <strong style={{ color: T.textPrimary }}>
            12 стъпки, които ще те подредят отвътре навън.
          </strong>
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
                fontSize: "18px",
                fontWeight: 600,
                color: T.textSecondary,
                textDecoration: "line-through",
                textDecorationColor: "rgba(0,0,0,0.25)",
              }}
            >
              €67
            </span>
            <span
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontWeight: 900,
                color: T.textPrimary,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              €34
            </span>
          </div>
          <CountdownTimer />
        </div>

        <div className="flex flex-col items-center gap-4">
          <EnrollForm />
        </div>
      </div>
    </section>
  );
}
