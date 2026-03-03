import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">
              Inqilab <span className="text-primary">Mart</span>
            </h3>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Crafting timeless elegance since 2020. Every watch tells a story of precision, luxury, and uncompromising quality.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2"><Phone size={14} /> +92 300 1234567</li>
              <li className="flex items-center gap-2"><Mail size={14} /> info@inqilabmart.com</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> Lahore, Pakistan</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-secondary-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-sm text-secondary-foreground/50">
          © {new Date().getFullYear()} Inqilab Mart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
