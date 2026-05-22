import { auth, currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getDb } from "@/lib/db";
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
  const e = email?.toLowerCase() ?? "";
  const rows = await sql`
    SELECT
      mypos_order_id,
      name,
      email,
      amount::text AS amount,
      currency,
      status,
      created_at
    FROM orders
    WHERE user_id = ${userId} OR (${e} <> '' AND lower(email) = ${e})
    ORDER BY created_at DESC
  ` as Order[];
  return rows;
}

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();
  const primaryEmail = user?.emailAddresses.find(e => e.id === user.primaryEmailAddressId)?.emailAddress ?? null;
  const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(" ") || primaryEmail || "Профил";

  const orders = await loadOrdersForUser(userId, primaryEmail);
  const paidOrders = orders.filter(o => o.status === "paid");

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
                Здравей, {fullName.split(" ")[0]}
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

          {/* My purchases */}
          <section
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(15,19,26,0.07)",
              borderRadius: "14px",
              padding: "28px",
            }}
          >
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#0f131a",
                  letterSpacing: "-0.01em",
                }}
              >
                Моите покупки
              </h2>
              <span style={{ fontSize: "12px", color: "rgba(15,19,26,0.5)" }}>
                {orders.length === 0 ? "Все още нямаш поръчки" : `${orders.length} поръчк${orders.length === 1 ? "а" : "и"}`}
              </span>
            </div>

            {orders.length === 0 ? (
              <EmptyPurchases email={primaryEmail} />
            ) : (
              <div className="overflow-x-auto">
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(15,19,26,0.08)" }}>
                      <Th>Дата</Th>
                      <Th>Поръчка</Th>
                      <Th>Сума</Th>
                      <Th>Статус</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(o => {
                      const s = STATUS_LABEL[o.status] ?? { text: o.status, color: "#475569", bg: "rgba(100,116,139,0.10)" };
                      return (
                        <tr key={o.mypos_order_id} style={{ borderBottom: "1px solid rgba(15,19,26,0.04)" }}>
                          <Td muted>{formatDate(o.created_at)}</Td>
                          <Td><code style={{ fontSize: "12px", color: "rgba(15,19,26,0.7)" }}>{o.mypos_order_id}</code></Td>
                          <Td>
                            <strong>{Number(o.amount).toFixed(2)} {o.currency}</strong>
                          </Td>
                          <Td>
                            <span
                              style={{
                                fontSize: "11px",
                                fontWeight: 700,
                                color: s.color,
                                backgroundColor: s.bg,
                                padding: "4px 10px",
                                borderRadius: "999px",
                                letterSpacing: "0.04em",
                                textTransform: "uppercase",
                              }}
                            >
                              {s.text}
                            </span>
                          </Td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          {/* Future-content placeholder */}
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
            </div>
          </section>
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

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "12px 14px",
        fontSize: "11px",
        fontWeight: 700,
        color: "rgba(15,19,26,0.5)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </th>
  );
}

function Td({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <td
      style={{
        padding: "14px",
        color: muted ? "rgba(15,19,26,0.6)" : "#0f131a",
        verticalAlign: "middle",
      }}
    >
      {children}
    </td>
  );
}

function EmptyPurchases({ email }: { email: string | null }) {
  return (
    <div
      className="text-center py-12"
      style={{ color: "rgba(15,19,26,0.6)" }}
    >
      <p style={{ fontSize: "15px", marginBottom: "8px" }}>
        Все още нямаш поръчки в този профил.
      </p>
      <p style={{ fontSize: "13px", color: "rgba(15,19,26,0.45)" }}>
        Ако вече си купил/а аудиокнига или програма, увери се, че влизаш с имейла <strong>{email}</strong>, който си използвал/а при покупка.
      </p>
      <a
        href="/programs"
        className="mv-btn mv-btn-primary inline-flex mt-6"
        style={{ fontSize: "14px", padding: "12px 28px" }}
      >
        Разгледай програмите
      </a>
    </div>
  );
}
