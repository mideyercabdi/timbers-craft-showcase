import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, Clock, MapPin, Send, Check } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Raage's Builders" },
      { name: "description", content: "Get in touch for a free carpentry quote. We respond within 24 hours." },
      { property: "og:title", content: "Contact Raage's Builders" },
      { property: "og:description", content: "Free quotes. 24-hour response." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-sm font-medium text-primary">Get in touch</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl lg:text-7xl text-balance max-w-3xl text-timber leading-[1.05]">
            Let&apos;s talk about <span className="text-primary">your build.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/75 max-w-2xl">
            Tell us a bit about the job. We respond within 24 hours — usually a lot sooner.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-lg border border-border bg-card p-8 space-y-5 shadow-soft"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <div>
              <label className="text-sm font-medium text-timber">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell us about the job — what, where, when…"
                className="mt-2 w-full rounded-md bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Message Sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-primary" /> We respond within 24 hours.
            </p>
          </form>

          <aside className="lg:col-span-2 space-y-4">
            <InfoCard icon={Phone} label="Phone" value="(555) 123-4567" />
            <InfoCard icon={Mail} label="Email" value="hello@raagesbuilders.com" />
            <InfoCard icon={MapPin} label="Service Area" value="Local & surrounding suburbs" />

            <div className="rounded-lg overflow-hidden border border-border bg-card aspect-square shadow-soft">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0918!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1700000000000"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-timber">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md bg-input border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 flex items-start gap-4 shadow-soft">
      <span className="h-10 w-10 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </span>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="mt-1 text-timber font-medium">{value}</p>
      </div>
    </div>
  );
}
