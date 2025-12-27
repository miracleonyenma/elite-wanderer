import { destinations } from "./destinations-data";
import { marketplaceItems } from "./marketplace-data";
import { residencyPrograms } from "./residency-data";
import { investmentItems } from "./investments-data";

export interface CardinalData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroVideo?: string; // Optional video for hero
  data: any[];
  type: "travel" | "marketplace" | "residency" | "investment";
}

export const cardinalsData: Record<string, CardinalData> = {
  travel: {
    slug: "travel",
    title: "Personalized Travel",
    subtitle: "The World Awaits",
    description:
      "Every journey is meticulously crafted to your tastes. From private islands to chartered jets, we design experiences that leave lasting memories.",
    heroImage: "/images/products-investments/pexels-heyho-6394590.webp", // Using an existing image as placeholder
    heroVideo: "/videos/5167964-hd_1080_1920_30fps.mp4", // Same as homepage for now, or update
    data: destinations,
    type: "travel",
  },
  marketplace: {
    slug: "marketplace",
    title: "TEW Marketplace",
    subtitle: "Acquire The Exceptional",
    description:
      "A curated collection of rare assets, from off-market real estate to limited-edition timepieces and luxury vessels.",
    heroImage: "/images/products-investments/pexels-pixabay-358189.webp",
    data: marketplaceItems,
    type: "marketplace",
  },
  "global-mobility": {
    slug: "global-mobility",
    title: "Global Mobility & Residency",
    subtitle: "Citizens of the World",
    description:
      "Create a life without borders. We facilitate dual citizenship, golden visas, and strategic property acquisition to secure your global legacy.",
    heroImage: "/images/pexels-absstpg-35255039.webp",
    data: residencyPrograms,
    type: "residency",
  },
  investments: {
    slug: "investments",
    title: "Investment Showcase",
    subtitle: "Wealth & Legacy",
    description:
      "Access high-yield opportunities across emerging markets and luxury sectors. Exclusive deal flow for the discerning investor.",
    heroImage: "/images/products-investments/pexels-heyho-6394590.webp",
    data: investmentItems,
    type: "investment",
  },
};
