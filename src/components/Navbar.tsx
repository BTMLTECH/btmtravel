import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Menu,
  X,
  Headphones,
  Phone,
  MessageCircle,
  LifeBuoy,
} from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const dropdownRef = useRef(null);

  // 🔹 Cache active route
  useEffect(() => {
    const saved = localStorage.getItem("btm_active_nav");
    if (saved) setActive(saved);
  }, []);

  useEffect(() => {
    setActive(location.pathname);
    localStorage.setItem("btm_active_nav", location.pathname);
  }, [location]);

  // 🔹 Detect scroll for slick navbar behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Close support dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowSupport(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Flights", path: "/" },
    { label: "Stays", path: "/stays" },
    { label: "Packages", path: "/packages" },
    { label: "Tours", path: "/tours" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b 
      ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 🔹 Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
            >
              <Plane className="w-5 h-5 text-primary-foreground" />
            </motion.div>
            <span className="text-xl font-bold text-foreground tracking-tight">
              BTM Travels
            </span>
          </Link>

          {/* 🔹 Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors 
                ${
                  active === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
                {active === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* 🔹 Right Section */}
          <div
            className="hidden md:flex items-center gap-3 relative"
            ref={dropdownRef}
          >
            {/* Support Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSupport(!showSupport)}
                className="flex items-center gap-2 text-foreground hover:text-primary font-medium transition-colors"
              >
                <Headphones className="w-5 h-5" />
                Support
              </button>

              <AnimatePresence>
                {showSupport && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="absolute right-0 mt-3 w-60 bg-card border border-border/40 shadow-xl rounded-xl overflow-hidden z-50"
                  >
                    <div className="p-3 text-sm">
                      <p className="font-semibold text-foreground mb-2">
                        Need Help?
                      </p>
                      <div className="space-y-2">
                        <a
                          href="tel:+2348012345678"
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/30 transition-colors"
                        >
                          <Phone className="w-4 h-4 text-primary" />
                          +234 801 234 5678
                        </a>
                        <a
                          href="tel:+2348098765432"
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/30 transition-colors"
                        >
                          <Phone className="w-4 h-4 text-primary" />
                          +234 809 876 5432
                        </a>
                        <a
                          href="https://wa.me/2348012345678"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/30 transition-colors"
                        >
                          <MessageCircle className="w-4 h-4 text-green-500" />
                          Chat on WhatsApp
                        </a>
                        <Link
                          to="/support"
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/30 transition-colors"
                          onClick={() => setShowSupport(false)}
                        >
                          <LifeBuoy className="w-4 h-4 text-secondary" />
                          Customer Support
                        </Link>
                        <Link
                          to="/contact"
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/30 transition-colors"
                          onClick={() => setShowSupport(false)}
                        >
                          <Headphones className="w-4 h-4 text-primary" />
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Auth Buttons */}
            <Button
              variant="outline"
              className="border-primary/40 hover:bg-primary/10 text-foreground"
              asChild
            >
              <Link to="/auth">Sign In</Link>
            </Button>

            <Button
              className="bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg"
              asChild
            >
              <Link to="/book">Book Now</Link>
            </Button>
          </div>

          {/* 🔹 Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* 🔹 Mobile Menu */}
        <motion.div
          initial={false}
          animate={menuOpen ? "open" : "closed"}
          variants={{
            open: { height: "auto", opacity: 1 },
            closed: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden md:hidden flex flex-col gap-4 py-4 border-t border-border"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`relative font-medium text-center py-2 transition-colors 
              ${
                active === link.path
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Support link for mobile */}
          <div className="text-center py-2">
            <button
              onClick={() => setShowSupport(!showSupport)}
              className="flex items-center justify-center gap-2 w-full text-foreground hover:text-primary transition"
            >
              <Headphones className="w-5 h-5" /> Support
            </button>

            <AnimatePresence>
              {showSupport && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-2 mx-auto w-64 bg-card border border-border/40 rounded-xl shadow-md text-left p-3 text-sm"
                >
                  <a
                    href="tel:+2348012345678"
                    className="flex items-center gap-2 p-2 hover:bg-muted/30 rounded-lg"
                  >
                    <Phone className="w-4 h-4 text-primary" /> +234 801 234 5678
                  </a>
                  <a
                    href="https://wa.me/2348012345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 hover:bg-muted/30 rounded-lg"
                  >
                    <MessageCircle className="w-4 h-4 text-green-500" />{" "}
                    WhatsApp
                  </a>
                  <Link
                    to="/support"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 p-2 hover:bg-muted/30 rounded-lg"
                  >
                    <LifeBuoy className="w-4 h-4 text-secondary" /> Customer
                    Support
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 p-2 hover:bg-muted/30 rounded-lg"
                  >
                    <Headphones className="w-4 h-4 text-primary" /> Contact Us
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-3">
            <Button
              variant="outline"
              className="border-primary/40 hover:bg-primary/10"
              asChild
            >
              <Link to="/auth">Sign In</Link>
            </Button>
            <Button
              className="bg-gradient-to-r from-primary to-secondary text-white"
              asChild
            >
              <Link to="/book">Book Now</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
