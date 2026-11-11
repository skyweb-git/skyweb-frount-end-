// Comprehensive data dictionary for all Navbar subpages and sections

export const subpagesData = {
  // ================= ABOUT US SUBPAGES (ENHANCED HUB) =================
  "about/overview": {
    category: "About Us",
    categoryHref: "/about",
    badge: "Company Heritage",
    title: "Corporate Overview",
    subtitle: "Built by experienced technologists and researchers from IIT Hyderabad and IIT Madras, SkyWeb engineers next-generation software, agentic AI, and resilient cloud architectures for global enterprises.",
    description: "From our engineering headquarters in Hyderabad, India, SkyWeb operates across international technology corridors including Dubai (DIFC) and Cape Town. We unite computer science rigor with agile delivery to build scalable platforms that withstand real-world enterprise volume.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      { metric: "100+", label: "Enterprise Engagements Delivered" },
      { metric: "99.98%", label: "System Availability SLA" },
      { metric: "3", label: "Global Regional Hubs" },
      { metric: "35+", label: "Proprietary AI & Cloud Toolchains" }
    ],
    pillars: [
      { title: "Engineering-First Governance", desc: "Every architecture is designed by senior systems engineers, ensuring minimal technical debt, clean codebases, and maximum throughput." },
      { title: "24/7 Global Delivery Model", desc: "Distributed cross-functional squads providing high-velocity delivery across time zones spanning India, UAE, and South Africa." },
      { title: "Academic & Research Foundations", desc: "Technical leadership rooted in IIT Hyderabad and IIT Madras, bringing deep algorithmic and systems engineering rigor." }
    ],
    article: {
      headline: "Architecting the Enterprise Engine: From Hyderabad to Global Frontiers",
      lead: "SkyWeb IT Solutions was founded on a singular principle: technology should eliminate business friction and power compounding growth, rather than creating architectural complexity.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "SkyWeb's enterprise delivery framework combines disciplined software engineering with global operational velocity.",
      sections: [
        {
          title: "Our Origin and Academic DNA",
          content: "Headquartered in Hyderabad, Telangana, SkyWeb began as an elite group of software architects, data scientists, and cloud engineers from premier Indian institutes including IIT Hyderabad and IIT Madras. Frustrated by bloated consultancies that deliver fragile prototypes, our founders created an engineering-first firm dedicated to deterministic, high-concurrency systems."
        },
        {
          title: "The Multi-Corridor Delivery Network",
          content: "Today, our delivery footprint spans Hyderabad's tech core, our international regional office in Cape Town, South Africa, and strategic business hubs in Dubai (DIFC). This multi-regional presence allows us to engineer 24/7 continuous integration pipelines, offer regional data sovereignty compliance, and support international enterprises across time zones."
        },
        {
          title: "End-to-End Enterprise Disciplines",
          content: "SkyWeb's operational scope spans custom software engineering, generative AI assistants, high-load cloud hosting on AWS and Azure, multi-tenant SaaS engineering, ERP systems, and intuitive UI/UX design systems. We don't just write code; we partner as technology custodians who oversee production health and strategic evolution."
        }
      ],
      takeaways: [
        "Headquartered in Hyderabad with international hubs in Cape Town and Dubai",
        "Technical leadership and core talent from IIT Hyderabad & IIT Madras",
        "Strict adherence to zero-downtime, microservices architecture, and clean code",
        "Proven delivery across 100+ mission-critical enterprise systems"
      ]
    }
  },

  "about/leadership": {
    category: "About Us",
    categoryHref: "/about",
    badge: "Executive Team",
    title: "Leadership & Governance",
    subtitle: "Visionary engineering leaders guiding global enterprise digital transformation with institutional rigor.",
    description: "Our leadership team unites decades of technology expertise across Fortune 500 enterprises, academic research centers, and high-velocity digital ventures. Direct executive oversight is embedded into every client engagement.",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      { metric: "25+ Yrs", label: "Combined Leadership Experience" },
      { metric: "IIT Alumni", label: "Core Technical Leadership" },
      { metric: "Zero Debt", label: "Disciplined Fiscal Growth" },
      { metric: "100%", label: "Direct Executive Sponsorship" }
    ],
    pillars: [
      { title: "Hands-On Technical Stewardship", desc: "Direct executive oversight on architecture blueprints, automated security testing, and production benchmarks." },
      { title: "Disciplined Capital Management", desc: "Prudent fiscal management led by CFO Vikhyath Nimmalapudi, ensuring robust reinvestment into R&D and talent." },
      { title: "Cross-Continental Leadership", desc: "Seamless executive collaboration spanning our leadership hubs in India and international markets." }
    ],
    leaders: [
      {
        id: "mohammed-rabbani",
        name: "Mohammed Rabbani Pasha",
        role: "Founder & Director",
        location: "Hyderabad, India",
        image: "/assets/rabbani-portrait.jpg",
        bio: "Founder & Director of SkyWeb IT Solutions. Leading company vision, core architectural engineering, and enterprise AI transformation globally.",
        linkedin: "https://www.linkedin.com/in/mohammed-rabbani-pasha-89b1b4419/",
        email: "rabbani@skywebitsoltions.com"
      },
      {
        id: "tudigonda-vamshi",
        name: "Tudigonda Vamshi",
        role: "Co-Founder",
        location: "Hyderabad, India",
        image: "/assets/vamshi-portrait.jpg",
        bio: "Co-Founder of SkyWeb. Directing technical operations, systems engineering, multi-cloud reliability, and high-velocity product delivery across enterprise platforms.",
        linkedin: "https://www.linkedin.com/in/tudigondavamshi/",
        email: "tudigondavamshi@skywebitsolutions.com"
      },
      {
        id: "vikhyath-nimmalapudi",
        name: "Nimmalapudi Vikhyath",
        role: "Chief Financial Officer (CFO)",
        location: "Hyderabad, India",
        image: "/assets/vikhyath-portrait.jpg",
        bio: "Chief Financial Officer at SkyWeb. Guiding fiscal discipline, multi-market capital allocation, commercial expansion, and fiduciary governance.",
        linkedin: "https://www.linkedin.com/in/vikhyath-nimmlapudi-7baa0626b/",
        email: "nimmalapudivikhyath@skywebitsolutions.com"
      },
      {
        id: "arpan-varma",
        name: "Arpan Varma",
        role: "COO & AI Engineer",
        location: "Hyderabad, India",
        image: "/assets/arpan-portrait.jpg",
        bio: "Chief Operating Officer & AI Engineer at SkyWeb. Directing operational excellence, agile delivery frameworks, and building cutting-edge agentic AI workflows.",
        linkedin: "https://linkedin.com",
        email: "arpan.varma@skywebitsolutions.com"
      },
      {
        id: "ch-kalyan",
        name: "CH Kalyan",
        role: "Backend Architecture & 3D Designer",
        location: "Hyderabad, India",
        image: "/assets/kalyan-portrait.jpg",
        bio: "Leading backend architecture, microservices infrastructure, and high-fidelity 3D modeling and immersive asset design at SkyWeb IT Solutions.",
        linkedin: "https://linkedin.com",
        email: "kalyan@skywebitsolutions.com"
      },
      {
        id: "muskaan-fathima",
        name: "Muskaan Fathima",
        role: "UI/UX Developer",
        location: "Hyderabad, India",
        image: "/assets/muskaan-portrait.jpg",
        bio: "UI/UX Developer at SkyWeb. Shaping human-centered design systems, responsive web interfaces, and modern aesthetic frontend experiences.",
        linkedin: "https://www.linkedin.com/in/muskaan-fathima-630501357/",
        email: "muskan@skywebitsolution.com"
      },
      {
        id: "uday-kumar-sangisetti",
        name: "Uday Kumar Sangisetti",
        role: "Client Management & Tech Consultant",
        location: "Hyderabad, India",
        image: "/assets/uday-portrait.jpg",
        bio: "Overseeing client relationship management, technical consulting, and strategic solution delivery across domestic and regional enterprise projects.",
        linkedin: "https://linkedin.com",
        email: "uday.sangisetti@skywebitsolutions.com"
      },
      {
        id: "ian-chenjerai",
        name: "Ian Tapiwa Chenjerai",
        role: "Foreign Client Management & International Project Head",
        location: "Cape Town, South Africa",
        image: "/assets/ian-portrait.jpg",
        bio: "Heading SkyWeb's foreign client engagements and international project delivery, managing cross-border client accounts and global technology delivery teams.",
        linkedin: "https://www.linkedin.com/in/ian-chenjerai-a9b9a9384/",
        email: "IanTapiwaChenjerai@skywebinternational.com"
      }
    ],
    article: {
      headline: "The Principles of Engineering-Led Corporate Governance",
      lead: "At SkyWeb, leadership is not an ivory-tower function. Our executives are active systems thinkers, engineers, and fiscal strategists who interact directly with enterprise accounts.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "Cross-functional leadership alignment driving architectural integrity and financial resilience.",
      sections: [
        {
          title: "Eliminating the Middle Management Abyss",
          content: "In large consulting conglomerates, client specifications pass through dozens of non-technical project managers before reaching an engineer. SkyWeb operates with a flat hierarchy where principal architects and executive leaders directly participate in roadmap design, guaranteeing zero loss in translation."
        },
        {
          title: "Fiscal Stewardship Under CFO Vikhyath Nimmalapudi",
          content: "Under the financial leadership of CFO Vikhyath Nimmalapudi, SkyWeb operates with sustained profitability, zero debt dependency, and rigorous capital allocation. This financial stability ensures we can guarantee long-term multi-year SLA commitments for enterprise partners."
        },
        {
          title: "Continuous Code & Architecture Auditing",
          content: "Every project undergoes structured peer reviews led by technical co-founders before deployment. This institutional rigor ensures compliance with SOC 2 standards, zero hard-coded credentials, and optimized cloud operational cost baselines."
        }
      ],
      takeaways: [
        "Executive oversight from proposal to continuous production support",
        "Direct access to principal architects and senior leadership",
        "Disciplined financial stewardship ensuring multi-year stability",
        "Rigorous weekly code reviews and security benchmarking"
      ]
    }
  },

  "about/brand": {
    category: "About Us",
    categoryHref: "/about",
    badge: "Identity & Mission",
    title: "Our Brand & Purpose",
    subtitle: "High-Quality Technology & Clean UI Systems. Engineered by top developers and UI masters from IIT Madras, IIT Hyderabad, and seasoned industry leaders.",
    description: "SkyWeb delivers enterprise-grade software, high-quality features, and pristine UI enhancements. Powered by elite engineering talent from IIT Madras and IIT Hyderabad alongside industry masters, we drive every project to a neat, clean, and flawless finale.",
    heroImage: "/assets/logo.png",
    highlights: [
      { metric: "IIT Alumni", label: "Core Devs from IIT Madras & IIT Hyd" },
      { metric: "Clean UI", label: "Pixel-Perfect, Zero-Clutter UX" },
      { metric: "Industry Masters", label: "Battle-Tested Enterprise Architects" },
      { metric: "Flawless Finale", label: "High-Quality Delivery & Code Hygiene" }
    ],
    pillars: [
      { 
        title: "IIT Madras & IIT Hyderabad Engineering Pedigree", 
        desc: "Our core development and UI design squads are led by top engineers and designers from IIT Madras and IIT Hyderabad, bringing academic rigor, algorithmic precision, and cutting-edge frontend architecture." 
      },
      { 
        title: "Industry Masters & High-Quality Tech", 
        desc: "Seasoned industry masters and systems architects oversee every engagement, translating complex enterprise logic into high-velocity, fault-tolerant features and resilient cloud infrastructure." 
      },
      { 
        title: "Neat & Clean UI with Superior Enhancements", 
        desc: "We reject bloated, cluttered interfaces. We engineer modern, accessible, and high-performance UI systems that provide users with intuitive navigation, fluid responsiveness, and aesthetic clarity." 
      }
    ],
    article: {
      headline: "Engineering Digital Possibilities: Precision Tech, Clean UI & Elite Talent",
      lead: "Our brand identity is built on clarity, technical substance, and genuine partnership. We reject empty jargon in favor of verifiable computational excellence.",
      image: "/assets/logo.png",
      imageCaption: "SkyWeb official brand identity and corporate mark.",
      sections: [
        {
          title: "High-Quality Technology & Feature Excellence",
          content: "We deliver advanced technology and feature-rich software engineered for deterministic performance. From high-throughput distributed microservices to agentic AI workflows and dynamic web applications, our solutions eliminate technical friction and empower users with seamless, high-velocity digital capabilities."
        },
        {
          title: "Neat & Clean UI: Enhancing User Experience",
          content: "A powerful backend requires an equally extraordinary frontend. Our design philosophy prioritizes a neat and clean UI, crisp typography, intuitive visual hierarchies, and frictionless workflows. We remove unnecessary visual noise to give users a distraction-free experience that maximizes operational efficiency and productivity."
        },
        {
          title: "Elite Developers from IIT Madras, IIT Hyderabad & Industry Masters",
          content: "At the heart of SkyWeb is our world-class engineering team: premier developers and UI/UX architects graduated from India's elite institutions—IIT Madras and IIT Hyderabad—working side-by-side with veteran industry masters. This powerful combination of foundational computer science rigor and decades of hands-on enterprise mastery guarantees that every client project reaches a pristine, production-ready finale."
        },
        {
          title: "The Project Finale: Polished, Tested, and Production-Ready",
          content: "We don't settle for half-baked prototypes. Every feature undergoes rigorous end-to-end testing, UI polish, security auditing, and performance benchmarking before release. Our clients receive robust, thoroughly documented, and clean codebases that scale effortlessly as their business expands."
        }
      ],
      takeaways: [
        "Core development and UI talent from IIT Madras and IIT Hyderabad",
        "Guided by seasoned industry masters with deep enterprise experience",
        "High-quality technology and feature sets tailored for enterprise utility",
        "Neat, clean, and intuitive UI design engineered for speed and clarity",
        "Flawless project finale with strict code hygiene and zero launch defects"
      ]
    }
  },

  "about/recognition": {
    category: "About Us",
    categoryHref: "/about",
    badge: "Accolades",
    title: "Recognition & Awards",
    subtitle: "Recognized nationally and internationally for transformative engineering, academic hackathons, and enterprise delivery.",
    description: "Our work has garnered recognition across regional media, national daily press publications, industry analyst reports, enterprise technology conclaves, and university innovation hackathons.",
    heroImage: "/assets/news/sakshi-codestars-2k26.png",
    highlights: [
      { metric: "7+", label: "Verified National Press Features" },
      { metric: "#1", label: "Top Emerging AI & Cloud Partner" },
      { metric: "SOC 2 Type II", label: "Security & Privacy Certification" },
      { metric: "ISO 27001", label: "Information Security Standard" }
    ],
    pillars: [
      { title: "National Newspaper & Media Recognition", desc: "Featured extensively across leading daily publications including Sakshi, Nava Telangana, Manam, Aadab Hyderabad, and Vijaya Kranthi for technological innovation." },
      { title: "Academic & Tech Conclave Honors", desc: "Honored at national hackathons and collegiate conclaves including CodeStars 2K26, Audisankara CodeSprint, and Designathon Hyderabad." },
      { title: "Audited Enterprise Compliance", desc: "Rigorous SOC 2 Type II and ISO 27001 certifications confirming enterprise-grade data security and governance." }
    ],
    article: {
      headline: "National Accolades, Media Features & Audited Enterprise Trust",
      lead: "SkyWeb's dedication to zero-defect delivery, academic talent incubation, and institutional engineering governance has received honors from technology conclaves, daily press, and security auditors worldwide.",
      image: "/assets/news/sakshi-codestars-2k26.png",
      imageCaption: "Sakshi Daily covering SkyWeb's CodeStars 2K26 National Hackathon & Innovation Summit.",
      sections: [
        {
          title: "Prominent Press & Newspaper Coverage",
          content: "SkyWeb's technology leadership and hackathon initiatives have been widely covered across leading state and national daily newspapers, including Sakshi, Nava Telangana, Manam, Aadab Hyderabad, and Vijaya Kranthi. These articles celebrate our commitment to engineering excellence, youth talent discovery, and enterprise software innovation."
        },
        {
          title: "Hackathons, Academic Conclaves & UI Excellence",
          content: "From sponsoring CodeStars 2K26 to participating in the Audisankara CodeSprint and Designathon Hyderabad, SkyWeb actively collaborates with premier universities and tech conclaves to benchmark clean code, advanced UI systems, and high-velocity problem-solving."
        },
        {
          title: "Audited Security & Operational Certifications",
          content: "Enterprise trust starts with verification. SkyWeb maintains SOC 2 Type II and ISO/IEC 27001 certifications, ensuring our deployment processes, database encryption mechanisms, and internal access controls satisfy the most stringent global enterprise audits."
        }
      ],
      takeaways: [
        "Extensive national press coverage across Sakshi, Nava Telangana, Manam, and Vijaya Kranthi",
        "Keynote partner and sponsor for CodeStars 2K26 and Audisankara CodeSprint",
        "Certified SOC 2 Type II and ISO 27001 enterprise compliance",
        "Proven client retention rate exceeding 94% with zero launch defects"
      ]
    },
    newsSectionTitle: "Press Clippings & Newspaper Accolades",
    newsSectionSubtitle: "Verified newspaper publications, media clippings, and tech conclave features celebrating SkyWeb's engineering accomplishments.",
    newsItems: [
      {
        title: "CodeStars 2K26 National Hackathon & Innovation Summit",
        publisher: "Sakshi Daily",
        category: "Tech Conclave",
        date: "October 2026",
        image: "/assets/news/sakshi-codestars-2k26.png",
        summary: "Prominent daily newspaper Sakshi features SkyWeb's corporate sponsorship, executive mentorship, and engineering leadership during the national CodeStars 2K26 hackathon."
      },
      {
        title: "National CodeSprint Championship & Talent Discovery",
        publisher: "Audisankara Tech Conclave",
        category: "Academic Conclave",
        date: "October 2026",
        image: "/assets/news/audisankara-codesprint-2026.png",
        summary: "Coverage of SkyWeb's premier coding championship and academic collaboration, recognizing emerging developers across distributed computing and algorithms."
      },
      {
        title: "Designathon 2026 Hyderabad: UI/UX & Frontend Excellence",
        publisher: "Design Conclave Hyderabad",
        category: "UI/UX Honor",
        date: "October 2026",
        image: "/assets/news/designathon-2026-hyderabad.png",
        summary: "Special feature highlighting SkyWeb's recognition in neat, clean UI architecture, human-centric design system benchmarks, and rapid frontend delivery."
      },
      {
        title: "SkyWeb Pioneers High-Velocity Enterprise Software Hub",
        publisher: "Nava Telangana Daily",
        category: "Enterprise News",
        date: "September 2026",
        image: "/assets/news/navatelangana-codestars-2k26.jpg",
        summary: "Nava Telangana daily press coverage reporting on SkyWeb's rapid scaling across enterprise cloud deployments, clean UI development, and institutional tech partnerships."
      },
      {
        title: "Engineering Modern Cloud & Software Solutions",
        publisher: "Manam News",
        category: "Industry Press",
        date: "September 2026",
        image: "/assets/news/manam-codestars-2k26.png",
        summary: "Manam features SkyWeb's leadership team and client success milestones across AI pipelines, scalable software development, and fault-tolerant architectures."
      },
      {
        title: "Recognizing Technological Innovation in Enterprise Systems",
        publisher: "Aadab Hyderabad",
        category: "Regional Honor",
        date: "September 2026",
        image: "/assets/news/aadabhyderabad-codestars-2k26.png",
        summary: "Press feature covering SkyWeb's engineering roots, rapid growth, and international client engagements across Dubai and South Africa."
      },
      {
        title: "Vijaya Kranthi Honors SkyWeb's Software Engineering Pedigree",
        publisher: "Vijaya Kranthi",
        category: "Press Feature",
        date: "August 2026",
        image: "/assets/news/vijayakranthi-codestars-2k26.png",
        summary: "Comprehensive reporting celebrating SkyWeb's research rigor, zero-defect delivery standards, and developer talent ecosystem."
      }
    ]
  },

  "about/customer-speak": {
    category: "About Us",
    categoryHref: "/about",
    badge: "The Clients",
    title: "The Clients",
    subtitle: "What partners say about working with SkyWeb.",
    description: "Client feedback from brands and teams who build with SkyWeb.",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    testimonials: [
      {
        company: "ArtArtist",
        logo: "/assets/logos/logo-1.png",
        imageUrl: "/assets/testimonials/card-2.png",
        quote: "SkyWeb architected a high-throughput digital gallery and creator marketplace that scaled past 250,000 active creators seamlessly. Their systems handled high-concurrency image uploads with flawless uptime."
      },
      {
        company: "Value Laden",
        logo: "/assets/logos/logo-9.png",
        imageUrl: "/assets/testimonials/card-3.png",
        quote: "SkyWeb engineered our financial reporting engine and algorithmic advisory dashboard with unyielding accuracy, data privacy, and regulatory auditability."
      },
      {
        company: "Akashya Labs and Tech",
        logo: "/assets/logos/logo-10.png",
        imageUrl: "/assets/testimonials/card-4.png",
        quote: "A brilliant, agile team. They built our next-generation mobile platform on time, with strict adherence to security protocols and zero launch-day defects."
      },
      {
        company: "Yash Education",
        logo: "/assets/logos/logo-6.png",
        imageUrl: "/assets/testimonials/card-5.png",
        quote: "SkyWeb's team delivered a secure, high-capacity learning management system that handles concurrent exams across thousands of students effortlessly."
      },
      {
        company: "ServFex",
        logo: "/assets/logos/logo-5.png",
        imageUrl: "/assets/testimonials/card-6.png",
        quote: "The field service management engine and real-time dispatch APIs engineered by SkyWeb reduced technician turnaround times by 48% across thousands of weekly service orders."
      },
      {
        company: "MasterBrush Art Foundation",
        logo: "/assets/logos/logo-4.png",
        imageUrl: "/assets/testimonials/card-1.png",
        quote: "SkyWeb built our philanthropic archival and digital exhibition platform with exceptional UX, robust cloud backup systems, and seamless accessibility across devices."
      }
    ]
  },

  "about/partners": {
    category: "About Us",
    categoryHref: "/about",
    badge: "Alliances",
    title: "Partners Ecosystem",
    subtitle: "Collaborating with global cloud hyperscalers, enterprise platforms, and frontier AI research labs.",
    description: "Our certified alliance partnerships enable us to deliver tier-1 support, early API access, and deep architectural integration for our clients.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      { metric: "AWS", label: "Advanced Cloud Tier Partner" },
      { metric: "Microsoft", label: "Gold Cloud Solutions Partner" },
      { metric: "Google Cloud", label: "Premier Partner Network" },
      { metric: "NVIDIA", label: "Inception AI Partner" }
    ],
    pillars: [
      { title: "Hyperscaler Co-Innovation", desc: "Joint engineering initiatives for custom serverless frameworks and zero-trust cloud landing zones." },
      { title: "Enterprise Software Alliances", desc: "Certified integration engineers across ServiceNow, SAP, Oracle, and Salesforce architectures." },
      { title: "Hardware-Accelerated AI", desc: "Direct optimization of inference models on NVIDIA CUDA and TensorRT architectures." }
    ],
    partnersList: [
      { name: "Amazon Web Services (AWS)", category: "Cloud Hyperscaler", desc: "Advanced Tier Partner for serverless microservices, ECS/EKS container orchestration, and RDS databases." },
      { name: "Microsoft Azure", category: "Cloud & Enterprise", desc: "Certified gold solutions partner for enterprise Active Directory, Azure OpenAI services, and hybrid cloud." },
      { name: "Google Cloud Platform", category: "AI & Big Data", desc: "Premier partner for BigQuery analytics, Vertex AI model training, and global network routing." },
      { name: "NVIDIA", category: "AI Acceleration", desc: "Inception partner focusing on high-throughput computer vision and LLM edge deployment." },
      { name: "Salesforce & SAP", category: "Enterprise ERP", desc: "Seamless enterprise data synchronization and customized middleware adapters." },
      { name: "ServiceNow & Oracle", category: "ITOM & Database", desc: "Mission-critical IT operations management and high-availability database cluster connectivity." }
    ],
    article: {
      headline: "The Global Cloud & AI Alliance Network",
      lead: "By maintaining direct certified partnerships with world-class cloud hyperscalers, SkyWeb provides clients with priority architectural validation and cutting-edge toolchains.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "Global interconnected cloud infrastructure and enterprise software ecosystems.",
      sections: [
        {
          title: "Tier-1 Hyperscaler Support",
          content: "Our certified AWS, Azure, and GCP architects hold direct lines to cloud engineering teams, ensuring immediate escalations, reserved GPU quotas, and specialized cloud funding programs for eligible client migrations."
        },
        {
          title: "Zero-Silo Enterprise ERP Integration",
          content: "We engineer resilient middleware that connects modern customer-facing apps with legacy SAP, Oracle, and Salesforce systems, ensuring real-time bidirectional data flow without data loss."
        }
      ],
      takeaways: [
        "Certified partnerships across AWS, Azure, Google Cloud, and NVIDIA",
        "Direct cloud architect escalation channels and priority support",
        "Turnkey integrations with enterprise ERP and CRM platforms"
      ]
    }
  },

  "about/portfolio": {
    category: "About Us",
    categoryHref: "/about",
    badge: "Ventures & Labs",
    title: "Portfolio Companies & Platforms",
    subtitle: "Incubating proprietary products, specialized ventures, and mission-critical SaaS platforms at SkyWeb Labs.",
    description: "Beyond bespoke services, SkyWeb incubates high-impact software tools across automated security compliance, agentic AI workflows, and cloud observability.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      { metric: "4", label: "Active Incubated Platforms" },
      { metric: "1.2M+", label: "End Users on Hosted Platforms" },
      { metric: "99.99%", label: "SaaS Platform Uptime" },
      { metric: "Multi-Region", label: "Global Redundant Deployment" }
    ],
    pillars: [
      { title: "SkyCore Event Engine", desc: "Low-latency distributed event streaming backbone for high-frequency transaction orchestration." },
      { title: "AgentPulse AI", desc: "Autonomous observability platform detecting silent microservice degradation before SLA breach." },
      { title: "AuthFlow Zero-Trust", desc: "Turnkey enterprise identity and multi-tenant authentication engine with biometric passkey support." }
    ],
    portfolioVentures: [
      {
        title: "SkyCore Event Engine",
        category: "Distributed Systems",
        desc: "Ultra-low-latency distributed event streaming engine processing over 100,000 events/sec with sub-millisecond serialization for fintech platforms.",
        status: "Production Grade"
      },
      {
        title: "AgentPulse AI",
        category: "Autonomous Observability",
        desc: "AI-driven system monitoring that diagnoses anomalous memory spikes, database query degradation, and API latency creep before outages occur.",
        status: "Live Across 45+ Clusters"
      },
      {
        title: "AuthFlow Zero-Trust",
        category: "Identity & Security",
        desc: "A headless, multi-tenant enterprise authentication suite supporting biometric passkeys, WebAuthn, OAuth2, and continuous risk assessment.",
        status: "Enterprise Available"
      },
      {
        title: "CloudTelemetry Suite",
        category: "Cost & Performance",
        desc: "Automated AWS and Azure cost optimization tool that identifies unattached volumes, rightsizes EC2 instances, and slashes monthly bills by up to 35%.",
        status: "Active Incubator"
      }
    ],
    article: {
      headline: "Proprietary Platforms Incubated at SkyWeb Labs",
      lead: "SkyWeb Labs serves as our internal incubator where our senior engineers transform recurring enterprise pain points into reusable, high-performance software products.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "Hardware-level software optimization and distributed systems engineering in SkyWeb Labs.",
      sections: [
        {
          title: "From Internal Tools to Enterprise Products",
          content: "When we discover common architectural challenges across multiple client engagements—such as event synchronization or cloud cost bloat—our labs squad builds hardened, reusable platforms that client teams can license or deploy out of the box."
        },
        {
          title: "Battle-Tested Production Verification",
          content: "Every tool in our portfolio is proven in high-concurrency production deployments before being packaged as a standalone solution, guaranteeing rock-solid stability."
        }
      ],
      takeaways: [
        "4 proprietary platforms running in high-traffic enterprise environments",
        "Direct licensing and integration options for SkyWeb enterprise clients",
        "Continuous R&D focused on AI agents and low-latency cloud utilities"
      ]
    }
  },

  "about/news": {
    category: "About Us",
    categoryHref: "/about",
    badge: "Press & Media",
    title: "News & Media Coverage",
    subtitle: "Latest announcements, major enterprise client milestones, and technical research releases.",
    description: "Stay informed on SkyWeb's newest technology milestones, strategic international expansion, and engineering publications.",
    heroImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      { metric: "Q2 Update", label: "Financial & Operating Results" },
      { metric: "Global Hub", label: "New Regional Delivery in Dubai" },
      { metric: "Patents", label: "Distributed AI Compute Architecture" },
      { metric: "Keynotes", label: "Global Cloud Conclave Participation" }
    ],
    pillars: [
      { title: "Strategic International Footprint", desc: "SkyWeb expands technical squads across South Africa and the UAE to support fintech corridors." },
      { title: "Open Engineering Whitepapers", desc: "Releasing peer-reviewed architectures on microservice synchronization and serverless cold starts." },
      { title: "Community Tech Summits", desc: "Hosting quarterly engineering workshops for university students and budding software engineers." }
    ],
    newsItems: [
      {
        title: "CodeStars 2K26 National Hackathon & Innovation Summit",
        publisher: "Sakshi Daily",
        category: "Tech Conclave",
        date: "October 2026",
        image: "/assets/news/sakshi-codestars-2k26.png",
        summary: "Prominent daily newspaper Sakshi features SkyWeb's corporate sponsorship, executive mentorship, and engineering leadership during the national CodeStars 2K26 hackathon."
      },
      {
        title: "National CodeSprint Championship & Talent Discovery",
        publisher: "Audisankara Tech Conclave",
        category: "Academic Conclave",
        date: "October 2026",
        image: "/assets/news/audisankara-codesprint-2026.png",
        summary: "Coverage of SkyWeb's premier coding championship and academic collaboration, recognizing emerging developers across distributed computing and algorithms."
      },
      {
        title: "Designathon 2026 Hyderabad: UI/UX & Frontend Excellence",
        publisher: "Design Conclave Hyderabad",
        category: "UI/UX Honor",
        date: "October 2026",
        image: "/assets/news/designathon-2026-hyderabad.png",
        summary: "Special feature highlighting SkyWeb's recognition in neat, clean UI architecture, human-centric design system benchmarks, and rapid frontend delivery."
      },
      {
        title: "SkyWeb Pioneers High-Velocity Enterprise Software Hub",
        publisher: "Nava Telangana Daily",
        category: "Enterprise News",
        date: "September 2026",
        image: "/assets/news/navatelangana-codestars-2k26.jpg",
        summary: "Nava Telangana daily press coverage reporting on SkyWeb's rapid scaling across enterprise cloud deployments, clean UI development, and institutional tech partnerships."
      },
      {
        title: "Engineering Modern Cloud & Software Solutions",
        publisher: "Manam News",
        category: "Industry Press",
        date: "September 2026",
        image: "/assets/news/manam-codestars-2k26.png",
        summary: "Manam features SkyWeb's leadership team and client success milestones across AI pipelines, scalable software development, and fault-tolerant architectures."
      },
      {
        title: "Recognizing Technological Innovation in Enterprise Systems",
        publisher: "Aadab Hyderabad",
        category: "Regional Honor",
        date: "September 2026",
        image: "/assets/news/aadabhyderabad-codestars-2k26.png",
        summary: "Press feature covering SkyWeb's engineering roots, rapid growth, and international client engagements across Dubai and South Africa."
      },
      {
        title: "Vijaya Kranthi Honors SkyWeb's Software Engineering Pedigree",
        publisher: "Vijaya Kranthi",
        category: "Press Feature",
        date: "August 2026",
        image: "/assets/news/vijayakranthi-codestars-2k26.png",
        summary: "Comprehensive reporting celebrating SkyWeb's research rigor, zero-defect delivery standards, and developer talent ecosystem."
      },
      {
        date: "October 2026",
        title: "SkyWeb Expands Enterprise Cloud Practice Across South Africa and UAE",
        publisher: "Global Press Wire",
        category: "Global Expansion",
        summary: "SkyWeb announces expanded delivery squads based in Cape Town and Dubai DIFC to meet surging demand for custom cloud platforms and AI systems."
      },
      {
        date: "September 2026",
        title: "SkyWeb Deploys 100th Enterprise Mission-Critical System",
        publisher: "Corporate Dispatch",
        category: "Milestone",
        summary: "Celebrating a key operational landmark with over 100 production systems engineered across retail, fintech, education, and AI automation."
      }
    ],
    article: {
      headline: "SkyWeb Press Room: Engineering Milestones & Market Expansion",
      lead: "Follow our ongoing trajectory as we build scalable technology solutions and expand our engineering footprint worldwide.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "Press and media coverage highlighting SkyWeb's technology impact and regional expansion.",
      sections: [
        {
          title: "A Growing International Engineering Footprint",
          content: "With new regional operations supporting clients in Cape Town and the Gulf region, SkyWeb is rapidly proving that world-class software engineering transcends geographic borders."
        },
        {
          title: "Commitment to Open Research",
          content: "We believe in contributing back to the global developer community. Our engineering leads frequently publish technical whitepapers on topics ranging from distributed consensus to real-time LLM inference optimizations."
        }
      ],
      takeaways: [
        "Rapidly scaling operations across India, Cape Town, and Dubai",
        "Consistent publication of technical whitepapers and open benchmarks",
        "Quarterly financial updates demonstrating self-sustaining, debt-free growth"
      ]
    }
  },

  "about/investors": {
    category: "About Us",
    categoryHref: "/about",
    badge: "Financial Health",
    title: "Investor Relations",
    subtitle: "Disciplined capital stewardship, compounding revenue growth, and transparent financial governance.",
    description: "Guided by CFO Vikhyath Nimmalapudi, SkyWeb operates with financial resilience, healthy operating margins, and strong cash-flow generation driven by long-term enterprise technology contracts.",
    heroImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      { metric: "42%", label: "YoY Revenue Compound Growth" },
      { metric: "100%", label: "Independent & Self-Funded" },
      { metric: "Tier 1", label: "Audited Financial Compliance" },
      { metric: "60%", label: "Profits Reinvested in R&D Labs" }
    ],
    pillars: [
      { title: "Disciplined Capital Stewardship", desc: "Under CFO Vikhyath Nimmalapudi, we maintain zero debt and conservative cash reserves to protect client SLAs." },
      { title: "Compounding Growth Model", desc: "Driven by multi-year managed engineering partnerships and scalable SaaS platform licensing." },
      { title: "Uncompromising Audit Standards", desc: "Transparent accounting aligned with international standards and strict board oversight." }
    ],
    article: {
      headline: "Disciplined Capital Stewardship & Sustainable Financial Compounding",
      lead: "At SkyWeb, financial health is considered an architectural foundation. Our debt-free, capital-efficient balance sheet provides clients with total peace of mind.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "Financial modeling and strategic capital allocation led by CFO Vikhyath Nimmalapudi.",
      sections: [
        {
          title: "Fiscal Governance Led by CFO Vikhyath Nimmalapudi",
          content: "CFO Vikhyath Nimmalapudi leads SkyWeb's fiscal strategy, ensuring every commercial contract is priced for sustainable delivery, healthy gross margins, and zero reliance on speculative outside capital. This fiscal resilience guarantees uninterrupted support for mission-critical client systems."
        },
        {
          title: "Reinvestment into Frontier Technology",
          content: "Rather than dissipating profits into exorbitant marketing budgets, SkyWeb reinvests over 60% of earnings directly back into engineering talent, proprietary incubator platforms, and university research sponsorships."
        }
      ],
      takeaways: [
        "100% self-funded with zero institutional debt",
        "Over 60% of operating profits reinvested directly into R&D",
        "Strong multi-year recurring contract foundation across global markets"
      ]
    }
  },

  "about/citizenship": {
    category: "About Us",
    categoryHref: "/about",
    badge: "Corporate Citizenship",
    title: "Corporate Citizenship & Social Impact",
    subtitle: "Empowering communities through STEM education, open-source technology, and digital literacy.",
    description: "Through the SkyWeb Foundation, our academic partnership with Mahindra Educational Institutions, and our Individual Social Responsibility (ISR) initiative, we invest in training the next generation of technologists.",
    heroImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      { metric: "5,000+", label: "Students Trained in Modern Coding" },
      { metric: "12", label: "Open-Source Initiatives Funded" },
      { metric: "100%", label: "Employee ISR Participation" },
      { metric: "Annual", label: "Technology Scholarship Fund" }
    ],
    pillars: [
      { title: "SkyWeb Foundation", desc: "Dedicated non-profit arm providing coding bootcamps and scholarships for underrepresented students." },
      { title: "Mahindra Educational Institutions", desc: "Collaborative systems programming labs, curriculum advisement, and university project mentorship." },
      { title: "Individual Social Responsibility (ISR)", desc: "Paid volunteering hours for every engineer to contribute code and cloud resources to public-interest causes." }
    ],
    citizenshipPrograms: [
      {
        id: "foundation",
        title: "SkyWeb Foundation",
        subtitle: "Bridging the Digital Divide with STEM Education",
        desc: "The SkyWeb Foundation is our dedicated philanthropic initiative focused on equipping students from economically underserved backgrounds with production-grade software development skills. We fund hands-on coding bootcamps, provide donated laptops, and offer direct internship pathways into the technology industry.",
        impactMetrics: ["5,000+ Students Mentored", "250+ Sponsored Laptops", "100% Free Tuition"]
      },
      {
        id: "mahindra",
        title: "Mahindra Educational Institutions Partnership",
        subtitle: "Empowering Tomorrow's Systems Architects",
        desc: "Through our structured collaboration with Mahindra Educational Institutions, SkyWeb's senior architects conduct specialized guest masterclasses in distributed cloud computing, AI model orchestration, and clean architecture. We host student hackathons, evaluate final-year capstone engineering projects, and sponsor high-performance computer lab infrastructure.",
        impactMetrics: ["Annual Hackathons Hosted", "Capstone Mentorship Programs", "Sponsored Systems Lab"]
      },
      {
        id: "isr",
        title: "Individual Social Responsibility (ISR)",
        subtitle: "Engineering for the Common Good",
        desc: "Every engineer and designer at SkyWeb is granted dedicated paid company time each month to contribute code, architecture reviews, and cloud hosting infrastructure to verified non-profit organizations, open-source environmental platforms, and healthcare research initiatives.",
        impactMetrics: ["40+ Paid Hours/Year per Engineer", "12 Non-Profits Digitized", "Open Source Donations"]
      }
    ],
    article: {
      headline: "Corporate Citizenship: Empowering Communities Through Technology",
      lead: "We believe that deep technical skills are a privilege that must be shared to drive societal mobility and digital equity.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "Students participating in SkyWeb Foundation coding workshops and systems mentorship sessions.",
      sections: [
        {
          title: "The SkyWeb Foundation Mandate",
          content: "Founded on the belief that coding literacy transforms generational futures, the SkyWeb Foundation sponsors grassroots bootcamps in Python, web architecture, and cloud foundations for talented high school and university students across India."
        },
        {
          title: "Mahindra Educational Institutions Collaboration",
          content: "Our ongoing engagement with Mahindra Educational Institutions bridges the gap between academic theory and real-world production engineering. Students work on actual microservice architectures and learn production deployment practices directly from our senior leads."
        },
        {
          title: "Individual Social Responsibility (ISR)",
          content: "SkyWeb's ISR initiative institutionalizes public-interest technology. Whether building open database registries for blood banks or auditing cloud security for environmental NGOs, our teams apply their skills where they are needed most."
        }
      ],
      takeaways: [
        "SkyWeb Foundation: 5,000+ students trained with full scholarships",
        "Active student mentorship partnership with Mahindra Educational Institutions",
        "100% employee participation in paid Individual Social Responsibility projects"
      ]
    }
  },

  "about/customer-centricity": {
    category: "About Us",
    categoryHref: "/about",
    badge: "Customer First",
    title: "Customer Centricity Office",
    subtitle: "Institutionalizing customer success, transparency, and relentless post-deployment support.",
    description: "Every SkyWeb customer engagement is assigned an executive sponsor and dedicated reliability engineer to ensure business objectives are delivered without friction.",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      { metric: "15 Min", label: "Emergency Response SLA" },
      { metric: "Dedicated", label: "Technical Account Lead" },
      { metric: "Bi-Weekly", label: "Executive Architecture Reviews" },
      { metric: "100%", label: "Transparent Jira & GitHub Access" }
    ],
    pillars: [
      { title: "Direct Engineer Access", desc: "No frustrating sales intermediaries. Your engineers talk directly with our principal architects." },
      { title: "Continuous Value Audits", desc: "Quarterly business reviews examining infrastructure spend, system bottlenecks, and upcoming product roadmaps." },
      { title: "Root-Cause Transparency", desc: "Detailed post-mortem reports with preventative code improvements delivered after any anomaly." }
    ],
    article: {
      headline: "The Customer Centricity Office: Zero Friction, Unyielding Support",
      lead: "Customer centricity at SkyWeb is not a marketing phrase—it is an operational guarantee embedded into our contracts and development sprints.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "Dedicated technical account managers and client architecture sessions at SkyWeb.",
      sections: [
        {
          title: "Zero Intermediary Architecture",
          content: "Traditional IT consultancies place layers of non-technical account managers between you and the developers. At SkyWeb, you communicate directly with senior systems engineers via shared Slack or Discord channels, dramatically cutting resolution times."
        },
        {
          title: "Guaranteed 15-Minute Critical Incident SLA",
          content: "For production environments under our management, our global site reliability squads provide a guaranteed 15-minute response SLA, backed by automated anomaly detection and 24/7 on-call engineering."
        }
      ],
      takeaways: [
        "Direct access to principal systems engineers and architects",
        "15-minute guaranteed SLA for critical production incidents",
        "Transparent real-time sprint tracking and bi-weekly architecture audits"
      ]
    }
  },

  "about/scale-at-speed": {
    category: "About Us",
    categoryHref: "/about",
    badge: "Core Promise",
    title: "Scale at Speed™",
    subtitle: "Accelerating enterprise delivery cycles from months to days with battle-tested distributed architectures.",
    description: "Scale at Speed™ is SkyWeb's proprietary engineering methodology that integrates modular micro-frontends, event-driven streaming, and automated canary deployments.",
    highlights: [
      { metric: "10x", label: "Deployment Frequency" },
      { metric: "0.01%", label: "Change Failure Rate" },
      { metric: "< 15 Min", label: "Mean Time to Recovery" },
      { metric: "Elastic", label: "Auto-Scales to 10M+ Concurrents" }
    ],
    pillars: [
      { title: "Automated Blueprinting", desc: "Pre-validated infrastructure-as-code templates deployed in minutes across multi-cloud environments." },
      { title: "Resilient Chaos Testing", desc: "Automated fault-injection ensuring services survive zone failures and network partitions seamlessly." }
    ]
  },
  "about/ai-delivered-right": {
    category: "About Us",
    categoryHref: "/about",
    badge: "Frontier AI",
    title: "AI Delivered Right",
    subtitle: "Deterministic, secure, and production-grade artificial intelligence systems that drive measurable enterprise ROI.",
    description: "We bypass hype to build enterprise-hardened AI solutions: customized retrieval-augmented generation (RAG), autonomous multi-agent pipelines, and low-latency inference on private cloud.",
    highlights: [
      { metric: "Sub-100ms", label: "Inference Latency" },
      { metric: "Private VPC", label: "Zero Data Leakage Guarantee" },
      { metric: "RAG & Agents", label: "Full-Stack AI Architecture" },
      { metric: "99.4%", label: "Domain Accuracy Score" }
    ],
    pillars: [
      { title: "Private Foundation Models", desc: "Fine-tuned models hosted entirely within your enterprise boundary with zero vendor lock-in." },
      { title: "Guardrails & Factuality", desc: "Comprehensive semantic verification layers preventing hallucinations and unauthorized data exfiltration." }
    ]
  },

  // ================= CAPABILITIES SUBPAGES =================
  "capabilities/consulting": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Advisory",
    title: "Technology & Strategy Consulting",
    subtitle: "Aligning digital investments with enterprise growth targets, legacy modernization, and technical velocity.",
    description: "Our strategic consulting practice helps C-suite technology executives evaluate emerging technologies, design modular target architectures, and optimize IT balance sheets.",
    highlights: [
      { metric: "Strategic", label: "Architecture Roadmaps" },
      { metric: "Due Diligence", label: "M&A Technical Audits" },
      { metric: "Cost Mastery", label: "FinOps Cloud Optimization" },
      { metric: "Gov & Risk", label: "Zero-Trust Security Design" }
    ],
    pillars: [
      { title: "Architecture Modernization", desc: "Decomposing monolithic legacy architectures into resilient, decoupled microservices." },
      { title: "FinOps Cloud Cost Optimization", desc: "Eliminating idle compute overhead and negotiating optimal reservation tiers across cloud providers." }
    ]
  },
  "capabilities/application-services": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Core Engineering",
    title: "Application Engineering Services",
    subtitle: "Custom web, mobile, and distributed applications engineered for zero downtime and effortless scale.",
    description: "We design, code, and deploy mission-critical software systems using modern TypeScript, React, Go, Node.js, and cloud-native container orchestration.",
    highlights: [
      { metric: "TypeScript", label: "Type-Safe Fullstack" },
      { metric: "React / Next", label: "Ultra-Fast Client Apps" },
      { metric: "Microservices", label: "Decoupled Architecture" },
      { metric: "GraphQL & gRPC", label: "High-Throughput APIs" }
    ],
    pillars: [
      { title: "Full-Lifecycle Delivery", desc: "From Figma wireframing to continuous deployment, automated regression testing, and production telemetry." },
      { title: "Cloud-Native Scalability", desc: "Containerized deployments via Kubernetes with horizontal pod autoscaling under load spikes." }
    ]
  },
  "capabilities/agentic-development": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Next-Gen AI",
    title: "Agentic Development & Modernization",
    subtitle: "Autonomous multi-agent workflows and generative tools modernizing enterprise software lifecycles.",
    description: "We deploy autonomous AI agents capable of diagnosing codebases, generating refactoring specs, validating backward compatibility, and executing legacy migration.",
    highlights: [
      { metric: "70%", label: "Faster Legacy Code Migration" },
      { metric: "Multi-Agent", label: "Coordinated Orchestration" },
      { metric: "Automated", label: "Test Generation & Fixing" },
      { metric: "Deterministic", label: "Human-in-the-Loop Safeguards" }
    ],
    pillars: [
      { title: "Automated Refactoring", desc: "Translating legacy COBOL, Java 8, and outdated frameworks into modular microservices with verified test coverage." },
      { title: "Autonomous Knowledge Workers", desc: "Embedding specialized LLM agents across customer support, document parsing, and financial auditing." }
    ]
  },
  "capabilities/intelligent-automation": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Automation",
    title: "Intelligent Process Automation",
    subtitle: "Eliminating repetitive enterprise workflows through AI-driven decision engines and robotic orchestration.",
    description: "Connect disparate ERPs, CRMs, and internal databases with event-driven automation that works 24/7 with zero human fatigue.",
    highlights: [
      { metric: "99.9%", label: "Straight-Through Processing" },
      { metric: "10x", label: "Transaction Processing Velocity" },
      { metric: "Zero Error", label: "Compliance Verification" },
      { metric: "Real-Time", label: "Dashboard Telemetry" }
    ],
    pillars: [
      { title: "Cognitive Document Processing", desc: "Extracting structured data from invoices, contracts, and insurance claims with multi-modal AI." },
      { title: "Workflow Orchestration", desc: "Fault-tolerant queue systems handling millions of business actions without dropped events." }
    ]
  },
  "capabilities/testing-services": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Quality Assurance",
    title: "Quality Engineering & Testing Services",
    subtitle: "Automated end-to-end testing, security penetration testing, and continuous performance validation.",
    description: "Ship software with supreme confidence. Our QA engineers build automated CI/CD test matrices covering regression, integration, accessibility, and security vulnerabilities.",
    highlights: [
      { metric: "95%+", label: "Automated Test Coverage" },
      { metric: "Parallel", label: "Cloud-Based Test Grids" },
      { metric: "OWASP Top 10", label: "Continuous Security Scans" },
      { metric: "Cross-Device", label: "Real Browser Fleet Validation" }
    ],
    pillars: [
      { title: "Shift-Left Testing", desc: "Catching bugs and security regressions directly in pull requests before code merges to main." },
      { title: "Contract Testing", desc: "Guaranteeing API backwards compatibility across dozens of interconnected microservices." }
    ]
  },
  "capabilities/performance-engineering": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Optimization",
    title: "Performance Engineering & SRE",
    subtitle: "Tuning systems for extreme throughput, sub-millisecond response times, and uninterrupted availability.",
    description: "When milliseconds equal millions in revenue, SkyWeb performance engineers profile CPU bottlenecks, optimize SQL indexes, and eliminate distributed deadlocks.",
    highlights: [
      { metric: "< 50ms", label: "P99 Response Time Target" },
      { metric: "100k+", label: "Requests per Second Load Testing" },
      { metric: "Memory Leaks", label: "Zero Heap Degradation" },
      { metric: "Live", label: "Distributed Tracing Observability" }
    ],
    pillars: [
      { title: "High-Volume Profiling", desc: "Simulating Black Friday and surge traffic scenarios to isolate and eliminate database connection bottlenecks." },
      { title: "Distributed Caching", desc: "Multi-tiered caching strategies using Redis, Memcached, and edge CDNs to offload primary storage." }
    ]
  },
  "capabilities/digital-core": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Infrastructure",
    title: "Digital Core & Cloud Infrastructure",
    subtitle: "High-availability multi-cloud landing zones, Kubernetes clusters, and zero-trust network topology.",
    description: "Build on an unshakeable digital core. We design and manage elastic cloud infrastructure across AWS, Microsoft Azure, and Google Cloud with complete automation.",
    highlights: [
      { metric: "100%", label: "Infrastructure-as-Code" },
      { metric: "Multi-Region", label: "Active-Active Disaster Recovery" },
      { metric: "Zero-Trust", label: "IAM and Perimeter Security" },
      { metric: "Kubernetes", label: "Production-Hardened Clusters" }
    ],
    pillars: [
      { title: "Terraform & Pulumi Automation", desc: "Repeatable, audited, version-controlled cloud infrastructure provisioned in minutes." },
      { title: "Resilient Networking", desc: "SD-WAN, Direct Connect, and encrypted service meshes protecting inter-service communications." }
    ]
  },
  "capabilities/cloud-infrastructure": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Cloud Architecture",
    title: "Cloud & Infrastructure Services",
    subtitle: "Architecting, migrating, and managing enterprise cloud footprints with maximum uptime and security.",
    description: "Whether migrating legacy workloads or designing greenfield microservices, our certified cloud architects deliver scalable, resilient compute environments.",
    highlights: [
      { metric: "Multi-Cloud", label: "AWS, Azure, GCP" },
      { metric: "Serverless", label: "Event-Driven Scale" },
      { metric: "Storage", label: "Petabyte-Scale Data Lakes" },
      { metric: "Observability", label: "Full-Stack Datadog / Prometheus" }
    ],
    pillars: [
      { title: "Seamless Cloud Migration", desc: "Zero-data-loss lift-and-shift or containerized modernization of enterprise workloads." },
      { title: "Automated Self-Healing", desc: "Kubernetes operators and health checks that recover from underlying hardware faults automatically." }
    ]
  },
  "capabilities/cloud-consulting": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Strategy",
    title: "Cloud Consulting & Migration",
    subtitle: "Unbiased cloud roadmap planning, TCO reduction, and vendor evaluation for enterprise leaders.",
    description: "Navigate the complexities of public, hybrid, and sovereign cloud deployments with certified cloud strategists who prioritize your business goals.",
    highlights: [
      { metric: "35%", label: "Average TCO Reduction" },
      { metric: "Risk-Free", label: "Phased Migration Framework" },
      { metric: "Compliance", label: "HIPAA, PCI-DSS, GDPR Ready" },
      { metric: "Zero Lock-In", label: "Open Container Standards" }
    ],
    pillars: [
      { title: "Workload Readiness Audits", desc: "Detailed dependency mapping to ensure applications migrate without runtime failures." },
      { title: "Sovereign Cloud Advisory", desc: "Designing on-premise and local-region architectures complying with strict regional data residency laws." }
    ]
  },
  "capabilities/network-services": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Connectivity",
    title: "Network Services & SDN",
    subtitle: "Low-latency software-defined networks, 5G enterprise slices, and edge gateway architectures.",
    description: "Connect branch offices, data centers, and multi-cloud regions with intelligent routing, automated traffic shaping, and zero-trust tunnels.",
    highlights: [
      { metric: "< 5ms", label: "Edge Gateway Latency" },
      { metric: "SD-WAN", label: "Intelligent Dynamic Routing" },
      { metric: "End-to-End", label: "WireGuard & IPsec Encryption" },
      { metric: "99.999%", label: "Backbone Availability" }
    ],
    pillars: [
      { title: "Software-Defined WAN", desc: "Consolidating costly MPLS circuits into agile, secure internet-based mesh networks." },
      { title: "Edge Gateway Management", desc: "Managing low-power IoT gateways and edge computing clusters in manufacturing and logistics hubs." }
    ]
  },
  "capabilities/cyber-security": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Cyber Defense",
    title: "Cyber Security & Zero Trust",
    subtitle: "Hardening enterprise surfaces with defensive architecture, automated threat detection, and continuous compliance.",
    description: "Defend your core assets against ransomware, unauthorized exfiltration, and supply-chain vulnerabilities with proactive, military-grade security engineering.",
    highlights: [
      { metric: "24/7", label: "SOC Telemetry & Incident Response" },
      { metric: "Zero Trust", label: "Microsegmentation Architecture" },
      { metric: "Pen-Testing", label: "Continuous Red-Team Auditing" },
      { metric: "Compliant", label: "SOC 2, ISO 27001, HIPAA" }
    ],
    pillars: [
      { title: "Identity & Access Management", desc: "Least-privilege role-based access control with biometric multi-factor authentication and session auditing." },
      { title: "Runtime Threat Protection", desc: "eBPF-powered kernel monitoring detecting anomalous system calls in production containers." }
    ]
  },
  "capabilities/engineering-services": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "R&D",
    title: "Product Engineering Services",
    subtitle: "Turning breakthrough concepts into market-defining digital products with dedicated engineering squads.",
    description: "From product discovery and UX prototyping to scalable backend architecture, we operate as an elite engineering extension of your product team.",
    highlights: [
      { metric: "MVP", label: "Launched in Under 8 Weeks" },
      { metric: "Agile", label: "Two-Week Sprint Cycles" },
      { metric: "Full IP", label: "100% Client Ownership" },
      { metric: "Elastic", label: "Scale Teams on Demand" }
    ],
    pillars: [
      { title: "User Experience Architecture", desc: "Design systems and interactive wireframes built on comprehensive user journey research." },
      { title: "Robust API Ecosystems", desc: "RESTful, GraphQL, and webhook interfaces documented with interactive OpenAPI specifications." }
    ]
  },
  "capabilities/data-analytics": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Big Data",
    title: "Data Analytics & Modern Data Stack",
    subtitle: "Transforming raw data streams into real-time decision intelligence, predictive models, and executive dashboards.",
    description: "We build modern data lakes and ETL pipelines using Snowflake, Databricks, dbt, Apache Kafka, and ClickHouse to power instant business analytics.",
    highlights: [
      { metric: "Real-Time", label: "Sub-Second Ingestion Pipelines" },
      { metric: "Petabytes", label: "Data Lake Scale" },
      { metric: "dbt & SQL", label: "Version-Controlled Modeling" },
      { metric: "BI Ready", label: "Tableau, PowerBI & Custom Dashboards" }
    ],
    pillars: [
      { title: "Unified Data Warehousing", desc: "Consolidating fragmented silos into single-source-of-truth analytical warehouses." },
      { title: "Streaming Analytics", desc: "Real-time event processing for fraud detection, dynamic pricing, and inventory updates." }
    ]
  },
  "capabilities/artificial-intelligence": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "AI Systems",
    title: "Enterprise Artificial Intelligence & ML",
    subtitle: "Deploying custom foundation models, semantic search engines, and automated predictive intelligence.",
    description: "Empower your workforce with custom fine-tuned LLMs, computer vision algorithms, and predictive ML models deployed on private, air-gapped infrastructure.",
    highlights: [
      { metric: "RAG & LLM", label: "Enterprise Knowledge Retrieval" },
      { metric: "Private GPU", label: "Cost-Optimized Cluster Orchestration" },
      { metric: "Multi-Modal", label: "Text, Audio, Image & Video" },
      { metric: "Guardrails", label: "Strict Safety & Compliance Filtering" }
    ],
    pillars: [
      { title: "Agentic AI Workflows", desc: "Self-healing autonomous agents that reason across complex business documents and automate decisions." },
      { title: "MLOps Pipeline", desc: "Automated model retraining, drift detection, and canary rollouts in production." }
    ]
  },
  "capabilities/digital-enterprise-applications": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Ecosystems",
    title: "Digital Enterprise Applications",
    subtitle: "Implementing, customizing, and scaling core enterprise systems across Microsoft, SAP, Oracle, and Salesforce.",
    description: "Maximize ROI on your enterprise software suite. We build bespoke connectors, automated workflows, and modern UI layers on top of traditional ERP and CRM stacks.",
    highlights: [
      { metric: "SAP / Oracle", label: "Certified Integration Specialists" },
      { metric: "Salesforce", label: "Apex & Lightning Web Components" },
      { metric: "ServiceNow", label: "Custom ITIL & ITSM Automation" },
      { metric: "Microsoft", label: "Dynamics 365 & Power Platform" }
    ],
    pillars: [
      { title: "Seamless Data Sync", desc: "Bi-directional real-time synchronization between CRM, billing, inventory, and support systems." },
      { title: "Modern Headless UIs", desc: "Replacing clunky ERP screens with blisteringly fast, custom web interfaces tailored for staff." }
    ]
  },
  "capabilities/business-process-services": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Operations",
    title: "Business Process Services (BPS)",
    subtitle: "Tech-enabled operations that blend automation with specialized human-in-the-loop oversight.",
    description: "Scale your back-office operations with high accuracy and reduced overhead across finance, compliance, content moderation, and customer support.",
    highlights: [
      { metric: "60%", label: "Operational Cost Reduction" },
      { metric: "24/7/365", label: "Multilingual Global Delivery" },
      { metric: "99.8%", label: "Strict Quality Accuracy" },
      { metric: "Audited", label: "ISO and SOC Certified Workflows" }
    ],
    pillars: [
      { title: "Finance & Accounting Ops", desc: "Automating accounts payable, reconciliation, and audit reporting with machine learning." },
      { title: "Customer Experience Management", desc: "AI-assisted omnichannel support teams resolving customer tickets with empathy and speed." }
    ]
  },
  "capabilities/experience-services": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "UX & UI",
    title: "Digital Experience & Design Services",
    subtitle: "Creating immersive, accessible, and high-converting user interfaces for web and mobile.",
    description: "World-class software requires world-class product design. Our product designers combine behavioral psychology with brand aesthetics to craft engaging digital products.",
    highlights: [
      { metric: "Figma", label: "Component-Driven Design Systems" },
      { metric: "WCAG AAA", label: "Accessibility Compliance" },
      { metric: "Micro-Animations", label: "Fluid Framer Motion Delight" },
      { metric: "A/B Tested", label: "Conversion Rate Optimization" }
    ],
    pillars: [
      { title: "Design Systems Engineering", desc: "Creating living, reusable React component libraries that keep brand consistency across dozens of web apps." },
      { title: "User Research & Usability", desc: "Conducting user testing, heat-mapping, and journey audits to eliminate friction points." }
    ]
  },
  "capabilities/gcc": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Global Teams",
    title: "Global Capability Centers (GCC)",
    subtitle: "Setting up high-performance offshore engineering hubs in India with seamless operational governance.",
    description: "Accelerate your global talent strategy. SkyWeb helps multinational enterprises establish, staff, and manage high-velocity GCCs in Hyderabad with turn-key efficiency.",
    highlights: [
      { metric: "IIT Talent", label: "Access to Top Engineering Grads" },
      { metric: "Turnkey", label: "Infrastructure, HR, Payroll & Legal" },
      { metric: "Zero Risk", label: "Transparent Cost-Plus Model" },
      { metric: "IP Protected", label: "100% Dedicated Private Facility" }
    ],
    pillars: [
      { title: "Build-Operate-Transfer (BOT)", desc: "We build your offshore engineering center from scratch and transfer full ownership when you are ready." },
      { title: "Cultural Alignment", desc: "Integrating your global engineering methodologies, code standards, and sprint cadences seamlessly." }
    ]
  },
  "capabilities/sustainability-services": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "ESG Tech",
    title: "Sustainability & Carbon Intelligence",
    subtitle: "Enterprise ESG reporting software, supply-chain carbon tracking, and energy optimization.",
    description: "Turn compliance requirements into competitive advantage with automated greenhouse gas tracking, energy sensor ingestion, and regulatory reporting.",
    highlights: [
      { metric: "Automated", label: "Scope 1, 2, and 3 Carbon Auditing" },
      { metric: "CSRD Ready", label: "European Union Regulatory Compliance" },
      { metric: "IoT Ingestion", label: "Real-Time Factory Sensor Metrics" },
      { metric: "Actionable", label: "Automated Carbon Reduction Roadmap" }
    ],
    pillars: [
      { title: "ESG Data Fabric", desc: "Aggregating utility bills, shipping manifests, and cloud invoices into verified carbon ledgers." },
      { title: "Supply Chain Auditing", desc: "Tracking vendor carbon disclosures and scoring suppliers for ethical procurement." }
    ]
  },
  "capabilities/products-platforms": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "IP & Products",
    title: "Products & Modular Platforms",
    subtitle: "Accelerating enterprise delivery with pre-built, production-tested software accelerators.",
    description: "Don't build commodity components from scratch. SkyWeb's proprietary platforms—including Nano Profiles (smart contactless identity at nanoprofiles.com) and battle-tested libraries for auth, payment routing, and AI orchestration—cut development timelines in half.",
    highlights: [
      { metric: "60%", label: "Faster Time-to-Market" },
      { metric: "Battle-Tested", label: "Vetted on 100M+ API Calls" },
      { metric: "Customizable", label: "Full Source Code Provided" },
      { metric: "Audited", label: "Pre-Certified for Security Compliance" }
    ],
    pillars: [
      { title: "Nano Profiles™ Ecosystem", desc: "Contactless smart digital identity platform for schools, restaurants, artists, and professionals (nanoprofiles.com)." },
      { title: "SkyAuth Enterprise", desc: "Multi-tenant SSO, SAML, and biometric passkey authentication ready in hours." },
      { title: "SkyStream Event Gateway", desc: "High-throughput WebSocket and Kafka event router for real-time applications." }
    ]
  },
  "capabilities/nano-profiles": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Smart Identity Platform",
    title: "Nano Profiles™ — Smart Digital Identity Platform",
    subtitle: "One tap. Zero friction. Contactless smart digital identity for schools, restaurants, artists, and professionals.",
    description: "Engineered by SkyWeb IT Solutions Pvt. Ltd., Nano Profiles (nanoprofiles.com) is a flagship contactless digital identity platform built on smart NFC and dynamic QR technology. It transforms physical-to-digital interactions by instantly delivering rich, verified, mobile-optimized profiles to any smartphone without requiring app downloads. From student ID badges and contactless dining menus to interactive artist showcases and professional networking cards, Nano Profiles enables organizations and individuals to connect effortlessly with trust.",
    externalUrl: "https://nanoprofiles.com",
    highlights: [
      { metric: "One Tap", label: "Instant Contactless Access" },
      { metric: "Zero App", label: "Works in Any Mobile Browser" },
      { metric: "4 Verticals", label: "Schools, Dining, Artists & Pros" },
      { metric: "100% Cloud", label: "Encrypted & Live Verified" }
    ],
    pillars: [
      { title: "Smart Student Identity & Campus Badges", desc: "Contactless digital student ID cards for schools and universities featuring tamper-proof identity verification, emergency contacts, and campus safety logs." },
      { title: "Restaurant Menus & Contactless Billing", desc: "Interactive dining portals enabling restaurant guests to tap to view updated digital menus, explore chef specials, and review itemized tabs directly from their phones." },
      { title: "The Artist Showcase & Creative Portfolios", desc: "Dedicated micro-galleries and exhibition portfolios designed for visual artists, micro-sculptors, and illustrators to showcase artwork, archives, and social profiles." },
      { title: "Professional Tap-to-Share Identity", desc: "Next-generation digital business cards featuring one-tap contact downloads (.vcf), portfolio links, custom themes, and frictionless professional networking." }
    ]
  },
  "capabilities/nano": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Smart Identity Platform",
    title: "Nano Profiles™ — Smart Digital Identity Platform",
    subtitle: "One tap. Zero friction. Contactless smart digital identity for schools, restaurants, artists, and professionals.",
    description: "Engineered by SkyWeb IT Solutions Pvt. Ltd., Nano Profiles (nanoprofiles.com) is a flagship contactless digital identity platform built on smart NFC and dynamic QR technology. It transforms physical-to-digital interactions by instantly delivering rich, verified, mobile-optimized profiles to any smartphone without requiring app downloads. From student ID badges and contactless dining menus to interactive artist showcases and professional networking cards, Nano Profiles enables organizations and individuals to connect effortlessly with trust.",
    externalUrl: "https://nanoprofiles.com",
    highlights: [
      { metric: "One Tap", label: "Instant Contactless Access" },
      { metric: "Zero App", label: "Works in Any Mobile Browser" },
      { metric: "4 Verticals", label: "Schools, Dining, Artists & Pros" },
      { metric: "100% Cloud", label: "Encrypted & Live Verified" }
    ],
    pillars: [
      { title: "Smart Student Identity & Campus Badges", desc: "Contactless digital student ID cards for schools and universities featuring tamper-proof identity verification, emergency contacts, and campus safety logs." },
      { title: "Restaurant Menus & Contactless Billing", desc: "Interactive dining portals enabling restaurant guests to tap to view updated digital menus, explore chef specials, and review itemized tabs directly from their phones." },
      { title: "The Artist Showcase & Creative Portfolios", desc: "Dedicated micro-galleries and exhibition portfolios designed for visual artists, micro-sculptors, and illustrators to showcase artwork, archives, and social profiles." },
      { title: "Professional Tap-to-Share Identity", desc: "Next-generation digital business cards featuring one-tap contact downloads (.vcf), portfolio links, custom themes, and frictionless professional networking." }
    ]
  },
  "capabilities/hashtalks": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Coming Soon • Platform Spotlight",
    title: "HashTalks — Real-Time Developer & Creator Communication",
    subtitle: "Next-generation topic-driven conversations, real-time channels, and collaborative knowledge feeds for tech squads.",
    description: "HashTalks is an upcoming communication platform currently being engineered by SkyWeb IT Solutions. Designed to combine instant low-latency messaging, topic-based discussion streams, and developer-first integrations, HashTalks reimagines how modern communities collaborate, exchange technical insights, and build together in decentralized and enterprise ecosystems.",
    highlights: [
      { metric: "Coming Soon", label: "Beta Launch Under Development" },
      { metric: "Real-Time", label: "Sub-Millisecond Message Delivery" },
      { metric: "Zero Lag", label: "High-Concurrency WebSocket Fabric" },
      { metric: "E2E Secure", label: "Encrypted Squad & Topic Channels" }
    ],
    pillars: [
      { title: "Topic-Centric Channels & Hashtag Feeds", desc: "Organized streams and contextual hashtag indexing for clean knowledge retention, team focus, and searchable discussions." },
      { title: "Developer Squad Collaboration", desc: "Seamless code snippet highlighting, repository webhooks, and integrated CI/CD bot alerts engineered directly into channels." },
      { title: "High-Concurrency Streaming Architecture", desc: "Built with resilient microservices and distributed message brokers for instant worldwide synchronization without bottlenecks." },
      { title: "Privacy-Preserving Infrastructure", desc: "End-to-end encrypted rooms, granular permission tiers, and zero third-party tracking or intrusive advertising." }
    ]
  },
  "capabilities/artube": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Coming Soon • Media & Creative Platform",
    title: "ArTube — Dedicated Video & Creative Sanctuary for Artists",
    subtitle: "A high-fidelity digital media and streaming platform engineered exclusively for visual artists, animators, and creative storytellers.",
    description: "ArTube is SkyWeb IT Solutions' flagship creative media initiative designed around the unique demands of visual creators, digital sculptors, illustrators, and fine-art studios. Free from algorithmic noise and destructive compression artifacts, ArTube provides pristine exhibition showcases, deep artist profiles, behind-the-scenes studios, and direct community patronage.",
    highlights: [
      { metric: "Coming Soon", label: "Early Creator Access Opening Soon" },
      { metric: "4K Lossless", label: "Studio-Grade Compression Pipelines" },
      { metric: "Zero Ads", label: "Art-First, Creator-Respecting Experience" },
      { metric: "Patronage", label: "Direct Audience Support & Value Flows" }
    ],
    pillars: [
      { title: "High-Fidelity Media Streaming", desc: "Proprietary transcoding workflows and distributed edge CDNs that preserve exact color palettes, brushstrokes, and fine visual textures." },
      { title: "Dedicated Creator Galleries", desc: "Curated portfolio spaces where visual artists exhibit exhibitions, video journals, masterclasses, and project process archives." },
      { title: "Community Patronage & Support", desc: "Direct supporter engagement, transparent patron memberships, and frictionless digital art acquisitions without algorithmic intermediaries." },
      { title: "Intellectual Property Protection", desc: "Cryptographic digital watermarking, creator rights management, and original provenance verification embedded in every upload." }
    ]
  },
  "capabilities/art-coin": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "Coming Soon • Digital Value & Creator Economy",
    title: "Art Coin — Decentralized Value Engine for Creative Ecosystems",
    subtitle: "Empowering artists, collectors, and patrons with frictionless, low-fee digital value exchange and immutable royalty provenance.",
    description: "Art Coin is SkyWeb's upcoming digital value and reward layer designed to power creative economies, micro-transactions, and verified creator patronage across platforms including ArTube and Nano Profiles. Built on high-throughput, low-latency ledger protocols, Art Coin ensures artists receive instant, transparent compensation and ongoing royalties for their craft.",
    highlights: [
      { metric: "Coming Soon", label: "Token Launch Under Active Development" },
      { metric: "Near-Zero", label: "Micro-Fee Infrastructure" },
      { metric: "100% Provenance", label: "Immutable Creator Royalties" },
      { metric: "Ecosystem Native", label: "Integrated with ArTube & Nano Profiles" }
    ],
    pillars: [
      { title: "Automated Secondary Royalties", desc: "Smart contracts guaranteeing that artists earn perpetual returns whenever artwork, digital collectibles, or passes change hands." },
      { title: "Micro-Tipping & Patron Badges", desc: "Frictionless tipping and community patron badges across artist livestreams, tutorials, and showcases." },
      { title: "Frictionless On-Ramp & Off-Ramp", desc: "Intuitive fiat-to-token bridging ensuring non-technical collectors and patrons can support their favorite creators effortlessly." },
      { title: "Eco-Friendly Consensus Architecture", desc: "Engineered on modern energy-efficient consensus mechanisms minimizing environmental impact and power consumption." }
    ]
  },
  "capabilities/makers-lab": {
    category: "Capabilities",
    categoryHref: "/capabilities",
    badge: "R&D Lab",
    title: "Innovation, R&D - Makers Lab",
    subtitle: "Exploring the bleeding edge of quantum computing, spatial computing, autonomous agents, and bio-informatics.",
    description: "Makers Lab is SkyWeb's dedicated internal research incubator where our PhDs and systems engineers build experimental prototypes for the next decade.",
    highlights: [
      { metric: "Active", label: "Patents & Research Papers" },
      { metric: "Sandbox", label: "Enterprise Innovation Prototyping" },
      { metric: "Frontier", label: "Quantum & Spatial Computing" },
      { metric: "Collaborative", label: "University Research Fellowships" }
    ],
    pillars: [
      { title: "Quantum Algorithms", desc: "Simulating quantum annealing for complex supply-chain logistics and portfolio optimization." },
      { title: "Spatial Computing Apps", desc: "Industrial digital twins and augmented reality interfaces for precision manufacturing." }
    ]
  },

  // ================= INDUSTRIES SUBPAGES =================
  "industries/banking-financial": {
    category: "Industries",
    categoryHref: "/industries",
    badge: "Fintech & Banking",
    title: "Banking & Financial Services",
    subtitle: "High-frequency payment switches, automated fraud mitigation, and core banking modernization.",
    description: "We engineer resilient financial technology infrastructure that processes millions of transactions with microsecond latency, zero downtime, and strict regulatory compliance.",
    highlights: [
      { metric: "10M+", label: "Daily Transactions Processed" },
      { metric: "< 25ms", label: "Payment Gateway Latency" },
      { metric: "PCI-DSS Level 1", label: "Certified Security" },
      { metric: "99.999%", label: "High Availability SLA" }
    ],
    pillars: [
      { title: "Modern Payment Switches", desc: "Distributed ledger and multi-rail payment routing across credit cards, UPI, SWIFT, and local clearinghouses." },
      { title: "Real-Time Fraud Detection", desc: "In-flight machine learning inference evaluating transaction risk in under 12 milliseconds." }
    ]
  },
  "industries/communications": {
    category: "Industries",
    categoryHref: "/industries",
    badge: "Telecom",
    title: "Communications & Telco",
    subtitle: "5G network slicing, BSS/OSS modernization, and edge compute orchestration for telecom giants.",
    description: "Empowering telecommunications providers to transition from connectivity pipes into agile digital platform ecosystems.",
    highlights: [
      { metric: "50M+", label: "Subscribers Managed on Core BSS" },
      { metric: "Zero Gravity", label: "Cloud-Native Telco Architecture" },
      { metric: "Open RAN", label: "Decoupled Radio Access Network" },
      { metric: "Real-Time", label: "Network Telemetry & Self-Healing" }
    ],
    pillars: [
      { title: "Digital BSS/OSS Modernization", desc: "Replacing legacy billing engines with real-time, cloud-native event-driven charging platforms." },
      { title: "Network Function Virtualization", desc: "Orchestrating containerized network functions on private edge computing infrastructure." }
    ]
  },
  "industries/education": {
    category: "Industries",
    categoryHref: "/industries",
    badge: "EdTech",
    title: "Education & EdTech",
    subtitle: "Adaptive learning algorithms, remote examination proctoring, and scalable campus portals.",
    description: "Transforming how universities and EdTech platforms teach, evaluate, and scale learning through personalized AI tutoring and video delivery.",
    highlights: [
      { metric: "2M+", label: "Active Student Learners" },
      { metric: "Adaptive AI", label: "Dynamic Curriculum Pacing" },
      { metric: "Low Bandwidth", label: "Optimized for Emerging Markets" },
      { metric: "Automated", label: "Plagiarism & Proctoring Engines" }
    ],
    pillars: [
      { title: "Adaptive Learning Systems", desc: "Dynamic knowledge graphs that adapt question difficulty in real time based on student mastery." },
      { title: "Scalable Examination Platforms", desc: "Conducting concurrent exams for 100,000+ students with automated AI anti-cheating verification." }
    ]
  },
  "industries/energy-utilities": {
    category: "Industries",
    categoryHref: "/industries",
    badge: "Energy",
    title: "Energy & Utilities",
    subtitle: "Smart grid IoT telemetry, predictive pipeline maintenance, and renewable distribution management.",
    description: "Bridging physical industrial assets with real-time digital twins to maximize energy output and prevent catastrophic grid failures.",
    highlights: [
      { metric: "500k+", label: "Smart Meters Monitored" },
      { metric: "35%", label: "Reduction in Unplanned Outages" },
      { metric: "IoT Ingestion", label: "Edge Sensor Processing" },
      { metric: "Microgrid", label: "Renewable Balancing Algorithms" }
    ],
    pillars: [
      { title: "Predictive Asset Maintenance", desc: "Analyzing acoustic and vibration telemetry from turbines to predict mechanical failure weeks in advance." },
      { title: "Smart Grid Balancing", desc: "Dynamic load-shedding and battery storage orchestration during extreme weather demand spikes." }
    ]
  },
  "industries/healthcare-lifesciences": {
    category: "Industries",
    categoryHref: "/industries",
    badge: "Healthcare",
    title: "Healthcare & Life Sciences",
    subtitle: "HIPAA-compliant telemedicine platforms, clinical trial data analytics, and diagnostic AI.",
    description: "Engineering secure, human-centered healthcare technologies that improve patient outcomes while protecting sensitive medical records.",
    highlights: [
      { metric: "HIPAA & GDPR", label: "100% Medical Data Compliance" },
      { metric: "EHR Sync", label: "FHIR / HL7 Interoperability" },
      { metric: "Diagnostic AI", label: "Radiology & Pathology Models" },
      { metric: "Sub-Second", label: "Patient Record Retrieval" }
    ],
    pillars: [
      { title: "Clinical Data Interoperability", desc: "Unifying fragmented hospital records into FHIR-compliant APIs for seamless physician access." },
      { title: "Telehealth Platforms", desc: "Encrypted, high-definition video consultation suites integrated with digital prescription engines." }
    ]
  },
  "industries/hi-tech": {
    category: "Industries",
    categoryHref: "/industries",
    badge: "Technology",
    title: "Hi Tech & Semiconductor",
    subtitle: "Silicon design telemetry, automated software supply-chains, and developer tool ecosystems.",
    description: "Partnering with leading silicon vendors, software pioneers, and hardware OEMs to accelerate high-velocity product releases.",
    highlights: [
      { metric: "DevOps", label: "High-Frequency CI/CD Pipelines" },
      { metric: "Hardware-in-Loop", label: "Automated Firmware Testing" },
      { metric: "Zero Defect", label: "Rigorous Code Verification" },
      { metric: "Global", label: "Distributed Engineering Teams" }
    ],
    pillars: [
      { title: "Firmware CI/CD Infrastructure", desc: "Automating cross-compilation and automated flash testing on physical hardware test benches." },
      { title: "Developer Platform Engineering", desc: "Building internal developer portals that enable engineering teams to spin up cloud environments in seconds." }
    ]
  },
  "industries/insurance": {
    category: "Industries",
    categoryHref: "/industries",
    badge: "Insurtech",
    title: "Insurance & Insurtech",
    subtitle: "Automated claims adjudication, dynamic risk underwriting, and policyholder portals.",
    description: "Modernizing traditional insurance operations with instant algorithmic pricing, mobile claims photo appraisal, and fraud prevention.",
    highlights: [
      { metric: "3 Mins", label: "Instant Claims Settlement" },
      { metric: "45%", label: "Reduction in Loss Adjustment Expense" },
      { metric: "Computer Vision", label: "Automated Damage Appraisal" },
      { metric: "Actuarial ML", label: "Dynamic Risk Rating Models" }
    ],
    pillars: [
      { title: "Instant Vision Claims", desc: "Computer vision models that analyze car accident photos to assess repair costs and issue instant payouts." },
      { title: "Parametric Insurance Engines", desc: "Smart contracts that automatically pay out travel or weather delay claims without paperwork." }
    ]
  },
  "industries/manufacturing": {
    category: "Industries",
    categoryHref: "/industries",
    badge: "Industry 4.0",
    title: "Smart Manufacturing",
    subtitle: "Shop floor IoT integration, computer vision quality inspection, and supply-chain digital twins.",
    description: "Empowering smart factories to achieve higher yield, lower scrap rates, and complete end-to-end supply chain transparency.",
    highlights: [
      { metric: "Industry 4.0", label: "Connected Factory IoT" },
      { metric: "99.8%", label: "Defect Detection Accuracy" },
      { metric: "Real-Time", label: "OEE Manufacturing Dashboards" },
      { metric: "Automated", label: "Warehouse AGV Fleet Control" }
    ],
    pillars: [
      { title: "Automated Optical Inspection", desc: "High-speed camera vision inspection detecting micrometric manufacturing defects on moving assembly lines." },
      { title: "Supply Chain Resilience", desc: "Predictive inventory models factoring in global shipping delays and raw material pricing." }
    ]
  },
  "industries/media-entertainment": {
    category: "Industries",
    categoryHref: "/industries",
    badge: "Media Tech",
    title: "Media & Entertainment",
    subtitle: "Ultra-low-latency video streaming, digital rights management, and dynamic ad-insertion backends.",
    description: "Delivering broadcast-quality video and interactive streaming experiences to millions of concurrent viewers worldwide.",
    highlights: [
      { metric: "4K 60fps", label: "Adaptive Bitrate Streaming" },
      { metric: "< 2s", label: "Glass-to-Glass Live Latency" },
      { metric: "Global CDN", label: "Distributed Edge Caching" },
      { metric: "Server-Side", label: "Targeted Ad Insertion (SSAI)" }
    ],
    pillars: [
      { title: "Live Event Video Pipelines", desc: "Auto-scaling transcoding infrastructure handling millions of concurrent viewers during live sports events." },
      { title: "Content Discovery & Recommendation", desc: "Collaborative filtering and vector search algorithms personalizing viewing feeds." }
    ]
  },
  "industries/oil-gas": {
    category: "Industries",
    categoryHref: "/industries",
    badge: "Energy",
    title: "Oil & Gas Engineering",
    subtitle: "Wellhead IoT monitoring, seismic data processing, and worker safety computer vision.",
    description: "Applying advanced computing to hazardous operational environments to increase extraction efficiency and ensure worker safety.",
    highlights: [
      { metric: "Remote", label: "Offshore Platform Telemetry" },
      { metric: "Seismic AI", label: "Geological Reservoir Modeling" },
      { metric: "Safety Vision", label: "PPE & Hazard Zone Detection" },
      { metric: "Zero Lost Time", label: "Incident Prevention" }
    ],
    pillars: [
      { title: "Offshore Edge Computing", desc: "Deploying ruggedized servers that process sensor data locally on oil rigs when satellite links are degraded." },
      { title: "Automated Compliance Auditing", desc: "Real-time safety cameras that alert control rooms when personnel enter hazardous pipeline perimeters." }
    ]
  },
  "industries/private-equity": {
    category: "Industries",
    categoryHref: "/industries",
    badge: "Private Capital",
    title: "Private Equity & M&A Technology",
    subtitle: "Technical due diligence, carve-out modernization, and rapid EBITDA expansion through digital engineering.",
    description: "Helping private equity sponsors de-risk technology investments, accelerate portfolio company modernizations, and maximize exit multiples.",
    highlights: [
      { metric: "14 Days", label: "Rapid Technical Due Diligence" },
      { metric: "Carve-Out", label: "Zero-Downtime IT Separation" },
      { metric: "EBITDA+", label: "Technology Value Creation" },
      { metric: "Exit Ready", label: "Clean Code & IP Certification" }
    ],
    pillars: [
      { title: "Technical Code Audits", desc: "Deep architectural and security inspections identifying hidden technical debt before deal close." },
      { title: "Carve-Out IT Standup", desc: "Rapidly decoupling enterprise applications and building independent, modern cloud infrastructures for divested entities." }
    ]
  },
  "industries/professional-services": {
    category: "Industries",
    categoryHref: "/industries",
    badge: "Enterprise Services",
    title: "Professional Services & Legal Tech",
    subtitle: "Document intelligence, automated contract lifecycle management, and practice management portals.",
    description: "Empowering law firms, accounting practices, and consultancies to automate routine paperwork and deliver higher-value client counsel.",
    highlights: [
      { metric: "80%", label: "Faster Contract Review" },
      { metric: "Encrypted", label: "Client Vault & Privileged Storage" },
      { metric: "Automated", label: "Timesheet & Billing Orchestration" },
      { metric: "Search", label: "Semantic Precedent Search" }
    ],
    pillars: [
      { title: "Semantic Document Extraction", desc: "AI models parsing thousands of legal clauses and flagging non-standard liabilities in seconds." },
      { title: "Secure Client Portals", desc: "Zero-knowledge encrypted vaults for confidential data exchange between partners and clients." }
    ]
  },
  "industries/retail-consumer": {
    category: "Industries",
    categoryHref: "/industries",
    badge: "E-Commerce",
    title: "Retail & Consumer Goods",
    subtitle: "Headless e-commerce, real-time omnichannel inventory, and personalized recommendation engines.",
    description: "Creating unified retail shopping experiences across digital storefronts, native apps, and physical point-of-sale terminals.",
    highlights: [
      { metric: "Sub-Second", label: "Instant Page Load Time" },
      { metric: "Omnichannel", label: "Real-Time Inventory Sync" },
      { metric: "+32%", label: "Average Order Value with AI" },
      { metric: "Zero Downtime", label: "Surge Traffic Handling" }
    ],
    pillars: [
      { title: "Headless E-Commerce Stacks", desc: "Decoupled Next.js frontends powered by Shopify Plus, commercetools, or custom Go microservices." },
      { title: "Omnichannel Cart & Loyalty", desc: "Unified customer profiles that reward shoppers whether buying online or in brick-and-mortar stores." }
    ]
  },
  "industries/travel-logistics": {
    category: "Industries",
    categoryHref: "/industries",
    badge: "Mobility",
    title: "Travel, Transportation & Logistics",
    subtitle: "Fleet route optimization, real-time tracking, and automated passenger reservation systems.",
    description: "Optimizing the movement of goods and passengers with algorithmic route scheduling, warehouse automation, and dynamic booking.",
    highlights: [
      { metric: "22%", label: "Fuel Cost Savings via AI Routing" },
      { metric: "Live GPS", label: "Real-Time Fleet Telemetry" },
      { metric: "Booking API", label: "Millions of Flight Searches / Sec" },
      { metric: "Cold-Chain", label: "Sensor-Monitored Cargo Delivery" }
    ],
    pillars: [
      { title: "Algorithmic Route Optimization", desc: "Dynamic dispatching factoring in traffic, fuel prices, driver rest mandates, and delivery windows." },
      { title: "Passenger Booking Engines", desc: "Scalable reservation and seat selection platforms that stay responsive under high holiday demand." }
    ]
  },

  // ================= INSIGHTS SUBPAGES =================
  "insights/case-studies": {
    category: "Insights",
    categoryHref: "/insights",
    badge: "Proof of Work",
    title: "Engineering Case Studies",
    subtitle: "Deep technical breakdowns of how we architected, deployed, and scaled systems for world-class clients.",
    description: "Explore our architectural diagrams, technology selections, performance benchmarks, and post-mortem metrics across complex enterprise transformations.",
    highlights: [
      { metric: "40+ Studies", label: "Published Engineering Specs" },
      { metric: "Open Specs", label: "Verified Architecture Schemas" },
      { metric: "100%", label: "Production-Verified Deployments" },
      { metric: "ROI Metrics", label: "Detailed Cost & Latency Data" }
    ],
    pillars: [
      { title: "Fintech Core Modernization", desc: "How we migrated an established bank's core transactional ledger from an on-premise mainframe to a distributed Go architecture." },
      { title: "Automated AI Claims Platform", desc: "Architecting a multi-agent computer vision system that automated 85% of insurance claim adjudications in South Africa." }
    ]
  },
  "insights/views": {
    category: "Insights",
    categoryHref: "/insights",
    badge: "Perspectives",
    title: "Views & Architectural Opinions",
    subtitle: "Uncompromising technical viewpoints from our principal architects on software systems and artificial intelligence.",
    description: "Read our engineering essays on distributed state management, the true cost of microservices, why most RAG implementations fail, and green computing.",
    highlights: [
      { metric: "Original", label: "Authoritative Engineering Essays" },
      { metric: "No Hype", label: "Empirically Tested Technology" },
      { metric: "Open Dialogue", label: "Contributing to Developer Discourse" },
      { metric: "Bi-Weekly", label: "New Technical Deep Dives" }
    ],
    pillars: [
      { title: "The Fallacy of Premature Microservices", desc: "Why starting with a modular monolith saves millions and when you actually need to break boundaries." },
      { title: "Deterministic AI Systems", desc: "Why enterprise applications must separate probabilistic LLMs from transactional state machines." }
    ]
  },
  "insights/whitepapers": {
    category: "Insights",
    categoryHref: "/insights",
    badge: "Research",
    title: "Technical Whitepapers & Research",
    subtitle: "Peer-reviewed technical research, performance benchmarks, and architectural reference implementations.",
    description: "Download in-depth technical whitepapers covering zero-trust identity federation, real-time streaming topologies, and energy-efficient LLM inference.",
    highlights: [
      { metric: "PDF Downloads", label: "Full Architecture Blueprints" },
      { metric: "Benchmark", label: "Reproducible Test Harnesses" },
      { metric: "Code Samples", label: "Open-Source Accompanying Repos" },
      { metric: "Citations", label: "Academic & Industry Validated" }
    ],
    pillars: [
      { title: "Zero Gravity Architecture Blueprint", desc: "A definitive reference architecture for sub-10ms event-driven systems operating at 1,000,000 requests/sec." },
      { title: "The Enterprise LLM Security Standard", desc: "Protecting proprietary data assets against prompt injections, memory extraction, and poisoning attacks." }
    ]
  },
  "insights/analyst-insights": {
    category: "Insights",
    categoryHref: "/insights",
    badge: "Analyst Coverage",
    title: "Analyst Insights & Market Reports",
    subtitle: "Independent technology analyst commentary, quadrant placements, and market trajectory reports.",
    description: "Understand where enterprise technology is heading with data-backed reports from leading technology research and advisory firms.",
    highlights: [
      { metric: "Gartner & IDC", label: "Featured in Vendor Guides" },
      { metric: "Market Trends", label: "Enterprise Software Spending" },
      { metric: "Forecasts", label: "The Shift to Autonomous IT" },
      { metric: "Benchmarked", label: "Top 5% Delivery Velocity" }
    ],
    pillars: [
      { title: "The Rise of Specialized GCCs", desc: "How international enterprises are achieving 3x engineering leverage by establishing direct hubs in India." },
      { title: "Modern Application Modernization Matrix", desc: "Strategic criteria for deciding between rewrite, refactor, and agentic code translation." }
    ]
  },
  "insights/news": {
    category: "Insights",
    categoryHref: "/insights",
    badge: "Press Room",
    title: "News & Corporate Releases",
    subtitle: "Corporate updates, strategic partner milestones, and technical product announcements.",
    description: "Read official press releases, keynote summaries, and corporate disclosures from SkyWeb's global operations.",
    highlights: [
      { metric: "Official", label: "Press Disclosures & Releases" },
      { metric: "Press Kit", label: "High-Res Brand Assets & Media" },
      { metric: "Spokespeople", label: "Executive Interview Requests" },
      { metric: "Archive", label: "5+ Years of Corporate Milestones" }
    ],
    pillars: [
      { title: "Q2 Financial Performance", desc: "SkyWeb reports record growth in AI and cloud consulting revenue driven by international banking client expansions." },
      { title: "New Global Delivery Center", desc: "Opening of state-of-the-art 500-seat engineering facility in HITEC City, Hyderabad." }
    ]
  },
  "insights/events": {
    category: "Insights",
    categoryHref: "/insights",
    badge: "Events & Meetups",
    title: "Events, Summits & Tech Talks",
    subtitle: "Meet our architects in person at global conferences, developer workshops, and executive roundtables.",
    description: "Join SkyWeb at upcoming industry summits in Dubai, Singapore, London, and Hyderabad. Attend our technical workshops on distributed systems.",
    highlights: [
      { metric: "Keynotes", label: "Global Cloud Conclave 2026" },
      { metric: "Workshops", label: "Hands-on Agentic AI Labs" },
      { metric: "Roundtables", label: "Exclusive CTO Executive Dinners" },
      { metric: "Virtual", label: "Monthly Developer Webinars" }
    ],
    pillars: [
      { title: "Oracle AI World 2026", desc: "SkyWeb is proud to be a Gold Sponsor and keynote presenter on enterprise multi-agent workflows." },
      { title: "Hyderabad Systems Engineering Meetup", desc: "Monthly technical gathering of distributed systems programmers hosted at our engineering campus." }
    ]
  },
  "insights/bank-of-tomorrow": {
    category: "Insights",
    categoryHref: "/insights",
    badge: "Featured Report",
    title: "The Bank of Tomorrow: A Strategic Perspective",
    subtitle: "A comprehensive executive report on the convergence of real-time payments, autonomous AI underwriting, and decentralized identity in commercial banking.",
    description: "How top global financial institutions are restructuring their core ledgers and customer onboarding channels to compete in a borderless, digital-first economy.",
    highlights: [
      { metric: "48 Pages", label: "In-Depth Architectural Analysis" },
      { metric: "12 Banks", label: "Case Study Data Synthesized" },
      { metric: "Blueprint", label: "Composable Banking Topology" },
      { metric: "Free Access", label: "Full PDF Report Download" }
    ],
    pillars: [
      { title: "Composable Banking Cores", desc: "Moving away from proprietary monolithic cores toward open, API-driven transactional micro-engines." },
      { title: "Hyper-Personalized Wealth Management", desc: "Using local LLMs to generate bespoke investment and cash-flow advice for retail and commercial clients." }
    ]
  },
  "insights/zero-gravity-telco": {
    category: "Insights",
    categoryHref: "/insights",
    badge: "Featured White Paper",
    title: "Zero Gravity Telco Architecture™",
    subtitle: "Decoupling hardware and software layers to achieve zero-latency, zero-downtime, and autonomous network operations.",
    description: "This landmark whitepaper details the architectural paradigm shift enabling telecommunication operators to run open, cloud-native BSS/OSS stacks at a fraction of legacy cost.",
    highlights: [
      { metric: "60% Lower", label: "Infrastructure Capex & Opex" },
      { metric: "Cloud Native", label: "Runs on Any Hyperscaler / Bare Metal" },
      { metric: "Deterministic", label: "5G Microsecond Slicing" },
      { metric: "Open Spec", label: "Zero Vendor Proprietary Lock-In" }
    ],
    pillars: [
      { title: "Autonomous Traffic Steering", desc: "Machine learning algorithms that predict cellular congestion and dynamically reroute packets before packet loss occurs." },
      { title: "Unified Customer Identity", desc: "Decentralized subscriber profiles that eliminate billing disputes and support instant eSIM provisioning." }
    ]
  }
};
