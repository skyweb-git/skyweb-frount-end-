import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Mail, MapPin, Send, CheckCircle2, Globe, Clock, ShieldCheck } from 'lucide-react';

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

      <section className="py-16 sm:py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 5 Cols: Global Offices & Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#004AAD] mb-2 block">
                  GLOBAL HUBS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-4">
                  Where We Engineer
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Headquartered in Hyderabad's premier technology corridor with engineering and client delivery pods across the Middle East and Africa.
                </p>
              </div>

              {/* Hub 1: Hyderabad */}
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#fafafa] hover:border-[#004AAD]/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-[#004AAD]/10 text-[#004AAD] flex items-center justify-center font-bold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Hyderabad Core Hub</h3>
                    <span className="text-xs text-[#004AAD] font-semibold">Primary R&D Center (IIT Alumni)</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  HITEC City, Madhapur, Hyderabad, Telangana 500081, India
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-slate-400" /> IST (UTC+5:30)</span>
                  <span className="flex items-center gap-1"><Globe className="h-3.5 w-3.5 text-slate-400" /> 24/7 Operations</span>
                </div>
              </div>

              {/* Hub 2: Dubai */}
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#fafafa] hover:border-[#004AAD]/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-[#004AAD]/10 text-[#004AAD] flex items-center justify-center font-bold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Dubai Regional Hub</h3>
                    <span className="text-xs text-[#004AAD] font-semibold">Middle East & North Africa</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  DIFC Gate Precinct, Dubai, United Arab Emirates
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-slate-400" /> GST (UTC+4)</span>
                </div>
              </div>

              {/* Direct channels */}
              <div className="p-6 rounded-2xl bg-[#004AAD]/5 border border-[#004AAD]/15 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">Direct Engineering Channels</h4>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Mail className="h-4 w-4 text-[#004AAD]" />
                  <a href="mailto:contact@skyweb.tech" className="hover:text-[#004AAD] font-semibold">
                    contact@skyweb.tech
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <ShieldCheck className="h-4 w-4 text-[#004AAD]" />
                  <span>Enterprise NDA protected by default</span>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Contact Form */}
            <div className="lg:col-span-7 bg-[#fafafa] border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xs">
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
                  <div>
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
        </div>
      </section>
    </div>
  );
}
