"use client";

import { useEffect, useState } from "react";
import { ZhivaVol2PriceText } from "./price-offer";
import styles from "./page.module.css";

export function ZhivaVol2StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-zhiva-vol2-hero]");
    const enroll = document.querySelector("[data-zhiva-vol2-enroll]");

    let pastHero = false;
    let inEnroll = false;
    const update = () => setVisible(pastHero && !inEnroll);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        pastHero = !entry.isIntersecting;
        update();
      },
      { threshold: 0, rootMargin: "0px 0px -70% 0px" },
    );

    const enrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        inEnroll = entry.isIntersecting;
        update();
      },
      { threshold: 0.05 },
    );

    if (hero) heroObserver.observe(hero);
    if (enroll) enrollObserver.observe(enroll);

    return () => {
      heroObserver.disconnect();
      enrollObserver.disconnect();
    };
  }, []);

  return (
    <div
      className={`${styles.stickyCta} ${visible ? styles.stickyCtaVisible : ""}`}
      aria-hidden={!visible}
    >
      <div>
        <strong>
          <ZhivaVol2PriceText />
        </strong>
        <span>21–23 август · 19:00</span>
      </div>
      <a href="#enroll" tabIndex={visible ? 0 : -1}>
        Искам да участвам
      </a>
    </div>
  );
}
