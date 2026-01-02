"use client";

import { motion } from "motion/react";
import {
  User,
  Phone,
  Mail,
  Globe,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/aevr/button";

export function ImmigrationContactForm() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-neutral-950">
      <div className="flex flex-col md:flex-row">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] w-full md:h-auto md:w-1/2"
        >
          <Image
            src="/images/global-residency/uae.jpg.webp" // Using UAE/Dubai image as reference
            alt="Contact Us"
            fill
            className="object-cover"
          />
          {/* Subtle overlay to match the premium feel */}
          <div className="absolute inset-0 bg-neutral-900/10" />
        </motion.div>

        {/* Right Side: Form */}
        <div className="w-full bg-white px-6 py-20 md:w-1/2 md:px-16 lg:px-24 dark:bg-neutral-950">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <h2 className="mb-2 font-heading text-5xl font-light text-neutral-800 dark:text-white">
              Have questions? <br />
              <span className="text-neutral-500">Get in touch!</span>
            </h2>
            <p className="mb-12 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
              Get a Call back from our Immigration Advisors today!
            </p>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Full Name */}
                <div className="group relative">
                  <div className="flex items-center gap-3 border-b border-neutral-200 py-3 transition-colors group-focus-within:border-black dark:border-neutral-800 dark:group-focus-within:border-white">
                    <User className="h-4 w-4 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="FULL NAME"
                      className="w-full bg-transparent text-xs tracking-widest outline-none placeholder:text-neutral-400 dark:text-white"
                    />
                  </div>
                </div>

                {/* Resident Country */}
                <div className="group relative">
                  <div className="flex items-center gap-3 border-b border-neutral-200 py-3 transition-colors group-focus-within:border-black dark:border-neutral-800 dark:group-focus-within:border-white">
                    <Globe className="h-4 w-4 text-neutral-400" />
                    <select className="w-full appearance-none bg-transparent text-xs tracking-widest outline-none dark:text-white">
                      <option value="" disabled selected>
                        RESIDENT COUNTRY
                      </option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="nigeria">Nigeria</option>
                      <option value="uae">UAE</option>
                      {/* Add more as needed */}
                    </select>
                  </div>
                </div>

                {/* Email */}
                <div className="group relative">
                  <div className="flex items-center gap-3 border-b border-neutral-200 py-3 transition-colors group-focus-within:border-black dark:border-neutral-800 dark:group-focus-within:border-white">
                    <Mail className="h-4 w-4 text-neutral-400" />
                    <input
                      type="email"
                      placeholder="EMAIL"
                      className="w-full bg-transparent text-xs tracking-widest outline-none placeholder:text-neutral-400 dark:text-white"
                    />
                  </div>
                </div>

                {/* Program Interest */}
                <div className="group relative">
                  <div className="flex items-center gap-3 border-b border-neutral-200 py-3 transition-colors group-focus-within:border-black dark:border-neutral-800 dark:group-focus-within:border-white">
                    <Briefcase className="h-4 w-4 text-neutral-400" />
                    <select className="w-full appearance-none bg-transparent text-xs tracking-widest outline-none dark:text-white">
                      <option value="" disabled selected>
                        PROGRAM INTEREST
                      </option>
                      <option value="citizenship">
                        Citizenship by Investment
                      </option>
                      <option value="residency">Residency by Investment</option>
                      <option value="property">Luxury Property</option>
                    </select>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="group relative">
                  <div className="flex items-center gap-3 border-b border-neutral-200 py-3 transition-colors group-focus-within:border-black dark:border-neutral-800 dark:group-focus-within:border-white">
                    <Phone className="h-4 w-4 text-neutral-400" />
                    <input
                      type="tel"
                      placeholder="PHONE NUMBER"
                      className="w-full bg-transparent text-xs tracking-widest outline-none placeholder:text-neutral-400 dark:text-white"
                    />
                  </div>
                </div>

                {/* Whatsapp Number */}
                <div className="group relative">
                  <div className="flex items-center gap-3 border-b border-neutral-200 py-3 transition-colors group-focus-within:border-black dark:border-neutral-800 dark:group-focus-within:border-white">
                    <MessageSquare className="h-4 w-4 text-neutral-400" />
                    <input
                      type="tel"
                      placeholder="WHATSAPP NUMBER"
                      className="w-full bg-transparent text-xs tracking-widest outline-none placeholder:text-neutral-400 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Button className="w-full rounded-none bg-black py-8 text-xs font-bold tracking-[0.3em] text-white uppercase transition-all hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                  Submit
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
