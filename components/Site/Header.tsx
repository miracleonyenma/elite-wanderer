"use client";
import Link from "next/link";
import { Button } from "@/components/ui/aevr/button";

const navItems = [
  { name: "Destinations", href: "#destinations" },
  { name: "Membership", href: "#membership" },
  { name: "Services", href: "#services" },
  { name: "Marketplace", href: "#marketplace" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white">
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
          className="text-white hover:text-white/70 uppercase tracking-widest text-xs hidden md:inline-flex"
        >
          Sign In
        </Button>
        <Button
          variant="outline"
          className="text-white border-white hover:bg-white hover:text-black uppercase tracking-widest text-xs px-6 rounded-none"
        >
          Join
        </Button>
      </div>
    </header>
  );
}
