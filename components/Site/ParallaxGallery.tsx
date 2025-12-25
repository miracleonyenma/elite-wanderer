import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { residencyPrograms } from "@/app/(site)/residency-data";
import { ArrowRight } from "lucide-react";

export function ParallaxGallery({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Split data into 3 columns dynamically
  const totalItems = residencyPrograms.length;
  const itemsPerCol = Math.ceil(totalItems / 3);

  const col1 = residencyPrograms.slice(0, itemsPerCol);
  const col2 = residencyPrograms.slice(itemsPerCol, itemsPerCol * 2);
  const col3 = residencyPrograms.slice(itemsPerCol * 2);

  const ImageCard = ({
    item,
  }: {
    item: (typeof residencyPrograms)[0];
    index: number;
  }) => (
    <div className="group relative aspect-3/4 w-full cursor-pointer overflow-hidden">
      <Image
        src={item.image}
        alt={`${item.location} - ${item.type}`}
        fill
        className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 focus:scale-110"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
        <h4 className="translate-y-4 transform font-heading text-2xl font-bold text-white uppercase transition-transform duration-500 md:translate-y-8 md:group-hover:translate-y-0">
          {item.location}
        </h4>
        <p className="mb-4 translate-y-4 transform text-xs font-bold tracking-wide text-neutral-300 transition-transform delay-75 duration-500 md:translate-y-8 md:group-hover:translate-y-0">
          {item.type}
        </p>
        <div className="flex translate-y-4 transform items-center gap-2 pt-2 transition-transform delay-100 duration-500 md:translate-y-8 md:group-hover:translate-y-0">
          <ArrowRight className="size-4 text-white" />
          <p className="text-xs font-bold tracking-widest text-white uppercase">
            {item.price}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-neutral-100 pt-24 dark:bg-neutral-900",
        className,
      )}
    >
      <div className="mx-auto mb-24 max-w-screen-2xl px-6 md:px-12">
        <h2 className="mb-4 text-center text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase dark:text-neutral-400">
          Second Citizenship & Passports
        </h2>
        <h3 className="text-center font-heading text-2xl font-bold text-neutral-900 uppercase md:text-5xl dark:text-white">
          Global Mobility and Residency
        </h3>
      </div>

      <div className="flex h-[75vh] justify-center gap-4 overflow-hidden pb-24 md:h-[200vh] md:gap-8">
        {/* Column 1 */}
        <motion.div
          style={{ y: y1 }}
          className="flex w-1/3 flex-col gap-4 md:w-1/4 md:gap-8"
        >
          {col1.map((item, i) => (
            <ImageCard key={i} item={item} index={i} />
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div
          style={{ y: y2 }}
          className="flex w-1/3 flex-col gap-4 pt-0 md:w-1/4 md:gap-8"
        >
          {col2.map((item, i) => (
            <ImageCard key={i} item={item} index={i} />
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div
          style={{ y: y3 }}
          className="flex w-1/3 flex-col gap-4 md:w-1/4 md:gap-8"
        >
          {col3.map((item, i) => (
            <ImageCard key={i} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
