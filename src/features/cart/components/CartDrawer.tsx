"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ArrowRight, MessageSquareCode } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { generateWhatsAppLink } from "../utils/whatsappFormatter";

export default function CartDrawer() {
  const { isOpen, items, closeCart, removeItem } = useCart();

  const totalValue = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-brand-bg/60 backdrop-blur-md"
          />

          {/* Right Floating Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 bottom-0 w-full sm:w-[450px] bg-zinc-950/95 border-l border-white/5 shadow-2xl p-6 flex flex-col justify-between"
          >
            {/* Header Module */}
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black uppercase tracking-tight text-white">
                    Your Selection Bag
                  </h3>
                  <span className="text-xs bg-white/10 text-brand-muted px-2.5 py-0.5 rounded-full font-bold">
                    {items.length}
                  </span>
                </div>
                <button
                  onClick={closeCart}
                  className="p-2 rounded-full glass border border-white/10 text-white hover:scale-105 transition-transform"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Dynamic Items Container */}
              <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-1">
                {items.length === 0 ? (
                  <div className="py-20 text-center flex flex-col items-center justify-center gap-3">
                    <p className="text-sm text-brand-muted">
                      Your shopping bag is completely empty.
                    </p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedSize}`}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 group"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-brand-surface border border-white/5 shrink-0">
                        <img
                          src={item.product.primaryImage}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-black text-white uppercase tracking-tight truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-brand-muted font-semibold mt-0.5">
                          Size: EU {item.selectedSize} | Qty: {item.quantity}
                        </p>
                        <p className="text-sm font-bold text-white mt-1">
                          ${item.product.price * item.quantity}.00
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          removeItem(item.product.id, item.selectedSize)
                        }
                        className="p-2 text-brand-muted hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Total Footer checkout interface */}
            <div className="border-t border-white/5 pt-6 bg-transparent">
              <div className="flex items-center justify-between text-base mb-6">
                <span className="text-sm font-bold text-brand-muted uppercase tracking-wider">
                  Subtotal Value
                </span>
                <span className="text-xl font-black text-white">
                  ${totalValue}.00
                </span>
              </div>

              <a
                href={items.length > 0 ? generateWhatsAppLink(items) : "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => items.length > 0 && setTimeout(closeCart, 500)}
                className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-300 ${
                  items.length > 0
                    ? "bg-brand-accent text-brand-bg hover:bg-white/90 transform active:scale-[0.98]"
                    : "bg-white/5 text-brand-muted cursor-not-allowed pointer-events-none"
                }`}
              >
                <MessageSquareCode size={14} /> Send Bag To WhatsApp{" "}
                <ArrowRight size={14} />
              </a>
              <p className="text-[10px] text-center text-brand-muted font-normal mt-3 px-4">
                This compiles your chosen metrics and links directly into his
                current sales channel seamlessly.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
