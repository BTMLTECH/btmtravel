import { motion } from "framer-motion";
import { useState } from "react";
import btmholidays from "@/assets/btmholidays.png";
import journeyeasy from "@/assets/journeyeasy.png";
import market from "@/assets/market-place.png";
import corporate from "@/assets/cor.jpg"; // ✅ new image import

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
      title: "Corporate",
      description:
        "Tailored corporate travel management solutions for seamless business journeys — powered by BTM Limited.",
      image: corporate,
      link: "https://www.btmlimited.net/",
    },
    {
      id: 3,
      title: "Wholesale",
      description:
        "Travel and Earn with the BTM Travel Club JourneyEasy™! Collect points, grow your travel family & get amazing discounts.",
      image: journeyeasy,
      link: "https://www.journeyeasy.net/",
    },
    {
      id: 4,
      title: "Sell Your Tours",
      description:
        "Share your creativity! Partner with us and showcase your tours across Africa’s top destinations.",
      image: market,
      link: "https://marketplace.btmlimited.net/",
    },
  ];

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
            Explore Our Services
          </span>
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:h-[420px] flex-wrap md:flex-nowrap">
          {services.map((service) => {
            const isActive = hovered === service.id;

            return (
              <motion.div
                key={service.id}
                className={`relative flex-1 rounded-3xl overflow-hidden cursor-pointer transition-all ${
                  isActive ? "z-30" : "z-10"
                }`}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                animate={{
                  flex: isActive ? 3 : 1,
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
                  animate={{ scale: isActive ? 1.07 : 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                {/* Mobile layout */}
                <div className="relative z-10 flex flex-col justify-end text-white p-6 md:hidden h-full">
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className="text-sm text-gray-100 mb-4">
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
                      className="px-6 py-2 rounded-full font-semibold text-white
                      bg-gradient-to-r from-primary to-secondary
                      shadow-md hover:shadow-lg hover:opacity-90 transition-all"
                    >
                      Explore Now
                    </motion.button>
                  </a>
                </div>

                {/* Desktop overlay */}
                <motion.div
                  className="absolute inset-0 hidden md:flex flex-col justify-center items-center text-center p-6 
                    bg-white/10 backdrop-blur-sm"
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 20,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <motion.h3
                    className="text-3xl md:text-4xl font-semibold text-white mb-3 drop-shadow-lg"
                    animate={{
                      y: isActive ? 0 : 10,
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-100 mb-6 max-w-md"
                    animate={{
                      y: isActive ? 0 : 10,
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    {service.description}
                  </motion.p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden px-8 py-3 rounded-full font-semibold text-white 
                      bg-gradient-to-r from-primary to-secondary shadow-md transition-all"
                    >
                      <span className="relative z-10">Explore Now</span>
                      {/* iPhone-like shimmer reflection */}
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent opacity-0"
                        animate={{
                          opacity: [0, 0.5, 0],
                          x: [-100, 100, 150],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.button>
                  </a>
                </motion.div>

                {/* Bottom label for desktop */}
                <div className="absolute bottom-6 left-6 hidden md:block">
                  <h2 className="text-3xl font-bold text-white drop-shadow-md">
                    {service.title}
                  </h2>
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
