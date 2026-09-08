import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import weddingsImg from "@/assets/hero-weddings.jpg";
import corporateImg from "@/assets/hero-corporate.jpg";
import { BRAND, whatsappLink } from "@/lib/brand";
import {
  PhilosophySection,
  TimelineSection,
  ServicesSection,
  VenuesSection,
  PromiseBand,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AVERA — Before Forever | Luxury Weddings & Corporate Events, Cairo" },
      {
        name: "description",
        content:
          "AVERA is an elite umbrella for haute-couture wedding planning and high-end corporate event production in Cairo. Avera isn't just a name — it's a promise.",
      },
      { property: "og:title", content: "AVERA — Before Forever" },
      {
        property: "og:description",
        content:
          "Haute-couture wedding planning and high-end corporate event production in Cairo.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="grid min-h-[86vh] grid-cols-1 md:min-h-[92vh] md:grid-cols-2">
        <SplitPanel
          image={weddingsImg}
          alt="Candlelit luxury wedding ballroom with couture white floral installations"
          eyebrow="Weddings"
          title="Avera Weddings"
          sub="Your Personality, Your Wedding — From Concept to Reality"
          to="/weddings"
          cta="Discover Weddings"
          priority
        />
        <SplitPanel
          image={corporateImg}
          alt="Corporate gala stage with large LED screens and dramatic beam lighting"
          eyebrow="Corporate & Events"
          title="Avera Events"
          sub="High-End Corporate Experiences & Production"
          to="/corporate"
          cta="Discover Corporate Events"
        />
      </section>

      <section className="border-t border-border px-5 py-20 text-center md:px-8">
        <span className="wordmark text-3xl text-ivory md:text-5xl">Avera</span>
        <div className="hairline mx-auto my-7 w-36" aria-hidden />
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
          One house, two disciplines: couture celebrations and full-scale event production.
          Designed in Cairo, delivered with the discipline of a film set and the restraint of
          an editorial page.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn-luxe-solid">
            Book a Consultation
          </Link>
          <a
            className="btn-luxe"
            href={whatsappLink("Hello AVERA, I'd like to discuss an event.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} /> {BRAND.phonePrimary}
          </a>
        </div>
      </section>

      <PhilosophySection />
      <TimelineSection />
      <ServicesSection />
      <VenuesSection />
      <PromiseBand />
    </>
  );
}

function SplitPanel({
  image,
  alt,
  eyebrow,
  title,
  sub,
  to,
  cta,
  priority = false,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  sub: string;
  to: "/weddings" | "/corporate";
  cta: string;
  priority?: boolean;
}) {
  return (
    <div className="group relative min-h-[52vh] overflow-hidden border-border md:min-h-0 md:border-r md:last:border-r-0">
      <img
        src={image}
        alt={alt}
        width={1280}
        height={1600}
        {...(priority ? {} : { loading: "lazy" as const })}
        className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-90"
      />
      <div className="veil absolute inset-0" aria-hidden />
      <div className="relative flex h-full flex-col items-center justify-end px-6 pb-16 text-center md:justify-center md:pb-0">
        <p className="text-eyebrow rise">{eyebrow}</p>
        <h1 className="rise mt-5 text-5xl leading-none text-ivory md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="rise mt-5 max-w-sm font-display text-lg italic text-sand md:text-xl">
          {sub}
        </p>
        <Link to={to} className="btn-luxe rise mt-9">
          {cta}
        </Link>
      </div>
    </div>
  );
}
