import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Ali Hassan", text: "Absolutely stunning watch! The quality exceeded my expectations. Fast delivery and excellent packaging.", rating: 5 },
  { name: "Sara Khan", text: "Bought the Golden Heritage for my husband's birthday. He was thrilled! Inqilab Mart is now my go-to for premium gifts.", rating: 5 },
  { name: "Ahmed Raza", text: "The Sport Elite is perfect for daily wear. Comfortable, stylish, and incredibly durable. Great value for money.", rating: 4 },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-2">Reviews</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary">
            What Our Customers Say
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card p-8 rounded-xl border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={16}
                    className={si < t.rating ? "fill-primary text-primary" : "text-border"}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
              <p className="font-display font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
