import { Hero } from "@/components/Site/Hero";
import { Section } from "@/components/Site/Section";
import { FeatureCard } from "@/components/Site/FeatureCard";
import { Button } from "@/components/ui/aevr/button";

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
            <h3 className="text-4xl md:text-6xl font-bold uppercase leading-[0.9] mb-8">
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

      {/* Services Grid */}
      <Section className="bg-neutral-50" id="services">
        <div className="mb-16 md:mb-24">
          <h2 className="text-center text-xs font-bold tracking-[0.3em] uppercase mb-4 text-neutral-500">
            Our Expertise
          </h2>
          <h3 className="text-center text-4xl md:text-5xl font-bold uppercase text-neutral-900">
            Curated Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Private Travel"
            label="Explore"
            description="Charter jets, yachts, and exclusive access to the world's most remote and beautiful destinations."
            image="/images/pexels-vincent-gerbouin-445991-1179156.webp"
            dark
          />
          <FeatureCard
            title="Global Relocation"
            label="Settle"
            description="Seamless transition to your new life. From visa processing to property acquisition and school placement."
          />
          <FeatureCard
            title="Concierge"
            label="Live"
            description="24/7 dedicated lifestyle management. Reservations, access, and desires fulfilled instantly."
            dark
          />
        </div>
      </Section>

      {/* Membership / Featured / Big Image Section */}
      <Section fullWidth className="p-0 py-0 md:py-0">
        <div className="relative h-[80vh] w-full flex items-center justify-center bg-neutral-900 text-white overflow-hidden">
          {/* Use the second video if strictly needed, or a static image. Using second video for now or fallback */}
          <div className="absolute inset-0 opacity-40 bg-[url('/images/pexels-code-mnml-185553186-35205820.webp')] bg-cover bg-center sm:bg-fixed" />

          <div className="relative z-10 text-center max-w-2xl px-6">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-white/70">
              The Private Club
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold uppercase mb-8">
              Elite Membership
            </h3>
            <p className="text-xl text-neutral-300 font-light mb-10">
              Join an exclusive circle of global citizens. Access events,
              networks, and privileges reserved for the few.
            </p>
            <Button
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-black uppercase tracking-widest text-sm px-10 py-6 rounded-none"
            >
              Request Invitation
            </Button>
          </div>
        </div>
      </Section>

      {/* Marketplace Teaser */}
      <Section id="marketplace">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-2 text-neutral-500">
              The Marketplace
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase text-neutral-900">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title="Alpine Chalet"
            label="Real Estate"
            description="Gstaad, Switzerland. 8 Bedrooms, Private Spa, Ski-in/Ski-out."
            image="/images/pexels-rada-aslanova-150604297-34567860.webp"
            className="min-h-[600px]"
          />
          <FeatureCard
            title="Limited Edition timepiece"
            label="Collectibles"
            description="Patek Philippe Nautilus. Factory sealed. Provenance verified."
            image="/images/pexels-geoffrey-currie-2153251493-33128243.webp"
            className="min-h-[600px]"
          />
        </div>
        <div className="mt-12 text-center md:hidden">
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
