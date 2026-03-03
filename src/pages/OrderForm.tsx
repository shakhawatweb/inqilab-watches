import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCartContext } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Name is required"),
  address: z.string().min(5, "Address is required"),
  mobile: z.string().min(10, "Valid phone number required"),
});

type FormValues = z.infer<typeof schema>;

export default function OrderForm() {
  const { items, totalPrice, clearCart } = useCartContext();
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    if (items.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const productList = items
      .map((i) => `${i.product.name} x${i.quantity} — Rs. ${(i.product.price * i.quantity).toLocaleString()}`)
      .join("\n");

    const message = {
      content: `**🛒 New Order — Inqilab Mart**\n\n**Customer:** ${data.fullName}\n**Phone:** ${data.mobile}\n**Address:** ${data.address}\n\n**Products:**\n${productList}\n\n**Total:** Rs. ${totalPrice.toLocaleString()}\n**Payment:** Cash on Delivery`,
    };

    try {
      const webhookUrl = (import.meta as any).env?.VITE_DISCORD_WEBHOOK;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(message),
        });
      }
      setSubmitted(true);
      clearCart();
    } catch {
      toast.error("Order placed! (Webhook unavailable)");
      setSubmitted(true);
      clearCart();
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="pt-32 pb-16 text-center"
      >
        <div className="container mx-auto px-4 max-w-lg">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <CheckCircle size={80} className="mx-auto text-primary mb-6" />
          </motion.div>
          <h1 className="font-display text-3xl font-bold text-secondary mb-4">Order Placed!</h1>
          <p className="text-muted-foreground mb-8">Thank you for shopping with Inqilab Mart. Your order will be delivered soon via Cash on Delivery.</p>
          <Button asChild className="luxury-gradient text-primary-foreground h-12 px-8">
            <a href="/shop">Continue Shopping</a>
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-2">Checkout</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-secondary">Place Your Order</h1>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-3 space-y-5">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" {...register("fullName")} placeholder="Your full name" className="mt-1" />
              {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>}
            </div>
            <div>
              <Label htmlFor="address">Shipping Address</Label>
              <Textarea id="address" {...register("address")} placeholder="Complete address" className="mt-1" />
              {errors.address && <p className="text-sm text-destructive mt-1">{errors.address.message}</p>}
            </div>
            <div>
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" {...register("mobile")} placeholder="03XX XXXXXXX" className="mt-1" />
              {errors.mobile && <p className="text-sm text-destructive mt-1">{errors.mobile.message}</p>}
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium mb-1">Payment Method</p>
              <p className="text-primary font-semibold">💵 Cash on Delivery</p>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting || items.length === 0}
              className="w-full luxury-gradient text-primary-foreground h-12 font-semibold"
            >
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </Button>
          </form>

          {/* Summary */}
          <div className="md:col-span-2">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-28">
              <h3 className="font-display text-lg font-semibold mb-4">Order Summary</h3>
              {items.length === 0 ? (
                <p className="text-sm text-muted-foreground">No items in cart</p>
              ) : (
                <div className="space-y-3">
                  {items.map((i) => (
                    <div key={i.product.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{i.product.name} ×{i.quantity}</span>
                      <span className="font-medium">Rs. {(i.product.price * i.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="border-t border-border pt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-gradient-gold text-lg">Rs. {totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
