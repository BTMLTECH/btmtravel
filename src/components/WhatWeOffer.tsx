import {
  Building2,
  Plane,
  MessageCircle,
  FileText,
  GraduationCap,
  Globe,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const WhatWeOffer = () => {
  // const offerings = [
  //   {
  //     title: "Tourism",
  //     description: "Curated travel experiences to exotic destinations worldwide",
  //     icon: Globe
  //   },
  //   {
  //     title: "Aviation Consultancy",
  //     description: "Expert guidance on aviation industry best practices",
  //     icon: Plane
  //   },
  //   {
  //     title: "Travel Consultations",
  //     description: "Personalized advice for your perfect journey",
  //     icon: MessageCircle
  //   },
  //   {
  //     title: "Documentation",
  //     description: "Complete assistance with travel documents and requirements",
  //     icon: FileText
  //   },
  //   {
  //     title: "Study Abroad",
  //     description: "Educational opportunities in prestigious institutions worldwide",
  //     icon: GraduationCap
  //   },
  //   {
  //     title: "Corporate Travel",
  //     description: "Streamlined business travel solutions for companies",
  //     icon: Building2
  //   }
  // ];
  const offerings = [
    {
      title: "Tourism",
      description:
        "Curated travel experiences to exotic destinations worldwide",
      image: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg",
    },
    {
      title: "Aviation Consultancy",
      description: "Expert guidance on aviation industry best practices",
      image:
        "https://images.pexels.com/photos/2101/airport-aircraft-airplane-aviation-2101.jpeg",
    },
    {
      title: "Travel Consultations",
      description: "Personalized advice for your perfect journey",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
    },
    {
      title: "Documentation",
      description: "Complete assistance with travel documents and requirements",
      image:
        "https://images.pexels.com/photos/1051077/pexels-photo-1051077.jpeg",
    },
    {
      title: "Study Abroad",
      description:
        "Educational opportunities in prestigious institutions worldwide",
      image:
        "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg",
    },
    {
      title: "Corporate Travel",
      description: "Streamlined business travel solutions for companies",
      image:
        "https://images.pexels.com/photos/1181401/pexels-photo-1181401.jpeg",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive travel solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <offering.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{offering.title}</CardTitle>
              </CardHeader> */}
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-6 h-6 object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{offering.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">{offering.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
