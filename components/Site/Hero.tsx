"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/aevr/button";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-900 text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover opacity-60"
      >
        <source src="/videos/14900479_1080_1920_30fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="space-y-6 max-w-4xl"
        >
          <h2 className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-neutral-300">
            Define Your Legend
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-none">
            Elite <span className="text-white/80">Wanderer</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-neutral-200 font-light leading-relaxed">
            Curating the extraordinary for the world&apos;s most discerning
            individuals. Travel, relocation, and lifestyle without limits.
          </p>

          <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="uppercase tracking-widest px-8 py-6 text-sm bg-white text-black hover:bg-neutral-200"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="uppercase tracking-widest px-8 py-6 text-sm border-white text-white hover:bg-white hover:text-black rounded-none"
            >
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/70">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/30 overflow-hidden">
          <div className="w-full h-1/2 bg-white animate-scroll-indicator" />
        </div>
      </motion.div>
    </div>
  );
}
