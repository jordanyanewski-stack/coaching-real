export const REGULAR_PRICE_START = Date.parse("2026-07-25T00:00:00+03:00");

export const EARLY_PRICE = {
  amount: "37",
  display: "€37",
  product: "izlez-ot-zastoy" as const,
};

export const REGULAR_PRICE = {
  amount: "97",
  display: "€97",
  product: "izlez-ot-zastoy-regular" as const,
};

export function isEarlyPriceAt(timestamp: number) {
  return timestamp < REGULAR_PRICE_START;
}
