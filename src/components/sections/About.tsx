"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { siteConfig } from "@/lib/constants";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative px-6 py-32 md:py-40"
    >
      <motion.div style={{ y }} className="mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-4 text-sm tracking-widest uppercase text-muted"
        >
          About
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-xl leading-relaxed text-foreground/80 md:text-2xl md:leading-relaxed"
        >
          {siteConfig.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-10 grid grid-cols-2 gap-3"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/DSC_0021.JPEG"
              alt="Working between server racks"
              fill
              className="object-cover"
              sizes="(max-width: 672px) 50vw, 320px"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/lab-racks.webp"
              alt="Working in a server room"
              fill
              className="object-cover"
              sizes="(max-width: 672px) 50vw, 320px"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
