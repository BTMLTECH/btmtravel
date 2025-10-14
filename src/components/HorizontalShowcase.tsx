import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import DownloadAppCard from "./DownloadAppCard";
import NewsletterCard from "./NewsletterCard";

const HorizontalShowcase = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 via-gray-50 to-transparent overflow-hidden">
      {/* Remove or soften the bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-primary/5 via-secondary/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8">
          {/* Blog Card */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0 25px 40px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="flex-1 bg-transparent"
          >
            <BlogCard />
          </motion.div>

          {/* Newsletter Card */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0 25px 40px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="flex-1 bg-transparent"
          >
            <NewsletterCard />
          </motion.div>

          {/* Download Card */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0 25px 40px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="flex-1 bg-transparent"
          >
            <DownloadAppCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalShowcase;
