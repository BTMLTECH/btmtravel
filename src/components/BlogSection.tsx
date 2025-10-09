import { ArrowRight, Newspaper } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

const BlogSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elevated">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Newspaper className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-2 text-foreground">Travel Tips & News</h2>
              <p className="text-muted-foreground">
                All our top travel offers, deals, insider tips and inspiration
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Latest Articles</h3>
                <p className="text-muted-foreground mb-4">
                  Tips, news and entertainment from our travel experts to make your next BTM Holiday even better.
                </p>
                <Button variant="outline" className="group">
                  Read All Articles
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Manage Existing Booking</h3>
                <p className="text-muted-foreground mb-4">
                  The fastest and easiest way to cancel your booking is online via our customer portal.
                </p>
                <Button variant="outline">
                  Access Portal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
