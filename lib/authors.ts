export interface AuthorMeta {
  slug: string;
  name: string;
  role: string;
  initials: string;
  bio: string;
  expertise: string[];
}

export const authors: Record<string, AuthorMeta> = {
  "james-whitfield": {
    slug: "james-whitfield",
    name: "James Whitfield",
    role: "Content Editor at Calculio",
    initials: "JW",
    bio: "James writes and edits Calculio's calculator guides, turning HMRC, DVLA and NHS rules into clear, practical explainers. He has spent several years writing about UK personal finance and everyday consumer topics, with a particular focus on making tax and property rules easier to follow.",
    expertise: ["UK personal finance", "Property and tax content", "Consumer guides"],
  },
  "emily-thorne": {
    slug: "emily-thorne",
    name: "Emily Thorne",
    role: "Personal Finance and Property Specialist",
    initials: "ET",
    bio: "Emily reviews Calculio's finance and tax content for accuracy and clarity. She has a background in mortgage and property finance, and focuses on making sure our guides reflect current HMRC and lender practice.",
    expertise: ["Mortgages and property", "UK tax", "First-time buyers"],
  },
  "daniel-ashcroft": {
    slug: "daniel-ashcroft",
    name: "Daniel Ashcroft",
    role: "Motoring and Vehicle Tax Specialist",
    initials: "DA",
    bio: "Daniel reviews Calculio's motoring content, with a focus on vehicle tax, running costs and DVLA rules. He has followed UK motoring policy, including the shift to electric vehicle taxation, closely over recent years.",
    expertise: ["Vehicle Excise Duty", "DVLA rules", "Electric vehicles"],
  },
  "sophie-whitmore": {
    slug: "sophie-whitmore",
    name: "Sophie Whitmore",
    role: "Health Content Specialist",
    initials: "SW",
    bio: "Sophie reviews Calculio's health content to keep it aligned with NHS guidance. She focuses on making sure our calculators and guides present health information supportively and accurately, without straying into medical advice.",
    expertise: ["NHS-aligned guidance", "Health content accuracy", "Public health communication"],
  },
};

export function getAuthor(slug: string): AuthorMeta | undefined {
  return authors[slug];
}
