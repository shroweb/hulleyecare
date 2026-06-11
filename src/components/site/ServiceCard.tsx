import { Link } from "@tanstack/react-router";
import { ArrowRight, Eye, ShieldCheck, Baby, CircleDot, Glasses, Sun, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Eye, ShieldCheck, Baby, CircleDot, Glasses, Sun,
};

export function ServiceCard({
  slug, name, blurb, icon, variant = "light",
}: { slug: string; name: string; blurb: string; icon: string; variant?: "light" | "dark" }) {
  const Icon = icons[icon] ?? Eye;
  const dark = variant === "dark";
  return (
    <Link
      to={`/services/${slug}` as "/services/nhs-eye-exams"}
      className={
        "group block p-8 border transition-all duration-300 " +
        (dark
          ? "bg-transparent border-white/15 hover:border-accent hover:bg-white/[0.03]"
          : "bg-card border-ink/10 hover:border-accent")
      }
    >
      <div className="flex items-start justify-between mb-10">
        <Icon className={"h-7 w-7 " + (dark ? "text-accent" : "text-accent")} />
        <span className={"text-[10px] uppercase tracking-[0.3em] font-bold " + (dark ? "text-white/40" : "text-ink/40")}>
          Service
        </span>
      </div>
      <h3 className={"font-display text-2xl " + (dark ? "text-white" : "text-ink")}>{name}</h3>
      <p className={"mt-3 text-sm leading-relaxed " + (dark ? "text-white/60" : "text-ink/65")}>{blurb}</p>
      <div className={"mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-bold " + (dark ? "text-accent" : "text-ink")}>
        Read more
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
