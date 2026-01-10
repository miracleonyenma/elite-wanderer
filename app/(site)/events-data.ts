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
    name: string; // Keeping for backward compatibility if needed, or for the message card
    title: string;
    image?: string;
  };
  curators?: {
    name: string;
    role: string;
    image: string;
  }[];
  booking: {
    title: string;
    type: string;
    includes: string;
    link: string;
    capacity?: string;
    ticketsAvailable?: string;
    price?: string;
    priceValue?: number;
    widgetDisplay?: "countdown" | "price"; // defaults to countdown
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
  mapEmbed?: {
    src: string; // Google Maps embed URL
    title?: string;
  };
}

export const activeEvents: EventData[] = [
  {
    id: "black-and-boundless",
    title: "Black and Boundless",
    subtitle: "A Private Evening for Strategic Networking and Investment",
    date: "7 February 2026",
    dateTime: "Saturday, 7 February 2026",
    targetDate: "2026-02-07T12:00:00",
    location: "Lagos",
    heroImage: "/images/black-and-boundless.jpg", // Using the image from the existing page
    heroVideo: "/videos/black-and-boundless.mp4",
    description:
      "Valentine experience that flows effortlessly from an elegant sea-front dining moment into a serene sunset yacht sail across the Lagos Lagoon, concluding with an intimate after-sail social lounge at the Lagos Motor Boat Club. Designed for couples and refined socialites, the experience blends fine dining, scenic sailing, and relaxed conversations in a setting of understated luxury.",
    introduction: {
      title: "EVENT INTRODUCTION",
      content:
        "Exclusive experience crafted for discerning professionals, investors, and socialites who value luxury, meaningful connections, and high-level opportunities. The evening unfolds from a refined luxury dining experience, transitions into a private boat cruise, and concludes with an intimate setting designed to foster networking, investment conversations, and lasting connections.",
    },
    gallery: [
      "/images/black-and-boundless-01.jpg",
      "/images/black-and-boundless-02.jpg",
      "/images/black-and-boundless-03.jpg",
      "/images/black-and-boundless-04.jpg",
      "/images/black-and-boundless-05.jpg",
      "/images/black-and-boundless-06.jpg",
      "/images/black-and-boundless-07.jpg",
      "/images/black-and-boundless-08.jpg",
      "/images/fine dining.jpg",
      "/images/high level networking.jpg",
    ],
    guidelines: {
      title: "EVENT GUIDELINES (WHAT TO KNOW)",
      items: [
        { label: "Date", value: "Saturday, 7 February 2026" },
        { label: "Opening Time", value: "Guests arrive from 12:00 PM" },
        {
          label: "Venue Start Point",
          value: "Radisson Blu",
        },
        {
          label: "Experience Flow",
          value: "Dining → Sail → Network → Insight",
        },
      ],

      closing:
        "No road transfers required. The experience is seamless from start to finish.",
    },
    guidelineHighlights: [
      {
        title: "Guest Profile",
        description:
          "Entrepreneurs | Founders | CEOs | Investment Bankers | Private Investors | Business Owners | Venture Partners | Senior Executives | Industry Leaders | High-Net-Worth Professionals | Decision-Makers | Capital Advisors | Corporate Directors",
        image: "/images/guest profile.jpg",
      },
      {
        title: "High-Level Networking",
        description:
          "Connect with top professionals, investors, and industry leaders.",
        image: "/images/high level networking.jpg",
      },
      {
        tag: "Arrival Time - 12:00pm",
        title: "Luxury Dining at Radisson Blu",
        description:
          "Indulge in an exquisite culinary experience in an elegant setting.",
        image: "/images/fine dining.jpg",
      },
      {
        tag: "Book Ticket Online",
        title: "₦200,000",
        description: "Limited Seats Available | Paystack",
        link: "#booking",
        image: "/images/book  ticket .jpg",
      },
      {
        title: "Investment Capital Insight",
        description: "Smart conversations around growth & opportunities",
        image: "/images/investment insight.jpg",
      },
      {
        title: "Private Boat Cruise",
        description: "Sail in style and unwind on an exclusive sunset cruise.",
        image: "/images/boat cruise.jpg",
      },

      {
        title: "Directions",
        description: "View Map to Radisson Blu Anchorage",
        image: "/images/pexels-freestockpro-1008155.webp",
        link: "#map",
      },
    ],
    curatorMessage: {
      quote:
        "Black and Boundless is designed to bring together visionaries, investors, and professionals for an unforgettable evening of luxury, networking, and curated investment insights. Every detail has been crafted to ensure you enjoy a seamless and elevated experience from fine dining to a private boat cruise. We look forward to welcoming you!",
      name: "The Elite Wanderer Team",
      title: "Event Curators",
    },
    curators: [
      {
        name: "Martha Ellena Onwe",
        role: "Lead Program Director",
        image: "/images/martha.png", // Placeholder
      },
      {
        name: "Victor Tubotamuno",
        role: "CEO/MD",
        image: "/images/victor-tams.png", // Placeholder
      },
    ],
    booking: {
      title: "TICKET BOOKING",
      type: "Black and Boundless Experience Pass",
      includes: "Dining, yacht sail, lounge access, refreshments",
      link: "#", // Placeholder
      capacity: "200 tickets",
      ticketsAvailable: "80",
      price: "₦200,000",
      priceValue: 200000,
      widgetDisplay: "price",
    },
    contact: {
      whatsappNumber: "+2348123456789", // Placeholder
      email: "support@theelitewanderer.com",
    },
    faq: [
      {
        question: "Who is this event for?",
        answer:
          "For professionals, entrepreneurs, investors, and refined socialites who appreciate luxury experiences, meaningful connections, and value-driven conversations in an exclusive setting.",
      },
      {
        question: "What is included in the ticket price?",
        answer:
          "Your ticket grants access to the full Black and Boundless experience, including luxury dining at Radisson Blu, a private boat cruise, high-level networking, and curated investment capital insight sessions.",
      },
      {
        question: "Are tickets transferable?",
        answer:
          "Yes. Tickets are transferable. However, all transfers must be communicated in advance for proper guest accreditation.",
      },
      {
        question: "Is there a refund policy?",
        answer:
          "All ticket purchases are non-refundable. Please ensure your availability before confirming your booking.",
      },
      {
        question: "Who can I contact for more information?",
        answer:
          "For inquiries or further details, please contact the The Elite Wanderer team via the official booking channel or designated event contact shared on our platforms.",
      },
    ],
    mapEmbed: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5877831399!2d3.4146429!3d6.4366166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ad5075e7367%3A0xe15ac0b07db08a37!2sRadisson%20Blu%20Anchorage%20Hotel%2C%20Lagos%2C%20V.I.!5e0!3m2!1sen!2sng!4v1234567890",
      title: "Radisson Blu Anchorage Hotel, Lagos",
    },
  },
  {
    id: "easter-escape",
    title: "TEW Easter Escape",
    subtitle: "Brunch & Blessings",
    date: "19 April 2026",
    dateTime: "Sunday, 19 April 2026",
    targetDate: "2026-04-19T08:30:00",
    location: "Aimas Garden, Ikoyi",
    heroImage: "/images/easter escape.jpg",
    description:
      "Refined lifestyle gathering designed for reflection, wellness, and meaningful connection. Set in a serene garden setting, the experience blends gentle mindfulness, guided conversations, and a curated Easter brunch in an atmosphere of calm elegance. Thoughtfully paced and intentionally intimate, it offers guests space to reset, connect, and engage with a like-minded community in a soulful yet modern setting.",
    introduction: {
      title: "EVENT INTRODUCTION",
      content:
        "TEW Easter Escape is a soulful lifestyle gathering curated for reflection, wellness, and meaningful connection. Set in an intimate garden environment, the experience blends gentle mindfulness, guided conversations, and a thoughtfully curated Easter brunch, creating space for calm, clarity, and community.",
    },
    gallery: [
      "/images/easter escape.jpg",
      "/images/pexels-lamkien-35255292.webp",
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
        image: "/images/easter escape.jpg",
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
    heroImage: "/images/summer social.jpg",
    description:
      "TEW Summer Social is a vibrant lifestyle and networking experience curated for stylish, ambitious individuals who value connection, visibility, and community. Set in a chic garden environment, the event blends music, cocktails, and effortless socialising from golden hour into the evening, creating a relaxed yet elevated summer atmosphere.",
    introduction: {
      title: "EVENT INTRODUCTION",
      content:
        "TEW Summer Social is a vibrant lifestyle and networking experience curated for stylish, ambitious individuals who value connection, visibility, and community. Set in a chic garden environment, the event blends music, cocktails, and effortless socialising from golden hour into the evening, creating a relaxed yet elevated summer atmosphere.",
    },
    gallery: [
      "/images/summer social.jpg",
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
        image: "/images/summer social.jpg",
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
    heroImage: "/images/junior elite polo picture.jpg",
    description:
      "A luxury experience for elite families, combining junior polo matches with refined parent networking. While young riders compete and learn under professional guidance, parents enjoy VIP hospitality, curated brand showcases, and relaxed social connections within a premier polo setting.",
    introduction: {
      title: "EVENT INTRODUCTION",
      content:
        "Junior Elite Polo is a refined family lifestyle experience designed to celebrate youth sport, legacy, and elite social connection. Set within a premier polo club or private estate, the event brings together young riders for professionally guided polo matches while parents enjoy VIP hospitality, curated brand experiences, and high-level networking.",
    },
    gallery: ["/images/junior elite polo picture.jpg"],
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
        image: "/images/junior elite polo picture.jpg",
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
