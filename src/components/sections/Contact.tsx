"use client";

import { motion } from "motion/react";
import { socialLinks } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-4 text-sm tracking-widest uppercase text-muted"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-10 flex flex-wrap gap-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.platform}
              variants={itemVariants}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="rounded-full border border-border px-5 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-foreground/5"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32 border-t border-border pt-6 text-xs text-muted"
        >
          &copy; {new Date().getFullYear()} Jaden S. Wang
        </motion.div>
      </div>
    </section>
  );
}
