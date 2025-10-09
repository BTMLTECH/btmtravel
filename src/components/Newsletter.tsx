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
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="max-w-3xl mx-auto border-none bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl shadow-lg overflow-hidden">
            <CardContent className="p-6 md:p-10 text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-primary-foreground/10 mb-3">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-1">
                    Subscribe & Stay Inspired
                  </h2>
                  <p className="text-sm md:text-base opacity-90 max-w-md mx-auto">
                    Get exclusive deals, travel guides, and behind-the-scenes
                    stories — straight to your inbox.
                  </p>
                </div>
              </motion.div>

              <motion.form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/90 text-foreground border-none focus-visible:ring-2 focus-visible:ring-primary"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  size="default"
                  className="px-5 font-semibold transition-all hover:scale-105"
                >
                  Subscribe
                </Button>
              </motion.form>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="pt-4 border-t border-white/20"
              >
                <h3 className="text-lg font-semibold mb-2">
                  Customise Your Dream Holiday
                </h3>
                <p className="text-sm opacity-90 max-w-xl mx-auto">
                  Let our travel experts design the perfect getaway for you — or
                  bring friends along for group discounts and extra fun!
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
