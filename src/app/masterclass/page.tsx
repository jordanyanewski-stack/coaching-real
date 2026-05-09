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
    "Никой не те е научил на това. Научиха те само да лекуваш. 12 дни на трансформация — системата зад успешната онлайн терапевтична практика. 18-29 май 2026 · €67 (вместо €197).",
};

/* ─── DATA ──────────────────────────────────────────────────────────── */
const painPoints = [
  "Виждам те. Работиш толкова много и се питаш защо не се движи.",
  "Имаш мисия. Нямаш система. И двете са нужни — само едната не работи.",
  "Продаваш времето си. Час след час. Без таван. Без изход.",
  "Публикуваш. Консултираш. Даваш от себе си. И пак си невидима за правилните хора.",
  "Идеята за курс или програма стои в главата от месеци — без ясен план кога и как.",
  "Усещаш, че другите знаят нещо, което ти не знаеш. Знаят. Но не е тайна — никой просто не те е научил.",
];

const curriculum = [
  { day: "Ден 1",  date: "18 Май", title: "Новият онлайн свят през 2026",       outcome: "Ще знаеш кои 3 неща в бизнеса ти те ощетяват в момента." },
  { day: "Ден 2",  date: "19 Май", title: "Твоята автентична визия",            outcome: "Ще знаеш точно как да говориш за работата си без извинения." },
  { day: "Ден 3",  date: "20 Май", title: "Изчистване на хаоса",                outcome: "Ще спреш да правиш всичко и ще знаеш точно кое движи бизнеса ти." },
  { day: "Ден 4",  date: "21 Май", title: "Идеалният клиент в дълбочина",       outcome: "Профил толкова конкретен, че следващият пост ще пише сам себе си." },
  { day: "Ден 5",  date: "22 Май", title: "Идеята за твоя онлайн курс",         outcome: "Идеята излиза от главата на хартия — оформена, оценена, готова." },
  { day: "Ден 6",  date: "23 Май", title: "Позициониране без натиск",           outcome: "Ще знаеш как да се откроиш без да се сравняваш с другите." },
  { day: "Ден 7",  date: "24 Май", title: "Продавай стойност, не време",        outcome: "Ще имаш модел, при който доходът не зависи от броя часове." },
  { day: "Ден 8",  date: "25 Май", title: "Оферти, които конвертират",          outcome: "Оферта оценена, позиционирана, готова за публикуване." },
  { day: "Ден 9",  date: "26 Май", title: "AI стратегии за твоя бизнес",        outcome: "Конкретни инструменти, спестяващи часове маркетинг всяка седмица." },
  { day: "Ден 10", date: "27 Май", title: "Бизнес инерция",                     outcome: "Ще знаеш как да поддържаш движение без бърнаут." },
  { day: "Ден 11", date: "28 Май", title: "Вътрешни блокажи",                   outcome: "Страхът и синдромът на измамника спират да вземат решения вместо теб." },
  { day: "Ден 12", date: "29 Май", title: "Планът за 2026",                     outcome: "Конкретен план за 90 дни — не вдъхновение. Документ." },
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
      <PainRecognitionSection />
      <AboutSection />
      <CurriculumSection />
      <ValueStackSection />
      <GuaranteeSection />
      <TestimonialsSection />
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
        <div>
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

          <h1
            className="animate-fade-up delay-100 mt-5"
            style={{ lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: "560px" }}
          >
            <span
              className="block"
              style={{
                fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
                fontWeight: 900,
                color: T.textPrimary,
              }}
            >
              Никой не те е научил на това.
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)",
                fontWeight: 800,
                background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginTop: "6px",
              }}
            >
              Научиха те само да лекуваш.
            </span>
          </h1>

          {/* Subheadline - benefit-clear, audience-named */}
          <p
            className="animate-fade-up delay-150 mt-4"
            style={{
              fontSize: "17px",
              color: T.textPrimary,
              lineHeight: 1.5,
              maxWidth: "560px",
              fontWeight: 600,
              letterSpacing: "-0.005em",
            }}
          >
            12 живи мастъркласа за{" "}
            <span style={{ color: "#70150E" }}>терапевти, коучове и холистични специалисти</span>
            {" "}— от хаос към система за 12 вечери.
          </p>

          <p
            className="animate-fade-up delay-200 mt-5"
            style={{
              fontSize: "15px",
              color: T.textSecondary,
              lineHeight: 1.65,
              maxWidth: "520px",
            }}
          >
            Събуждаш се с пълен календар. И пак се питаш дали ще се наредят сметките
            ти за този месец. Сесия след сесия. Час след час. Изтощение след изтощение.{" "}
            <strong style={{ color: T.textPrimary, fontWeight: 700 }}>
              Това не е духовност. Това е оцеляване.
            </strong>
          </p>

          {/* Price anchor */}
          <div
            className="animate-fade-up delay-250 mt-6 inline-flex items-baseline gap-3 px-4 py-2"
            style={{
              backgroundColor: "rgba(107,21,14,0.06)",
              borderRadius: "10px",
              border: "1px solid rgba(107,21,14,0.14)",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: T.textSecondary,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Само днес
            </span>
            <span
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: T.textSecondary,
                textDecoration: "line-through",
                textDecorationColor: "rgba(0,0,0,0.35)",
                lineHeight: 1,
              }}
            >
              €197
            </span>
            <span
              style={{
                fontSize: "32px",
                fontWeight: 900,
                background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              €67
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#70150E",
                backgroundColor: "rgba(232,80,80,0.15)",
                padding: "3px 8px",
                borderRadius: "6px",
                letterSpacing: "0.04em",
              }}
            >
              -66%
            </span>
          </div>

          {/* CTA + countdown */}
          <div className="animate-fade-up delay-300 mt-5 flex flex-wrap items-center gap-5">
            <a
              href="#enroll"
              className="mv-btn mv-btn-primary"
              style={{
                fontSize: "16px",
                padding: "16px 32px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                flexShrink: 0,
              }}
            >
              Искам да спра да оцелявам            </a>
            <CountdownTimer compact />
          </div>

          <p
            className="animate-fade-up delay-300 mt-4"
            style={{ fontSize: "12px", color: T.textSecondary, fontWeight: 600 }}
          >
            Сигурна транзакция · Потвърждение веднага · 30-дневна гаранция
          </p>
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

/* ─── PAIN RECOGNITION ──────────────────────────────────────────────── */
function PainRecognitionSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">Разпознаваш ли се</span>
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
            Виждам те.{" "}
            <span style={{ ...GRADIENT_TEXT }}>
              Работиш толкова много и се питаш защо не се движи.
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {painPoints.slice(1).map((item, i) => (
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

        <div className="mt-10 text-center">
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
            Всичко,{" "}
            <span style={{ ...GRADIENT_TEXT }}>което получаваш</span>
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
                €67
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{
              fontSize: "16px",
              padding: "16px 40px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Искам да спра да оцелявам          </a>
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
            style={{
              fontSize: "16px",
              padding: "16px 44px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Искам да спра да оцелявам          </a>
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
            Работя с жени в трансформиращите професии от 11 години. Виждала
            съм стотици терапевти, коучове и лечители отвътре и знам точно
            кога и как се обръща.
          </p>

          <p className="mt-4" style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.85 }}>
            Мисията ми е проста: да покажа, че духовността и бизнесът не се
            изключват. Когато ги съчетаеш с правилната структура, резултатите
            идват естествено.
          </p>
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
          Краят на{" "}
          <span style={{ ...GRADIENT_TEXT }}>оцеляването.</span>
        </h2>

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
              €197
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
              €67
            </span>
          </div>
          <CountdownTimer />
        </div>

        <div className="flex flex-col items-center gap-4">
          <EnrollForm />
          <p style={{ fontSize: "12px", color: T.textSecondary, fontWeight: 600 }}>
            Сигурна транзакция · Потвърждение веднага
          </p>
        </div>
      </div>
    </section>
  );
}
