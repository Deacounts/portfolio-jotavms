"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  as = "div",
}: AnimatedSectionProps) {
  const prefersReduced = useReducedMotion();

  const easeCurve: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

  const variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeCurve,
        delay,
      },
    },
  };

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionComponent>
  );
}
