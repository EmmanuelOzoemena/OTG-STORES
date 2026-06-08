"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock cart items count for visual engagement in the demo
  const cartCount = 2;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[--ease-luxury] ${
          isScrolled
            ? "py-4 bg-brand-bg/40 backdrop-blur-xl border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand Accent */}
          <Link
            href="/"
            className="text-xl font-black tracking-widest text-brand-accent group"
          >
            OTG
            <span className="text-brand-muted group-hover:text-brand-accent transition-colors duration-300">
              .STORES
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-brand-muted">
            <Link
              href="/"
              className="hover:text-brand-accent transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#collections"
              className="hover:text-brand-accent transition-colors duration-300"
            >
              Collections
            </Link>
            <Link
              href="#curated"
              className="hover:text-brand-accent transition-colors duration-300"
            >
              Curated Feed
            </Link>
          </div>

          {/* Action Items */}
          <div className="flex items-center gap-4">
            {/* Cart Trigger Button */}
            <button className="relative p-2.5 rounded-full glass-interactive border border-white/5 flex items-center justify-center text-brand-accent">
              <ShoppingBag size={18} strokeWidth={2} />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-brand-accent text-brand-bg text-[10px] font-bold rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full md:hidden glass text-brand-accent"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Glass Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 pt-28 px-6 bg-brand-bg/95 backdrop-blur-2xl md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 w-full">
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                href="/"
                className="text-2xl font-semibold flex items-center justify-between border-b border-white/5 py-3"
              >
                Home <ArrowRight size={18} className="text-brand-muted" />
              </Link>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                href="#collections"
                className="text-2xl font-semibold flex items-center justify-between border-b border-white/5 py-3"
              >
                Collections{" "}
                <ArrowRight size={18} className="text-brand-muted" />
              </Link>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                href="#curated"
                className="text-2xl font-semibold flex items-center justify-between border-b border-white/5 py-3"
              >
                Curated Feed{" "}
                <ArrowRight size={18} className="text-brand-muted" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
