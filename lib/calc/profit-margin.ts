export type ProfitMarginMode = "from-prices" | "target-margin";

export interface ProfitMarginInput {
  mode: ProfitMarginMode;
  costPrice: number;
  sellingPrice: number;
  targetMarginPercent: number;
}

export interface ProfitMarginResult {
  costPrice: number;
  sellingPrice: number;
  profit: number;
  marginPercent: number;
  markupPercent: number;
}

export function calculateProfitMargin(input: ProfitMarginInput): ProfitMarginResult {
  const costPrice = Math.max(input.costPrice, 0);

  let sellingPrice: number;
  if (input.mode === "from-prices") {
    sellingPrice = Math.max(input.sellingPrice, 0);
  } else {
    const margin = Math.min(Math.max(input.targetMarginPercent, 0), 99.99) / 100;
    sellingPrice = margin < 1 ? costPrice / (1 - margin) : costPrice;
  }

  const profit = sellingPrice - costPrice;
  const marginPercent = sellingPrice > 0 ? (profit / sellingPrice) * 100 : 0;
  const markupPercent = costPrice > 0 ? (profit / costPrice) * 100 : 0;

  return { costPrice, sellingPrice, profit, marginPercent, markupPercent };
}
