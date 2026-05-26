'use client';

import { useState, useEffect } from 'react';
import { EnrollForm } from '../masterclass/enroll-form';

const TWENTY_DAYS = 20 * 24 * 60 * 60 * 1000;

function getBuyerTimestamp(): number | null {
  const match = document.cookie.match(/(?:^|;\s*)audiobook_buyer=(\d+)/);
  return match ? Number(match[1]) : null;
}

interface PromoPriceProps {
  variant: 'hero' | 'value-stack' | 'final-cta';
}

export function PromoPrice({ variant }: PromoPriceProps) {
  const [isPromo, setIsPromo] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const ts = getBuyerTimestamp();
    if (ts) {
      const deadline = ts + TWENTY_DAYS;
      const remaining = deadline - Date.now();
      if (remaining > 0) {
        setIsPromo(true);
        setDaysLeft(Math.ceil(remaining / (24 * 60 * 60 * 1000)));
      }
    }
    setReady(true);
  }, []);

  if (!ready) return null;

  if (variant === 'hero') {
    return (
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          gap: "18px",
          padding: "22px 26px",
          background: "linear-gradient(135deg, #ffffff 0%, #fdf6ee 100%)",
          borderRadius: "18px",
          border: "1px solid rgba(107,21,14,0.16)",
          boxShadow: "0 12px 40px rgba(107,21,14,0.10), 0 1px 2px rgba(0,0,0,0.04)",
          maxWidth: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap", rowGap: "8px" }}>
          {isPromo && (
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "rgba(15,19,26,0.4)",
                textDecoration: "line-through",
                letterSpacing: "-0.01em",
              }}
            >
              €197
            </span>
          )}
          <span
            style={{
              fontSize: "clamp(2.4rem, 7vw, 3.2rem)",
              fontWeight: 900,
              background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            {isPromo ? '€97' : '€197'}
          </span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#595e67", letterSpacing: "0.02em", alignSelf: "center" }}>
            за всички 12 модула
          </span>
        </div>
        {isPromo && (
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#70150E", letterSpacing: "0.02em" }}>
            Специална цена · остават {daysLeft} {daysLeft === 1 ? 'ден' : 'дни'}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'value-stack') {
    return (
      <div
        style={{
          padding: "26px 24px 30px",
          backgroundColor: "#ffffff",
          borderTop: "1px solid rgba(107,21,14,0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "12px" }}>
          {isPromo && (
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "rgba(15,19,26,0.4)",
                textDecoration: "line-through",
              }}
            >
              €197
            </span>
          )}
          <span
            style={{
              fontSize: "clamp(2.4rem, 6vw, 3.4rem)",
              fontWeight: 900,
              background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {isPromo ? '€97' : '€197'}
          </span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#595e67", letterSpacing: "0.02em", alignSelf: "center" }}>
            за всички 12 модула
          </span>
        </div>
        {isPromo && (
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#70150E" }}>
            Специална цена · остават {daysLeft} {daysLeft === 1 ? 'ден' : 'дни'}
          </span>
        )}
        <a
          href="#enroll"
          className="mv-btn mv-btn-primary"
          style={{ fontSize: "16px", padding: "16px 32px", display: "inline-flex", alignItems: "center", gap: "10px" }}
        >
          Запиши се &rarr;
        </a>
      </div>
    );
  }

  // final-cta
  return (
    <div>
      <div
        className="mt-10 mb-10 inline-flex flex-col items-center gap-5 px-10 py-7"
        style={{
          backgroundColor: "#faf8f5",
          borderRadius: "14px",
          border: "1px solid rgba(107,21,14,0.1)",
        }}
      >
        <div className="flex items-baseline gap-3">
          {isPromo && (
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "rgba(15,19,26,0.4)",
                textDecoration: "line-through",
              }}
            >
              €197
            </span>
          )}
          <span
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 900,
              color: "var(--mv-text-primary)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            {isPromo ? '€97' : '€197'}
          </span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#595e67", letterSpacing: "0.02em" }}>
            за всички 12 модула
          </span>
        </div>
        {isPromo && (
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#70150E" }}>
            Специална цена · остават {daysLeft} {daysLeft === 1 ? 'ден' : 'дни'}
          </span>
        )}
      </div>

      <div className="flex flex-col items-center gap-4">
        <EnrollForm product={isPromo ? '12-izmerenia-promo' : '12-izmerenia'} />
      </div>
    </div>
  );
}
