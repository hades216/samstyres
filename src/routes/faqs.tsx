import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";
import {
  Header,
  Footer,
  WhatsAppFab,
  MobileStickyCTA,
  EmergencyBand,
  PageHero,
  PHONE,
  PHONE_HREF,
} from "@/components/site";
import { ALL_SERVICES, SITE_URL } from "@/lib/services-data";

const URL = `${SITE_URL}/faqs`;
const TITLE = "FAQs — Mobile Tyre Fitting Questions Answered | Sam's Mobile Tyres";
const DESCRIPTION =
  "Answers to the most common questions about mobile tyre fitting, pricing, coverage, brands and emergency callouts across London and the M25.";

export const Route = createFileRoute("/faqs")({
  head: () => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: ALL_SERVICES.flatMap((s) =>
        s.faqs.slice(0, 3).map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      ),
    };
    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESCRIPTION },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:url", content: URL },
        { property: "og:site_name", content: "Sam's Mobile Tyres" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: TITLE },
        { name: "twitter:description", content: DESCRIPTION },
      ],
      links: [{ rel: "canonical", href: URL }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
    };
  },
  component: FaqsPage,
});

function FaqsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <PageHero
        eyebrow="Support · Knowledge Base"
        title="Frequently asked questions"
        copy="Straight answers on availability, pricing, coverage, brands and emergency callouts — grouped by service."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "FAQs" }]}
      />

      <section className="section-y container-x">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10">
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-brand">
              Browse by service
            </div>
            <nav className="flex flex-col gap-1 max-h-[70vh] overflow-auto pr-2">
              {ALL_SERVICES.map((s) => (
                <a
                  key={s.slug}
                  href={`#faq-${s.slug}`}
                  className="text-[13.5px] text-slate-600 hover:text-navy py-1.5 px-2 rounded-md hover:bg-slate-50 transition-colors"
                >
                  {s.navLabel}
                </a>
              ))}
            </nav>
            <a
              href={PHONE_HREF}
              className="btn-base btn-primary mt-4 w-full justify-center"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
          </aside>
          <div className="space-y-16">
            {ALL_SERVICES.map((s) => (
              <FaqBlock
                key={s.slug}
                slug={s.slug}
                title={s.h1.replace(/ in London$/, "")}
                faqs={s.faqs}
              />
            ))}
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

function FaqBlock({
  slug,
  title,
  faqs,
}: {
  slug: string;
  title: string;
  faqs: { q: string; a: string }[];
}) {
  return (
    <div id={`faq-${slug}`} className="scroll-mt-24">
      <div className="flex items-end justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <h2 className="h2-display text-ink">{title}</h2>
        <Link
          to="/$slug"
          params={{ slug }}
          className="text-[13px] font-semibold text-navy hover:text-brand inline-flex items-center gap-1 shrink-0"
        >
          Service page <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {faqs.map((f, i) => (
          <FaqItem key={i} q={f.q} a={f.a} />
        ))}
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-5 px-6 text-left"
        aria-expanded={open}
      >
        <span className="text-[15.5px] font-semibold text-ink">{q}</span>
        <ChevronDown
          className={`h-4 w-4 text-slate-500 shrink-0 transition-transform ${open ? "rotate-180 text-brand" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[14.5px] leading-[1.75] text-slate-600">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
