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
};
