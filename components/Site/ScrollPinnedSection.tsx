import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useRef } from "react";
import { Button } from "../ui/button";
import BlurText from "../react-bits/BlurText";
import ScrollReveal from "../react-bits/ScrollReveal";

const features = [
  {
    title: "TEW Platinum Club",
    description:
      "Join an exclusive circle of global citizens. Access events, networks, and privileges reserved for the few. Your passport to the extraordinary.",
  },
  {
    title: "Luxury Personalised Travel",
    description:
      "Every itinerary is a masterpiece, hand-crafted to your unique tastes. From private islands to chartered jets, we engineer memories that last a lifetime.",
  },
  {
    title: "TEW Marketplace",
    description:
      "Acquire the exceptional. A curated collection of rare assets, from off-market real estate to limited-edition timepieces and marine vessels.",
  },
  {
    title: "Global Mobility & Residency",
    description:
      "Building a life without borders. We facilitate dual citizenship, golden visas, and property acquisition to secure your legacy across continents.",
  },
  {
    title: "Investment Showcase",
    description:
      "Discover high-yield opportunities in emerging markets and luxury sectors. Exclusive deal flow for the astute investor.",
  },
];

export function ScrollPinnedSection({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative bg-white  dark:bg-neutral-950 text-black dark:text-neutral-200 py-24 md:py-48 px-6 md:px-12",
        className
      )}
    >
      <div className="max-w-screen-2xl min-h-[150dvh] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
        {/* Sticky Left Content */}
        <div className="relative col-span-2 h-fit md:sticky md:pt-24 md:top-[10dvh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-neutral-500 dark:text-neutral-400">
              The Philosophy
            </h2>
            <div className="mb-8">
              <BlurText
                text="Luxury Beyond Boundaries."
                className="font-heading text-4xl md:text-6xl font-black uppercase leading-[0.9]"
                delay={50}
              />
            </div>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              textClassName="text-2xl md:text-5xl text-neutral-800 dark:text-neutral-200 font-thin leading-tight! max-w-4xl tracking-tighter"
              containerClassName="my-0 mb-8"
              rotationEnd="bottom bottom"
              wordAnimationEnd="bottom 80%"
            >
              Elite Wanderer is not just a service; it is a gateway to a life
              uninhibited. We specialize in curating bespoke travel experiences
              and seamless global relocation for those who demand nothing but
              the exceptional.
            </ScrollReveal>
            <Button
              variant="default"
              className="uppercase  tracking-widest text-xs rounded-none bg-black text-white  hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 lg:px-8 lg:py-6"
            >
              Discover Our Vision
            </Button>
          </motion.div>
        </div>

        {/* Scrolling Right Content */}
        <div className="flex flex-col col-span-1 gap-24 md:gap-48 pt-12 md:pt-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ margin: "-10% 0px -10% 0px" }}
              className="space-y-4"
            >
              <h4 className="text-2xl font-bold uppercase tracking-wide">
                0{index + 1}. {feature.title}
              </h4>
              <div className="h-px w-12 bg-black dark:bg-white/30 mb-4" />
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-lg max-w-sm">
                {feature.description}
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-black dark:text-white uppercase text-xs tracking-widest hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
              >
                Explore {feature.title.split(" ")[0]}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
