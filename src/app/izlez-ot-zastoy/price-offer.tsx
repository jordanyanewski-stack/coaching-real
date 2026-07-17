"use client";

import { useEffect, useState } from "react";
import { EnrollForm } from "../masterclass/enroll-form";
import {
  COURSE_START,
  EARLY_PRICE,
  isEarlyPriceAt,
  REGULAR_PRICE,
  REGULAR_PRICE_START,
} from "./campaign";

function useCurrentPrice() {
  const [isEarly, setIsEarly] = useState(true);

  useEffect(() => {
    const updatePrice = () => setIsEarly(isEarlyPriceAt(Date.now()));
    updatePrice();
    const interval = window.setInterval(updatePrice, 30_000);

    return () => window.clearInterval(interval);
  }, []);

  return isEarly ? EARLY_PRICE : REGULAR_PRICE;
}

export function HristinaPriceText({ format = "display" }: { format?: "display" | "amount" }) {
  const price = useCurrentPrice();
  return <>{format === "display" ? price.display : price.amount}</>;
}

function Countdown({ remaining }: { remaining: number }) {
  const units = [
    { value: Math.floor(remaining / 86_400_000), label: "дни" },
    { value: Math.floor((remaining % 86_400_000) / 3_600_000), label: "часа" },
    { value: Math.floor((remaining % 3_600_000) / 60_000), label: "мин" },
    { value: Math.floor((remaining % 60_000) / 1_000), label: "сек" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2" aria-label="Оставащо време до старта">
      {units.map(({ value, label }) => (
        <div
          key={label}
          style={{
            minWidth: 0,
            padding: "10px 6px 8px",
            borderRadius: "6px",
            border: "1px solid rgba(224,130,127,0.25)",
            backgroundColor: "rgba(255,255,255,0.055)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.25rem, 4vw, 1.65rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
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
              letterSpacing: "0.09em",
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

export function HristinaUrgencyBlock() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const interval = window.setInterval(tick, 1_000);

    return () => window.clearInterval(interval);
  }, []);

  const isEarly = now === null || now < REGULAR_PRICE_START;
  if (!isEarly) return null;

  const remaining = now === null ? null : Math.max(0, COURSE_START - now);
  const startsToday = remaining === 0;

  return (
    <div
      className="mx-auto mt-6 w-full max-w-[500px] lg:mx-0"
      role="timer"
      aria-live="off"
      style={{
        padding: "16px",
        borderRadius: "8px",
        border: "1px solid rgba(224,130,127,0.28)",
        backgroundColor: "rgba(161,4,6,0.12)",
        boxShadow: "0 14px 34px rgba(0,0,0,0.18)",
      }}
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span
          style={{
            color: "#e0827f",
            fontSize: "10px",
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Ранно записване
        </span>
        <span style={{ color: "rgba(255,255,255,0.72)", fontSize: "12px", fontWeight: 700 }}>
          €37 до 24 юли включително
        </span>
      </div>

      {startsToday ? (
        <div style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, textAlign: "center", padding: "8px 0" }}>
          Стартът е днес
        </div>
      ) : remaining === null ? (
        <div style={{ color: "rgba(255,255,255,0.72)", fontSize: "13px", fontWeight: 700, textAlign: "center", padding: "8px 0" }}>
          Курсът започва на 24 юли
        </div>
      ) : (
        <>
          <div
            style={{
              marginBottom: "9px",
              color: "rgba(255,255,255,0.70)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            До старта остават
          </div>
          <Countdown remaining={remaining} />
        </>
      )}

      <div style={{ marginTop: "10px", color: "rgba(255,255,255,0.46)", fontSize: "11px", textAlign: "center" }}>
        След 24 юли редовната цена е €97
      </div>
    </div>
  );
}

function HristinaCheckoutCountdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const interval = window.setInterval(tick, 1_000);

    return () => window.clearInterval(interval);
  }, []);

  if (now !== null && now >= REGULAR_PRICE_START) return null;

  const remaining = now === null ? null : Math.max(0, COURSE_START - now);
  const units = remaining === null
    ? []
    : [
        { value: Math.floor(remaining / 86_400_000), label: "д" },
        { value: Math.floor((remaining % 86_400_000) / 3_600_000), label: "ч" },
        { value: Math.floor((remaining % 3_600_000) / 60_000), label: "м" },
        { value: Math.floor((remaining % 60_000) / 1_000), label: "с" },
      ];

  return (
    <div
      className="mx-auto mb-6 flex w-full max-w-[520px] flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5"
      role="timer"
      aria-live="off"
      aria-label="Оставащо време за ранната цена"
      style={{
        borderRadius: "6px",
        border: "1px solid rgba(255,255,255,0.09)",
        backgroundColor: "rgba(255,255,255,0.025)",
      }}
    >
      <span
        style={{
          color: "rgba(255,255,255,0.42)",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        Ранната цена приключва
      </span>

      <span
        style={{
          color: "rgba(255,255,255,0.72)",
          fontSize: "12px",
          fontWeight: 700,
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "0.01em",
        }}
      >
        {remaining === null ? (
          <>на 24 юли</>
        ) : remaining === 0 ? (
          <>днес</>
        ) : (
          units.map(({ value, label }, index) => (
            <span key={label}>
              {index > 0 ? " · " : ""}
              {String(value).padStart(2, "0")}{label}
            </span>
          ))
        )}
      </span>
    </div>
  );
}

export function HristinaEnrollmentOffer() {
  const price = useCurrentPrice();
  const isEarly = price.product === EARLY_PRICE.product;

  return (
    <>
      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.6 }}>
        {isEarly ? (
          <>
            <strong style={{ color: "#e0827f" }}>Ранна цена {price.display} до 24 юли включително</strong>
            <br />
            След това редовната цена е €97
          </>
        ) : (
          <>4-седмичен курс на живо · редовна цена {price.display}</>
        )}
      </p>
      <HristinaCheckoutCountdown />
      <div className="flex justify-center">
        <EnrollForm
          product={price.product}
          cardOnly
          variant="dark-bordeaux"
          submitLabel={`Запиши се за ${price.amount} EUR →`}
        />
      </div>
    </>
  );
}
