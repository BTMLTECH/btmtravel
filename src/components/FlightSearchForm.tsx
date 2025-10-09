import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  Hotel,
  Plane,
  Compass,
  Plus,
  ChevronDown,
  ArrowLeftRight,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const SearchPanel = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("flights");
  const [tripType, setTripType] = useState("return");
  const [routes, setRoutes] = useState([{ from: "", to: "" }]);
  const [cabinClass, setCabinClass] = useState("economy");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [swapAnimating, setSwapAnimating] = useState(false);
  const [glowIndex, setGlowIndex] = useState<number | null>(null);
  const [cabinOpen, setCabinOpen] = useState(false);

  const fromRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleSearch = () => navigate(`/search?type=${tab}`);

  const handleAddRoute = () => {
    const last = routes[routes.length - 1];
    if (!last.from || !last.to) return;
    setRoutes([...routes, { from: "", to: "" }]);
  };

  useEffect(() => {
    if (fromRefs.current[routes.length - 1]) {
      fromRefs.current[routes.length - 1]?.focus();
    }
  }, [routes.length]);

  const handleRemoveRoute = (i: number) =>
    setRoutes(routes.filter((_, index) => index !== i));

  const handleSwap = (i: number) => {
    setSwapAnimating(true);
    setGlowIndex(i);
    setTimeout(() => {
      setRoutes((prev) => {
        const updated = [...prev];
        [updated[i].from, updated[i].to] = [updated[i].to, updated[i].from];
        return updated;
      });
      setSwapAnimating(false);
    }, 250);
    setTimeout(() => setGlowIndex(null), 700);
  };

  const handleRouteChange = (
    index: number,
    field: "from" | "to",
    value: string
  ) => {
    const updated = [...routes];
    updated[index][field] = value;
    setRoutes(updated);
  };

  const lastRouteFilled =
    routes[routes.length - 1].from.trim() !== "" &&
    routes[routes.length - 1].to.trim() !== "";

  return (
    <div className="bg-card p-6 rounded-2xl shadow-xl border border-border/40 relative">
      {/* Calendar Picker Color Override */}

      <Tabs value={tab} onValueChange={setTab} className="w-full">
        {/* Tabs Header */}
        <TabsList className="grid grid-cols-4 bg-muted mb-6 rounded-xl">
          <TabsTrigger value="flights" className="flex items-center gap-2">
            <Plane className="w-4 h-4" /> Flights
          </TabsTrigger>
          <TabsTrigger value="hotels" className="flex items-center gap-2">
            <Hotel className="w-4 h-4" /> Hotels
          </TabsTrigger>
          <TabsTrigger value="tours" className="flex items-center gap-2">
            <Compass className="w-4 h-4" /> Tours
          </TabsTrigger>
          <TabsTrigger value="packages" className="flex items-center gap-2">
            🎁 Packages
          </TabsTrigger>
        </TabsList>

        {/* ✈️ FLIGHTS TAB */}
        <TabsContent value="flights">
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <RadioGroup
              value={tripType}
              onValueChange={setTripType}
              className="flex gap-4"
            >
              {["return", "oneway", "multi"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <RadioGroupItem value={type} id={type} />
                  <Label htmlFor={type}>
                    {type === "multi"
                      ? "Multi Route"
                      : type === "oneway"
                      ? "One Way"
                      : "Return"}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex gap-4 ml-auto">
              {/* Cabin Class Dropdown - Auto-close */}
              <Popover open={cabinOpen} onOpenChange={setCabinOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-[140px] h-9 justify-between text-sm"
                  >
                    {cabinClass.charAt(0).toUpperCase() + cabinClass.slice(1)}{" "}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-44 p-2">
                  {["economy", "premium", "business", "first"].map((cls) => (
                    <Button
                      key={cls}
                      variant={cls === cabinClass ? "secondary" : "ghost"}
                      className="w-full justify-start text-sm"
                      onClick={() => {
                        setCabinClass(cls);
                        setCabinOpen(false);
                      }}
                    >
                      {cls.charAt(0).toUpperCase() + cls.slice(1)}
                    </Button>
                  ))}
                </PopoverContent>
              </Popover>

              {/* Passenger Dropdown */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-[160px] h-9 justify-between text-sm"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    {adults + children + infants} Passenger
                    {adults + children + infants !== 1 ? "s" : ""}
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72">
                  {[
                    ["Adults (12+)", adults, setAdults, 1],
                    ["Children (2-11)", children, setChildren, 0],
                    ["Infants (0-2)", infants, setInfants, 0],
                  ].map(([label, value, setter, min]) => (
                    <div
                      key={label as string}
                      className="flex items-center justify-between mb-3"
                    >
                      <Label>{label as string}</Label>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            (setter as any)(
                              Math.max(min as number, (value as number) - 1)
                            )
                          }
                        >
                          -
                        </Button>
                        <span className="w-6 text-center text-sm">
                          {value as number}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => (setter as any)((value as number) + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Animated Routes */}
          <AnimatePresence>
            {routes.map((route, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  boxShadow:
                    glowIndex === i
                      ? "0 0 12px rgba(56,189,248,0.5)"
                      : "0 0 0 rgba(0,0,0,0)",
                }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid md:grid-cols-4 gap-4 mb-4 relative p-3 rounded-xl border border-border/30"
              >
                <div>
                  <Label>From</Label>
                  <Input
                    ref={(el) => (fromRefs.current[i] = el)}
                    placeholder="Departure city"
                    value={route.from}
                    onChange={(e) =>
                      handleRouteChange(i, "from", e.target.value)
                    }
                  />
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 z-10 hidden md:flex">
                  <motion.div
                    animate={{
                      rotate: swapAnimating ? 180 : 0,
                      scale: swapAnimating ? 1.15 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleSwap(i)}
                      className="rounded-full shadow-md bg-gradient-to-r from-primary to-secondary text-white hover:scale-110"
                    >
                      <ArrowLeftRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>

                <div>
                  <Label>To</Label>
                  <Input
                    placeholder="Arrival city"
                    value={route.to}
                    onChange={(e) => handleRouteChange(i, "to", e.target.value)}
                  />
                </div>

                <div>
                  <Label>Departure</Label>
                  <Input type="date" />
                </div>

                {tripType === "return" && (
                  <div>
                    <Label>Return</Label>
                    <Input type="date" />
                  </div>
                )}

                {i > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveRoute(i)}
                    className="absolute -right-3 -top-3 text-red-500 hover:text-red-600"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {tripType === "multi" && lastRouteFilled && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <Button
                variant="ghost"
                onClick={handleAddRoute}
                className="flex items-center gap-2 text-primary hover:text-secondary"
              >
                <Plus className="w-4 h-4" /> Add Another Route
              </Button>
            </motion.div>
          )}

          <div className="flex justify-end">
            <Button
              onClick={handleSearch}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white rounded-full px-8 h-10"
            >
              Search Flights
            </Button>
          </div>
        </TabsContent>

        {/* 🏨 Hotels */}
        <TabsContent value="hotels">
          <div className="grid md:grid-cols-4 gap-4 items-end">
            <div>
              <Label>Destination / Hotel</Label>
              <Input placeholder="Enter city or hotel name" />
            </div>
            <div>
              <Label>Check-in</Label>
              <Input type="date" />
            </div>
            <div>
              <Label>Check-out</Label>
              <Input type="date" />
            </div>
            <Button
              onClick={handleSearch}
              size="default"
              className="bg-gradient-to-r from-primary to-secondary text-white rounded-full h-9"
            >
              Search Hotels
            </Button>
          </div>
        </TabsContent>

        {/* 🧭 Tours */}
        <TabsContent value="tours">
          <div className="grid md:grid-cols-3 gap-4 items-end">
            <div>
              <Label>Destination</Label>
              <Input placeholder="Enter tour location" />
            </div>
            <div>
              <Label>Start Date</Label>
              <Input type="date" />
            </div>
            <Button
              onClick={handleSearch}
              size="default"
              className="bg-gradient-to-r from-primary to-secondary text-white rounded-full h-9"
            >
              Find Tours
            </Button>
          </div>
        </TabsContent>

        {/* 🎁 Packages */}
        <TabsContent value="packages">
          <div className="grid md:grid-cols-3 gap-4 items-end">
            <div>
              <Label>Destination</Label>
              <Input placeholder="Package destination" />
            </div>
            <div>
              <Label>Duration</Label>
              <Select>
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3days">3 Days</SelectItem>
                  <SelectItem value="7days">7 Days</SelectItem>
                  <SelectItem value="10days">10+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={handleSearch}
              size="default"
              className="bg-gradient-to-r from-primary to-secondary text-white rounded-full h-9"
            >
              Search Packages
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchPanel;
