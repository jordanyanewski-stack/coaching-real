import { afterEach, describe, expect, it } from 'vitest';
import { getBankTransferGroupId, PRODUCTS, type ProductSlug } from '@/lib/products';

const originalEnv = { ...process.env };

afterEach(() => {
  process.env = { ...originalEnv };
});

describe('bank-transfer MailerLite routing', () => {
  it('gives every bank-transfer product a dedicated group configuration', () => {
    const bankProducts = Object.values(PRODUCTS).filter(
      (product) => product.supportsBankTransfer,
    );

    expect(bankProducts.length).toBeGreaterThan(0);

    for (const product of bankProducts) {
      expect(product.mlBankTransferGroupIdEnv, product.slug).toBeTruthy();
      expect(product.mlBankTransferGroupId, product.slug).toMatch(/^\d+$/);
      expect(product.mlBankTransferGroupIdEnv, product.slug).not.toBe(
        product.mlPendingGroupIdEnv,
      );
    }
  });

  it('never falls back to the regular card-pending group', () => {
    process.env.MAILERLITE_PENDING_GROUP_ID = 'card-pending-group';

    const cardOnlySlug = 'izlez-ot-zastoy' satisfies ProductSlug;
    expect(getBankTransferGroupId(cardOnlySlug)).toBe('');
  });

  it('lets a dedicated environment value override the recorded fallback id', () => {
    process.env.MAILERLITE_MASTERCLASS_BANK_GROUP_ID = 'dedicated-env-group';

    expect(getBankTransferGroupId('masterclass')).toBe('dedicated-env-group');
  });
});
