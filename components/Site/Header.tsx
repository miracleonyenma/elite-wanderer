// ./components/Site/Header.tsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/aevr/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Global Mobility", href: "/global-mobility" },
  { name: "TEW Platinum", href: "/platinum-club" },
  { name: "Events", href: "/events" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Destinations", href: "/travel" },
  { name: "Investment Showcase", href: "/investments" },
  { name: "Residency", href: "/residency" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-300 md:px-12",
        isOpen
          ? "bg-transparent text-white"
          : isScrolled
            ? "border-b border-neutral-200 bg-white/80 py-4 text-black backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-white"
            : "text-white mix-blend-difference",
      )}
    >
      <Link
        href="/"
        className="relative z-50 font-heading text-base font-bold tracking-widest uppercase 2xl:text-xl"
      >
        The Elite Wanderer
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-70"
          >
            {item.name}
          </Link>
        ))}
        <Button
          variant="outline"
          className={cn(
            "rounded-none px-6 text-xs tracking-widest uppercase dark:border-white dark:hover:bg-white dark:hover:text-black",
            isScrolled
              ? "border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              : "border-white text-white hover:bg-white hover:text-black",
          )}
        >
          Join
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="group relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className={cn(
            "block h-0.5 w-6 bg-current transition-colors",
            isOpen ? "text-white" : "text-current",
          )}
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block h-0.5 w-6 bg-current transition-colors"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className={cn(
            "block h-0.5 w-6 bg-current transition-colors",
            isOpen ? "text-white" : "text-current",
          )}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-end justify-center bg-neutral-950/95 px-6 text-white backdrop-blur-md md:px-12"
          >
            <nav className="flex flex-col items-end gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="text-right"
                >
                  <Link
                    href={item.href}
                    className="w-full text-right font-heading text-3xl font-bold tracking-widest uppercase hover:text-neutral-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + navItems.length * 0.1 }}
              >
                <Button
                  variant="outline"
                  className="mt-8 rounded-none border-white px-8 py-6 text-sm tracking-widest uppercase hover:bg-white hover:text-black"
                >
                  Join The Club
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
