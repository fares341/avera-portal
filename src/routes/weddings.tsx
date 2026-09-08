import { createFileRoute } from "@tanstack/react-router";
import weddingsImg from "@/assets/hero-weddings.jpg";
import { LeadForm } from "@/components/site/LeadForm";
import {
  SectionHeading,
  TimelineSection,
  VenuesSection,
  PromiseBand,
} from "@/components/site/Sections";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Avera Weddings — Couture Wedding Planning in Cairo" },
      {
        name: "description",
        content:
          "Your personality, your wedding — from concept to reality. Full-service luxury wedding design, planning and day-of orchestration by AVERA.",
      },
      { property: "og:title", content: "Avera Weddings — Before Forever" },
      {
        property: "og:description",
        content: "Couture wedding design, planning and orchestration in Cairo.",
      },
    ],
  }),
  component: Weddings,
});

const scope = [
  {
    title: "Concept & Art Direction",
    body: "Moodboards, colour stories, stationery and couture floral direction built around who you actually are.",
  },
  {
    title: "Design & 3D Visualisation",
    body: "See your ceremony and reception before build — renders, layouts and material samples.",
  },
  {
    title: "Venue & Supplier Curation",
    body: "Preferred hotels, entertainment, catering tastings and contracts negotiated on your behalf.",
  },
  {
    title: "Full Planning & Coordination",
    body: "Budget architecture, timelines, guest logistics and rehearsal management end to end.",
  },
  {
    title: "Day-Of Orchestration",
    body: "A discreet production team running the day to the minute so your family can be guests.",
  },
  {
    title: "Content & Coverage",
    body: "Editorial photography, film and social cutdowns of the celebration as it unfolds.",
  },
];

function Weddings() {
  return (
    <>
      <section className="relative min-h-[62vh] overflow-hidden">
        <img
          src={weddingsImg}
          alt="Candlelit banquet table with white couture florals and tapered candles"
          width={1280}
          height={1600}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="veil absolute inset-0" aria-hidden />
        <div className="relative mx-auto flex min-h-[62vh] max-w-4xl flex-col items-center justify-end px-5 pb-16 text-center md:justify-center md:pb-0">
          <p className="text-eyebrow">Avera Weddings</p>
          <h1 className="mt-5 text-5xl leading-none text-ivory md:text-7xl">
            Your Personality, Your Wedding
          </h1>
          <p className="mt-6 max-w-xl font-display text-xl italic text-sand">
            From concept to reality — designed once, rehearsed twice, remembered forever.
          </p>
        </div>
      </section>

      <section className="border-t border-border px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Do"
            title="A complete wedding house"
            intro="One team for design, planning and execution — no gaps to manage yourself."
          />
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {scope.map((s, i) => (
              <article key={s.title} className="bg-background p-8">
                <span className="text-[0.7rem] tracking-[0.3em] text-champagne">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-2xl text-ivory">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TimelineSection />
      <VenuesSection />

      <section className="border-t border-border px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Enquire"
            title="Begin with a conversation"
            intro="Share the essentials and a planner replies within one business day."
          />
          <div className="mt-12">
            <LeadForm kind="wedding" />
          </div>
        </div>
      </section>

      <PromiseBand />
    </>
  );
}
