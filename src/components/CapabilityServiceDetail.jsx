import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Calendar,
  ShieldCheck, 
  Zap, 
  Code2, 
  Rocket, 
  ChevronRight,
  FolderGit2
} from 'lucide-react';
import { insightsArticles } from '../data/insightsArticles';
import { getPillarBySlug, howSkyWebBuilds } from '../data/capabilityCatalog';

export default function CapabilityServiceDetail({ serviceData, onOpenModal }) {
  const catalogPillar = getPillarBySlug(serviceData.slug);
  const offerings = (catalogPillar?.services || serviceData.offerings || []).map((item) => ({
    title: item.title,
    desc: item.desc,
    capabilities: item.capabilities || item.tech || [],
    implementation: item.implementation || null,
    tech: item.tech || null,
  }));
  const buildSteps = howSkyWebBuilds;
  // Update document title and meta description dynamically
  useEffect(() => {
    const previousTitle = document.title;
    if (serviceData.seoTitle) {
      document.title = serviceData.seoTitle;
    }

    let metaDesc = document.querySelector('meta[name="description"]');
    let createdMeta = false;
    let previousDesc = null;

    if (serviceData.seoDescription) {
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
        createdMeta = true;
      } else {
        previousDesc = metaDesc.getAttribute('content');
      }
      metaDesc.setAttribute('content', serviceData.seoDescription);
    }

    window.scrollTo(0, 0);

    return () => {
      document.title = previousTitle;
      if (metaDesc) {
        if (createdMeta) {
          metaDesc.remove();
        } else if (previousDesc !== null) {
          metaDesc.setAttribute('content', previousDesc);
        }
      }
    };
  }, [serviceData]);

  // Find related articles
  const matchedArticles = (serviceData.relatedArticleSlugs || [])
    .map(slug => insightsArticles.find(a => a.slug === slug))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['DM_Sans']">
      
      {/* ================= 1. SERVICE HERO SECTION (BLACK BG & BLUE HEADLINE) ================= */}
      <section className="bg-black text-white pt-36 sm:pt-40 pb-16 sm:pb-20 px-6 sm:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-400 font-medium">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5 text-slate-600" /></li>
              <li>
                <Link to="/capabilities" className="hover:text-blue-400 transition-colors">Capabilities</Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5 text-slate-600" /></li>
              <li className="text-blue-300 font-bold truncate max-w-[280px] sm:max-w-none">
                {serviceData.shortTitle || serviceData.title}
              </li>
            </ol>
          </nav>

          {/* Back Link */}
          <div className="mb-6 flex justify-start">
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5 transform group-hover:-translate-x-1 transition-transform" />
              <span>Back to Capabilities</span>
            </Link>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-blue-500 max-w-4xl leading-tight mb-6 font-['DM_Sans']">
            {serviceData.title}
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-blue-200 max-w-3xl leading-relaxed mb-10 font-normal">
            {serviceData.heroSubtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenModal}
              className="px-7 py-3.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold shadow-[0_6px_20px_rgba(0,74,173,0.35)] hover:shadow-[0_8px_25px_rgba(0,74,173,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="#offerings"
              className="px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-sm font-bold transition-all"
            >
              Explore Technical Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* ================= 2. BUSINESS CHALLENGES & OPPORTUNITIES ================= */}
      {serviceData.businessChallenges && serviceData.businessChallenges.length > 0 && (
        <section className="py-16 sm:py-20 px-6 sm:px-8 bg-[#f8fafc] border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight">
                Business Challenges & Engineering Opportunities
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Organizations face distinct technical obstacles as their operations evolve. SkyWeb transforms architectural bottlenecks into structured foundations for digital growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {serviceData.businessChallenges.map((item, idx) => (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#004AAD]/30 transition-all flex flex-col justify-between"
                >
                  <div className="mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200/70 px-2.5 py-1 rounded-md inline-block mb-3">
                      The Operational Challenge
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] mb-2">
                      {item.challenge}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#004AAD] bg-blue-50 border border-blue-200/70 px-2.5 py-1 rounded-md inline-block mb-2">
                      The SkyWeb Solution
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {item.opportunity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 3. OUR SERVICES & TECHNICAL CAPABILITIES ================= */}
      {offerings.length > 0 && (
        <section id="offerings" className="py-20 px-6 sm:px-8 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight">
                Services & How We Implement Them
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Clear offerings with the technology path SkyWeb uses to design, build, and ship each capability in production.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {offerings.map((offering, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#fafbfc] hover:bg-white border border-slate-200/90 hover:border-[#004AAD]/35 transition-all duration-200 flex flex-col gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 shrink-0 rounded-lg bg-[#004AAD]/10 text-[#004AAD] flex items-center justify-center font-bold text-xs">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mb-1.5">
                        {offering.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {offering.desc}
                      </p>
                    </div>
                  </div>

                  {offering.implementation && (
                    <div className="rounded-xl bg-white border border-slate-200/80 px-4 py-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#004AAD] block mb-1.5">
                        How we implement
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {offering.implementation}
                      </p>
                    </div>
                  )}

                  {(offering.tech || offering.capabilities)?.length > 0 && (
                    <div className="pt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Tech we use
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {(offering.tech || offering.capabilities).map((cap, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[11px] font-semibold text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded-md"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 4. HOW SKYWEB BUILDS ================= */}
      {buildSteps.length > 0 && (
        <section className="py-20 px-6 sm:px-8 bg-[#090e17] text-white border-b border-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                How SkyWeb Builds
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                One consistent five-stage engineering method across every capability — from discovery to production improvement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
              {buildSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-black text-blue-400 font-mono block mb-2">
                      {step.step}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {step.name}
                    </h4>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 block mb-3">
                      {step.summary}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-blue-300 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Build stage</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 5. PRACTICAL INDUSTRY USE CASES ================= */}
      {serviceData.useCases && serviceData.useCases.length > 0 && (
        <section className="py-20 px-6 sm:px-8 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight">
                Practical Industry Use Cases
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Real-world scenarios demonstrating how SkyWeb adapts this capability to sector-specific constraints, compliance rules, and operational workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceData.useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#fafafa] hover:bg-white border border-slate-200/90 hover:border-[#004AAD]/40 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#004AAD] bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-3">
                      {uc.sector}
                    </span>
                    <h4 className="text-base font-bold text-[#0f172a] mb-2.5 group-hover:text-[#004AAD] transition-colors leading-snug">
                      {uc.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {uc.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Enterprise Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#004AAD]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 6. RELEVANT VERIFIED PROJECTS ================= */}
      {serviceData.verifiedProjects && serviceData.verifiedProjects.length > 0 && (
        <section className="py-20 px-6 sm:px-8 bg-[#f8fafc] border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight">
                Verified Projects & Realized Solutions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Representative technology initiatives developed by SkyWeb, reflecting factual engineering scopes and production platform deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.verifiedProjects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#004AAD]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#004AAD] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
                        {proj.tag}
                      </span>
                      <FolderGit2 className="w-5 h-5 text-slate-400" />
                    </div>

                    <h3 className="text-xl font-bold text-[#0f172a] mb-3 font-['DM_Sans']">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      Confirmed Production Initiative
                    </span>
                    <button
                      onClick={onOpenModal}
                      className="text-xs font-bold text-[#004AAD] hover:text-[#003B8A] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire About Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 7. EXPECTED BUSINESS VALUE (FACTUAL) ================= */}
      {serviceData.businessValue && (
        <section className="py-20 px-6 sm:px-8 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight">
                Expected Business Value
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Grounding technology investments in demonstrable operational improvements, structural resilience, and architectural longevity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceData.businessValue.map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#004AAD]/10 text-[#004AAD] flex items-center justify-center font-bold text-sm mb-4">
                      {idx === 0 ? <Zap className="w-5 h-5" /> : idx === 1 ? <ShieldCheck className="w-5 h-5" /> : idx === 2 ? <Code2 className="w-5 h-5" /> : <Rocket className="w-5 h-5" />}
                    </div>
                    <h4 className="text-base font-bold text-[#0f172a] mb-2">
                      {val.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-semibold text-slate-400">
                    Factual Metric Standard
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 8. TECHNOLOGY STACK GROUPING ================= */}
      {serviceData.technologies && (
        <section className="py-16 px-6 sm:px-8 bg-[#f8fafc] border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight">
                Technology Expertise for this Domain
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(serviceData.technologies).map(([groupKey, tools], idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-100 pb-2">
                    {groupKey.replace(/([A-Z])/g, ' $1').trim()}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-800 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 9. RELATED CAPABILITIES & INSIGHTS ================= */}
      <section className="py-20 px-6 sm:px-8 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          {/* Related Capabilities */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-extrabold text-[#0f172a]">
                  Related Capabilities
                </h3>
              </div>
              <Link
                to="/capabilities"
                className="text-xs font-bold text-[#004AAD] hover:underline hidden sm:inline-flex items-center gap-1"
              >
                <span>View all 6 Core Pillars</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(serviceData.relatedCapabilities || []).map((rel, rIdx) => (
                <Link
                  key={rIdx}
                  to={rel.href}
                  className="p-6 rounded-2xl border border-slate-200/90 hover:border-[#004AAD] bg-[#fafafa] hover:bg-white transition-all group flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <h4 className="font-bold text-[#0f172a] group-hover:text-[#004AAD] transition-colors text-base mb-2">
                    {rel.title}
                  </h4>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-[#004AAD] pt-3">
                    <span>Explore Capability</span>
                    <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Articles & Perspectives */}
          {matchedArticles.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#0f172a]">
                    Relevant Insights & Research
                  </h3>
                </div>
                <Link
                  to="/insights"
                  className="text-xs font-bold text-[#004AAD] hover:underline hidden sm:inline-flex items-center gap-1"
                >
                  <span>Explore all Insights</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {matchedArticles.map((art) => (
                  <article
                    key={art.slug}
                    className="p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-[#004AAD]/40 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{art.publishedDate || 'October 2026'}</span>
                        <span>•</span>
                        <Clock className="w-3.5 h-3.5" />
                        <span>{art.readTime}</span>
                      </div>

                      <h4 className="text-base font-bold text-[#0f172a] leading-snug mb-2 group-hover:text-[#004AAD] transition-colors">
                        <Link to={`/insights/${art.slug}`}>
                          {art.title}
                        </Link>
                      </h4>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {art.description}
                      </p>
                    </div>

                    <Link
                      to={`/insights/${art.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#004AAD] hover:text-[#003B8A] transition-colors"
                    >
                      <span>Read Perspective</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= 10. STRONG CONSULTATION CALL TO ACTION ================= */}
      <section className="py-20 px-6 sm:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-500 mb-5 tracking-tight font-['DM_Sans']">
            Architect Your {serviceData.shortTitle || serviceData.title} Roadmap
          </h2>
          <p className="text-base sm:text-lg text-blue-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Collaborate directly with SkyWeb's software architects to evaluate your existing stack, eliminate operational bottlenecks, and engineer systems designed to endure.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="px-8 py-4 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-base font-bold shadow-[0_8px_25px_rgba(0,74,173,0.4)] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-base font-bold transition-all inline-flex items-center gap-2"
            >
              <span>Contact Engineering Team</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
