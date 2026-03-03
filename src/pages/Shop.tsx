import { useState } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Shop() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-2">Our Collection</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary">Shop Watches</h1>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === c
                  ? "luxury-gradient text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No products found in this category.</p>
        )}
      </div>
    </motion.div>
  );
}
