import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import teamImg from "@/assets/team-photo.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Raage's Builders" },
      { name: "description", content: "Meet the crew behind Raage's Builders. A small, skilled carpentry team that treats every job like it's their own home." },
      { property: "og:title", content: "About Raage's Builders" },
      { property: "og:description", content: "A small carpentry crew that takes pride in every cut." },
    ],
  }),
  component: AboutPage,
});

const values = [
  "We show up on time, every time.",
  "Attention to detail in every joint and finish.",
  "Honest quotes — no surprise line items.",
  "We treat every job like it's our own home.",
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">About Us</p>
          <h1 className="mt-3 font-display uppercase text-5xl sm:text-6xl lg:text-7xl text-balance max-w-3xl">
            A small crew. <span className="text-primary">A big standard.</span>
          </h1>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-lg bg-primary/10 blur-2xl" />
              <img
                src={teamImg}
                alt="The Raage's Builders carpentry team"
                className="relative rounded-lg w-full h-auto object-cover shadow-elegant border border-border"
                loading="lazy"
                width={1280}
                height={1280}
              />
              <p className="mt-3 text-xs text-muted-foreground italic text-center">The crew at the workshop.</p>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Raage&apos;s Builders started the way most good things do — with a few friends who
                liked working with their hands and got tired of seeing rushed, sloppy work passed
                off as &quot;good enough.&quot;
              </p>
              <p>
                Today we&apos;re still a small, tight-knit crew. That&apos;s on purpose. It means the
                person you call is the person who quotes your job, and the person on site is
                someone who&apos;s been with us for years — not a stranger pulled in for the day.
              </p>
              <p>
                We&apos;re carpenters first. We love a well-cut mitre, a flush cabinet door, a deck
                that&apos;ll still be standing strong twenty years from now. That&apos;s the work we
                want our name on.
              </p>

              <ul className="pt-4 space-y-3">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-foreground">
                    <span className="mt-1 h-6 w-6 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </span>
                    <span className="text-base">{v}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition"
                >
                  Work With Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
