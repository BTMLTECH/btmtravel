import { motion } from "framer-motion";
import { Plane, Hotel, Package, Map } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import FlightSearchForm from "./FlightSearchForm";
import heroImage from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/60 to-muted">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/95 backdrop-blur-[2px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x">
              Everything Travel
            </span>
            <span className="text-foreground/90 block mt-2">Book BTM</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground/90 mt-3 font-light max-w-2xl mx-auto">
            Discover. Book. Experience. — Flights, Tours & Stays that move you.
          </p>
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12"
        >
          <div className="max-w-5xl mx-auto bg-card/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-border/40">
            <Tabs defaultValue="flight" className="w-full">
              <TabsContent value="flight">
                <FlightSearchForm />
              </TabsContent>

              <TabsContent value="stays">
                <div className="bg-card p-8 rounded-lg shadow-card text-center">
                  <p className="text-muted-foreground">
                    Stays booking coming soon...
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="packages">
                <div className="bg-card p-8 rounded-lg shadow-card text-center">
                  <p className="text-muted-foreground">
                    Package booking coming soon...
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="tour">
                <div className="bg-card p-8 rounded-lg shadow-card text-center">
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
