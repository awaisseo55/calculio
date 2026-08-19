import type { ComponentType } from "react";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

import * as stampDuty2026 from "./how-much-stamp-duty-uk-2026";
import * as incomeTax2026 from "./uk-income-tax-2026-27";
import * as mortgageDeposit2026 from "./mortgage-deposit-uk-2026";
import * as carTax2026 from "./uk-car-tax-2026-ved-guide";
import * as bmiGuide from "./healthy-bmi-adults-uk";
import * as selfEmployedTaxGuide from "./self-employed-tax-guide-uk-2026";
import * as compoundInterestExplained from "./compound-interest-explained-uk";
import * as londonDrivingCharges from "./london-driving-charges-2026";
import * as statePensionGuide from "./uk-state-pension-guide-2026";
import * as firstHomeCost from "./first-home-cost-uk-2026";
import * as freelancerHourlyRate from "./freelancer-hourly-rate-uk-2026";
import * as councilTaxGuide from "./uk-council-tax-guide-2026";
import * as reduceEnergyBills from "./reduce-uk-energy-bills-2026";
import * as electricVsPetrol from "./electric-vs-petrol-cost-comparison-uk-2026";
import * as redundancyGuide from "./uk-redundancy-guide-2026";
import * as sickPayGuide from "./uk-sick-pay-guide-2026";
import * as winterFuelGuide from "./winter-fuel-payment-guide-2026";
import * as childBenefitGuide from "./uk-child-benefit-guide-2026";
import * as maternityPayGuide from "./uk-maternity-pay-guide-2026";
import * as studentLoanRepaymentGuide from "./uk-student-loan-repayment-guide-2026";
import * as mortgageAffordabilityGuide from "./how-much-mortgage-can-i-afford-uk-2026";
import * as salaryVsDividends from "./salary-vs-dividends-uk-2026";
import * as tdeeVsBmr from "./tdee-vs-bmr-calories-explained";

interface BlogPostContent {
  ArticleContent: ComponentType;
  faq: FaqItem[];
  toc: TocItem[];
}

export const blogContent: Record<string, BlogPostContent> = {
  "how-much-stamp-duty-uk-2026": stampDuty2026,
  "uk-income-tax-2026-27": incomeTax2026,
  "mortgage-deposit-uk-2026": mortgageDeposit2026,
  "uk-car-tax-2026-ved-guide": carTax2026,
  "healthy-bmi-adults-uk": bmiGuide,
  "self-employed-tax-guide-uk-2026": selfEmployedTaxGuide,
  "compound-interest-explained-uk": compoundInterestExplained,
  "london-driving-charges-2026": londonDrivingCharges,
  "uk-state-pension-guide-2026": statePensionGuide,
  "first-home-cost-uk-2026": firstHomeCost,
  "freelancer-hourly-rate-uk-2026": freelancerHourlyRate,
  "uk-council-tax-guide-2026": councilTaxGuide,
  "reduce-uk-energy-bills-2026": reduceEnergyBills,
  "electric-vs-petrol-cost-comparison-uk-2026": electricVsPetrol,
  "uk-redundancy-guide-2026": redundancyGuide,
  "uk-sick-pay-guide-2026": sickPayGuide,
  "winter-fuel-payment-guide-2026": winterFuelGuide,
  "uk-child-benefit-guide-2026": childBenefitGuide,
  "uk-maternity-pay-guide-2026": maternityPayGuide,
  "uk-student-loan-repayment-guide-2026": studentLoanRepaymentGuide,
  "how-much-mortgage-can-i-afford-uk-2026": mortgageAffordabilityGuide,
  "salary-vs-dividends-uk-2026": salaryVsDividends,
  "tdee-vs-bmr-calories-explained": tdeeVsBmr,
};
