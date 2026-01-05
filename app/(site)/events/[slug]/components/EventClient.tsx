"use client";

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
          <div className="mx-auto max-w-7xl px-6">
            <Carousel className="w-full">
              <CarouselContent>
                {event.gallery.map((img, idx) => (
                  <CarouselItem key={idx} className="md:basis-2/3 lg:basis-1/2">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={img}
                        alt={`Gallery ${idx}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            <p className="mt-6 text-center text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
              Picture Gallery
            </p>
          </div>
        </section>
      )}

      {/* 4. EVENT GUIDELINES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-24">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="bg-[#5EEAD4] p-12 text-black">
            <h3 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
              Opening hours
            </h3>
            <p className="font-light">artbasel.com</p>
          </div>
          <div className="bg-[#FDE047] p-12 text-black">
            <h3 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
              Tickets online
            </h3>
            <p className="font-light">artbasel.com</p>
          </div>
        </div>

        <div className="mt-16 rounded-lg border border-neutral-200 bg-neutral-50 p-8 md:p-12 dark:border-neutral-800 dark:bg-neutral-900">
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
      <section className="bg-neutral-50 px-6 py-20 dark:bg-neutral-950">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 block text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
            {event.furtherInfo.title}
          </span>
          <p className="text-lg leading-relaxed font-light text-neutral-600 md:text-xl dark:text-neutral-300">
            {event.furtherInfo.content}
          </p>
        </div>
      </section>

      {/* 6. TICKET BOOKING */}
      <section className="relative overflow-hidden bg-black px-6 py-20 text-white">
        <div className="absolute inset-0 bg-neutral-900/50" />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 border border-white/20 p-8 backdrop-blur-sm md:flex-row md:p-12">
          <div>
            <span className="mb-2 block text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
              {event.booking.title}
            </span>
            <h3 className="mb-2 font-heading text-3xl font-bold">
              {event.booking.type}
            </h3>
            <p className="font-light text-neutral-300">
              Includes: {event.booking.includes}
            </p>
          </div>
          <div className="flex min-w-[200px] flex-col gap-2">
            {event.booking.capacity && (
              <div className="flex justify-between text-sm text-neutral-400">
                <span>Capacity</span>
                <span>{event.booking.capacity}</span>
              </div>
            )}
            {event.booking.ticketsAvailable && (
              <div className="flex justify-between text-sm font-bold text-white">
                <span>Available</span>
                <span>{event.booking.ticketsAvailable}</span>
              </div>
            )}
            <Button className="mt-4 w-full rounded-none bg-white py-6 font-bold tracking-widest text-black uppercase hover:bg-neutral-200">
              Buy Now
            </Button>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
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
