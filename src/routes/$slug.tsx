import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Clock,
  Loader2,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

import {
  Header,
  Footer,
  WhatsAppFab,
  MobileStickyCTA,
  EmergencyBand,
  SectionHeader,
  PHONE,
  PHONE_HREF,
  WHATSAPP_HREF,
  GOOGLE_REVIEWS_HREF,
} from "@/components/site";
import { BrandsMarquee } from "@/components/brands-marquee";
import { SERVICES, SITE_URL, type ServiceEntry } from "@/lib/services-data";
import {
  TRUST_BADGES,
  QUICK_FACTS_BAR,
  HEADLINE_STATS,
  iconForVehicle,
  getSignsForService,
  getReviewsForService,
  getLocalSeoParagraph,
  getWhatIsBlocks,
  isPublishableCopy,
  safeServiceDescription,
  type PageReview,
} from "@/lib/service-page-defaults";
import { submitToFormSubmit, FormSubmitError } from "@/lib/formsubmit";
import { trackEvent } from "@/lib/analytics";
import { LocationPage } from "@/components/location-page";
import { ALL_LOCATION_SLUGS, LOCATIONS, LOCATION_GEO } from "@/lib/location-pages";
import { GuidePage } from "@/components/guide-page";
import { GUIDES } from "@/lib/guides-data";

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------
export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const svc = SERVICES[params.slug];
    if (svc) return { kind: "service" as const, svc };
    const location = LOCATIONS[params.slug];
    if (location) return { kind: "location" as const, location };
    const guide = GUIDES[params.slug];
    if (guide) return { kind: "guide" as const, guide };
    throw notFound();
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found — Sam's Mobile Tyres" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    if (loaderData.kind === "location") {
      const location = loaderData.location;
      const url = `${SITE_URL}/${location.slug}`;
      const geo = LOCATION_GEO[location.slug];
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: location.h1,
        description: location.description,
        serviceType: "Mobile tyre fitting",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: {
          "@type": "Place",
          name: location.name,
          ...(geo
            ? {
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: geo.lat,
                  longitude: geo.lng,
                },
              }
            : {}),
        },
        url,
      };
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Coverage areas",
            item: `${SITE_URL}/coverage-areas`,
          },
          { "@type": "ListItem", position: 3, name: location.name, item: url },
        ],
      };
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: location.faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      };
      return {
        meta: [
          { title: location.title },
          { name: "description", content: location.description },
          { property: "og:title", content: location.title },
          { property: "og:description", content: location.description },
          { property: "og:type", content: "website" },
          { property: "og:url", content: url },
          { property: "og:site_name", content: "Sam's Mobile Tyres" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: location.title },
          { name: "twitter:description", content: location.description },
        ],
        links: [{ rel: "canonical", href: url }],
        scripts: [serviceSchema, breadcrumbSchema, faqSchema].map((schema) => ({
          type: "application/ld+json",
          children: JSON.stringify(schema),
        })),
      };
    }
    if (loaderData.kind === "guide") {
      const guide = loaderData.guide;
      const url = `${SITE_URL}/${guide.slug}`;
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: guide.h1,
        description: guide.description,
        author: { "@type": "Organization", name: "Sam's Mobile Tyres" },
        publisher: { "@type": "Organization", name: "Sam's Mobile Tyres" },
        mainEntityOfPage: url,
        datePublished: guide.datePublished,
        dateModified: guide.dateModified,
        about: { "@id": `${SITE_URL}/#business` },
      };
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: guide.faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      };
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
          { "@type": "ListItem", position: 3, name: guide.h1, item: url },
        ],
      };
      return {
        meta: [
          { title: guide.title },
          { name: "description", content: guide.description },
          { property: "og:title", content: guide.title },
          { property: "og:description", content: guide.description },
          { property: "og:type", content: "article" },
          { property: "og:url", content: url },
          { property: "og:site_name", content: "Sam's Mobile Tyres" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: guide.title },
          { name: "twitter:description", content: guide.description },
        ],
        links: [{ rel: "canonical", href: url }],
        scripts: [articleSchema, faqSchema, breadcrumbSchema].map((schema) => ({
          type: "application/ld+json",
          children: JSON.stringify(schema),
        })),
      };
    }
    const svc = loaderData.svc;
    const url = `${SITE_URL}/${params.slug}`;
    const image = `${SITE_URL}/og-preview.jpg`;

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: svc.h1,
      serviceType: svc.keywords.primary,
      description: safeServiceDescription(svc),
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: svc.coverageAreas.map((name) => ({
        "@type": "City",
        name,
      })),
      url,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: svc.faqs
        .filter(({ q, a }) => isPublishableCopy(`${q} ${a}`))
        .map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: svc.h1, item: url },
      ],
    };

    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: svc.metaTitle,
      description: safeServiceDescription(svc),
      url,
      inLanguage: "en-GB",
      isPartOf: {
        "@type": "WebSite",
        name: "Sam's Mobile Tyres",
        url: SITE_URL,
      },
      about: { "@id": `${SITE_URL}/#business` },
    };

    return {
      meta: [
        { title: svc.metaTitle },
        { name: "description", content: safeServiceDescription(svc) },
        {
          name: "keywords",
          content: [svc.keywords.primary, ...svc.keywords.secondary].join(", "),
        },
        { property: "og:title", content: svc.metaTitle },
        { property: "og:description", content: safeServiceDescription(svc) },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "og:site_name", content: "Sam's Mobile Tyres" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: svc.metaTitle },
        { name: "twitter:description", content: safeServiceDescription(svc) },
        { name: "twitter:image", content: image },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "preload", as: "image", href: svc.hero, fetchPriority: "high" },
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
        { type: "application/ld+json", children: JSON.stringify(faqSchema) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
        { type: "application/ld+json", children: JSON.stringify(webpageSchema) },
      ],
    };
  },
  component: SlugPage,
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="section-y container-x text-center">
        <div className="max-w-xl mx-auto pt-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-brand">
            404 · Service
          </div>
          <h1 className="h1-display mt-4 text-ink">Service not found</h1>
          <p className="mt-4 text-muted-foreground">
            That service page doesn't exist. Return home to browse our services.
          </p>
          <Link to="/" className="btn-base btn-primary mt-8">
            Back to home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
function SlugPage() {
  const data = Route.useLoaderData();
  if (data.kind === "location") return <LocationPage location={data.location} />;
  if (data.kind === "guide") return <GuidePage guide={data.guide} />;
  return <ServiceDetailPage svc={data.svc} />;
}

function ServiceDetailPage({ svc }: { svc: ServiceEntry }) {
  const signs = getSignsForService(svc);
  const stats = HEADLINE_STATS;
  const localSeo = svc.localSeo ?? getLocalSeoParagraph(svc);
  const whatIs = getWhatIsBlocks(svc);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Header />

      {/* 1 · Hero */}
      <ServiceHero svc={svc} />

      {/* 2 · Quick Facts Bar */}
      <QuickFactsBar />

      {/* 3 · What is this Service? */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1.35fr_1fr] gap-14 items-start">
          <div>
            <SectionHeader
              eyebrow="About the Service"
              title={
                <>
                  {whatIs[0].heading.replace(/\?$/, "")}
                  <span className="text-brand italic">?</span>
                </>
              }
            />
            <div className="mt-8 space-y-8 max-w-2xl">
              {whatIs.map((block, i) => (
                <div key={i}>
                  {i > 0 && (
                    <h3 className="font-display text-xl font-bold text-ink mb-3">
                      {block.heading}
                    </h3>
                  )}
                  <p className="text-[16.5px] leading-[1.85] text-muted-foreground">{block.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="btn-base btn-primary text-sm">
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-outline text-sm"
              >
                WhatsApp us <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Sticky quick-info card */}
          <aside className="lg:sticky lg:top-28 rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_30px_60px_-30px_rgba(0,43,133,0.2)]">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-brand">
              At a glance
            </div>
            <dl className="mt-5 divide-y divide-slate-100">
              {QUICK_FACTS_BAR.map((f) => (
                <div key={f.label} className="py-3 flex items-start justify-between gap-4">
                  <dt className="text-sm font-medium text-muted-foreground">{f.label}</dt>
                  <dd className="text-sm font-semibold text-ink text-right tabular-nums">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={PHONE_HREF}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-navy text-white px-5 py-3.5 text-sm font-semibold shadow-lg hover:bg-brand transition-colors"
            >
              <Phone className="h-4 w-4" />
              24/7 Line — {PHONE}
            </a>
            <a
              href="#quote"
              className="mt-3 flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white text-navy px-5 py-3 text-sm font-semibold hover:border-brand hover:text-brand transition-colors"
            >
              Request a free quote <ArrowRight className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </section>

      {/* 4 · Signs You Need This Service */}
      <section className="section-y bg-slate-50 border-y border-slate-100">
        <div className="container-x">
          <SectionHeader
            eyebrow="Warning Signs"
            title={
              <>
                Signs you need <span className="text-brand italic">this service.</span>
              </>
            }
            copy="If any of these apply, call with your location and tyre details so availability can be confirmed."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {signs.slice(0, 6).map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="card-premium card-premium-hover p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-[17px] font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · Benefits */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Benefits"
            title={
              <>
                Why customers choose this service{" "}
                <span className="text-brand italic">over a garage.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {svc.benefits
              .filter((b) => isPublishableCopy(`${b.title} ${b.body}`))
              .slice(0, 6)
              .map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="card-premium card-premium-hover p-7"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{b.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* 6 · Process — timeline */}
      <ProcessTimeline
        steps={svc.process.filter((s) => isPublishableCopy(`${s.title} ${s.body}`))}
      />

      {/* 7 · Statistics — Why Choose Sam's */}
      <StatsBanner stats={stats} />

      {/* 8 · Tyre Brands */}
      {svc.tyreBrands && <TyreBrandsSection brands={svc.tyreBrands} />}

      {/* 9 · Coverage Areas */}
      <CoverageSection areas={svc.coverageAreas} />

      {[
        "emergency-mobile-tyre-fitting",
        "mobile-tyre-replacement",
        "mobile-puncture-repair",
        "roadside-tyre-assistance",
      ].includes(svc.slug) && <PriorityLocationLinks />}

      {/* 10 · Related Services */}
      <RelatedServicesSection related={svc.related} />

      {/* 11 · Call for a Quote CTA */}
      <QuoteCtaSection
        whyUs={svc.whyUs.filter((item) => isPublishableCopy(`${item.title} ${item.body}`))}
      />

      {/* 15 · FAQs */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-14">
          <div className="lg:sticky lg:top-28 self-start">
            <SectionHeader
              eyebrow="FAQ · AI Answers"
              title={
                <>
                  Answers to the most <span className="text-brand italic">common questions.</span>
                </>
              }
              copy="Written so ChatGPT, Gemini, Claude and Perplexity can quote us cleanly. If we haven't answered something, call the 24/7 line."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="btn-base btn-primary text-sm">
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
              <Link to="/contact" className="btn-base btn-outline text-sm">
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            {svc.faqs
              .filter((f) => isPublishableCopy(`${f.q} ${f.a}`))
              .map((f, i) => (
                <motion.details
                  key={f.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="group card-premium p-6 open:ring-1 open:ring-brand/20"
                >
                  <summary className="flex items-start justify-between gap-5 cursor-pointer list-none">
                    <div>
                      <div className="text-xs font-mono text-brand">
                        Q · {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-1.5 font-display text-[17px] font-bold text-ink">
                        {f.q}
                      </div>
                    </div>
                    <span className="mt-1 grid h-8 w-8 place-items-center rounded-full bg-brand/10 text-brand group-open:rotate-45 transition-transform shrink-0">
                      <span className="text-lg leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-[14.5px] text-muted-foreground leading-[1.8]">{f.a}</p>
                </motion.details>
              ))}
          </div>
        </div>
      </section>

      {/* 16 · Emergency CTA banner */}
      <EmergencyBand />

      {/* 17 · Contact Form (inline) */}
      <QuoteForm svc={svc} />

      {/* 18 · Final Local SEO paragraph */}
      <LocalSeoSection paragraph={localSeo} />

      <Footer />
      <MobileStickyCTA />
      <WhatsAppFab />
    </div>
  );
}

function PriorityLocationLinks() {
  return (
    <section className="border-y border-slate-100 bg-slate-50 py-14">
      <div className="container-x">
        <h2 className="font-display text-2xl font-bold text-ink">
          Priority mobile tyre fitting areas
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          View local postcodes, routes and booking information.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {ALL_LOCATION_SLUGS.map((slug) => (
            <Link key={slug} to="/$slug" params={{ slug }} className="btn-base btn-outline text-sm">
              {LOCATIONS[slug].name}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===========================================================================
// SECTION COMPONENTS
// ===========================================================================

// 1 · Hero -------------------------------------------------------------------
function ServiceHero({ svc }: { svc: ServiceEntry }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white pt-28 sm:pt-36 pb-20 sm:pb-28">
      <img
        src={svc.hero}
        alt=""
        aria-hidden
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy/45 via-navy/50 to-navy/85"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_15%_20%,rgba(60,131,246,0.35),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(60,131,246,0.28),transparent_50%)]"
      />

      <div className="container-x relative">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-medium text-white/60"
        >
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/90 line-clamp-1">{svc.navLabel}</span>
        </nav>

        <div className="mt-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
              {svc.eyebrow}
            </span>
          </div>
          <h1 className="mt-6 h1-display text-white text-balance">{svc.h1}</h1>
          <p className="mt-6 text-lg leading-[1.7] text-white/75 max-w-2xl">
            {safeServiceDescription(svc)}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="btn-base btn-primary text-sm shadow-[0_20px_50px_-15px_rgba(60,131,246,0.7)]"
            >
              <Phone className="h-4 w-4" />
              Call {PHONE}
            </a>
            <a href="#quote" className="btn-base bg-white text-navy hover:bg-white/90 text-sm">
              Book Now <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base border border-white/25 bg-white/5 text-white hover:bg-white/10 text-sm backdrop-blur"
            >
              WhatsApp us <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 2 · Quick Facts Bar --------------------------------------------------------
function QuickFactsBar() {
  return (
    <div className="border-b border-slate-100 bg-gradient-to-r from-white via-slate-50 to-white">
      <div className="container-x py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {QUICK_FACTS_BAR.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col items-start gap-1 border-l-2 border-brand/70 pl-4 ${i === 4 ? "hidden md:flex" : ""}`}
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                {f.label}
              </span>
              <span className="font-display text-[15px] font-bold text-ink">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 6 · Process Timeline -------------------------------------------------------
function ProcessTimeline({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <section className="section-y bg-slate-50 border-y border-slate-100">
      <div className="container-x">
        <SectionHeader
          eyebrow="Step-By-Step"
          title={
            <>
              How the service <span className="text-brand italic">actually works.</span>
            </>
          }
          copy="No garage, no drop-off, no waiting room."
        />
        <div className="mt-14 relative">
          {/* Timeline line */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="relative"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-navy text-white font-bold font-mono text-sm shadow-lg shrink-0 z-10">
                    0{idx + 1}
                  </div>
                  {idx < steps.length - 1 && (
                    <div aria-hidden className="hidden lg:block h-px flex-1 bg-brand/30" />
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 7 · Statistics -------------------------------------------------------------
function StatsBanner({ stats }: { stats: { value: string; label: string; caption: string }[] }) {
  return (
    <section className="section-y bg-gradient-to-br from-navy via-[#001a5e] to-navy text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_25%_30%,rgba(60,131,246,0.35),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(60,131,246,0.25),transparent_50%)]"
      />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-brand">
            Why Choose Sam's
          </div>
          <h2 className="mt-4 h2-display text-white text-balance">
            Numbers that prove <span className="text-brand italic">the standard.</span>
          </h2>
          <p className="mt-5 text-white/70 text-[16px] leading-[1.7]">
            Clear service information for mobile tyre fitting at home, work or a suitable roadside
            location.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-7"
            >
              <div className="font-display font-black text-[42px] leading-none tracking-tight text-white tabular-nums">
                {s.value}
              </div>
              <div className="mt-3 text-sm font-semibold text-white">{s.label}</div>
              <div className="mt-1.5 text-xs text-white/60 leading-relaxed">{s.caption}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 8 · Tyre Brands ------------------------------------------------------------
function TyreBrandsSection({ brands }: { brands: string[] }) {
  return (
    <BrandsMarquee
      eyebrow="Tyre Brands"
      title={
        <>
          Premium tyres, <span className="text-brand italic">every fitment.</span>
        </>
      }
      copy="Genuine tyres from the world's most trusted manufacturers. No grey imports, ever."
      filter={brands}
    />
  );
}

// 9 · Vehicles ---------------------------------------------------------------
function VehiclesSection({ vehicles }: { vehicles: string[] }) {
  return (
    <section className="section-y bg-slate-50 border-y border-slate-100">
      <div className="container-x">
        <SectionHeader
          eyebrow="Vehicles We Service"
          title={
            <>
              Every vehicle, <span className="text-brand italic">on your driveway.</span>
            </>
          }
          copy="From family runarounds to luxury saloons, commercial vans to electric vehicles — we're equipped for it all."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {vehicles.slice(0, 4).map((v, i) => (
            <motion.div
              key={v}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="rounded-2xl bg-white border border-slate-200 p-5 text-center hover:border-brand hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-3">{iconForVehicle(v)}</div>
              <div className="font-display text-sm font-bold text-ink leading-tight">{v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 10 · Coverage --------------------------------------------------------------
function CoverageSection({ areas }: { areas: string[] }) {
  return (
    <section className="section-y">
      <div className="container-x grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
        <div>
          <SectionHeader
            eyebrow="Coverage"
            title={
              <>
                We're closer than <span className="text-brand italic">you think.</span>
              </>
            }
            copy="Dispatched from our Enfield base to every corner of Greater London and the M25 corridor."
          />
          <Link to="/coverage-areas" className="btn-base btn-primary mt-8">
            View full coverage map <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {areas.slice(0, 8).map((a) => (
            <div
              key={a}
              className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
            >
              <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5" />
              <span className="text-sm text-ink">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 11 · Related Services ------------------------------------------------------
function RelatedServicesSection({ related }: { related: string[] }) {
  const entries = related
    .map((slug) => SERVICES[slug])
    .filter((r): r is ServiceEntry => Boolean(r))
    .slice(0, 3);

  if (!entries.length) return null;

  return (
    <section className="section-y bg-slate-50 border-y border-slate-100">
      <div className="container-x">
        <SectionHeader
          eyebrow="Related Services"
          title={
            <>
              Often booked <span className="text-brand italic">alongside this.</span>
            </>
          }
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((r) => (
            <Link
              key={r.slug}
              to="/$slug"
              params={{ slug: r.slug }}
              className="group card-premium card-premium-hover p-6 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-brand">
                  {r.eyebrow}
                </div>
                <div className="mt-2 font-display text-lg font-bold text-ink group-hover:text-brand transition-colors">
                  {r.h1}
                </div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                  {safeServiceDescription(r)}
                </p>
              </div>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Read service{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// 12 · Call for a Quote --------------------------------------------------------
function QuoteCtaSection({ whyUs }: { whyUs: { title: string; body: string }[] }) {
  const promises = whyUs.slice(0, 4);
  return (
    <section className="section-y">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeader
            eyebrow="Pricing"
            title={
              <>
                One call. <span className="text-brand italic">Full quote.</span>
              </>
            }
            copy="Share the vehicle, tyre and location details by phone or WhatsApp so the suitable option and current quote can be confirmed."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="btn-base btn-primary">
              <Phone className="h-4 w-4" />
              Call for a quote
            </a>
            <a href="#quote" className="btn-base btn-secondary">
              Request quote by form
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Have your registration, tyre size and location ready.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-navy to-[#001a5e] text-white p-8 lg:p-10">
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-brand">
            Before booking
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold text-white text-balance">
            Four details to confirm.
          </h3>
          <div className="mt-6 grid gap-4">
            {promises.map((w, i) => (
              <div key={w.title} className="flex gap-4">
                <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white shadow-md shrink-0">
                  {i === 0 ? (
                    <Clock className="h-4 w-4" />
                  ) : i === 1 ? (
                    <Shield className="h-4 w-4" />
                  ) : i === 2 ? (
                    <Sparkles className="h-4 w-4" />
                  ) : (
                    <Zap className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-white text-[15px]">{w.title}</div>
                  <div className="mt-1 text-sm text-white/70 leading-relaxed">{w.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 14 · Reviews ---------------------------------------------------------------
function ReviewsSection({ reviews }: { reviews: PageReview[] }) {
  return (
    <section className="section-y bg-slate-50 border-y border-slate-100">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-end">
          <SectionHeader
            eyebrow="Customer Reviews"
            title={
              <>
                London drivers, <span className="text-brand italic">telling their stories.</span>
              </>
            }
            copy="Rated 5.0 stars across 76 verified Google Business Profile reviews. Every one earned on the kerb."
          />
          <a
            href={GOOGLE_REVIEWS_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="justify-self-start lg:justify-self-end inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-3 text-sm font-semibold text-navy hover:border-brand hover:text-brand transition-colors"
          >
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            See all 76 reviews on Google
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-3xl bg-white border border-slate-100 p-7 shadow-sm"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-[15px] leading-[1.75] text-ink">"{r.body}"</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand to-navy text-white font-bold text-sm shrink-0">
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-ink text-sm truncate">{r.name}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {r.role} · {r.area}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// 17 · Quote / Contact Form --------------------------------------------------
function QuoteForm({ svc }: { svc: ServiceEntry }) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <section id="quote" className="section-y">
      <div className="container-x grid lg:grid-cols-[1fr_1.15fr] gap-14 items-start">
        <div className="lg:pt-4">
          <SectionHeader
            eyebrow="Request a Quote"
            title={
              <>
                Get a free quote for{" "}
                <span className="text-brand italic">
                  {svc.h1.replace(/ in London$/, "").toLowerCase()}.
                </span>
              </>
            }
            copy="Fill in a few details and we'll respond within minutes with a total price and dispatch time. For emergencies, just call the 24/7 line."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="btn-base btn-primary text-sm">
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline text-sm"
            >
              WhatsApp us <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
            <div className="rounded-2xl border border-slate-100 bg-white p-4">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand">
                Response
              </div>
              <div className="mt-1 font-display font-bold text-ink">Within minutes</div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-4">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand">
                Callout fee
              </div>
              <div className="mt-1 font-display font-bold text-ink">£0</div>
            </div>
          </div>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const fd = new FormData(form);
            if (String(fd.get("website") || "")) return; // honeypot
            const name = String(fd.get("name") || "").trim();
            const phone = String(fd.get("phone") || "").trim();
            const location = String(fd.get("location") || "").trim();
            const vehicle = String(fd.get("vehicle") || "").trim();
            const tyreSize = String(fd.get("tyreSize") || "").trim();
            const message = String(fd.get("message") || "").trim();

            setSending(true);
            setError(null);
            try {
              await submitToFormSubmit({
                service: svc.h1,
                name,
                phone,
                location,
                vehicle,
                tyreSize,
                message,
                _subject: `Quote request · ${svc.h1} · ${name || "customer"}${location ? ` (${location})` : ""}`,
              });
              setSent(true);
              form.reset();
              trackEvent("quote_form_submit", { service: svc.slug, page_location: `/${svc.slug}` });
              toast.success("Quote request sent", {
                description: "We'll be in touch within minutes.",
              });
            } catch (err) {
              const message =
                err instanceof FormSubmitError
                  ? err.userMessage
                  : "Couldn't send right now. Please call or WhatsApp us on +44 7949 891689.";
              setError(message);
              toast.error("Couldn't send request", { description: message });
            } finally {
              setSending(false);
            }
          }}
          className="rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 p-6 sm:p-8 shadow-[0_30px_60px_-30px_rgba(0,43,133,0.15)]"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-brand">
            Free Quote · No Obligation
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold text-ink">Request a callback</h3>

          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <QuoteField label="Full name" name="name" required autoComplete="name" />
            <QuoteField
              label="Phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
            />
            <QuoteField label="Location / Postcode" name="location" autoComplete="postal-code" />
            <QuoteField label="Vehicle" name="vehicle" placeholder="e.g. BMW 3 Series" />
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <QuoteField
              label="Tyre size (if known)"
              name="tyreSize"
              placeholder="e.g. 225/45 R17"
            />
            <QuoteField
              label="How urgent?"
              name="urgency"
              placeholder="e.g. ASAP / today / this week"
            />
          </div>
          <div className="mt-4">
            <QuoteField label="Message" name="message" textarea />
          </div>

          <button
            type="submit"
            disabled={sending}
            aria-busy={sending}
            className="mt-6 w-full inline-flex justify-center items-center gap-2 rounded-full bg-brand text-white py-4 text-base font-semibold hover:bg-brand-2 active:scale-[0.99] transition shadow-lg shadow-brand/30 disabled:opacity-80 disabled:cursor-wait"
          >
            {sending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending your request…
              </>
            ) : sent ? (
              <>
                Request sent
                <CheckCircle2 className="h-4 w-4" />
              </>
            ) : (
              <>
                Send Request
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>

          {error && <p className="mt-3 text-xs text-red-600 text-center">{error}</p>}
          {sent && !error && (
            <p className="mt-3 text-xs text-emerald-600 text-center">
              Thanks — we'll be in touch within minutes.
            </p>
          )}
          <p className="mt-3 text-[11px] text-muted-foreground text-center">
            For urgent callouts, dial{" "}
            <a href={PHONE_HREF} className="font-semibold text-navy underline underline-offset-2">
              {PHONE}
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}

function QuoteField({
  label,
  name,
  type = "text",
  required,
  placeholder,
  textarea,
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email" | "numeric" | "decimal" | "search" | "url" | "none";
}) {
  const cls =
    "w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/25 transition";
  return (
    <label className="block min-w-0">
      <span className="block text-xs font-semibold text-ink mb-1.5">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          placeholder={placeholder}
          className={cls}
          required={required}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={cls}
          required={required}
          autoComplete={autoComplete}
          inputMode={inputMode}
        />
      )}
    </label>
  );
}

// 18 · Local SEO paragraph ---------------------------------------------------
function LocalSeoSection({ paragraph }: { paragraph: string }) {
  return (
    <section className="section-y bg-slate-50 border-t border-slate-100">
      <div className="container-x">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-brand">
            Serving Every London Borough
          </div>
          <h2 className="mt-4 h3-display text-ink text-balance">
            A mobile tyre service London{" "}
            <span className="text-brand italic">actually shows up for.</span>
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.85] text-muted-foreground">{paragraph}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/coverage-areas" className="btn-base btn-outline text-sm">
              Coverage areas <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="btn-base btn-outline text-sm">
              About us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/reviews" className="btn-base btn-outline text-sm">
              All reviews <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-base btn-primary text-sm">
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
