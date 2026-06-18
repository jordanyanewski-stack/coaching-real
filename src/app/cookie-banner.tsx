"use client";

import { useEffect, useState } from "react";

/**
 * Subtle bottom-of-screen cookie notice. Purely informational — it does NOT
 * gate, block, or load any tracking scripts (the Facebook Pixel loads as before).
 * The only thing it touches is a single localStorage flag so it stays dismissed.
 */
const KEY = "cr-cookie-notice";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* private mode / storage blocked → just don't show */
    }
  }, []);

  if (!show) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] px-4 pb-4">
      <div className="pointer-events-auto mx-auto flex max-w-2xl flex-col gap-3 rounded-2xl border border-[#70150E]/15 bg-[#faf8f5]/95 px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-relaxed text-[#4a4441]">
          Използваме бисквитки, за да работи сайтът коректно и да подобряваме
          преживяването ти.{" "}
          <a
            href="/privacy"
            className="font-semibold text-[#70150E] underline underline-offset-2 hover:opacity-80"
          >
            Политика за поверителност
          </a>
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 self-start rounded-full bg-[#70150E] px-5 py-2 text-[13px] font-semibold text-white transition hover:bg-[#5a1009] sm:self-auto"
        >
          Разбрах
        </button>
      </div>
    </div>
  );
}
