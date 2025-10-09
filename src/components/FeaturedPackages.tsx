import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";

const FeaturedPackages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const packages = [
    {
      title: "10 Days Tour of Ghana",
      location: "Accra, Ghana",
      duration: "10 Days / 9 Nights",
      price: "$1,299",
      rating: 4.8,
      reviews: 127
    },
    {
      title: "Footprints of Our Past - Badagry Heritage Tour",
      location: "Badagry, Nigeria",
      duration: "3 Days / 2 Nights",
      price: "$450",
      rating: 4.9,
      reviews: 89
    },
    {
      title: "Visa Requirement Consultation",
      location: "Online",
      duration: "1 Hour Session",
      price: "$99",
      rating: 5.0,
      reviews: 234
    },
    {
      title: "Visa Processing - All Countries",
      location: "Multiple Destinations",
      duration: "Processing Time Varies",
      price: "From $200",
      rating: 4.7,
      reviews: 412
    },
    {
      title: "Study, Work and Live in Canada (Post Graduate)",
      location: "Canada",
      duration: "Full Service Package",
      price: "$2,499",
      rating: 4.9,
      reviews: 156
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, packages.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visiblePackages = packages.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Packages</h2>
          <p className="text-muted-foreground">Handpicked experiences for unforgettable journeys</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visiblePackages.map((pkg, index) => (
              <Card key={currentIndex + index} className="shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-foreground">
                    <Star className="w-3 h-3 fill-primary text-primary mr-1" />
                    {pkg.rating}
                  </Badge>
                </div>
                
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-2 min-h-[56px]">
                    {pkg.title}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{pkg.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="text-xs">
                      {pkg.reviews} reviews
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                  </div>
                  <Button>View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {currentIndex > 0 && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:flex"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          )}

          {currentIndex < maxIndex && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:flex"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          )}
        </div>

        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentIndex === 0}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={nextSlide} disabled={currentIndex >= maxIndex}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
