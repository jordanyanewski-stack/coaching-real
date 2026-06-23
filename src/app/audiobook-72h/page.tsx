import Image from "next/image";
import { T, GRADIENT_TEXT, SiteFooter, LOGO_URL } from "@/app/_shared";
import { Audiobook72Offer } from "./audiobook-72h-offer";

export const metadata = {
  title: "Специална оферта · аудиокнига | Coaching Real",
  description:
    "Аудиокнига „Дигитален успех за холистични лидери“ на специална цена — само за 72 часа.",
  // Unlisted funnel page — reachable only from the email link, kept out of search.
  robots: { index: false, follow: false },
};

export default function Audiobook72Page() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)" }}>
      {/* minimal brand header — no nav, no escape routes */}
      <header style={{ padding: "20px 32px", textAlign: "center", backgroundColor: "#faf8f5" }}>
        <a href="/">
          <Image
            src={LOGO_URL}
            alt="Coaching Real"
            width={0}
            height={0}
            sizes="100vw"
            style={{ height: "36px", width: "auto", display: "inline-block" }}
          />
        </a>
      </header>

      <OfferSection />
      <WhySection />
      <SiteFooter />
    </div>
  );
}

/* ─── OFFER ─────────────────────────────────────────────────────────── */
function OfferSection() {
  return (
    <section
      className="px-6 md:px-16 lg:px-24 pt-12 pb-20"
      style={{ background: "linear-gradient(180deg, #faf8f5 0%, #fff4f2 100%)" }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span
            className="mv-tag"
            style={{ backgroundColor: "rgba(112,21,14,0.08)", color: "#c94535" }}
          >
            Само за теб &middot; специална цена за 72 часа
          </span>

          <h2
            className="mt-6"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Готова ли си за следващата стъпка?
          </h2>

          <p
            className="mt-4 mx-auto"
            style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.8, maxWidth: "480px" }}
          >
            Вече направи първата крачка с безплатния гайд. Аудиокнигата е
            естественото продължение — <strong style={{ color: T.textPrimary }}>системата
            зад яснотата</strong>: структура, позициониране и устойчив доход.
          </p>
        </div>

        {/* Audiobook card */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            border: "1px solid rgba(107,21,14,0.1)",
            boxShadow: "0 8px 40px rgba(107,21,14,0.08)",
            padding: "32px",
          }}
        >
          {/* Cover image */}
          <div style={{ margin: "0 auto 24px", maxWidth: "280px" }}>
            <Image
              src="/audiobook-cover.png"
              alt="Аудиокнига: Дигитален Успех за Холистични Лидери"
              width={1080}
              height={1080}
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
          </div>

          <div className="text-center mb-8">
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                ...GRADIENT_TEXT,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Специална имейл оферта
            </p>
            <h3
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                fontWeight: 800,
                color: T.textPrimary,
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
              }}
            >
              &ldquo;Дигитален успех за холистични лидери&rdquo;
            </h3>
            <p style={{ fontSize: "14px", color: T.textSecondary, marginTop: "6px" }}>
              Аудиокнига от Станислава Павлова
            </p>
          </div>

          {/* Benefits */}
          <div className="flex flex-col gap-3 mb-8 max-w-sm mx-auto">
            {[
              "Как да продаваш без да се чувстваш натрапчив/а",
              "Как да превърнеш мисията си в устойчив доход",
              "Как да мислиш като стратег, не като „търсещ/а още курс“",
              "Как да изградиш бизнес в синхрон със себе си",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span
                  style={{
                    flexShrink: 0,
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
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
                <p style={{ fontSize: "15px", color: T.textPrimary, lineHeight: 1.65 }}>{item}</p>
              </div>
            ))}
          </div>

          {/* 72h offer with timer + checkout (client) */}
          <Audiobook72Offer />
        </div>

        <p
          className="text-center mt-6"
          style={{ fontSize: "13px", color: "rgba(15,19,26,0.4)", lineHeight: 1.6 }}
        >
          След като таймерът изтече, тази цена няма да бъде достъпна отново.
        </p>
      </div>
    </section>
  );
}

/* ─── WHY ───────────────────────────────────────────────────────────── */
function WhySection() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-20" style={{ backgroundColor: "#faf8f5" }}>
      <div className="max-w-xl mx-auto text-center">
        <p style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.85, fontStyle: "italic" }}>
          19 € не е покупка. Това е решение.
        </p>
        <p
          className="mt-4"
          style={{ fontSize: "18px", fontWeight: 700, color: T.textPrimary, lineHeight: 1.5 }}
        >
          Решение да влезеш в нова идентичност:{" "}
          <span style={{ ...GRADIENT_TEXT }}>Холистичен лидер със структура.</span>
        </p>
      </div>
    </section>
  );
}
