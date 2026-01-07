"use client";

import { useSyncExternalStore, useState } from "react";
import { useSearchParams } from "next/navigation";
import { activeEvents } from "@/app/(site)/events-data";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { toast } from "sonner";

const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false },
);
import Image from "next/image";
import Link from "next/link";
import { generateWhatsAppLink, generateEmailLink } from "@/lib/contact-links";

export default function CheckoutClient() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const slug = searchParams.get("slug");
  const guestsParam = searchParams.get("guests");

  const emptySubscribe = () => () => {};
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const [email, setEmail] = useState(searchParams.get("email") || "");
  const [name, setName] = useState(searchParams.get("name") || "");
  const [phone, setPhone] = useState(searchParams.get("phone") || "");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  if (!mounted) return null;

  if (type !== "event" || !slug) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Invalid Checkout Link</h1>
        <p>Please return to the events page and try again.</p>
      </div>
    );
  }

  const event = activeEvents.find((e) => e.id === slug);
  const guests = guestsParam ? parseInt(guestsParam) : 1;

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Event Not Found</h1>
      </div>
    );
  }

  const pricePerTicket = event.booking.priceValue || 0;
  const totalAmount = pricePerTicket * guests;
  // Paystack expects amount in Kobo (multiply by 100)
  const amountInKobo = totalAmount * 100;
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";

  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email,
    amount: amountInKobo,
    publicKey,
    currency: "NGN",
    metadata: {
      custom_fields: [
        {
          display_name: "Event",
          variable_name: "event",
          value: event.title,
        },
        {
          display_name: "Guests",
          variable_name: "guests",
          value: guests.toString(),
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: phone,
        },
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: name,
        },
      ],
    },
  };

  const onSuccess = (reference: unknown) => {
    console.log(reference);
    setPaymentSuccess(true);
    toast.success("Payment successful! Check your email for confirmation.");
  };

  const onClose = () => {
    toast.info("Payment cancelled");
  };

  if (paymentSuccess) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-10 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h1 className="mb-4 font-heading text-3xl font-bold uppercase">
          Payment Successful
        </h1>
        <p className="mb-8 max-w-md text-neutral-600">
          Thank you, {name}! Your reservation for <strong>{event.title}</strong>{" "}
          is now confirmed. A receipt has been sent to {email}.
        </p>
        <Button
          asChild
          className="rounded-none px-8 py-6 tracking-widest uppercase"
        >
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="flex w-full flex-col md:flex-row">
        {/* Event Summary Column */}
        <div className="relative flex w-full flex-col justify-between bg-neutral-900 p-8 text-white md:w-1/2 md:p-20">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src={event.heroImage}
              alt={event.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10">
            <Link
              href={`/events/${slug}`}
              className="mb-8 flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Back to Event
            </Link>

            <div className="mb-6 inline-block bg-theme-200 px-3 py-1 text-xs font-bold tracking-widest text-black uppercase">
              Checkout
            </div>
            <h1 className="mb-2 font-heading text-4xl font-bold uppercase md:text-5xl">
              {event.title}
            </h1>
            <p className="font-light text-neutral-300">{event.date}</p>
          </div>

          <div className="relative z-10 mt-12 space-y-4 border-t border-white/20 pt-6">
            <div className="flex justify-between">
              <span className="text-neutral-300">Ticket Price</span>
              <span className="font-bold">
                ₦{pricePerTicket.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-300">Guests</span>
              <span className="font-bold">{guests}</span>
            </div>
            <div className="flex justify-between border-t border-white/20 pt-4 text-2xl">
              <span className="">Total</span>
              <span className="font-bold text-theme-200">
                ₦{totalAmount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Form Column */}
        <div className="flex w-full items-center justify-center p-8 md:w-1/2 md:p-20">
          <div className="w-full max-w-lg">
            <h2 className="mb-8 font-heading text-3xl font-bold tracking-wider text-neutral-800 uppercase dark:text-white">
              Customer Details
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border-b border-neutral-300 bg-transparent py-4 text-lg transition-colors outline-none focus:border-black dark:border-neutral-700 dark:text-white dark:focus:border-white"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border-b border-neutral-300 bg-transparent py-4 text-lg transition-colors outline-none focus:border-black dark:border-neutral-700 dark:text-white dark:focus:border-white"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full border-b border-neutral-300 bg-transparent py-4 text-lg transition-colors outline-none focus:border-black dark:border-neutral-700 dark:text-white dark:focus:border-white"
                  placeholder="+234..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="pt-8">
                <h3 className="mb-4 text-center text-sm font-bold tracking-widest text-neutral-500 uppercase">
                  Select Payment Method
                </h3>

                <div className="space-y-4">
                  {pricePerTicket > 0 ? (
                    <>
                      <PaystackButton
                        {...paystackConfig}
                        className="w-full bg-black py-4 font-bold tracking-widest text-white uppercase transition-colors hover:bg-neutral-800 disabled:opacity-50 dark:bg-white dark:text-black"
                        text={`Pay ₦${totalAmount.toLocaleString()} via Paystack`}
                        disabled={!email || !name || !phone}
                        onSuccess={onSuccess}
                        onClose={onClose}
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          className="h-auto w-full flex-col gap-2 py-4 uppercase"
                          onClick={() => {
                            if (!event.contact?.whatsappNumber) {
                              toast.error("WhatsApp contact not available");
                              return;
                            }
                            const link = generateWhatsAppLink({
                              eventTitle: event.title,
                              eventDate: event.date,
                              eventLocation: event.location,
                              whatsappNumber: event.contact.whatsappNumber,
                            });
                            window.open(link, "_blank");
                          }}
                          disabled={!email || !name || !phone}
                        >
                          <span className="text-xs">Pay via WhatsApp</span>
                        </Button>

                        <Button
                          type="button"
                          variant="outline"
                          className="h-auto w-full flex-col gap-2 py-4 uppercase"
                          onClick={() => {
                            if (!event.contact?.email) {
                              toast.error("Support email not available");
                              return;
                            }
                            const link = generateEmailLink({
                              eventTitle: event.title,
                              eventDate: event.date,
                              eventLocation: event.location,
                              contactEmail: event.contact.email,
                            });
                            window.open(link, "_blank");
                          }}
                          disabled={!email || !name || !phone}
                        >
                          <span className="text-xs">Pay via Email</span>
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="rounded bg-yellow-50 p-4 text-center text-yellow-800">
                      Pricing not available for this event yet. Please contact
                      support.
                    </div>
                  )}
                  <p className="mt-4 text-center text-xs text-neutral-400">
                    Secured by Paystack. Your payment information is encrypted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
