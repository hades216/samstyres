import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { submitToFormSubmit, FormSubmitError } from "@/lib/formsubmit";
import { trackEvent } from "@/lib/analytics";
import {
  Phone,
  Star,
  Clock,
  Zap,
  Shield,
  Wrench,
  MapPin,
  Mail,
  ChevronDown,
  Truck,
  BatteryCharging,
  Gauge,
  KeyRound,
  Car,
  CircleDot,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Loader2,
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
  ASSET_ORIGIN,
  GOOGLE_REVIEWS_HREF,
} from "@/components/site";
import { ALL_LOCATION_SLUGS, LOCATIONS } from "@/lib/location-pages";
import { ALL_GUIDE_SLUGS, GUIDES } from "@/lib/guides-data";

const assetUrl = (path: string) => (path.startsWith("/__l5e/") ? `${ASSET_ORIGIN}${path}` : path);

import hero from "@/assets/hero.webp";
import technician from "@/assets/technician.webp";
import emergency from "@/assets/emergency.webp";
import tyreCloseup from "@/assets/tyre-closeup.webp";
import van from "@/assets/van.webp";
import tools from "@/assets/tools.webp";
import luxuryCar from "@/assets/luxury-car.webp";
import london from "@/assets/london.webp";
import logo from "@/assets/sams-logo.png.asset.json";
import heroPoster from "@/assets/hero-poster.jpg.asset.json";
import svcEmergency from "@/assets/service-emergency.webp";
import svcReplacement from "@/assets/service-replacement.webp";
import svcPuncture from "@/assets/service-puncture.webp";
import svcLocknut from "@/assets/service-locknut.webp";
import svcBattery from "@/assets/service-battery.webp";
import svcRoadside from "@/assets/service-roadside.webp";

import heroVideo1Mp4 from "@/assets/hero-1.mp4.asset.json";
import heroVideo2Mp4 from "@/assets/hero-2.mp4.asset.json";
import heroVideo3Mp4 from "@/assets/hero-3.mp4.asset.json";
import heroVideo1Webm from "@/assets/hero-1.webm.asset.json";
import heroVideo2Webm from "@/assets/hero-2.webm.asset.json";
import heroVideo3Webm from "@/assets/hero-3.webm.asset.json";

const heroPosterUrl = "/hero-poster.jpg";

const heroVideos = [
  { webm: assetUrl(heroVideo1Webm.url), mp4: assetUrl(heroVideo1Mp4.url) },
  { webm: assetUrl(heroVideo2Webm.url), mp4: assetUrl(heroVideo2Mp4.url) },
  { webm: assetUrl(heroVideo3Webm.url), mp4: assetUrl(heroVideo3Mp4.url) },
];

const SITE_URL = "https://www.samsmobiletyres.co.uk";

const HOMEPAGE_FAQS: Array<[string, string]> = [
  [
    "Are you really available 24/7?",
    "Yes — genuinely. We dispatch vans day and night, weekends, and bank holidays, across Greater London.",
  ],
  [
    "How quickly can you attend?",
    "Availability depends on your location, traffic and the tyre required. Call with your postcode and tyre size for confirmation.",
  ],
  [
    "What areas do you cover?",
    "All 32 London boroughs plus surrounding Essex, Kent and Surrey. Call us and we'll confirm your postcode.",
  ],
  [
    "Do you fit tyres I've already bought?",
    "Yes — we're happy to fit customer-supplied tyres. Just let us know when you call.",
  ],
  [
    "What tyre brands do you carry?",
    "Michelin, Pirelli, Continental, Goodyear, Bridgestone, Hankook, Dunlop, Yokohama, BFGoodrich and mid-range budget options.",
  ],
  [
    "Can you repair punctures?",
    "Yes. If the damage is within safe repair limits (typically tread area, small puncture), we can repair professionally on-site.",
  ],
  [
    "Do you fit run-flat tyres?",
    "Absolutely. Our vans carry the specialist equipment required for run-flats and low-profile tyres.",
  ],
  [
    "How do I book?",
    `Call us on ${PHONE}, send your tyre details by WhatsApp or use the contact form below.`,
  ],
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@id": `${SITE_URL}/#business`,
  "@type": "AutoRepair",
  name: "Sam's Mobile Tyres",
  url: SITE_URL,
  telephone: PHONE,
  image: `${SITE_URL}/favicon.png`,
  priceRange: "££",
  areaServed: [
    "Greater London",
    "M25 corridor",
    "Enfield",
    "Waltham Cross",
    "Cheshunt",
    "Edmonton",
    "Chingford",
    "Waltham Abbey",
    "St Albans",
    "Watford",
    "Harlow",
    "Bishop's Stortford",
    "Stansted",
    "Epping",
    "Ware",
    "Stevenage",
    "Ilford",
  ].map((name) => ({ "@type": "Place", name })),
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.6521,
    longitude: -0.0807,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "93 Burncroft Avenue",
    addressLocality: "Enfield",
    addressRegion: "London",
    postalCode: "EN3 7JQ",
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    GOOGLE_REVIEWS_HREF,
    "https://www.facebook.com/share/1e7bwE3G4G/",
    "https://www.instagram.com/samsmobiletyres",
    "https://vm.tiktok.com/ZGd93j6g8/",
  ],
  // Owner-confirmed snapshot from Google Business Profile — re-verify and
  // bump this periodically as new reviews come in; do not let it drift.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "76",
  },
};

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQS.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "24/7 Mobile Tyre Fitting London | Sam's Mobile Tyres" },
      {
        name: "description",
        content:
          "Fast 24/7 mobile tyre fitting across London. Emergency puncture repair, new tyres & roadside assistance delivered to your doorstep or roadside.",
      },
      {
        name: "keywords",
        content:
          "mobile tyre fitting london, emergency tyre fitting, 24/7 mobile tyres london, puncture repair london, mobile tyre fitter near me",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "24/7 Mobile Tyre Fitting London | Sam's Mobile Tyres" },
      {
        property: "og:description",
        content:
          "Fast 24/7 mobile tyre fitting across London. Emergency puncture repair, new tyres & roadside assistance delivered to your doorstep or roadside.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.samsmobiletyres.co.uk/" },
      { rel: "preload", as: "image", href: heroPosterUrl, fetchPriority: "high" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      { type: "application/ld+json", children: JSON.stringify(homepageFaqSchema) },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Header />
      <Hero />
      <Marquee />
      <Brands />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Coverage />
      <EmergencyBand />
      <Gallery />
      <FAQs />
      <Guides />
      <Contact />
      <Footer />
      <MobileStickyCTA />
      <WhatsAppFab />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(true);
  const [inView, setInView] = useState(false);
  // Which layer is currently the visible one (0 = A, 1 = B).
  const [activeLayer, setActiveLayer] = useState<0 | 1>(0);
  const [srcIdx, setSrcIdx] = useState<[number, number]>([0, 1]);
  const nextIdxRef = useRef(2 % heroVideos.length);
  const [aReady, setAReady] = useState(false);

  // Device capability check
  useEffect(() => {
    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const conn = nav.connection;
    const saveData = conn?.saveData === true;
    const slow = conn?.effectiveType === "2g" || conn?.effectiveType === "slow-2g";
    if (isMobile || saveData || slow) setUseVideo(false);
  }, []);

  // Warm the HTTP cache for every hero clip as soon as possible so that
  // subsequent <video> src swaps resolve instantly from cache — no visible
  // stall between clip 1 → 2 → 3.
  useEffect(() => {
    // Background videos load naturally on desktop when mounted; no aggressive background preloading
  }, [useVideo]);

  // Mobile Safari / Chrome often pause background video when tab is hidden.
  // Resume the currently-visible layer when the page becomes visible again.
  useEffect(() => {
    if (!useVideo) return;
    const onVisible = () => {
      if (document.visibilityState !== "visible") return;
      const v = activeLayer === 0 ? videoARef.current : videoBRef.current;
      if (v && v.paused) {
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [useVideo, activeLayer]);

  // Lazy-mount on approach
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "400px 0px", threshold: 0.01 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Kick off playback + wire crossfade. Re-runs when srcIdx changes so listeners
  // reattach to the freshly-mounted <video> element (key change remounts it).
  useEffect(() => {
    if (!useVideo || !inView) return;
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;

    const safePlay = (v: HTMLVideoElement) => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    const onReady = () => setAReady(true);

    a.addEventListener("loadeddata", onReady);
    a.addEventListener("playing", onReady);
    b.addEventListener("loadeddata", onReady);
    b.addEventListener("playing", onReady);

    // Play whichever layer is currently active; prime the other.
    const activeEl = activeLayer === 0 ? a : b;
    const hiddenEl = activeLayer === 0 ? b : a;
    safePlay(activeEl);
    try {
      hiddenEl.currentTime = 0;
      hiddenEl.pause();
    } catch {
      /* noop */
    }

    const handleEnded = (justEnded: "A" | "B") => {
      const next = justEnded === "A" ? b : a;
      const prev = justEnded === "A" ? a : b;
      next.currentTime = 0;
      safePlay(next);
      setActiveLayer(justEnded === "A" ? 1 : 0);
      window.setTimeout(() => {
        try {
          prev.pause();
        } catch {
          /* noop */
        }
        const upcoming = nextIdxRef.current;
        nextIdxRef.current = (upcoming + 1) % heroVideos.length;
        setSrcIdx((cur) => (justEnded === "A" ? [upcoming, cur[1]] : [cur[0], upcoming]));
      }, 900);
    };

    const onAEnded = () => handleEnded("A");
    const onBEnded = () => handleEnded("B");
    a.addEventListener("ended", onAEnded);
    b.addEventListener("ended", onBEnded);

    return () => {
      a.removeEventListener("loadeddata", onReady);
      a.removeEventListener("playing", onReady);
      b.removeEventListener("loadeddata", onReady);
      b.removeEventListener("playing", onReady);
      a.removeEventListener("ended", onAEnded);
      b.removeEventListener("ended", onBEnded);
    };
  }, [useVideo, inView, srcIdx, activeLayer]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-navy">
      {/* Background videos — dual layer crossfade */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPosterUrl}
          alt="Sam's Mobile Tyres rapid response vehicle and technician fitting a tyre in London"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            aReady && useVideo ? "opacity-0" : "opacity-100"
          }`}
        />
        {useVideo && inView && (
          <>
            <video
              key={`a-${srcIdx[0]}`}
              ref={videoARef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                activeLayer === 0 ? "opacity-100" : "opacity-0"
              }`}
              autoPlay
              muted
              playsInline
              preload="auto"
              poster={heroPosterUrl}
              aria-hidden
            >
              <source src={heroVideos[srcIdx[0]].webm} type="video/webm" />
              <source src={heroVideos[srcIdx[0]].mp4} type="video/mp4" />
            </video>
            <video
              key={`b-${srcIdx[1]}`}
              ref={videoBRef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                activeLayer === 1 ? "opacity-100" : "opacity-0"
              }`}
              muted
              playsInline
              preload="metadata"
              poster={heroPosterUrl}
              aria-hidden
            >
              <source src={heroVideos[srcIdx[1]].webm} type="video/webm" />
              <source src={heroVideos[srcIdx[1]].mp4} type="video/mp4" />
            </video>
          </>
        )}
      </div>

      {/* Overlay — lighter (~30%), keeps video legible */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,20,60,0.28)_0%,rgba(0,20,60,0.20)_40%,rgba(0,20,60,0.55)_100%)]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_45%,transparent_30%,rgba(0,15,50,0.35)_100%)]" />

      {/* Content */}
      <div className="relative z-10 container-x flex min-h-[100svh] flex-col items-center justify-center pt-24 pb-20 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          }}
          className="w-full"
        >
          {/* Eyebrow */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/95 backdrop-blur-md"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Available Now · London Wide
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="mx-auto mt-8 max-w-[22ch] text-white text-balance text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.1] font-extrabold tracking-[-0.02em] lg:tracking-[-2px]"
            style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
          >
            <span className="bg-gradient-to-r from-[#7ab0ff] via-brand to-[#a5c8ff] bg-clip-text text-transparent">
              24/7
            </span>{" "}
            Emergency Mobile
            <br className="hidden sm:block" /> Tyre Fitting Across London
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="mx-auto mt-6 max-w-[640px] text-white/85 text-[16px] md:text-[18px] leading-[1.7]"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Fast, reliable mobile tyre fitting and roadside assistance — delivered to your kerb
            across London, day and night.
          </motion.p>

          {/* CTAs — 56px height, 14px radius, 32px x-padding */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              href={PHONE_HREF}
              className="group relative inline-flex h-[56px] items-center justify-center gap-2 rounded-[14px] bg-brand px-8 text-[15px] font-semibold text-white shadow-[0_18px_40px_-12px_rgba(60,131,246,0.7),0_0_0_1px_rgba(255,255,255,0.1)_inset]"
              style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
            >
              <span className="absolute inset-0 rounded-[14px] bg-gradient-to-b from-white/25 to-transparent opacity-60" />
              <Phone className="relative h-4 w-4" />
              <span className="relative">Call {PHONE}</span>
            </motion.a>
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="inline-block"
            >
              <a
                href="#services"
                className="inline-flex h-[56px] items-center justify-center gap-2 rounded-[14px] border border-white/25 bg-white/[0.08] px-8 text-[15px] font-semibold text-white backdrop-blur-md hover:bg-white/[0.14] transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
              >
                View Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2 text-sm text-white/85">
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
        {icon}
      </span>
      <span className="truncate font-medium">{label}</span>
    </span>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "24/7 Emergency Response",
    "Puncture Repairs",
    "Mobile Tyre Fitting",
    "Roadside Assistance",
    "Battery Replacement",
    "Fleet Services",
    "Same-Day Service",
  ];
  return (
    <div className="relative bg-navy text-white overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap animate-[marquee_18s_linear_infinite] md:animate-[marquee_25s_linear_infinite] py-2.5 sm:py-3.5 md:py-4 will-change-transform">
        {[...items, ...items, ...items].map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-3 sm:gap-5 px-3 sm:px-5 md:px-6 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide"
          >
            <CircleDot className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brand shrink-0" />
            <span className="uppercase text-white/85">{t}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translate3d(0,0,0)}to{transform:translate3d(-33.333%,0,0)}}`}</style>
    </div>
  );
}

/* ---------------- SERVICES ---------------- */
type SvcIconProps = { className?: string };

const IconEmergencyTyre = ({ className }: SvcIconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" fill="#002B85" opacity=".12" />
    <circle cx="24" cy="24" r="18" stroke="#002B85" strokeWidth="2.2" />
    <circle cx="24" cy="24" r="11" stroke="#002B85" strokeWidth="1.6" />
    <circle cx="24" cy="24" r="4" fill="#3C83F6" />
    <path
      d="M24 6v6M24 36v6M6 24h6M36 24h6M11.5 11.5l4.2 4.2M32.3 32.3l4.2 4.2M11.5 36.5l4.2-4.2M32.3 15.7l4.2-4.2"
      stroke="#002B85"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M30 14l-3 6h4l-4 8"
      stroke="#F59E0B"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const IconMobileFit = ({ className }: SvcIconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 30V18a2 2 0 0 1 2-2h20v18H6a2 2 0 0 1-2-2Z"
      fill="#3C83F6"
      opacity=".18"
      stroke="#002B85"
      strokeWidth="2"
    />
    <path
      d="M26 20h9l6 6v6a2 2 0 0 1-2 2h-13V20Z"
      fill="#002B85"
      opacity=".9"
      stroke="#002B85"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M28 22h6l4 4h-10v-4Z" fill="#fff" opacity=".9" />
    <circle cx="13" cy="35" r="4.5" fill="#0F172A" stroke="#002B85" strokeWidth="1.6" />
    <circle cx="13" cy="35" r="1.6" fill="#3C83F6" />
    <circle cx="33" cy="35" r="4.5" fill="#0F172A" stroke="#002B85" strokeWidth="1.6" />
    <circle cx="33" cy="35" r="1.6" fill="#3C83F6" />
  </svg>
);

const IconPuncture = ({ className }: SvcIconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="24" r="16" fill="#002B85" opacity=".1" />
    <circle cx="22" cy="24" r="16" stroke="#002B85" strokeWidth="2.2" />
    <circle cx="22" cy="24" r="9" stroke="#002B85" strokeWidth="1.6" />
    <circle cx="22" cy="24" r="3" fill="#3C83F6" />
    <path
      d="M36 8l6 6-14 14-7 1 1-7L36 8Z"
      fill="#F59E0B"
      stroke="#002B85"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M33 11l6 6" stroke="#002B85" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconLockNut = ({ className }: SvcIconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 6l14 8v10c0 9-6 15-14 18-8-3-14-9-14-18V14l14-8Z"
      fill="#3C83F6"
      opacity=".18"
      stroke="#002B85"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path d="M18 24v-3a6 6 0 0 1 12 0v3" stroke="#002B85" strokeWidth="2" strokeLinecap="round" />
    <rect x="16" y="24" width="16" height="12" rx="2" fill="#002B85" />
    <circle cx="24" cy="30" r="1.8" fill="#F59E0B" />
    <path d="M24 30v3" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconBattery = ({ className }: SvcIconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="8" width="6" height="4" rx="1" fill="#002B85" />
    <rect x="28" y="8" width="6" height="4" rx="1" fill="#002B85" />
    <rect
      x="6"
      y="12"
      width="36"
      height="28"
      rx="3"
      fill="#3C83F6"
      opacity=".18"
      stroke="#002B85"
      strokeWidth="2.2"
    />
    <rect
      x="10"
      y="16"
      width="28"
      height="20"
      rx="2"
      fill="#fff"
      stroke="#002B85"
      strokeWidth="1.6"
    />
    <path
      d="M22 19l-5 8h5l-1 6 6-9h-5l1-5h-1Z"
      fill="#F59E0B"
      stroke="#002B85"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path d="M13 12v4M35 12v4" stroke="#002B85" strokeWidth="1.6" />
  </svg>
);

const IconRoadside = ({ className }: SvcIconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 32V20a2 2 0 0 1 2-2h16l4-6h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
      fill="#3C83F6"
      opacity=".18"
      stroke="#002B85"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M28 18h8v6h-8z" fill="#002B85" opacity=".9" />
    <circle cx="13" cy="36" r="4.5" fill="#0F172A" stroke="#002B85" strokeWidth="1.6" />
    <circle cx="13" cy="36" r="1.6" fill="#3C83F6" />
    <circle cx="33" cy="36" r="4.5" fill="#0F172A" stroke="#002B85" strokeWidth="1.6" />
    <circle cx="33" cy="36" r="1.6" fill="#3C83F6" />
    <path
      d="M38 10l3 5h-2v4h-2v-4h-2l3-5Z"
      fill="#F59E0B"
      stroke="#002B85"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

function Services() {
  const services = [
    {
      slug: "emergency-mobile-tyre-fitting",
      icon: IconEmergencyTyre,
      image: svcEmergency,
      title: "Emergency Tyre Fitting",
      desc: "Rapid-response replacement for blown or damaged tyres. On-scene in minutes with the correct size, day or night.",
    },
    {
      slug: "mobile-tyre-replacement",
      icon: IconMobileFit,
      image: svcReplacement,
      title: "Mobile Tyre Replacement",
      desc: "Scheduled fitting at your home or workplace. Wide stock of major premium and budget brands fitted at your convenience.",
    },
    {
      slug: "mobile-puncture-repair",
      icon: IconPuncture,
      image: svcPuncture,
      title: "Puncture Repairs",
      desc: "Safe, British Standard compliant repairs completed on-site to get you moving without the cost of a new tyre.",
    },
    {
      slug: "locking-wheel-nut-removal",
      icon: IconLockNut,
      image: svcLocknut,
      title: "Locking Wheel Nut Removal",
      desc: "Specialist extraction of seized, damaged or lost locking wheel nuts without cosmetic damage to your alloys.",
    },
    {
      slug: "car-battery-replacement",
      icon: IconBattery,
      image: svcBattery,
      title: "Battery Replacement",
      desc: "On-site testing and rapid installation of heavy-duty vehicle batteries with comprehensive warranties included.",
    },
    {
      slug: "roadside-tyre-assistance",
      icon: IconRoadside,
      image: svcRoadside,
      title: "Roadside Assistance",
      desc: "Emergency mechanical support, wheel changes, and safety checks to resolve breakdowns on the spot.",
    },
  ];

  return (
    <section id="services" className="relative section-y bg-white">
      <div className="container-x">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              Every service you need,
              <br />
              <span className="italic font-display text-royal">delivered to your kerb.</span>
            </>
          }
          copy="From punctures to full replacements, our vans carry the premium tools, tyres and expertise to have you back on the road — fast."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-[20px] border border-border bg-white transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_30px_60px_-30px_rgba(0,43,133,0.35)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  fetchPriority="auto"
                  decoding="async"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/5 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 backdrop-blur shadow-lg shadow-navy/20">
                  <s.icon className="h-7 w-7" />
                </div>
              </div>
              <div className="relative flex flex-1 flex-col p-8">
                <h3 className="h3-display text-ink">{s.title}</h3>
                <p className="mt-3 text-[15px] md:text-base text-muted-foreground leading-[1.7] flex-1">
                  {s.desc}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-all group-hover:gap-2.5">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <Link
                to="/$slug"
                params={{ slug: s.slug }}
                aria-label={`${s.title} — read more`}
                className="absolute inset-0 z-10 rounded-[20px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const stats = [
    { n: "4", label: "Core Services" },
    { n: "24/7", label: "Always Available" },
    { n: "3", label: "Fitting Locations" },
    { n: "6", label: "Priority Areas" },
  ];
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      copy: "Location and access are checked before roadside work.",
    },
    {
      icon: Wrench,
      title: "Premium Equipment",
      copy: "Latest tools & calibrated torque wrenches.",
    },
    {
      icon: CheckCircle2,
      title: "Details Checked",
      copy: "Tyre size and vehicle details are confirmed before travel.",
    },
    { icon: Zap, title: "Fast Response", copy: "Rapid dispatch from vans across London." },
    {
      icon: Star,
      title: "Current Feedback",
      copy: "Read the latest customer feedback directly on Google.",
    },
    {
      icon: Sparkles,
      title: "Quote First",
      copy: "Call with your tyre details to confirm the suitable option.",
    },
  ];

  return (
    <section id="why" className="relative section-y bg-secondary/50">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionHeader
              eyebrow="Why Choose Us"
              title={
                <>
                  Trusted by London.
                  <br />
                  <span className="italic text-royal">Built for emergencies.</span>
                </>
              }
              copy="Mobile tyre fitting at suitable homes, workplaces and roadside locations across London, available day and night."
            />

            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="min-w-0 rounded-2xl bg-white border border-border p-4 sm:p-5 xl:p-4"
                >
                  <div className="min-w-0 font-display text-3xl sm:text-4xl xl:text-3xl text-navy leading-none break-words">
                    {s.n}
                  </div>
                  <div className="mt-2 min-w-0 text-[11px] sm:text-xs uppercase tracking-normal sm:tracking-wider text-muted-foreground font-semibold leading-4 break-words">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-navy/20">
              <img
                src={technician}
                alt="Professional technician working on car wheel"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                width={1400}
                height={1600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/15 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 backdrop-blur-xl p-5 border border-white/60">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-ink">
                    Current customer feedback
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink/80">
                  View the latest published ratings and comments on our live Google listing.
                </p>
                <a
                  href={GOOGLE_REVIEWS_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                >
                  Read reviews on Google →
                </a>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-navy text-white p-6 w-52 shadow-xl">
              <div className="text-xs uppercase tracking-widest text-white/60">Service area</div>
              <div className="mt-1 font-display text-2xl">Enfield</div>
              <div className="mt-2 text-xs text-white/70">and nearby London areas</div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white border border-border p-6 flex gap-4 hover:border-brand/40 transition-colors"
            >
              <div className="shrink-0 h-11 w-11 rounded-xl bg-brand/10 grid place-items-center text-brand">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-ink">{f.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.copy}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Call Us",
      copy: "Reach our 24/7 dispatch line — we'll confirm your location and vehicle.",
    },
    {
      n: "02",
      title: "We Dispatch",
      copy: "The nearest fully-stocked van is dispatched immediately.",
    },
    {
      n: "03",
      title: "Attendance Confirmed",
      copy: "We confirm availability and the suitable next step for the tyre.",
    },
    {
      n: "04",
      title: "Tyre Replaced",
      copy: "Fitted, torqued and balanced right at your location.",
    },
    {
      n: "05",
      title: "Back on the Road",
      copy: "The completed work is checked before you continue your journey.",
    },
  ];
  return (
    <section className="relative section-y bg-white">
      <div className="container-x">
        <SectionHeader
          eyebrow="How It Works"
          title={
            <>
              Five simple steps.
              <br />
              <span className="italic text-royal">One incredible service.</span>
            </>
          }
        />
        <div className="mt-10 md:mt-14 relative">
          <div className="hidden lg:block absolute top-[4.25rem] left-8 right-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative h-full rounded-2xl border border-border bg-white p-5 md:p-6 flex flex-col hover:border-brand/40 hover:shadow-[0_10px_30px_-15px_rgba(0,43,133,0.25)] transition-all"
              >
                <div className="relative z-10 h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-gradient-to-br from-navy to-royal grid place-items-center font-display text-base md:text-lg text-white shadow-sm shrink-0">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-lg md:text-xl font-semibold text-ink leading-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm md:text-[15px] text-muted-foreground leading-[1.6]">
                  {s.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COVERAGE ---------------- */
function Coverage() {
  const areas = ALL_LOCATION_SLUGS.map((slug) => ({
    name: LOCATIONS[slug].name,
    places: LOCATIONS[slug].postcode,
    slug,
  }));
  return (
    <section id="coverage" className="relative section-y bg-secondary/50 overflow-hidden">
      <div className="absolute inset-0 grain-bg opacity-30" />
      <div className="relative container-x">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          <div>
            <SectionHeader
              eyebrow="Coverage Areas"
              title={
                <>
                  Priority mobile coverage
                  <br />
                  <span className="italic text-royal">around Enfield.</span>
                </>
              }
              copy="Explore dedicated local information for Enfield and nearby towns, including postcodes, main routes and how to request help."
            />
            <a
              href={PHONE_HREF}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-navy text-white pl-3 pr-6 py-3 font-semibold hover:bg-brand transition-colors"
            >
              <span className="grid place-items-center h-9 w-9 rounded-full bg-brand text-white">
                <Phone className="h-4 w-4" />
              </span>
              Check My Postcode
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl bg-white border border-border p-6 overflow-hidden hover:border-brand/40 transition-colors"
              >
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand/5 group-hover:bg-brand/10 transition-colors" />
                <div className="relative flex items-center gap-2 text-brand">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-widest">Covered</span>
                </div>
                <h3 className="relative mt-2 h3-display text-ink">{a.name}</h3>
                <p className="relative mt-3 text-[15px] text-muted-foreground leading-[1.7]">
                  {a.places}
                </p>
                <Link
                  to="/$slug"
                  params={{ slug: a.slug }}
                  className="absolute inset-0"
                  aria-label={`Mobile tyre fitting in ${a.name}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BRANDS ---------------- */
type BrandEntry = { name: string; logo: string; fallback?: string };

const BRANDS_CACHE_KEY = "smt.brands.v2";
const LOGO_CACHE_KEY = "smt.logo-ok.v2";

async function fetchBrandsWithRetry(attempts = 3): Promise<BrandEntry[]> {
  for (let i = 0; i < attempts; i++) {
    try {
      // Use the browser HTTP cache. Logo URLs are immutable content-hashed
      // CDN assets, so serving a slightly stale manifest is safe.
      const r = await fetch("/brands.json", { cache: "default" });
      if (!r.ok) throw new Error(String(r.status));
      const d = await r.json();
      return (d.brands ?? []) as BrandEntry[];
    } catch {
      if (i === attempts - 1) throw new Error("brands fetch failed");
      await new Promise((res) => setTimeout(res, 400 * Math.pow(2, i)));
    }
  }
  return [];
}

function LogoImg({ brand, eager }: { brand: BrandEntry; eager?: boolean }) {
  const primaryUrl = assetUrl(brand.logo);
  const fallbackUrl = brand.fallback ? assetUrl(brand.fallback) : "";
  const okCache = useMemo<Record<string, string>>(() => {
    try {
      return JSON.parse(sessionStorage.getItem(LOGO_CACHE_KEY) || "{}");
    } catch {
      return {};
    }
  }, []);
  const cached = okCache[brand.name];
  // Ignore stale relative-path cache from earlier deploys
  const initial = cached && cached.startsWith("http") ? cached : primaryUrl;
  const [src, setSrc] = useState(initial);
  const [failed, setFailed] = useState(false);
  const attemptRef = useRef(0);
  const stageRef = useRef<"primary" | "fallback">(initial === fallbackUrl ? "fallback" : "primary");

  const handleError = () => {
    const stage = stageRef.current;
    const url = stage === "primary" ? primaryUrl : fallbackUrl;
    if (attemptRef.current < 2 && url) {
      attemptRef.current += 1;
      const delay = 500 * Math.pow(2, attemptRef.current - 1);
      setTimeout(
        () => setSrc(`${url}${url.includes("?") ? "&" : "?"}r=${attemptRef.current}`),
        delay,
      );
      return;
    }
    if (stage === "primary" && fallbackUrl) {
      stageRef.current = "fallback";
      attemptRef.current = 0;
      setSrc(fallbackUrl);
      return;
    }
    setFailed(true);
  };

  const handleLoad = () => {
    try {
      const clean = src.split(/[?&]r=/)[0];
      const next = { ...okCache, [brand.name]: clean };
      sessionStorage.setItem(LOGO_CACHE_KEY, JSON.stringify(next));
    } catch {
      /* ignore quota */
    }
  };

  if (failed) {
    return (
      <span className="flex items-center justify-center font-display text-lg md:text-xl font-semibold text-ink/60 whitespace-nowrap">
        {brand.name}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={`${brand.name} logo`}
      width={160}
      height={80}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "low"}
      onError={handleError}
      onLoad={handleLoad}
      className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500 ease-out"
    />
  );
}

function Brands() {
  const [brands, setBrands] = useState<BrandEntry[]>(() => {
    try {
      const cached = localStorage.getItem(BRANDS_CACHE_KEY);
      return cached ? (JSON.parse(cached) as BrandEntry[]) : [];
    } catch {
      return [];
    }
  });
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let alive = true;
    fetchBrandsWithRetry()
      .then((list) => {
        if (!alive || !list.length) return;
        setBrands(list);
        try {
          localStorage.setItem(BRANDS_CACHE_KEY, JSON.stringify(list));
        } catch {
          /* ignore quota */
        }
      })
      .catch(() => {
        /* keep cached */
      });
    return () => {
      alive = false;
    };
  }, []);

  // No JS preloader needed: logo URLs point to immutable content-hashed CDN
  // assets served with long-lived cache headers, so the browser cache handles
  // repeat loads instantly. The <img> tags start fetching on mount.

  const track = brands.length ? [...brands, ...brands] : [];
  return (
    <section className="py-14 md:py-16 lg:py-20 bg-white border-y border-border">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-royal">
            Trusted Manufacturers
          </div>
          <h2 className="mt-3 h2-display text-navy">
            Leading Tyre Brands <span className="italic text-royal">We Supply</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
            Genuine tyres from the world's most trusted manufacturers for all vehicle types.
          </p>
        </div>
      </div>

      <div
        className="mt-8 md:mt-10 relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          className="flex gap-6 md:gap-10 w-max animate-brand-scroll"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {track.map((b, i) => (
            <div
              key={`${b.name}-${i}`}
              className="shrink-0 h-12 md:h-16 w-28 md:w-36 flex items-center justify-center px-2"
            >
              <LogoImg brand={b} eager={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const shots = [
    { src: van, span: "md:col-span-2 md:row-span-2", alt: "Mobile tyre service van" },
    { src: tools, span: "", alt: "Professional tyre tools" },
    { src: tyreCloseup, span: "", alt: "Premium tyre close-up" },
    { src: luxuryCar, span: "md:col-span-2", alt: "Luxury car tyre service" },
    { src: london, span: "", alt: "London roads at dusk" },
    { src: emergency, span: "", alt: "Emergency roadside service" },
  ];
  return (
    <section className="section-y bg-secondary/40">
      <div className="container-x">
        <SectionHeader
          eyebrow="Gallery"
          title={
            <>
              On the road,
              <br />
              <span className="italic text-royal">every hour of every day.</span>
            </>
          }
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-4">
          {shots.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const GMB_URL = GOOGLE_REVIEWS_HREF;

function Testimonials() {
  const reviews = [
    {
      name: "Omar Achi",
      role: "Local Guide · 16 reviews",
      rating: 5,
      body: "Top service from Sam Tyres! Came to my doorstep and changed all my tyres, quick and easy with no hassle. Friendly guy and great service. 10/10 — would definitely recommend!",
    },
    {
      name: "Konrad",
      role: "Local Guide · 23 reviews",
      rating: 5,
      body: "Highly recommended — very professional service. Came within an hour and fixed everything properly. Good price as well. Will definitely use again if needed.",
    },
    {
      name: "Sarjeel Ahmad",
      role: "Google Review",
      rating: 5,
      body: "Great service! He came very quickly to repair my bike tyre puncture and did the job professionally. Friendly, fast, and reliable. Highly recommend Sams Mobile Tyres!",
    },
    {
      name: "Verified Customer",
      role: "Google Review",
      rating: 5,
      body: "The service was very good — arrived quicker than expected and sorted the tyre out quickly. Absolutely brilliant.",
    },
    {
      name: "Verified Customer",
      role: "Google Review",
      rating: 5,
      body: "Quick response (35 mins), good job, friendly guy, good price. Exactly what you need in an emergency.",
    },
    {
      name: "Verified Customer",
      role: "Google Review",
      rating: 5,
      body: "I'm so grateful — from 40 minutes arrival to finish was less than 30 minutes 🙌. Life-savers.",
    },
  ];

  // duplicate for seamless marquee loop
  const loop = [...reviews, ...reviews];

  return (
    <section id="reviews" className="section-y bg-white overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Reviews"
              title={
                <>
                  London drivers,
                  <br />
                  <span className="italic text-royal">telling their stories.</span>
                </>
              }
              copy="Rated 5.0 stars across 76 verified Google reviews."
            />

            <a
              href={GMB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-white px-5 py-4 shadow-sm hover:shadow-md hover:border-brand/40 transition-all"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#4285F4] via-[#EA4335] to-[#FBBC05] text-white font-bold">
                G
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-semibold text-ink">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  76 Google reviews ·{" "}
                  <span className="text-brand font-medium">See all on Google →</span>
                </div>
              </div>
            </a>
          </div>

          {/* Vertical marquee — pauses on hover */}
          <div
            className="relative h-[520px] group"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <div className="marquee-track flex flex-col gap-5 group-hover:[animation-play-state:paused]">
              {loop.map((r, k) => (
                <a
                  key={k}
                  href={GMB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl bg-gradient-to-br from-secondary/60 to-white border border-border p-7 hover:border-brand/40 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(r.rating)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <div className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-[#4285F4] via-[#EA4335] to-[#FBBC05] text-white text-[10px] font-bold">
                      G
                    </div>
                  </div>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-ink/90">
                    "{r.body}"
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand to-navy grid place-items-center text-white text-sm font-semibold">
                      {r.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-semibold text-ink text-sm">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.role}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <style>{`
              .marquee-track {
                animation: reviews-marquee 32s linear infinite;
                will-change: transform;
              }
              @keyframes reviews-marquee {
                from { transform: translateY(0); }
                to { transform: translateY(-50%); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="section-y bg-secondary/40">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="rounded-[2rem] overflow-hidden aspect-[5/6] shadow-2xl shadow-navy/15">
            <img
              src={van}
              alt="Sam's Mobile Tyres service van"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -top-6 -left-6 hidden md:block rounded-2xl bg-white border border-border p-6 w-56 shadow-xl">
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Open
            </div>
            <div className="font-display text-5xl text-navy">24/7</div>
            <div className="mt-1 text-xs text-muted-foreground">Family-run · London-based</div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeader
            eyebrow="About Us"
            title={
              <>
                Keeping
                <br />
                <span className="italic text-royal">London moving.</span>
              </>
            }
            copy="Sam's Mobile Tyres was founded on a simple idea: nobody should be stranded. We're a hands-on, local team — we still answer the phone ourselves, and we still turn up on time."
          />
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              ["Family-run", "Owner-operated since day one."],
              ["24/7 availability", "Every day of the year."],
              ["Local team", "Every technician lives in London."],
              ["Direct booking", "Call or WhatsApp — no call centre."],
            ].map(([t, c]) => (
              <div key={t} className="rounded-2xl bg-white border border-border p-5">
                <div className="font-semibold text-ink">{t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQs() {
  const faqs = [
    [
      "Are you really available 24/7?",
      "Yes — genuinely. We dispatch vans day and night, weekends, and bank holidays, across Greater London.",
    ],
    [
      "How quickly can you attend?",
      "Availability depends on location, traffic and the tyre required. Call with your postcode and tyre size for confirmation.",
    ],
    [
      "What areas do you cover?",
      "All 32 London boroughs plus surrounding Essex, Kent and Surrey. Call us and we'll confirm your postcode.",
    ],
    [
      "Do you fit tyres I've already bought?",
      "Yes — we're happy to fit customer-supplied tyres. Just let us know when you call.",
    ],
    [
      "What tyre brands do you carry?",
      "Michelin, Pirelli, Continental, Goodyear, Bridgestone, Hankook, Dunlop, Yokohama, BFGoodrich and mid-range budget options.",
    ],
    [
      "Can you repair punctures?",
      "Yes. If the damage is within safe repair limits (typically tread area, small puncture), we can repair professionally on-site.",
    ],
    [
      "Do you fit run-flat tyres?",
      "Absolutely. Our vans carry the specialist equipment required for run-flats and low-profile tyres.",
    ],
    [
      "How do I book?",
      "Call us on " + PHONE + ", send the tyre details by WhatsApp or use the contact form below.",
    ],
  ];
  return (
    <section id="faqs" className="section-y bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(60,131,246,0.08),transparent_60%)]" />
      <div className="relative container-x grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16">
        {/* Sticky left column */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            FAQs
          </div>
          <h2 className="mt-5 h2-display text-ink text-balance">
            Everything drivers ask us,
            <br />
            <span className="italic text-royal">answered plainly.</span>
          </h2>
          <p className="mt-5 p-body max-w-md text-muted-foreground">
            Straight answers on availability, pricing, coverage and fitting — no small print.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-8 hidden lg:inline-flex items-center gap-2 rounded-2xl bg-navy px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy/20 hover:-translate-y-0.5 transition-all"
          >
            <Phone className="h-4 w-4" /> Still stuck? Call {PHONE}
          </a>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map(([q, a], i) => (
            <FAQItem key={i} q={q} a={a} index={i + 1} defaultOpen={i === 0} />
          ))}
          <a
            href={PHONE_HREF}
            className="lg:hidden mt-6 flex items-center justify-center gap-2 rounded-2xl bg-navy px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-navy/20"
          >
            <Phone className="h-4 w-4" /> Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  q,
  a,
  index,
  defaultOpen = false,
}: {
  q: string;
  a: string;
  index: number;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`group rounded-2xl border bg-white transition-all ${
        open
          ? "border-brand/30 shadow-[0_12px_40px_-16px_rgba(60,131,246,0.35)]"
          : "border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 sm:gap-5 px-5 sm:px-7 py-5 text-left"
        aria-expanded={open}
      >
        <span
          className={`shrink-0 grid place-items-center h-9 w-9 rounded-xl text-xs font-bold tabular-nums transition-colors ${
            open ? "bg-navy text-white" : "bg-slate-100 text-navy group-hover:bg-slate-200"
          }`}
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          {String(index).padStart(2, "0")}
        </span>
        <span className="flex-1 min-w-0 font-display font-semibold text-base sm:text-lg text-ink leading-snug">
          {q}
        </span>
        <span
          className={`shrink-0 h-8 w-8 rounded-full grid place-items-center transition-all ${
            open ? "bg-brand text-white rotate-180" : "bg-slate-100 text-navy"
          }`}
          aria-hidden
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-7 pb-6 pl-[72px] sm:pl-[76px] -mt-1">
              <p className="text-[15px] sm:text-base text-muted-foreground leading-[1.75] max-w-2xl">
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


/* ---------------- GUIDES ---------------- */
function Guides() {
  const featured = ALL_GUIDE_SLUGS.slice(0, 6).map((slug) => GUIDES[slug]);
  return (
    <section id="guides" className="section-y bg-slate-50 border-t border-border/40">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Tyre & Safety Guides"
            title={
              <>
                Expert Tyre Care &amp; Safety Advice,
                <br />
                <span className="italic text-royal">Plain English.</span>
              </>
            }
            copy="Practical guides answering what London drivers search for — blowouts, punctures, UK tyre law and TPMS."
          />
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 font-semibold text-royal hover:text-brand transition-colors text-sm shrink-0"
          >
            Browse all guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((g) => (
            <Link
              key={g.slug}
              to="/$slug"
              params={{ slug: g.slug }}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-border/80 p-6 shadow-sm hover:shadow-md hover:border-brand/40 transition-all"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-royal/80">
                  Guide
                </span>
                <h3 className="mt-2 font-bold text-lg text-ink group-hover:text-royal transition-colors leading-snug">
                  {g.title}
                </h3>
                <p className="mt-2.5 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {g.intro}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-border/40 flex items-center gap-1.5 text-xs font-semibold text-royal group-hover:text-brand transition-colors">
                Read full guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  return (
    <section id="contact" className="section-y bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 grain-bg opacity-40" />
      <div className="relative container-x grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 lg:items-center">
        <div className="min-w-0">
          <SectionHeader
            light
            eyebrow="Contact"
            title={
              <>
                Get help now,
                <br />
                <span className="italic">or book ahead.</span>
              </>
            }
            copy="Call our 24/7 line, send the tyre details by WhatsApp or use the form and we will confirm availability."
          />

          {/* Quick-action CTAs */}
          <div className="mt-7 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-3 max-w-md">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand text-white px-4 py-3 text-sm sm:text-base font-semibold hover:bg-brand-2 active:scale-[0.98] transition shadow-lg shadow-brand/30"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm sm:text-base font-semibold hover:bg-white/15 active:scale-[0.98] transition"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M20.52 3.48A11.85 11.85 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.32-1.66a11.86 11.86 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.22-3.75.98 1-3.65-.24-.38a9.87 9.87 0 0 1-1.52-5.25c0-5.46 4.44-9.9 9.92-9.9 2.65 0 5.14 1.03 7.01 2.9a9.83 9.83 0 0 1 2.9 7.01c0 5.46-4.44 9.9-9.91 9.9Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
              </svg>
              WhatsApp
            </a>
          </div>

          <div className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3">
            <InfoRow
              icon={<Phone />}
              label="Emergency & Bookings"
              value={PHONE}
              href={PHONE_HREF}
            />
            <InfoRow
              icon={<Mail />}
              label="Email"
              value="samsmobiletyre@gmail.com"
              href="mailto:samsmobiletyre@gmail.com"
            />
            <InfoRow
              icon={<MapPin />}
              label="Base"
              value="93 Burncroft Ave, Enfield EN3 7JQ"
              href="https://maps.app.goo.gl/AYs5HNped5LyPiqb8"
            />
            <InfoRow
              icon={<MapPin />}
              label="Coverage"
              value="Enfield · North London · Essex · Herts · M25 corridor"
            />
            <InfoRow icon={<Clock />} label="Hours" value="Open 24 hours · 7 days a week" />
          </div>

          <a
            href="https://maps.app.goo.gl/AYs5HNped5LyPiqb8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 sm:mt-10 block rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] border border-white/10 group"
          >
            <iframe
              title="Sams Mobile Tyres — 93 Burncroft Ave, Enfield EN3 7JQ"
              className="w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=93+Burncroft+Ave,+Enfield+EN3+7JQ&output=embed"
            />
          </a>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const fd = new FormData(form);
            if (String(fd.get("website") || "")) return; // honeypot
            const name = String(fd.get("name") || "").trim();
            const phone = String(fd.get("phone") || "").trim();
            const postcode = String(fd.get("postcode") || "").trim();
            const vehicle = String(fd.get("vehicle") || "").trim();
            const msg = String(fd.get("message") || "").trim();
            setSending(true);
            setError(null);
            try {
              await submitToFormSubmit({
                name,
                phone,
                postcode,
                vehicle,
                message: msg,
                _subject: `Callback request from ${name || "customer"}${postcode ? ` — ${postcode}` : ""}`,
              });
              setSent(true);
              form.reset();
              trackEvent("callback_form_submit", { page_location: "/" });
              toast.success("Callback requested", {
                description: "We've received your details and will call you back shortly.",
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
          className="min-w-0 w-full rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 p-5 sm:p-7 lg:p-8 xl:p-10 lg:sticky lg:top-24"
        >
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/60 font-semibold">
            Send a message
          </div>
          <h3 className="mt-2 h3-display text-balance">Request a callback</h3>
          {/* Honeypot */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <Field label="Full name" name="name" required autoComplete="name" />
            <Field
              label="Phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
            />
            <Field label="Postcode" name="postcode" autoComplete="postal-code" />
            <Field label="Vehicle" name="vehicle" placeholder="e.g. BMW 3 Series" />
          </div>
          <div className="mt-3 sm:mt-4">
            <Field label="How can we help?" name="message" textarea />
          </div>
          <button
            type="submit"
            disabled={sending}
            aria-busy={sending}
            className="mt-5 sm:mt-6 w-full inline-flex justify-center items-center gap-2 rounded-full bg-brand text-white py-3.5 sm:py-4 text-sm sm:text-base font-semibold hover:bg-brand-2 active:scale-[0.99] transition shadow-lg shadow-brand/30 disabled:opacity-80 disabled:cursor-wait"
          >
            {sending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending your message…
              </>
            ) : sent ? (
              <>
                Message sent
                <CheckCircle2 className="h-4 w-4" />
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>

          {error && <p className="mt-3 text-xs text-red-300 text-center">{error}</p>}
          {sent && !error && (
            <p className="mt-3 text-xs text-emerald-300 text-center">
              Thanks — we'll be in touch shortly.
            </p>
          )}
          <p className="mt-3 text-[11px] sm:text-xs text-white/50 text-center">
            For immediate help, call{" "}
            <a
              href={PHONE_HREF}
              className="text-white/80 font-semibold underline underline-offset-2 whitespace-nowrap"
            >
              {PHONE}
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrap: React.ElementType = href ? "a" : "div";
  return (
    <Wrap
      {...(href ? { href } : {})}
      className="group flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur px-4 sm:px-5 py-3.5 sm:py-4 hover:border-brand/60 transition-colors"
    >
      <span className="h-9 w-9 sm:h-11 sm:w-11 shrink-0 rounded-lg sm:rounded-xl bg-brand/20 grid place-items-center text-brand [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-[0.25em] text-white/50 font-semibold">
          {label}
        </span>
        <span className="block break-words text-sm sm:text-base font-semibold text-white group-hover:text-brand transition-colors">
          {value}
        </span>
      </span>
    </Wrap>
  );
}

function Field({
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
    "w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 sm:py-3.5 text-base sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition";
  return (
    <label className="block min-w-0">
      <span className="block text-xs font-semibold text-white/70 mb-1.5 sm:mb-2">
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

/* ---------------- FOOTER ---------------- */
