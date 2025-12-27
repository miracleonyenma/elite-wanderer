"use client";
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
        "group relative flex min-h-[500px] w-full flex-col justify-end overflow-hidden p-8 transition-colors duration-500 md:p-12",
        dark
          ? "bg-neutral-900 text-white"
          : "bg-white text-black hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800",
        className,
      )}
    >
      {/* Background Image (Optional) */}
      {image && (
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className={cn("relative z-10 space-y-4", image && "text-white")}>
        {label && (
          <span className="mb-2 inline-block pb-1 text-xs font-bold tracking-[0.2em] uppercase">
            {label}
          </span>
        )}
        <h3 className="font-heading text-3xl font-bold tracking-tight uppercase md:text-4xl">
          {title}
        </h3>
        <p
          className={cn(
            "max-w-md text-sm leading-relaxed opacity-80 md:text-base",
            image
              ? "text-neutral-200"
              : "text-neutral-600 dark:text-neutral-400",
          )}
        >
          {description}
        </p>

        <div className="translate-y-0 transform pt-6 opacity-100 transition-all duration-500 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <Button
            variant={image ? "outline" : "default"}
            className={cn(
              "rounded-none text-xs tracking-widest uppercase",
              image &&
                "text-white hover:bg-white hover:text-black dark:border-white/30 dark:hover:bg-white dark:hover:text-black",
            )}
          >
            Learn More
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
