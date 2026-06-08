export interface Product {
  id: string;
  name: string;
  category: "Classic" | "Luxury Streetwear" | "Minimalist" | "Active";
  price: number;
  gender: "Unisex" | "Male" | "Female";
  description: string;
  primaryImage: string;
  images: string[];
  videoUrl?: string;
  sizes: number[];
  colors: string[];
  isTrending?: boolean;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "otg-001",
    name: "AERO GLIDE LUXE",
    category: "Luxury Streetwear",
    price: 185,
    gender: "Unisex",
    description:
      "Sculpted mid-top trainer engineered with premium tumbled leather panels, semi-translucent outsoles, and an internal neoprene sockliner for unmatched stride ergonomics.",
    primaryImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop", // High-end Red/Black aesthetic shoe
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop",
    ],
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-running-shoes-in-a-store-display-41617-large.mp4", // Free looping video asset placeholder
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["Obsidian Black", "Crimson Core", "Glass White"],
    isTrending: true,
  },
  {
    id: "otg-002",
    name: "VELOCITY VORTEX",
    category: "Active",
    price: 210,
    gender: "Male",
    description:
      "High-performance futuristic silhouette wrapping advanced knit matrix mesh in structured geometric structural cages.",
    primaryImage:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop", // Neon Volt aesthetic shoe
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop",
    ],
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-sneakers-on-a-running-track-43183-large.mp4",
    sizes: [41, 42, 43, 44],
    colors: ["Neon Volt", "Stealth Grey"],
    isTrending: true,
  },
];
