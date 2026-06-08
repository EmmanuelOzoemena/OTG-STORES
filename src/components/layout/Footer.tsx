export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-brand-bg py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="text-center sm:text-left">
          <span className="text-base font-black tracking-widest text-white">
            OTG<span className="text-brand-muted">.STORES</span>
          </span>
          <p className="text-[11px] text-brand-muted tracking-tight mt-1">
            Curated High-End Footwear Framework Concept.
          </p>
        </div>

        {/* Minimal metadata context logs */}
        <div className="flex items-center gap-6 text-xs text-brand-muted font-medium">
          <span className="hover:text-white transition-colors cursor-pointer">
            Privacy Matrix
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Terms & Conditions
          </span>
          <span className="text-white/20">•</span>
          <p>&copy; 2026 OTG-STORES. Platform engineered beautifully.</p>
        </div>
      </div>
    </footer>
  );
}
