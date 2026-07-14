import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, FileText, MapPin, ArrowRight, Hammer } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/hero-carpentry.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raage's Builders | Builder, Heidelberg" },
      { name: "description", content: "Premium local carpentry crew. Decks, framing, cabinetry, renovations and more. Get a free quote today." },
      { property: "og:title", content: "Raage's Builders | Builder, Heidelberg" },
      { property: "og:description", content: "Premium local carpentry crew. Decks, framing, cabinetry, renovations and more. Get a free quote today." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section className="relative pt-16 min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Carpenter hand-planing rich timber in warm workshop light"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          {/* Light, warm wash so background reads linen, not dark */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Hammer className="h-3.5 w-3.5" /> Carpentry crew · Est. 2012
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance text-timber">
              Built Right.
              <br />
              <span className="text-primary">Built to Last.</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/75 max-w-xl leading-relaxed">
              Raage&apos;s Builders is a small, skilled carpentry crew turning honest timber into homes
              people are proud of. No shortcuts. No surprises. Just work that holds up.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-soft"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-7 py-3.5 text-sm font-semibold text-timber hover:border-primary hover:text-primary transition"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="absolute bottom-0 inset-x-0 border-t border-border bg-card/85 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, label: "Licensed & Insured" },
              { icon: FileText, label: "Free Quotes" },
              { icon: MapPin, label: "Local & Reliable" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 justify-center sm:justify-start">
                <span className="h-10 w-10 rounded-md border border-primary/30 bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </span>
                <span className="text-sm font-medium text-timber">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 bg-stone-warm">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-sm font-medium text-primary">Craftsmanship you can stand on</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-balance text-timber">
            Quality work from a crew that actually cares.
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed max-w-3xl mx-auto">
            For more than a decade we&apos;ve been building decks, framing homes, hanging doors, and
            finishing rooms across the local area. We&apos;re a tight crew — which means the person
            who quotes your job is the person swinging the hammer. We measure twice, we show up
            when we say we will, and we leave the site cleaner than we found it.
          </p>
          <div className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
            >
              Meet the crew <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
