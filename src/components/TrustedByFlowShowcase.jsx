import React from 'react';

export default function TrustedByFlowShowcase({ logos }) {
  // Duplicate logos for seamless infinite loop
  const flowLogos = [...logos, ...logos];

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 relative overflow-hidden" id="trusted-by">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#004AAD]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-500 tracking-tight font-['DM_Sans'] mb-4">
            Trusted By
          </h2>
          <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed font-normal max-w-2xl mx-auto">
            Empowering innovative brands, digital platforms, and forward-thinking enterprises across diverse industries.
          </p>
        </div>

        {/* ================= SINGLE FLOW SLIDESHOW WITH EDGE MASKS ================= */}
        <div className="relative w-full overflow-hidden py-4 group">
          {/* Left Edge Gradient Fade Mask */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-20 sm:w-44 bg-gradient-to-r from-black via-black/90 to-transparent z-20 pointer-events-none" 
            aria-hidden="true"
          />

          {/* Right Edge Gradient Fade Mask */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-20 sm:w-44 bg-gradient-to-l from-black via-black/90 to-transparent z-20 pointer-events-none" 
            aria-hidden="true"
          />

          {/* Single Track: Flowing Left with Pause on Hover */}
          <div className="overflow-hidden flex">
            <div 
              className="flex gap-4 sm:gap-6 items-center shrink-0 group-hover:[animation-play-state:paused]"
              style={{
                animation: 'marqueeLeft 35s linear infinite',
                width: 'max-content'
              }}
            >
              {flowLogos.map((logo, idx) => (
                <div
                  key={`flow-${idx}`}
                  className="bg-white rounded-2xl p-4 sm:p-5 flex items-center justify-center border border-white/20 shadow-md hover:shadow-[0_12px_28px_-6px_rgba(59,130,246,0.35)] hover:border-blue-400 hover:scale-105 transition-all duration-300 group/card w-48 sm:w-60 h-24 sm:h-30 shrink-0 select-none cursor-pointer"
                  title={logo.name}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-12 sm:max-h-14 w-auto max-w-[82%] object-contain filter group-hover/card:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
