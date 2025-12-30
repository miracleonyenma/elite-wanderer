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
    tier: "Investor",
  },
  {
    quote:
      "Relocating to Portugal was seamless. From the residency paperwork to finding the perfect school for my children, every detail was handled.",
    name: "Michael R.",
    tier: "Global Citizen",
  },
  {
    quote:
      "I used to think a business trip to China was only about the Canton Fair. Through The Elite Wanderer, I learned how to source directly from factories, negotiate better pricing, and streamline my entire importation process. The program gave me clarity, confidence, and long-term supplier relationships that have completely changed my business.",
    name: "Daramola . O",
    tier: "China Wholesale Trip",
  },
  {
    quote:
      "This was my first truly strategic purchase. What started as buying a luxury villa in Greece became a pathway to residency. TEW helped me see beyond the property itself, structuring the acquisition to unlock long-term residency benefits, mobility, and asset security. It completely changed how I approach high-value purchases.",
    name: "Mensah. K",
    tier: "Tew Marketplace",
  },
  {
    quote:
      "I was introduced to a curated short-let opportunity in Bali through TEW, and it turned out to be one of my smartest decisions. Beyond the returns, I gained clarity on the tourism market, asset structuring, and long-term income potential. TEW didn’t just show me an opportunity, they guided me through a well-thought-out investment.",
    name: "Dapson. R",
    tier: "Hospitality Investor",
  },
];

export function UserReviews() {
  return (
    <Section className="bg-white py-24 md:py-32 dark:bg-neutral-950" fullWidth>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center md:mb-24">
          <h2 className="mb-4 text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase dark:text-neutral-400">
            TESTIMONIALS
          </h2>
          <BlurText
            text="WHAT PEOPLE SAY ABOUT US"
            className="justify-center font-heading text-4xl font-bold text-neutral-900 uppercase md:text-5xl dark:text-white"
            delay={50}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group flex flex-col items-center space-y-6 text-center"
            >
              <div className="rounded-full bg-neutral-100 p-4 text-app-theme-500 transition-colors duration-300 group-hover:bg-app-theme-100 dark:bg-neutral-900 dark:text-app-theme-400 dark:group-hover:bg-app-theme-900/30">
                <Quote size={24} className="fill-current" />
              </div>
              <p className="text-lg leading-relaxed font-light text-neutral-600 italic md:text-xl dark:text-neutral-300">
                &quot;{review.quote}&quot;
              </p>
              <div>
                <h4 className="font-heading text-lg font-bold tracking-wide text-neutral-900 uppercase dark:text-white">
                  {review.name}
                </h4>
                <p className="mt-1 text-xs font-bold tracking-[0.2em] text-app-theme-600 uppercase dark:text-app-theme-400">
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
