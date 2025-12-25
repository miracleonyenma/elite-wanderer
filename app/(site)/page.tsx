// ./app/(site)/page.tsx
"use client";
import Image from "next/image";
import { Hero } from "@/components/Site/Hero";
import { Section } from "@/components/Site/Section";
import BlurText from "@/components/react-bits/BlurText";
import { FeatureCard } from "@/components/Site/FeatureCard";
import { Button } from "@/components/ui/aevr/button";
import { ScrollPinnedSection } from "@/components/Site/ScrollPinnedSection";
import { ParallaxGallery } from "@/components/Site/ParallaxGallery";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { UserReviews } from "@/components/Site/UserReviews";
import { BrandReviews } from "@/components/Site/BrandReviews";
import { BlogList } from "@/components/Site/BlogList";
import { CTASection } from "@/components/Site/CTASection";
import { destinations } from "./destinations-data";
import { marketplaceItems } from "./marketplace-data";

export default function Home() {
  const [servicesApi, setServicesApi] = useState<CarouselApi>();
  const [marketplaceApi, setMarketplaceApi] = useState<CarouselApi>();
  const [destinationsApi, setDestinationsApi] = useState<CarouselApi>();
  const [servicesCurrent, setServicesCurrent] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);
  const [marketplaceCurrent, setMarketplaceCurrent] = useState(0);
  const [marketplaceCount, setMarketplaceCount] = useState(0);
  const [destinationsCurrent, setDestinationsCurrent] = useState(0);
  const [destinationsCount, setDestinationsCount] = useState(0);

  useEffect(() => {
    if (!servicesApi) {
      return;
    }

    setServicesCount(servicesApi.scrollSnapList().length);
    setServicesCurrent(servicesApi.selectedScrollSnap() + 1);

    servicesApi.on("select", () => {
      setServicesCurrent(servicesApi.selectedScrollSnap() + 1);
    });
  }, [servicesApi]);

  useEffect(() => {
    if (!marketplaceApi) {
      return;
    }

    setMarketplaceCount(marketplaceApi.scrollSnapList().length);
    setMarketplaceCurrent(marketplaceApi.selectedScrollSnap() + 1);

    marketplaceApi.on("select", () => {
      setMarketplaceCurrent(marketplaceApi.selectedScrollSnap() + 1);
    });
  }, [marketplaceApi]);

  useEffect(() => {
    if (!destinationsApi) {
      return;
    }

    setDestinationsCount(destinationsApi.scrollSnapList().length);
    setDestinationsCurrent(destinationsApi.selectedScrollSnap() + 1);

    destinationsApi.on("select", () => {
      setDestinationsCurrent(destinationsApi.selectedScrollSnap() + 1);
    });
  }, [destinationsApi]);

  return (
    <>
      <Hero />

      {/* Intro / Philosophy */}
      <ScrollPinnedSection />

      {/* Membership / Featured / Video Section */}
      <Section fullWidth className="p-0 py-0 md:py-0">
        <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-neutral-900 text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 h-full w-full object-cover opacity-60"
          >
            <source
              src="/videos/5167964-hd_1080_1920_30fps.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-2xl px-6 text-center">
            <h2 className="mb-6 text-xs font-bold tracking-[0.3em] text-white/70 uppercase">
              The Private Club
            </h2>
            <div className="mb-8 flex justify-center">
              <BlurText
                text="TEW PLATINUM"
                className="justify-center font-heading text-3xl font-bold uppercase md:text-7xl"
                delay={50}
              />
            </div>
            <p className="mb-10 font-light text-neutral-300 lg:text-xl">
              Join an elite circle of global elite citizens. Access private
              events, networks, and privileges reserved for the few. Your
              passport to the extraordinary.
            </p>
            <Button
              variant="secondary"
              size={"lg"}
              className="uppercase lg:px-12 lg:py-6"
            >
              Request Invitation
            </Button>
          </div>
        </div>
      </Section>

      {/* Personalized travel */}
      <Section id="personalized-travel" className="overflow-hidden" fullWidth>
        <div className="flex h-full flex-col justify-center gap-2 p-6 md:hidden md:px-12">
          <h2 className="text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase dark:text-neutral-400">
            Personalized Travel
          </h2>
          <BlurText
            text="Explore our trips"
            className="font-heading text-4xl font-bold text-neutral-900 uppercase md:text-5xl dark:text-white"
            delay={50}
          />

          <Button
            variant="default"
            className="hidden rounded-none bg-black text-xs tracking-widest text-white uppercase hover:bg-neutral-800 md:inline-flex dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            View All Destinations
          </Button>
        </div>
        <div className="group relative pb-12">
          <Carousel
            setApi={setDestinationsApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0 gap-0">
              <CarouselItem className="hidden pl-0 md:flex md:basis-1/2 lg:basis-2/5">
                <div className="flex h-full flex-col justify-center gap-4 px-6 md:px-12">
                  <h2 className="mb-2 text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase dark:text-neutral-400">
                    Personalized Travel
                  </h2>
                  <BlurText
                    text="Explore The Exceptional"
                    className="font-heading text-2xl font-bold text-neutral-900 uppercase md:text-3xl xl:text-5xl dark:text-white"
                    delay={50}
                  />
                  <p className="mb-10 font-light lg:text-xl">
                    Remarkable experiences to inspire the mind
                  </p>
                  <Button
                    variant="default"
                    className="hidden rounded-none bg-black text-xs tracking-widest text-white uppercase hover:bg-neutral-800 md:inline-flex dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                  >
                    View All Destinations
                  </Button>
                </div>
              </CarouselItem>

              {destinations.map((destination, index) => {
                if (destination.type === "create") {
                  return (
                    <CarouselItem
                      key={index}
                      className="pl-0 md:basis-1/2 lg:basis-2/5"
                    >
                      <div className="group/create relative flex h-[600px] w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[#0a2332] p-8 text-center">
                        {/* Background Image / Overlay */}
                        <Image
                          src={destination.image} // Using dynamic image from data
                          alt="Create"
                          fill
                          className="object-cover opacity-20 transition-transform duration-700 group-hover/create:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#0a2332]/60" />

                        <div className="relative z-10 flex flex-col items-center">
                          <div className="mb-6">
                            <span className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
                              Custom Trips
                            </span>
                          </div>

                          <h3 className="mb-8 max-w-xs font-heading text-4xl leading-tight font-bold text-white uppercase md:text-5xl">
                            {destination.title}
                          </h3>

                          {destination.description && (
                            <p className="mb-8 hidden max-w-xl text-sm leading-relaxed text-neutral-300 md:block">
                              {destination.description}
                            </p>
                          )}

                          <Button
                            variant="outline"
                            className="rounded-none border-white px-8 py-6 text-sm tracking-widest text-white uppercase hover:bg-white hover:text-black"
                          >
                            {destination.buttonText}
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
                    <div className="group/card relative h-[600px] w-full cursor-pointer overflow-hidden border-r border-black/5">
                      <Image
                        src={destination.image}
                        alt={destination.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover/card:bg-black/40" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

                      <div className="absolute top-8 right-8 z-10">
                        <span className="text-xs font-bold tracking-[0.2em] text-white uppercase drop-shadow-md">
                          {destination.subtitle}
                        </span>
                      </div>

                      <div className="absolute right-0 bottom-0 left-0 translate-y-0 transform p-8 transition-transform duration-500 md:translate-y-8 md:p-12 md:group-hover/card:translate-y-0">
                        <h3 className="mb-4 font-heading text-3xl leading-tight font-bold text-white uppercase">
                          {destination.title}
                        </h3>
                        <div className="space-y-4 opacity-100 transition-opacity delay-100 duration-500 md:opacity-0 md:group-hover/card:opacity-100">
                          <p className="max-w-xl text-sm leading-relaxed text-neutral-200">
                            {destination.description}
                          </p>
                          <p className="text-xs font-bold tracking-widest text-white uppercase">
                            {destination.price}
                          </p>
                          <Button
                            variant="outline"
                            className="mt-4 rounded-none border-white text-xs tracking-widest text-white uppercase hover:bg-white hover:text-black"
                          >
                            {destination.buttonText}
                          </Button>
                        </div>
                      </div>
                    </div>
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
            {Array.from({ length: destinationsCount }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-1.5 cursor-pointer rounded-full transition-all duration-300",
                  index + 1 === destinationsCurrent
                    ? "w-8 bg-neutral-900 dark:bg-white"
                    : "w-1.5 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-500",
                )}
                onClick={() => destinationsApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 px-6 text-center md:hidden">
          <Button
            variant="default"
            className="rounded-none bg-black text-xs tracking-widest text-white uppercase hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            View All Destinations
          </Button>
        </div>
      </Section>

      {/* Tew Marketplace Carousel */}
      <Section
        id="marketplace"
        fullWidth
        className="overflow-hidden bg-app-theme-900 p-0 text-app-theme-50 md:p-0 md:pb-24"
      >
        <div className="mx-auto mb-12 flex w-full max-w-screen-2xl flex-col items-end justify-between px-6 pt-16 md:mb-16 md:flex-row md:px-12 md:pt-24">
          <div>
            <h2 className="mb-2 text-xs font-bold tracking-[0.3em] uppercase">
              TEW Marketplace
            </h2>
            <BlurText
              text="Acquire The Exceptional"
              className="font-heading text-4xl font-bold text-app-theme-50 uppercase md:text-5xl"
              delay={50}
            />
          </div>
          <Button
            variant="default"
            className="hidden rounded-none text-xs tracking-widest uppercase md:inline-flex"
          >
            View All Listings
          </Button>
        </div>

        <div className="group relative pb-12">
          <Carousel
            setApi={setMarketplaceApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay()]}
            className="w-full"
          >
            <CarouselContent className="ml-0 gap-0">
              {marketplaceItems.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    "pl-0 md:basis-1/2 lg:basis-2/5",
                    index === 0 && "",
                  )}
                >
                  <FeatureCard
                    title={item.title}
                    label={item.label}
                    description={item.description}
                    image={item.image}
                    className="min-h-[600px]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-1/2 left-4 z-10 block opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
              <CarouselPrevious className="relative left-0 size-12 translate-x-0 rounded-full border-none bg-white/10 text-white hover:bg-white hover:text-black" />
            </div>
            <div className="absolute top-1/2 right-4 z-10 block opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
              <CarouselNext className="relative right-0 size-12 translate-x-0 rounded-full border-none bg-white/10 text-white hover:bg-white hover:text-black" />
            </div>
          </Carousel>
          {/* Dots Indicator */}
          <div className="absolute right-0 bottom-0 left-0 z-20 flex justify-center gap-2">
            {Array.from({ length: marketplaceCount }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index + 1 === marketplaceCurrent
                    ? "w-8 bg-app-theme-50 dark:bg-white"
                    : "w-1.5 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-500",
                )}
                onClick={() => marketplaceApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 mb-16 px-6 text-center md:hidden">
          <Button
            variant="default"
            className="rounded-none text-xs tracking-widest uppercase"
          >
            View All Listings
          </Button>
        </div>
      </Section>

      {/* global mobility and residency */}
      <ParallaxGallery />

      {/* Investment showcase */}
      <Section
        className="max-w-full! overflow-hidden bg-neutral-50 p-0! dark:bg-neutral-900"
        id="services"
        fullWidth
      >
        <div className="mb-12 px-6 pt-16 md:mb-16 md:px-12 md:pt-24">
          <h2 className="mb-4 text-center text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase dark:text-neutral-400">
            Investment Showcase
          </h2>
          <div className="flex justify-center">
            <BlurText
              text="Opportunities for the discerning investor"
              className="justify-center text-center font-heading text-4xl font-bold text-neutral-900 uppercase md:text-5xl dark:text-white"
              delay={50}
            />
          </div>
        </div>

        <div className="group relative">
          <Carousel
            setApi={setServicesApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="ml-0 gap-0">
              <CarouselItem className="pl-0 md:basis-1/2 lg:basis-1/3">
                <FeatureCard
                  title="Private Travel"
                  label="Explore"
                  description="Charter jets, yachts, and exclusive access to the world's most remote and beautiful destinations."
                  image="/images/products-investments/pexels-heyho-6394590.webp"
                  dark
                  className="h-[600px] border-r border-white/10"
                />
              </CarouselItem>
              <CarouselItem className="pl-0 md:basis-1/2 lg:basis-1/3">
                <FeatureCard
                  title="Global Relocation"
                  label="Settle"
                  description="Seamless transition to your new life. From visa processing to property acquisition and school placement."
                  image="/images/products-investments/pexels-pixabay-358189.webp"
                  className="h-[600px] border-r border-black/5"
                />
              </CarouselItem>
              <CarouselItem className="pl-0 md:basis-1/2 lg:basis-1/3">
                <FeatureCard
                  title="Concierge"
                  label="Live"
                  description="24/7 dedicated lifestyle management. Reservations, access, and desires fulfilled instantly."
                  image="/images/pexels-absstpg-35255039.webp"
                  dark
                  className="h-[600px]"
                />
              </CarouselItem>
            </CarouselContent>
            <div className="absolute top-1/2 left-4 z-10 block opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
              <CarouselPrevious className="relative left-0 size-12 translate-x-0 rounded-full border-white/20 bg-white/10 text-white hover:border-transparent hover:bg-white hover:text-black" />
            </div>
            <div className="absolute top-1/2 right-4 z-10 block opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
              <CarouselNext className="relative right-0 size-12 translate-x-0 rounded-full border-white/20 bg-white/10 text-white hover:border-transparent hover:bg-white hover:text-black" />
            </div>
          </Carousel>
          {/* Dots Indicator */}
          <div className="absolute right-0 bottom-6 left-0 z-20 flex justify-center gap-2">
            {Array.from({ length: servicesCount }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index + 1 === servicesCurrent
                    ? "w-8 bg-white"
                    : "w-1.5 bg-white/40 hover:bg-white/60",
                )}
                onClick={() => servicesApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Social Proof & Validation */}
      <UserReviews />
      <BrandReviews />

      {/* Content & Journal */}
      <BlogList />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
