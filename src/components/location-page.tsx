import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Car,
  CheckCircle2,
  Home,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  EmergencyBand,
  Footer,
  Header,
  MobileStickyCTA,
  PageHero,
  PHONE,
  PHONE_HREF,
  SectionHeader,
  WhatsAppFab,
  WHATSAPP_HREF,
} from "@/components/site";
import { LOCATIONS, type LocationPage as LocationPageData } from "@/lib/location-pages";
import van from "@/assets/van.webp";
import technician from "@/assets/technician.webp";

const SERVICES = [
  [
    "emergency-mobile-tyre-fitting",
    "Emergency tyre fitting",
    "Help for a damaged or unusable tyre at a safe location.",
  ],
  [
    "car-recovery",
    "24/7 Car recovery & towing",
    "Rapid flatbed recovery and roadside transport across London.",
  ],
  [
    "mobile-tyre-replacement",
    "Mobile tyre replacement",
    "Replacement tyres supplied and fitted at home, work or roadside.",
  ],
  [
    "mobile-puncture-repair",
    "Mobile puncture repair",
    "On-site inspection to confirm whether a safe repair is possible.",
  ],
  [
    "roadside-tyre-assistance",
    "Roadside tyre assistance",
    "Practical tyre help when your vehicle cannot continue safely.",
  ],
  [
    "jump-start-service",
    "Mobile jump start",
    "Professional 12V battery boost and alternator diagnostic checks.",
  ],
] as const;

export function LocationPage({ location }: { location: LocationPageData }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Header />
      <PageHero
        eyebrow={`${location.postcode} · Open 24/7`}
        title={
          <>
            {location.h1.split(location.name)[0]}
            <span className="text-brand">{location.name}</span>
          </>
        }
        copy={location.intro}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Coverage", to: "/coverage-areas" },
          { label: location.name },
        ]}
        bgImage={van}
      />

      <section className="border-b border-slate-100 bg-white py-6">
        <div className="container-x flex flex-wrap items-center gap-3">
          <a
            href={PHONE_HREF}
            data-track="location_call"
            data-location={location.slug}
            className="btn-base btn-primary text-sm"
          >
            <Phone className="h-4 w-4" /> Call {PHONE}
          </a>
          <a
            href={WHATSAPP_HREF}
            data-track="location_whatsapp"
            data-location={location.slug}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-outline text-sm"
          >
            <MessageCircle className="h-4 w-4" /> Send tyre details
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground sm:ml-auto">
            <MapPin className="h-4 w-4 text-brand" /> {location.postcode}
          </span>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Local Coverage"
              title={location.localHeading}
              copy={location.localCopy}
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                [Home, "At home", location.homeCopy],
                [BriefcaseBusiness, "At work", location.workplaceCopy],
                [Car, "Roadside", location.roadsideCopy],
              ].map(([Icon, title, copy]) => {
                const CardIcon = Icon as typeof Home;
                return (
                  <article key={title as string} className="card-premium p-6">
                    <CardIcon className="h-6 w-6 text-brand" />
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">
                      {title as string}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {copy as string}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="rounded-3xl bg-navy p-7 text-white lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl -mt-1 mb-6">
              <img
                src={technician}
                alt={`Sam's Mobile Tyres technician fitting a tyre for a customer in ${location.name}`}
                loading="lazy"
                decoding="async"
                className="h-40 w-full object-cover"
              />
            </div>
            <div className="text-xs font-semibold uppercase tracking-[.22em] text-white/60">
              Areas and routes
            </div>
            <ul className="mt-5 space-y-3">
              {location.roads.map((road) => (
                <li key={road} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  {road}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Coverage depends on safe access to the vehicle. For roadside calls, share a live
              location pin and direction of travel.
            </p>
          </aside>
        </div>
      </section>

      <section className="section-y border-y border-slate-100 bg-slate-50">
        <div className="container-x">
          <SectionHeader
            eyebrow="Services"
            title={
              <>
                Tyre services available in{" "}
                <span className="text-brand italic">{location.name}</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(([slug, title, copy]) => (
              <Link
                key={slug}
                to="/$slug"
                params={{ slug }}
                className="group card-premium p-6 card-premium-hover"
              >
                <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Explore {title.toLowerCase()}{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="How It Works" title="Request mobile tyre assistance" />
            <ol className="mt-9 space-y-6">
              {[
                [
                  "01",
                  "Share the vehicle details",
                  "Call or WhatsApp with the registration, tyre size, damage and exact location.",
                ],
                [
                  "02",
                  "Confirm the suitable option",
                  "We confirm availability and whether assessment, repair or replacement is appropriate.",
                ],
                [
                  "03",
                  "Meet at the vehicle",
                  "Keep the vehicle somewhere safe and accessible and follow any safety guidance provided.",
                ],
              ].map(([n, title, copy]) => (
                <li key={n} className="flex gap-4">
                  <span className="font-mono text-xl font-bold text-brand">{n}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeader
              eyebrow="Common Questions"
              title={`${location.name} tyre fitting FAQs`}
            />
            <div className="mt-9 space-y-3">
              {location.faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-display font-bold text-ink">
                    {q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-12">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-ink">
            Nearby mobile tyre fitting areas
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {location.nearby.map((slug) => (
              <Link
                key={slug}
                to="/$slug"
                params={{ slug }}
                className="btn-base btn-outline text-sm"
              >
                {LOCATIONS[slug].name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
            <Link to="/contact" className="btn-base btn-primary text-sm">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <EmergencyBand />
      <Footer />
      <MobileStickyCTA />
      <WhatsAppFab />
    </div>
  );
}
