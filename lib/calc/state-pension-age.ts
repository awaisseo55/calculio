import {
  STATE_PENSION_TRANSITION_66_67_START,
  STATE_PENSION_TRANSITION_66_67_END,
  STATE_PENSION_AGE_68_FROM_DOB,
  NEW_STATE_PENSION_WEEKLY,
  NEW_STATE_PENSION_ANNUAL,
} from "./uk-rates";

export interface StatePensionAgeInput {
  dateOfBirth: string;
}

export interface StatePensionAgeResult {
  valid: boolean;
  isTransitionWindow: boolean;
  statePensionAge: number | null;
  statePensionAgeLabel: string;
  statePensionDate: Date | null;
  hasReached: boolean;
  yearsUntil: number | null;
  underReview: boolean;
  newStatePensionWeekly: number;
  newStatePensionAnnual: number;
}

function addYears(date: Date, years: number): Date {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}

export function calculateStatePensionAge(input: StatePensionAgeInput): StatePensionAgeResult {
  const dob = new Date(input.dateOfBirth);

  if (!input.dateOfBirth || Number.isNaN(dob.getTime())) {
    return {
      valid: false,
      isTransitionWindow: false,
      statePensionAge: null,
      statePensionAgeLabel: "",
      statePensionDate: null,
      hasReached: false,
      yearsUntil: null,
      underReview: false,
      newStatePensionWeekly: NEW_STATE_PENSION_WEEKLY,
      newStatePensionAnnual: NEW_STATE_PENSION_ANNUAL,
    };
  }

  const transitionStart = new Date(STATE_PENSION_TRANSITION_66_67_START);
  const transitionEnd = new Date(STATE_PENSION_TRANSITION_66_67_END);
  const age68From = new Date(STATE_PENSION_AGE_68_FROM_DOB);
  const today = new Date();

  let statePensionAge: number | null = null;
  let isTransitionWindow = false;
  let underReview = false;

  if (dob < transitionStart) {
    statePensionAge = 66;
  } else if (dob >= transitionStart && dob <= transitionEnd) {
    isTransitionWindow = true;
  } else if (dob > transitionEnd && dob < age68From) {
    statePensionAge = 67;
  } else {
    statePensionAge = 68;
    underReview = true;
  }

  const statePensionDate = statePensionAge !== null ? addYears(dob, statePensionAge) : null;
  const hasReached = statePensionDate !== null ? statePensionDate <= today : false;
  const yearsUntil =
    statePensionDate && !hasReached
      ? (statePensionDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
      : hasReached
        ? 0
        : null;

  const statePensionAgeLabel = isTransitionWindow
    ? "Between 66 and 67 (transition window)"
    : statePensionAge !== null
      ? `${statePensionAge}`
      : "";

  return {
    valid: true,
    isTransitionWindow,
    statePensionAge,
    statePensionAgeLabel,
    statePensionDate,
    hasReached,
    yearsUntil,
    underReview,
    newStatePensionWeekly: NEW_STATE_PENSION_WEEKLY,
    newStatePensionAnnual: NEW_STATE_PENSION_ANNUAL,
  };
}
