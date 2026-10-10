import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Send,
  Code2,
  Rocket,
  ShieldCheck,
  Award,
  Terminal,
  Clock,
  X
} from 'lucide-react';

export default function OpportunitiesPage({ initialTrack = 'internship', onOpenQuoteModal }) {
  const selectedTrack = 'internship';
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    track: initialTrack,
    note: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setApplyModalOpen(false);
      setFormData({ name: '', email: '', github: '', track: selectedTrack, note: '' });
    }, 2500);
  };

  return (
    <div className="light-canvas" style={{ minHeight: '100vh', padding: '60px 24px 100px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '3.2rem',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}
          >
            Skyweb Opportunities
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '680px', margin: '0 auto', lineHeight: '1.6' }}>
            We do not teach obsolete theory from dusty textbooks. You either engineer real production software alongside our founders or elevate your architectural thinking to top 1% standards.
          </p>
        </div>

        {/* TRACK 1: INTERNSHIP */}
        {selectedTrack === 'internship' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '36px',
                alignItems: 'stretch'
              }}
            >
              <div
                className="card-luxury"
                style={{
                  padding: '44px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '4px solid #1800ad'
                }}
              >
                <div>
                  <span className="badge-clean badge-blue" style={{ marginBottom: '18px' }}>
                    FULL-STACK & CLOUD ENGINEERING
                  </span>
                  <h2 style={{ fontSize: '2.3rem', fontWeight: '800', color: '#0f172a', marginBottom: '16px', lineHeight: '1.2' }}>
                    High-Impact Production Internship
                  </h2>
                  <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7', marginBottom: '32px' }}>
                    Forget fetching coffee or building dummy to-do apps. At Skyweb, interns write code that directly executes on production servers handling active users. You work alongside our senior architects on React 19, high-load microservices, and AI workflows.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
                    {[
                      'Live code review directly from Founders & Senior Architects',
                      'Hands-on experience with React 19, Node.js, Next.js, and AWS',
                      'Competitive stipend + performance bonuses for shipped features',
                      'Fast-track conversion to full-time Core Engineering roles'
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <CheckCircle2 size={18} color="#059669" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.94rem', color: '#334155', fontWeight: '500', lineHeight: '1.5' }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, track: 'internship' }));
                      setApplyModalOpen(true);
                    }}
                    className="btn-primary-blue"
                    style={{ width: '100%', padding: '16px 28px', fontSize: '1rem' }}
                  >
                    <span>Apply For Internship</span>
                    <ArrowRight size={18} />
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#94a3b8', marginTop: '12px' }}>
                    Cohorts are capped at 6 engineers to preserve 1:1 mentorship quality.
                  </p>
                </div>
              </div>

              {/* Curriculum Milestones */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="card-luxury" style={{ padding: '28px', borderLeft: '4px solid #1800ad' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: '#f0f0ff', color: '#1800ad' }}>
                      <Code2 size={24} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#1800ad', fontWeight: '700' }}>
                          PHASE 01 • WEEKS 1-4
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                        Systems Mastery & Clean Code
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                        Master Git branch hygiene, CI/CD automated test pipelines, React 19 concurrent features, and optimized state stores.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-luxury" style={{ padding: '28px', borderLeft: '4px solid #1F07BF' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: '#fffbeb', color: '#1F07BF' }}>
                      <Rocket size={24} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#1F07BF', fontWeight: '700' }}>
                          PHASE 02 • WEEKS 5-8
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                        High-Throughput APIs & Cloud Deployments
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                        Build scalable REST & GraphQL endpoints, Dockerize containers, and orchestrate cloud configurations on AWS and DigitalOcean.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-luxury" style={{ padding: '28px', borderLeft: '4px solid #059669' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: '#ecfdf5', color: '#059669' }}>
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#059669', fontWeight: '700' }}>
                          PHASE 03 • WEEKS 9-12
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                        Production Feature Delivery
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                        Own an end-to-end client feature milestone with telemetry, OWASP security audits, and zero-rollback deployment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Perks & Eligibility Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px'
              }}
            >
              <div className="card-luxury" style={{ padding: '28px', backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <Award size={20} color="#1800ad" />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a' }}>Stipend & Rewards</h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.6' }}>
                  Competitive monthly stipend, performance bounties for critical bug resolutions, and public authorship recognition in shipped software.
                </p>
              </div>

              <div className="card-luxury" style={{ padding: '28px', backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <Terminal size={20} color="#059669" />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a' }}>Eligibility Criteria</h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.6' }}>
                  Demonstrable GitHub repository history, familiarity with modern JavaScript/TypeScript or Python, and an insatiable desire to solve hard technical puzzles.
                </p>
              </div>

              <div className="card-luxury" style={{ padding: '28px', backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <Clock size={20} color="#1F07BF" />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a' }}>Flexible Format</h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.6' }}>
                  Hybrid in Hyderabad HQ or remote-first with weekly pair-programming sprints, async PR reviews, and founder office hours.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* LIGHT LUXURY APPLICATION MODAL */}
        {applyModalOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setApplyModalOpen(false)}
          >
            <div
              className="card-luxury"
              style={{
                maxWidth: '560px',
                width: '100%',
                padding: '40px',
                position: 'relative',
                boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.3)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setApplyModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '6px'
                }}
              >
                <X size={20} />
              </button>

              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '36px 0' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: '#ecfdf5',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px'
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                    Application Dispatched
                  </h3>
                  <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: '1.6' }}>
                    Our engineering leads will evaluate your profile and reach out within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '24px' }}>
                    <span className="badge-clean badge-blue" style={{ marginBottom: '8px' }}>
                      PRODUCTION INTERNSHIP
                    </span>
                    <h3 style={{ fontSize: '1.9rem', fontWeight: '800', color: '#0f172a', marginTop: '6px', marginBottom: '6px' }}>
                      Candidate Application
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                      Please provide your authentic details. We value GitHub commits and grit above corporate credentials.
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '28px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#334155', marginBottom: '6px', fontWeight: '600' }}>
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Sharma"
                        style={{
                          width: '100%',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          borderRadius: '10px',
                          padding: '12px 16px',
                          color: '#0f172a',
                          fontSize: '0.92rem',
                          outline: 'none',
                          transition: 'border-color 0.2s'
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#1800ad')}
                        onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#334155', marginBottom: '6px', fontWeight: '600' }}>
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        style={{
                          width: '100%',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          borderRadius: '10px',
                          padding: '12px 16px',
                          color: '#0f172a',
                          fontSize: '0.92rem',
                          outline: 'none',
                          transition: 'border-color 0.2s'
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#1800ad')}
                        onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#334155', marginBottom: '6px', fontWeight: '600' }}>
                        WHY DO YOU WANT TO WORK WITH SKYWEB?
                      </label>
                      <textarea
                        rows={3}
                        value={formData.note}
                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                        placeholder="Tell us what you've built and why you refuse to write mediocre software."
                        style={{
                          width: '100%',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          borderRadius: '10px',
                          padding: '12px 16px',
                          color: '#0f172a',
                          fontSize: '0.92rem',
                          fontFamily: 'inherit',
                          outline: 'none',
                          transition: 'border-color 0.2s'
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#1800ad')}
                        onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setApplyModalOpen(false)}
                      className="btn-secondary-light"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary-blue">
                      <span>Submit Application</span>
                      <Send size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
