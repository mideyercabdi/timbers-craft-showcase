import { Link } from "@tanstack/react-router";
import { Hammer, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="h-9 w-9 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/15 transition">
            <Hammer className="h-4.5 w-4.5 text-primary" />
          </span>
          <span className="font-display text-xl text-timber">
            Raage&apos;s <span className="text-primary">Builders</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Free Quote
          </Link>
        </div>

        <button
          className="md:hidden text-timber"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-4 gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-2 text-foreground/80 hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
