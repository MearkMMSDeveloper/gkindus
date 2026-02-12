import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import cncLaser from "@/assets/cnc-laser.jpg";
import cncBending from "@/assets/cnc-bending.jpg";
import cncPlasma from "@/assets/cnc-plasma.jpg";
import cncWaterjet from "@/assets/cnc-waterjet.jpg";
import rolling from "@/assets/rolling.jpg";
import pressing from "@/assets/pressing.jpg";
import shearing from "@/assets/shearing.jpg";
import turretPunch from "@/assets/turret-punch.jpg";
import fabrication from "@/assets/fabrication.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const servicesList = [
  {
    title: "CNC Laser Cutting",
    machine: "Mitsubishi Japan CNC Laser",
    desc: "Excellent cutting quality repeatability with precise component manufacturing. Our Mitsubishi Japan CNC laser cutting machine delivers superior results.",
    features: ["Tight tolerances", "Clean edges", "Complex patterns", "Fast turnaround"],
    image: cncLaser,
  },
  {
    title: "CNC Bending / Folding",
    machine: "4 Meter CNC Press Brake",
    desc: "Accurate folding with good repeatability. Multi-access 4 Meter CNC Press brake and swing beam provides versatile bending solutions.",
    features: ["Multi-axis bending", "Precise angles", "Large capacity", "Repeatability"],
    image: cncBending,
  },
  {
    title: "CNC Plasma Cutting",
    machine: "High Definition Plasma System",
    desc: "High defined heavy plate profile cutting with economical pricing, cutting through electrically conductive materials.",
    features: ["Heavy plate cutting", "Economical", "Conductive materials", "Profile cutting"],
    image: cncPlasma,
  },
  {
    title: "CNC Waterjet Cutting",
    machine: "3D FLOW (USA) 5 Axis",
    desc: "Any material, any profile — cold process cutting with 3D FLOW (USA) 5 Axis Waterjet Cutting Machine. No heat distortion.",
    features: ["Cold cutting process", "Any material", "5-axis capability", "No heat distortion"],
    image: cncWaterjet,
  },
  {
    title: "Rolling",
    machine: "2500mm NC Plate Rolling Machine",
    desc: "2500mm long NC controlled heavy-duty plate rolling machine with cone bending attachments for cylindrical and conical shapes.",
    features: ["NC controlled", "Cone bending", "Heavy duty", "Large capacity"],
    image: rolling,
  },
  {
    title: "Pressing",
    machine: "250 Ton Hydraulic Press",
    desc: "250 Ton heavy-duty hydraulic press specialized for sheet metal corrugation and heavy forming operations.",
    features: ["250 Ton capacity", "Corrugation", "Sheet metal forming", "Heavy duty"],
    image: pressing,
  },
  {
    title: "NC Shearing",
    machine: "4 Meter Servo Controlled",
    desc: "4 Meter Servo controlled precise shearing with NC controller for backgauge control and manual adjustment.",
    features: ["Servo controlled", "NC backgauge", "4 Meter capacity", "Precise cutting"],
    image: shearing,
  },
  {
    title: "CNC Turret Punching",
    machine: "Amada (JAPAN) CNC 30 Station",
    desc: "Amada (JAPAN) CNC 30 Station turret punching machine with high quantity punches for versatile hole patterns.",
    features: ["30 Stations", "High speed", "Complex patterns", "Versatile tooling"],
    image: turretPunch,
  },
  {
    title: "Fabrications",
    machine: "Complete Fabrication Facility",
    desc: "End products defined with engineering quality. Value-added process involving the creation of complete structures and assemblies.",
    features: ["Complete assembly", "Welding", "Structural work", "Quality finish"],
    image: fabrication,
  },
];

const Services = () => {
  return (
    <>
      <section className="relative py-24 bg-gradient-industrial">
        <div className="container-wide text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl text-primary-foreground mb-4">Our Services</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive CNC and metal fabrication services powered by world-class machinery.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide space-y-16">
          {servicesList.map((service, i) => (
            <motion.div
              key={service.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <img src={service.image} alt={service.title} className="rounded-lg shadow-lg w-full h-72 object-cover" />
              </div>
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">{service.machine}</span>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mt-1 mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{service.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-industrial">
        <div className="container-wide text-center">
          <h2 className="font-display font-bold text-3xl text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Contact us for a free consultation and competitive quote.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-bold tracking-wide">
              Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
