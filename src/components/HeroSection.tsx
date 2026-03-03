import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWatch from "@/assets/hero-watch.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px]"
        />
        {/* Subtle golden line accents */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center relative z-10 pt-24 pb-12">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-6"
          >
            <Star size={14} className="fill-primary text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Premium Collection 2025</span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] text-secondary mb-6">
            Time Is
            <br />
            <span className="text-gradient-gold">Luxury</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed"
          >
            Discover exquisite timepieces that blend timeless craftsmanship with modern elegance. Every second, a statement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 flex-wrap"
          >
            <Button asChild className="luxury-gradient text-primary-foreground h-13 px-10 font-semibold text-base group rounded-full shadow-lg shadow-primary/25">
              <Link to="/shop">
                Shop Now
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-13 px-10 text-base rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-8 mt-12 text-muted-foreground"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">500+</p>
              <p className="text-xs uppercase tracking-wider">Happy Clients</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">50+</p>
              <p className="text-xs uppercase tracking-wider">Watch Models</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">100%</p>
              <p className="text-xs uppercase tracking-wider">Authentic</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Watch image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Glowing ring behind watch */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[380px] h-[380px] md:w-[460px] md:h-[460px] rounded-full border border-dashed border-primary/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-primary/10"
          />

          {/* Radial glow */}
          <div className="absolute w-80 h-80 rounded-full bg-primary/8 blur-[60px]" />

          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={heroWatch}
            alt="Premium luxury watch"
            className="relative z-10 w-[320px] md:w-[420px] lg:w-[480px] drop-shadow-2xl"
          />

          {/* Price badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="absolute -bottom-2 -left-2 md:bottom-4 md:left-4 bg-card p-4 rounded-2xl shadow-xl border border-border z-20"
          >
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-2xl font-bold text-gradient-gold">Rs. 4,500</p>
          </motion.div>

          {/* Quality badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
            className="absolute -top-2 -right-2 md:top-8 md:right-0 bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-lg z-20 text-xs font-semibold uppercase tracking-wider"
          >
            ✦ Premium Quality
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
