import React, { useState, useEffect, useRef } from 'react';

export const DigitalSerenity = () => {
  const [showcase, setShowcase] = useState<any>(() => {
    try {
      const cached = localStorage.getItem('skyweb_showcase_data');
      if (cached) return JSON.parse(cached);
    } catch (e) {}
    return {
      imageUrl: '',
      topBadge: 'Stillness speaks.',
      title: 'Find your center,',
      subtitle: 'where peace resides and clarity awakens within the soul.',
      bottomBadge: 'Observe, accept, let go.',
      showQuote: true,
      imageFit: 'cover',
      imageMaxHeight: 420,
      isActive: true
    };
  });

  const resolveImageUrl = (src: string) => {
    if (!src) return '';
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:') || src.startsWith('blob:')) {
      return src;
    }
    if (src.startsWith('/uploads/')) return `http://localhost:5000${src}`;
    if (src.startsWith('uploads/')) return `http://localhost:5000/${src}`;
    return src;
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/showcase')
      .then(res => res.json())
      .then(data => {
        if (data?.success && data?.data) {
          setShowcase(data.data);
          try {
            localStorage.setItem('skyweb_showcase_data', JSON.stringify(data.data));
          } catch (e) {}
        }
      })
      .catch(() => {});

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'skyweb_showcase_data' && e.newValue) {
        try {
          setShowcase(JSON.parse(e.newValue));
        } catch (err) {}
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const [mouseGradientStyle, setMouseGradientStyle] = useState({
    left: '0px',
    top: '0px',
    opacity: 0,
  });
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [scrolled, setScrolled] = useState(false);
  const floatingElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const animateWords = () => {
      const wordElements = document.querySelectorAll('.word-animate');
      wordElements.forEach(word => {
        const delay = parseInt(word.getAttribute('data-delay') || '0', 10) || 0;
        setTimeout(() => {
          if (word && word instanceof HTMLElement) word.style.animation = 'word-appear 0.8s ease-out forwards';
        }, delay);
      });
    };
    const timeoutId = setTimeout(animateWords, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseGradientStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        opacity: 1,
      });
    };
    const handleMouseLeave = () => {
      setMouseGradientStyle(prev => ({ ...prev, opacity: 0 }));
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 1000);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  
  useEffect(() => {
    const wordElements = document.querySelectorAll('.word-animate');
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target) target.style.textShadow = '0 0 20px rgba(203, 213, 225, 0.5)';
    };
    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target) target.style.textShadow = 'none';
    };
    wordElements.forEach(word => {
      word.addEventListener('mouseenter', handleMouseEnter);
      word.addEventListener('mouseleave', handleMouseLeave);
    });
    return () => {
      wordElements.forEach(word => {
        if (word) {
          word.removeEventListener('mouseenter', handleMouseEnter);
          word.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.floating-element-animate');
    floatingElementsRef.current = Array.from(elements) as HTMLElement[];
    const handleScroll = () => {
      if (!scrolled) {
        setScrolled(true);
        floatingElementsRef.current.forEach((el, index) => {
          setTimeout(() => {
            if (el) {
              el.style.animationPlayState = 'running';
              el.style.opacity = ''; 
            }
          }, (parseFloat(el.style.animationDelay || "0") * 1000) + index * 100);
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const pageStyles = `
    #mouse-gradient-react {
      position: fixed;
      pointer-events: none;
      border-radius: 9999px; /* rounded-full */
      background-image: radial-gradient(circle, rgba(156, 163, 175, 0.05), rgba(107, 114, 128, 0.05), transparent 70%); /* slate-400/5, slate-500/5 */
      transform: translate(-50%, -50%);
      will-change: left, top, opacity;
      transition: left 70ms linear, top 70ms linear, opacity 300ms ease-out;
    }
    @keyframes word-appear { 0% { opacity: 0; transform: translateY(30px) scale(0.8); filter: blur(10px); } 50% { opacity: 0.8; transform: translateY(10px) scale(0.95); filter: blur(2px); } 100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }
    @keyframes grid-draw { 0% { stroke-dashoffset: 1000; opacity: 0; } 50% { opacity: 0.3; } 100% { stroke-dashoffset: 0; opacity: 0.15; } }
    @keyframes pulse-glow { 0%, 100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.1); } }
    .word-animate { display: inline-block; opacity: 0; margin: 0 0.1em; transition: color 0.3s ease, transform 0.3s ease; }
    .word-animate:hover { color: #cbd5e1; /* slate-300 */ transform: translateY(-2px); }
    .grid-line { stroke: #94a3b8; /* slate-400 */ stroke-width: 0.5; opacity: 0; stroke-dasharray: 5 5; stroke-dashoffset: 1000; animation: grid-draw 2s ease-out forwards; }
    .detail-dot { fill: #cbd5e1; /* slate-300 */ opacity: 0; animation: pulse-glow 3s ease-in-out infinite; }
    .corner-element-animate { position: absolute; width: 40px; height: 40px; border: 1px solid rgba(203, 213, 225, 0.2); opacity: 0; animation: word-appear 1s ease-out forwards; }
    .text-decoration-animate { position: relative; }
    .text-decoration-animate::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: linear-gradient(90deg, transparent, #cbd5e1, transparent); animation: underline-grow 2s ease-out forwards; animation-delay: 2s; }
    @keyframes underline-grow { to { width: 100%; } }
    .floating-element-animate { position: absolute; width: 2px; height: 2px; background: #cbd5e1; border-radius: 50%; opacity: 0; animation: float 4s ease-in-out infinite; animation-play-state: paused; }
    @keyframes float { 0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; } 25% { transform: translateY(-10px) translateX(5px); opacity: 0.6; } 50% { transform: translateY(-5px) translateX(-3px); opacity: 0.4; } 75% { transform: translateY(-15px) translateX(7px); opacity: 0.8; } }
    .ripple-effect { position: fixed; width: 4px; height: 4px; background: rgba(203, 213, 225, 0.6); border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; animation: pulse-glow 1s ease-out forwards; z-index: 9999; }
  `;

  return (
    <>
      <style>{pageStyles}</style>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-slate-100 font-primary overflow-hidden relative rounded-3xl my-16 border border-slate-700/50 shadow-2xl max-w-7xl mx-auto">
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridReactDarkResponsive" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridReactDarkResponsive)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: '0.5s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: '1s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: '1.5s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: '2s' }} />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line" style={{ animationDelay: '2.5s', opacity: '0.05' }} />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line" style={{ animationDelay: '3s', opacity: '0.05' }} />
          <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3s' }} />
          <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3.2s' }} />
          <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.4s' }} />
          <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.6s' }} />
          <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: '4s' }} />
        </svg>

        {/* Responsive Corner Elements */}
        <div className="corner-element-animate top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8" style={{ animationDelay: '4s' }}>
          <div className="absolute top-0 left-0 w-2 h-2 bg-slate-300 opacity-30 rounded-full"></div>
        </div>
        <div className="corner-element-animate top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8" style={{ animationDelay: '4.2s' }}>
          <div className="absolute top-0 right-0 w-2 h-2 bg-slate-300 opacity-30 rounded-full"></div>
        </div>
        <div className="corner-element-animate bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8" style={{ animationDelay: '4.4s' }}>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-slate-300 opacity-30 rounded-full"></div>
        </div>
        <div className="corner-element-animate bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8" style={{ animationDelay: '4.6s' }}>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-slate-300 opacity-30 rounded-full"></div>
        </div>

        <div className="floating-element-animate" style={{ top: '25%', left: '15%', animationDelay: '0.5s' }}></div>
        <div className="floating-element-animate" style={{ top: '60%', left: '85%', animationDelay: '1s' }}></div>
        <div className="floating-element-animate" style={{ top: '40%', left: '10%', animationDelay: '1.5s' }}></div>
        <div className="floating-element-animate" style={{ top: '75%', left: '90%', animationDelay: '2s' }}></div>

        {/* Responsive Main Content Padding */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between items-center px-6 py-10 sm:px-8 sm:py-12 md:px-16 md:py-20">
          <div className="text-center">
            <h2 className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80">
              <span className="word-animate" data-delay="0">{showcase.topBadge || 'Stillness speaks.'}</span>
            </h2>
            <div className="mt-4 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30 mx-auto"></div>
          </div>

          {/* CENTER CONTENT: Centerpiece Image and/or Zen Typography */}
          <div className="text-center max-w-5xl mx-auto relative my-auto py-6 sm:py-8 w-full flex flex-col items-center justify-center">
            {showcase?.imageUrl ? (
              <div className="w-full flex flex-col items-center justify-center space-y-6 sm:space-y-8">
                {/* Center Image Frame */}
                <div
                  className="relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 shadow-[0_0_60px_rgba(0,0,0,0.85)] backdrop-blur-md max-w-2xl w-full mx-auto bg-slate-950/80 p-2 transition-all duration-500 hover:border-slate-500/80 hover:shadow-[0_0_80px_rgba(56,189,248,0.15)]"
                  style={{
                    maxHeight: `${showcase.imageMaxHeight || 420}px`
                  }}
                >
                  {/* Glowing Corner Accents Matching Black Screen Aesthetic */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-4 h-4 border-t-2 border-l-2 border-slate-300/80 z-20 pointer-events-none" />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-4 h-4 border-t-2 border-r-2 border-slate-300/80 z-20 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-4 h-4 border-b-2 border-l-2 border-slate-300/80 z-20 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-4 h-4 border-b-2 border-r-2 border-slate-300/80 z-20 pointer-events-none" />

                  <img
                    src={resolveImageUrl(showcase.imageUrl)}
                    alt={showcase.title || "Black Screen Centerpiece"}
                    className="w-full h-full rounded-xl sm:rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    style={{
                      maxHeight: `${(showcase.imageMaxHeight || 420) - 20}px`,
                      objectFit: showcase.imageFit === 'natural' ? 'contain' : (showcase.imageFit || 'cover')
                    }}
                  />

                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none rounded-xl sm:rounded-2xl" />
                </div>

                {/* Accompanying Center Quote Text (if enabled) */}
                {showcase.showQuote !== false && (
                  <div className="text-center max-w-4xl mx-auto px-4 space-y-2 sm:space-y-3">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extralight leading-tight tracking-tight text-slate-50 text-decoration-animate">
                      {showcase.title || "Find your center,"}
                    </h1>
                    <p className="text-sm sm:text-xl md:text-2xl font-thin text-slate-300 leading-relaxed tracking-wide">
                      {showcase.subtitle || "where peace resides and clarity awakens within the soul."}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              /* Original Typography when no image is uploaded */
              <>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight text-slate-50 text-decoration-animate">
                  <div className="mb-4 md:mb-6">
                    <span className="word-animate" data-delay="700">Find</span>
                    <span className="word-animate" data-delay="850">your</span>
                    <span className="word-animate" data-delay="1000">center,</span>
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin text-slate-300 leading-relaxed tracking-wide">
                    <span className="word-animate" data-delay="1400">where</span>
                    <span className="word-animate" data-delay="1550">peace</span>
                    <span className="word-animate" data-delay="1700">resides</span>
                    <span className="word-animate" data-delay="1850">and</span>
                    <span className="word-animate" data-delay="2000">clarity</span>
                    <span className="word-animate" data-delay="2150">awakens</span>
                    <span className="word-animate" data-delay="2300">within</span>
                    <span className="word-animate" data-delay="2450">the</span>
                    <span className="word-animate" data-delay="2600">soul.</span>
                  </div>
                </h1>
                <div className="absolute -left-6 sm:-left-8 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-px bg-slate-300 opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '3.2s' }}></div>
                <div className="absolute -right-6 sm:-right-8 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-px bg-slate-300 opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '3.4s' }}></div>
              </>
            )}
          </div>

          <div className="text-center">
            <div className="mb-4 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30 mx-auto"></div>
            <h2 className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80">
              <span className="word-animate" data-delay="3000">{showcase.bottomBadge || 'Observe, accept, let go.'}</span>
            </h2>
            <div className="mt-6 flex justify-center space-x-4 opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '4.2s' }}>
              <div className="w-1 h-1 bg-slate-300 rounded-full opacity-40"></div>
              <div className="w-1 h-1 bg-slate-300 rounded-full opacity-60"></div>
              <div className="w-1 h-1 bg-slate-300 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Responsive Mouse Gradient Size & Blur */}
        <div 
          id="mouse-gradient-react"
          className="w-60 h-60 blur-xl sm:w-80 sm:h-80 sm:blur-2xl md:w-96 md:h-96 md:blur-3xl"
          style={{
            left: mouseGradientStyle.left,
            top: mouseGradientStyle.top,
            opacity: mouseGradientStyle.opacity,
          }}
        ></div>

        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple-effect"
            style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default DigitalSerenity;
