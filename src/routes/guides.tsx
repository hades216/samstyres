import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, FileCheck2 } from "lucide-react";
import {
  Header,
  Footer,
  WhatsAppFab,
  MobileStickyCTA,
  EmergencyBand,
  SectionHeader,
  PageHero,
} from "@/components/site";
import van from "@/assets/van.webp";
import { ALL_GUIDE_SLUGS, GUIDES } from "@/lib/guides-data";

const SITE_URL = "https://www.samsmobiletyres.co.uk";
const URL = `${SITE_URL}/guides`;

export const Route = createFileRoute("/guides")({
  component: GuidesPage,
  head: () => ({
    meta: [
      { title: "Tyre & Roadside Guides — Sam's Mobile Tyres" },
      {
        name: "description",
        content:
          "Practical UK tyre and roadside guides: blowout safety, puncture repair vs replacement, reading a tyre sidewall, TPMS warnings and more.",
      },
      { property: "og:title", content: "Tyre & Roadside Guides — Sam's Mobile Tyres" },
      {
        property: "og:description",
        content: "Practical, plain-English tyre and roadside safety guides for UK drivers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
});

const extraGuide = {
  slug: "puncture-repair-guide",
  h1: "Tyre Puncture Repair Guide — BS AU 159 Standard Explained",
  dek: "The UK legal standard for puncture repair, explained: what's repairable, what needs replacing, and how a compliant repair is done.",
};

export function GuidesPage() {
  const guides = ALL_GUIDE_SLUGS.map((slug) => GUIDES[slug]);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Header />
      <PageHero
        eyebrow="Guides"
        title={
          <>
            Tyre &amp; roadside guides, <span className="text-brand">plain English.</span>
          </>
        }
        copy="Practical answers to the questions drivers actually search for — blowouts, punctures, run-flats, locking nuts and more."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Guides" }]}
        bgImage={van}
      />

      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="All Guides"
            title="Everything in one place"
            copy="Written for UK drivers, kept free of guesswork and invented numbers."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
            >
              <Link
                to="/puncture-repair-guide"
                className="group card-premium card-premium-hover p-6 flex h-full flex-col"
              >
                <FileCheck2 className="h-5 w-5 text-brand" />
                <h2 className="mt-4 font-display text-lg font-bold text-ink">{extraGuide.h1}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                  {extraGuide.dek}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Read guide{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
            {guides.map((g, i) => (
              <motion.div
                key={g.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i + 1) * 0.04 }}
              >
                <Link
                  to="/$slug"
                  params={{ slug: g.slug }}
                  className="group card-premium card-premium-hover p-6 flex h-full flex-col"
                >
                  <FileCheck2 className="h-5 w-5 text-brand" />
                  <h2 className="mt-4 font-display text-lg font-bold text-ink">{g.h1}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                    {g.dek}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Read guide{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
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
