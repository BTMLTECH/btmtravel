import { motion } from "framer-motion";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";

// Example images (replace with your actual ones)
import tourism from "@/assets/tourismcon.png";
import aviation from "@/assets/aviation.png";
import travel from "@/assets/travelc.png";
import club from "@/assets/SMB-Travel-club.png";
import concierge from "@/assets/Airport-Concierge-Website.png";
import visa from "@/assets/visaas.png";
import training from "@/assets/travelc.png";
import hotel from "@/assets/holidays-tours.png";
import destination from "@/assets/destinationm.png";
import security from "@/assets/securitye.png";
import jet from "@/assets/executivej.png";
import meeting from "@/assets/meetinge.png";
import group from "@/assets/group.png";
import transfer from "@/assets/industrial-training.png";
import airport from "@/assets/airportt.png";

const WhatWeOffer = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const offerings = [
    { title: "Tourism Consultancy", image: tourism },
    { title: "Aviation Consultancy", image: aviation },
    { title: "Travel Consultation", image: travel },
    { title: "SMB Travel Club", image: club },
    { title: "Airport Concierge", image: concierge },
    { title: "Industrial Training", image: training },
    { title: "Visa Assistance & Consultation", image: visa },
    { title: "Airport Transfer & Transportation", image: transfer },
    { title: "Hotel & Accommodation", image: hotel },
    { title: "Destination Management", image: destination },
    { title: "Holidays & Tours", image: tourism },
    { title: "Security & Escort Services", image: security },
    { title: "Executive Jet Charter & Clearance", image: jet },
    { title: "Meeting & Event Management", image: meeting },
    { title: "Group Travel & Airline Seat Blocking", image: group },
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          What We Offer
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore our core travel and aviation services designed to elevate your
          journey from start to finish.
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {offerings.map((offer, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="relative h-[280px] w-[95%] mx-auto rounded-2xl overflow-hidden group shadow-lg"
              >
                {/* Background image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${offer.image})`,
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/70" />

                {/* Title and hover info */}
                <div className="absolute inset-0 flex flex-col justify-end items-start p-5 text-white">
                  <h3 className="text-xl font-semibold mb-1 drop-shadow-lg">
                    {offer.title}
                  </h3>
                  <motion.div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-gray-200 mb-3 text-sm max-w-xs">
                      Discover excellence in travel and hospitality through our
                      bespoke services.
                    </p>
                    {/* Glass + Brand Gradient Button */}
                    <button
                      className="px-4 py-1.5 text-xs font-semibold rounded-full
                        border border-white/30 
                        bg-gradient-to-r from-primary/60 to-secondary/60 
                        backdrop-blur-md text-white/90 
                        shadow-md hover:from-primary hover:to-secondary 
                        hover:shadow-lg hover:scale-105 
                        transition-all duration-300"
                    >
                      Learn More
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="px-4 py-2 rounded-full text-sm font-semibold text-white 
              bg-gradient-to-r from-primary to-secondary 
              shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            Prev
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="px-4 py-2 rounded-full text-sm font-semibold text-white 
              bg-gradient-to-r from-primary to-secondary 
              shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            Next
          </button>
        </div>
      </div>

      {/* Optional soft background glow for depth */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 blur-3xl rounded-full"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
    </section>
  );
};

export default WhatWeOffer;
