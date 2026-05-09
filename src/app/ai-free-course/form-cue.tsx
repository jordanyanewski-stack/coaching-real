"use client";

import { useEffect } from "react";

/**
 * Click handler for any non-submit CTA pointing at #enroll:
 *   1. Smooth-scrolls the bottom enrollment form into the centre of the viewport
 *   2. After scroll lands, fires a glow pulse around the form
 * Re-triggerable on every click. Uses scroll-into-view rather than the
 * default browser hash jump so we control the centering and the cue.
 */
export function FormCueHandler() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest('a[href="#enroll"]') as HTMLAnchorElement | null;
      if (!link) return;

      const form = document.getElementById("enroll");
      if (!form) return;

      e.preventDefault();
      e.stopPropagation();

      // Centre the form in the viewport with smooth scroll
      form.scrollIntoView({ behavior: "smooth", block: "center" });

      // Pulse the form once it's settled in view
      window.setTimeout(() => {
        form.classList.remove("fd-form-cue");
        // Force reflow so the animation re-triggers on repeat clicks
        void form.offsetWidth;
        form.classList.add("fd-form-cue");
        window.setTimeout(() => form.classList.remove("fd-form-cue"), 2000);
      }, 700);
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
