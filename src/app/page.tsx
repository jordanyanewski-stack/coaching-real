import Image from "next/image";
import { T, onDark, PHOTO_URL, GRADIENT_TEXT, SiteNav, SiteFooter } from "@/app/_shared";

// ─── Data (home-page only) ────────────────────────────────────────────
const mvv = [
  {
    numeral: "I",
    title: "Мисия",
    body: "Да те свържем с клиентите, които имат нужда точно от теб - и да ти покажем как да изградиш бизнес, воден от ценности, без да предаваш себе си. Coaching Real съществува, защото призванието ти заслужава и прехрана.",
  },
  {
    numeral: "II",
    title: "Визия",
    body: "Свят, в който коучове, терапевти и холистични лидери процъфтяват финансово, без да компрометират душата си. Coaching Real е мостът между призванието и устойчивия успех.",
  },
  {
    numeral: "III",
    title: "Ценности",
    body: null,
    values: [
      { title: "Автентичност", desc: "Тук си такъв, какъвто си - и точно такъв привличаш правилните клиенти." },
      { title: "Стойност на всяка крачка", desc: "Всяко послание и взаимодействие носи реална полза - за теб и за тях." },
      { title: "Лидерство с кураж", desc: "Да водиш изисква смелост. Ние те подкрепяме да я намериш и задържиш." },
      { title: "Почтеност без компромис", desc: "Продавай с достойнство. Ценуй себе си. Оставай верен на думата си." },
      { title: "Отговорност към влиянието", desc: "Силата ти да променяш животи е дар - учим те да го носиш с грижа." },
    ],
  },
];


// ─── Page ────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)" }}>
      <SiteNav />
      <HeroSection />
      <MVVSection />
      <CTASection />
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
      {/* Subtle dot grid background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage: "radial-gradient(circle, rgba(15,19,26,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 25%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 25%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">

        {/* Left - text */}
        <div>
          <div className="animate-fade-up">
            <span className="mv-tag mv-tag-light">За коучове · терапевти · холистични лидери</span>
          </div>

          <h1
            className="animate-fade-up delay-100 mt-6"
            style={{
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: onDark.primary,
            }}
          >
            <span className="block">Изгради</span>
            <span className="block">бизнес</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 12px rgba(200,60,40,0.3)) drop-shadow(0 0 30px rgba(200,60,40,0.12))",
              }}
            >с душа.</span>
          </h1>

          <p
            className="animate-fade-up delay-200 mt-8"
            style={{
              fontSize: "16px",
              color: onDark.secondary,
              lineHeight: 1.75,
              maxWidth: "480px",
            }}
          >
            Ти помагаш на хора. Знаеш, че работата ти има стойност. Но клиентите
            не идват сами - и идеята да &ldquo;продаваш&rdquo; те кара да се
            чувстваш неудобно. Coaching Real ти показва как да изградиш устойчив
            бизнес с автентично послание, без манипулация и без да предаваш себе си.
          </p>

          <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mt-10">
            <a
              href="https://calendly.com/stanislavapavlova8/meet-with-me-1"
              target="_blank"
              rel="noopener noreferrer"
              className="mv-btn mv-btn-primary"
            >
              Запази безплатна сесия →
            </a>
            <a href="/stanislava" className="mv-btn mv-btn-outline-light">
              Кой стои зад Coaching Real
            </a>
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
              position: "relative",
              borderRadius: T.radiusSm,
              border: "1.5px solid #70150E",
            }}
          >
            <Image
              src={PHOTO_URL}
              alt="Станислава Павлова - основател на Coaching Real"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 1024px) 0px, 50vw"
              priority
            />
          </div>
          {/* Floating badge */}
          <div
            className="absolute bottom-5 left-5 right-5 px-5 py-4"
            style={{
              backgroundColor: "rgba(15,19,26,0.92)",
              backdropFilter: "blur(16px)",
              borderRadius: T.radiusSm,
              border: "1px solid rgba(232,80,80,0.45)",
              boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 800,
                color: "#ff7a6e",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Основател на Coaching Real
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "#ffffff",
                marginTop: "4px",
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              Станислава Павлова · Единственият Ikigai коуч в България
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── MISSION / VISION / VALUES ─────────────────────────────────────── */
function MVVSection() {
  // mvv is a fixed-length tuple of 3 entries — index 2 is the Values block.
  // Non-null assertion is safe because mvv is statically populated above.
  const values = mvv[2]!;
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: T.surfaceRaised }}
    >
      {/* Subtle red gradient tint */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 0% 110%, rgba(107,21,14,0.07) 0%, transparent 70%)," +
            "radial-gradient(ellipse 50% 40% at 100% 0%, rgba(107,21,14,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="mv-tag mv-tag-light">Защо съществуваме</span>
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
            Изградено на{" "}
            <span style={{ ...GRADIENT_TEXT }}>ясна основа</span>
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* I - Mission  &  II - Vision */}
          {mvv.slice(0, 2).map((item) => (
            <div
              key={item.numeral}
              className="p-8 flex flex-col gap-5"
              style={{
                backgroundColor: T.surfaceStrong,
                borderRadius: T.radiusSm,
                borderTop: `3px solid ${T.purple}`,
              }}
            >
              <span
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 900,
                  ...GRADIENT_TEXT,
                  lineHeight: 1,
                  opacity: 0.22,
                  letterSpacing: "-0.03em",
                  display: "block",
                }}
              >
                {item.numeral}
              </span>
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    ...GRADIENT_TEXT,
                    marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: T.textSecondary, lineHeight: 1.75 }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}

          {/* III - Values */}
          <div
            className="p-8 flex flex-col gap-5"
            style={{
              backgroundColor: T.surfaceStrong,
              borderRadius: T.radiusSm,
              borderTop: `3px solid ${T.purple}`,
            }}
          >
            <span
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                ...GRADIENT_TEXT,
                lineHeight: 1,
                opacity: 0.22,
                letterSpacing: "-0.03em",
                display: "block",
              }}
            >
              {values.numeral}
            </span>
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  ...GRADIENT_TEXT,
                  marginBottom: "14px",
                  letterSpacing: "-0.01em",
                }}
              >
                {values.title}
              </h3>
              <div className="flex flex-col gap-4">
                {values.values!.map((v) => (
                  <div key={v.title}>
                    <p style={{ fontSize: "14px", fontWeight: 700, ...GRADIENT_TEXT, marginBottom: "2px" }}>
                      {v.title}
                    </p>
                    <p style={{ fontSize: "13px", color: T.textSecondary, lineHeight: 1.65 }}>
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


/* ─── CTA ───────────────────────────────────────────────────────────── */
function CTASection() {
  return (
    <section
      id="cta"
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
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Знаеш, че помагаш. Нека научим света да те намери.
        </h2>

        <p
          className="mt-5"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.65,
          }}
        >
          Запази 30-минутна безплатна сесия със Станислава Павлова.
        </p>
        <p
          className="mt-2"
          style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}
        >
          Разбираш точно какво те спира и излизаш с конкретен следващ план - без продажбен натиск.
        </p>

        <a
          href="https://calendly.com/stanislavapavlova8/meet-with-me-1"
          target="_blank"
          rel="noopener noreferrer"
          className="mv-btn mv-btn-white mt-10 inline-flex"
          style={{ fontSize: "16px", padding: "16px 40px" }}
        >
          Запази своята безплатна сесия →
        </a>
      </div>
    </section>
  );
}

