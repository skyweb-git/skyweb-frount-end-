"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

// Clean SVG social icons matching the design specification
export const Github = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Twitter = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
  </svg>
);

export const Youtube = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const Linkedin = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// Universal Image component that runs without Next.js domain whitelist errors
export const Image = ({
  src,
  alt,
  width,
  height,
  className,
  draggable = false,
  priority = false,
  ...props
}: {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  draggable?: boolean;
  priority?: boolean;
  [key: string]: any;
}) => (
  <img
    src={src}
    alt={alt || ""}
    width={width}
    height={height}
    className={className}
    draggable={draggable}
    loading={priority ? "eager" : "lazy"}
    {...props}
  />
);

// Universal Link component for seamless web navigation
export const Link = ({
  href,
  children,
  className,
  target,
  rel,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  [key: string]: any;
}) => (
  <a href={href} className={className} target={target} rel={rel} {...props}>
    {children}
  </a>
);

export interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
}

export interface ClientTestimonialItem {
  company?: string;
  logo?: string;
  clientName?: string;
  name?: string;
  role?: string;
  title?: string;
  imageUrl?: string;
  metric?: string;
  rating?: number;
  quote?: string;
  description?: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Michael Chen",
    title: "Senior Software Engineer, Cloud Infrastructure",
    description:
      "Working with this team completely changed our infrastructure game. The support and expertise were incredible. They delivered beyond our expectations and helped us scale to millions of users.",
    imageUrl:
      "https://cdn.21st.dev/assets/mirror/f1/f1bf5c5716232cdbf63ebb8a9a82982cfec27f321b2ad8de52aa91156f70c3b7.jpg",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Jessica Roberts",
    title: "Lead Data Scientist, InsightX",
    description:
      "The data analytics platform they built gave our team the confidence and tools needed for true data-driven decisions. Their dashboarding capabilities went above and beyond our expectations.",
    imageUrl:
      "https://cdn.21st.dev/assets/mirror/59/59e866a812d7cee1c9bc3380f1aedd63239a9f84458ecf8e1b0d12676cf09bad.jpg",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "William Carter",
    title: "VP Product, NovaLabs",
    description:
      "NovaLabs helped our products find the perfect market fit. Their engineering team exceeded every delivery milestone and provided exceptional technical leadership.",
    imageUrl:
      "https://cdn.21st.dev/assets/mirror/7e/7ed8d0dc48aef7713e449fcd1159048d87f8eb7501aa8ad54a131be9a9f13659.jpg",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
];

/**
 * ClientTestimonialCard
 * High-craft testimonial card matching the reference profile card aesthetic:
 * rounded portrait avatar on left (45-50% width), overlapping elevated card with DM Sans typography,
 * ratings, metrics, and circular dark social action buttons.
 */
export function ClientTestimonialCard({
  testimonial,
  className,
}: {
  testimonial: ClientTestimonialItem;
  className?: string;
}) {
  const quote = testimonial.quote || testimonial.description || "";
  const company = testimonial.company || "";
  const imageUrl =
    testimonial.imageUrl ||
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80";

  return (
    <div
      className={cn(
        "relative flex flex-col sm:flex-row items-center sm:items-stretch group transition-all duration-300",
        className
      )}
    >
      {/* Avatar Container: Wider and taller to showcase the full image */}
      <div className="w-full sm:w-[50%] lg:w-[52%] xl:w-[52%] min-h-[300px] sm:min-h-[380px] lg:min-h-[410px] rounded-[28px] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:bg-neutral-800 shrink-0 shadow-md border border-slate-200/80 relative z-0 flex items-end justify-center p-2 sm:p-3">
        <Image
          src={imageUrl}
          alt={company || "Client"}
          className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: 'center bottom' }}
          draggable={false}
        />
        {/* Company Logo Badge: only show if image does NOT already embed the logo */}
        {testimonial.logo && !imageUrl.includes("/assets/testimonials/") && (
          <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-xl shadow-xs border border-slate-200/90 flex items-center justify-center h-8 z-10">
            <Image
              src={testimonial.logo}
              alt={company || "Partner Logo"}
              className="max-h-5 max-w-[85px] object-contain"
            />
          </div>
        )}
      </div>

      {/* Floating Card Container — quote only */}
      <div className="bg-white dark:bg-[#18181b] rounded-[26px] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.14)] p-6 sm:p-7 sm:-ml-4 md:-ml-5 mt-[-16px] sm:mt-0 z-10 flex-1 border border-slate-100 dark:border-neutral-800 flex flex-col justify-center transition-all duration-300">
        {company && (
          <p className="text-xs font-semibold tracking-wide text-slate-500 mb-3">
            {company}
          </p>
        )}
        <p className="text-slate-700 dark:text-gray-200 text-sm sm:text-[15px] leading-relaxed font-normal">
          “{quote}”
        </p>
      </div>
    </div>
  );
}

/**
 * ClientReviewsGrid
 * Displays confirmed enterprise testimonials 2 in a line in a responsive grid.
 */
export function ClientReviewsGrid({
  testimonials = [],
  className,
}: {
  testimonials: ClientTestimonialItem[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10", className)}>
      {testimonials.map((t, idx) => (
        <ClientTestimonialCard key={idx} testimonial={t} />
      ))}
    </div>
  );
}

export interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % defaultTestimonials.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + defaultTestimonials.length) % defaultTestimonials.length
    );

  const currentTestimonial = defaultTestimonials[currentIndex];

  const socialIcons = [
    { icon: Github, url: currentTestimonial.githubUrl, label: "GitHub" },
    { icon: Twitter, url: currentTestimonial.twitterUrl, label: "Twitter" },
    { icon: Youtube, url: currentTestimonial.youtubeUrl, label: "YouTube" },
    { icon: Linkedin, url: currentTestimonial.linkedinUrl, label: "LinkedIn" },
  ];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className="hidden md:flex relative items-center justify-center">
        {/* Avatar */}
        <div className="w-[440px] h-[440px] lg:w-[470px] lg:h-[470px] rounded-[32px] overflow-hidden bg-gray-200 dark:bg-neutral-800 flex-shrink-0 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={470}
                height={470}
                className="w-full h-full object-cover"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-card rounded-[28px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.14)] p-8 lg:p-10 ml-[-75px] z-10 max-w-lg lg:max-w-xl flex-1 border border-slate-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] dark:text-white mb-1.5 font-['DM_Sans'] tracking-tight">
                  {currentTestimonial.name}
                </h2>

                <p className="text-sm font-semibold text-slate-500 dark:text-gray-400">
                  {currentTestimonial.title}
                </p>
              </div>

              <p className="text-slate-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed mb-7">
                {currentTestimonial.description}
              </p>

              <div className="flex space-x-3.5">
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  <Link
                    key={label}
                    href={url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-[#111827] dark:bg-gray-100 rounded-full flex items-center justify-center transition-all hover:bg-[#004AAD] hover:scale-105 cursor-pointer shadow-sm text-white dark:text-gray-900"
                    aria-label={label}
                  >
                    <IconComponent className="w-5 h-5 text-white dark:text-gray-900" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden max-w-sm mx-auto text-center bg-transparent">
        {/* Avatar */}
        <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-[28px] overflow-hidden mb-6 shadow-md border border-slate-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className="px-6 py-7 bg-white dark:bg-card rounded-[24px] shadow-lg border border-slate-100 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1 font-['DM_Sans']">
                {currentTestimonial.name}
              </h2>

              <p className="text-xs font-semibold text-slate-500 dark:text-gray-400 mb-4">
                {currentTestimonial.title}
              </p>

              <p className="text-slate-700 dark:text-gray-200 text-sm leading-relaxed mb-6">
                {currentTestimonial.description}
              </p>

              <div className="flex space-x-3">
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  <Link
                    key={label}
                    href={url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#111827] dark:bg-gray-100 rounded-full flex items-center justify-center transition-all hover:bg-[#004AAD] cursor-pointer shadow-sm text-white dark:text-gray-900"
                    aria-label={label}
                  >
                    <IconComponent className="w-4 h-4 text-white dark:text-gray-900" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={handlePrevious}
          aria-label="Previous testimonial"
          className="w-11 h-11 rounded-full bg-white dark:bg-card border border-slate-200 dark:border-card/40 shadow-sm flex items-center justify-center hover:bg-slate-50 hover:border-[#004AAD] transition-all cursor-pointer text-slate-700 hover:text-[#004AAD]"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {defaultTestimonials.map((_, testimonialIndex) => (
            <button
              key={testimonialIndex}
              onClick={() => setCurrentIndex(testimonialIndex)}
              className={cn(
                "h-2.5 rounded-full transition-all cursor-pointer",
                testimonialIndex === currentIndex
                  ? "bg-[#111827] dark:bg-white w-7"
                  : "bg-slate-300 dark:bg-slate-600 w-2.5 hover:bg-slate-400"
              )}
              aria-label={`Go to testimonial ${testimonialIndex + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="w-11 h-11 rounded-full bg-white dark:bg-card border border-slate-200 dark:border-card/40 shadow-md flex items-center justify-center hover:bg-slate-50 hover:border-[#004AAD] transition-all cursor-pointer text-slate-700 hover:text-[#004AAD]"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
