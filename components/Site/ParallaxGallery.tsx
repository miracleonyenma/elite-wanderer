"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const images1 = [
  {
    src: "/images/pexels-vincent-gerbouin-445991-1179156.webp",
    location: "Santorini, Greece",
  },
  { src: "/images/pexels-tracvu-35255960.webp", location: "Kyoto, Japan" },
  {
    src: "/images/pexels-absstpg-35255039.webp",
    location: "Amalfi Coast, Italy",
  },
];
const images2 = [
  {
    src: "/images/pexels-rada-aslanova-150604297-34567860.webp",
    location: "Paris, France",
  },
  {
    src: "/images/pexels-geoffrey-currie-2153251493-33128243.webp",
    location: "Reykjavík, Iceland",
  },
  {
    src: "/images/pexels-lamkien-35255292.webp",
    location: "Ha Long Bay, Vietnam",
  },
];
const images3 = [
  {
    src: "/images/pexels-mahmudul-hasan-2004633-35257841.webp",
    location: "Dubai, UAE",
  },
  {
    src: "/images/pexels-vincent-gerbouin-445991-1179156.webp",
    location: "Santorini, Greece",
  },
  { src: "/images/pexels-tracvu-35255960.webp", location: "Kyoto, Japan" },
];

export function ParallaxGallery({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const ImageCard = ({
    src,
    location,
    index,
  }: {
    src: string;
    location: string;
    index: number;
  }) => (
    <div className="relative aspect-3/4 w-full overflow-hidden group cursor-pointer">
      <Image
        src={src}
        alt={`Gallery image ${index} - ${location}`}
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 focus:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <span className="text-white font-heading text-lg tracking-wider font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {location}
        </span>
      </div>
    </div>
  );

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative bg-neutral-100 dark:bg-neutral-900 pt-24 overflow-hidden",
        className
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-24">
        <h2 className="text-center text-xs font-bold tracking-[0.3em] uppercase mb-4 text-neutral-500 dark:text-neutral-400">
          Visual Odyssey
        </h2>
        <h3 className="font-heading text-center text-2xl md:text-5xl font-bold uppercase text-neutral-900 dark:text-white">
          Global Mobility and Residency
        </h3>
      </div>

      <div className="h-[75vh] md:h-[150vh] flex gap-4 md:gap-8 justify-center overflow-hidden">
        {/* Column 1 */}
        <motion.div
          style={{ y: y1 }}
          className="flex flex-col gap-4 md:gap-8 w-1/3 md:w-1/4"
        >
          {images1.map((img, i) => (
            <ImageCard
              key={i}
              src={img.src}
              location={img.location}
              index={i}
            />
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div
          style={{ y: y2 }}
          className="flex flex-col gap-4 md:gap-8 w-1/3 md:w-1/4 pt-0"
        >
          {images2.map((img, i) => (
            <ImageCard
              key={i}
              src={img.src}
              location={img.location}
              index={i}
            />
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div
          style={{ y: y3 }}
          className="flex flex-col gap-4 md:gap-8 w-1/3 md:w-1/4"
        >
          {images3.map((img, i) => (
            <ImageCard
              key={i}
              src={img.src}
              location={img.location}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
