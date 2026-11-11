import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { leadersDetailedData, allLeadersList } from '../data/leadersDetailedData';
import { 
  ArrowLeft, 
  Mail, 
  Award, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles,
  Quote,
  Building2,
  MapPin
} from 'lucide-react';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export default function LeaderProfilePage({ onOpenModal }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top on mount or id change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Alias lookup for backwards compatibility
  const aliasMap = {
    'ian-chenjerai': 'ian-tapiwa-chenjerai',
    'mohammed-rabbani': 'mohammed-rabbani-pasha',
    'vikhyath-nimmalapudi': 'nimmalapudi-vikhyath',
    'uday-sangisetti': 'uday-kumar-sangisetti'
  };

  const lookupId = aliasMap[id] || id;
  const leader = leadersDetailedData[lookupId] || leadersDetailedData["mohammed-rabbani-pasha"];

  // Filter other leaders to browse
  const otherLeaders = allLeadersList.filter((l) => l.id !== leader.id);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-slate-900 font-['DM_Sans'] antialiased">
      
      {/* ================= BREADCRUMB & BACK NAVIGATION ================= */}
      <section className="pt-28 sm:pt-32 pb-6 px-6 sm:px-8 border-b border-slate-300/70 bg-[#fbf9f4]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/about" className="hover:text-slate-900 transition-colors">About Us</Link>
            <span>/</span>
            <Link to="/about/leadership" className="hover:text-slate-900 transition-colors">Leadership</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">{leader.name}</span>
          </div>

          <Link
            to="/about/leadership"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#004AAD] transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-200/60 w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Leadership Grid</span>
          </Link>
        </div>
      </section>

      {/* ================= HERO EXECUTIVE PROFILE SHOWCASE ================= */}
      <section className="py-12 sm:py-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: PORTRAIT & QUICK ACTIONS (4 Cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-7">
                {/* Portrait Card */}
                <div className="relative aspect-[3/3.7] w-full rounded-xl overflow-hidden bg-[#d6d8db] flex items-end justify-center shadow-inner group">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                  />
                </div>

                {/* Identity & Role */}
                <div className="mt-6">
                  <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900 font-['DM_Sans']">
                    {leader.name}
                  </h1>
                  <p className="text-sm font-semibold text-[#004AAD] mt-1">
                    {leader.role}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {leader.company}
                  </p>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 mt-3">
                    <MapPin className="w-3.5 h-3.5 text-[#004AAD]" />
                    <span>{leader.location}</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-2.5">
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0A66C2] hover:bg-[#084e96] text-white transition-all shadow-sm"
                    >
                      <LinkedInIcon />
                      <span>Connect on LinkedIn</span>
                    </a>
                  )}

                  {leader.email && (
                    <a
                      href={`mailto:${leader.email}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all"
                    >
                      <Mail className="w-4 h-4 text-slate-600" />
                      <span>{leader.email}</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={onOpenModal}
                    className="w-full mt-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-sm cursor-pointer"
                  >
                    <span>Schedule Executive Meeting</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: EXECUTIVE BIOGRAPHY & DETAILS (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              
              {/* Executive Summary Card */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 sm:p-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#e31837]" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#e31837] font-mono">
                    EXECUTIVE PROFILE &amp; STRATEGIC VISION
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['DM_Sans'] leading-snug mb-5">
                  {leader.headline || `${leader.name} — ${leader.role}`}
                </h2>

                <p className="text-base sm:text-[16.5px] text-slate-700 leading-relaxed font-normal mb-8">
                  {leader.summary}
                </p>

                {/* Signature Leadership Philosophy Callout */}
                {leader.quote && (
                  <div className="relative bg-[#fbf9f4] border-l-4 border-[#004AAD] rounded-r-xl p-6 sm:p-7 shadow-xs">
                    <Quote className="w-8 h-8 text-[#004AAD]/20 absolute top-4 right-4" />
                    <p className="text-sm sm:text-base italic text-slate-800 leading-relaxed font-medium">
                      "{leader.quote}"
                    </p>
                    <span className="block mt-3 text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                      — {leader.name}
                    </span>
                  </div>
                )}

                {/* 4 Impact Stat Metrics */}
                {leader.keyMetrics && leader.keyMetrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
                    {leader.keyMetrics.map((metric, mIdx) => (
                      <div key={mIdx} className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-center">
                        <span className="block text-2xl sm:text-3xl font-black text-[#004AAD] font-['DM_Sans']">
                          {metric.value}
                        </span>
                        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mt-1">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Core Focus & Strategic Oversight */}
              {leader.focusAreas && leader.focusAreas.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 sm:p-10">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#004AAD]" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">
                      AREAS OF OVERSIGHT &amp; GOVERNANCE
                    </h3>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-6">
                    Key Architectural &amp; Strategic Domains
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {leader.focusAreas.map((area, aIdx) => (
                      <div 
                        key={aIdx} 
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-[#004AAD]/5 border border-slate-100 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#004AAD] mt-1.5 shrink-0" />
                        <span className="text-sm font-semibold text-slate-800 leading-snug">{area}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills / Tech Stack Pills */}
                  {leader.skills && leader.skills.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 font-mono">
                        Verified Technical &amp; Operational Capabilities
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {leader.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Career Experience & Milestones Timeline */}
              {leader.experience && leader.experience.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 sm:p-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-[#004AAD]" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">
                      CAREER TRAJECTORY &amp; ENGAGEMENTS
                    </h3>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-8">
                    Professional Experience &amp; Positions
                  </h4>

                  <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
                    {leader.experience.map((exp, eIdx) => (
                      <div key={eIdx} className="relative flex items-start gap-5 pl-2">
                        <div className="w-7 h-7 rounded-full bg-[#004AAD] text-white flex items-center justify-center shrink-0 z-10 shadow-sm mt-0.5">
                          <Building2 className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 bg-slate-50/70 hover:bg-slate-50 p-5 rounded-xl border border-slate-200/80 transition-colors">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                            <h5 className="text-base font-bold text-slate-900">
                              {exp.role}
                            </h5>
                            <span className="text-xs font-semibold text-[#004AAD] bg-[#004AAD]/10 px-2.5 py-0.5 rounded-full w-fit">
                              {exp.period}
                            </span>
                          </div>

                          <div className="text-xs text-slate-500 font-medium mb-3 flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-slate-700">{exp.company}</span>
                            <span>•</span>
                            <span>{exp.location}</span>
                            {exp.type && (
                              <>
                                <span>•</span>
                                <span className="text-slate-600">{exp.type}</span>
                              </>
                            )}
                          </div>

                          <p className="text-sm text-slate-600 leading-relaxed font-normal">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education & Certifications */}
              {(leader.education || leader.certifications) && (
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 sm:p-10">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-4 h-4 text-[#004AAD]" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">
                      ACADEMIC BACKGROUND &amp; CREDENTIALS
                    </h3>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-6">
                    Education &amp; Professional Certifications
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Education Column */}
                    {leader.education && leader.education.map((edu, edIdx) => (
                      <div key={edIdx} className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                        <div>
                          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004AAD] mb-2 font-mono">
                            <GraduationCap className="w-4 h-4" />
                            <span>{edu.year}</span>
                          </div>
                          <h5 className="text-sm font-bold text-slate-900 leading-snug">
                            {edu.degree}
                          </h5>
                          <p className="text-xs font-semibold text-slate-700 mt-1">
                            {edu.institution}
                          </p>
                          {edu.grade && (
                            <span className="inline-block mt-2 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                              Grade: {edu.grade}
                            </span>
                          )}
                        </div>
                        {edu.details && (
                          <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200/60 leading-relaxed">
                            {edu.details}
                          </p>
                        )}
                      </div>
                    ))}

                    {/* Certifications Column */}
                    {leader.certifications && (
                      <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004AAD] mb-3 font-mono">
                          <Award className="w-4 h-4" />
                          <span>LICENSES &amp; CERTIFICATIONS</span>
                        </div>
                        <div className="space-y-3">
                          {leader.certifications.map((cert, cIdx) => (
                            <div key={cIdx} className="pb-3 border-b border-slate-200/60 last:border-b-0 last:pb-0">
                              <h6 className="text-xs font-bold text-slate-900 leading-snug">
                                {cert.name}
                              </h6>
                              <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                                <span>{cert.issuer}</span>
                                <span className="font-semibold text-slate-700">{cert.year}</span>
                              </div>
                              {cert.credentialId && (
                                <p className="text-[10px] font-mono text-slate-400 mt-1 truncate">
                                  ID: {cert.credentialId}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Ecosystem Initiatives & Keynotes */}
              {leader.initiatives && leader.initiatives.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 sm:p-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#e31837]" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#e31837] font-mono">
                      COMMUNITY &amp; INDUSTRY LEADERSHIP
                    </h3>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-6">
                    Keynotes, Hackathons &amp; Ecosystem Impact
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {leader.initiatives.map((init, iIdx) => (
                      <div 
                        key={iIdx}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e31837] mt-1.5 shrink-0" />
                        <span>{init}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPLORE OTHER EXECUTIVE LEADERS ================= */}
      <section className="py-16 px-6 sm:px-8 border-t border-slate-300/80 bg-[#f4f2ea]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#e31837] block font-mono mb-1">
                CORPORATE STEWARDSHIP
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['DM_Sans']">
                Explore Other Leadership Profiles
              </h3>
            </div>
            <Link
              to="/about/leadership"
              className="text-xs font-bold uppercase tracking-wider text-[#004AAD] hover:text-[#003B8A] inline-flex items-center gap-1"
            >
              <span>View Full Leadership Grid</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {otherLeaders.map((other) => (
              <div
                key={other.id}
                onClick={() => navigate(`/about/leadership/${other.id}`)}
                className="group cursor-pointer bg-white rounded-xl border border-slate-200/90 hover:border-[#004AAD]/50 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[3/3.6] w-full bg-[#d6d8db] overflow-hidden">
                  <img
                    src={other.image}
                    alt={other.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-slate-900 group-hover:text-[#004AAD] transition-colors line-clamp-1">
                      {other.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {other.role}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#004AAD]">
                    <span>View Profile</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXECUTIVE CONSULTATION CTA ================= */}
      <section className="py-14 px-6 sm:px-8 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#004AAD] block font-mono mb-2">
            STRATEGIC PARTNERSHIP &amp; ENGAGEMENT
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['DM_Sans'] mb-4">
            Consult With {leader.name} &amp; SkyWeb Leadership
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Engage directly with our executive architects and practice leaders to discuss enterprise software modernization, agentic AI architecture, or global technology partnerships.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenModal}
              className="px-8 py-3.5 rounded-xl bg-[#004AAD] hover:bg-[#003B8A] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Start an Executive Consultation
            </button>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-all"
            >
              Direct Office Inquiries
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
