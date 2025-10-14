import { useState } from "react";
import { Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const NewsletterCard = () => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl h-full relative overflow-hidden"
    >
      {/* Faint gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl" />

      <Card className="bg-transparent border-0 h-full">
        <CardContent className="relative p-8 flex flex-col justify-between h-full text-center space-y-6">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary/15 to-secondary/15 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Subscribe & Stay Inspired
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-xs mx-auto">
              Get exclusive deals, travel guides, and behind-the-scenes stories
              — straight to your inbox.
            </p>
          </div>

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
  );
};

export default NewsletterCard;
