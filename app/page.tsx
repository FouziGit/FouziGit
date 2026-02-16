import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturedEditorial } from "@/components/featured-editorial";
import { AuctionPreview } from "@/components/auction-preview";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedEditorial />
        <AuctionPreview />
      </main>
      <Footer />
    </>
  );
}
