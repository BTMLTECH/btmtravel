import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background pt-12 pb-8 mt-20 overflow-hidden">
      {/* Brand accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] flex items-center justify-center">
                <Plane className="w-5 h-5 text-background" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">BTM Holidays</h3>
            </div>
            <p className="text-background/70 leading-relaxed">
              Your trusted partner for unforgettable travel experiences around
              the world. Discover, book, and explore seamlessly.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#fbbf24]">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-background/80 hover:text-[#fbbf24] transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-background/80 hover:text-[#fbbf24] transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-background/80 hover:text-[#fbbf24] transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#fbbf24]">
              Account
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/auth"
                  className="text-background/80 hover:text-[#fbbf24] transition-colors duration-300"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  to="/auth"
                  className="text-background/80 hover:text-[#fbbf24] transition-colors duration-300"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#fbbf24]">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-background/20 hover:border-[#fbbf24] hover:text-[#fbbf24] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 pt-6 text-center text-sm text-background/70">
          <p>© {new Date().getFullYear()} BTM Holidays. All rights reserved.</p>
          <p className="mt-1 text-background/50 text-xs">
            Designed with passion & precision ✈️ by the BTM Team
          </p>
        </div>
      </div>

      {/* Subtle gradient glow background */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#f59e0b]/10 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;
