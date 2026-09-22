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
    "My work runs the full stack: architecture, APIs, cloud infrastructure, security, and release, all of it on a regulated Canadian fintech platform. Day to day that means TypeScript, React, Next.js, Node.js, and PostgreSQL on Google Cloud, with real CI/CD, automated testing, and agile delivery. I also ship production Gen AI on the OpenAI API and develop with Claude Code daily, and I'm comfortable turning technical trade-offs into plain language for non-technical stakeholders.",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/lucas-cq", handle: "@lucas-cq" },
  { label: "LinkedIn", href: "https://linkedin.com/in/lucas-cummings", handle: "in/lucas-cummings" },
  { label: "Email", href: "mailto:lucas.cummings024@gmail.com", handle: "lucas.cummings024@gmail.com" },
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
    items: ["TypeScript", "JavaScript (ES6+)", "SQL", "Dart", "HTML5", "CSS3"],
  },
  {
    key: "frameworks-frontend",
    label: "Frameworks & Frontend",
    items: ["React", "Next.js", "Node.js", "Flutter"],
  },
  {
    key: "cloud-integration",
    label: "Cloud & Integration",
    items: [
      "Google Cloud Platform",
      "Firebase (Cloud Functions, Auth, FCM)",
      "serverless",
      "REST APIs",
      "webhooks",
      "third-party integrations",
    ],
  },
  {
    key: "data",
    label: "Data",
    items: ["PostgreSQL", "relational schema design", "query optimization", "migrations"],
  },
  {
    key: "gen-ai",
    label: "Gen AI",
    items: ["OpenAI API (production)", "prompt engineering", "AI-accelerated delivery", "Claude Code"],
  },
  {
    key: "delivery",
    label: "Delivery",
    items: [
      "Git / GitHub",
      "CI/CD",
      "Jest",
      "code review",
      "Agile / Scrum",
      "technical documentation",
      "App Store / Play Store",
    ],
  },
  {
    key: "security-compliance",
    label: "Security & Compliance",
    items: [
      "KYC/AML (Sumsub)",
      "2FA / MFA",
      "end-to-end encryption",
      "auditable data design",
      "PIPEDA",
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
      "A regulated Canadian international remittance platform, shipped to iOS, Android, and web from a single Flutter codebase. I owned the full lifecycle, from solution design and estimation through implementation, deployment, production monitoring, and iteration.",
    highlights: [
      "Designed and built the transaction reconciliation engine for Interac e-Transfer where no direct API was available at our scale: automated parsing, idempotent matching, duplicate detection, retry handling, and partial-match resolution against live money movement.",
      "Architected the data layer in PostgreSQL alongside a serverless Google Cloud and Firebase backend (Cloud Functions, Auth, FCM), supporting real-time transaction state, notifications, and auditable records for compliance review.",
      "Built and integrated APIs across payment rails and identity, including a full KYC/AML onboarding pipeline via Sumsub, 2FA, and end-to-end encryption to meet Canadian financial regulatory requirements.",
      "Shipped to iOS, Android, and web from one codebase, owning release management, store submissions, and post-release troubleshooting across the application, data, and infrastructure layers.",
    ],
    stack: ["Flutter", "Node.js", "TypeScript", "PostgreSQL", "Firebase", "GCP", "Sumsub"],
  },
  {
    name: "AI Lead Classifier",
    category: "Gen AI · Automation",
    year: "2023",
    description:
      "A production Gen AI integration: a Node.js service on the OpenAI API that classifies and filters inbound HubSpot leads, removing the majority of manual lead review for the sales team.",
    highlights: [
      "OpenAI-driven classification wired into the HubSpot lead pipeline",
      "Removed the majority of manual triage for the sales team",
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
    year: "2022–2026",
    description:
      "Web applications and third-party API integrations for SMB and enterprise clients, built with Next.js and scoped directly with stakeholders to turn business needs into working software.",
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
    role: "Full Stack Engineer, Universe Money Transfer",
    org: "Fintech venture within GrowME",
    location: "Calgary, AB",
    period: "Feb 2024 – May 2026",
    tag: "Fintech",
    points: [
      "Owned a regulated Canadian remittance platform across the full lifecycle, from solution design and estimation through implementation, deployment, production monitoring, and iteration.",
      "Designed and built the transaction reconciliation engine for Interac e-Transfer where no direct API was available at our scale: automated parsing, idempotent matching, duplicate detection, retry handling, and partial-match resolution against live money movement.",
      "Architected the PostgreSQL data layer alongside a serverless Google Cloud and Firebase backend (Cloud Functions, Auth, FCM), supporting real-time transaction state, notifications, and auditable records for compliance review.",
      "Built and integrated APIs across payment rails and identity, including a full KYC/AML onboarding pipeline via Sumsub, 2FA, and end-to-end encryption to meet Canadian financial regulatory requirements.",
      "Shipped to iOS, Android, and web from a single codebase, owning release management, store submissions, and post-release troubleshooting.",
    ],
  },
  {
    role: "Full Stack Engineer",
    org: "GrowME Marketing",
    location: "Calgary, AB",
    period: "Jan 2022 – May 2026",
    tag: "Full-time",
    points: [
      "Delivered web applications for SMB and enterprise clients using Next.js and third-party API integrations, scoping requirements directly with stakeholders and translating business needs into technical solutions.",
      "Built and shipped a production Gen AI integration: a Node.js service on the OpenAI API that classifies and filters inbound HubSpot leads, removing the majority of manual lead review for the sales team.",
      "Designed cross-team automations for client onboarding and offboarding, coordinating handoffs across sales, accounts, design, and development.",
      "Worked within agile delivery cycles across concurrent client engagements, balancing competing priorities and communicating technical trade-offs to non-technical audiences.",
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
