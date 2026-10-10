import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Cpu,
  Server,
  CheckCircle2,
  Activity
} from 'lucide-react';
import { AuroraBackground } from '../components/ui/aurora-background';
import { DigitalSerenity } from '../components/ui/digital-serenity-animated-landing-page';
import { showcaseServices } from '../data/servicesData';
import { faqs } from '../data/faqData';

export default function HomePage({ setActivePage, onSelectProject, onOpenQuoteModal }) {
  // Live Architecture Mockup Tab State
  const [activeConsoleTab, setActiveConsoleTab] = useState('telemetry');

  // Testimonial Carousel State & Auto-slide
  const [currentQuoteIdx, setCurrentQuoteIdx] = useState(0);
  const [isQuotePaused, setIsQuotePaused] = useState(false);
  const quotes = [
    {
      quote: "Their team felt like an extension of ours — responsive, proactive, and obsessed with quality. They delivered our enterprise web suite in record time with zero compromise.",
      author: "Priya Menon",
      role: "Founder, High-Growth D2C Brand",
      highlight: "Obsessed with quality"
    },
    {
      quote: "Skyweb transformed our monolithic legacy backend into a modular microservices architecture that reduced client-side latency by 64%. Worth every single cent.",
      author: "David Vance",
      role: "VP of Engineering, Global Logistics",
      highlight: "64% Latency Reduction"
    },
    {
      quote: "In an industry full of commodity agencies that outsource their thinking, Skyweb's founders actually understand algorithmic scaling and high-status brand design.",
      author: "Siddharth Rao",
      role: "Managing Director, Apex Ventures",
      highlight: "Unmatched Technical Mastery"
    }
  ];

  // Auto-slide testimonials every 4.5 seconds (pauses on hover)
  React.useEffect(() => {
    if (isQuotePaused) return;
    const slideTimer = setInterval(() => {
      setCurrentQuoteIdx((prev) => (prev + 1) % quotes.length);
    }, 4500);

    return () => clearInterval(slideTimer);
  }, [isQuotePaused, quotes.length]);

  // FAQ Accordion State
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="light-canvas" style={{ minHeight: '100vh' }}>
      {/* PRIMARY HERO SECTION WITH AURORA BACKGROUND (AT THE VERY TOP) */}
      <AuroraBackground className="min-h-[90vh] h-auto pt-24 pb-20 px-4 md:px-8 bg-white dark:bg-[#090d16]">
        <section
          style={{
            maxWidth: '1440px',
            width: '100%',
            margin: '0 auto',
            position: 'relative',
            zIndex: 10
          }}
        >
        <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>

          {/* Sassy & Confident Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
              fontWeight: '800',
              lineHeight: '1.08',
              color: '#0f172a',
              letterSpacing: '-0.035em',
              marginBottom: '24px'
            }}
          >
            We engineer scalable software that{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #1800ad 0%, #2a10d8 60%, #4f46e5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              commands market share.
            </span>
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.7',
              color: '#475569',
              maxWidth: '840px',
              margin: '0 auto 36px',
              fontWeight: '400'
            }}
          >
            At Skyweb Private Limited, we build creative, powerful, and scalable web solutions designed to help ambitious businesses grow online. We blend high-throughput MERN stack engineering, bespoke AI systems, and modern UI/UX design into digital platforms that make competitors obsolete.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={onOpenQuoteModal} className="btn-primary-blue">
              <span>Initiate Project Scope</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => {
                setActivePage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-secondary-light"
            >
              <span>Explore Case Studies</span>
            </button>
          </div>
        </div>

        {/* LIVE ARCHITECTURE & TELEMETRY MOCKUP (Interactive & High-End) */}
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.03)',
            overflow: 'hidden'
          }}
        >
          {/* Console Topbar */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            {/* Window Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: '#64748b', marginLeft: '8px' }}>
                skyweb-mesh // cluster-ap-south-1
              </span>
            </div>

            {/* Interactive Console Tabs */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {[
                { id: 'telemetry', label: 'Real-Time Telemetry', icon: Activity },
                { id: 'mesh', label: 'Microservices Mesh', icon: Server },
                { id: 'ai', label: 'Neural AI Pipeline', icon: Cpu }
              ].map((tab) => {
                const Icon = tab.icon;
                const active = activeConsoleTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveConsoleTab(tab.id)}
                    className={`console-tab-btn ${active ? 'active' : ''}`}
                  >
                    <Icon size={14} className="tab-icon" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Status pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: '#059669', fontWeight: '700' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#059669' }} />
              <span>SLA: 99.99% Operational</span>
            </div>
          </div>

          {/* Console Body depending on tab */}
          <div style={{ padding: '28px 32px' }}>
            {activeConsoleTab === 'telemetry' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#64748b', marginBottom: '6px' }}>
                    AVG LATENCY
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a' }}>38ms</div>
                  <div style={{ fontSize: '0.74rem', color: '#059669', fontWeight: '600', marginTop: '4px' }}>
                    ↓ 62% faster than industry norm
                  </div>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#64748b', marginBottom: '6px' }}>
                    CONCURRENT SESSIONS
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a' }}>124,500+</div>
                  <div style={{ fontSize: '0.74rem', color: '#1800ad', fontWeight: '600', marginTop: '4px' }}>
                    Auto-scaled across AWS clusters
                  </div>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#64748b', marginBottom: '6px' }}>
                    DATABASE QUERY TIME
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a' }}>4.2ms</div>
                  <div style={{ fontSize: '0.74rem', color: '#059669', fontWeight: '600', marginTop: '4px' }}>
                    Indexed MongoDB & PostgreSQL
                  </div>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#64748b', marginBottom: '6px' }}>
                    SECURITY AUDIT
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#059669' }}>PASS 100%</div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: '600', marginTop: '4px' }}>
                    OWASP Top 10 Compliant
                  </div>
                </div>
              </div>
            )}

            {activeConsoleTab === 'mesh' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Server size={18} color="#1800ad" />
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0f172a' }}>Identity & Auth Service (Nano Profiles)</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Kubernetes Ingress • Redis Session Cache • JWT EdDSA</div>
                    </div>
                  </div>
                  <span className="badge-clean badge-emerald">Healthy (0.01% err)</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Server size={18} color="#1800ad" />
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0f172a' }}>Checkout & Escrow Engine (Retrend & Craft Hindustan)</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Stripe Webhook Pipeline • Event Sourcing • Zero-Downtime Migration</div>
                    </div>
                  </div>
                  <span className="badge-clean badge-emerald">Healthy (0.00% err)</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Server size={18} color="#1800ad" />
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0f172a' }}>High-Speed Verification Daemon (phone-and-mail-verifier)</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b' }}>PyPI Published • Rust-backed Regex • 45k+ Global Installs</div>
                    </div>
                  </div>
                  <span className="badge-clean badge-blue">Active Stream</span>
                </div>
              </div>
            )}

            {activeConsoleTab === 'ai' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                    Sky Pixels Neural Segmenter
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: '1.5', marginBottom: '14px' }}>
                    Sub-second background isolation and edge feathering using custom ONNX checkpoints deployed on AWS SageMaker.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ color: '#64748b' }}>Speed: 210ms</span>
                    <span style={{ color: '#059669', fontWeight: '700' }}>99.4% Precision</span>
                  </div>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                    H-Bot Civic Conversational Agent
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: '1.5', marginBottom: '14px' }}>
                    Multi-lingual RAG retrieval architecture connecting citizen inquiries to municipal API services in real-time.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ color: '#64748b' }}>Embedding: 1536-dim</span>
                    <span style={{ color: '#1800ad', fontWeight: '700' }}>Pinecone Vector Mesh</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      </AuroraBackground>

      {/* EXECUTIVE TRUST STRIP */}
      <section style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '48px 24px' }}>
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            textAlign: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#0f172a', fontFamily: 'var(--font-sans)', lineHeight: '1' }}>
              12+
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748b', letterSpacing: '0.06em', marginTop: '8px' }}>
              ENTERPRISE PLATFORMS DELIVERED
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>
              Across web, cloud, and mobile
            </div>
          </div>

          <div>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#0f172a', fontFamily: 'var(--font-sans)', lineHeight: '1' }}>
              99.99%
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748b', letterSpacing: '0.06em', marginTop: '8px' }}>
              PRODUCTION UPTIME SLA
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>
              Zero rollbacks, automated failovers
            </div>
          </div>

          <div>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#0f172a', fontFamily: 'var(--font-sans)', lineHeight: '1' }}>
              5+
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748b', letterSpacing: '0.06em', marginTop: '8px' }}>
              GLOBAL MARKETS SERVED
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>
              South Africa, USA, UK, Japan, India
            </div>
          </div>

          <div>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#0f172a', fontFamily: 'var(--font-sans)', lineHeight: '1' }}>
              100%
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748b', letterSpacing: '0.06em', marginTop: '8px' }}>
              CLIENT RETENTION & IP OWNERSHIP
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>
              Full source repositories handed over
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES & SERVICES MATRIX */}
      <section style={{ padding: '90px 24px', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#1800ad', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '8px' }}>
            ENGINEERING EXCELLENCE
          </div>
          <h2
            style={{
              fontSize: '2.8rem',
              fontWeight: '800',
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '16px'
            }}
          >
            What We Build
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: '640px', margin: '0 auto' }}>
            We specialize in mission-critical digital systems for businesses that demand high throughput, flawless user interfaces, and scalable architectures.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px'
          }}
        >
          {showcaseServices.map((service) => (
            <div
              key={service.id}
              className="card-luxury"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  <span className="badge-clean badge-blue" style={{ fontSize: '0.72rem', letterSpacing: '0.03em' }}>
                    {service.category}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: '#059669', fontWeight: '700', whiteSpace: 'nowrap' }}>
                    {service.highlightBadge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
                  {service.title}
                </h3>

                <p style={{ fontSize: '0.92rem', lineHeight: '1.65', color: '#475569', marginBottom: '24px' }}>
                  {service.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {service.capabilities.map((cap, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                      <CheckCircle2 size={15} color="#1800ad" style={{ flexShrink: 0 }} />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VERIFIED CLIENT SPOTLIGHT & TESTIMONIALS */}
      <section style={{ padding: '90px 24px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#1800ad', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '8px' }}>
          VERIFIED EXECUTIVE REVIEWS
        </div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '40px', letterSpacing: '-0.02em' }}>
          Trusted by High-Growth Founders & Engineering Leaders
        </h2>

        {/* Testimonial Card with Auto-Slide & Hover Pause */}
        <div
          className="card-luxury"
          onMouseEnter={() => setIsQuotePaused(true)}
          onMouseLeave={() => setIsQuotePaused(false)}
          style={{
            padding: '48px 40px',
            textAlign: 'left',
            boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)',
            position: 'relative',
            transition: 'all 0.35s ease'
          }}
        >
          <div
            key={`highlight-${currentQuoteIdx}`}
            style={{
              display: 'inline-block',
              backgroundColor: '#f0f0ff',
              color: '#1800ad',
              fontWeight: '700',
              fontSize: '0.76rem',
              padding: '4px 12px',
              borderRadius: '6px',
              marginBottom: '20px',
              animation: 'fadeIn 0.4s ease'
            }}
          >
            {quotes[currentQuoteIdx].highlight}
          </div>

          <blockquote
            key={`quote-${currentQuoteIdx}`}
            style={{
              fontSize: '1.35rem',
              fontWeight: '600',
              lineHeight: '1.6',
              color: '#1e293b',
              marginBottom: '28px',
              fontFamily: 'var(--font-serif)',
              animation: 'fadeIn 0.4s ease'
            }}
          >
            "{quotes[currentQuoteIdx].quote}"
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div key={`author-${currentQuoteIdx}`} style={{ animation: 'fadeIn 0.4s ease' }}>
              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a' }}>
                {quotes[currentQuoteIdx].author}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                {quotes[currentQuoteIdx].role}
              </div>
            </div>

            {/* Interactive Dots */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentQuoteIdx(idx)}
                  title={`Show testimonial ${idx + 1}`}
                  style={{
                    width: currentQuoteIdx === idx ? '26px' : '8px',
                    height: '8px',
                    borderRadius: '9999px',
                    backgroundColor: currentQuoteIdx === idx ? '#1800ad' : '#cbd5e1',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL SERENITY ANIMATED SHOWCASE */}
      <DigitalSerenity />

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#1800ad', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '6px' }}>
              TRANSPARENCY FIRST
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      fontWeight: '700',
                      fontSize: '1.02rem',
                      color: '#0f172a'
                    }}
                  >
                    <span style={{ paddingRight: '16px' }}>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      color="#64748b"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: '0 24px 22px',
                        fontSize: '0.94rem',
                        lineHeight: '1.7',
                        color: '#475569',
                        borderTop: '1px solid #f1f5f9',
                        paddingTop: '14px'
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
