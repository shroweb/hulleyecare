import { Phone, MapPin } from "lucide-react";
import { site } from "@/data/site";

export function MobileCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 border-t border-border bg-background shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)]">
      <a href={site.phoneTel} className="flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground font-medium">
        <Phone className="h-4 w-4" /> Call {site.phone}
      </a>
      <a href={site.mapsDirections} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 py-3.5 text-primary font-medium border-l border-border">
        <MapPin className="h-4 w-4" /> Directions
      </a>
    </div>
  );
}
