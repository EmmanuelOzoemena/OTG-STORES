"use client";

import { create } from "zustand"; 
import { Product } from "@/features/products/mockData";

export interface CartItem {
  product: Product;
  selectedSize: number;
  quantity: number;
}

interface CartStore {
  isOpen: boolean;
  items: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, size: number) => void;
  removeItem: (productId: string, size: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>((set) => ({
  isOpen: false,
  items: [],
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  addItem: (product, size) =>
    set((state) => {
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size,
      );

      if (existingIndex > -1) {
        const newItems = [...state.items];
        newItems[existingIndex].quantity += 1;
        return { items: newItems, isOpen: true };
      }

      return {
        items: [...state.items, { product, selectedSize: size, quantity: 1 }],
        isOpen: true,
      };
    }),
  removeItem: (productId, size) =>
    set((state) => ({
      items: state.items.filter(
        (item) =>
          !(item.product.id === productId && item.selectedSize === size),
      ),
    })),
  clearCart: () => set({ items: [] }),
}));
