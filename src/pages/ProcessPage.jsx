import React from 'react';
import PageHeader from '../components/PageHeader';
import { processSteps } from '../data/siteData';

export default function ProcessPage({ onOpenModal }) {
  return (
    <div>
      <PageHeader
        badge="METHODOLOGY"
        title="How We Work"
        subtitle="A structured, transparent engineering process designed to reduce risk, eliminate rework, and deliver high-performance technology on schedule."
        breadcrumb="Process"
      />

      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-2xl border border-slate-200/90 bg-[#fafafa] hover:border-[#004AAD]/30 transition-all hover:shadow-md"
              >
                <div className="lg:col-span-3">
                  <span className="text-5xl font-black text-[#004AAD]/20 font-['DM_Sans'] block mb-2">
                    {step.num}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#004AAD]">
                    PHASE 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1 font-['DM_Sans']">
                    {step.title}
                  </h3>
                </div>

                <div className="lg:col-span-9 bg-white p-6 sm:p-8 rounded-xl border border-slate-200/80">
                  <h4 className="text-base font-bold text-slate-800 mb-2">
                    {step.desc}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="py-20 px-6 sm:px-8 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#004AAD]">QUALITY ASSURANCE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 font-['DM_Sans']">
              Our Engineering Standards
            </h2>
            <p className="text-slate-600 text-base">
              Every system we engineer adheres to strict automated testing, security validations, and clean architecture principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3 font-['DM_Sans']">Continuous Integration & Delivery</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Automated pipelines verify linting, run unit tests, and build containerized artifacts for staging verification before any production deployment.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3 font-['DM_Sans']">Zero-Trust Security & Auditing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Encrypted environment credentials, role-based access control, least-privilege policies, and regular dependency vulnerability scanning.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3 font-['DM_Sans']">Complete Code Ownership</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Full repository access, comprehensive architecture diagrams, OpenAPI / Swagger documentation, and thorough handover sessions for your in-house teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Start Project Banner */}
      <section className="py-16 px-6 sm:px-8 bg-[#090e17] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 font-['DM_Sans']">
            Start Your Project With a Technical Discovery Call
          </h3>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
            We will review your requirements, analyze feasibility, and provide an architectural blueprint with timeline estimates.
          </p>
          <button onClick={onOpenModal} className="btn-primary">
            Work With Us
          </button>
        </div>
      </section>
    </div>
  );
}
