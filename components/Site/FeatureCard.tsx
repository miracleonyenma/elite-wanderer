// ./components/Site/FeatureCard.tsx
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/aevr/button";
import { motion } from "motion/react";

interface FeatureCardProps {
  title: string;
  description: string;
  image?: string; // URL for image
  label?: string;
  className?: string;
  dark?: boolean;
}

export function FeatureCard({
  title,
  description,
  image,
  label,
  className,
  dark = false,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col justify-end p-8 md:p-12 min-h-[500px] w-full overflow-hidden transition-colors duration-500",
        dark
          ? "bg-neutral-900 text-white"
          : "bg-white hover:bg-neutral-50 text-black",
        className
      )}
    >
      {/* Background Image (Optional) */}
      {image && (
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className={cn("relative z-10 space-y-4", image && "text-white")}>
        {label && (
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase  pb-1 mb-2">
            {label}
          </span>
        )}
        <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight">
          {title}
        </h3>
        <p
          className={cn(
            "max-w-md text-sm md:text-base leading-relaxed opacity-80",
            image
              ? "text-neutral-200"
              : "text-neutral-600 dark:text-neutral-400"
          )}
        >
          {description}
        </p>

        <div className="pt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <Button
            variant={image ? "outline" : "default"}
            className={cn(
              "uppercase text-xs tracking-widest rounded-none",
              image && " text-white hover:bg-white hover:text-black"
            )}
          >
            Learn More
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
