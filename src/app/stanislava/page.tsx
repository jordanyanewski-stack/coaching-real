import Image from "next/image";
import { T, onDark, PHOTO_URL, stats, GRADIENT_TEXT, SiteNav, SiteFooter } from "@/app/_shared";

const DARK_BG = {
  background:
    "#faf8f5",
} as const;

export const metadata = {
  title: "Моята история – Станислава Павлова | Coaching Real",
  description:
    "Бизнес ментор, Ikigai стратег и основател на Coaching Real. Помагам на коучове, терапевти и холистични експерти да изградят устойчив онлайн бизнес с душа.",
};

export default function StanislavaPage() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)" }}>
      <SiteNav />
      <HeroSection />
      <MissionSection />
      <WhySection />
      <IkigaiSection />
      <AudienceSection />
      <ProgramsSection />
      <ApproachSection />
      <EducationSection />
      <ResultsSection />
      <CTASection />
      <SiteFooter />
    </div>
  );
}

/* ─── HERO ──────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-28 pb-20 overflow-hidden"
      style={{ backgroundColor: T.surfaceBase }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background:
            "radial-gradient(ellipse 55% 60% at 100% 20%, rgba(107,21,14,0.45) 0%, transparent 65%)," +
            "radial-gradient(ellipse 35% 40% at 90% 85%, rgba(107,21,14,0.2) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">

        {/* Left */}
        <div>
          <span className="mv-tag mv-tag-light animate-fade-up">Твоят ментор</span>

          <h1
            className="animate-fade-up delay-100 mt-6"
            style={{
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: onDark.primary,
            }}
          >
            <span className="block">Станислава</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 12px rgba(200,60,40,0.3))",
              }}
            >Павлова</span>
          </h1>

          <p
            className="animate-fade-up delay-100 mt-4"
            style={{ fontSize: "15px", color: onDark.muted, letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600 }}
          >
            Бизнес ментор&nbsp;·&nbsp;Ikigai стратег&nbsp;·&nbsp;Основател на Coaching Real
          </p>

          <p
            className="animate-fade-up delay-200 mt-8"
            style={{ fontSize: "17px", color: onDark.secondary, lineHeight: 1.75, maxWidth: "500px" }}
          >
            Помагам на коучове, терапевти, психолози и холистични експерти да
            превърнат своята мисия в устойчив онлайн бизнес, който носи свобода,
            смисъл и стабилен доход.
          </p>

          <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mt-10">
            <a href="/programs" className="mv-btn mv-btn-primary">
              Запази безплатна сесия →
            </a>
          </div>
        </div>

        {/* Right - photo + stats */}
        <div className="animate-fade-in delay-200 hidden lg:flex flex-col gap-5">
          <div
            className="overflow-hidden"
            style={{ position: "relative", height: "480px", borderRadius: T.radiusSm, border: "1.5px solid #70150E" }}
          >
            <Image
              src="/stasi-2.jpg"
              alt="Станислава Павлова"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 1024px) 0px, 50vw"
              priority
            />
          </div>

          <div
            className="grid grid-cols-3 divide-x"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              borderRadius: T.radiusSm,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {stats.map((s) => (
              <div key={s.value} className="py-5 px-4 text-center">
                <p style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 900, ...GRADIENT_TEXT, lineHeight: 1, letterSpacing: "-0.02em" }}>
                  {s.value}
                </p>
                <p style={{ fontSize: "12px", fontWeight: 700, color: onDark.primary, marginTop: "5px" }}>{s.label}</p>
                <p style={{ fontSize: "11px", color: onDark.muted, marginTop: "2px" }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── MISSION ───────────────────────────────────────────────────────── */
function MissionSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: T.surfaceRaised }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 50% at 0% 100%, rgba(107,21,14,0.05) 0%, transparent 65%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <span className="mv-tag mv-tag-light">Онлайн бизнес с душа</span>
        <h2
          className="mt-6"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 800, color: T.textPrimary, lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Стратегия, видимост и{" "}
          <span style={{ ...GRADIENT_TEXT }}>устойчив растеж</span>
        </h2>
        <p className="mt-6" style={{ fontSize: "17px", color: T.textSecondary, lineHeight: 1.85, maxWidth: "680px", margin: "24px auto 0" }}>
          Работя с хора, които знаят, че имат какво да дадат на света, но се
          чувстват изгубени в стандартните бизнес формули. Заедно създаваме
          бизнес модели, които са в синхрон с тяхната същност - без агресивен
          маркетинг, без натиск и без компромис с ценностите.
        </p>
      </div>
    </section>
  );
}

/* ─── WHY ───────────────────────────────────────────────────────────── */
function WhySection() {
  return (
    <section
      className="px-6 md:px-16 lg:px-24 py-24 md:py-32"
      style={{ ...DARK_BG }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <span className="mv-tag mv-tag-light">Защо правя това, което правя</span>
        <h2
          className="mt-6"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", fontWeight: 800, color: onDark.primary, lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Видях нещо много ясно - и не можах да го игнорирам
        </h2>
        <p className="mt-6" style={{ fontSize: "16px", color: onDark.secondary, lineHeight: 1.9 }}>
          Много от най-добрите специалисти - коучове, терапевти, психолози и
          холистични практици - имат огромна стойност и знания, но когато
          дойде моментът да изградят бизнес, се сблъскват с агресивен
          маркетинг, натиск за продажби и формули, които не им говорят.
        </p>
        <p
          className="mt-10"
          style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, ...GRADIENT_TEXT, letterSpacing: "-0.02em" }}
        >
          Онлайн бизнес с душа
        </p>
        <p className="mt-3" style={{ fontSize: "15px", color: onDark.muted, lineHeight: 1.7 }}>
          Подход, който съчетава дълбочината на мисията с яснотата на стратегията.
        </p>
      </div>
    </section>
  );
}

/* ─── IKIGAI ─────────────────────────────────────────────────────────── */
function IkigaiSection() {
  const pillars = [
    { label: "Това, което обичаш", icon: "♡" },
    { label: "Това, в което си добър", icon: "◇" },
    { label: "Това, от което светът има нужда", icon: "◎" },
    { label: "Това, за което можеш да получаваш доход", icon: "△" },
  ];

  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: T.surfaceMuted }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(107,21,14,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="mv-tag mv-tag-light">Моята философия</span>
          <h2
            className="mt-6"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 800, color: T.textPrimary, lineHeight: 1.2, letterSpacing: "-0.02em" }}
          >
            Успехът идва, когато намериш своето{" "}
            <span style={{ ...GRADIENT_TEXT }}>Ikigai</span>
          </h2>
          <p className="mt-5 mx-auto" style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.8, maxWidth: "580px" }}>
            Ikigai е японска философия, която описва точката, в която четири
            елемента се срещат. Когато това се случи, бизнесът престава да бъде
            борба - той се превръща в естествено продължение на твоята същност.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center text-center p-8"
              style={{
                backgroundColor: T.surfaceRaised,
                borderRadius: T.radiusSm,
                border: "1px solid rgba(107,21,14,0.1)",
                borderTop: `3px solid ${T.purple}`,
              }}
            >
              <span style={{ fontSize: "28px", color: T.purple, marginBottom: "16px" }}>{p.icon}</span>
              <p style={{ fontSize: "14px", fontWeight: 700, color: T.textPrimary, lineHeight: 1.5 }}>{p.label}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 text-center px-8 py-6"
          style={{ backgroundColor: T.surfaceRaised, borderRadius: T.radiusSm, border: `1px solid rgba(107,21,14,0.15)` }}
        >
          <p style={{ fontSize: "17px", fontWeight: 600, color: T.textPrimary, lineHeight: 1.7 }}>
            Вярвам, че успехът не идва от копиране на чужди формули -
            той идва, когато човек открие своето{" "}
            <span style={{ ...GRADIENT_TEXT, fontWeight: 800 }}>Ikigai</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── AUDIENCE ──────────────────────────────────────────────────────── */
function AudienceSection() {
  const professions = [
    "Коучове", "Терапевти", "Психолози", "Енергийни лечители",
    "Астролози", "Нумеролози", "Обучители", "Ментори", "Холистични специалисти",
  ];

  const questions = [
    "Как да превърна това в бизнес?",
    "Как да създам програма?",
    "Как да привличам клиенти?",
    "Как да продавам без натиск?",
    "Как да изградя устойчив доход?",
  ];

  return (
    <section
      className="px-6 md:px-16 lg:px-24 py-24 md:py-32"
      style={{ ...DARK_BG }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="mv-tag mv-tag-light">С кого работя</span>
          <h2
            className="mt-6"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 800, color: onDark.primary, lineHeight: 1.2, letterSpacing: "-0.02em" }}
          >
            Работя основно с жени между 35 и 55 години -
            <br />
            <span style={{ ...GRADIENT_TEXT }}>експерти в личностното развитие</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Professions */}
          <div>
            <p style={{ fontSize: "13px", fontWeight: 700, color: onDark.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
              Сред моите клиенти са
            </p>
            <div className="flex flex-wrap gap-3">
              {professions.map((p) => (
                <span
                  key={p}
                  className="px-4 py-2"
                  style={{
                    backgroundColor: "rgba(107,21,14,0.12)",
                    color: "#e87070",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 600,
                    border: "1px solid rgba(107,21,14,0.25)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>

            <div className="mt-10 space-y-3">
              {[
                "имат знание и опит",
                "искат да помагат на хората",
                "усещат силна вътрешна мисия",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span style={{ color: T.purple, fontSize: "18px", flexShrink: 0 }}>✔</span>
                  <p style={{ fontSize: "15px", color: onDark.secondary }}>{t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Questions */}
          <div>
            <p style={{ fontSize: "13px", fontWeight: 700, color: onDark.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
              Но се сблъскват с въпроси като
            </p>
            <div className="space-y-3">
              {questions.map((q) => (
                <div
                  key={q}
                  className="flex items-start gap-4 px-5 py-4"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span style={{ color: T.purple, flexShrink: 0, marginTop: "1px" }}>→</span>
                  <p style={{ fontSize: "15px", color: onDark.secondary }}>{q}</p>
                </div>
              ))}
            </div>
            <p
              className="mt-6"
              style={{ fontSize: "15px", color: onDark.muted, fontStyle: "italic", lineHeight: 1.7 }}
            >
              Тук започва моята работа.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── PROGRAMS ──────────────────────────────────────────────────────── */
function ProgramsSection() {
  const programs = [
    {
      name: "KickSTART",
      sub: "Онлайн бизнес с душа",
      desc: "CPD UK сертифицирана менторска програма за създаване на устойчив онлайн бизнес от нулата.",
      tag: "Флагман",
    },
    {
      name: "Business Bootcamp",
      sub: "Ikigai маркетинг за реален доход",
      desc: "10-дневна интензивна програма - ясна позиция, мини-оферта и лек процес на продажба без натиск.",
      tag: "Интензивна",
    },
    {
      name: "Ангажираност и развитие",
      sub: "",
      desc: "Система за изграждане на общност и доверие около твоята експертиза и послание.",
      tag: "Общност",
    },
    {
      name: "AI Кампания & продажби",
      sub: "Асистент",
      desc: "Система за използване на изкуствен интелект в маркетинга и продажбите - без загуба на автентичност.",
      tag: "AI & Продажби",
    },
  ];

  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: T.surfaceMuted }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 50% at 100% 100%, rgba(107,21,14,0.06) 0%, transparent 65%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="mv-tag mv-tag-light">Моите програми</span>
          <h2
            className="mt-6"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 800, color: T.textPrimary, lineHeight: 1.2, letterSpacing: "-0.02em" }}
          >
            Пътища към бизнес,{" "}
            <span style={{ ...GRADIENT_TEXT }}>изграден с намерение</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <div
              key={p.name}
              className="p-8 flex flex-col gap-4"
              style={{
                backgroundColor: T.surfaceRaised,
                borderRadius: T.radiusSm,
                border: "1px solid rgba(107,21,14,0.1)",
                borderTopWidth: "3px",
                borderTopColor: T.purple,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p style={{ fontSize: "18px", fontWeight: 800, ...GRADIENT_TEXT, letterSpacing: "-0.01em" }}>{p.name}</p>
                  {p.sub && <p style={{ fontSize: "13px", color: T.textSecondary, marginTop: "2px" }}>{p.sub}</p>}
                </div>
                <span
                  className="px-3 py-1 shrink-0"
                  style={{ backgroundColor: "rgba(107,21,14,0.08)", color: T.purple, borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}
                >
                  {p.tag}
                </span>
              </div>
              <p style={{ fontSize: "14px", color: T.textSecondary, lineHeight: 1.75 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── APPROACH ──────────────────────────────────────────────────────── */
function ApproachSection() {
  const methods = [
    { title: "Философията на Ikigai", desc: "Намираме твоята вътрешна причина - и изграждаме бизнес около нея." },
    { title: "Поведенческа психология", desc: "Разбираме как вземат решения твоите клиенти и говорим на техния език." },
    { title: "Стратегически онлайн бизнес", desc: "Ясна структура, бизнес модел и план за устойчив растеж." },
    { title: "Storytelling & позициониране", desc: "Автентично послание, което привлича точно правилните хора." },
    { title: "Органичен маркетинг", desc: "Видимост и доверие, изградени върху стойност - не шум." },
    { title: "Дигитални продукти", desc: "Онлайн програми, курсове и обучения, които работят докато ти спиш." },
  ];

  return (
    <section
      className="px-6 md:px-16 lg:px-24 py-24 md:py-32"
      style={{ ...DARK_BG }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="mv-tag mv-tag-light">Моят подход</span>
          <h2
            className="mt-6"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 800, color: onDark.primary, lineHeight: 1.2, letterSpacing: "-0.02em" }}
          >
            Шест направления,{" "}
            <span style={{ ...GRADIENT_TEXT }}>един резултат</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {methods.map((m, i) => (
            <div
              key={m.title}
              className="p-7"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                borderRadius: T.radiusSm,
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p
                style={{ fontSize: "11px", fontWeight: 700, color: T.purple, letterSpacing: "0.1em", marginBottom: "12px" }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <p style={{ fontSize: "16px", fontWeight: 700, color: onDark.primary, marginBottom: "8px" }}>{m.title}</p>
              <p style={{ fontSize: "13px", color: onDark.secondary, lineHeight: 1.7 }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EDUCATION ─────────────────────────────────────────────────────── */
function EducationSection() {
  const certs = [
    {
      src: "/awards-2020.jpg",
      label: "British Bulgarian Business Awards за \"Онлайн Бизнес на Годината 2020\" за COACHING REAL",
    },
    {
      src: "/Сертификат Ikigai coach.png",
      label: "Сертификат Ikigai coach",
    },
    {
      src: "/Сертификат Ikigai Tribe.jpg",
      label: "Сертификат Ikigai Tribe",
    },
    {
      src: "/Сертификат за TRADE MARK на COACHING REAL.jpg",
      label: "Сертификат за TRADE MARK на COACHING REAL",
    },
    {
      src: "/Сертификат по Theta healing Advanced DNA.jpg",
      label: "Сертификат по Theta healing Advanced DNA",
    },
    {
      src: "/Сертификат по Theta healing basic DNA.jpg",
      label: "Сертификат по Theta healing basic DNA",
    },
    {
      src: "/Диплома Коуч.jpg",
      label: "Диплома Коуч",
    },
  ];

  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: T.surfaceMuted }}
    >
      <div className="relative max-w-6xl mx-auto">
        <span className="mv-tag mv-tag-light">Образование & акредитации</span>
        <h2
          className="mt-6 mb-12"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 800, color: T.textPrimary, lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Доверено от{" "}
          <span style={{ ...GRADIENT_TEXT }}>международни организации</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {certs.map((c) => (
            <div
              key={c.label}
              className="group flex flex-col overflow-hidden"
              style={{
                borderRadius: T.radiusSm,
                border: "1px solid rgba(107,21,14,0.15)",
                backgroundColor: T.surfaceRaised,
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3", flexShrink: 0 }}>
                <Image
                  src={c.src}
                  alt={c.label}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                  className="group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Label */}
              <div
                className="flex-1 flex items-start px-4 py-4"
                style={{ borderTop: "1px solid rgba(107,21,14,0.1)" }}
              >
                <p style={{ fontSize: "13px", fontWeight: 600, color: T.textPrimary, lineHeight: 1.55 }}>
                  {c.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── RESULTS ───────────────────────────────────────────────────────── */
function ResultsSection() {
  const results = [
    "Създават първата си онлайн програма или курс",
    "Структурират своята експертиза в дигитален продукт",
    "Започват да привличат клиенти чрез органичен маркетинг",
    "Изграждат ясно позициониране и личен бранд",
    "Създават общност около своята работа",
    "Увеличават своята увереност и професионална стойност",
  ];

  return (
    <section
      className="px-6 md:px-16 lg:px-24 py-24 md:py-32"
      style={{ ...DARK_BG }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="mv-tag mv-tag-light">Резултати</span>
          <h2
            className="mt-6"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 800, color: onDark.primary, lineHeight: 1.2, letterSpacing: "-0.02em" }}
          >
            Какво постигат{" "}
            <span style={{ ...GRADIENT_TEXT }}>моите клиенти</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {results.map((r) => (
            <div
              key={r}
              className="flex items-start gap-4 px-6 py-5"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", borderRadius: T.radiusSm, border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span style={{ color: T.purple, fontSize: "18px", flexShrink: 0, marginTop: "1px" }}>✔</span>
              <p style={{ fontSize: "15px", color: onDark.secondary, lineHeight: 1.65 }}>{r}</p>
            </div>
          ))}
        </div>

        <div
          className="text-center px-8 py-8"
          style={{ borderLeft: `3px solid ${T.purple}`, backgroundColor: "rgba(107,21,14,0.08)", borderRadius: "0 12px 12px 0" }}
        >
          <p style={{ fontSize: "18px", fontWeight: 600, color: onDark.primary, lineHeight: 1.75 }}>
            Но най-важният резултат е нещо друго - те започват да виждат,
            че е възможно да имат бизнес,{" "}
            <span style={{ ...GRADIENT_TEXT }}>който е в синхрон с тяхната душа.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ───────────────────────────────────────────────────────────── */
function CTASection() {
  return (
    <section
      className="px-6 md:px-16 lg:px-24 py-24 md:py-32"
      style={{ backgroundColor: T.purple }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <span
          className="mv-tag inline-block mb-8"
          style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff" }}
        >
          Безплатна стратегическа сесия
        </span>
        <h2
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.15, letterSpacing: "-0.02em" }}
        >
          Ако знаеш, че имаш какво да дадеш на света - ела да го превърнем в бизнес.
        </h2>
        <p className="mt-5" style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", lineHeight: 1.75 }}>
          Запази 45-минутна безплатна сесия. Разбираш точно какво те спира и
          излизаш с конкретен следващ план - без продажбен натиск.
        </p>
        <a
          href="/programs"
          className="mv-btn mv-btn-white mt-10 inline-flex"
          style={{ fontSize: "16px", padding: "16px 40px" }}
        >
          Запази своята безплатна сесия →
        </a>
      </div>
    </section>
  );
}
