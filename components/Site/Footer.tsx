"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-24 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-neutral-900 pt-12">
        <div className="space-y-6">
          <h3 className="text-white text-xl font-bold tracking-widest uppercase">
            Elite Wanderer
          </h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Redefining luxury travel and global relocation for the discerning
            few. Experience the world without compromise.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium uppercase tracking-widest mb-6 text-sm">
            Explore
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Private Jets
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Real Estate
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Marketplace
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium uppercase tracking-widest mb-6 text-sm">
            Company
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Membership
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium uppercase tracking-widest mb-6 text-sm">
            Legal
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase">
        <p>
          &copy; {new Date().getFullYear()} Elite Wanderer. All rights reserved.
        </p>
        <p>Designed for the Extraordinary</p>
      </div>
    </footer>
  );
}
