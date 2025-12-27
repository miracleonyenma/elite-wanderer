// ./components/Site/Header.tsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/aevr/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Global Mobility", href: "/global-mobility" },
  { name: "TEW Platinum", href: "/platinum-club" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Destinations", href: "/travel" },
  { name: "Investment Showcase", href: "/investments" },
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
        "fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-300 md:px-12",
        isScrolled
          ? "border-b border-neutral-200 bg-white/80 py-4 text-black backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-white"
          : "text-white mix-blend-difference",
      )}
    >
      <Link
        href="/"
        className="font-heading text-base font-bold tracking-widest uppercase 2xl:text-xl"
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
    </header>
  );
}
