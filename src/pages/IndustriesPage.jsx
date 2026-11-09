import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { ArrowRight, Radio, Landmark, Stethoscope, Factory, ShoppingCart, Zap, Film, GraduationCap } from 'lucide-react';

const industrySectors = [
  {
    slug: "banking-financial",
    title: "Banking & Financial Services",
    icon: Landmark,
    badge: "BFSI",
    desc: "Next-generation core banking architectures, real-time fraud telemetry, ISO 20022 payment engines, and sub-second settlement orchestration.",
    metrics: "10M+ Daily Payments, 42ms Latency"
  },
  {
    slug: "communications",
    title: "Communications & Telecom",
    icon: Radio,
    badge: "Telco",
    desc: "Autonomous OSS/BSS platforms, zero-touch network automation, multi-access edge compute, and real-time subscriber telemetry.",
    metrics: "5G Core Orchestration, 99.999% SLA"
  },
  {
    slug: "healthcare-lifesciences",
    title: "Healthcare & Life Sciences",
    icon: Stethoscope,
    badge: "HealthTech",
    desc: "HIPAA-compliant data lakes, clinical trial analytics, FHIR interoperability backbones, and diagnostic machine learning pipelines.",
    metrics: "100% HIPAA & GDPR Compliance"
  },
  {
    slug: "manufacturing",
    title: "Industry 4.0 & Manufacturing",
    icon: Factory,
    badge: "Smart Factory",
    desc: "Industrial IoT edge telemetry, predictive equipment maintenance, digital twins, and autonomous supply chain replenishment.",
    metrics: "35% Reduction in Machine Downtime"
  },
  {
    slug: "retail-consumer",
    title: "Retail & Consumer Goods",
    icon: ShoppingCart,
    badge: "Omnichannel",
    desc: "High-concurrency commerce checkout, real-time inventory synchronization, dynamic pricing engines, and personalized recommendation graphs.",
    metrics: "10x Black Friday Spike Capacity"
  },
  {
    slug: "energy-utilities",
    title: "Energy, Resources & Utilities",
    icon: Zap,
    badge: "Clean Energy",
    desc: "Smart grid telemetry, renewable resource forecasting, predictive asset reliability, and algorithmic carbon emissions tracking.",
    metrics: "Gigawatt-Scale Grid Monitoring"
  },
  {
    slug: "media-entertainment",
    title: "Media, Entertainment & Tech",
    icon: Film,
    badge: "MediaTech",
    desc: "Ultra-low-latency video streaming pipelines, generative asset generation, rights management, and global edge caching.",
    metrics: "Sub-Second Global Video Ingest"
  },
  {
    slug: "education",
    title: "Education & Public Sector",
    icon: GraduationCap,
    badge: "EduTech",
    desc: "Scalable learning management architectures, automated proctoring telemetry, institutional analytics, and secure administrative portals.",
    metrics: "Zero Downtime Exam Delivery"
  }
];

export default function IndustriesPage({ onOpenModal }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['DM_Sans']">
      <PageHeader
        title="Industries We Engineer For"
        subtitle="Mission-critical software architectures and domain-tailored digital engineering engineered to address sector-specific regulatory, throughput, and scalability demands."
        breadcrumb="Industries"
      />

      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySectors.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#fafafa] hover:bg-white border border-slate-200/90 hover:border-[#004AAD]/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-lg group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-12 w-12 rounded-xl bg-[#004AAD]/10 text-[#004AAD] flex items-center justify-center group-hover:bg-[#004AAD] group-hover:text-white transition-colors duration-200">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                        {ind.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#004AAD] transition-colors mb-3">
                      {ind.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {ind.desc}
                    </p>

                    {ind.metrics && (
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 mb-6 text-xs text-slate-700">
                        <span className="font-bold text-[#004AAD] block mb-0.5">Benchmark:</span>
                        {ind.metrics}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004AAD] hover:text-[#003B8A] transition-colors group-hover:translate-x-0.5"
                    >
                      <span>Explore Sector Brief</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    <button
                      onClick={onOpenModal}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      Discuss Project →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Industry Technology Stack */}
      <section className="py-16 px-6 sm:px-8 bg-[#f8fafc] border-t border-slate-200/70">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004AAD] mb-2 block">
            NEED BESPOKE DOMAIN ARCHITECTURE?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-4">
            We adapt proven distributed patterns to unique industry regulations
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Whether navigating strict financial regulatory sandboxes, healthcare data sovereignty, or extreme manufacturing throughput, our squads engineer compliance directly into your codebase.
          </p>
          <button
            onClick={onOpenModal}
            className="px-8 py-3.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Consult with Domain Architect</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
