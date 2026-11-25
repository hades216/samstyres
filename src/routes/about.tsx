import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Gauge, MapPin, MessageCircle, Phone, ShieldCheck, Truck, Wrench } from "lucide-react";
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
import van from "@/assets/van.webp";

const SITE_URL = "https://www.samsmobiletyres.co.uk";
const URL = `${SITE_URL}/about`;

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: URL,
  name: "About Sam's Mobile Tyres",
  about: { "@id": `${SITE_URL}/#business` },
};

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Sam's Mobile Tyres | London 24/7 Tyre Fitters" },
      {
        name: "description",
        content:
          "Experienced 24/7 mobile tyre fitting service based in Enfield covering London & M25. BS AU 159 certified puncture repairs and fast roadside assistance.",
      },
            { name: "robots", content: "index, follow" },
      { property: "og:title", content: "About Sam's Mobile Tyres | London 24/7 Tyre Fitters" },
      {
        property: "og:description",
        content:
          "Experienced 24/7 mobile tyre fitting service based in Enfield covering London & M25. BS AU 159 certified puncture repairs and fast roadside assistance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(aboutSchema) }],
  }),
});

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Header />
      <main id="main-content">
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Mobile tyre help, <span className="text-brand">where you need it.</span>
          </>
        }
        copy="Sam's Mobile Tyres operates fully equipped mobile tyre vans dispatched directly to homes, workplaces and roadside breakdowns across London, Essex, Hertfordshire and the M25 corridor."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
        bgImage={van}
      />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="What We Do"
              title={
                <>
                  Tyre fitting without the <span className="text-brand italic">garage visit.</span>
                </>
              }
              copy="We attend suitable homes, workplaces and roadside locations for mobile fitting, tyre replacement, puncture assessment and roadside tyre assistance."
            />
            <p className="mt-7 max-w-2xl text-base leading-[1.85] text-muted-foreground">
              Tell us where the vehicle is, its registration and the tyre size shown on the
              sidewall. A clear photo can also be sent by WhatsApp. We use those details to confirm
              availability and the suitable next step before travel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="btn-base btn-primary">
                <Phone className="h-4 w-4" />
                Call {PHONE}
              </a>
              <Link to="/services" className="btn-base btn-outline">
                <Wrench className="h-4 w-4" />
                Explore Services
              </Link>
              <Link to="/faqs" className="btn-base btn-outline">
                Frequently Asked Questions
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-outline"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
          <aside className="card-premium p-7">
            <h2 className="font-display text-xl font-bold text-ink">Service at a glance</h2>
            <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand" />
                <span>Operating base: 93 Burncroft Avenue, Enfield, EN3 7JQ — dispatching 24/7 mobile units across Greater London, Essex, and Hertfordshire.</span>
              </li>
              <li className="flex gap-3">
                <Wrench className="h-5 w-5 shrink-0 text-brand" />
                <span>
                  Mobile fitting, replacement, puncture assessment and roadside tyre assistance.
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand" />
                <span>Available 24/7 by phone and WhatsApp.</span>
              </li>
            </ul>
            <Link to="/coverage-areas" className="btn-base btn-outline mt-7 text-sm">
              View coverage areas
            </Link>
          </aside>
        </div>
      </section>
      <section className="section-y bg-slate-50 border-y border-slate-100">
        <div className="container-x">
          <SectionHeader
            eyebrow="Mobile Fitting Process"
            title={
              <>
                How our mobile service <span className="text-brand italic">works on-site.</span>
              </>
            }
            copy="Every callout follows a straightforward four-step process designed to get your vehicle safe and roadworthy without a recovery truck or waiting room."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Location & Tyre Check",
                body: "You share your postcode or pin, vehicle registration, and tyre sidewall size (or a photo via WhatsApp) so we can verify stock and confirm whether a repair or replacement is required.",
              },
              {
                step: "02",
                title: "Direct Van Dispatch",
                body: "A mobile tyre technician is dispatched from our Enfield operating base or nearest active unit with the matching tyre, new valves, and specialist tools on board.",
              },
              {
                step: "03",
                title: "On-Site Fitting & Balancing",
                body: "We safely jack the vehicle, remove the wheel, strip and inspect the tyre, fit the new tyre or carry out a compliant repair, and digitally balance the wheel inside the van.",
              },
              {
                step: "04",
                title: "Torque, Pressure & Clean-Up",
                body: "The wheel is refitted and tightened to manufacturer torque settings, tyre pressure is set to specification, and old casing waste is taken away for licensed disposal.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="card-premium p-6">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                  Step {step}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2.5 text-sm leading-[1.75] text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Van Equipment & Safety"
            title={
              <>
                Workshop-grade vans, <span className="text-brand italic">BS AU 159 standards.</span>
              </>
            }
            copy="Our mobile units carry the same core machinery as a static tyre bay, operated under UK tyre safety and repair regulations."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="card-premium p-7">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <Truck className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">
                Mobile Van Equipment
              </h3>
              <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                Each service van is fitted with a pneumatic tyre-changing machine, a digital laser
                wheel balancer, a high-output air compressor, and heavy-duty hydraulic lifting
                equipment suitable for cars, SUVs, and light commercial vans. We also carry
                specialist locking wheel nut removal kits and calibrated torque wrenches.
              </p>
            </div>

            <div className="card-premium p-7">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">
                BS AU 159 Puncture Repairs
              </h3>
              <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                All puncture assessments follow the British Standard BS AU 159. The tyre is always
                removed from the rim for an internal structural inspection before any repair is
                considered. Only punctures within the central tread area (the minor repair zone)
                without secondary run-flat damage, sidewall bulges, or exposed cords are repaired
                using a permanent internal combi plug-patch unit.
              </p>
            </div>

            <div className="card-premium p-7">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <Gauge className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">
                Valves, TPMS &amp; Torque Checks
              </h3>
              <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                Every replacement includes a fresh rubber or high-pressure valve where applicable,
                and careful handling of Tyre Pressure Monitoring System (TPMS) sensors. Wheels are
                precision-balanced to prevent motorway vibration, and wheel bolts or nuts are
                torqued to the vehicle manufacturer&apos;s exact specification.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                  <span>Internal rim-off inspection before any repair</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                  <span>Digital wheel balancing &amp; calibrated torque</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBand />
      </main>
      <Footer />
      <MobileStickyCTA />
      <WhatsAppFab />
    </div>
  );
}
