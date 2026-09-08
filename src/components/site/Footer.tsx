import { Link } from "@tanstack/react-router";
import { BRAND, whatsappLink } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="wordmark text-2xl text-ivory">Avera</span>
          <div className="hairline my-6 w-40" />
          <p className="max-w-md font-display text-xl italic text-sand">
            {BRAND.promise}
          </p>
        </div>

        <div className="mt-14 grid gap-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-eyebrow">Reach Us</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <a
                  className="transition-colors hover:text-champagne"
                  href={whatsappLink("Hello AVERA, I have an enquiry.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  {BRAND.phonePrimary}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-champagne"
                  href={whatsappLink("Hello AVERA, I have an enquiry.", true)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {BRAND.phoneSecondary}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-champagne"
                  href={`mailto:${BRAND.email}`}
                >
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow">Follow</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <a
                  className="transition-colors hover:text-champagne"
                  href={BRAND.instagramWeddings}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram — Weddings
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-champagne"
                  href={BRAND.instagramEvents}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram — Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow">Explore</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <Link className="transition-colors hover:text-champagne" to="/weddings">
                  Avera Weddings
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-champagne" to="/corporate">
                  Avera Events
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-champagne" to="/philosophy">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-champagne" to="/venues">
                  Venues
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow">Consultations</p>
            <p className="mt-4 text-muted-foreground">
              By appointment, Cairo — and on location worldwide.
            </p>
            <Link to="/contact" className="btn-luxe mt-5">
              Book a Consultation
            </Link>
          </div>
        </div>

        <p className="mt-14 text-center text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} Avera — Before Forever
        </p>
      </div>
    </footer>
  );
}
