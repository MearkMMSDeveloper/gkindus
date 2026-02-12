import { motion } from "framer-motion";
import { CheckCircle, Award, Wrench, Clock, Shield, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import aboutHero from "@/assets/about-hero.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="GK Industries facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-industrial/90" />
        </div>
        <div className="relative container-wide text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl text-primary-foreground mb-4">About Us</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            50+ years of excellence in metal fabrication and engineering services.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-6">
                History &amp; Profile
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GK Industries is an ISO 9001:2015 certified company involved in manufacturing and exporting various types of sheet metal components. Being in this field for the past 50 years, we have mastered ourselves in tailor-made designs of sheet metal components as per customer application.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This unit was established in 1971 and initially engaged in job working for famous textile and engineering companies. We are proud that we have been awarded continually for supplying quality products on time by our customers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At GK Industries, we provide precision quality, flexibility, on-time delivery, and competitive pricing on all products and services. We have the capacity and expertise to create and manufacture any shape of sheet metal product.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <img src={aboutHero} alt="Our facility" className="rounded-lg shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services highlight */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeading title="Some of Our Strengths" subtitle="What makes us the preferred choice for metal fabrication." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wrench, title: "World's Best CNC Technology", desc: "With supporting infrastructure and latest machinery." },
              { icon: Award, title: "Professional Engineering Skills", desc: "Outstanding management expertise and skilled workforce." },
              { icon: Zap, title: "Quick Quotes", desc: "Competitive pricing with fast turnaround times." },
              { icon: Shield, title: "Established Business Integrity", desc: "Trust built over 50 years of consistent delivery." },
              { icon: Clock, title: "Flexible Volume", desc: "Both lesser or huge volume production achievable." },
              { icon: CheckCircle, title: "Complete Solution", desc: "From concept to part — design, material, manufacturing." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading title="Our Advantages" subtitle="State-of-the-art cutting technology combined with decades of experience." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Tight tolerances achievable",
              "Secondary finishing not required",
              "Does not cause heat distortion",
              "Fast turnaround times possible",
            ].map((adv, i) => (
              <motion.div key={adv} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 p-5 bg-card rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{adv}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
