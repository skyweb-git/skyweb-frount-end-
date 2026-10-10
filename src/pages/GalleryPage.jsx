import React, { useState, useEffect, useCallback } from 'react';
import {
  Search,
  SlidersHorizontal,
  Heart,
  Maximize2,
  Minimize2,
  X,
  ChevronLeft,
  ChevronRight,
  Share2,
  Layers,
  ArrowUpRight,
  Check,
  LayoutGrid,
  Grid
} from 'lucide-react';
import { galleryItems } from '../data/galleryData';

export default function GalleryPage({ setActivePage, onOpenQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'likes', 'title'
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [isUltraFullscreen, setIsUltraFullscreen] = useState(false);
  const [likedItems, setLikedItems] = useState({});
  const [copiedLink, setCopiedLink] = useState(false);
  const [layoutMode, setLayoutMode] = useState('grid'); // 'grid' | 'masonry'
  const [galleryList, setGalleryList] = useState(galleryItems);

  useEffect(() => {
    fetch('http://localhost:5000/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && Array.isArray(data.data)) {
          setGalleryList(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const resolveImageUrl = (src, fallback = '/ref-images/home_1.png') => {
    if (!src) return fallback;
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:') || src.startsWith('blob:')) return src;
    if (src.startsWith('/uploads/')) return `http://localhost:5000${src}`;
    if (src.startsWith('uploads/')) return `http://localhost:5000/${src}`;
    return src;
  };

  // Load liked items from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('skyweb_gallery_likes');
      if (saved) {
        setLikedItems(JSON.parse(saved));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleLike = (id, e) => {
    if (e) e.stopPropagation();
    setLikedItems((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem('skyweb_gallery_likes', JSON.stringify(updated));
      } catch (err) {
        // ignore
      }
      return updated;
    });
  };

  // Filter & Search Logic
  const filteredItems = galleryList.filter((item) => {
    const matchesCat =
      selectedCategory === 'All' || item.category === selectedCategory;
    const hasTagMatch = Array.isArray(item.tags)
      ? item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      : typeof item.tags === 'string' && item.tags.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSearch =
      searchQuery.trim() === '' ||
      (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.client && item.client.toLowerCase().includes(searchQuery.toLowerCase())) ||
      hasTagMatch;

    return matchesCat && matchesSearch;
  });

  // Sort Logic
  const sortedItems = [...filteredItems].sort((a, b) => {
    const itemIdA = a._id || a.id;
    const itemIdB = b._id || b.id;
    const aLikes = (a.likes || 0) + (likedItems[itemIdA] ? 1 : 0);
    const bLikes = (b.likes || 0) + (likedItems[itemIdB] ? 1 : 0);

    if (sortBy === 'likes') {
      return bLikes - aLikes;
    }
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    // Default 'featured'
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  // Lightbox navigation handlers
  const handlePrev = useCallback(() => {
    if (activeLightboxIndex !== null && sortedItems.length > 0) {
      setActiveLightboxIndex((prev) =>
        prev === 0 ? sortedItems.length - 1 : prev - 1
      );
    }
  }, [activeLightboxIndex, sortedItems.length]);

  const handleNext = useCallback(() => {
    if (activeLightboxIndex !== null && sortedItems.length > 0) {
      setActiveLightboxIndex((prev) =>
        prev === sortedItems.length - 1 ? 0 : prev + 1
      );
    }
  }, [activeLightboxIndex, sortedItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handleNext, handlePrev]);

  const currentLightboxItem =
    activeLightboxIndex !== null ? sortedItems[activeLightboxIndex] : null;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="light-canvas" style={{ minHeight: '100vh', padding: '24px 24px 100px', width: '100%' }}>
      <div style={{ width: '100%', margin: '0 auto' }}>
        {/* CONTROLS & FILTER BAR */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '28px',
            width: '100%'
          }}
        >
          {/* Search, Sort, and Layout Mode Controls */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 18px',
              borderRadius: '14px',
              backgroundColor: 'var(--bg-card, #ffffff)',
              border: '1px solid var(--border-hairline, #e2e8f0)'
            }}
          >
            {/* Search input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flex: '1 1 240px',
                maxWidth: '400px',
                backgroundColor: 'var(--bg-canvas, #f8fafc)',
                padding: '8px 14px',
                borderRadius: '10px',
                border: '1px solid var(--border-hairline, #cbd5e1)'
              }}
            >
              <Search size={16} color="#64748b" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search gallery by tag, title, tech..."
                style={{
                  border: 'none',
                  background: 'transparent',
                  outline: 'none',
                  width: '100%',
                  fontSize: '0.86rem',
                  color: 'var(--text-heading, #0f172a)'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#64748b',
                    padding: 0
                  }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Right side controls: Sort & Layout */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <SlidersHorizontal size={14} color="#64748b" />
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600' }}>Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    padding: '6px 10px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-hairline, #cbd5e1)',
                    backgroundColor: 'var(--bg-card, #ffffff)',
                    color: 'var(--text-heading, #0f172a)',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="featured">Featured First</option>
                  <option value="likes">Most Popular (Likes)</option>
                  <option value="title">Alphabetical (A-Z)</option>
                </select>
              </div>

              {/* View Toggle */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'var(--bg-canvas, #f1f5f9)',
                  padding: '3px',
                  borderRadius: '8px'
                }}
              >
                <button
                  onClick={() => setLayoutMode('grid')}
                  title="Grid Layout"
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
                  onClick={() => setLayoutMode('masonry')}
                  title="Masonry Layout"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '5px 8px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: layoutMode === 'masonry' ? '#ffffff' : 'transparent',
                    color: layoutMode === 'masonry' ? '#1800ad' : '#64748b',
                    boxShadow: layoutMode === 'masonry' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                    cursor: 'pointer'
                  }}
                >
                  <Grid size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* GALLERY ITEMS DISPLAY */}
        {sortedItems.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: 'var(--bg-card, #ffffff)',
              borderRadius: '20px',
              border: '1px solid var(--border-hairline, #e2e8f0)'
            }}
          >
            <Layers size={40} color="#94a3b8" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-heading, #0f172a)', marginBottom: '8px' }}>
              No visual exhibits found
            </h3>
            <p style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.92rem', marginBottom: '18px' }}>
              No matches found for "{searchQuery}". Try selecting another category or clear the search filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="btn-primary-blue"
              style={{ padding: '8px 20px', fontSize: '0.85rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '24px'
            }}
          >
            {sortedItems.map((item, idx) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveLightboxIndex(idx);
                    setIsUltraFullscreen(false);
                  }}
                  className="group"
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 11',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    backgroundColor: '#0f172a',
                    cursor: 'pointer',
                    boxShadow: '0 6px 18px -4px rgba(0, 0, 0, 0.25)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 18px -4px rgba(0, 0, 0, 0.25)';
                  }}
                >
                  {/* Full Background Image */}
                  <img
                    src={resolveImageUrl(item.image)}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    className="group-hover:scale-106"
                  />

                  {/* Cinematic Dark Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0.15) 70%, transparent 100%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Top Right Floating Expand Button */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 0, 0, 0.45)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      zIndex: 3
                    }}
                    className="group-hover:scale-110"
                  >
                    <Maximize2 size={14} />
                  </div>

                  {/* Text Inside Image Container (Bottom Anchored) */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '16px 16px 14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      zIndex: 2
                    }}
                  >
                    {/* Project / Exhibit Title Over Image */}
                    <h3
                      style={{
                        fontSize: '1rem',
                        fontWeight: '700',
                        color: '#ffffff',
                        lineHeight: '1.35',
                        letterSpacing: '-0.015em',
                        textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        margin: 0
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Bottom Author / Client Info */}
                    <div
                      style={{
                        fontSize: '0.8rem',
                        color: '#cbd5e1',
                        fontWeight: '600',
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.9)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {item.client || 'Skyweb Studio'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* FULLSCREEN IMMERSIVE LIGHTBOX MODAL */}
      {currentLightboxItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 10, 22, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 3000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: isUltraFullscreen ? '10px' : '16px 20px',
            transition: 'all 0.3s ease'
          }}
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Top Bar Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '1600px',
              margin: '0 auto',
              zIndex: 20
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: '#94a3b8',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  padding: '4px 10px',
                  borderRadius: '6px'
                }}
              >
                {activeLightboxIndex + 1} / {sortedItems.length}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Fullscreen Toggle */}
              <button
                onClick={() => setIsUltraFullscreen(!isUltraFullscreen)}
                title={isUltraFullscreen ? 'Exit Full Screen' : 'Expand Full Screen'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: isUltraFullscreen ? 'rgba(24, 0, 173, 0.4)' : 'rgba(255,255,255,0.1)',
                  border: isUltraFullscreen ? '1px solid #1800ad' : '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '10px',
                  padding: '8px 14px',
                  color: '#ffffff',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {isUltraFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                <span>{isUltraFullscreen ? 'Standard View' : 'Full Screen'}</span>
              </button>

              <button
                onClick={handleCopyLink}
                title="Share Exhibit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '10px',
                  padding: '8px 14px',
                  color: '#ffffff',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                {copiedLink ? <Check size={14} color="#10b981" /> : <Share2 size={14} />}
                <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
              </button>

              <button
                onClick={() => setActiveLightboxIndex(null)}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)')}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Main Visual & Nav Arrows */}
          <div
            style={{
              position: 'relative',
              flex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: isUltraFullscreen ? '8px 0' : '14px 0',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              title="Previous exhibit (Left Arrow)"
              style={{
                position: 'absolute',
                left: '20px',
                zIndex: 20,
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'transform 0.2s, background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.backgroundColor = 'rgba(24, 0, 173, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
              }}
            >
              <ChevronLeft size={28} />
            </button>

            {/* High-Res Full-Stage Artwork */}
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 80px'
              }}
            >
              <img
                src={resolveImageUrl(currentLightboxItem.image)}
                alt={currentLightboxItem.title}
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: isUltraFullscreen ? '96vw' : '90vw',
                  maxHeight: isUltraFullscreen ? '92vh' : '78vh',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  boxShadow: '0 30px 90px rgba(0,0,0,0.85)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              title="Next exhibit (Right Arrow)"
              style={{
                position: 'absolute',
                right: '20px',
                zIndex: 20,
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'transform 0.2s, background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.backgroundColor = 'rgba(24, 0, 173, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
              }}
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Floating Details Capsule Bar */}
          {!isUltraFullscreen && (
            <div
              style={{
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(16px)',
                padding: '14px 24px',
                borderRadius: '16px',
                color: '#ffffff',
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ flex: '1 1 400px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                  <span style={{ fontSize: '0.78rem', color: '#93c5fd', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>
                    {currentLightboxItem.client} • {currentLightboxItem.year}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>
                  {currentLightboxItem.title}
                </h3>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={(e) => toggleLike(currentLightboxItem.id, e)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    backgroundColor: likedItems[currentLightboxItem.id]
                      ? 'rgba(219, 39, 119, 0.25)'
                      : 'rgba(255,255,255,0.06)',
                    color: likedItems[currentLightboxItem.id] ? '#f472b6' : '#ffffff',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: '700'
                  }}
                >
                  <Heart
                    size={14}
                    fill={likedItems[currentLightboxItem.id] ? '#f472b6' : 'none'}
                  />
                  <span>
                    {(currentLightboxItem.likes || 0) + (likedItems[currentLightboxItem.id] ? 1 : 0)}
                  </span>
                </button>

                <button
                  onClick={() => {
                    setActiveLightboxIndex(null);
                    onOpenQuoteModal();
                  }}
                  className="btn-primary-blue"
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.84rem'
                  }}
                >
                  <span>Inquire</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
