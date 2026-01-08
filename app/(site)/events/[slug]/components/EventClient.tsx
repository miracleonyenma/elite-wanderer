"use client";

import { cn } from "@/lib/utils";
import { EventData } from "../../../events-data";
import Image from "next/image";
import { Button } from "@/components/ui/aevr/button";
import { useState, useEffect } from "react";
import { EventCountdown } from "@/components/Site/EventCountdown";
import { BrandReviews } from "@/components/Site/BrandReviews";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
// unused imports removed
import {
  Carousel,
  CarouselApi,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "motion/react";

export default function EventClient({ event }: { event: EventData }) {
  const router = useRouter();
  const [guests, setGuests] = useState(1);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState<"form" | "success">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Carousel state
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Determine the API URL based on environment
      // In production (static export), we hit the deployed Vercel app
      // In development, we hit the local API
      const apiUrl =
        process.env.NODE_ENV === "development"
          ? "/api/bookings/create"
          : "https://elite-wanderer.vercel.app/api/bookings/create";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: event.id,
          guests,
          customer: formData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }

      setBookingStep("success");

      if (data.paymentLink) {
        toast.success("Redirecting to secure payment...");
        setTimeout(() => {
          router.push(data.paymentLink);
        }, 2000);
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Something went wrong. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSearch = () => {
    if (event.booking.link && event.booking.link !== "#") {
      window.open(event.booking.link, "_blank");
    } else {
      setIsBookingOpen(true);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsBookingOpen(open);
    if (!open) {
      // Reset form on close after a delay
      setTimeout(() => {
        setBookingStep("form");
        setFormData({ name: "", email: "", phone: "" });
      }, 300);
    }
  };

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* Video or Image Background */}
        {event.heroVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 h-full w-full object-cover"
          >
            <source src={event.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={event.heroImage}
            alt={event.title}
            fill
            priority
            className="object-cover"
          />
        )}
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

          {/* Countdown Timer */}
          {event.targetDate && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8"
            >
              <EventCountdown targetDate={event.targetDate} />
            </motion.div>
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

      {/* 4. EVENT GUIDELINES */}
      <section className="mx-auto max-w-392 px-6 py-20 md:px-12 lg:px-24">
        {/* Guidelines Highlights Grid */}
        {event.guidelineHighlights && (
          <div className="relative mb-8 pb-12">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent className="">
                {event.guidelineHighlights.map((highlight, idx) => (
                  <CarouselItem
                    key={idx}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    {highlight.link ? (
                      <Link href={highlight.link} className="block h-full">
                        <div
                          className={cn(
                            "relative flex min-h-[440px] flex-col justify-end overflow-hidden p-8 transition-transform duration-500 hover:scale-[1.02]",
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
                          <div
                            className={`relative z-10 flex min-h-[440px] flex-col justify-end gap-1`}
                          >
                            {highlight.tag && (
                              <span className="mb-auto block text-xl font-bold tracking-widest uppercase opacity-70">
                                {highlight.tag}
                              </span>
                            )}
                            <h4 className="mb-2 font-heading text-2xl font-bold uppercase">
                              {highlight.title}
                            </h4>
                            <p className="text-sm font-light tracking-widest uppercase opacity-80">
                              {highlight.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="h-full">
                        <div
                          className={cn(
                            "relative flex min-h-[440px] flex-col justify-end overflow-hidden p-8 transition-transform duration-500 hover:scale-[1.02]",
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
                          <div
                            className={`relative z-10 flex min-h-[440px] flex-col justify-end gap-1`}
                          >
                            {highlight.tag && (
                              <span className="mb-auto block text-xl font-bold tracking-widest uppercase opacity-70">
                                {highlight.tag}
                              </span>
                            )}
                            <h4 className="mb-2 font-heading text-2xl font-bold uppercase">
                              {highlight.title}
                            </h4>
                            <p className="text-sm font-light tracking-widest uppercase opacity-80">
                              {highlight.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 hidden md:flex" />
              <CarouselNext className="right-4 hidden md:flex" />
            </Carousel>
            {/* Dots Indicator */}
            <div className="absolute right-0 bottom-0 left-0 z-20 flex justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "h-1.5 cursor-pointer rounded-full transition-all duration-300",
                    index + 1 === current
                      ? "w-8 bg-neutral-900 dark:bg-white"
                      : "w-1.5 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-500",
                  )}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Removed colorful blocks, replaced with clean layout */}
        <div className="mx-auto max-w-6xl rounded-lg border border-neutral-200 bg-neutral-50 p-8 md:p-12 dark:border-neutral-800 dark:bg-neutral-900">
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

          {/* Countdown in Guidelines */}
          {event.targetDate && (
            <div className="mt-8 border-t border-neutral-200 pt-8 dark:border-neutral-700">
              <p className="mb-4 text-center text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
                Event Starts In
              </p>
              <EventCountdown
                targetDate={event.targetDate}
                className="flex justify-center"
              />
            </div>
          )}
        </div>
      </section>

      {/* 5. MESSAGE FROM THE CURATOR */}
      <section className="bg-theme-800 px-6 py-24 text-white dark:bg-theme-800">
        <div className="mx-auto max-w-4xl text-center">
          {/* Curator Photo */}
          {event.curatorMessage.image && (
            <div className="mb-8 flex justify-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white/30">
                <Image
                  src={event.curatorMessage.image}
                  alt={event.curatorMessage.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Quote */}
          <blockquote className="mb-8">
            <p className="text-xl leading-relaxed font-light md:text-2xl lg:text-3xl">
              &ldquo;{event.curatorMessage.quote}&rdquo;
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="space-y-1">
            <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-70">
              A message from
            </p>
            <p className="font-heading text-lg font-bold">
              {event.curatorMessage.name}
            </p>
            <p className="text-sm opacity-70">{event.curatorMessage.title}</p>
          </div>
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
      <section
        id="booking"
        className="relative z-10 bg-white px-6 py-24 text-center dark:bg-neutral-950"
      >
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
                {/* Mini countdown */}
                {event.targetDate && (
                  <div className="mt-2">
                    <EventCountdown
                      targetDate={event.targetDate}
                      className="origin-left scale-75"
                    />
                  </div>
                )}
              </div>
              <div className="flex w-full flex-1 flex-col items-start border-b border-neutral-200 pb-4 md:border-r md:border-b-0 md:pr-4 md:pb-0 dark:border-neutral-700">
                <span className="mb-1 text-xs tracking-wider text-neutral-400 uppercase">
                  Guests
                </span>
                <div className="relative flex w-full items-center justify-between">
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="z-10 w-full cursor-pointer appearance-none bg-transparent text-left font-heading text-xl font-bold focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num} className="text-black">
                        {num} Guest{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-0 text-xs text-neutral-400">
                    ▼
                  </span>
                </div>
              </div>

              <div className="flex w-full flex-col items-center gap-2 md:w-auto md:items-end">
                {event.booking.price && (
                  <div className="mr-4 hidden border-r border-neutral-200 pr-4 text-right md:block dark:border-neutral-700">
                    <p className="mb-1 text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                      Price
                    </p>
                    <p className="text-sm font-bold">{event.booking.price}</p>
                  </div>
                )}
                <Button
                  onClick={handleSearch}
                  className="w-full rounded-none px-12 py-6 font-bold tracking-wider uppercase md:w-auto"
                >
                  {event.booking.link && event.booking.link !== "#"
                    ? "Book Now"
                    : "Request Spot"}
                </Button>
                {event.booking.price && (
                  <div className="mt-2 w-full text-center md:hidden">
                    <p className="text-sm font-bold">{event.booking.price}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold tracking-widest text-neutral-400 uppercase">
              <span className="flex items-center gap-2">
                <span className="text-thebg-theme-800">✓</span> Instant
                Confirmation
              </span>
              <span className="flex items-center gap-2">
                <span className="text-thebg-theme-800">✓</span> Authentic
                Reviews
              </span>
              <span className="flex items-center gap-2">
                <span className="text-thebg-theme-800">✓</span> 100% Secure
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <Dialog open={isBookingOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="border-neutral-200 bg-white text-black sm:max-w-[425px] dark:border-neutral-800 dark:bg-neutral-900 dark:text-white">
          {bookingStep === "form" ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl uppercase">
                  Reserve your spot
                </DialogTitle>
                <DialogDescription>
                  Requesting {guests} ticket{guests > 1 ? "s" : ""} for{" "}
                  {event.title}.
                </DialogDescription>
              </DialogHeader>
              <form className="grid gap-4 py-4" onSubmit={handleBookingSubmit}>
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold tracking-wider text-neutral-500 uppercase"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-b border-neutral-300 bg-transparent py-2 transition-colors outline-none focus:border-black dark:border-neutral-700 dark:focus:border-white"
                    placeholder="Full Name"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold tracking-wider text-neutral-500 uppercase"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-b border-neutral-300 bg-transparent py-2 transition-colors outline-none focus:border-black dark:border-neutral-700 dark:focus:border-white"
                    placeholder="name@example.com"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="phone"
                    className="text-xs font-bold tracking-wider text-neutral-500 uppercase"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-b border-neutral-300 bg-transparent py-2 transition-colors outline-none focus:border-black dark:border-neutral-700 dark:focus:border-white"
                    placeholder="+123..."
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full rounded-none bg-black py-6 font-bold tracking-widest text-white uppercase hover:bg-neutral-800 disabled:opacity-50 dark:bg-white dark:text-black"
                >
                  {isSubmitting ? "Processing..." : "Complete Request"}
                </Button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-theme-800">
                <span className="text-3xl text-black">✓</span>
              </div>
              <h3 className="mb-2 font-heading text-2xl font-bold uppercase">
                Request Received
              </h3>
              <p className="mb-8 font-light text-neutral-500">
                Thank you! Our concierge team will contact you shortly to
                finalize your reservation for {event.title}.
              </p>
              <Button
                onClick={() => handleOpenChange(false)}
                variant="ghost"
                className="font-bold tracking-widest uppercase"
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

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

      {/* 9. PICTURE GALLERY */}
      {event.gallery.length > 0 && (
        <section className="py-12">
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

      {/* 10. TRUSTED PARTNERS */}
      <BrandReviews />

      {/* 11. FAQ */}
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
