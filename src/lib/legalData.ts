export interface LegalLink {
  label: string;
  href: string;
}

export interface LegalSection {
  category: string;
  links: LegalLink[];
}

export const legalData: LegalSection[] = [
  {
    category: "COMMUNITY",
    links: [
      { label: "Community Guidelines", href: "#" },
      { label: "Copyright Rules for Community", href: "#" },
    ],
  },
  {
    category: "COURSES",
    links: [
      { label: "User Guidelines", href: "#" },
      { label: "Payments and Refunds", href: "#" },
    ],
  },
  {
    category: "WEBSITE TERMS OF USE",
    links: [{ label: "Terms of Use", href: "#" }],
  },
  {
    category: "WEBSITE PRIVACY POLICY",
    links: [
      { label: "General Privacy Policy", href: "#" },
      { label: "GDPR", href: "#" },
      { label: "Data Processing Agreement", href: "#" },
      { label: "CCPA", href: "#" },
      { label: "Copyright and DMCA", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
  {
    category: "THIRD-PARTY COPYRIGHT NOTICES",
    links: [{ label: "Third-Party Copyright Notices", href: "#" }],
  },
  {
    category: "JOBS",
    links: [
      { label: "Recruiter EULA", href: "#" },
      { label: "Candidate T&C", href: "#" },
    ],
  },
  {
    category: "MISCELLANEOUS POLICIES",
    links: [
      { label: "Anti-Money Laundering (AML)", href: "#" },
      {
        label: "Anti-Terrorism Financing and Proceeds of Unlawful Activities",
        href: "#",
      },
      { label: "Anti-Trust", href: "#" },
      { label: "Modern Slavery", href: "#" },
    ],
  },
  {
    category: "CONNECT PLATFORM POLICIES",
    links: [
      { label: "User Policy", href: "#" },
      { label: "Mentor Policy", href: "#" },
    ],
  },
];
