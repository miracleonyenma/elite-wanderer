import { Section } from "@/components/Site/Section";

export default function TermsPage() {
  return (
    <Section className="bg-white pt-32 pb-32 text-black dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="font-heading text-4xl font-bold uppercase">
          Terms of Service
        </h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p>
            Welcome to The Elite Wanderer. By accessing or using our website and
            services, you agree to be bound by these Terms of Service.
          </p>

          <h3>1. Membership</h3>
          <p>
            Membership to The Elite Wanderer is subject to approval and payment
            of applicable fees. We reserve the right to refuse or revoke
            membership at our discretion.
          </p>

          <h3>2. Services</h3>
          <p>
            We provide luxury travel and lifestyle management services. All
            bookings and arrangements are subject to availability and the terms
            of third-party providers.
          </p>

          <h3>3. Intellectual Property</h3>
          <p>
            All content on this website, including text, images, and logos, is
            the property of The Elite Wanderer and is protected by copyright
            laws.
          </p>

          <h3>4. Limitation of Liability</h3>
          <p>
            The Elite Wanderer shall not be liable for any indirect, incidental,
            or consequential damages arising arising from your use of our
            services.
          </p>

          <h3>5. Contact</h3>
          <p>
            For any inquiries regarding these terms, please contact us at
            support@theelitewanderer.com.
          </p>
        </div>
      </div>
    </Section>
  );
}
