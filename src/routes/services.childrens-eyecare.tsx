import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicePromises } from "@/components/site/ServicePromises";
import { Check } from "lucide-react";
import childImg from "@/assets/childrens-eye-test.jpg";
import { site } from "@/data/site";

export const Route = createFileRoute("/services/childrens-eyecare")({
  head: () => ({
    meta: [
      { title: "Children's Eyecare & Myopia Management | Vision Plus Eyecare, Hull" },
      { name: "description", content: "Free NHS children's eye exams in Hull and MiYOSMART myopia management lenses to slow short-sightedness in children." },
      { property: "og:title", content: "Children's Eyecare in Hull" },
      { property: "og:description", content: "Free NHS exams for under 16s and MiYOSMART myopia management." },
      { property: "og:url", content: "/services/childrens-eyecare" },
    ],
    links: [{ rel: "canonical", href: "/services/childrens-eyecare" }],
  }),
  component: Kids,
});

function Kids() {
  return (
    <>
      <PageHeader
        eyebrow="Children's eyecare"
        title="Children's eye care and myopia management."
        lead="Free NHS exams for under 16s and students under 19. MiYOSMART lenses to slow short-sightedness in growing eyes."
      >
        <Link to="/contact" className="btn-white">Book my child's exam</Link>
        <a href={site.phoneTel} className="btn-white-ghost">Call {site.phone}</a>
      </PageHeader>

      <section className="container-page py-16 grid lg:grid-cols-2 gap-12 items-start">
        <img src={childImg} alt="Child wearing glasses reading a book." width={1400} height={1000} loading="lazy"
             className="object-cover aspect-[5/4] w-full" />
        <div className="space-y-8">
          <div>
            <h2>What is myopia?</h2>
            <p className="mt-3 text-ink/85">
              Myopia means short-sightedness. The eye grows slightly too long, so distant things look blurry
              while close-up things stay clear. Around a third of people in the UK are myopic. It usually
              starts between six and thirteen and tends to get worse until the eye stops growing.
            </p>
          </div>
          <div>
            <h2>How MiYOSMART lenses help</h2>
            <p className="mt-3 text-ink/85">
              MiYOSMART is a daytime spectacle lens designed to slow the progression of myopia in children.
              They look like normal glasses and your child wears them all day. Studies show meaningful
              reductions in how fast prescriptions change over time.
            </p>
          </div>
          <div>
            <h3>Signs to watch for</h3>
            <ul className="mt-3 space-y-2 text-ink/85">
              {[
                "Squinting to see the TV or whiteboard",
                "Sitting very close to screens or books",
                "Headaches, especially after school",
                "Rubbing eyes or complaining of tired vision",
              ].map((i) => (
                <li key={i} className="flex gap-2.5">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page pb-16"><ServicePromises /></section>
    </>
  );
}
