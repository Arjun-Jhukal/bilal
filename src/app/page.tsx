import PageBanner from "@/components/sections/banner";
import FeaturedSection from "@/components/sections/featured";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <PageBanner />
      <FeaturedSection />
    </main>
  );
}
