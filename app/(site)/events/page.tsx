"use client";

import { Section } from "@/components/Site/Section";
import BlurText from "@/components/react-bits/BlurText";
import { FeatureCard } from "@/components/Site/FeatureCard";
import Image from "next/image";

// Placeholder data for events
const events = [
  {
    title: "Summer Gala",
    description:
      "An exclusive evening of networking and celebration under the stars.",
    image: "/images/pexels-absstpg-35255039.webp", // Using existing placeholder
    label: "Previous",
  },
  {
    title: "Investment Summit",
    description:
      "Strategic discussions on global market trends and opportunities.",
    image: "/images/products-investments/pexels-pixabay-358189.webp", // Using existing placeholder
    label: "Previous",
  },
  {
    title: "Art & Culture",
    description: "Private viewing of contemporary masterpieces.",
    image: "/images/pexels-tracvu-35255960.webp", // Using existing placeholder
    label: "Previous",
  },
  {
    title: "Yacht Week",
    description: "A week of sailing and luxury lifestyle in the Mediterranean.",
    image: "/images/products-investments/pexels-heyho-6394590.webp", // Using existing placeholder
    label: "Upcoming",
  },
];

export default function EventsPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden bg-neutral-900 text-white md:h-[70vh]">
        <Image
          // Fallback/Placeholder hero image - ideally this should be one of the uploaded images if moved to public
          src="/images/pexels-tracvu-35255960.webp"
          alt="Events"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h2 className="mb-6 text-xs font-bold tracking-[0.3em] text-white/70 uppercase">
            Events
          </h2>
          <div className="mb-8 flex justify-center">
            <BlurText
              text="A record of gatherings and experiences hosted by The Elite Wanderer"
              className="justify-center text-center font-heading text-3xl font-bold uppercase md:text-5xl lg:text-6xl"
              delay={50}
            />
          </div>
        </div>
      </div>

      {/* Events List Section */}
      <Section className="bg-neutral-50 py-24 dark:bg-neutral-950">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-2">
          {events.map((event, index) => (
            <FeatureCard
              key={index}
              title={event.title}
              description={event.description}
              image={event.image}
              label={event.label}
              className="min-h-[500px]"
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
