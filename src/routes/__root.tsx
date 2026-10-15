import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { trackEvent } from "../lib/analytics";
import { PHONE, GOOGLE_REVIEWS_HREF, FACEBOOK_HREF, INSTAGRAM_HREF, TIKTOK_HREF } from "@/components/site";

const SITE_URL = "https://www.samsmobiletyres.co.uk";

// Sitewide fallback entity data. Kept deliberately minimal (no aggregateRating
// or opening hours) — the fuller LocalBusiness block with those extras lives
// only on the homepage (src/routes/index.tsx) to avoid duplicate/conflicting
// AggregateRating signals across pages that share this @id.
const organizationSchema = {
  "@context": "https://schema.org",
  "@id": `${SITE_URL}/#business`,
  "@type": ["Organization", "LocalBusiness"],
  name: "Sam's Mobile Tyres",
  url: SITE_URL,
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "93 Burncroft Avenue",
    addressLocality: "Enfield",
    addressRegion: "London",
    postalCode: "EN3 7JQ",
    addressCountry: "GB",
  },
  sameAs: [GOOGLE_REVIEWS_HREF, FACEBOOK_HREF, INSTAGRAM_HREF, TIKTOK_HREF],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@id": `${SITE_URL}/#website`,
  "@type": "WebSite",
  name: "Sam's Mobile Tyres",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#business` },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      {
        name: "keywords",
        content:
          "mobile tyre fitting london, 24/7 mobile tyres, emergency tyre fitting, puncture repair london, mobile tyre fitter near me, roadside tyre replacement",
      },
      { title: "Sam's Mobile Tyres — 24/7 Mobile Tyre Fitting London" },
      {
        name: "description",
        content:
          "24/7 emergency mobile tyre fitting, puncture repairs and roadside help across London. Fast response, premium tyres, trained technicians.",
      },
      { name: "author", content: "Sam's Mobile Tyres" },
      { property: "og:title", content: "Sam's Mobile Tyres — 24/7 Mobile Tyre Fitting London" },
      {
        property: "og:description",
        content:
          "24/7 emergency mobile tyre fitting, puncture repairs and roadside help across London. Fast response, premium tyres, trained technicians.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.samsmobiletyres.co.uk/" },
      { property: "og:site_name", content: "Sam's Mobile Tyres" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sam's Mobile Tyres — 24/7 Mobile Tyre Fitting London" },
      {
        name: "twitter:description",
        content: "24/7 emergency mobile tyre fitting and roadside help across London.",
      },
      {
        property: "og:image",
        content: `${SITE_URL}/og-preview.jpg`,
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/og-preview.jpg`,
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap",
        fetchPriority: "high",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap",
      },
    ],
    scripts: [organizationSchema, websiteSchema].map((schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    })),
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const tracked = link.dataset.track;
      if (tracked || href.startsWith("tel:") || href.includes("wa.me/")) {
        trackEvent(tracked ?? (href.startsWith("tel:") ? "phone_click" : "whatsapp_click"), {
          page_location: window.location.pathname,
          location_slug: link.dataset.location,
        });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}
