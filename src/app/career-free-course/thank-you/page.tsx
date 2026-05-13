import Image from "next/image";
import { LOGO_URL, SiteFooter } from "@/app/_shared";

export const metadata = {
  title: "Записа се успешно! · Моето кариерно развитие в ерата на AI",
  description: "Добре дошъл/дошла в Кариерното Пробуждане. Провери имейла си.",
  robots: { index: false, follow: false },
};

const FD = {
  bg: "#ffffff",
  bgAlt: "#f8fafc",
  bgPale: "#eff6ff",
  bgDark: "#0a2540",
  textPrimary: "#0a2540",
  textBody: "#334155",
  textMuted: "#64748b",
  border: "rgba(10,37,64,0.10)",
  accent: "#2563eb",
  accentDark: "#1d4ed8",
  accentLight: "#dbeafe",
  success: "#0d9488",
  successLight: "#ccfbf1",
};

const FB_GROUP_URL = "https://www.facebook.com/groups/1648723652914690/";

const meetings = [
  { num: "Среща 1", date: "21", month: "май" },
  { num: "Среща 2", date: "28", month: "май" },
  { num: "Среща 3", date: "4", month: "юни" },
  { num: "Среща 4", date: "11", month: "юни" },
];

const nextSteps = [
  "Провери имейла си — изпратих ти писмо с всичко необходимо за старта на 21 май.",
  "Присъедини се към затворената група за подкрепа — линкът е по-долу. Там ще намериш останалите участници.",
  "Запази датите в календара си: 21 май, 28 май, 4 юни, 11 юни — всеки четвъртък от 19:00 ч.",
  "Подготви се с един въпрос, с който идваш на първата среща. Само един — но честен.",
];

export default function FreeDayThankYouPage() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)", backgroundColor: FD.bg }}>
      {/* Minimal header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: `1px solid ${FD.border}`,
        }}
        className="flex items-center justify-between px-6 md:px-10 py-3"
      >
        <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src={LOGO_URL}
            alt="Coaching Real"
            width={0}
            height={0}
            sizes="100vw"
            style={{ height: "32px", width: "auto", display: "block" }}
          />
        </a>
        <a
          href="/career-free-course"
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: FD.textMuted,
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}
        >
          ← Обратно към началото
        </a>
      </header>

      {/* HERO — confirmation */}
      <section
        className="px-6 md:px-12 lg:px-20 pt-16 pb-14 md:pt-24 md:pb-20 text-center relative overflow-hidden"
        style={{ backgroundColor: FD.bgDark, color: "#ffffff" }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 70% at 50% 30%, rgba(37,99,235,0.20) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="relative max-w-3xl mx-auto" style={{ zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              borderRadius: "99px",
              background: FD.successLight,
              color: FD.success,
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              marginBottom: "26px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Записа се успешно
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#ffffff",
            }}
          >
            Добре дошъл/дошла{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              в Кариерното Пробуждане!
            </span>
          </h1>

          <p
            style={{
              marginTop: "22px",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.78)",
              maxWidth: "560px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Радвам се, че си тук. Направи първата и най-важна стъпка.{" "}
            <strong style={{ color: "#ffffff" }}>Провери имейла си</strong> —
            очаквай писмо от мен скоро.
          </p>
        </div>
      </section>

      {/* Meeting dates strip */}
      <section
        className="px-6 md:px-12 lg:px-20 py-12 md:py-14"
        style={{
          backgroundColor: FD.bgAlt,
          borderBottom: `1px solid ${FD.border}`,
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {meetings.map((m) => (
            <div
              key={m.num}
              style={{
                background: "#ffffff",
                border: `1.5px solid ${FD.border}`,
                borderRadius: "12px",
                padding: "16px 22px",
                minWidth: "120px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: FD.accent,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                {m.num}
              </div>
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: 900,
                  color: FD.textPrimary,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {m.date}
              </div>
              <div style={{ fontSize: "13px", color: FD.textMuted, marginTop: "4px" }}>
                {m.month}
              </div>
            </div>
          ))}

          <div
            style={{
              width: "1px",
              height: "70px",
              background: FD.border,
            }}
            className="hidden md:block"
          />

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "10px",
                fontWeight: 700,
                color: FD.accent,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Час
            </div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: 900,
                color: FD.textPrimary,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              19:00
            </div>
            <div style={{ fontSize: "13px", color: FD.textMuted, marginTop: "4px" }}>
              всеки четвъртък
            </div>
          </div>
        </div>
      </section>

      {/* What's next */}
      <section
        className="px-6 md:px-12 lg:px-20 py-20 md:py-24"
        style={{ backgroundColor: FD.bg }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: FD.accent,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              Какво следва
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 800,
                color: FD.textPrimary,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Следващите{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0a2540 0%, #2563eb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                4 стъпки
              </span>
            </h2>
          </div>

          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {nextSteps.map((step, i) => (
              <li
                key={step}
                style={{
                  display: "flex",
                  gap: "18px",
                  alignItems: "flex-start",
                  background: FD.bgAlt,
                  border: `1.5px solid ${FD.border}`,
                  borderRadius: "12px",
                  padding: "20px 22px",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: 800,
                    boxShadow: "0 4px 12px rgba(37,99,235,0.32)",
                  }}
                >
                  {i + 1}
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    color: FD.textPrimary,
                    lineHeight: 1.65,
                    fontWeight: 500,
                    paddingTop: "5px",
                  }}
                >
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FB Group CTA */}
      <section
        className="px-6 md:px-12 lg:px-20 py-16 md:py-20"
        style={{ backgroundColor: FD.bgPale }}
      >
        <div
          className="max-w-3xl mx-auto"
          style={{
            background: "#ffffff",
            border: `1.5px solid ${FD.accentLight}`,
            borderRadius: "16px",
            padding: "32px 36px",
            textAlign: "center",
            boxShadow: "0 8px 32px rgba(37,99,235,0.06)",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #1877f2 0%, #166fe5 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              boxShadow: "0 8px 22px rgba(24,119,242,0.32)",
            }}
          >
            {/* Facebook glyph */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#ffffff" aria-hidden>
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
            </svg>
          </div>

          <h3
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: FD.textPrimary,
              lineHeight: 1.2,
              marginBottom: "10px",
              letterSpacing: "-0.02em",
            }}
          >
            Присъедини се към затворената група
          </h3>
          <p
            style={{
              fontSize: "15px",
              color: FD.textBody,
              lineHeight: 1.65,
              marginBottom: "24px",
              maxWidth: "440px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Тук ще намериш останалите участници, материалите за всяка седмица и
            директна подкрепа между срещите.
          </p>

          <a
            href={FB_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 32px",
              background: "linear-gradient(135deg, #1877f2 0%, #166fe5 100%)",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: 700,
              borderRadius: "10px",
              textDecoration: "none",
              boxShadow: "0 10px 28px rgba(24,119,242,0.36)",
              letterSpacing: "0.01em",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
            </svg>
            Влез в групата във Facebook →
          </a>
        </div>
      </section>

      {/* Refer-a-friend */}
      <section
        className="px-6 md:px-12 lg:px-20 py-16 md:py-20"
        style={{ backgroundColor: FD.bg }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h3
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
              fontWeight: 700,
              color: FD.textPrimary,
              lineHeight: 1.3,
              marginBottom: "12px",
              letterSpacing: "-0.01em",
            }}
          >
            Познаваш ли някой, на когото би помогнал този курс?
          </h3>
          <p
            style={{
              fontSize: "15px",
              color: FD.textBody,
              lineHeight: 1.65,
              marginBottom: "26px",
            }}
          >
            Сподели с него или нея — безплатното е по-ценно, когато се споделя.
          </p>
          <ShareButtons />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* ─── Share buttons (client) ────────────────────────────────────────── */
function ShareButtons() {
  const shareUrl = "https://coachingreallive.com/career-free-course";
  const shareText =
    "Безплатен 4-седмичен курс „Моето кариерно развитие в ерата на AI“ — започва 21 май.";

  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const liHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const waHref = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
  const viberHref = `viber://forward?text=${encodeURIComponent(shareText + " " + shareUrl)}`;

  const btnStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 18px",
    background: "#ffffff",
    border: `1.5px solid ${FD.border}`,
    color: FD.textPrimary,
    fontSize: "13px",
    fontWeight: 600,
    borderRadius: "8px",
    textDecoration: "none",
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <a href={fbHref} target="_blank" rel="noopener noreferrer" style={btnStyle}>
        Facebook
      </a>
      <a href={liHref} target="_blank" rel="noopener noreferrer" style={btnStyle}>
        LinkedIn
      </a>
      <a href={waHref} target="_blank" rel="noopener noreferrer" style={btnStyle}>
        WhatsApp
      </a>
      <a href={viberHref} style={btnStyle}>
        Viber
      </a>
    </div>
  );
}
