"use client";

import { cn } from "@/lib/utils";
import { EventData } from "../../../events-data";
import Image from "next/image";
import { Button } from "@/components/ui/aevr/button";
// unused imports removed
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

export default function EventClient({ event }: { event: EventData }) {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src={event.heroImage}
          alt={event.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-4 font-heading text-5xl font-black tracking-tighter uppercase md:text-7xl lg:text-8xl">
              {event.title}
            </h1>
          </motion.div>

          {event.subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 max-w-2xl text-lg font-light tracking-wide md:text-2xl"
            >
              {event.subtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              {event.date}
            </span>
          </motion.div>
        </div>
      </section>

      {/* 2. EVENT INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 block text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
            {event.introduction.title}
          </span>
          <h2 className="mb-8 font-heading text-2xl leading-tight font-bold md:text-4xl">
            {event.title}
          </h2>
          <p className="text-lg leading-relaxed font-light text-neutral-600 md:text-xl dark:text-neutral-300">
            {event.introduction.content}
          </p>
        </div>
      </section>

      {/* 3. PICTURE GALLERY */}
      {event.gallery.length > 0 && (
        <section className="bg-neutral-100 py-12 dark:bg-neutral-900">
          {/* Reusing a similar style to the home page Personalized Travel carousel */}
          <Carousel className="w-full">
            <CarouselContent className="ml-0 gap-0">
              {event.gallery.map((img, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-0 md:basis-2/3 lg:basis-3/5"
                >
                  <div className="group relative h-[500px] w-full cursor-pointer overflow-hidden border-r border-white/10">
                    <Image
                      src={img}
                      alt={`Gallery ${idx}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/40" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 border-none bg-white/10 text-white hover:bg-white hover:text-black" />
            <CarouselNext className="right-4 border-none bg-white/10 text-white hover:bg-white hover:text-black" />
          </Carousel>
          <p className="mt-8 text-center text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
            Event Gallery
          </p>
        </section>
      )}

      {/* 4. EVENT GUIDELINES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-24">
        {/* Guidelines Highlights Grid */}
        {event.guidelineHighlights && (
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {event.guidelineHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className={cn(
                  "relative flex min-h-[240px] flex-col justify-end overflow-hidden p-8",
                  highlight.image
                    ? "text-white"
                    : "bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white",
                )}
              >
                {highlight.image && (
                  <>
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </>
                )}
                <div className="relative z-10">
                  <h4 className="mb-2 font-heading text-2xl font-bold uppercase">
                    {highlight.title}
                  </h4>
                  <p className="text-sm font-light tracking-widest uppercase opacity-80">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Removed colorful blocks, replaced with clean layout */}
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 md:p-12 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="mb-8 border-b pb-4 text-sm font-bold tracking-widest text-neutral-500 uppercase dark:border-neutral-700">
            {event.guidelines.title}
          </h3>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {event.guidelines.items.map((item, idx) => (
              <div key={idx}>
                <p className="mb-1 text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                  {item.label}
                </p>
                <p className="text-base font-medium md:text-lg">{item.value}</p>
              </div>
            ))}
          </div>

          {event.guidelines.closing && (
            <div className="mt-12 border-t border-neutral-200 pt-8 text-center dark:border-neutral-700">
              <p className="text-lg font-light italic">
                {event.guidelines.closing}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 5. FURTHER INFORMATION */}
      <section className="bg-white px-6 py-20 dark:bg-black">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 block text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
            {event.furtherInfo.title}
          </span>
          <p className="text-lg leading-relaxed font-light text-neutral-600 md:text-xl dark:text-neutral-300">
            {event.furtherInfo.content}
          </p>
        </div>
      </section>

      {/* 6. EVENT VIDEO */}
      {event.videoUrl && (
        <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden bg-black md:h-[80vh]">
          <video
            src={event.videoUrl}
            className="h-full w-full object-cover opacity-80"
            controls
            playsInline
            muted
            loop
            autoPlay
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>
      )}

      {/* 7. BOOKING WIDGET */}
      <section className="relative z-10 -mt-20 bg-white px-6 py-24 text-center dark:bg-neutral-950">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center rounded-sm border border-neutral-100 bg-white p-8 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="mb-8 text-sm font-bold tracking-[0.2em] text-neutral-500 uppercase">
              Plan your experience
            </h2>

            <div className="mb-8 flex w-full flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex w-full flex-1 flex-col items-start border-b border-neutral-200 pb-4 md:border-r md:border-b-0 md:pr-4 md:pb-0 dark:border-neutral-700">
                <span className="mb-1 text-xs tracking-wider text-neutral-400 uppercase">
                  Date
                </span>
                <span className="font-heading text-xl font-bold">
                  {event.date}
                </span>
              </div>
              <div className="flex w-full flex-1 flex-col items-start border-b border-neutral-200 pb-4 md:border-r md:border-b-0 md:pr-4 md:pb-0 dark:border-neutral-700">
                <span className="mb-1 text-xs tracking-wider text-neutral-400 uppercase">
                  Guests
                </span>
                {/* Mock Select */}
                <div className="flex w-full items-center justify-between">
                  <span className="font-heading text-xl font-bold">
                    2 Guests
                  </span>
                  <span className="text-xs text-neutral-400">▼</span>
                </div>
              </div>
              <Button className="w-full rounded-none bg-[#4ADE80] px-12 py-6 font-bold tracking-wider text-black uppercase hover:bg-[#22c55e] md:w-auto">
                Search
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold tracking-widest text-neutral-400 uppercase">
              <span className="flex items-center gap-2">
                <span className="text-[#4ADE80]">✓</span> Instant Confirmation
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#4ADE80]">✓</span> Authentic Reviews
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#4ADE80]">✓</span> 100% Secure
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MORE GALLERY */}
      {event.moreGallery && (
        <section className="bg-neutral-50 px-4 py-20 md:px-8 dark:bg-neutral-900">
          <div className="mx-auto grid max-w-7xl auto-rows-[300px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {event.moreGallery.map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "group relative overflow-hidden",
                  idx === 0 ? "md:col-span-2" : "",
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 translate-y-2 text-white transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="mb-1 font-heading text-xl font-bold uppercase">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs font-light opacity-80">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. FAQ */}
      {event.faq.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold uppercase">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {event.faq.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b border-neutral-200 dark:border-neutral-800"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-medium hover:text-neutral-500 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base font-light text-neutral-600 dark:text-neutral-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}
    </div>
  );
}
