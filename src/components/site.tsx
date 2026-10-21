import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Zap,
  Wrench,
  Truck,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";

import emergency from "@/assets/emergency.webp";
import socialFacebook from "@/assets/social-facebook.png";
import socialInstagram from "@/assets/social-instagram.png";
import socialTiktok from "@/assets/social-tiktok.png";
import socialGmb from "@/assets/social-gmb.png";
import { SERVICES, ALL_SERVICE_SLUGS } from "@/lib/services-data";
import { LOCATIONS, ALL_LOCATION_SLUGS } from "@/lib/location-pages";

/* ---------------- Shared constants & helpers ---------------- */
export const ASSET_ORIGIN = "https://project--48b9a15f-c4eb-438f-9b7a-d9564dc43f27.lovable.app";
export const assetUrl = (path: string) =>
  path.startsWith("/__l5e/") ? `${ASSET_ORIGIN}${path}` : path;
export const logoUrl = "/sams-logo.png";

export const PHONE = "+44 7949 891689";
export const PHONE_HREF = "tel:+447949891689";
export const WHATSAPP_HREF =
  "https://wa.me/447949891689?text=Hi,%20I%20need%20mobile%20tyre%20fitting%20assistance.%20Please%20let%20me%20know%20your%20availability%20and%20price.%20Thank%20you.";
export const GOOGLE_REVIEWS_HREF = "https://maps.app.goo.gl/moP3Vtcz4BQn7d1j8";

export const FACEBOOK_HREF = "https://www.facebook.com/share/1e7bwE3G4G/";
export const INSTAGRAM_HREF = "https://www.instagram.com/samsmobiletyres";
export const TIKTOK_HREF = "https://vm.tiktok.com/ZGd93j6g8/";
// Single canonical Google Business Profile link, reused everywhere (schema
// sameAs, footer social icon, reviews CTAs) so there's exactly one GBP URL
// on the site instead of several different short-links.
export const GMB_HREF = GOOGLE_REVIEWS_HREF;

export const SOCIAL_LINKS: { label: string; href: string; src: string }[] = [
  { label: "Facebook", href: FACEBOOK_HREF, src: socialFacebook },
  { label: "Instagram", href: INSTAGRAM_HREF, src: socialInstagram },
  { label: "TikTok", href: TIKTOK_HREF, src: socialTiktok },
  { label: "Google My Business", href: GMB_HREF, src: socialGmb },
];

export const siteNav: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Emergency", to: "/emergency-mobile-tyre-fitting" },
  { label: "Coverage", to: "/coverage-areas" },
  { label: "Reviews", to: "/reviews" },
  { label: "About", to: "/about" },
  { label: "Guides", to: "/guides" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

/* ---------------- HEADER ---------------- */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: "rgba(255,255,255,0.9)",
          boxShadow: scrolled
            ? "0 1px 0 rgba(15,23,42,0.06), 0 10px 30px -18px rgba(0, 43, 133, 0.18)"
            : "0 1px 0 rgba(15,23,42,0.06), 0 8px 24px -20px rgba(0,43,133,0.2)",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl backdrop-saturate-150"
      >
        <div className="container-x h-14 sm:h-16 flex items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-center shrink-0"
            aria-label="Sam's Mobile Tyres — Home"
          >
            <img
              src={logoUrl}
              alt="Sam's Mobile Tyres"
              width={200}
              height={64}
              className="h-8 sm:h-9 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {siteNav.map((n) => (
              <span key={n.to} className="inline-flex items-center gap-1">
                {n.label === "Services" ? (
                  <ServicesMegaMenu />
                ) : (
                  <Link
                    to={n.to}
                    activeOptions={{ exact: true }}
                    activeProps={{
                      className:
                        "px-3 py-2 text-[13.5px] font-semibold rounded-lg text-navy bg-slate-900/[0.05]",
                    }}
                    inactiveProps={{
                      className:
                        "px-3 py-2 text-[13.5px] font-medium rounded-lg text-slate-700 hover:text-navy hover:bg-slate-900/[0.04]",
                    }}
                    className="tracking-[-0.005em] transition-colors"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {n.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 shrink-0">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-semibold text-navy transition-all hover:bg-slate-900/[0.05]"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="tabular-nums">{PHONE}</span>
            </a>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-[13px] font-semibold text-white shadow-[0_6px_20px_-6px_rgba(60,131,246,0.6)] transition-all hover:-translate-y-[1px] hover:shadow-[0_10px_28px_-8px_rgba(60,131,246,0.75)]"
              style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
            >
              Book Emergency
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            className="lg:hidden grid place-items-center h-10 w-10 rounded-full text-navy transition-colors hover:bg-slate-900/[0.05]"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden bg-gradient-to-br from-navy via-[#001a5e] to-navy text-white"
          >
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_10%,rgba(60,131,246,0.35),transparent_45%),radial-gradient(circle_at_80%_90%,rgba(60,131,246,0.25),transparent_45%)]" />

            <div className="relative flex items-center justify-between px-5 sm:px-6 h-16">
              <img
                src={logoUrl}
                alt="Sam's Mobile Tyres"
                className="h-9 w-auto brightness-0 invert"
              />
              <button
                onClick={() => setOpen(false)}
                className="grid place-items-center h-10 w-10 rounded-full bg-white/10 border border-white/15 backdrop-blur-md"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
              className="relative px-5 sm:px-8 pt-4 pb-40 overflow-y-auto max-h-[calc(100vh-4rem)]"
            >
              <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
                {siteNav.map((n, i) => (
                  <motion.div
                    key={n.to}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-5 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white/90 hover:text-white transition-colors"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-xs font-mono text-white/40 w-6">0{i + 1}</span>
                        {n.label}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4"
              >
                <div className="mb-3">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-semibold">
                    Popular Services
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-1">
                  {FEATURED_SERVICE_SLUGS.slice(0, 8).map((slug) => {
                    const s = SERVICES[slug];
                    if (!s) return null;
                    return (
                      <Link
                        key={slug}
                        to="/$slug"
                        params={{ slug }}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between py-2.5 px-2 rounded-lg text-[14px] text-white/85 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <span className="truncate">{s.h1.replace(/ in London$/, "")}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-white/40 shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
              >
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-semibold">
                  24/7 Emergency Line
                </div>
                <a href={PHONE_HREF} className="mt-1 block font-display text-2xl font-bold">
                  {PHONE}
                </a>
                <div className="mt-1 text-sm text-white/60">
                  Available day &amp; night · London wide
                </div>
              </motion.div>
            </motion.nav>

            <div className="absolute inset-x-0 bottom-0 p-4 pb-6 bg-gradient-to-t from-navy via-navy/95 to-transparent">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-3 rounded-2xl bg-brand text-white py-4 font-bold text-base shadow-[0_20px_50px_-10px_rgba(60,131,246,0.6)]"
              >
                <Phone className="h-5 w-5" />
                Call Now — {PHONE}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------------- SERVICES MEGA MENU (desktop) ---------------- */
const FEATURED_SERVICE_SLUGS = [
  "emergency-mobile-tyre-fitting",
  "car-recovery",
  "mobile-tyre-replacement",
  "mobile-puncture-repair",
  "roadside-tyre-assistance",
  "jump-start-service",
  "fleet-mobile-tyre-services",
  "van-tyre-replacement",
  "same-day-tyre-fitting",
  "premium-tyre-brands",
  "tpms-sensor-replacement",
] as const;

type MegaGroup = {
  label: string;
  icon: typeof Zap;
  slugs: readonly string[];
};

const MEGA_GROUPS: MegaGroup[] = [
  {
    label: "Emergency & Roadside",
    icon: Zap,
    slugs: [
      "emergency-mobile-tyre-fitting",
      "car-recovery",
      "roadside-tyre-assistance",
      "jump-start-service",
      "same-day-tyre-fitting",
    ],
  },
  {
    label: "Tyres & Fitting",
    icon: Wrench,
    slugs: [
      "mobile-tyre-replacement",
      "mobile-puncture-repair",
      "tpms-sensor-replacement",
      "premium-tyre-brands",
    ],
  },
  {
    label: "Vehicles & Business",
    icon: Truck,
    slugs: ["van-tyre-replacement", "fleet-mobile-tyre-services"],
  },
];

function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  let closeTimer: ReturnType<typeof setTimeout> | undefined;
  const cancelClose = () => {
    if (closeTimer) clearTimeout(closeTimer);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        onFocus={() => setOpen(true)}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className="inline-flex items-center gap-1 px-3 py-2 text-[13.5px] font-medium rounded-lg text-slate-700 hover:text-navy hover:bg-slate-900/[0.04] tracking-[-0.005em] transition-colors"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        Services
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full pt-2 w-[680px] max-w-[94vw] z-50"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]">
              <div className="p-4 sm:p-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-5 gap-y-4">
                  {MEGA_GROUPS.map((group) => (
                    <div key={group.label} className="min-w-0">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-1.5">
                        {group.label}
                      </div>
                      <ul className="space-y-0.5">
                        {group.slugs.slice(0, 5).map((slug) => {
                          const s = SERVICES[slug];
                          if (!s) return null;
                          const label = s.h1
                            .replace(/ in London$/, "")
                            .replace(/^Mobile /, "")
                            .replace(/^24\/7 /, "");
                          return (
                            <li key={slug}>
                              <Link
                                to="/$slug"
                                params={{ slug }}
                                className="block truncate rounded-md px-2 py-1.5 -mx-2 text-[13px] text-slate-700 hover:bg-slate-50 hover:text-navy transition-colors"
                              >
                                {label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/60 px-5 py-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-navy hover:text-brand transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {PHONE}
                </a>
                <Link
                  to="/faqs"
                  className="inline-flex items-center gap-1 text-[12.5px] font-medium text-slate-500 hover:text-navy transition-colors"
                >
                  FAQs
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer className="bg-[#001a52] text-white/80">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center" aria-label="Home">
              <img
                src={logoUrl}
                alt="Sam's Mobile Tyres"
                width={240}
                height={80}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-sm">
              London's trusted 24/7 mobile tyre fitting service. Premium tyres, professional
              technicians, delivered to your location — day or night.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center gap-2 font-display text-2xl text-white hover:text-brand"
            >
              <Phone className="h-5 w-5" /> {PHONE}
            </a>
            <a
              href={GOOGLE_REVIEWS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs font-semibold text-white hover:bg-white/15 transition-colors"
            >
              <Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
              Read our current Google reviews
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                Follow us
              </div>
              <div className="mt-3 flex items-center gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-transparent transition-transform hover:scale-110"
                  >
                    <img
                      src={s.src}
                      alt={`${s.label} logo`}
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-10 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <FooterCol
            title="Services"
            items={[
              { label: "24/7 Emergency Fitting", to: "/emergency-mobile-tyre-fitting" },
              { label: "24/7 Car Recovery", to: "/car-recovery" },
              { label: "Puncture Repair", to: "/mobile-puncture-repair" },
              { label: "Roadside Assistance", to: "/roadside-tyre-assistance" },
              { label: "Jump Start Service", to: "/jump-start-service" },
              { label: "Fleet Services", to: "/fleet-mobile-tyre-services" },
              { label: "Van Tyre Replacement", to: "/van-tyre-replacement" },
              { label: "Same-Day Fitting", to: "/same-day-tyre-fitting" },
            ]}
          />
          <FooterCol
            title="Coverage"
            items={ALL_LOCATION_SLUGS.map((slug) => ({
              label: LOCATIONS[slug].name,
              to: `/${slug}`,
            }))}
          />
          <FooterCol
            title="Company"
            items={[
              { label: "About", to: "/about" },
              { label: "Reviews", to: "/reviews" },
              { label: "Contact", to: "/contact" },
              { label: "FAQs", to: "/faqs" },
              { label: "Coverage Areas", to: "/coverage-areas" },
              { label: "Guides", to: "/guides" },
            ]}
          />

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Get in touch
            </div>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-start gap-3 text-white/70 hover:text-brand transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-brand transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>WhatsApp us 24/7</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:samsmobiletyre@gmail.com"
                  className="flex items-start gap-3 text-white/70 hover:text-brand transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>samsmobiletyre@gmail.com</span>
                </a>
              </li>
              <li>
                <Link
                  to="/coverage-areas"
                  className="flex items-start gap-3 text-white/70 hover:text-brand transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>Enfield, London — 24/7 mobile service</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Sam's Mobile Tyres. All rights reserved.</div>
          <div className="flex items-center gap-6 text-sm">
            <span>
              Powered by{" "}
              <span className="font-semibold text-white/90 tracking-wide">Grow Your Business</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white">{title}</div>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i, idx) => (
          <li key={`${i.label}-${idx}`}>
            <Link to={i.to as string} className="text-white/60 hover:text-brand transition-colors">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- MOBILE STICKY CTA ---------------- */
export function MobileStickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(env(safe-area-inset-bottom),12px)] bg-gradient-to-t from-navy via-navy/95 to-navy/0"
        >
          <div className="grid grid-cols-2 gap-2">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-navy py-3.5 text-sm font-bold shadow-lg"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand text-white py-3.5 text-sm font-bold shadow-[0_15px_40px_-10px_rgba(60,131,246,0.7)]"
            >
              Book Emergency <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- WHATSAPP FAB ---------------- */
export function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [nudge, setNudge] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setMounted(true), 900);
    const t2 = window.setTimeout(() => setNudge(true), 4500);
    const t3 = window.setTimeout(() => setNudge(false), 8500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  const WhatsAppGlyph = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 0C7.163 0 0 7.163 0 16c0 2.833.732 5.582 2.115 8.032L0 32l8.145-2.145A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0Zm0 29.331a13.28 13.28 0 0 1-6.775-1.864l-.487-.29-5.047 1.331 1.35-4.923-.316-.502A13.276 13.276 0 0 1 2.669 16C2.669 8.65 8.65 2.669 16 2.669S29.331 8.65 29.331 16c0 7.35-5.98 13.331-13.331 13.331Z"
      />
      <path
        fill="currentColor"
        d="M23.36 19.36c-.4-.2-2.37-1.17-2.74-1.3-.37-.13-.63-.2-.9.2-.27.4-1.03 1.3-1.27 1.57-.23.27-.47.3-.87.1-.4-.2-1.7-.63-3.23-2s-2.57-3.07-2.87-3.57c-.3-.5-.03-.77.17-.97.18-.18.4-.47.6-.7.2-.23.27-.4.4-.67.13-.27.07-.5-.03-.7-.1-.2-.9-2.17-1.23-2.97-.33-.78-.66-.67-.9-.68l-.77-.01c-.27 0-.7.1-1.07.5s-1.4 1.37-1.4 3.33 1.43 3.87 1.63 4.13c.2.27 2.83 4.33 6.87 6.08 3.03 1.31 3.65 1.05 4.31.98.66-.07 2.13-.87 2.43-1.7.3-.83.3-1.55.21-1.7-.08-.15-.35-.25-.75-.45Z"
      />
    </svg>
  );

  return (
    <>
      {mounted && (
        <div className="fixed right-3 sm:right-5 z-[60] bottom-[calc(env(safe-area-inset-bottom,0px)+78px)] md:bottom-4 md:right-4">
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                className="absolute bottom-[calc(100%+14px)] right-0 w-[300px] sm:w-[340px] origin-bottom-right"
              >
                <div className="overflow-hidden rounded-[20px] bg-white shadow-[0_16px_32px_-18px_rgba(6,20,50,0.25)] ring-1 ring-black/[0.06]">
                  <div className="relative px-4 py-3.5 bg-[#0f9d63] text-white">
                    <div className="relative flex items-center gap-3">
                      <div className="relative shrink-0">
                        <div className="h-10 w-10 rounded-full bg-white grid place-items-center text-navy font-black tracking-tight">
                          <span className="text-[15px]">SM</span>
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0f9d63]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[13.5px] font-bold leading-tight">
                          Sam's Mobile Tyres
                        </div>
                        <div className="text-[11px] text-white/85 leading-tight flex items-center gap-1.5 mt-0.5">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" />
                          Message us on WhatsApp
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        aria-label="Close"
                        className="h-7 w-7 grid place-items-center rounded-full text-white/80 hover:text-white hover:bg-white/15"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div
                    className="relative px-4 pt-4 pb-4"
                    style={{
                      backgroundColor: "#ECE5DD",
                      backgroundImage: "radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)",
                      backgroundSize: "6px 6px",
                    }}
                  >
                    <div className="relative max-w-[85%]">
                      <div className="relative rounded-[14px] rounded-tl-[4px] bg-white px-3.5 py-2.5 ring-1 ring-black/[0.04]">
                        <p className="text-[13.5px] leading-relaxed text-[#111b21]">
                          👋 Hi there! Puncture, flat tyre or need a fresh set fitted at your
                          location?
                        </p>
                        <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[#667781]">
                          <span>Just now</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/80 px-2.5 py-1 text-[10px] text-[#667781]">
                      <span className="flex gap-0.5">
                        {[0, 0.15, 0.3].map((d) => (
                          <motion.span
                            key={d}
                            className="h-1 w-1 rounded-full bg-[#25D366]"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 0.9, repeat: Infinity, delay: d }}
                          />
                        ))}
                      </span>
                      typing…
                    </div>
                  </div>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-3 px-4 py-3.5 bg-white hover:bg-neutral-50 border-t border-black/[0.06] transition-colors"
                  >
                    <span className="text-[13px] font-semibold text-navy">
                      Start the conversation
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-[12px] font-bold text-white">
                      <WhatsAppGlyph className="h-3.5 w-3.5" />
                      Open WhatsApp
                    </span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close chat" : "Open WhatsApp chat"}
            initial={{ opacity: 0, scale: 0.7, y: 12 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              boxShadow: open
                ? "0 6px 14px -8px rgba(6,20,50,0.30)"
                : "0 8px 18px -10px rgba(6,20,50,0.30)",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative grid place-items-center h-14 w-14 sm:h-[60px] sm:w-[60px] rounded-full text-white overflow-hidden"
            style={{ background: open ? "#0f1b3d" : "#25D366" }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="relative"
                >
                  <ChevronDown className="h-6 w-6" strokeWidth={2.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="wa"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="relative"
                >
                  <WhatsAppGlyph className="h-[26px] w-[26px] sm:h-7 sm:w-7" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}
    </>
  );
}

/* ---------------- EMERGENCY BAND ---------------- */
export function EmergencyBand() {
  return (
    <section id="emergency" className="relative section-y bg-navy text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={emergency}
          alt="Emergency roadside tyre service on motorway"
          className="h-full w-full object-cover opacity-40"
          loading="lazy"
          decoding="async"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      </div>
      <div className="relative container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            Emergency Line — Open Now
          </div>
          <h2 className="mt-6 h2-display text-balance">
            Stranded? <br />
            <span className="italic">We're already on our way.</span>
          </h2>
          <p className="mt-6 max-w-[620px] text-white/80 leading-[1.7] text-base md:text-lg">
            Puncture at 3am. Blowout on the M25. Locked wheel nut. Whatever it is, call and tell us
            where you are and what has happened.
          </p>
        </div>
        <div className="lg:justify-self-end w-full max-w-md">
          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 p-8 shadow-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-white/60 font-semibold">
              24/7 Emergency
            </div>
            <a
              href={PHONE_HREF}
              className="mt-3 block font-display text-4xl md:text-5xl leading-none tracking-tight whitespace-nowrap hover:text-brand transition-colors"
            >
              {PHONE}
            </a>
            <p className="mt-4 text-white/70 text-sm">
              Share your location, registration and tyre size so we can confirm the suitable help.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white hover:bg-[#1ebe57] transition-colors"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M16.002 3.2C8.94 3.2 3.204 8.937 3.204 16c0 2.26.596 4.466 1.727 6.412L3.2 28.8l6.55-1.712A12.79 12.79 0 0016 28.8h.005c7.062 0 12.8-5.737 12.8-12.8 0-3.42-1.332-6.633-3.75-9.052A12.71 12.71 0 0016.002 3.2zm0 23.44h-.004a10.63 10.63 0 01-5.418-1.483l-.388-.23-3.886 1.016 1.037-3.79-.253-.39a10.62 10.62 0 01-1.63-5.663c0-5.87 4.777-10.646 10.647-10.646 2.844 0 5.517 1.108 7.525 3.12a10.58 10.58 0 013.117 7.53c0 5.87-4.777 10.646-10.647 10.646zm5.837-7.976c-.32-.16-1.893-.934-2.186-1.04-.293-.107-.507-.16-.72.16-.214.32-.827 1.04-1.014 1.253-.186.214-.373.24-.693.08-.32-.16-1.35-.498-2.573-1.586-.95-.848-1.593-1.895-1.78-2.215-.186-.32-.02-.494.14-.653.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.987-2.374-.26-.624-.523-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.574 1.147 3.094 1.307 3.307.16.213 2.253 3.44 5.463 4.827.763.33 1.36.526 1.824.674.767.244 1.464.21 2.016.128.615-.092 1.893-.774 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
              </svg>
              Message on WhatsApp
            </a>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {["Nights", "Weekends", "Holidays"].map((x) => (
                <div key={x} className="rounded-xl bg-white/5 border border-white/10 py-3">
                  <CheckCircle2 className="h-4 w-4 mx-auto text-brand" />
                  <div className="mt-1 text-xs font-medium">{x}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION HEADER ---------------- */
export function SectionHeader({
  eyebrow,
  title,
  copy,
  light,
  center,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase ${
          light ? "text-white/60" : "text-brand"
        }`}
      >
        <span className={`h-px w-8 ${light ? "bg-white/30" : "bg-brand/40"}`} />
        {eyebrow}
      </div>
      <h2 className={`mt-5 h2-display text-balance ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-5 text-base md:text-lg leading-[1.7] max-w-[680px] ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-muted-foreground"}`}
        >
          {copy}
        </p>
      )}
    </motion.div>
  );
}

/* ---------------- PAGE HERO ---------------- */
export function PageHero({
  eyebrow,
  title,
  copy,
  breadcrumb,
  bgImage,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  breadcrumb: { label: string; to?: string }[];
  bgImage?: string;
}) {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-navy text-white overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="Sam's Mobile Tyres service background"
            className="h-full w-full object-cover opacity-90"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/45 to-navy/80" />
        </div>
      )}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_10%,rgba(60,131,246,0.25),transparent_45%),radial-gradient(circle_at_80%_90%,rgba(60,131,246,0.2),transparent_45%)]" />
      <div className="relative container-x">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-white/60"
        >
          {breadcrumb.map((b, i) => {
            const isLast = i === breadcrumb.length - 1;
            return (
              <span key={`${b.label}-${i}`} className="flex items-center gap-2">
                {b.to && !isLast ? (
                  <Link to={b.to} className="hover:text-white transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-white" : ""}>{b.label}</span>
                )}
                {!isLast && <span className="text-white/30">/</span>}
              </span>
            );
          })}
        </nav>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            {eyebrow}
          </div>
          <h1 className="mt-6 h1-display text-white text-balance">{title}</h1>
          {copy && (
            <p className="mt-6 text-base sm:text-lg md:text-xl text-white/75 leading-[1.7] max-w-2xl">
              {copy}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white shadow-[0_15px_40px_-10px_rgba(60,131,246,0.7)] hover:-translate-y-[1px] transition-transform"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-5 py-3 text-sm font-bold text-white hover:bg-white/15 transition-colors"
            >
              WhatsApp Us
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
