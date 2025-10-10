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
    <div className="bg-card p-4 sm:p-6 rounded-2xl shadow-xl border border-border/40 relative">
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        {/* Tabs Header */}
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 bg-muted mb-6 rounded-xl">
          <TabsTrigger
            value="flights"
            className="flex items-center gap-1 sm:gap-2 text-sm"
          >
            <Plane className="w-4 h-4" /> Flights
          </TabsTrigger>
          <TabsTrigger
            value="hotels"
            className="flex items-center gap-1 sm:gap-2 text-sm"
          >
            <Hotel className="w-4 h-4" /> Hotels
          </TabsTrigger>
          <TabsTrigger
            value="tours"
            className="flex items-center gap-1 sm:gap-2 text-sm"
          >
            <Compass className="w-4 h-4" /> Tours
          </TabsTrigger>
          <TabsTrigger value="packages" className="text-sm">
            Packages
          </TabsTrigger>
        </TabsList>

        {/* ✈️ FLIGHTS TAB */}
        <TabsContent value="flights">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-4">
            <RadioGroup
              value={tripType}
              onValueChange={setTripType}
              className="flex flex-wrap gap-3"
            >
              {["return", "oneway", "multi"].map((type) => (
                <div key={type} className="flex items-center space-x-1">
                  <RadioGroupItem value={type} id={type} />
                  <Label htmlFor={type} className="text-sm capitalize">
                    {type === "multi"
                      ? "Multi Route"
                      : type === "oneway"
                      ? "One Way"
                      : "Return"}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex flex-wrap gap-2 ml-auto justify-end w-full sm:w-auto">
              {/* Cabin Class */}
              <Popover open={cabinOpen} onOpenChange={setCabinOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-9 justify-between w-full sm:w-[140px] text-sm"
                  >
                    {cabinClass.charAt(0).toUpperCase() + cabinClass.slice(1)}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  sideOffset={4}
                  className="w-44 p-2 z-50"
                >
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

              {/* Passenger Dropdown — fully mobile-safe */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-9 justify-between w-full sm:w-[160px] text-sm"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    {adults + children + infants} Passenger
                    {adults + children + infants !== 1 ? "s" : ""}
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="max-w-[95vw] sm:max-w-sm w-[90vw] sm:w-72 p-4 rounded-xl shadow-xl border bg-popover z-50"
                  sideOffset={6}
                  align="center"
                >
                  {[
                    ["Adults (12+)", adults, setAdults, 1],
                    ["Children (2-11)", children, setChildren, 0],
                    ["Infants (0-2)", infants, setInfants, 0],
                  ].map(([label, value, setter, min]) => (
                    <div
                      key={label as string}
                      className="flex items-center justify-between mb-3"
                    >
                      <Label className="text-sm">{label as string}</Label>
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
                          −
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

          {/* Routes */}
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
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4 relative p-3 rounded-xl border border-border/30"
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

                {/* Swap button centered on mobile */}
                <div className="flex justify-center sm:hidden">
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
                      className="rounded-full shadow-md bg-gradient-to-r from-primary to-secondary text-white"
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
                    className="absolute -right-2 -top-2 text-red-500 hover:text-red-600"
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
              className="bg-gradient-to-r from-primary to-secondary text-white rounded-full px-6 sm:px-8 h-10 w-full sm:w-auto"
            >
              Search Flights
            </Button>
          </div>
        </TabsContent>

        {/* 🏨 Hotels */}
        <TabsContent value="hotels">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
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
              className="bg-gradient-to-r from-primary to-secondary text-white rounded-full h-9 w-full sm:w-auto"
            >
              Search Hotels
            </Button>
          </div>
        </TabsContent>

        {/* 🧭 Tours */}
        <TabsContent value="tours">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-end">
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
              className="bg-gradient-to-r from-primary to-secondary text-white rounded-full h-9 w-full sm:w-auto"
            >
              Find Tours
            </Button>
          </div>
        </TabsContent>

        {/* 🎁 Packages */}
        <TabsContent value="packages">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-end">
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
              className="bg-gradient-to-r from-primary to-secondary text-white rounded-full h-9 w-full sm:w-auto"
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
