"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Volume2 } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";
import { MOCK_PRODUCTS } from "@/features/products/mockData";

export default function Hero() {
  const featuredProduct = MOCK_PRODUCTS[0];

  // Framer Motion Animation Variants for staggering elements on load
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg pt-20">
      {/* 1. Cinematic Background Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-40 mix-blend-lighten pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter saturate-50 blur-[2px]"
          src={featuredProduct.videoUrl}
        />
        {/* Ambient Dark Gradient Layering for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-transparent to-brand-bg/30" />
      </div>

      {/* 2. Primary Layout Framework Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center py-12">
        {/* Left Side: Bold Editorial Copy */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-brand-muted"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            New Collection Live
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.9] text-brand-accent uppercase"
          >
            Aesthetic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/20">
              In Every Step.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-md text-base sm:text-lg text-brand-muted font-normal leading-relaxed"
          >
            Experience footwear curation crafted beyond standard limits. Premium
            visuals meet flawless engineering. Built specifically for the modern
            collective.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-bg text-sm font-bold tracking-wide rounded-full flex items-center justify-center gap-2 hover:bg-white/90 transition-all duration-300 transform active:scale-95 group">
              Explore Store
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
            <button className="w-full sm:w-auto px-6 py-4 rounded-full glass-interactive border border-white/5 text-sm font-medium flex items-center justify-center gap-2">
              <Play size={14} fill="currentColor" /> Watch Campaign
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Floating Interactive High-End Glass Product Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full"
        >
          <GlassCard className="w-full max-w-[400px] bg-white/[0.02] border-white/10 relative p-4 group overflow-hidden">
            {/* Visual background flare */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors duration-500" />

            {/* High fidelity image wrapper */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-brand-surface/50 mb-4 border border-white/5">
              <img
                src={featuredProduct.primaryImage}
                alt={featuredProduct.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[--ease-luxury]"
              />
              <div className="absolute top-3 right-3 p-2 rounded-full glass border-white/10 text-white">
                <Volume2 size={14} />
              </div>
            </div>

            {/* Product Meta details */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">
                  {featuredProduct.category}
                </span>
                <span className="text-sm font-black text-brand-accent">
                  ${featuredProduct.price}.00
                </span>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-brand-accent">
                {featuredProduct.name}
              </h3>
              <p className="text-xs text-brand-muted line-clamp-2">
                {featuredProduct.description}
              </p>

              <div className="h-[1px] bg-white/10 my-2" />

              <button className="w-full py-3 text-xs font-bold uppercase tracking-wider text-brand-bg bg-brand-accent rounded-lg group-hover:bg-brand-accent hover:brightness-90 transition-all duration-300">
                View Dropping Detail
              </button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
