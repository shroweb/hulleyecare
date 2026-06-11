import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicePromises } from "@/components/site/ServicePromises";
import { Check } from "lucide-react";
import { site } from "@/data/site";

export const Route = createFileRoute("/services/sunglasses")({
  head: () => ({
    meta: [
      { title: "Prescription Sunglasses in Hull from £25 | Vision Plus Eyecare" },
      { name: "description", content: "Prescription sunglasses from £25 at Vision Plus Eyecare in Hull. Polarised, photochromic and designer options." },
      { property: "og:title", content: "Prescription Sunglasses in Hull" },
      { property: "og:description", content: "From £25. Polarised, photochromic and designer options." },
      { property: "og:url", content: "/services/sunglasses" },
    ],
    links: [{ rel: "canonical", href: "/services/sunglasses" }],
  }),
  component: Sun,
});

function Sun() {
  return (
    <>
      <PageHeader
        eyebrow="Sunglasses"
        title="Prescription sunglasses from £25."
        lead="Real prescription sunglasses, fitted properly. Up to a third off designer styles when promotions run."
      >
        <Link to="/contact" className="btn-white">Ask about sunglasses</Link>
        <a href={site.phoneTel} className="btn-white-ghost">Call {site.phone}</a>
      </PageHeader>

      <section className="container-page py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2>Options we fit</h2>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-ink/85">
            {[
              "Polarised lenses for driving and water",
              "Photochromic lenses that darken outdoors",
              "Tinted prescription lenses in any base",
              "Wrap frames for cycling and running",
              "Designer sunglass frames",
              "Clip-on sun lenses for existing glasses",
            ].map((i) => (
              <li key={i} className="flex gap-2.5">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="card-soft h-fit">
          <h3 className="text-lg">Current offer</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Up to 33% off selected designer sunglasses. Ask in practice for current pricing.
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <Link to="/contact" className="btn-primary">Get in touch</Link>
            <a href={site.phoneTel} className="btn-ghost">Call {site.phone}</a>
          </div>
        </aside>
      </section>

      <section className="container-page pb-16"><ServicePromises /></section>
    </>
  );
}
