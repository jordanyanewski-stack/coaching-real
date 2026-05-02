"use client";

import { useState, useRef, useEffect } from "react";
import { T } from "@/app/_shared";

type FAQ = { q: string; a: string };

function FAQItem({
  item,
  open,
  onToggle,
}: {
  item: FAQ;
  open: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div
      style={{
        backgroundColor: T.surfaceRaised,
        borderRadius: "10px",
        border: `1px solid ${open ? "rgba(107,21,14,0.2)" : "rgba(107,21,14,0.1)"}`,
        overflow: "hidden",
        transition: "border-color 0.25s",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "18px 20px",
          fontSize: "15px",
          fontWeight: 700,
          color: T.textPrimary,
          lineHeight: 1.4,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          background: "none",
          border: "none",
          textAlign: "left",
        }}
      >
        {item.q}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="#70150E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>

      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          ref={bodyRef}
          style={{
            padding: "0 20px 18px",
            borderTop: "1px solid rgba(107,21,14,0.08)",
          }}
        >
          <p style={{ fontSize: "14px", color: T.textSecondary, lineHeight: 1.8, paddingTop: "14px" }}>
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((item, i) => (
        <FAQItem
          key={i}
          item={item}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
