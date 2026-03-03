import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { useCartContext } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsOpen } = useCartContext();
  const [qty, setQty] = useState(1);

  const product = products.find((p) => p.id === id);
  if (!product) {
    return (
      <div className="pt-32 text-center">
        <p className="text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={18} /> Back
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square rounded-2xl overflow-hidden bg-muted"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-2">{product.category}</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-4">{product.name}</h1>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-gradient-gold">Rs. {product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 hover:bg-muted transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 font-medium border-x border-border">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-3 py-2 hover:bg-muted transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={() => {
                  addToCart(product, qty);
                  setIsOpen(true);
                }}
                variant="outline"
                className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ShoppingBag size={18} className="mr-2" /> Add to Cart
              </Button>
              <Button
                onClick={() => {
                  addToCart(product, qty);
                  navigate("/order");
                }}
                className="h-12 px-8 luxury-gradient text-primary-foreground font-semibold"
              >
                Buy Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
