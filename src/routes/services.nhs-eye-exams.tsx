import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicePromises } from "@/components/site/ServicePromises";
import { Check } from "lucide-react";
import { site } from "@/data/site";

export const Route = createFileRoute("/services/nhs-eye-exams")({
  head: () => ({
    meta: [
      { title: "Free NHS Eye Exams in Hull | Vision Plus Eyecare" },
      { name: "description", content: "Free NHS sight tests for eligible patients in Hull. Book at Vision Plus Eyecare, 283 Holderness Road. Call 01482 225545." },
      { property: "og:title", content: "Free NHS Eye Exams in Hull" },
      { property: "og:description", content: "Free NHS sight tests on Holderness Road, Hull." },
      { property: "og:url", content: "/services/nhs-eye-exams" },
    ],
    links: [{ rel: "canonical", href: "/services/nhs-eye-exams" }],
  }),
  component: NhsExams,
});

function NhsExams() {
  return (
    <>
      <PageHeader
        eyebrow="NHS sight tests"
        title="Free NHS eye exams in Hull."
        lead="A thorough NHS-funded eye exam at our Holderness Road practice. Allow around 30 minutes."
      >
        <Link to="/contact" className="btn-white">Book my NHS exam</Link>
        <a href={site.phoneTel} className="btn-white-ghost">Call {site.phone}</a>
      </PageHeader>

      <section className="container-page py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <Block title="Who qualifies for a free NHS sight test">
            <List items={[
              "Under 16, or under 19 and in full-time education",
              "Aged 60 or over",
              "On income support, pension credit guarantee, JSA, ESA or universal credit (subject to earnings)",
              "Diagnosed with diabetes or glaucoma",
              "Aged 40 or over with a family history of glaucoma",
              "Holders of a valid HC2 or HC3 certificate",
            ]} />
          </Block>

          <Block title="What the exam covers">
            <List items={[
              "Vision check at distance and near",
              "Full eye health assessment",
              "Intraocular pressure check where indicated",
              "Visual field screening where indicated",
              "Clear explanation of any findings and your prescription",
            ]} />
          </Block>

          <Block title="What to bring">
            <List items={[
              "Your current glasses or contact lenses",
              "A list of any medications you take",
              "Proof of NHS exemption if applicable (e.g. tax credit certificate)",
            ]} />
          </Block>
        </div>

        <aside className="card-soft h-fit">
          <h3 className="text-lg">Book your NHS exam</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Call us or use the contact form. We reply to appointment requests the same working day.
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <Link to="/contact" className="btn-primary">Request an appointment</Link>
            <a href={site.phoneTel} className="btn-ghost">Call {site.phone}</a>
          </div>
        </aside>
      </section>

      <section className="container-page pb-16">
        <ServicePromises />
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      <div className="mt-4 text-ink/85">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-2.5">
          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}
