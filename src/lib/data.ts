export const profile = {
  name: "Lucas Cummings",
  handle: "lucasCummings",
  role: "Full Stack Engineer",
  subRole: "Mobile & Web",
  location: "Calgary, AB",
  email: "lucas.cummings024@gmail.com",
  phone: "(368) 399-1591",
  availability: "Open to roles in Calgary or fully remote across Canada",
  tagline: "A modern website built by a web developer.",
  summary:
    "Full stack developer with 4+ years of production experience. Lead developer on Universe Money Transfer, a regulated Canadian remittance platform shipped to iOS, Android, and web. I build across Node.js, TypeScript, Firebase, and Google Cloud Platform — with hands-on work in KYC/AML compliance and live payment integrations.",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/lucas-cq", handle: "@lucas-cq" },
  { label: "Email", href: "mailto:lucas.cummings024@gmail.com", handle: "lucas.cummings024@gmail.com" },
  { label: "Site", href: "https://lucascummings.ca", handle: "lucascummings.ca" },
];

export const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "journey", href: "#journey" },
];

export type SkillGroup = {
  key: string;
  label: string;
  items: string[];
};

// Styled as a CSS rule block in the Skills section — a nod to the original "CSS" nav pun.
export const skills: SkillGroup[] = [
  {
    key: "languages",
    label: "Languages",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3", "SQL", "PHP"],
  },
  {
    key: "frameworks",
    label: "Frameworks & Tools",
    items: ["Next.js", "React", "Node.js", "Flutter", "WordPress", "Figma"],
  },
  {
    key: "cloud-backend",
    label: "Cloud & Backend",
    items: [
      "Firebase",
      "Firestore",
      "Cloud Functions",
      "Google Cloud Platform",
      "REST APIs",
      "Webhooks",
    ],
  },
  {
    key: "security-compliance",
    label: "Security & Compliance",
    items: [
      "2FA / MFA",
      "End-to-end encryption",
      "Sumsub KYC/AML",
      "Secure auth flows",
      "PIPEDA",
    ],
  },
  {
    key: "payments",
    label: "Integrations & Payments",
    items: ["Interac e-Transfer", "Authorize.net", "Sumsub", "HubSpot", "GoHighLevel"],
  },
  {
    key: "devops",
    label: "DevOps & Collaboration",
    items: ["Git / GitHub", "CI/CD", "App Store / Play Store", "Agile / Scrum"],
  },
];

export type Project = {
  name: string;
  category: string;
  year: string;
  description: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Universe Money Transfer",
    category: "Fintech · Remittance Platform",
    year: "2024 — 2026",
    featured: true,
    description:
      "A regulated Canadian international remittance platform shipped to iOS, Android, and web from a single Flutter codebase. I owned the full SDLC as lead developer — architecture through App Store deployment.",
    highlights: [
      "Serverless backend on Firebase + GCP powering real-time transactions and push notifications",
      "Full KYC/AML onboarding pipeline via Sumsub to meet Canadian financial compliance",
      "2FA and end-to-end encryption across the auth surface",
      "Custom email-parsing reconciliation engine for Interac e-Transfer — duplicates, retries, partial matches in production",
    ],
    stack: ["Flutter", "Firebase", "GCP", "Cloud Functions", "Sumsub", "Authorize.net"],
  },
  {
    name: "Lead Spam Filter",
    category: "Automation · AI",
    year: "2023",
    description:
      "A Node.js automation that uses GPT to filter spam from inbound HubSpot leads, cutting manual review work for the sales team to near zero.",
    highlights: [
      "GPT-driven classification wired into the HubSpot lead pipeline",
      "Reduced manual triage for the sales team significantly",
    ],
    stack: ["Node.js", "OpenAI", "HubSpot", "Webhooks"],
  },
  {
    name: "Client Onboarding Pipelines",
    category: "Process Automation",
    year: "2023",
    description:
      "GoHighLevel pipelines that automated client onboarding and offboarding, syncing notifications across sales, account, design, and dev teams to remove handoff friction.",
    highlights: [
      "Automated multi-team notification sync",
      "Removed manual handoff friction between departments",
    ],
    stack: ["GoHighLevel", "Automation", "Webhooks"],
  },
  {
    name: "Client Web Builds",
    category: "Web · Agency",
    year: "2022 — 2026",
    description:
      "A diverse portfolio of SMB and enterprise web projects delivered with WordPress, custom HTML/CSS/JS, and third-party integrations.",
    highlights: [
      "Custom themes and integrations for SMB and enterprise clients",
      "Performance- and SEO-minded builds",
    ],
    stack: ["WordPress", "JavaScript", "PHP", "CSS3"],
  },
];

export type TimelineEntry = {
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
  tag: string;
};

export const journey: TimelineEntry[] = [
  {
    role: "Lead Developer — Universe Money Transfer",
    org: "Engagement within GrowME Marketing",
    location: "Calgary, AB",
    period: "Feb 2024 — May 2026",
    tag: "Lead",
    points: [
      "Architected and shipped a Canadian international remittance platform live on iOS, Android, and web from a single Flutter codebase.",
      "Designed the serverless backend on Firebase and GCP supporting real-time transactions and notifications.",
      "Implemented 2FA, end-to-end encryption, and a full KYC/AML onboarding pipeline via Sumsub.",
      "Integrated live payment rails including Interac e-Transfer and Authorize.net.",
      "Owned the full SDLC: architecture, development, QA, store deployment, monitoring, and iteration.",
    ],
  },
  {
    role: "Full Stack Developer",
    org: "GrowME Marketing",
    location: "Calgary, AB",
    period: "Jan 2022 — May 2026",
    tag: "Full-time",
    points: [
      "Built a Node.js + GPT automation to filter spam from inbound HubSpot leads, reducing manual review for sales.",
      "Designed GoHighLevel pipelines automating client onboarding and offboarding across teams.",
      "Delivered web projects for SMB and enterprise clients using WordPress and custom HTML/CSS/JS.",
      "Selected by executive leadership to lead the technical build of the CEO's fintech venture.",
    ],
  },
  {
    role: "Web Developer Certificate — with Honours",
    org: "SAIT — Southern Alberta Institute of Technology",
    location: "Calgary, AB",
    period: "2022",
    tag: "Education",
    points: [
      "Graduated the SAIT Web Developer program with Honours.",
    ],
  },
];

export const stats = [
  { value: "4+", label: "Years in production" },
  { value: "3", label: "Platforms shipped" },
  { value: "100%", label: "SDLC ownership" },
];
