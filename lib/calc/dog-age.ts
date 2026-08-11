export interface DogAgeInput {
  dogAgeYears: number;
}

export interface DogAgeResult {
  dogAgeYears: number;
  humanAgeYears: number;
  lifeStage: string;
}

// Based on the widely cited 2020 canine epigenetic clock study (Wang et al.),
// which found dogs age very rapidly in their first year, then more slowly:
// human age = 16 x ln(dog age) + 31, for dogs aged 1 year or older. Ages
// under 1 year are linearly interpolated to the same age-1 endpoint (31),
// since the logarithmic formula is undefined for puppies.
export function calculateDogAge(input: DogAgeInput): DogAgeResult {
  const dogAgeYears = Math.max(input.dogAgeYears, 0);

  const humanAgeYears = dogAgeYears < 1 ? 31 * dogAgeYears : 16 * Math.log(dogAgeYears) + 31;

  let lifeStage: string;
  if (dogAgeYears < 1) lifeStage = "Puppy";
  else if (dogAgeYears < 3) lifeStage = "Young adult";
  else if (dogAgeYears < 7) lifeStage = "Adult";
  else if (dogAgeYears < 11) lifeStage = "Senior";
  else lifeStage = "Geriatric";

  return { dogAgeYears, humanAgeYears, lifeStage };
}
