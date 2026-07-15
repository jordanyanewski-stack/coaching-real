import { describe, expect, it } from "vitest";
import { PRODUCTS } from "@/lib/products";
import { isEarlyPriceAt, REGULAR_PRICE_START } from "./campaign";

describe("излез от застой pricing cutoff", () => {
  it("keeps the €37 price through the end of 24 July in Sofia", () => {
    expect(isEarlyPriceAt(REGULAR_PRICE_START - 1)).toBe(true);
  });

  it("switches to €97 at midnight on 25 July in Sofia", () => {
    expect(isEarlyPriceAt(REGULAR_PRICE_START)).toBe(false);
    expect(PRODUCTS["izlez-ot-zastoy-regular"].price).toBe("97.00");
    expect(PRODUCTS["izlez-ot-zastoy-regular"].supportsBankTransfer).toBe(false);
  });
});
