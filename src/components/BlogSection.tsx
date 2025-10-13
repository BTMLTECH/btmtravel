import { motion } from "framer-motion";
import { ArrowRight, Newspaper } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const BlogSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Subtle brand gradient background accents */}
      <div className="absolute -top-40 -left-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-md mx-auto flex flex-col"
        >
          <Card className="rounded-3xl border border-gray-100  overflow-hidden transition-all duration-300">
            <CardContent className="p-8 flex flex-col justify-between h-full text-center space-y-6">
              {/* Header */}
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Newspaper className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
                  Travel Tips & News
                </h2>
                <p className="text-sm md:text-base text-gray-600 max-w-xs mx-auto">
                  All our top travel offers, deals, insider tips, and
                  inspiration — all in one place.
                </p>
              </div>

              {/* Latest Articles */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  Latest Articles
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-5">
                  Tips, news, and entertainment from our travel experts to make
                  your next BTM holiday even better.
                </p>

                {/* Clean gradient button (brand colors) */}
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
      </div>
    </section>
  );
};

export default BlogSection;
