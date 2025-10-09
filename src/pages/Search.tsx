import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Filter, Plane, Clock, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const Search = () => {
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const flights = [
    {
      airline: "Air Peace",
      departure: "09:00 AM",
      arrival: "11:30 AM",
      duration: "2h 30m",
      stops: "Direct",
      price: 450,
      from: "Lagos",
      to: "Abuja"
    },
    {
      airline: "Arik Air",
      departure: "02:15 PM",
      arrival: "04:50 PM",
      duration: "2h 35m",
      stops: "Direct",
      price: 480,
      from: "Lagos",
      to: "Abuja"
    },
    {
      airline: "Dana Air",
      departure: "06:30 AM",
      arrival: "09:10 AM",
      duration: "2h 40m",
      stops: "Direct",
      price: 420,
      from: "Lagos",
      to: "Abuja"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Filter className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold">Filters</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label className="mb-3 block">Price Range</Label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={2000}
                        step={50}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-3 block">Stops</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="direct" />
                          <label htmlFor="direct" className="text-sm">Direct</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="1stop" />
                          <label htmlFor="1stop" className="text-sm">1 Stop</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="2stops" />
                          <label htmlFor="2stops" className="text-sm">2+ Stops</label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-3 block">Airlines</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="airpeace" />
                          <label htmlFor="airpeace" className="text-sm">Air Peace</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="arik" />
                          <label htmlFor="arik" className="text-sm">Arik Air</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="dana" />
                          <label htmlFor="dana" className="text-sm">Dana Air</label>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">Apply Filters</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search Results */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-4">
                  <h1 className="text-2xl font-bold">Available Flights</h1>
                  <Input 
                    placeholder="Search flights..." 
                    className="sm:w-64"
                  />
                </div>
                <p className="text-muted-foreground">{flights.length} flights found</p>
              </div>

              <div className="space-y-4">
                {flights.map((flight, index) => (
                  <Card key={index} className="shadow-card hover:shadow-elevated transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-4">
                            <Plane className="w-5 h-5 text-primary" />
                            <h3 className="font-semibold text-lg">{flight.airline}</h3>
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <div className="text-2xl font-bold">{flight.departure}</div>
                              <div className="text-sm text-muted-foreground">{flight.from}</div>
                            </div>
                            
                            <div className="text-center">
                              <div className="flex items-center justify-center gap-2 mb-1">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{flight.duration}</span>
                              </div>
                              <div className="h-px bg-border relative">
                                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary bg-background" />
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">{flight.stops}</div>
                            </div>

                            <div className="text-right">
                              <div className="text-2xl font-bold">{flight.arrival}</div>
                              <div className="text-sm text-muted-foreground">{flight.to}</div>
                            </div>
                          </div>
                        </div>

                        <div className="lg:border-l lg:pl-6 flex flex-row lg:flex-col items-center gap-4 lg:gap-2">
                          <div className="text-right flex-1 lg:flex-none">
                            <div className="text-sm text-muted-foreground mb-1">From</div>
                            <div className="text-3xl font-bold text-primary">${flight.price}</div>
                          </div>
                          <Button size="lg" className="lg:w-full">
                            Select Flight
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
