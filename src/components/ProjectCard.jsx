import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';

export default function ProjectCard({ project, onSelectProject }) {
  const [isHovered, setIsHovered] = useState(false);
  const authorName = project.author || 'Skyweb Studio';

  const imageSrc = (() => {
    const src = project.imageRef;
    if (!src) return '/ref-images/home_1.png';
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:') || src.startsWith('blob:')) return src;
    if (src.startsWith('/uploads/')) return `http://localhost:5000${src}`;
    if (src.startsWith('uploads/')) return `http://localhost:5000/${src}`;
    return src;
  })();

  return (
    <div
      onClick={() => onSelectProject && onSelectProject(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 11',
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: '#0f172a',
        cursor: 'pointer',
        boxShadow: isHovered
          ? '0 20px 40px -10px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
          : '0 6px 18px -4px rgba(0, 0, 0, 0.25)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        userSelect: 'none'
      }}
      className="group"
    >
      {/* Full Background Image */}
      <img
        src={imageSrc}
        alt={project.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isHovered ? 'scale(1.06)' : 'scale(1)'
        }}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />

      {/* Cinematic Dark Gradient Overlay at Bottom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0.15) 70%, transparent 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Top Right Floating Expand / Badge */}
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
          opacity: isHovered ? 1 : 0.7,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'all 0.2s ease',
          zIndex: 3
        }}
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
        {/* Project Title Over Image */}
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
          {project.title}
        </h3>

        {/* Bottom Author Info */}
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
          {authorName}
        </div>
      </div>
    </div>
  );
}
