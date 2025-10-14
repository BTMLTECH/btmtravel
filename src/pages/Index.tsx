import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import WhatWeOffer from "@/components/WhatWeOffer";
import CategoriesCarousel from "@/components/CategoriesCarousel";
import FeaturedPackages from "@/components/FeaturedPackages";

import Footer from "@/components/Footer";
import AdvertCarousel from "@/components/AdvertCarousel";
import HorizontalShowcase from "@/components/HorizontalShowcase";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServiceCards />
      <AdvertCarousel />
      <WhatWeOffer />
      <CategoriesCarousel />
      <FeaturedPackages />
      <HorizontalShowcase />

      <Footer />
    </div>
  );
};

export default Index;
