import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Trees,
  Frame,
  ChefHat,
  DoorOpen,
  Home,
  Hammer,
  ArrowRight,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import deckImg from "@/assets/work-deck.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Raage's Builders" },
      { name: "description", content: "Decks, framing, cabinetry, doors and windows, renovations, and general carpentry — all done by a crew that takes pride in the craft." },
      { property: "og:title", content: "Services — Raage's Builders" },
      { property: "og:description", content: "Six core carpentry services, one trusted crew." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Trees,
    title: "Decking & Pergolas",
    desc: "Custom outdoor builds in hardwood and composite — designed to weather the seasons and the years.",
  },
  {
    icon: Frame,
    title: "Framing & Structural",
    desc: "Plumb, level, and built to code. The bones of your build matter, and we treat them that way.",
  },
  {
    icon: ChefHat,
    title: "Kitchen & Bathroom Cabinetry",
    desc: "Bespoke cabinetry tailored to your space — clean lines, soft-close everything, finishes that last.",
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    desc: "Supply, fit, and finish. Internal, external, sliders or sash — hung straight and sealed tight.",
  },
  {
    icon: Home,
    title: "Renovations & Extensions",
    desc: "From a single room to a full second-storey — we manage the build so you can keep living your life.",
  },
  {
    icon: Hammer,
    title: "General Carpentry",
    desc: "Skirtings, architraves, built-ins, repairs — the everyday work that turns a house into a home.",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">What We Build</p>
          <h1 className="mt-3 font-display uppercase text-5xl sm:text-6xl lg:text-7xl text-balance max-w-3xl">
            Six trades. <span className="text-primary">One crew.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Whether it&apos;s a deck out back or a full renovation, you get the same standard of
            work — measured, honest, and finished properly.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-lg border border-border bg-card/60 p-7 hover:border-primary/50 hover:bg-card transition-all"
            >
              <div className="h-12 w-12 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 font-display uppercase text-2xl tracking-wide">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            </article>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={deckImg}
            alt="Custom timber deck and pergola at sunset"
            className="rounded-lg shadow-elegant border border-border w-full h-auto"
            loading="lazy"
            width={1280}
            height={896}
          />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Not sure what you need?</p>
            <h2 className="mt-3 font-display uppercase text-4xl sm:text-5xl text-balance">
              Talk to a carpenter, not a salesperson.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Send us a few details about the job and we&apos;ll come back to you with a real quote
              — usually within 24 hours.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
