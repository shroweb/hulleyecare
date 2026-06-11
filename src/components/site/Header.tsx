import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { site, services } from "@/data/site";
import logoWhite from "@/assets/vision-plus-logo-white.png";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-md">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logoWhite} alt="Vision Plus Eyecare" className="h-9 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <ServicesDropdown />
          <NavLink to="/about" label="About" />
          <NavLink to="/reviews" label="Reviews" />
          <NavLink to="/contact" label="Contact" />
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a href={site.phoneTel} className="text-xs uppercase tracking-[0.2em] font-bold text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            {site.phone}
          </a>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-accent text-primary-foreground px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent/85 transition-colors">
            Book an exam
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-primary-foreground/30 text-primary-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-primary-foreground/15 bg-primary">
          <nav className="container-page py-4 flex flex-col">
            {site.nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-primary-foreground/15 text-primary-foreground text-sm uppercase tracking-[0.15em] font-semibold"
                activeProps={{ className: "py-3 border-b border-primary-foreground/15 text-accent text-sm uppercase tracking-[0.15em] font-semibold" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={site.phoneTel} className="mt-5 inline-flex items-center justify-center gap-2 bg-accent text-primary-foreground px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em]">
              <Phone className="h-4 w-4" /> Call {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-bold text-primary-foreground/80 hover:text-primary-foreground transition-colors">
        Services <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 bg-primary border border-primary-foreground/15 min-w-[220px] shadow-xl z-50">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              onClick={() => setOpen(false)}
              className="block px-5 py-3.5 text-[11px] uppercase tracking-[0.15em] font-semibold text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5 border-b border-primary-foreground/10 last:border-0 transition-colors"
            >
              {s.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="text-xs uppercase tracking-[0.2em] font-bold text-primary-foreground/80 hover:text-primary-foreground transition-colors"
      activeProps={{ className: "text-xs uppercase tracking-[0.2em] font-bold text-primary-foreground transition-colors border-b-2 border-accent pb-0.5" }}
    >
      {label}
    </Link>
  );
}
