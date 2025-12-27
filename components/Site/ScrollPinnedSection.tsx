import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useRef } from "react";
import { Button } from "../ui/button";
import BlurText from "../react-bits/BlurText";
import ScrollReveal from "../react-bits/ScrollReveal";
import Link from "next/link";

const features = [
  {
    title: "TEW Platinum Club",
    description:
      "Join an elite circle of global elite citizens. Access private events, networks, and privileges reserved for the few. Your passport to the extraordinary.",
    cta: {
      text: "Discover TEW Platinum",
      href: "/platinum-club",
    },
  },
  {
    title: "Personalized Luxury Travel",
    description:
      "Every journey is meticulously crafted to your tastes. From private islands to chartered jets, we design experiences that leave lasting memories",
    cta: {
      text: "Plan Your Journey",
      href: "/travel",
    },
  },
  {
    title: "TEW Marketplace",
    description:
      "Acquire the exceptional. A curated collection of rare assets, from off-market real estate to limited-edition timepieces and luxury vessels.",
    cta: {
      text: "Explore the Marketplace",
      href: "/marketplace",
    },
  },
  {
    title: "⁠Global Mobility & Residency",
    description:
      "Create a life without borders. We facilitate dual citizenship, golden visas, and strategic property acquisition to secure your global legacy",
    cta: {
      text: "Unlock Global Access",
      href: "/global-mobility",
    },
  },
  {
    title: "Investment Showcase",
    description:
      "Access high-yield opportunities across emerging markets and luxury sectors. Exclusive deal flow for the discerning investor.",
    cta: {
      text: "View Investment Opportunities",
      href: "/investments",
    },
  },
];

export function ScrollPinnedSection({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative bg-white px-6 py-24 text-black md:px-12 md:py-48 dark:bg-neutral-950 dark:text-neutral-200",
        className,
      )}
    >
      <div className="mx-auto grid min-h-[150dvh] max-w-screen-2xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-24">
        {/* Sticky Left Content */}
        <div className="relative col-span-2 h-fit md:sticky md:top-[10dvh] md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase dark:text-neutral-400">
              The Philosophy
            </h2>
            <div className="mb-8">
              <BlurText
                text="Luxury Beyond Boundaries."
                className="font-heading text-4xl leading-[0.9] font-black uppercase md:text-6xl"
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
              Our purpose is to create a world where access, opportunity, and
              possibility are limitless for those who dare to reach beyond the
              ordinary. Every journey, connection, and experience is designed to
              open doors, spark new perspectives, and enable a life of freedom,
              influence, and impact.
            </ScrollReveal>
            <Button
              asChild
              variant="default"
              className="rounded-none bg-black text-xs tracking-widest text-white uppercase hover:bg-neutral-800 lg:px-8 lg:py-6 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scrolling Right Content */}
        <div className="col-span-1 flex flex-col gap-24 pt-12 md:gap-48 md:pt-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ margin: "-10% 0px -10% 0px" }}
              className="space-y-4"
            >
              <h4 className="text-2xl font-bold tracking-wide uppercase">
                0{index + 1}. {feature.title}
              </h4>
              <div className="mb-4 h-px w-12 bg-black dark:bg-white/30" />
              <p className="max-w-sm text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
                {feature.description}
              </p>
              <Button
                asChild={!!feature?.cta?.href}
                variant="link"
                className="h-auto p-0 text-xs tracking-widest text-black uppercase transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
              >
                <Link href={feature?.cta?.href || "#"}>
                  {feature?.cta?.text ||
                    `Explore ${feature.title.split(" ")[0]}`}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
