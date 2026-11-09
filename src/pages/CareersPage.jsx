import React from 'react';
import PageHeader from '../components/PageHeader';
import { ArrowRight, MapPin, Briefcase, Award, HeartHandshake, Zap } from 'lucide-react';

const openRoles = [
  {
    title: "Principal Agentic AI Engineer",
    department: "AI & Autonomous Systems",
    location: "Hyderabad, India / Hybrid",
    type: "Full-Time",
    experience: "7+ Years",
    desc: "Architect autonomous agent swarms, tool-use execution engines, and deterministic verification frameworks for enterprise automation."
  },
  {
    title: "Staff Distributed Systems Architect",
    department: "Digital Core & Cloud",
    location: "Hyderabad / Dubai / Remote",
    type: "Full-Time",
    experience: "8+ Years",
    desc: "Design zero-downtime microservice topologies, multi-region Kubernetes clusters, and sub-millisecond event streaming backbones."
  },
  {
    title: "Senior Full-Stack Engineer (React & TypeScript)",
    department: "Product Engineering",
    location: "Hyderabad, India",
    type: "Full-Time",
    experience: "4+ Years",
    desc: "Build mission-critical enterprise dashboards, fluid component design systems, and high-performance WebSockets interfaces."
  },
  {
    title: "Lead Cloud Security & Zero-Trust Architect",
    department: "Cyber Security",
    location: "Dubai, UAE / Remote",
    type: "Full-Time",
    experience: "6+ Years",
    desc: "Implement automated cloud security posture management, IAM least-privilege governance, and SOC 2 compliance pipelines."
  },
  {
    title: "Principal Data Lakehouse Engineer",
    department: "Data & Analytics",
    location: "Hyderabad, India",
    type: "Full-Time",
    experience: "6+ Years",
    desc: "Lead the design and execution of real-time streaming architectures using Snowflake, Databricks, Apache Iceberg, and Kafka."
  }
];

export default function CareersPage({ onOpenModal }) {
  const handleApply = (roleTitle) => {
    if (onOpenModal) onOpenModal();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['DM_Sans']">
      <PageHeader
        title="Engineer What's Next with SkyWeb"
        subtitle="Work alongside senior researchers and engineers from premier institutions like IIT Hyderabad and IIT Madras to solve complex computer science problems for global enterprises."
        breadcrumb="Careers"
      />

      {/* Engineering Culture Pillars */}
      <section className="py-16 px-6 sm:px-8 border-b border-slate-100 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#004AAD] mb-2 block">
              OUR CULTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
              Built by Engineers, Governed by Code
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              We eliminate corporate bureaucracy so you can focus on building resilient, mathematically sound systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="h-12 w-12 rounded-xl bg-[#004AAD]/10 text-[#004AAD] flex items-center justify-center mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">High Agency & Velocity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Small, elite squads make direct architectural decisions. No endless approval chains or artificial gatekeeping.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="h-12 w-12 rounded-xl bg-[#004AAD]/10 text-[#004AAD] flex items-center justify-center mb-6">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">IIT Research Pedigree</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Founded and led by IIT technologists who prioritize rigorous algorithmic formulation, test coverage, and code hygiene.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="h-12 w-12 rounded-xl bg-[#004AAD]/10 text-[#004AAD] flex items-center justify-center mb-6">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Global Enterprise Scale</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Deploy systems that handle millions of transactions across the United States, Europe, the Middle East, and Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#004AAD] mb-2 block">
                CURRENT OPPORTUNITIES
              </span>
              <h2 className="text-3xl font-extrabold text-[#0f172a]">
                Open Engineering Roles
              </h2>
            </div>
            <p className="text-slate-500 text-sm mt-2 sm:mt-0">
              Showing {openRoles.length} active positions
            </p>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-[#fafafa] hover:bg-white border border-slate-200/90 hover:border-[#004AAD]/40 rounded-2xl transition-all duration-200 hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-[#004AAD] bg-[#004AAD]/10 px-2.5 py-0.5 rounded-full">
                      {role.department}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {role.location}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      {role.experience}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#004AAD] transition-colors mb-2">
                    {role.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {role.desc}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <button
                    onClick={() => handleApply(role.title)}
                    className="w-full md:w-auto px-6 py-3 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold shadow-xs hover:shadow-md transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-16 px-6 sm:px-8 bg-[#f8fafc] border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#004AAD] mb-2 block">
              BENEFITS & PERKS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
              Designed for High Performers
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200/80 text-center">
              <span className="font-bold text-slate-900 block text-base mb-1">Top 5% Compensation</span>
              <span className="text-xs text-slate-500">Above-market compensation + equity incentives</span>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200/80 text-center">
              <span className="font-bold text-slate-900 block text-base mb-1">Continuous Learning</span>
              <span className="text-xs text-slate-500">Generous conference & research paper stipend</span>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200/80 text-center">
              <span className="font-bold text-slate-900 block text-base mb-1">Hybrid Flexibility</span>
              <span className="text-xs text-slate-500">Work from modern labs or remote with high trust</span>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200/80 text-center">
              <span className="font-bold text-slate-900 block text-base mb-1">Health & Wellness</span>
              <span className="text-xs text-slate-500">Comprehensive health coverage for you and family</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
