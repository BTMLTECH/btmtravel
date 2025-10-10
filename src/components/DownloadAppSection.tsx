import { motion } from "framer-motion";
import { Download, Smartphone, Sparkles } from "lucide-react";
import appPreview from "@/assets/app-preview.png"; // You can replace this with your app mockup
import playBadge from "@/assets/google-play-badge.png";
import appStoreBadge from "@/assets/app-store-badge.png";

const DownloadAppSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-background/80 to-muted overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 left-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* Left side — App preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={appPreview}
              alt="BTM App Preview"
              className="w-3/4 md:w-[70%] max-w-sm drop-shadow-2xl rounded-3xl"
            />
          </motion.div>

          {/* Right side — Text & buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-4 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Introducing Our Mobile App
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x">
              Travel Smarter with the BTM App
            </h2>

            <p className="text-muted-foreground/90 max-w-lg mx-auto md:mx-0 mb-8">
              Book flights, hotels, and exclusive tours with just a few taps.
              Manage your trips, earn rewards, and explore new destinations
              anytime, anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/30 hover:scale-[1.02] transition-all"
              >
                <Download className="w-4 h-4" />
                Download Now
              </a>

              <div className="flex items-center justify-center sm:justify-start gap-4">
                <img
                  src={playBadge}
                  alt="Google Play"
                  className="h-12 cursor-pointer hover:scale-105 transition-transform"
                />
                <img
                  src={appStoreBadge}
                  alt="App Store"
                  className="h-12 cursor-pointer hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
