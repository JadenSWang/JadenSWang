"use client";

import { motion } from "motion/react";
import ParticleBackground from "@/components/ui/ParticleBackground";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { siteConfig } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-4 text-sm tracking-widest uppercase text-muted"
        >
          {siteConfig.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-4xl font-bold tracking-tight text-foreground/60 md:text-6xl lg:text-7xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mt-6 h-px w-24 bg-foreground/20"
        />
      </div>

      <ScrollIndicator />
    </section>
  );
}
