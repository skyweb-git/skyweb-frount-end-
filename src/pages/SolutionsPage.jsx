import React from 'react';
import PageHeader from '../components/PageHeader';
import { solutions } from '../data/siteData';

export default function SolutionsPage({ onOpenModal }) {
  return (
    <div>
      <PageHeader
        badge="SOLUTIONS"
        title="Technology for Businesses Without Boundaries"
        subtitle="End-to-end technology solutions engineered to power operations, scale digital products, and unlock sustainable business advantages."
        breadcrumb="Solutions"
      />

      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {solutions.map((item, idx) => (
              <div
                key={item.id}
                id={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 sm:p-10 rounded-2xl border border-slate-200/90 bg-[#fafafa] hover:border-[#004AAD]/40 transition-all hover:shadow-lg"
              >
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#004AAD]/10 text-[#004AAD] mb-3">
                    0{idx + 1} • SOLUTION
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 font-['DM_Sans']">
                    {item.title}
                  </h2>
                  <p className="text-base text-slate-700 leading-relaxed font-medium mb-4">
                    {item.desc}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {item.details}
                  </p>
                  <button
                    onClick={onOpenModal}
                    className="btn-primary text-xs"
                  >
                    Consult on {item.title}
                  </button>
                </div>

                <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Core Capabilities & Deliverables
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="w-2 h-2 rounded-full bg-[#004AAD] mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-slate-700 font-medium leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy banner */}
      <section className="py-20 px-6 sm:px-8 bg-[#090e17] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400">BUSINESS → STRATEGY → TECHNOLOGY → SCALE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-6 font-['DM_Sans']">
            Have a Specific Solution in Mind?
          </h2>
          <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Schedule a technical consultation with SkyWeb. We will evaluate your architecture, outline roadmap milestones, and prepare engineering estimates.
          </p>
          <button onClick={onOpenModal} className="btn-primary">
            Work With Us
          </button>
        </div>
      </section>
    </div>
  );
}
