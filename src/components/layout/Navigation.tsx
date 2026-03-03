"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { navItems } from "@/lib/constants";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const backdropBlur = useTransform(scrollY, [0, 200], [0, 12]);

  return (
    <>
      {/* Desktop nav */}
      <motion.nav
        style={{
          opacity: navOpacity,
          backdropFilter: useTransform(
            backdropBlur,
            (v) => `blur(${v}px)`
          ),
        }}
        className="fixed top-0 right-0 left-0 z-50 hidden border-b border-border/50 bg-background/80 md:block"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-sm font-medium">
            JSW
          </a>
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile hamburger */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm"
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle navigation"
        >
          <div className="flex flex-col gap-1">
            <motion.span
              animate={
                isOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }
              }
              className="block h-px w-4 bg-foreground"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-4 bg-foreground"
            />
            <motion.span
              animate={
                isOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }
              }
              className="block h-px w-4 bg-foreground"
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-background/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-display text-2xl font-medium text-foreground"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
