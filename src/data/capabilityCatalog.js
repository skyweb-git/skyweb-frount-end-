/**
 * Canonical SkyWeb capabilities catalog — powers nav-aligned feeds,
 * capability detail offerings, and spotlight products.
 */

export const capabilityPillars = [
  {
    slug: 'application-services',
    href: '/capabilities/application-services',
    title: 'Software Engineering & Application Services',
    shortTitle: 'Software Engineering',
    blurb:
      'Custom software, full-stack systems, APIs, modernization, and quality engineering built for long-term maintainability.',
    services: [
      {
        title: 'Custom Software Development',
        desc: 'Bespoke applications tailored to your workflows, data models, and growth roadmap.',
        implementation:
          'Domain modeling → modular service layers → React/Node or Python APIs → relational schemas → automated tests → staged release.',
        tech: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker'],
      },
      {
        title: 'Full-Stack Web Engineering',
        desc: 'Responsive web apps with secure auth, clean state management, and production-ready frontends.',
        implementation:
          'Component architecture in React/Next.js, typed API contracts, SSR/CSR strategy, CI lint/test gates, CDN-ready builds.',
        tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand/Redux'],
      },
      {
        title: 'API Architecture & Integration',
        desc: 'Reliable REST/GraphQL APIs and third-party integrations with clear contracts and observability.',
        implementation:
          'OpenAPI-first design, gateway auth (JWT/OAuth), webhooks, idempotent consumers, rate limits, structured logging.',
        tech: ['REST', 'GraphQL', 'Express/FastAPI', 'OpenAPI', 'Redis'],
      },
      {
        title: 'Application Modernization',
        desc: 'Incremental upgrades of legacy systems without freezing the business.',
        implementation:
          'Strangler-fig migration, runtime upgrades, schema evolution, dual-write cutovers, regression harnesses.',
        tech: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'GitHub Actions'],
      },
      {
        title: 'QA & Performance Engineering',
        desc: 'Automated quality gates and performance tuning so releases stay stable under load.',
        implementation:
          'Unit/integration/E2E suites in CI, load profiling, query/index tuning, cache layers, budgeted Core Web Vitals.',
        tech: ['Jest', 'Cypress/Playwright', 'k6', 'Redis', 'APM'],
      },
    ],
  },
  {
    slug: 'products-platforms',
    href: '/capabilities/products-platforms',
    title: 'Digital Platforms & Product Engineering',
    shortTitle: 'Digital Platforms',
    blurb:
      'Multi-tenant SaaS, communities, commerce, and mobile products engineered for engagement and scale.',
    services: [
      {
        title: 'SaaS Product Engineering',
        desc: 'Multi-tenant products with billing, roles, onboarding, and admin tooling.',
        implementation:
          'Tenant isolation, RBAC, subscription webhooks, feature flags, usage metering, admin consoles.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      },
      {
        title: 'Digital Community Platforms',
        desc: 'Creator and community products with profiles, feeds, media, and messaging.',
        implementation:
          'Profile graphs, media pipelines, feed ranking/filters, realtime channels, moderation tools.',
        tech: ['React', 'WebSockets', 'S3/CDN', 'PostgreSQL', 'Redis'],
      },
      {
        title: 'Digital Commerce Architectures',
        desc: 'Storefronts and marketplaces with catalogs, checkout, and order ops.',
        implementation:
          'Catalog/search, cart state, payment gateways, inventory sync, order lifecycle APIs.',
        tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Razorpay/Stripe', 'Elasticsearch'],
      },
      {
        title: 'Mobile Applications (iOS/Android)',
        desc: 'Cross-platform mobile apps with offline sync and native device capabilities.',
        implementation:
          'React Native shared codebase, secure storage, push pipelines, OTA updates, store release flows.',
        tech: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'REST APIs'],
      },
    ],
  },
  {
    slug: 'artificial-intelligence',
    href: '/capabilities/artificial-intelligence',
    title: 'AI & Machine Learning',
    shortTitle: 'AI & Machine Learning',
    blurb:
      'Practical AI assistants, automation, vision, and models wired into real business systems.',
    services: [
      {
        title: 'Conversational AI & Assistants',
        desc: 'Domain-aware chat assistants with escalation paths and grounded answers.',
        implementation:
          'RAG over your docs, tool/function calling, guardrails, transcript logging, human handoff.',
        tech: ['OpenAI/Claude APIs', 'LangChain', 'Vector DB', 'Node/Python', 'Webhooks'],
      },
      {
        title: 'Intelligent Workflow Automation',
        desc: 'AI that triggers real ops — triage, tagging, summaries, and routing.',
        implementation:
          'Event queues, prompt pipelines, CRM/ERP connectors, approval gates, audit trails.',
        tech: ['Python', 'FastAPI', 'Redis/SQS', 'REST', 'Zapier-style hooks'],
      },
      {
        title: 'Computer Vision & OCR',
        desc: 'Document and image pipelines that extract structured, validated data.',
        implementation:
          'Preprocess → OCR/CV models → field validation → human review UI → export APIs.',
        tech: ['Tesseract', 'OpenCV', 'Python', 'FastAPI', 'S3'],
      },
      {
        title: 'Machine Learning Models',
        desc: 'Classification, scoring, and prediction models trained on your operational data.',
        implementation:
          'Feature store prep, train/eval loops, model registry, batch or realtime inference APIs.',
        tech: ['Python', 'scikit-learn', 'PyTorch', 'FastAPI', 'PostgreSQL'],
      },
      {
        title: 'Custom AI Experiences',
        desc: 'Brand personas, interactive avatars, and productized AI features.',
        implementation:
          'Persona prompts, latency-tuned streaming UI, multi-language support, analytics on engagement.',
        tech: ['React', 'WebSockets', 'LLM APIs', 'Node.js', 'CDN'],
      },
    ],
  },
  {
    slug: 'experience-services',
    href: '/capabilities/experience-services',
    title: 'UI/UX & Experience Engineering',
    shortTitle: 'UI/UX & Experience',
    blurb:
      'Research-led UX, enterprise UI, design systems, prototypes, and accessibility.',
    services: [
      {
        title: 'User Experience (UX) Strategy',
        desc: 'Journey maps, IA, and friction audits that clarify what to build first.',
        implementation:
          'Stakeholder workshops → task flows → wireframes → prioritized UX backlog.',
        tech: ['Figma', 'FigJam', 'User interviews', 'Heuristic reviews'],
      },
      {
        title: 'Enterprise UI Design',
        desc: 'Clear interfaces for complex dashboards, portals, and operator tools.',
        implementation:
          'Density-aware layouts, hierarchy, empty/error states, responsive breakpoints.',
        tech: ['Figma', 'Design tokens', 'Storybook', 'React'],
      },
      {
        title: 'Design Systems & Guidelines',
        desc: 'Reusable components and tokens so product UI stays consistent at scale.',
        implementation:
          'Token architecture → Figma library → coded React primitives → usage docs.',
        tech: ['Figma', 'Tailwind', 'CVA', 'Storybook'],
      },
      {
        title: 'Interactive Prototyping',
        desc: 'Clickable prototypes that validate flows before engineering spend.',
        implementation:
          'High-fidelity Figma prototypes, stakeholder walkthroughs, revision cycles.',
        tech: ['Figma Prototype', 'User testing scripts'],
      },
      {
        title: 'Usability & Accessibility Audits',
        desc: 'WCAG-minded reviews covering contrast, keyboard, and assistive tech.',
        implementation:
          'Audit checklist → remediation backlog → retest → frontend fixes in React.',
        tech: ['axe', 'Lighthouse', 'Semantic HTML', 'ARIA'],
      },
    ],
  },
  {
    slug: 'cloud-infrastructure',
    href: '/capabilities/cloud-infrastructure',
    title: 'Cloud & Infrastructure Services',
    shortTitle: 'Cloud & Infrastructure',
    blurb:
      'AWS architectures, DevOps pipelines, hardened servers, and reliability engineering.',
    services: [
      {
        title: 'Cloud Consulting & Architecture',
        desc: 'Right-sized cloud blueprints aligned to cost, security, and growth.',
        implementation:
          'Workload assessment → landing zone → network/IAM map → cost & DR plan.',
        tech: ['AWS', 'VPC', 'IAM', 'Terraform/CloudFormation'],
      },
      {
        title: 'AWS Infrastructure & Hosting',
        desc: 'Production hosting on EC2, S3, RDS, and related AWS services.',
        implementation:
          'Provision compute/storage/DB, TLS via NGINX/ALB, backups, env separation.',
        tech: ['EC2', 'S3', 'RDS', 'ALB', 'Route 53'],
      },
      {
        title: 'DevOps & CI/CD Pipelines',
        desc: 'Automated build, test, and deploy paths with safe rollbacks.',
        implementation:
          'GitHub Actions pipelines, artifact builds, blue/green or rolling deploys.',
        tech: ['GitHub Actions', 'Docker', 'NGINX', 'Linux'],
      },
      {
        title: 'Server & Database Optimization',
        desc: 'Tune servers and databases for throughput, latency, and cost.',
        implementation:
          'Index/query plans, connection pools, cache layers, OS/hardening baselines.',
        tech: ['PostgreSQL', 'MySQL', 'Redis', 'Linux', 'NGINX'],
      },
      {
        title: 'Monitoring & Reliability Engineering',
        desc: 'Observability so incidents are visible and recoverable.',
        implementation:
          'Metrics/logs/alerts, uptime checks, runbooks, on-call friendly dashboards.',
        tech: ['CloudWatch', 'Prometheus/Grafana', 'Sentry', 'Uptime monitors'],
      },
    ],
  },
  {
    slug: 'business-technology',
    href: '/capabilities/business-technology',
    title: 'Business Technology Solutions',
    shortTitle: 'Business Technology',
    blurb:
      'CRM, inventory, sales analytics, BI dashboards, and automated reporting.',
    services: [
      {
        title: 'CRM & Customer Portals',
        desc: 'Lead pipelines and self-service portals for customers and partners.',
        implementation:
          'Lead stages, activity timelines, RBAC portals, document downloads, alerts.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Auth JWT', 'Email/SMS'],
      },
      {
        title: 'Inventory & Supply Workflows',
        desc: 'Stock visibility across locations with reorder and audit trails.',
        implementation:
          'SKU models, multi-warehouse levels, low-stock triggers, reconciliation logs.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Exports'],
      },
      {
        title: 'Sales Tracking & Analytics',
        desc: 'Pipeline and revenue tracking for teams and leadership.',
        implementation:
          'Funnel metrics, quota views, period comparisons, CSV/PDF exports.',
        tech: ['React', 'Charts', 'PostgreSQL', 'Node.js'],
      },
      {
        title: 'Operational BI Dashboards',
        desc: 'Live operational dashboards for decisions, not spreadsheet archaeology.',
        implementation:
          'Metric definitions → warehouse/views → interactive charts → role filters.',
        tech: ['React', 'SQL views', 'Recharts', 'PostgreSQL'],
      },
      {
        title: 'Automated Reporting Systems',
        desc: 'Scheduled reports that land in inboxes without manual copy-paste.',
        implementation:
          'Scheduled jobs, templated PDFs/CSVs, email delivery, permissioned archives.',
        tech: ['Cron/Workers', 'Node/Python', 'S3', 'SMTP'],
      },
    ],
  },
];

export const spotlightProducts = [
  {
    slug: 'nano-profiles',
    href: '/capabilities/nano-profiles',
    title: 'Nano Profiles™ (Smart Digital Identity)',
    status: 'Live',
    blurb:
      'Contactless NFC/QR digital identity for campuses, dining, artists, and professionals — no app download required.',
    tech: ['React', 'Node.js', 'NFC/QR', 'AWS', 'PostgreSQL'],
    implementation:
      'Dynamic profile pages, tap telemetry, institutional admin portals, CDN delivery, encrypted identity payloads.',
  },
  {
    slug: 'hashtalks',
    href: '/capabilities/hashtalks',
    title: 'HashTalks',
    status: 'Coming Soon',
    blurb:
      'Topic-driven realtime channels and knowledge feeds for developer and creator squads.',
    tech: ['WebSockets', 'React', 'Node.js', 'Redis', 'Kafka-ready'],
    implementation:
      'Channel fabric, hashtag indexing, snippet sharing, CI bot hooks, E2E encrypted rooms.',
  },
  {
    slug: 'artube',
    href: '/capabilities/artube',
    title: 'ArTube',
    status: 'Coming Soon',
    blurb:
      'High-fidelity creative media platform for artists, animators, and studios.',
    tech: ['React', 'CDN/Edge', 'Transcoding', 'Node.js', 'S3'],
    implementation:
      'Creator galleries, streaming pipelines, patronage flows, watermarking & rights tooling.',
  },
  {
    slug: 'art-coin',
    href: '/capabilities/art-coin',
    title: 'Art Coin',
    status: 'Coming Soon',
    blurb:
      'Creator-economy value layer for micro-tips, royalties, and patronage across SkyWeb products.',
    tech: ['Ledger protocols', 'Smart contracts', 'APIs', 'React wallets UI'],
    implementation:
      'Royalty contracts, micro-tipping, fiat on/off-ramps, ecosystem hooks into ArTube & Nano Profiles.',
  },
];

/** Shared SkyWeb build methodology used across capability pages */
export const howSkyWebBuilds = [
  {
    step: '01',
    name: 'Discover',
    summary: 'Requirements & technical audit',
    desc: 'Clarify outcomes, map workflows and constraints, review existing systems, and define success metrics before design or code.',
  },
  {
    step: '02',
    name: 'Architect',
    summary: 'System blueprint & contracts',
    desc: 'Define service boundaries, data models, API contracts, security model, and delivery environments.',
  },
  {
    step: '03',
    name: 'Engineer',
    summary: 'Modular agile delivery',
    desc: 'Build in short sprints with typed code, reviews, automated tests, and continuous integration on every change.',
  },
  {
    step: '04',
    name: 'Deploy',
    summary: 'Safe release & cutover',
    desc: 'Stage, regress, then ship with zero-downtime patterns and rollback plans already rehearsed.',
  },
  {
    step: '05',
    name: 'Improve',
    summary: 'Observe & iterate',
    desc: 'Monitor production signals, tune performance and cost, and evolve features from real usage data.',
  },
];

export function getPillarBySlug(slug) {
  return capabilityPillars.find((p) => p.slug === slug) || null;
}
