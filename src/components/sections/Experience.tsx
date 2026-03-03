"use client";

import { motion } from "motion/react";
import { experience } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 text-sm tracking-widest uppercase text-muted"
        >
          Experience
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-10"
        >
          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="border-l-2 border-border pl-6 md:pl-8"
            >
              <p className="text-xs tracking-widest uppercase text-muted">
                {exp.period}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                {exp.company}
              </h3>
              <p className="mt-1 text-sm font-medium text-foreground/70">
                {exp.role}
              </p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
