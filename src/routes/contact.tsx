import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { site } from "@/data/site";
import { submitContact } from "@/lib/contact.functions";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | Vision Plus Eyecare, Hull" },
      { name: "description", content: "Book an eye exam or ask a question. Call 01482 225545 or send a request and we will reply the same working day. Holderness Road, Hull." },
      { property: "og:title", content: "Book an Appointment in Hull" },
      { property: "og:description", content: "Call or send a request. We reply the same working day." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const interests = [
  "NHS eye test",
  "Private eye test",
  "Children's eye test",
  "Contact lenses",
  "Frames",
  "Lenses",
  "Sunglasses",
  "Other",
] as const;

function Contact() {
  const submit = useServerFn(submitContact);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    if (data.email !== data.confirmEmail) {
      setError("Email addresses do not match.");
      return;
    }

    setState("sending");
    try {
      await submit({ data: data as never });
      setState("sent");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please call us instead.");
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book an appointment."
        lead="We reply to appointment requests the same working day. Prefer to talk? Call 01482 225545."
      />

      <section className="container-page py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          {state === "sent" ? (
            <div className="card-soft border-success/40 bg-success/5">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-success shrink-0" />
                <div>
                  <h3 className="text-lg">Request received.</h3>
                  <p className="mt-1 text-sm text-ink/80">
                    Thanks. We will be in touch the same working day to propose an appointment.
                    If it is urgent, please call us on {site.phone}.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="card-soft space-y-5" noValidate>
              {/* honeypot */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off"
                     className="hidden" aria-hidden defaultValue="" />

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email" name="email" type="email" required />
                <Field label="Confirm email" name="confirmEmail" type="email" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Alternative phone" name="altPhone" type="tel" />
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-ink mb-1.5">
                    Interested in <span className="text-destructive">*</span>
                  </label>
                  <select id="interest" name="interest" required
                          className="w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
              </div>

              <Field label="Preferred date" name="date" type="date" />

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                  How can we help? <span className="text-destructive">*</span>
                </label>
                <textarea id="message" name="message" required rows={4} maxLength={1000}
                          className="w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>

              {error && (
                <p className="text-sm text-destructive" role="alert">{error}</p>
              )}

              <button type="submit" disabled={state === "sending"} className="btn-primary w-full sm:w-auto">
                {state === "sending" ? "Sending..." : "Request appointment"}
              </button>
              <p className="text-xs text-muted-foreground">
                By sending this form you agree to be contacted about your appointment request. We do not share your details.
              </p>
            </form>
          )}
        </div>

        <aside className="lg:col-span-2 space-y-6">
          <div className="border border-border p-6">
            <h3 className="text-base font-semibold text-ink mb-4">Talk to us</h3>
            <div className="space-y-1 text-sm text-ink/70">
              <p>
                <a href={site.phoneTel} className="text-primary font-semibold hover:text-accent transition-colors">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={site.emailHref} className="hover:text-accent transition-colors break-all">
                  {site.email}
                </a>
              </p>
              <p className="pt-1">283 Holderness Road, Hull, HU8 8TE</p>
              <div className="pt-2 space-y-0.5">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 text-xs text-ink/50 uppercase tracking-wide">
                    <span>{h.day}</span><span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <a href={site.mapsDirections} target="_blank" rel="noopener" className="btn-ghost mt-5 w-full">
              Get directions
            </a>
          </div>

          <div className="overflow-hidden border border-border h-64">
            <iframe
              title="Map of Vision Plus Eyecare"
              src={site.mapsEmbed}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink mb-1.5">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={name} name={name} type={type} required={required}
        maxLength={type === "email" ? 255 : 100}
        className="w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
