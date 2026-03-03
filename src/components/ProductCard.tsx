import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/types";
import { useCartContext } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart, setIsOpen } = useCartContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-lg overflow-hidden border border-border hover-lift"
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Sale
          </span>
        )}
      </Link>
      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-foreground">
              Rs. {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                Rs. {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
              setIsOpen(true);
            }}
            className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
