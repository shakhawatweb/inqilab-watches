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
          className="absolute top-10 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-primary/5 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 -left-20 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-primary/5 blur-[80px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-12">
        {/* Mobile: stacked layout with watch on top */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">

          {/* Watch image — shown FIRST on mobile (order-1 mobile, order-2 desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            {/* Orbital rings — hidden on small mobile */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[460px] md:h-[460px] rounded-full border border-dashed border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-primary/10"
            />

            {/* Radial glow */}
            <div className="absolute w-52 h-52 md:w-80 md:h-80 rounded-full bg-primary/8 blur-[60px]" />

            <motion.img
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src={heroWatch}
              alt="Premium luxury watch"
              className="relative z-10 w-[200px] sm:w-[260px] md:w-[380px] lg:w-[440px] drop-shadow-2xl"
            />

            {/* Price badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute bottom-0 left-0 sm:-bottom-2 sm:-left-2 md:bottom-4 md:left-4 bg-card p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border border-border z-20"
            >
              <p className="text-[10px] md:text-xs text-muted-foreground">Starting from</p>
              <p className="text-lg md:text-2xl font-bold text-gradient-gold">Rs. 4,500</p>
            </motion.div>

            {/* Quality badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, type: "spring" }}
              className="absolute top-0 right-0 sm:-top-2 sm:-right-2 md:top-8 md:right-0 bg-secondary text-secondary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg z-20 text-[10px] md:text-xs font-semibold uppercase tracking-wider"
            >
              ✦ Premium Quality
            </motion.div>
          </motion.div>

          {/* Text content — order-2 on mobile, order-1 on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-5"
            >
              <Star size={14} className="fill-primary text-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Premium Collection 2025</span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] text-secondary mb-5">
              Time Is
              <br />
              <span className="text-gradient-gold">Luxury</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Discover exquisite timepieces that blend timeless craftsmanship with modern elegance. Every second, a statement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start"
            >
              <Button asChild className="luxury-gradient text-primary-foreground h-12 sm:h-13 px-7 sm:px-10 font-semibold text-sm sm:text-base group rounded-full shadow-lg shadow-primary/25">
                <Link to="/shop">
                  Shop Now
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 sm:h-13 px-7 sm:px-10 text-sm sm:text-base rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 mt-10 text-muted-foreground"
            >
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-foreground">500+</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider">Happy Clients</p>
              </div>
              <div className="w-px h-8 sm:h-10 bg-border" />
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-foreground">50+</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider">Watch Models</p>
              </div>
              <div className="w-px h-8 sm:h-10 bg-border" />
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-foreground">100%</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider">Authentic</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
