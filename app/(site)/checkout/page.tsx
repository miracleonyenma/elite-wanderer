import { Suspense } from "react";
import CheckoutClient from "./components/CheckoutClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | The Elite Wanderer",
  description: "Secure payment for your Elite Wanderer experience.",
};

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-neutral-300 border-t-black"></div>
        </div>
      }
    >
      <CheckoutClient />
    </Suspense>
  );
}
