"use client";

import { Section } from "./Section";
import BlurText from "../react-bits/BlurText";

const brandReviews = [
  {
    company: "Apex Capital",
    quote:
      "The most exclusive network for high-value asset acquisition. A staple for our executive retreat planning.",
    leader: "James Sterling",
    role: "Chief Investment Officer",
  },
  {
    company: "Vanguard Tech",
    quote:
      "Elite Wanderer's concierge service has become an indispensable perk for our C-suite retention program.",
    leader: "Elena K.",
    role: "VP of People",
  },
  {
    company: "Meridian Group",
    quote:
      "Unparalleled access. They opened doors in Dubai that we didn't even know existed.",
    leader: "Robert Chen",
    role: "Managing Director",
  },
  {
    company: "Horizon Luxury",
    quote:
      "A partner that understands the nuance of ultra-luxury. Flawless execution on every request.",
    leader: "Sophia D.",
    role: "CEO",
  },
];

export function BrandReviews() {
  return (
    <Section
      className="bg-neutral-100 dark:bg-neutral-900 py-24 md:py-32"
      fullWidth
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-neutral-500 dark:text-neutral-400">
              Trusted Partners
            </h2>
            <BlurText
              text="Endorsed by Industry Leaders"
              className="font-heading text-3xl md:text-4xl font-bold uppercase text-neutral-900 dark:text-white"
              delay={50}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-950 p-8 border border-neutral-200 dark:border-neutral-800 hover:border-app-theme-500 dark:hover:border-app-theme-500 transition-colors duration-300 flex flex-col justify-between h-full group"
            >
              <div className="mb-8">
                {/* Placeholder Logo */}
                <div className="h-8 mb-6 flex items-center">
                  <span className="font-heading font-black text-xl uppercase tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">
                    {review.company}
                  </span>
                </div>
                <p className="text-sm font-light leading-relaxed text-neutral-600 dark:text-neutral-400">
                  &quot;{review.quote}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 dark:border-neutral-900">
                <p className="font-bold text-sm text-neutral-900 dark:text-white uppercase">
                  {review.leader}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1 uppercase tracking-wider">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
