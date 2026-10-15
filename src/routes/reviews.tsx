import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
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
      {
        name: "keywords",
        content:
          "sams mobile tyres reviews, mobile tyre fitting reviews london, google reviews sams tyres, trusted tyre fitter london",
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
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <SectionHeader
            eyebrow="Independent Feedback"
            title={
              <>
                See what customers <span className="text-brand italic">say.</span>
              </>
            }
            copy="We do not reproduce unverified review text or a fixed rating count on this page. Use Google for the latest published feedback and reviewer details."
          />
          <div className="card-premium p-8 text-center">
            <MessageCircle className="mx-auto h-9 w-9 text-brand" />
            <h2 className="mt-5 font-display text-2xl font-bold text-ink">
              Google customer reviews
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Open the live listing to read current feedback or leave a review after using the
              service.
            </p>
            <a
              href={GOOGLE_REVIEWS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary mt-7"
            >
              View reviews on Google <ArrowUpRight className="h-4 w-4" />
            </a>
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
