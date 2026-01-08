export interface EventData {
  id: string; // slug
  title: string;
  subtitle?: string;
  date: string;
  dateTime?: string;
  targetDate?: string; // ISO date string for countdown (e.g., "2026-02-07T14:00:00")
  location: string;
  heroImage: string;
  heroVideo?: string; // Optional video URL for hero background
  description: string; // Short description for the list page
  introduction: {
    title: string;
    content: string;
  };
  gallery: string[];
  guidelines: {
    title: string;
    items: {
      label: string;
      value: string;
    }[];
    closing?: string;
  };
  guidelineHighlights?: {
    tag?: string;
    title: string;
    description: string;
    image?: string;
    link?: string;
  }[];
  curatorMessage: {
    quote: string;
    name: string;
    title: string;
    image?: string;
  };
  booking: {
    title: string;
    type: string;
    includes: string;
    link: string;
    capacity?: string;
    ticketsAvailable?: string;
    price?: string;
    priceValue?: number; // Numeric price in kobo/minor units or base currency? Let's assume base currency (Naira) for clarity, Paystack expects kobo usually but we can convert. Let's store as bare number.
  };
  faq: {
    question: string;
    answer: string;
  }[];
  videoUrl?: string;
  moreGallery?: {
    title: string;
    image: string;
    description?: string;
    link?: string;
  }[];
  contact?: {
    whatsappNumber?: string;
    email?: string;
  };
}

export const activeEvents: EventData[] = [
  {
    id: "red-and-bougie",
    title: "Red & Bougie",
    subtitle: "A Private Evening for Strategic Networking and Investment",
    date: "7 February 2026",
    dateTime: "Saturday, 7 February 2026",
    targetDate: "2026-02-07T14:00:00",
    location: "Lagos",
    heroImage: "/images/jfa-long-island-87-15664711/2200xxs.jpg", // Using the image from the existing page
    heroVideo: "/videos/5167964-hd_1080_1920_30fps.mp4",
    description:
      "Valentine experience that flows effortlessly from an elegant sea-front dining moment into a serene sunset yacht sail across the Lagos Lagoon, concluding with an intimate after-sail social lounge at the Lagos Motor Boat Club. Designed for couples and refined socialites, the experience blends fine dining, scenic sailing, and relaxed conversations in a setting of understated luxury.",
    introduction: {
      title: "EVENT INTRODUCTION",
      content:
        "Exclusive experience crafted for discerning professionals, investors, and socialites who value luxury, meaningful connections, and high-level opportunities. The evening unfolds from a refined luxury dining experience, transitions into a private boat cruise, and concludes with an intimate setting designed to foster networking, investment conversations, and lasting connections.",
    },
    gallery: [
      "/images/jfa-long-island-87-15664711/2200xxs.jpg", // Placeholder - reusing existing ones or new placeholders
      "/images/pexels-lamkien-35255292.webp",
      "/images/pexels-freestockpro-1008155.webp",
    ],
    guidelines: {
      title: "EVENT GUIDELINES (WHAT TO KNOW)",
      items: [
        { label: "Date", value: "Saturday, 7 February 2026" },
        { label: "Opening Time", value: "Guests arrive from 2:00 PM" },
        {
          label: "Venue Start Point",
          value: "Selected Sea-Front Restaurant, Lagos",
        },
        {
          label: "Experience Flow",
          value: "Shore → Yacht Sail → Private Club Lounge",
        },
        {
          label: "Dress Code",
          value: "Elegant Chic / Resort Luxe / A Touch of Red",
        },
        { label: "Tickets Left", value: "5 tickets" },
        // { label: "Tickets", value: "80" },
      ],

      closing:
        "No road transfers required. The experience is seamless from start to finish.",
    },
    guidelineHighlights: [
      {
        tag: "Book Ticket Online",
        title: "₦200,000",
        description: "Limited Seats Available | Paystack",
        link: "#booking",
      },
      {
        title: "High-Level Networking",
        description:
          "Connect with top professionals, investors, and industry leaders.",
      },
      {
        tag: "Arrival Time - 12:00pm",
        title: "Luxury Dining at Radisson Blu",
        description:
          "Indulge in an exquisite culinary experience in an elegant setting.",
      },
      {
        title: "Investment Capital Insight",
        description: "Smart conversations around growth & opportunities",
      },
      {
        title: "Private Boat Cruise",
        description: "Sail in style and unwind on an exclusive sunset cruise.",
        image: "/images/private-boat-tour-in-paris-with-champagne-1024x682.jpg",
      },

      {
        title: "Directions",
        description: "View Map to Sea-Front",
        image: "/images/pexels-freestockpro-1008155.webp",
      },
    ],
    curatorMessage: {
      quote:
        "We created Red & Bougie to capture the essence of Valentine's Day - romance, elegance, and the simple joy of shared moments. From the first course at the waterfront to the gentle sway of the yacht at sunset, every detail has been crafted with intention. This isn't just an event; it's a memory in the making.",
      name: "The Elite Wanderer Team",
      title: "Event Curators",
    },
    booking: {
      title: "TICKET BOOKING",
      type: "Red & Bougie Experience Pass",
      includes: "Dining, yacht sail, lounge access, refreshments",
      link: "#", // Placeholder
      capacity: "200 tickets",
      ticketsAvailable: "80",
      price: "₦200,000",
      priceValue: 200000,
    },
    contact: {
      whatsappNumber: "+2348123456789", // Placeholder
      email: "support@theelitewanderer.com",
    },
    faq: [
      {
        question: "Is this event couples-only?",
        answer:
          "Primarily designed for couples, but stylish singles are welcome.",
      },
      {
        question: "What time should I arrive?",
        answer:
          "Arrival opens at 2:00 PM. Guests are advised to arrive early for a smooth experience.",
      },
      {
        question: "Is transportation included?",
        answer:
          "No road transportation is required. The journey flows naturally from shore to sea.",
      },
      {
        question: "What should I wear?",
        answer: "Elegant chic or resort-luxe attire with a touch of red.",
      },
      {
        question: "Are tickets refundable?",
        answer:
          "Tickets are non-refundable but may be transferable with prior notice.",
      },
    ],
  },
  {
    id: "easter-escape",
    title: "TEW Easter Escape",
    subtitle: "Brunch & Blessings",
    date: "19 April 2026",
    dateTime: "Sunday, 19 April 2026",
    targetDate: "2026-04-19T08:30:00",
    location: "Aimas Garden, Ikoyi",
    heroImage: "/images/pexels-lamkien-35255292.webp",
    description:
      "Refined lifestyle gathering designed for reflection, wellness, and meaningful connection. Set in a serene garden setting, the experience blends gentle mindfulness, guided conversations, and a curated Easter brunch in an atmosphere of calm elegance. Thoughtfully paced and intentionally intimate, it offers guests space to reset, connect, and engage with a like-minded community in a soulful yet modern setting.",
    introduction: {
      title: "EVENT INTRODUCTION",
      content:
        "TEW Easter Escape is a soulful lifestyle gathering curated for reflection, wellness, and meaningful connection. Set in an intimate garden environment, the experience blends gentle mindfulness, guided conversations, and a thoughtfully curated Easter brunch, creating space for calm, clarity, and community.",
    },
    gallery: [
      "/images/pexels-lamkien-35255292.webp",
      "/images/pexels-freestockpro-1008155.webp",
    ],
    guidelines: {
      title: "EVENT GUIDELINES (WHAT TO KNOW)",
      items: [
        { label: "Date", value: "Sunday, 19 April 2026" },
        { label: "Opening Time", value: "Guests arrive from 8:30 AM" },
        { label: "Venue", value: "Aimas Garden, Ikoyi" },
        {
          label: "Experience Style",
          value: "Wellness, brunch, and intimate conversations",
        },
        { label: "Dress Code", value: "Elegant Daywear / Soft Neutrals" },
        { label: "Tickets Left", value: "Limited to preserve intimacy" },
        // { label: "Tickets", value: "Limited availability" },
      ],
      closing:
        "This is a slow-paced, seated experience designed for ease and presence.",
    },
    guidelineHighlights: [
      {
        title: "Dress Code",
        description: "Elegant Daywear",
      },
      {
        title: "Arrival",
        description: "Guests arrive from 8:30 AM",
      },
      {
        title: "Location",
        description: "View Map to Ikoyi",
        image: "/images/pexels-lamkien-35255292.webp",
      },
    ],
    curatorMessage: {
      quote:
        "Easter Escape was born from a simple belief - that stillness and intention can be the greatest luxuries. In a world that moves so fast, we wanted to create a space where guests could pause, breathe, and reconnect with themselves and others in a setting of calm beauty.",
      name: "The Elite Wanderer Team",
      title: "Event Curators",
    },
    booking: {
      title: "TICKET BOOKING",
      type: "TEW Easter Escape Pass",
      includes: "All sessions, brunch, refreshments, and gifts",
      link: "#",
      capacity: "Limited slots",
      ticketsAvailable: "Limited slots",
    },
    faq: [
      {
        question: "Is this a religious event?",
        answer:
          "No. It is reflective and wellness-focused, without religious programming.",
      },
      {
        question: "Can I attend alone?",
        answer:
          "Yes. The experience is designed for personal reflection and gentle connection.",
      },
      {
        question: "Is there physical activity involved?",
        answer:
          "Only light, optional movement suitable for all fitness levels.",
      },
      {
        question: "What time does the event end?",
        answer: "The experience concludes around 4:00 PM.",
      },
      {
        question: "Are tickets refundable?",
        answer:
          "Tickets are non-refundable but may be transferable with prior notice.",
      },
    ],
  },
  {
    id: "summer-social",
    title: "TEW Summer Social",
    subtitle: "The Summer Edit",
    date: "9 August 2026",
    dateTime: "Sunday, 9 August 2026",
    targetDate: "2026-08-09T16:00:00",
    location: "Amore Gardens, Lekki Phase I",
    heroImage: "/images/pexels-freestockpro-1008155.webp",
    description:
      "TEW Summer Social is a vibrant lifestyle and networking experience curated for stylish, ambitious individuals who value connection, visibility, and community. Set in a chic garden environment, the event blends music, cocktails, and effortless socialising from golden hour into the evening, creating a relaxed yet elevated summer atmosphere.",
    introduction: {
      title: "EVENT INTRODUCTION",
      content:
        "TEW Summer Social is a vibrant lifestyle and networking experience curated for stylish, ambitious individuals who value connection, visibility, and community. Set in a chic garden environment, the event blends music, cocktails, and effortless socialising from golden hour into the evening, creating a relaxed yet elevated summer atmosphere.",
    },
    gallery: [
      "/images/pexels-freestockpro-1008155.webp",
      "/images/pexels-lamkien-35255292.webp",
    ],
    guidelines: {
      title: "EVENT GUIDELINES (WHAT TO KNOW)",
      items: [
        { label: "Date", value: "Sunday, 9 August 2026" },
        { label: "Opening Time", value: "Guests arrive from 4:00 PM" },
        { label: "Venue", value: "Amore Gardens, Lekki Phase I" },
        {
          label: "Experience Style",
          value: "Open-air social, lounge-style networking",
        },
        { label: "Dress Code", value: "Summer Chic / Stylish Casual" },
        {
          label: "Tickets Left",
          value: "Curated guest list, limited attendance",
        },
        // { label: "Tickets", value: "Limited availability" },
      ],
      closing:
        "This is a standing and lounge-style experience designed for easy movement and conversation.",
    },
    guidelineHighlights: [
      {
        title: "Dress Code",
        description: "Summer Chic / Stylish Casual",
      },
      {
        title: "Time",
        description: "Guests arrive from 4:00 PM",
      },
      {
        title: "Venue",
        description: "View Map to Lekki",
        image: "/images/pexels-freestockpro-1008155.webp",
      },
    ],
    curatorMessage: {
      quote:
        "Summer Social is our love letter to Lagos energy. We wanted to bottle that feeling of a perfect summer evening - good music, great drinks, and even better company. It's where connections happen naturally and every conversation could lead to something meaningful.",
      name: "The Elite Wanderer Team",
      title: "Event Curators",
    },
    booking: {
      title: "TICKET BOOKING",
      type: "TEW Summer Social Pass",
      price: "₦100,000 – ₦150,000 per person",
      includes: "Entry, drinks, light bites, entertainment",
      link: "#",
      capacity: "Limited slots",
      ticketsAvailable: "Limited slots",
    },
    faq: [
      {
        question: "Who is this event for?",
        answer:
          "Stylish professionals, creatives, founders, and socially active individuals.",
      },
      {
        question: "Is seating guaranteed?",
        answer:
          "Limited lounge seating is available. Guests are encouraged to move and mingle.",
      },
      {
        question: "Can I attend alone?",
        answer:
          "Yes. The event is designed for open networking and easy social interaction.",
      },
      {
        question: "What time does the event end?",
        answer: "The experience closes around 8:30 PM.",
      },
      {
        question: "Are tickets refundable?",
        answer:
          "Tickets are non-refundable but may be transferable with prior notice.",
      },
    ],
  },
  {
    id: "junior-elite-polo",
    title: "Junior Elite Polo",
    subtitle: "Where Sport Meets Legacy",
    date: "Weekend Experience | Date TBC",
    dateTime: "Weekend Experience | Date TBC",
    location: "Premier Polo Club / Luxury Estate",
    heroImage: "/images/pexels-code-mnml-185553186-35205820.webp",
    description:
      "A luxury experience for elite families, combining junior polo matches with refined parent networking. While young riders compete and learn under professional guidance, parents enjoy VIP hospitality, curated brand showcases, and relaxed social connections within a premier polo setting.",
    introduction: {
      title: "EVENT INTRODUCTION",
      content:
        "Junior Elite Polo is a refined family lifestyle experience designed to celebrate youth sport, legacy, and elite social connection. Set within a premier polo club or private estate, the event brings together young riders for professionally guided polo matches while parents enjoy VIP hospitality, curated brand experiences, and high-level networking.",
    },
    gallery: ["/images/pexels-code-mnml-185553186-35205820.webp"],
    guidelines: {
      title: "EVENT GUIDELINES (WHAT TO KNOW)",
      items: [
        { label: "Duration", value: "One full day (Weekend)" },
        { label: "Venue", value: "Premier Polo Club / Luxury Estate" },
        { label: "Participants", value: "Children aged 6–16 (Polo Players)" },
        { label: "Audience", value: "Parents, VIP guests, and HNIs" },
        {
          label: "Experience Style",
          value: "Family-focused luxury sporting event",
        },
        { label: "Dress Code", value: "Smart Casual / Polo Chic" },
        { label: "Tickets Left", value: "Invitation-led, limited attendance" },
      ],
      closing:
        "This is a family-friendly, prestige-driven experience with dedicated spaces for children and parents.",
    },
    guidelineHighlights: [
      {
        title: "Dress Code",
        description: "Smart Casual / Polo Chic",
      },
      {
        title: "Duration",
        description: "One Full Weekend Day",
      },
      {
        title: "Venue",
        description: "View Polo Club Map",
        image: "/images/pexels-code-mnml-185553186-35205820.webp",
      },
    ],
    curatorMessage: {
      quote:
        "Junior Elite Polo represents our commitment to legacy - where young riders learn the sport of kings while their parents build connections that last. It's about family, tradition, and passing on a love for the extraordinary to the next generation.",
      name: "The Elite Wanderer Team",
      title: "Event Curators",
    },
    booking: {
      title: "TICKET BOOKING",
      type: "Family Access Pass",
      includes:
        "Polo participation or viewing, VIP lounge access, refreshments, and gifts",
      link: "#",
      capacity: "Limited slots",
      ticketsAvailable: "Limited slots",
    },
    faq: [
      {
        question: "Is this event open to non-polo families?",
        answer: "Yes. Parents and guests may attend as VIP spectators.",
      },
      {
        question: "Do children need prior polo experience?",
        answer:
          "Basic riding experience is recommended, but beginner clinics may be available.",
      },
      {
        question: "Are meals provided?",
        answer:
          "Yes. Child-friendly meals and premium parent hospitality are included.",
      },
      {
        question: "Is the event invite-only?",
        answer:
          "Participation slots are limited. Some attendance may be by invitation.",
      },
      {
        question: "Are tickets refundable?",
        answer: "Details will be shared during registration.",
      },
    ],
  },
];
