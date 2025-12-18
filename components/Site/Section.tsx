import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export function Section({
  children,
  className,
  id,
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32 site-section relative", className)}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        className={cn(
          "wrapper mx-auto  ",
          !fullWidth && "max-w-screen-2xl px-6 md:px-12"
        )}
      >
        {children}
      </motion.div>
    </section>
  );
}
