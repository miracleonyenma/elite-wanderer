import { Header } from "@/components/Site/Header";
import { Footer } from "@/components/Site/Footer";
import { LayoutWrapper } from "@/components/Site/LayoutWrapper";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LayoutWrapper>
        <Header />
        {children}
        <Footer />
      </LayoutWrapper>
    </>
  );
}
