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
        href="https://calendly.com/stanislavapavlova8/30min?month=2026-05&date=2026-05-04"
        target="_blank"
        rel="noopener noreferrer"
        className="mv-btn mv-btn-primary"
        style={{ padding: "10px 22px", fontSize: "14px", flexShrink: 0 }}
      >
        Запази си среща
      </a>
    </nav>
  );
}

/* ─── SiteFooter ───────────────────────────────────────────────────── */
const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/CoachingRealLive",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/coaching_real",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@coachingrealpodcast",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="#faf8f5" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/0KxtbyciihHNzSI8qAGB6c?si=85f441d70222430a",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
        <path fill="#faf8f5" d="M16.63 13.27c-2.64-1.57-6.57-1.71-8.94-0.95a0.77 0.77 0 1 1-0.45-1.48c2.73-0.83 7.27-0.67 10.14 1.1a0.77 0.77 0 0 1-0.75 1.33zm0.22-2.78c-3.06-1.82-7.7-1.88-10.48-1.04a0.93 0.93 0 1 1-0.54-1.78c3.16-0.96 8.4-0.88 11.72 1.2a0.93 0.93 0 0 1-0.7 1.62zm0.09-2.87c-3.66-2.18-9.7-2.38-13.19-1.31a1.11 1.11 0 1 1-0.65-2.13c4-1.22 10.68-0.99 14.9 1.52a1.11 1.11 0 0 1-1.06 1.92z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/74492137/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

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

        <div className="flex flex-col gap-2">
          <p style={{ fontSize: "11px", fontWeight: 700, color: "rgba(15,19,26,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Социални мрежи
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  color: "rgba(15,19,26,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "color 0.15s",
                }}
                className="hover:text-[#6b150e]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
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
