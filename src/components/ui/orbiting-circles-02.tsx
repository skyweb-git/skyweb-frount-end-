"use client";

import React, { useState } from "react";
import ParticleSphereAnimation from "./orbiting-circles-02-utils/particalsphear";

// Official vector brand icons for all 20 technologies
export const TechSvgIcons: Record<string, React.ReactNode> = {
  MongoDB: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
      <path fill="#13AA52" d="M12 1.5C12 1.5 6.5 7.5 6.5 13.5C6.5 17.5 9 21 12 22.5C15 21 17.5 17.5 17.5 13.5C17.5 7.5 12 1.5 12 1.5Z" />
      <path fill="#116149" d="M12 1.5V22.5C15 21 17.5 17.5 17.5 13.5C17.5 7.5 12 1.5 12 1.5Z" />
      <path fill="#FFE082" d="M12 7.5V18.5C12 18.5 11 16 11 13.5C11 11 12 7.5 12 7.5Z" />
    </svg>
  ),
  "Express.js": (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
      <rect width="24" height="24" rx="5" fill="#0f172a" />
      <text x="12" y="16" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">ex</text>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="#61DAFB" strokeWidth="1.6">
      <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" stroke="none" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#339933">
      <path d="M12 2L3 7.2V16.8L12 22L21 16.8V7.2L12 2ZM12 4.3L18.8 8.2V15.8L12 19.7L5.2 15.8V8.2L12 4.3Z" />
      <path d="M12 7L7.5 9.6V14.4L12 17L16.5 14.4V9.6L12 7Z" fill="#215732" />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M7 17.5C7.8 17.5 8.4 17.1 8.8 16.3L8.8 11.5H7.2V15.1C7.2 15.6 6.9 15.9 6.4 15.9C5.9 15.9 5.6 15.6 5.6 15.1V14.2H4V15.1C4 16.6 5.2 17.5 7 17.5ZM13.8 17.5C15.8 17.5 17 16.4 17 14.8C17 13.3 16 12.6 14.6 12L14.2 11.8C13.5 11.5 13 11.2 13 10.6C13 10 13.5 9.6 14.2 9.6C14.9 9.6 15.4 10 15.5 10.7H17C16.8 9.2 15.7 8.3 14.2 8.3C12.4 8.3 11.3 9.4 11.3 10.8C11.3 12.2 12.2 12.9 13.6 13L14 13.2C14.8 13.5 15.3 13.9 15.3 15C15.3 15.7 14.7 16.2 13.8 16.2C12.9 16.2 12.3 15.6 12.2 14.7H10.6C10.7 16.3 11.9 17.5 13.8 17.5Z" fill="#000000" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M5 10.2H11V11.7H8.8V17H7.2V11.7H5V10.2ZM13.8 17C15.8 17 17 15.9 17 14.3C17 12.8 16 12.1 14.6 11.5L14.2 11.3C13.5 11 13 10.7 13 10.1C13 9.5 13.5 9.1 14.2 9.1C14.9 9.1 15.4 9.5 15.5 10.2H17C16.8 8.7 15.7 7.8 14.2 7.8C12.4 7.8 11.3 8.9 11.3 10.3C11.3 11.7 12.2 12.4 13.6 13L14 13.2C14.8 13.5 15.3 13.9 15.3 14.5C15.3 15.2 14.7 15.7 13.8 15.7C12.9 15.7 12.3 15.1 12.2 14.2H10.6C10.7 15.8 11.9 17 13.8 17Z" fill="#ffffff" />
    </svg>
  ),
  "React Native": (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="3" stroke="#004AAD" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="1" fill="#004AAD" />
      <ellipse cx="12" cy="10" rx="2.5" ry="6" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 10)" />
      <ellipse cx="12" cy="10" rx="2.5" ry="6" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 10)" />
      <ellipse cx="12" cy="10" rx="2.5" ry="6" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 10)" />
      <circle cx="12" cy="10" r="1.2" fill="#61DAFB" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
      <path d="M11.9 2C8.3 2 8.5 3.5 8.5 3.5V5.1H12.1V5.6H5.2C5.2 5.6 2 5.3 2 9C2 12.7 4.8 12.5 4.8 12.5H6.3V10.9C6.3 10.9 6.2 9 8.1 9H11.7C11.7 9 13.5 9.1 13.5 7.3V3.6C13.5 3.6 13.8 2 11.9 2ZM10.2 3.3C10.6 3.3 10.9 3.6 10.9 4C10.9 4.4 10.6 4.7 10.2 4.7C9.8 4.7 9.5 4.4 9.5 4C9.5 3.6 9.8 3.3 10.2 3.3Z" fill="#3776AB" />
      <path d="M12.1 22C15.7 22 15.5 20.5 15.5 20.5V18.9H11.9V18.4H18.8C18.8 18.4 22 18.7 22 15C22 11.3 19.2 11.5 19.2 11.5H17.7V13.1C17.7 13.1 17.8 15 15.9 15H12.3C12.3 15 10.5 14.9 10.5 16.7V20.4C10.5 20.4 10.2 22 12.1 22ZM13.8 20.7C13.4 20.7 13.1 20.4 13.1 20C13.1 19.6 13.4 19.3 13.8 19.3C14.2 19.3 14.5 19.6 14.5 20C14.5 20.4 14.2 20.7 13.8 20.7Z" fill="#FFD43B" />
    </svg>
  ),
  "AI / ML": (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="#7C3AED" strokeWidth="1.8">
      <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3.5" fill="#7C3AED" fillOpacity="0.2" />
    </svg>
  ),
  FastAPI: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
      <circle cx="12" cy="12" r="10" fill="#009688" />
      <path d="M12.5 5L7 13H11.5L10.5 19L17 10.5H12.5L12.5 5Z" fill="#ffffff" />
    </svg>
  ),
  TensorFlow: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#FF6F00">
      <path d="M12 2L3 7.5L7.5 10.2V15.2L12 12.5V2ZM12 13.8L7.5 16.5L12 19.2L16.5 16.5L12 13.8ZM16.5 10.2L21 7.5L12 2V12.5L16.5 15.2V10.2Z" />
    </svg>
  ),
  PyTorch: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
      <path d="M13.5 3C13.5 3 17 6.5 17 10C17 13 14.5 15 12 15C9.5 15 7 13 7 10C7 7.5 9 5 9 5C9 5 8 8 9.5 9.5C11 11 13 10 13 8C13 6 13.5 3 13.5 3Z" fill="#EE4C2C" />
      <circle cx="16.5" cy="4.5" r="1.5" fill="#EE4C2C" />
      <path d="M6 18H18" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
      <rect width="24" height="24" rx="4" fill="#232F3E" />
      <path d="M7 11.5L9.5 7L12 11.5H7ZM12 11.5L14.5 7L17 11.5H12Z" stroke="#FF9900" strokeWidth="1.5" />
      <path d="M6 16C9 18 15 18 18 16" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 15L18.5 16.5L16.5 17.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
      <path d="M4.5 16.5L8.5 3.5L12 9.5L4.5 16.5Z" fill="#FFA000" />
      <path d="M4.5 16.5L12 21L19.5 16.5L15 6.5L4.5 16.5Z" fill="#FFCA28" />
      <path d="M12 9.5L15 6.5L19.5 16.5L12 21V9.5Z" fill="#F57C00" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#2496ED">
      <path d="M13 8H11V10H13V8ZM10 8H8V10H10V8ZM7 8H5V10H7V8ZM13 5H11V7H13V5ZM10 5H8V7H10V5ZM16 8H14V10H16V8ZM19 10.5C18.6 10.5 18.2 10.7 18 11C17.3 10.3 16.3 10 15 10H4C2.5 10 2 11.5 2 13C2 16.5 5 19 10 19C15.5 19 18.5 16.2 19 13.5C20.2 13.4 21.5 12.8 22 11.5C21 11.2 20 11.5 19 10.5Z" />
    </svg>
  ),
  Nginx: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#009639">
      <path d="M12 2L3 7.2V16.8L12 22L21 16.8V7.2L12 2ZM8 8H9.8L14.2 14.5V8H16V16H14.2L9.8 9.5V16H8V8Z" />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
      <rect width="24" height="24" rx="4" fill="#000000" />
      <path d="M12 5L19 17H5L12 5Z" fill="#ffffff" />
    </svg>
  ),
  DigitalOcean: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#0080FF">
      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 18.5C8.4 18.5 5.5 15.6 5.5 12C5.5 8.4 8.4 5.5 12 5.5V9.5C10.6 9.5 9.5 10.6 9.5 12C9.5 13.4 10.6 14.5 12 14.5V18.5ZM16.5 14.5H14.5V16.5H16.5V14.5ZM18.5 12.5H16.5V14.5H18.5V12.5ZM14.5 16.5H12.5V18.5H14.5V16.5Z" />
    </svg>
  ),
  "Cloud Infrastructure": (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="#004AAD" strokeWidth="1.8">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z" fill="#004AAD" fillOpacity="0.12" />
      <path d="M9 13L12 10L15 13M12 10V17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  APIs: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="#0284C7" strokeWidth="1.8">
      <circle cx="5" cy="12" r="3" fill="#0284C7" fillOpacity="0.18" />
      <circle cx="19" cy="6" r="3" fill="#0284C7" fillOpacity="0.18" />
      <circle cx="19" cy="18" r="3" fill="#0284C7" fillOpacity="0.18" />
      <path d="M8 12H12M12 12L16 6M12 12L16 18" strokeLinecap="round" />
    </svg>
  )
};

export interface TechItem {
  name: string;
  category: string;
  tag: string;
  angle: number;
}

export interface OrbitConfig {
  size: string;
  duration: number;
  direction: "cw" | "ccw";
  items: TechItem[];
}

export const fullOrbits: OrbitConfig[] = [
  // Orbit 1: Inner ring (Frontend & Backend Core)
  {
    size: "w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] md:w-[250px] md:h-[250px] lg:w-[270px] lg:h-[270px]",
    duration: 26,
    direction: "cw",
    items: [
      { name: "React", category: "Frontend", tag: "UI Library", angle: 0 },
      { name: "Node.js", category: "Backend", tag: "JS Runtime", angle: 90 },
      { name: "MongoDB", category: "Databases", tag: "NoSQL DB", angle: 180 },
      { name: "Express.js", category: "Backend", tag: "Framework", angle: 270 },
    ],
  },
  // Orbit 2: Mid-Inner ring (Languages & Services)
  {
    size: "w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] md:w-[340px] md:h-[340px] lg:w-[370px] lg:h-[370px]",
    duration: 34,
    direction: "ccw",
    items: [
      { name: "TypeScript", category: "Languages", tag: "Static Typing", angle: 0 },
      { name: "JavaScript", category: "Languages", tag: "Core JS", angle: 72 },
      { name: "Python", category: "Languages", tag: "Core Language", angle: 144 },
      { name: "FastAPI", category: "Backend", tag: "Async APIs", angle: 216 },
      { name: "Firebase", category: "Backend", tag: "BaaS Platform", angle: 288 },
    ],
  },
  // Orbit 3: Mid-Outer ring (AI/ML & Mobile)
  {
    size: "w-[310px] h-[310px] sm:w-[370px] sm:h-[370px] md:w-[430px] md:h-[430px] lg:w-[470px] lg:h-[470px]",
    duration: 42,
    direction: "cw",
    items: [
      { name: "AI / ML", category: "AI & ML", tag: "Intelligence", angle: 36 },
      { name: "PyTorch", category: "AI & ML", tag: "Neural Nets", angle: 108 },
      { name: "TensorFlow", category: "AI & ML", tag: "Deep Learning", angle: 180 },
      { name: "React Native", category: "Frontend", tag: "Mobile Apps", angle: 252 },
      { name: "APIs", category: "Backend", tag: "REST & GraphQL", angle: 324 },
    ],
  },
  // Orbit 4: Outer ring (Cloud & DevOps)
  {
    size: "w-[380px] h-[380px] sm:w-[450px] sm:h-[450px] md:w-[510px] md:h-[510px] lg:w-[560px] lg:h-[560px]",
    duration: 52,
    direction: "ccw",
    items: [
      { name: "AWS", category: "Cloud & DevOps", tag: "Cloud Computing", angle: 0 },
      { name: "Docker", category: "Cloud & DevOps", tag: "Containers", angle: 60 },
      { name: "Nginx", category: "Cloud & DevOps", tag: "Reverse Proxy", angle: 120 },
      { name: "Vercel", category: "Cloud & DevOps", tag: "Edge Deploy", angle: 180 },
      { name: "DigitalOcean", category: "Cloud & DevOps", tag: "Infrastructure", angle: 240 },
      { name: "Cloud Infrastructure", category: "Cloud & DevOps", tag: "Cloud Systems", angle: 300 },
    ],
  },
];

interface OrbitingCirclesGlobeDemoProps {
  activeCategory?: string;
  onHoverTech?: (tech: TechItem | null) => void;
}

export default function OrbitingCirclesGlobeDemo({
  activeCategory = "All",
  onHoverTech,
}: OrbitingCirclesGlobeDemoProps) {
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  const handleMouseEnter = (item: TechItem) => {
    setHoveredTech(item);
    if (onHoverTech) onHoverTech(item);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
    if (onHoverTech) onHoverTech(null);
  };

  return (
    <div className="relative w-full h-[440px] sm:h-[520px] md:h-[580px] lg:h-[620px] overflow-visible flex items-center justify-center select-none">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)); }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)); }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)); }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)); }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)); }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)); }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)); }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)); }
        }
      `}</style>

      {/* Center particle sphere globe - spacious, centered, never cut off */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square pointer-events-auto w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 z-10">
        <ParticleSphereAnimation />
      </div>

      {/* Orbiting rings */}
      {fullOrbits.map((orbit, orbitIdx) => {
        const isCW = orbit.direction === "cw";
        const orbitAnim = isCW ? "orbit-cw" : "orbit-ccw";
        const counterAnim = isCW ? "counter-cw" : "counter-ccw";

        return (
          <div
            key={orbitIdx}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300/80 pointer-events-none transition-colors ${orbit.size}`}
            style={{
              boxShadow: "inset 0 0 24px rgba(0, 74, 173, 0.025)",
            }}
          >
            {orbit.items.map((item, itemIdx) => {
              const isMatch = activeCategory === "All" || item.category === activeCategory;
              const isSelected = hoveredTech?.name === item.name;

              return (
                <div
                  key={itemIdx}
                  className="absolute top-0 left-1/2 h-1/2 -translate-x-1/2 origin-bottom flex flex-col justify-start items-center pointer-events-none"
                  style={
                    {
                      "--start-angle": `${item.angle}deg`,
                      animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={handleMouseLeave}
                    className={`relative group w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-white/95 backdrop-blur-md border cursor-pointer pointer-events-auto -translate-y-1/2 flex items-center justify-center transition-all duration-200 ${
                      isSelected
                        ? "scale-125 border-[#004AAD] ring-4 ring-[#004AAD]/20 shadow-[0_0_20px_rgba(0,74,173,0.35)] z-30"
                        : isMatch
                        ? "border-slate-200/90 shadow-sm hover:scale-115 hover:border-[#004AAD] hover:shadow-md z-20"
                        : "opacity-25 grayscale border-slate-200/50 scale-90 z-10"
                    }`}
                    style={
                      {
                        "--counter-offset": `${-item.angle}deg`,
                        animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                      {TechSvgIcons[item.name]}
                    </div>

                    {/* Hover tooltip label */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex flex-col items-center pointer-events-none whitespace-nowrap z-40">
                      <div className="bg-[#090e17] text-white text-[11px] font-semibold py-1 px-2.5 rounded-md shadow-xl flex items-center gap-1.5">
                        <span>{item.name}</span>
                        <span className="text-[9px] text-blue-300 font-normal">({item.tag})</span>
                      </div>
                      <div className="w-1.5 h-1.5 bg-[#090e17] rotate-45 -mt-0.5"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      {/* Floating active tech inspection badge / live status bar */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none z-30 transition-all">
        {hoveredTech ? (
          <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2.5 transition-all">
            <span className="w-2 h-2 rounded-full bg-[#004AAD] animate-ping" />
            <span className="text-xs font-bold text-slate-900">{hoveredTech.name}</span>
            <span className="text-[11px] text-slate-500 font-medium">| {hoveredTech.category}</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider bg-blue-50 text-[#004AAD] px-2 py-0.5 rounded-full border border-blue-100">
              {hoveredTech.tag}
            </span>
          </div>
        ) : (
          <div className="bg-white/85 backdrop-blur-md border border-slate-200/80 px-4 py-1.5 rounded-full shadow-sm flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 transition-all">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-slate-700">20 Technologies Active</span>
            <span className="text-slate-300">•</span>
            <span className="hidden sm:inline text-slate-500">Hover any node to inspect framework</span>
          </div>
        )}
      </div>
    </div>
  );
}
