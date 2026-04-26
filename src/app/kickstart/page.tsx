import Image from "next/image";
import { T, onDark, PHOTO_URL, GRADIENT_TEXT, SiteNav, SiteFooter } from "@/app/_shared";

export const metadata = {
  title: "KickSTART - Изгради устойчив онлайн бизнес с душа | Coaching Real",
  description:
    "12-седмичната програма KickSTART за коучове, психолози, терапевти и лечители. Ikigai философия, холистичен бизнес модел и стратегия за видимост - за реален поток от клиенти.",
};

const modules = [
  {
    num: "01",
    title: "Твоята Мисия & Ikigai позициониране",
    body: "Открий кой си, кого служиш и защо - за да превърнеш мисията си в магнетична визия.",
  },
  {
    num: "02",
    title: "Послание, което продава без натиск",
    body: "Изграждаш ясен и автентичен бранд език - твоят маркетинг става отражение на душата ти.",
  },
  {
    num: "03",
    title: "Стратегия за видимост и социални мрежи",
    body: "Как да бъдеш консистентен онлайн без бърнаут. Създаваш 30-дневен Visibility план.",
  },
  {
    num: "04",
    title: "Продукти и оферти, които конвертират",
    body: "Изграждаш първия си платен продукт или услуга с ясно позициониране и стойност.",
  },
  {
    num: "05",
    title: "Продажби с лекота",
    body: "Учиш системата „Продай всеки ден“ - без натрапване, с енергийно съгласие и баланс.",
  },
  {
    num: "06",
    title: "Система за растеж и устойчивост",
    body: "Създаваш собствена структура за управление на време, клиенти и енергия - за устойчив бизнес модел.",
  },
];

const forWhom = [
  "Имаш мисия, но не знаеш как да я превърнеш в устойчива бизнес структура",
  "Си терапевт, коуч, лечител или психолог, който иска повече клиенти онлайн",
  "Уморена си от хаотично публикуване и безрезултатни курсове",
  "Искаш да продаваш с лекота и автентичност, без натиск",
  "Чувстваш, че е време да излезеш на следващото ниво – осъзнат бизнес с душа",
];

const outcomes = [
  "Ще имаш ясна визия и послание, което продава с лекота",
  "Ще знаеш как да структурираш и промотираш своя продукт",
  "Ще имаш система за съдържание, която работи за теб",
  "Ще чувстваш увереност и автентичност, без да се губиш в алгоритмите",
  "Ще имаш реални клиенти и устойчив поток от продажби",
];

const bonuses = [
  { title: "Ikigai Marketing аудиокнига", desc: null },
  { title: "Visibility Sprint", desc: "10-дневна система за видимост" },
  { title: "Canva и AI ресурси за съдържание", desc: null },
];

/* ─── PAGE ─────────────────────────────────────────────────────────── */
export default function KickstartPage() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)" }}>
      <SiteNav />
      <HeroSection />
      <ForWhomSection />
      <ModulesSection />
      <HowItWorksSection />
      <OutcomesSection />
      <WaitlistSection />
      <AboutSection />
      <FinalCTASection />
      <SiteFooter />
    </div>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-20 overflow-hidden"
      style={{ backgroundColor: T.surfaceBase }}
    >
      {/* Orbs */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "-5%",
            right: "-5%",
            width: "52%",
            aspectRatio: "1",
            borderRadius: "50%",
            background: "radial-gradient(circle, #6b150e 0%, transparent 70%)",
            animation: "heroOrbA 10s ease-in-out infinite",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "5%",
            width: "35%",
            aspectRatio: "1",
            borderRadius: "50%",
            background: "radial-gradient(circle, #6b150e 0%, transparent 70%)",
            animation: "heroOrbB 13s ease-in-out infinite",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left - text */}
        <div>
          <div className="animate-fade-up">
            <span className="mv-tag mv-tag-dark">CPD UK Сертифицирана · 12-седмична програма</span>
          </div>

          <h1
            className="animate-fade-up delay-100 mt-6"
            style={{
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 0.97,
              letterSpacing: "-0.03em",
              color: onDark.primary,
            }}
          >
            <span className="block">Изгради</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #6b150e 0%, #c94535 55%, #e85050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 12px rgba(200,60,40,0.3)) drop-shadow(0 0 30px rgba(200,60,40,0.12))",
              }}
            >
              KickSTART
            </span>
            <span className="block">бизнес.</span>
          </h1>

          <p
            className="animate-fade-up delay-200 mt-8"
            style={{ fontSize: "16px", color: onDark.secondary, lineHeight: 1.8, maxWidth: "500px" }}
          >
            Устойчив онлайн бизнес, който продава всеки ден - в синхрон с душата ти.
            За коучове, психолози, терапевти и лечители, готови да превърнат мисията
            си в стабилен доход, без да изгубят автентичността си.
          </p>

          <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mt-10">
            <a href="#waitlist" className="mv-btn mv-btn-primary" style={{ fontSize: "16px", padding: "16px 36px" }}>
              Кандидатствай за място →
            </a>
            <a href="#modules" className="mv-btn mv-btn-outline-dark">
              Виж програмата
            </a>
          </div>

          {/* Quick stats */}
          <div className="animate-fade-up delay-400 flex flex-wrap gap-8 mt-14">
            {[
              { value: "12", label: "седмици" },
              { value: "6", label: "модула" },
              { value: "3", label: "бонуса" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                    fontWeight: 900,
                    ...GRADIENT_TEXT,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.value}
                </p>
                <p style={{ fontSize: "13px", color: onDark.muted, marginTop: "4px", fontWeight: 500 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - photo */}
        <div
          className="animate-fade-in delay-200 hidden lg:block relative"
          style={{ height: "560px" }}
        >
          <div
            className="h-full w-full overflow-hidden"
            style={{
              borderRadius: T.radiusSm,
              border: "1.5px solid #6b150e",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://coachingreallive.com/wp-content/uploads/2026/03/a-i-r-5.png"
              alt="KickSTART - програма за холистични предприемачи"
              style={{ width: "100%", height: "560px", objectFit: "cover", objectPosition: "top center", display: "block" }}
            />
          </div>
          <div
            className="absolute bottom-5 left-5 right-5 px-5 py-4"
            style={{
              backgroundColor: "rgba(0,0,0,0.82)",
              backdropFilter: "blur(16px)",
              borderRadius: T.radiusSm,
              border: "1px solid rgba(107,21,14,0.4)",
            }}
          >
            <p style={{ fontSize: "11px", fontWeight: 700, color: onDark.accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Флагманска програма
            </p>
            <p style={{ fontSize: "14px", color: onDark.secondary, marginTop: "3px", fontWeight: 500 }}>
              Онлайн · Групова · Живи срещи + запис
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOR WHOM ─────────────────────────────────────────────────────── */
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
            "radial-gradient(ellipse 60% 50% at 100% 50%, rgba(107,21,14,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-3xl mx-auto">
        <span className="mv-tag mv-tag-light">За кого е KickSTART?</span>
        <h2
          className="mt-5"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 800,
            color: T.textPrimary,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "28px",
          }}
        >
          Тази програма е{" "}
          <span style={{ ...GRADIENT_TEXT }}>за теб, ако...</span>
        </h2>

        {/* Checklist */}
        <div className="flex flex-col gap-4">
          {forWhom.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 items-start p-5"
              style={{
                backgroundColor: T.surfaceStrong,
                borderRadius: T.radiusSm,
                border: "1px solid rgba(107,21,14,0.1)",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(107,21,14,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "1px",
                }}
              >
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4.5L4 7.5L10 1" stroke="#6b150e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p style={{ fontSize: "15px", color: T.textPrimary, lineHeight: 1.65, fontWeight: 500 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── MODULES ─────────────────────────────────────────────────────── */
function ModulesSection() {
  return (
    <section
      id="modules"
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#1a1010" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(180,60,40,0.13) 0%, transparent 60%)," +
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(107,21,14,0.10) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="mv-tag mv-tag-dark">Програма · 12 седмици</span>
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
            Какво ще получиш{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6b150e 0%, #c94535 55%, #e85050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              стъпка по стъпка
            </span>
          </h2>
          <p
            className="mt-5 mx-auto"
            style={{ fontSize: "16px", color: onDark.secondary, lineHeight: 1.8, maxWidth: "520px" }}
          >
            Практична, структурирана и енергийно подравнена програма, която те води
            от „имам идея" до „имам система, която продава".
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod) => (
            <div
              key={mod.num}
              className="p-7 flex flex-col gap-4"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                borderRadius: T.radiusSm,
                border: "1px solid rgba(255,255,255,0.11)",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3rem)",
                  fontWeight: 900,
                  color: "#e85050",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  display: "block",
                }}
              >
                {mod.num}
              </span>
              <div>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: onDark.primary,
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                    marginBottom: "8px",
                  }}
                >
                  {mod.title}
                </h3>
                <p style={{ fontSize: "14px", color: onDark.secondary, lineHeight: 1.75 }}>{mod.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─────────────────────────────────────────────────── */
/* ─── Format card SVG icons ─────────────────────────────────────────── */
function IconCalendar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b150e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}
function IconMonitor() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b150e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b150e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function IconChat() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b150e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function IconBook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
function IconLightning() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconSparkle() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

const formatItems = [
  { Icon: IconCalendar, title: "Продължителност", body: "12 седмици интензивна работа" },
  { Icon: IconMonitor, title: "Формат",           body: "Групова програма с живи срещи и запис" },
  { Icon: IconGlobe,   title: "Достъп",           body: "Онлайн платформа + частна общност" },
  { Icon: IconChat,    title: "Подкрепа",         body: "Седмични Q&A, енергийни практики и стратегически планове" },
];

const bonusIcons = [IconBook, IconLightning, IconSparkle];

function HowItWorksSection() {
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
            "radial-gradient(ellipse 50% 40% at 0% 50%, rgba(107,21,14,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="mv-tag mv-tag-light">Формат</span>
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
            Как протича{" "}
            <span style={{ ...GRADIENT_TEXT }}>програмата?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {formatItems.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col gap-5 p-7"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                border: "1px solid rgba(15,19,26,0.08)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(107,21,14,0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: T.textPrimary,
                    marginBottom: "6px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: "13px", color: T.textSecondary, lineHeight: 1.7 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bonuses */}
        <div
          className="p-8 md:p-12"
          style={{
            background: "linear-gradient(135deg, #5a1009 0%, #a83020 60%, #c94535 100%)",
            borderRadius: "14px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            Включено в програмата
          </p>
          <h3
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "28px",
            }}
          >
            3 специални бонуса
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {bonuses.map((b, i) => {
              const BonusIcon = bonusIcons[i];
              return (
                <div
                  key={b.title}
                  className="flex gap-4 items-start p-5"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.18)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255,255,255,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <BonusIcon />
                  </div>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", lineHeight: 1.35, marginBottom: b.desc ? "4px" : 0 }}>
                      {b.title}
                    </p>
                    {b.desc && (
                      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{b.desc}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── OUTCOMES ─────────────────────────────────────────────────────── */
function OutcomesSection() {
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
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(107,21,14,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-5xl mx-auto text-center">
        <span className="mv-tag mv-tag-light">Резултати</span>
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
          Какво ще можеш{" "}
          <span style={{ ...GRADIENT_TEXT }}>след 12 седмици</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14 text-left">
          {outcomes.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 items-start p-6"
              style={{
                backgroundColor: T.surfaceRaised,
                borderRadius: T.radiusSm,
                border: "1px solid rgba(107,21,14,0.1)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
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
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4.5L4 7.5L10 1" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p style={{ fontSize: "14px", color: T.textPrimary, lineHeight: 1.7, fontWeight: 500 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WAITLIST ─────────────────────────────────────────────────────── */
function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="px-6 md:px-16 lg:px-24 py-24 md:py-32"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-dark">Списък на чакащите</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: onDark.primary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Включи се в списъка{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6b150e 0%, #c94535 55%, #e85050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              на чакащите
            </span>
          </h2>
          <p
            className="mt-4"
            style={{ fontSize: "16px", color: onDark.secondary, lineHeight: 1.8 }}
          >
            Бъди сред първите, които ще получат достъп до следващия прием на KickSTART.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          {[
            { id: "name",  label: "Имена",            type: "text",  placeholder: "Твоето пълно име" },
            { id: "email", label: "Имейл",             type: "email", placeholder: "email@example.com" },
            { id: "phone", label: "Телефонен номер",   type: "tel",   placeholder: "+359 8XX XXX XXX" },
          ].map((f) => (
            <div key={f.id} className="flex flex-col gap-2">
              <label
                htmlFor={f.id}
                style={{ fontSize: "13px", fontWeight: 600, color: onDark.secondary, letterSpacing: "0.02em" }}
              >
                {f.label}
              </label>
              <input
                id={f.id}
                type={f.type}
                placeholder={f.placeholder}
                autoComplete={f.id === "email" ? "email" : f.id === "phone" ? "tel" : "name"}
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: T.radiusSm,
                  padding: "14px 16px",
                  fontSize: "15px",
                  color: onDark.primary,
                  outline: "none",
                  width: "100%",
                  fontFamily: "inherit",
                }}
              />
            </div>
          ))}

          <button
            type="submit"
            className="mv-btn mv-btn-primary mt-2"
            style={{ fontSize: "16px", padding: "16px", width: "100%", justifyContent: "center" }}
          >
            Запиши се →
          </button>
        </form>
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
        <div
          className="hidden lg:block relative"
          style={{ height: "500px" }}
        >
          <div
            className="h-full w-full overflow-hidden"
            style={{ position: "relative", borderRadius: "14px", border: "1.5px solid rgba(107,21,14,0.2)" }}
          >
            <Image
              src={PHOTO_URL}
              alt="Станислава Павлова - основател на Coaching Real"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 1024px) 0px, 50vw"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="mv-tag mv-tag-light">За създателя</span>
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
            Първият сертифициран Ikigai коуч в България · Бизнес ментор
          </p>

          <p
            className="mt-6"
            style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.85 }}
          >
            Станислава помага на коучове и терапевти да изградят устойчива практика
            чрез Ikigai философията, енергийна осъзнатост и стратегически маркетинг.
          </p>

          <blockquote
            className="mt-8 p-6"
            style={{
              backgroundColor: T.surfaceStrong,
              borderLeft: "3px solid #6b150e",
              borderRadius: "0 8px 8px 0",
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
                color: "#6b150e",
                marginTop: "12px",
                letterSpacing: "0.02em",
              }}
            >
              - Станислава Павлова
            </p>
          </blockquote>

          <a href="/stanislava" className="mv-btn mv-btn-outline-light mt-8 inline-flex">
            Научи повече за мен →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section
      className="px-6 md:px-16 lg:px-24 py-24 md:py-32"
      style={{
        background: "linear-gradient(160deg, #0f0606 0%, #1c0a09 50%, #0a0a0a 100%)",
        borderTop: "1px solid rgba(107,21,14,0.15)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <span
          className="mv-tag inline-block mb-8"
          style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#e87070" }}
        >
          Готов/а ли си да започнеш?
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
          Подреди енергията, стратегията и присъствието си.{" "}
          <span style={{ color: "#e85050" }}>Мисията ти заслужава реален доход.</span>
        </h2>

        <a
          href="#waitlist"
          className="mv-btn mv-btn-primary mt-10 inline-flex"
          style={{ fontSize: "16px", padding: "16px 44px" }}
        >
          Запиши се сега →
        </a>
      </div>
    </section>
  );
}
