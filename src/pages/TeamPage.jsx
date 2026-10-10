import React, { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';
import { LinkedinIcon, NanoProfilesIcon } from '../components/BrandIcons';
import { teamMembers as fallbackTeamMembers } from '../data/teamData';

export default function TeamPage({ onOpenQuoteModal, setActivePage }) {
  const [selectedMember, setSelectedMember] = useState(null);
  const [teamList, setTeamList] = useState(fallbackTeamMembers);

  const getApiHost = () => {
    if (typeof window !== 'undefined' && window.location.hostname && window.location.hostname !== 'localhost') {
      return `http://${window.location.hostname}:5000`;
    }
    return 'http://localhost:5000';
  };

  useEffect(() => {
    const apiHost = getApiHost();
    fetch(`${apiHost}/api/team`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && Array.isArray(data.data)) {
          setTeamList(data.data);
        }
      })
      .catch(() => {
        // Fallback to static data
      });
  }, []);

  const resolveImageUrl = (src, fallback = '/ref-images/team_rabbani.png') => {
    if (!src) return fallback;
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:') || src.startsWith('blob:')) return src;
    const cleanSrc = src.startsWith('/') ? src : `/${src}`;
    // Both port 3000 and 5000 can serve /uploads/ directly now
    if (cleanSrc.startsWith('/uploads/')) {
      return cleanSrc;
    }
    return src;
  };

  const renderRoleTitle = (member) => {
    if (!member) return null;
    if (member.role && member.role.trim()) {
      const parts = member.role.trim().split(' ');
      if (parts.length > 1) {
        return (
          <>
            {parts.slice(0, -1).join(' ') + ' '}
            <span className="dossier-accent">{parts[parts.length - 1]}</span>
          </>
        );
      }
      return <span className="dossier-accent">{member.role}</span>;
    }
    return (
      <>
        {member.creativeTitlePrefix}
        <span className="dossier-accent">{member.creativeTitleAccent}</span>
      </>
    );
  };

  return (
    <div className="light-canvas" style={{ minHeight: '100vh', padding: '60px 24px 100px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '3.4rem',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}
          >
            Leadership & Core Team
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '680px', margin: '0 auto', lineHeight: '1.6' }}>
            We are a tight-knit collective of obsessive systems architects, product visionaries, and AI researchers who hold execution velocity as our highest virtue.
          </p>
        </div>

        {/* TEAM CARDS GRID (EXECUTIVE DOSSIER CARDS - MATCHING REFERENCE) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            maxWidth: '1440px',
            margin: '0 auto 80px',
            gap: '24px',
            justifyItems: 'stretch'
          }}
        >
          {teamList.map((member) => (
            <div
              key={member._id || member.id}
              className="executive-dossier-card"
              onClick={() => setSelectedMember(member)}
              title={`View ${member.name}'s Dossier`}
            >
              {/* TOP PHOTO & BADGE */}
              <div className="dossier-img-container">
                <div className="dossier-badge">
                  {member.badge}
                </div>
                <img
                  src={resolveImageUrl(member.avatar || member.portrait, '/ref-images/team_rabbani.png')}
                  alt={member.name}
                  className="dossier-img"
                  onError={(e) => {
                    const currentSrc = e.target.src || '';
                    const apiHost = getApiHost();
                    if (!currentSrc.startsWith(apiHost) && currentSrc.includes('/uploads/')) {
                      const filename = currentSrc.split('/uploads/').pop();
                      e.target.src = `${apiHost}/uploads/${filename}`;
                      return;
                    }
                    if (!currentSrc.endsWith('/ref-images/team_rabbani.png')) {
                      e.target.src = '/ref-images/team_rabbani.png';
                    }
                  }}
                />
              </div>

              {/* CARD BOTTOM CONTENT */}
              <div className="dossier-body">
                <div>
                  <h3 className="dossier-title">
                    {renderRoleTitle(member)}
                  </h3>
                </div>

                <div>
                  <div className="dossier-divider" />
                  
                  {/* Social / Email Links matching reference media_1790749030166.png */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        onClick={(e) => e.stopPropagation()}
                        title={`Email ${member.name}`}
                        style={{
                          color: '#64748b',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease'
                        }}
                        className="hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-transform"
                      >
                        <Mail size={16} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title={`${member.name} on LinkedIn`}
                        style={{
                          color: '#64748b',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease'
                        }}
                        className="hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-transform"
                      >
                        <LinkedinIcon size={16} />
                      </a>
                    )}
                    {(member.nanoProfiles || member.github) && (
                      <a
                        href={member.nanoProfiles || member.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title={`${member.name} on Nano Profiles`}
                        style={{
                          color: '#0284c7',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease'
                        }}
                        className="hover:text-sky-600 dark:hover:text-sky-400 hover:scale-110 transition-transform"
                      >
                        <NanoProfilesIcon size={16} />
                      </a>
                    )}
                  </div>

                  <div className="dossier-name">
                    {member.name}
                  </div>
                  <button
                    type="button"
                    className="dossier-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMember(member);
                    }}
                  >
                    <span>OPEN DOSSIER</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EXECUTIVE DOSSIER INFO MODAL (MATCHING REFERENCE media_1790080215347.png) */}
        {selectedMember && (
          <div
            className="dossier-modal-overlay"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="dossier-modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              {/* LEFT COLUMN: FULL-HEIGHT FULL COLOR PHOTO */}
              <div className="dossier-modal-photo">
                <img
                  src={resolveImageUrl(selectedMember.portrait || selectedMember.avatar, '/ref-images/portrait_rabbani.png')}
                  alt={selectedMember.name}
                  onError={(e) => {
                    const currentSrc = e.target.src || '';
                    const apiHost = getApiHost();
                    if (!currentSrc.startsWith(apiHost) && currentSrc.includes('/uploads/')) {
                      const filename = currentSrc.split('/uploads/').pop();
                      e.target.src = `${apiHost}/uploads/${filename}`;
                      return;
                    }
                    if (!currentSrc.endsWith('/ref-images/portrait_rabbani.png') && !currentSrc.endsWith('/ref-images/team_rabbani.png')) {
                      e.target.src = '/ref-images/portrait_rabbani.png';
                    }
                  }}
                />
              </div>

              {/* RIGHT COLUMN: STRUCTURED DOSSIER CONTENT */}
              <div className="dossier-modal-content">
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="dossier-modal-close"
                  title="Close Dossier"
                >
                  <X size={17} />
                </button>

                {/* CREATIVE TITLE */}
                <h2 className="dossier-modal-title">
                  {renderRoleTitle(selectedMember)}
                </h2>

                {/* FULL NAME */}
                <div className="dossier-modal-name">
                  {selectedMember.name}
                </div>

                <div className="dossier-modal-divider" />

                {/* PROFILE QUOTE */}
                <div className="dossier-section-label">PROFILE</div>
                <div className="dossier-profile-quote">
                  "{selectedMember.profileQuote || selectedMember.bio}"
                </div>

                <div className="dossier-modal-divider" />

                {/* INTERESTS */}
                <div className="dossier-section-label">INTERESTS</div>
                <div className="dossier-section-text">
                  {selectedMember.interests}
                </div>

                <div className="dossier-modal-divider" />

                {/* HOBBIES */}
                <div className="dossier-section-label">HOBBIES</div>
                <div className="dossier-section-text">
                  {selectedMember.hobbies}
                </div>

                <div className="dossier-modal-divider" />

                {/* FAVOURITE FOOD */}
                <div className="dossier-section-label">FAVOURITE FOOD</div>
                <div className="dossier-section-text">
                  {selectedMember.favouriteFood}
                </div>

                {/* CONNECT / SOCIAL LINKS */}
                {(selectedMember.email || selectedMember.linkedin || selectedMember.nanoProfiles || selectedMember.github) && (
                  <>
                    <div className="dossier-modal-divider" />
                    <div className="dossier-section-label">CONNECT</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                      {selectedMember.email && (
                        <a
                          href={`mailto:${selectedMember.email}`}
                          title={`Email ${selectedMember.name}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            border: '1px solid #e2e8f0',
                            backgroundColor: '#f8fafc',
                            color: '#64748b',
                            transition: 'all 0.2s ease'
                          }}
                          className="hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          <Mail size={16} />
                        </a>
                      )}
                      {selectedMember.linkedin && (
                        <a
                          href={selectedMember.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          title={`${selectedMember.name} on LinkedIn`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            border: '1px solid #e2e8f0',
                            backgroundColor: '#f8fafc',
                            color: '#64748b',
                            transition: 'all 0.2s ease'
                          }}
                          className="hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          <LinkedinIcon size={16} />
                        </a>
                      )}
                      {(selectedMember.nanoProfiles || selectedMember.github) && (
                        <a
                          href={selectedMember.nanoProfiles || selectedMember.github}
                          target="_blank"
                          rel="noreferrer"
                          title={`${selectedMember.name} on Nano Profiles`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            border: '1px solid #e2e8f0',
                            backgroundColor: '#f8fafc',
                            color: '#0284c7',
                            transition: 'all 0.2s ease'
                          }}
                          className="hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          <NanoProfilesIcon size={16} />
                        </a>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
