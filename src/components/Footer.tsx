import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BTM Holidays</h3>
            <p className="text-background/80">
              Your trusted partner for unforgettable travel experiences around the world.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-background/80 hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-background/80 hover:text-background transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-background/80 hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">ACCOUNT</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/auth" className="text-background/80 hover:text-background transition-colors">
                  Sign in
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-background/80 hover:text-background transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">SOCIAL</h4>
            <div className="flex gap-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>© 2025. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
