import Image from "next/image";
import { ScrollReveal } from "../masterclass/scroll-reveal";
import { EnrollForm } from "../masterclass/enroll-form";
import { RodovFAQAccordion } from "./faq-accordion";
import { RodovStickyCTA } from "./sticky-cta";

export const metadata = {
  title: "Прекъсни родовия модел в любовта · 4-седмичен курс €97 | Галя Тодорова",
  description:
    "4-седмичен онлайн курс за разпознаване и прекъсване на наследени родови модели в любовта. Създаден от Галя Тодорова — родов консултант и практик по родова терапия. €97 еднократно.",
  openGraph: {
    images: ["/rodov-model/cover.jpg"],
  },
};

/* ─── DESIGN TOKENS — warm earth tones, intimate therapy feel ──────── */
const T = {
  bg: "#faf8f5",
  bgAlt: "#f3efe9",
  bgPale: "#f0ece4",
  bgDark: "#1a1410",
  bgDark2: "#231d17",
  textPrimary: "#1a1410",
  textBody: "#3d3530",
  textMuted: "#7a6e63",
  border: "rgba(26,20,16,0.10)",
  borderStrong: "rgba(26,20,16,0.20)",
  borderEditorial: "rgba(26,20,16,0.16)",
  accent: "#8b6914",
  accentWarm: "#c9a23c",
  accentLight: "#f5ecd4",
  rule: "#1a1410",
};

const SERIF =
  '"Charter", "Tinos", Georgia, "Times New Roman", serif';

/* ─── ICON COMPONENT ───────────────────────────────────────────────── */
type IconName =
  | "heart" | "expand" | "shield" | "chain" | "flame" | "file"
  | "check" | "user" | "arrow-down" | "question" | "star" | "eye" | "play";

function Icon({
  name,
  size = 22,
  stroke = T.accent,
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
      return (
        <svg {...p}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "expand":
      return (
        <svg {...p}>
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      );
    case "shield":
      return (
        <svg {...p}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "chain":
      return (
        <svg {...p}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "flame":
      return (
        <svg {...p}>
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "file":
      return (
        <svg {...p}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      );
    case "check":
      return (
        <svg {...p}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case "user":
      return (
        <svg {...p}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "arrow-down":
      return (
        <svg {...p}>
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      );
    case "question":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    case "star":
      return (
        <svg {...p}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "eye":
      return (
        <svg {...p}>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "play":
      return (
        <svg {...p}>
          <polygon points="6 4 20 12 6 20 6 4" />
        </svg>
      );
    default:
      return null;
  }
}

/* ─── DATA ─────────────────────────────────────────────────────────── */
const painPoints: { icon: IconName; text: string }[] = [
  { icon: "user", text: "Влюбваш се в един и същи тип партньор" },
  { icon: "expand", text: "В началото всичко е силно, после идва дистанция" },
  { icon: "heart", text: "Имаш страх от изоставяне" },
  { icon: "chain", text: "Или се отдръпваш, когато стане прекалено близко" },
  { icon: "flame", text: "Преживяваш внезапни раздели" },
  { icon: "file", text: "Връзките ти се разпадат по сходен сценарий" },
];

const courseGoals: { icon: IconName; text: string }[] = [
  { icon: "check", text: "Разпознаеш повтарящите се модели на партньорски отношения в любовта" },
  { icon: "check", text: "Видиш как чрез ролите и динамиките, които несъзнателно заемаш и повтаряш, участваш в поддържането на тези модели" },
  { icon: "check", text: "Разбереш защо ти е трудно да направиш нов избор и кое те задържа в стария модел" },
  { icon: "check", text: "Осъзнаеш как лоялността към родовата система влияе на отношенията и избора ти на партньор" },
  { icon: "check", text: "Откриеш ресурсите и вътрешните опори, които можеш да използваш като подкрепа" },
  { icon: "check", text: "Поставиш основите на нов модел в любовта, основан на повече осъзнатост, вътрешна стабилност и личен избор" },
];

const rodovModelExplanation = [
  "несъзнателни лоялности",
  "незавършени истории в рода",
  "повторения през поколенията",
  "синдроми на годишнината",
  "изключени членове на системата",
];

const weeks = [
  {
    num: "01",
    label: "Седмица 1",
    title: "Повтарящите се модели в любовта",
    body: "Кои модели на партньорски отношения се повтарят в твоята родова система и как са свързани с твоята лична история?",
  },
  {
    num: "02",
    label: "Седмица 2",
    title: "Роли и динамики в любовта",
    body: "Как чрез ролите и динамиките, които несъзнателно заемаш, участваш в поддържането на повтарящия се модел?",
  },
  {
    num: "03",
    label: "Седмица 3",
    title: "Защо е трудно да промениш модела?",
    body: "Как лоялността към родовата система те задържа в стария сценарий, дори когато искаш нещо различно?",
  },
  {
    num: "04",
    label: "Седмица 4",
    title: "Нов избор в любовта",
    body: "Как чрез ресурсите на родовата система да изградиш повече вътрешна стабилност и да поставиш основите на нов модел на партньорски отношения?",
  },
];

const videoLessons = [
  "Повтарящите се модели в любовта",
  "Повтарящи се ролеви динамики",
  "Защо ти е трудно да промениш модела на отношения",
  "Изграждане на нов модел в любовта и отношенията",
];

const forWhom = [
  "Повтаряш една и съща динамика в любовта",
  "Избираш партньори, с които няма стабилност",
  "Имаш страх от изоставяне",
  "Или трудност с близостта",
  'Усещаш, че „нещо от рода“ влияе, но не знаеш какво',
  "Искаш да изградиш по-здрав модел за партньорство и семейство",
];

const results = [
  "Разбираш по-добре собствените си избори в любовта",
  "Имаш повече яснота какво искаш и какво не искаш в една връзка",
  "Разпознаваш кога старият модел започва да управлява решенията ти",
  "Имаш повече свобода да избираш различно от познатия сценарий",
  "Вземаш решения от място на по-голяма осъзнатост, а не само от страх, вина или лоялност",
  "Използваш собствените си ресурси като опора при създаването на нови отношения",
  "Поставяш основите на нов модел в любовта, основан на личен избор и вътрешна стабилност",
];

const faqs = [
  {
    q: "Това терапия ли е?",
    a: "Не. Курсът не е терапия и не замества индивидуална психологическа или терапевтична работа. Това е осъзнавателен и образователен процес, който ти помага: да видиш повтарящите се модели, да разбереш откъде идват, да спреш да действаш напълно автоматично. За много жени той е първата важна крачка преди по-дълбока работа.",
  },
  {
    q: "Трябва ли да познавам подробно историята на рода си?",
    a: "Не. Не е нужно да имаш пълна информация за предците си. Работим с: това, което вече знаеш; това, което се проявява в живота ти днес; вътрешни реакции, избори и повтарящи се ситуации. Дори при оскъдна информация, моделите се виждат през настоящето.",
  },
  {
    q: "Ами ако в момента нямам връзка?",
    a: "Курсът е подходящ и точно за теб. Партньорските избори не започват с връзката, а преди нея — в това кого допускаш, към кого се привличаш и кого отхвърляш. Много жени осъзнават моделите си преди следващата връзка, и точно това прави огромна разлика.",
  },
  {
    q: 'Това означава ли, че родът е „виновен" за всичко?',
    a: "Не. Идеята не е да търсим вина — нито в рода, нито в теб. Говорим за наследени сценарии и лоялности, които някога са били защитни, но днес може да не работят в твоя полза. Осъзнаването връща избора, не отнема отговорност.",
  },
  {
    q: "Ще трябва ли да преживявам тежки неща?",
    a: 'Курсът е създаден в щадящ формат. Няма дълбоки регресии, насилствено ровене в травми или емоционално „разкъсване". Работим с разбиране, наблюдение и назоваване, в темпо, което е безопасно за участниците.',
  },
  {
    q: "Какво реално ще се промени след тези 4 седмици?",
    a: "Най-важното: яснотата. След курса много жени спират да се обвиняват, започват да разпознават моделите навреме, виждат червените флагове по-рано, усещат повече вътрешна стабилност при избор. Това е начало на промяна, не магическо решение — и точно затова е реално.",
  },
  {
    q: "Какъв формат е курсът?",
    a: "Онлайн, в рамките на 4 седмици, с ясно структурирани теми. Подходящ за жени без предишен опит в родова работа.",
  },
];

/* ─── PAGE ─────────────────────────────────────────────────────────── */
export default function RodovModelPage() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)", backgroundColor: T.bg }}>
      <ScrollReveal />
      <RodovHeader />
      <HeroSection />
      <PainSection />
      <TransitionSection />
      <CourseInfoSection />
      <WeeksSection />
      <VideosSection />
      <ForWhomSection />
      <ResultsSection />
      <MentorSection />
      <FAQSection />
      <FinalNudgeSection />
      <FinalCTASection />
      <LegalFooter />
      <RodovStickyCTA />
    </div>
  );
}

/* ─── HEADER — floating CTA ────────────────────────────────────────── */
function RodovHeader() {
  return (
    <a
      href="#enroll"
      className="fd-top-cta"
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "11px 22px",
        background: `linear-gradient(135deg, ${T.accent} 0%, #6d5210 100%)`,
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: 700,
        borderRadius: "6px",
        textDecoration: "none",
        letterSpacing: "0.01em",
        boxShadow: `0 8px 22px rgba(139,105,20,0.35), 0 1px 2px rgba(0,0,0,0.06)`,
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
      style={{
        backgroundColor: T.bgDark,
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      {/* Background image — fills entire hero */}
      <Image
        src="/rodov-model/hero.jpg"
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center 40%" }}
        priority
      />
      {/* Dark overlay for text readability */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(26,20,16,0.55) 0%, rgba(26,20,16,0.80) 50%, rgba(26,20,16,0.95) 100%)",
        }}
      />

      <div
        className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 w-full"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "4px",
              border: `1px solid rgba(201,162,60,0.32)`,
              backgroundColor: "rgba(201,162,60,0.10)",
              fontSize: "11px",
              fontWeight: 700,
              color: T.accentWarm,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: T.accentWarm,
              }}
            />
            Онлайн курс · 4 седмици · €97
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 5.6vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: "0 0 22px",
              color: "#ffffff",
            }}
          >
            Прекъсни родовия модел{" "}
            <span
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 500,
                color: T.accentWarm,
              }}
            >
              в любовта
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.80)",
              maxWidth: "560px",
              margin: "0 auto 10px",
            }}
          >
            <span style={{ color: T.accentWarm, fontWeight: 600 }}>4 седмици</span> към
            създаване на{" "}
            <span style={{ color: T.accentWarm, fontWeight: 600 }}>
              стабилна и осъзната връзка
            </span>
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.58)",
              maxWidth: "520px",
              margin: "0 auto 32px",
            }}
          >
            Спри да повтаряш едни и същи връзки. Разпознай наследения сценарий,
            който управлява избора ти на партньор — и започни да избираш различно.
          </p>

          <PrimaryButton href="#enroll">
            Запиши се в 4-седмичния курс — €97
          </PrimaryButton>

          {/* Format pills */}
          <div
            style={{
              marginTop: "36px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {["Онлайн формат", "Щадящ подход", "Без предишен опит", "С Галя Тодорова"].map(
              (p) => (
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
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      backgroundColor: T.accentWarm,
                    }}
                  />
                  {p}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PAIN POINTS ──────────────────────────────────────────────────── */
function PainSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: T.bg }}
    >
      <div className="reveal max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <SectionEyebrow>Разпознаваш ли се тук?</SectionEyebrow>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {painPoints.map((p) => (
            <div
              key={p.text}
              className="reveal"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "20px 22px",
                background: T.bgAlt,
                border: `1px solid ${T.borderEditorial}`,
                borderRadius: "6px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: T.accentLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon name={p.icon} size={20} stroke={T.accent} strokeWidth={1.8} />
              </div>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: T.textPrimary,
                  lineHeight: 1.45,
                }}
              >
                {p.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TRANSITION ───────────────────────────────────────────────────── */
function TransitionSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-16 md:py-24 text-center"
      style={{ backgroundColor: T.bgDark, color: "#ffffff" }}
    >
      <div className="reveal max-w-3xl mx-auto">
        <p
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.04em",
            marginBottom: "12px",
          }}
        >
          И си задаваш въпроса:
        </p>
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: T.accentWarm,
            lineHeight: 1.25,
            margin: "0 0 32px",
            letterSpacing: "-0.01em",
          }}
        >
          „Защо това ми се случва отново?"
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "32px",
          }}
        >
          <Icon name="arrow-down" size={28} stroke="rgba(255,255,255,0.30)" strokeWidth={1.5} />
        </div>

        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.70)",
            lineHeight: 1.7,
            maxWidth: "460px",
            margin: "0 auto",
          }}
        >
          Отговорът може да не е в настоящето.
          <br />
          <strong style={{ color: "#ffffff" }}>А в рода.</strong>
        </p>
      </div>
    </section>
  );
}

/* ─── COURSE INFO — 2-column ───────────────────────────────────────── */
function CourseInfoSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: T.bgAlt }}
    >
      <div className="reveal max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Left — what the course gives */}
        <div>
          <SectionEyebrow>За какво е този курс?</SectionEyebrow>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0 16px",
            }}
          >
            4 седмици{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: T.accent }}>
              вътрешна работа
            </span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: T.textBody,
              lineHeight: 1.7,
              marginBottom: "24px",
            }}
          >
            Този 4-седмичен курс ще ти помогне да:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {courseGoals.map((g) => (
              <div
                key={g.text}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "4px",
                    background: T.accentLight,
                    color: T.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Icon name="check" size={14} stroke={T.accent} strokeWidth={2.6} />
                </span>
                <span
                  style={{
                    fontSize: "15px",
                    color: T.textPrimary,
                    lineHeight: 1.55,
                  }}
                >
                  {g.text}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "15px",
              color: T.textBody,
              lineHeight: 1.7,
              marginTop: "24px",
              fontStyle: "italic",
            }}
          >
            Това не е теория.
            <br />
            Това е вътрешна работа с реални прозрения.
          </p>
        </div>

        {/* Right — what is a "rodov model" */}
        <div>
          <SectionEyebrow>Какво означава „родов модел"?</SectionEyebrow>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0 16px",
            }}
          >
            Наследени{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: T.accent }}>
              сценарии
            </span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: T.textBody,
              lineHeight: 1.7,
              marginBottom: "20px",
            }}
          >
            Понякога ние не избираме партньора си свободно. Избираме според:
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {rodovModelExplanation.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  fontSize: "15px",
                  color: T.textPrimary,
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: T.accentWarm,
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>

          <div
            style={{
              borderTop: `1px solid ${T.borderEditorial}`,
              paddingTop: "20px",
            }}
          >
            <p
              style={{
                fontFamily: SERIF,
                fontSize: "18px",
                fontWeight: 500,
                color: T.textPrimary,
                lineHeight: 1.4,
                fontStyle: "italic",
              }}
            >
              Когато моделът стане видим, започваш да имаш избор.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <PrimaryButton href="#enroll">Включи се — €97 →</PrimaryButton>
      </div>
    </section>
  );
}

/* ─── 4 WEEKS ──────────────────────────────────────────────────────── */
function WeeksSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: T.bgDark, color: "#ffffff" }}
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
            Какво ще се случи{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: T.accentWarm }}>
              в 4-те седмици?
            </span>
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
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: "32px",
                  fontWeight: 600,
                  color: "rgba(201,162,60,0.25)",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                {w.num}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: T.accentWarm,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                {w.label}
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.3,
                  marginBottom: "10px",
                }}
              >
                {w.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.60)",
                  lineHeight: 1.6,
                }}
              >
                {w.body}
              </p>
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

/* ─── VIDEO LESSONS ────────────────────────────────────────────────── */
function VideosSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: T.bgAlt }}
    >
      <div className="reveal max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <SectionEyebrow>Видео уроците</SectionEyebrow>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0 14px",
            }}
          >
            Какво ще{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: T.accent }}>
              гледаш
            </span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: T.textBody,
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            4 видео урока — по един за всяка седмица. Гледаш в удобно за теб време, в затворената общност.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {videoLessons.map((title, i) => (
            <div
              key={title}
              className="reveal"
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                background: T.bg,
                border: `1px solid ${T.borderEditorial}`,
                borderRadius: "8px",
                padding: "18px 20px",
              }}
            >
              <span
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: T.accentLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon name="play" size={18} stroke={T.accent} strokeWidth={2} />
              </span>
              <div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: T.accentWarm,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  Видео {i + 1}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: T.textPrimary,
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOR WHOM ─────────────────────────────────────────────────────── */
function ForWhomSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: T.bg }}
    >
      <div className="reveal max-w-6xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
        <div
          style={{
            width: "100%",
            aspectRatio: "1/1",
            borderRadius: "8px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/rodov-model/galya-square.jpeg"
            alt="Галя Тодорова — работа с участниците"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div>
          <SectionEyebrow>За кого е този курс?</SectionEyebrow>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0 20px",
            }}
          >
            Този курс е за теб, ако…
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {forWhom.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  fontSize: "15px",
                  color: T.textPrimary,
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: T.accentWarm,
                    flexShrink: 0,
                    marginTop: "8px",
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── RESULTS ──────────────────────────────────────────────────────── */
function ResultsSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: T.bgAlt }}
    >
      <div className="reveal max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <SectionEyebrow>Какъв резултат можеш да очакваш?</SectionEyebrow>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0 14px",
            }}
          >
            След 4 седмици{" "}
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: T.accent }}>
              ти ще:
            </span>
          </h2>
        </div>

        <div
          style={{
            background: T.bg,
            border: `1px solid ${T.borderEditorial}`,
            borderRadius: "6px",
            padding: "32px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {results.map((r) => (
              <div
                key={r}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  fontSize: "16px",
                  color: T.textPrimary,
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: T.accentLight,
                    color: T.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Icon name="check" size={14} stroke={T.accent} strokeWidth={2.6} />
                </span>
                {r}
              </div>
            ))}
          </div>
        </div>

        <div
          className="reveal"
          style={{
            marginTop: "28px",
            padding: "24px 28px",
            background: T.bgPale,
            border: `1px solid ${T.borderEditorial}`,
            borderRadius: "6px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              color: T.textBody,
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Този курс не обещава магическа връзка за 30 дни.
            <br />
            Той ти дава{" "}
            <strong style={{ color: T.textPrimary }}>яснота и вътрешна основа</strong>,
            без която стабилността не е възможна.
          </p>
        </div>

        <div className="mt-12 text-center">
          <PrimaryButton href="#enroll">Включи се — €97 →</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ─── MENTOR ───────────────────────────────────────────────────────── */
function MentorSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-24 md:py-36"
      style={{ backgroundColor: T.bgDark, color: "#ffffff" }}
    >
      <div className="reveal max-w-6xl mx-auto grid md:grid-cols-[380px_1fr] gap-14 lg:gap-20 items-start">
        <div
          style={{
            width: "100%",
            aspectRatio: "3/4",
            borderRadius: "8px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/rodov-model/galya.jpeg"
            alt="Галя Тодорова — родов консултант"
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: T.accentWarm,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            За мен
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
            Галя Тодорова
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: T.accentWarm,
              fontWeight: 600,
              marginBottom: "22px",
              letterSpacing: "0.01em",
            }}
          >
            Родов консултант · Практик по родова терапия
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              fontSize: "16px",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.85,
              maxWidth: "58ch",
            }}
          >
            <p>
              Аз съм Галя Тодорова — родов консултант и практик по родова
              терапия.
            </p>
            <p>
              Помагам основно на жени, които преживяват повтарящи се сценарии в
              любовта и не успяват да изградят дългосрочни, хармонични отношения.
            </p>
            <p>
              Работя през родовата терапия на три нива —{" "}
              <strong style={{ color: "#ffffff" }}>
                личностно, енергийно и духовно
              </strong>{" "}
              — за да освободим наследени емоции и модели и да създадем нова
              вътрешна основа за стабилна връзка.
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
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      style={{ backgroundColor: T.bg }}
    >
      <div className="reveal max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            style={{
              fontSize: "clamp(2rem, 4.4vw, 3rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Въпроси и отговори
          </h2>
        </div>

        <RodovFAQAccordion
          items={faqs}
          accent={T.accent}
          accentLight={T.accentLight}
          textPrimary={T.textPrimary}
          textBody={T.textBody}
          border={T.borderEditorial}
          bg={T.bg}
        />
      </div>
    </section>
  );
}

/* ─── FINAL NUDGE — emotional close before CTA ────────────────────── */
function FinalNudgeSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-16 md:py-24 text-center"
      style={{ backgroundColor: T.bgAlt }}
    >
      <div className="reveal max-w-3xl mx-auto">
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.2rem, 2.6vw, 1.7rem)",
            fontStyle: "italic",
            color: T.textMuted,
            lineHeight: 1.4,
            marginBottom: "20px",
          }}
        >
          „Ами ако разбера нещо, което не ми хареса?"
        </p>
        <p
          style={{
            fontSize: "16px",
            color: T.textBody,
            lineHeight: 1.7,
            maxWidth: "540px",
            margin: "0 auto",
          }}
        >
          Истината е: това, което управлява избора ти в момента,{" "}
          <strong style={{ color: T.textPrimary }}>вече е там.</strong>
          <br />
          Разликата е дали го виждаш — или то управлява теб на тъмно.
        </p>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section
      id="enroll"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 text-center relative overflow-hidden"
      style={{ backgroundColor: T.bgDark, color: "#ffffff" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 70% 80% at 50% 50%, rgba(139,105,20,0.18) 0%, transparent 70%)`,
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
          Готова ли си?
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
          Ако си готова да спреш да повтаряш{" "}
          <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, color: T.accentWarm }}>
            миналото
          </span>
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.62)",
            maxWidth: "540px",
            margin: "0 auto 16px",
            lineHeight: 1.7,
          }}
        >
          и да започнеш да избираш различно —
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "440px",
            margin: "0 auto 32px",
            lineHeight: 1.6,
          }}
        >
          4 седмици. Онлайн. Щадящ формат. €97 еднократно.
        </p>

        <div className="flex justify-center">
          <EnrollForm product="rodov-model" cardOnly variant="dark-warm" submitLabel="Да — готова съм да вляза →" />
        </div>
      </div>
    </section>
  );
}

/* ─── LEGAL FOOTER ─────────────────────────────────────────────────── */
function LegalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        backgroundColor: T.bgAlt,
        borderTop: `1px solid ${T.borderEditorial}`,
        padding: "24px 24px",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <div
          style={{
            fontSize: "12px",
            color: T.textMuted,
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
          <a href="/privacy" style={{ color: T.textBody, textDecoration: "none" }}>
            Политика за поверителност
          </a>
          <a href="/cookies" style={{ color: T.textBody, textDecoration: "none" }}>
            Бисквитки
          </a>
          <a href="/terms" style={{ color: T.textBody, textDecoration: "none" }}>
            Общи условия
          </a>
        </nav>
      </div>
    </footer>
  );
}

/* ─── HELPERS ──────────────────────────────────────────────────────── */
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
        color: tone === "dark" ? T.accentWarm : T.accent,
        letterSpacing: "0.13em",
        textTransform: "uppercase",
      }}
    >
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
        background: `linear-gradient(135deg, ${T.accent} 0%, #6d5210 100%)`,
        color: "#ffffff",
        fontSize: "15px",
        fontWeight: 700,
        borderRadius: "8px",
        textDecoration: "none",
        boxShadow: `0 8px 22px rgba(139,105,20,0.30)`,
        letterSpacing: "0.01em",
        transition: "transform 0.15s, box-shadow 0.15s",
      }}
    >
      {children}
    </a>
  );
}
