import Image from "next/image";
import { ScrollReveal } from "../masterclass/scroll-reveal";
import { EnrollForm } from "../masterclass/enroll-form";
import { ZhivaFAQAccordion } from "./faq-accordion";
import { ZhivaStickyCTA } from "./sticky-cta";

export const metadata = {
  title: 'ЖИВА · 4-седмичен онлайн курс €97 | Таня Касабова',
  description:
    'Разкъсай невидимия договор с рода и заеми мястото си в живота. 4-седмичен онлайн процес за жени с Таня Касабова. €97 еднократно.',
  openGraph: {
    images: ["/zhiva/hero.jpg"],
  },
};

/* ─── DESIGN TOKENS — rose pink + warm dark, inspired by Tanya's fuchsia ── */
const Z = {
  bg: "#fdf7f8",
  bgAlt: "#f5eaed",
  bgPale: "#f2e4e8",
  bgDark: "#1c0f14",
  bgDark2: "#24141a",
  textPrimary: "#2a1520",
  textBody: "#4a3040",
  textMuted: "#7a5a6a",
  border: "rgba(44,15,28,0.10)",
  borderEditorial: "rgba(44,15,28,0.16)",
  accent: "#c4385a",
  accentWarm: "#e0728a",
  accentTerra: "#a63050",
  accentLight: "#f5dde3",
  rule: "#2a1520",
};

const SERIF =
  '"Charter", "Tinos", Georgia, "Times New Roman", serif';

/* ─── ICON COMPONENT ───────────────────────────────────────────────── */
type IconName =
  | "heart" | "shield" | "check" | "x" | "user" | "arrow-down"
  | "sunrise" | "eye" | "feather" | "lock" | "unlock" | "star";

function Icon({
  name,
  size = 22,
  stroke = Z.accent,
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
    case "heart":
      return (<svg {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>);
    case "shield":
      return (<svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
    case "check":
      return (<svg {...p}><polyline points="20 6 9 17 4 12" /></svg>);
    case "x":
      return (<svg {...p}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);
    case "user":
      return (<svg {...p}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>);
    case "arrow-down":
      return (<svg {...p}><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>);
    case "sunrise":
      return (<svg {...p}><path d="M17 18a5 5 0 0 0-10 0" /><line x1="12" y1="2" x2="12" y2="9" /><line x1="4.22" y1="10.22" x2="5.64" y2="11.64" /><line x1="1" y1="18" x2="3" y2="18" /><line x1="21" y1="18" x2="23" y2="18" /><line x1="18.36" y1="11.64" x2="19.78" y2="10.22" /><line x1="23" y1="22" x2="1" y2="22" /><polyline points="8 6 12 2 16 6" /></svg>);
    case "eye":
      return (<svg {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>);
    case "feather":
      return (<svg {...p}><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" /><line x1="16" y1="8" x2="2" y2="22" /><line x1="17.5" y1="15" x2="9" y2="15" /></svg>);
    case "lock":
      return (<svg {...p}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>);
    case "unlock":
      return (<svg {...p}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>);
    case "star":
      return (<svg {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>);
    default:
      return null;
  }
}

/* ─── DATA ─────────────────────────────────────────────────────────── */
const painPoints = [
  "умора, която не минава",
  "усещане, че носиш твърде много",
  "чувство, че животът ти минава в грижа за всички",
  'трудност да кажеш „не"',
  "вина, когато избираш себе си",
];

const roles = [
  '„доброто момиче"',
  "спасителя",
  "силната жена",
  "тази, която носи всичко сама",
];

const courseInsights = [
  "къде живееш чужди очаквания",
  "как родовите модели влияят на живота ти",
  "защо вината и страхът те държат в стари роли",
  "как започва новата вътрешна позиция",
];

const weeks = [
  { num: "01", label: "Седмица 1", title: 'В чий живот живея?' },
  { num: "02", label: "Седмица 2", title: 'Нямам право' },
  { num: "03", label: "Седмица 3", title: 'Къде умирам малко по малко?' },
  { num: "04", label: "Седмица 4", title: 'Първият избор' },
];

const outcomes = [
  { icon: "heart" as IconName, text: "че са живели в роли" },
  { icon: "shield" as IconName, text: "че са носили твърде много" },
  { icon: "user" as IconName, text: "че са поставяли всички пред себе си" },
  { icon: "sunrise" as IconName, text: "че имат право да изберат различен живот" },
];

const forWhomYes = [
  "са силни и отговорни",
  "носят твърде много",
  "се грижат за всички",
  "трудно поставят граници",
  "усещат, че са изгубили връзката със себе си",
];

const forWhomNo = [
  "търсят бързи решения",
  "искат само мотивация",
  "не са готови да погледнат честно живота си",
];

const faqs = [
  {
    q: "Какъв формат е курсът?",
    a: "Онлайн, в рамките на 4 седмици, с ясно структурирани теми. Подходящ за жени без предишен опит в този тип работа.",
  },
  {
    q: "Това терапия ли е?",
    a: "Не. Курсът е осъзнавателен процес, не терапия. Но за много жени е първата стъпка преди по-дълбока работа.",
  },
  {
    q: "Колко време изисква на седмица?",
    a: "Около 2 часа на седмица. Процесът е проектиран за жени с натоварен график.",
  },
  {
    q: "Какво ще се промени след 4-те седмици?",
    a: "Яснота. Ще разпознаваш ролите, които играеш. Ще видиш откъде идват. И ще имаш вътрешна основа да избереш различно.",
  },
];

/* ─── PAGE ─────────────────────────────────────────────────────────── */
export default function ZhivaPage() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)", backgroundColor: Z.bg }}>
      <ScrollReveal />
      <ZhivaHeader />
      <HeroSection />
      <PainSection />
      <TruthSection />
      <CourseDescSection />
      <WeeksSection />
      <OutcomesSection />
      <ForWhomSection />
      <MentorSection />
      <EmotionalCloseSection />
      <FAQSection />
      <FinalCTASection />
      <LegalFooter />
      <ZhivaStickyCTA />
    </div>
  );
}

/* ─── HEADER ───────────────────────────────────────────────────────── */
function ZhivaHeader() {
  return (
    <a
      href="#enroll"
      className="fd-top-cta"
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "11px 22px",
        background: `linear-gradient(135deg, ${Z.accent} 0%, #9e2a48 100%)`,
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: 700,
        borderRadius: "6px",
        textDecoration: "none",
        letterSpacing: "0.01em",
        boxShadow: `0 8px 22px rgba(196,56,90,0.35), 0 1px 2px rgba(0,0,0,0.06)`,
        whiteSpace: "nowrap",
      }}
    >
      Включи се — €97 →
    </a>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="fd-hero relative overflow-hidden flex items-center"
      style={{ backgroundColor: Z.bgDark, color: "#ffffff", minHeight: "100vh" }}
    >
      <Image
        src="/zhiva/hero.jpg"
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center 35%" }}
        priority
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(28,15,20,0.45) 0%, rgba(28,15,20,0.75) 50%, rgba(28,15,20,0.95) 100%)",
        }}
      />
      <div className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 w-full" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "4px",
              border: `1px solid rgba(138,171,122,0.32)`,
              backgroundColor: "rgba(138,171,122,0.10)",
              fontSize: "11px",
              fontWeight: 700,
              color: Z.accentWarm,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: Z.accentWarm }} />
            4-седмичен онлайн процес · €97
          </div>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 5.4vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: "0 0 22px",
              color: "#ffffff",
            }}
          >
            Разкъсай невидимия договор с рода{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: Z.accentWarm }}>
              и заеми мястото си в живота
            </span>
          </h1>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.70)",
              maxWidth: "540px",
              margin: "0 auto 10px",
            }}
          >
            За жени, които усещат, че носят твърде много — и са готови да започнат да живеят своя живот.
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.45)",
              maxWidth: "400px",
              margin: "0 auto 32px",
            }}
          >
            С Таня Касабова · Онлайн · 4 седмици
          </p>

          <PrimaryButton href="#enroll">Включи се — €97</PrimaryButton>

          <div
            style={{
              marginTop: "36px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {["Онлайн формат", "Процес на осъзнаване", "За жени", "С Таня Касабова"].map((p) => (
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
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: Z.accentWarm }} />
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
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ backgroundColor: Z.bg }}>
      <div className="reveal max-w-4xl mx-auto text-center">
        <SectionEyebrow>Разпознаваш ли се?</SectionEyebrow>
        <h2 style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)", fontWeight: 800, color: Z.textPrimary, lineHeight: 1.15, letterSpacing: "-0.02em", margin: "12px 0 8px" }}>
          Може би отвън животът ти изглежда подреден.
        </h2>
        <p style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", fontStyle: "italic", color: Z.textMuted, margin: "0 0 12px" }}>
          Имаш работа. Имаш семейство. Имаш отговорности.
        </p>
        <p style={{ fontSize: "16px", color: Z.textBody, lineHeight: 1.7, maxWidth: "520px", margin: "0 auto 28px" }}>
          Ти си човекът, който винаги се справя. Но вътрешно усещаш нещо друго:
        </p>

        <div className="flex flex-col gap-3 max-w-md mx-auto" style={{ textAlign: "left" }}>
          {painPoints.map((p) => (
            <div
              key={p}
              className="reveal"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "16px 20px",
                background: Z.bgAlt,
                border: `1px solid ${Z.borderEditorial}`,
                borderRadius: "6px",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: Z.accentTerra, flexShrink: 0 }} />
              <span style={{ fontSize: "15px", color: Z.textPrimary, lineHeight: 1.45 }}>{p}</span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p style={{ fontSize: "15px", color: Z.textMuted, marginBottom: "8px" }}>И понякога се появява един тих въпрос:</p>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem, 2.8vw, 2rem)", fontStyle: "italic", fontWeight: 500, color: Z.accentTerra, lineHeight: 1.3 }}>
            „Къде съм аз в този живот?"
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── TRUTH SECTION ────────────────────────────────────────────────── */
function TruthSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ backgroundColor: Z.bgAlt }}>
      <div className="reveal max-w-6xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
        <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: "8px", overflow: "hidden", position: "relative" }}>
          <Image src="/zhiva/tanya-portrait.jpg" alt="Таня Касабова" fill sizes="(max-width: 768px) 100vw, 45vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
        </div>
        <div>
          <SectionEyebrow>Истината</SectionEyebrow>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)", fontWeight: 800, color: Z.textPrimary, lineHeight: 1.15, letterSpacing: "-0.02em", margin: "12px 0 16px" }}>
            Истината, която много жени{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: Z.accent }}>откриват</span>
          </h2>
          <p style={{ fontSize: "15px", color: Z.textBody, lineHeight: 1.75, marginBottom: "16px" }}>
            Повечето жени мислят, че проблемът е: партньорството, работата, парите или самочувствието. Но почти винаги истината е по-дълбока.
          </p>
          <p style={{ fontSize: "15px", color: Z.textBody, lineHeight: 1.75, marginBottom: "16px" }}>
            Жената живее роля, която не е избрала съзнателно. Роля на:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {roles.map((r) => (
              <li key={r} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "15px", color: Z.textPrimary, fontWeight: 600 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: Z.accentTerra, flexShrink: 0 }} />
                {r}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: "15px", color: Z.textBody, lineHeight: 1.75, fontStyle: "italic" }}>
            Тези роли се създават рано и се предават през поколенията. И така жената започва да живее чужд сценарий, вместо своя живот.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── COURSE DESCRIPTION ───────────────────────────────────────────── */
function CourseDescSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ backgroundColor: Z.bg }}>
      <div className="reveal max-w-4xl mx-auto text-center">
        <SectionEyebrow>Процесът</SectionEyebrow>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)", fontWeight: 800, color: Z.textPrimary, lineHeight: 1.15, letterSpacing: "-0.02em", margin: "12px 0 16px" }}>
          Затова създадох{" "}
          <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: Z.accent }}>този 4-седмичен процес</span>
        </h2>
        <p style={{ fontSize: "16px", color: Z.textBody, lineHeight: 1.7, maxWidth: "560px", margin: "0 auto 24px" }}>
          Курсът „ЖИВА" е първата стъпка към излизане от тези невидими роли. За 4 седмици ще започнеш да виждаш:
        </p>
        <div className="flex flex-col gap-3 max-w-lg mx-auto" style={{ textAlign: "left" }}>
          {courseInsights.map((item) => (
            <div key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <span style={{ width: "22px", height: "22px", borderRadius: "4px", background: Z.accentLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                <Icon name="check" size={14} stroke={Z.accent} strokeWidth={2.6} />
              </span>
              <span style={{ fontSize: "15px", color: Z.textPrimary, lineHeight: 1.55 }}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "28px", padding: "20px 24px", background: Z.bgPale, border: `1px solid ${Z.borderEditorial}`, borderRadius: "6px", maxWidth: "500px", margin: "28px auto 0" }}>
          <p style={{ fontSize: "15px", color: Z.textBody, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
            Това не е мотивационен курс.<br />
            Това е процес на осъзнаване, който може да отвори нова врата в живота ти.
          </p>
        </div>
        <div className="mt-12">
          <PrimaryButton href="#enroll">Включи се — €97 →</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ─── 4 WEEKS ──────────────────────────────────────────────────────── */
function WeeksSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ backgroundColor: Z.bgDark, color: "#ffffff" }}>
      <div className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SectionEyebrow tone="dark">Програмата</SectionEyebrow>
          <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, letterSpacing: "-0.02em", margin: "12px 0" }}>
            Какво ще се случи{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: Z.accentWarm }}>в 4-те седмици?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {weeks.map((w) => (
            <div
              key={w.num}
              className="reveal"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "6px",
                padding: "28px 22px",
                textAlign: "center",
              }}
            >
              <div style={{ fontFamily: SERIF, fontSize: "36px", fontWeight: 600, color: "rgba(138,171,122,0.20)", letterSpacing: "-0.02em", marginBottom: "8px" }}>
                {w.num}
              </div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: Z.accentWarm, letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: "12px" }}>
                {w.label}
              </div>
              <h3 style={{ fontFamily: SERIF, fontSize: "18px", fontWeight: 500, fontStyle: "italic", color: "#ffffff", lineHeight: 1.3 }}>
                {w.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <PrimaryButton href="#enroll">Включи се — €97 →</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ─── OUTCOMES ──────────────────────────────────────────────────────── */
function OutcomesSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ backgroundColor: Z.bgAlt }}>
      <div className="reveal max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <SectionEyebrow>Резултати</SectionEyebrow>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)", fontWeight: 800, color: Z.textPrimary, lineHeight: 1.15, letterSpacing: "-0.02em", margin: "12px 0 14px" }}>
            Какво ще си тръгнеш{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: Z.accent }}>след тези 4 седмици</span>
          </h2>
          <p style={{ fontSize: "16px", color: Z.textBody, lineHeight: 1.7, maxWidth: "480px", margin: "0 auto" }}>
            След този курс много жени осъзнават:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {outcomes.map((o) => (
            <div
              key={o.text}
              className="reveal"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "22px 24px",
                background: Z.bg,
                border: `1px solid ${Z.borderEditorial}`,
                borderRadius: "6px",
              }}
            >
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: Z.accentLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name={o.icon} size={22} stroke={Z.accent} strokeWidth={1.8} />
              </div>
              <span style={{ fontSize: "16px", fontWeight: 600, color: Z.textPrimary, lineHeight: 1.4 }}>{o.text}</span>
            </div>
          ))}
        </div>
        <div className="reveal text-center mt-10">
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.2rem, 2.4vw, 1.6rem)", fontStyle: "italic", fontWeight: 500, color: Z.accent, lineHeight: 1.35 }}>
            И това е първата пукнатина в стария сценарий.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── FOR WHOM ─────────────────────────────────────────────────────── */
function ForWhomSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ backgroundColor: Z.bg }}>
      <div className="reveal max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
        <div style={{ background: Z.bg, border: `1.5px solid ${Z.accentLight}`, borderRadius: "6px", padding: "32px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: Z.accent, letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: "16px", paddingBottom: "12px", borderBottom: `1.5px solid ${Z.accentLight}` }}>
            За кого е този курс
          </div>
          <p style={{ fontSize: "15px", color: Z.textBody, marginBottom: "16px" }}>Този курс е за жени, които:</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {forWhomYes.map((it) => (
              <li key={it} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: Z.textPrimary, lineHeight: 1.55 }}>
                <span style={{ width: "22px", height: "22px", borderRadius: "4px", background: Z.accentLight, color: Z.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <Icon name="check" size={14} stroke={Z.accent} strokeWidth={2.6} />
                </span>
                {it}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: Z.bgAlt, border: `1.5px solid ${Z.border}`, borderRadius: "6px", padding: "32px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: Z.textMuted, letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: "16px", paddingBottom: "12px", borderBottom: `1.5px solid ${Z.border}` }}>
            За кого не е
          </div>
          <p style={{ fontSize: "15px", color: Z.textBody, marginBottom: "16px" }}>Този курс не е за жени, които:</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {forWhomNo.map((it) => (
              <li key={it} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: Z.textBody, lineHeight: 1.55 }}>
                <span style={{ width: "22px", height: "22px", borderRadius: "4px", background: Z.bg, border: `1px solid ${Z.border}`, color: Z.textMuted, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <Icon name="x" size={12} stroke={Z.textMuted} strokeWidth={2.4} />
                </span>
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center">
        <PrimaryButton href="#enroll">Включи се — €97 →</PrimaryButton>
      </div>
    </section>
  );
}

/* ─── MENTOR ───────────────────────────────────────────────────────── */
function MentorSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 md:py-36" style={{ backgroundColor: Z.bgDark, color: "#ffffff" }}>
      <div className="reveal max-w-6xl mx-auto grid md:grid-cols-[380px_1fr] gap-14 lg:gap-20 items-start">
        <div style={{ width: "100%", aspectRatio: "4/3", borderRadius: "8px", overflow: "hidden", position: "relative" }}>
          <Image src="/zhiva/tanya-bio.jpg" alt="Таня Касабова" fill sizes="(max-width: 768px) 100vw, 380px" style={{ objectFit: "cover", objectPosition: "center top" }} />
        </div>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 700, color: Z.accentWarm, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
            Коя съм аз
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "8px" }}>
            Таня Касабова
          </h2>
          <p style={{ fontSize: "15px", color: Z.accentWarm, fontWeight: 600, marginBottom: "22px" }}>
            Работа с жени · Родови динамики · Осъзнаване
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", fontSize: "16px", color: "rgba(255,255,255,0.72)", lineHeight: 1.85, maxWidth: "58ch" }}>
            <p>
              Работя с жени, които са силни за всички, но вътрешно са изтощени.
            </p>
            <p>
              Помагам на жените да излязат от невидимите родови роли и да заемат своята{" "}
              <strong style={{ color: "#ffffff" }}>зряла позиция в живота</strong>.
            </p>
            <p>
              В моя подход съчетавам дълбока психологическа работа с осъзнаване на родовите динамики, които често управляват живота ни повече, отколкото осъзнаваме.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── EMOTIONAL CLOSE ──────────────────────────────────────────────── */
function EmotionalCloseSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 text-center" style={{ backgroundColor: Z.bgPale }}>
      <div className="reveal max-w-3xl mx-auto">
        <p style={{ fontFamily: SERIF, fontSize: "clamp(1.15rem, 2.4vw, 1.55rem)", fontStyle: "italic", color: Z.textBody, lineHeight: 1.55, maxWidth: "600px", margin: "0 auto" }}>
          Ако усещаш, че носиш твърде много, живееш твърде бързо и някъде по пътя си се изгубила — може би е време да спреш.{" "}
          <strong style={{ color: Z.accent }}>И да започнеш да се връщаш към себе си.</strong>
        </p>
      </div>
    </section>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────────────── */
function FAQSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ backgroundColor: Z.bg }}>
      <div className="reveal max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ fontSize: "clamp(2rem, 4.4vw, 3rem)", fontWeight: 800, color: Z.textPrimary, lineHeight: 1.15, letterSpacing: "-0.02em", margin: 0 }}>
            Въпроси и отговори
          </h2>
        </div>
        <ZhivaFAQAccordion items={faqs} accent={Z.accent} accentLight={Z.accentLight} textPrimary={Z.textPrimary} textBody={Z.textBody} border={Z.borderEditorial} bg={Z.bg} />
      </div>
    </section>
  );
}

/* ─── FINAL CTA ────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section id="enroll" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 text-center relative overflow-hidden" style={{ backgroundColor: Z.bgDark, color: "#ffffff" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 70% 80% at 50% 50%, rgba(196,56,90,0.18) 0%, transparent 70%)`, pointerEvents: "none" }} />
      <div className="reveal relative max-w-3xl mx-auto">
        <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.50)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "14px" }}>
          Готова ли си?
        </div>
        <h2 style={{ fontSize: "clamp(2rem, 4.6vw, 3.2rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 auto 16px", maxWidth: "700px" }}>
          Запази мястото си{" "}
          <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: Z.accentWarm }}>
            в курса „ЖИВА"
          </span>
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.6 }}>
          4-седмичен онлайн процес · €97 еднократно
        </p>
        <div className="flex justify-center">
          <EnrollForm product="zhiva" cardOnly variant="dark-rose" submitLabel="Да — готова съм да вляза →" />
        </div>
      </div>
    </section>
  );
}

/* ─── LEGAL FOOTER ─────────────────────────────────────────────────── */
function LegalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: Z.bgAlt, borderTop: `1px solid ${Z.borderEditorial}`, padding: "24px 24px" }}>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <div style={{ fontSize: "12px", color: Z.textMuted, letterSpacing: "0.02em" }}>
          © {year} Coaching Real
        </div>
        <nav style={{ display: "flex", flexWrap: "wrap", gap: "20px", fontSize: "12px", fontWeight: 500, letterSpacing: "0.02em" }}>
          <a href="/privacy" style={{ color: Z.textBody, textDecoration: "none" }}>Политика за поверителност</a>
          <a href="/cookies" style={{ color: Z.textBody, textDecoration: "none" }}>Бисквитки</a>
          <a href="/terms" style={{ color: Z.textBody, textDecoration: "none" }}>Общи условия</a>
        </nav>
      </div>
    </footer>
  );
}

/* ─── HELPERS ──────────────────────────────────────────────────────── */
function SectionEyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <div style={{ fontSize: "11px", fontWeight: 700, color: tone === "dark" ? Z.accentWarm : Z.accent, letterSpacing: "0.13em", textTransform: "uppercase" }}>
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
        padding: "14px 28px",
        background: `linear-gradient(135deg, ${Z.accent} 0%, #9e2a48 100%)`,
        color: "#ffffff",
        fontSize: "15px",
        fontWeight: 700,
        borderRadius: "8px",
        textDecoration: "none",
        boxShadow: `0 8px 22px rgba(196,56,90,0.30)`,
        letterSpacing: "0.01em",
        transition: "transform 0.15s, box-shadow 0.15s",
      }}
    >
      {children}
    </a>
  );
}
