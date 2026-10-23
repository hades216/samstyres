import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "lucide-react";
import {
  Header,
  Footer,
  MobileStickyCTA,
  WhatsAppFab,
  PHONE,
  PHONE_HREF,
  PageHero,
} from "@/components/site";
import { SERVICES, ALL_SERVICE_SLUGS, SITE_URL } from "@/lib/services-data";
import { LOCATIONS, ALL_LOCATION_SLUGS } from "@/lib/location-pages";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Mobile Tyre Services in London | Sam's Mobile Tyres" },
      {
        name: "description",
        content:
          "24/7 mobile tyre fitting, emergency puncture repair, van tyres, 24/7 car recovery and roadside assistance across London. Call 07949 891689 for dispatch.",
      },
      {
        name: "keywords",
        content:
          "mobile tyre services london, 24/7 car recovery london, emergency tyre fitting, puncture repairs, roadside assistance, vehicle towing london",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Mobile Tyre Services in London | Sam's Mobile Tyres" },
      {
        property: "og:description",
        content:
          "24/7 mobile tyre fitting, emergency puncture repair, van tyres, 24/7 car recovery and roadside assistance across London. Call 07949 891689 for dispatch.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/services` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
  }),
  component: ServicesPage,
});

const CATEGORY_ORDER: { key: string; label: string; blurb: string }[] = [
  {
    key: "emergency",
    label: "Emergency & Roadside",
    blurb: "24/7 car recovery, emergency tyre fitting, and roadside assistance across London.",
  },
  {
    key: "fitting",
    label: "Tyre Fitting",
    blurb: "Mobile fitting at home, work or roadside — new tyres supplied and fitted.",
  },
  {
    key: "repair",
    label: "Repair & Diagnostics",
    blurb: "Punctures, TPMS sensor replacement and tyre pressure checks on-site.",
  },
  {
    key: "battery",
    label: "Battery & Power",
    blurb: "Mobile jump start service — heavy-duty booster packs for all petrol, diesel & hybrid vehicles.",
  },
  {
    key: "specialist",
    label: "Specialist Services",
    blurb: "Luxury vehicles, fleets, workplace fitting and more.",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageHero
        eyebrow="All Services"
        title="Mobile Tyre Services Across London"
        copy="From roadside emergencies to scheduled home fittings — one call, one van, everything done on-site."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container-x space-y-16 md:space-y-24">
          {CATEGORY_ORDER.map((cat) => {
            const items = ALL_SERVICE_SLUGS.map((s) => SERVICES[s]).filter(
              (s) => s && s.category === cat.key,
            );
            if (!items.length) return null;

            return (
              <div key={cat.key}>
                <div className="mb-8 flex items-end justify-between gap-6 flex-wrap">
                  <div className="max-w-2xl">
                    <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand mb-2">
                      {cat.key}
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-navy">
                      {cat.label}
                    </h2>
                    <p className="mt-2 text-slate-600 text-[15px]">{cat.blurb}</p>
                  </div>
                  <a
                    href={PHONE_HREF}
                    className="hidden sm:inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-white text-[13px] font-semibold hover:bg-brand transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {PHONE}
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((s) => (
                    <Link
                      key={s.slug}
                      to="/$slug"
                      params={{ slug: s.slug }}
                      className="group card-premium overflow-hidden bg-white flex flex-col hover:-translate-y-1 transition-transform"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={s.hero}
                          alt={s.h1}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-display text-[17px] font-semibold text-navy leading-tight">
                            {s.h1.replace(/ in London$/, "")}
                          </h3>
                          <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-brand shrink-0 mt-0.5" />
                        </div>
                        <p className="mt-2 text-[13.5px] text-slate-600 line-clamp-2">
                          {s.eyebrow}
                        </p>
                        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[12px] text-slate-500">
                          <span className="font-medium text-navy/80">View service</span>
                          <span className="text-brand font-semibold">Call for quote</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-16 md:py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[.2em] font-semibold text-brand">
              Local coverage
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy">
              Mobile tyre fitting around Enfield
            </h2>
            <p className="mt-3 text-slate-600">
              See postcode, road and booking information for each priority service area.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_LOCATION_SLUGS.map((slug) => (
              <Link
                key={slug}
                to="/$slug"
                params={{ slug }}
                className="card-premium p-5 font-display font-bold text-navy hover:text-brand"
              >
                {LOCATIONS[slug].name}
                <ArrowUpRight className="ml-2 inline h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyCTA />
      <WhatsAppFab />
    </div>
  );
}
