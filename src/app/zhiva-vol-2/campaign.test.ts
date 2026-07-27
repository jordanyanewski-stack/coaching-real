import { describe, expect, it } from "vitest";
import { PRODUCTS } from "@/lib/products";

describe("ЖИВА 2: Съживи се! campaign configuration", () => {
  it("uses the exact event price and a card-only checkout", () => {
    const product = PRODUCTS["zhiva-vol-2"];

    expect(product.price).toBe("37");
    expect(product.currency).toBe("EUR");
    expect(product.supportsBankTransfer).toBe(false);
  });

  it("routes paid buyers to the dedicated MailerLite group", () => {
    const product = PRODUCTS["zhiva-vol-2"];

    expect(product.mlPaidGroupIdEnv).toBe(
      "MAILERLITE_ZHIVA_VOL2_PAID_GROUP_ID",
    );
    expect(product.mlPendingGroupIdEnv).toBeUndefined();
  });
});
