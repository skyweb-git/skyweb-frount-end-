"use client";

import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, type Variants } from "framer-motion";
import { Menu, ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "../../lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./sheet";

export type MenuSection = "about" | "capabilities" | "industries" | "insights" | null;

export interface NavItem {
  id: MenuSection;
  name: string;
  href: string;
  hasDropdown?: boolean;
}

export interface AnimatedNavFramerProps {
  items?: NavItem[];
  onOpenModal?: () => void;
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { id: "about", name: "About Us", href: "/about", hasDropdown: true },
  { id: "capabilities", name: "Capabilities", href: "/capabilities", hasDropdown: true },
  { id: "industries", name: "Industries", href: "/industries", hasDropdown: true },
  { id: "insights", name: "Insights", href: "/insights", hasDropdown: true },
  { id: null, name: "Careers", href: "/careers" },
];

const wrapperVariants: Variants = {
  expanded: {
    left: "50%",
    x: "-50%",
    top: "0.75rem",
    transition: {
      type: "spring",
      damping: 24,
      stiffness: 260,
    },
  },
  collapsed: {
    left: "1rem",
    x: "0%",
    top: "0.75rem",
    transition: {
      type: "spring",
      damping: 24,
      stiffness: 260,
    },
  },
};

const containerVariants: Variants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      y: { type: "spring", damping: 20, stiffness: 260 },
      opacity: { duration: 0.25 },
      type: "spring",
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      y: { type: "spring", damping: 20, stiffness: 260 },
      type: "spring",
      damping: 20,
      stiffness: 300,
      when: "afterChildren",
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const logoVariants: Variants = {
  expanded: { 
    opacity: 1, 
    scale: 1, 
    x: 0, 
    transition: { type: "spring", damping: 18 } 
  },
  collapsed: { 
    opacity: 1, 
    scale: 0.95, 
    x: 0, 
    transition: { type: "spring", damping: 18 } 
  },
};

const itemVariants: Variants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -20, scale: 0.9, transition: { duration: 0.2 } },
};

export function AnimatedNavFramer({
  items = defaultNavItems,
  onOpenModal,
  className
}: AnimatedNavFramerProps) {
  const [isExpanded, setExpanded] = React.useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const [mobileOpenSection, setMobileOpenSection] = React.useState<string | null>(null);
  const [activeMenu, setActiveMenu] = React.useState<MenuSection>(null);
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const toggleMobileSection = (section: string) => {
    setMobileOpenSection((prev) => (prev === section ? null : section));
  };

  React.useEffect(() => {
    if (!mobileDrawerOpen) setMobileOpenSection(null);
  }, [mobileDrawerOpen]);
  
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    const diff = latest - previous;
    
    // Near top of page, always stay open
    if (latest < 60) {
      setExpanded(true);
    } 
    // Scrolling DOWN past threshold -> collapse and move logo to top-left corner
    else if (isExpanded && diff > 6 && latest > 120) {
      setExpanded(false);
      setActiveMenu(null);
    } 
    // Scrolling UP (even slightly, > 4px upwards) -> immediately open/expand!
    else if (!isExpanded && diff < -4) {
      setExpanded(true);
    }
    
    lastScrollY.current = latest;
  });

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      e.stopPropagation();
      setExpanded(true);
    }
  };

  const handleMouseEnter = (menuId: MenuSection) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 220);
  };

  const closeDropdown = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveMenu(null);
  };

  return (
    <>
      {/* Floating Rectangular Navbar with Clean Rounded Corners */}
      <motion.div 
        variants={wrapperVariants}
        initial="expanded"
        animate={isExpanded ? "expanded" : "collapsed"}
        className={cn("fixed z-50", className)}
        onMouseLeave={handleMouseLeave}
      >
        <motion.nav
          initial="expanded"
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={containerVariants}
          whileHover={!isExpanded ? { scale: 1.08 } : {}}
          whileTap={!isExpanded ? { scale: 0.95 } : {}}
          onClick={handleNavClick}
          className={cn(
            "flex items-center flex-nowrap whitespace-nowrap overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_10px_35px_-6px_rgba(0,0,0,0.08),0_2px_8px_-2px_rgba(0,0,0,0.04)] backdrop-blur-md h-[56px] sm:h-[68px] md:h-[72px] max-w-[calc(100vw-1.5rem)] sm:max-w-[96vw] px-2.5 sm:px-3.5 md:px-5 transition-all relative",
            !isExpanded && "cursor-pointer justify-center px-0 w-auto h-auto border-transparent bg-transparent shadow-none backdrop-blur-none hover:border-transparent hover:shadow-none"
          )}
        >
          {/* Brand Logo (Shown in navbar and when collapsed in top-left) */}
          <motion.div
            variants={logoVariants}
            className={cn(
              "flex-shrink-0 flex items-center transition-all",
              isExpanded ? "pl-0.5 sm:pl-1 md:pl-2 pr-1.5 sm:pr-2 md:pr-4" : "p-0 justify-center"
            )}
          >
            <Link 
              to="/" 
              onClick={(e) => {
                if (!isExpanded) {
                  e.preventDefault();
                  e.stopPropagation();
                  setExpanded(true);
                }
              }}
              className="flex items-center justify-center outline-none focus:outline-none transition-transform duration-200 hover:scale-105" 
              aria-label="SkyWeb Home"
            >
              <img 
                src="/assets/logo.png" 
                alt="SkyWeb Logo" 
                className={cn(
                  "w-auto object-contain transition-all duration-200",
                  isExpanded ? "h-8 sm:h-11 md:h-[48px] drop-shadow-sm rounded-lg" : "h-9 sm:h-11 md:h-12"
                )} 
              />
            </Link>
          </motion.div>
          
          {/* Desktop Navigation Links */}
          <motion.div
            className={cn(
              "hidden md:flex items-center flex-nowrap whitespace-nowrap flex-shrink-0 gap-1 lg:gap-1.5 pr-1",
              !isExpanded && "pointer-events-none !hidden"
            )}
          >
            {items.map((item) => {
              const isActive = location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);
              const isHovered = activeMenu === item.id && item.id !== null;

              if (item.hasDropdown) {
                return (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    className="relative flex-shrink-0 whitespace-nowrap"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                  >
                    <Link
                      to={item.href}
                      onClick={(e) => {
                        e.stopPropagation();
                        closeDropdown();
                      }}
                      className={cn(
                        "inline-flex items-center flex-nowrap whitespace-nowrap flex-shrink-0 gap-1.5 text-[14.5px] lg:text-[15px] font-semibold transition-all px-3.5 lg:px-4 py-2 rounded-lg outline-none focus:outline-none select-none",
                        isActive || isHovered
                          ? "text-[#004AAD] bg-[#004AAD]/10 shadow-xs"
                          : "text-slate-600 hover:text-[#004AAD] hover:bg-slate-100/70"
                      )}
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                      <ChevronDown className={cn("h-3.5 w-3.5 flex-shrink-0 transition-transform duration-200", isHovered && "rotate-180")} />
                    </Link>
                  </motion.div>
                );
              }

              return (
                <motion.div key={item.name} variants={itemVariants} className="flex-shrink-0 whitespace-nowrap">
                  <Link
                    to={item.href}
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                    className={cn(
                      "text-[14.5px] lg:text-[15px] font-semibold transition-all px-3.5 lg:px-4 py-2 rounded-lg inline-block outline-none focus:outline-none select-none whitespace-nowrap flex-shrink-0",
                      isActive
                        ? "text-[#004AAD] bg-[#004AAD]/10 shadow-xs"
                        : "text-slate-600 hover:text-[#004AAD] hover:bg-slate-100/70"
                    )}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}

            {/* Desktop Contact Us Link */}
            <motion.div variants={itemVariants} className="pl-1.5 sm:pl-2.5 flex-shrink-0 whitespace-nowrap">
              <Link
                to="/contact"
                onClick={(e) => {
                  e.stopPropagation();
                  closeDropdown();
                }}
                className="h-10 sm:h-11 px-5 sm:px-6 rounded-xl bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm sm:text-[14.5px] font-semibold tracking-normal transition-all duration-200 shadow-[0_4px_14px_rgba(0,74,173,0.3)] hover:shadow-[0_6px_20px_rgba(0,74,173,0.4)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap outline-none focus:outline-none inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Right Controls */}
          <motion.div
            variants={itemVariants}
            className={cn(
              "flex md:hidden items-center gap-1.5 pr-0.5",
              !isExpanded && "pointer-events-none !hidden"
            )}
          >
            <Link
              to="/contact"
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="h-8 px-3 rounded-lg bg-[#004AAD] hover:bg-[#003B8A] text-white text-[11px] font-semibold transition-all shadow-xs cursor-pointer whitespace-nowrap outline-none focus:outline-none inline-flex items-center justify-center"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMobileDrawerOpen(true);
              }}
              className="h-8 w-8 inline-flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer outline-none focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.nav>
      </motion.div>

      {/* ================= FULL VIEWPORT CENTERED MEGA-MENU ================= */}
      <AnimatePresence>
        {isExpanded && activeMenu && (
          <div 
            className="fixed top-24 sm:top-[104px] left-0 right-0 flex justify-center z-40 px-4 pointer-events-none"
            onMouseEnter={() => {
              if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-auto w-[1160px] max-w-[96vw] bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18),0_10px_25px_-5px_rgba(0,0,0,0.06)] border border-slate-200/80 p-7 lg:p-9 z-50 text-left relative before:absolute before:-top-6 before:left-0 before:right-0 before:h-6 overflow-hidden"
            >
              {/* ================= 1. ABOUT US MEGA-MENU ================= */}
              {activeMenu === "about" && (
                <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  <div className="col-span-12 lg:col-span-3 pr-2 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 pb-5 lg:pb-0">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0f172a] font-['DM_Sans'] tracking-tight mb-3">
                        About Us
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-[230px]">
                        Pioneering intelligent software, next-generation AI solutions, and resilient cloud engineering.
                      </p>
                    </div>

                    <div className="pt-6 hidden lg:block">
                      <Link
                        to="/about"
                        onClick={closeDropdown}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#004AAD] hover:text-[#003B8A] transition-colors group"
                      >
                        <span>Explore SkyWeb Hub</span>
                        <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
                    <div className="flex flex-col gap-2.5">
                      <Link to="/about/overview" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors mb-1 text-[15px]">
                        Corporate Overview
                      </Link>
                      <Link to="/about/leadership" onClick={closeDropdown} className="text-slate-600 hover:text-[#004AAD] hover:translate-x-0.5 transition-all">
                        Leadership
                      </Link>
                      <Link to="/about/brand" onClick={closeDropdown} className="text-slate-600 hover:text-[#004AAD] hover:translate-x-0.5 transition-all">
                        Our Brand
                      </Link>
                      <Link to="/about/recognition" onClick={closeDropdown} className="text-slate-600 hover:text-[#004AAD] hover:translate-x-0.5 transition-all">
                        Recognition & Awards
                      </Link>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <Link to="/about/customer-speak" onClick={closeDropdown} className="text-slate-600 hover:text-[#004AAD] hover:translate-x-0.5 transition-all sm:mt-7">
                        The Clients
                      </Link>
                      <Link to="/about/partners" onClick={closeDropdown} className="text-slate-600 hover:text-[#004AAD] hover:translate-x-0.5 transition-all">
                        Partners Ecosystem
                      </Link>
                      <Link to="/about/portfolio" onClick={closeDropdown} className="text-slate-600 hover:text-[#004AAD] hover:translate-x-0.5 transition-all">
                        Portfolio Companies
                      </Link>
                      <Link to="/about/citizenship" onClick={closeDropdown} className="text-slate-600 hover:text-[#004AAD] hover:translate-x-0.5 transition-all">
                        Corporate Citizenship
                      </Link>
                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-4 flex flex-col">
                    <a
                      href="https://nanoprofiles.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeDropdown}
                      className="group relative rounded-xl overflow-hidden h-full min-h-[220px] flex flex-col justify-end p-5 shadow-sm hover:shadow-md transition-all border border-slate-800"
                      style={{ backgroundImage: "url('/assets/nav-nanoprofiles.jpg')", backgroundSize: "cover", backgroundPosition: "center top" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-colors" />
                      <div className="relative z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/25 text-xs font-bold text-white uppercase tracking-wider group-hover:bg-[#004AAD] group-hover:border-[#004AAD] transition-all shadow-md">
                          <span>VISIT</span>
                          <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              )}

              {/* ================= 2. CAPABILITIES MEGA-MENU ================= */}
              {activeMenu === "capabilities" && (
                <div className="flex flex-col gap-8">
                  {/* Section A: Our Services */}
                  <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start border-b border-slate-100 pb-7">
                    <div className="col-span-12 lg:col-span-3">
                      <h2 className="text-3xl font-extrabold text-[#0f172a] font-['DM_Sans'] tracking-tight mb-2">
                        Our Capabilities
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-[220px]">
                        End-to-end technology solutions powering modern, resilient enterprises.
                      </p>
                      <div className="pt-4 hidden lg:block">
                        <Link
                          to="/capabilities"
                          onClick={closeDropdown}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#004AAD] hover:underline"
                        >
                          <span>Explore All Capabilities</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-12 lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                      {/* Col 1 */}
                      <div className="flex flex-col gap-5">
                        <div>
                          <Link to="/capabilities/application-services" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors block text-[15px] mb-2">
                            Software Engineering & Application Services
                          </Link>
                          <div className="flex flex-col gap-1.5 text-slate-600 text-[13px]">
                            <Link to="/capabilities/application-services" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Custom Software Development</Link>
                            <Link to="/capabilities/application-services" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Full-Stack Web Engineering</Link>
                            <Link to="/capabilities/application-services" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">API Architecture & Integration</Link>
                            <Link to="/capabilities/application-services" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Application Modernization</Link>
                            <Link to="/capabilities/application-services" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">QA & Performance Engineering</Link>
                          </div>
                        </div>

                        <div>
                          <Link to="/capabilities/products-platforms" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors block text-[15px] mb-2">
                            Digital Platforms & Product Engineering
                          </Link>
                          <div className="flex flex-col gap-1.5 text-slate-600 text-[13px]">
                            <Link to="/capabilities/products-platforms" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">SaaS Product Engineering</Link>
                            <Link to="/capabilities/products-platforms" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Digital Community Platforms</Link>
                            <Link to="/capabilities/products-platforms" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Digital Commerce Architectures</Link>
                            <Link to="/capabilities/products-platforms" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Mobile Applications (iOS/Android)</Link>
                          </div>
                        </div>
                      </div>

                      {/* Col 2 */}
                      <div className="flex flex-col gap-5">
                        <div>
                          <Link to="/capabilities/artificial-intelligence" onClick={closeDropdown} className="font-bold text-[#004AAD] hover:text-[#003B8A] transition-colors block text-[15px] mb-2 flex items-center gap-1.5">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>AI & Machine Learning</span>
                          </Link>
                          <div className="flex flex-col gap-1.5 text-slate-600 text-[13px]">
                            <Link to="/capabilities/artificial-intelligence" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Conversational AI & Assistants</Link>
                            <Link to="/capabilities/artificial-intelligence" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Intelligent Workflow Automation</Link>
                            <Link to="/capabilities/artificial-intelligence" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Computer Vision & OCR</Link>
                            <Link to="/capabilities/artificial-intelligence" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Machine Learning Models</Link>
                            <Link to="/capabilities/artificial-intelligence" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Custom AI Experiences</Link>
                          </div>
                        </div>

                        <div>
                          <Link to="/capabilities/experience-services" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors block text-[15px] mb-2">
                            UI/UX & Experience Engineering
                          </Link>
                          <div className="flex flex-col gap-1.5 text-slate-600 text-[13px]">
                            <Link to="/capabilities/experience-services" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">User Experience (UX) Strategy</Link>
                            <Link to="/capabilities/experience-services" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Enterprise UI Design</Link>
                            <Link to="/capabilities/experience-services" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Design Systems & Guidelines</Link>
                            <Link to="/capabilities/experience-services" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Interactive Prototyping</Link>
                            <Link to="/capabilities/experience-services" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Usability & Accessibility Audits</Link>
                          </div>
                        </div>
                      </div>

                      {/* Col 3 */}
                      <div className="flex flex-col gap-5">
                        <div>
                          <Link to="/capabilities/cloud-infrastructure" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors block text-[15px] mb-2">
                            Cloud & Infrastructure Services
                          </Link>
                          <div className="flex flex-col gap-1.5 text-slate-600 text-[13px]">
                            <Link to="/capabilities/cloud-infrastructure" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Cloud Consulting & Architecture</Link>
                            <Link to="/capabilities/cloud-infrastructure" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">AWS Infrastructure & Hosting</Link>
                            <Link to="/capabilities/cloud-infrastructure" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">DevOps & CI/CD Pipelines</Link>
                            <Link to="/capabilities/cloud-infrastructure" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Server & Database Optimization</Link>
                            <Link to="/capabilities/cloud-infrastructure" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Monitoring & Reliability Engineering</Link>
                          </div>
                        </div>

                        <div>
                          <Link to="/capabilities/business-technology" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors block text-[15px] mb-2">
                            Business Technology Solutions
                          </Link>
                          <div className="flex flex-col gap-1.5 text-slate-600 text-[13px]">
                            <Link to="/capabilities/business-technology" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">CRM & Customer Portals</Link>
                            <Link to="/capabilities/business-technology" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Inventory & Supply Workflows</Link>
                            <Link to="/capabilities/business-technology" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Sales Tracking & Analytics</Link>
                            <Link to="/capabilities/business-technology" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Operational BI Dashboards</Link>
                            <Link to="/capabilities/business-technology" onClick={closeDropdown} className="hover:text-[#004AAD] transition-colors">Automated Reporting Systems</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section B: Spotlight */}
                  <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
                    <div className="col-span-12 lg:col-span-3">
                      <h3 className="text-2xl font-extrabold text-[#0f172a] font-['DM_Sans'] tracking-tight">
                        Spotlight
                      </h3>
                    </div>

                    <div className="col-span-12 lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                      <div className="flex flex-col gap-1.5">
                        <Link to="/capabilities/products-platforms" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors text-[15px]">
                          Products & Platforms
                        </Link>
                        <Link to="/capabilities/nano-profiles" onClick={closeDropdown} className="text-slate-600 hover:text-[#004AAD] transition-colors text-[13px]">
                          Nano Profiles™ (Smart Digital Identity)
                        </Link>
                        <div className="flex items-center gap-2 text-[13px]">
                          <Link to="/capabilities/hashtalks" onClick={closeDropdown} className="text-slate-600 hover:text-[#004AAD] transition-colors">
                            HashTalks
                          </Link>
                          <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                            Coming Soon
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[13px]">
                          <Link to="/capabilities/artube" onClick={closeDropdown} className="text-slate-600 hover:text-[#004AAD] transition-colors">
                            ArTube
                          </Link>
                          <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                            Coming Soon
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[13px]">
                          <Link to="/capabilities/art-coin" onClick={closeDropdown} className="text-slate-600 hover:text-[#004AAD] transition-colors">
                            Art Coin
                          </Link>
                          <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                            Coming Soon
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= 3. INDUSTRIES MEGA-MENU ================= */}
              {activeMenu === "industries" && (
                <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  <div className="col-span-12 lg:col-span-3 pr-2 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 pb-5 lg:pb-0">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0f172a] font-['DM_Sans'] tracking-tight mb-3">
                        Industries
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-[230px]">
                        Domain-tailored digital engineering across mission-critical global industries.
                      </p>
                    </div>

                    <div className="pt-6 hidden lg:block">
                      <Link
                        to="/industries"
                        onClick={closeDropdown}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#004AAD] hover:text-[#003B8A] transition-colors group"
                      >
                        <span>View All Sectors</span>
                        <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* List Col 1 */}
                  <div className="col-span-6 lg:col-span-3 flex flex-col gap-2.5 text-sm">
                    <Link to="/industries/banking-financial" onClick={closeDropdown} className="text-slate-700 font-semibold hover:text-[#004AAD] hover:translate-x-0.5 transition-all">Banking & Financial Services</Link>
                    <Link to="/industries/communications" onClick={closeDropdown} className="text-slate-700 font-semibold hover:text-[#004AAD] hover:translate-x-0.5 transition-all">Communications & Telecom</Link>
                    <Link to="/industries/education" onClick={closeDropdown} className="text-slate-700 font-semibold hover:text-[#004AAD] hover:translate-x-0.5 transition-all">Education</Link>
                    <Link to="/industries/energy-utilities" onClick={closeDropdown} className="text-slate-700 font-semibold hover:text-[#004AAD] hover:translate-x-0.5 transition-all">Energy & Utilities</Link>
                    <Link to="/industries/healthcare-lifesciences" onClick={closeDropdown} className="text-slate-700 font-semibold hover:text-[#004AAD] hover:translate-x-0.5 transition-all">Healthcare & Life Sciences</Link>
                    <Link to="/industries/hi-tech" onClick={closeDropdown} className="text-slate-700 font-semibold hover:text-[#004AAD] hover:translate-x-0.5 transition-all">Hi Tech</Link>
                    <Link to="/industries/insurance" onClick={closeDropdown} className="text-slate-700 font-semibold hover:text-[#004AAD] hover:translate-x-0.5 transition-all">Insurance</Link>
                  </div>

                  {/* List Col 2 */}
                  <div className="col-span-6 lg:col-span-3 flex flex-col gap-2.5 text-sm">
                    <Link to="/industries/manufacturing" onClick={closeDropdown} className="text-slate-700 font-semibold hover:text-[#004AAD] hover:translate-x-0.5 transition-all">Manufacturing & Industry 4.0</Link>
                    <Link to="/industries/media-entertainment" onClick={closeDropdown} className="text-slate-700 font-semibold hover:text-[#004AAD] hover:translate-x-0.5 transition-all">Media & Entertainment</Link>
                    <Link to="/industries/oil-gas" onClick={closeDropdown} className="text-slate-700 font-semibold hover:text-[#004AAD] hover:translate-x-0.5 transition-all">Oil & Gas</Link>
                    <Link to="/industries/private-equity" onClick={closeDropdown} className="text-slate-700 font-semibold hover:text-[#004AAD] hover:translate-x-0.5 transition-all">Private Equity</Link>
                    <Link to="/industries/professional-services" onClick={closeDropdown} className="text-slate-700 font-semibold hover:text-[#004AAD] hover:translate-x-0.5 transition-all">Professional Services</Link>
                    <Link to="/industries/retail-consumer" onClick={closeDropdown} className="text-slate-700 font-semibold hover:text-[#004AAD] hover:translate-x-0.5 transition-all">Retail & Consumer Goods</Link>
                    <Link to="/industries/travel-logistics" onClick={closeDropdown} className="text-slate-700 font-semibold hover:text-[#004AAD] hover:translate-x-0.5 transition-all">Travel, Logistics & Hospitality</Link>
                  </div>

                  {/* 2 Featured Platform & Client Cards (ArtArtist & ServFex) */}
                  <div className="col-span-12 lg:col-span-3 flex flex-col gap-3">
                    <a
                      href="https://artartist.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeDropdown}
                      className="group relative rounded-xl overflow-hidden h-36 flex flex-col justify-between p-4 shadow-sm hover:shadow-md transition-all border border-slate-800"
                      style={{ backgroundImage: "url('/assets/artartist-showcase.jpg')", backgroundSize: "cover", backgroundPosition: "center top" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 group-hover:via-black/50 transition-colors" />
                      <div className="relative z-10">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200 border-b border-white/60 pb-0.5 inline-block">
                          Featured Platform
                        </span>
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-sm font-bold text-white leading-snug mb-1">
                          ArtArtist: Artists Get Hired
                        </h4>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 uppercase tracking-wider group-hover:text-white transition-colors">
                          <span>EXPLORE</span>
                          <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </a>

                    <Link
                      to="/about/customer-speak"
                      onClick={closeDropdown}
                      className="group relative rounded-xl overflow-hidden h-36 flex flex-col justify-between p-4 shadow-sm hover:shadow-md transition-all border border-slate-800"
                      style={{ backgroundImage: "url('/assets/servfex-showcase.png')", backgroundSize: "cover", backgroundPosition: "center top" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 group-hover:via-black/50 transition-colors" />
                      <div className="relative z-10">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200 border-b border-white/60 pb-0.5 inline-block">
                          Client Spotlight
                        </span>
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-sm font-bold text-white leading-snug mb-1">
                          ServFex: Everyday Services Made Simpler
                        </h4>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-300 uppercase tracking-wider group-hover:text-white transition-colors">
                          <span>EXPLORE</span>
                          <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}

              {/* ================= 4. INSIGHTS MEGA-MENU ================= */}
              {activeMenu === "insights" && (
                <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  <div className="col-span-12 lg:col-span-3 pr-2 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 pb-5 lg:pb-0">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0f172a] font-['DM_Sans'] tracking-tight mb-3">
                        Insights
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-[230px]">
                        Engineering perspectives, applied AI research, and digital transformation strategies from SkyWeb.
                      </p>
                    </div>
                  </div>

                  {/* Middle Insights List */}
                  <div className="col-span-12 lg:col-span-5 flex flex-col gap-2.5 text-sm pr-4">
                    {/* Official News Links - Kept First */}
                    <div className="pb-2 mb-1 border-b border-slate-100 flex flex-col gap-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#004AAD]">
                        Official Press & News
                      </span>
                      <Link to="/insights/designathon-2026-hyderabad-uiux-hackathon-workshop" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors text-sm flex items-center justify-between group py-1">
                        <span>Designathon 2026: Hyderabad UI/UX Hackathon</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#004AAD] transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link to="/insights/codestars-2k26-national-hackathon-hyderabad" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors text-sm flex items-center justify-between group py-1">
                        <span>Code Stars 2K26 Hackathon (Hyderabad)</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#004AAD] transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link to="/insights/audisankara-university-codesprint-2026-hackathon" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors text-sm flex items-center justify-between group py-1">
                        <span>Audisankara Codesprint 2026</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#004AAD] transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      Technology Articles
                    </span>
                    <Link to="/insights/software-engineering" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors text-sm flex items-center justify-between group py-1">
                      <span>Software Engineering</span>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#004AAD] transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/insights/ai-machine-learning" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors text-sm flex items-center justify-between group py-1">
                      <span>AI & Machine Learning</span>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#004AAD] transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/insights/cloud-infrastructure" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors text-sm flex items-center justify-between group py-1">
                      <span>Cloud & Infrastructure</span>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#004AAD] transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/insights/digital-platforms" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors text-sm flex items-center justify-between group py-1">
                      <span>Digital Platforms & Artube</span>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#004AAD] transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/insights/business-technology" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors text-sm flex items-center justify-between group py-1">
                      <span>Business Technology</span>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#004AAD] transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/insights/technology-consulting" onClick={closeDropdown} className="font-bold text-[#0f172a] hover:text-[#004AAD] transition-colors text-sm flex items-center justify-between group py-1">
                      <span>Technology Consulting</span>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#004AAD] transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Right Featured Cards */}
                  <div className="col-span-12 lg:col-span-4 flex flex-col gap-3">
                    <Link
                      to="/insights/software-engineering"
                      onClick={closeDropdown}
                      className="group relative rounded-xl overflow-hidden h-36 flex flex-col justify-between p-4 shadow-sm hover:shadow-md transition-all border border-slate-800"
                      style={{ backgroundImage: "url('/assets/laptop.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35 group-hover:via-black/50 transition-colors" />
                      <div className="relative z-10">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200 border-b border-white/60 pb-0.5 inline-block">
                          Featured Insight
                        </span>
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-xs font-bold text-white leading-snug mb-1">
                          Engineering Digital Solutions That Drive Business Forward
                        </h4>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-300 uppercase tracking-wider group-hover:text-white transition-colors">
                          <span>READ ARTICLE</span>
                          <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>

                    <Link
                      to="/insights/ai-machine-learning"
                      onClick={closeDropdown}
                      className="group relative rounded-xl overflow-hidden h-36 flex flex-col justify-between p-4 shadow-sm hover:shadow-md transition-all border border-slate-800"
                      style={{ backgroundImage: "url('/assets/nav-ai.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-blue-950/60 to-black/40 group-hover:via-blue-950/50 transition-colors" />
                      <div className="relative z-10">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200 border-b border-white/60 pb-0.5 inline-block">
                          Applied Intelligence
                        </span>
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-xs font-bold text-white leading-snug mb-1">
                          Applied AI: Transforming Business Capabilities Through Intelligent Technology
                        </h4>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-300 uppercase tracking-wider group-hover:text-white transition-colors">
                          <span>READ ARTICLE</span>
                          <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MOBILE DRAWER — neat accordion ================= */}
      <Sheet open={mobileDrawerOpen} onOpenChange={setMobileDrawerOpen}>
        <SheetContent side="right" className="w-[min(100vw,360px)] bg-white p-0 flex flex-col overflow-hidden">
          <SheetHeader className="px-5 pt-5 pb-4 border-b border-slate-100 text-left shrink-0">
            <SheetTitle className="flex items-center">
              <img src="/assets/logo.png" alt="SkyWeb" className="h-10 w-auto object-contain rounded-md" />
            </SheetTitle>
          </SheetHeader>

          <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
            {/* About Us */}
            <div className="rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileSection("about")}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-3.5 rounded-xl text-left transition-colors",
                  mobileOpenSection === "about" ? "bg-[#004AAD]/8 text-[#004AAD]" : "text-slate-900 hover:bg-slate-50"
                )}
                aria-expanded={mobileOpenSection === "about"}
              >
                <span className="text-[15px] font-bold">About Us</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    mobileOpenSection === "about" && "rotate-180 text-[#004AAD]"
                  )}
                />
              </button>
              {mobileOpenSection === "about" && (
                <div className="px-2 pb-3 space-y-0.5">
                  <Link to="/about" onClick={() => setMobileDrawerOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-[#004AAD] hover:bg-blue-50">
                    About overview
                  </Link>
                  {[
                    { to: "/about/overview", label: "Corporate Overview" },
                    { to: "/about/leadership", label: "Leadership" },
                    { to: "/about/brand", label: "Our Brand" },
                    { to: "/about/customer-speak", label: "The Clients" },
                    { to: "/about/recognition", label: "Recognition & Awards" },
                  ].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileDrawerOpen(false)}
                      className="block px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-[#004AAD]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Capabilities */}
            <div className="rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileSection("capabilities")}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-3.5 rounded-xl text-left transition-colors",
                  mobileOpenSection === "capabilities" ? "bg-[#004AAD]/8 text-[#004AAD]" : "text-slate-900 hover:bg-slate-50"
                )}
                aria-expanded={mobileOpenSection === "capabilities"}
              >
                <span className="text-[15px] font-bold">Capabilities</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    mobileOpenSection === "capabilities" && "rotate-180 text-[#004AAD]"
                  )}
                />
              </button>
              {mobileOpenSection === "capabilities" && (
                <div className="px-2 pb-3 space-y-0.5">
                  <Link to="/capabilities" onClick={() => setMobileDrawerOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-[#004AAD] hover:bg-blue-50">
                    All capabilities
                  </Link>
                  {[
                    { to: "/capabilities/application-services", label: "Software Engineering" },
                    { to: "/capabilities/artificial-intelligence", label: "AI & Machine Learning" },
                    { to: "/capabilities/cloud-infrastructure", label: "Cloud & Infrastructure" },
                    { to: "/capabilities/products-platforms", label: "Digital Platforms" },
                    { to: "/capabilities/business-technology", label: "Business Technology" },
                    { to: "/capabilities/experience-services", label: "UI/UX Experience" },
                    { to: "/capabilities/nano-profiles", label: "Nano Profiles™", accent: true },
                    { to: "/capabilities/hashtalks", label: "HashTalks", soon: true },
                    { to: "/capabilities/artube", label: "ArTube", soon: true },
                    { to: "/capabilities/art-coin", label: "Art Coin", soon: true },
                  ].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileDrawerOpen(false)}
                      className={cn(
                        "flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-sm hover:bg-slate-50",
                        link.accent ? "text-[#004AAD] font-semibold" : "text-slate-600 hover:text-[#004AAD]"
                      )}
                    >
                      <span>{link.label}</span>
                      {link.soon && (
                        <span className="text-[9px] font-bold uppercase tracking-wide text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                          Soon
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries */}
            <div className="rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileSection("industries")}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-3.5 rounded-xl text-left transition-colors",
                  mobileOpenSection === "industries" ? "bg-[#004AAD]/8 text-[#004AAD]" : "text-slate-900 hover:bg-slate-50"
                )}
                aria-expanded={mobileOpenSection === "industries"}
              >
                <span className="text-[15px] font-bold">Industries</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    mobileOpenSection === "industries" && "rotate-180 text-[#004AAD]"
                  )}
                />
              </button>
              {mobileOpenSection === "industries" && (
                <div className="px-2 pb-3 space-y-0.5">
                  <Link to="/industries" onClick={() => setMobileDrawerOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-[#004AAD] hover:bg-blue-50">
                    All industries
                  </Link>
                  {[
                    { to: "/industries/banking-financial", label: "Banking & Finance" },
                    { to: "/industries/communications", label: "Communications" },
                    { to: "/industries/manufacturing", label: "Manufacturing" },
                    { to: "/industries/retail-consumer", label: "Retail & Goods" },
                  ].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileDrawerOpen(false)}
                      className="block px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-[#004AAD]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Insights */}
            <div className="rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileSection("insights")}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-3.5 rounded-xl text-left transition-colors",
                  mobileOpenSection === "insights" ? "bg-[#004AAD]/8 text-[#004AAD]" : "text-slate-900 hover:bg-slate-50"
                )}
                aria-expanded={mobileOpenSection === "insights"}
              >
                <span className="text-[15px] font-bold">Insights</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    mobileOpenSection === "insights" && "rotate-180 text-[#004AAD]"
                  )}
                />
              </button>
              {mobileOpenSection === "insights" && (
                <div className="px-2 pb-3 space-y-0.5">
                  <Link to="/insights" onClick={() => setMobileDrawerOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-[#004AAD] hover:bg-blue-50">
                    All insights
                  </Link>
                  {[
                    { to: "/insights/designathon-2026-hyderabad-uiux-hackathon-workshop", label: "Designathon 2026", accent: true },
                    { to: "/insights/codestars-2k26-national-hackathon-hyderabad", label: "Code Stars 2K26", accent: true },
                    { to: "/insights/audisankara-university-codesprint-2026-hackathon", label: "Audisankara Codesprint", accent: true },
                    { to: "/insights/software-engineering", label: "Software Engineering" },
                    { to: "/insights/ai-machine-learning", label: "AI & Machine Learning" },
                    { to: "/insights/cloud-infrastructure", label: "Cloud & Infrastructure" },
                    { to: "/insights/digital-platforms", label: "Digital Platforms" },
                    { to: "/insights/business-technology", label: "Business Technology" },
                    { to: "/insights/technology-consulting", label: "Tech Consulting" },
                  ].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileDrawerOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 rounded-lg text-sm hover:bg-slate-50",
                        link.accent ? "text-[#004AAD] font-semibold" : "text-slate-600 hover:text-[#004AAD]"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Careers — direct link */}
            <Link
              to="/careers"
              onClick={() => setMobileDrawerOpen(false)}
              className="flex items-center justify-between px-3 py-3.5 rounded-xl text-[15px] font-bold text-slate-900 hover:bg-slate-50"
            >
              <span>Careers</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>
          </nav>

          <div className="shrink-0 px-5 py-4 border-t border-slate-100 bg-white">
            <Link
              to="/contact"
              onClick={() => setMobileDrawerOpen(false)}
              className="w-full py-3.5 px-4 rounded-xl bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold shadow-md transition-all text-center block"
            >
              Contact Us
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default AnimatedNavFramer;
