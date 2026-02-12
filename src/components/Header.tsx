import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/gk-logo.webp";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "We Expertise In", path: "/expertise" },
  { label: "Gallery", path: "/gallery" },
  { label: "Career", path: "/career" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      {/* Top bar */}
      <div className="bg-secondary">
        <div className="container-wide flex items-center justify-between py-2 text-sm text-secondary-foreground">
          <span className="hidden sm:inline font-medium">Certified ISO 9001:2015</span>
          <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
            <a href="tel:+919843731711" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>+91 9843731711</span>
            </a>
            <a href="mailto:gkicbe5@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden md:inline">gkicbe5@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-wide flex items-center justify-between py-3">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="GK Industries Logo" className="h-10 md:h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:block">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold font-display tracking-wide">
              GET A QUOTE
            </Button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="container-wide py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-2">
              <Button className="w-full bg-accent text-accent-foreground font-semibold font-display tracking-wide">
                GET A QUOTE
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
