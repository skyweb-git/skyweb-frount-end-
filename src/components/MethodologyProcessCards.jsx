import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Code2, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Cpu, 
  GitBranch,
  Gauge
} from 'lucide-react';

export default function MethodologyProcessCards() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      num: "01",
      phase: "PHASE 01",
      title: "Discover & Architect",
      desc: "Technology strategy, architecture and product planning.",
      icon: Layers,
      accent: "#004AAD",
      status: "Blueprint Validated",
      statusColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      deliverable: "Architecture SRS & Specs",
      chips: ["System Spec", "Data Flow", "Risk Audit"],
      // Moving UI Graphic: Interactive Architecture Node Matrix
      graphic: (
        <div className="relative w-full h-32 rounded-xl bg-slate-50/90 border border-slate-200/90 p-3 overflow-hidden flex flex-col justify-between">
          {/* Subtle Dot Grid Inside the graphic */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
              backgroundSize: '12px 12px'
            }}
          />

          {/* Node Connection Flow with moving light pulse */}
          <div className="relative z-10 flex items-center justify-between px-2 pt-2">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-300 text-[#004AAD] flex items-center justify-center shadow-xs">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-slate-600 mt-1">Strategy</span>
            </div>

            {/* Connecting animated beam */}
            <div className="flex-1 h-0.5 mx-2 bg-slate-200 relative overflow-hidden rounded-full">
              <div className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-[#004AAD] to-transparent animate-beam" />
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 border border-indigo-300 text-indigo-700 flex items-center justify-center shadow-xs">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-slate-600 mt-1">Schema</span>
            </div>

            {/* Connecting animated beam */}
            <div className="flex-1 h-0.5 mx-2 bg-slate-200 relative overflow-hidden rounded-full">
              <div className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-[#004AAD] to-transparent animate-beam delay-300" />
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-slate-600 mt-1">Blueprint</span>
            </div>
          </div>

          {/* Micro status ticker */}
          <div className="relative z-10 flex items-center justify-between text-[11px] pt-2 border-t border-slate-200/80">
            <span className="flex items-center gap-1.5 font-bold text-slate-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Target Architecture
            </span>
            <span className="text-[10px] font-bold text-[#004AAD] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
              SOC 2 / AWS Ready
            </span>
          </div>
        </div>
      )
    },
    {
      num: "02",
      phase: "PHASE 02",
      title: "Engineer & Integrate",
      desc: "Software, AI, platforms and integrations.",
      icon: Code2,
      accent: "#004AAD",
      status: "Continuous CI/CD",
      statusColor: "text-blue-600 bg-blue-50 border-blue-200",
      deliverable: "Sprint Code & Staging Drops",
      chips: ["TypeScript", "Microservices", "API Hub"],
      // Moving UI Graphic: Live Code CI/CD & Branch Pipeline
      graphic: (
        <div className="relative w-full h-32 rounded-xl bg-slate-50/90 border border-slate-200/90 p-3 overflow-hidden flex flex-col justify-between">
          {/* Subtle Dot Grid Inside */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
              backgroundSize: '12px 12px'
            }}
          />

          {/* Live Code/Build Bar */}
          <div className="relative z-10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-600 flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-[#004AAD]" />
                main <span className="text-slate-400">#4f82a1</span>
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                PASSED (100%)
              </span>
            </div>

            {/* Moving Progress Bar with Shimmer */}
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden relative">
              <div className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-[#004AAD] w-full relative overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
              </div>
            </div>

            {/* Micro Commit steps */}
            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-0.5">
              <span>lint: ok</span>
              <span>test: 84/84</span>
              <span>build: 0.3s</span>
            </div>
          </div>

          {/* Micro status ticker */}
          <div className="relative z-10 flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-200/80">
            <span className="flex items-center gap-1.5 font-bold text-slate-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Two-Week Agile Sprint
            </span>
            <span className="text-[10px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
              Zero Tech Debt
            </span>
          </div>
        </div>
      )
    },
    {
      num: "03",
      phase: "PHASE 03",
      title: "Deploy & Secure",
      desc: "Cloud infrastructure, security and production systems.",
      icon: ShieldCheck,
      accent: "#004AAD",
      status: "Zero-Downtime",
      statusColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      deliverable: "Production Cluster & TLS",
      chips: ["Multi-AZ", "AES 256-bit", "K8s Cluster"],
      // Moving UI Graphic: Cloud Deployment Radar & Shield Cluster
      graphic: (
        <div className="relative w-full h-32 rounded-xl bg-slate-50/90 border border-slate-200/90 p-3 overflow-hidden flex flex-col justify-between">
          {/* Subtle Dot Grid Inside */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
              backgroundSize: '12px 12px'
            }}
          />

          {/* Central Cloud Node with animated concentric radar pulse */}
          <div className="relative z-10 flex items-center justify-center py-1">
            <div className="relative flex items-center justify-center">
              {/* Animated Radar Pulse Rings */}
              <div className="absolute w-16 h-16 rounded-full border border-blue-400/40 animate-ping opacity-60 pointer-events-none" />
              <div className="absolute w-24 h-24 rounded-full border border-blue-300/30 animate-pulse pointer-events-none" />
              
              {/* Central Badge */}
              <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 shadow-sm flex items-center justify-center text-[#004AAD] relative z-10">
                <ShieldCheck className="w-5 h-5 text-[#004AAD]" />
              </div>
            </div>

            {/* Orbiting metrics */}
            <div className="absolute left-2 top-2 flex flex-col text-[10px] font-mono text-slate-600">
              <span className="font-bold text-[#004AAD]">Multi-AZ</span>
              <span className="text-slate-400">AWS / Azure</span>
            </div>
            <div className="absolute right-2 top-2 flex flex-col items-end text-[10px] font-mono text-slate-600">
              <span className="font-bold text-emerald-600">SSL / TLS</span>
              <span className="text-slate-400">256-bit AES</span>
            </div>
          </div>

          {/* Micro status ticker */}
          <div className="relative z-10 flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-200/80">
            <span className="flex items-center gap-1.5 font-bold text-slate-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              0-Downtime Rollout
            </span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Active Security
            </span>
          </div>
        </div>
      )
    },
    {
      num: "04",
      phase: "PHASE 04",
      title: "Scale & Optimize",
      desc: "Optimization, automation, monitoring and continuous development.",
      icon: Activity,
      accent: "#004AAD",
      status: "Auto-Scaling Active",
      statusColor: "text-blue-600 bg-blue-50 border-blue-200",
      deliverable: "Telemetry & 24/7 SLA",
      chips: ["Auto-Scale", "<40ms Latency", "99.99% Uptime"],
      // Moving UI Graphic: Live Waveform / Telemetry Wave
      graphic: (
        <div className="relative w-full h-32 rounded-xl bg-slate-50/90 border border-slate-200/90 p-3 overflow-hidden flex flex-col justify-between">
          {/* Subtle Dot Grid Inside */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
              backgroundSize: '12px 12px'
            }}
          />

          {/* Animated SVG Sparkline Wave */}
          <div className="relative z-10">
            <div className="flex items-center justify-between text-[11px] font-mono mb-1">
              <span className="text-slate-600 font-bold flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5 text-[#004AAD]" />
                Telemetry
              </span>
              <span className="text-emerald-600 font-bold">99.99% UPTIME</span>
            </div>

            {/* SVG Wave with flowing glow and animated tracer dot */}
            <div className="w-full h-11 relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 200 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#004AAD" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#004AAD" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Wave Area Fill */}
                <path
                  d="M 0,25 Q 25,5 50,22 T 100,18 T 150,12 T 200,20 L 200,40 L 0,40 Z"
                  fill="url(#waveGradient)"
                />
                {/* Animated Wave Path */}
                <path
                  d="M 0,25 Q 25,5 50,22 T 100,18 T 150,12 T 200,20"
                  fill="none"
                  stroke="#004AAD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="animate-wave"
                />
                {/* Moving Peak Dot */}
                <circle cx="150" cy="12" r="3.5" fill="#004AAD" className="animate-ping" opacity="0.6" />
                <circle cx="150" cy="12" r="3" fill="#0066FF" stroke="#ffffff" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          {/* Micro status ticker */}
          <div className="relative z-10 flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-200/80">
            <span className="flex items-center gap-1.5 font-bold text-slate-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Auto-Scaling: 1x - 10x
            </span>
            <span className="text-[10px] font-bold text-slate-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              &lt;40ms Avg
            </span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative w-full">
      {/* 4 Clean Process Boxes with Dots & Moving UI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isHovered = activeStep === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setActiveStep(idx)}
              onMouseLeave={() => setActiveStep(null)}
              className={`group relative bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7 ${
                isHovered 
                  ? 'border-[#004AAD]/60 shadow-[0_16px_36px_-10px_rgba(0,74,173,0.16)] -translate-y-1.5' 
                  : 'border-slate-200/90 shadow-xs'
              }`}
            >
              {/* ================= 1. CLEAN TECHNICAL DOT-GRID PATTERN INSIDE BOX ================= */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-45 group-hover:opacity-80 transition-opacity duration-300"
                style={{
                  backgroundImage: 'radial-gradient(#94a3b8 1.15px, transparent 1.15px)',
                  backgroundSize: '16px 16px',
                  maskImage: 'radial-gradient(ellipse at 50% 40%, black 50%, transparent 95%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 50%, transparent 95%)'
                }}
                aria-hidden="true"
              />

              {/* Ambient Blue Corner Glow on Hover */}
              <div 
                className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                aria-hidden="true"
              />

              {/* Top Section: Step Number, Phase Badge & Stage Icon */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-['DM_Sans'] text-2xl sm:text-3xl font-black text-[#004AAD] tracking-tight">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      {step.phase}
                    </span>
                  </div>

                  {/* Stage Icon */}
                  <div className="w-9 h-9 rounded-xl bg-blue-50/80 border border-blue-100 text-[#004AAD] flex items-center justify-center group-hover:bg-[#004AAD] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight font-['DM_Sans'] mb-2 group-hover:text-[#004AAD] transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* ================= 2. CLEAN & NEAT MOVING UI INSIDE (REPLACING BLANK SPACE) ================= */}
              <div className="relative z-10 my-5">
                {step.graphic}
              </div>

              {/* ================= 3. BOTTOM TECHNICAL PILLS & DELIVERABLE ================= */}
              <div className="relative z-10 pt-3 border-t border-slate-100">
                {/* Micro Technical Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {step.chips.map((chip, cIdx) => (
                    <span 
                      key={cIdx} 
                      className="text-[10px] font-medium text-slate-600 bg-slate-100/80 group-hover:bg-blue-50 group-hover:text-[#004AAD] px-2 py-0.5 rounded-md transition-colors"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Deliverable Footnote */}
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span className="truncate pr-2 font-medium">
                    {step.deliverable}
                  </span>
                  <Link 
                    to="/process" 
                    className="text-[#004AAD] font-bold inline-flex items-center gap-0.5 hover:gap-1.5 transition-all text-xs shrink-0"
                    aria-label={`Learn more about ${step.title}`}
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Bottom Subtle Active Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#004AAD] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
