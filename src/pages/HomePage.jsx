import React from 'react';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card-effect';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Clock, Layers, ShoppingBag, Palette, Server, Code2, Cpu, Cloud, Smartphone, ShieldCheck } from 'lucide-react';
import { insightsArticles } from '../data/insightsArticles';
import { provisions, industries, whyPillars, projects } from '../data/siteData';
import TechStackShowcase from '../components/TechStackShowcase';
import MethodologyProcessCards from '../components/MethodologyProcessCards';
import TrustedByFlowShowcase from '../components/TrustedByFlowShowcase';

const capabilityIcons = [Server, Code2, Cpu, Cloud, Smartphone, ShieldCheck];

const trustedLogos = [
  { name: "ArtArtist", src: "/assets/logos/logo-1.png" },
  { name: "Sanghi City", src: "/assets/logos/logo-2.png" },
  { name: "Ambhuja by Maytri", src: "/assets/logos/logo-3.png" },
  { name: "MasterBrush Art Foundation", src: "/assets/logos/logo-4.png" },
  { name: "ServFex", src: "/assets/logos/logo-5.png" },
  { name: "Yash Education", src: "/assets/logos/logo-6.png" },
  { name: "Easy BG Remover", src: "/assets/logos/logo-7.png" },
  { name: "Swayamkrushi", src: "/assets/logos/logo-8.png" },
  { name: "Value Laden", src: "/assets/logos/logo-9.png" },
  { name: "Akashya Labs and Tech", src: "/assets/logos/logo-10.png" },
];

export default function HomePage({ onOpenModal }) {
  const heroVideoRef = React.useRef(null);

  React.useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    // Continuous middle loop: skips intro/outro jumps and loops active middle animation (3.4s to 9.2s)
    const LOOP_START = 3.4;
    const LOOP_END = 9.2;

    let animId;
    const checkLoop = () => {
      if (video) {
        if (video.currentTime >= LOOP_END || video.currentTime < LOOP_START - 0.3) {
          video.currentTime = LOOP_START;
          if (video.paused) {
            video.play().catch(() => {});
          }
        }
      }
      animId = requestAnimationFrame(checkLoop);
    };

    const handleLoadedMetadata = () => {
      video.currentTime = LOOP_START;
      video.play().catch(() => {});
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    if (video.readyState >= 1) {
      if (video.currentTime < LOOP_START || video.currentTime >= LOOP_END) {
        video.currentTime = LOOP_START;
      }
      video.play().catch(() => {});
    }

    animId = requestAnimationFrame(checkLoop);

    return () => {
      cancelAnimationFrame(animId);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <>
      {/* ================= HERO SECTION (CLEAN & ENTERPRISE-READY) ================= */}
      <section className="hero-section hero-enterprise-layout">
        <div className="hero-container">
          {/* Left Column: Text & CTAs */}
          <div className="hero-text-col">
            <h1 className="hero-title">
              Technology That Drives<br className="hidden sm:inline" />
              Business <span className="hero-title-accent">Growth.</span>
            </h1>

            <p className="hero-description">
              We build intelligent software, AI solutions, and scalable cloud systems that help businesses grow.
            </p>

            <div className="hero-actions">
              <a href="#solutions" className="hero-btn-primary">
                <span>Explore Our Solutions →</span>

              </a>

              <button type="button" className="hero-btn-secondary" onClick={onOpenModal}>
                Let's Talk
              </button>
            </div>

            {/* Capability Indicators */}
            <div className="hero-capabilities">
              <div className="capability-item">
                <span className="capability-title">Software & AI</span>
                <span className="capability-desc">Smart digital products</span>
              </div>
              <div className="capability-divider" aria-hidden="true" />
              <div className="capability-item">
                <span className="capability-title">Cloud Solutions</span>
                <span className="capability-desc">Built to scale</span>
              </div>
              <div className="capability-divider" aria-hidden="true" />
              <div className="capability-item">
                <span className="capability-title">Product Delivery</span>
                <span className="capability-desc">Idea to launch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technology Illustration */}
          <div className="hero-illustration-col">
            <div className="hero-illustration-wrapper">
              <video 
                ref={heroVideoRef}
                autoPlay 
                loop 
                muted 
                playsInline 
                onTimeUpdate={(e) => {
                  if (e.currentTarget.currentTime >= 9.2 || e.currentTarget.currentTime < 3.1) {
                    e.currentTarget.currentTime = 3.4;
                  }
                }}
                poster="/assets/hero-poster.jpg"
                className="hero-illustration-media"
                aria-label="SkyWeb Technology Infrastructure and Ecosystem Illustration"
              >
                <source src="/assets/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY FOR BUSINESSES WITHOUT BOUNDARIES (EDITORIAL BENTO GRID - EXACT MATCH TO IMAGE) ================= */}
      <section className="site-section bg-white pt-10 pb-20 px-6 sm:px-8 border-y border-slate-100" id="solutions">
        <div className="max-w-7xl mx-auto">
          {/* Header Block matching Reference Image: Title on Left, Subtext on Right */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-10 sm:mb-14">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#004AAD] block mb-2 font-mono">
                LATEST THINKING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight font-['DM_Sans'] leading-[1.15]">
                Technology for Businesses Without <span className="accent-text">Boundaries</span>
              </h2>
            </div>
            <div className="max-w-md lg:pt-3">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Read what we're thinking. Research that uncovers what's next. Perspectives that challenge the status quo. Ideas that help you see around corners.
              </p>
            </div>
          </div>

          {/* 3-Column Visual Editorial Grid exactly matching Reference Image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
            {/* COLUMN 1: Tall Card on Top (h-[490px]) + Standard Card Below (h-[250px]) */}
            <div className="flex flex-col gap-5">
              {/* Card 1: Robotic Arm (Tall) */}
              <Link
                to="/insights/ai-machine-learning"
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-slate-200/80 bg-slate-950 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[360px] sm:h-[420px] lg:h-[490px]"
              >
                <img
                  src="/assets/who-robotics.jpg"
                  alt="Robotic arm in manufacturing facility representing AI Adoption"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-40% to-black/20 group-hover:via-black/35 transition-colors duration-500" />
                
                {/* Category Badge matching image */}
                <div className="relative z-10 p-5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-[3px] bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/90">
                    BLOG | ARTIFICIAL INTELLIGENCE
                  </span>
                </div>

                {/* Editorial Title */}
                <div className="relative z-10 p-5 sm:p-6 mt-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight font-['DM_Sans'] group-hover:text-sky-300 transition-colors duration-300">
                    From AI Adoption to AI Advantage
                  </h3>
                </div>
              </Link>

              {/* Card 2: 3D Iridescent Spheres (Standard) */}
              <Link
                to="/insights/software-engineering"
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-slate-200/80 bg-slate-950 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[250px] sm:h-[260px] lg:h-[250px]"
              >
                <img
                  src="/assets/who-cloud.jpg"
                  alt="Intelligent cloud systems and 3D spheres"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-45% to-black/20 group-hover:via-black/35 transition-colors duration-500" />
                
                <div className="relative z-10 p-5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-[3px] bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/90">
                    BLOG | ARTIFICIAL INTELLIGENCE
                  </span>
                </div>

                <div className="relative z-10 p-5 sm:p-6 mt-auto">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug tracking-tight font-['DM_Sans'] group-hover:text-sky-300 transition-colors duration-300">
                    Next-Gen AI Pipelines &amp; Enterprise Foundation Models
                  </h3>
                </div>
              </Link>
            </div>

            {/* COLUMN 2: Three Stacked Standard Cards (h-[233px] + h-[234px] + h-[233px]) */}
            <div className="flex flex-col gap-5">
              {/* Card 3: Open Banking (Top) */}
              <Link
                to="/insights/business-technology"
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-slate-200/80 bg-slate-950 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[250px] sm:h-[260px] lg:h-[233px]"
              >
                <img
                  src="/assets/who-banking.jpg"
                  alt="Open Banking and Fintech Innovation"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-45% to-black/20 group-hover:via-black/35 transition-colors duration-500" />
                
                <div className="relative z-10 p-5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-[3px] bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/90">
                    BLOG | BANKING AND FINANCIAL SERVICES
                  </span>
                </div>

                <div className="relative z-10 p-5 sm:p-6 mt-auto">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug tracking-tight font-['DM_Sans'] group-hover:text-sky-300 transition-colors duration-300">
                    Open Banking at an Inflection Point: Why Banks Must Act Now
                  </h3>
                </div>
              </Link>

              {/* Card 4: Security by Design / 3D Torus (Middle) */}
              <Link
                to="/insights/cloud-infrastructure"
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-slate-200/80 bg-slate-950 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[250px] sm:h-[260px] lg:h-[234px]"
              >
                <img
                  src="/assets/who-3d.jpg"
                  alt="Security by design 3D torus"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-45% to-black/20 group-hover:via-black/35 transition-colors duration-500" />
                
                <div className="relative z-10 p-5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-[3px] bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/90">
                    WHITEPAPER | CYBER SECURITY
                  </span>
                </div>

                <div className="relative z-10 p-5 sm:p-6 mt-auto">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug tracking-tight font-['DM_Sans'] group-hover:text-sky-300 transition-colors duration-300">
                    Security by Design: A GenAI Model for Trust and Growth
                  </h3>
                </div>
              </Link>

              {/* Card 5: Communications / Man on Phone (Bottom) */}
              <Link
                to="/insights/digital-platforms"
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-slate-200/80 bg-slate-950 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[250px] sm:h-[260px] lg:h-[233px]"
              >
                <img
                  src="/assets/who-team.jpg"
                  alt="Enterprise Communications and Global Networks"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-45% to-black/20 group-hover:via-black/35 transition-colors duration-500" />
                
                <div className="relative z-10 p-5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-[3px] bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/90">
                    WHITEPAPER | COMMUNICATIONS
                  </span>
                </div>

                <div className="relative z-10 p-5 sm:p-6 mt-auto">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug tracking-tight font-['DM_Sans'] group-hover:text-sky-300 transition-colors duration-300">
                    Modern Omnichannel Infrastructure for Global Teams
                  </h3>
                </div>
              </Link>
            </div>

            {/* COLUMN 3: Standard Card on Top (h-[250px]) + Tall Card Below (h-[490px]) */}
            <div className="flex flex-col gap-5">
              {/* Card 6: Agentic AI for Oil & Gas (Top) */}
              <Link
                to="/insights/technology-consulting"
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-slate-200/80 bg-slate-950 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[250px] sm:h-[260px] lg:h-[250px]"
              >
                <img
                  src="/assets/who-engineer.jpg"
                  alt="Agentic AI for Oil and Gas Upstream Operations"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-45% to-black/20 group-hover:via-black/35 transition-colors duration-500" />
                
                <div className="relative z-10 p-5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-[3px] bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/90">
                    WHITEPAPER | ENERGY AND UTILITIES
                  </span>
                </div>

                <div className="relative z-10 p-5 sm:p-6 mt-auto">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug tracking-tight font-['DM_Sans'] group-hover:text-sky-300 transition-colors duration-300">
                    Agentic AI for Oil and Gas Upstream Operations
                  </h3>
                </div>
              </Link>

              {/* Card 7: 3D Cubes (Tall, Bottom) */}
              <Link
                to="/insights/software-engineering"
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-slate-200/80 bg-slate-950 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[360px] sm:h-[420px] lg:h-[490px]"
              >
                <img
                  src="/assets/who-cubes.jpg"
                  alt="Autonomous Enterprise Architecture and Modular Cubes"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-40% to-black/20 group-hover:via-black/35 transition-colors duration-500" />
                
                <div className="relative z-10 p-5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-[3px] bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/90">
                    BLOG | ARTIFICIAL INTELLIGENCE
                  </span>
                </div>

                <div className="relative z-10 p-5 sm:p-6 mt-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight font-['DM_Sans'] group-hover:text-sky-300 transition-colors duration-300">
                    Autonomous Enterprise Platforms: Modular Architecture for Scale
                  </h3>
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom Enterprise Partnership Ribbon */}
          <div className="mt-10 bg-[#fafafa] border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#004AAD] mb-2">
                <span>Hyderabad R&D Core</span>
                <span className="text-slate-300">•</span>
                <span>Dubai Hub (DIFC)</span>
                <span className="text-slate-300">•</span>
                <span>Cape Town</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 font-['DM_Sans']">
                Technology Partner for Businesses Ready to <span className="accent-text">Grow</span>
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether modernizing core platforms, automating complex workflows, or expanding into international markets, SkyWeb provides the engineering capabilities and technology infrastructure to help you move forward.
              </p>
            </div>

            <button 
              type="button"
              className="px-8 py-3.5 rounded-xl bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all whitespace-nowrap cursor-pointer flex-shrink-0" 
              onClick={onOpenModal}
            >
              Work With Us
            </button>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY BANNER ================= */}
      <section className="banner-section">
        <div className="section-container">
          <div className="banner-content-box">
            <span className="section-eyebrow light">OUR PHILOSOPHY</span>
            <h2 className="banner-title">
              We Don't Just Build Technology.<br />
              We Enable Businesses With <span className="text-sky-400">It.</span>
            </h2>
            <p className="banner-subtext">
              Technology should solve business problems, not create more of them. SkyWeb works alongside businesses to understand their goals, design the right technology strategy, build the required systems, and continuously improve them as they grow.
            </p>

            <div className="flow-steps-row">
              <span className="flow-chip">Business</span>
              <span className="flow-arrow">→</span>
              <span className="flow-chip">Strategy</span>
              <span className="flow-arrow">→</span>
              <span className="flow-chip">Technology</span>
              <span className="flow-arrow">→</span>
              <span className="flow-chip">Scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE (CORE CAPABILITIES) ================= */}
      <section className="site-section bg-subtle" id="services">
        <div className="section-container">
          <div className="section-header-block">
            <span className="section-eyebrow">CORE CAPABILITIES</span>
            <h2 className="section-headline">
              What We <span className="accent-text">Provide</span>
            </h2>
            <p className="section-subhead">
              The systems, software, and digital infrastructure businesses need to build, operate, and scale in a connected world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {provisions.map((item, idx) => {
              const IconComponent = capabilityIcons[idx % capabilityIcons.length];
              return (
                <Link
                  key={idx}
                  to={item.href || "/capabilities"}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-blue-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
                    
                    {/* Top Right Number Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="w-7 h-7 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center text-xs font-bold shadow-sm">
                        {item.number || `0${idx + 1}`}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        {IconComponent && (
                          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <IconComponent className="w-5 h-5" />
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-['DM_Sans'] tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        {item.desc}
                      </p>

                      {/* Highlights Pill Badges */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {item.highlights.map((hl, hIdx) => (
                            <span
                              key={hIdx}
                              className="text-[11px] font-medium text-slate-600 bg-slate-100 group-hover:bg-blue-50 group-hover:text-blue-700 px-2.5 py-1 rounded-md transition-colors"
                            >
                              {hl}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <span className="text-xs font-bold text-blue-600 group-hover:text-blue-700 tracking-wider uppercase flex items-center gap-1.5">
                        Explore Capability
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium tracking-wide uppercase">Enterprise Ready</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="site-section" id="process">
        <div className="section-container">
          <div className="section-header-block">
            <span className="section-eyebrow">METHODOLOGY</span>
            <h2 className="section-headline">How We <span className="accent-text">Work</span></h2>
            <p className="section-subhead">
              A structured, transparent engineering process designed to reduce risk and deliver high-performance technology on schedule.
            </p>
          </div>

          <MethodologyProcessCards />
        </div>
      </section>

      {/* ================= EDITORIAL BANNER (SKYWEB BLUE BRAND STYLE) ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#030a1c] via-[#071940] to-[#030d24] text-white">
        
        {/* Electric Blue Ambient Glows (Clean - No Pattern Lines) */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#004AAD]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end min-h-[500px] lg:min-h-[560px]">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 py-14 sm:py-16 lg:py-20 flex flex-col justify-center">

              {/* Bold Big Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-white tracking-tight font-['DM_Sans'] leading-[1.08] mb-6 max-w-2xl">
                Making Technology Work Without Boundaries
              </h2>

              {/* Inspiring Leadership Quote Callout */}
              <blockquote className="text-base sm:text-lg text-blue-100/90 font-medium italic leading-relaxed mb-7 max-w-xl">
                “Talent alone doesn't build careers — systems do. We architect the infrastructure where creative passion meets enterprise scale.”
              </blockquote>

              {/* Author Attribution */}
              <div className="mb-9">
                <h4 className="text-lg sm:text-xl font-bold text-white font-['DM_Sans'] leading-tight">
                  Uday Kumar Sangisetti
                </h4>
                <p className="text-xs sm:text-sm text-blue-200/80 font-normal mt-1 leading-snug">
                  Founder, ArtArtist.in &bull; Client Management &amp; Tech Consultant, SkyWeb
                </p>
              </div>

              {/* Red Rectangular Action Button */}
              <div>
                <Link
                  to="/about/leadership/uday-kumar-sangisetti"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#e31837] hover:bg-[#c4142e] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all shadow-lg shadow-red-950/40 rounded-[2px]"
                >
                  READ MORE
                </Link>
              </div>

            </div>

            {/* Right Column: Neat Cutout Image Touching the Bottom with Ambient Backlight (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-end h-full">
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none flex justify-center lg:justify-end items-end">
                {/* Backlight so dark trousers and silhouette pop cleanly against blue */}
                <div className="absolute bottom-10 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-6 w-80 h-96 bg-[#004AAD]/35 rounded-full blur-3xl pointer-events-none" />
                
                <img
                  src="/assets/big-thinker.png"
                  alt="Uday Kumar Sangisetti"
                  className="relative z-10 w-auto h-[400px] sm:h-[480px] lg:h-[540px] xl:h-[580px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] select-none"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="site-section bg-subtle" id="industries">
        <div className="section-container">
          <div className="section-header-block">
            <h2 className="section-headline">Industries We <span className="accent-text">Support</span></h2>
            <p className="section-subhead">
              Tailored technology infrastructure built to address industry-specific compliance, performance, and scaling demands.
            </p>
          </div>

          <div className="cards-grid-3">
            {industries.map((ind, idx) => (
              <div className="industry-card" key={idx}>
                <h3 className="card-title">{ind.title}</h3>
                <p className="card-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="site-section bg-white" id="tech-stack">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#004AAD] bg-blue-50 border border-blue-200/80 mb-3">
              TECHNOLOGY FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] font-['DM_Sans'] tracking-tight mb-3">
              Modern Technologies We Build <span className="text-[#004AAD]">With</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Battle-tested frameworks, resilient cloud infrastructure, and AI toolchains powering scalable applications.
            </p>
          </div>

          <TechStackShowcase />
        </div>
      </section>

      {/* ================= WHY SKYWEB ================= */}
      <section className="site-section bg-subtle">
        <div className="section-container">
          <div className="why-split-container">
            <div className="why-left-pitch">
              <span className="section-eyebrow">VALUE PROPOSITION</span>
              <h2 className="why-big-statement">
                Technology Built Around Your <span className="accent-text">Business</span>
              </h2>
              <p className="why-pitch-lead">
                Every business has different challenges. Instead of forcing businesses into predefined solutions, we design technology around the way your organization operates.
              </p>

              <div className="brand-manifesto-box">
                <p>
                  Your Business.<br />
                  <span className="accent-text">Your Requirements.</span><br />
                  Your Technology.
                </p>
              </div>
            </div>

            <div className="why-cards-list">
              {whyPillars.map((pillar, idx) => (
                <div className="why-card" key={idx}>
                  <h3 className="card-title">{pillar.title}</h3>
                  <p className="card-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR WORK ================= */}
      <section className="site-section" id="work">
        <div className="section-container">
          <div className="section-header-block">
            <span className="section-eyebrow">PORTFOLIO</span>
            <h2 className="section-headline">Technology We Have <span className="accent-text">Delivered</span></h2>
            <p className="section-subhead">
              Real products, platforms, and business systems empowering organizations across categories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
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

          <div className="section-centered-action">
            <button className="btn-primary" onClick={onOpenModal}>
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* ================= INSIGHTS & TECHNOLOGY ARTICLES SECTION ================= */}
      <section className="site-section bg-subtle" id="insights">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="section-eyebrow">TECHNOLOGY FOR BUSINESSES WITHOUT BOUNDARIES</span>
              <h2 className="section-headline">
                Engineering the Future of Business
              </h2>
              <p className="section-subhead">
                Explore technology insights, engineering perspectives, and digital transformation strategies from SkyWeb IT Solutions.
              </p>
            </div>
            <div>
              <Link 
                to="/insights" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <span>View All Insights</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ================= 6 INDIVIDUAL TECHNOLOGY ARTICLE CARDS ================= */}
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#0f172a]">
              Enterprise Technology & Practice Insights
            </h3>
            <span className="text-xs text-slate-500 font-medium">6 Full Articles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {insightsArticles.filter((a) => !a.isNews).map((article) => (
              <article 
                key={article.slug}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white flex flex-col group hover:shadow-xl hover:border-[#004AAD]/30 transition-all duration-300"
              >
                <Link 
                  to={`/insights/${article.slug}`} 
                  className="block aspect-[16/10] overflow-hidden bg-slate-100 relative"
                  aria-label={`Read ${article.title}`}
                >
                  <img 
                    src={article.image} 
                    alt={article.imageAlt} 
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2.5 font-medium">
                    <span>{article.publishedDate || 'October 2026'}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0f172a] leading-snug mb-2.5 group-hover:text-[#004AAD] transition-colors">
                    <Link to={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {article.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <Link 
                      to={`/insights/${article.slug}`} 
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004AAD] hover:text-[#003B8A] transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                      Enterprise Insight
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUSTED BY FLOW SLIDESHOW ================= */}
      <TrustedByFlowShowcase logos={trustedLogos} />
    </>
  );
}
