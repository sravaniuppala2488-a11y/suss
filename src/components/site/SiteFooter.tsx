import { Link } from "@tanstack/react-router";
import { ShieldCheck, Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-hairline">
      <div className="absolute inset-x-0 -top-px mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-cyber-blue/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-cyan">
                <ShieldCheck className="h-5 w-5 text-background" strokeWidth={2.5} />
              </div>
              <span className="font-display text-base font-bold">Suss Security</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              API Security · EV/OCPP Security · Cloud Exposure Review for modern
              startups handling sensitive data.
            </p>
            <div className="mt-5 flex gap-2">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="btn-ghost grid h-9 w-9 place-items-center rounded-md"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Services"
            links={[
              "API Leak Audit",
              "EV / OCPP Security",
              "Cloud Exposure Review",
              "Compliance Evidence Pack",
            ]}
          />
          <FooterCol
            title="Company"
            links={["Home", "Services", "Sample Report", "Contact"]}
          />
          <FooterCol
            title="Policies"
            links={[
              "Responsible Testing Policy",
              "Privacy",
              "Terms",
              "Security Disclosure",
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Suss Security. All rights reserved.</p>
          <p className="font-mono">
            All testing is performed only with written authorization.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
