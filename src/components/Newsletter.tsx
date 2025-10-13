import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed! 🎉",
        description: "Thank you for joining our travel community.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-12 md:py-16 relative overflow-hidden ">
      {/* Subtle brand-colored glow accents */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card className="max-w-md mx-auto bg-white border  rounded-3xl overflow-hidden transition-all duration-500">
            <CardContent className="p-8 flex flex-col justify-between h-full text-center space-y-6">
              {/* Header */}
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary/15 to-secondary/15 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                  Subscribe & Stay Inspired
                </h2>
                <p className="text-sm md:text-base text-gray-600 max-w-xs mx-auto">
                  Get exclusive deals, travel guides, and behind-the-scenes
                  stories — straight to your inbox.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 w-full items-center"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 min-w-0 border border-gray-200 rounded-full px-4 py-2.5 
                             focus:ring-2 focus:ring-primary focus:outline-none text-sm md:text-base"
                />

                {/* Gradient Subscribe Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-2.5 rounded-full text-white font-semibold text-sm md:text-base 
                             bg-gradient-to-r from-primary to-secondary 
                             hover:opacity-90 transition-all w-full sm:w-auto"
                >
                  Subscribe
                </motion.button>
              </form>

              {/* Footer */}
              <div className="border-t border-gray-100 pt-4 text-center">
                <h3 className="text-sm font-medium text-gray-800 mb-1">
                  Customise Your Dream Holiday
                </h3>
                <p className="text-xs md:text-sm text-gray-600 max-w-xs mx-auto">
                  Let our travel experts design the perfect getaway — or bring
                  friends for group discounts and extra fun!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
