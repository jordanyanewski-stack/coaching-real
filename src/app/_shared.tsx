import Image from "next/image";
// ─── Shared design tokens, data, and layout components ───────────────
export const T = {
  textPrimary:   "var(--mv-text-primary)",
  textSecondary: "var(--mv-text-secondary)",
  purple:        "var(--mv-purple)",
  purpleLight:   "var(--mv-purple-light)",
  surfaceBase:   "var(--mv-surface-base)",
  surfaceMuted:  "var(--mv-surface-muted)",
  surfaceRaised: "var(--mv-surface-raised)",
  surfaceStrong: "var(--mv-surface-strong)",
  radiusSm:      "var(--mv-radius-sm)",
  radiusLg:      "var(--mv-radius-lg)",
} as const;

export const onDark = {
  primary:   "#ffffff",
  secondary: "rgba(255,255,255,0.68)",
  muted:     "rgba(255,255,255,0.60)",
  accent:    "#6b150e",
} as const;

export const PHOTO_URL = "/stasi-1.jpg";

export const LOGO_URL = "/CR-logo.png";

export const GRADIENT_TEXT = {
  background: "linear-gradient(135deg, #6b150e 0%, #c94535 55%, #e85050 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

export const navLinks = [
  { href: "/",             label: "Начало" },
  { href: "/stanislava",   label: "Моята мисия" },
  { href: "/programs",      label: "Програми" },
  { href: "/podcast",      label: "Подкаст" },
  { href: "/specialists",  label: "Специалисти" },
  { href: "/blog",         label: "Блог" },
];

export const stats = [
  { value: "500+", label: "Live излъчвания", sub: "видео съдържание" },
  { value: "30K+", label: "Последователи",   sub: "в социални мрежи" },
  { value: "1M+",  label: "Live Streaming",  sub: "Гледане на Живо" },
];

export const certs = [
  'British Bulgarian Business Awards за „Онлайн Бизнес на Годината 2020" за COACHING REAL',
  "Сертификат Ikigai coach",
  "Сертификат Ikigai Tribe",
  "Сертификат за TRADE MARK на COACHING REAL",
  "Сертификат по Theta healing Advanced DNA",
  "Сертификат по Theta healing basic DNA",
  "Диплома Коуч",
];

/* ─── SiteNav ──────────────────────────────────────────────────────── */
export function SiteNav() {
  return (
    <nav
      role="navigation"
      aria-label="Главно меню"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 gap-6"
      style={{
        backgroundColor: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(15,19,26,0.07)",
      }}
    >
      <a href="/" style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
        <Image src={LOGO_URL} alt="Coaching Real" width={0} height={0} sizes="100vw" style={{ height: "40px", width: "auto", display: "block" }} />
      </a>

      <div className="hidden lg:flex items-center gap-7">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: T.textSecondary,
              textDecoration: "none",
              transition: "color var(--mv-duration-fast)",
            }}
            className="hover:text-[var(--mv-text-primary)]"
          >
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="/kickstart#waitlist"
        className="mv-btn mv-btn-primary"
        style={{ padding: "10px 22px", fontSize: "14px", flexShrink: 0 }}
      >
        Запази си среща
      </a>
    </nav>
  );
}

/* ─── SiteFooter ───────────────────────────────────────────────────── */
export function SiteFooter() {
  const legalLinks = [
    { href: "/privacy", label: "Политика за поверителност" },
    { href: "/terms",   label: "Общи условия" },
    { href: "/cookies", label: "Бисквитки" },
  ];

  return (
    <footer style={{ backgroundColor: "#faf8f5", borderTop: "1px solid rgba(107,21,14,0.08)" }}>
      <div className="px-6 md:px-16 lg:px-24 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <a href="/" style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
          <Image src={LOGO_URL} alt="Coaching Real" width={0} height={0} sizes="100vw" style={{ height: "36px", width: "auto" }} />
        </a>

        <nav aria-label="Footer меню" className="flex flex-wrap gap-x-6 gap-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: "13px",
                color: "rgba(15,19,26,0.5)",
                textDecoration: "none",
                transition: "color var(--mv-duration-fast)",
              }}
              className="hover:text-[#0f131a]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div
        className="px-6 md:px-16 lg:px-24 py-5 flex flex-col md:flex-row justify-between items-center gap-4"
        style={{ borderTop: "1px solid rgba(107,21,14,0.06)" }}
      >
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {legalLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: "12px", color: "rgba(15,19,26,0.35)", textDecoration: "none" }}
              className="hover:text-[#0f131a]/60"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p style={{ fontSize: "12px", color: "rgba(15,19,26,0.3)" }}>
          Coaching Real Live, All rights reserved
        </p>
      </div>
    </footer>
  );
}
