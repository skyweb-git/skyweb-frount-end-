import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, LayoutGrid, Columns, ArrowRight } from 'lucide-react';
import { completedProjects, ongoingProjects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage({ onSelectProject, onOpenQuoteModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [layoutMode, setLayoutMode] = useState('grid');
  const [completedList, setCompletedList] = useState(completedProjects);
  const [ongoingList, setOngoingList] = useState(ongoingProjects);

  const categories = [
    'All',
    'Website Design',
    'App Design',
    'Full-Stack',
    'Enterprise SaaS',
    'AI & Data',
    'E-Commerce',
    'Dev Tools'
  ];

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && Array.isArray(data.data)) {
          const completed = data.data.filter((p) => p.projectType !== 'ongoing');
          const ongoing = data.data.filter((p) => p.projectType === 'ongoing');
          setCompletedList(completed);
          setOngoingList(ongoing);
        }
      })
      .catch((err) => {
        console.warn('Could not load projects from API, falling back to static data:', err);
      });
  }, []);

  const filteredProjects = completedList.filter((p) => {
    const matchesCategory =
      activeCategory === 'All' ||
      p.category === activeCategory ||
      p.categoryTag?.toLowerCase().includes(activeCategory.toLowerCase());

    const hasTagMatch = Array.isArray(p.tags)
      ? p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      : typeof p.tags === 'string' && p.tags.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSearch =
      searchQuery === '' ||
      p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hasTagMatch;

    return matchesCategory && matchesSearch;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'likes') {
      return (b.likes || 0) - (a.likes || 0);
    }
    if (sortBy === 'name') {
      return (a.title || '').localeCompare(b.title || '');
    }
    // Default 'featured'
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <div className="light-canvas" style={{ minHeight: '100vh', padding: '40px 24px 100px', width: '100%' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        
        {/* TOP SEARCH & CONTROLS BAR (GALLERY STYLE) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '28px',
            paddingBottom: '20px',
            borderBottom: '1px solid var(--border-hairline, #e2e8f0)'
          }}
        >
          {/* Search Input on Left */}
          <div
            style={{
              position: 'relative',
              flex: '1',
              minWidth: '260px',
              maxWidth: '480px'
            }}
          >
            <Search
              size={17}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#94a3b8',
                pointerEvents: 'none'
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gallery by tag, title, tech..."
              style={{
                width: '100%',
                padding: '10px 16px 10px 42px',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-card, #ffffff)',
                border: '1px solid var(--border-hairline, #e2e8f0)',
                fontSize: '0.88rem',
                color: 'var(--text-heading, #0f172a)',
                outline: 'none',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#1800ad';
                e.target.style.boxShadow = '0 0 0 3px rgba(24, 0, 173, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border-hairline, #e2e8f0)';
                e.target.style.boxShadow = '0 1px 2px rgba(0,0,0,0.04)';
              }}
            />
          </div>

          {/* Right Controls: Sort & View Modes */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#64748b' }}>
                Sort:
              </span>
              <div style={{ position: 'relative' }}>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    backgroundColor: 'var(--bg-card, #ffffff)',
                    border: '1px solid var(--border-hairline, #e2e8f0)',
                    borderRadius: '10px',
                    padding: '8px 32px 8px 12px',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    color: 'var(--text-heading, #0f172a)',
                    cursor: 'pointer',
                    outline: 'none',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
                  }}
                >
                  <option value="featured">Featured First</option>
                  <option value="likes">Most Liked</option>
                  <option value="name">Title A-Z</option>
                </select>
                <ChevronDown
                  size={14}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: '#64748b'
                  }}
                />
              </div>
            </div>

            {/* View Mode Switcher */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'var(--bg-surface, #f1f5f9)',
                padding: '3px',
                borderRadius: '8px',
                gap: '2px'
              }}
            >
              <button
                onClick={() => setLayoutMode('grid')}
                title="Grid View"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '5px 8px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: layoutMode === 'grid' ? '#ffffff' : 'transparent',
                  color: layoutMode === 'grid' ? '#1800ad' : '#64748b',
                  boxShadow: layoutMode === 'grid' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                  cursor: 'pointer'
                }}
              >
                <LayoutGrid size={15} />
              </button>
              <button
                onClick={() => setLayoutMode('compact')}
                title="Compact View"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '5px 8px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: layoutMode === 'compact' ? '#ffffff' : 'transparent',
                  color: layoutMode === 'compact' ? '#1800ad' : '#64748b',
                  boxShadow: layoutMode === 'compact' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                  cursor: 'pointer'
                }}
              >
                <Columns size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '32px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                backgroundColor: activeCategory === cat ? '#0f172a' : 'var(--bg-card, #ffffff)',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-body, #475569)',
                border: activeCategory === cat ? '1px solid #0f172a' : '1px solid var(--border-hairline, #e2e8f0)',
                borderRadius: '10px',
                padding: '6px 14px',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GALLERY MULTI-COLUMN CARD GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: layoutMode === 'compact'
              ? 'repeat(auto-fill, minmax(200px, 1fr))'
              : 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '24px',
            width: '100%',
            marginBottom: '80px'
          }}
        >
          {sortedProjects.map((proj) => (
            <ProjectCard
              key={proj._id || proj.id}
              project={proj}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

        {/* ONGOING PROJECTS SPRINT PIPELINE */}
        <div style={{ borderTop: '1px solid var(--border-hairline, #e2e8f0)', paddingTop: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div
              style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: '#1800ad',
                fontWeight: '700',
                letterSpacing: '0.08em',
                marginBottom: '6px'
              }}
            >
              CURRENT SPRINT PIPELINE
            </div>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#0f172a',
                letterSpacing: '-0.02em',
                marginBottom: '8px'
              }}
            >
              Ongoing Engineering Projects
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b' }}>
              A sneak peek at what our systems team is currently building and testing.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
            {ongoingList.map((proj) => (
              <div
                key={proj._id || proj.id}
                className="card-luxury"
                style={{
                  padding: '28px',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '16px'
                    }}
                  >
                    <span className="badge-clean badge-blue">{proj.category}</span>
                    <span className="badge-clean badge-amber">● {proj.status}</span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: '800',
                      color: '#0f172a',
                      marginBottom: '8px'
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#475569',
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}
                  >
                    {proj.description}
                  </p>

                  {/* Progress Line */}
                  <div style={{ marginBottom: '20px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.76rem',
                        color: '#64748b',
                        marginBottom: '6px',
                        fontWeight: '600'
                      }}
                    >
                      <span>Milestone Progress</span>
                      <span style={{ color: '#0f172a', fontWeight: '700' }}>{proj.progress}%</span>
                    </div>
                    <div
                      style={{
                        height: '6px',
                        backgroundColor: '#e2e8f0',
                        borderRadius: '9999px',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${proj.progress}%`,
                          backgroundColor: '#1800ad'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {(Array.isArray(proj.tags)
                      ? proj.tags
                      : typeof proj.tags === 'string' && proj.tags.trim()
                      ? proj.tags.split(',').map((t) => t.trim()).filter(Boolean)
                      : []
                    ).map((t, idx) => (
                      <span key={idx} className="badge-clean">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                  <button
                    onClick={onOpenQuoteModal}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#1800ad',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: 0
                    }}
                  >
                    <span>Commission similar project</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
