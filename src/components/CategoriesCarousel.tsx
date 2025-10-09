import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import studentImage from "@/assets/student-travel.jpg";
import africaImage from "@/assets/africa-travel.jpg";
import naijaImage from "@/assets/explore-naija.jpg";

const CategoriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    {
      title: "Student Visa",
      description: "Affordable packages and discounts for students traveling abroad",
      image: studentImage,
      cta: "Book Now"
    },
    {
      title: "Travel Africa",
      description: "Discover authentic African culture and breathtaking landscapes",
      image: africaImage,
      cta: "Explore"
    },
    {
      title: "Explore Naija",
      description: "Uncover Nigeria's hidden gems and rich heritage",
      image: naijaImage,
      cta: "Discover"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Popular Categories</h2>
          <p className="text-muted-foreground">Discover amazing travel experiences</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-elevated">
            <div className="relative h-[400px]">
              <img
                src={categories[currentIndex].image}
                alt={categories[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{categories[currentIndex].title}</h3>
                <p className="mb-4 text-white/90">{categories[currentIndex].description}</p>
                <Button variant="default" size="lg">
                  {categories[currentIndex].cta}
                </Button>
              </CardContent>
            </div>
          </Card>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="flex justify-center gap-2 mt-6">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesCarousel;
