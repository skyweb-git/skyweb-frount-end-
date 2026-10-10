import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIAssistantBot from './components/AIAssistantBot';
import ProjectModal from './components/ProjectModal';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import GalleryPage from './pages/GalleryPage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import { WhatsappIcon } from './components/BrandIcons';
import { X, CheckCircle2, Send, ShieldCheck, Sparkles } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quickFormSubmitted, setQuickFormSubmitted] = useState(false);
  const [quickForm, setQuickForm] = useState({
    name: '',
    email: '',
    budget: '$15k - $50k',
    service: 'Full-Stack Web Architecture',
    scope: ''
  });

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    setQuickFormSubmitted(true);
    setTimeout(() => {
      setQuickFormSubmitted(false);
      setIsQuoteModalOpen(false);
      setQuickForm({ name: '', email: '', budget: '$15k - $50k', service: 'Full-Stack Web Architecture', scope: '' });
    }, 2500);
  };

  // Scroll to top upon page navigation
  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    // Force browser to start at the top on reload/refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    const saved = localStorage.getItem('skyweb-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)' }}>
      {/* Loading Screen matching loading screen.png */}
      {isLoading && (
        <LoadingScreen
          onFinish={() => {
            setIsLoading(false);
            window.scrollTo(0, 0);
            requestAnimationFrame(() => window.scrollTo(0, 0));
          }}
        />
      )}

      {/* Global Glassmorphic Header */}
      <Navbar
        activePage={activePage}
        setActivePage={navigateTo}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Content View Switcher */}
      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <HomePage
            setActivePage={navigateTo}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {activePage === 'projects' && (
          <ProjectsPage
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage
            setActivePage={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {activePage === 'opportunities' && (
          <OpportunitiesPage
            initialTrack="internship"
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {activePage === 'internship' && (
          <OpportunitiesPage
            initialTrack="internship"
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {activePage === 'coaching' && (
          <OpportunitiesPage
            initialTrack="coaching"
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {activePage === 'team' && (
          <TeamPage
            setActivePage={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Global Luxury Footer */}
      <Footer setActivePage={navigateTo} />

      {/* Floating AI Robot Concierge */}
      <AIAssistantBot
        setActivePage={navigateTo}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Floating WhatsApp Quick Connect */}
      <a
        href="https://wa.me/919121428210"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 940,
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.45)';
        }}
      >
        <WhatsappIcon size={28} color="#ffffff" />
      </a>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Global Quick Project Discovery Modal (Light Luxury) */}
      {isQuoteModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 2500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setIsQuoteModalOpen(false)}
        >
          <div
            className="card-luxury"
            style={{
              maxWidth: '560px',
              width: '100%',
              padding: '40px',
              position: 'relative',
              backgroundColor: '#ffffff',
              boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsQuoteModalOpen(false)}
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

            {quickFormSubmitted ? (
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
                    margin: '0 auto 20px',
                    border: '1px solid #d1fae5'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.9rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                  Project Brief Received
                </h3>
                <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: '1.6' }}>
                  A founding engineer will review your architecture requirements and reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit}>
                <div style={{ marginBottom: '24px' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      backgroundColor: '#eff6ff',
                      border: '1px solid #dbeafe',
                      marginBottom: '10px'
                    }}
                  >
                    <Sparkles size={13} color="#1800ad" />
                    <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#1800ad', fontWeight: '700', letterSpacing: '0.04em' }}>
                      DIRECT PARTNER ACCESS
                    </span>
                  </div>
                  <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>
                    Initiate Your Project
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                    Provide initial details. We protect all disclosures under strict mutual NDA.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#334155', marginBottom: '6px', fontWeight: '600' }}>
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={quickForm.name}
                      onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                      placeholder="e.g. Rachel Chen"
                      style={{
                        width: '100%',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        borderRadius: '10px',
                        padding: '12px 14px',
                        color: '#0f172a',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#1800ad')}
                      onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#334155', marginBottom: '6px', fontWeight: '600' }}>
                      BUSINESS EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={quickForm.email}
                      onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                      placeholder="rachel@company.com"
                      style={{
                        width: '100%',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        borderRadius: '10px',
                        padding: '12px 14px',
                        color: '#0f172a',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#1800ad')}
                      onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#334155', marginBottom: '6px', fontWeight: '600' }}>
                        PRIMARY SERVICE
                      </label>
                      <select
                        value={quickForm.service}
                        onChange={(e) => setQuickForm({ ...quickForm, service: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          borderRadius: '10px',
                          padding: '12px 12px',
                          color: '#0f172a',
                          fontSize: '0.84rem',
                          outline: 'none'
                        }}
                      >
                        <option value="Full-Stack Web Architecture">Full-Stack Web</option>
                        <option value="Mobile App Engineering">Mobile App</option>
                        <option value="AI & Neural Workflows">AI Architecture</option>
                        <option value="Cloud Infrastructure">Cloud / DevOps</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#334155', marginBottom: '6px', fontWeight: '600' }}>
                        BUDGET TIER
                      </label>
                      <select
                        value={quickForm.budget}
                        onChange={(e) => setQuickForm({ ...quickForm, budget: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          borderRadius: '10px',
                          padding: '12px 12px',
                          color: '#0f172a',
                          fontSize: '0.84rem',
                          outline: 'none'
                        }}
                      >
                        <option value="$5,000 - $15,000">$5k - $15k</option>
                        <option value="$15,000 - $50,000">$15k - $50k</option>
                        <option value="$50,000+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#334155', marginBottom: '6px', fontWeight: '600' }}>
                      PROJECT OVERVIEW *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={quickForm.scope}
                      onChange={(e) => setQuickForm({ ...quickForm, scope: e.target.value })}
                      placeholder="Briefly describe what you're building..."
                      style={{
                        width: '100%',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        borderRadius: '10px',
                        padding: '12px 14px',
                        color: '#0f172a',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#1800ad')}
                      onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#059669', fontWeight: '600' }}>
                    <ShieldCheck size={16} />
                    <span>NDA Protected</span>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setIsQuoteModalOpen(false)}
                      className="btn-secondary-light"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary-blue">
                      <span>Send Scope</span>
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
