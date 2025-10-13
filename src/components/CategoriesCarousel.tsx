import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import studentImage from "@/assets/student-travel.jpg";
import africaImage from "@/assets/africa-travel.jpg";
import naijaImage from "@/assets/explore-naija.jpg";

const CategoriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    {
      title: "Student Visa",
      description:
        "Affordable packages and discounts for students traveling abroad.",
      image: studentImage,
      cta: "Book Now",
    },
    {
      title: "Travel Africa",
      description:
        "Discover authentic African culture and breathtaking landscapes.",
      image: africaImage,
      cta: "Explore",
    },
    {
      title: "Explore Naija",
      description: "Uncover Nigeria's hidden gems and rich heritage.",
      image: naijaImage,
      cta: "Discover",
    },
  ];

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + categories.length) % categories.length
    );

  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Floating ambient blur glows (subtle iPhone depth) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 12, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
            Popular Categories
          </h2>
          <p className="text-muted-foreground mt-2 text-base md:text-lg">
            Discover amazing travel experiences
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Card className="overflow-hidden rounded-3xl border border-white/30 bg-white/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <div className="relative h-[340px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
                  <img
                    src={categories[currentIndex].image}
                    alt={categories[currentIndex].title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Content */}
                  <CardContent className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 drop-shadow-md">
                      {categories[currentIndex].title}
                    </h3>
                    <p className="text-white/90 mb-6 text-sm sm:text-base md:text-lg max-w-lg">
                      {categories[currentIndex].description}
                    </p>

                    {/* Glass gradient button */}
                    <Button
                      className="rounded-full px-6 sm:px-8 py-2.5 font-semibold text-sm md:text-base
                        border border-white/40 bg-gradient-to-r from-primary/60 to-secondary/60 
                        backdrop-blur-md text-white/90 
                        shadow-md hover:from-primary hover:to-secondary 
                        hover:shadow-lg hover:scale-105 transition-all"
                    >
                      {categories[currentIndex].cta}
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 
              flex items-center justify-center rounded-full 
              bg-white/40 backdrop-blur-md border border-white/40 
              text-gray-800 hover:bg-white/60 shadow-md transition"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 
              flex items-center justify-center rounded-full 
              bg-white/40 backdrop-blur-md border border-white/40 
              text-gray-800 hover:bg-white/60 shadow-md transition"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {categories.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-primary to-secondary"
                    : "w-2 bg-gray-400/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesCarousel;
