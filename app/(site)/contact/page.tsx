import { Section } from "@/components/Site/Section";
import BlurText from "@/components/react-bits/BlurText";
import { Button } from "@/components/ui/aevr/button";

export default function ContactPage() {
  return (
    <>
      <div className="relative h-[50vh] w-full overflow-hidden bg-neutral-900 text-white">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <BlurText
            text="Contact Concierge"
            className="font-heading text-4xl font-bold uppercase md:text-6xl"
            delay={50}
          />
          <p className="mt-4 max-w-xl text-lg font-light text-neutral-300">
            We are at your disposal. Reach out to inquire about membership,
            travel, or investment opportunities.
          </p>
        </div>
      </div>

      <Section className="bg-white text-black dark:bg-neutral-950 dark:text-white">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-sm font-bold tracking-widest text-neutral-500 uppercase">
                General Inquiries
              </h3>
              <p className="text-xl">concierge@elitewanderer.com</p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-bold tracking-widest text-neutral-500 uppercase">
                Global Headquarters
              </h3>
              <p className="text-xl">
                1 Knightsbridge Green
                <br />
                London, SW1X 7QA
                <br />
                United Kingdom
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-bold tracking-widest text-neutral-500 uppercase">
                Phone
              </h3>
              <p className="text-xl">+44 20 7123 4567</p>
            </div>
          </div>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                Name
              </label>
              <input
                type="text"
                className="border-b border-neutral-300 bg-transparent py-2 transition-colors focus:border-black focus:outline-none dark:border-neutral-700 dark:focus:border-white"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                Email
              </label>
              <input
                type="email"
                className="border-b border-neutral-300 bg-transparent py-2 transition-colors focus:border-black focus:outline-none dark:border-neutral-700 dark:focus:border-white"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                Message
              </label>
              <textarea
                rows={4}
                className="resize-none border-b border-neutral-300 bg-transparent py-2 transition-colors focus:border-black focus:outline-none dark:border-neutral-700 dark:focus:border-white"
                placeholder="How can we assist you?"
              />
            </div>
            <Button
              variant="default"
              className="mt-4 rounded-none bg-black py-6 text-xs tracking-widest text-white uppercase hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Send Message
            </Button>
          </form>
        </div>
      </Section>
    </>
  );
}
