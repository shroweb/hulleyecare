import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Vision Plus Eyecare" },
      { name: "description", content: "Privacy policy for Vision Plus Eyecare, independent opticians on Holderness Road, Hull." },
      { property: "og:title", content: "Privacy Policy | Vision Plus Eyecare" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <>
      <div className="bg-primary text-white">
        <div className="container-page py-16">
          <h1 className="text-white">Privacy Policy</h1>
          <p className="mt-4 text-white/60 text-base max-w-lg">
            How Vision Plus Eyecare collects, uses, and protects your personal information.
          </p>
        </div>
      </div>

      <div className="container-page py-16 lg:py-24 max-w-3xl">
        <div className="prose prose-lg max-w-none text-ink/80 space-y-8">

          <section>
            <h2 className="text-ink font-display text-2xl mb-3">Who we are</h2>
            <p>
              Vision Plus Eyecare is an independent opticians practice located at 283 Holderness Road, Hull, HU8 8TE.
              We are registered with the General Optical Council (GOC). If you have any questions about this policy,
              please contact us at <a href={site.emailHref} className="text-accent hover:underline">{site.email}</a> or
              call us on <a href={site.phoneTel} className="text-accent hover:underline">{site.phone}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-ink font-display text-2xl mb-3">What information we collect</h2>
            <p>We may collect and process the following personal data:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Name, address, date of birth, and contact details (phone, email) when you register as a patient or book an appointment</li>
              <li>Clinical records including prescription details, eye health history, and examination notes</li>
              <li>NHS number and GP details where relevant to your care</li>
              <li>Payment information when you purchase products or services</li>
              <li>Correspondence you send us by email, phone, or post</li>
            </ul>
          </section>

          <section>
            <h2 className="text-ink font-display text-2xl mb-3">How we use your information</h2>
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Provide optometry and dispensing services and manage your care</li>
              <li>Book and manage appointments</li>
              <li>Contact you about recalls, appointment reminders, and test results</li>
              <li>Process payments and manage accounts</li>
              <li>Meet our legal and regulatory obligations as a GOC-registered practice</li>
              <li>Communicate NHS sight test entitlements and vouchers where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-ink font-display text-2xl mb-3">Legal basis for processing</h2>
            <p>
              We process your data on the basis of providing healthcare services (substantial public interest under UK GDPR
              Article 9(2)(h)), fulfilling a contract with you, compliance with our legal obligations, and — where you have
              given consent — for marketing or recall communications.
            </p>
          </section>

          <section>
            <h2 className="text-ink font-display text-2xl mb-3">How long we keep your data</h2>
            <p>
              Clinical records are retained for a minimum of 10 years (or until age 25 for children's records) in line with
              NHS and GOC guidance. Contact and appointment records are kept for the duration of your patient relationship
              and a reasonable period thereafter.
            </p>
          </section>

          <section>
            <h2 className="text-ink font-display text-2xl mb-3">Sharing your information</h2>
            <p>
              We do not sell your personal data. We may share information with:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>NHS bodies and your GP where clinically necessary</li>
              <li>Optical laboratories and suppliers to fulfil your prescription</li>
              <li>Our practice management software provider, under a data processing agreement</li>
              <li>Regulatory bodies (e.g. GOC) where required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-ink font-display text-2xl mb-3">Your rights</h2>
            <p>Under UK GDPR you have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Access a copy of your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion (subject to our clinical and legal retention obligations)</li>
              <li>Object to or restrict processing</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{" "}
              <a href={site.emailHref} className="text-accent hover:underline">{site.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-ink font-display text-2xl mb-3">Cookies and this website</h2>
            <p>
              This website does not use tracking or advertising cookies. We may use essential cookies required for the
              site to function correctly. No personal data is collected through website analytics.
            </p>
          </section>

          <section>
            <h2 className="text-ink font-display text-2xl mb-3">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The current version is always available on this page.
              Last updated: June 2026.
            </p>
          </section>

        </div>
      </div>
    </>
  );
}
