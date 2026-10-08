import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  ShieldCheck,
  AlertTriangle,
  Wrench,
  Clock,
  Phone,
  MapPin,
  FileCheck2,
} from "lucide-react";
import {
  Header,
  Footer,
  WhatsAppFab,
  MobileStickyCTA,
  EmergencyBand,
  SectionHeader,
  PageHero,
  PHONE,
  PHONE_HREF,
  WHATSAPP_HREF,
} from "@/components/site";

import heroImg from "@/assets/svc/mobile-puncture-repair.webp";

const CANONICAL = "https://www.samsmobiletyres.co.uk/puncture-repair-guide";

export const Route = createFileRoute("/puncture-repair-guide")({
  component: PunctureRepairGuidePage,
  head: () => ({
    meta: [
      { title: "Tyre Puncture Repair Guide — BS AU 159 Standard Explained" },
      {
        name: "description",
        content:
          "A practical UK guide to tyre puncture assessment: what may be repairable, what normally needs replacing and how to request a mobile inspection.",
      },
      { property: "og:title", content: "Tyre Puncture Repair Guide — BS AU 159 Explained" },
      {
        property: "og:description",
        content:
          "Repairable vs replacement, MOT rules, and what a compliant BS AU 159 repair actually involves.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tyre Puncture Repair Guide — BS AU 159 Explained" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Tyre Puncture Repair Guide — BS AU 159 Standard Explained",
          description:
            "The UK guide to BS AU 159 puncture repair: what's legally repairable, what needs replacing, and how to find tyre repair near you.",
          author: { "@type": "Organization", name: "Sam's Mobile Tyres" },
          publisher: { "@type": "Organization", name: "Sam's Mobile Tyres" },
          mainEntityOfPage: CANONICAL,
          datePublished: "2026-01-01",
          dateModified: "2026-07-21",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is BS AU 159?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "BS AU 159 is the British Standard that defines how car tyre punctures must be repaired to remain road-legal in the UK. It requires the tyre to be removed from the wheel, inspected internally, and permanently sealed with a combined plug-and-patch from the inside.",
              },
            },
            {
              "@type": "Question",
              name: "Can any tyre puncture be repaired?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Under BS AU 159, only punctures in the central three-quarters of the tread, up to 6mm in diameter, with no sidewall or shoulder damage, can be repaired. Run-flat tyres driven flat and tyres with cord damage must be replaced.",
              },
            },
            {
              "@type": "Question",
              name: "Will a repaired tyre pass MOT?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — a correctly executed BS AU 159 internal plug-and-patch repair passes MOT. External string plugs and sidewall repairs fail MOT and are illegal for permanent use.",
              },
            },
            {
              "@type": "Question",
              name: "How do I find tyre repair near me?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "For mobile puncture assessment at a suitable home, workplace or roadside location, call Sam's Mobile Tyres on +44 7949 891689 with the tyre and location details.",
              },
            },
          ],
        }),
      },
    ],
  }),
});

const repairable = [
  "Puncture in the central tread (middle three-quarters of the tyre)",
  "Puncture hole 6mm or smaller in diameter",
  "No sidewall or shoulder damage",
  "No cord or belt damage visible internally",
  "Tyre has not been driven flat for an extended distance",
  "Legal minimum tread depth remaining (1.6mm+)",
];

const notRepairable = [
  "Any damage to the sidewall or shoulder area",
  "Cuts, bulges, or exposed cords",
  "Run-flat tyres that have been driven flat",
  "Second puncture within 40mm of an existing repair",
  "Ageing or perished rubber (over 6 years old)",
  "Tyres worn below 1.6mm tread depth",
];

const steps = [
  {
    n: "01",
    t: "Dismount",
    d: "The wheel is removed from the vehicle and the tyre demounted from the rim on our mobile machine.",
  },
  {
    n: "02",
    t: "Internal inspection",
    d: "The inside of the casing is examined for hidden cord, belt or ply damage that is invisible from outside.",
  },
  {
    n: "03",
    t: "Prep the injury",
    d: "The puncture channel is buffed and cleaned so the plug bonds chemically to the rubber, not just mechanically.",
  },
  {
    n: "04",
    t: "Combined plug-and-patch",
    d: "A single-piece plug-patch is inserted from the inside — the plug fills the injury, the patch seals the inner liner.",
  },
  {
    n: "05",
    t: "Refit and rebalance",
    d: "The tyre is remounted, inflated to spec, dynamically rebalanced and the wheel torqued to manufacturer setting.",
  },
  {
    n: "06",
    t: "Final safety check",
    d: "The completed work is checked before the vehicle returns to the road.",
  },
];

const myths = [
  {
    q: '"A rope plug from Halfords is fine."',
    a: "External string / rope plugs are legal in the UK only as a temporary get-you-home fix. They fail MOT and are not BS AU 159 compliant. A permanent repair must be done from inside the tyre.",
  },
  {
    q: '"Any puncture means a new tyre."',
    a: "Wrong — and a good fitter will tell you honestly. If the injury is inside the BS AU 159 parameters, an internal plug-and-patch lasts the remaining life of the tyre.",
  },
  {
    q: '"Run-flats can always be repaired."',
    a: "Almost never. Once a run-flat has been driven on low or zero pressure, the sidewall reinforcement is compromised and the tyre must be replaced.",
  },
  {
    q: '"Sidewall punctures can be patched."',
    a: "No. The sidewall flexes constantly and any repair will fatigue and fail. BS AU 159 explicitly excludes sidewall and shoulder repairs.",
  },
];

function PunctureRepairGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageHero
        eyebrow="Guide · BS AU 159"
        title={
          <>
            Tyre puncture repair, <span className="text-brand">done properly.</span>
          </>
        }
        copy="Everything a UK driver needs to know about repairable punctures, the BS AU 159 British Standard, MOT rules, and finding trustworthy tyre repair near you."
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Guides" },
          { label: "Puncture Repair (BS AU 159)" },
        ]}
        bgImage={heroImg}
      />

      {/* Intro */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-x max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase">
            <ShieldCheck className="h-3.5 w-3.5" /> The UK legal standard
          </div>
          <h2 className="mt-5 h2-display text-navy">
            What "BS AU 159" actually means for your tyres
          </h2>
          <p className="mt-6 text-lg text-slate-700 leading-[1.75]">
            <strong>BS AU 159</strong> is the British Standard published by BSI that defines how a
            car tyre puncture must be repaired to remain road-legal in the United Kingdom. It's the
            only repair method used to assess whether tread-area damage may be safely repairable. In
            plain English: the tyre has to come off the wheel, be inspected from the inside, and be
            sealed with a combined plug-and-patch — not with an external string or a can of foam.
          </p>
          <p className="mt-4 text-lg text-slate-700 leading-[1.75]">
            If you searched <em>tyre repair near me</em> and landed here, this guide will tell you
            in two minutes whether your puncture is repairable, what a proper repair costs in time,
            and what a compliant mobile fitter should do at your kerb.
          </p>
        </div>
      </section>

      {/* Repairable vs Not */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container-x">
          <SectionHeader
            eyebrow="Assessment"
            title="Repairable vs replacement"
            copy="Every puncture is judged against the same criteria. Here's the checklist we use at your kerb."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white border border-emerald-200 p-8 shadow-sm"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4" /> Repairable to BS AU 159
              </div>
              <ul className="mt-6 space-y-3">
                {repairable.map((r) => (
                  <li key={r} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-3xl bg-white border border-red-200 p-8 shadow-sm"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 text-red-700 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <XCircle className="h-4 w-4" /> Replacement only
              </div>
              <ul className="mt-6 space-y-3">
                {notRepairable.map((r) => (
                  <li key={r} className="flex gap-3 text-slate-700">
                    <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How a compliant repair is done */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container-x">
          <SectionHeader
            eyebrow="The process"
            title="What a BS AU 159 repair looks like"
            copy="Six steps, roughly 25–35 minutes at your kerb. Anything faster than this is almost certainly not a permanent repair."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group rounded-3xl border border-slate-200 bg-white p-7 hover:border-brand/40 hover:-translate-y-0.5 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-brand text-sm font-bold tracking-wider">
                    {s.n}
                  </span>
                  <span className="h-px flex-1 bg-slate-200 group-hover:bg-brand/30 transition-colors" />
                  <Wrench className="h-4 w-4 text-slate-400" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{s.t}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Myths */}
      <section className="py-16 sm:py-24 bg-navy text-white">
        <div className="container-x max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase">
            <AlertTriangle className="h-3.5 w-3.5" /> Myth busting
          </div>
          <h2 className="mt-5 h2-display text-white">Four things drivers get wrong</h2>
          <div className="mt-10 space-y-6">
            {myths.map((m) => (
              <div
                key={m.q}
                className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-7"
              >
                <p className="text-lg font-semibold text-white">{m.q}</p>
                <p className="mt-3 text-white/75 leading-relaxed">{m.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tyre repair near me — CTA block */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand to-brand-strong p-10 sm:p-16 text-white shadow-[0_30px_80px_-30px_rgba(60,131,246,0.55)]">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase">
                <MapPin className="h-3.5 w-3.5" /> Tyre repair near you
              </div>
              <h2 className="mt-5 h2-display text-white">
                Need a puncture assessment at your location?
              </h2>
              <p className="mt-5 text-white/85 text-lg leading-relaxed">
                Mobile BS AU 159 puncture repair across every London borough, the M25 corridor and
                into Essex. Home, office, roadside — anywhere your car is. Quoted upfront on the
                call, no tyre details and location so the suitable next step can be confirmed.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-full bg-white text-brand px-6 py-3.5 text-sm font-bold shadow-lg hover:-translate-y-0.5 transition"
                >
                  <Phone className="h-4 w-4" /> Call {PHONE}
                </a>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 backdrop-blur text-white px-6 py-3.5 text-sm font-bold hover:bg-white/20 transition"
                >
                  WhatsApp us
                </a>
                <Link
                  to="/$slug"
                  params={{ slug: "mobile-puncture-repair" }}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 backdrop-blur text-white px-6 py-3.5 text-sm font-bold hover:bg-white/20 transition"
                >
                  <FileCheck2 className="h-4 w-4" /> Service details
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/75">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" /> 24/7 dispatch
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> Safety-first assessment
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Tyre condition checked
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBand />
      <Footer />
      <WhatsAppFab />
      <MobileStickyCTA />
    </div>
  );
}
