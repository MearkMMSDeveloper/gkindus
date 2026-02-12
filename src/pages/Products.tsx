import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import architectural from "@/assets/architectural.jpg";
import fabrication from "@/assets/fabrication.jpg";
import cncLaser from "@/assets/cnc-laser.jpg";
import rolling from "@/assets/rolling.jpg";
import pressing from "@/assets/pressing.jpg";
import shearing from "@/assets/shearing.jpg";
import turretPunch from "@/assets/turret-punch.jpg";
import cncWaterjet from "@/assets/cnc-waterjet.jpg";
import cncPlasma from "@/assets/cnc-plasma.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const productCategories = [
  { title: "Architectural Designs", desc: "Steel, tiles, rubber, marble, acrylic, granites, glass MDF, plastics, polystyrene, wood, and more.", image: architectural },
  { title: "Cable Trays", desc: "Perforated cable trays, ladder type cable trays, solid bottom cable trays of finest quality.", image: fabrication },
  { title: "Bus Body Sections", desc: "Sections for bus body frame manufacturing, gussets, and all sheet metal sections for frames.", image: cncLaser },
  { title: "Solar Mills & Purlins", desc: "High-quality structural purlins and solar mounting systems for construction projects.", image: rolling },
  { title: "Perforated Sheets", desc: "Custom perforated sheets in various patterns and materials for industrial applications.", image: turretPunch },
  { title: "Metal Door Frames", desc: "Precision-manufactured metal door frames for commercial and residential construction.", image: pressing },
  { title: "Rice Mill Machinery", desc: "Complete range of rice mill machinery and components with precision engineering.", image: shearing },
  { title: "Elevator Panels", desc: "Premium elevator panels and enclosures manufactured with precision CNC technology.", image: cncWaterjet },
  { title: "Panel Boards", desc: "Electrical panel boards and enclosures with precise sheet metal forming.", image: cncPlasma },
];

const Products = () => {
  return (
    <>
      <section className="relative py-24 bg-gradient-industrial">
        <div className="container-wide text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl text-primary-foreground mb-4">Our Products</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We are proud to present our comprehensive range of precision-engineered products.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, i) => (
              <motion.div
                key={product.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl border border-border transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-display font-bold text-xl text-primary-foreground">{product.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container-wide text-center">
          <h2 className="font-display font-bold text-3xl text-foreground mb-4">Need a Custom Product?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">We specialize in custom fabrication. Share your requirements and we'll deliver.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold tracking-wide">
              Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Products;
