import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  Leaf, 
  Award, 
  MessageSquareQuote, 
  Handshake, 
  Layers, 
  Newspaper, 
  TrendingUp, 
  HeartHandshake, 
  Headphones,
  ArrowRight,
  Mail
} from 'lucide-react';
import { teamMembers } from '../data/siteData';
import { ClientReviewsGrid } from '../components/ui/profile-card-testimonial-carousel';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const hubSections = [
  {
    title: "Corporate Overview",
    href: "/about/overview",
    icon: Building2,
    desc: "Built by seasoned technologists from IIT Hyderabad & Madras, engineering software for global enterprises.",
    badge: "Heritage & Scale"
  },
  {
    title: "Leadership & Governance",
    href: "/about/leadership",
    icon: Users,
    desc: "Executive stewardship under CFO Vikhyath Nimmalapudi and founding systems engineers.",
    badge: "Executive Squad"
  },
  {
    title: "Our Brand & Purpose",
    href: "/about/brand",
    icon: ShieldCheck,
    desc: "Engineering Digital Possibilities: precision, zero-compromise code, and measurable enterprise value.",
    badge: "Brand Identity"
  },
  {
    title: "Sustainability & Green Cloud",
    href: "/about/sustainability",
    icon: Leaf,
    desc: "Algorithmic carbon reduction, renewable-first cloud compute, and sustainable microservices.",
    badge: "ESG & Green Tech"
  },
  {
    title: "Recognition & Awards",
    href: "/about/recognition",
    icon: Award,
    desc: "SOC 2 Type II, ISO 27001 verified, and internationally recognized for cloud delivery excellence.",
    badge: "Accolades"
  },
  {
    title: "Customer Speak & Trust",
    href: "/about/customer-speak",
    icon: MessageSquareQuote,
    desc: "Verified client testimonials and real-world results from CTOs, product directors, and partner brands.",
    badge: "Client Testimonials"
  },
  {
    title: "Partners Ecosystem",
    href: "/about/partners",
    icon: Handshake,
    desc: "Certified alliances with AWS, Microsoft Azure, Google Cloud, NVIDIA, SAP, and Salesforce.",
    badge: "Alliances"
  },
  {
    title: "Portfolio Companies & Labs",
    href: "/about/portfolio",
    icon: Layers,
    desc: "Proprietary incubated platforms including SkyCore Event Engine and AgentPulse AI.",
    badge: "Ventures"
  },
  {
    title: "News & Media Coverage",
    href: "/about/news",
    icon: Newspaper,
    desc: "Latest announcements, international expansion milestones, and engineering research whitepapers.",
    badge: "Press Room"
  },
  {
    title: "Investor Relations",
    href: "/about/investors",
    icon: TrendingUp,
    desc: "Disciplined capital stewardship, compounding revenue growth, and 60% reinvestment into R&D.",
    badge: "Financial Health"
  },
  {
    title: "Corporate Citizenship",
    href: "/about/citizenship",
    icon: HeartHandshake,
    desc: "SkyWeb Foundation, Mahindra Educational Institutions partnership, and Individual Social Responsibility.",
    badge: "Social Impact"
  },
  {
    title: "Customer Centricity Office",
    href: "/about/customer-centricity",
    icon: Headphones,
    desc: "Guaranteed 15-minute emergency response SLAs, dedicated TAMs, and direct engineer access.",
    badge: "Customer First"
  }
];

const featuredTestimonials = [
  {
    company: "MasterBrush Art Foundation",
    logo: "/assets/logos/logo-4.png",
    clientName: "Rohan Varma",
    role: "Executive Director",
    imageUrl: "/assets/testimonials/card-1.png",
    metric: "15,000+ Assets Preserved",
    rating: 5,
    quote: "SkyWeb built our philanthropic archival and digital exhibition platform with exceptional UX, robust cloud backup systems, and seamless accessibility across devices."
  },
  {
    company: "ArtArtist",
    logo: "/assets/logos/logo-1.png",
    clientName: "Uday Kumar Sangisetti",
    role: "VP of Technology",
    imageUrl: "/assets/testimonials/card-2.png",
    metric: "250K+ Active Artists",
    rating: 5,
    quote: "SkyWeb architected a high-throughput digital gallery and creator marketplace that scaled past 250,000 active creators seamlessly with flawless uptime."
  },
  {
    company: "Value Laden",
    logo: "/assets/logos/logo-9.png",
    clientName: "Lavanaya Pasunoori",
    role: "Chief Investment Officer",
    imageUrl: "/assets/testimonials/card-3.png",
    metric: "99.999% Calculation Accuracy",
    rating: 5,
    quote: "SkyWeb engineered our financial reporting engine and algorithmic advisory dashboard with unyielding accuracy, data privacy, and regulatory auditability."
  },
  {
    company: "Akashya Labs and Tech",
    logo: "/assets/logos/logo-10.png",
    clientName: "Mr. Venkat Reddy",
    role: "Founder & Chief Executive Officer",
    imageUrl: "/assets/testimonials/card-4.png",
    metric: "Zero Launch-Day Defects",
    rating: 5,
    quote: "A brilliant, agile team. They built our next-generation mobile platform on time, with strict adherence to security protocols and zero launch-day defects."
  },
  {
    company: "ServFex",
    logo: "/assets/logos/logo-5.png",
    clientName: "David Miller",
    role: "Chief Operations Officer",
    imageUrl: "/assets/testimonials/card-6.png",
    metric: "48% Faster Service Dispatch",
    rating: 5,
    quote: "The field service management engine and real-time dispatch APIs engineered by SkyWeb reduced technician turnaround times by 48% across thousands of service orders."
  }
];

export default function AboutPage({ onOpenModal }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['DM_Sans'] pb-24">
      {/* ================= 1. SKYWEB HUB HERO (UPPER SECTION ONLY IS SOLID BLACK & BLUE TEXT) ================= */}
      <section className="bg-black text-white pt-36 sm:pt-40 pb-20 px-6 sm:px-8 border-b border-slate-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-blue-500 max-w-4xl mx-auto leading-tight mb-6 font-['DM_Sans']">
            Pioneering Intelligent Software, Next-Gen AI Solutions &amp; Resilient Cloud Engineering
          </h1>

          <p className="text-base sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            Welcome to the SkyWeb Hub. Explore our corporate foundations, executive leadership, client trust testimonials, brand philosophy, sustainability mandates, and global innovation ecosystem.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#hub-directory"
              className="px-8 py-3.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-base font-bold shadow-[0_6px_20px_rgba(0,74,173,0.35)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <span>Explore SkyWeb Hub</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              onClick={onOpenModal}
              className="px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-slate-800 text-blue-200 hover:text-white text-base font-bold transition-all"
            >
              Schedule Technical Review
            </button>
          </div>
        </div>
      </section>

      {/* ================= 2. SKYWEB HUB DIRECTORY GRID (CLEAN WHITE ENTERPRISE BACKGROUND) ================= */}
      <section className="py-20 px-6 sm:px-8 bg-white border-b border-slate-100" id="hub-directory">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              SkyWeb Hub Directory
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Navigate our complete corporate architecture, leadership governance, client testimonials, and global initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubSections.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <Link
                  key={idx}
                  to={sec.href}
                  className="bg-[#fafafa] border border-slate-200/90 rounded-2xl p-6 sm:p-7 hover:border-[#004AAD]/50 hover:bg-white transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#004AAD]/10 text-[#004AAD] flex items-center justify-center group-hover:bg-[#004AAD] group-hover:text-white transition-colors duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full group-hover:border-blue-300 transition-colors">
                        {sec.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#004AAD] transition-colors font-['DM_Sans']">
                      {sec.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {sec.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#004AAD]">
                    <span>Explore Section</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 3. ORIGIN, MISSION & IIT ROOTS ================= */}
      <section className="py-20 px-6 sm:px-8 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 font-['DM_Sans'] leading-tight">
                Built by Engineers. Trusted Across Markets.
              </h2>
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#004AAD]/10 text-[#004AAD] mb-3">
                  <img src="/assets/logo.png" alt="SkyWeb" className="w-3.5 h-3.5 object-contain" />
                  <span>Hyderabad Core</span>
                  <span>→</span>
                  <span>Dubai DIFC</span>
                  <span>→</span>
                  <span>Cape Town</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Headquartered in Hyderabad, Telangana, India — we engineer scalable software platforms, modern cloud infrastructure, and enterprise AI systems for organizations worldwide.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-slate-600 text-base leading-relaxed">
              <p>
                SkyWeb IT Solutions Private Limited was established on a single core belief: <strong className="text-slate-900">technology should solve real business challenges, not create new friction</strong>. Too many businesses are constrained by bloated codebases, off-the-shelf software that doesn't fit, or fragile infrastructure.
              </p>
              <p>
                Our engineering leadership and core technical team bring deep academic foundations and hands-on production experience, including talent from India's premier technical institutions — <strong className="text-[#004AAD] font-semibold">IIT Hyderabad and IIT Madras</strong>.
              </p>
              <p>
                Today, our footprint spans across continents — delivering mission-critical software, custom business technology, and high-load web and mobile platforms for clients across <strong className="text-slate-900 font-semibold">India, Cape Town, Dubai, and emerging international tech corridors</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. EXECUTIVE LEADERSHIP TEAM ================= */}
      <section className="py-20 px-6 sm:px-8 bg-white border-b border-slate-100" id="leadership">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Executive Leadership
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A distributed team of software engineers, operational leaders, and technical innovators collaborating across India, South Africa, and international tech corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#004AAD]/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className={`w-full h-full object-cover ${member.imgPosition || 'object-top'} group-hover:scale-105 transition-transform duration-500`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold font-['DM_Sans'] text-white">
                        {member.name}
                      </h3>
                      <p className="text-xs text-blue-200 font-medium">
                        {member.flag ? `${member.flag} ` : ''}{member.location} • {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm"
                      >
                        <LinkedInIcon />
                        <span>LinkedIn</span>
                      </a>
                    )}

                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-[#004AAD] hover:text-white transition-all shadow-sm"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email</span>
                      </a>
                    )}
                  </div>

                  <Link 
                    to={`/about/leadership/${member.id === 'mohammed-rabbani' ? 'mohammed-rabbani-pasha' : member.id === 'ian-chenjerai' ? 'ian-tapiwa-chenjerai' : member.id === 'vikhyath-nimmalapudi' ? 'nimmalapudi-vikhyath' : member.id}`}
                    className="text-xs font-bold text-[#004AAD] hover:text-[#003B8A] inline-flex items-center gap-0.5"
                  >
                    <span>Profile</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. CUSTOMER SPEAK & TRUST (TESTIMONIALS) ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-slate-200" id="customer-speak">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight font-['DM_Sans']">
                Customer Speak &amp; Trust
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Authentic testimonials from technology officers, digital leads, and founders across high-traffic platforms and enterprise brands.
              </p>
            </div>
            <Link
              to="/about/customer-speak"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-[#004AAD] hover:text-[#003B8A] font-bold text-sm transition-all whitespace-nowrap self-start md:self-auto shadow-xs"
            >
              <span>View All Testimonials</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 2 in a line Grid - Good UI Profile Testimonial Cards */}
          <ClientReviewsGrid testimonials={featuredTestimonials} />
        </div>
      </section>

      {/* ================= 6. BOTTOM ACTION BANNER ================= */}
      <section className="pt-20 px-6 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto bg-black text-white border border-slate-800 rounded-3xl p-8 sm:p-14 text-center">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-blue-500 tracking-tight mb-3">
            Ready to Engineer What's Next?
          </h3>
          <p className="text-blue-200 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Direct Inquiries: <a href="mailto:offical@skywebinternational.com" className="text-blue-400 hover:underline font-semibold">offical@skywebinternational.com</a> • Hyderabad, Telangana, India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="px-8 py-3.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-base font-bold shadow-[0_6px_20px_rgba(0,74,173,0.35)] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-slate-800 text-blue-200 hover:text-white text-base font-bold transition-all"
            >
              Contact Our Practice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}