import Image from "next/image";
import { T, PHOTO_URL, GRADIENT_TEXT, SiteFooter } from "@/app/_shared";
import { OptinForm } from "./optin-form";

export const metadata = {
  title: "Открий Идеалния Си Клиент Онлайн – с 5 Бързи Стъпки | Coaching Real",
  description:
    "Безплатен гайд за холистични лидери: психолози, коучове, терапевти и астролози. Дефинирай идеалния си клиент, намери го онлайн и привлечи вниманието му.",
};

const benefits = [
  {
    icon: <IconTarget />,
    title: "Дефинирай идеалния си клиент",
    body: "42 въпроса за дълбока яснота кой е човекът, на когото служиш.",
  },
  {
    icon: <IconMap />,
    title: "Намери го онлайн",
    body: "Къде точно е твоят идеален клиент и как да стигнеш до него.",
  },
  {
    icon: <IconStar />,
    title: "Привлечи внимание и доверие",
    body: "Какво съдържание да създаваш, за да преминеш от интерес към доверие.",
  },
];

const specialists = [
  { icon: <IconBrain />, label: "Психолог" },
  { icon: <IconHeart />, label: "Коуч" },
  { icon: <IconMoon />, label: "Астролог" },
  { icon: <IconLotus />, label: "Терапевт" },
  { icon: <IconLeaf />, label: "Енергиен лечител" },
  { icon: <IconSparkle />, label: "Алт. медицина" },
];

/* ─── PAGE ──────────────────────────────────────────────────────────── */
export default function FreebieLP() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)" }}>
      <HeroSection />
      <BenefitsSection />
      <ForWhomSection />
      <AboutSection />
      <FinalCTASection />
      <SiteFooter />
    </div>
  );
}

/* ─── HERO ──────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 overflow-hidden"
    >
      {/* Full-bleed background image */}
      <Image
        src="/freebie-hero.jpg"
        alt=""
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "top center" }}
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, rgba(15,10,8,0.72) 0%, rgba(15,10,8,0.55) 50%, rgba(15,10,8,0.4) 100%)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center">
        {/* Left - text */}
        <div>
          <div className="animate-fade-up">
            <span
              className="mv-tag"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)" }}
            >
              Безплатен гайд · PDF
            </span>
          </div>

          <h1
            className="animate-fade-up delay-100 mt-6"
            style={{
              fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Открий Идеалния Си Клиент Онлайн
            <span
              className="block mt-2"
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                fontWeight: 700,
                background: "linear-gradient(135deg, #e87070 0%, #f5a0a0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              с 5 Бързи Стъпки
            </span>
          </h1>

          <p
            className="animate-fade-up delay-200 mt-6"
            style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: "460px" }}
          >
            Изтегли безплатно PDF и започни да привличаш правилните хора още днес.
          </p>

          {/* Mobile form - visible on sm only */}
          <div className="lg:hidden mt-10 animate-fade-up delay-300">
            <FormCard />
          </div>
        </div>

        {/* Right - form card (desktop) */}
        <div className="hidden lg:block animate-fade-in delay-200">
          <FormCard />
        </div>
      </div>
    </section>
  );
}

/* ─── FORM CARD ────────────────────────────────────────────────────── */
function FormCard() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        border: "1px solid rgba(107,21,14,0.1)",
        boxShadow: "0 8px 40px rgba(107,21,14,0.08)",
        padding: "32px",
        textAlign: "left",
      }}
    >
      <p
        style={{
          fontSize: "15px",
          color: "var(--mv-text-secondary)",
          lineHeight: 1.7,
          marginBottom: "24px",
        }}
      >
        Попълни данните си и на имейл ще получиш нашия гайд:
        <strong style={{ color: "var(--mv-text-primary)", display: "block", marginTop: "6px" }}>
          &ldquo;Открий Идеалния Си Клиент Онлайн &ndash; с 5 Бързи Стъпки!&rdquo;
        </strong>
      </p>
      <OptinForm />
      <p
        style={{
          fontSize: "11px",
          color: "rgba(15,19,26,0.35)",
          marginTop: "16px",
          lineHeight: 1.5,
          textAlign: "center",
        }}
      >
        Не изпращаме спам. Можеш да се отпишеш по всяко време.
      </p>
    </div>
  );
}

/* ─── BENEFITS ─────────────────────────────────────────────────────── */
function BenefitsSection() {
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
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(180,60,40,0.10) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="mv-tag mv-tag-light">Какво ще откриеш вътре</span>
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
            Кратък и{" "}
            <span style={{ ...GRADIENT_TEXT }}>практичен гайд</span>
          </h2>
          <p
            className="mt-5 mx-auto"
            style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.8, maxWidth: "520px" }}
          >
            Създаден специално за холистични лидери, които искат яснота, а не поредната теория.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex flex-col items-start p-7"
              style={{
                backgroundColor: T.surfaceStrong,
                borderRadius: "14px",
                border: "1px solid rgba(107,21,14,0.08)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                {b.icon}
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: T.textPrimary,
                  lineHeight: 1.3,
                  marginBottom: "10px",
                }}
              >
                {b.title}
              </h3>
              <p style={{ fontSize: "14px", color: T.textSecondary, lineHeight: 1.75 }}>{b.body}</p>
            </div>
          ))}
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
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 100% 50%, rgba(107,21,14,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="mv-tag mv-tag-light">За кого е този гайд</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--mv-text-primary)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Искаш да достигнеш повече хора онлайн, но{" "}
            <span style={{ ...GRADIENT_TEXT }}>не знаеш откъде да започнеш?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {specialists.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5"
              style={{
                backgroundColor: "rgba(112,21,14,0.04)",
                borderRadius: T.radiusSm,
                border: "1px solid rgba(112,21,14,0.08)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(107,21,14,0.2)",
                  border: "1px solid rgba(107,21,14,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>
              <span style={{ fontSize: "15px", color: "var(--mv-text-primary)", fontWeight: 600 }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-10"
          style={{ fontSize: "16px", color: "var(--mv-text-secondary)", lineHeight: 1.8, maxWidth: "520px", margin: "40px auto 0" }}
        >
          Време е да спреш да се луташ и да започнеш да привличаш правилните хора!
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
      style={{ backgroundColor: T.surfaceRaised }}
    >
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="hidden lg:block relative" style={{ height: "480px" }}>
          <div
            className="h-full w-full overflow-hidden"
            style={{ position: "relative", borderRadius: "14px", border: "1.5px solid rgba(107,21,14,0.15)" }}
          >
            <Image
              src={PHOTO_URL}
              alt="Станислава Павлова - бизнес ментор"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 1024px) 0px, 50vw"
            />
          </div>
        </div>

        <div>
          <span className="mv-tag mv-tag-light">За автора</span>
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
            Бизнес ментор · Експерт в продажби
          </p>

          <p className="mt-6" style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.85 }}>
            След години опит в маркетинга и продажбите, мога да предам работещата система,
            чрез която ще може да продаваш без стрес и без да бъдеш натрапчив/а.
          </p>
          <p className="mt-4" style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.85 }}>
            Основната ми мисия е да споделя всички работещи инструменти, чрез които
            не само да поддържаш бизнеса си, а да го развиеш и печелиш от него &ndash;
            и не на последно място да си повярваш, че ТИ МОЖЕШ!
          </p>

          <a href="/stanislava" className="mv-btn mv-btn-outline-light mt-8 inline-flex">
            Научи повече за Стаси &rarr;
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
      id="signup"
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(107,21,14,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-xl mx-auto text-center">
        <span
          className="mv-tag inline-block mb-6"
          style={{ backgroundColor: "rgba(112,21,14,0.08)", color: "#e87070" }}
        >
          Безплатен достъп
        </span>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 900,
            color: "var(--mv-text-primary)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Открий Идеалния Си Клиент Онлайн
          <span style={{ display: "block", ...GRADIENT_TEXT, marginTop: "8px" }}>
            с 5 Бързи Стъпки
          </span>
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "var(--mv-text-secondary)",
            lineHeight: 1.8,
            maxWidth: "440px",
            margin: "0 auto 32px",
          }}
        >
          Попълни данните си и ще получиш гайда безплатно на имейл.
        </p>

        <FormCard />
      </div>
    </section>
  );
}

/* ─── SVG ICONS ─────────────────────────────────────────────────────── */
function IconTarget() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconMap() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e87070" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e87070" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e87070" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /><path d="M19 3v4M21 5h-4" />
    </svg>
  );
}

function IconLotus() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e87070" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12" />
      <path d="M12 12c0 0-5-3-5-6.5C7 3 9 2 12 2s5 1 5 3.5C17 9 12 12 12 12Z" />
      <path d="M12 12c0 0-9-1.5-9-4.5C3 5.5 5 4.5 7 5.5" />
      <path d="M12 12c0 0 9-1.5 9-4.5C21 5.5 19 4.5 17 5.5" />
      <path d="M7 18c0-4 5-6 5-6" /><path d="M17 18c0-4-5-6-5-6" />
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e87070" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e87070" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}
