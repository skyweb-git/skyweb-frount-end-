"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground className="rounded-3xl overflow-hidden my-12 border border-slate-200/80 shadow-2xl max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-slate-900 text-center tracking-tight">
          Next-Gen Aurora Infrastructure
        </div>
        <div className="font-light text-base md:text-2xl text-slate-600 py-4 text-center max-w-2xl">
          High-velocity distributed systems engineered for global performance, resilience, and scale.
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-full w-fit text-white font-semibold px-6 py-3 shadow-lg shadow-blue-500/25">
          Deploy With Skyweb
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
