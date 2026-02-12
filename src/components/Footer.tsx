import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/gk-logo.webp";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="GK Industries" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              ISO 9001:2015 certified company with 50+ years of excellence in metal fabrication, sheet metal components, and rice mill machinery.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://www.facebook.com/GK-indus-111721963921957" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://twitter.com/industries_gk" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/industriesgk" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Products", path: "/products" },
                { label: "Our Services", path: "/services" },
                { label: "Career", path: "/career" },
                { label: "Blog", path: "/blog" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-secondary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>CNC Laser Cutting</li>
              <li>CNC Waterjet Cutting</li>
              <li>CNC Bending / Folding</li>
              <li>CNC Plasma Cutting</li>
              <li>CNC Turret Punching</li>
              <li>Metal Fabrication</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-secondary-foreground/70">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>6/56 Kaveri Nagar, L & T Bypass, Opposite to Church, Pattanam, Coimbatore-641016</span>
              </div>
              <a href="tel:+919843731711" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <span>+91 9843731711</span>
              </a>
              <a href="mailto:gkicbe5@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <span>gkicbe5@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="container-wide py-5 text-center text-sm text-secondary-foreground/50">
          © {new Date().getFullYear()} GK Industries. All Rights Reserved. | ISO 9001:2015 Certified
        </div>
      </div>
    </footer>
  );
};

export default Footer;
