import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import appPreview from "@/assets/app.png";

const DownloadAppCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl 
                 p-6 flex flex-col items-center text-center h-full relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl" />

      <img
        src={appPreview}
        alt="BTM App Preview"
        className="relative w-2/3 rounded-2xl shadow-lg mb-4"
      />

      <div className="relative inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-0.5 rounded-full mb-3 text-xs font-medium">
        <Sparkles className="w-3.5 h-3.5" />
        Introducing Our Mobile App
      </div>

      <h2 className="relative text-xl md:text-2xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
        Travel Smarter with the BTM App
      </h2>

      <p className="relative text-gray-700 text-xs md:text-sm mb-5">
        Book flights, hotels, and exclusive tours with just a few taps. Manage
        your trips, earn rewards, and explore new destinations anytime,
        anywhere.
      </p>

      <div className="relative flex flex-col sm:flex-row gap-2 w-full max-w-xs justify-center">
        <a
          href="#"
          className="flex-1 px-3 py-1.5 rounded-full 
                     bg-gradient-to-r from-primary to-secondary 
                     text-white font-medium text-xs text-center 
                     shadow-md hover:shadow-lg hover:scale-105 
                     transition-all duration-300"
        >
          iOS
        </a>
        <a
          href="#"
          className="flex-1 px-3 py-1.5 rounded-full 
                     bg-gradient-to-r from-secondary to-primary 
                     text-white font-medium text-xs text-center 
                     shadow-md hover:shadow-lg hover:scale-105 
                     transition-all duration-300"
        >
          Android
        </a>
      </div>
    </motion.div>
  );
};

export default DownloadAppCard;
