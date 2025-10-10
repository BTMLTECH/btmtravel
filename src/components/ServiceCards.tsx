import { motion } from "framer-motion";
import { useState } from "react";
import btmholidays from "@/assets/btmholidays.png";
import journeyeasy from "@/assets/journeyeasy.png";
import market from "@/assets/market-place.png";

const ServiceShowcase = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Adventures",
      description: "The easiest way to book your next trip!",
      image: btmholidays,
      link: "https://tours.btmholidays.com/",
    },
    {
      id: 2,
      title: "Wholesales",
      description:
        "Travel and Earn with the BTM Travel Club JourneyEasy™! Collect points, grow your travel family & get amazing discounts and promos.",
      image: journeyeasy,
      link: "https://www.journeyeasy.net/",
    },
    {
      id: 3,
      title: "Sell your tours",
      description:
        "Sell Your Travel Products and Packages! We are looking for creative minds and tour guides with unique tours and experiences across Africa.",
      image: market,
      link: "https://marketplace.btmlimited.net/",
    },
  ];

  return (
    <section className="relative w-full py-16 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Wrapper adjusts layout based on screen size */}
        <div className="flex flex-col md:flex-row gap-6 md:h-[420px]">
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
                {/* Background image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                  animate={{ scale: isActive ? 1.08 : 1 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent md:to-transparent" />

                {/* ---- TEXT CONTENT ---- */}
                <div className="relative z-10 flex flex-col justify-start md:justify-end text-white p-6 md:p-8 h-full">
                  {/* On mobile, show title + description at the top */}
                  <div className="md:hidden mb-4">
                    <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                    <p className="text-sm text-gray-200 mb-4">
                      {service.description}
                    </p>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30"
                      >
                        Explore Now
                      </motion.button>
                    </a>
                  </div>

                  {/* Desktop-only bottom title */}
                  <div className="absolute bottom-6 left-6 hidden md:block">
                    <h2 className="text-3xl font-bold drop-shadow-lg">
                      {service.title}
                    </h2>
                  </div>

                  {/* Desktop hover overlay */}
                  <motion.div
                    className="absolute inset-0 hidden md:flex flex-col justify-center items-center text-center p-6 bg-black/60 backdrop-blur-sm"
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
                        className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30 transition-all duration-300"
                      >
                        Explore Now
                      </motion.button>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
