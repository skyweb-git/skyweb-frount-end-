import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight,
  Code2, 
  Cpu, 
  Cloud, 
  Rocket, 
  Workflow, 
  Compass, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  FolderGit2, 
  Clock, 
  Calendar
} from 'lucide-react';
import { insightsArticles } from '../data/insightsArticles';
import { NotchedProjectCard } from '../components/ui/notched-project-card';

const coreCapabilities = [
  {
    slug: "application-services",
    number: "01",
    title: "Software Engineering & Application Services",
    shortTitle: "Software Engineering",
    icon: Code2,
    desc: "End-to-end custom software development, responsive full-stack web and mobile systems, API engineering, application modernization, and rigorous quality assurance.",
    keyAreas: [
      "Full-Stack Web & Mobile (React, Node, TS)",
      "RESTful & GraphQL API Engineering",
      "Legacy Codebase Modernization",
      "Automated Testing & Quality Engineering",
      "Performance Tuning & Query Optimization"
    ],
    tags: ["Full-Stack", "API Engineering", "QA & Testing"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    href: "/capabilities/application-services"
  },
  {
    slug: "artificial-intelligence",
    number: "02",
    title: "AI & Machine Learning",
    shortTitle: "AI & Machine Learning",
    icon: Cpu,
    desc: "Practical applied AI solutions including conversational assistants, intelligent document processing (OCR), computer vision, workflow triggers, and customized AI character experiences.",
    keyAreas: [
      "Conversational AI Assistants & Triage",
      "Intelligent Document Processing & OCR",
      "Computer Vision & Background Removal",
      "Workflow & Trigger Automation",
      "Custom Digital Personas & Avatars"
    ],
    tags: ["Applied AI", "Computer Vision", "Automations"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    href: "/capabilities/artificial-intelligence"
  },
  {
    slug: "cloud-infrastructure",
    number: "03",
    title: "Cloud & Infrastructure Services",
    shortTitle: "Cloud & Infrastructure",
    icon: Cloud,
    desc: "Reliable AWS cloud architectures, Linux server configuration, NGINX reverse proxies, GitHub Actions CI/CD automation, database clustering, and observability.",
    keyAreas: [
      "AWS Cloud Setup (EC2, S3, RDS, IAM)",
      "Linux Server Configuration & Hardening",
      "CI/CD Pipeline Automation",
      "Database Connectivity & Auto Backups",
      "Monitoring & Performance Optimization"
    ],
    tags: ["AWS Cloud", "DevOps & CI/CD", "Reliability"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    href: "/capabilities/cloud-infrastructure"
  },
  {
    slug: "products-platforms",
    number: "04",
    title: "Digital Platforms & Product Engineering",
    shortTitle: "Digital Platforms",
    icon: Rocket,
    desc: "Full-lifecycle digital platform engineering spanning multi-tenant SaaS products, creator communities, custom e-commerce systems, and smart contactless digital identity platforms.",
    keyAreas: [
      "Multi-Tenant SaaS Product Architectures",
      "Creator & Community Platforms",
      "Custom E-Commerce & Marketplace Systems",
      "Learning Management Systems (LMS)",
      "Smart Digital Identity (Nano Profiles™)"
    ],
    tags: ["SaaS Products", "E-Commerce", "Nano Profiles™"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    href: "/capabilities/products-platforms"
  },
  {
    slug: "business-technology",
    number: "05",
    title: "Business Technology Solutions",
    shortTitle: "Business Technology",
    icon: Workflow,
    desc: "Tailored business technology solutions including custom CRM software, real-time inventory management, sales tracking dashboards, customer portals, and internal workflow automation.",
    keyAreas: [
      "Custom CRM & Sales Pipeline Systems",
      "Inventory & Multi-Location Stock Tracking",
      "Executive Analytics & Revenue Dashboards",
      "Secure Customer & Partner Portals",
      "Spreadsheet to Database Migration"
    ],
    tags: ["Custom CRM", "Inventory & BI", "Workflows"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    href: "/capabilities/business-technology"
  },
  {
    slug: "experience-services",
    number: "06",
    title: "UI/UX & Experience Engineering",
    shortTitle: "UI/UX & Experience",
    icon: Compass,
    desc: "User-centered UX research, modern enterprise interface design, design systems, clickable prototypes, and pixel-precise responsive frontend engineering.",
    keyAreas: [
      "UX Strategy & User Journey Mapping",
      "Enterprise Admin & Dashboard UI",
      "Design Systems & Token Libraries",
      "Interactive Prototyping in Figma",
      "Accessible, Responsive React Frontends"
    ],
    tags: ["Design Systems", "Prototyping", "UI Engineering"],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    href: "/capabilities/experience-services"
  }
];

const confirmedProjects = [
  {
    title: "ArtArtist",
    category: "Digital Platform",
    tagline: "Creative & Artist Ecosystem Platform",
    desc: "A comprehensive digital platform dedicated to artists, illustrators, and collectors, supporting portfolio showcases, creator discovery, and community interactions.",
    impact: "Provides independent creators with structured digital portfolios and direct audience engagement channels."
  },
  {
    title: "Master Brush",
    category: "Digital Solutions",
    tagline: "Creative-Business Tools & Resources",
    desc: "A specialized platform engineered to deliver design toolkits, creative brush assets, and operational resources tailored for creative studios and digital artists.",
    impact: "Streamlines creative asset delivery with fast web-based preview and frictionless asset downloads."
  },
  {
    title: "Easy BG Remover",
    category: "AI Product",
    tagline: "Automated Image Background Removal",
    desc: "A single-purpose AI-powered computer vision product automating precise image background removal with edge refinement for e-commerce vendors and creators.",
    impact: "Automates repetitive visual asset extraction, processing product images with clean transparent backgrounds."
  },
  {
    title: "Craft Hindustan",
    category: "Digital Commerce",
    tagline: "Artisan Brand & Commerce Platform",
    desc: "A dedicated digital platform connecting regional Indian artisans with global buyers, featuring responsive catalog browsing, artisan attribution, and order pipelines.",
    impact: "Empowers traditional craft communities with direct digital market access and reliable checkout workflows."
  },
  {
    title: "Business Management Systems",
    category: "Enterprise Systems",
    tagline: "Sales Tracking & Operational Workflows",
    desc: "Custom operational software suites consolidating sales pipeline tracking, customer management, inventory control, and multi-department task dispatch into unified dashboards.",
    impact: "Replaces disconnected spreadsheets with centralized relational databases, role-based access, and real-time status visibility."
  },
  {
    title: "AI Character & Automation Initiatives",
    category: "Applied AI",
    tagline: "Assistants & Interactive Avatars",
    desc: "Specialized conversational assistants, intelligent workflow triggers, and interactive digital character experiences built for client platforms and consumer engagement.",
    impact: "Enables 24/7 automated inquiry triage and engaging interactive experiences grounded in structured knowledge bases."
  }
];

const deliveryPhases = [
  {
    phase: "01",
    name: "Discover",
    headline: "Requirements Analysis & Technical Audit",
    desc: "We analyze business requirements, review current workflows and technical debt, evaluate technical feasibility, and define clear success criteria."
  },
  {
    phase: "02",
    name: "Architect",
    headline: "System Blueprint & Data Modeling",
    desc: "We design component boundaries, relational database schemas, API contracts, security protocols, and infrastructure topology before code is written."
  },
  {
    phase: "03",
    name: "Engineer",
    headline: "Agile Development & Code Review",
    desc: "We build features in modular, structured sprints with continuous integration, strict type-checking, pair reviews, and automated unit test coverage."
  },
  {
    phase: "04",
    name: "Deploy",
    headline: "Automated CI/CD & Production Cutover",
    desc: "We validate environments on staging, conduct end-to-end regression tests, and execute zero-downtime production deployments with rollback plans."
  },
  {
    phase: "05",
    name: "Improve",
    headline: "Observability & Iterative Tuning",
    desc: "We monitor telemetry, track error rates, optimize query performance, review infrastructure costs, and evolve features based on real operational data."
  }
];

const technologyStack = [
  {
    group: "Frontend & Mobile",
    technologies: ["React", "TypeScript", "Next.js", "React Native", "Tailwind CSS", "Redux / Zustand"],
    useCase: "Modern responsive web applications, cross-platform mobile apps, and fluid enterprise administrative dashboards."
  },
  {
    group: "Backend & APIs",
    technologies: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL", "Microservices"],
    useCase: "Scalable backend services, structured API contracts, webhook subsystems, and decoupled microservices."
  },
  {
    group: "Cloud & DevOps",
    technologies: ["AWS (EC2, S3, RDS, IAM)", "Docker", "NGINX", "Linux (Ubuntu/Debian)", "GitHub Actions"],
    useCase: "Reliable cloud hosting, automated CI/CD deployment pipelines, reverse proxy routing, and zero-downtime releases."
  },
  {
    group: "Databases & Storage",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis Caching", "Supabase"],
    useCase: "Relational data modeling, ACID transaction safety, in-memory caching layers, and automated backup routines."
  },
  {
    group: "AI & Intelligent Automation",
    technologies: ["OpenAI API", "Claude API", "LangChain", "Tesseract OCR", "OpenCV", "Python FastAPI"],
    useCase: "Context-aware conversational assistants, document OCR extraction, computer vision processing, and automated workflow triggers."
  }
];

const businessValues = [
  {
    title: "Operational Efficiency",
    icon: Zap,
    desc: "Automating routine tasks, standardizing data flows, and eliminating manual spreadsheet tracking to save team hours and accelerate daily execution."
  },
  {
    title: "System Reliability",
    icon: ShieldCheck,
    desc: "Engineering decoupled architectures, automated regression testing, and resilient cloud topologies that maintain stability through traffic fluctuations."
  },
  {
    title: "Long-Term Maintainability",
    icon: Code2,
    desc: "Using strict type systems, clean directory conventions, standard open frameworks, and clear documentation to prevent technical debt and simplify maintenance."
  },
  {
    title: "Scalable Digital Growth",
    icon: Rocket,
    desc: "Building systems on modular, horizontally expandable foundations so organizations can launch new features and onboard users without re-architecting."
  }
];

export default function CapabilitiesPage({ onOpenModal }) {
  useEffect(() => {
    document.title = "Enterprise Technology Capabilities & Services | SkyWeb IT Solutions";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore SkyWeb IT Solutions enterprise capabilities: Software Engineering, Applied AI, Cloud & Infrastructure, Digital Platforms, Business Technology, and UI/UX.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  // Top 3 featured insights
  const featuredInsights = insightsArticles.slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['DM_Sans']">
      
      {/* ================= 1. PREMIUM HERO SECTION (SOLID BLACK & BLUE HEADLINE) ================= */}
      <section className="bg-black text-white pt-36 sm:pt-40 pb-16 sm:pb-24 px-6 sm:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Brand Message Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-950/70 border border-blue-500/40 text-blue-300 mb-6 backdrop-blur-sm">
            <span>Engineering Digital Possibilities.</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-blue-500 max-w-4xl leading-tight mb-6 font-['DM_Sans']">
            End-to-End Technology Solutions for a Connected, Intelligent and Scalable Future.
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg lg:text-xl text-blue-200 max-w-3xl leading-relaxed mb-10 font-normal">
            SkyWeb IT Solutions helps businesses design, build, deploy and evolve digital solutions that improve operations, strengthen technology foundations and create opportunities for growth.
          </p>

          {/* Two CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenModal}
              className="px-8 py-4 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-base font-bold shadow-[0_8px_25px_rgba(0,74,173,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="#core-capabilities"
              className="px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-base font-bold transition-all flex items-center gap-2"
            >
              <span>Explore Core Capabilities</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= 2. CORE CAPABILITIES OVERVIEW (SIX CLEAN CARDS) ================= */}
      <section id="core-capabilities" className="py-20 sm:py-24 px-6 sm:px-8 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight">
              Six Core Pillars of Digital Engineering
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
              We structure our technology services into six disciplined domains, addressing the full lifecycle from system architecture and artificial intelligence to cloud operations and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((cap) => (
              <NotchedProjectCard
                key={cap.slug}
                href={cap.href}
                title={cap.title}
                description={cap.desc}
                icon={cap.icon}
                image={cap.image}
                badge={`Pillar ${cap.number}`}
                tags={cap.tags}
                monochrome={true}
                accent="#004AAD"
                accentForeground="#ffffff"
                surface="#ffffff"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. FEATURED PROJECTS & INDUSTRY APPLICATIONS ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight">
              Featured Projects & Real-World Solutions
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
              A factual record of confirmed platforms, digital products, and enterprise applications engineered and deployed by SkyWeb.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {confirmedProjects.map((proj, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-[#004AAD]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#004AAD] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                      {proj.category}
                    </span>
                    <FolderGit2 className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0f172a] mb-1">
                    {proj.title}
                  </h3>

                  <span className="text-xs font-semibold text-slate-500 block mb-3">
                    {proj.tagline}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Operational Impact
                  </span>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {proj.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. HOW SKYWEB DELIVERS SOLUTIONS (5 STAGES) ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 bg-[#090e17] text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              How SkyWeb Delivers Solutions
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-2 leading-relaxed">
              Our structured five-stage methodology ensures that technical investments are grounded in verified business requirements, architectural rigor, and observable production quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {deliveryPhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-blue-400 font-mono block mb-2">
                    {phase.phase}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {phase.name}
                  </h4>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-300 block mb-3">
                    {phase.headline}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-1.5 text-xs text-blue-300 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Verified Stage</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. TECHNOLOGY EXPERTISE BY STACK & USE CASE ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight">
              Technology Expertise Grouped by Actual Stack
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
              We build using battle-tested, open technologies and modern frameworks selected for performance, ecosystem longevity, and maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {technologyStack.map((stack, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#fafafa] border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-3 pb-2 border-b border-slate-200">
                    {stack.group}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {stack.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 text-slate-800 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Primary Application
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {stack.useCase}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. BUSINESS VALUE SECTION ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight">
              Demonstrable Value for Technology Leaders
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
              We anchor our engineering engagements in structural outcomes that make organizations more effective, dependable, and agile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#004AAD]/10 text-[#004AAD] flex items-center justify-center font-bold mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0f172a] mb-2.5">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                    Factual Outcome
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 7. INSIGHTS & ARTICLES SECTION ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight">
                Insights & Technology Perspectives
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1">
                Engineering analyses, architectural viewpoints, and official news releases from SkyWeb's practice teams.
              </p>
            </div>
            <Link
              to="/insights"
              className="text-xs font-bold text-[#004AAD] hover:underline inline-flex items-center gap-1"
            >
              <span>View all insights</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInsights.map((article) => (
              <article
                key={article.slug}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-lg hover:border-[#004AAD]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.publishedDate || 'October 2026'}</span>
                      <span>•</span>
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#0f172a] leading-snug mb-2 group-hover:text-[#004AAD] transition-colors">
                      <Link to={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {article.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <Link
                    to={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#004AAD] hover:text-[#003B8A] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {article.category}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 8. STRONG CONSULTATION CALL TO ACTION ================= */}
      <section className="py-20 px-6 sm:px-8 bg-black text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-500 mb-5 tracking-tight font-['DM_Sans']">
            Ready to Engineer Digital Possibilities?
          </h2>
          <p className="text-base sm:text-lg text-blue-200 max-w-2xl mx-auto mb-9 leading-relaxed">
            Connect directly with SkyWeb's software architects to evaluate your technical roadmap, diagnose architectural constraints, and construct dependable digital solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="px-8 py-4 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-base font-bold shadow-[0_8px_25px_rgba(0,74,173,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-base font-bold transition-all inline-flex items-center gap-2"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 9. SERVICE NAVIGATION & CONTACT FOOTER ================= */}
      <section className="py-14 px-6 sm:px-8 bg-[#090e17] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white">
                All 6 Enterprise Services
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onOpenModal}
                className="px-5 py-2.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-xs font-bold transition-all"
              >
                Request Architecture Review
              </button>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all"
              >
                General Inquiries
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pt-10 text-xs">
            {coreCapabilities.map((cap) => (
              <div key={cap.slug}>
                <Link
                  to={cap.href}
                  className="font-bold text-slate-200 hover:text-blue-400 transition-colors block mb-1 text-sm leading-snug"
                >
                  {cap.shortTitle}
                </Link>
                <span className="text-[11px] text-slate-400 block">
                  {cap.number} • Service
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
