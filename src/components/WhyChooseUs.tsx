import { motion } from "framer-motion";
import { Shield, Truck, Award, RefreshCw } from "lucide-react";

const features = [
  { icon: Shield, title: "Authentic Guarantee", desc: "Every watch is 100% authentic with official warranty" },
  { icon: Truck, title: "Free Delivery", desc: "Complimentary shipping across Pakistan" },
  { icon: Award, title: "Premium Quality", desc: "Handpicked selections from top manufacturers" },
  { icon: RefreshCw, title: "Easy Returns", desc: "7-day hassle-free return policy" },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-cream">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-2">Why Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary">
            Why Choose Inqilab Mart
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-card border border-border hover-lift"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
