import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { submitToFormSubmit, FormSubmitError } from "@/lib/formsubmit";
import { trackEvent } from "@/lib/analytics";
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

const SITE_URL = "https://www.samsmobiletyres.co.uk";
const URL = `${SITE_URL}/contact`;

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: URL,
  name: "Contact Sam's Mobile Tyres",
  about: { "@id": `${SITE_URL}/#business` },
  mainEntity: {
    "@id": `${SITE_URL}/#business`,
    "@type": "Organization",
    name: "Sam's Mobile Tyres",
    telephone: "+44 7949 891689",
    email: "samsmobiletyre@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "93 Burncroft Avenue",
      addressLocality: "Enfield",
      addressRegion: "London",
      postalCode: "EN3 7JQ",
      addressCountry: "GB",
    },
  },
};

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Sam's Mobile Tyres | 24/7 Phone & WhatsApp" },
      {
        name: "description",
        content:
          "Contact Sam's Mobile Tyres 24/7 for emergency tyre fitting, puncture repairs or home callouts in London & M25. Call or WhatsApp 07949 891689.",
      },
      {
        name: "keywords",
        content:
          "contact mobile tyre fitter london, sams mobile tyres phone number, emergency tyre fitting phone number london, whatsapp tyre service",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Contact Sam's Mobile Tyres | 24/7 Phone & WhatsApp" },
      {
        property: "og:description",
        content:
          "Contact Sam's Mobile Tyres 24/7 for emergency tyre fitting, puncture repairs or home callouts in London & M25. Call or WhatsApp 07949 891689.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(contactSchema) }],
  }),
});

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (String(fd.get("website") || "")) return; // honeypot
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const postcode = String(fd.get("postcode") || "").trim();
    const msg = String(fd.get("message") || "").trim();

    setSending(true);
    setError(null);
    try {
      await submitToFormSubmit({
        name,
        phone,
        email,
        postcode,
        message: msg,
        _subject: `Website enquiry from ${name || "customer"}${postcode ? ` — ${postcode}` : ""}`,
      });
      setSent(true);
      form.reset();
      trackEvent("contact_form_submit", { page_location: "/contact" });
      toast.success("Message sent", {
        description: "We'll get back to you shortly. For emergencies, call +44 7949 891689.",
      });
    } catch (err) {
      const msg =
        err instanceof FormSubmitError
          ? err.userMessage
          : "Couldn't send right now. Please call or WhatsApp us on +44 7949 891689.";
      setError(msg);
      toast.error("Message not sent", { description: msg });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Header />
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Reach us any way. <span className="text-brand">Any hour.</span>
          </>
        }
        copy="One dispatcher, live on the phone 24/7. Or WhatsApp us, or send a message below — whichever works for your situation. Emergency calls always jump the queue."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      {/* Quick response cards */}
      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                Icon: Phone,
                title: "Call Now",
                sub: "Fastest for emergencies",
                cta: PHONE,
                href: PHONE_HREF,
                accent: "bg-brand text-white",
                external: false,
              },
              {
                Icon: MessageSquare,
                title: "WhatsApp",
                sub: "Best for quotes & photos",
                cta: "Message us",
                href: WHATSAPP_HREF,
                accent: "bg-[#0f9d63] text-white",
                external: true,
              },
              {
                Icon: Mail,
                title: "Email",
                sub: "For invoices & fleet",
                cta: "samsmobiletyre@gmail.com",
                href: "mailto:samsmobiletyre@gmail.com",
                accent: "bg-navy text-white",
                external: false,
              },
            ].map(({ Icon, title, sub, cta, href, accent, external }, i) => (
              <motion.a
                key={title}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group card-premium card-premium-hover p-7 flex flex-col"
              >
                <span
                  className={`inline-grid h-12 w-12 place-items-center rounded-2xl ${accent} shadow-lg`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div className="mt-5 font-display text-xl font-bold text-ink">{title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{sub}</div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-brand">
                  <span className="truncate">{cta}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map + Info */}
      <section className="section-y bg-slate-50 border-y border-slate-100">
        <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: info + map */}
          <div className="min-w-0">
            <SectionHeader
              eyebrow="Depot & Hours"
              title={
                <>
                  Based in Enfield. <span className="text-brand italic">Reach across London.</span>
                </>
              }
            />
            <div className="mt-8 space-y-4">
              <InfoRow
                Icon={MapPin}
                label="Depot address"
                value="93 Burncroft Avenue, Enfield, EN3 7JQ, United Kingdom"
              />
              <InfoRow
                Icon={Clock}
                label="Opening hours"
                value="24 hours · 7 days · 365 days a year"
              />
              <InfoRow Icon={Phone} label="Dispatch" value={PHONE} href={PHONE_HREF} />
              <InfoRow
                Icon={Mail}
                label="Email"
                value="samsmobiletyre@gmail.com"
                href="mailto:samsmobiletyre@gmail.com"
              />
            </div>
            <div className="mt-8 rounded-3xl overflow-hidden border border-border shadow-lg aspect-[4/3]">
              <iframe
                title="Sam's Mobile Tyres depot in Enfield"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19836.2!2d-0.09!3d51.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEnfield!5e0!3m2!1sen!2suk!4v0"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="min-w-0 lg:sticky lg:top-24">
            <div className="rounded-3xl bg-white border border-border p-6 sm:p-8 shadow-[0_30px_60px_-30px_rgba(0,43,133,0.25)]">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                Send a message
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                Not urgent? <span className="text-brand italic">Send details here.</span>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Booked replacement, quote request, fleet enquiry — we reply within an hour during
                the working day. For emergencies, please call.
              </p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 rounded-2xl border border-brand/25 bg-brand/5 p-6 text-center"
                >
                  <CheckCircle2 className="mx-auto h-10 w-10 text-brand" />
                  <div className="mt-4 font-display text-xl font-bold text-ink">
                    Message received.
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We'll reply within the hour. For anything urgent, call {PHONE}.
                  </p>
                </motion.div>
              ) : (
                <form className="mt-7 space-y-4" onSubmit={onSubmit}>
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Full name"
                      name="name"
                      autoComplete="name"
                      required
                      placeholder="Jane Smith"
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+44 7…"
                    />
                  </div>
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    placeholder="you@example.com"
                  />
                  <Field
                    label="Postcode / location"
                    name="postcode"
                    autoComplete="postal-code"
                    placeholder="e.g. N14 5AB"
                  />
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      How can we help?
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Vehicle, tyre size (if known), what's going on…"
                      className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-base sm:text-sm text-ink placeholder:text-muted-foreground/70 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all resize-none"
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={sending}
                    aria-busy={sending}
                    className="btn-base btn-primary w-full justify-center text-sm mt-2 disabled:opacity-80 disabled:cursor-wait"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending your message…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send message
                      </>
                    )}
                  </button>

                  {error && <p className="text-xs text-red-600 text-center">{error}</p>}
                  <p className="text-[11px] text-muted-foreground text-center">
                    By sending, you consent to us replying by phone, WhatsApp or email.
                  </p>
                </form>
              )}
            </div>
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

function InfoRow({
  Icon,
  label,
  value,
  href,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl bg-white border border-border p-5 hover:border-brand/40 transition-colors">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 font-display font-bold text-ink break-words">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email" | "numeric" | "url" | "search" | "none" | "decimal";
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-base sm:text-sm text-ink placeholder:text-muted-foreground/70 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all"
      />
    </label>
  );
}
