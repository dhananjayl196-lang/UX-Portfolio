"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

const variants: Variants = {
  hidden: (dir: string) => ({
    opacity: 0,
    y: dir === "up" ? 28 : 0,
    x: dir === "left" ? -24 : dir === "right" ? 24 : 0,
  }),
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AnimateIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: Props) {
  return (
    <motion.div
      className={className}
      custom={direction}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -48px 0px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
