import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Phone,
  MessageCircle,
  FileCheck2,
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
import type { GuideBlock, GuideEntry } from "@/lib/guides-data";

function TextBlock({ block }: { block: Extract<GuideBlock, { type: "text" }> }) {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="container-x max-w-4xl">
        <h2 className="h2-display text-navy">{block.heading}</h2>
        <div className="mt-6 space-y-4">
          {block.paragraphs.map((p, i) => (
            <p key={i} className="text-lg text-slate-700 leading-[1.75]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function PairBlock({ block }: { block: Extract<GuideBlock, { type: "pair" }> }) {
  const cols = [block.left, block.right];
  return (
    <section className="py-14 sm:py-20 bg-slate-50">
      <div className="container-x">
        <SectionHeader eyebrow="Assessment" title={block.heading} copy={block.copy} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cols.map((col, i) => {
            const good = col.tone === "good";
            return (
              <motion.div
                key={col.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`rounded-3xl bg-white border p-8 shadow-sm ${good ? "border-emerald-200" : "border-red-200"}`}
              >
                <div
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${good ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}
                >
                  {good ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                  {col.label}
                </div>
                <ul className="mt-6 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-700">
                      {good ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepsBlock({ block }: { block: Extract<GuideBlock, { type: "steps" }> }) {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="container-x">
        <SectionHeader eyebrow="Steps" title={block.heading} copy={block.copy} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {block.steps.map((s, i) => (
            <div
              key={s.t}
              className="group rounded-3xl border border-slate-200 bg-white p-7 hover:border-brand/40 hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-brand text-sm font-bold tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-slate-200 group-hover:bg-brand/30 transition-colors" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">{s.t}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ListBlock({ block }: { block: Extract<GuideBlock, { type: "list" }> }) {
  return (
    <section className="py-14 sm:py-20 bg-slate-50">
      <div className="container-x">
        <SectionHeader eyebrow="Checklist" title={block.heading} copy={block.copy} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {block.items.map((item) => (
            <div key={item.t} className="rounded-3xl border border-slate-200 bg-white p-7">
              <h3 className="text-lg font-bold text-navy">{item.t}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalloutBlock({ block }: { block: Extract<GuideBlock, { type: "callout" }> }) {
  return (
    <section className="py-14 sm:py-20 bg-navy text-white">
      <div className="container-x max-w-4xl">
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase">
            <AlertTriangle className="h-3.5 w-3.5" /> Worth knowing
          </div>
          <h2 className="mt-5 h2-display text-white">{block.heading}</h2>
          <p className="mt-4 text-white/75 leading-relaxed text-lg">{block.body}</p>
        </div>
      </div>
    </section>
  );
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case "text":
      return <TextBlock block={block} />;
    case "pair":
      return <PairBlock block={block} />;
    case "steps":
      return <StepsBlock block={block} />;
    case "list":
      return <ListBlock block={block} />;
    case "callout":
      return <CalloutBlock block={block} />;
  }
}

export function GuidePage({ guide }: { guide: GuideEntry }) {
  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      <Header />

      <PageHero
        eyebrow={guide.eyebrow}
        title={guide.h1}
        copy={guide.dek}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Guides" }, { label: guide.h1 }]}
        bgImage={guide.hero}
      />

      {/* Intro */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-x max-w-4xl space-y-4">
          {guide.intro.map((p, i) => (
            <p key={i} className="text-lg text-slate-700 leading-[1.75]">
              {p}
            </p>
          ))}
        </div>
      </section>

      {guide.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}

      {/* FAQs */}
      <section className="py-14 sm:py-20 bg-white border-y border-slate-100">
        <div className="container-x max-w-3xl">
          <SectionHeader eyebrow="Common Questions" title="Frequently asked" />
          <div className="mt-9 space-y-3">
            {guide.faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl border border-slate-100 bg-slate-50 p-5"
              >
                <summary className="cursor-pointer list-none font-display font-bold text-ink">
                  {q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand to-brand-strong p-10 sm:p-16 text-white shadow-[0_30px_80px_-30px_rgba(60,131,246,0.55)]">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-3xl">
              <h2 className="h2-display text-white">Need mobile tyre help now?</h2>
              <p className="mt-5 text-white/85 text-lg leading-relaxed">
                Call or WhatsApp with your location, registration and tyre size — we'll confirm
                availability and the right next step.
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
                  <MessageCircle className="h-4 w-4" /> WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related reading */}
      {guide.related.length > 0 && (
        <section className="border-y border-slate-100 bg-slate-50 py-12">
          <div className="container-x">
            <h2 className="font-display text-2xl font-bold text-ink">Related reading</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {guide.related.map((r) => (
                <Link
                  key={r.slug}
                  to="/$slug"
                  params={{ slug: r.slug }}
                  className="btn-base btn-outline text-sm"
                >
                  {r.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
              <Link to="/guides" className="btn-base btn-primary text-sm">
                <FileCheck2 className="h-4 w-4" /> All guides
              </Link>
            </div>
          </div>
        </section>
      )}

      <EmergencyBand />
      <Footer />
      <MobileStickyCTA />
      <WhatsAppFab />
    </div>
  );
}
