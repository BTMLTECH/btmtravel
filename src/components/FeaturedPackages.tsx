import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Star,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";

import ghana from "@/assets/Ghana 2.png";
import badagry from "@/assets/badagry.jpg";
import visa from "@/assets/top-view-hands-holding-travel-documents.jpg";
import processing from "@/assets/woman-teaching-bunch-keys.jpg";
import canada from "@/assets/Pic student pic.jpg";

const FeaturedPackages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const packages = [
    {
      title: "10 Days Tour of Ghana",
      location: "Accra, Ghana",
      duration: "10 Days / 9 Nights",
      price: "$1,299",
      rating: 4.8,
      reviews: 127,
      image: ghana,
    },
    {
      title: "Footprints of Our Past - Badagry Heritage Tour",
      location: "Badagry, Nigeria",
      duration: "3 Days / 2 Nights",
      price: "$450",
      rating: 4.9,
      reviews: 89,
      image: badagry,
    },
    {
      title: "Visa Requirement Consultation",
      location: "Online",
      duration: "1 Hour Session",
      price: "$99",
      rating: 5.0,
      reviews: 234,
      image: visa,
    },
    {
      title: "Visa Processing - All Countries",
      location: "Multiple Destinations",
      duration: "Processing Time Varies",
      price: "From $200",
      rating: 4.7,
      reviews: 412,
      image: processing,
    },
    {
      title: "Study, Work and Live in Canada (Post Graduate)",
      location: "Canada",
      duration: "Full Service Package",
      price: "$2,499",
      rating: 4.9,
      reviews: 156,
      image: canada,
    },
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, packages.length - itemsPerPage);

  const nextSlide = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  const visiblePackages = showAll
    ? packages
    : packages.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Ambient glow for Apple depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-gray-900 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
            Featured Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Handpicked experiences curated for unforgettable journeys
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex + (showAll ? "-all" : "")}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {visiblePackages.map((pkg, i) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <Card className="relative rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-56 md:h-64 overflow-hidden rounded-t-3xl">
                      <motion.img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-white/80 text-gray-900 font-semibold shadow-sm backdrop-blur-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />{" "}
                        {pkg.rating}
                      </Badge>
                    </div>

                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                        {pkg.title}
                      </h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          {pkg.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-secondary" />
                          {pkg.duration}
                        </div>
                        <div className="text-xs opacity-70">
                          {pkg.reviews} reviews
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="flex items-center justify-between px-6 pb-6">
                      <div>
                        <span className="text-xs text-gray-500 block">
                          Starting from
                        </span>
                        <span className="text-xl font-bold text-gray-900">
                          {pkg.price}
                        </span>
                      </div>

                      {/* Glass gradient button */}
                      <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        className="px-5 py-2 rounded-full font-semibold text-sm 
                          text-white bg-gradient-to-r from-primary/70 to-secondary/70 
                          border border-white/40 backdrop-blur-md 
                          shadow-md hover:from-primary hover:to-secondary 
                          hover:shadow-lg transition-all"
                      >
                        View Details
                      </motion.button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {!showAll && (
            <>
              {currentIndex > 0 && (
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 
                    hidden lg:flex items-center justify-center w-10 h-10 
                    rounded-full border border-white/50 bg-gradient-to-r from-primary/40 to-secondary/40 
                    backdrop-blur-md shadow-md hover:from-primary hover:to-secondary 
                    text-white transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
              )}
              {currentIndex < maxIndex && (
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 
                    hidden lg:flex items-center justify-center w-10 h-10 
                    rounded-full border border-white/50 bg-gradient-to-r from-primary/40 to-secondary/40 
                    backdrop-blur-md shadow-md hover:from-primary hover:to-secondary 
                    text-white transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              )}
            </>
          )}
        </div>

        {/* Show More */}
        {packages.length > itemsPerPage && (
          <div className="flex justify-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-2.5 rounded-full font-semibold text-sm md:text-base 
                text-white bg-gradient-to-r from-primary/60 to-secondary/60 
                border border-white/40 backdrop-blur-md shadow-md 
                hover:from-primary hover:to-secondary hover:shadow-lg transition-all"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show Less" : "Show More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPackages;
