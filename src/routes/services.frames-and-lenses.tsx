import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicePromises } from "@/components/site/ServicePromises";
import framesImg from "@/assets/prescription-sunglasses.jpg";
import { brands, site } from "@/data/site";

export const Route = createFileRoute("/services/frames-and-lenses")({
  head: () => ({
    meta: [
      { title: "Designer & Budget Frames in Hull | Vision Plus Eyecare" },
      { name: "description", content: "Designer and budget frames fitted around your prescription, lifestyle and face shape. 20% off own-brand frames for over 60s. Hull." },
      { property: "og:title", content: "Frames and Lenses in Hull" },
      { property: "og:description", content: "Designer and budget frames, single vision, varifocal and occupational lenses." },
      { property: "og:url", content: "/services/frames-and-lenses" },
    ],
    links: [{ rel: "canonical", href: "/services/frames-and-lenses" }],
  }),
  component: Frames,
});

function Frames() {
  return (
    <>
      <PageHeader
        eyebrow="Frames and lenses"
        title="Frames and lenses chosen around your life."
        lead="Independent means we are free to source frames and lenses from a wide range of suppliers. We pick what suits you, not what suits a chain's targets."
      >
        <Link to="/contact" className="btn-white">Talk to a dispensing optician</Link>
        <a href={site.phoneTel} className="btn-white-ghost">Call {site.phone}</a>
      </PageHeader>

      <section className="container-page py-16 grid lg:grid-cols-2 gap-10 items-start">
        <img src={framesImg} alt="Sunglasses display at Vision Plus Eyecare, Holderness Road, Hull."
             width={1400} height={1000} loading="lazy"
             className="object-cover aspect-[5/4] w-full" />
        <div className="space-y-6">
          <div>
            <h2>How we dispense</h2>
            <p className="mt-3 text-ink/85">
              Choosing frames is more than picking a shape you like. Your prescription, the way you use your
              eyes day to day and your face shape all change what will work. We help you narrow it down without
              the hard sell.
            </p>
          </div>
          <div>
            <h3>Lens options</h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-ink/85 text-sm">
              {["Single vision", "Varifocal", "Occupational (computer)", "Blue light filtering",
                "Thinner indexes (1.6, 1.67, 1.74)", "Anti-reflective coatings", "Photochromic",
                "Polarised"].map((i) => <li key={i}>· {i}</li>)}
            </ul>
          </div>
          <p className="text-sm text-ink/70 border-l-2 border-accent pl-4">
            Over 60? 20% off own-brand frames. Ask in practice for current pricing.
          </p>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container-page py-16">
          <h2>Brands we stock</h2>
          <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-ink/70">
            {brands.map((b) => <li key={b} className="font-display text-lg">{b}</li>)}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            Designer and budget options sit side by side on the wall. Pop in to try anything on.
          </p>
        </div>
      </section>

      <section className="container-page py-16"><ServicePromises /></section>
    </>
  );
}
