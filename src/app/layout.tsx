import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import CartDrawer from "@/features/cart/components/CartDrawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OTG-STORES | Premium Footwear Experience",
  description: "Curated modern aesthetics, premium footwear collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-brand-bg text-brand-accent antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          {/* Universal deployment-safe structural checkout sheet */}
          <CartDrawer />
        </SmoothScroll>
      </body>
    </html>
  );
}
