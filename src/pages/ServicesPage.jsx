import React from 'react';
import PageHeader from '../components/PageHeader';
import { provisions } from '../data/siteData';

export default function ServicesPage({ onOpenModal }) {
  return (
    <div>
      <PageHeader
        badge="CORE CAPABILITIES"
        title="What We Provide"
        subtitle="The systems, software, and digital infrastructure businesses need to build, operate, and scale in a connected world."
        breadcrumb="Services"
      />

      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {provisions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#004AAD]/40 hover:shadow-xl transition-all duration-300 group"
              >
                {item.image && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 z-10">
                      <span className="w-7 h-7 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center text-[11px] font-bold shadow-sm">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-['DM_Sans'] group-hover:text-[#004AAD] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {item.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      {item.highlights && item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#004AAD]"></span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenModal}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-[#004AAD] text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Inquire Service</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA and Partnership section */}
      <section className="py-20 px-6 sm:px-8 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#090e17] text-white rounded-3xl p-10 lg:p-14">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">ENTERPRISE DELIVERY</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-6 font-['DM_Sans']">
                End-to-End Execution with Guaranteed Reliability
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                Whether you need dedicated squad augmentation or end-to-end turnkey project ownership, our engineering teams deliver scalable architecture with documented code, unit tests, and continuous deployment.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={onOpenModal} className="btn-primary">
                  Work With Us
                </button>
                <a href="mailto:offical@skywebinternational.com" className="btn-secondary">
                  offical@skywebinternational.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
