import { Link } from "@tanstack/react-router";
import { ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/#services", label: "Services" },
  { to: "/#pricing", label: "Pricing" },
  { to: "/sample-report", label: "Sample Report" },
  { to: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-hairline bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-cyan shadow-glow">
              <ShieldCheck className="h-5 w-5 text-background" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-bold tracking-tight">
                Suss Security
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                API · OCPP · Cloud
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <a
                key={n.to}
                href={n.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="/#contact"
              className="btn-primary inline-flex items-center rounded-md px-4 py-2 text-sm"
            >
              Book Free Review
            </a>
          </div>

          <button
            className="btn-ghost rounded-md p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-hairline px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {nav.map((n) => (
                <a
                  key={n.to}
                  href={n.to}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 inline-flex justify-center rounded-md px-4 py-2 text-sm"
              >
                Book Free Review
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
