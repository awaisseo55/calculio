export type SplitBillMode = "even" | "unequal";

export interface SplitBillPersonBreakdown {
  label: string;
  subtotal: number;
  tip: number;
  total: number;
}

export interface SplitBillInput {
  mode: SplitBillMode;
  totalBill: number;
  tipPercent: number;
  numberOfPeople: number;
  personAmounts: number[];
}

export interface SplitBillResult {
  billSubtotal: number;
  tipAmount: number;
  grandTotal: number;
  breakdown: SplitBillPersonBreakdown[];
}

export function calculateSplitBill(input: SplitBillInput): SplitBillResult {
  const { mode, totalBill, tipPercent, numberOfPeople, personAmounts } = input;

  if (mode === "unequal") {
    const billSubtotal = personAmounts.reduce((sum, amount) => sum + Math.max(amount, 0), 0);
    const tipAmount = billSubtotal * (tipPercent / 100);
    const grandTotal = billSubtotal + tipAmount;

    const breakdown = personAmounts.map((amount, i) => {
      const subtotal = Math.max(amount, 0);
      const tip = billSubtotal > 0 ? (subtotal / billSubtotal) * tipAmount : 0;
      return {
        label: `Person ${i + 1}`,
        subtotal,
        tip,
        total: subtotal + tip,
      };
    });

    return { billSubtotal, tipAmount, grandTotal, breakdown };
  }

  const billSubtotal = Math.max(totalBill, 0);
  const tipAmount = billSubtotal * (tipPercent / 100);
  const grandTotal = billSubtotal + tipAmount;
  const people = Math.max(numberOfPeople, 1);
  const perPersonSubtotal = billSubtotal / people;
  const perPersonTip = tipAmount / people;

  const breakdown = Array.from({ length: people }, (_, i) => ({
    label: `Person ${i + 1}`,
    subtotal: perPersonSubtotal,
    tip: perPersonTip,
    total: perPersonSubtotal + perPersonTip,
  }));

  return { billSubtotal, tipAmount, grandTotal, breakdown };
}
