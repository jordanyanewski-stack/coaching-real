import { describe, expect, it } from 'vitest';
import {
  matchesPaymentAttempt,
  paymentAttemptAge,
  paymentAttemptMethod,
  shortOrderCode,
  type SearchablePaymentAttempt,
} from './payment-attempts';

const bankAttempt: SearchablePaymentAttempt = {
  name: 'Мария Тотева',
  email: 'maria@example.com',
  product: 'biznes-dusha-early',
  amount: '37.00',
  currency: 'EUR',
  status: 'awaiting_bank_transfer',
  mypos_order_id: '44db712e-8aad-46c2-89a2-5fd19505ad6f',
};

describe('payment attempt admin helpers', () => {
  it('keeps the payment method tied to the persisted status', () => {
    expect(paymentAttemptMethod('awaiting_bank_transfer')).toBe('bank');
    expect(paymentAttemptMethod('pending')).toBe('card');
  });

  it('creates the same six-character reference shown to bank customers', () => {
    expect(shortOrderCode(bankAttempt.mypos_order_id)).toBe('05AD6F');
  });

  it('marks card attempts stale sooner than bank-transfer intents', () => {
    const now = new Date('2026-07-22T12:00:00.000Z');

    expect(paymentAttemptAge('2026-07-22T09:00:00.000Z', 'pending', now)).toEqual({
      label: 'преди 3 ч.',
      stale: true,
    });
    expect(
      paymentAttemptAge('2026-07-21T09:00:00.000Z', 'awaiting_bank_transfer', now)
    ).toEqual({ label: 'преди 1 ден', stale: false });
    expect(
      paymentAttemptAge('2026-07-19T09:00:00.000Z', 'awaiting_bank_transfer', now)
    ).toEqual({ label: 'преди 3 дни', stale: true });
  });

  it('searches customer, product label, and short reference without case sensitivity', () => {
    expect(matchesPaymentAttempt(bankAttempt, 'МАРИЯ')).toBe(true);
    expect(matchesPaymentAttempt(bankAttempt, 'Бизнес с душа')).toBe(false);
    expect(matchesPaymentAttempt(bankAttempt, 'Бизнес с душа', 'Бизнес с душа, без хаос')).toBe(
      true
    );
    expect(matchesPaymentAttempt(bankAttempt, '05ad6f')).toBe(true);
    expect(matchesPaymentAttempt(bankAttempt, 'няма')).toBe(false);
  });
});
