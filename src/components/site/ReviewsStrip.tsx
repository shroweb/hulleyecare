import { Link } from "@tanstack/react-router";
import { reviews } from "@/data/site";

export function ReviewsStrip() {
  return (
    <section className="container-page py-20 lg:py-28">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <h2 className="max-w-xs">What patients say</h2>
        <Link to="/reviews" className="text-sm font-semibold text-accent underline underline-offset-4 hover:text-ink transition-colors">
          All reviews
        </Link>
      </div>

      {/* Deliberately uneven — large quote + two smaller */}
      <div className="grid lg:grid-cols-5 gap-6">
        <figure className="lg:col-span-3 bg-ink text-white p-10 flex flex-col justify-between">
          <blockquote className="font-display text-2xl leading-snug text-white/90">
            &ldquo;{reviews[0].quote}&rdquo;
          </blockquote>
          <figcaption className="mt-8 text-sm text-white/45">
            {reviews[0].name}
          </figcaption>
        </figure>
        <div className="lg:col-span-2 flex flex-col gap-6">
          {reviews.slice(1, 3).map((r, i) => (
            <figure key={i} className="border border-border p-7 flex flex-col justify-between flex-1">
              <blockquote className="text-ink/80 leading-relaxed text-sm">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-xs text-muted-foreground">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
