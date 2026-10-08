import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone, Wrench } from "lucide-react";
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
      { title: "About Sam's Mobile Tyres | Enfield Mobile Tyre Service" },
      {
        name: "description",
        content:
          "Learn about Sam's Mobile Tyres, an Enfield-based 24/7 mobile tyre fitting and roadside tyre assistance service covering London and nearby areas.",
      },
      { property: "og:title", content: "About Sam's Mobile Tyres" },
      {
        property: "og:description",
        content: "Enfield-based mobile tyre fitting at home, work and suitable roadside locations.",
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
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Mobile tyre help, <span className="text-brand">where you need it.</span>
          </>
        }
        copy="Sam's Mobile Tyres is based in Enfield and provides 24/7 mobile tyre fitting and roadside tyre assistance across London and nearby areas."
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
                <span>93 Burncroft Avenue, Enfield, EN3 7JQ, serving London and nearby priority areas.</span>
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
      <EmergencyBand />
      <Footer />
      <MobileStickyCTA />
      <WhatsAppFab />
    </div>
  );
}
