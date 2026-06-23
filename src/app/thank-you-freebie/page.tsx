import Image from "next/image";
import { T, GRADIENT_TEXT, SiteFooter } from "@/app/_shared";
import { HotOffer } from "./hot-offer";

export const metadata = {
  title: "Благодарим ти! | Coaching Real",
  description: "Провери имейла си за безплатния гайд. Специална еднократна оферта за аудиокнигата.",
  // Mid-funnel page reachable only after opt-in — keep it out of search (matches /audiobook-72h).
  robots: { index: false, follow: false },
};

export default function ThankYouFreebieLP() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)" }}>
      <ConfirmSection />
      <OfferSection />
      <WhySection />
      <SiteFooter />
    </div>
  );
}

/* ─── CONFIRM EMAIL (compact banner) ───────────────────────────────── */
function ConfirmSection() {
  return (
    <section
      className="px-6 md:px-16 lg:px-24 pt-16 pb-0"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div
        className="max-w-2xl mx-auto flex items-center gap-4 p-4"
        style={{
          backgroundColor: "rgba(34,197,94,0.06)",
          borderRadius: "10px",
          border: "1px solid rgba(34,197,94,0.15)",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(34,197,94,0.12)",
            border: "1.5px solid rgba(34,197,94,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <p style={{ fontSize: "14px", fontWeight: 600, color: T.textPrimary, lineHeight: 1.4 }}>
            Готово! Гайдът е изпратен на имейла ти.
          </p>
          <p style={{ fontSize: "12px", color: T.textSecondary, marginTop: "2px" }}>
            Провери &ldquo;Промоции&rdquo; или &ldquo;Спам&rdquo; ако не го виждаш.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── HOT OFFER ────────────────────────────────────────────────────── */
function OfferSection() {
  return (
    <section
      className="px-6 md:px-16 lg:px-24 pt-8 pb-20"
      style={{
        background: "linear-gradient(180deg, #faf8f5 0%, #fff4f2 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span
            className="mv-tag"
            style={{ backgroundColor: "rgba(112,21,14,0.08)", color: "#c94535" }}
          >
            Специално предложение &middot; само за теб
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
            Преди да затвориш тази страница&hellip;
          </h2>

          <p
            className="mt-4 mx-auto"
            style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.8, maxWidth: "480px" }}
          >
            Яснотата за идеалния клиент е началото.
            Но истинският пробив идва, когато имаш <strong style={{ color: T.textPrimary }}>структура,
            позициониране и система</strong>.
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
              Еднократна покана
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
            <p style={{ fontSize: "14px", color: T.textSecondary, marginTop: "6px" }}>Аудиокнига от Станислава Павлова</p>
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

          {/* Hot offer with timer + checkout */}
          <HotOffer />
        </div>

        {/* Urgency note */}
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

/* ─── WHY / IDENTITY SHIFT ─────────────────────────────────────────── */
function WhySection() {
  return (
    <section
      className="px-6 md:px-16 lg:px-24 py-20"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="max-w-xl mx-auto text-center">
        <p
          style={{
            fontSize: "16px",
            color: T.textSecondary,
            lineHeight: 1.85,
            fontStyle: "italic",
          }}
        >
          Това не е просто покупка. Това е решение.
        </p>
        <p
          className="mt-4"
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: T.textPrimary,
            lineHeight: 1.5,
          }}
        >
          Решение да влезеш в нова идентичност:{" "}
          <span style={{ ...GRADIENT_TEXT }}>
            Холистичен лидер със структура.
          </span>
        </p>
        <p
          className="mt-8"
          style={{ fontSize: "14px", color: "rgba(15,19,26,0.4)", lineHeight: 1.7 }}
        >
          Понякога Вселената не ти дава знак. Тя ти дава прозорец.
          <br />
          А този прозорец е ограничен — виж таймера горе.
        </p>
      </div>
    </section>
  );
}
