export interface AuthorMeta {
  slug: string;
  name: string;
  role: string;
  initials: string;
  bio: string;
  background: string;
  expertise: string[];
}

export const authors: Record<string, AuthorMeta> = {
  "james-whitfield": {
    slug: "james-whitfield",
    name: "James Whitfield",
    role: "Content Editor at Calculio",
    initials: "JW",
    bio: "James writes and edits Calculio's calculator guides, turning HMRC, DVLA and NHS rules into clear, practical explainers. He has spent several years writing about UK personal finance and everyday consumer topics, with a particular focus on making tax and property rules easier to follow.",
    background:
      "James got into personal finance writing the way a lot of people do: by getting frustrated trying to work out his own tax return and mortgage paperwork, and deciding there had to be a clearer way to explain it. That turned into a career writing about UK money matters, mostly tax, property and everyday consumer questions, for readers who want a straight answer without wading through a government PDF first. He edits every guide on Calculio before it goes live, checking that the numbers match the source and that the explanation would actually make sense to someone reading it on their phone in a hurry.",
    expertise: ["UK personal finance", "Property and tax content", "Consumer guides"],
  },
  "emily-thorne": {
    slug: "emily-thorne",
    name: "Emily Thorne",
    role: "Personal Finance and Property Specialist",
    initials: "ET",
    bio: "Emily reviews Calculio's finance and tax content for accuracy and clarity. She has a background in mortgage and property finance, and focuses on making sure our guides reflect current HMRC and lender practice.",
    background:
      "Emily's background is in mortgage and property finance, which means she has spent a lot of time in the detail that most calculators skip over: how lenders actually assess affordability, why stamp duty bands catch people out, and where official guidance leaves room for genuine confusion. At Calculio she reviews every finance and tax guide before publication, checking the figures against current HMRC and lender practice and flagging anything that's gone stale since the last Budget. She's particularly picky about worked examples, since a calculator is only as trustworthy as the maths behind its sample case.",
    expertise: ["Mortgages and property", "UK tax", "First-time buyers"],
  },
  "daniel-ashcroft": {
    slug: "daniel-ashcroft",
    name: "Daniel Ashcroft",
    role: "Motoring and Vehicle Tax Specialist",
    initials: "DA",
    bio: "Daniel reviews Calculio's motoring content, with a focus on vehicle tax, running costs and DVLA rules. He has followed UK motoring policy, including the shift to electric vehicle taxation, closely over recent years.",
    background:
      "Daniel has followed UK motoring policy closely for years, particularly the slow, sometimes confusing shift from petrol and diesel VED bands to electric vehicle taxation. He reviews Calculio's motoring guides and calculators, cross-checking DVLA rules, running cost assumptions and tax bands against the current rules rather than whatever was true when a page was first written. His main gripe with most motoring content online is that it gets rewritten once and then never revisited, so he treats keeping figures current as the actual job, not an afterthought.",
    expertise: ["Vehicle Excise Duty", "DVLA rules", "Electric vehicles"],
  },
  "sophie-whitmore": {
    slug: "sophie-whitmore",
    name: "Sophie Whitmore",
    role: "Health Content Specialist",
    initials: "SW",
    bio: "Sophie reviews Calculio's health content to keep it aligned with NHS guidance. She focuses on making sure our calculators and guides present health information supportively and accurately, without straying into medical advice.",
    background:
      "Sophie reviews Calculio's health-related calculators and guides, making sure they stay aligned with NHS guidance and are written in a tone that's supportive rather than alarming. She's especially careful about the line between general information and anything that could read as a diagnosis or a personal recommendation, since a calculator result is never a substitute for speaking to a GP or other healthcare professional. Her focus is on getting the framing right as much as the numbers: presenting a BMI category or a due date estimate as a starting point for a conversation, not a verdict.",
    expertise: ["NHS-aligned guidance", "Health content accuracy", "Public health communication"],
  },
};

export function getAuthor(slug: string): AuthorMeta | undefined {
  return authors[slug];
}

export function getAllAuthors(): AuthorMeta[] {
  return Object.values(authors);
}
