/** @format */

import Banner from "@/components/Banner";
import HeroSection from "../components/HeroSection";
import BannerSection from "@/components/BannerSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import BannerCTA from "@/components/BannerCTA";
import ContentSections from "@/components/FeatureSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Banner />
      <BannerSection />
      <FeaturedProducts />
      <BannerCTA />
      <ContentSections />
      <Footer />
    </div>
  );
}
