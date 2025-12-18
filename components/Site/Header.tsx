// ./components/Site/Header.tsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/aevr/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Destinations", href: "#destinations" },
  { name: "Membership", href: "#membership" },
  { name: "Services", href: "#services" },
  { name: "Marketplace", href: "#marketplace" },
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
          ? "bg-neutral-900/80 backdrop-blur-xl py-4 text-white"
          : "mix-blend-difference text-white"
      )}
    >
      <Link
        href="/"
        className="font-heading text-lg lg:text-2xl font-bold tracking-widest uppercase"
      >
        Elite Wanderer
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
      </nav>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className={cn(
            "text-white hover:text-white/70 uppercase tracking-widest text-xs hidden md:inline-flex",
            isScrolled && "hover:text-neutral-300"
          )}
        >
          Sign In
        </Button>
        <Button
          variant="outline"
          className={cn(
            "uppercase tracking-widest text-xs px-6 rounded-none",
            isScrolled
              ? "text-white border-white hover:bg-white hover:text-black"
              : "text-white border-white hover:bg-white hover:text-black"
          )}
        >
          Join
        </Button>
      </div>
    </header>
  );
}
