import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { EditorialHero } from "@/components/editorial-hero";
import { EditorialGrid } from "@/components/editorial-grid";
import { AuctionSection } from "@/components/auction-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Editorial — Solange",
  description:
    "Explorez nos editorials mode, art et architecture. Decouvrez les encheres exclusives Margiela Artisanal.",
};

export default function EditorialPage() {
  return (
    <>
      <Navbar />
      <main>
        <EditorialHero />
        <EditorialGrid />
        <AuctionSection />
      </main>
      <Footer />
    </>
  );
}
