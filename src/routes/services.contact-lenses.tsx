import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicePromises } from "@/components/site/ServicePromises";
import { Check } from "lucide-react";
import { site } from "@/data/site";

export const Route = createFileRoute("/services/contact-lenses")({
  head: () => ({
    meta: [
      { title: "Contact Lenses in Hull from £19 a month | Vision Plus Eyecare" },
      { name: "description", content: "Daily, monthly and extended wear contact lenses from £19 a month at Vision Plus Eyecare in Hull. New wearer fittings and aftercare." },
      { property: "og:title", content: "Contact Lenses in Hull" },
      { property: "og:description", content: "Daily, monthly and extended wear from £19 a month." },
      { property: "og:url", content: "/services/contact-lenses" },
    ],
    links: [{ rel: "canonical", href: "/services/contact-lenses" }],
  }),
  component: Lenses,
});

function Lenses() {
  return (
    <>
      <PageHeader
        eyebrow="Contact lenses"
        title="Contact lenses from £19 a month."
        lead="Whether you have never worn lenses or are switching from another provider, we will find an option that fits your eyes and your budget."
      >
        <Link to="/contact" className="btn-white">Book a fitting</Link>
        <a href={site.phoneTel} className="btn-white-ghost">Call {site.phone}</a>
      </PageHeader>

      <section className="container-page py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2>What we fit</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-ink/85">
              {[
                "Daily disposable lenses",
                "Monthly lenses",
                "Extended wear lenses",
                "Toric lenses for astigmatism",
                "Multifocal lenses for presbyopia",
                "Trial lenses for new wearers",
              ].map((i) => (
                <li key={i} className="flex gap-2.5">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>How a fitting works</h2>
            <p className="mt-3 text-ink/85">
              Your fitting starts with measurements of your eye and a chat about how you plan to use the lenses.
              We teach you how to put them in and take them out safely, then send you home with trial lenses
              before any subscription begins.
            </p>
          </div>
        </div>

        <aside className="card-soft h-fit">
          <h3 className="text-lg">Already a wearer?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Switch to us for the same lenses, often at a better monthly price, with aftercare included.
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <Link to="/contact" className="btn-primary">Get a quote</Link>
            <a href={site.phoneTel} className="btn-ghost">Call {site.phone}</a>
          </div>
        </aside>
      </section>

      <section className="container-page pb-16"><ServicePromises /></section>
    </>
  );
}
