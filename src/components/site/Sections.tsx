import { useState } from "react";
import { PHILOSOPHY, TIMELINE, CORPORATE_SERVICES, VENUES } from "@/lib/brand";
import venuesImg from "@/assets/venues.jpg";
import artImg from "@/assets/philosophy-art.jpg";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-4xl leading-tight text-ivory md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{intro}</p>}
      <div
        className={`hairline mt-8 w-28 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
    </div>
  );
}

export function PhilosophySection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-t border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Ethos"
          title="The A.V.E.R.A Philosophy"
          intro="Five pillars behind every celebration we sign our name to."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {PHILOSOPHY.map((p, i) => (
              <button
                type="button"
                key={p.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group border p-6 text-left transition-all duration-700 ${
                  active === i
                    ? "border-champagne bg-card"
                    : "border-border bg-transparent hover:border-sand/50"
                }`}
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-4xl text-gold">{p.letter}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-sand">
                    {p.title}
                  </span>
                </div>
                <p className="mt-4 font-display text-xl italic leading-snug text-ivory">
                  {p.line}
                </p>
                <p
                  className={`overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-700 ${
                    active === i ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {p.body}
                </p>
              </button>
            ))}
          </div>

          <figure className="sticky top-32 hidden lg:block">
            <img
              src={artImg}
              alt="Moodboard of ivory and sand fabric swatches with dried florals and gold foil"
              loading="lazy"
              width={1280}
              height={900}
              className="w-full object-cover"
            />
            <figcaption className="mt-4 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
              Concept studies — Avera Atelier
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function TimelineSection() {
  return (
    <section className="border-t border-border bg-card px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Wedding Day"
          title="The Day, Perfectly Orchestrated"
          intro="A rehearsed sequence — so the only thing you carry is the moment."
        />

        <ol className="mt-16 space-y-0 border-l border-border pl-8 md:pl-12">
          {TIMELINE.map((t) => (
            <li key={t.time} className="group relative pb-12 last:pb-0">
              <span
                className="absolute -left-[2.05rem] top-2 h-2 w-2 rotate-45 bg-sand transition-all duration-700 group-hover:scale-150 group-hover:bg-champagne md:-left-[3.05rem]"
                aria-hidden
              />
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-champagne">
                {t.time}
              </p>
              <h3 className="mt-3 text-2xl text-ivory md:text-3xl">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="border-t border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Avera Events"
          title="Corporate & Production Services"
          intro="Full-scale execution, from the first 3D study to the final firework."
        />

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {CORPORATE_SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="group bg-background p-8 transition-colors duration-700 hover:bg-card"
            >
              <span className="text-[0.7rem] tracking-[0.3em] text-champagne">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-2xl leading-snug text-ivory">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VenuesSection() {
  return (
    <section className="border-t border-border bg-card px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Partners"
              title="Curated Luxury Hotel Partners & Venues"
              intro="Preferred rates, protected dates and production access across Cairo's most prestigious addresses."
            />
            <img
              src={venuesImg}
              alt="Chandelier-lit luxury hotel ballroom set for a formal dinner in Cairo"
              loading="lazy"
              width={1280}
              height={900}
              className="mt-10 w-full object-cover"
            />
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {VENUES.map((v) => (
              <li
                key={v.name}
                className="group flex flex-col gap-1 py-7 transition-colors duration-700 hover:bg-background/60 md:px-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-2xl text-ivory">{v.name}</h3>
                  <span className="text-[0.65rem] uppercase tracking-[0.28em] text-champagne">
                    {v.location}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{v.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function PromiseBand() {
  return (
    <section className="border-t border-border px-5 py-24 text-center md:px-8">
      <p className="text-eyebrow">Avera — Before Forever</p>
      <blockquote className="mx-auto mt-6 max-w-3xl font-display text-3xl italic leading-snug text-ivory md:text-5xl">
        Avera isn't just a name... It's a promise.
      </blockquote>
    </section>
  );
}
