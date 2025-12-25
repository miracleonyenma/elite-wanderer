// ./components/Site/Header.tsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/aevr/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Global Mobility", href: "#global-mobility" },
  { name: "TEW Platinum", href: "#platinum" },
  { name: "Marketplace", href: "#marketplace" },
  { name: "Destinations", href: "#destinations" },
  { name: "Investment Showcase", href: "#investments" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl py-4 text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800"
          : "mix-blend-difference text-white"
      )}
    >
      <Link
        href="/"
        className="font-heading text-base 2xl:text-xl font-bold tracking-widest uppercase"
      >
        The Elite Wanderer
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity"
          >
            {item.name}
          </Link>
        ))}
        <Button
          variant="outline"
          className={cn(
            "uppercase tracking-widest text-xs px-6 rounded-none dark:border-white dark:hover:bg-white dark:hover:text-black",
            isScrolled
              ? "text-black dark:text-white border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
              : "text-white border-white hover:bg-white hover:text-black"
          )}
        >
          Join
        </Button>
      </nav>
    </header>
  );
}
