import { describe, expect, it } from "vitest";
import { PRODUCTS } from "@/lib/products";
import { isEarlyPriceAt, REGULAR_PRICE_START } from "./campaign";

describe("ЖИВА 2: Съживи се! campaign configuration", () => {
  it("keeps the €37 early price through the 21 August start date in Sofia", () => {
    const earlyProduct = PRODUCTS["zhiva-vol-2"];

    expect(isEarlyPriceAt(REGULAR_PRICE_START - 1)).toBe(true);
    expect(earlyProduct.price).toBe("37");
    expect(earlyProduct.currency).toBe("EUR");
    expect(earlyProduct.supportsBankTransfer).toBe(false);
  });

  it("switches to the €97 regular price at midnight on 22 August in Sofia", () => {
    const regularProduct = PRODUCTS["zhiva-vol-2-regular"];

    expect(isEarlyPriceAt(REGULAR_PRICE_START)).toBe(false);
    expect(new Date(REGULAR_PRICE_START).toISOString()).toBe(
      "2026-08-21T21:00:00.000Z",
    );
    expect(regularProduct.price).toBe("97");
    expect(regularProduct.supportsBankTransfer).toBe(false);
  });

  it("routes both price points to the dedicated MailerLite group", () => {
    const earlyProduct = PRODUCTS["zhiva-vol-2"];
    const regularProduct = PRODUCTS["zhiva-vol-2-regular"];

    expect(earlyProduct.mlPaidGroupIdEnv).toBe(
      "MAILERLITE_ZHIVA_VOL2_PAID_GROUP_ID",
    );
    expect(regularProduct.mlPaidGroupIdEnv).toBe(
      "MAILERLITE_ZHIVA_VOL2_PAID_GROUP_ID",
    );
    expect(earlyProduct.mlPendingGroupIdEnv).toBeUndefined();
    expect(regularProduct.mlPendingGroupIdEnv).toBeUndefined();
  });
});
