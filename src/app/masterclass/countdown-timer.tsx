"use client";

import { useEffect, useState } from "react";

/* Early-bird deadline: 14 May 2026 · 23:59:59 Sofia time (UTC+3 = EEST). */
const DEADLINE_MS = Date.UTC(2026, 4, 14, 20, 59, 59);

interface TimeLeft {
  days: number;
  hours: number;
  mins: number;
  secs: number;
  expired: boolean;
}

function calc(): TimeLeft {
  const ms = DEADLINE_MS - Date.now();
  if (ms <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, expired: true };
  return {
    days:  Math.floor(ms / (1000 * 60 * 60 * 24)),
    hours: Math.floor((ms / (1000 * 60 * 60)) % 24),
    mins:  Math.floor((ms / (1000 * 60)) % 60),
    secs:  Math.floor((ms / 1000) % 60),
    expired: false,
  };
}

const pad = (n: number) => n.toString().padStart(2, "0");

const cellStyle: React.CSSProperties = {
  minWidth: "52px",
  padding: "8px 10px",
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  border: "1px solid rgba(107,21,14,0.14)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2px",
  boxShadow: "0 1px 4px rgba(107,21,14,0.05)",
};

const numStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 800,
  color: "#70150E",
  lineHeight: 1,
  letterSpacing: "-0.02em",
  fontVariantNumeric: "tabular-nums",
};

const lblStyle: React.CSSProperties = {
  fontSize: "9px",
  fontWeight: 700,
  color: "rgba(0,0,0,0.45)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

export function CountdownTimer() {
  // null on SSR + first paint to avoid hydration mismatch
  const [t, setT] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!t || t.expired) return null;

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: "10px",
        padding: "14px 16px",
        backgroundColor: "rgba(107,21,14,0.05)",
        borderRadius: "14px",
        border: "1px solid rgba(107,21,14,0.14)",
        maxWidth: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#c94535",
            flexShrink: 0,
            boxShadow: "0 0 0 3px rgba(201,69,53,0.2)",
          }}
        />
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#70150E",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Цената скача след
        </span>
      </div>

      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        <div style={cellStyle}>
          <span style={numStyle}>{pad(t.days)}</span>
          <span style={lblStyle}>дни</span>
        </div>
        <div style={cellStyle}>
          <span style={numStyle}>{pad(t.hours)}</span>
          <span style={lblStyle}>часа</span>
        </div>
        <div style={cellStyle}>
          <span style={numStyle}>{pad(t.mins)}</span>
          <span style={lblStyle}>мин</span>
        </div>
        <div style={cellStyle}>
          <span style={numStyle}>{pad(t.secs)}</span>
          <span style={lblStyle}>сек</span>
        </div>
      </div>

      <p style={{ fontSize: "11px", color: "rgba(0,0,0,0.55)", fontWeight: 600 }}>
        Ранно записване до 14 май, 23:59
      </p>
    </div>
  );
}
