import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const blogPosts = [
  {
    title: "Laser Cutting Technology: A Game-Changer for Aerospace Manufacturing",
    excerpt: "Laser cutting technology has revolutionized the manufacturing industry, particularly in sectors that demand precision, speed, and quality in aerospace parts.",
    date: "2024-08-15",
  },
  {
    title: "Different Industries Using Screw Conveyors",
    excerpt: "Screw conveyors, versatile and efficient machines, are integral to various industries for transporting bulk materials from food processing to waste management.",
    date: "2024-07-20",
  },
  {
    title: "Sheet Metal Plate Rolling: Techniques and Processes",
    excerpt: "Sheet metal plate rolling is a crucial process in manufacturing, transforming flat metal sheets into curved or cylindrical shapes through a series of rollers.",
    date: "2024-06-10",
  },
  {
    title: "Choosing the Right Laser Cutting Service Provider in Coimbatore",
    excerpt: "Looking for a reliable laser cutting service in Coimbatore? GK Industries offers top-notch services tailored to your specific needs.",
    date: "2024-05-25",
  },
  {
    title: "Structural Purlins: The Backbone of Your Building",
    excerpt: "Structural purlins are essential components in construction, particularly steel-framed buildings, providing crucial support to roofs and walls.",
    date: "2024-04-18",
  },
  {
    title: "What is a Purlin and Why is it Crucial in Construction?",
    excerpt: "A purlin is a primary horizontal structural member in a roof system, running along ridges to provide support to roofing material.",
    date: "2024-03-12",
  },
  {
    title: "The Importance of Cable Tray Selection for Optimal System Performance",
    excerpt: "In modern electrical systems, careful selection and installation of cable trays are critical for safety, efficiency, and longevity.",
    date: "2024-02-20",
  },
  {
    title: "GK Industries: Delivering Superior Purlins to Coimbatore's Skyline",
    excerpt: "Coimbatore's construction boom demands quality purlins. GK Industries delivers superior structural components for the city's growing skyline.",
    date: "2024-01-15",
  },
  {
    title: "Advantages of GK Industries Cable Tray Frameworks",
    excerpt: "For top-notch cable management solutions in Coimbatore, GK Industries cable tray frameworks offer safety, efficiency, and longevity.",
    date: "2023-12-08",
  },
];

const Blog = () => {
  return (
    <>
      <section className="relative py-24 bg-gradient-industrial">
        <div className="container-wide text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl text-primary-foreground mb-4">Blog</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Insights, tips, and industry knowledge from our engineering experts.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="h-48 bg-gradient-industrial flex items-center justify-center p-6">
                  <h3 className="font-display font-bold text-lg text-primary-foreground text-center leading-tight">{post.title}</h3>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    <time>{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</time>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
