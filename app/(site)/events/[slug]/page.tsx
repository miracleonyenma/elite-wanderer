import { activeEvents } from "../../events-data";
import { notFound } from "next/navigation";
import EventClient from "./components/EventClient";

export function generateStaticParams() {
  return activeEvents.map((event) => ({
    slug: event.id,
  }));
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = activeEvents.find((e) => e.id === slug);

  if (!event) {
    notFound();
  }

  return <EventClient event={event} />;
}
