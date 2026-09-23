export const profile = {
  name: "Lucas Cummings",
  handle: "lucasCummings",
  role: "Full Stack Engineer",
  subRole: "Fintech & Web",
  location: "Calgary, AB",
  email: "lucas.cummings024@gmail.com",
  phone: "(368) 399-1591",
  availability: "Open to roles in Calgary or fully remote across Canada",
  tagline: "A modern website built by a web developer.",
  summary:
    "My work runs the full stack: architecture, APIs, cloud, security, and release, all of it on a regulated Canadian fintech platform. Day to day that means TypeScript, Node.js, React, and PostgreSQL on Google Cloud, with real CI/CD and automated testing. I also ship production Gen AI with the OpenAI API and develop with Claude Code daily.",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/lucas-cq", handle: "@lucas-cq" },
  { label: "LinkedIn", href: "https://linkedin.com/in/lucas-cummings", handle: "in/lucas-cummings" },
  { label: "Email", href: "mailto:lucas.cummings024@gmail.com", handle: "lucas.cummings024@gmail.com" },
];

export const navLinks = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "journey", href: "#journey" },
];

export type SkillGroup = {
  key: string;
  label: string;
  items: string[];
};

// Mirrors the four groups on the resume.
export const skills: SkillGroup[] = [
  {
    key: "languages",
    label: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "SQL", "Dart"],
  },
  {
    key: "frameworks-cloud",
    label: "Frameworks & Cloud",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Flutter",
      "Google Cloud Platform",
      "Firebase",
      "REST APIs",
    ],
  },
  {
    key: "data-delivery",
    label: "Data & Delivery",
    items: [
      "PostgreSQL",
      "schema design",
      "query optimization",
      "Git / GitHub",
      "CI/CD",
      "Jest",
    ],
  },
  {
    key: "fintech-ai",
    label: "Fintech & AI",
    items: [
      "KYC/AML (Sumsub)",
      "2FA / MFA",
      "end-to-end encryption",
      "OpenAI API (production)",
      "Claude Code",
    ],
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
    year: "2024–2026",
    featured: true,
    description:
      "A regulated Canadian international remittance platform, shipped to iOS, Android, and web from a single Flutter codebase. I owned the full lifecycle, from solution design and estimation through deployment, production monitoring, and iteration.",
    highlights: [
      "Built the transaction reconciliation engine for Interac e-Transfer where no direct API existed at our scale: idempotent matching, duplicate detection, retry handling, and partial-match resolution against live money movement.",
      "Architected the PostgreSQL data layer on a serverless Google Cloud and Firebase backend (Cloud Functions, Auth, FCM), supporting real-time transaction state and auditable records for compliance review.",
      "Built a full KYC/AML onboarding pipeline via Sumsub, plus 2FA and end-to-end encryption, to meet Canadian financial regulatory requirements.",
      "Shipped to iOS, Android, and web from a single codebase, including release management, store submissions, and post-release troubleshooting.",
    ],
    stack: ["Flutter", "Node.js", "TypeScript", "PostgreSQL", "Firebase", "GCP", "Sumsub"],
  },
  {
    name: "AI Lead Classifier",
    category: "Gen AI · Automation",
    year: "2023",
    description:
      "A production Gen AI integration: a Node.js service on the OpenAI API that classifies and filters inbound HubSpot leads, removing 100% of manual lead review for the sales team.",
    highlights: [
      "OpenAI-driven classification wired into the HubSpot lead pipeline",
      "Removed 100% of manual lead triage for the sales team",
    ],
    stack: ["Node.js", "OpenAI API", "Webhooks"],
  },
  {
    name: "Client Onboarding Pipelines",
    category: "Process Automation",
    year: "2023",
    description:
      "Cross-team automations for client onboarding and offboarding, coordinating handoffs across sales, accounts, design, and development to reduce friction and rework.",
    highlights: [
      "Automated multi-team notification sync",
      "Removed manual handoff friction between departments",
    ],
    stack: ["Node.js", "Automation", "Webhooks"],
  },
  {
    name: "Client Web Applications",
    category: "Web · Agency",
    year: "2022–2024",
    description:
      "Web applications for SMB and enterprise clients built in Next.js with third-party API integrations, scoped directly with stakeholders.",
    highlights: [
      "Requirements scoped directly with stakeholders",
      "Business needs translated into shippable technical solutions",
    ],
    stack: ["Next.js", "JavaScript", "REST APIs"],
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
    role: "Full Stack Engineer",
    org: "Universe Money Transfer",
    location: "Calgary, AB",
    period: "Feb 2024 – May 2026",
    tag: "Fintech",
    points: [
      "Built the transaction reconciliation engine for Interac e-Transfer where no direct API existed at our scale: idempotent matching, duplicate detection, retry handling, and partial-match resolution against live money movement.",
      "Owned a regulated Canadian remittance platform across the full lifecycle, from solution design and estimation through deployment, production monitoring, and iteration.",
      "Architected the PostgreSQL data layer on a serverless Google Cloud and Firebase backend (Cloud Functions, Auth, FCM), supporting real-time transaction state and auditable records for compliance review.",
      "Built a full KYC/AML onboarding pipeline via Sumsub, plus 2FA and end-to-end encryption, to meet Canadian financial regulatory requirements.",
      "Shipped to iOS, Android, and web from a single codebase, including release management, store submissions, and post-release troubleshooting.",
    ],
  },
  {
    role: "Full Stack Engineer",
    org: "GrowME Marketing",
    location: "Calgary, AB",
    period: "Jan 2022 – Feb 2024",
    tag: "Full-time",
    points: [
      "Shipped a production Gen AI integration: a Node.js service on the OpenAI API that classifies and filters inbound HubSpot leads, removing 100% of manual lead review for the sales team.",
      "Delivered web applications for SMB and enterprise clients in Next.js with third-party API integrations, scoping requirements directly with stakeholders.",
      "Designed cross-team automations for client onboarding and offboarding across sales, accounts, design, and development.",
      "Administered client infrastructure: Google Workspace, Cloudflare and DNS configuration (SPF/DMARC), backups, and Linux server hosting.",
    ],
  },
  {
    role: "Web Developer Certificate, with Honours",
    org: "SAIT (Southern Alberta Institute of Technology)",
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
  { value: "100%", label: "Lifecycle ownership" },
];
