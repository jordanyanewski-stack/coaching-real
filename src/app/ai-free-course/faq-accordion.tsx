"use client";

import { useState, useRef, useEffect } from "react";

interface FAQ {
  q: string;
  a: string;
}

interface Props {
  items: FAQ[];
  accent: string;
  accentLight: string;
  textPrimary: string;
  textBody: string;
  border: string;
  bg: string;
}

export function FreeDayFAQAccordion({
  items,
  accent,
  accentLight,
  textPrimary,
  textBody,
  border,
  bg,
}: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => {
        const open = openIdx === i;
        return (
          <FAQItem
            key={f.q}
            faq={f}
            open={open}
            onToggle={() => setOpenIdx(open ? null : i)}
            accent={accent}
            accentLight={accentLight}
            textPrimary={textPrimary}
            textBody={textBody}
            border={border}
            bg={bg}
          />
        );
      })}
    </div>
  );
}

function FAQItem({
  faq,
  open,
  onToggle,
  accent,
  accentLight,
  textPrimary,
  textBody,
  border,
  bg,
}: {
  faq: FAQ;
  open: boolean;
  onToggle: () => void;
} & Omit<Props, "items">) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    if (open) {
      setMaxH(contentRef.current.scrollHeight);
    } else {
      setMaxH(0);
    }
  }, [open, faq.a]);

  return (
    <div
      style={{
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: "6px",
        overflow: "hidden",
        transition: "border-color 0.25s ease",
        borderColor: open ? accent : border,
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        style={{
          all: "unset",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "20px 22px",
          fontFamily: "inherit",
          fontSize: "15px",
          fontWeight: 700,
          color: textPrimary,
          cursor: "pointer",
          boxSizing: "border-box",
          letterSpacing: "-0.005em",
        }}
      >
        <span>{faq.q}</span>
        <span
          aria-hidden
          style={{
            width: "26px",
            height: "26px",
            borderRadius: "4px",
            background: open ? accent : accentLight,
            color: open ? "#ffffff" : accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.22s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div
        style={{
          maxHeight: `${maxH}px`,
          overflow: "hidden",
          transition: "max-height 0.36s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          ref={contentRef}
          style={{
            padding: "0 22px 22px",
            fontSize: "14.5px",
            color: textBody,
            lineHeight: 1.75,
          }}
        >
          {faq.a}
        </div>
      </div>
    </div>
  );
}
