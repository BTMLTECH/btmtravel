import { motion } from "framer-motion";
import { Tabs, TabsContent } from "./ui/tabs";
import FlightSearchForm from "./FlightSearchForm";
import jumboImage from "@/assets/jumbo-image.webp";

const HeroSection = () => {
  return (
    <section
      className="
        relative min-h-[100vh]
        flex items-center justify-center
        overflow-hidden
        bg-gradient-to-b from-background via-background/60 to-muted
        pt-24 md:pt-0
      "
    >
      {/* 🌅 Animated Background Image with Parallax Drift */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={jumboImage}
          alt="Luxury travel destination"
          className="w-full h-full object-cover object-center"
          // Subtle parallax drift effect
          initial={{ scale: 1.1, x: -30, y: -10 }}
          animate={{ scale: 1.1, x: 30, y: 10 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/90" />
      </div>

      {/* ✨ Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1
            className="
              text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-3 md:mb-4 tracking-tight
            "
          >
            <span
              className="
                block bg-clip-text text-transparent
                bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x
              "
            >
              Everything Travel
            </span>
            <span className="text-foreground/90 block mt-1 md:mt-2">
              Book BTM
            </span>
          </h1>

          <p
            className="
              text-base sm:text-lg md:text-xl text-muted-foreground/90 mt-4 font-light
              max-w-xl sm:max-w-2xl mx-auto
            "
          >
            Discover. Book. Experience. — Flights, Tours & Stays that move you.
          </p>
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 sm:mt-12"
        >
          <div
            className="
              max-w-md sm:max-w-4xl mx-auto
              bg-white/95 border border-primary/10
              rounded-2xl p-4 sm:p-6
              transition-all
            "
          >
            <Tabs defaultValue="flight" className="w-full">
              <TabsContent value="flight">
                <FlightSearchForm />
              </TabsContent>

              <TabsContent value="stays">
                <div className="bg-white border border-primary/10 p-6 sm:p-8 rounded-xl text-center">
                  <p className="text-muted-foreground">
                    Stays booking coming soon...
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="packages">
                <div className="bg-white border border-primary/10 p-6 sm:p-8 rounded-xl text-center">
                  <p className="text-muted-foreground">
                    Package booking coming soon...
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="tour">
                <div className="bg-white border border-primary/10 p-6 sm:p-8 rounded-xl text-center">
                  <p className="text-muted-foreground">
                    Tour booking coming soon...
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
