export interface EventContactInfo {
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
  whatsappNumber: string;
  contactEmail: string;
}

/**
 * Generate a WhatsApp link with prefilled message
 */
export const generateWhatsAppLink = ({
  eventTitle,
  eventDate,
  eventLocation,
  whatsappNumber,
}: Omit<EventContactInfo, "contactEmail">): string => {
  const message = `Hi! I'm interested in attending ${eventTitle} on ${eventDate} in ${eventLocation}. Could you please provide more information about ticket availability and payment options?`;

  // Remove all non-numeric characters from phone number
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};

/**
 * Generate an email mailto link with prefilled subject and body
 */
export const generateEmailLink = ({
  eventTitle,
  eventDate,
  eventLocation,
  contactEmail,
}: Omit<EventContactInfo, "whatsappNumber">): string => {
  const subject = `Inquiry about ${eventTitle}`;

  const body = `Hi,

I'm interested in attending ${eventTitle} scheduled for ${eventDate} in ${eventLocation}.

Could you please provide more information about:
- Ticket availability and pricing
- Payment options and methods
- Event schedule and program details
- Accommodation recommendations

Looking forward to hearing from you.

Best regards`;

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

/**
 * Generate a tel link for phone calls
 */
export const generatePhoneLink = (phoneNumber: string): string => {
  return `tel:${phoneNumber}`;
};
