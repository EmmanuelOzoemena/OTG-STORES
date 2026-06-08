"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { MOCK_PRODUCTS, Product } from "../mockData";
import { useCart } from "@/hooks/useCart";

const CATEGORIES = ["All", "Luxury Streetwear", "Active", "Minimalist"];

export default function CollectionsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { addItem } = useCart();

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    if (activeFilter === "All") return true;
    return product.category === activeFilter;
  });

  return (
    <section
      id="collections"
      className="py-20 max-w-7xl mx-auto px-6 border-t border-white/5"
    >
      {/* Structural Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">
            The Catalog
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mt-1">
            Curated{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
              Collections
            </span>
          </h2>
        </div>

        {/* Filter Pill Pills wrapper */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                activeFilter === category
                  ? "bg-white text-brand-bg font-black"
                  : "bg-white/5 text-brand-muted hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Container */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              key={product.id}
              className="group relative flex flex-col justify-between rounded-2xl p-4 bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors duration-500"
            >
              {/* Product Card Image Frame */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-brand-surface/40 border border-white/5 mb-4">
                <img
                  src={product.primaryImage}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[--ease-luxury]"
                />

                {/* Instant Top Right Add Action shortcut button for standard grid */}
                <button
                  onClick={() => addItem(product, product.sizes[0])} // Quick-adds their lowest size placeholder
                  className="absolute bottom-3 right-3 p-3 bg-brand-bg text-white hover:bg-white hover:text-brand-bg rounded-xl border border-white/10 transition-all shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 duration-300"
                >
                  <ShoppingBag size={14} />
                </button>
              </div>

              {/* Product Info parameters */}
              <div className="flex flex-col gap-1.5 px-1">
                <div className="flex items-center justify-between text-xs font-bold tracking-wider text-brand-muted uppercase">
                  <span>{product.category}</span>
                  <span className="text-white">${product.price}.00</span>
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight truncate">
                  {product.name}
                </h3>
                <p className="text-xs text-brand-muted line-clamp-2 font-normal leading-relaxed mt-1">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
