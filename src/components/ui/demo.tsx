import React from "react";
import { NotchedProjectCard } from "./notched-project-card";
import { TestimonialCarousel, ClientReviewsGrid } from "./profile-card-testimonial-carousel";

/* Three cards, one per device (desktop, phone, tablet), with verified Unsplash stock images */

export default function Demo() {
  return (
    <div className="grid w-full max-w-6xl gap-x-5 gap-y-12 p-6 min-[700px]:grid-cols-3 lg:gap-x-8 lg:p-8">
      {/* desktop: the window runs off the bottom-right corner */}
      <NotchedProjectCard
        href="#"
        title="Ctrl+C, Ctrl+V, Ship"
        description="A landing page built in the time it took my coffee to cool. Searched 21st.dev, found a card, pasted it. Nobody needs to know."
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
        badge="2026"
        tags={["Copy-paste", "Speedrun"]}
        monochrome
        accent="#004AAD"
        surface="#ffffff"
      />
      {/* phone: rises out of the bottom edge, its foot cropped */}
      <NotchedProjectCard
        href="#"
        title="The Button I Didn't Design"
        description="Three weeks agonising over a border radius. Then I found one on 21st.dev that was already perfect. Therapy is expensive, components are free."
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
        badge="2025"
        tags={["Self-care", "Zero effort"]}
        monochrome
        accent="#004AAD"
        surface="#ffffff"
      />
      {/* tablet: stands in the bottom-right corner, running off both edges */}
      <NotchedProjectCard
        href="#"
        title="Dashboard, Eventually"
        description="Planned to build it from scratch this weekend. Installed it from 21st.dev in one command instead, then took a well-deserved nap."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
        badge="2024"
        tags={["Nap-driven", "With AI"]}
        monochrome
        accent="#004AAD"
        surface="#ffffff"
      />
    </div>
  );
}

export { Demo };

export function ClientReviewsGridDemo() {
  const sampleTestimonials = [
    {
      company: "ArtArtist",
      logo: "/assets/logos/logo-1.png",
      clientName: "Uday Kumar Sangisetti",
      role: "VP of Technology",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      metric: "250K+ Active Artists",
      rating: 5,
      quote: "SkyWeb architected a high-throughput digital gallery and creator marketplace that scaled past 250,000 active creators seamlessly."
    },
    {
      company: "Sanghi City",
      logo: "/assets/logos/logo-2.png",
      clientName: "Vikram Sanghi",
      role: "Director of Digital Infrastructure",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      metric: "100% Paperless Workflows",
      rating: 5,
      quote: "Their cloud infrastructure and automated workflows modernized our entire operational tracking and resident services platform."
    }
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <ClientReviewsGrid testimonials={sampleTestimonials} />
      </div>
    </div>
  );
}

export function TestimonialCarouselDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <TestimonialCarousel />
    </div>
  );
}

