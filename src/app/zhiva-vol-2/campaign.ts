export const REGULAR_PRICE_START = Date.parse("2026-08-22T00:00:00+03:00");

export const EARLY_PRICE = {
  amount: "37",
  display: "37 €",
  product: "zhiva-vol-2" as const,
};

export const REGULAR_PRICE = {
  amount: "97",
  display: "97 €",
  product: "zhiva-vol-2-regular" as const,
};

export function isEarlyPriceAt(timestamp: number) {
  return timestamp < REGULAR_PRICE_START;
}
