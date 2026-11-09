import React from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { subpagesData } from '../data/subpagesData';
import { capabilitiesServicesData } from '../data/capabilitiesServicesData';
import CapabilityServiceDetail from '../components/CapabilityServiceDetail';
import LeadershipPage from './LeadershipPage';
import { ClientReviewsGrid } from '../components/ui/profile-card-testimonial-carousel';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Globe2, 
  Activity,
  ArrowLeft,
  ExternalLink,
  Mail
} from 'lucide-react';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export default function SubpageView({ category: propCategory, onOpenModal }) {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Determine category from props or pathname
  const pathParts = location.pathname.split('/').filter(Boolean);
  const category = propCategory || pathParts[0] || 'capabilities';
  const currentKey = `${category}/${slug}`;

  // If this is the leadership page, render the bespoke Tech Mahindra style leadership template
  if (slug === 'leadership' || currentKey === 'about/leadership') {
    return <LeadershipPage onOpenModal={onOpenModal} />;
  }

  // If this is one of our 6 enterprise capability services, render the comprehensive enterprise template
  if (category === 'capabilities' && capabilitiesServicesData[slug]) {
    return (
      <CapabilityServiceDetail 
        serviceData={capabilitiesServicesData[slug]} 
        onOpenModal={onOpenModal} 
      />
    );
  }

  // Direct lookup or aliases
  const aliases = {
    'industries/telecom': 'industries/communications',
    'industries/retail': 'industries/retail-consumer',
    'industries/healthcare-life-sciences': 'industries/healthcare-lifesciences',
    'industries/public-sector': 'industries/education',
    'capabilities/scale-at-speed': 'capabilities/nano-profiles',
    'capabilities/nano': 'capabilities/nano-profiles',
    'capabilities/artcoin': 'capabilities/art-coin',
    'capabilities/ai-delivered-right': 'about/ai-delivered-right',
    'capabilities/agentic-modernization': 'capabilities/agentic-development',
    'capabilities/digital-enterprise-apps': 'capabilities/digital-enterprise-applications',
    'capabilities/global-capability-centers': 'capabilities/gcc',
    'about/foundation': 'about/citizenship',
    'about/educational-institutions': 'about/citizenship',
    'about/social-responsibility': 'about/citizenship',
    'insights/research-reports': 'insights/analyst-insights',
    'insights/tech-talks': 'insights/views',
    'insights/news-press': 'insights/news',
  };

  const lookupKey = aliases[currentKey] || currentKey;
  const pageData = subpagesData[lookupKey] || {
    category: category.charAt(0).toUpperCase() + category.slice(1),
    categoryHref: `/${category}`,
    badge: 'Enterprise Capability',
    title: slug
      ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      : 'Engineering Overview',
    subtitle: 'Enterprise-grade architecture, scalable cloud infrastructure, and mission-critical deployment engineered for global velocity.',
    description: 'SkyWeb deploys specialized squads of senior engineers, researchers, and systems architects to deliver robust, high-availability solutions built on zero-trust and modern computational paradigms.',
    highlights: [
      { metric: '99.99%', label: 'Guaranteed Availability SLA' },
      { metric: '10x', label: 'Faster Enterprise Delivery' },
      { metric: '100%', label: 'Zero-Trust Architecture' },
      { metric: '24/7', label: 'Continuous Squad Oversight' }
    ],
    pillars: [
      { title: 'Architectural Excellence', desc: 'Rigorous engineering standards with clean codebases, automated validation, and resilient fault isolation.' },
      { title: 'Enterprise Scalability', desc: 'Elastic compute orchestration and microservices capable of processing millions of concurrent transactions with sub-millisecond latencies.' },
      { title: 'Security & Compliance', desc: 'Built-in SOC2 Type II, ISO 27001, and GDPR compliance embedded directly into deployment pipelines.' }
    ]
  };

  // Find related sibling pages in the same category
  const siblingPages = Object.keys(subpagesData)
    .filter(k => k.startsWith(`${category}/`) && k !== lookupKey && k !== currentKey)
    .slice(0, 4)
    .map(k => {
      const page = subpagesData[k];
      const sSlug = k.split('/')[1];
      return {
        title: page.title,
        href: `/${category}/${sSlug}`,
        badge: page.badge || page.category
      };
    });

  const categoryName = pageData.category || (category.charAt(0).toUpperCase() + category.slice(1));
  const categoryHref = pageData.categoryHref || `/${category}`;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['DM_Sans'] pb-24">
      {/* ================= 1. HERO HEADER SECTION (ONLY UPPER SECTION IS SOLID BLACK & BLUE TEXT) ================= */}
      <section className="pt-36 sm:pt-40 pb-16 sm:pb-20 px-6 sm:px-8 border-b border-slate-900 relative overflow-hidden bg-black text-white">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Back Button */}
          <div className="mb-6 flex justify-start">
            <button
              onClick={() => navigate(categoryHref)}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5 transform group-hover:-translate-x-1 transition-transform" />
              <span>Back to {categoryName}</span>
            </button>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-500 tracking-tight leading-[1.12] mb-6">
            {pageData.title}
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-blue-200 font-medium leading-relaxed max-w-3xl mx-auto mb-8">
            {pageData.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {pageData.externalUrl && (
              <a
                href={pageData.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-base font-bold shadow-[0_6px_20px_rgba(0,74,173,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
              >
                <span>Visit External Resource</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            <button
              onClick={onOpenModal}
              className="px-8 py-3.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-base font-bold shadow-[0_6px_20px_rgba(0,74,173,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              to={categoryHref}
              className="px-7 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-slate-800 text-blue-200 hover:text-white text-base font-bold transition-all shadow-xs"
            >
              Explore All {categoryName}
            </Link>
          </div>
        </div>
      </section>


      {/* ================= 3. FEATURED IN-DEPTH ARTICLE SECTION ================= */}
      {pageData.article && (
        <section className="py-16 sm:py-20 px-6 sm:px-8 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                {pageData.article.headline}
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
                {pageData.article.lead}
              </p>
            </div>

            {pageData.article.image && (
              <div className="mb-12">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50">
                  <img 
                    src={pageData.article.image} 
                    alt={pageData.article.headline} 
                    className="w-full h-auto max-h-[500px] object-cover"
                  />
                </div>
                {pageData.article.imageCaption && (
                  <p className="text-xs text-slate-500 text-center mt-2.5">
                    {pageData.article.imageCaption}
                  </p>
                )}
              </div>
            )}

            <div className="space-y-8">
              {pageData.article.sections.map((sec, sIdx) => (
                <div key={sIdx} className="bg-[#fafafa] border border-slate-200/90 rounded-2xl p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-['DM_Sans']">
                    {sec.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>

            {pageData.article.takeaways && pageData.article.takeaways.length > 0 && (
              <div className="mt-10 bg-blue-50/70 border border-blue-200 rounded-2xl p-6 sm:p-8">
                <h4 className="text-lg font-bold text-[#004AAD] mb-4 font-['DM_Sans'] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#004AAD]" />
                  <span>Key Strategic Takeaways</span>
                </h4>
                <ul className="space-y-2.5">
                  {pageData.article.takeaways.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="text-[#004AAD] font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= 4. CLIENT TESTIMONIALS & TRUST ================= */}
      {pageData.testimonials && pageData.testimonials.length > 0 && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-slate-200" id="testimonials">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight font-['DM_Sans']">
                All Verified Client Case Reviews
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Detailed metrics and impact statements from our {pageData.testimonials.length} confirmed client partnerships.
              </p>
            </div>

            {/* 2 in a line Grid - Good UI Profile Testimonial Cards */}
            <ClientReviewsGrid testimonials={pageData.testimonials} />
          </div>
        </section>
      )}

      {/* ================= 5. EXECUTIVE LEADERSHIP TEAM ================= */}
      {pageData.leaders && pageData.leaders.length > 0 && (
        <section className="py-16 sm:py-24 px-6 sm:px-8 bg-white border-b border-slate-100" id="executive-leadership">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Executive Leadership &amp; Governance
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Seasoned technologists, researchers, and fiscal leaders guiding global enterprise digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageData.leaders.map((leader) => (
                <div
                  key={leader.id}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#004AAD]/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <h3 className="text-xl font-bold font-['DM_Sans'] text-white">
                          {leader.name}
                        </h3>
                        <p className="text-xs text-blue-200 font-medium">
                          {leader.role} • {leader.location}
                        </p>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {leader.bio}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm"
                      >
                        <LinkedInIcon />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {leader.email && (
                      <a
                        href={`mailto:${leader.email}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-[#004AAD] hover:text-white transition-all shadow-sm"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 6. CORPORATE CITIZENSHIP INITIATIVES ================= */}
      {pageData.citizenshipPrograms && pageData.citizenshipPrograms.length > 0 && (
        <section className="py-16 sm:py-24 px-6 sm:px-8 bg-white border-b border-slate-100" id="citizenship-programs">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Corporate Citizenship Programs
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Empowering communities through STEM education, open technology research, and public interest engineering.
              </p>
            </div>

            <div className="space-y-8">
              {pageData.citizenshipPrograms.map((prog) => (
                <div
                  key={prog.id}
                  id={prog.id}
                  className="bg-[#fafafa] border border-slate-200/90 rounded-2xl p-7 sm:p-10 hover:border-[#004AAD]/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 font-['DM_Sans']">
                        {prog.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#004AAD]">
                        {prog.subtitle}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {prog.impactMetrics.map((met, mIdx) => (
                        <span key={mIdx} className="px-3 py-1 rounded-full text-xs font-bold bg-[#004AAD]/10 text-[#004AAD] border border-[#004AAD]/20">
                          {met}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {prog.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 7. ALLIANCE PARTNERS ================= */}
      {pageData.partnersList && pageData.partnersList.length > 0 && (
        <section className="py-16 sm:py-24 px-6 sm:px-8 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Hyperscalers &amp; Enterprise Alliances
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Certified integrations and joint co-innovation initiatives across global cloud networks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageData.partnersList.map((p, idx) => (
                <div key={idx} className="bg-[#fafafa] border border-slate-200/90 rounded-2xl p-6 hover:border-[#004AAD]/50 transition-all">
                  <span className="text-xs font-bold text-[#004AAD] uppercase tracking-wider block mb-1">{p.category}</span>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{p.name}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 8. PORTFOLIO VENTURES ================= */}
      {pageData.portfolioVentures && pageData.portfolioVentures.length > 0 && (
        <section className="py-16 sm:py-24 px-6 sm:px-8 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Proprietary Incubated Platforms
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                High-performance platforms engineered in SkyWeb Labs for enterprise reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pageData.portfolioVentures.map((v, idx) => (
                <div key={idx} className="bg-[#fafafa] border border-slate-200/90 rounded-2xl p-7 hover:border-[#004AAD]/50 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#004AAD] uppercase tracking-wider">{v.category}</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#004AAD]/10 text-[#004AAD] border border-[#004AAD]/20">{v.status}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">{v.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 9. PRESS & NEWS ITEMS ================= */}
      {pageData.newsItems && pageData.newsItems.length > 0 && (
        <section className="py-16 sm:py-24 px-6 sm:px-8 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Official Announcements &amp; Releases
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Latest milestones, global expansion updates, and technology releases from SkyWeb.
              </p>
            </div>

            <div className="space-y-6">
              {pageData.newsItems.map((n, idx) => (
                <div key={idx} className="bg-[#fafafa] border border-slate-200/90 rounded-2xl p-7 hover:border-[#004AAD]/50 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#004AAD] uppercase tracking-wider">{n.category}</span>
                    <span className="text-xs text-slate-400">{n.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{n.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{n.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 10. CORE PILLARS & ARCHITECTURE ================= */}
      {pageData.pillars && pageData.pillars.length > 0 && (
        <section className="py-16 sm:py-20 px-6 sm:px-8 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                Architectural Pillars &amp; Methodologies
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                Rigorous computer science standards applied to mission-critical business systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {pageData.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-2xl border border-slate-200/90 bg-[#fafafa] hover:bg-white hover:border-[#004AAD]/40 transition-all duration-200 hover:shadow-lg flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-[#004AAD]/10 text-[#004AAD] flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-[#004AAD] group-hover:text-white transition-colors duration-200">
                      0{idx + 1}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#004AAD] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200/60 mt-6 flex items-center gap-2 text-xs font-bold text-[#004AAD]">
                    <CheckCircle2 className="h-4 w-4 text-[#004AAD]" />
                    <span>Production-Grade Architecture</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 11. ENTERPRISE ENGINEERING STANDARD ================= */}
      <section className="py-16 px-6 sm:px-8 bg-[#f8fafc] border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              The SkyWeb Engineering Standard
            </h3>
            <p className="text-slate-600 text-sm">
              Every system we engineer adheres to strict institutional governance, security benchmarks, and computational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-xs">
              <ShieldCheck className="h-8 w-8 text-[#004AAD] mb-4" />
              <h5 className="font-bold text-slate-900 text-base mb-2">Zero-Trust Security</h5>
              <p className="text-slate-600 text-xs leading-relaxed">
                Automated vulnerability scanning, least-privilege IAM, and end-to-end encryption in transit and at rest.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-xs">
              <Cpu className="h-8 w-8 text-[#004AAD] mb-4" />
              <h5 className="font-bold text-slate-900 text-base mb-2">Hyperscale Compute</h5>
              <p className="text-slate-600 text-xs leading-relaxed">
                Multi-region Kubernetes orchestration and elastic auto-scaling engineered for zero cold-start penalties.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-xs">
              <Activity className="h-8 w-8 text-[#004AAD] mb-4" />
              <h5 className="font-bold text-slate-900 text-base mb-2">Observability &amp; SLAs</h5>
              <p className="text-slate-600 text-xs leading-relaxed">
                Distributed OpenTelemetry tracing, real-time alert routing, and 99.98% system availability guarantees.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-xs">
              <Globe2 className="h-8 w-8 text-[#004AAD] mb-4" />
              <h5 className="font-bold text-slate-900 text-base mb-2">Global Squads</h5>
              <p className="text-slate-600 text-xs leading-relaxed">
                Dedicated IIT-trained engineering squads collaborating seamlessly across Hyderabad, Dubai, and Cape Town.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 12. RELATED SIBLING PAGES ================= */}
      {siblingPages.length > 0 && (
        <section className="py-16 px-6 sm:px-8 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Related {categoryName} Areas
                </h3>
              </div>
              <Link
                to={categoryHref}
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-[#004AAD] hover:underline"
              >
                <span>View all in {categoryName}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {siblingPages.map((sib, sIdx) => (
                <Link
                  key={sIdx}
                  to={sib.href}
                  className="p-5 rounded-xl border border-slate-200/80 hover:border-[#004AAD] bg-[#fafafa] hover:bg-white transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#004AAD] transition-colors mb-2 block">
                      {sib.badge}
                    </span>
                    <h5 className="font-bold text-[#0f172a] group-hover:text-[#004AAD] transition-colors text-base mb-2">
                      {sib.title}
                    </h5>
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-[#004AAD] pt-3">
                    <span>Explore Area</span>
                    <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 13. BOTTOM ACTION BANNER ================= */}
      <section className="pt-16 px-6 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto bg-black text-white border border-slate-800 rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-blue-500 tracking-tight mb-3">
            Ready to Engineer What's Next?
          </h3>
          <p className="text-blue-200 text-base leading-relaxed mb-6 max-w-2xl mx-auto">
            Direct Inquiries: <a href="mailto:offical@skywebinternational.com" className="text-blue-400 hover:underline">offical@skywebinternational.com</a> • Hyderabad, Telangana, India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="px-8 py-3.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-base font-bold shadow-[0_6px_20px_rgba(0,74,173,0.35)] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/about"
              className="px-7 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-slate-800 text-blue-200 hover:text-white text-base font-bold transition-all"
            >
              Explore SkyWeb Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}