// import {
//   Building2,
//   Plane,
//   MessageCircle,
//   FileText,
//   GraduationCap,
//   Globe,
// } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// const WhatWeOffer = () => {
//   const offerings = [
//     {
//       title: "Tourism",
//       description:
//         "Curated travel experiences to exotic destinations worldwide",
//       icon: Globe,
//     },
//     {
//       title: "Aviation Consultancy",
//       description: "Expert guidance on aviation industry best practices",
//       icon: Plane,
//     },
//     {
//       title: "Travel Consultations",
//       description: "Personalized advice for your perfect journey",
//       icon: MessageCircle,
//     },
//     {
//       title: "Documentation",
//       description: "Complete assistance with travel documents and requirements",
//       icon: FileText,
//     },
//     {
//       title: "Study Abroad",
//       description:
//         "Educational opportunities in prestigious institutions worldwide",
//       icon: GraduationCap,
//     },
//     {
//       title: "Corporate Travel",
//       description: "Streamlined business travel solutions for companies",
//       icon: Building2,
//     },
//   ];

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
//             What We Offer
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Comprehensive travel solutions tailored to your needs
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {offerings.map((offering, index) => (
//             <Card
//               key={index}
//               className="shadow-card hover:shadow-elevated transition-all duration-300"
//             >
//               <CardHeader>
//                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
//                   <offering.icon className="w-6 h-6 text-primary" />
//                 </div>
//                 <CardTitle className="text-xl">{offering.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground">{offering.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeOffer;
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
    <section className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4 text-center">
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
                className="relative h-[280px] w-[95%] mx-auto rounded-xl overflow-hidden group shadow-lg"
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
                    <button className="px-3 py-1.5  bg-gradient-to-r from-primary to-secondary  rounded-full text-xs font-semibold shadow-lg">
                      Learn More
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="px-4 py-2 rounded-full text-white  bg-gradient-to-r from-primary to-secondary  transition"
          >
            Prev
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="px-4 py-2 rounded-full  text-white bg-gradient-to-r from-primary to-secondary transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
