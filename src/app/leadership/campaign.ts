export const REGULAR_PRICE_START = Date.parse("2026-08-18T00:00:00+03:00");

export const EARLY_PRICE = {
  amount: "36",
  display: "€36",
  product: "magi-leadership-live" as const,
};

export const REGULAR_PRICE = {
  amount: "97",
  display: "€97",
  product: "magi-leadership-live-regular" as const,
};

export function isEarlyPriceAt(timestamp: number) {
  return timestamp < REGULAR_PRICE_START;
}
