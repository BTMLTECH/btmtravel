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

  // Auto-slide every 6 seconds
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
    <section className="relative py-10 bg-background/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
          <span className="text-primary">Exclusive</span> Offers Just for You
        </h2>

        <div className="relative overflow-hidden rounded-xl shadow-md max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={adverts[current].id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="relative h-[220px] md:h-[280px]"
            >
              <img
                src={adverts[current].image}
                alt={adverts[current].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              <div className="absolute bottom-3 left-0 right-0 px-5 text-white text-center">
                <h3 className="text-lg md:text-xl font-semibold mb-1">
                  {adverts[current].title}
                </h3>
                <p className="text-xs md:text-sm opacity-90 mb-3">
                  {adverts[current].desc}
                </p>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-primary to-secondary text-white text-xs px-4 py-1.5 hover:scale-105 transition-transform"
                >
                  <a href={adverts[current].link}>Learn More</a>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/30 hover:bg-black/50 font-semibold 
                bg-gradient-to-r from-primary to-secondary 
                shadow-lg text-white transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/30 hover:bg-black/50 font-semibold 
                bg-gradient-to-r from-primary to-secondary 
                shadow-lg text-white transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {adverts.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                current === i
                  ? "bg-primary scale-110"
                  : "bg-muted-foreground/40 hover:bg-primary/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertCarousel;
