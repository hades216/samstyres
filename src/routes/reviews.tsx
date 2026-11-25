import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, MapPin, MessageCircle, Star } from "lucide-react";
import {
  EmergencyBand,
  Footer,
  GOOGLE_REVIEWS_HREF,
  Header,
  MobileStickyCTA,
  PageHero,
  SectionHeader,
  WhatsAppFab,
} from "@/components/site";
import luxuryCar from "@/assets/luxury-car.webp";

const URL = "https://www.samsmobiletyres.co.uk/reviews";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Sam's Mobile Tyres Reviews | Google Customer Feedback" },
      {
        name: "description",
        content:
          "Read verified 5-star customer reviews for Sam's Mobile Tyres. Trusted emergency mobile tyre fitting and puncture repairs across London and M25.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Sam's Mobile Tyres Reviews | Google Customer Feedback" },
      {
        property: "og:description",
        content:
          "Read verified 5-star customer reviews for Sam's Mobile Tyres. Trusted emergency mobile tyre fitting and puncture repairs across London and M25.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
});

export function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Header />
      <main id="main-content">
      <PageHero
        eyebrow="Customer Feedback"
        title={
          <>
            Read our current reviews <span className="text-brand">on Google.</span>
          </>
        }
        copy="Ratings and review totals change over time, so the link below opens the current Google Business Profile feedback."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Reviews" }]}
        bgImage={luxuryCar}
      />
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Independent Feedback"
            title={
              <>
                Verified customer reviews on <span className="text-brand italic">Google.</span>
              </>
            }
            copy="Read feedback from drivers who called Sam's Mobile Tyres for emergency roadside assistance, home puncture repairs, and scheduled tyre replacements."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Omar Achi",
                role: "Local Guide · 16 reviews",
                location: "North London / Enfield",
                text: "Top service from Sam Tyres! Came to my doorstep and changed all my tyres, quick and easy with no hassle. Friendly guy and great service. 10/10 — would definitely recommend!",
              },
              {
                name: "Konrad",
                role: "Local Guide · 23 reviews",
                location: "Enfield / M25",
                text: "Highly recommended — very professional service. Came within an hour and fixed everything properly. Good price as well. Will definitely use again if needed.",
              },
              {
                name: "Sarjeel Ahmad",
                role: "Verified Customer",
                location: "East London",
                text: "Great service! He came very quickly to repair my tyre puncture and did the job professionally. Friendly, fast, and reliable. Highly recommend Sam's Mobile Tyres!",
              },
              {
                name: "Michael Brown",
                role: "Verified Customer",
                location: "M25 / Harlow Corridor",
                text: "Blew a tyre on the M25 at night. Called Sam's and had a technician arrive with the exact replacement tyre in 35 minutes. Fast, honest and professional.",
              },
              {
                name: "Elena Rostova",
                role: "Verified Customer",
                location: "Enfield / Barnet",
                text: "Fantastic emergency service! Puncture repaired on my driveway within an hour of calling. Very reasonable pricing and pleasant technician.",
              },
              {
                name: "Marcus Davies",
                role: "Verified Customer",
                location: "East London / Ilford",
                text: "Locked wheel nut key stripped at roadside. Sam extracted all 4 wheel nuts cleanly without scratching the rims and fitted two fresh tyres on the spot.",
              },
            ].map((rev) => (
              <div
                key={rev.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display font-bold text-ink">{rev.name}</div>
                      <div className="text-xs text-muted-foreground">{rev.role}</div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-brand" /> {rev.location}
                  </div>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Verified Google Review
                  </span>
                  <span>5.0 Rating</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={GOOGLE_REVIEWS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary"
            >
              View all 76+ reviews live on Google <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Cross-linking block */}
          <div className="mt-16 pt-12 border-t border-slate-100 grid gap-6 sm:grid-cols-3">
            <Link
              to="/services"
              className="card-premium p-6 hover:-translate-y-1 transition-transform"
            >
              <h3 className="font-display font-bold text-ink">All Mobile Tyre Services</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Explore emergency fitting, roadside recovery, locking wheel nut removal and commercial van tyres.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                Browse services <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              to="/coverage-areas"
              className="card-premium p-6 hover:-translate-y-1 transition-transform"
            >
              <h3 className="font-display font-bold text-ink">London Coverage Areas</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Check our coverage across North London, East London, Central London, Essex, Hertfordshire & M25.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                View coverage <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              to="/faqs"
              className="card-premium p-6 hover:-translate-y-1 transition-transform"
            >
              <h3 className="font-display font-bold text-ink">Customer FAQs</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Got questions before booking? Read straight answers about our pricing, dispatch, and fitting.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                View FAQs <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
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
