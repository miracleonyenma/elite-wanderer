import { Section } from "@/components/Site/Section";

export default function PrivacyPage() {
  return (
    <Section className="bg-white pt-32 pb-32 text-black dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="font-heading text-4xl font-bold uppercase">
          Privacy Policy
        </h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p>
            At The Elite Wanderer, we value your privacy and are committed to
            protecting your personal data. This Privacy Policy outlines how we
            collect, use, and safeguard your information when you visit our
            website or use our services.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We may collect personal information such as your name, email
            address, phone number, and preferences when you inquire about our
            services, subscribe to our newsletter, or become a member.
          </p>

          <h3>2. How We Use Your Information</h3>
          <p>
            We use your information to provide personalized travel and lifestyle
            services, process memberships, improve our offerings, and
            communicate with you about exclusive opportunities.
          </p>

          <h3>3. Data Security</h3>
          <p>
            We implement industry-standard security measures to protect your
            data from unauthorized access, alteration, or disclosure.
          </p>

          <h3>4. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at support@theelitewanderer.com.
          </p>
        </div>
      </div>
    </Section>
  );
}
