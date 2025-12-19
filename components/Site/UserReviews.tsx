"use client";

import { Section } from "./Section";
import BlurText from "../react-bits/BlurText";
import { Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "The Elite Wanderer team orchestrated the unthinkable. Access to the Vatican after hours was a spiritual experience my family will never forget.",
    name: "Alexander V.",
    tier: "Platinum Member",
  },
  {
    quote:
      "For my portfolio, the off-market opportunities presented here have outperformed my traditional avenues. A truly curated investment landscape.",
    name: "Sarah J.",
    tier: "Black Card Member",
  },
  {
    quote:
      "Relocating to Monaco was seamless. From the residency paperwork to finding the perfect school for my children, every detail was handled.",
    name: "Michael R.",
    tier: "Global Citizen",
  },
];

export function UserReviews() {
  return (
    <Section className="bg-white dark:bg-neutral-950 py-24 md:py-32" fullWidth>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-neutral-500 dark:text-neutral-400">
            Testimonials
          </h2>
          <BlurText
            text="Voices of the Elite"
            className="font-heading text-4xl md:text-5xl font-bold uppercase text-neutral-900 dark:text-white justify-center"
            delay={50}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-6 group"
            >
              <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-full text-app-theme-500 dark:text-app-theme-400 group-hover:bg-app-theme-100 dark:group-hover:bg-app-theme-900/30 transition-colors duration-300">
                <Quote size={24} className="fill-current" />
              </div>
              <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-600 dark:text-neutral-300 italic">
                &quot;{review.quote}&quot;
              </p>
              <div>
                <h4 className="font-heading font-bold text-lg text-neutral-900 dark:text-white uppercase tracking-wide">
                  {review.name}
                </h4>
                <p className="text-xs font-bold tracking-[0.2em] text-app-theme-600 dark:text-app-theme-400 uppercase mt-1">
                  {review.tier}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
