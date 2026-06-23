import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getDb } from "@/lib/db";
import { grantsAudiobookAccess } from "@/lib/products";
import { normalizeEmail } from "@/lib/validators";
import { SiteNav, SiteFooter } from "@/app/_shared";

export const metadata = {
  title: "Моят профил | Coaching Real",
  description: "Профил и моите покупки в Coaching Real.",
};

export const dynamic = "force-dynamic";

type Order = {
  mypos_order_id: string;
  name: string;
  email: string;
  amount: string;
  currency: string;
  status: string;
  product: string;
  created_at: string;
};

const STATUS_LABEL: Record<string, { text: string; color: string; bg: string }> = {
  paid:                     { text: "Платено",            color: "#15803d", bg: "rgba(34,197,94,0.12)" },
  awaiting_bank_transfer:   { text: "Чака превод",        color: "#a16207", bg: "rgba(234,179,8,0.14)" },
  pending:                  { text: "В обработка",        color: "#a16207", bg: "rgba(234,179,8,0.14)" },
  cancelled:                { text: "Отказано",           color: "#9f1239", bg: "rgba(244,63,94,0.10)" },
  failed:                   { text: "Неуспешно",          color: "#9f1239", bg: "rgba(244,63,94,0.10)" },
};

function formatDate(d: string) {
  return new Date(d).toLocaleString("bg-BG", {
    year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit",
  });
}

async function loadOrdersForUser(userId: string, email: string | null): Promise<Order[]> {
  const sql = getDb();
  // normalizeEmail (trim + lowercase) — same normalization used at order insert,
  // in the stream route, and the Clerk webhook, so all claim sites match identically.
  const e = normalizeEmail(email ?? "");
  // user_id is the primary key. Email is a fallback ONLY for orders not yet
  // claimed (user_id IS NULL) — prevents a new Clerk user verifying a prior
  // buyer's email from reading the buyer's orders.
  const rows = await sql`
    SELECT
      mypos_order_id,
      name,
      email,
      amount::text AS amount,
      currency,
      status,
      product,
      created_at
    FROM orders
    WHERE user_id = ${userId}
       OR (user_id IS NULL AND ${e} <> '' AND lower(email) = ${e})
    ORDER BY created_at DESC
  ` as Order[];
  return rows;
}

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();
  const primaryEmail = user?.emailAddresses.find(e => e.id === user.primaryEmailAddressId)?.emailAddress ?? null;
  const greetingName =
    user?.firstName ||
    primaryEmail?.split("@")[0] ||
    "приятел";

  const orders = await loadOrdersForUser(userId, primaryEmail);
  const paidOrders = orders.filter(o => o.status === "paid");
  const hasPaidAudiobook = paidOrders.some(o => grantsAudiobookAccess(o.product));

  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)" }}>
      <SiteNav />
      <main
        className="px-6 md:px-16 lg:px-24 pt-32 pb-24"
        style={{ backgroundColor: "#faf8f5", minHeight: "100vh" }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Welcome header */}
          <div className="flex items-center justify-between gap-6 mb-12 flex-wrap">
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#70150E",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Моят профил
              </p>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3rem)",
                  fontWeight: 900,
                  color: "#0f131a",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Здравей, {greetingName}
              </h1>
            </div>
            <UserButton />
          </div>

          {/* Stats row */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <StatCard label="Платени покупки"   value={String(paidOrders.length)} />
            <StatCard label="Всички поръчки"     value={String(orders.length)} />
            <StatCard label="Имейл за достъп"    value={primaryEmail ?? "—"} small />
          </div>

          {/* Audiobook player — visible only for paid audiobook customers */}
          {hasPaidAudiobook && (
            <section
              className="mt-8"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(15,19,26,0.07)",
                borderRadius: "14px",
                padding: "28px",
              }}
            >
              <div className="flex gap-6 items-start flex-wrap">
                <div
                  style={{
                    position: "relative",
                    width: "140px",
                    height: "140px",
                    flexShrink: 0,
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 6px 24px rgba(15,19,26,0.12)",
                  }}
                >
                  <Image
                    src="https://coaching-real.b-cdn.net/9ff8bd87-324a-4212-a909-a8c70ebc1365.png"
                    alt="Аудиокнига · Дигитален Успех"
                    fill
                    sizes="140px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: "260px" }}>
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                    <h2
                      style={{
                        fontSize: "20px",
                        fontWeight: 800,
                        color: "#0f131a",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Аудиокнига · Дигитален Успех
                    </h2>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#15803d",
                        backgroundColor: "rgba(34,197,94,0.12)",
                        padding: "4px 10px",
                        borderRadius: "999px",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      Достъпно
                    </span>
                  </div>
                  <audio
                    src="/api/audiobook/stream"
                    controls
                    controlsList="nodownload noplaybackrate"
                    preload="metadata"
                    style={{ width: "100%" }}
                  />
                  <p
                    style={{
                      fontSize: "12px",
                      color: "rgba(15,19,26,0.5)",
                      marginTop: "12px",
                    }}
                  >
                    Стрийминг достъп · Без download. Слушай директно от профила си когато искаш.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Placeholder for users without paid audiobook */}
          {!hasPaidAudiobook && (
            <section className="mt-8">
              <div
                style={{
                  backgroundColor: "rgba(112,21,14,0.04)",
                  border: "1px dashed rgba(112,21,14,0.2)",
                  borderRadius: "14px",
                  padding: "24px",
                  fontSize: "13px",
                  color: "rgba(15,19,26,0.6)",
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "#70150E" }}>Скоро тук:</strong> директен достъп до аудиокниги и видео уроци за курсовете, които си закупил/а.
                <br /><br />
                Купил/а си аудиокнига, но не я виждаш тук? Възможно е да си използвал/а различен имейл при поръчката. Пиши ни на{" "}
                <a href="mailto:info@coachingreallive.com" style={{ color: "#70150E", fontWeight: 600 }}>info@coachingreallive.com</a>{" "}
                с имейла и името от поръчката и ще ти дадем достъп веднага.
              </div>
            </section>
          )}

          {/* Order history — collapsed, secondary */}
          {orders.length > 0 && (
            <details
              className="mt-12"
              style={{
                fontSize: "13px",
                color: "rgba(15,19,26,0.6)",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  padding: "8px 0",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  userSelect: "none",
                }}
              >
                История на поръчките ({orders.length})
              </summary>
              <div
                className="mt-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                {orders.map(o => {
                  const s = STATUS_LABEL[o.status] ?? { text: o.status, color: "#475569", bg: "rgba(100,116,139,0.10)" };
                  return (
                    <div
                      key={o.mypos_order_id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                        padding: "8px 12px",
                        backgroundColor: "rgba(15,19,26,0.02)",
                        borderRadius: "8px",
                        fontSize: "12px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span style={{ color: "rgba(15,19,26,0.55)" }}>{formatDate(o.created_at)}</span>
                      <strong style={{ color: "#0f131a" }}>{Number(o.amount).toFixed(2)} {o.currency}</strong>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          color: s.color,
                          backgroundColor: s.bg,
                          padding: "2px 8px",
                          borderRadius: "999px",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        {s.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </details>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function StatCard({ label, value, small = false }: { label: string; value: string; small?: boolean }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid rgba(15,19,26,0.07)",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      <p
        style={{
          fontSize: "11px",
          fontWeight: 700,
          color: "rgba(15,19,26,0.5)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: small ? "14px" : "26px",
          fontWeight: small ? 600 : 900,
          color: "#0f131a",
          letterSpacing: "-0.01em",
          wordBreak: small ? "break-all" : "normal",
        }}
      >
        {value}
      </p>
    </div>
  );
}

