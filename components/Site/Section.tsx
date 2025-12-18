import { cn } from "@/lib/utils";

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
    <section id={id} className={cn("py-24 md:py-32 relative", className)}>
      <div
        className={cn(
          "mx-auto px-6 md:px-12",
          !fullWidth && "max-w-screen-2xl"
        )}
      >
        {children}
      </div>
    </section>
  );
}
