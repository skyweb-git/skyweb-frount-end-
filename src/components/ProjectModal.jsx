import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, Terminal, Copy, Check } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '24px',
          maxWidth: '820px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.2)',
          padding: '36px',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            backgroundColor: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#475569',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e2e8f0';
            e.currentTarget.style.color = '#0f172a';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f1f5f9';
            e.currentTarget.style.color = '#475569';
          }}
        >
          <X size={18} />
        </button>

        {/* Badges */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
          <span className="badge-clean badge-blue">
            {project.category}
          </span>
          {project.badge && (
            <span className="badge-clean badge-amber">
              ★ {project.badge}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h2
          style={{
            fontSize: '2.2rem',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}
        >
          {project.title}
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            color: '#64748b',
            marginBottom: '24px',
            lineHeight: '1.5'
          }}
        >
          {project.tagline}
        </p>

        {/* Image Preview Frame */}
        {project.imageRef && (
          <div
            style={{
              width: '100%',
              height: '420px',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              marginBottom: '28px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={(() => {
                const src = project.imageRef;
                if (!src) return '/ref-images/home_1.png';
                if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:') || src.startsWith('blob:')) return src;
                const cleanSrc = src.startsWith('/') ? src : `/${src}`;
                if (cleanSrc.startsWith('/uploads/')) return cleanSrc;
                return src;
              })()}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              onError={(e) => {
                const currentSrc = e.currentTarget.src || '';
                if (!currentSrc.includes(':5000') && currentSrc.includes('/uploads/')) {
                  const filename = currentSrc.split('/uploads/').pop();
                  const apiHost = typeof window !== 'undefined' && window.location.hostname !== 'localhost'
                    ? `http://${window.location.hostname}:5000`
                    : 'http://localhost:5000';
                  e.currentTarget.src = `${apiHost}/uploads/${filename}`;
                  return;
                }
                e.currentTarget.src = '/ref-images/home_1.png';
              }}
            />
          </div>
        )}

        {/* Architecture & Engineering Overview */}
        <div style={{ marginBottom: '24px' }}>
          <h4
            style={{
              fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)',
              color: '#1800ad',
              letterSpacing: '0.06em',
              fontWeight: '700',
              marginBottom: '8px'
            }}
          >
            ENGINEERING & ARCHITECTURE BRIEF
          </h4>
          <p
            style={{
              fontSize: '0.98rem',
              lineHeight: '1.7',
              color: '#334155'
            }}
          >
            {project.description}
          </p>
        </div>

        {/* CLI Snippet if applicable */}
        {project.cliCommand && (
          <div
            style={{
              backgroundColor: '#0f172a',
              borderRadius: '12px',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#38bdf8', fontSize: '0.85rem' }}>
              <Terminal size={16} />
              <span>{project.cliCommand}</span>
            </div>
            <button
              onClick={() => handleCopy(project.cliCommand)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                padding: '6px 12px',
                color: '#ffffff',
                fontSize: '0.75rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              {copied ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        )}

        {/* Tech Stack */}
        <div style={{ marginBottom: '28px' }}>
          <h4
            style={{
              fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)',
              color: '#64748b',
              letterSpacing: '0.06em',
              fontWeight: '700',
              marginBottom: '10px'
            }}
          >
            CORE TECHNOLOGIES
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {(Array.isArray(project.tags)
              ? project.tags
              : typeof project.tags === 'string' && project.tags.trim()
              ? project.tags.split(',').map((t) => t.trim()).filter(Boolean)
              : []
            ).map((tag, i) => (
              <span key={i} className="badge-clean">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '20px',
            borderTop: '1px solid #e2e8f0'
          }}
        >
          <div style={{ fontSize: '0.88rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
            <CheckCircle2 size={16} />
            <span>Impact: {project.stats || 'Enterprise SLA Verified'}</span>
          </div>

          <a
            href={
              project.liveUrl && project.liveUrl !== '#'
                ? (project.liveUrl.startsWith('http://') || project.liveUrl.startsWith('https://') ? project.liveUrl : `https://${project.liveUrl}`)
                : (project.demoUrl || project.link || (project.id === 'trevor-noah' ? 'https://www.trevornoah.com/' : 'https://skywebitsolutions.com'))
            }
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-blue"
            style={{
              textDecoration: 'none',
              padding: '10px 20px',
              fontSize: '0.85rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}
          >
            <span>Visit Website</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
