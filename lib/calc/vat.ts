export type VatMode = "add" | "extract";

export interface VatInput {
  amount: number;
  ratePercent: number;
  mode: VatMode;
}

export interface VatResult {
  net: number;
  vat: number;
  gross: number;
}

export function calculateVat(input: VatInput): VatResult {
  const rate = input.ratePercent / 100;

  if (input.mode === "add") {
    const net = input.amount;
    const vat = net * rate;
    return { net, vat, gross: net + vat };
  }

  const gross = input.amount;
  const net = gross / (1 + rate);
  const vat = gross - net;
  return { net, vat, gross };
}
