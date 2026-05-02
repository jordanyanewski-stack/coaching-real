import Image from "next/image";
import { T, onDark, PHOTO_URL, GRADIENT_TEXT, LOGO_URL, SiteFooter } from "@/app/_shared";
import { FAQAccordion } from "./faq-accordion";
import { ScrollReveal } from "./scroll-reveal";
import { EnrollForm } from "./enroll-form";

export const metadata = {
  title: "12 Дни Мастъркласове® - 12 Измерения на Твоята Мисия | Coaching Real",
  description:
    "Пренареди своя онлайн бизнес за 2026-та. 12 трансформиращи мастъркласа на живо за жени предприемачи в помагащите професии. €67 (вместо €197).",
};

/* ─── DATA ──────────────────────────────────────────────────────────── */
const specialists = [
  { Icon: IconHeart,     label: "Терапевт" },
  { Icon: IconTarget,    label: "Коуч" },
  { Icon: IconStar,      label: "Констелатор" },
  { Icon: IconLeaf,      label: "Нутриционист" },
  { Icon: IconBrain,     label: "Психолог" },
  { Icon: IconNetwork,   label: "НЛП практик" },
  { Icon: IconMoon,      label: "Астролог" },
  { Icon: IconBriefcase, label: "Консултант" },
];

const forYouIf = [
  "Имаш експертиза, но усещаш застой и липса на система.",
  "Искаш да създадеш своя първи онлайн курс или да скалираш вече съществуваща програма.",
  "Усещаш, че хаосът и липсата на структура ти пречат да действаш.",
  "Искаш да интегрираш AI в бизнеса си през 2026, за да си спестиш време.",
  "Искаш да започнеш годината с ясен фокус, спокойствие и конкретен план.",
];

const outcomes = [
  "Ще подредиш бизнеса си и ще освободиш менталния шум.",
  "Ще откриеш и профилираш идеалния си клиент в дълбочина.",
  "Ще кристализираш идеята за своя онлайн курс/програма.",
  "Ще се научиш да продаваш стойността си с увереност, без натиск.",
  "Ще създадеш инерция чрез ежедневни малки стъпки, водещи до големи резултати.",
];

const curriculum = [
  { title: "Новият онлайн свят през 2026",   desc: "Какво работи и какво създава реални резултати." },
  { title: "Твоята автентична визия",         desc: "Възстановяване на връзката с мисията и посоката." },
  { title: "Изчистване на хаоса",             desc: "Как да подредиш всичко, което те претоварва." },
  { title: "Идеалният клиент",                desc: "Кой е и как да го откриеш с истинска дълбочина." },
  { title: "Идеята за твоя курс",             desc: "Формула за откриване на печеливша тема за 2026." },
  { title: "Позициониране без натиск",        desc: "Как да бъдеш лидер, а не просто „поредният профил“." },
  { title: "Продавай стойност, не време",     desc: "Устойчив модел за жени с мисия." },
  { title: "Оферти, които конвертират",       desc: "Предложения, продаващи се във всяка икономика." },
  { title: "AI стратегии",                    desc: "Спести време и скалирай бизнеса с изкуствен интелект." },
  { title: "Бизнес инерция",                  desc: "Малки стъпки за големи резултати без бърнаут." },
  { title: "Вътрешни блокажи",                desc: "Трансформирай спирачките, задържащи растежа ти." },
  { title: "Планът за 2026",                  desc: "Готова рамка за успех, която да следваш веднага." },
];

const faqs = [
  {
    q: "Колко струва участието?",
    a: "Само €67 (намалено от €197). Ограничени места на тази цена.",
  },
  {
    q: "Ще има ли запис след събитието?",
    a: "Мастъркласовете са на живо. Препоръчваме присъствие в реално време за пълно преживяване и възможност за въпроси.",
  },
  {
    q: "Кога се провеждат мастъркласовете?",
    a: "От 18 до 29 Май 2026 включително, всеки ден от 19:00 до 20:30 ч. на живо онлайн.",
  },
  {
    q: "Каква е продължителността на всеки мастърклас?",
    a: "Всеки мастърклас е 30–40 минути концентрирана стойност на живо, с възможност за въпроси.",
  },
  {
    q: "Подходящо ли е, ако съм начинаеща или напреднала?",
    a: "Да. Рамката се адаптира и за старт от нулата, и за скалиране на вече съществуваща оферта.",
  },
  {
    q: "Това серия уебинари ли е?",
    a: "Не - това е практична, стъпка-по-стъпка система за действие на живо, не пасивно слушане.",
  },
  {
    q: "Как да се запиша?",
    a: "Кликни на бутона по-долу, попълни регистрацията и получи потвърждение с всички детайли.",
  },
];

/* ─── SPECIALIST ICONS ──────────────────────────────────────────────── */
function IconHeart({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
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

function IconStar({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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

function IconBrain({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function IconNetwork({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <circle cx="19" cy="19" r="2" />
      <circle cx="5" cy="19" r="2" />
      <line x1="12" y1="7" x2="19" y2="17" />
      <line x1="12" y1="7" x2="5" y2="17" />
      <line x1="7" y1="19" x2="17" y2="19" />
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

function IconBriefcase({ color = "#70150E" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

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

function IconQuote() {
  return (
    <svg width="36" height="28" viewBox="0 0 36 28" fill="#70150E" opacity="0.18">
      <path d="M0 28V16.8C0 12.267 1.067 8.533 3.2 5.6 5.467 2.667 8.933.8 13.6 0l1.6 3.2C11.067 4.267 8.8 6.133 7.6 8.8 6.533 11.2 6.133 13.6 6.4 16H14V28H0Zm22 0V16.8c0-4.533 1.067-8.267 3.2-11.2C27.467 2.667 30.933.8 35.6 0L37.2 3.2c-4.133 1.067-6.4 2.933-6.8 5.6C29.333 11.2 29 13.6 29.2 16H36V28H22Z" />
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
        Запиши се сега
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
      <ForWhomSection />
      <WhyNowSection />
      <SolutionSection />
      <CurriculumSection />
      <AboutSection />
      <TestimonialsSection />
      <FinalCTASection />
      <FAQSection />
      <SiteFooter />
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
  { id: "P7uagO2iKQU" },
  { id: "YaXXwMVzYCE" },
  { id: "KCKlgVLQfnI" },
  { id: "qxwjEwrPclE" },
  { id: "XCbVcEi6p84" },
];

function TestimonialsSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">Реални резултати</span>
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
            Какво казват{" "}
            <span style={{ ...GRADIENT_TEXT }}>жените, които преминаха</span>
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            paddingBottom: "12px",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {testimonials.map(({ id }) => (
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

        <div className="text-center mt-12">
          <a href="#enroll" className="mv-btn mv-btn-primary" style={{ fontSize: "15px" }}>
            Искам същите резултати →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── HERO ───────────────────────────────────────────────────────────── */
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
          <div className="animate-fade-up">
            <span className="mv-tag mv-tag-light" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "16px", height: "16px", flexShrink: 0 }}>
                <span className="mc-pulse-ring" style={{ position: "absolute", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#c94535" }} />
                <span style={{ position: "relative", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#c94535", flexShrink: 0 }} />
              </span>
              за терапевти, коучове, лечители, астролози
            </span>
          </div>

          <div className="animate-fade-up mt-4 flex flex-wrap items-center gap-3">
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
              18 - 29 Май 2026
            </span>
            <span style={{ fontSize: "13px", color: T.textSecondary, fontWeight: 600 }}>
              19:00 - 20:30 ч. на живо
            </span>
          </div>

          <h1
            className="animate-fade-up delay-100 mt-6"
            style={{ lineHeight: 1, letterSpacing: "-0.03em" }}
          >
            <span
              className="block"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.6rem)",
                fontWeight: 900,
                background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              12 ИЗМЕРЕНИЯ
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
                fontWeight: 700,
                color: T.textPrimary,
                marginTop: "6px",
              }}
            >
              НА ТВОЯТА МИСИЯ
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(0.9rem, 1.8vw, 1.3rem)",
                fontWeight: 600,
                color: T.textSecondary,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginTop: "12px",
              }}
            >
              12 ДНИ МАСТЪРКЛАСОВЕ®
            </span>
          </h1>

          <p
            className="animate-fade-up delay-200 mt-6"
            style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.8, maxWidth: "480px" }}
          >
            Пренареди своя онлайн бизнес за 2026-та. Създай яснота, посока
            и предвидим план за растеж - 12 трансформиращи теми,
            които ще сложат край на хаоса.
          </p>

          {/* Price block */}
          <div className="animate-fade-up delay-300 mt-10">
            <div className="flex items-center gap-4 mb-6">
              <span
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3rem)",
                  fontWeight: 900,
                  color: T.textPrimary,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                €67
              </span>
              <div className="flex flex-col gap-1">
                <span
                  style={{
                    fontSize: "16px",
                    color: T.textSecondary,
                    textDecoration: "line-through",
                    textDecorationColor: "rgba(0,0,0,0.25)",
                    fontWeight: 600,
                  }}
                >
                  €197
                </span>
                <span
                  className="flex items-center gap-1.5"
                  style={{ fontSize: "12px", color: "#70150E", fontWeight: 700, letterSpacing: "0.04em" }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: "#c94535",
                      display: "inline-block",
                      boxShadow: "0 0 0 2px rgba(201,69,53,0.22)",
                      flexShrink: 0,
                    }}
                  />
                  Останали 7 от 30 места
                </span>
              </div>
            </div>

            <a
              href="#enroll"
              className="mv-btn mv-btn-primary"
              style={{ fontSize: "16px", padding: "16px 40px" }}
            >
              Искам да се включа →
            </a>
          </div>
        </div>

        {/* Right - photo */}
        <div className="mc-hero-visual animate-fade-in delay-200 hidden lg:flex items-center justify-center">
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
        </div>
      </div>

      {/* Scroll prompt */}
      <div
        aria-hidden
        className="mc-scroll-prompt"
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
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

/* ─── FOR WHOM ──────────────────────────────────────────────────────── */
function ForWhomSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-start">
        {/* Left */}
        <div>
          <span className="mv-tag mv-tag-light">За кого е?</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Специално за жени предприемачи в{" "}
            <span style={{ ...GRADIENT_TEXT }}>трансформиращите професии</span>
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {specialists.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-2"
                style={{
                  backgroundColor: T.surfaceStrong,
                  borderRadius: "8px",
                  border: "1px solid rgba(107,21,14,0.1)",
                }}
              >
                <Icon color="#70150E" />
                <span style={{ fontSize: "13px", color: T.textPrimary, fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - checklist */}
        <div>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "rgba(0,0,0,0.32)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Това е за теб, ако:
          </p>
          <div className="flex flex-col gap-4">
            {forYouIf.map((item, i) => (
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
                <p style={{ fontSize: "14px", color: T.textPrimary, lineHeight: 1.7, fontWeight: 500 }}>{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="#enroll" className="mv-btn mv-btn-primary" style={{ fontSize: "15px" }}>
              Готова съм да вляза в 12-те мастъркласа →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WHY NOW ───────────────────────────────────────────────────────── */
function WhyNowSection() {
  const pillars = [
    { num: "01", label: "По-добра структура",     desc: "Систематичен подход вместо хаотично публикуване." },
    { num: "02", label: "По-добро позициониране", desc: "Ясно послание, което резонира с идеалния ти клиент." },
    { num: "03", label: "По-добра оферта",         desc: "Продукт, заради който клиентите те търсят сами." },
  ];

  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-5xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="mv-tag mv-tag-light">Защо точно сега?</span>
            <h2
              className="mt-5"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 800,
                color: T.textPrimary,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                maxWidth: "520px",
              }}
            >
              Защо 2026-та ще бъде{" "}
              <span style={{ ...GRADIENT_TEXT }}>решаваща година?</span>
            </h2>
          </div>
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary self-start lg:self-auto shrink-0"
            style={{ fontSize: "14px", padding: "12px 28px" }}
          >
            Искам да се включа →
          </a>
        </div>

        {/* Pull quote */}
        <div
          className="relative p-8 md:p-10 mb-10"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            borderLeft: "4px solid #c94535",
            boxShadow: "0 2px 20px rgba(107,21,14,0.06)",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: T.textSecondary,
              lineHeight: 1.9,
              fontStyle: "italic",
              maxWidth: "720px",
            }}
          >
            Ако усещаш, че онлайн пространството се променя - права си.
            Клиентското поведение е различно, доверието се изгражда по-бавно,
            а конкуренцията вече не е в обема, а в качеството. Интуитивното
            публикуване и стратегията „ще видим каквото стане" вече не работят.
          </p>
          <p
            className="mt-5"
            style={{ fontSize: "13px", fontWeight: 700, ...GRADIENT_TEXT, letterSpacing: "0.04em" }}
          >
            — Станислава Павлова
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map(({ num, label, desc }) => (
            <div
              key={num}
              className="group p-6 flex flex-col gap-3"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                border: "1px solid rgba(107,21,14,0.08)",
                transition: "box-shadow 0.2s, border-color 0.2s",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  ...GRADIENT_TEXT,
                }}
              >
                {num}
              </span>
              <p style={{ fontSize: "16px", fontWeight: 800, color: T.textPrimary, letterSpacing: "-0.01em" }}>
                {label}
              </p>
              <p style={{ fontSize: "13px", color: T.textSecondary, lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div
          className="mt-10 flex items-center gap-4 px-6 py-5"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            border: "1px solid rgba(107,21,14,0.08)",
          }}
        >
          <div
            style={{
              width: "4px",
              alignSelf: "stretch",
              borderRadius: "4px",
              background: "linear-gradient(180deg, #70150E, #e85050)",
              flexShrink: 0,
            }}
          />
          <p style={{ fontSize: "15px", color: T.textPrimary, lineHeight: 1.7, fontWeight: 600 }}>
            2026-та е годината не за „повече", а за по-добре.{" "}
            <span style={{ ...GRADIENT_TEXT }}>
              Тези 12 дни са пространството, в което ще го постигнеш.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

/* ─── SOLUTION ──────────────────────────────────────────────────────── */
function SolutionSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        {/* Left - context */}
        <div>
          <span className="mv-tag mv-tag-light">Различният подход</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Какво прави тези 12 дни{" "}
            <span style={{ ...GRADIENT_TEXT }}>различни?</span>
          </h2>

          <div
            className="mt-8 p-7"
            style={{
              background: "linear-gradient(135deg, #fff4f3 0%, #f9f9f9 100%)",
              borderRadius: "14px",
              border: "1px solid rgba(107,21,14,0.12)",
              boxShadow: "0 4px 24px rgba(107,21,14,0.07)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                ...GRADIENT_TEXT,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              Основната разлика
            </p>
            <p style={{ fontSize: "15px", color: T.textSecondary, lineHeight: 1.85 }}>
              Повечето онлайн обучения претоварват с информация и създават
              още по-голям хаос. Тези 12 дни са пространство за{" "}
              <strong style={{ color: T.textPrimary }}>структура и инерция</strong> -
              ежедневни малки стъпки, водещи до трайни резултати.
            </p>
          </div>

          <a href="#enroll" className="mv-btn mv-btn-outline-light mt-8 inline-flex">
            Обичам тези теми - включи ме →
          </a>
        </div>

        {/* Right - outcomes */}
        <div>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "rgba(0,0,0,0.32)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Какво ще постигнеш:
          </p>
          <div className="flex flex-col gap-4">
            {outcomes.map((item, i) => (
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
                <p style={{ fontSize: "14px", color: T.textPrimary, lineHeight: 1.7, fontWeight: 500 }}>{item}</p>
              </div>
            ))}
          </div>
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
          <span className="mv-tag mv-tag-light">Твоята пътна карта</span>
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
            12 дни до{" "}
            <span style={{ ...GRADIENT_TEXT }}>пълна бизнес яснота</span>
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.8, maxWidth: "500px" }}
          >
            Всеки ден - една тема. Всяка тема - конкретна стъпка напред.
          </p>
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
                          Ден {i + 1}
                        </p>
                        <h3 style={{ fontSize: "15px", fontWeight: 700, color: T.textPrimary, letterSpacing: "-0.01em", marginBottom: "6px" }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: "12px", color: T.textSecondary, lineHeight: 1.65 }}>{item.desc}</p>
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
                          Ден {i + 1}
                        </p>
                        <h3 style={{ fontSize: "15px", fontWeight: 700, color: T.textPrimary, letterSpacing: "-0.01em", marginBottom: "6px" }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: "12px", color: T.textSecondary, lineHeight: 1.65 }}>{item.desc}</p>
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
            style={{ fontSize: "16px", padding: "16px 44px" }}
          >
            Включи ме в 12-те мастъркласа - €67 →
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
          <span className="mv-tag mv-tag-light">Коя съм аз?</span>
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
            Бизнес ментор · Стратег · Създател на системата KickSTART
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["11 години опит", "CPD UK акредитация", "Noble Manhattan"].map((badge) => (
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
            Помагам на жени в помагащите професии да изградят, структурират и
            скалират своя онлайн бизнес с яснота, женска енергия и стабилност.
          </p>

          {/* Value statement */}
          <div
            className="mt-8 p-6"
            style={{
              backgroundColor: "#faf8f5",
              borderRadius: "12px",
              border: "1px solid rgba(107,21,14,0.1)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                ...GRADIENT_TEXT,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              Стойността, която получаваш
            </p>
            <p style={{ fontSize: "15px", color: T.textSecondary, lineHeight: 1.85 }}>
              Реалната стойност на тези мастъркласове надвишава{" "}
              <strong style={{ color: T.textPrimary }}>€1000</strong> като
              натрупано ноу-хау, структура и бизнес посока. Днес получаваш
              целия пакет за{" "}
              <strong
                style={{
                  fontSize: "20px",
                  ...GRADIENT_TEXT,
                }}
              >
                €67
              </strong>
              . Инвестиция, която се връща в измерими резултати.
            </p>
          </div>

          <blockquote
            className="mt-6 pl-5"
            style={{ borderLeft: "3px solid #70150E" }}
          >
            <p style={{ fontSize: "15px", color: T.textSecondary, lineHeight: 1.8, fontStyle: "italic" }}>
              &ldquo;Мисията ми е да покажа, че духовността и бизнесът не се
              изключват - те се допълват. Когато съчетаеш мисията със структура,
              резултатите идват естествено.&rdquo;
            </p>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                ...GRADIENT_TEXT,
                marginTop: "10px",
                letterSpacing: "0.02em",
              }}
            >
              - Станислава Павлова
            </p>
          </blockquote>
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
          <span className="mv-tag mv-tag-light">Чести въпроси</span>
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
            <span style={{ ...GRADIENT_TEXT }}>Ето отговорите.</span>
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
        <span className="mv-tag mv-tag-light inline-block mb-8">
          Твоят нов бизнес цикъл за 2026-та
        </span>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 900,
            color: T.textPrimary,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          12 дни. 12 теми.{" "}
          <span style={{ ...GRADIENT_TEXT }}>
            12 стъпки, които ще те подредят отвътре навън.
          </span>
        </h2>

        <p
          className="mt-5"
          style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.8 }}
        >
          Започва с теб. Завършва с ясен план за растеж, готов за изпълнение.
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
            18 - 29 Май 2026
          </span>
          <span style={{ fontSize: "13px", color: T.textSecondary, fontWeight: 600 }}>
            19:00 - 20:30 ч. на живо онлайн
          </span>
        </div>

        {/* Price block */}
        <div
          className="mt-10 mb-10 inline-flex flex-col items-center gap-2 px-10 py-6"
          style={{
            backgroundColor: "#faf8f5",
            borderRadius: "14px",
            border: "1px solid rgba(107,21,14,0.1)",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: T.textSecondary,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Само сега за
          </span>
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
                fontSize: "18px",
                fontWeight: 600,
                color: T.textSecondary,
                textDecoration: "line-through",
                textDecorationColor: "rgba(0,0,0,0.25)",
              }}
            >
              €197
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#c94535",
                display: "inline-block",
                boxShadow: "0 0 0 2px rgba(201,69,53,0.22)",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: "12px", color: "#70150E", fontWeight: 700, letterSpacing: "0.04em" }}>
              Останали 7 от 30 места
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <EnrollForm />
        </div>
      </div>
    </section>
  );
}
