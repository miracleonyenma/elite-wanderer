import { destinations } from "./destinations-data";
import { marketplaceItems } from "./marketplace-data";
import { residencyPrograms } from "./residency-data";
import { investmentItems } from "./investments-data";
import { platinumItems } from "./platinum-data";

export interface BaseItem {
  title?: string;
  description?: string;
  image: string;
}

export interface DestinationItem extends BaseItem {
  subtitle?: string;
  price?: string;
  buttonText?: string;
  type?: string;
}

export interface MarketplaceItem extends BaseItem {
  label?: string;
  link?: string;
}

export interface ResidencyItem extends BaseItem {
  location?: string;
  type?: string;
  price?: string;
}

export interface InvestmentItem extends BaseItem {
  label?: string;
  dark?: boolean;
}

export type CardinalItem =
  | DestinationItem
  | MarketplaceItem
  | ResidencyItem
  | InvestmentItem;

export interface CardinalData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroVideo?: string; // Optional video for hero
  data: CardinalItem[];
  type: "travel" | "marketplace" | "residency" | "investment" | "platinum";
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
  "platinum-club": {
    slug: "platinum-club",
    title: "TEW Platinum Club",
    subtitle: "The Private Club",
    description:
      "Join an elite circle of global elite citizens. Access private events, networks, and privileges reserved for the few. Your passport to the extraordinary.",
    heroImage: "/images/pexels-tracvu-35255960.webp",
    heroVideo: "/videos/5167964-hd_1080_1920_30fps.mp4",
    data: platinumItems,
    type: "travel", // Reusing travel/create layout for now or generic
  },
};
