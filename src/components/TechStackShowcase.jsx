import React, { useState } from 'react';
import OrbitingCirclesGlobeDemo, { TechSvgIcons } from './ui/orbiting-circles-02';

export const TechIcons = TechSvgIcons;

export const technologiesData = [
  { name: "MongoDB", category: "Databases", tag: "NoSQL Database", color: "#13AA52" },
  { name: "Express.js", category: "Backend", tag: "Web Framework", color: "#0f172a" },
  { name: "React", category: "Frontend", tag: "UI Library", color: "#61DAFB" },
  { name: "Node.js", category: "Backend", tag: "JavaScript Runtime", color: "#339933" },
  { name: "JavaScript", category: "Languages", tag: "ECMAScript Core", color: "#F7DF1E" },
  { name: "TypeScript", category: "Languages", tag: "Static Typing", color: "#3178C6" },
  { name: "React Native", category: "Frontend", tag: "Mobile Apps", color: "#004AAD" },
  { name: "Python", category: "Languages", tag: "Core Language", color: "#3776AB" },
  { name: "AI / ML", category: "AI & ML", tag: "Intelligent Systems", color: "#7C3AED" },
  { name: "FastAPI", category: "Backend", tag: "Async APIs", color: "#009688" },
  { name: "TensorFlow", category: "AI & ML", tag: "Deep Learning", color: "#FF6F00" },
  { name: "PyTorch", category: "AI & ML", tag: "Neural Networks", color: "#EE4C2C" },
  { name: "AWS", category: "Cloud & DevOps", tag: "Cloud Computing", color: "#FF9900" },
  { name: "Firebase", category: "Backend", tag: "Backend as a Service", color: "#FFA000" },
  { name: "Docker", category: "Cloud & DevOps", tag: "Containers", color: "#2496ED" },
  { name: "Nginx", category: "Cloud & DevOps", tag: "Reverse Proxy", color: "#009639" },
  { name: "Vercel", category: "Cloud & DevOps", tag: "Edge Deployments", color: "#000000" },
  { name: "DigitalOcean", category: "Cloud & DevOps", tag: "Cloud Infrastructure", color: "#0080FF" },
  { name: "Cloud Infrastructure", category: "Cloud & DevOps", tag: "Scalable Systems", color: "#004AAD" },
  { name: "APIs", category: "Backend", tag: "REST & GraphQL", color: "#0284C7" }
];

export default function TechStackShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Languages", "AI & ML", "Cloud & DevOps", "Databases"];

  return (
    <div className="w-full relative max-w-5xl mx-auto flex flex-col items-center">
      {/* Soft center ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-tr from-[#004AAD]/8 via-indigo-400/6 to-sky-300/8 rounded-full blur-3xl pointer-events-none" />

      {/* Category Filter Pills at top */}
      <div className="relative z-20 flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm max-w-2xl mx-auto mb-2">
        {categories.map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#004AAD] text-white shadow-sm ring-2 ring-[#004AAD]/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 3D Orbiting Sphere Centerpiece - Spacious, fully visible, never clipped */}
      <div className="w-full relative flex items-center justify-center">
        <OrbitingCirclesGlobeDemo activeCategory={activeFilter} />
      </div>
    </div>
  );
}
