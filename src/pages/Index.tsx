import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import WhatWeOffer from "@/components/WhatWeOffer";
import CategoriesCarousel from "@/components/CategoriesCarousel";
import FeaturedPackages from "@/components/FeaturedPackages";
import BlogSection from "@/components/BlogSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import AdvertCarousel from "@/components/AdvertCarousel";
import DownloadAppSection from "@/components/DownloadAppSection";
import { motion } from "framer-motion";

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
      <div className="relative z-0">
        <DownloadAppSection />

        {/* Triangle section */}
        <section className="py-16 bg-gray-50 relative -mt-24 md:-mt-32 overflow-visible">
          <div className="container mx-auto px-4 relative z-10">
            <div
              className="
        relative 
        flex flex-col md:flex-row 
        justify-center 
        gap-10 md:gap-12 
        items-center md:items-start
      "
            >
              {/* Blog */}
              <motion.div
                initial={{ opacity: 0, x: -100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="
          w-full md:w-1/2 
          flex flex-col z-10 
          order-1
        "
              >
                <BlogSection />
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="
          w-full md:w-1/2 
          flex flex-col z-10 
          order-2
        "
              >
                <Newsletter />
              </motion.div>
            </div>

            {/* Decorative glow shapes */}
            <div className="absolute -top-20 left-1/3 w-80 h-80 rounded-full bg-primary/10 blur-3xl -z-10"></div>
            <div className="absolute -bottom-16 right-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl -z-10"></div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
