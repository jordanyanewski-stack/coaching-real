export type ReviewablePaymentStatus = 'awaiting_bank_transfer' | 'pending';

export type PaymentAttemptMethod = 'bank' | 'card';

export type SearchablePaymentAttempt = {
  name: string;
  email: string;
  product: string;
  amount: string;
  currency: string;
  status: ReviewablePaymentStatus;
  mypos_order_id: string;
};

export function paymentAttemptMethod(status: ReviewablePaymentStatus): PaymentAttemptMethod {
  return status === 'awaiting_bank_transfer' ? 'bank' : 'card';
}

export function shortOrderCode(orderId: string): string {
  return orderId.replace(/-/g, '').slice(-6).toUpperCase();
}

export function paymentAttemptAge(
  createdAt: string,
  status: ReviewablePaymentStatus,
  now = new Date()
): { label: string; stale: boolean } {
  const created = new Date(createdAt);
  const elapsedMs = Math.max(0, now.getTime() - created.getTime());
  const minutes = Math.floor(elapsedMs / 60_000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const label =
    minutes < 60
      ? minutes <= 1
        ? 'току-що'
        : `преди ${minutes} мин.`
      : hours < 24
        ? `преди ${hours} ч.`
        : `преди ${days} ${days === 1 ? 'ден' : 'дни'}`;

  // Card attempts normally resolve quickly. Bank transfers need more time, but
  // after two days they deserve an explicit bank-statement check.
  const stale = status === 'pending' ? hours >= 2 : hours >= 48;

  return { label, stale };
}

export function matchesPaymentAttempt(
  row: SearchablePaymentAttempt,
  query: string,
  productLabel = ''
): boolean {
  const normalizedQuery = query.trim().toLocaleLowerCase('bg-BG');
  if (!normalizedQuery) return true;

  const haystack = [
    row.name,
    row.email,
    row.product,
    productLabel,
    row.amount,
    row.currency,
    row.mypos_order_id,
    shortOrderCode(row.mypos_order_id),
  ]
    .join(' ')
    .toLocaleLowerCase('bg-BG');

  return haystack.includes(normalizedQuery);
}
