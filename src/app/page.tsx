import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-accent">
      {/* Cinematic Hero Pitch Section */}
      <Hero />

      {/* Future Section Enclosures: Product Grids, Curated Feeds, Drawer Triggers go here */}
      <div className="h-32 bg-gradient-to-t from-black to-transparent" />
    </main>
  );
}
