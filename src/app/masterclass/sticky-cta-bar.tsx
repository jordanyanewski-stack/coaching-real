"use client";

import { useEffect, useState } from "react";

const DEADLINE_MS = Date.UTC(2026, 4, 14, 20, 59, 59);

interface TimeLeft {
  days: number;
  hours: number;
  expired: boolean;
}

function calc(): TimeLeft {
  const ms = DEADLINE_MS - Date.now();
  if (ms <= 0) return { days: 0, hours: 0, expired: true };
  return {
    days: Math.floor(ms / (1000 * 60 * 60 * 24)),
    hours: Math.floor((ms / (1000 * 60 * 60)) % 24),
    expired: false,
  };
}

export function StickyCTABar() {
  const [visible, setVisible] = useState(false);
  const [t, setT] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setT(calc());
    const tick = setInterval(() => setT(calc()), 60_000);

    const heroEl = document.querySelector(".mc-hero");
    const enrollEl = document.getElementById("enroll");

    let pastHero = false;
    let inEnroll = false;

    const update = () => setVisible(pastHero && !inEnroll);

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        pastHero = !entry.isIntersecting;
        update();
      },
      { threshold: 0, rootMargin: "0px 0px -85% 0px" }
    );
    const enrollObs = new IntersectionObserver(
      ([entry]) => {
        inEnroll = entry.isIntersecting;
        update();
      },
      { threshold: 0.05 }
    );

    if (heroEl) heroObs.observe(heroEl);
    if (enrollEl) enrollObs.observe(enrollEl);

    return () => {
      clearInterval(tick);
      heroObs.disconnect();
      enrollObs.disconnect();
    };
  }, []);

  if (!t || t.expired) return null;

  return (
    <div
      role="region"
      aria-label="Бърза покупка"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 60,
        transform: visible ? "translateY(0)" : "translateY(110%)",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: "1100px",
          padding: "0 12px 12px 12px",
        }}
      >
        <div
          className="mc-sticky-inner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            padding: "12px 16px",
            backgroundColor: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderRadius: "14px",
            border: "1px solid rgba(107,21,14,0.14)",
            boxShadow: "0 12px 40px rgba(107,21,14,0.18), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div
            className="mc-sticky-info"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              minWidth: 0,
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "6px",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#595e67",
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(0,0,0,0.3)",
                }}
              >
                €197
              </span>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                €67
              </span>
            </div>
            <div
              className="mc-sticky-countdown"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                fontWeight: 700,
                color: "#70150E",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
                minWidth: 0,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#c94535",
                  flexShrink: 0,
                  boxShadow: "0 0 0 3px rgba(201,69,53,0.2)",
                  animation: "stickyDotPulse 1.6s ease-in-out infinite",
                }}
              />
              <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                Цената скача след {t.days}д {t.hours}ч
              </span>
            </div>
          </div>

          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{
              fontSize: "14px",
              padding: "12px 22px",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            Запиши се →
          </a>
        </div>
      </div>
    </div>
  );
}
