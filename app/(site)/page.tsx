import { Hero } from "@/components/Site/Hero";
import { Section } from "@/components/Site/Section";
import { FeatureCard } from "@/components/Site/FeatureCard";
import { Button } from "@/components/ui/aevr/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Intro / Philosophy */}
      <Section className="bg-white text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-neutral-500">
              The Philosophy
            </h2>
            <h3 className="font-heading text-4xl md:text-6xl font-bold uppercase leading-[0.9] mb-8">
              Luxury Beyond <br /> Boundaries.
            </h3>
          </div>
          <div className="space-y-6 text-neutral-600 text-lg font-light leading-relaxed">
            <p>
              Elite Wanderer is not just a service; it is a gateway to a life
              uninhibited. We specialize in curating bespoke travel experiences
              and seamless global relocation for those who demand nothing but
              the exceptional.
            </p>
            <p>
              From private islands to penthouses in bustling metropolises, our
              network ensures that wherever you are, you are home.
            </p>
            <Button
              variant="default"
              className="mt-4 uppercase tracking-widest text-xs rounded-none bg-black text-white hover:bg-neutral-800"
            >
              Discover Our Vision
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Carousel */}
      <Section
        className="bg-neutral-50 max-w-full! p-0!  overflow-hidden"
        id="services"
        fullWidth
      >
        <div className="mb-12 md:mb-16 px-6 md:px-12 pt-16 md:pt-24">
          <h2 className="text-center text-xs font-bold tracking-[0.3em] uppercase mb-4 text-neutral-500">
            Our Expertise
          </h2>
          <h3 className="font-heading text-center text-4xl md:text-5xl font-bold uppercase text-neutral-900">
            Curated Services
          </h3>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
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
                className="h-[600px] "
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-0">
              <FeatureCard
                title="Global Relocation"
                label="Settle"
                description="Seamless transition to your new life. From visa processing to property acquisition and school placement."
                image="/images/pexels-tracvu-35255960.webp"
                className="h-[600px]"
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
            {/* Duplicate items for effect/filling carousel if needed, or assume user adds more later */}
          </CarouselContent>
          {/* Controls optional or hidden as requested "seamless". Keeping it clean for now, users can swipe. */}
        </Carousel>
      </Section>

      {/* Membership / Featured / Video Section */}
      <Section fullWidth className="p-0 py-0 md:py-0">
        <div className="relative h-[80vh] w-full flex items-center justify-center bg-neutral-900 text-white overflow-hidden">
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
            <h3 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-8">
              Elite Membership
            </h3>
            <p className="text-xl text-neutral-300 font-light mb-10">
              Join an exclusive circle of global citizens. Access events,
              networks, and privileges reserved for the few.
            </p>
            <Button
              variant="secondary"
              size={"lg"}
              className="px-12 py-6 uppercase"
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
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-2 text-neutral-500">
              The Marketplace
            </h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold uppercase text-neutral-900">
              Acquire The Exceptional
            </h3>
          </div>
          <Button
            variant="default"
            className="hidden md:inline-flex uppercase tracking-widest text-xs rounded-none bg-black text-white hover:bg-neutral-800"
          >
            View All Listings
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="gap-0 ml-0">
            <CarouselItem className="md:basis-1/2 lg:basis-2/5 pl-0">
              <FeatureCard
                title="Alpine Chalet"
                label="Real Estate"
                description="Gstaad, Switzerland. 8 Bedrooms, Private Spa, Ski-in/Ski-out."
                image="/images/pexels-rada-aslanova-150604297-34567860.webp"
                className="min-h-[600px] "
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-2/5 pl-0">
              <FeatureCard
                title="Limited Edition timepiece"
                label="Collectibles"
                description="Patek Philippe Nautilus. Factory sealed. Provenance verified."
                image="/images/pexels-geoffrey-currie-2153251493-33128243.webp"
                className="min-h-[600px] "
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-2/5 pl-0">
              <FeatureCard
                title="Super Yacht"
                label="Marine"
                description="Azzam Class. 180m. Helipad. Submarine."
                image="/images/pexels-lamkien-35255292.webp"
                // Assuming mapping based on available images, if not exact file, placeholder logic applies, but using provided list info
                className="min-h-[600px] "
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
          <div className="absolute top-1/2 left-4 z-10 hidden md:block">
            <CarouselPrevious className="relative left-0 translate-x-0 bg-white/10 hover:bg-white text-white hover:text-black border-none" />
          </div>
          <div className="absolute top-1/2 right-4 z-10 hidden md:block">
            <CarouselNext className="relative right-0 translate-x-0 bg-white/10 hover:bg-white text-white hover:text-black border-none" />
          </div>
        </Carousel>

        <div className="mt-12 mb-16 text-center md:hidden px-6">
          <Button
            variant="default"
            className="uppercase tracking-widest text-xs rounded-none bg-black text-white hover:bg-neutral-800"
          >
            View All Listings
          </Button>
        </div>
      </Section>
    </>
  );
}
