import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicePromises } from "@/components/site/ServicePromises";
import { Check } from "lucide-react";
import { site } from "@/data/site";

export const Route = createFileRoute("/services/private-eye-exams")({
  head: () => ({
    meta: [
      { title: "Private Eye Exam, £35 | Vision Plus Eyecare, Hull" },
      { name: "description", content: "Thorough private eye exam for £35 at Vision Plus Eyecare in Hull. Book online or call 01482 225545." },
      { property: "og:title", content: "Private Eye Exam in Hull, £35" },
      { property: "og:description", content: "Thorough private exam on Holderness Road, Hull." },
      { property: "og:url", content: "/services/private-eye-exams" },
    ],
    links: [{ rel: "canonical", href: "/services/private-eye-exams" }],
  }),
  component: PrivateExams,
});

function PrivateExams() {
  return (
    <>
      <PageHeader
        eyebrow="Private sight tests"
        title="Private eye exam, £35."
        lead="A longer, unhurried appointment when you do not qualify for the NHS, or when you want extra time and tests."
      >
        <Link to="/contact" className="btn-white">Book my private exam</Link>
        <a href={site.phoneTel} className="btn-white-ghost">Call {site.phone}</a>
      </PageHeader>

      <section className="container-page py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2>What is included</h2>
            <ul className="mt-4 space-y-2.5 text-ink/85">
              {[
                "Detailed vision assessment at distance, intermediate and near",
                "Full eye health check, inside and out",
                "Pressure check and visual field screening where indicated",
                "Lifestyle conversation about screens, driving and hobbies",
                "Written prescription you can use anywhere",
              ].map((i) => (
                <li key={i} className="flex gap-2.5">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>How it differs from the NHS exam</h2>
            <p className="mt-3 text-ink/85">
              The clinical tests are the same. A private appointment gives us more time to talk
              through your visual needs, repeat tests if required and review lens options in detail.
              If you do qualify for an NHS exam, we will tell you and book that instead.
            </p>
          </div>
        </div>

        <aside className="card-soft h-fit">
          <h3 className="text-lg">£35 per exam</h3>
          <p className="mt-2 text-sm text-muted-foreground">No add-ons, no surprises. Concession pricing on request.</p>
          <div className="mt-5 flex flex-col gap-2">
            <Link to="/contact" className="btn-primary">Request an appointment</Link>
            <a href={site.phoneTel} className="btn-ghost">Call {site.phone}</a>
          </div>
        </aside>
      </section>

      <section className="container-page pb-16"><ServicePromises /></section>
    </>
  );
}
