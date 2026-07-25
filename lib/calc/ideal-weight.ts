export type Gender = "male" | "female";
export type BodyFrame = "small" | "medium" | "large";

export interface IdealWeightInput {
  gender: Gender;
  heightCm: number;
  bodyFrame: BodyFrame;
}

export interface IdealWeightResult {
  devineKg: number;
  robinsonKg: number;
  nhsBmiRangeMinKg: number;
  nhsBmiRangeMaxKg: number;
}

const CM_PER_INCH = 2.54;
const CM_AT_5FT = 152.4;

const FRAME_ADJUSTMENT: Record<BodyFrame, number> = {
  small: 0.9,
  medium: 1,
  large: 1.1,
};

export function calculateIdealWeight(input: IdealWeightInput): IdealWeightResult {
  const inchesOver5Ft = Math.max((input.heightCm - CM_AT_5FT) / CM_PER_INCH, 0);
  const adjustment = FRAME_ADJUSTMENT[input.bodyFrame];

  const devineBase =
    input.gender === "male" ? 50 + 2.3 * inchesOver5Ft : 45.5 + 2.3 * inchesOver5Ft;
  const robinsonBase =
    input.gender === "male" ? 52 + 1.9 * inchesOver5Ft : 49 + 1.7 * inchesOver5Ft;

  const heightM = input.heightCm / 100;

  return {
    devineKg: devineBase * adjustment,
    robinsonKg: robinsonBase * adjustment,
    nhsBmiRangeMinKg: 18.5 * heightM * heightM,
    nhsBmiRangeMaxKg: 24.9 * heightM * heightM,
  };
}
