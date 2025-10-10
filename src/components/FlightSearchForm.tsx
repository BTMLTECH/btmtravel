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
import LazyImage from "./LazyImage";

// Images
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
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked experiences curated for unforgettable journeys
          </p>
        </motion.div>

        {/* Packages */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex + (showAll ? "-all" : "")}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {visiblePackages.map((pkg, i) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="group relative rounded-2xl overflow-hidden shadow-md border-0 bg-background hover:shadow-xl transition-all duration-500">
                    {/* Lazy Loaded Image */}
                    <div className="relative h-56 overflow-hidden">
                      <LazyImage
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-110 will-change-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-white/90 text-foreground flex items-center gap-1 shadow-md">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        {pkg.rating}
                      </Badge>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-foreground line-clamp-2">
                        {pkg.title}
                      </h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          {pkg.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-secondary" />
                          {pkg.duration}
                        </div>
                        <div className="text-xs">{pkg.reviews} reviews</div>
                      </div>
                    </CardContent>

                    {/* Footer */}
                    <CardFooter className="flex items-center justify-between px-6 pb-5">
                      <div>
                        <span className="text-sm text-muted-foreground block">
                          Starting from
                        </span>
                        <span className="text-2xl font-bold text-primary">
                          {pkg.price}
                        </span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-primary to-secondary shadow-md hover:shadow-xl transition-all duration-300"
                      >
                        View Details
                      </motion.button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {!showAll && (
            <>
              {currentIndex > 0 && (
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:flex z-20 bg-background/70 backdrop-blur border-primary/30 hover:bg-primary/10"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="w-6 h-6 text-primary" />
                </Button>
              )}

              {currentIndex < maxIndex && (
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:flex z-20 bg-background/70 backdrop-blur border-primary/30 hover:bg-primary/10"
                  onClick={nextSlide}
                >
                  <ChevronRight className="w-6 h-6 text-primary" />
                </Button>
              )}
            </>
          )}
        </div>

        {/* Show More / Less */}
        {packages.length > itemsPerPage && (
          <div className="flex justify-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-primary to-secondary shadow-lg hover:shadow-xl transition-all duration-300"
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
