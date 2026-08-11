export interface CatAgeInput {
  catAgeYears: number;
}

export interface CatAgeResult {
  catAgeYears: number;
  humanAgeYears: number;
  lifeStage: string;
}

// Based on the standard cat ageing chart published by vets and cat welfare
// charities: 1 year old is roughly 15 human years, 2 years old is roughly
// 24 human years, then each additional cat year adds roughly 4 human years.
export function calculateCatAge(input: CatAgeInput): CatAgeResult {
  const catAgeYears = Math.max(input.catAgeYears, 0);

  let humanAgeYears: number;
  if (catAgeYears < 1) {
    humanAgeYears = 15 * catAgeYears;
  } else if (catAgeYears <= 2) {
    humanAgeYears = 15 + (catAgeYears - 1) * 9;
  } else {
    humanAgeYears = 24 + (catAgeYears - 2) * 4;
  }

  let lifeStage: string;
  if (catAgeYears < 1) lifeStage = "Kitten";
  else if (catAgeYears < 3) lifeStage = "Junior";
  else if (catAgeYears < 7) lifeStage = "Prime adult";
  else if (catAgeYears < 11) lifeStage = "Mature";
  else if (catAgeYears < 15) lifeStage = "Senior";
  else lifeStage = "Geriatric";

  return { catAgeYears, humanAgeYears, lifeStage };
}
