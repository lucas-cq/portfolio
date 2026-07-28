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
    "Full stack engineer with 4+ years of production experience. Sole developer on Universe Money Transfer, a regulated Canadian remittance platform shipped to iOS, Android, and web. I build across Node.js, TypeScript, React, and PostgreSQL — with hands-on work in KYC/AML compliance, live payment integrations, and production LLM integration. AI-native workflow (Claude Code daily).",
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
    items: ["TypeScript", "JavaScript (ES6+)", "SQL", "Dart", "HTML5", "CSS3"],
  },
  {
    key: "frontend-mobile",
    label: "Frontend & Mobile",
    items: ["React", "Next.js", "Flutter"],
  },
  {
    key: "backend-data",
    label: "Backend & Data",
    items: [
      "Node.js",
      "PostgreSQL",
      "Firebase (Cloud Functions, Auth, FCM)",
      "Google Cloud Platform",
      "REST APIs",
      "Webhooks",
    ],
  },
  {
    key: "ai-llm",
    label: "AI & LLM",
    items: ["OpenAI API (production)", "prompt engineering", "Claude Code"],
  },
  {
    key: "testing-delivery",
    label: "Testing & Delivery",
    items: ["Jest", "Git / GitHub", "CI/CD", "App Store / Play Store", "Agile / Scrum"],
  },
  {
    key: "payments-compliance",
    label: "Payments & Compliance",
    items: [
      "Interac e-Transfer",
      "payment gateway integration",
      "Sumsub KYC/AML",
      "2FA / MFA",
      "end-to-end encryption",
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
    year: "2024 — 2026",
    featured: true,
    description:
      "A regulated Canadian international remittance platform shipped to iOS, Android, and web from a single Flutter codebase. I owned the full SDLC as the sole developer — architecture through App Store deployment, monitoring, and iteration.",
    highlights: [
      "Real-time reconciliation engine for Interac e-Transfer (no direct API available) — automated parsing, idempotent matching, duplicate detection, retries, and partial-match resolution for live money movement in production",
      "Data layer on PostgreSQL alongside a serverless Firebase + GCP backend powering real-time transaction state and push notifications",
      "Full KYC/AML onboarding pipeline via Sumsub to meet Canadian financial compliance",
      "2FA and end-to-end encryption across the auth surface",
    ],
    stack: ["Flutter", "Node.js", "TypeScript", "PostgreSQL", "Firebase", "GCP", "Sumsub"],
  },
  {
    name: "AI Lead Classifier",
    category: "Automation · AI",
    year: "2023",
    description:
      "A production LLM integration: Node.js service using the OpenAI API to classify and filter spam from inbound HubSpot leads, eliminating the majority of manual review for the sales team.",
    highlights: [
      "OpenAI-driven classification wired into the HubSpot lead pipeline",
      "Eliminated the majority of manual triage for the sales team",
    ],
    stack: ["Node.js", "OpenAI API", "Webhooks"],
  },
  {
    name: "Client Onboarding Pipelines",
    category: "Process Automation",
    year: "2023",
    description:
      "Cross-team automations for client onboarding and offboarding, syncing notifications across sales, account, design, and dev teams to remove handoff friction.",
    highlights: [
      "Automated multi-team notification sync",
      "Removed manual handoff friction between departments",
    ],
    stack: ["Node.js", "Automation", "Webhooks"],
  },
  {
    name: "Client Web Applications",
    category: "Web · Agency",
    year: "2022 — 2026",
    description:
      "Web applications and integrations delivered for SMB and enterprise clients using Next.js, JavaScript, and third-party APIs.",
    highlights: [
      "Custom applications and integrations for SMB and enterprise clients",
      "Performance- and SEO-minded builds",
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
    role: "Full Stack Engineer — Universe Money Transfer",
    org: "Engagement within GrowME Marketing",
    location: "Calgary, AB",
    period: "Feb 2024 — May 2026",
    tag: "Fintech",
    points: [
      "Engineered a regulated Canadian international remittance platform, shipped to iOS, Android, and web from a single Flutter codebase.",
      "Built a real-time transaction reconciliation engine for Interac e-Transfer: idempotent matching, duplicate detection, retries, and partial-match resolution for live money movement in production.",
      "Designed the data layer on PostgreSQL alongside a serverless Firebase / GCP backend (Cloud Functions, Auth, FCM).",
      "Implemented a full KYC/AML onboarding pipeline via Sumsub, plus 2FA and end-to-end encryption, to meet Canadian financial compliance requirements.",
      "Owned the full SDLC: architecture, development, QA, store deployment, monitoring, and iteration.",
    ],
  },
  {
    role: "Full Stack Engineer",
    org: "GrowME Marketing",
    location: "Calgary, AB",
    period: "Jan 2022 — May 2026",
    tag: "Full-time",
    points: [
      "Built and shipped a production LLM integration: a Node.js service using the OpenAI API to classify and filter spam from inbound HubSpot leads.",
      "Selected by executive leadership to lead the technical build of the CEO's fintech venture (Universe Money Transfer).",
      "Designed cross-team automations for client onboarding and offboarding across sales, account, design, and dev teams.",
      "Delivered web applications for SMB and enterprise clients using Next.js and third-party API integrations.",
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
