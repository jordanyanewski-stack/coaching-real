import { afterEach, describe, expect, it } from 'vitest';
import { EXPERT_CAMPAIGN, EXPERT_CALENDAR, EXPERT_DAYS } from './campaign';
import { getPaidGroupId, getPendingGroupId, PRODUCTS } from '@/lib/products';

const originalPending = process.env.MAILERLITE_EXPERT_ONLINE_BUSINESS_PENDING_GROUP_ID;
const original = process.env.MAILERLITE_EXPERT_ONLINE_BUSINESS_PAID_GROUP_ID;
afterEach(() => {
  if (originalPending === undefined) delete process.env.MAILERLITE_EXPERT_ONLINE_BUSINESS_PENDING_GROUP_ID;
  else process.env.MAILERLITE_EXPERT_ONLINE_BUSINESS_PENDING_GROUP_ID = originalPending;
  if (original === undefined) delete process.env.MAILERLITE_EXPERT_ONLINE_BUSINESS_PAID_GROUP_ID;
  else process.env.MAILERLITE_EXPERT_ONLINE_BUSINESS_PAID_GROUP_ID = original;
});

describe('September expert intensive enrollment contract', () => {
  it('charges the supplied EUR price without reusing past campaign groups or granting audiobook access', () => {
    const product = PRODUCTS[EXPERT_CAMPAIGN.slug];
    expect(Number(product.price)).toBe(47);
    expect(product.currency).toBe('EUR');
    expect(product.requiresAccount).toBeUndefined();
    expect(product.bunnyFile).toBeUndefined();
    process.env.MAILERLITE_EXPERT_ONLINE_BUSINESS_PENDING_GROUP_ID = '198486376640939484';
    expect(getPendingGroupId(EXPERT_CAMPAIGN.slug)).toBe('198486376640939484');
    expect(product.mlPendingGroupIdEnv).not.toBe(PRODUCTS.masterclass.mlPendingGroupIdEnv);
    process.env.MAILERLITE_EXPERT_ONLINE_BUSINESS_PAID_GROUP_ID = EXPERT_CAMPAIGN.paidGroupId + '\\n';
    expect(getPaidGroupId(EXPERT_CAMPAIGN.slug)).toBe(EXPERT_CAMPAIGN.paidGroupId);
    expect(product.mlPaidGroupIdEnv).not.toBe(PRODUCTS.masterclass.mlPaidGroupIdEnv);
  });
  it('creates five two-hour sessions starting 23 September at 17:00 in Sofia', () => {
    const params = new URL(EXPERT_CALENDAR).searchParams;
    expect(params.get('dates')).toBe('20260923T140000Z/20260923T160000Z');
    expect(params.get('recur')).toBe('RRULE:FREQ=DAILY;COUNT=5');
    expect(params.get('ctz')).toBe('Europe/Sofia');
    expect(params.get('location')).toBe(EXPERT_CAMPAIGN.facebook);
    expect(EXPERT_DAYS).toHaveLength(5);
  });
});
