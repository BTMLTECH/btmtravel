import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import appPreview from "@/assets/app.png";

const DownloadAppSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50 relative">
      {/* Decorative floating circles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 7, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-md mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6 flex flex-col items-center text-center"
        >
          {/* App Image */}
          <img
            src={appPreview}
            alt="BTM App Preview"
            className="w-3/4 md:w-2/3 rounded-2xl shadow-lg mb-6"
          />

          {/* Highlight Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full mb-4 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Introducing Our Mobile App
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
            Travel Smarter with the BTM App
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base mb-6">
            Book flights, hotels, and exclusive tours with just a few taps.
            Manage your trips, earn rewards, and explore new destinations
            anytime, anywhere.
          </p>

          {/* Glass-style Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm justify-center">
            <a
              href="#"
              className="flex-1 px-4 py-2 rounded-full 
               bg-gradient-to-r from-primary to-secondary 
               text-white font-semibold text-sm text-center 
               shadow-md border border-white/20 
               hover:shadow-lg hover:scale-105 
               transition-all duration-300"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="flex-1 px-4 py-2 rounded-full 
               bg-gradient-to-r from-secondary to-primary 
               text-white font-semibold text-sm text-center 
               shadow-md border border-white/20 
               hover:shadow-lg hover:scale-105 
               transition-all duration-300"
            >
              Download for Android
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
