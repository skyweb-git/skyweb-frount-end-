import React, { useState } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  Home,
  FolderGit2,
  GraduationCap,
  Users,
  Mail,
  Sun,
  Moon,
  Images
} from 'lucide-react';
import { MenuBar } from './ui/glow-menu';

export default function Navbar({ activePage, setActivePage, onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  React.useEffect(() => {
    const handleSync = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    window.addEventListener('theme-change', handleSync);
    const observer = new MutationObserver(handleSync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      window.removeEventListener('theme-change', handleSync);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('skyweb-theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('skyweb-theme', 'dark');
      setIsDark(true);
    }
    window.dispatchEvent(new Event('theme-change'));
  };

  const menuItems = [
    {
      icon: Home,
      label: "Home",
      id: "home",
      gradient: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(37,99,235,0.08) 50%, rgba(29,78,216,0) 100%)",
      iconColor: "text-blue-600",
    },
    {
      icon: FolderGit2,
      label: "Projects",
      id: "projects",
      gradient: "radial-gradient(circle, rgba(14,165,233,0.18) 0%, rgba(2,132,199,0.08) 50%, rgba(3,105,161,0) 100%)",
      iconColor: "text-sky-600",
    },
    {
      icon: Images,
      label: "Gallery",
      id: "gallery",
      gradient: "radial-gradient(circle, rgba(236,72,153,0.18) 0%, rgba(219,39,119,0.08) 50%, rgba(190,24,93,0) 100%)",
      iconColor: "text-pink-600",
    },
    {
      icon: GraduationCap,
      label: "Opportunities",
      id: "opportunities",
      gradient: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(234,88,12,0.08) 50%, rgba(194,65,12,0) 100%)",
      iconColor: "text-amber-600",
    },
    {
      icon: Users,
      label: "Team",
      id: "team",
      gradient: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(147,51,234,0.08) 50%, rgba(126,34,206,0) 100%)",
      iconColor: "text-purple-600",
    },
    {
      icon: Mail,
      label: "Contact",
      id: "contact",
      gradient: "radial-gradient(circle, rgba(34,197,94,0.18) 0%, rgba(22,163,74,0.08) 50%, rgba(21,128,61,0) 100%)",
      iconColor: "text-emerald-600",
    },
  ];

  const handleMenuClick = (label) => {
    const item = menuItems.find((m) => m.label.toLowerCase() === label.toLowerCase());
    if (item) {
      setActivePage(item.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Determine active item label
  const getActiveLabel = () => {
    if (activePage === 'internship' || activePage === 'coaching') return 'Opportunities';
    const current = menuItems.find((m) => m.id === activePage);
    return current ? current.label : 'Home';
  };

  return (
    <header
      className="glass-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        transition: 'all 0.2s ease',
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #e2e8f0'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        {/* Brand Lockup */}
        <div
          onClick={() => {
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #1800ad 0%, #2a10d8 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '1.15rem',
              boxShadow: '0 4px 12px rgba(24, 0, 173, 0.35)'
            }}
          >
            S
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.35rem',
                fontWeight: '800',
                color: 'var(--text-heading)',
                letterSpacing: '-0.03em'
              }}
            >
              skyweb
            </span>
            <span
              style={{
                fontSize: '0.65rem',
                fontFamily: 'var(--font-mono)',
                color: '#1800ad',
                backgroundColor: 'rgba(24, 0, 173, 0.08)',
                border: '1px solid rgba(24, 0, 173, 0.25)',
                padding: '2px 6px',
                borderRadius: '4px',
                fontWeight: '700'
              }}
            >
              PVT LTD
            </span>
          </div>
        </div>

        {/* GLOW MENU BAR (DESKTOP) */}
        <div className="desktop-glow-nav">
          <MenuBar
            items={menuItems}
            activeItem={getActiveLabel()}
            onItemClick={handleMenuClick}
          />
        </div>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Quick Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              border: '1px solid var(--border-hairline)',
              backgroundColor: 'var(--bg-card)',
              color: isDark ? '#fbbf24' : '#64748b',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={onOpenQuoteModal}
            className="btn-primary-dark"
            style={{ padding: '10px 20px', fontSize: '0.85rem' }}
          >
            <span>Initiate Project</span>
            <ArrowUpRight size={14} />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-hairline)',
              borderRadius: '8px',
              padding: '8px',
              color: 'var(--text-heading)',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            borderTop: '1px solid var(--border-hairline)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)'
          }}
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  backgroundColor: isActive ? '#f0f0ff' : 'transparent',
                  color: isActive ? '#1800ad' : '#334155',
                  fontWeight: '700',
                  border: 'none',
                  fontSize: '0.92rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer'
                }}
              >
                <Icon size={18} className={item.iconColor} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-glow-nav {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .desktop-glow-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
