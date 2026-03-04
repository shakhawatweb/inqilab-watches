import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminSettings() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-6">Settings</h1>

      <div className="max-w-lg space-y-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
          <h3 className="font-display text-lg font-semibold">Store Info</h3>
          <div className="space-y-2">
            <Label>Store Name</Label>
            <Input defaultValue="Inqilab Mart" />
          </div>
          <div className="space-y-2">
            <Label>Contact Email</Label>
            <Input defaultValue="admin@inqilabmart.com" />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input defaultValue="+92 300 1234567" />
          </div>
          <Button className="luxury-gradient text-primary-foreground">Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
