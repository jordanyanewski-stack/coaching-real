import { describe, expect, it } from "vitest";
import { PRODUCTS } from "@/lib/products";
import { isEarlyPriceAt, REGULAR_PRICE_START } from "./campaign";

describe("Magi August 2026 leadership campaign configuration", () => {
  it("uses €36 through 17 August and switches to €97 at midnight in Sofia", () => {
    const early = PRODUCTS["magi-leadership-live"];
    const regular = PRODUCTS["magi-leadership-live-regular"];

    expect(early.price).toBe("36.00");
    expect(regular.price).toBe("97.00");
    expect(isEarlyPriceAt(REGULAR_PRICE_START - 1)).toBe(true);
    expect(isEarlyPriceAt(REGULAR_PRICE_START)).toBe(false);
    expect(new Date(REGULAR_PRICE_START).toISOString()).toBe("2026-08-17T21:00:00.000Z");
    expect(early.currency).toBe("EUR");
    expect(regular.currency).toBe("EUR");
    expect(early.supportsBankTransfer).toBe(true);
    expect(regular.supportsBankTransfer).toBe(true);
  });

  it("routes confirmed buyers to a dedicated MailerLite group", () => {
    const early = PRODUCTS["magi-leadership-live"];
    const regular = PRODUCTS["magi-leadership-live-regular"];

    expect(early.mlPaidGroupIdEnv).toBe(
      "MAILERLITE_MAGI_LEADERSHIP_PAID_GROUP_ID",
    );
    expect(regular.mlPaidGroupIdEnv).toBe(early.mlPaidGroupIdEnv);
    expect(early.mlPendingGroupIdEnv).toBeUndefined();
    expect(regular.mlPendingGroupIdEnv).toBeUndefined();
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
