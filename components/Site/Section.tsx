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
    <section
      id={id}
      className={cn("py-24 md:py-32 site-section relative", className)}
    >
      <div
        className={cn(
          "wrapper mx-auto  ",
          !fullWidth && "max-w-screen-2xl px-6 md:px-12"
        )}
      >
        {children}
      </div>
    </section>
  );
}
