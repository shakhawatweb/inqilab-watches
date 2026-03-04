import { Package, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/data/products";

const stats = [
  {
    label: "Total Products",
    value: products.length.toString(),
    icon: Package,
    change: "+2 this week",
  },
  {
    label: "Total Orders",
    value: "24",
    icon: ShoppingCart,
    change: "+5 today",
  },
  {
    label: "Revenue",
    value: "$48,250",
    icon: DollarSign,
    change: "+12% vs last month",
  },
  {
    label: "Conversion Rate",
    value: "3.2%",
    icon: TrendingUp,
    change: "+0.4% vs last week",
  },
];

export default function Overview() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon size={18} className="text-primary" />
              </div>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="font-display text-lg font-semibold mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium">Order #{1000 + i}</p>
                  <p className="text-xs text-muted-foreground">2 items • March {i}, 2026</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  Pending
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="font-display text-lg font-semibold mb-4">Top Products</h3>
          <div className="space-y-3">
            {products.slice(0, 3).map((p) => (
              <div key={p.id} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted shrink-0">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.category}</p>
                </div>
                <p className="text-sm font-semibold">${p.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
