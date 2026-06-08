import Hero from "@/components/layout/Hero";
import SocialFeedGrid from "@/features/products/components/SocialFeedGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-accent">
      {/* Cinematic Hero Pitch Section */}
      <Hero />

      {/* High-Fidelity Interactive Social Lookbook Store */}
      <SocialFeedGrid />

      <div className="h-32 bg-gradient-to-t from-black to-transparent" />
    </main>
  );
}
