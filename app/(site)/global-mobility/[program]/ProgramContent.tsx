"use client";

import BlurText from "@/components/react-bits/BlurText";
import { Button } from "@/components/ui/aevr/button";
import { Section } from "@/components/Site/Section";
import { ImmigrationContactForm } from "@/components/Site/ImmigrationContactForm";
import Image from "next/image";
import { motion } from "motion/react";
import { Check, Globe, Building, Coins } from "lucide-react";
import type { ProgramData } from "../../programs-data";

export function ProgramContent({ data }: { data: ProgramData }) {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden bg-neutral-900 text-white">
        <Image
          src={data.heroImage}
          alt={data.country}
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="mb-4 text-xs font-bold tracking-[0.3em] text-white/70 uppercase">
            {data.type === "citizenship"
              ? "Citizenship Programs"
              : "Residency Programs"}
          </span>
          <BlurText
            text={data.country}
            className="mb-6 justify-center font-heading text-5xl font-bold uppercase md:text-7xl lg:text-8xl"
            delay={50}
          />
          <p className="max-w-3xl text-lg font-light text-neutral-300 md:text-xl">
            {data.tagline}
          </p>
        </div>
      </div>

      {/* Program Highlights */}
      <Section className="bg-white dark:bg-neutral-950">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase">
            Program Highlights
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-none border border-neutral-200 p-6 dark:border-neutral-800"
              >
                <div className="shrink-0 rounded-full bg-black p-2 dark:bg-white">
                  <Check className="h-4 w-4 text-white dark:text-black" />
                </div>
                <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Description */}
      <Section className="bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl leading-relaxed font-light text-neutral-700 md:text-2xl dark:text-neutral-300">
            {data.description}
          </p>
        </div>
      </Section>

      {/* Program Benefits */}
      <Section className="bg-white dark:bg-neutral-950">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase">
            Program Benefits
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="flex items-start gap-3 py-3"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Investment Options */}
      <Section className="bg-black text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-xs font-bold tracking-[0.3em] text-white/70 uppercase">
            Investment Options
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {data.investmentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="border border-white/20 p-10 text-center"
              >
                <div className="mb-6 flex justify-center">
                  {option.type === "contribution" ? (
                    <Coins className="h-10 w-10 text-white/70" />
                  ) : option.type === "real-estate" ? (
                    <Building className="h-10 w-10 text-white/70" />
                  ) : (
                    <Globe className="h-10 w-10 text-white/70" />
                  )}
                </div>
                <h3 className="mb-4 font-heading text-2xl font-bold uppercase">
                  {option.title}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-neutral-400">
                  {option.description}
                </p>
                <div className="font-heading text-5xl font-bold text-white">
                  {option.currency}
                  {option.startingPrice}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-neutral-400">
            To learn more about our residence and citizenship by investment
            solutions, one of our experienced immigration consultants is ready
            to assist you today.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              variant="default"
              className="rounded-none px-12 py-6 text-xs tracking-widest uppercase"
            >
              Let&apos;s take the first step together
            </Button>
          </div>
        </div>
      </Section>

      {/* Visa Free Countries */}
      <Section className="bg-white dark:bg-neutral-950">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase">
            Visa Free Countries
          </h2>
          <p className="mb-12 text-center text-xs text-neutral-500">
            *Visa on arrival | **Electronic Travel Authorization
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-3 lg:grid-cols-4">
            {data.visaFreeCountries.map((country, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-neutral-100 py-3 dark:border-neutral-800"
              >
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  {country.name}
                </span>
                {country.note && (
                  <span className="text-xs text-neutral-400">
                    {country.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <ImmigrationContactForm />
    </main>
  );
}
