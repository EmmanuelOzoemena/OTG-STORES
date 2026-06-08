import Hero from "@/components/layout/Hero";
import SocialFeedGrid from "@/features/products/components/SocialFeedGrid";
import CollectionsGrid from "@/features/products/components/CollectionsGrid";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-accent overflow-x-hidden">
      <Hero />

      <SocialFeedGrid />

      <CollectionsGrid />

      <Footer />
    </main>
  );
}
