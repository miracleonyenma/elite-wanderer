// ./components/Site/Hero.tsx
"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/aevr/button";
import BlurText from "../react-bits/BlurText";
import { useState, useRef, useEffect } from "react";
import { Pause, Play } from "lucide-react";

const VIDEOS = [
  "/videos/14900479_1080_1920_30fps.mp4",
  "/videos/14900532_1080_1920_30fps.mp4",
];

export function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % VIDEOS.length);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentVideoIndex]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-900 text-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover opacity-60 transition-opacity duration-1000"
        onEnded={handleVideoEnded}
      >
        <source src={VIDEOS[currentVideoIndex]} type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="space-y-6 max-w-4xl"
        >
          <h2 className="  text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-neutral-300">
            Be Borderless
          </h2>
          <div className="font-heading text-4xl max-md:flex-col max-md:items-center md:text-5xl lg:text-7xl font-bold tracking-tight uppercase leading-none flex justify-center gap-4 mb-4">
            <BlurText text="The" delay={150} />
            <BlurText text="Elite" delay={150} />
            <BlurText text="Wanderer" className="text-white/80" delay={150} />
          </div>
          <p className="max-w-3xl mx-auto md:text-xl text-neutral-200 font-light leading-relaxed">
            Curating the extraordinary for the world&apos;s most discerning
            individuals. Global mobility, strategic investment access, private
            membership, personalized luxury travel, and elite assets delivered
            without limits.
          </p>

          <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="uppercase tracking-widest bg-white dark:bg-white text-black dark:text-black hover:bg-app-theme-200 hover:dark:bg-app-theme-200 lg:px-8 lg:py-6 text-sm"
            >
              Request Private Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="uppercase tracking-widest lg:px-8 lg:py-6 text-sm border-white dark:border-white text-white hover:bg-white dark:hover:bg-white dark:hover:text-black hover:text-black rounded-none"
            >
              Explore Our World
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 right-12 z-20">
        <button
          onClick={togglePlay}
          className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
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
