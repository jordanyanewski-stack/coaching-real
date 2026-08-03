import Image from "next/image";
import { ScrollReveal } from "../masterclass/scroll-reveal";
import { FreeDayStickyCTA } from "./sticky-cta";
import { FreeDayFAQAccordion } from "./faq-accordion";
import { FormCueHandler } from "./form-cue";
import {
  MagiCtaLabel,
  MagiEnrollForm,
  MagiOfferProvider,
  MagiOfferSentence,
  MagiPricePill,
  MagiUrgencyBlock,
} from "./price-offer";

export const metadata = {
  title: "Ролевият модел в ерата на AI · 6 мастъркласа с Маги Пенчева",
  description:
    "Шест онлайн мастъркласа на живо за собственици на бизнес — 24–29 август, 18:00–19:00 ч., с Маги Пенчева. Промоционална цена €36 до 17 август, след това €97.",
  alternates: { canonical: "/leadership" },
};

/* ─── DESIGN TOKENS — editorial corporate, tinted neutrals ──────────── */
/* Restrained color strategy: tinted off-whites + deep navy + one blue accent. */
const FD = {
  bg: "#fbfaf6",            // warm editorial cream (was pure #ffffff)
  bgAlt: "#f4f2ec",         // deeper warm tint for alt sections
  bgPale: "#eef0f4",        // cool grey-blue tint for accent sections
  bgDark: "#0a1628",        // deeper, more chromatic navy (was #0a2540)
  bgDark2: "#101e36",       // alt dark
  textPrimary: "#0a1628",
  textBody: "#2d3748",
  textMuted: "#5a6478",
  border: "rgba(10,22,40,0.10)",
  borderStrong: "rgba(10,22,40,0.20)",
  borderEditorial: "rgba(10,22,40,0.16)",
  accent: "#2c4a87",         // dialed-down navy-blue (was bright royal #2563eb)
  accentDark: "#1f3a6d",
  accentLight: "#e7ecf6",    // tinted accent surface
  rule: "#0a1628",           // editorial rule lines
};

/* Editorial serif: Charter (system) → Tinos → Georgia. */
const SERIF =
  '"Charter", "Tinos", Georgia, "Times New Roman", serif';

/* ─── ICON COMPONENT — corporate stroke icons (no emojis) ───────────── */
type IconName =
  | "compass" | "cpu" | "target" | "chart" | "star" | "map" | "users"
  | "lightbulb" | "file" | "zap" | "search" | "flame" | "check" | "x"
  | "arrow-right" | "calendar" | "spark";

function Icon({
  name,
  size = 22,
  stroke = "#2563eb",
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
    case "compass":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "cpu":
      return (
        <svg {...p}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      );
    case "target":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "chart":
      return (
        <svg {...p}>
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      );
    case "star":
      return (
        <svg {...p}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "map":
      return (
        <svg {...p}>
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
          <line x1="8" y1="2" x2="8" y2="18" />
          <line x1="16" y1="6" x2="16" y2="22" />
        </svg>
      );
    case "users":
      return (
        <svg {...p}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg {...p}>
          <line x1="9" y1="18" x2="15" y2="18" />
          <line x1="10" y1="22" x2="14" y2="22" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        </svg>
      );
    case "file":
      return (
        <svg {...p}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    case "zap":
      return (
        <svg {...p}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "search":
      return (
        <svg {...p}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "flame":
      return (
        <svg {...p}>
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "check":
      return (
        <svg {...p}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case "x":
      return (
        <svg {...p}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...p}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...p}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "spark":
      return (
        <svg {...p}>
          <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4" />
        </svg>
      );
    default:
      return null;
  }
}

/* ─── DATA ──────────────────────────────────────────────────────────── */
const surveyPainPoints: { icon: IconName; title: string; body: string; stat: string }[] = [
  {
    icon: "compass",
    title: "„Правя твърде много сам.“",
    body: "Бизнесът расте, но всяко важно решение и всяка спешна задача продължават да стигат до теб.",
    stat: "Претоварване вместо лидерство",
  },
  {
    icon: "cpu",
    title: "„Искам да делегирам, но не вярвам, че ще бъде направено добре.“",
    body: "Контролът изглежда по-сигурен, но те превръща в тесния участък, през който трябва да мине всичко.",
    stat: "Контрол вместо доверие",
  },
  {
    icon: "target",
    title: "„AI се движи по-бързо, отколкото успявам да реагирам.“",
    body: "Имаш нужда не от още инструменти, а от ясна стратегия как да ги превърнеш в предимство за екипа и бизнеса.",
    stat: "Реакция вместо посока",
  },
];

const weeks = [
  {
    num: "01",
    label: "24 август",
    theme: "ЛИДЕРЪТ · Осъзнатост",
    title: "Лидерът зад бизнеса",
    items: [
      "Твоите ценности като ръководител",
      "Силните страни, които движат бизнеса",
      "Мисловните модели, които те ограничават",
    ],
    tool: "Карта на себе си като лидер",
  },
  {
    num: "02",
    label: "25 август",
    theme: "ПОСОКА · Авторитет",
    title: "Как да ръководиш, без да правиш всичко сам",
    items: [
      "Управление срещу лидерство",
      "Авторитет, основан на доверие",
      "От изпълнител към водач на екипа",
    ],
    tool: "Стратегия за новата ти лидерска роля",
  },
  {
    num: "03",
    label: "26 август",
    theme: "ДЕЛЕГИРАНЕ · Доверие",
    title: "Делегиране без страх от загуба на контрол",
    items: [
      "Какво, на кого и кога да делегираш",
      "Ясни очаквания без микромениджмънт",
      "Отговорност без загуба на контрол",
    ],
    tool: "Практическа рамка за делегиране",
  },
  {
    num: "04",
    label: "27 август",
    theme: "ЕКИП · Култура",
    title: "Екипът, който искаш — как се изгражда",
    items: [
      "Осъзнатост и ангажираност в екипа",
      "Култура, която работи и без теб",
      "AI като инструмент за по-добро управление",
    ],
    tool: "План за по-силен екипен ритъм",
  },
  {
    num: "05",
    label: "28 август",
    theme: "УСТОЙЧИВОСТ · Фокус",
    title: "Теб кой те води — устойчивост на собственика",
    items: [
      "Фокус и енергия без прегаряне",
      "Лична система за седмичен преглед",
      "Конкурентност в ерата на AI",
    ],
    tool: "Личен план за устойчивост",
  },
  {
    num: "06",
    label: "29 август",
    theme: "ДЕЙСТВИЕ · 90 дни",
    title: "90-дневен план за теб и бизнеса ти",
    items: [
      "Конкретни приоритети за следващото тримесечие",
      "Стъпки за теб като лидер и за екипа",
      "Личен манифест към следващото ниво",
    ],
    tool: "90-дневен план и подписан манифест",
  },
];

const youGetCards: { icon: IconName; title: string; body: string }[] = [
  { icon: "compass", title: "Ясна лидерска карта", body: "Разбираш кой си като ръководител, кои са силните ти страни и кое те задържа." },
  { icon: "chart", title: "Стратегия за делегиране", body: "Имаш практична рамка какво, на кого и как да повериш, без да губиш качество." },
  { icon: "star", title: "По-силен екипен ритъм", body: "Създаваш условия хората да поемат отговорност и да се движат в обща посока." },
  { icon: "map", title: "90-дневен план", body: "Излизаш с конкретни приоритети и последователни стъпки за следващото тримесечие." },
  { icon: "users", title: "Общност и обратна връзка", body: "Работиш на живо с Маги и група собственици, които преминават през сходни предизвикателства." },
  { icon: "lightbulb", title: "AI като предимство", body: "Виждаш къде технологията може да освободи време и да подобри начина, по който управляваш." },
];

const materials: { icon: IconName; week: string; title: string; items: string[] }[] = [
  {
    icon: "zap",
    week: "Включено",
    title: "6 мастъркласа на живо",
    items: [
      "60 минути всяка вечер",
      "Директно с Маги в Zoom",
      "Време за въпроси и обратна връзка",
    ],
  },
  {
    icon: "search",
    week: "Включено",
    title: "Работни материали",
    items: [
      "Практични лидерски рамки",
      "Шаблон за делегиране",
      "Система за седмичен преглед",
    ],
  },
  {
    icon: "star",
    week: "Включено",
    title: "Записи на сесиите",
    items: [
      "Гледаш пропуснатата вечер",
      "Връщаш се към ключовите упражнения",
      "Учиш в собственото си темпо след срещата",
    ],
  },
  {
    icon: "map",
    week: "Включено",
    title: "90-дневен план за действие",
    items: [
      "Приоритети за следващото тримесечие",
      "Стъпки за теб и екипа ти",
      "Личен манифест към следващото ниво",
    ],
  },
];

const forYouYes = [
  "Имаш собствен бизнес и правиш твърде много сам",
  "Имаш екип, но хората не се движат с желаното темпо и посока",
  "Искаш да делегираш, без да губиш контрол върху качеството",
  "Искаш да използваш AI стратегически, а не хаотично",
  "Готов/а си да започнеш промяната първо от себе си",
  "Можеш да отделиш по 60 минути в шест последователни вечери",
];

const forYouNo = [
  "Търсиш бързи трикове без реална работа върху себе си",
  "Убеден/а си, че проблемът е само в екипа",
  "Не си готов/а да погледнеш честно към начина, по който ръководиш",
  "Очакваш промяна без последователно действие",
];

const voices = [
  {
    initial: "Р",
    quote: "Имам собствен бизнес, но усещам, че вместо да го водя, непрекъснато гася пожари и върша работата на всички.",
    name: "Р. Р.",
    role: "Участник в анкетата",
  },
  {
    initial: "К",
    quote: "Искам да делегирам повече, но когато нещо е важно, автоматично го поемам обратно, защото така ми изглежда по-сигурно.",
    name: "К. П.",
    role: "Участник в анкетата",
  },
  {
    initial: "Д",
    quote: "Знам, че AI променя начина, по който работим. Имам нужда от ясна посока как да го използвам като лидер, а не просто от още инструменти.",
    name: "Д. П.",
    role: "Участник в анкетата",
  },
];

const mentorSkills = [
  "Стратегическо управление на хора (HR Business Partnering)",
  "Управление на таланти и планиране на приемствеността",
  "Развитие на лидери и коучинг",
  "Обучение и Развитие (L&D стратегии и програми)",
  "Управление на промяната и организационна трансформация",
  "Управление на проекти (вкл. вътрешен PMI трейнър)",
  "Комуникация, фасилитация и работа с екипи",
  "Гъвкаво и иновативно мислене",
];

const mentorCerts = [
  "Master Business NLP Coach — NLP Training Center",
  "Emotional Intelligence Practitioner — Genos International",
  "Executive Coaching — LinkedIn Learning",
  "Four Quadrant Quantum Thinking — Erickson Coaching",
  "Train the Trainer / Train the E-Trainer",
  "Сертификати по емоционална интелигентност, mindfulness и лидерство",
  "Сертификации по ISO стандарти и интегрирани системи за управление",
];

const meetingDates = [
  { num: "Ден 01", date: "24 авг.", day: "Лидерът" },
  { num: "Ден 02", date: "25 авг.", day: "Посоката" },
  { num: "Ден 03", date: "26 авг.", day: "Делегирането" },
  { num: "Ден 04", date: "27 авг.", day: "Екипът" },
  { num: "Ден 05", date: "28 авг.", day: "Устойчивостта" },
  { num: "Ден 06", date: "29 авг.", day: "Планът" },
];

const marqueeKeywords = [
  "Лидерство без власт",
  "Делегиране без страх",
  "Екипна култура",
  "AI стратегия",
  "Фокус и устойчивост",
  "90-дневен план",
  "Личен манифест",
];

const faqs = [
  {
    q: "Колко струва участието?",
    a: "Промоционалната цена е €36 до 17 август включително. От 18 август редовната цена е €97 за всичките шест мастъркласа на живо, записите и работните материали. Без абонамент и без скрити такси.",
  },
  {
    q: "Какви работни материали получавам?",
    a: "Получаваш практични рамки за лидерство и делегиране, система за седмичен преглед и шаблон за твоя 90-дневен план. Реални инструменти, не само информация.",
  },
  {
    q: "Трябва ли да имам технически познания по AI?",
    a: "Не. Фокусът е върху лидерството и стратегическото използване на AI в бизнеса, а не върху програмиране или техническа работа.",
  },
  {
    q: "Кога се провеждат срещите?",
    a: "От 24 до 29 август 2026 г., всяка вечер от 18:00 до 19:00 ч., онлайн на живо в Zoom.",
  },
  {
    q: "Ще има ли записи?",
    a: "Да. Получаваш запис на всяка сесия, за да наваксаш пропусната вечер или да се върнеш към важните упражнения.",
  },
  {
    q: "Какво ще имам след шестте вечери?",
    a: "Ясна картина на себе си като лидер, стратегия за делегиране и развитие на екипа, лична система за устойчивост и конкретен 90-дневен план.",
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────────── */
export default function FreeDayPage() {
  return (
    <MagiOfferProvider>
      <div style={{ fontFamily: "var(--font-mv, sans-serif)", backgroundColor: FD.bg }}>
        <ScrollReveal />
        <FormCueHandler />
        <FreeDayHeader />
        <HeroSection />
        <MarqueeStrip />
        <ScheduleSection />
        <ProblemSection />
        <WeeksProgramSection />
        <WhatYouGetSection />
        <MaterialsSection />
        <ForWhomSection />
        <VoicesSection />
        <MentorSection />
        <FAQSection />
        <FinalCTASection />
        <FreeDayLegalFooter />
        <FreeDayStickyCTA />
      </div>
    </MagiOfferProvider>
  );
}

/* ─── HEADER — floating CTA, position handled in CSS for mobile/desktop split ─ */
function FreeDayHeader() {
  return (
    <a
      href="#enroll"
      className="fd-top-cta"
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "11px 22px",
        background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: 700,
        borderRadius: "6px",
        textDecoration: "none",
        letterSpacing: "0.01em",
        boxShadow: "0 8px 22px rgba(37,99,235,0.35), 0 1px 2px rgba(0,0,0,0.06)",
        whiteSpace: "nowrap",
      }}
    >
      <MagiCtaLabel />
    </a>
  );
}

/* ─── HERO ───────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="fd-hero relative px-6 md:px-12 lg:px-20 pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden flex items-center"
      style={{
        backgroundColor: FD.bgDark,
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      {/* Background ambient gradients */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(37,99,235,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 80% 20%, rgba(96,165,250,0.10) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center"
        style={{ zIndex: 1 }}
      >
        {/* Left — copy */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "4px",
              border: "1px solid rgba(96,165,250,0.32)",
              backgroundColor: "rgba(96,165,250,0.10)",
              fontSize: "11px",
              fontWeight: 700,
              color: "#93c5fd",
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              marginBottom: "26px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#60a5fa",
                animation: "fdPulseDot 2s ease-in-out infinite",
              }}
            />
            6 мастъркласа · 24–29 август · На живо
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 5.6vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#ffffff",
            }}
          >
            Ролевият модел, който бизнесът ти заслужава{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: "#a5b8d8" }}>
              в ерата на AI
            </span>
          </h1>

          <p
            style={{
              marginTop: "22px",
              fontSize: "17px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.72)",
              maxWidth: "520px",
            }}
          >
            Шест онлайн мастъркласа на живо за собственици на бизнес, които
            искат да ръководят по-ефективно себе си и хората около тях.
          </p>

        </div>

        {/* Right — sign-up form + format pills */}
        <aside style={{ position: "relative" }}>
          <div
            style={{
              fontSize: "10px",
              fontWeight: 600,
              color: "#a5b8d8",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "18px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ width: "32px", height: "1px", background: "#a5b8d8" }} />
            Запази мястото си
          </div>

          <MagiEnrollForm />
          <MagiUrgencyBlock />

          {/* Format pills — below the form */}
          <div
            style={{
              marginTop: "28px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,0.16)",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {[
              "6 срещи на живо",
              "60 минути вечер",
              "Работни материали",
            ].map((p) => (
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
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    backgroundColor: "#a5b8d8",
                  }}
                />
                {p}
              </span>
            ))}
            <MagiPricePill />
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ─── MARQUEE — editorial running headline ──────────────────────────── */
function MarqueeStrip() {
  const items = [...marqueeKeywords, ...marqueeKeywords];
  return (
    <div
      style={{
        background: FD.bgDark,
        color: "#ffffff",
        padding: "18px 0",
        overflow: "hidden",
        borderTop: `1px solid rgba(255,255,255,0.08)`,
        borderBottom: `1px solid rgba(255,255,255,0.08)`,
      }}
    >
      <div
        className="fd-marquee"
        style={{
          display: "flex",
          gap: "0",
          alignItems: "center",
          whiteSpace: "nowrap",
        }}
      >
        {items.map((kw, i) => (
          <div
            key={`${kw}-${i}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "32px",
              paddingLeft: "32px",
              fontFamily: SERIF,
              fontSize: "16px",
              fontStyle: "italic",
              fontWeight: 400,
              color: "rgba(255,255,255,0.78)",
              letterSpacing: "-0.005em",
              flexShrink: 0,
            }}
          >
            <span
              aria-hidden
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: "#a5b8d8",
              }}
            />
            {kw}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── SCHEDULE ──────────────────────────────────────────────────────── */
function ScheduleSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-12 md:py-14"
      style={{
        backgroundColor: FD.bgAlt,
        borderTop: `1px solid ${FD.border}`,
        borderBottom: `1px solid ${FD.border}`,
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Editorial header — single line, no redundant sidebars */}
        <div
          style={{
            textAlign: "center",
            fontSize: "11px",
            color: FD.accent,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          <span style={{ flex: "0 1 60px", height: "1px", background: FD.borderEditorial }} />
          Програма
          <span style={{ flex: "0 1 60px", height: "1px", background: FD.borderEditorial }} />
        </div>
        <h3
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 400,
            color: FD.textPrimary,
            textAlign: "center",
            margin: "0 0 8px",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          6 вечери <em style={{ color: FD.accent }}>· на живо</em>
        </h3>
        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            color: FD.textMuted,
            letterSpacing: "0.04em",
            margin: "0 0 28px",
          }}
        >
          24–29 август · 18:00–19:00 ч. · Zoom
        </p>

        {/* 4 dates: 2x2 on mobile, 1x4 on desktop */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mx-auto"
          style={{ maxWidth: "1000px" }}
        >
          {meetingDates.map((m, i) => (
            <div
              key={m.num}
              style={{
                background: FD.bg,
                border: `1px solid ${FD.borderEditorial}`,
                borderRadius: "4px",
                padding: "16px 12px",
                textAlign: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: "11px",
                  fontWeight: 600,
                  color: FD.accent,
                  letterSpacing: "0.06em",
                  marginBottom: "6px",
                }}
              >
                0{i + 1}
              </div>
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: "22px",
                  fontWeight: 500,
                  color: FD.textPrimary,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                }}
              >
                {m.date}
              </div>
              <div style={{ fontSize: "11px", color: FD.textMuted, marginTop: "4px", letterSpacing: "0.04em" }}>
                {m.day.toLowerCase()}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <PrimaryButton href="#enroll">Запази място — €36 →</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ─── PROBLEM ───────────────────────────────────────────────────────── */
function ProblemSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: FD.bg }}
    >
      <div className="reveal max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionEyebrow>Разпознаваш ли се?</SectionEyebrow>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 800,
              color: FD.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0",
            }}
          >
            Изградил/а си бизнес.
            <br />
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: FD.accent }}>
              Но не трябва да носиш всичко сам/а.
            </span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: FD.textBody,
              lineHeight: 1.7,
              maxWidth: "440px",
              marginBottom: "28px",
            }}
          >
            Имаш екип и резултати. И въпреки това понякога усещаш, че си
            най-претовареният човек в стаята. Разпознаваш ли се?
          </p>
          <PrimaryButton href="#enroll">Запази място — €36 →</PrimaryButton>
        </div>

        {/* Editorial layout: featured top quote + 2 supporting tucked below */}
        <div>
          {/* Featured pain — large pull-quote, NOT a card */}
          <div
            style={{
              borderBottom: `1px solid ${FD.borderEditorial}`,
              padding: "0 0 28px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                fontWeight: 600,
                color: FD.accent,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontFamily: SERIF, fontSize: "14px", color: FD.textPrimary, fontWeight: 600, letterSpacing: 0 }}>
                01
              </span>
              <span style={{ flex: 1, height: "1px", background: FD.borderEditorial }} />
              <span>{surveyPainPoints[0]!.stat}</span>
            </div>
            <p
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(1.4rem, 2.6vw, 1.85rem)",
                fontWeight: 400,
                color: FD.textPrimary,
                lineHeight: 1.3,
                margin: "0 0 14px",
                letterSpacing: "-0.005em",
              }}
            >
              {surveyPainPoints[0]!.title}
            </p>
            <p
              style={{
                fontSize: "15px",
                color: FD.textBody,
                lineHeight: 1.7,
                margin: 0,
                maxWidth: "55ch",
              }}
            >
              {surveyPainPoints[0]!.body}
            </p>
          </div>

          {/* Two secondary pains — text-only, indented numbered list */}
          <div className="flex flex-col" style={{ gap: "26px" }}>
            {surveyPainPoints.slice(1).map((p, i) => (
              <div
                key={p.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  gap: "20px",
                  alignItems: "baseline",
                }}
              >
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: "18px",
                    fontWeight: 600,
                    color: FD.accent,
                    letterSpacing: 0,
                  }}
                >
                  0{i + 2}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: SERIF,
                      fontSize: "19px",
                      fontWeight: 600,
                      color: FD.textPrimary,
                      lineHeight: 1.35,
                      margin: "0 0 6px",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14.5px",
                      color: FD.textBody,
                      lineHeight: 1.7,
                      margin: "0 0 8px",
                      maxWidth: "55ch",
                    }}
                  >
                    {p.body}
                  </p>
                  <div
                    style={{
                      fontSize: "11px",
                      color: FD.textMuted,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {p.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 4 WEEKS PROGRAM ────────────────────────────────────────────────── */
function WeeksProgramSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: FD.bgDark, color: "#ffffff" }}
    >
      <div className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SectionEyebrow tone="dark">Програмата</SectionEyebrow>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0 14px",
            }}
          >
            6 вечери.<br className="md:hidden" /> <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: "#a5b8d8" }}>6 стъпки към действие.</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Всяка вечер разглежда една конкретна част от лидерството ти. До
            края имаш не само знания, а личен 90-дневен план.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {weeks.map((w) => (
            <div
              key={w.num}
              className="reveal"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "6px",
                padding: "26px 22px",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.25s, border-color 0.25s",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#60a5fa",
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  position: "relative",
                }}
              >
                {w.label}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.04em",
                  marginBottom: "14px",
                  position: "relative",
                }}
              >
                {w.theme}
              </div>
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.3,
                  marginBottom: "16px",
                  position: "relative",
                }}
              >
                {w.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {w.items.map((it) => (
                  <li
                    key={it}
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.62)",
                      lineHeight: 1.55,
                      display: "flex",
                      gap: "8px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        backgroundColor: "#60a5fa",
                        marginTop: "8px",
                        flexShrink: 0,
                      }}
                    />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <PrimaryButton href="#enroll">Запази място — €36 →</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ─── WHAT YOU GET ──────────────────────────────────────────────────── */
function WhatYouGetSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: FD.bgPale }}
    >
      <div className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SectionEyebrow>Какво получаваш</SectionEyebrow>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 800,
              color: FD.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0 14px",
            }}
          >
            До края ще имаш <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: FD.accent }}>конкретен план.</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: FD.textBody,
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Ясна лидерска карта, практични инструменти и конкретни стъпки,
            приложими още на следващия ден.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {youGetCards.map((c) => (
            <div
              key={c.title}
              className="reveal"
              style={{
                background: FD.bg,
                border: `1px solid ${FD.borderEditorial}`,
                borderRadius: "6px",
                padding: "28px",
                transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "6px",
                  background: FD.accentLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "18px",
                }}
              >
                <Icon name={c.icon} size={22} stroke={FD.accent} strokeWidth={1.8} />
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: FD.textPrimary,
                  marginBottom: "8px",
                  letterSpacing: "-0.01em",
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: FD.textBody,
                  lineHeight: 1.65,
                }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <PrimaryButton href="#enroll">Запази място — €36 →</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ─── MATERIALS PREVIEW ─────────────────────────────────────────────── */
function MaterialsSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: FD.bgDark2, color: "#ffffff" }}
    >
      <div className="reveal max-w-6xl mx-auto">
        <div className="mb-12">
          <SectionEyebrow tone="dark">Какво е включено</SectionEyebrow>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0 14px",
            }}
          >
            Всичко необходимо{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: "#a5b8d8" }}>за реално действие</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              maxWidth: "560px",
            }}
          >
            Срещи на живо, работни материали, записи и конкретен план, който
            можеш да приложиш в своя бизнес.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {materials.map((m) => (
            <div
              key={m.title}
              className="reveal"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "6px",
                padding: "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "6px",
                    background: "rgba(96,165,250,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon name={m.icon} size={20} stroke="#60a5fa" strokeWidth={1.8} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#60a5fa",
                      letterSpacing: "0.10em",
                      textTransform: "uppercase",
                      marginBottom: "2px",
                    }}
                  >
                    {m.week}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#ffffff",
                      lineHeight: 1.3,
                    }}
                  >
                    {m.title}
                  </div>
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {m.items.map((it) => (
                  <li
                    key={it}
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.62)",
                      lineHeight: 1.55,
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "#60a5fa", fontWeight: 700, marginTop: "1px" }}>›</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <PrimaryButton href="#enroll">Запази място — €36 →</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ─── FOR WHOM ──────────────────────────────────────────────────────── */
function ForWhomSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: FD.bg }}
    >
      <div className="reveal max-w-6xl mx-auto">
        <div className="mb-10">
          <SectionEyebrow>Подходящо ли е за теб?</SectionEyebrow>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 800,
              color: FD.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0 0",
            }}
          >
            Програмата е създадена за теб, ако…
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* YES box */}
          <div
            style={{
              background: FD.bg,
              border: `1.5px solid ${FD.accentLight}`,
              borderRadius: "6px",
              padding: "32px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: FD.accent,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                marginBottom: "16px",
                paddingBottom: "12px",
                borderBottom: `1.5px solid ${FD.accentLight}`,
              }}
            >
              ✓ Точно за теб
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {forYouYes.map((it) => (
                <li
                  key={it}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    fontSize: "15px",
                    color: FD.textPrimary,
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "4px",
                      background: FD.accentLight,
                      color: FD.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <Icon name="check" size={14} stroke={FD.accent} strokeWidth={2.6} />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>

          {/* NO box */}
          <div
            style={{
              background: FD.bgAlt,
              border: `1.5px solid ${FD.border}`,
              borderRadius: "6px",
              padding: "32px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: FD.textMuted,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                marginBottom: "16px",
                paddingBottom: "12px",
                borderBottom: `1.5px solid ${FD.border}`,
              }}
            >
              ✗ Може би не е за теб
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {forYouNo.map((it) => (
                <li
                  key={it}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    fontSize: "15px",
                    color: FD.textBody,
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "4px",
                      background: FD.bg,
                      border: `1px solid ${FD.border}`,
                      color: FD.textMuted,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <Icon name="x" size={12} stroke={FD.textMuted} strokeWidth={2.4} />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <PrimaryButton href="#enroll">Запази място — €36 →</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ─── VOICES ────────────────────────────────────────────────────────── */
function VoicesSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: FD.bgAlt }}
    >
      <div className="reveal max-w-6xl mx-auto">
        <div className="mb-8">
          <SectionEyebrow>Разпознаваш ли се?</SectionEyebrow>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 800,
              color: FD.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0 28px",
            }}
          >
            Думите на собственици,
            <br />
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: FD.accent }}>които искат да водят по-добре.</span>
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            flexWrap: "wrap",
            background: FD.bgDark,
            color: "#ffffff",
            borderRadius: "6px",
            padding: "28px 36px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              fontFamily: SERIF,
              fontSize: "96px",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              flexShrink: 0,
            }}
          >
            80
          </div>
          <div style={{ flex: "1 1 300px" }}>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.7,
              }}
            >
              Участници в анкетата споделиха реалните си предизвикателства,
              страхове и желани резултати. Курсът е{" "}
              <strong style={{ color: "#60a5fa" }}>
                изграден изцяло върху техните отговори
              </strong>{" "}
              — не върху предположения.
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
                marginTop: "8px",
              }}
            >
              78% се абонираха за имейл листа · 41% са готови да действат веднага
            </p>
          </div>
        </div>

        {/* Editorial: 1 lead quote (full-width, big serif) + 2 supporting (text columns) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.8fr) minmax(0, 1fr)",
            gap: "48px",
            alignItems: "start",
          }}
          className="fd-voices-grid"
        >
          {/* Lead quote */}
          <figure style={{ margin: 0 }}>
            <blockquote
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(1.6rem, 3.2vw, 2.3rem)",
                fontWeight: 400,
                color: FD.textPrimary,
                lineHeight: 1.3,
                margin: 0,
                letterSpacing: "-0.005em",
              }}
            >
              <span style={{ color: FD.accent }}>“</span>
              {voices[0]!.quote.replace(/[“„]/g, "").replace(/[”“]/g, "")}
              <span style={{ color: FD.accent }}>”</span>
            </blockquote>
            <figcaption
              style={{
                marginTop: "24px",
                paddingTop: "16px",
                borderTop: `1px solid ${FD.borderEditorial}`,
                fontSize: "12px",
                color: FD.textMuted,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {voices[0]!.name} · {voices[0]!.role}
            </figcaption>
          </figure>

          {/* 2 supporting — stacked, text-only, separated by editorial rule lines */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {voices.slice(1).map((v, i) => (
              <div
                key={v.name + v.quote}
                style={{
                  paddingTop: i === 0 ? 0 : "24px",
                  paddingBottom: "24px",
                  borderBottom: i === 0 ? `1px solid ${FD.borderEditorial}` : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: SERIF,
                    fontSize: "16px",
                    fontStyle: "italic",
                    color: FD.textPrimary,
                    lineHeight: 1.55,
                    margin: "0 0 10px",
                  }}
                >
                  <span style={{ color: FD.accent }}>“</span>
                  {v.quote.replace(/[“„]/g, "").replace(/[”“]/g, "")}
                  <span style={{ color: FD.accent }}>”</span>
                </p>
                <div
                  style={{
                    fontSize: "11px",
                    color: FD.textMuted,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  — {v.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 text-center">
          <PrimaryButton href="#enroll">Запази място — €36 →</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ─── MENTOR ────────────────────────────────────────────────────────── */
function MentorSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-24 md:py-36"
      style={{ backgroundColor: FD.bgDark, color: "#ffffff" }}
    >
      <div className="reveal max-w-6xl mx-auto grid lg:grid-cols-[420px_1fr] gap-14 lg:gap-24 items-start">
        <div>
          <div
            style={{
              width: "100%",
              aspectRatio: "3/4",
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
              background: "#0a2540",
            }}
          >
            <Image
              src="/magi-leadership/magi-mentor.webp"
              alt="Маги Пенчева — HR лидер с 17 години опит"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                background: FD.accent,
                color: "#ffffff",
                fontSize: "11px",
                fontWeight: 700,
                padding: "7px 14px",
                borderRadius: "4px",
                letterSpacing: "0.04em",
                boxShadow: "0 6px 16px rgba(37,99,235,0.45)",
              }}
            >
              17 ГОДИНИ HR ОПИТ
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              "Координатор Training Center, LATECOERE",
              "Бивш Group Lead L&D, Liebherr Hausgeräte Marica",
              "Бивш HR — SKF & Molson Coors (Каменица)",
            ].map((c) => (
              <div
                key={c}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "#60a5fa",
                    flexShrink: 0,
                  }}
                />
                {c}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#60a5fa",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Твоят ментор
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "8px",
            }}
          >
            Маги Пенчева
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#60a5fa",
              fontWeight: 600,
              marginBottom: "22px",
              letterSpacing: "0.01em",
            }}
          >
            HR Лидер · Talent Management · L&D Стратег
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              fontSize: "16px",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.85,
              marginBottom: "44px",
              maxWidth: "62ch",
            }}
          >
            <p>
              Маги Пенчева е опитен HR лидер с{" "}
              <strong style={{ color: "#ffffff" }}>над 17 години професионален опит</strong>{" "}
              в областта на управлението на хора, организационното развитие и
              talent management в международни компании от производствения и
              корпоративния сектор.
            </p>
            <p>
              В момента заема позицията{" "}
              <strong style={{ color: "#ffffff" }}>
                Координатор на вътрешния Трейнинг Център
              </strong>{" "}
              на международната компания LATECOERE.
            </p>
            <p>
              Преди това е заемала позиции като Бизнес партньор в{" "}
              <strong style={{ color: "#ffffff" }}>Liebherr Hausgeräte Marica</strong>,
              отговорна за стратегическото управление на хората в няколко
              ключови направления, обхващащи над 850 служители. Изпълнявала е
              ролята на{" "}
              <em>Group Lead Organizational & Personnel Development and Talent Management</em>,
              ръководейки процеси за развитие на таланти, планиране на
              приемственост и лидерски програми на групово ниво.
            </p>
            <p>
              Заемала е ключови HR позиции в компании като{" "}
              <strong style={{ color: "#ffffff" }}>SKF</strong> и{" "}
              <strong style={{ color: "#ffffff" }}>Molson Coors (Каменица)</strong>,
              водейки стратегически инициативи в областта на employer branding,
              leadership development, learning & development и организационна
              трансформация.
            </p>
          </div>

        </div>
      </div>

      {/* Skills + Certs — full width below the photo+bio grid, two columns */}
      <div className="reveal max-w-6xl mx-auto mt-14 lg:mt-20 grid md:grid-cols-2 gap-6 lg:gap-8">
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "6px",
            padding: "30px 28px",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#60a5fa",
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Ключови умения
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {mentorSkills.map((s) => (
              <li
                key={s}
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.55,
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "#60a5fa", flexShrink: 0, fontWeight: 600 }}>›</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "6px",
            padding: "30px 28px",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#60a5fa",
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Сертификати и квалификации
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {mentorCerts.map((c) => (
              <li
                key={c}
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.55,
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "#60a5fa", flexShrink: 0, fontWeight: 600 }}>›</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-14 text-center">
        <PrimaryButton href="#enroll">Запази място — €36 →</PrimaryButton>
      </div>
    </section>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────────────── */
function FAQSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: FD.bg }}
    >
      <div className="reveal max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            style={{
              fontSize: "clamp(2rem, 4.4vw, 3rem)",
              fontWeight: 800,
              color: FD.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Въпроси и отговори
          </h2>
        </div>

        <FreeDayFAQAccordion
          items={faqs}
          accent={FD.accent}
          accentLight={FD.accentLight}
          textPrimary={FD.textPrimary}
          textBody={FD.textBody}
          border={FD.borderEditorial}
          bg={FD.bg}
        />
        <div className="mt-12 text-center">
          <PrimaryButton href="#enroll">Запази място — €36 →</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 text-center relative overflow-hidden"
      style={{ backgroundColor: FD.bgDark, color: "#ffffff" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(37,99,235,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="reveal relative max-w-3xl mx-auto">
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.50)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Готов/а ли си?
        </div>
        <h2
          style={{
            fontSize: "clamp(2rem, 4.6vw, 3.2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: "0 auto 16px",
            maxWidth: "700px",
          }}
        >
          Запази мястото си за{" "}
          <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: "#a5b8d8" }}>шест вечери на действие.</span>
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.62)",
            maxWidth: "540px",
            margin: "0 auto 30px",
            lineHeight: 1.7,
          }}
        >
          24–29 август, от 18:00 до 19:00 ч. Шест срещи на живо, работни
          материали, записи и личен 90-дневен план. <MagiOfferSentence />
        </p>
        <div
          id="enroll"
          className="flex justify-center"
          style={{ borderRadius: "8px", padding: "8px" }}
        >
          <MagiEnrollForm />
        </div>
      </div>
    </section>
  );
}

/* ─── LEGAL FOOTER — minimal, just legal links ──────────────────────── */
function FreeDayLegalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        backgroundColor: FD.bgAlt,
        borderTop: `1px solid ${FD.borderEditorial}`,
        padding: "24px 24px",
      }}
    >
      <div
        className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-4"
      >
        <div
          style={{
            fontSize: "12px",
            color: FD.textMuted,
            letterSpacing: "0.02em",
          }}
        >
          © {year} Coaching Real
        </div>
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          <a href="/privacy" style={{ color: FD.textBody, textDecoration: "none" }}>
            Политика за поверителност
          </a>
          <a href="/cookies" style={{ color: FD.textBody, textDecoration: "none" }}>
            Бисквитки
          </a>
          <a href="/terms" style={{ color: FD.textBody, textDecoration: "none" }}>
            Общи условия
          </a>
        </nav>
      </div>
    </footer>
  );
}

/* ─── HELPERS ───────────────────────────────────────────────────────── */
function SectionEyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div
      style={{
        fontSize: "11px",
        fontWeight: 700,
        color: tone === "dark" ? "#60a5fa" : FD.accent,
        letterSpacing: "0.13em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </div>
  );
}

function PrimaryButton({ href }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "14px 28px",
        background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
        color: "#ffffff",
        fontSize: "15px",
        fontWeight: 700,
        borderRadius: "8px",
        textDecoration: "none",
        boxShadow: "0 8px 22px rgba(37,99,235,0.30)",
        letterSpacing: "0.01em",
        transition: "transform 0.15s, box-shadow 0.15s",
      }}
    >
      <MagiCtaLabel />
    </a>
  );
}
