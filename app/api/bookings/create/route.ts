import { NextRequest, NextResponse } from "next/server";
import { activeEvents } from "@/app/(site)/events-data";
import { MonitoringEmailService, EventType } from "@/services/email";
import {
  generateCustomerEmail,
  generateAdminEmail,
} from "@/services/email-templates";
import { generateOrderId } from "@/utils/order-id";

const ALLOWED_ORIGINS = [
  "https://theelitewanderer.com",
  "https://www.theelitewanderer.com",
  "http://localhost:3098", // For local dev
  "http://localhost:3000",
];

const corsHeaders = (origin: string) => {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Allow-Credentials": "true",
  };
};

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get("origin") || "";

  // Check if origin is allowed
  if (ALLOWED_ORIGINS.includes(origin)) {
    return new NextResponse(null, {
      status: 204,
      headers: corsHeaders(origin),
    });
  }

  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-Requested-With",
    },
  });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin") || "";

  // Basic origin validation
  if (
    !ALLOWED_ORIGINS.includes(origin) &&
    process.env.NODE_ENV !== "development"
  ) {
    // Ideally block here, but for now we'll allow it to proceed with warning log if needed
    // or strictly return 403.
    // return new NextResponse("Forbidden", { status: 403 });
  }

  try {
    const body = await request.json();
    const { eventId, guests, customer } = body;

    // Validation
    if (!eventId || !guests || !customer || !customer.email || !customer.name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        {
          status: 400,
          headers: ALLOWED_ORIGINS.includes(origin) ? corsHeaders(origin) : {},
        },
      );
    }

    // Find Event
    const event = activeEvents.find((e) => e.id === eventId);
    if (!event) {
      return NextResponse.json(
        { error: "Event not found" },
        {
          status: 404,
          headers: ALLOWED_ORIGINS.includes(origin) ? corsHeaders(origin) : {},
        },
      );
    }

    // Calculate Total Price (basic logic - stripping currency symbol)
    // Assuming price format like "₦150,000" or "$200"
    let numericPrice = 0;
    if (event.booking.price) {
      const cleanPrice = event.booking.price.replace(/[^0-9.]/g, "");
      numericPrice = parseFloat(cleanPrice) * guests;
    }

    // Format total price back to string (simplified for Nigeria/Lagos context)
    const formattedTotal = event.booking.price
      ? `Approx. ${numericPrice.toLocaleString()}`
      : "Contact for Pricing";

    // Generate Order ID
    const orderId = generateOrderId();

    // Construct Payment Link
    // Construct Payment Links
    const relativePaymentLink = `/checkout?type=event&slug=${eventId}&guests=${guests}&name=${encodeURIComponent(customer.name)}&email=${encodeURIComponent(customer.email)}&phone=${encodeURIComponent(customer.phone)}&orderId=${orderId}`;
    const absolutePaymentLink = `https://theelitewanderer.com${relativePaymentLink}`;

    // Use the relative link for the frontend response (cleaner redirect)
    // Use the absolute link for the email (must work outside the app)
    const paymentLink = relativePaymentLink;

    const bookingDetails = {
      eventId,
      eventTitle: event.title,
      eventDate: event.date,
      eventLocation: event.location,
      heroImage: event.heroImage,
      customerName: customer.name,
      customerEmail: customer.email,
      customerPhone: customer.phone,
      guests,
      totalPrice: formattedTotal,
      paymentLink: absolutePaymentLink, // critical for email to be actionable
      orderId,
    };

    const emailService = new MonitoringEmailService();

    // 1. Send Customer Email
    await emailService.sendMonitoringEmail({
      to: customer.email,
      subject: `Booking Request Received - ${event.title}`,
      content: generateCustomerEmail(bookingDetails),
      eventType: EventType.INFO,
    });

    // 2. Send Admin Email
    await emailService.sendMonitoringEmail({
      to: "support@theelitewanderer.com",
      subject: `New Booking Request - ${event.title}`,
      content: generateAdminEmail(bookingDetails),
      eventType: EventType.INFO,
    });

    return NextResponse.json(
      { success: true, message: "Booking request processed", paymentLink },
      {
        status: 200,
        headers: ALLOWED_ORIGINS.includes(origin) ? corsHeaders(origin) : {},
      },
    );
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      {
        status: 500,
        headers: ALLOWED_ORIGINS.includes(origin) ? corsHeaders(origin) : {},
      },
    );
  }
}
