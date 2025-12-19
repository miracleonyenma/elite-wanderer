"use client";

import { Section } from "./Section";
import BlurText from "../react-bits/BlurText";
import Image from "next/image";
import { Button } from "@/components/ui/aevr/button";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "The Renaissance of Private Rail",
    subtitle:
      "Why the world's elite are trading private jets for slow travel on steel rails.",
    date: "Dec 12, 2024",
    readTime: "5 min read",
    image: "/images/products-investments/pexels-trvlust-3221163.webp", // Using available image
  },
  {
    title: "Second Citizenship: The Ultimate Insurance",
    subtitle:
      "Navigating the complex landscape of Golden Visas in a changing geopolitical world.",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    image: "/images/products-investments/pexels-pixabay-358189.webp",
  },
  {
    title: "Curating the Legacy Collection",
    subtitle:
      "A guide to investing in high-value timepieces and classic cars for long-term appreciation.",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    image: "/images/products-investments/pexels-mali-42091.webp",
  },
];

export function BlogList() {
  return (
    <Section className="bg-white dark:bg-black py-24 md:py-32" fullWidth>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black/10 dark:border-white/10 pb-8">
          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-neutral-500 dark:text-neutral-400">
              The Journal
            </h2>
            <BlurText
              text="Insights & Intelligence"
              className="font-heading text-4xl md:text-5xl font-bold uppercase text-neutral-900 dark:text-white"
              delay={50}
            />
          </div>
          <Button
            variant="ghost"
            className="md:inline-flex uppercase tracking-widest text-xs hidden text-black dark:text-white hover:opacity-70 p-0"
          >
            Read All Articles
          </Button>
        </div>

        <div className="space-y-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row gap-8 md:items-center border-b border-black/5 dark:border-white/5 pb-12 last:border-0"
            >
              {/* Thumbnail */}
              <div className="relative w-full md:w-1/4 aspect-video md:aspect-3/2 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col md:flex-row justify-between md:items-center gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-neutral-500">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 bg-neutral-500 rounded-full" />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase text-neutral-900 dark:text-white group-hover:text-app-theme-600 dark:group-hover:text-app-theme-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-light text-sm md:text-base leading-relaxed">
                    {article.subtitle}
                  </p>
                </div>

                <div className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 md:-translate-x-4 group-hover:translate-x-0">
                  <Button className="rounded-full w-12 h-12 p-0 flex items-center justify-center bg-transparent border border-black/20 dark:border-white/20 text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                    <ArrowUpRight size={20} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 md:hidden">
          <Button
            variant="ghost"
            className="uppercase tracking-widest text-xs text-black dark:text-white hover:opacity-70 p-0"
          >
            Read All Articles
          </Button>
        </div>
      </div>
    </Section>
  );
}
