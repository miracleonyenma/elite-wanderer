import { notFound } from "next/navigation";
import { programsData, getAllProgramSlugs } from "../../programs-data";
import { Metadata } from "next";
import { ProgramContent } from "./ProgramContent";

// Generate static params for all programs
export function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({
    program: slug,
  }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ program: string }>;
}): Promise<Metadata> {
  const { program } = await params;
  const data = programsData[program];

  if (!data) {
    return {
      title: "Program Not Found",
    };
  }

  const programType = data.type === "citizenship" ? "Citizenship" : "Residency";

  return {
    title: `${data.country} ${programType} by Investment | The Elite Wanderer`,
    description: data.tagline,
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ program: string }>;
}) {
  const { program } = await params;
  const data = programsData[program];

  if (!data) {
    notFound();
  }

  return <ProgramContent data={data} />;
}
