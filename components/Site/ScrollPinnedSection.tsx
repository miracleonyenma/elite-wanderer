import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useRef } from "react";
import { Button } from "../ui/button";

const features = [
  {
    title: "Unbounded Access",
    description:
      "From sold-out galas to private islands, our network opens doors that remain closed to others. Your desire is our command.",
  },
  {
    title: "Bespoke Curation",
    description:
      "Every itinerary is a masterpiece, hand-crafted to your unique tastes. We don't just plan travel; we engineer memories.",
  },
  {
    title: "Global Legacy",
    description:
      "Building a life without borders. We facilitate dual citizenship, property acquisition, and legacy planning across continents.",
  },
];

export function ScrollPinnedSection({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative bg-white dark:bg-neutral-950 text-black dark:text-neutral-200 py-24 md:py-48 px-6 md:px-12",
        className
      )}
    >
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {/* Sticky Left Content */}
        <div className="relative h-fit md:sticky md:top-64">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-neutral-500 dark:text-neutral-400">
              The Philosophy
            </h2>
            <h3 className="font-heading text-4xl md:text-6xl font-black uppercase leading-[0.9] mb-8">
              Luxury Beyond <br /> Boundaries.
            </h3>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-md mb-8">
              Elite Wanderer is not just a service; it is a gateway to a life
              uninhibited. We specialize in curating bespoke travel experiences
              and seamless global relocation for those who demand nothing but
              the exceptional.
            </p>
            <Button
              variant="default"
              className="uppercase tracking-widest text-xs rounded-none bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 lg:px-8 lg:py-6"
            >
              Discover Our Vision
            </Button>
          </motion.div>
        </div>

        {/* Scrolling Right Content */}
        <div className="flex flex-col gap-24 md:gap-48 pt-12 md:pt-0">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
