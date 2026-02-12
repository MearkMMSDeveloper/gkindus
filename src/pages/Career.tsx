import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

const positions = [
  "HR Manager",
  "Quality Engineer",
  "Machine Operator",
  "Maintenance Technician",
  "Mechanical Design Engineer",
];

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    position: "",
    coverLetter: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We'll get back to you soon.");
    setFormData({ name: "", dob: "", email: "", phone: "", address: "", position: "", coverLetter: "" });
  };

  return (
    <>
      <section className="relative py-24 bg-gradient-industrial">
        <div className="container-wide text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl text-primary-foreground mb-4">Career</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join our team of skilled professionals and grow your career with GK Industries.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <SectionHeading title="Apply for a Job" subtitle="Fill in your details below and we'll get in touch with you." />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg border border-border p-8"
          >
            {/* Available Positions */}
            <div className="mb-8 p-4 bg-muted rounded-lg">
              <h3 className="font-display font-bold text-foreground mb-3">Available Positions</h3>
              <div className="flex flex-wrap gap-2">
                {positions.map((pos) => (
                  <span key={pos} className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full font-medium">{pos}</span>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                  <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Date of Birth *</label>
                  <Input required type="date" value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <Input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                  <Input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98437 31711" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Current Address *</label>
                <Input required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="Enter your current address" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Applying For *</label>
                <Select value={formData.position} onValueChange={(value) => setFormData({ ...formData, position: value })}>
                  <SelectTrigger><SelectValue placeholder="Select a position" /></SelectTrigger>
                  <SelectContent>
                    {positions.map((pos) => (
                      <SelectItem key={pos} value={pos}>{pos}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Cover Letter</label>
                <Textarea value={formData.coverLetter} onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })} placeholder="Tell us about yourself..." rows={5} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Resume Upload</label>
                <Input type="file" accept=".pdf,.doc,.docx" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold tracking-wide">
                Submit Application <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Career;
