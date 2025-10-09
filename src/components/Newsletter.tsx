import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-hero text-primary-foreground border-0 shadow-elevated">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Subscribe to our Newsletter</h2>
              <p className="text-primary-foreground/90">
                Get inspired! Receive travel discounts, tips and behind the scenes stories.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white text-foreground"
              />
              <Button type="submit" variant="secondary" size="lg">
                Subscribe
              </Button>
            </form>

            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-3">Customise Your Dream Holiday</h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Get your destination inspiration from BTM Holidays and let our experts customise 
                your holiday to perfectly suit you. Invite 10+ people for more fun and greater discounts!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
