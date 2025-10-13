import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import advert1 from "@/assets/advert1.png";
import advert2 from "@/assets/advert2.png";
import advert3 from "@/assets/advert3.png";

const AdvertCarousel = () => {
  const [current, setCurrent] = useState(0);

  const adverts = [
    {
      id: 1,
      image: advert1,
      title: "Sail into Paradise 🌴",
      desc: "Get 20% off luxury yacht trips — limited-time offer for group bookings.",
      link: "/book",
    },
    {
      id: 2,
      image: advert2,
      title: "Exclusive Flight Deals ✈️",
      desc: "Save big on your next getaway — explore flights to top destinations.",
      link: "/flights",
    },
    {
      id: 3,
      image: advert3,
      title: "Travel Smart with BTM 💼",
      desc: "Your all-in-one travel partner for flights, cruises, and hotels.",
      link: "/packages",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % adverts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [adverts.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % adverts.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + adverts.length) % adverts.length);

  return (
    <section className="relative py-10 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
            Exclusive
          </span>{" "}
          Offers Just for You
        </h2>

        <div className="relative overflow-hidden rounded-2xl max-w-2xl mx-auto shadow-[0_8px_25px_rgba(0,0,0,0.05)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={adverts[current].id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="relative h-[220px] md:h-[280px]"
            >
              {/* Background Image */}
              <img
                src={adverts[current].image}
                alt={adverts[current].title}
                className="w-full h-full object-cover"
              />

              {/* Light gradient only at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Content — clean & readable */}
              <div className="absolute bottom-4 left-0 right-0 px-4 sm:px-6 text-center text-white drop-shadow-lg">
                <h3 className="text-lg font-semibold mb-1">
                  {adverts[current].title}
                </h3>
                <p className="text-xs md:text-sm opacity-95 mb-3">
                  {adverts[current].desc}
                </p>

                {/* Brand gradient button */}
                <Button
                  asChild
                  size="sm"
                  className="text-xs font-semibold px-5 py-1.5 rounded-full shadow-md border border-white/20
                    bg-gradient-to-r from-primary to-secondary text-white 
                    hover:opacity-90 hover:scale-105 transition-all"
                >
                  <a href={adverts[current].link}>Learn More</a>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows — minimal, subtle */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full 
              bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full 
              bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-5">
          {adverts.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setCurrent(i)}
              whileHover={{ scale: 1.15 }}
              className={`h-2.5 rounded-full cursor-pointer transition-all ${
                current === i
                  ? "w-6 bg-gradient-to-r from-primary to-secondary"
                  : "w-2.5 bg-gray-300/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertCarousel;
