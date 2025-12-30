"use client";

import { Section } from "@/components/Site/Section";
import BlurText from "@/components/react-bits/BlurText";
import { Button } from "@/components/ui/aevr/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Placeholder data for events
const events = [
  {
    title: "Summer Gala",
    description:
      "An exclusive evening of networking and celebration under the stars. Join industry leaders and visionaries for a night of curated conversations and culinary excellence.",
    image: "/images/pexels-absstpg-35255039.webp",
    label: "Previous",
  },
  {
    title: "Investment Summit",
    description:
      "Strategic discussions on global market trends and opportunities. Unlock insights from top-tier analysts and discover the next frontier of high-yield investments.",
    image: "/images/products-investments/pexels-pixabay-358189.webp",
    label: "Previous",
  },
  {
    title: "Art & Culture",
    description:
      "Private viewing of contemporary masterpieces. Immerse yourself in the world of fine art with guided tours by renowned curators.",
    image: "/images/pexels-tracvu-35255960.webp",
    label: "Previous",
  },
  {
    title: "Yacht Week",
    description:
      "A week of sailing and luxury lifestyle in the Mediterranean. Experience the ultimate freedom of the open seas with bespoke itineraries and world-class service.",
    image: "/images/products-investments/pexels-heyho-6394590.webp",
    label: "Upcoming",
  },
];

export default function EventsPage() {
  return (
    <main>
      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden bg-neutral-900 text-white md:h-[90vh]">
        <Image
          src="/images/pexels-tracvu-35255960.webp"
          alt="Events"
          fill
          className="object-cover opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="mb-2 font-heading text-lg font-bold tracking-[0.2em] text-white/80 uppercase md:text-xl">
            The
          </span>
          <h1 className="mb-6 bg-linear-to-b from-white to-white/60 bg-clip-text font-heading text-6xl font-black tracking-tighter text-transparent uppercase md:text-8xl lg:text-9xl">
            Events
          </h1>
          <p className="mb-10 max-w-xl text-sm font-bold tracking-[0.2em] text-white uppercase md:text-base">
            A record of gatherings and experiences hosted by The Elite Wanderer
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-none border-white px-8 py-6 text-xs tracking-widest text-white uppercase hover:bg-white hover:text-black"
          >
            <Link href="#listings">View Events</Link>
          </Button>
        </div>
      </div>

      {/* Alternating Events Layout */}
      <div>
        {events.map((event, index) => (
          <div
            key={index}
            className={cn(
              "flex min-h-[600px] flex-col md:flex-row",
              index % 2 !== 0 ? "md:flex-row-reverse" : "",
            )}
          >
            {/* Image Side */}
            <div className="relative min-h-[400px] w-full md:min-h-[600px] md:w-1/2">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text Side */}
            <div className="flex w-full flex-col justify-center bg-white px-8 py-16 md:w-1/2 md:px-16 lg:px-24 dark:bg-neutral-950">
              <h3 className="mb-6 font-heading text-3xl font-bold tracking-wide text-neutral-900 uppercase md:text-4xl lg:text-5xl dark:text-white">
                {event.title}
              </h3>
              <p className="mb-8 text-lg leading-relaxed font-light text-neutral-600 dark:text-neutral-300">
                {event.description}
              </p>
              <Button
                asChild
                variant="default"
                className="w-fit rounded-none bg-black px-8 py-6 text-xs tracking-widest text-white uppercase hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                <Link href="#">Find Out More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
