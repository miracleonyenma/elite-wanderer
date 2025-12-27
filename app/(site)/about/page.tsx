import { Section } from "@/components/Site/Section";
import BlurText from "@/components/react-bits/BlurText";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="relative h-[60vh] w-full overflow-hidden bg-neutral-900 text-white">
        <Image
          src="/images/pexels-tracvu-35255960.webp"
          alt="About Us"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <BlurText
            text="Our Philosophy"
            className="font-heading text-4xl font-bold uppercase md:text-7xl"
            delay={50}
          />
        </div>
      </div>

      <Section className="bg-white text-black dark:bg-neutral-950 dark:text-white">
        <div className="mx-auto max-w-4xl space-y-8 text-lg leading-relaxed font-light text-neutral-600 dark:text-neutral-300">
          <p>
            The Elite Wanderer was founded on a simple yet profound belief: that
            true luxury is not just about ownership, but about access,
            experience, and the freedom to live without boundaries.
          </p>
          <p>
            We are a private members&apos; club and lifestyle management firm
            dedicated to serving the world&apos;s most discerning individuals.
            From bespoke travel itineraries that skirt the edges of the map to
            strategic citizenship planning that opens doors across the globe,
            our mission is to empower you to live a life of limitless
            possibility.
          </p>
          <p>
            Our team is composed of global experts in travel, finance, real
            estate, and concierge services, all united by a commitment to
            excellence and discretion. When you join The Elite Wanderer, you
            don&apos;t just get a service provider; you gain a partner in
            crafting your legacy.
          </p>
        </div>
      </Section>
    </>
  );
}
