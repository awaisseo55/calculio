export interface HeartRateZoneInput {
  age: number;
  restingHeartRate?: number;
}

export interface HeartRateZone {
  name: string;
  description: string;
  percentLow: number;
  percentHigh: number;
  bpmLow: number;
  bpmHigh: number;
}

export interface HeartRateZoneResult {
  maxHeartRate: number;
  usingKarvonen: boolean;
  zones: HeartRateZone[];
}

const ZONE_DEFINITIONS = [
  { name: "Zone 1: Very light", description: "Warm-up and active recovery", low: 0.5, high: 0.6 },
  { name: "Zone 2: Light", description: "Easy aerobic, fat-burning pace", low: 0.6, high: 0.7 },
  { name: "Zone 3: Moderate", description: "Steady aerobic fitness building", low: 0.7, high: 0.8 },
  { name: "Zone 4: Hard", description: "Anaerobic threshold, harder efforts", low: 0.8, high: 0.9 },
  { name: "Zone 5: Maximum", description: "Peak, short-burst effort", low: 0.9, high: 1.0 },
];

// Max heart rate uses the widely taught 220 minus age estimate. Where a
// resting heart rate is supplied, zones use the Karvonen (heart rate
// reserve) method, generally considered a closer estimate than plain
// percentages of max heart rate alone.
export function calculateHeartRateZones(input: HeartRateZoneInput): HeartRateZoneResult {
  const age = Math.min(100, Math.max(1, Math.round(input.age)));
  const maxHeartRate = 220 - age;
  const resting =
    input.restingHeartRate && input.restingHeartRate > 0
      ? Math.min(maxHeartRate - 10, Math.max(30, Math.round(input.restingHeartRate)))
      : undefined;
  const usingKarvonen = resting !== undefined;
  const reserve = usingKarvonen ? maxHeartRate - (resting as number) : 0;

  const zones: HeartRateZone[] = ZONE_DEFINITIONS.map((zone) => {
    const bpmLow = usingKarvonen
      ? Math.round(reserve * zone.low + (resting as number))
      : Math.round(maxHeartRate * zone.low);
    const bpmHigh = usingKarvonen
      ? Math.round(reserve * zone.high + (resting as number))
      : Math.round(maxHeartRate * zone.high);

    return {
      name: zone.name,
      description: zone.description,
      percentLow: zone.low * 100,
      percentHigh: zone.high * 100,
      bpmLow,
      bpmHigh,
    };
  });

  return { maxHeartRate, usingKarvonen, zones };
}
