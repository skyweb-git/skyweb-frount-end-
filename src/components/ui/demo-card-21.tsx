import React from "react";
import { DestinationCard } from "@/components/ui/card-21";

const DestinationCardDemo = () => {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-8 bg-slate-950">
      <div className="w-full max-w-[320px] h-[450px]">
        <DestinationCard
          imageUrl="https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&w=800&q=80"
          location="South Africa"
          stats="Cape Town Hub • Enterprise FinTech & Cloud"
          href="#"
        />
      </div>
      <div className="w-full max-w-[320px] h-[450px]">
        <DestinationCard
          imageUrl="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
          location="Dubai"
          stats="Dubai DIFC • Fintech & High-Scale Systems"
          href="#"
        />
      </div>
    </div>
  );
};

export default DestinationCardDemo;
