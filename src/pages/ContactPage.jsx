import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';

const MAPS_SHARE_URL = 'https://share.google/eOzV5bz83sB9MPWcI';
const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Cohort%20Coworking%20Kondapur%20Hyderabad&z=16&output=embed';

export default function ContactPage({ onOpenModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: 'Enterprise AI & Modernization',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['DM_Sans']">
      <PageHeader
        badge="GET IN TOUCH"
        title="Start an Engineering Conversation"
        subtitle="Connect directly with SkyWeb's principal software architects to explore how our engineering squads can accelerate your mission-critical initiatives."
        breadcrumb="Contact Us"
      />

      {/* Form */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#fafafa] border border-slate-200/90 rounded-3xl p-8 sm:p-10">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Received</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. Our principal enterprise solutions architect will review your project requirements and respond within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      phone: '',
                      serviceInterest: 'Enterprise AI & Modernization',
                      message: ''
                    });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#004AAD] text-white text-xs font-bold hover:bg-[#003B8A] transition-all"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2">
                    Request an Architectural Assessment
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    Fill out the form below and an engineering director will reach out promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#004AAD] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#004AAD] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Financial Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#004AAD] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#004AAD] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Primary Area of Interest
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#004AAD] transition-all"
                  >
                    <option value="Enterprise AI & Modernization">Enterprise AI & Modernization</option>
                    <option value="Cloud Architecture & Digital Core">Cloud Architecture & Digital Core</option>
                    <option value="Agentic Autonomous Systems">Agentic Autonomous Systems</option>
                    <option value="Data Lakehouses & Analytics">Data Lakehouses & Analytics</option>
                    <option value="Enterprise Applications (SAP, Salesforce)">Enterprise Applications (SAP, Salesforce)</option>
                    <option value="Cyber Security & Zero Trust">Cyber Security & Zero Trust</option>
                    <option value="Global Capability Center (GCC)">Global Capability Center (GCC)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Project Scope & Timeline
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your system requirements, scale targets, or technical challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#004AAD] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#004AAD] hover:bg-[#003B8A] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Architecture Inquiry</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map + hub card (Osome-style) */}
      <section className="pb-20 sm:pb-24 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3 block">
              Hyderabad
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Where We Engineer
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {/* Map */}
            <div className="relative min-h-[320px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-100">
              <iframe
                title="SkyWeb Hyderabad Core Hub — Cohort"
                src={MAPS_EMBED_URL}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={MAPS_SHARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 z-10 rounded-md bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm border border-slate-200 hover:text-[#004AAD] transition-colors"
              >
                View larger map
              </a>
            </div>

            {/* Info card */}
            <div className="rounded-2xl bg-[#f7f6f3] border border-slate-200/60 p-8 sm:p-10 flex flex-col justify-between min-h-[320px] sm:min-h-[380px]">
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Address
                  </p>
                  <a
                    href={MAPS_SHARE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg text-slate-800 leading-relaxed hover:text-[#004AAD] transition-colors"
                  >
                    Cohort, HITEC City, Madhapur,
                    <br />
                    Hyderabad, Telangana 500081, India
                  </a>
                  <p className="mt-2 text-sm text-[#004AAD] font-semibold">
                    Hyderabad Core Hub · Primary R&D Center (IIT Alumni)
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:contact@skyweb.tech"
                    className="text-base sm:text-lg text-slate-800 hover:text-[#004AAD] transition-colors"
                  >
                    contact@skyweb.tech
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:+919121428210"
                    className="text-base sm:text-lg text-slate-800 hover:text-[#004AAD] transition-colors"
                  >
                    +91 9121428210
                  </a>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-200/80 flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck className="h-4 w-4 text-[#004AAD] shrink-0" />
                <span>Enterprise NDA protected by default</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
