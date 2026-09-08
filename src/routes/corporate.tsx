import { createFileRoute } from "@tanstack/react-router";
import corporateImg from "@/assets/hero-corporate.jpg";
import { LeadForm } from "@/components/site/LeadForm";
import {
  SectionHeading,
  ServicesSection,
  VenuesSection,
  PromiseBand,
} from "@/components/site/Sections";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Avera Events — Corporate Event Production in Cairo" },
      {
        name: "description",
        content:
          "High-end corporate experiences and production: 3D spatial design, exhibition booths, LED screens, sound, lighting, VIP logistics and special effects.",
      },
      { property: "og:title", content: "Avera Events — Corporate Production" },
      {
        property: "og:description",
        content:
          "Conferences, galas, launches and exhibitions produced end to end by AVERA.",
      },
    ],
  }),
  component: Corporate;
});

const stages = [
  { step: "01", title: "Brief & Budget", body: "Objectives, audience, KPIs and a costed scope in one document." },
  { step: "02", title: "Concept & 3D", body: "Spatial design, staging studies and branded environments rendered for sign-off." },
  { step: "03", title: "Build & Production", body: "Fabrication, LED, audio, lighting, rigging and permits handled in-house." },
  { step: "04", title: "Show & Wrap", body: "Show-calling on the day, VIP hosting, then reporting and content delivery." },
];

function Corporate() {
  return (
    <>
      <section className="relative min-h-[62vh] overflow-hidden">
        <img
          src={corporateImg}
          alt="Gala stage with large LED screen, beam lighting and branded exhibition booths"
          width={1280}
          height={1600}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="veil absolute inset-0" aria-hidden />
        <div className="relative mx-auto flex min-h-[62vh] max-w-4xl flex-col items-center justify-end px-5 pb-16 text-center md:justify-center md:pb-0">
          <p className="text-eyebrow">Avera Events</p>
          <h1 className="mt-5 text-5xl leading-none text-ivory md:text-7xl">
            High-End Corporate Experiences
          </h1>
          <p className="mt-6 max-w-xl font-display text-xl italic text-sand">
            Conferences, galas, launches and exhibitions — designed, built and show-called.
          </p>
        </div>
      </section>

      <ServicesSection />

      <section className="border-t border-border bg-card px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How We Work"
            title="From brief to show day"
            intro="A production process built for procurement teams and creative directors alike."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {stages.map((s) => (
              <div key={s.step} className="border-t border-champagne/40 pt-6">
                <span className="font-display text-4xl text-gold">{s.step}</span>
                <h3 className="mt-4 text-2xl text-ivory">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VenuesSection />

      <section className="border-t border-border px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Request A Proposal"
            title="Send us the brief"
            intro="RFPs are answered with a costed concept and production schedule."
          />
          <div className="mt-12">
            <LeadForm kind="corporate" />
          </div>
        </div>
      </section>

      <PromiseBand />
    </>
  );
}
