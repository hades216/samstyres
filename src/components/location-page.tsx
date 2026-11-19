import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Car,
  CheckCircle2,
  Clock,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
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
  GOOGLE_REVIEWS_HREF,
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
      <main id="main-content">
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
          <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-700 font-medium sm:ml-auto">
            <span className="inline-flex items-center gap-1.5 text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              <Star className="h-4 w-4 fill-amber-500 text-amber-500" /> 4.9 Rating (Verified)
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <Clock className="h-4 w-4 text-emerald-600" /> 30–60 Min Response
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-600">
              <MapPin className="h-4 w-4 text-brand" /> {location.postcode}
            </span>
          </div>
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

      {/* Customer Reviews & Proof Block */}
      <section className="section-y border-t border-slate-100 bg-slate-50">
        <div className="container-x max-w-5xl">
          <SectionHeader
            eyebrow="Customer Reviews"
            title={
              <>
                Recent customer feedback for{" "}
                <span className="text-brand italic">{location.name}</span>
              </>
            }
            copy="Genuine customer feedback from verified drivers across London, Essex and Hertfordshire."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Omar A.",
                location: `${location.name} & Surrounds`,
                text: "Top service from Sam Tyres! Came to my doorstep and replaced my flat tyre quickly with zero hassle. Polite, transparent pricing and fast turnaround.",
                time: "Verified Customer",
              },
              {
                name: "Konrad M.",
                location: `${location.name} Corridor`,
                text: "Came within 45 minutes on a weekend emergency. Friendly guy, excellent gear on the van, and properly balanced the wheel. 10/10 recommendation.",
                time: "Local Guide Review",
              },
              {
                name: "Sarjeel A.",
                location: `Near ${location.name}`,
                text: "Fast puncture assessment and repair on my driveway. Gave honest advice on tyre tread condition and completed the job promptly.",
                time: "Verified Customer",
              },
            ].map((rev) => (
              <div
                key={rev.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-display font-bold text-ink">{rev.name}</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-brand" /> {rev.location}
                  </div>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="text-emerald-700 font-medium">✓ Verified Google Review</span>
                  <span>{rev.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/reviews" className="btn-base btn-outline text-sm">
              Read all verified reviews <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={GOOGLE_REVIEWS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary text-sm"
            >
              View 76+ reviews live on Google <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Tyre Size Identification & Quote Preparation Guide */}
      <section className="section-y border-t border-slate-100 bg-white">
        <div className="container-x max-w-5xl">
          <SectionHeader
            eyebrow="Quick Guide"
            title="How to find your tyre size before calling"
            copy={`Providing your tyre size allows our mobile van to arrive in ${location.name} fully stocked with the exact matching tyre.`}
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 items-center">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <div className="font-mono text-xs uppercase tracking-wider text-brand font-bold">
                Example Markings
              </div>
              <div className="mt-2 text-3xl font-extrabold text-navy font-mono">
                205 / 55 R 16 <span className="text-brand">91V</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-navy w-12 shrink-0">205</span>
                  <span>Width of the tyre in millimetres.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-navy w-12 shrink-0">55</span>
                  <span>Aspect ratio (height as % of tyre width).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-navy w-12 shrink-0">R 16</span>
                  <span>Radial construction & 16-inch wheel rim diameter.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-brand w-12 shrink-0">91V</span>
                  <span>Load index (615kg) and speed rating (V = up to 149mph).</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="card-premium p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
                  <h3 className="font-display font-bold text-ink">Upfront Quote & No Hidden Fees</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Every quote is agreed in advance based on your exact tyre size, brand preference, and location. No surprise call-out additions when our technician arrives.
                </p>
              </div>
              <div className="card-premium p-6">
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-brand shrink-0" />
                  <h3 className="font-display font-bold text-ink">BSAU159 Puncture Assessment Protocol</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Minor punctures in the central 70% tread area are permanently repaired on-site. Sidewall punctures, run-flat deflation damage, or deep cuts require tyre replacement for your safety.
                </p>
              </div>
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
            {location.nearby.filter((slug) => LOCATIONS[slug]).map((slug) => (
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
            <Link to="/guides" className="btn-base btn-outline text-sm">
              Tyre guides & advice
            </Link>
            <Link to="/contact" className="btn-base btn-primary text-sm">
              Contact us
            </Link>
          </div>
        </div>
      </section>
      </main>

      <EmergencyBand />
      <Footer />
      <MobileStickyCTA />
      <WhatsAppFab />
    </div>
  );
}
