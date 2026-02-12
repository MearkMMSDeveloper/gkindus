import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, DollarSign, Target, CheckCircle, Factory, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import cncLaser from "@/assets/cnc-laser.jpg";
import cncBending from "@/assets/cnc-bending.jpg";
import cncPlasma from "@/assets/cnc-plasma.jpg";
import cncWaterjet from "@/assets/cnc-waterjet.jpg";
import rolling from "@/assets/rolling.jpg";
import pressing from "@/assets/pressing.jpg";
import shearing from "@/assets/shearing.jpg";
import turretPunch from "@/assets/turret-punch.jpg";
import fabrication from "@/assets/fabrication.jpg";
import architectural from "@/assets/architectural.jpg";
import aboutHero from "@/assets/about-hero.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const services = [
  { title: "CNC Laser Cutting", desc: "Excellent cutting quality with Mitsubishi Japan CNC laser cutting machine.", image: cncLaser },
  { title: "CNC Bending / Folding", desc: "Accurate folding with 4 Meter CNC Press brake and swing beam.", image: cncBending },
  { title: "CNC Plasma Cutting", desc: "High defined heavy plate profile cutting with economical pricing.", image: cncPlasma },
  { title: "CNC Waterjet Cutting", desc: "Any material, any profile with 3D FLOW (USA) 5 Axis Waterjet.", image: cncWaterjet },
  { title: "Rolling", desc: "2500mm NC controlled heavy-duty plate rolling with cone bending.", image: rolling },
  { title: "Pressing", desc: "250 Ton heavy-duty hydraulic press for sheet metal corrugation.", image: pressing },
  { title: "NC Shearing", desc: "4 Meter Servo controlled precise shearing with NC backgauge.", image: shearing },
  { title: "CNC Turret Punching", desc: "Amada (JAPAN) CNC 30 Station turret punching machine.", image: turretPunch },
  { title: "Fabrications", desc: "Value-added process creating end products with engineering quality.", image: fabrication },
];

const products = [
  "Architectural Designs",
  "Cable Trays",
  "Bus Body Sections",
  "Solar Mills & Purlins",
  "Perforated Sheets",
  "Metal Door Frames",
  "Rice Mill Machinery",
  "Elevator Panels",
  "Panel Boards",
];

const stats = [
  { value: "50+", label: "Years Experience", icon: Award },
  { value: "1000+", label: "Projects Delivered", icon: CheckCircle },
  { value: "500+", label: "Happy Clients", icon: Users },
  { value: "9", label: "CNC Services", icon: Factory },
];

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Metal fabrication workshop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-industrial/90" />
        </div>
        <div className="relative container-wide py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold bg-accent/20 text-accent rounded-full border border-accent/30">
              ISO 9001:2015 Certified · Established 1971
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-tight text-primary-foreground mb-6">
              Metal Fabrication &amp; Job Works in Coimbatore
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
              Partner with us for exceptional metal fabrication services tailored to your specific demands. All sheet metal works under one roof.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-bold text-lg tracking-wide px-8">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="ghost" className="border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-display font-bold text-lg tracking-wide px-8">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            title="What We Do in Metal Fabrication"
            subtitle="We provide precise quality, flexibility, on-time delivery, and competitive pricing on all products and services."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-industrial">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="font-display font-bold text-3xl md:text-4xl text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Since 1971</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-6">
                Welcome to GK Industries
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GK Industries, an ISO 9001:2015 certified company, boasts a rich history of 50 years in manufacturing and exporting diverse sheet metal components. Our expertise lies in crafting customized designs that cater to our customers' specific applications.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Established in 1971, our journey began with job working for renowned textile and engineering firms. We've consistently received accolades for delivering high-quality products on time.
              </p>
              <Link to="/about">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold tracking-wide">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <img src={aboutHero} alt="GK Industries Factory" className="rounded-lg shadow-xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeading
            title="Our Range of Products"
            subtitle="We are proud to present our comprehensive range of metal fabrication products."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {products.map((product, i) => (
              <motion.div
                key={product}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to="/products"
                  className="block p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <Factory className="h-8 w-8 text-primary mx-auto mb-3 group-hover:text-accent transition-colors" />
                  <h3 className="font-display font-semibold text-foreground">{product}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            title="Why Choose GK Industries?"
            subtitle="Experience the GK Industries difference with our unmatched dedication to precision and expertise."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Unwavering Precision", desc: "Highest standards of precision in every aspect of our work." },
              { icon: Shield, title: "Tailored Solutions", desc: "Services customized to meet your unique project requirements." },
              { icon: Clock, title: "Punctual Delivery", desc: "We consistently deliver your projects as promised, on time." },
              { icon: DollarSign, title: "Competitive Pricing", desc: "Exceptional value for your investment with competitive rates." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Designs Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={architectural} alt="Architectural designs" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-industrial/85" />
        </div>
        <div className="relative container-wide text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mb-4">
              Architectural Designs
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Fancy huge architectural designs with endless possibilities. Request your needs to create your custom designs.
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-bold tracking-wide">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-wide text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Experience High-Quality Sheet Metal Manufacturing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              At GK Industries, we provide high-quality sheet metal components at competitive prices, delivered on time with a wealth of experience.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold tracking-wide px-10">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
