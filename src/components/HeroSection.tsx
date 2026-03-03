import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4"
          >
            Premium Watch Collection
          </motion.p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-secondary mb-6">
            Time Is{" "}
            <span className="text-gradient-gold">Luxury</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
            Discover our curated collection of exquisite timepieces that blend timeless craftsmanship with modern elegance.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button asChild className="luxury-gradient text-primary-foreground h-12 px-8 font-semibold group">
              <Link to="/shop">
                Shop Now
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-8 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=700&fit=crop"
              alt="Luxury watch"
              className="w-full max-w-lg rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="text-xl font-bold text-gradient-gold">Rs. 4,500</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
