export interface TipInput {
  billAmount: number;
  tipPercent: number;
  splitBetween: number;
}

export interface TipResult {
  tipAmount: number;
  totalBill: number;
  perPersonTotal: number;
  perPersonTip: number;
}

export function calculateTip(input: TipInput): TipResult {
  const tipAmount = input.billAmount * (input.tipPercent / 100);
  const totalBill = input.billAmount + tipAmount;
  const people = Math.max(input.splitBetween, 1);

  return {
    tipAmount,
    totalBill,
    perPersonTotal: totalBill / people,
    perPersonTip: tipAmount / people,
  };
}
