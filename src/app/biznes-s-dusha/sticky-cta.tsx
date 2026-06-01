"use client";

import { useEffect, useState } from "react";

const EARLY_BIRD_END = Date.parse("2026-06-16T00:00:00+03:00"); // end of 15 June, Sofia

export function StickyCTABar() {
  const [visible, setVisible] = useState(false);
  const [isEarly, setIsEarly] = useState(true);

  useEffect(() => {
    setIsEarly(Date.now() < EARLY_BIRD_END);

    const heroEl = document.querySelector(".mc-hero");
    const enrollEl = document.getElementById("enroll");

    let pastHero = false;
    let inEnroll = false;

    const update = () => setVisible(pastHero && !inEnroll);

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        pastHero = !entry.isIntersecting;
        update();
      },
      { threshold: 0, rootMargin: "0px 0px -85% 0px" }
    );
    const enrollObs = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        inEnroll = entry.isIntersecting;
        update();
      },
      { threshold: 0.05 }
    );

    if (heroEl) heroObs.observe(heroEl);
    if (enrollEl) enrollObs.observe(enrollEl);

    return () => {
      heroObs.disconnect();
      enrollObs.disconnect();
    };
  }, []);

  const price = isEarly ? "€37" : "€97";

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
      <div style={{ margin: "0 auto", maxWidth: "1100px", padding: "0 12px 12px 12px" }}>
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
            style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0, flex: 1 }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "6px", flexShrink: 0 }}>
              {isEarly && (
                <span
                  suppressHydrationWarning
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgba(15,19,26,0.4)",
                    textDecoration: "line-through",
                  }}
                >
                  €97
                </span>
              )}
              <span
                suppressHydrationWarning
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
                {price}
              </span>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#595e67", letterSpacing: "0.02em" }}>
                за 12 дни
              </span>
            </div>
          </div>

          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{ fontSize: "14px", padding: "12px 22px", flexShrink: 0, whiteSpace: "nowrap" }}
          >
            Запиши се
          </a>
        </div>
      </div>
    </div>
  );
}
