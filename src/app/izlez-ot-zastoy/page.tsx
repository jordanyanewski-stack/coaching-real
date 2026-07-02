import Image from "next/image";
import { ScrollReveal } from "../masterclass/scroll-reveal";
import { EnrollForm } from "../masterclass/enroll-form";
import { IzlezStickyCTA } from "./sticky-cta";

export const metadata = {
  title: "Излез от вътрешния застой · 4-седмичен курс на живо €37 | Христина Симеонова",
  description:
    "От прекалено мислене и отлагане към яснота и увереност при вземането на важни решения. 4-седмичен курс на живо за жени 25–44. Старт 23 юли 2026. €37.",
};

/* ─── DESIGN TOKENS — deep bordeaux #a10406 (brand) на топъл фон ─────── */
const H = {
  bg: "#fdf6f5",
  bgAlt: "#f7eae9",
  bgPale: "#f3e0df",
  bgDark: "#190a0a",
  bgDark2: "#22100f",
  textPrimary: "#2a1414",
  textBody: "#4c2e2e",
  textMuted: "#7c5858",
  border: "rgba(42,20,20,0.10)",
  borderEditorial: "rgba(42,20,20,0.16)",
  accent: "#a10406",       // бранд бордо
  accentWarm: "#e0827f",   // светъл бордо тинт за акценти на тъмен фон
  accentTerra: "#b5322f",  // среден бордо за точки/детайли на светъл фон
  accentLight: "#f6dedd",  // много светъл blush за check-иконки
};

const SERIF = '"Charter", "Tinos", Georgia, "Times New Roman", serif';

/* ─── ICON COMPONENT ───────────────────────────────────────────────── */
type IconName =
  | "check" | "x" | "video" | "clipboard" | "heart" | "compass" | "arrow-right";

function Icon({
  name,
  size = 22,
  stroke = H.accent,
  strokeWidth = 1.8,
}: {
  name: IconName;
  size?: number;
  stroke?: string;
  strokeWidth?: number;
}) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke,
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "check":
      return (<svg {...p}><polyline points="20 6 9 17 4 12" /></svg>);
    case "x":
      return (<svg {...p}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);
    case "video":
      return (<svg {...p}><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>);
    case "clipboard":
      return (<svg {...p}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>);
    case "heart":
      return (<svg {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>);
    case "compass":
      return (<svg {...p}><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>);
    case "arrow-right":
      return (<svg {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>);
    default:
      return null;
  }
}

/* ─── DATA ─────────────────────────────────────────────────────────── */
const painPoints = [
  "Анализираш прекалено много и не стигаш до действие",
  "Чувстваш се изтощена, когато стане въпрос за твоите мечти",
  "Знаеш, че нещо трябва да се промени — но не знаеш откъде да започнеш",
  "Усещаш, че животът минава покрай теб, докато ти гледаш отстрани",
];

const weeks = [
  {
    num: "01",
    label: "Седмица 1",
    title: "Къде наистина се намираш",
    desc: "Разпознаване на цикъла: прекомерно мислене, търсене на още информация, учене, отлагане и усещане за застой.",
  },
  {
    num: "02",
    label: "Седмица 2",
    title: "Защо нямаш ресурс за себе си",
    desc: "Ще разгледаме защо се чувстваш изтощена, когато стане въпрос за твоите мечти, желания и лична промяна — и какво реално източва вътрешния ти ресурс.",
  },
  {
    num: "03",
    label: "Седмица 3",
    title: "Каква е истинската причина да не действаш",
    desc: "Ще разпознаеш как страхът от промяна, вътрешните защити и скритите саботиращи модели се маскират като логика, отлагане или „още не съм готова“.",
  },
  {
    num: "04",
    label: "Седмица 4",
    title: "Защо не можеш да се съсредоточиш",
    desc: "Ще видиш какво разпилява вниманието ти, защо фокусът не идва само с дисциплина и как да избереш една ясна следваща стъпка.",
  },
];

const formatItems = [
  { icon: "video" as IconName, title: "Живи сесии всяка седмица" },
  { icon: "clipboard" as IconName, title: "Практически задачи" },
  { icon: "heart" as IconName, title: "Отчетност и подкрепа" },
];

const bio = [
  "Работя с жени, които усещат, че животът им е стигнал до момент на промяна — жени, които знаят, че са способни на повече, но не са сигурни накъде да поемат или как да направят следващата крачка.",
  "Чрез метода ALIGN им помагам да разберат по-добре себе си, да разпознаят собствените си ресурси, да освободят ограничаващите модели и да намерят яснота за своята следваща посока.",
  "Моята мисия е да помагам на хората да спрат да чакат перфектния момент, да се доверят на себе си и да започнат да изграждат живота, който истински искат да живеят.",
];

/* ─── PAGE ─────────────────────────────────────────────────────────── */
export default function IzlezPage() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)", backgroundColor: H.bg }}>
      <ScrollReveal />
      <IzlezHeader />
      <HeroSection />
      <PainSection />
      <TransformationSection />
      <WeeksSection />
      <FormatSection />
      <MentorSection />
      <FinalCTASection />
      <LegalFooter />
      <IzlezStickyCTA />
    </div>
  );
}

/* ─── HEADER ───────────────────────────────────────────────────────── */
function IzlezHeader() {
  return (
    <a
      href="#enroll"
      className="fd-top-cta"
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "11px 22px",
        background: `linear-gradient(135deg, ${H.accent} 0%, #780304 100%)`,
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: 700,
        borderRadius: "6px",
        textDecoration: "none",
        letterSpacing: "0.01em",
        boxShadow: "0 8px 22px rgba(161,4,6,0.35), 0 1px 2px rgba(0,0,0,0.06)",
        whiteSpace: "nowrap",
      }}
    >
      Запиши се — €37 →
    </a>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="fd-hero relative overflow-hidden flex items-center"
      style={{ backgroundColor: H.bgDark, color: "#ffffff", minHeight: "100vh" }}
    >
      {/* Слоест бордо фон (без снимка) */}
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 95% 70% at 50% -5%, rgba(161,4,6,0.42) 0%, rgba(120,3,4,0.12) 45%, transparent 72%)" }} />
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 55% at 82% 108%, rgba(161,4,6,0.22) 0%, transparent 60%)" }} />
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(25,10,10,0.20) 0%, rgba(25,10,10,0.55) 62%, rgba(25,10,10,0.92) 100%)" }} />

      <div className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 w-full" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "4px",
              border: "1px solid rgba(224,130,127,0.32)",
              backgroundColor: "rgba(161,4,6,0.14)",
              fontSize: "11px",
              fontWeight: 700,
              color: H.accentWarm,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: H.accentWarm }} />
            4-седмичен курс на живо · старт 23 юли · €37
          </div>

          <h1
            style={{
              fontSize: "clamp(2.3rem, 5.6vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              margin: "0 0 22px",
              color: "#ffffff",
            }}
          >
            Излез от{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: H.accentWarm }}>
              вътрешния застой
            </span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.74)",
              maxWidth: "580px",
              margin: "0 auto 14px",
            }}
          >
            От прекалено мислене и отлагане към яснота и увереност при вземането на важни решения.
          </p>

          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.48)",
              maxWidth: "520px",
              margin: "0 auto 32px",
            }}
          >
            4-седмичен курс за жени на 25–44 години, които са изправени пред важно решение и искат да спрат да се колебаят, да чуят себе си и да направят следващата стъпка с увереност.
          </p>

          <PrimaryButton href="#enroll">Запиши се за 37 EUR</PrimaryButton>

          <div
            style={{
              marginTop: "36px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {["Онлайн", "На живо", "Практически задачи", "Отчетност и подкрепа"].map((p) => (
              <span
                key={p}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "7px 12px",
                  borderRadius: "4px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.68)",
                }}
              >
                <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: H.accentWarm }} />
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PAIN POINTS ──────────────────────────────────────────────────── */
function PainSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24" style={{ backgroundColor: H.bg }}>
      <div className="reveal max-w-4xl mx-auto text-center">
        <SectionEyebrow>Познаваш ли се тук</SectionEyebrow>
        <h2 style={{ fontSize: "clamp(1.7rem, 3.6vw, 2.5rem)", fontWeight: 800, color: H.textPrimary, lineHeight: 1.14, letterSpacing: "-0.02em", margin: "12px 0 18px" }}>
          Докато мислиш —{" "}
          <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: H.accent }}>
            животът продължава без теб.
          </span>
        </h2>
        <p style={{ fontSize: "16px", color: H.textBody, lineHeight: 1.75, maxWidth: "580px", margin: "0 auto 14px" }}>
          Знаеш какво искаш. Прочела си го, анализирала си го, говорила си за него. И въпреки това — стоиш на едно място.
        </p>
        <p style={{ fontSize: "16px", color: H.textBody, lineHeight: 1.75, maxWidth: "580px", margin: "0 auto 30px" }}>
          Не е мързел. Не е липса на воля. Нещо друго те задържа — и докато не го видиш ясно, ще продължаваш да чакаш момента, в който „ще бъдеш готова“.
        </p>

        <div className="flex flex-col gap-3 max-w-xl mx-auto" style={{ textAlign: "left" }}>
          {painPoints.map((p) => (
            <div
              key={p}
              className="reveal"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "16px 20px",
                background: H.bgAlt,
                border: `1px solid ${H.borderEditorial}`,
                borderRadius: "6px",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: H.accentTerra, flexShrink: 0 }} />
              <span style={{ fontSize: "15px", color: H.textPrimary, lineHeight: 1.45 }}>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TRANSFORMATION (Сега → След курса) ───────────────────────────── */
function TransformationSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24" style={{ backgroundColor: H.bgAlt }}>
      <div className="reveal max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <SectionEyebrow>Трансформация</SectionEyebrow>
          <h2 style={{ fontSize: "clamp(1.7rem, 3.6vw, 2.5rem)", fontWeight: 800, color: H.textPrimary, lineHeight: 1.14, letterSpacing: "-0.02em", margin: "12px 0" }}>
            Откъде накъде{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: H.accent }}>ще стигнеш</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-5 items-stretch">
          {/* Сега */}
          <div style={{ background: H.bg, border: `1px solid ${H.border}`, borderRadius: "8px", padding: "32px 28px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: H.textMuted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
              Сега
            </div>
            <p style={{ fontFamily: SERIF, fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)", fontStyle: "italic", color: H.textMuted, lineHeight: 1.5, margin: 0 }}>
              „Не знам какво ми има, защо не действам и накъде да поема.“
            </p>
          </div>

          {/* Стрелка */}
          <div className="flex items-center justify-center" style={{ padding: "4px 0" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: H.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 6px 18px rgba(161,4,6,0.30)" }}>
              <Icon name="arrow-right" size={22} stroke="#ffffff" strokeWidth={2.2} />
            </div>
          </div>

          {/* След курса */}
          <div style={{ background: H.bg, border: `2px solid ${H.accent}`, borderRadius: "8px", padding: "32px 28px", boxShadow: "0 12px 34px rgba(161,4,6,0.12)" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: H.accent, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
              След курса
            </div>
            <p style={{ fontFamily: SERIF, fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)", fontStyle: "italic", fontWeight: 500, color: H.textPrimary, lineHeight: 1.5, margin: 0 }}>
              „Виждам къде съм, какво ме спира и правя следващата стъпка с увереност.“
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 4 WEEKS ──────────────────────────────────────────────────────── */
function WeeksSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24" style={{ backgroundColor: H.bgDark, color: "#ffffff" }}>
      <div className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SectionEyebrow tone="dark">Програма</SectionEyebrow>
          <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.14, letterSpacing: "-0.02em", margin: "12px 0" }}>
            Какво се случва{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: H.accentWarm }}>всяка седмица</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {weeks.map((w) => (
            <div
              key={w.num}
              className="reveal"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "8px",
                padding: "28px 26px",
              }}
            >
              <div className="flex items-baseline gap-4" style={{ marginBottom: "10px" }}>
                <span style={{ fontFamily: SERIF, fontSize: "40px", fontWeight: 600, color: "rgba(224,130,127,0.28)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {w.num}
                </span>
                <span style={{ fontSize: "10px", fontWeight: 700, color: H.accentWarm, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {w.label}
                </span>
              </div>
              <h3 style={{ fontSize: "19px", fontWeight: 700, color: "#ffffff", lineHeight: 1.25, letterSpacing: "-0.01em", marginBottom: "10px" }}>
                {w.title}
              </h3>
              <p style={{ fontSize: "14.5px", color: "rgba(255,255,255,0.66)", lineHeight: 1.7 }}>
                {w.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <PrimaryButton href="#enroll">Запиши се за 37 EUR →</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ─── FORMAT ───────────────────────────────────────────────────────── */
function FormatSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24" style={{ backgroundColor: H.bg }}>
      <div className="reveal max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <SectionEyebrow>Формат</SectionEyebrow>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.7rem)", fontWeight: 800, color: H.textPrimary, lineHeight: 1.14, letterSpacing: "-0.02em", margin: "12px 0" }}>
            Как протича{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: H.accent }}>курсът</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {formatItems.map((f) => (
            <div
              key={f.title}
              className="reveal"
              style={{
                background: H.bgAlt,
                border: `1px solid ${H.borderEditorial}`,
                borderRadius: "8px",
                padding: "30px 24px",
                textAlign: "center",
              }}
            >
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: H.accentLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <Icon name={f.icon} size={24} stroke={H.accent} strokeWidth={1.9} />
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: H.textPrimary, lineHeight: 1.4 }}>{f.title}</h3>
            </div>
          ))}
        </div>

        <div
          className="reveal"
          style={{
            marginTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            padding: "20px 28px",
            background: H.bgPale,
            border: `1px solid ${H.borderEditorial}`,
            borderRadius: "8px",
          }}
        >
          <span style={{ fontSize: "11px", fontWeight: 700, color: H.accent, letterSpacing: "0.12em", textTransform: "uppercase" }}>Старт</span>
          <span style={{ fontSize: "18px", fontWeight: 800, color: H.textPrimary, letterSpacing: "-0.01em" }}>23 юли 2026</span>
          <span style={{ color: H.textMuted }}>·</span>
          <span style={{ fontSize: "15px", color: H.textBody }}>4 седмици · Онлайн, на живо</span>
        </div>
      </div>
    </section>
  );
}

/* ─── MENTOR ───────────────────────────────────────────────────────── */
function MentorSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24" style={{ backgroundColor: H.bgDark2, color: "#ffffff" }}>
      <div className="reveal max-w-3xl mx-auto text-center">
        <div style={{ fontSize: "11px", fontWeight: 700, color: H.accentWarm, letterSpacing: "0.13em", textTransform: "uppercase", marginBottom: "22px" }}>
          Водещата
        </div>

        <div
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
            margin: "0 auto 24px",
            border: "3px solid rgba(224,130,127,0.45)",
            boxShadow: "0 14px 44px rgba(161,4,6,0.38)",
          }}
        >
          <Image src="/izlez-ot-zastoy/hristina.jpg" alt="Христина Симеонова" fill sizes="140px" style={{ objectFit: "cover", objectPosition: "57% 30%" }} />
        </div>

        <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "8px" }}>
          Христина Симеонова
        </h2>
        <p style={{ fontSize: "15px", color: H.accentWarm, fontWeight: 600, marginBottom: "26px" }}>
          Създател на метода ALIGN
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", fontSize: "16px", color: "rgba(255,255,255,0.74)", lineHeight: 1.85, maxWidth: "62ch", margin: "0 auto" }}>
          {bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section id="enroll" className="px-6 md:px-12 lg:px-20 py-20 md:py-28 text-center relative overflow-hidden" style={{ backgroundColor: H.bgDark, color: "#ffffff" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(161,4,6,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="reveal relative max-w-3xl mx-auto">
        <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.50)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "14px" }}>
          Готова ли си?
        </div>
        <h2 style={{ fontSize: "clamp(2rem, 4.6vw, 3.1rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.12, letterSpacing: "-0.03em", margin: "0 auto 14px", maxWidth: "720px" }}>
          Спри да чакаш момента, в който{" "}
          <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: H.accentWarm }}>
            ще бъдеш готова.
          </span>
        </h2>
        <p style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)", fontStyle: "italic", color: "rgba(255,255,255,0.70)", margin: "0 auto 10px", maxWidth: "520px" }}>
          Той няма да дойде сам. Но яснотата може.
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.6 }}>
          4-седмичен курс на живо · старт 23 юли · €37 еднократно
        </p>
        <div className="flex justify-center">
          <EnrollForm product="izlez-ot-zastoy" cardOnly variant="dark-bordeaux" submitLabel="Запиши се за 37 EUR →" />
        </div>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.42)", marginTop: "24px", letterSpacing: "0.02em" }}>
          Старт: 23 юли · Онлайн · На живо · 4 седмици
        </p>
      </div>
    </section>
  );
}

/* ─── LEGAL FOOTER ─────────────────────────────────────────────────── */
function LegalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: H.bgAlt, borderTop: `1px solid ${H.borderEditorial}`, padding: "24px 24px" }}>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <div style={{ fontSize: "12px", color: H.textMuted, letterSpacing: "0.02em" }}>
          © {year} Coaching Real
        </div>
        <nav style={{ display: "flex", flexWrap: "wrap", gap: "20px", fontSize: "12px", fontWeight: 500, letterSpacing: "0.02em" }}>
          <a href="/privacy" style={{ color: H.textBody, textDecoration: "none" }}>Политика за поверителност</a>
          <a href="/cookies" style={{ color: H.textBody, textDecoration: "none" }}>Бисквитки</a>
          <a href="/terms" style={{ color: H.textBody, textDecoration: "none" }}>Общи условия</a>
        </nav>
      </div>
    </footer>
  );
}

/* ─── HELPERS ──────────────────────────────────────────────────────── */
function SectionEyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <div style={{ fontSize: "11px", fontWeight: 700, color: tone === "dark" ? H.accentWarm : H.accent, letterSpacing: "0.13em", textTransform: "uppercase" }}>
      {children}
    </div>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "15px 30px",
        background: `linear-gradient(135deg, ${H.accent} 0%, #780304 100%)`,
        color: "#ffffff",
        fontSize: "15px",
        fontWeight: 700,
        borderRadius: "8px",
        textDecoration: "none",
        boxShadow: "0 8px 22px rgba(161,4,6,0.32)",
        letterSpacing: "0.01em",
        transition: "transform 0.15s, box-shadow 0.15s",
      }}
    >
      {children}
    </a>
  );
}
