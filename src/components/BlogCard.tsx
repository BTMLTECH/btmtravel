import { motion } from "framer-motion";
import { ArrowRight, Newspaper } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const BlogCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl h-full relative overflow-hidden"
    >
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl" />

      <Card className="bg-transparent border-0 h-full">
        <CardContent className="relative p-8 flex flex-col justify-between h-full text-center space-y-6">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary/15 to-secondary/15 flex items-center justify-center mx-auto mb-4">
              <Newspaper className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Travel Tips & News
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-xs mx-auto">
              All our top travel offers, deals, insider tips, and inspiration —
              all in one place.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              Latest Articles
            </h3>
            <p className="text-xs md:text-sm text-gray-600 mb-5">
              Tips, news, and entertainment from our travel experts to make your
              next BTM holiday even better.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="inline-flex items-center justify-center gap-2 
                         w-full sm:w-auto px-6 py-2.5 rounded-full 
                         bg-gradient-to-r from-primary to-secondary 
                         text-white font-semibold text-sm 
                         hover:opacity-90 transition-all duration-300"
            >
              Read All Articles
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
