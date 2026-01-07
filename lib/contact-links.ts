export interface EventContactInfo {
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
  whatsappNumber: string;
  contactEmail: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  ticketCount: number;
  ticketPrice: string;
  totalCost: string;
}

/**
 * Generate a WhatsApp link with prefilled message
 */
export const generateWhatsAppLink = ({
  eventTitle,
  eventDate,
  eventLocation,
  whatsappNumber,
  customerName,
  customerEmail,
  customerPhone,
  ticketCount,
  ticketPrice,
  totalCost,
}: Omit<EventContactInfo, "contactEmail">): string => {
  const message = `Hi! I'm interested in attending *${eventTitle}* on ${eventDate} in ${eventLocation}.

Here are my booking details:
Name: ${customerName}
Email: ${customerEmail}
Phone: ${customerPhone}
Tickets: ${ticketCount}
Price per Ticket: ${ticketPrice}
Total Cost: ${totalCost}

Could you please provide information on how to complete the payment manually?`;

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
  customerName,
  customerEmail,
  customerPhone,
  ticketCount,
  ticketPrice,
  totalCost,
}: Omit<EventContactInfo, "whatsappNumber">): string => {
  const subject = `Booking Inquiry: ${eventTitle}`;

  const body = `Hi,

I'm interested in attending ${eventTitle} scheduled for ${eventDate} in ${eventLocation}.

Here are my booking details:
- Name: ${customerName}
- Email: ${customerEmail}
- Phone: ${customerPhone}
- Tickets: ${ticketCount}
- Price per Ticket: ${ticketPrice}
- Total Cost: ${totalCost}

Could you please provide information on how to complete the payment manually?

Looking forward to hearing from you.

Best regards,
${customerName}`;

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

/**
 * Generate a tel link for phone calls
 */
export const generatePhoneLink = (phoneNumber: string): string => {
  return `tel:${phoneNumber}`;
};
