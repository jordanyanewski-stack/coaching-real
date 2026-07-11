'use client';

import { useState, useEffect } from 'react';
import { EnrollForm } from '../masterclass/enroll-form';

// €97 promo windows, derived from the actual email cadence (not the old 20-day
// guess). Automation C closes ~8 days after a subscriber joins f1-nurture (E13 =
// last chance). Buyers reach nurture faster (purchase +2d) than non-buyers
// (opt-in +4d), so the buyer window is shorter. Each window expires right after
// that path's final email, making the „краен срок" in E12/E13 real.
const BUYER_WINDOW = 10 * 24 * 60 * 60 * 1000;   // audiobook buyers: ~purchase +10d
const FUNNEL_WINDOW = 12 * 24 * 60 * 60 * 1000;  // freebie opt-ins:  ~opt-in +12d

function getCookieTs(name: string): number | null {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=(\\d+)`));
  return match ? Number(match[1]) : null;
}

// €97 deadline for whichever applies: audiobook buyers (BUYER_WINDOW from
// purchase) or any funnel opt-in (FUNNEL_WINDOW from opt-in). Buyer cookie wins.
function getPromoDeadline(): number | null {
  const buyerTs = getCookieTs('audiobook_buyer');
  if (buyerTs) return buyerTs + BUYER_WINDOW;
  const optinTs = getCookieTs('funnel_optin');
  if (optinTs) return optinTs + FUNNEL_WINDOW;
  return null;
}

/** Shared promo state — €97 if a buyer/funnel cookie is still live, else €197.
 *  Used by both PromoPrice and the StickyCTABar so the page never contradicts itself. */
export function usePromo() {
  const [isPromo, setIsPromo] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const now = Date.now();
    let deadline = getPromoDeadline();
    // The cookies never travel across devices — a subscriber who opts in on
    // desktop but opens the funnel emails on her phone (or in Gmail's in-app
    // browser) has no cookie there and would wrongly see €197. Funnel emails
    // therefore link with ?f1=1: when it's present and no live window exists,
    // grant a fresh funnel window on this device. Only funnel subscribers
    // ever receive links carrying the param.
    if (
      (!deadline || deadline <= now) &&
      new URLSearchParams(window.location.search).get('f1') === '1'
    ) {
      document.cookie = `funnel_optin=${now};path=/;max-age=${60 * 60 * 24 * 30}`;
      deadline = now + FUNNEL_WINDOW;
    }
    if (deadline) {
      const remaining = deadline - now;
      if (remaining > 0) {
        setIsPromo(true);
        setDaysLeft(Math.ceil(remaining / (24 * 60 * 60 * 1000)));
      }
    }
    setReady(true);
  }, []);

  return { isPromo, daysLeft, ready };
}

/** Inline price label that respects the promo cookies. Renders €197 on the
 *  server + first paint (hydration-safe), flips to €97 after mount for funnel
 *  leads. Drop it into any CTA text: „Запиши се - <PromoAmount />". */
export function PromoAmount() {
  const { isPromo, ready } = usePromo();
  return <>{ready && isPromo ? '€97' : '€197'}</>;
}

interface PromoPriceProps {
  variant: 'hero' | 'value-stack' | 'final-cta';
}

export function PromoPrice({ variant }: PromoPriceProps) {
  // Render the €197 (non-promo) card during SSR + first paint instead of null —
  // avoids a blank price card + layout shift on the page's key element. The €97
  // flip happens after mount once usePromo reads the cookies (isPromo starts
  // false, so server HTML and first client render match — hydration-safe).
  const { isPromo, daysLeft } = usePromo();

  if (variant === 'hero') {
    return (
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          gap: "18px",
          padding: "22px 26px",
          background: "linear-gradient(135deg, #ffffff 0%, #fdf6ee 100%)",
          borderRadius: "18px",
          border: "1px solid rgba(107,21,14,0.16)",
          boxShadow: "0 12px 40px rgba(107,21,14,0.10), 0 1px 2px rgba(0,0,0,0.04)",
          maxWidth: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap", rowGap: "8px" }}>
          {isPromo && (
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "rgba(15,19,26,0.4)",
                textDecoration: "line-through",
                letterSpacing: "-0.01em",
              }}
            >
              €197
            </span>
          )}
          <span
            style={{
              fontSize: "clamp(2.4rem, 7vw, 3.2rem)",
              fontWeight: 900,
              background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            {isPromo ? '€97' : '€197'}
          </span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#595e67", letterSpacing: "0.02em", alignSelf: "center" }}>
            за всички 12 модула
          </span>
        </div>
        {isPromo && (
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#70150E", letterSpacing: "0.02em" }}>
            Специална цена · остават {daysLeft} {daysLeft === 1 ? 'ден' : 'дни'}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'value-stack') {
    return (
      <div
        style={{
          padding: "26px 24px 30px",
          backgroundColor: "#ffffff",
          borderTop: "1px solid rgba(107,21,14,0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "12px" }}>
          {isPromo && (
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "rgba(15,19,26,0.4)",
                textDecoration: "line-through",
              }}
            >
              €197
            </span>
          )}
          <span
            style={{
              fontSize: "clamp(2.4rem, 6vw, 3.4rem)",
              fontWeight: 900,
              background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {isPromo ? '€97' : '€197'}
          </span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#595e67", letterSpacing: "0.02em", alignSelf: "center" }}>
            за всички 12 модула
          </span>
        </div>
        {isPromo && (
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#70150E" }}>
            Специална цена · остават {daysLeft} {daysLeft === 1 ? 'ден' : 'дни'}
          </span>
        )}
        <a
          href="#enroll"
          className="mv-btn mv-btn-primary"
          style={{ fontSize: "16px", padding: "16px 32px", display: "inline-flex", alignItems: "center", gap: "10px" }}
        >
          Запиши се &rarr;
        </a>
      </div>
    );
  }

  // final-cta
  return (
    <div>
      <div
        className="mt-10 mb-10 inline-flex flex-col items-center gap-5 px-10 py-7"
        style={{
          backgroundColor: "#faf8f5",
          borderRadius: "14px",
          border: "1px solid rgba(107,21,14,0.1)",
        }}
      >
        <div className="flex items-baseline gap-3">
          {isPromo && (
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "rgba(15,19,26,0.4)",
                textDecoration: "line-through",
              }}
            >
              €197
            </span>
          )}
          <span
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 900,
              color: "var(--mv-text-primary)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            {isPromo ? '€97' : '€197'}
          </span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#595e67", letterSpacing: "0.02em" }}>
            за всички 12 модула
          </span>
        </div>
        {isPromo && (
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#70150E" }}>
            Специална цена · остават {daysLeft} {daysLeft === 1 ? 'ден' : 'дни'}
          </span>
        )}
      </div>

      <div className="flex flex-col items-center gap-4">
        <EnrollForm product={isPromo ? '12-izmerenia-promo' : '12-izmerenia'} />
      </div>
    </div>
  );
}
