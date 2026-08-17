"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { EnrollForm } from "../masterclass/enroll-form";
import {
  EARLY_PRICE,
  isEarlyPriceAt,
  REGULAR_PRICE,
  REGULAR_PRICE_START,
} from "./campaign";

type Offer = typeof EARLY_PRICE | typeof REGULAR_PRICE;

const OfferContext = createContext<{ offer: Offer; now: number | null }>({
  offer: EARLY_PRICE,
  now: null,
});

export function MagiOfferProvider({ children }: { children: React.ReactNode }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const interval = window.setInterval(tick, 1_000);

    return () => window.clearInterval(interval);
  }, []);

  const offer = now === null || isEarlyPriceAt(now) ? EARLY_PRICE : REGULAR_PRICE;

  return (
    <OfferContext.Provider value={{ offer, now }}>
      {children}
    </OfferContext.Provider>
  );
}

function useMagiOffer() {
  return useContext(OfferContext);
}

export function MagiPriceText() {
  const { offer } = useMagiOffer();
  return <>{offer.display}</>;
}

export function MagiCtaLabel() {
  const { offer } = useMagiOffer();
  return <>Запази място — {offer.display} →</>;
}

export function MagiOfferSentence() {
  const { offer } = useMagiOffer();
  return offer.product === EARLY_PRICE.product ? (
    <>Промоционална цена {offer.display} до 24 август включително · след това €97.</>
  ) : (
    <>Редовна цена {offer.display}.</>
  );
}

export function MagiPricePill() {
  const { offer } = useMagiOffer();

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "7px 12px",
        borderRadius: "4px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.10)",
        fontSize: "12px",
        fontWeight: 500,
        color: "rgba(255,255,255,0.78)",
      }}
    >
      <span
        aria-hidden
        style={{
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "#a5b8d8",
        }}
      />
      {offer.display} общо
    </span>
  );
}

export function MagiEnrollForm() {
  const { offer } = useMagiOffer();

  return (
    <EnrollForm
      product={offer.product}
      variant="dark"
      submitLabel={`Запази мястото си за ${offer.display} →`}
    />
  );
}

function Countdown({ remaining }: { remaining: number }) {
  const units = [
    { value: Math.floor(remaining / 86_400_000), label: "дни" },
    { value: Math.floor((remaining % 86_400_000) / 3_600_000), label: "часа" },
    { value: Math.floor((remaining % 3_600_000) / 60_000), label: "мин" },
    { value: Math.floor((remaining % 60_000) / 1_000), label: "сек" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2" aria-label="Оставащо време за промоционалната цена">
      {units.map(({ value, label }) => (
        <div
          key={label}
          style={{
            minWidth: 0,
            padding: "9px 5px 8px",
            borderRadius: "5px",
            border: "1px solid rgba(147,197,253,0.24)",
            backgroundColor: "rgba(255,255,255,0.045)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.1rem, 3.5vw, 1.4rem)",
              fontWeight: 800,
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {String(value).padStart(2, "0")}
          </div>
          <div
            style={{
              marginTop: "5px",
              color: "rgba(255,255,255,0.48)",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function MagiUrgencyBlock() {
  const { offer, now } = useMagiOffer();

  if (offer.product !== EARLY_PRICE.product) return null;

  const remaining = now === null ? null : Math.max(0, REGULAR_PRICE_START - now);

  return (
    <div
      className="mt-5 w-full"
      role="timer"
      aria-live="off"
      style={{
        padding: "14px",
        borderRadius: "7px",
        border: "1px solid rgba(147,197,253,0.22)",
        backgroundColor: "rgba(37,99,235,0.08)",
      }}
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span
          style={{
            color: "#93c5fd",
            fontSize: "10px",
            fontWeight: 800,
            letterSpacing: "0.11em",
            textTransform: "uppercase",
          }}
        >
          Промоционална цена
        </span>
        <span style={{ color: "rgba(255,255,255,0.76)", fontSize: "12px", fontWeight: 700 }}>
          €36 до 24 август · след това €97
        </span>
      </div>

      {remaining === null ? (
        <div style={{ color: "rgba(255,255,255,0.62)", fontSize: "12px", textAlign: "center", padding: "7px 0" }}>
          Офертата е валидна до 24 август включително
        </div>
      ) : (
        <Countdown remaining={remaining} />
      )}
    </div>
  );
}
