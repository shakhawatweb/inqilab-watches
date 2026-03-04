import { motion } from "framer-motion";
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from "@/components/ui/table";

const mockOrders = [
  { id: "1001", customer: "Ahmed Khan", items: 2, total: 21400, status: "Pending", date: "Mar 3, 2026" },
  { id: "1002", customer: "Sara Ali", items: 1, total: 8900, status: "Shipped", date: "Mar 2, 2026" },
  { id: "1003", customer: "Omar Farooq", items: 3, total: 35200, status: "Delivered", date: "Mar 1, 2026" },
  { id: "1004", customer: "Fatima Noor", items: 1, total: 6500, status: "Pending", date: "Feb 28, 2026" },
  { id: "1005", customer: "Hassan Raza", items: 2, total: 18300, status: "Cancelled", date: "Feb 27, 2026" },
];

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-700",
  Shipped: "bg-blue-100 text-blue-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function Orders() {
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockOrders.map((o) => (
              <TableRow key={o.id}>
                <TableCell className="font-medium">#{o.id}</TableCell>
                <TableCell>{o.customer}</TableCell>
                <TableCell className="hidden sm:table-cell">{o.items}</TableCell>
                <TableCell className="font-semibold">${o.total.toLocaleString()}</TableCell>
                <TableCell>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[o.status] || ""}`}>
                    {o.status}
                  </span>
                </TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">{o.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
}
