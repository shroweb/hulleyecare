import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import heroImg from "@/assets/eye-examination.jpg";
import childImg from "@/assets/childrens-eye-test.jpg";
import framesImg from "@/assets/prescription-sunglasses.jpg";
import nhsLogo from "@/assets/nhs-logo.png";
import { site, services, reviews } from "@/data/site";

import { VisitUs } from "@/components/site/VisitUs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vision Plus Eyecare | Opticians in Hull, Holderness Road" },
      { name: "description", content: "Independent opticians on Holderness Road, Hull. NHS and private eye exams, designer frames, contact lenses and children's myopia management. Call 01482 225545." },
      { property: "og:title", content: "Vision Plus Eyecare | Opticians in Hull" },
      { property: "og:description", content: "NHS and private eye care on Holderness Road, Hull. Same staff every visit." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="container-page pt-14 lg:pt-20 pb-0 grid grid-cols-12 gap-6 lg:gap-0 items-end">

          {/* Text */}
          <div className="col-span-12 lg:col-span-6 pb-16 lg:pb-20 z-10">
            <h1>
              Everybody deserves <span className="text-accent">great eyecare.</span>
            </h1>
            <p className="mt-7 max-w-sm text-base text-ink/60 leading-relaxed">
              We're an independent optician on Holderness Road, Hull. NHS and
              private exams, frames, contact lenses. Same team every single
              visit — we've been here since the early 2000s.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link to="/contact" className="btn-primary">Book an eye exam</Link>
              <a href={site.phoneTel} className="flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <img src={nhsLogo} alt="NHS" className="h-7 w-auto" />
              <span className="text-xs text-ink/45 uppercase tracking-widest font-semibold">Testing &amp; frames available</span>
            </div>
          </div>

          {/* Photo — bleeds to right edge on desktop */}
          <div className="col-span-12 lg:col-span-6 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[48%]">
            <div className="aspect-[3/2] lg:aspect-auto lg:h-full overflow-hidden">
              <img
                src={heroImg}
                alt="Eye examination at Vision Plus Eyecare, Holderness Road, Hull."
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-ink text-white">
        <div className="container-page py-20 lg:py-28">
          <div className="max-w-xl mb-14">
            <h2 className="text-white">What we do</h2>
            <p className="mt-4 text-white/55 text-base leading-relaxed">
              Everything from a routine NHS check to specialist myopia management
              for children. We don't rush you and we don't push you towards
              things you don't need.
            </p>
          </div>

          {/* Staggered service list — not a uniform card grid */}
          <div className="divide-y divide-white/10 border-t border-white/10">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex items-center justify-between py-5 gap-6 hover:bg-white/[0.03] -mx-4 px-4 transition-colors"
              >
                <div className="flex items-baseline gap-6 min-w-0">
                  <span className="hidden sm:block text-[11px] text-white/25 font-mono w-4 shrink-0">
                    {String(services.indexOf(s) + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-xl lg:text-2xl text-white">{s.name}</div>
                    <div className="mt-1 text-sm text-white/50 leading-snug">{s.blurb}</div>
                  </div>
                </div>
                <span className="text-accent text-xl shrink-0 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INDEPENDENT MATTERS ── */}
      <section className="border-b border-ink/10">
        <div className="container-page py-20 lg:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 lg:col-start-2">
            <img
              src={framesImg}
              alt="Sunglasses wall display at Vision Plus Eyecare."
              loading="lazy"
              className="w-full aspect-[5/4] object-cover"
            />
          </div>
          <div className="lg:col-span-5">
            <h2>
              Independent means<br />we answer to you.
            </h2>
            <p className="mt-5 text-ink/60 leading-relaxed">
              We're not a chain. Nobody here is on a sales target. Our dispensing
              opticians will tell you honestly what suits your prescription,
              your face and your budget — whether that's a pair of NHS frames or
              a set of Prada varifocals.
            </p>
            <p className="mt-4 text-ink/60 leading-relaxed">
              If something's not right after you pick up your glasses, come back
              in. We'll sort it. No charge, no fuss.
            </p>
            <Link to="/about" className="mt-8 btn-ghost inline-flex">
              About the practice
            </Link>
          </div>
        </div>
      </section>

      {/* ── CHILDREN'S EYECARE ── */}
      <section className="bg-soft/50">
        <div className="container-page py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2>Children's eyes change fast.</h2>
            <p className="mt-5 text-ink/60 leading-relaxed">
              Short-sightedness typically starts between ages 6 and 13 and
              worsens as the eye grows. We offer MiYOSMART lenses — a daytime
              spectacle treatment clinically shown to slow myopia progression.
              All children under 16 qualify for free NHS eye exams.
            </p>
            <Link to="/services/childrens-eyecare" className="mt-8 btn-primary inline-flex">
              Children's eyecare
            </Link>
          </div>
          <div>
            <img
              src={childImg}
              alt="Child trying on glasses at Vision Plus Eyecare."
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="container-page py-20 lg:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <h2>What patients say</h2>
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

      {/* ── FRAMES PROMO ── */}
      <section className="bg-primary text-white">
        <div className="container-page py-14 lg:py-20 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Frames from £25</p>
            <h3 className="text-white text-3xl lg:text-4xl font-display">
              Designer brands. NHS prices.<br />Same friendly advice.
            </h3>
          </div>
          <Link to="/services/frames-and-lenses" className="btn-primary bg-white text-primary hover:bg-white/90 shrink-0">
            Browse frames
          </Link>
        </div>
      </section>

      <VisitUs />
    </>
  );
}
