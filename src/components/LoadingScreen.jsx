import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFading(true);
          setTimeout(() => {
            window.scrollTo(0, 0);
            onFinish();
          }, 450);
          return 100;
        }
        const step = Math.floor(Math.random() * 20) + 12;
        return Math.min(prev + step, 100);
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onFinish]);

  const tiles = [
    { letter: 'S', key: 's' },
    { letter: 'K', key: 'k' },
    { letter: 'Y', key: 'y' },
    { letter: 'W', key: 'w' },
    { letter: 'E', key: 'e' },
    { letter: 'B', key: 'b' }
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#ffffff',
        backgroundImage: 'radial-gradient(#e2e8f0 1.2px, transparent 1.2px)',
        backgroundSize: '24px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isFading ? 'none' : 'auto'
      }}
    >
      {/* Brand Monogram Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 50px)',
          gap: '12px',
          marginBottom: '32px'
        }}
      >
        {tiles.map((tile, idx) => (
          <div
            key={tile.key}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: '1.5px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.05)',
              transform: `scale(${progress > idx * 16 ? 1 : 0.9})`,
              opacity: progress > idx * 12 ? 1 : 0.3,
              transition: 'all 0.25s ease'
            }}
          >
            {/* Minimalist corner accents */}
            <div
              style={{
                position: 'absolute',
                top: '4px',
                left: '4px',
                width: '6px',
                height: '6px',
                borderTop: '2px solid #1800ad',
                borderLeft: '2px solid #1800ad'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '4px',
                right: '4px',
                width: '6px',
                height: '6px',
                borderBottom: '2px solid #1800ad',
                borderRight: '2px solid #1800ad'
              }}
            />

            {/* Letter */}
            <span
              style={{
                color: '#0f172a',
                fontWeight: '800',
                fontSize: '1.25rem',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '-0.02em'
              }}
            >
              {tile.letter}
            </span>

            {/* Gold dot accent */}
            <div
              style={{
                position: 'absolute',
                bottom: '7px',
                right: '7px',
                width: '4px',
                height: '4px',
                backgroundColor: '#1F07BF',
                borderRadius: '50%'
              }}
            />
          </div>
        ))}
      </div>

      {/* Luxury Progress Bar */}
      <div style={{ width: '220px', textAlign: 'center' }}>
        <div
          style={{
            height: '3px',
            width: '100%',
            backgroundColor: '#e2e8f0',
            borderRadius: '9999px',
            overflow: 'hidden',
            marginBottom: '12px'
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: '#1800ad',
              transition: 'width 0.12s ease'
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            color: '#64748b',
            letterSpacing: '0.08em',
            fontWeight: '600'
          }}
        >
          <span>SKYWEB PRIVATE LIMITED</span>
          <span style={{ color: '#0f172a', fontWeight: '700' }}>{progress}%</span>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={() => {
          setIsFading(true);
          setTimeout(onFinish, 150);
        }}
        style={{
          marginTop: '28px',
          background: 'none',
          border: '1px solid #e2e8f0',
          borderRadius: '9999px',
          color: '#64748b',
          fontSize: '0.72rem',
          padding: '5px 16px',
          cursor: 'pointer',
          fontWeight: '600'
        }}
      >
        Skip intro
      </button>
    </div>
  );
}
