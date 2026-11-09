import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const XTwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// Comprehensive Leadership Datasets categorized into the 4 Tech Mahindra tabs
const leadershipData = {
  board: [
    {
      id: "mohammed-rabbani-pasha",
      name: "Mohammed Rabbani Pasha",
      role: "Founder & Director",
      location: "Hyderabad, India",
      image: "/assets/rabbani-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/mohammed-rabbani-pasha-89b1b4419/",
      twitter: "https://twitter.com",
      email: "rabbani@skywebitsoltions.com",
      bio: "Founder & Director of SkyWeb IT Solutions. Leading company vision, core architectural engineering, and enterprise AI transformation globally. Recognized as an industry jury member at premier engineering hackathons across India.",
      focus: ["Enterprise AI Architecture", "Global Corporate Strategy", "Engineering Governance", "Strategic Client Alliances"]
    },
    {
      id: "tudigonda-vamshi",
      name: "Tudigonda Vamshi",
      role: "Co-Founder",
      location: "Hyderabad, India",
      image: "/assets/vamshi-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/tudigondavamshi/",
      twitter: "https://twitter.com",
      email: "tudigondavamshi@skywebitsolutions.com",
      bio: "Co-Founder of SkyWeb IT Solutions. Directing technical operations, systems engineering, multi-cloud reliability, and high-velocity product delivery across enterprise platforms.",
      focus: ["Technical Operations", "Cloud Infrastructure SLA", "System Resiliency", "High-Velocity Engineering"]
    },
    {
      id: "nimmalapudi-vikhyath",
      name: "Nimmalapudi Vikhyath",
      role: "Chief Financial Officer (CFO)",
      location: "Hyderabad, India",
      image: "/assets/vikhyath-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/vikhyath-nimmlapudi-7baa0626b/",
      twitter: "https://twitter.com",
      email: "nimmalapudivikhyath@skywebitsolutions.com",
      bio: "Chief Financial Officer at SkyWeb. Guiding fiscal discipline, multi-market capital allocation, commercial expansion, and fiduciary governance across international technology ventures.",
      focus: ["Capital Allocation & Treasury", "Enterprise SLA Commitments", "Corporate Compliance", "Fiscal Governance"]
    },
    {
      id: "arpan-varma",
      name: "Arpan Varma",
      role: "COO & AI Engineer",
      location: "Hyderabad, India",
      image: "/assets/arpan-portrait.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "arpan.varma@skywebitsolutions.com",
      bio: "Chief Operating Officer & AI Engineer at SkyWeb. Directing operational excellence, agile delivery frameworks, and building cutting-edge agentic AI workflows and machine learning systems.",
      focus: ["Operational Strategy", "AI & Machine Learning", "Agentic Systems", "Cross-Functional Execution"]
    },
    {
      id: "ch-kalyan",
      name: "CH Kalyan",
      role: "Backend Architecture & 3D Designer",
      location: "Hyderabad, India",
      image: "/assets/kalyan-portrait.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "kalyan@skywebitsolutions.com",
      bio: "Leading backend architecture, microservices infrastructure, and high-fidelity 3D modeling and immersive asset design at SkyWeb IT Solutions.",
      focus: ["Backend Architecture", "3D Design & Modeling", "Microservices & APIs", "System Performance"]
    },
    {
      id: "muskaan-fathima",
      name: "Muskaan Fathima",
      role: "UI/UX Developer",
      location: "Hyderabad, India",
      image: "/assets/muskaan-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/muskaan-fathima-630501357/",
      twitter: "https://twitter.com",
      email: "muskan@skywebitsolution.com",
      bio: "UI/UX Developer at SkyWeb. Shaping human-centered design systems, responsive web interfaces, and modern aesthetic frontend experiences for enterprise and digital solutions.",
      focus: ["UI/UX Development", "Design Systems", "Interactive Prototyping", "Frontend Architecture"]
    },
    {
      id: "uday-kumar-sangisetti",
      name: "Uday Kumar Sangisetti",
      role: "Client Management & Tech Consultant",
      location: "Hyderabad, India",
      image: "/assets/uday-portrait.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "uday.sangisetti@skywebitsolutions.com",
      bio: "Overseeing client relationship management, technical consulting, and strategic solution delivery across domestic and regional enterprise projects.",
      focus: ["Client Management", "Technical Consulting", "Enterprise Solutions", "Client Success & SLA"]
    },
    {
      id: "ian-tapiwa-chenjerai",
      name: "Ian Tapiwa Chenjerai",
      role: "Foreign Client Management & International Project Head",
      location: "Cape Town, South Africa",
      image: "/assets/ian-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/ian-chenjerai-a9b9a9384/",
      twitter: "https://twitter.com",
      email: "IanTapiwaChenjerai@skywebinternational.com",
      bio: "Heading SkyWeb's foreign client engagements and international project delivery, managing cross-border client accounts and global technology delivery teams across international markets.",
      focus: ["Foreign Client Management", "International Project Delivery", "Cross-Border Partnerships", "Global Account Strategy"]
    }
  ],

  executive: [
    {
      id: "mohammed-rabbani-pasha",
      name: "Mohammed Rabbani Pasha",
      role: "Founder & Director",
      location: "Hyderabad, India",
      image: "/assets/rabbani-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/mohammed-rabbani-pasha-89b1b4419/",
      twitter: "https://twitter.com",
      email: "rabbani@skywebitsoltions.com",
      bio: "Founder & Director of SkyWeb IT Solutions. Leading company vision, core architectural engineering, and enterprise AI transformation globally. Recognized as an industry jury member at premier engineering hackathons across India.",
      focus: ["Enterprise AI Architecture", "Global Corporate Strategy", "Engineering Governance", "Strategic Client Alliances"]
    },
    {
      id: "tudigonda-vamshi",
      name: "Tudigonda Vamshi",
      role: "Co-Founder",
      location: "Hyderabad, India",
      image: "/assets/vamshi-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/tudigondavamshi/",
      twitter: "https://twitter.com",
      email: "tudigondavamshi@skywebitsolutions.com",
      bio: "Co-Founder of SkyWeb IT Solutions. Directing technical operations, systems engineering, multi-cloud reliability, and high-velocity product delivery across enterprise platforms.",
      focus: ["Technical Operations", "Cloud Infrastructure SLA", "System Resiliency", "High-Velocity Engineering"]
    },
    {
      id: "nimmalapudi-vikhyath",
      name: "Nimmalapudi Vikhyath",
      role: "Chief Financial Officer (CFO)",
      location: "Hyderabad, India",
      image: "/assets/vikhyath-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/vikhyath-nimmlapudi-7baa0626b/",
      twitter: "https://twitter.com",
      email: "nimmalapudivikhyath@skywebitsolutions.com",
      bio: "Chief Financial Officer at SkyWeb. Guiding fiscal discipline, multi-market capital allocation, commercial expansion, and fiduciary governance across international technology ventures.",
      focus: ["Capital Allocation & Treasury", "Enterprise SLA Commitments", "Corporate Compliance", "Fiscal Governance"]
    },
    {
      id: "arpan-varma",
      name: "Arpan Varma",
      role: "COO & AI Engineer",
      location: "Hyderabad, India",
      image: "/assets/arpan-portrait.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "arpan.varma@skywebitsolutions.com",
      bio: "Chief Operating Officer & AI Engineer at SkyWeb. Directing operational excellence, agile delivery frameworks, and building cutting-edge agentic AI workflows and machine learning systems.",
      focus: ["Operational Strategy", "AI & Machine Learning", "Agentic Systems", "Cross-Functional Execution"]
    },
    {
      id: "ch-kalyan",
      name: "CH Kalyan",
      role: "Backend Architecture & 3D Designer",
      location: "Hyderabad, India",
      image: "/assets/kalyan-portrait.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "kalyan@skywebitsolutions.com",
      bio: "Leading backend architecture, microservices infrastructure, and high-fidelity 3D modeling and immersive asset design at SkyWeb IT Solutions.",
      focus: ["Backend Architecture", "3D Design & Modeling", "Microservices & APIs", "System Performance"]
    },
    {
      id: "muskaan-fathima",
      name: "Muskaan Fathima",
      role: "UI/UX Developer",
      location: "Hyderabad, India",
      image: "/assets/muskaan-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/muskaan-fathima-630501357/",
      twitter: "https://twitter.com",
      email: "muskan@skywebitsolution.com",
      bio: "UI/UX Developer at SkyWeb. Shaping human-centered design systems, responsive web interfaces, and modern aesthetic frontend experiences for enterprise and digital solutions.",
      focus: ["UI/UX Development", "Design Systems", "Interactive Prototyping", "Frontend Architecture"]
    },
    {
      id: "uday-kumar-sangisetti",
      name: "Uday Kumar Sangisetti",
      role: "Client Management & Tech Consultant",
      location: "Hyderabad, India",
      image: "/assets/uday-portrait.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "uday.sangisetti@skywebitsolutions.com",
      bio: "Overseeing client relationship management, technical consulting, and strategic solution delivery across domestic and regional enterprise projects.",
      focus: ["Client Management", "Technical Consulting", "Enterprise Solutions", "Client Success & SLA"]
    },
    {
      id: "ian-tapiwa-chenjerai",
      name: "Ian Tapiwa Chenjerai",
      role: "Foreign Client Management & International Project Head",
      location: "Cape Town, South Africa",
      image: "/assets/ian-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/ian-chenjerai-a9b9a9384/",
      twitter: "https://twitter.com",
      email: "IanTapiwaChenjerai@skywebinternational.com",
      bio: "Heading SkyWeb's foreign client engagements and international project delivery, managing cross-border client accounts and global technology delivery teams across international markets.",
      focus: ["Foreign Client Management", "International Project Delivery", "Cross-Border Partnerships", "Global Account Strategy"]
    }
  ],

  market: [
    {
      id: "ian-tapiwa-chenjerai",
      name: "Ian Tapiwa Chenjerai",
      role: "Foreign Client Management & International Project Head",
      location: "Cape Town, South Africa",
      image: "/assets/ian-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/ian-chenjerai-a9b9a9384/",
      twitter: "https://twitter.com",
      email: "IanTapiwaChenjerai@skywebinternational.com",
      bio: "Heading SkyWeb's foreign client engagements and international project delivery, managing cross-border client accounts and global technology delivery teams across international markets.",
      focus: ["Foreign Client Management", "International Project Delivery", "Cross-Border Partnerships", "Global Account Strategy"]
    },
    {
      id: "uday-kumar-sangisetti",
      name: "Uday Kumar Sangisetti",
      role: "Client Management & Tech Consultant",
      location: "Hyderabad, India",
      image: "/assets/uday-portrait.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "uday.sangisetti@skywebitsolutions.com",
      bio: "Overseeing client relationship management, technical consulting, and strategic solution delivery across domestic and regional enterprise projects.",
      focus: ["Client Management", "Technical Consulting", "Enterprise Solutions", "Client Success & SLA"]
    },
    {
      id: "mohammed-rabbani-pasha",
      name: "Mohammed Rabbani Pasha",
      role: "Founder & Director",
      location: "Hyderabad, India",
      image: "/assets/rabbani-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/mohammed-rabbani-pasha-89b1b4419/",
      twitter: "https://twitter.com",
      email: "rabbani@skywebitsoltions.com",
      bio: "Founder & Director of SkyWeb IT Solutions. Leading company vision, core architectural engineering, and enterprise AI transformation globally. Recognized as an industry jury member at premier engineering hackathons across India.",
      focus: ["Enterprise AI Architecture", "Global Corporate Strategy", "Engineering Governance", "Strategic Client Alliances"]
    },
    {
      id: "arpan-varma",
      name: "Arpan Varma",
      role: "COO & AI Engineer",
      location: "Hyderabad, India",
      image: "/assets/arpan-portrait.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "arpan.varma@skywebitsolutions.com",
      bio: "Chief Operating Officer & AI Engineer at SkyWeb. Directing operational excellence, agile delivery frameworks, and building cutting-edge agentic AI workflows and machine learning systems.",
      focus: ["Operational Strategy", "AI & Machine Learning", "Agentic Systems", "Cross-Functional Execution"]
    },
    {
      id: "tudigonda-vamshi",
      name: "Tudigonda Vamshi",
      role: "Co-Founder",
      location: "Hyderabad, India",
      image: "/assets/vamshi-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/tudigondavamshi/",
      twitter: "https://twitter.com",
      email: "tudigondavamshi@skywebitsolutions.com",
      bio: "Co-Founder of SkyWeb IT Solutions. Directing technical operations, systems engineering, multi-cloud reliability, and high-velocity product delivery across enterprise platforms.",
      focus: ["Technical Operations", "Cloud Infrastructure SLA", "System Resiliency", "High-Velocity Engineering"]
    },
    {
      id: "nimmalapudi-vikhyath",
      name: "Nimmalapudi Vikhyath",
      role: "Chief Financial Officer (CFO)",
      location: "Hyderabad, India",
      image: "/assets/vikhyath-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/vikhyath-nimmlapudi-7baa0626b/",
      twitter: "https://twitter.com",
      email: "nimmalapudivikhyath@skywebitsolutions.com",
      bio: "Chief Financial Officer at SkyWeb. Guiding fiscal discipline, multi-market capital allocation, commercial expansion, and fiduciary governance across international technology ventures.",
      focus: ["Capital Allocation & Treasury", "Enterprise SLA Commitments", "Corporate Compliance", "Fiscal Governance"]
    },
    {
      id: "ch-kalyan",
      name: "CH Kalyan",
      role: "Backend Architecture & 3D Designer",
      location: "Hyderabad, India",
      image: "/assets/kalyan-portrait.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "kalyan@skywebitsolutions.com",
      bio: "Leading backend architecture, microservices infrastructure, and high-fidelity 3D modeling and immersive asset design at SkyWeb IT Solutions.",
      focus: ["Backend Architecture", "3D Design & Modeling", "Microservices & APIs", "System Performance"]
    },
    {
      id: "muskaan-fathima",
      name: "Muskaan Fathima",
      role: "UI/UX Developer",
      location: "Hyderabad, India",
      image: "/assets/muskaan-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/muskaan-fathima-630501357/",
      twitter: "https://twitter.com",
      email: "muskan@skywebitsolution.com",
      bio: "UI/UX Developer at SkyWeb. Shaping human-centered design systems, responsive web interfaces, and modern aesthetic frontend experiences for enterprise and digital solutions.",
      focus: ["UI/UX Development", "Design Systems", "Interactive Prototyping", "Frontend Architecture"]
    }
  ],

  functional: [
    {
      id: "ch-kalyan",
      name: "CH Kalyan",
      role: "Backend Architecture & 3D Designer",
      location: "Hyderabad, India",
      image: "/assets/kalyan-portrait.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "kalyan@skywebitsolutions.com",
      bio: "Leading backend architecture, microservices infrastructure, and high-fidelity 3D modeling and immersive asset design at SkyWeb IT Solutions.",
      focus: ["Backend Architecture", "3D Design & Modeling", "Microservices & APIs", "System Performance"]
    },
    {
      id: "muskaan-fathima",
      name: "Muskaan Fathima",
      role: "UI/UX Developer",
      location: "Hyderabad, India",
      image: "/assets/muskaan-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/muskaan-fathima-630501357/",
      twitter: "https://twitter.com",
      email: "muskan@skywebitsolution.com",
      bio: "UI/UX Developer at SkyWeb. Shaping human-centered design systems, responsive web interfaces, and modern aesthetic frontend experiences for enterprise and digital solutions.",
      focus: ["UI/UX Development", "Design Systems", "Interactive Prototyping", "Frontend Architecture"]
    },
    {
      id: "tudigonda-vamshi",
      name: "Tudigonda Vamshi",
      role: "Co-Founder",
      location: "Hyderabad, India",
      image: "/assets/vamshi-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/tudigondavamshi/",
      twitter: "https://twitter.com",
      email: "tudigondavamshi@skywebitsolutions.com",
      bio: "Co-Founder of SkyWeb IT Solutions. Directing technical operations, systems engineering, multi-cloud reliability, and high-velocity product delivery across enterprise platforms.",
      focus: ["Technical Operations", "Cloud Infrastructure SLA", "System Resiliency", "High-Velocity Engineering"]
    },
    {
      id: "nimmalapudi-vikhyath",
      name: "Nimmalapudi Vikhyath",
      role: "Chief Financial Officer (CFO)",
      location: "Hyderabad, India",
      image: "/assets/vikhyath-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/vikhyath-nimmlapudi-7baa0626b/",
      twitter: "https://twitter.com",
      email: "nimmalapudivikhyath@skywebitsolutions.com",
      bio: "Chief Financial Officer at SkyWeb. Guiding fiscal discipline, multi-market capital allocation, commercial expansion, and fiduciary governance across international technology ventures.",
      focus: ["Capital Allocation & Treasury", "Enterprise SLA Commitments", "Corporate Compliance", "Fiscal Governance"]
    },
    {
      id: "arpan-varma",
      name: "Arpan Varma",
      role: "COO & AI Engineer",
      location: "Hyderabad, India",
      image: "/assets/arpan-portrait.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "arpan.varma@skywebitsolutions.com",
      bio: "Chief Operating Officer & AI Engineer at SkyWeb. Directing operational excellence, agile delivery frameworks, and building cutting-edge agentic AI workflows and machine learning systems.",
      focus: ["Operational Strategy", "AI & Machine Learning", "Agentic Systems", "Cross-Functional Execution"]
    },
    {
      id: "mohammed-rabbani-pasha",
      name: "Mohammed Rabbani Pasha",
      role: "Founder & Director",
      location: "Hyderabad, India",
      image: "/assets/rabbani-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/mohammed-rabbani-pasha-89b1b4419/",
      twitter: "https://twitter.com",
      email: "rabbani@skywebitsoltions.com",
      bio: "Founder & Director of SkyWeb IT Solutions. Leading company vision, core architectural engineering, and enterprise AI transformation globally. Recognized as an industry jury member at premier engineering hackathons across India.",
      focus: ["Enterprise AI Architecture", "Global Corporate Strategy", "Engineering Governance", "Strategic Client Alliances"]
    },
    {
      id: "uday-kumar-sangisetti",
      name: "Uday Kumar Sangisetti",
      role: "Client Management & Tech Consultant",
      location: "Hyderabad, India",
      image: "/assets/uday-portrait.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "uday.sangisetti@skywebitsolutions.com",
      bio: "Overseeing client relationship management, technical consulting, and strategic solution delivery across domestic and regional enterprise projects.",
      focus: ["Client Management", "Technical Consulting", "Enterprise Solutions", "Client Success & SLA"]
    },
    {
      id: "ian-tapiwa-chenjerai",
      name: "Ian Tapiwa Chenjerai",
      role: "Foreign Client Management & International Project Head",
      location: "Cape Town, South Africa",
      image: "/assets/ian-portrait.jpg",
      linkedin: "https://www.linkedin.com/in/ian-chenjerai-a9b9a9384/",
      twitter: "https://twitter.com",
      email: "IanTapiwaChenjerai@skywebinternational.com",
      bio: "Heading SkyWeb's foreign client engagements and international project delivery, managing cross-border client accounts and global technology delivery teams across international markets.",
      focus: ["Foreign Client Management", "International Project Delivery", "Cross-Border Partnerships", "Global Account Strategy"]
    }
  ]
};

const tabs = [
  { id: "board", label: "Board of Directors" },
  { id: "executive", label: "Executive Leadership" },
  { id: "market", label: "Market Leadership" },
  { id: "functional", label: "Functional Leadership" }
];

export default function LeadershipPage({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState("board");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  // Monitor scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentLeaders = leadershipData[activeTab] || leadershipData.board;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-slate-900 font-['DM_Sans']">
      
      {/* ================= MAIN LEADERSHIP CONTENT SECTION (TECH MAHINDRA STYLE) ================= */}
      <section className="pt-28 sm:pt-32 pb-16 px-6 sm:px-8 min-h-[700px]">
        <div className="max-w-7xl mx-auto">

          {/* TAB BAR (Exact Tech Mahindra Layout with Red Active Indicator) */}
          <div className="border-b border-slate-300/80 mb-12 sm:mb-14 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-6 sm:gap-10 min-w-max pb-0">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-sm sm:text-base tracking-normal transition-all pb-3 relative cursor-pointer font-['DM_Sans'] ${
                      isActive 
                        ? "text-slate-900 font-bold border-b-2 border-[#e31837] -mb-[1px]" 
                        : "text-slate-600 hover:text-slate-900 font-medium"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4-COLUMN LEADERSHIP GRID (Matching Reference Screenshot) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-x-7 lg:gap-x-8 gap-y-12 items-start">
            {currentLeaders.map((leader) => (
              <div
                key={leader.id}
                onClick={() => navigate(`/about/leadership/${leader.id}`)}
                className="group cursor-pointer flex flex-col transition-all duration-300"
              >
                {/* Image Container with Solid Neutral Tint & Grayscale Portrait */}
                <div className="relative aspect-[3/3.7] w-full rounded-none overflow-hidden bg-[#d6d8db] flex items-end justify-center shadow-xs">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Social Action Overlay at Top-Right (matching reference image) */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-7 h-7 bg-black/40 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-all backdrop-blur-xs shadow-xs rounded-[2px]"
                        title={`${leader.name} on LinkedIn`}
                        aria-label="LinkedIn"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                    {leader.twitter && (
                      <a
                        href={leader.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-7 h-7 bg-black/40 hover:bg-black text-white flex items-center justify-center transition-all backdrop-blur-xs shadow-xs rounded-[2px]"
                        title={`${leader.name} on X`}
                        aria-label="X"
                      >
                        <XTwitterIcon />
                      </a>
                    )}
                  </div>
                </div>

                {/* Leader Typography: Left Aligned, Bold Uppercase Name + Designation */}
                <div className="mt-3.5 pr-2 flex flex-col">
                  <h3 className="text-sm font-bold uppercase tracking-[0.04em] text-slate-900 font-['DM_Sans'] leading-snug group-hover:text-[#004AAD] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed mt-1">
                    {leader.role}
                  </p>
                  <span className="text-[11px] font-bold text-[#004AAD] mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Full Profile &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Leadership Philosophy Banner */}
          <div className="mt-20 border-t border-slate-300/80 pt-12 pb-6">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#e31837] mb-2 block font-mono">
                  EXECUTIVE INTEGRITY &amp; OVERSIGHT
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['DM_Sans'] mb-2">
                  Engineering-Led Corporate Governance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  At SkyWeb, leadership is not an ivory-tower function. Our executives are active systems thinkers, engineers, and fiscal strategists who interact directly with enterprise accounts to guarantee unyielding SLA compliance and architectural longevity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="px-6 py-3 rounded-xl bg-[#004AAD] hover:bg-[#003B8A] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer text-center"
                >
                  Consult With Executive Team
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FLOATING SCROLL TO TOP BUTTON (Matching Screenshot) ================= */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#333333] hover:bg-black text-white flex items-center justify-center shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
