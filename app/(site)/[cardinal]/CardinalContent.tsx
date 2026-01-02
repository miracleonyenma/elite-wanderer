"use client";

import BlurText from "@/components/react-bits/BlurText";
import { Button } from "@/components/ui/aevr/button";
import { FeatureCard } from "@/components/Site/FeatureCard";
import { Section } from "@/components/Site/Section";
import Image from "next/image";
import Link from "next/link";
import { ImmigrationContactForm } from "@/components/Site/ImmigrationContactForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import type {
  CardinalData,
  CardinalItem,
  DestinationItem,
  MarketplaceItem,
  ResidencyItem,
  InvestmentItem,
} from "../cardinals-data";

export function CardinalContent({
  cardinal,
  data,
}: {
  cardinal: string;
  data: CardinalData;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState<"citizenship" | "residency" | "all">(
    "citizenship",
  );

  // Filter data based on selection for global-mobility
  const filteredData =
    cardinal === "global-mobility" && filter !== "all"
      ? data.data.filter((item) => {
          const residencyItem = item as ResidencyItem;
          if (filter === "citizenship") {
            return residencyItem.type?.toLowerCase().includes("citizenship");
          } else {
            return (
              residencyItem.type?.toLowerCase().includes("residency") &&
              !residencyItem.type?.toLowerCase().includes("citizenship")
            );
          }
        })
      : data.data;

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden bg-neutral-900 text-white">
        {/* Background Media */}
        {data.heroVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 h-full w-full object-cover opacity-60"
          >
            <source src={data.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            className="object-cover opacity-60"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h2 className="mb-6 text-xs font-bold tracking-[0.3em] text-white/70 uppercase">
            {data.subtitle}
          </h2>
          <div className="mb-8 flex justify-center">
            <BlurText
              text={data.title}
              className="justify-center text-center font-heading text-4xl font-bold uppercase md:text-6xl lg:text-7xl"
              delay={50}
            />
          </div>
          <p className="mb-10 max-w-2xl font-light text-neutral-300 lg:text-xl">
            {data.description}
          </p>
        </div>
      </div>

      {/* Access Without Borders Section - Only for global-mobility */}
      {cardinal === "global-mobility" && (
        <Section className="bg-white py-24 md:py-32 dark:bg-neutral-950">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase dark:text-neutral-400">
              The Opportunity
            </h2>
            <BlurText
              text="Access Without Borders"
              className="mb-8 justify-center font-heading text-4xl font-bold text-neutral-900 uppercase md:text-5xl dark:text-white"
              delay={50}
            />
            <p className="text-lg leading-relaxed font-light text-neutral-600 md:text-xl dark:text-neutral-300">
              Through approved investment routes, individuals can obtain second
              residency or citizenship, unlocking enhanced travel mobility,
              business flexibility, and family security. Designed for those
              seeking stability, opportunity, and optionality in a global world,
              these programs offer a structured approach to mobility and wealth
              preservation.
            </p>
          </div>
        </Section>
      )}

      {/* Content Section with Header */}
      <Section
        className="overflow-hidden bg-neutral-50 p-0 dark:bg-neutral-950"
        fullWidth
      >
        {/* Header */}
        <div className="mx-auto mb-12 flex w-full max-w-screen-2xl flex-col items-start justify-between gap-8 px-6 pt-16 md:mb-16 md:flex-row md:items-end md:px-12 md:pt-24">
          <div>
            <h2 className="mb-2 text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase dark:text-neutral-400">
              {data.subtitle}
            </h2>
            <BlurText
              text={data.title}
              className="font-heading text-4xl font-bold text-neutral-900 uppercase md:text-5xl dark:text-white"
              delay={50}
            />
          </div>

          {/* Filter Section - Only for global-mobility */}
          {cardinal === "global-mobility" && (
            <div className="flex gap-4">
              <Button
                variant={filter === "citizenship" ? "default" : "outline"}
                onClick={() => setFilter("citizenship")}
                className={cn(
                  "rounded-none px-8 py-6 text-xs tracking-widest uppercase transition-all",
                  filter === "citizenship"
                    ? "bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                    : "border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black",
                )}
              >
                Citizenship
              </Button>
              <Button
                variant={filter === "residency" ? "default" : "outline"}
                onClick={() => setFilter("residency")}
                className={cn(
                  "rounded-none px-8 py-6 text-xs tracking-widest uppercase transition-all",
                  filter === "residency"
                    ? "bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                    : "border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black",
                )}
              >
                Residency
              </Button>
            </div>
          )}
        </div>

        {/* Carousel */}
        <div className="group relative pb-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 4000 })]}
            className="w-full"
          >
            <CarouselContent className="ml-0 gap-0">
              {filteredData.map((item: CardinalItem, index: number) => {
                // Helper to safe cast for property access
                const asResidency = item as ResidencyItem;
                const asMarketplace = item as MarketplaceItem;
                const asDestination = item as DestinationItem;
                const asInvestment = item as InvestmentItem;

                // Normalize data properties
                const title = item.title || asResidency.location || "Untitled";
                const description = item.description || asResidency.type || "";
                const image = item.image;
                const label =
                  asMarketplace.label ||
                  asDestination.subtitle ||
                  asResidency.price ||
                  asInvestment.label ||
                  "";

                // Specific handling for 'create' type in destinations
                if (asDestination.type === "create") {
                  return (
                    <CarouselItem
                      key={index}
                      className="pl-0 md:basis-1/2 lg:basis-2/5"
                    >
                      <div className="group/create relative flex h-[600px] w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[#0a2332] p-8 text-center">
                        <Image
                          src={image}
                          alt="Create"
                          fill
                          className="object-cover opacity-20 transition-transform duration-700 group-hover/create:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#0a2332]/60" />
                        <div className="relative z-10 flex flex-col items-center">
                          <span className="mb-6 text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
                            Custom Trips
                          </span>
                          <h3 className="mb-8 max-w-xs font-heading text-3xl leading-tight font-bold text-white uppercase md:text-4xl">
                            {title}
                          </h3>
                          <p className="mb-8 hidden max-w-xs text-sm leading-relaxed text-neutral-300 md:block">
                            {description}
                          </p>
                          <Button
                            variant="outline"
                            className="rounded-none border-white px-8 py-6 text-sm tracking-widest text-white uppercase hover:bg-white hover:text-black"
                          >
                            {asDestination.buttonText || "Get Started"}
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                }

                return (
                  <CarouselItem
                    key={index}
                    className="pl-0 md:basis-1/2 lg:basis-2/5"
                  >
                    {cardinal === "global-mobility" && asResidency.slug ? (
                      <Link href={`/global-mobility/${asResidency.slug}`}>
                        <FeatureCard
                          title={title}
                          description={description}
                          image={image}
                          label={label}
                          dark={asInvestment.dark || false}
                          className="min-h-[600px] cursor-pointer"
                        />
                      </Link>
                    ) : (
                      <FeatureCard
                        title={title}
                        description={description}
                        image={image}
                        label={label}
                        dark={asInvestment.dark || false}
                        className="min-h-[600px]"
                      />
                    )}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="absolute top-1/2 left-4 z-10 block opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
              <CarouselPrevious className="relative left-0 size-12 translate-x-0 rounded-full border-none bg-white/10 text-white hover:bg-white hover:text-black dark:hover:bg-black/90 dark:hover:text-white" />
            </div>
            <div className="absolute top-1/2 right-4 z-10 block opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
              <CarouselNext className="relative right-0 size-12 translate-x-0 rounded-full border-none bg-white/10 text-white hover:bg-white hover:text-black dark:hover:bg-black/90 dark:hover:text-white" />
            </div>
          </Carousel>
          {/* Dots Indicator */}
          <div className="absolute right-0 bottom-0 left-0 z-20 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-1.5 cursor-pointer rounded-full transition-all duration-300",
                  index + 1 === current
                    ? "w-8 bg-neutral-900 dark:bg-white"
                    : "w-1.5 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-500",
                )}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Form - Only for global-mobility */}
      {cardinal === "global-mobility" && <ImmigrationContactForm />}

      {/* Footer CTA */}
      <div className="bg-black py-24 text-center text-white">
        <h2 className="mb-8 text-xs font-bold tracking-[0.3em] uppercase">
          Ready to Begin?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-neutral-400">
          Contact our specialized team to start your journey with The Elite
          Wanderer.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="rounded-none border-white px-12 py-6 text-sm tracking-widest text-white uppercase hover:bg-white hover:text-black"
        >
          Contact Concierge
        </Button>
      </div>
    </main>
  );
}
