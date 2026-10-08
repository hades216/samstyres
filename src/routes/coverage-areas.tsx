import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Clock, Zap, Phone, CheckCircle2 } from "lucide-react";
import {
  Header,
  Footer,
  WhatsAppFab,
  MobileStickyCTA,
  EmergencyBand,
  SectionHeader,
  PageHero,
  PHONE_HREF,
} from "@/components/site";
import london from "@/assets/london.webp";
import { ALL_LOCATION_SLUGS, LOCATIONS } from "@/lib/location-pages";

export const Route = createFileRoute("/coverage-areas")({
  component: CoveragePage,
  head: () => ({
    meta: [
      { title: "Coverage Areas — Sam's Mobile Tyres · Across London & M25" },
      {
        name: "description",
        content:
          "24/7 mobile tyre fitting coverage from Enfield across Greater London, plus St Albans, Watford, Harlow, Bishop's Stortford, Stansted, Epping, Ware, Stevenage and Ilford.",
      },
      { property: "og:title", content: "Coverage Areas — Sam's Mobile Tyres" },
      {
        property: "og:description",
        content:
          "Mobile tyre fitting coverage across Enfield, nearby towns, Greater London and the M25 corridor.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/coverage-areas" },
    ],
    links: [{ rel: "canonical", href: "https://www.samsmobiletyres.co.uk/coverage-areas" }],
  }),
});

type Zone = {
  name: string;
  areas: string[];
  color: string;
};

const zones: Zone[] = [
  {
    name: "Core Zone",
    color: "from-brand to-brand-strong",
    areas: [
      "Enfield",
      "Edmonton",
      "Palmers Green",
      "Winchmore Hill",
      "Southgate",
      "Wood Green",
      "Tottenham",
      "Haringey",
      "Barnet",
      "Finchley",
      "Muswell Hill",
      "Crouch End",
    ],
  },
  {
    name: "Central London",
    color: "from-navy to-brand",
    areas: [
      "Camden",
      "Islington",
      "Hackney",
      "Shoreditch",
      "City of London",
      "Westminster",
      "Marylebone",
      "Kensington",
      "Chelsea",
      "Fulham",
      "Hammersmith",
      "Notting Hill",
    ],
  },
  {
    name: "Outer London",
    color: "from-navy to-navy",
    areas: [
      "Waltham Forest",
      "Walthamstow",
      "Leyton",
      "Chingford",
      "Ilford",
      "Romford",
      "Dagenham",
      "Redbridge",
      "Newham",
      "Stratford",
      "Woolwich",
      "Greenwich",
    ],
  },
  {
    name: "M25 Corridor",
    color: "from-slate-700 to-navy",
    areas: [
      "Cheshunt",
      "Waltham Cross",
      "Potters Bar",
      "Borehamwood",
      "Watford",
      "Harrow",
      "Wembley",
      "Kingston",
      "Sutton",
      "Croydon",
      "Bromley",
      "Dartford",
    ],
  },
  {
    name: "Herts & Essex Extended",
    color: "from-brand-strong to-navy",
    areas: [
      "St Albans",
      "Watford",
      "Harlow",
      "Bishop's Stortford",
      "Stansted",
      "Epping",
      "Ware",
      "Stevenage",
    ],
  },
];

export function CoveragePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Header />
      <PageHero
        eyebrow="Where We Roll"
        title={
          <>
            All of London. <span className="text-brand">Plus the M25 corridor.</span>
          </>
        }
        copy="Call or WhatsApp with your postcode, tyre size and vehicle details to confirm availability at your home, workplace or safe roadside location."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Coverage" }]}
        bgImage={london}
      />

      <section className="section-y border-b border-slate-100">
        <div className="container-x">
          <SectionHeader
            eyebrow="Priority Areas"
            title={
              <>
                Local tyre fitting pages <span className="text-brand italic">near Enfield.</span>
              </>
            }
            copy="Choose your area for relevant postcodes, main routes, services and booking guidance."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_LOCATION_SLUGS.map((slug) => {
              const location = LOCATIONS[slug];
              return (
                <Link
                  key={slug}
                  to="/$slug"
                  params={{ slug }}
                  className="card-premium card-premium-hover p-6"
                >
                  <MapPin className="h-5 w-5 text-brand" />
                  <h2 className="mt-4 font-display text-xl font-bold text-ink">
                    Mobile tyre fitting {location.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {location.postcode} · Open 24/7
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Response promise stats */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="How We Help"
            title={
              <>
                Mobile tyre help <span className="text-brand italic">where you need it.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, n: "24 / 7", l: "Availability" },
              { icon: Clock, n: "24 / 7", l: "Never closed" },
              { icon: MapPin, n: String(ALL_LOCATION_SLUGS.length), l: "Priority local areas" },
              { icon: CheckCircle2, n: "4", l: "Core tyre services" },
            ].map(({ icon: Icon, n, l }, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="card-premium p-6 text-center"
              >
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="mt-4 font-mono text-3xl font-bold text-navy">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {l}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="section-y bg-slate-50 border-y border-slate-100">
        <div className="container-x">
          <SectionHeader
            eyebrow="Coverage Zones"
            title={
              <>
                London and the <span className="text-brand italic">M25 corridor.</span>
              </>
            }
            copy="Availability varies by location, traffic and the tyre required. Call with your postcode for confirmation."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {zones.map((z, i) => (
              <motion.div
                key={z.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-premium overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${z.color} px-7 py-6 text-white`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.25em] opacity-80">
                        Zone {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                        {z.name}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {z.areas.map((a) => (
                      <div key={a} className="flex items-center gap-2 text-sm text-ink">
                        <MapPin className="h-3.5 w-3.5 text-brand shrink-0" />
                        <span className="truncate">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive map */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Live Map"
            title={
              <>
                Base in Enfield. <span className="text-brand italic">Reach across London.</span>
              </>
            }
            copy="Our service is based in Enfield and covers nearby areas, Greater London and suitable locations around the M25 corridor."
          />
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-border shadow-lg aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
              <iframe
                title="Sam's Mobile Tyres coverage area map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39672.5!2d-0.09!3d51.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEnfield!5e0!3m2!1sen!2suk!4v0"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-3xl bg-navy text-white p-8 sm:p-10 flex flex-col justify-between shadow-lg">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" /> Dispatch Live
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
                  Not sure if you're covered?
                </h3>
                <p className="mt-3 text-white/70 leading-relaxed">
                  Call or message with your postcode, tyre size and vehicle details. We will confirm
                  availability and what assistance is suitable for the vehicle.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Home, workplace and roadside options",
                    "Tyre details confirmed before dispatch",
                    "Clear location and access checks",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-white/85">
                      <CheckCircle2 className="h-4 w-4 text-brand" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={PHONE_HREF}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand py-4 text-sm font-bold shadow-[0_15px_40px_-10px_rgba(60,131,246,0.7)]"
              >
                <Phone className="h-4 w-4" /> Check my postcode
              </a>
            </div>
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
