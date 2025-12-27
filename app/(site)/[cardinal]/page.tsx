import { notFound } from "next/navigation";
import {
  cardinalsData,
  CardinalItem,
  DestinationItem,
  MarketplaceItem,
  ResidencyItem,
  InvestmentItem,
} from "../cardinals-data";
import { Metadata } from "next";
import BlurText from "@/components/react-bits/BlurText";
import { Button } from "@/components/ui/aevr/button";
import { FeatureCard } from "@/components/Site/FeatureCard";
import { Section } from "@/components/Site/Section";
import Image from "next/image";

// Generate static params for all defined cardinals
export function generateStaticParams() {
  return Object.keys(cardinalsData).map((slug) => ({
    cardinal: slug,
  }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { cardinal: string };
}): Promise<Metadata> {
  const { cardinal } = await params;
  const data = cardinalsData[cardinal];

  if (!data) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `${data.title} | The Elite Wanderer`,
    description: data.description,
  };
}

export default async function CardinalPage({
  params,
}: {
  params: { cardinal: string };
}) {
  const { cardinal } = await params;
  const data = cardinalsData[cardinal];

  if (!data) {
    notFound();
  }

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

      {/* Content Grid */}
      <Section className="bg-neutral-50 dark:bg-neutral-950">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.data.map((item: CardinalItem, index: number) => {
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
                <div
                  key={index}
                  className="group relative flex min-h-[500px] w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[#0a2332] p-8 text-center"
                >
                  <Image
                    src={image}
                    alt="Create"
                    fill
                    className="object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
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
              );
            }

            return (
              <FeatureCard
                key={index}
                title={title}
                description={description}
                image={image}
                label={label}
                dark={false} // Default to light/image card style
                className="min-h-[500px]"
              />
            );
          })}
        </div>
      </Section>

      {/* Footer CTA (Reused from page design or similar) */}
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
          className="rounded-none border-white px-12 py-6 text-sm tracking-widest uppercase hover:bg-white hover:text-black"
        >
          Contact Concierge
        </Button>
      </div>
    </main>
  );
}
