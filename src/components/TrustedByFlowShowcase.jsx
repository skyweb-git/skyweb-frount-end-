import React from 'react';

const defaultLogos = [
  { name: "ArtArtist", src: "/assets/client-showcase/1.png" },
  { name: "Sanghi City", src: "/assets/client-showcase/2.png" },
  { name: "Ambhuja by Maytri", src: "/assets/client-showcase/3.png" },
  { name: "MasterBrush Art Foundation", src: "/assets/client-showcase/4.png" },
  { name: "ServFex", src: "/assets/client-showcase/5.png" },
  { name: "Yash Education", src: "/assets/client-showcase/6.png" },
  { name: "Easy BG Remover", src: "/assets/client-showcase/7.png" },
  { name: "Swayamkrushi", src: "/assets/client-showcase/8.png" },
  { name: "Value Laden", src: "/assets/client-showcase/9.png" },
  { name: "Akashya Labs and Tech", src: "/assets/client-showcase/10.png" },
  { name: "Edion Royal Guesthouse", src: "/assets/client-showcase/edion-royal-guesthouse.png" },
];

export default function TrustedByFlowShowcase({ 
  logos = defaultLogos, 
  title,
  className = "" 
}) {
  const activeLogos = (logos && logos.length > 0) ? logos : defaultLogos;
  // Quadruple logos for mathematically seamless infinite marquee loop across all screen sizes
  const flowLogos = [...activeLogos, ...activeLogos, ...activeLogos, ...activeLogos];

  return (
    <section 
      className={`w-full bg-white border-y border-slate-100 py-6 sm:py-8 overflow-hidden relative select-none ${className}`} 
      id="trusted-by"
      aria-label="Client and Partner Brand Showcase"
    >
      {title && (
        <div className="max-w-7xl mx-auto px-4 text-center mb-5">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-400">
            {title}
          </p>
        </div>
      )}

      {/* Left Edge Gradient Fade Mask */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/85 to-transparent z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Right Edge Gradient Fade Mask */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/85 to-transparent z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Continuous Horizontal Marquee Track with Pause on Hover */}
      <div className="overflow-hidden flex group">
        <div 
          className="flex gap-12 sm:gap-16 lg:gap-20 items-center shrink-0 group-hover:[animation-play-state:paused]"
          style={{
            animation: 'marqueeLeft 36s linear infinite',
            width: 'max-content'
          }}
        >
          {flowLogos.map((logo, idx) => (
            <div
              key={`logo-marquee-${idx}`}
              className="flex items-center justify-center shrink-0 cursor-pointer h-10 sm:h-12 px-2 transition-transform duration-300 hover:scale-105"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-8 sm:max-h-10 w-auto max-w-[130px] sm:max-w-[160px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
