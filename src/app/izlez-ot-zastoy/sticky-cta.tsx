"use client";

import { useEffect, useState } from "react";
import { HristinaPriceText } from "./price-offer";

export function IzlezStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.querySelector(".fd-hero");
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
      { threshold: 0, rootMargin: "0px 0px -80% 0px" }
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

  return (
    <div
      className="fd-sticky-mobile"
      role="region"
      aria-label="Бърза регистрация"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 60,
        padding: "10px 12px 12px",
        background:
          "linear-gradient(180deg, rgba(25,10,10,0) 0%, rgba(25,10,10,0.92) 30%, rgba(25,10,10,0.98) 100%)",
        transform: visible ? "translateY(0)" : "translateY(110%)",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <a
        href="#enroll"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "16px 20px",
          background: "linear-gradient(135deg, #a10406 0%, #780304 100%)",
          color: "#ffffff",
          fontSize: "15px",
          fontWeight: 700,
          borderRadius: "6px",
          textDecoration: "none",
          letterSpacing: "0.01em",
          boxShadow: "0 12px 32px rgba(161,4,6,0.45), 0 1px 2px rgba(0,0,0,0.1)",
          whiteSpace: "nowrap",
        }}
      >
        Запиши се — <HristinaPriceText />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
