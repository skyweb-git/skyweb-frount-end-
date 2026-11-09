import React from 'react';
import PageHeader from '../components/PageHeader';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card-effect';
import { ArrowUpRight, Layers, ShoppingBag, Palette } from 'lucide-react';
import { projects } from '../data/siteData';

export default function WorkPage({ onOpenModal }) {
  return (
    <div>
      <PageHeader
        badge="PORTFOLIO & CASE STUDIES"
        title="Technology We Have Delivered"
        subtitle="Real products, digital platforms, and high-concurrency systems empowering organizations across markets."
        breadcrumb="Our Work"
      />

      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* 3D Perspective Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((proj, idx) => (
              <CardContainer key={idx} containerClassName="py-2 w-full" className="w-full">
                <CardBody className="bg-white relative group/card border border-slate-200/90 hover:border-[#004AAD]/40 w-full h-auto rounded-2xl p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0, 74, 173,0.12)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <CardItem
                        translateZ={30}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#004AAD]/10 text-[#004AAD]"
                      >
                        {idx === 0 && <Layers className="w-3.5 h-3.5" />}
                        {idx === 1 && <ShoppingBag className="w-3.5 h-3.5" />}
                        {idx === 2 && <Palette className="w-3.5 h-3.5" />}
                        <span>{proj.badge}</span>
                      </CardItem>
                      <CardItem
                        translateZ={25}
                        className="text-[11px] font-semibold tracking-wider uppercase text-slate-400"
                      >
                        {proj.category}
                      </CardItem>
                    </div>

                    <CardItem
                      translateZ={50}
                      className="text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      {proj.title}
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ={60}
                      className="text-slate-600 text-sm leading-relaxed mt-2.5 min-h-[42px]"
                    >
                      {proj.desc}
                    </CardItem>

                    <CardItem translateZ={85} className="w-full mt-5">
                      <div className={`relative overflow-hidden rounded-xl h-48 w-full group-hover/card:shadow-xl transition-all duration-300 border border-slate-100 flex items-center justify-center ${proj.imgClass && proj.imgClass.includes('bg-') ? '' : 'bg-slate-900'}`}>
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className={`h-full w-full transform group-hover/card:scale-105 transition-transform duration-500 ${proj.imgClass || 'object-cover'}`}
                        />
                        {proj.imgClass && proj.imgClass.includes('object-cover') && (
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity"></div>
                        )}
                        <div className="absolute bottom-3 left-3 text-white text-xs font-medium px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm shadow-sm">
                          Case Study & Engineering Spec
                        </div>
                      </div>
                    </CardItem>
                  </div>

                  <div className="mt-6">
                    <CardItem translateZ={40} className="flex flex-wrap gap-1.5 mb-5 w-full">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-600 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </CardItem>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <CardItem
                        translateZ={35}
                        as="button"
                        type="button"
                        onClick={onOpenModal}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#004AAD] hover:underline cursor-pointer"
                      >
                        <span>Case Study Details</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </CardItem>

                      <CardItem
                        translateZ={40}
                        as="button"
                        type="button"
                        onClick={onOpenModal}
                        className="px-4 py-2 rounded-lg bg-[#004AAD] hover:bg-[#003B8A] text-white text-xs font-semibold shadow-sm transition-all duration-200 cursor-pointer"
                      >
                        View System
                      </CardItem>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>

          {/* Deep Dive Case Studies Section */}
          <div className="pt-12 border-t border-slate-200">
            <span className="text-xs font-bold uppercase tracking-widest text-[#004AAD]">DETAILED CASE STUDIES</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-12 font-['DM_Sans']">
              Architectural Breakdown & Execution
            </h2>

            <div className="space-y-16">
              {projects.map((proj, idx) => (
                <div key={proj.id} className="p-8 sm:p-10 rounded-2xl bg-[#fafafa] border border-slate-200/90">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="text-xs font-bold text-[#004AAD] uppercase tracking-wider block mb-1">
                        {proj.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['DM_Sans']">
                        {proj.title}
                      </h3>
                    </div>
                    <button onClick={onOpenModal} className="btn-primary text-xs">
                      Build Similar Platform
                    </button>
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-4xl">
                    {proj.fullDesc || proj.desc}
                  </p>

                  {proj.deliverables && (
                    <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                        Key Engineering Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {proj.deliverables.map((deliv, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2.5 text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004AAD]"></span>
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-8 bg-[#090e17] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">READY TO SCALE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-6 font-['DM_Sans']">
            Let's Build What Your Business Needs Next
          </h2>
          <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Discuss your requirements with our technical lead. We will review your vision and schedule an architectural roadmap consultation within 24 hours.
          </p>
          <button onClick={onOpenModal} className="btn-primary">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
