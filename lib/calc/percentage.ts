export function percentageOf(percent: number, of: number): number {
  return (percent / 100) * of;
}

export function whatPercent(x: number, of: number): number {
  return of === 0 ? 0 : (x / of) * 100;
}

export function percentageChange(from: number, to: number): number {
  return from === 0 ? 0 : ((to - from) / from) * 100;
}

export function applyPercentage(value: number, percent: number, direction: "increase" | "decrease"): number {
  const factor = direction === "increase" ? 1 + percent / 100 : 1 - percent / 100;
  return value * factor;
}
