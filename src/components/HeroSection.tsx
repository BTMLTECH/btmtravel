import { useState } from "react";
import { Plane, Hotel, Package, Map } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import FlightSearchForm from "./FlightSearchForm";
import heroImage from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-accent to-background">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Travel destination" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Everything Travel</span>
            <br />
            <span className="text-primary">Book BTM</span>
          </h1>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="flight" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6 bg-card">
              <TabsTrigger value="flight" className="flex items-center gap-2">
                <Plane className="w-4 h-4" />
                <span className="hidden sm:inline">Flight</span>
              </TabsTrigger>
              <TabsTrigger value="stays" className="flex items-center gap-2">
                <Hotel className="w-4 h-4" />
                <span className="hidden sm:inline">Stays</span>
              </TabsTrigger>
              <TabsTrigger value="packages" className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                <span className="hidden sm:inline">Packages</span>
              </TabsTrigger>
              <TabsTrigger value="tour" className="flex items-center gap-2">
                <Map className="w-4 h-4" />
                <span className="hidden sm:inline">Tour</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="flight">
              <FlightSearchForm />
            </TabsContent>
            
            <TabsContent value="stays">
              <div className="bg-card p-8 rounded-lg shadow-card text-center">
                <p className="text-muted-foreground">Stays booking coming soon...</p>
              </div>
            </TabsContent>
            
            <TabsContent value="packages">
              <div className="bg-card p-8 rounded-lg shadow-card text-center">
                <p className="text-muted-foreground">Package booking coming soon...</p>
              </div>
            </TabsContent>
            
            <TabsContent value="tour">
              <div className="bg-card p-8 rounded-lg shadow-card text-center">
                <p className="text-muted-foreground">Tour booking coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
