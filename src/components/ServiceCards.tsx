import { Compass, Plane as PlaneIcon, Briefcase } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const ServiceCards = () => {
  const services = [
    {
      title: "Adventure",
      description: "Explore thrilling destinations and unforgettable experiences",
      icon: Compass,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Wholesale",
      description: "Exclusive bulk travel packages for groups and businesses",
      icon: Briefcase,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Sell Your Tours",
      description: "Partner with us to offer your unique travel experiences",
      icon: PlaneIcon,
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
