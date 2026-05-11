import { Resend } from 'resend';

const ADMIN_RECIPIENT = 'info@coachingreallive.com';
const DEFAULT_FROM = 'Coaching Real <onboarding@resend.dev>';

function getClient(): Resend | null {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return null;
  return new Resend(key);
}

export type PaidOrderEmailInput = {
  orderId: string;
  name: string;
  email: string;
  amount: string | number;
  currency: string;
  transactionId?: string | null;
};

function formatAmount(amount: string | number, currency: string): string {
  const n = typeof amount === 'number' ? amount : parseFloat(amount);
  if (Number.isNaN(n)) return `${amount} ${currency}`;
  const symbol = currency === 'EUR' ? '€' : currency;
  return `${symbol}${n.toFixed(2)}`;
}

export async function sendPaidOrderNotification(order: PaidOrderEmailInput): Promise<void> {
  const resend = getClient();
  if (!resend) {
    console.error('[email] RESEND_API_KEY not set — skipping admin notification', {
      orderId: order.orderId,
    });
    return;
  }

  const from = process.env.RESEND_FROM?.trim() || DEFAULT_FROM;
  const to = process.env.ADMIN_EMAIL?.trim() || ADMIN_RECIPIENT;
  const amountDisplay = formatAmount(order.amount, order.currency);

  const subject = `Ново плащане · ${order.name} · ${amountDisplay}`;

  const rows: Array<[string, string]> = [
    ['Име', order.name],
    ['Имейл', order.email],
    ['Сума', amountDisplay],
    ['Order ID', order.orderId],
  ];
  if (order.transactionId) rows.push(['myPOS transaction', order.transactionId]);

  const text = [
    `Ново успешно плащане за 12 дни Мастъркласове.`,
    ``,
    ...rows.map(([k, v]) => `${k}: ${v}`),
    ``,
    `Клиентката е автоматично преместена в MailerLite "paid" групата.`,
  ].join('\n');

  const html = `
<!DOCTYPE html>
<html lang="bg">
<body style="margin:0;padding:32px 16px;background:#faf8f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1a1a1a;">
  <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:14px;border:1px solid rgba(107,21,14,0.10);box-shadow:0 4px 24px rgba(107,21,14,0.06);overflow:hidden;">
    <div style="padding:20px 28px;background:linear-gradient(135deg,#70150E 0%,#c94535 100%);color:#ffffff;">
      <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;opacity:0.85;">Coaching Real · 12 дни Мастъркласове</div>
      <div style="font-size:20px;font-weight:800;margin-top:6px;">Ново успешно плащане</div>
    </div>
    <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
      <tbody>
        ${rows
          .map(
            ([k, v], i) => `
        <tr>
          <td style="padding:14px 28px;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:rgba(0,0,0,0.5);width:140px;${i === 0 ? '' : 'border-top:1px solid rgba(0,0,0,0.06);'}">${k}</td>
          <td style="padding:14px 28px;font-size:15px;font-weight:600;color:#1a1a1a;${i === 0 ? '' : 'border-top:1px solid rgba(0,0,0,0.06);'}">${v}</td>
        </tr>`,
          )
          .join('')}
      </tbody>
    </table>
    <div style="padding:16px 28px;background:#faf8f5;border-top:1px solid rgba(0,0,0,0.06);font-size:13px;color:rgba(0,0,0,0.6);line-height:1.6;">
      Клиентката е автоматично преместена в MailerLite <strong>paid</strong> групата.
    </div>
  </div>
</body>
</html>`.trim();

  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    text,
    html,
  });

  if (error) {
    throw new Error(`Resend send failed: ${error.message ?? JSON.stringify(error)}`);
  }
}
