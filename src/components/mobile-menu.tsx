"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type NavLink = { href: string; label: string };

interface Props {
  links: NavLink[];
  ctaHref: string;
  ctaLabel: string;
}

export function MobileMenu({ links, ctaHref, ctaLabel }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const drawer = (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(15,19,26,0.45)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease",
          zIndex: 9998,
        }}
      />

      {/* Drawer */}
      <aside
        id="mobile-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Главно меню"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(86vw, 360px)",
          backgroundColor: "#ffffff",
          boxShadow: "-12px 0 40px rgba(15,19,26,0.18)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{ padding: "18px 22px", borderBottom: "1px solid rgba(15,19,26,0.07)" }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(15,19,26,0.55)",
            }}
          >
            Меню
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Затвори менюто"
            style={{
              width: 36,
              height: 36,
              padding: 0,
              background: "transparent",
              border: "1px solid rgba(15,19,26,0.12)",
              borderRadius: 10,
              cursor: "pointer",
              color: "#0f131a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </div>

        <nav
          aria-label="Главно меню — мобилно"
          style={{ display: "flex", flexDirection: "column", padding: "12px 12px", gap: 2, flex: 1, overflowY: "auto" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "14px 14px",
                fontSize: 16,
                fontWeight: 600,
                color: "#0f131a",
                textDecoration: "none",
                borderRadius: 10,
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(112,21,14,0.06)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ padding: "16px 22px 22px", borderTop: "1px solid rgba(15,19,26,0.07)" }}>
          <a
            href={ctaHref}
            target={ctaHref.startsWith("http") ? "_blank" : undefined}
            rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={() => setOpen(false)}
            className="mv-btn mv-btn-primary"
            style={{ display: "flex", justifyContent: "center", padding: "14px 22px", fontSize: 14, width: "100%" }}
          >
            {ctaLabel}
          </a>
        </div>
      </aside>
    </>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Отвори менюто"
        aria-expanded={open}
        aria-controls="mobile-menu-drawer"
        className="lg:hidden flex items-center justify-center"
        style={{
          width: 44,
          height: 44,
          padding: 0,
          background: "transparent",
          border: "1px solid rgba(15,19,26,0.12)",
          borderRadius: 10,
          cursor: "pointer",
          color: "#0f131a",
          flexShrink: 0,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <line x1="3" y1="6"  x2="21" y2="6"  />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {mounted ? createPortal(drawer, document.body) : null}
    </>
  );
}
