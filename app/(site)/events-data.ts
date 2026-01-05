export interface EventData {
  id: string; // slug
  title: string;
  subtitle?: string;
  date: string;
  dateTime?: string;
  location: string;
  heroImage: string;
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
  furtherInfo: {
    title: string;
    content: string;
  };
  booking: {
    title: string;
    type: string;
    includes: string;
    link: string;
    capacity?: string;
    ticketsAvailable?: string;
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
}

export const activeEvents: EventData[] = [
  {
    id: "red-and-bougie",
    title: "Red & Bougie",
    subtitle: "From Shore to Sea: A Curated Valentine Journey",
    date: "7 February 2026",
    dateTime: "Saturday, 7 February 2026",
    location: "Lagos",
    heroImage: "/images/jfa-long-island-87-15664711/2200xxs.jpg", // Using the image from the existing page
    description:
      "Valentine experience that flows effortlessly from an elegant sea-front dining moment into a serene sunset yacht sail across the Lagos Lagoon, concluding with an intimate after-sail social lounge at the Lagos Motor Boat Club. Designed for couples and refined socialites, the experience blends fine dining, scenic sailing, and relaxed conversations in a setting of understated luxury.",
    introduction: {
      title: "EVENT INTRODUCTION",
      content:
        "Red & Bougie is an intimate Valentine experience curated for couples and refined socialites who value elegance, connection, and seamless luxury. The journey flows effortlessly from an elevated sea-front dining moment into a serene sunset yacht sail, concluding with a relaxed social lounge by the water. Every detail is intentionally designed for romance, comfort, and understated sophistication.",
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
        { label: "Capacity", value: "200 tickets" },
        { label: "Tickets", value: "80" },
      ],
      closing:
        "No road transfers required. The experience is seamless from start to finish.",
    },
    furtherInfo: {
      title: "FURTHER INFORMATION",
      content:
        "Guests will enjoy a curated dining experience, sunset sailing across the lagoon, onboard refreshments, and an after-sail social lounge designed for relaxed conversations and elegant connections. This is a slow-paced, premium experience focused on atmosphere, romance, and social ease rather than high energy or crowds.",
    },
    booking: {
      title: "TICKET BOOKING",
      type: "Red & Bougie Experience Pass",
      includes: "Dining, yacht sail, lounge access, refreshments",
      link: "#", // Placeholder
      capacity: "200 tickets",
      ticketsAvailable: "80",
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
        { label: "Capacity", value: "Limited to preserve intimacy" },
        { label: "Tickets", value: "Limited availability" },
      ],
      closing:
        "This is a slow-paced, seated experience designed for ease and presence.",
    },
    furtherInfo: {
      title: "FURTHER INFORMATION",
      content:
        "Guests will enjoy guided reflection, light movement, relaxed lounge moments, and a premium Easter brunch designed to encourage thoughtful conversations. The experience balances wellness and social connection without being overly spiritual, making it accessible and refined.",
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
    title: "Summer Social",
    date: "Apr 2026",
    location: "Garden Environment",
    heroImage: "/images/pexels-freestockpro-1008155.webp",
    description:
      "Lifestyle and networking experience curated for stylish, ambitious individuals. Set within a chic garden environment, the event blends signature cocktails, light bites, music, and free-flow socialising from golden hour into the evening. Designed for visibility, connection, and community, it brings together a curated crowd in a relaxed yet elevated atmosphere where meaningful conversations and summer moments unfold naturally.",
    introduction: {
      title: "Event Introduction",
      content: "Summer Social is a lifestyle and networking experience...",
    },
    gallery: [],
    guidelines: {
      title: "Guidelines",
      items: [],
    },
    furtherInfo: { title: "Info", content: "" },
    booking: { title: "Booking", type: "", includes: "", link: "" },
    faq: [],
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
        { label: "Capacity", value: "Invitation-led, limited attendance" },
      ],
      closing:
        "This is a family-friendly, prestige-driven experience with dedicated spaces for children and parents.",
    },
    furtherInfo: {
      title: "FURTHER INFORMATION",
      content:
        "Children participate in age-group polo matches and skill clinics under professional guidance, while parents enjoy champagne lounges, lifestyle showcases, and relaxed networking. The day concludes with awards, recognition moments, and an elegant social close, designed to honour both performance and family legacy.",
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
