import * as React from "react";
import { cn } from "@/lib/utils"; // Your utility for merging class names
import { ArrowRight } from "lucide-react";

// Define the props for the DestinationCard component
export interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  flag?: string | React.ReactNode;
  stats: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  themeColor?: string;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  ({ className, imageUrl, location, flag, stats, href = "#", onClick, themeColor, ...props }, ref) => {
    return (
      // The 'group' class enables hover effects on child elements
      <div
        ref={ref}
        className={cn("group w-full h-full", className)}
        {...props}
      >
        <a
          href={href}
          onClick={onClick}
          className="relative block w-full h-full rounded-2xl overflow-hidden shadow-md 
                     transition-all duration-500 ease-in-out 
                     group-hover:scale-103 group-hover:shadow-2xl border border-slate-200/60"
          aria-label={`Explore details for ${location}`}
        >
          {/* Background Image with Parallax Zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center 
                       transition-transform duration-700 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          {/* Clean Natural Dark Gradient for Text Legibility - NO colored tint/shade */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 via-50% to-transparent group-hover:from-slate-950/95 transition-all duration-500"
          />
          
          {/* Content */}
          <div className="relative flex flex-col justify-end h-full p-6 text-white z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-['DM_Sans']">
              {location}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1.5 font-medium leading-snug">{stats}</p>

            {/* Work With Us Button */}
            <div className="mt-6 flex items-center justify-between bg-white/15 hover:bg-[#004AAD] backdrop-blur-md border border-white/25 
                           rounded-xl px-4 py-2.5 
                           transition-all duration-300 
                           group-hover:bg-[#004AAD] group-hover:border-[#004AAD] shadow-sm">
              <span className="text-xs sm:text-sm font-bold tracking-wide text-white">Work With Us</span>
              <ArrowRight className="h-4 w-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </a>
      </div>
    );
  }
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
export default DestinationCard;
