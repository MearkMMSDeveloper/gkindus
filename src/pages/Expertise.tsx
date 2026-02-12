import { motion } from "framer-motion";
import { Factory } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const expertiseAreas = [
  "Food Processing Industry",
  "Textile Industries",
  "Rice Mill Machineries",
  "Cargo Container Sheet",
  "Conveyors",
  "Panel Boards & Enclosures",
  "Architectural Designs",
  "Cable Trays",
  "Kitchen Equipment",
  "Bus Body Sections",
  "Solar Rails",
  "Furniture Industries",
  "Healthcare Equipment",
  "Elevator Panels",
  "Automation Units",
  "Perforated Sheet",
  "Metal Door Frames",
  "Solar Mills and Purlins",
];

const Expertise = () => {
  return (
    <>
      <section className="relative py-24 bg-gradient-industrial">
        <div className="container-wide text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl text-primary-foreground mb-4">We Expertise In</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We offer a versatile range of components for different engineering sectors.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading title="Engineering Components" subtitle="Serving diverse industries with precision-engineered sheet metal solutions." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {expertiseAreas.map((area, i) => (
              <motion.div
                key={area}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="p-5 bg-card rounded-lg border border-border hover:border-primary/40 hover:shadow-lg transition-all text-center group"
              >
                <Factory className="h-8 w-8 text-primary mx-auto mb-3 group-hover:text-accent transition-colors" />
                <h3 className="font-display font-semibold text-sm text-foreground">{area}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
