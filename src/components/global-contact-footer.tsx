"use client";

import { usePathname } from "next/navigation";

const CONTACT_EMAIL = "info@coachingreallive.com";
const CONTACT_PHONE_DISPLAY = "+359 88 5841441";
const CONTACT_PHONE_LINK = "+359885841441";

const HIDDEN_ROUTES = ["/admin", "/dashboard", "/sign-in", "/sign-up"];

export function GlobalContactFooter() {
  const pathname = usePathname();

  if (HIDDEN_ROUTES.some((route) => pathname.startsWith(route))) {
    return null;
  }

  const isEnglish = pathname.startsWith("/stuck-in-the-middle");
  const isFullCalendar = pathname.startsWith("/palen-grafik-postoyanni-klienti");

  return (
    <footer
      aria-label={isEnglish ? "Contact information" : "Контакти"}
      style={{
        backgroundColor: "#faf8f5",
        borderTop: "1px solid rgba(107, 21, 14, 0.1)",
        color: "#241611",
      }}
    >
      <div
        style={{
          width: "min(100% - 40px, 1180px)",
          minHeight: "76px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: isFullCalendar ? "14px" : "10px",
          padding: "20px 0",
          fontSize: "14px",
          lineHeight: 1.5,
          textAlign: "center",
        }}
      >
        {isFullCalendar && (
          <p style={{ maxWidth: "760px", margin: 0, color: "#173f3e", fontWeight: 650 }}>
            Превърни уменията си като Nail специалист в система за повече постоянни клиенти и по-предвидим график
          </p>
        )}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "10px 24px" }}>
          <strong style={{ fontWeight: 700 }}>
            {isEnglish ? "Contact us" : "Контакти"}
          </strong>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href={`tel:${CONTACT_PHONE_LINK}`}
            aria-label={`${isEnglish ? "Telephone" : "Телефон"} ${CONTACT_PHONE_DISPLAY}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {isEnglish ? "Tel:" : "Тел:"} {CONTACT_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  );
}
