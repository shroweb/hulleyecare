import { createFileRoute } from "@tanstack/react-router";
import { reviews } from "@/data/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Patient Reviews | Vision Plus Eyecare, Hull" },
      { name: "description", content: "Honest patient reviews of Vision Plus Eyecare on Holderness Road, Hull. NHS and private eye care." },
      { property: "og:title", content: "Patient Reviews" },
      { property: "og:description", content: "What patients say about Vision Plus Eyecare in Hull." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      {/* Header — no eyebrow, just direct */}
      <div className="bg-primary text-white">
        <div className="container-page py-16">
          <h1 className="text-white">What patients say about us.</h1>
          <p className="mt-4 text-white/60 max-w-md text-base leading-relaxed">
            All reviews from Google. If we've looked after you, we'd love a few words.
          </p>
          <a
            href="https://www.google.com/search?q=Vision+Plus+Eyecare+Hull"
            target="_blank"
            rel="noopener"
            className="mt-7 inline-flex items-center gap-2 bg-white text-primary px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white/90 transition-colors"
          >
            Leave a review on Google
          </a>
        </div>
      </div>

      <section className="container-page py-16 lg:py-20">
        {/* First review — large featured */}
        <figure className="border-b border-ink/10 pb-12 mb-12">
          <blockquote className="font-display text-2xl lg:text-3xl text-ink/85 leading-snug">
            &ldquo;{reviews[0].quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="font-semibold text-ink">{reviews[0].name}</span>
            <span className="text-ink/30">·</span>
            <span className="text-sm text-muted-foreground">{reviews[0].source}</span>
          </figcaption>
        </figure>

        {/* Rest as a plain list — no cards, just text */}
        <div className="space-y-10 max-w-2xl">
          {reviews.slice(1).map((r, i) => (
            <figure key={i} className="border-l-2 border-accent pl-6">
              <blockquote className="text-ink/80 leading-relaxed">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 flex items-center gap-3">
                <span className="font-semibold text-sm text-ink">{r.name}</span>
                <span className="text-ink/30">·</span>
                <span className="text-xs text-muted-foreground">{r.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
