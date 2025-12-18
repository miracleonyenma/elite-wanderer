"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white text-black pt-24 pb-4 px-6 md:px-12 overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24 max-w-screen-2xl mx-auto">
        <div className="col-span-2 md:col-span-1 space-y-6">
          <h3 className="text-xl font-bold tracking-widest uppercase">
            Experience
          </h3>
          <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
            Redefining luxury travel and global relocation for the discerning
            few.
          </p>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-xs">
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Private Jets
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Real Estate
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Marketplace
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-xs">
            Company
          </h4>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Membership
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-xs">
            Legal
          </h4>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Massive Brand Name */}
      <div className="border-t border-neutral-100 pt-8 w-full">
        <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-center uppercase select-none">
          Elite Wanderer
        </h1>
      </div>

      <div className="mt-8 flex justify-between text-[10px] uppercase tracking-widest text-neutral-400">
        <span>&copy; {new Date().getFullYear()} Elite Wanderer</span>
        <span>Designed for the Extraordinary</span>
      </div>
    </footer>
  );
}
