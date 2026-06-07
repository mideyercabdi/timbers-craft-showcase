import { Link } from "@tanstack/react-router";
import { Hammer, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-stone-warm mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-9 w-9 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Hammer className="h-4.5 w-4.5 text-primary" />
            </span>
            <span className="font-display text-xl text-timber">
              Raage&apos;s <span className="text-primary">Builders</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Honest carpentry. Done right the first time. Local crew, premium craftsmanship.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-timber mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-timber mb-4">Get In Touch</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> (555) 123-4567</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@raagesbuilders.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} Raage&apos;s Builders. All rights reserved.</p>
          <p>Licensed &amp; Insured · Built with pride.</p>
        </div>
      </div>
    </footer>
  );
}
