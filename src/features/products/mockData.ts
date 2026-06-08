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

export interface SocialFeedItem {
  id: string;
  videoUrl: string;
  thumbnail: string;
  likes: string;
  product: Product;
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
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop",
    ],
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-running-shoes-in-a-store-display-41617-large.mp4",
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["Obsidian Black", "Crimson Core"],
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
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop",
    ],
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-sneakers-on-a-running-track-43183-large.mp4",
    sizes: [41, 42, 43, 44],
    colors: ["Neon Volt", "Stealth Grey"],
    isTrending: true,
  },
  {
    id: "otg-003",
    name: "MONO MID INTEL",
    category: "Minimalist",
    price: 195,
    gender: "Female",
    description:
      "Stripped-back luxury capsule boot layout focusing entirely on premium leather textures and ultra-clean structural silhouettes.",
    primaryImage:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop", // Clean luxury purple/pink pastel shoe
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop",
    ],
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-holding-a-pair-of-white-sneakers-41614-large.mp4",
    sizes: [38, 39, 40, 41],
    colors: ["Ghost White", "Chalk Pink"],
    isTrending: false,
  },
];

export const MOCK_SOCIAL_FEED: SocialFeedItem[] = [
  {
    id: "feed-1",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-running-shoes-in-a-store-display-41617-large.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
    likes: "4.8K",
    product: MOCK_PRODUCTS[0],
  },
  {
    id: "feed-2",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-sneakers-on-a-running-track-43183-large.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop",
    likes: "12.3K",
    product: MOCK_PRODUCTS[1],
  },
  {
    id: "feed-3",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-holding-a-pair-of-white-sneakers-41614-large.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
    likes: "8.9K",
    product: MOCK_PRODUCTS[2],
  },
];
