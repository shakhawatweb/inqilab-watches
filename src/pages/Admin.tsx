import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, X, Image, Package, Search, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from "@/components/ui/table";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { products as initialProducts, categories } from "@/data/products";
import { Product } from "@/types";

const emptyProduct: Omit<Product, "id"> = {
  name: "",
  price: 0,
  originalPrice: undefined,
  image: "",
  images: [],
  description: "",
  shortDescription: "",
  category: "Luxury",
  featured: false,
};

export default function Admin() {
  const [productList, setProductList] = useState<Product[]>(initialProducts);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyProduct);
  const [imageInput, setImageInput] = useState("");
  const [search, setSearch] = useState("");

  const filtered = productList.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const openNew = () => {
    setForm(emptyProduct);
    setEditingId(null);
    setImageInput("");
    setShowForm(true);
  };

  const openEdit = (p: Product) => {
    setForm({ ...p });
    setEditingId(p.id);
    setImageInput(p.images.join("\n"));
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setProductList((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSave = () => {
    const images = imageInput
      .split("\n")
      .map((u) => u.trim())
      .filter(Boolean);
    const mainImage = images[0] || form.image;

    if (editingId) {
      setProductList((prev) =>
        prev.map((p) =>
          p.id === editingId
            ? { ...p, ...form, image: mainImage, images }
            : p
        )
      );
    } else {
      const newProduct: Product = {
        ...form,
        id: Date.now().toString(),
        image: mainImage,
        images,
      };
      setProductList((prev) => [...prev, newProduct]);
    }
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-secondary text-secondary-foreground shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:bg-secondary-foreground/10">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <h1 className="font-display text-xl font-bold tracking-tight">
              Admin <span className="text-gradient-gold">Dashboard</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-secondary-foreground/60">
            <Package size={16} />
            <span>{productList.length} Products</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button onClick={openNew} className="luxury-gradient text-primary-foreground gap-2 shrink-0">
            <Plus size={18} /> Add Product
          </Button>
        </div>

        {/* Product Table */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-border bg-card shadow-sm overflow-hidden"
        >
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-16">Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="hidden sm:table-cell">Featured</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                    No products found.
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((p) => (
                  <TableRow key={p.id} className="group">
                    <TableCell>
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{p.name}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                        {p.category}
                      </span>
                    </TableCell>
                    <TableCell className="font-semibold">
                      ${p.price.toLocaleString()}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {p.featured ? (
                        <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                      ) : (
                        <span className="inline-block w-2 h-2 rounded-full bg-border" />
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" onClick={() => openEdit(p)} className="hover:text-primary">
                          <Pencil size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(p.id)} className="hover:text-destructive">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </motion.div>
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/40 backdrop-blur-sm overflow-y-auto py-8"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl shadow-2xl border border-border w-full max-w-xl mx-4"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="font-display text-xl font-bold">
                  {editingId ? "Edit Product" : "New Product"}
                </h2>
                <Button variant="ghost" size="icon" onClick={() => setShowForm(false)}>
                  <X size={18} />
                </Button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 sm:col-span-2">
                    <Label>Product Name</Label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Royal Chronograph"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Price ($)</Label>
                    <Input
                      type="number"
                      value={form.price || ""}
                      onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                      placeholder="12500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Original Price ($)</Label>
                    <Input
                      type="number"
                      value={form.originalPrice || ""}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          originalPrice: e.target.value ? Number(e.target.value) : undefined,
                        })
                      }
                      placeholder="15000 (optional)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select
                      value={form.category}
                      onValueChange={(val) => setForm({ ...form, category: val })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.filter((c) => c !== "All").map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 flex items-end">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.featured || false}
                        onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                        className="w-4 h-4 rounded border-border accent-primary"
                      />
                      <span className="text-sm font-medium">Featured Product</span>
                    </label>
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label>Short Description</Label>
                    <Input
                      value={form.shortDescription}
                      onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
                      placeholder="Brief tagline for the product"
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label>Full Description</Label>
                    <Textarea
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      placeholder="Detailed product description..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label className="flex items-center gap-2">
                      <Image size={14} /> Image URLs (one per line)
                    </Label>
                    <Textarea
                      value={imageInput}
                      onChange={(e) => setImageInput(e.target.value)}
                      placeholder={"https://example.com/image1.jpg\nhttps://example.com/image2.jpg"}
                      rows={3}
                    />
                    <p className="text-xs text-muted-foreground">
                      First image will be used as the main product image.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave} className="luxury-gradient text-primary-foreground">
                  {editingId ? "Save Changes" : "Add Product"}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
