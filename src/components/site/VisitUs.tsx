import { site } from "@/data/site";
import { Link } from "@tanstack/react-router";

export function VisitUs() {
  return (
    <section id="visit" className="border-t border-ink/10">
      <div className="container-page py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2>Come and see us.</h2>
          <p className="mt-5 text-ink/60 leading-relaxed max-w-sm">
            We're at 283 Holderness Road, Hull — near the junction with Ings
            Road. Appointments are recommended for eye exams and contact lens
            fittings, but you're welcome to pop in for adjustments or to
            browse frames any time.
          </p>

          <div className="mt-8 space-y-1 text-sm text-ink/70">
            <p>283 Holderness Road, Hull, HU8 8TE</p>
            <p>
              <a href={site.phoneTel} className="text-primary font-semibold hover:text-accent transition-colors">
                {site.phone}
              </a>
              {" "}·{" "}
              <a href={site.emailHref} className="hover:text-accent transition-colors">
                {site.email}
              </a>
            </p>
            <p className="text-ink/45 text-xs uppercase tracking-widest pt-1">Monday to Friday · 9:30am–5:30pm</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Book an appointment</Link>
            <a href={site.mapsDirections} target="_blank" rel="noopener" className="btn-ghost">
              Get directions
            </a>
          </div>
        </div>

        <div className="overflow-hidden border border-border min-h-[320px]">
          <iframe
            title="Map of Vision Plus Eyecare, 283 Holderness Road, Hull"
            src={site.mapsEmbed}
            className="w-full h-full min-h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
