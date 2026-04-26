import Image from "next/image";
import { T, onDark, PHOTO_URL, GRADIENT_TEXT, SiteNav, SiteFooter } from "@/app/_shared";

export const metadata = {
  title: "12 Дни Мастъркласове® - 12 Измерения на Твоята Мисия | Coaching Real",
  description:
    "Пренареди своя онлайн бизнес за 2026-та. 12 трансформиращи мастъркласа на запис за жени предприемачи в помагащите професии. €97 (вместо €197).",
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
    a: "Само €97 (намалено от €197). Ограничени места на тази цена.",
  },
  {
    q: "Колко време имам достъп до записите?",
    a: "Достъпът е постоянен - веднъж закупени, мастъркласовете са твои завинаги.",
  },
  {
    q: "Кога се провеждат мастъркласовете?",
    a: "Форматът е на запис - гледаш в удобно за теб време, без задължителни присъствени часове.",
  },
  {
    q: "Каква е продължителността на всеки мастърклас?",
    a: "Всеки мастърклас е 30–40 минути концентрирана стойност, структурирана за бърза приложимост.",
  },
  {
    q: "Подходящо ли е, ако съм начинаеща или напреднала?",
    a: "Да. Рамката се адаптира и за старт от нулата, и за скалиране на вече съществуваща оферта.",
  },
  {
    q: "Това серия уебинари ли е?",
    a: "Не - това е практична, стъпка-по-стъпка система за действие, не пасивно слушане.",
  },
  {
    q: "Как да се запиша?",
    a: "Кликни на бутона по-долу, попълни поръчката и получи незабавен достъп.",
  },
];

/* ─── SPECIALIST ICONS ──────────────────────────────────────────────── */
function IconHeart({ color = "#6b150e" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function IconTarget({ color = "#6b150e" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconStar({ color = "#6b150e" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconLeaf({ color = "#6b150e" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function IconBrain({ color = "#6b150e" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function IconNetwork({ color = "#6b150e" }: { color?: string }) {
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

function IconMoon({ color = "#6b150e" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      <path d="M19 3v4M21 5h-4" />
    </svg>
  );
}

function IconBriefcase({ color = "#6b150e" }: { color?: string }) {
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
        stroke={dark ? "#ffffff" : "#6b150e"}
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

/* ─── PAGE ──────────────────────────────────────────────────────────── */
export default function MasterclassPage() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)" }}>
      <SiteNav />
      <HeroSection />
      <ForWhomSection />
      <WhyNowSection />
      <SolutionSection />
      <CurriculumSection />
      <AboutSection />
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
      style={{ backgroundColor: "#0f0808" }}
    >
      {/* Ambient light orbs */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-8%",
            width: "55%",
            aspectRatio: "1",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(107,21,14,0.55) 0%, transparent 65%)",
            filter: "blur(90px)",
            animation: "heroOrbA 10s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "-5%",
            width: "40%",
            aspectRatio: "1",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(107,21,14,0.35) 0%, transparent 65%)",
            filter: "blur(100px)",
            animation: "heroOrbB 13s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "30%",
            width: "30%",
            aspectRatio: "1",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(180,50,30,0.12) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left - text */}
        <div>
          <div className="animate-fade-up">
            <span className="mv-tag mv-tag-dark">Мастъркласове® · 12 дни на запис</span>
          </div>

          <h1
            className="animate-fade-up delay-100 mt-6"
            style={{
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: onDark.primary,
            }}
          >
            <span
              className="block"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.6rem)",
                fontWeight: 900,
                background: "linear-gradient(135deg, #6b150e 0%, #c94535 55%, #e85050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 14px rgba(200,60,40,0.35)) drop-shadow(0 0 32px rgba(200,60,40,0.14))",
              }}
            >
              12 ИЗМЕРЕНИЯ
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
                fontWeight: 700,
                color: "rgba(255,255,255,0.88)",
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
                color: "rgba(255,255,255,0.38)",
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
            style={{ fontSize: "16px", color: onDark.secondary, lineHeight: 1.8, maxWidth: "480px" }}
          >
            Пренареди своя онлайн бизнес за 2026-та. Създай яснота, посока
            и предвидим план за растеж - 12 трансформиращи теми на запис,
            които ще сложат край на хаоса.
          </p>

          {/* Price block */}
          <div className="animate-fade-up delay-300 mt-10">
            <div className="flex items-center gap-4 mb-6">
              <span
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3rem)",
                  fontWeight: 900,
                  color: "#ffffff",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                €97
              </span>
              <div className="flex flex-col gap-1">
                <span
                  style={{
                    fontSize: "16px",
                    color: onDark.muted,
                    textDecoration: "line-through",
                    textDecorationColor: "rgba(255,255,255,0.3)",
                    fontWeight: 600,
                  }}
                >
                  €197
                </span>
                <span
                  className="flex items-center gap-1.5"
                  style={{ fontSize: "12px", color: "#e87070", fontWeight: 700, letterSpacing: "0.04em" }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: "#e85050",
                      display: "inline-block",
                      boxShadow: "0 0 0 2px rgba(232,80,80,0.28)",
                      flexShrink: 0,
                    }}
                  />
                  Ограничени места
                </span>
              </div>
            </div>

            <a
              href="#enroll"
              className="mv-btn mv-btn-primary"
              style={{ fontSize: "16px", padding: "16px 40px" }}
            >
              Записвам се за 12-те мастъркласа →
            </a>
          </div>
        </div>

        {/* Right - specialists grid */}
        <div className="animate-fade-in delay-200">
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              borderRadius: T.radiusSm,
              border: "1px solid rgba(255,255,255,0.09)",
              padding: "24px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: onDark.muted,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Специално за жени предприемачи в
            </p>
            <div className="grid grid-cols-2 gap-2">
              {specialists.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-3 py-2.5"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "7px",
                      backgroundColor: "rgba(107,21,14,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon color="#e87070" />
                  </div>
                  <span style={{ fontSize: "13px", color: onDark.secondary, fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
            <p
              className="text-center mt-4"
              style={{ fontSize: "13px", color: "#e87070", fontWeight: 600 }}
            >
              трансформиращите и помагащите професии
            </p>
          </div>
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
      style={{ backgroundColor: T.surfaceRaised }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 45% at 0% 50%, rgba(107,21,14,0.04) 0%, transparent 65%)," +
            "radial-gradient(ellipse 40% 40% at 100% 100%, rgba(107,21,14,0.03) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-start">
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
          <p className="mt-5" style={{ fontSize: "15px", color: T.textSecondary, lineHeight: 1.85 }}>
            Терапевти, коучове, констелатори, нутриционисти, психолози,
            НЛП практици, астролози и консултанти - всяка жена с мисия,
            готова да изгради реален онлайн бизнес.
          </p>
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
                    background: "linear-gradient(135deg, #6b150e 0%, #c94535 100%)",
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
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#1a1010" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(180,60,40,0.18) 0%, transparent 60%)," +
            "radial-gradient(ellipse 60% 50% at 100% 100%, rgba(107,21,14,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-4xl mx-auto">
        <span className="mv-tag mv-tag-dark">Защо точно сега?</span>
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
          Защо 2026-та ще бъде{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6b150e 0%, #c94535 55%, #e85050 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            решаваща година?
          </span>
        </h2>

        {/* Quote-style insight card */}
        <div
          className="mt-10 p-8 md:p-10"
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          <IconQuote />
          <p
            className="mt-4"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: onDark.secondary,
              lineHeight: 1.9,
              fontStyle: "italic",
            }}
          >
            Ако усещаш, че онлайн пространството се променя - права си.
            Клиентското поведение е различно, доверието се изгражда по-бавно,
            а конкуренцията вече не е в обема, а в качеството. Интуитивното
            публикуване и стратегията „ще видим каквото стане" вече не работят.
          </p>
        </div>

        {/* 3 pillars */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {[
            { label: "По-добра структура",       desc: "Систематичен подход вместо хаотично публикуване." },
            { label: "По-добро позициониране",   desc: "Ясно послание, което резонира с идеалния ти клиент." },
            { label: "По-добра оферта",           desc: "Продукт, заради който клиентите те търсят сами." },
          ].map(({ label, desc }, i) => (
            <div
              key={i}
              className="p-6"
              style={{
                backgroundColor: "rgba(107,21,14,0.14)",
                borderRadius: "10px",
                border: "1px solid rgba(107,21,14,0.3)",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "8px",
                  letterSpacing: "-0.01em",
                }}
              >
                {label}
              </p>
              <p style={{ fontSize: "13px", color: onDark.secondary, lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>

        <p
          className="mt-8"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: onDark.primary,
            lineHeight: 1.85,
            fontWeight: 600,
          }}
        >
          2026-та е годината не за „повече", а за по-добре.{" "}
          <span style={{ color: "#e87070" }}>
            Тези 12 дни са пространството, в което ще го постигнеш.
          </span>
        </p>

        <div className="mt-10">
          <a href="#enroll" className="mv-btn mv-btn-primary" style={{ fontSize: "16px", padding: "16px 40px" }}>
            Готова съм да вляза в 12-те мастъркласа →
          </a>
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
      style={{ backgroundColor: T.surfaceStrong }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 100% 50%, rgba(107,21,14,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
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
                    background: "linear-gradient(135deg, #6b150e 0%, #c94535 100%)",
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
      style={{ backgroundColor: T.surfaceRaised }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(107,21,14,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {curriculum.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-5"
              style={{
                backgroundColor: T.surfaceStrong,
                borderRadius: "10px",
                border: "1px solid rgba(107,21,14,0.08)",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
            >
              {/* Day number */}
              <div
                style={{
                  flexShrink: 0,
                  width: "36px",
                  height: "36px",
                  borderRadius: "9px",
                  background: "linear-gradient(135deg, #6b150e 0%, #c94535 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "1px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 900,
                    color: "#ffffff",
                    lineHeight: 1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {i + 1}
                </span>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#6b150e",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "3px",
                  }}
                >
                  Ден {i + 1}
                </p>
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: T.textPrimary,
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                    marginBottom: "5px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "12px", color: T.textSecondary, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "16px", padding: "16px 44px" }}
          >
            Включи ме в 12-те мастъркласа - €97 →
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
      style={{ backgroundColor: "#100808" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 55% at 0% 50%, rgba(107,21,14,0.2) 0%, transparent 60%)," +
            "radial-gradient(ellipse 50% 40% at 100% 0%, rgba(180,50,30,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="hidden lg:block relative" style={{ height: "500px" }}>
          <div
            className="h-full w-full overflow-hidden"
            style={{ position: "relative", borderRadius: "14px", border: "1.5px solid rgba(107,21,14,0.3)" }}
          >
            <Image
              src={PHOTO_URL}
              alt="Станислава Павлова - бизнес ментор и стратег"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 1024px) 0px, 50vw"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="mv-tag mv-tag-dark">Коя съм аз?</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: onDark.primary,
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
              background: "linear-gradient(135deg, #6b150e 0%, #c94535 55%, #e85050 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginTop: "6px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Бизнес ментор · Стратег · Създател на системата KickSTART
          </p>

          <p className="mt-6" style={{ fontSize: "16px", color: onDark.secondary, lineHeight: 1.85 }}>
            Помагам на жени в помагащите професии да изградят, структурират и
            скалират своя онлайн бизнес с яснота, женска енергия и стабилност.
          </p>

          {/* Value statement */}
          <div
            className="mt-8 p-6"
            style={{
              backgroundColor: "rgba(107,21,14,0.18)",
              borderRadius: "12px",
              border: "1px solid rgba(107,21,14,0.35)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#e87070",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              Стойността, която получаваш
            </p>
            <p style={{ fontSize: "15px", color: onDark.secondary, lineHeight: 1.85 }}>
              Реалната стойност на тези мастъркласове надвишава{" "}
              <strong style={{ color: "#ffffff" }}>€1000</strong> като
              натрупано ноу-хау, структура и бизнес посока. Днес получаваш
              целия пакет за{" "}
              <strong
                style={{
                  fontSize: "20px",
                  background: "linear-gradient(135deg, #c94535 0%, #e85050 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                €97
              </strong>
              . Инвестиция, която се връща в измерими резултати.
            </p>
          </div>

          <blockquote
            className="mt-6 pl-5"
            style={{ borderLeft: "3px solid #6b150e" }}
          >
            <p style={{ fontSize: "15px", color: onDark.secondary, lineHeight: 1.8, fontStyle: "italic" }}>
              &ldquo;Мисията ми е да покажа, че духовността и бизнесът не се
              изключват - те се допълват. Когато съчетаеш мисията със структура,
              резултатите идват естествено.&rdquo;
            </p>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#e87070",
                marginTop: "10px",
                letterSpacing: "0.02em",
              }}
            >
              - Станислава Павлова
            </p>
          </blockquote>
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
      style={{ backgroundColor: T.surfaceStrong }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(107,21,14,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-3xl mx-auto">
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

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <details
              key={i}
              style={{
                backgroundColor: T.surfaceRaised,
                borderRadius: "10px",
                border: "1px solid rgba(107,21,14,0.1)",
                overflow: "hidden",
              }}
            >
              <summary
                style={{
                  padding: "18px 20px",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: T.textPrimary,
                  lineHeight: 1.4,
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                {item.q}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#6b150e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </summary>
              <div
                style={{
                  padding: "0 20px 18px",
                  borderTop: "1px solid rgba(107,21,14,0.08)",
                  marginTop: "0",
                }}
              >
                <p style={{ fontSize: "14px", color: T.textSecondary, lineHeight: 1.8, paddingTop: "14px" }}>
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
      id="enroll"
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0f0808" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(107,21,14,0.3) 0%, transparent 65%)," +
            "radial-gradient(ellipse 40% 30% at 20% 80%, rgba(180,50,30,0.14) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <span
          className="mv-tag inline-block mb-8"
          style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#e87070" }}
        >
          Твоят нов бизнес цикъл за 2026-та
        </span>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          12 дни. 12 теми.{" "}
          <span style={{ color: "#e85050" }}>
            12 стъпки, които ще те подредят отвътре навън.
          </span>
        </h2>

        <p
          className="mt-5"
          style={{ fontSize: "16px", color: onDark.secondary, lineHeight: 1.8 }}
        >
          Започва с теб. Завършва с ясен план за растеж, готов за изпълнение.
        </p>

        {/* Price block */}
        <div
          className="mt-10 mb-10 inline-flex flex-col items-center gap-2 px-10 py-6"
          style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: onDark.muted,
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
                color: "#ffffff",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              €97
            </span>
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: onDark.muted,
                textDecoration: "line-through",
                textDecorationColor: "rgba(255,255,255,0.25)",
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
                backgroundColor: "#e85050",
                display: "inline-block",
                boxShadow: "0 0 0 2px rgba(232,80,80,0.28)",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: "12px", color: "#e87070", fontWeight: 700, letterSpacing: "0.04em" }}>
              Ограничени места
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "17px", padding: "18px 52px" }}
          >
            Да - Готова съм да вляза →
          </a>
          <p style={{ fontSize: "13px", color: onDark.muted }}>
            Сигурна транзакция · Незабавен достъп до всички 12 мастъркласа
          </p>
        </div>
      </div>
    </section>
  );
}
