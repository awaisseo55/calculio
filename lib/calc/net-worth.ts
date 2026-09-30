export interface NetWorthInput {
  cashSavings: number;
  investments: number;
  pensionValue: number;
  propertyValue: number;
  otherAssets: number;
  mortgageBalance: number;
  otherDebts: number;
}

export interface NetWorthResult {
  totalAssets: number;
  totalDebts: number;
  netWorth: number;
  homeEquity: number;
  liquidNetWorth: number;
  debtToAssetPercent: number;
}

export function calculateNetWorth(input: NetWorthInput): NetWorthResult {
  const cashSavings = Math.max(input.cashSavings, 0);
  const investments = Math.max(input.investments, 0);
  const pensionValue = Math.max(input.pensionValue, 0);
  const propertyValue = Math.max(input.propertyValue, 0);
  const otherAssets = Math.max(input.otherAssets, 0);
  const mortgageBalance = Math.max(input.mortgageBalance, 0);
  const otherDebts = Math.max(input.otherDebts, 0);

  const totalAssets = cashSavings + investments + pensionValue + propertyValue + otherAssets;
  const totalDebts = mortgageBalance + otherDebts;
  const netWorth = totalAssets - totalDebts;
  const homeEquity = Math.max(propertyValue - mortgageBalance, 0);
  const liquidNetWorth = cashSavings + investments - otherDebts;

  return {
    totalAssets,
    totalDebts,
    netWorth,
    homeEquity,
    liquidNetWorth,
    debtToAssetPercent: totalAssets > 0 ? (totalDebts / totalAssets) * 100 : 0,
  };
}
