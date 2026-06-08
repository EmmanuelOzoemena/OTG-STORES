"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingCart, X, Check } from "lucide-react";
import { MOCK_SOCIAL_FEED, SocialFeedItem } from "../mockData";
import { useCart } from "@/hooks/useCart";

export default function SocialFeedGrid() {
  const [selectedItem, setSelectedItem] = useState<SocialFeedItem | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [isAdded, setIsAdded] = useState(false);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Hook up global store dispatch method
  const { addItem } = useCart();

  const handleMouseEnter = (id: string) => {
    const video = videoRefs.current[id];
    if (video) video.play().catch(() => {});
  };

  const handleMouseLeave = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedItem) return;

    setIsAdded(true);

    // Inject custom selected item straight into our checkout utility layer
    addItem(selectedItem.product, selectedSize);

    setTimeout(() => {
      setIsAdded(false);
      setSelectedItem(null);
      setSelectedSize(null);
    }, 1000);
  };

  return (
    <section id="curated" className="py-24 max-w-7xl mx-auto px-6">
      {/* Editorial Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">
            Social Curation
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mt-1">
            Tap To Shop{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10">
              The Feed
            </span>
          </h2>
        </div>
        <p className="max-w-xs text-sm text-brand-muted font-normal">
          Directly bridging his stunning aesthetic content into instant checkout
          capabilities.
        </p>
      </div>

      {/* Responsive Masonry-Style Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_SOCIAL_FEED.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[9/16] rounded-2xl overflow-hidden glass border border-white/5 cursor-pointer group"
          >
            {/* Hover Looping Video Node */}
            <video
              ref={(el) => {
                videoRefs.current[item.id] = el;
              }}
              src={item.videoUrl}
              loop
              muted
              playsInline
              poster={item.thumbnail}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[--ease-luxury] group-hover:scale-102"
            />

            {/* Overlay Shading Context */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-brand-bg/20 opacity-80 group-hover:opacity-95 transition-opacity" />

            {/* Content Details Inside Social Card */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3 z-10">
              <div className="flex items-center justify-between text-white">
                <span className="flex items-center gap-1.5 text-xs font-semibold glass px-2.5 py-1 rounded-full border-white/10">
                  <Heart
                    size={12}
                    fill="currentColor"
                    className="text-red-500"
                  />{" "}
                  {item.likes}
                </span>
                <span className="text-xs font-black tracking-wider bg-white text-brand-bg px-3 py-1 rounded-full uppercase">
                  Shop Now
                </span>
              </div>
              <div>
                <h3 className="text-lg font-black uppercase tracking-tight text-white leading-tight">
                  {item.product.name}
                </h3>
                <p className="text-xs text-brand-muted font-medium">
                  ${item.product.price}.00
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔮 High-End AnimatePresence Glassmorphic Quick-Buy Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-brand-bg/80 backdrop-blur-xl"
            />

            {/* Modal Box Layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl glass bg-zinc-950/70 border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 z-10 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full glass border border-white/10 text-white hover:scale-105 transition-transform"
              >
                <X size={16} />
              </button>

              {/* Left Side: Media Window */}
              <div className="md:col-span-6 relative aspect-square md:aspect-auto w-full h-full min-h-[300px] bg-brand-surface border-b md:border-b-0 md:border-r border-white/5">
                <img
                  src={selectedItem.product.primaryImage}
                  alt={selectedItem.product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side: Control Purchase Flow */}
              <div className="md:col-span-6 p-8 flex flex-col justify-between gap-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-brand-muted uppercase">
                    {selectedItem.product.category}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mt-1">
                    {selectedItem.product.name}
                  </h3>
                  <p className="text-xl font-bold text-brand-accent mt-1">
                    ${selectedItem.product.price}.00
                  </p>
                  <p className="text-xs text-brand-muted font-normal mt-3 leading-relaxed">
                    {selectedItem.product.description}
                  </p>
                </div>

                {/* Sizing Controller */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-muted block mb-3">
                    Select Size (EU)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 rounded-lg text-xs font-bold tracking-wide transition-all duration-300 border ${
                          selectedSize === size
                            ? "bg-white text-brand-bg border-white"
                            : "bg-white/5 border-white/5 text-brand-muted hover:border-white/20"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize || isAdded}
                  className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                    isAdded
                      ? "bg-green-500 text-white"
                      : selectedSize
                        ? "bg-white text-brand-bg hover:bg-white/90 active:scale-[0.98]"
                        : "bg-white/10 text-brand-muted cursor-not-allowed"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check size={14} /> Added to Order
                    </>
                  ) : selectedSize ? (
                    <>
                      <ShoppingCart size={14} /> Add to Cart Collection
                    </>
                  ) : (
                    "Choose Your Size"
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
