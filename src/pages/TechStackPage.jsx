import React from 'react';
import PageHeader from '../components/PageHeader';
import { techCategories } from '../data/siteData';
import TechStackShowcase from '../components/TechStackShowcase';

export default function TechStackPage({ onOpenModal }) {
  return (
    <div>
      <PageHeader
        badge="TECHNOLOGY FOUNDATION"
        title="Modern Technologies We Build With"
        subtitle="Battle-tested frameworks, resilient cloud infrastructure, high-throughput databases, and practical AI toolchains powering scalable digital systems."
        breadcrumb="Tech Stack"
      />

      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 font-['DM_Sans']">
              Architectural Toolset by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techCategories.map((cat, idx) => (
                <div key={idx} className="p-8 rounded-2xl border border-slate-200/90 bg-[#fafafa]">
                  <h3 className="text-lg font-bold text-slate-900 mb-5 font-['DM_Sans'] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#004AAD]"></span>
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {cat.items.map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-800 shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Technology Showcase with 3D Globe */}
          <div className="py-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 font-['DM_Sans']">
                Interactive Technology Globe
              </h3>
              <p className="text-sm text-slate-500">
                Explore our core stacks with verified industry toolchains and libraries.
              </p>
            </div>
            <TechStackShowcase />
          </div>
        </div>
      </section>

      {/* Philosophy of Technology Selection */}
      <section className="py-20 px-6 sm:px-8 bg-[#090e17] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">TECHNOLOGY PHILOSOPHY</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-6 font-['DM_Sans']">
            We Select Tools Around the Problem, Not Trends
          </h2>
          <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            We avoid unnecessary complexity. We choose the right database, framework, and cloud architecture based on your data volume, concurrency requirements, latency benchmarks, and operational budget.
          </p>
          <button onClick={onOpenModal} className="btn-primary">
            Discuss Your Stack With Us
          </button>
        </div>
      </section>
    </div>
  );
}
