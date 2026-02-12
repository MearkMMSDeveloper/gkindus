import { motion } from "framer-motion";
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
import architectural from "@/assets/architectural.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import { useState } from "react";

const images = [
  { src: cncLaser, alt: "CNC Laser Cutting" },
  { src: cncBending, alt: "CNC Bending" },
  { src: cncPlasma, alt: "CNC Plasma Cutting" },
  { src: cncWaterjet, alt: "CNC Waterjet Cutting" },
  { src: rolling, alt: "Rolling Machine" },
  { src: pressing, alt: "Hydraulic Press" },
  { src: shearing, alt: "NC Shearing" },
  { src: turretPunch, alt: "CNC Turret Punching" },
  { src: fabrication, alt: "Metal Fabrication" },
  { src: architectural, alt: "Architectural Designs" },
  { src: heroBg, alt: "Workshop Interior" },
  { src: aboutHero, alt: "Factory Floor" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="relative py-24 bg-gradient-industrial">
        <div className="container-wide text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl text-primary-foreground mb-4">Gallery</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our state-of-the-art facility and precision-engineered products.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(img.src)}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                  <span className="p-3 text-sm font-medium text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Selected" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
        </div>
      )}
    </>
  );
};

export default Gallery;
