import { notFound } from "next/navigation";
import { cardinalsData } from "../cardinals-data";
import { Metadata } from "next";
import { CardinalContent } from "./CardinalContent";

// Generate static params for all defined cardinals
export function generateStaticParams() {
  return Object.keys(cardinalsData).map((slug) => ({
    cardinal: slug,
  }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ cardinal: string }>;
}): Promise<Metadata> {
  const { cardinal } = await params;
  const data = cardinalsData[cardinal];

  if (!data) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `${data.title} | The Elite Wanderer`,
    description: data.description,
  };
}

export default async function CardinalPage({
  params,
}: {
  params: Promise<{ cardinal: string }>;
}) {
  const { cardinal } = await params;
  const data = cardinalsData[cardinal];

  if (!data) {
    notFound();
  }

  return <CardinalContent cardinal={cardinal} data={data} />;
}
