import { motion } from "framer-motion";
import { useState } from "react";
import btmholidays from "@/assets/btmholidays.png";
import journeyeasy from "@/assets/journeyeasy.png";
import market from "@/assets/market-place.png";

const ServiceShowcase = () => {
  const [hovered, setHovered] = useState(null);

  const services = [
    {
      id: 1,
      title: "Adventures",
      description: "The easiest way to book your next trip!.",
      image: btmholidays,
      link: "https://tours.btmholidays.com/",
    },
    {
      id: 2,
      title: "Wholesales",
      description:
        "Travel and Earn with the BTM Travel Club JourneyEasy™! Collect points, grow your travel family & get amazing discounts and promo’s.",
      image: journeyeasy,
      link: "https://www.journeyeasy.net/",
    },
    {
      id: 3,
      title: "Sell your tours",
      description:
        "Sell Your Travel Products and Packages! We are looking for creative mins and tour guides with unique tours and experiences across the African continent.",
      image: market,
      link: "https://marketplace.btmlimited.net/",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col md:flex-row gap-4 h-[420px] overflow-hidden">
          {services.map((service) => {
            const isActive = hovered === service.id;
            return (
              <motion.div
                key={service.id}
                className={`relative flex-1 rounded-2xl overflow-hidden cursor-pointer transition-all ${
                  isActive ? "z-30" : "z-10"
                }`}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                animate={{
                  flex: isActive ? 3 : 1,
                  zIndex: isActive ? 30 : 10,
                  scale: isActive ? 1.02 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 0.6,
                }}
              >
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                  animate={{ scale: isActive ? 1.08 : 1 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* Title always visible */}
                <div className="absolute bottom-6 left-6 z-10 text-white pointer-events-none">
                  <h2 className="text-2xl md:text-3xl font-bold drop-shadow-lg">
                    {service.title}
                  </h2>
                </div>

                {/* Hover content */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-black/60 backdrop-blur-sm"
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 30,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <h3 className="text-3xl md:text-4xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 mb-6 max-w-md">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="px-8 py-3 rounded-full font-semibold text-white 
                                 bg-gradient-to-r from-primary to-secondary 
                                 shadow-lg shadow-primary/30 transition-all duration-300"
                    >
                      Explore Now
                    </motion.button>
                  </a>
                </motion.div>

                {/* Optional subtle shadow on hover for depth */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
