export interface BookingDetails {
  eventId: string;
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
  heroImage: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  guests: number;
  totalPrice: string; // Pre-formatted currency string
  paymentLink: string;
  orderId: string;
}

const styles = {
  container: `font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #333333; line-height: 1.6;`,
  header: `background-color: #000000; padding: 30px; text-align: center;`,
  logo: `color: #ffffff; font-size: 24px; font-weight: bold; text-decoration: none; letter-spacing: 2px; text-transform: uppercase;`,
  heroInfo: `padding: 40px 30px; text-align: center; background-color: #f8f8f8;`,
  title: `margin: 0 0 10px; font-size: 24px; font-weight: bold; color: #000000; text-transform: uppercase; letter-spacing: 1px;`,
  subtitle: `margin: 0; font-size: 16px; color: #666666;`,
  content: `padding: 30px;`,
  section: `margin-bottom: 30px;`,
  sectionTitle: `font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #999999; margin-bottom: 15px; border-bottom: 1px solid #eeeeee; padding-bottom: 5px;`,
  row: `display: flex; justify-content: space-between; margin-bottom: 10px;`,
  label: `color: #666666;`,
  value: `font-weight: bold; text-align: right;`,
  buttonContainer: `text-align: center; margin: 40px 0;`,
  button: `background-color: #000000; color: #ffffff; padding: 15px 30px; text-decoration: none; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; display: inline-block;`,
  footer: `background-color: #f8f8f8; padding: 30px; text-align: center; font-size: 12px; color: #999999;`,
  link: `color: #666666; text-decoration: underline;`,
};

export const generateCustomerEmail = (details: BookingDetails): string => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Request Received</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
  <div style="${styles.container}">
    <!-- Header -->
    <div style="${styles.header}">
      <div style="${styles.logo}">The Elite Wanderer</div>
    </div>

    <!-- Hero -->
    <div style="${styles.heroInfo}">
      <h1 style="${styles.title}">Booking Request Received</h1>
      <p style="${styles.subtitle}">We have received your request for <strong>${details.eventTitle}</strong></p>
    </div>

    <!-- Content -->
    <div style="${styles.content}">
      <p>Dear ${details.customerName},</p>
      <p>Thank you for choosing The Elite Wanderer. Your booking request has been successfully recorded. To finalize your reservation, please proceed with the payment below.</p>

      <!-- Event Details -->
      <div style="${styles.section}">
        <div style="${styles.sectionTitle}">Event Details</div>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 5px 0; color: #666;">Date</td>
            <td style="padding: 5px 0; font-weight: bold; text-align: right;">${details.eventDate}</td>
          </tr>
          <tr>
            <td style="padding: 5px 0; color: #666;">Location</td>
            <td style="padding: 5px 0; font-weight: bold; text-align: right;">${details.eventLocation}</td>
          </tr>
        </table>
      </div>

      <!-- Booking Details -->
      <div style="${styles.section}">
        <div style="${styles.sectionTitle}">Reservation Details</div>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 5px 0; color: #666;">Order ID</td>
            <td style="padding: 5px 0; font-weight: bold; text-align: right; font-family: monospace;">${details.orderId}</td>
          </tr>
          <tr>
            <td style="padding: 5px 0; color: #666;">Guests</td>
            <td style="padding: 5px 0; font-weight: bold; text-align: right;">${details.guests} Person${details.guests > 1 ? "s" : ""}</td>
          </tr>
          <tr>
            <td style="padding: 5px 0; color: #666; font-size: 18px;">Total to Pay</td>
            <td style="padding: 5px 0; font-weight: bold; text-align: right; font-size: 18px;">${details.totalPrice}</td>
          </tr>
        </table>
      </div>

      <!-- CTA -->
      <div style="${styles.buttonContainer}">
        <a href="${details.paymentLink}" style="${styles.button}">Complete Payment</a>
        <p style="margin-top: 15px; font-size: 12px; color: #999;">Link expires in 24 hours</p>
      </div>

      <p>If you have any questions or special requirements, our concierge team is here to assist you.</p>
    </div>

    <!-- Footer -->
    <div style="${styles.footer}">
      <p>&copy; ${new Date().getFullYear()} The Elite Wanderer. All rights reserved.</p>
      <p>22 Glover Road, Ikoyi, Lagos</p>
      <p>
        <a href="mailto:support@theelitewanderer.com" style="${styles.link}">support@theelitewanderer.com</a> | 
        <a href="tel:+2349121535952" style="${styles.link}">+234 912 153 5952</a>
      </p>
    </div>
  </div>
</body>
</html>
  `;
};

export const generateAdminEmail = (details: BookingDetails): string => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Booking Notification</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: sans-serif;">
  <div style="background-color: #fff; max-width: 600px; margin: 0 auto; padding: 30px; border-left: 5px solid #000;">
    <h2 style="color: #000; margin-top: 0;">New Booking Request</h2>
    <p>A new booking request has been submitted from the website.</p>
    
    <div style="background-color: #f8f8f8; padding: 20px; margin: 20px 0;">
      <h3 style="margin-top: 0; font-size: 16px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Customer Information</h3>
      <p style="margin: 5px 0;"><strong>Order ID:</strong> ${details.orderId}</p>
      <p style="margin: 5px 0;"><strong>Name:</strong> ${details.customerName}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> ${details.customerEmail}</p>
      <p style="margin: 5px 0;"><strong>Phone:</strong> ${details.customerPhone || "N/A"}</p>
    </div>

    <div style="background-color: #f8f8f8; padding: 20px; margin: 20px 0;">
      <h3 style="margin-top: 0; font-size: 16px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Event Information</h3>
      <p style="margin: 5px 0;"><strong>Event:</strong> ${details.eventTitle}</p>
      <p style="margin: 5px 0;"><strong>Date:</strong> ${details.eventDate}</p>
      <p style="margin: 5px 0;"><strong>Guests:</strong> ${details.guests}</p>
      <p style="margin: 5px 0;"><strong>Total Value:</strong> ${details.totalPrice}</p>
    </div>

    <p style="font-size: 12px; color: #666; margin-top: 30px;">
      This is an automated system notification.
    </p>
  </div>
</body>
</html>
  `;
};
