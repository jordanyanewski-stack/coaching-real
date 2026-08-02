import { describe, expect, it } from "vitest";
import { PRODUCTS } from "@/lib/products";

describe("Magi August 2026 leadership campaign configuration", () => {
  it("uses the supplied €36 offer and keeps both payment methods", () => {
    const product = PRODUCTS["magi-leadership-live"];

    expect(product.price).toBe("36.00");
    expect(product.currency).toBe("EUR");
    expect(product.supportsBankTransfer).toBe(true);
  });

  it("routes confirmed buyers to a dedicated MailerLite group", () => {
    const product = PRODUCTS["magi-leadership-live"];

    expect(product.mlPaidGroupIdEnv).toBe(
      "MAILERLITE_MAGI_LEADERSHIP_PAID_GROUP_ID",
    );
    expect(product.mlPendingGroupIdEnv).toBeUndefined();
  });

  it("keeps the evergreen Career Compass product separate", () => {
    const liveCampaign = PRODUCTS["magi-leadership-live"];
    const evergreenCourse = PRODUCTS["career-course"];

    expect(liveCampaign.mlPaidGroupIdEnv).not.toBe(
      evergreenCourse.mlPaidGroupIdEnv,
    );
    expect(evergreenCourse.price).toBe("97.00");
  });
});
