import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site, services } from "@/data/site";
import nhsLogo from "@/assets/nhs-logo.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-background">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-2xl">Vision Plus Eyecare</div>
          <p className="mt-3 text-sm text-background/70 leading-relaxed">
            Independent opticians on Holderness Road. NHS and private eye care for east Hull since the early 2000s.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <img src={nhsLogo} alt="NHS" className="h-8 w-auto opacity-90" />
            <div className="flex flex-col gap-1 text-[10px] uppercase tracking-wider text-background/50">
              <span>GOC registered</span>
              <span>Independent</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-background text-sm font-medium uppercase tracking-wider">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/75">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-accent">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-background text-sm font-medium uppercase tracking-wider">Practice</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/75">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/reviews" className="hover:text-accent">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Book an appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-background text-sm font-medium uppercase tracking-wider">Visit us</h4>
          <ul className="mt-4 space-y-3 text-sm text-background/85">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> 283 Holderness Road, Hull, HU8 8TE</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /> <a href={site.phoneTel} className="hover:text-accent">{site.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" /> <a href={site.emailHref} className="hover:text-accent">{site.email}</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-accent" /> Mon to Fri 9:30 to 17:30</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-page py-6 text-xs text-background/60 flex flex-col sm:flex-row gap-2 justify-between">
          <span>&copy; {new Date().getFullYear()} Vision Plus Eyecare. All rights reserved.</span>
          <div className="flex gap-6">
            <span>Registered with the General Optical Council (GOC).</span>
            <span>Web design by <a href="https://swift7.co.uk" target="_blank" rel="noopener" className="hover:text-background/90 transition-colors">Swift7</a>.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
