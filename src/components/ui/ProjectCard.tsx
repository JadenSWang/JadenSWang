"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { Project } from "@/types";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const card = cardRef.current;
      if (!card) return;

      // Disable tilt on touch devices
      if (!window.matchMedia("(hover: hover)").matches) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      setRotateX(((y - centerY) / centerY) * -8);
      setRotateY(((x - centerX) / centerX) * 8);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
    setIsHovering(false);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className="rounded-xl border border-border bg-card-bg p-8 md:p-10 transition-shadow duration-300 cursor-pointer"
    >
      <motion.div
        animate={{ scale: isHovering ? 1.01 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <span className="text-xs tracking-widest uppercase text-muted">
            {project.tags.join(" / ")}
          </span>
          <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-border/50 px-2.5 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
}
