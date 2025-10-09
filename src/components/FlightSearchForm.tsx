import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, Users, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const FlightSearchForm = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("return");
  const [cabinClass, setCabinClass] = useState("economy");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-elevated">
      <div className="flex gap-6 mb-6">
        <RadioGroup value={tripType} onValueChange={setTripType} className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="return" id="return" />
            <Label htmlFor="return">Return</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="oneway" id="oneway" />
            <Label htmlFor="oneway">One Way</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="multi" id="multi" />
            <Label htmlFor="multi">Multi Route</Label>
          </div>
        </RadioGroup>

        <div className="flex gap-4 ml-auto">
          <Select value={cabinClass} onValueChange={setCabinClass}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Cabin class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="economy">Economy</SelectItem>
              <SelectItem value="premium">Premium Economy</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="first">First Class</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[180px] justify-between">
                <Users className="w-4 h-4 mr-2" />
                {adults + children + infants} Passenger{(adults + children + infants) !== 1 ? 's' : ''}
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Adults (12+)</Label>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{adults}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setAdults(adults + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label>Children (2-11)</Label>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setChildren(Math.max(0, children - 1))}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{children}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setChildren(children + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label>Infants (0-2)</Label>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setInfants(Math.max(0, infants - 1))}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{infants}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setInfants(infants + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <Label htmlFor="from" className="mb-2 block">From</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input id="from" placeholder="Departure city" className="pl-10" />
          </div>
        </div>
        
        <div>
          <Label htmlFor="to" className="mb-2 block">To</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input id="to" placeholder="Arrival city" className="pl-10" />
          </div>
        </div>
        
        <div>
          <Label htmlFor="departure" className="mb-2 block">Departure</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input id="departure" type="date" className="pl-10" />
          </div>
        </div>
        
        {tripType === "return" && (
          <div>
            <Label htmlFor="return-date" className="mb-2 block">Return</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input id="return-date" type="date" className="pl-10" />
            </div>
          </div>
        )}
      </div>

      <Button onClick={handleSearch} className="w-full md:w-auto" size="lg">
        Search Flights
      </Button>
    </div>
  );
};

export default FlightSearchForm;
