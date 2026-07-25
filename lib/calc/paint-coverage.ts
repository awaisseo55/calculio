export type TinSize = 1 | 2.5 | 5 | 10;

export interface PaintCoverageInput {
  lengthM: number;
  widthM: number;
  heightM: number;
  coats: number;
  doors: number;
  windows: number;
  coverageRatePerLitre: number;
  tinSize: TinSize;
}

export interface PaintCoverageResult {
  grossWallArea: number;
  doorsArea: number;
  windowsArea: number;
  netWallArea: number;
  paintableAreaWithCoats: number;
  litresNeeded: number;
  tinsNeeded: number;
}

const DOOR_AREA_M2 = 1.6;
const WINDOW_AREA_M2 = 1.5;

export function calculatePaintCoverage(input: PaintCoverageInput): PaintCoverageResult {
  const grossWallArea = 2 * (input.lengthM + input.widthM) * input.heightM;
  const doorsArea = input.doors * DOOR_AREA_M2;
  const windowsArea = input.windows * WINDOW_AREA_M2;
  const netWallArea = Math.max(grossWallArea - doorsArea - windowsArea, 0);
  const paintableAreaWithCoats = netWallArea * input.coats;
  const litresNeeded =
    input.coverageRatePerLitre > 0 ? paintableAreaWithCoats / input.coverageRatePerLitre : 0;
  const tinsNeeded = input.tinSize > 0 ? Math.ceil(litresNeeded / input.tinSize) : 0;

  return {
    grossWallArea,
    doorsArea,
    windowsArea,
    netWallArea,
    paintableAreaWithCoats,
    litresNeeded,
    tinsNeeded,
  };
}
