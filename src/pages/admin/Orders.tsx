import { useState } from "react";
import { motion } from "framer-motion";
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from "@/components/ui/table";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const initialOrders = [
  { id: "1001", customer: "Ahmed Khan", items: 2, total: 21400, status: "Pending", date: "Mar 3, 2026" },
  { id: "1002", customer: "Sara Ali", items: 1, total: 8900, status: "Shipped", date: "Mar 2, 2026" },
  { id: "1003", customer: "Omar Farooq", items: 3, total: 35200, status: "Delivered", date: "Mar 1, 2026" },
  { id: "1004", customer: "Fatima Noor", items: 1, total: 6500, status: "Pending", date: "Feb 28, 2026" },
  { id: "1005", customer: "Hassan Raza", items: 2, total: 18300, status: "Cancelled", date: "Feb 27, 2026" },
];

const statuses = ["Pending", "Shipped", "Delivered", "Cancelled"] as const;

const statusVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  Pending: "outline",
  Shipped: "secondary",
  Delivered: "default",
  Cancelled: "destructive",
};

export default function Orders() {
  const [orders, setOrders] = useState(initialOrders);

  const updateStatus = (id: string, newStatus: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
    );
  };

  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-6">Orders</h1>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-border bg-card shadow-sm overflow-hidden"
      >
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden sm:table-cell">Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((o) => (
              <TableRow key={o.id}>
                <TableCell className="font-medium">#{o.id}</TableCell>
                <TableCell>{o.customer}</TableCell>
                <TableCell className="hidden sm:table-cell">{o.items}</TableCell>
                <TableCell className="font-semibold">${o.total.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[o.status] || "outline"}>
                    {o.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">{o.date}</TableCell>
                <TableCell>
                  <Select value={o.status} onValueChange={(v) => updateStatus(o.id, v)}>
                    <SelectTrigger className="w-[130px] h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
}
