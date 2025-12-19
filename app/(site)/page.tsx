// ./app/(site)/page.tsx
"use client";
import { Hero } from "@/components/Site/Hero";
import { Section } from "@/components/Site/Section";
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

export default function Home() {
  const [servicesApi, setServicesApi] = useState<CarouselApi>();
  const [marketplaceApi, setMarketplaceApi] = useState<CarouselApi>();
  const [servicesCurrent, setServicesCurrent] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);
  const [marketplaceCurrent, setMarketplaceCurrent] = useState(0);
  const [marketplaceCount, setMarketplaceCount] = useState(0);

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

  return (
    <>
      <Hero />

      {/* Intro / Philosophy */}
      <ScrollPinnedSection />

      {/* Services Carousel */}
      <Section
        className="bg-neutral-50 dark:bg-neutral-900 max-w-full! p-0!  overflow-hidden"
        id="services"
        fullWidth
      >
        <div className="mb-12 md:mb-16 px-6 md:px-12 pt-16 md:pt-24">
          <h2 className="text-center text-xs font-bold tracking-[0.3em] uppercase mb-4 text-neutral-500 dark:text-neutral-400">
            Our Expertise
          </h2>
          <h3 className="font-heading text-center text-4xl md:text-5xl font-bold uppercase text-neutral-900 dark:text-white">
            Curated Services
          </h3>
        </div>

        <div className="relative group">
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
            <CarouselContent className="gap-0 ml-0">
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-0">
                <FeatureCard
                  title="Private Travel"
                  label="Explore"
                  description="Charter jets, yachts, and exclusive access to the world's most remote and beautiful destinations."
                  image="/images/pexels-vincent-gerbouin-445991-1179156.webp"
                  dark
                  className="h-[600px] border-r border-white/10"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-0">
                <FeatureCard
                  title="Global Relocation"
                  label="Settle"
                  description="Seamless transition to your new life. From visa processing to property acquisition and school placement."
                  image="/images/pexels-tracvu-35255960.webp"
                  className="h-[600px] border-r border-black/5"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-0">
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
            <div className="absolute top-1/2 left-4 z-10 block opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <CarouselPrevious className="relative left-0 translate-x-0 bg-white/10 hover:bg-white text-white hover:text-black border-white/20 hover:border-transparent rounded-full size-12" />
            </div>
            <div className="absolute top-1/2 right-4 z-10 block opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <CarouselNext className="relative right-0 translate-x-0 bg-white/10 hover:bg-white text-white hover:text-black border-white/20 hover:border-transparent rounded-full size-12" />
            </div>
          </Carousel>
          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
            {Array.from({ length: servicesCount }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-1.5 transition-all duration-300 rounded-full",
                  index + 1 === servicesCurrent
                    ? "w-8 bg-white"
                    : "w-1.5 bg-white/40 hover:bg-white/60"
                )}
                onClick={() => servicesApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Membership / Featured / Video Section */}
      <Section fullWidth className="p-0 py-0 md:py-0">
        <div className="relative h-dvh w-full flex items-center justify-center bg-neutral-900 text-white overflow-hidden">
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

          <div className="relative z-10 text-center max-w-2xl px-6">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-white/70">
              The Private Club
            </h2>
            <h3 className="font-heading text-3xl md:text-7xl font-bold uppercase mb-8">
              Elite Membership
            </h3>
            <p className="lg:text-xl text-neutral-300 font-light mb-10">
              Join an exclusive circle of global citizens. Access events,
              networks, and privileges reserved for the few.
            </p>
            <Button
              variant="secondary"
              size={"lg"}
              className="lg:px-12 lg:py-6 uppercase"
            >
              Request Invitation
            </Button>
          </div>
        </div>
      </Section>

      {/* Marketplace Carousel */}
      <Section id="marketplace" className="overflow-hidden p-0 md:p-0">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 px-6 md:px-12 pt-16 md:pt-24">
          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-2 text-neutral-500 dark:text-neutral-400">
              The Marketplace
            </h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold uppercase text-neutral-900 dark:text-white">
              Acquire The Exceptional
            </h3>
          </div>
          <Button
            variant="default"
            className="hidden md:inline-flex uppercase tracking-widest text-xs rounded-none bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            View All Listings
          </Button>
        </div>

        <div className="relative group pb-12">
          <Carousel
            setApi={setMarketplaceApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="gap-0 ml-0">
              <CarouselItem className="md:basis-1/2 lg:basis-2/5 pl-0">
                <FeatureCard
                  title="Alpine Chalet"
                  label="Real Estate"
                  description="Gstaad, Switzerland. 8 Bedrooms, Private Spa, Ski-in/Ski-out."
                  image="/images/pexels-rada-aslanova-150604297-34567860.webp"
                  className="min-h-[600px] border-r border-black/5"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-2/5 pl-0">
                <FeatureCard
                  title="Limited Edition timepiece"
                  label="Collectibles"
                  description="Patek Philippe Nautilus. Factory sealed. Provenance verified."
                  image="/images/pexels-geoffrey-currie-2153251493-33128243.webp"
                  className="min-h-[600px] border-r border-black/5"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-2/5 pl-0">
                <FeatureCard
                  title="Super Yacht"
                  label="Marine"
                  description="Azzam Class. 180m. Helipad. Submarine."
                  image="/images/pexels-lamkien-35255292.webp"
                  // Assuming mapping based on available images, if not exact file, placeholder logic applies, but using provided list info
                  className="min-h-[600px] border-r border-black/5"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-2/5 pl-0">
                <FeatureCard
                  title="Classic Car"
                  label="Automotive"
                  description="1963 Ferrari 250 GTO. Mint condition. Racing history."
                  image="/images/pexels-mahmudul-hasan-2004633-35257841.webp"
                  className="min-h-[600px]"
                />
              </CarouselItem>
            </CarouselContent>
            <div className="absolute top-1/2 left-4 z-10 block opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <CarouselPrevious className="relative left-0 translate-x-0 bg-white/10 hover:bg-white text-white hover:text-black border-none rounded-full size-12" />
            </div>
            <div className="absolute top-1/2 right-4 z-10 block opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <CarouselNext className="relative right-0 translate-x-0 bg-white/10 hover:bg-white text-white hover:text-black border-none rounded-full size-12" />
            </div>
          </Carousel>
          {/* Dots Indicator */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 z-20">
            {Array.from({ length: marketplaceCount }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-1.5 transition-all duration-300 rounded-full",
                  index + 1 === marketplaceCurrent
                    ? "w-8 bg-neutral-900 dark:bg-white"
                    : "w-1.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-500"
                )}
                onClick={() => marketplaceApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 mb-16 text-center md:hidden px-6">
          <Button
            variant="default"
            className="uppercase tracking-widest text-xs rounded-none bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            View All Listings
          </Button>
        </div>
      </Section>
      <ParallaxGallery />
    </>
  );
}
