"use client";

import { Section } from "./Section";
import BlurText from "../react-bits/BlurText";
import { Button } from "@/components/ui/aevr/button";

export function CTASection() {
  return (
    <Section
      className="bg-app-theme-950 text-white py-32 md:py-48 relative overflow-hidden"
      fullWidth
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-app-theme-400 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-app-theme-600 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-8 text-neutral-400">
          The World Awaits
        </h2>

        <div className="max-w-4xl mx-auto mb-10">
          <BlurText
            text="Ready to Ascend?"
            className="font-heading text-5xl md:text-8xl font-bold uppercase text-white justify-center leading-none"
            delay={50}
          />
        </div>

        <p className="text-lg md:text-2xl font-light text-neutral-300 max-w-2xl mx-auto mb-16 leading-relaxed">
          Your journey into the extraordinary begins with a single step. Join
          the club that redefines possible.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-neutral-200 text-sm md:text-base px-10 py-8 uppercase tracking-widest rounded-none"
          >
            Apply for Membership
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white hover:text-black text-sm md:text-base px-10 py-8 uppercase tracking-widest rounded-none"
          >
            Contact Concierge
          </Button>
        </div>
      </div>
    </Section>
  );
}
