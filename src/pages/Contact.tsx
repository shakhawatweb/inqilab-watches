import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent! We'll get back to you soon.");
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-2">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary">Contact Us</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-display text-2xl font-semibold mb-6">We'd Love to Hear From You</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have questions about our watches, need help with an order, or want to share feedback? Drop us a message and we'll respond within 24 hours.
            </p>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "+92 300 1234567" },
                { icon: Mail, text: "info@inqilabmart.com" },
                { icon: MapPin, text: "Lahore, Pakistan" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 bg-card p-8 rounded-xl border border-border"
          >
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} placeholder="Your name" className="mt-1" />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" {...register("email")} placeholder="your@email.com" className="mt-1" />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" {...register("message")} placeholder="Your message..." rows={5} className="mt-1" />
              {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full luxury-gradient text-primary-foreground h-12 font-semibold"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}
