"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  interactive?: boolean;
  className?: string;
}

export default function GlassCard({
  children,
  interactive = true,
  className = "",
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={interactive ? { scale: 1.015, y: -4 } : undefined}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // Our custom luxury ease
      className={`
        rounded-2xl 
        ${interactive ? "glass-interactive" : "glass"} 
        p-6 
        backdrop-blur-md 
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
