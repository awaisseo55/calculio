export type DiscountMode = "percent" | "amount";

export interface DiscountInput {
  originalPrice: number;
  mode: DiscountMode;
  discountPercent: number;
  discountAmount: number;
}

export interface DiscountResult {
  originalPrice: number;
  amountSaved: number;
  finalPrice: number;
  effectiveDiscountPercent: number;
}

export function calculateDiscount(input: DiscountInput): DiscountResult {
  const amountSaved =
    input.mode === "percent"
      ? input.originalPrice * (input.discountPercent / 100)
      : Math.min(input.discountAmount, input.originalPrice);

  const finalPrice = Math.max(input.originalPrice - amountSaved, 0);
  const effectiveDiscountPercent =
    input.originalPrice > 0 ? (amountSaved / input.originalPrice) * 100 : 0;

  return {
    originalPrice: input.originalPrice,
    amountSaved,
    finalPrice,
    effectiveDiscountPercent,
  };
}
