export type KitchenSize = "small" | "medium" | "large";
export type KitchenQuality = "budget" | "mid-range" | "premium";

export const KITCHEN_SIZE_LABELS: Record<KitchenSize, string> = {
  small: "Small (under 8m²)",
  medium: "Medium (8 to 15m²)",
  large: "Large (over 15m²)",
};

export const KITCHEN_QUALITY_LABELS: Record<KitchenQuality, string> = {
  budget: "Budget (flat-pack units, laminate worktops, entry-level appliances)",
  "mid-range": "Mid-range (rigid units, quartz or solid worktops, mid-tier appliances)",
  premium: "Premium (bespoke units, stone worktops, high-end appliances)",
};

export type KitchenWorkItem =
  | "newUnits"
  | "worktops"
  | "appliances"
  | "flooring"
  | "tiling"
  | "electrical"
  | "plumbing"
  | "plastering"
  | "painting"
  | "removal";

export const KITCHEN_WORK_ITEM_LABELS: Record<KitchenWorkItem, string> = {
  newUnits: "New units and cabinetry",
  worktops: "Worktops",
  appliances: "Appliances",
  flooring: "Flooring",
  tiling: "Tiling / splashback",
  electrical: "Electrical work",
  plumbing: "Plumbing",
  plastering: "Plastering",
  painting: "Painting and decorating",
  removal: "Removal of old kitchen",
};

// Illustrative total cost ranges (£) for a medium (8 to 15m²) kitchen at each
// quality tier, covering every work item below. Based on broad, approximate
// UK 2026 patterns, not any specific retailer's guaranteed price.
const QUALITY_TOTAL_RANGE_GBP: Record<KitchenQuality, [number, number]> = {
  budget: [3000, 5000],
  "mid-range": [8000, 15000],
  premium: [20000, 35000],
};

const SIZE_MULTIPLIER: Record<KitchenSize, number> = {
  small: 0.75,
  medium: 1,
  large: 1.5,
};

// Rough proportion of the total kitchen budget each item typically represents.
// These sum to 1 across a full renovation with every item included.
const ITEM_PROPORTION: Record<KitchenWorkItem, number> = {
  newUnits: 0.32,
  worktops: 0.1,
  appliances: 0.18,
  flooring: 0.08,
  tiling: 0.06,
  electrical: 0.07,
  plumbing: 0.06,
  plastering: 0.05,
  painting: 0.03,
  removal: 0.05,
};

export interface KitchenRenovationInput {
  size: KitchenSize;
  quality: KitchenQuality;
  workItems: KitchenWorkItem[];
}

export interface KitchenItemCost {
  item: KitchenWorkItem;
  low: number;
  high: number;
}

export interface KitchenRenovationResult {
  totalLow: number;
  totalHigh: number;
  breakdown: KitchenItemCost[];
}

export function calculateKitchenRenovationCost(
  input: KitchenRenovationInput
): KitchenRenovationResult {
  const [baseLow, baseHigh] = QUALITY_TOTAL_RANGE_GBP[input.quality];
  const sizeMultiplier = SIZE_MULTIPLIER[input.size];
  const scaledLow = baseLow * sizeMultiplier;
  const scaledHigh = baseHigh * sizeMultiplier;

  const breakdown: KitchenItemCost[] = input.workItems.map((item) => {
    const proportion = ITEM_PROPORTION[item];
    return {
      item,
      low: scaledLow * proportion,
      high: scaledHigh * proportion,
    };
  });

  const totalLow = breakdown.reduce((sum, row) => sum + row.low, 0);
  const totalHigh = breakdown.reduce((sum, row) => sum + row.high, 0);

  return { totalLow, totalHigh, breakdown };
}
