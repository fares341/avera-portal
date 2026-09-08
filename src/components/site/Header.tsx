import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { BRAND, whatsappLink } from "@/lib/brand";

const links = [
  { to: "/weddings", label: "Weddings (Avera)" },
  { to: "/corporate", label: "Corporate & Events" },
  { to: "/philosophy", label: "The Avera Philosophy" },
  { to: "/venues", label: "Venues" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const wa = whatsappLink(
    "Hello AVERA, I would like to speak with a planner about my event.",
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with AVERA on WhatsApp"
          className="hidden text-champagne transition-opacity hover:opacity-70 md:inline-flex"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={1.25} />
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-champagne md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" strokeWidth={1.25} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.25} />
          )}
        </button>

        <Link to="/" className="flex flex-col items-center leading-none">
          <span className="wordmark text-lg text-ivory md:text-2xl">Avera</span>
          <span className="mt-1 text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground">
            Before Forever
          </span>
        </Link>

        <Link to="/contact" className="btn-luxe hidden lg:inline-flex">
          Book a Consultation
        </Link>
        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with AVERA on WhatsApp"
          className="text-champagne md:hidden"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={1.25} />
        </a>
        <span className="hidden w-5 md:block lg:hidden" />
      </div>

      <nav className="hidden justify-center gap-10 border-t border-border py-3 md:flex">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-champagne"
            activeProps={{ className: "text-champagne" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-border px-5 py-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-[0.24em] text-muted-foreground"
              activeProps={{ className: "text-champagne" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-luxe mt-2">
            Book a Consultation
          </Link>
          <p className="text-xs tracking-widest text-muted-foreground">
            {BRAND.phonePrimary}
          </p>
        </nav>
      )}
    </header>
  );
}
