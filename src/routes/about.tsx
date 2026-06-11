import { createFileRoute, Link } from "@tanstack/react-router";
import { VisitUs } from "@/components/site/VisitUs";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vision Plus Eyecare | Independent Opticians in Hull" },
      { name: "description", content: "Vision Plus Eyecare is an independent opticians on Holderness Road, Hull. Meet the team and learn about our non-tolerance guarantee." },
      { property: "og:title", content: "About Vision Plus Eyecare" },
      { property: "og:description", content: "Independent opticians on Holderness Road, Hull." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      {/* Header */}
      <div className="bg-primary text-white">
        <div className="container-page py-16">
          <h1 className="text-white">An independent practice on Holderness Road.</h1>
          <p className="mt-5 text-white/60 text-base leading-relaxed max-w-lg">
            Vision Plus Eyecare has been on Holderness Road since the early 2000s.
            Same team, same values, same patients coming back year after year.
          </p>
          <Link to="/contact" className="mt-7 inline-flex items-center justify-center bg-white text-primary px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-colors">
            Book an appointment
          </Link>
        </div>
      </div>

      {/* Main content */}
      <section className="container-page py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6 text-ink/80 leading-relaxed">
          <p>
            We're independent, which means we don't have a head office telling us what to sell.
            We source frames and lenses from a wide range of suppliers — designer brands, budget
            options, specialist lenses — and we recommend what suits your prescription, your face
            and your life. Not what shifts the highest margin this quarter.
          </p>
          <p>
            You'll see the same staff each time you visit. They'll remember you, remember your last
            prescription, remember that you said your arms ache reading at a screen all day. That
            kind of continuity matters when it comes to eye health — it's how we catch things early.
          </p>
          <p>
            We offer a non-tolerance lens guarantee. If the lenses we recommend don't suit you,
            we'll change them. On the rare occasions it happens, we sort it — no argument, no charge.
          </p>
          <p>
            Between appointments, you're welcome to pop in. Adjustment to your frames, a loose screw,
            a new nose pad — we'll see to it while you wait, usually at no cost. We think that's just
            part of the job.
          </p>
        </div>

        <aside className="space-y-6">
          <div className="border border-border p-6">
            <h3 className="text-base font-semibold text-ink mb-3">Accreditations</h3>
            <ul className="space-y-2 text-sm text-ink/70">
              <li>NHS approved practice</li>
              <li>General Optical Council registered</li>
              <li>Association of British Dispensing Opticians</li>
              <li>College of Optometrists members</li>
            </ul>
          </div>
          <div className="border border-border p-6">
            <h3 className="text-base font-semibold text-ink mb-3">Opening hours</h3>
            <ul className="space-y-1 text-sm text-ink/70">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
            <a href={site.phoneTel} className="mt-4 block text-sm font-semibold text-primary hover:text-accent transition-colors">
              {site.phone}
            </a>
          </div>
        </aside>
      </section>

      <VisitUs />
    </>
  );
}
