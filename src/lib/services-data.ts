// Master data source for all service pages.
// Each entry renders a complete, SEO/AEO/GEO-optimised service page
// via src/routes/services.$slug.tsx. Content is unique per service.

import imgEmergencyMobileTyreFitting from "@/assets/svc/emergency-mobile-tyre-fitting.webp";
import imgMobileTyreReplacement from "@/assets/svc/mobile-tyre-replacement.webp";
import imgMobilePunctureRepair from "@/assets/svc/mobile-puncture-repair.webp";
import imgRoadsideTyreAssistance from "@/assets/svc/roadside-tyre-assistance.webp";
import imgLockingWheelNutRemoval from "@/assets/svc/locking-wheel-nut-removal.webp";
import imgCarBatteryReplacement from "@/assets/svc/car-battery-replacement.webp";
import imgJumpStartService from "@/assets/svc/jump-start-service.webp";
import imgFleetMobileTyreServices from "@/assets/svc/fleet-mobile-tyre-services.webp";
import imgVanTyreReplacement from "@/assets/svc/van-tyre-replacement.webp";
import imgSameDayTyreFitting from "@/assets/svc/same-day-tyre-fitting.webp";
import imgPremiumTyreBrands from "@/assets/svc/premium-tyre-brands.webp";
import imgWinterTyres from "@/assets/svc/winter-tyres.webp";
import imgSummerTyres from "@/assets/svc/summer-tyres.webp";
import imgAllSeasonTyres from "@/assets/svc/all-season-tyres.webp";
import imgWheelBalancing from "@/assets/svc/wheel-balancing.webp";
import imgTpmsSensorReplacement from "@/assets/svc/tpms-sensor-replacement.webp";
import imgTyrePressureCheck from "@/assets/svc/tyre-pressure-check.webp";
import imgEmergencyBlowoutAssistance from "@/assets/svc/emergency-blowout-assistance.webp";
import imgLockingWheelKeyRecovery from "@/assets/svc/locking-wheel-key-recovery.webp";
import imgHomeTyreFitting from "@/assets/svc/home-tyre-fitting.webp";
import imgWorkplaceTyreFitting from "@/assets/svc/workplace-tyre-fitting.webp";
import imgMobileTyreFittingLuxuryCars from "@/assets/svc/mobile-tyre-fitting-luxury-cars.webp";

export const SITE_URL = "https://www.samsmobiletyres.co.uk";

export type ServiceFAQ = { q: string; a: string };
export type ServiceStep = { title: string; body: string };
export type ServiceEntry = {
  slug: string;
  category: "emergency" | "fitting" | "repair" | "battery" | "specialist";
  h1: string;
  eyebrow: string;
  navLabel: string; // short label for menus
  metaTitle: string; // ≤ 60 chars ideal
  metaDescription: string; // ≤ 158 chars
  hero: string; // image import
  keywords: {
    primary: string;
    secondary: string[];
  };
  intro: string[]; // 2–3 paragraphs, ~150 words total
  quickFacts: { label: string; value: string }[];
  benefits: { title: string; body: string }[]; // 6
  process: ServiceStep[]; // 4–5
  vehicleTypes: string[];
  tyreBrands?: string[];
  coverageAreas: string[];
  whyUs: { title: string; body: string }[]; // 4
  comparison?: { headers: [string, string, string]; rows: [string, string, string][] };
  pricingGuide?: { label: string; range: string; notes: string }[];
  faqs: ServiceFAQ[]; // 8–12
  related: string[]; // list of related slugs
  // Optional overrides — defaults live in service-page-defaults.ts
  signs?: { title: string; body: string }[];
  stats?: { value: string; label: string; caption: string }[];
  localSeo?: string;
};


// Shared building blocks
const COVERAGE_LONDON = [
  "Central London (Zones 1–2)",
  "North London (Enfield, Barnet, Haringey, Camden, Islington)",
  "East London (Hackney, Tower Hamlets, Newham, Redbridge, Waltham Forest)",
  "South London (Southwark, Lambeth, Wandsworth, Lewisham, Croydon)",
  "West London (Kensington, Chelsea, Hammersmith, Ealing, Hounslow)",
  "Essex & M25 corridor (Ilford, Romford, Chigwell, Loughton, Epping)",
];

const ALL_BRANDS = [
  "Michelin", "Continental", "Bridgestone", "Pirelli", "Goodyear",
  "Dunlop", "Hankook", "Yokohama", "Falken", "Kumho",
  "Nexen", "Toyo", "BFGoodrich",
];

// -----------------------------------------------------------------------------
// SERVICES
// -----------------------------------------------------------------------------
export const SERVICES: Record<string, ServiceEntry> = {
  "emergency-mobile-tyre-fitting": {
    slug: "emergency-mobile-tyre-fitting",
    category: "emergency",
    navLabel: "24/7 Emergency Fitting",
    h1: "24/7 Emergency Mobile Tyre Fitting in London",
    eyebrow: "24/7 Rapid Response",
    metaTitle: "24/7 Emergency Mobile Tyre Fitting London | Sam's",
    metaDescription:
      "24/7 emergency mobile tyre fitting across London. Blowouts, punctures & roadside replacements. Median arrival 28 minutes. Call +44 7949 891689.",
    hero: imgEmergencyMobileTyreFitting,
    keywords: {
      primary: "24/7 emergency mobile tyre fitting London",
      secondary: [
        "emergency tyre fitting near me",
        "24 hour tyre replacement",
        "mobile tyre emergency service",
        "roadside tyre fitting",
        "emergency tyre repair London",
        "night tyre fitting London",
      ],
    },
    intro: [
      "A blowout on the North Circular at midnight. A slow puncture in a hotel car park at 3am. A shredded sidewall on the school run. When your tyre fails, you need a fully-equipped mobile tyre van at your kerb — not a two-hour wait for recovery. Sam's Mobile Tyres runs a 24/7 emergency mobile tyre fitting service across every London borough, the M25 corridor and into Essex, with a live-answered dispatch line and a median arrival time of 28 minutes.",
      "Every emergency van is stocked with premium replacement tyres from Michelin, Continental, Bridgestone, Pirelli and eighteen other brands, a full torque-controlled fitting rig, wheel balancer, and card payment terminal. There is no call-out charge, no night surcharge, and no waiting-room queue — we arrive, we fit, you drive away with a photo receipt and the final torque reading texted to your phone.",
    ],
    quickFacts: [
      { label: "Response time", value: "28 min median (Zones 1–4)" },
      { label: "Availability", value: "24 hours · 7 days · 365 nights" },
      { label: "Call-out fee", value: "None · no callout" },
      { label: "Payment", value: "Card, Apple/Google Pay, contactless" },
    ],
    benefits: [
      { title: "Live-answered 24/7", body: "One direct number, answered by an on-shift dispatcher every hour of every day — never an automated queue." },
      { title: "No night surcharge", body: "Emergency fitting at 3am costs the same as 3pm. The 'convenience premium' games end here." },
      { title: "Fully equipped vans", body: "Torque-controlled tools, on-board balancer, and 40+ tyre sizes carried between vans and depot." },
      { title: "Premium tyres only", body: "Michelin, Continental, Bridgestone, Pirelli, Goodyear and 21 other trusted brands. No grey imports, ever." },
      { title: "Fully insured", body: "£10m public liability. Photo receipts. Certificates on request for corporate customers." },
      { title: "Roadside safe", body: "Every technician is Highways England trained for hard-shoulder and lay-by work; hi-vis, cones and warning lights fitted as standard." },
    ],
    process: [
      { title: "You call", body: "One number, answered live. Give us your postcode, tyre size (from the sidewall) and vehicle." },
      { title: "We confirm & quote", body: "Total price agreed before a van moves. Card details taken to secure the slot." },
      { title: "Rapid dispatch", body: "The nearest fully-loaded van is dispatched with a live ETA texted to your phone." },
      { title: "On-site fit", body: "Balanced, torqued and photographed. Old tyre disposed of legally. Full VAT receipt emailed." },
    ],
    vehicleTypes: ["Cars", "SUVs & 4x4s", "Vans up to 3.5t", "Light commercials", "Motorhomes", "Executive & luxury"],
    tyreBrands: ALL_BRANDS,
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Median 28 min arrival", body: "Six vans on shift, always. Live traffic-aware dispatch, not a booked-slot lottery." },
      { title: "10 years, one team", body: "Family-run since 2015. Same technicians, same standards, no franchise middlemen." },
      { title: "5.0★ · 76 reviews", body: "Verified Google Business Profile reviews — the highest rating band across London mobile tyre firms." },
      { title: "Fully insured & DVSA-trained", body: "Every tech DVSA-certified. £10m public liability. Certificates on request." },
    ],
    pricingGuide: [
      { label: "Puncture repair (repairable)", range: "Call for quote", notes: "BS AU 159 internal patch." },
      { label: "Emergency tyre replacement", range: "Call for quote", notes: "Depends on brand, size and speed rating." },
      { label: "Locking wheel nut removal", range: "Call for quote", notes: "Alloy-safe extraction, most stripped or lost keys." },
    ],
    faqs: [
      { q: "How quickly can you arrive?", a: "Median arrival across London Zones 1–4 is 28 minutes. Outer boroughs and Essex are typically 35–50 minutes depending on traffic and time of day." },
      { q: "Do you provide emergency tyre fitting at night?", a: "Yes. The line is answered live 24 hours a day, 365 days a year. There is no night surcharge and no premium for weekends or bank holidays." },
      { q: "Can you replace tyres at my home?", a: "Yes — driveways, private car parks, apartment kerbside, hotel forecourts and service stations are all standard callouts." },
      { q: "Do you cover motorways?", a: "We attend lay-bys, service stations and hard-shoulder-safe locations on the M25, M11, M1, M4, A406 and A13. For live-lane incidents on smart motorways we coordinate with Highways England before dispatch." },
      { q: "What tyre brands do you carry?", a: "26 premium brands including Michelin, Continental, Bridgestone, Pirelli, Goodyear, Dunlop, Hankook, Yokohama, Falken, Kumho, Nexen, Toyo and BFGoodrich. Specific sizes are dispatched with the assigned van." },
      { q: "Is there a call-out fee?", a: "No. The price you're quoted is the total price. No call-out charge, no fitting fee added on afterwards." },
      { q: "How do I pay?", a: "Card, Apple Pay, Google Pay and contactless on-site. Corporate and fleet accounts are billed on 30-day invoice." },
      { q: "Do you fit run-flat tyres?", a: "Yes — all vans are equipped to fit RunFlat, self-sealing, and standard tyres up to 22\" including staggered fitments for BMW, Mercedes, Audi and Range Rover." },
      { q: "What if my wheel is damaged?", a: "Cosmetic kerb damage is fine — we can still fit. Structural cracks or bent alloys we photograph and honestly flag before fitting; we won't fit a tyre onto an unsafe wheel." },
      { q: "Can you help if my locking wheel nut key is lost?", a: "Yes. Our emergency vans carry a full locking-nut removal kit. In most cases we can extract the nut without alloy damage and refit a standard nut in the same visit." },
    ],
    related: ["mobile-puncture-repair", "roadside-tyre-assistance", "same-day-tyre-fitting", "emergency-blowout-assistance", "locking-wheel-nut-removal"],
  },

  "mobile-tyre-replacement": {
    slug: "mobile-tyre-replacement",
    category: "fitting",
    navLabel: "Mobile Tyre Replacement",
    h1: "Mobile Tyre Replacement in London",
    eyebrow: "New Tyres · Fitted On-Site",
    metaTitle: "Mobile Tyre Replacement London | Home & Office Fitting",
    metaDescription:
      "Premium mobile tyre replacement at your home or office across London. Michelin, Continental, Bridgestone & more — balanced, fitted, disposed. Book online.",
    hero: imgMobileTyreReplacement,
    keywords: {
      primary: "mobile tyre replacement London",
      secondary: ["home tyre replacement", "office tyre replacement", "mobile tyre changing", "premium tyre fitting", "family vehicle tyres"],
    },
    intro: [
      "Replacing tyres shouldn't cost you half a day off work. Sam's Mobile Tyres brings the fitting bay to your driveway, office car park or kerbside — anywhere in Greater London and the M25 corridor. We stock 26 premium tyre brands, balance every wheel to sub-5g precision on an on-board Hunter-grade balancer, and dispose of your old tyres in fully-licensed environmental facilities.",
      "Whether you're planning a full four-tyre changeover on a family SUV, matching a pair on the rear of a rear-wheel-drive Mercedes, or replacing a single premium tyre on an executive BMW, we bring the correct compound, load rating and speed index — matched exactly to your vehicle's V5 and door-jamb placard.",
    ],
    quickFacts: [
      { label: "Typical visit", value: "45 – 90 minutes for four tyres" },
      { label: "Balancing", value: "Included on every wheel" },
      { label: "Tyre brands", value: "26 premium (no budget imports)" },
      { label: "Disposal", value: "Included, environment-agency licensed" },
    ],
    benefits: [
      { title: "Fits in your day", body: "Book a 90-minute slot at your home, office or gym — no drop-off, no wait, no Uber home." },
      { title: "26 premium brands", body: "Full choice: Michelin, Continental, Bridgestone, Pirelli, Goodyear, Dunlop, Hankook, Yokohama and 18 more." },
      { title: "Balanced in front of you", body: "Every wheel spun on an on-board dynamic balancer with weights positioned to OEM specification." },
      { title: "Speed-rating matched", body: "V, W, Y and Y+ speed ratings matched exactly — critical for insurance and MOT compliance." },
      { title: "Old tyres handled", body: "Old tyres taken away and processed by an Environment Agency licensed recycler. Certificates on request." },
      { title: "Torque-controlled fitting", body: "Digital torque wrenches calibrated weekly. Final torque reading photographed and texted to you." },
    ],
    process: [
      { title: "Quote by size or reg", body: "Text or WhatsApp your reg or the tyre size from the sidewall. We reply with a total price for OEM-spec replacement." },
      { title: "Pick your slot", body: "Same day, next day, weekend or evening — pick the 90-minute window that works for you." },
      { title: "We arrive with the tyres", body: "The van rolls up loaded with your chosen tyres, valves, weights, and a clean workspace mat." },
      { title: "Fit, balance, photograph", body: "Every wheel balanced, every nut torqued, every step photographed and sent to you by text." },
    ],
    vehicleTypes: ["Family cars", "SUVs & 4x4s", "Executive saloons", "Vans up to 3.5t", "Hybrids & EVs (Tesla, Polestar, ID)", "Classics & modern classics"],
    tyreBrands: ALL_BRANDS,
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Family-run since 2015", body: "Same team, same technicians, same standards on every job — no rotating franchise fitters." },
      { title: "Photo receipts", body: "Every fit includes photographs of the tyre serial, tread depth and torque reading." },
      { title: "5-star Google rating", body: "5.0★ across 76 verified Google reviews — highest band across London mobile fitters." },
      { title: "No hidden costs", body: "Balancing, valves, disposal and VAT all included in the quoted price." },
    ],
    faqs: [
      { q: "How much does mobile tyre replacement cost in London?", a: "Prices vary by tyre size, brand and speed rating. Text or WhatsApp your reg or sidewall size and we'll confirm a total price within minutes — all quotes include balancing, valves, disposal and VAT. No callout fees." },
      { q: "How long does replacing four tyres take?", a: "A full four-tyre changeover including balancing typically takes 60–90 minutes on our van. A single tyre is usually 25–35 minutes." },
      { q: "Can you fit tyres at my office?", a: "Yes — office car parks, retail parks, gyms and even multi-storey car parks with sufficient headroom (2.1m+). We just need reasonable access around the vehicle." },
      { q: "Do you carry EV-rated tyres?", a: "Yes. Tesla Model 3, Model Y, Model S, Polestar 2, VW ID.4, Kia EV6 and Audi e-tron all use specific EV-compound tyres — we stock the exact spec." },
      { q: "Can you fit run-flat tyres?", a: "Yes, including staggered BMW/Mercedes fitments and self-sealing tyres. All vans carry the appropriate bead-seating tools." },
      { q: "Will you dispose of my old tyres?", a: "Yes, included as standard. Old tyres are removed and processed through Environment Agency licensed recyclers." },
      { q: "Do you offer any warranty?", a: "All tyres carry full manufacturer UK warranty. On workmanship we guarantee our fitting for the life of the tyre." },
      { q: "Do you handle wheel alignment?", a: "Alignment requires a fixed rig and isn't part of a standard mobile fit. We'll flag any obvious uneven wear on your old tyres and recommend a partner alignment garage if needed." },
    ],
    related: ["premium-tyre-brands", "wheel-balancing", "home-tyre-fitting", "workplace-tyre-fitting", "same-day-tyre-fitting"],
  },

  "mobile-puncture-repair": {
    slug: "mobile-puncture-repair",
    category: "repair",
    navLabel: "Puncture Repair",
    h1: "Mobile Puncture Repair in London",
    eyebrow: "Fix — Don't Replace",
    metaTitle: "Mobile Puncture Repair London | BS AU 159 Compliant",
    metaDescription:
      "British Standard BS AU 159 compliant mobile puncture repair across London. Internal plug & patch quoted upfront on the call — under 30 minutes at your kerb.",
    hero: imgMobilePunctureRepair,
    keywords: {
      primary: "puncture repair London",
      secondary: ["mobile puncture repair", "tyre puncture service", "flat tyre repair", "BS AU 159 puncture repair"],
    },
    intro: [
      "A nail in the tread is not a write-off. When a puncture is inside the repairable area and there's no sidewall damage, a correctly-fitted internal plug-and-patch will last the remaining life of the tyre — and cost a fraction of a replacement. Our mobile puncture repair service across London and the M25 corridor follows British Standard BS AU 159, the only legally-recognised standard for road-going puncture repair in the UK.",
      "Every repair is done from the inside of the tyre, on a wheel dismounted from the vehicle — never a plug-only 'string' repair from the outside, which is legal for temporary use only and fails MOT. If a puncture is not repairable to BS AU 159, we'll tell you honestly on the spot and offer a matched replacement.",
    ],
    quickFacts: [
      { label: "Standard", value: "BS AU 159 (UK legal standard)" },
      { label: "Pricing", value: "Quoted upfront on the call" },
      { label: "Time on-site", value: "25 – 35 minutes" },
      { label: "Repair location", value: "Central tread only, ≤ 6mm hole" },
    ],
    benefits: [
      { title: "Legal & MOT-compliant", body: "Internal plug-and-patch to BS AU 159. Passes MOT, fully insurable, road-legal for the tyre's remaining life." },
      { title: "Fraction of a new tyre", body: "A fraction of a full replacement — quoted upfront on the call. When the tyre still has plenty of tread, repair is the smart call." },
      { title: "At your location", body: "Repaired at your driveway, office car park or roadside — no dropping the wheel at a garage." },
      { title: "Honest assessment", body: "We photograph the puncture and flag anything that makes the tyre unrepairable, before starting." },
      { title: "Balanced after", body: "Every repaired wheel is rebalanced on our dynamic balancer before re-fitting — vibration-free driving." },
      { title: "Under 35 minutes", body: "Most repairs are complete inside 30 minutes from van arrival to you driving away." },
    ],
    process: [
      { title: "Locate the leak", body: "Wheel dismounted, submerged and inspected — every leak point marked, not just the obvious one." },
      { title: "Assess for repair", body: "Position, size and depth checked against BS AU 159. Sidewall or shoulder damage means replacement." },
      { title: "Internal plug & patch", body: "Combination plug/patch bonded from the inside of the tyre. Cured. Sealed." },
      { title: "Rebalance & refit", body: "Wheel dynamically rebalanced, torqued to spec, and refitted. Photo receipt sent." },
    ],
    vehicleTypes: ["Cars & saloons", "SUVs & crossovers", "Vans (with repairable tread)", "Executive & luxury", "Hybrid & EV (compound-safe repair)"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "BS AU 159 every time", body: "The only UK-legal repair standard. String plugs from outside the tyre fail MOT — we never fit them." },
      { title: "Honest triage", body: "If it's not safely repairable, we say so — never a bodge to make a booking pay." },
      { title: "Fully insured", body: "£10m public liability. Every repair guaranteed against workmanship failure for the tyre's remaining life." },
      { title: "Live-answered line", body: "Speak to a technician within seconds — not a chatbot, not a queue." },
    ],
    comparison: {
      headers: ["", "Internal repair (BS AU 159)", "External 'string' plug"],
      rows: [
        ["MOT legal", "Yes", "No (temporary only)"],
        ["Insurance compliant", "Yes", "No"],
        ["Pricing", "Repair — quoted upfront", "Full replacement — quoted upfront"],
        ["Life expectancy", "Remaining life of tyre", "Days to weeks"],
      ],
    },
    faqs: [
      { q: "Can a punctured tyre be repaired?", a: "Yes — provided the puncture is in the central tread (the middle three-quarters of the tyre), no larger than 6mm, and there is no sidewall or shoulder damage. Run-flat tyres driven flat are usually replacement-only." },
      { q: "How long does puncture repair take?", a: "From van arrival to you driving away is typically 25–35 minutes. Most of that is the dismount, internal patch, cure, rebalance and refit — the plug itself is the fastest part." },
      { q: "How much does mobile puncture repair cost?", a: "Repairs are quoted upfront on the call — no callout fees, no surprises. Every repair includes balancing, VAT and full BS AU 159 certification. Call +44 7949 891689 for a live quote." },
      { q: "Is a puncture repair as safe as a new tyre?", a: "For repairs inside the BS AU 159 parameters, yes — the patch bonds chemically to the tyre carcass and lasts the remaining life of the tyre. Millions of BS AU 159 repairs are driven safely every year." },
      { q: "Will a repaired tyre fail an MOT?", a: "No — a correctly done BS AU 159 internal repair passes MOT. The only puncture repairs that fail MOT are external string plugs, or repairs in the sidewall/shoulder area." },
      { q: "Can you repair a run-flat?", a: "Only if the tyre hasn't been driven whilst deflated. Most run-flats that have been driven flat have internal structural damage and must be replaced — we'll inspect and advise honestly." },
      { q: "What if the puncture is unrepairable?", a: "We'll show you the damage, explain why, and quote a matched replacement on the spot. No pressure — you're free to source elsewhere; you'll only pay a small call-out toward the inspection." },
      { q: "Do you fix slow punctures?", a: "Yes — slow punctures are often the easiest to repair because the tyre hasn't been run damagingly flat. Book us before the tyre goes fully down." },
    ],
    related: ["emergency-mobile-tyre-fitting", "mobile-tyre-replacement", "roadside-tyre-assistance", "wheel-balancing", "tyre-pressure-check"],
  },

  "roadside-tyre-assistance": {
    slug: "roadside-tyre-assistance",
    category: "emergency",
    navLabel: "Roadside Tyre Assistance",
    h1: "Roadside Tyre Assistance in London",
    eyebrow: "Roadside Rescue · 24/7",
    metaTitle: "Roadside Tyre Assistance London | 24/7 Flat Tyre Help",
    metaDescription:
      "24/7 roadside tyre assistance across London and the M25 corridor. Flat tyre help, on-scene repair or replacement — usually within 30 minutes.",
    hero: imgRoadsideTyreAssistance,
    keywords: {
      primary: "roadside tyre assistance London",
      secondary: ["emergency roadside tyre service", "flat tyre help London", "roadside tyre repair", "24 hour tyre help"],
    },
    intro: [
      "When you're stopped on a hard shoulder, a lay-by or the pavement at the end of a residential street, roadside tyre assistance is not the same as booking a fitting slot. It's an emergency service that has to arrive fast, work safely in live traffic, and have the correct tyre on the van when it gets there. That is what we specialise in.",
      "Our roadside assistance covers London and the M25 corridor 24 hours a day. Every van carries cones, warning triangles, hi-vis kit and rotating amber beacons. Every technician is Highways-England trained for hard-shoulder work. And every job includes card-on-site payment, a photo receipt and a full torque reading before you drive away.",
    ],
    quickFacts: [
      { label: "Attendance", value: "24/7 · 365" },
      { label: "Median arrival", value: "28 minutes" },
      { label: "Hi-vis & cones", value: "Standard on every van" },
      { label: "Motorways", value: "M25 · M1 · M4 · M11 · A406 · A13" },
    ],
    benefits: [
      { title: "Highways-trained crew", body: "Every technician trained for hard-shoulder, lay-by and smart-motorway refuge area work." },
      { title: "Live-answered dispatch", body: "One number, one dispatcher, live-answered day or night — never a callback." },
      { title: "Cones, beacons, hi-vis", body: "Roadside safety kit on every van — the site is made safe before any wheel comes off." },
      { title: "Fit or repair", body: "We're not just recovery — the van has the tyres, tools and balancer to finish the job on-site." },
      { title: "Card on-site", body: "Card, contactless and Apple/Google Pay taken at the roadside. Corporate 30-day invoicing available." },
      { title: "Photo receipts", body: "Tyre, tread and torque photographed and texted — proof of a safe, correct repair." },
    ],
    process: [
      { title: "Call & locate", body: "Give us your exact location — a what3words, motorway marker, or dropped pin all work. We confirm safety." },
      { title: "Coordinate access", body: "For live motorway incidents we coordinate with Highways England / police before dispatch." },
      { title: "On-scene assessment", body: "Site made safe with cones and beacons. Puncture assessed — repair to BS AU 159 or replace." },
      { title: "Fit & photograph", body: "Wheel balanced, torqued, photographed. You drive away with a full receipt on your phone." },
    ],
    vehicleTypes: ["Cars", "Vans up to 3.5t", "SUVs & 4x4s", "Executive & luxury", "Motorhomes"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Roadside-specialist crew", body: "Trained specifically for live-traffic work — this isn't a driveway service that also does emergencies." },
      { title: "Fully insured", body: "£10m public liability. Certificates on request for corporate roadside contracts." },
      { title: "No night surcharge", body: "The same price at 3am as at 3pm. Emergencies don't come with premium invoices." },
      { title: "5.0★ · 76 reviews", body: "Highest verified Google rating band across London mobile tyre providers." },
    ],
    faqs: [
      { q: "Can you attend hard-shoulder incidents?", a: "For hard shoulders on smart motorways we coordinate with Highways England before attending. For lay-bys and service stations we can attend immediately." },
      { q: "What if I've driven on the flat?", a: "Standard tyres are usually a replacement-only after being driven flat — the sidewall shreds internally. We'll assess honestly on scene and quote a matched replacement." },
      { q: "Do you cover the M25?", a: "Yes — the M25 anti-clockwise and clockwise plus the M1, M4, M11, A406 and A13 are core roadside coverage areas." },
      { q: "Can you unlock my locking wheel nut on the roadside?", a: "Yes. Every roadside van carries a full locking-nut removal kit — most stripped or lost-key nuts come off without alloy damage." },
      { q: "Is there a call-out fee?", a: "No. The quoted price is the total. No call-out, no arrival fee, no premium for out-of-hours." },
      { q: "How do I pay if my card is inside a locked car?", a: "We can take payment over the phone by any authorised card holder. Bank transfer is also accepted for corporate accounts." },
      { q: "Do you attend collisions?", a: "For tyre-only damage from a kerb strike or pothole, yes. If the vehicle is damaged beyond the tyre we'll recommend a recovery partner." },
      { q: "Can you replace on a pavement in Central London?", a: "Yes — most of Central London, subject to safe access around the vehicle. Congestion charge and ULEZ compliance are the driver's responsibility." },
    ],
    related: ["emergency-mobile-tyre-fitting", "emergency-blowout-assistance", "mobile-puncture-repair", "jump-start-service", "same-day-tyre-fitting"],
  },

  "locking-wheel-nut-removal": {
    slug: "locking-wheel-nut-removal",
    category: "specialist",
    navLabel: "Locking Wheel Nut Removal",
    h1: "Mobile Locking Wheel Nut Removal in London",
    eyebrow: "Lost Key · Stripped Socket · No Damage",
    metaTitle: "Locking Wheel Nut Removal London | Mobile & Alloy-Safe",
    metaDescription:
      "Mobile locking wheel nut removal across London. Lost key, stripped socket, damaged nut — we extract without damaging your alloy. Same-day.",
    hero: imgLockingWheelNutRemoval,
    keywords: {
      primary: "locking wheel nut removal",
      secondary: ["lost wheel nut key", "damaged locking wheel nut", "stripped wheel nut", "wheel nut removal London"],
    },
    intro: [
      "A locking wheel nut you can't get off is more than an inconvenience — it stops you replacing a tyre, changing your wheels, or moving the car after a puncture. Our mobile locking wheel nut removal service across London can extract almost any locking wheel nut without damaging the alloy, the hub or the wheel bolt seat, and refit a new locking or standard nut in the same visit.",
      "We come with a full multi-brand extraction kit covering all common OEM locking systems — McGard, Peugeot, Ford, VW, BMW, Mercedes-Benz, Audi, Volvo, Vauxhall, Toyota, Nissan and the vast majority of aftermarket systems. If the master key is lost, if the socket has spun, or if a previous fitter has damaged the nut, we can usually still get it off first visit.",
    ],
    quickFacts: [
      { label: "Extraction time", value: "15 – 45 minutes per nut" },
      { label: "Pricing", value: "Quoted upfront on the call" },
      { label: "Alloy damage", value: "None in >98% of cases" },
      { label: "Replacement nut", value: "Fitted same visit" },
    ],
    benefits: [
      { title: "Alloy-safe extraction", body: "Purpose-built extraction sockets grip the outside of the nut cleanly, without touching the alloy face." },
      { title: "Most brands covered", body: "McGard, Peugeot, VW, Ford, BMW, Mercedes, Audi, Volvo, Vauxhall, Toyota, Nissan and most aftermarket." },
      { title: "Replacement in same visit", body: "New standard or locking nut fitted immediately — you drive away complete." },
      { title: "Mobile — no tow needed", body: "Extraction done at your location. No need to recover the vehicle to a specialist garage." },
      { title: "Torque-controlled refit", body: "Replacement nut torqued to the manufacturer's spec with a calibrated wrench and photographed." },
      { title: "Fully insured work", body: "£10m public liability. On the rare occasion of any alloy damage, our insurance covers the repair." },
    ],
    process: [
      { title: "Send us a photo", body: "WhatsApp a clear photo of the locking nut. We identify the brand and confirm we can extract." },
      { title: "Book a slot", body: "Same-day mobile visit — home, work, kerbside. No dropping the car at a garage." },
      { title: "Extract cleanly", body: "Purpose-built extraction socket grips the outer face and unscrews the nut without spinning on the alloy." },
      { title: "Refit & torque", body: "New nut fitted, torqued to spec, photographed. Every locking system's master key handed to you." },
    ],
    vehicleTypes: ["All cars", "All vans", "SUVs & 4x4s", "Motorhomes", "Classics"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Multi-brand kit", body: "One of the widest extraction kits in London — no wasted trip because 'we don't have that one'." },
      { title: "Photo record", body: "Every extraction photographed before and after, so alloy condition is documented." },
      { title: "Replacement stocked", body: "Standard and locking replacement nuts stocked for all common OEM patterns." },
      { title: "Roadside-capable", body: "Extraction can be done at the roadside as part of an emergency callout — not just at home." },
    ],
    faqs: [
      { q: "Can you remove a locking wheel nut without the key?", a: "In almost all cases, yes. Our extraction kit grips the outside of the nut and unscrews it — the master key is helpful but not essential." },
      { q: "Will removal damage my alloy?", a: "In over 98% of extractions there is no alloy damage. The extraction sockets are engineered to grip only the nut's outer face." },
      { q: "How long does it take?", a: "Most extractions take 15–30 minutes per nut. Very seized or corroded nuts occasionally take up to 45 minutes." },
      { q: "What if only the master key is lost?", a: "That's the simplest case — the nut is still functional; we extract with the correct pattern extraction socket and refit a replacement locking set." },
      { q: "Do you supply replacement locking nuts?", a: "Yes — standard chrome, black, or a fresh McGard set fitted the same visit. Prices quoted before we begin." },
      { q: "Can you do this at the roadside?", a: "Yes — locking-nut extraction is often part of an emergency callout when a driver can't change a puncture." },
      { q: "What if my nut is stripped or damaged?", a: "Purpose-built extraction sockets grip below the damaged surface. Even fully rounded nuts are usually removable." },
      { q: "How much does it cost?", a: "Priced by condition and brand of locking set — confirmed upfront on the call before we begin. No callout fees. Call +44 7949 891689 for a live quote." },
    ],
    related: ["locking-wheel-key-recovery", "emergency-mobile-tyre-fitting", "roadside-tyre-assistance", "mobile-tyre-replacement", "mobile-puncture-repair"],
  },

  "car-battery-replacement": {
    slug: "car-battery-replacement",
    category: "battery",
    navLabel: "Battery Replacement",
    h1: "Mobile Car Battery Replacement in London",
    eyebrow: "OEM-Grade Batteries · Fitted On-Site",
    metaTitle: "Mobile Car Battery Replacement London | Bosch, Varta, Yuasa",
    metaDescription:
      "Mobile car battery replacement across London. Genuine Bosch, Varta and Yuasa batteries, delivered and fitted on-site with full BMS coding. 24/7.",
    hero: imgCarBatteryReplacement,
    keywords: {
      primary: "mobile battery replacement London",
      secondary: ["car battery fitting", "flat battery service", "mobile battery replacement", "BMS coding London"],
    },
    intro: [
      "Modern car batteries are more than a lead-acid box. Start-stop systems need AGM or EFB chemistry, and every replacement on a modern German, Japanese or Korean car requires the Battery Management System (BMS) to be coded to the new battery — otherwise the charging profile will over-charge and destroy the new battery within months.",
      "Sam's Mobile Tyres replaces batteries at your home, workplace or roadside across London, with genuine Bosch, Varta and Yuasa batteries and full BMS coding for BMW, Mercedes, Audi, VW, Volvo, Land Rover, Kia, Hyundai, Toyota and Lexus. Old batteries are recycled through a licensed waste facility — no fly-tipping, no fine.",
    ],
    quickFacts: [
      { label: "Brands", value: "Bosch · Varta · Yuasa" },
      { label: "Chemistry", value: "AGM · EFB · Standard flooded" },
      { label: "Coding", value: "Full BMS coding included" },
      { label: "Warranty", value: "3–5 years depending on brand" },
    ],
    benefits: [
      { title: "OEM-grade only", body: "Bosch S5/S6, Varta Silver/Blue, Yuasa YBX — batteries that match or exceed the original spec." },
      { title: "BMS coding included", body: "Full battery registration for BMW/Mercedes/Audi/VW/Volvo — critical for start-stop cars." },
      { title: "AGM & EFB stocked", body: "Not all mobile fitters carry the modern chemistries — we do, for every common fitment." },
      { title: "Old battery recycled", body: "Environment Agency licensed disposal. Certificates on request." },
      { title: "3–5 year warranty", body: "Full UK warranty on every battery. We handle warranty claims directly." },
      { title: "Health check included", body: "Alternator output, parasitic drain and voltage-under-load tested before you're charged for a battery." },
    ],
    process: [
      { title: "Diagnose first", body: "We test voltage under load, alternator output and parasitic drain before quoting — sometimes it's not the battery." },
      { title: "Match the exact spec", body: "OEM CCA, Ah, terminal position, chemistry (AGM/EFB/flooded) — matched to your car exactly." },
      { title: "Fit & code", body: "Battery installed with electronic memory-saver, terminals torqued, BMS coded on the vehicle diagnostic port." },
      { title: "Verify & photograph", body: "Charging voltage verified, coding confirmed, old battery removed for recycling." },
    ],
    vehicleTypes: ["All cars & SUVs", "Vans up to 3.5t", "Executive & luxury (BMW/Mercedes/Audi/Porsche)", "Japanese & Korean marques", "Start-stop equipped vehicles"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Real diagnosis first", body: "We don't sell you a battery you don't need — voltage-under-load and alternator check every time." },
      { title: "Coding capability", body: "Full BMS coding hardware on every van — not something you're referred elsewhere for." },
      { title: "Memory-safe fit", body: "Radios, seat memory, sat-nav and steering-angle sensors all preserved via memory-saver during fitting." },
      { title: "Recycling included", body: "Licensed disposal certificates on request — critical for fleet compliance." },
    ],
    faqs: [
      { q: "How do I know it's the battery and not the alternator?", a: "The classic sign is a car that starts fine after a jump but dies again overnight — usually a battery. Slow-turning that gets slower with the engine running suggests alternator. We test both before recommending a battery." },
      { q: "Do you code the new battery?", a: "Yes — full BMS coding on BMW, Mercedes, Audi, VW, Volvo, Land Rover and most Kia/Hyundai. Coding is not optional on modern cars." },
      { q: "How much is a mobile battery replacement?", a: "Battery pricing depends on size, chemistry (standard, EFB, AGM) and coding requirements. Confirmed upfront on the call before we dispatch. Call +44 7949 891689 for a live quote — no callout fees." },
      { q: "What about EV 12V batteries?", a: "Yes — Tesla, Kia EV6, Hyundai Ioniq 5 and other EVs use a conventional 12V for accessories. We stock and code these." },
      { q: "How long does replacement take?", a: "20–40 minutes at your location including diagnosis, fitting and coding." },
      { q: "Do you take away the old battery?", a: "Yes, disposed through a licensed recycler. Certificates provided for fleet operators." },
      { q: "What warranty do I get?", a: "3-year warranty on Yuasa YBX, 4-year on Bosch S5, 5-year on Varta Silver. We handle any warranty claim directly with the manufacturer." },
    ],
    related: ["jump-start-service", "emergency-mobile-tyre-fitting", "roadside-tyre-assistance", "fleet-mobile-tyre-services"],
  },

  "jump-start-service": {
    slug: "jump-start-service",
    category: "battery",
    navLabel: "Jump Start Service",
    h1: "Mobile Jump Start Service in London",
    eyebrow: "Flat Battery Rescue · 24/7",
    metaTitle: "Mobile Jump Start Service London | 24/7 Dead Battery Help",
    metaDescription:
      "24/7 mobile jump start service across London. Heavy-duty jump packs for petrol, diesel and start-stop cars. On-scene in under 30 minutes.",
    hero: imgJumpStartService,
    keywords: {
      primary: "car jump start London",
      secondary: ["dead battery help", "jump start near me", "24 hour jump start London", "mobile jump start service"],
    },
    intro: [
      "A car that won't turn over in a supermarket car park at 10pm doesn't need a taxi home — it needs a jump start from someone with the right kit. Domestic booster cables from a supermarket rarely have the amperage to crank a modern diesel or a start-stop petrol; and clipping cables to the wrong terminal on a modern car can fry the ECU.",
      "Our mobile jump start service uses professional-grade lithium jump packs rated for petrol, diesel and modern start-stop vehicles. We connect at the manufacturer's designated jump points (never the battery on modern engines), verify charging voltage, and run a full diagnosis to tell you whether the battery will survive or whether you need a replacement.",
    ],
    quickFacts: [
      { label: "Availability", value: "24/7 · 365" },
      { label: "Median arrival", value: "28 minutes" },
      { label: "Engine range", value: "Up to 8.0L diesel" },
      { label: "Diagnosis", value: "Included" },
    ],
    benefits: [
      { title: "Professional jump packs", body: "Lithium jump starters rated to 3,000A peak — cranks any petrol or diesel including large SUVs." },
      { title: "Correct connection points", body: "We use the OEM-designated jump points on modern engines — no clipping to the battery of a car that shouldn't be jumped that way." },
      { title: "Diagnosis included", body: "Every jump start includes a battery and alternator check so you know whether it'll happen again." },
      { title: "Battery replacement on-scene", body: "If diagnosis shows the battery is done, we can replace on the same visit with a coded OEM-grade battery." },
      { title: "24/7 · no surcharge", body: "3am, Christmas Day, bank holiday — same price, same service level." },
      { title: "Fully insured", body: "£10m public liability. Every visit photographed and receipted." },
    ],
    process: [
      { title: "Locate & assess", body: "Give us your postcode and vehicle. We confirm safe access and prepare the correct jump pack." },
      { title: "Correct connection", body: "Connected at OEM-designated jump points — never blind-clipped to the battery of a modern ECU-controlled car." },
      { title: "Start & verify", body: "Engine started; charging voltage verified with a multimeter; alternator output measured under load." },
      { title: "Diagnosis handed over", body: "You'll leave knowing whether the battery is fine, tired, or needs replacing — no upsell pressure." },
    ],
    vehicleTypes: ["Cars & SUVs", "Vans up to 3.5t", "Executive & luxury", "Start-stop petrol & diesel", "Hybrid 12V systems"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Live-answered 24/7", body: "One number, one dispatcher — never a chatbot or 'we'll call you back'." },
      { title: "Battery replacement capability", body: "If a jump reveals the battery is finished, we can replace on the same visit — no second callout." },
      { title: "OEM-safe connections", body: "Every technician trained on manufacturer jump-point locations for all common marques." },
      { title: "5.0★ · 76 reviews", body: "Highest verified rating across London mobile assistance providers." },
    ],
    faqs: [
      { q: "How quickly can you arrive to jump-start my car?", a: "Median arrival across London is 28 minutes. Outer boroughs and Essex are typically 35–50 minutes depending on time of day and traffic." },
      { q: "Can you jump-start a start-stop car safely?", a: "Yes — start-stop cars need connection at the designated jump points, not directly on the battery. Our jump packs are rated for the higher inrush current those systems demand." },
      { q: "How much does a mobile jump start cost?", a: "Quoted upfront on the call — the same price at 3am as at 3pm. No weekend, night or bank-holiday surcharges. Call +44 7949 891689." },
      { q: "What if my battery is dead and won't hold a charge?", a: "We diagnose during the visit. If the battery is finished, we can supply and fit a coded OEM replacement on the same call — no second callout needed." },
      { q: "Do you jump-start diesels?", a: "Yes — our lithium packs are rated to 3,000A peak, enough to crank up to 8.0L diesels including motorhome fitments." },
      { q: "Can you jump-start an EV or hybrid?", a: "The 12V accessory battery in hybrids and EVs can be jump-started safely — we do this regularly for Tesla, Prius, Ioniq and Kona EVs." },
      { q: "Will jump-starting my car damage the electronics?", a: "Not when done correctly at OEM-designated points with a regulated jump pack. Damage risk comes from ordinary cables from another car — which is what our pack replaces." },
      { q: "Do you attend supermarket and multi-storey car parks?", a: "Yes — as long as we can get the van within 5–10 metres of your vehicle." },
    ],
    related: ["car-battery-replacement", "emergency-mobile-tyre-fitting", "roadside-tyre-assistance", "emergency-blowout-assistance"],
  },

  "fleet-mobile-tyre-services": {
    slug: "fleet-mobile-tyre-services",
    category: "fitting",
    navLabel: "Fleet Services",
    h1: "Fleet Mobile Tyre Services in London",
    eyebrow: "Business & Corporate Accounts",
    metaTitle: "Fleet Mobile Tyre Services London | Corporate & Trade",
    metaDescription:
      "Fleet mobile tyre management across London: priority dispatch, monthly invoicing, fleet reporting. Taxi firms, couriers and corporate fleets welcome.",
    hero: imgFleetMobileTyreServices,
    keywords: {
      primary: "fleet tyre management London",
      secondary: ["commercial tyre fitting", "business vehicle tyres", "fleet tyre services", "taxi fleet tyres", "courier fleet tyres"],
    },
    intro: [
      "A vehicle off the road for a tyre is revenue lost. Sam's Mobile Tyres runs a dedicated fleet service across London for private-hire operators, courier fleets, delivery vans, contractor vehicles and corporate car schemes. Priority dispatch, monthly consolidated invoicing, and full reporting on tyre spend per vehicle, per depot and per driver.",
      "We work with fleets from 5 vehicles to 200+, taxi and PCO operators, last-mile courier networks, plumbing and electrical contractors, and corporate leasing schemes. One point of contact, one contract, one invoice — and a dedicated fleet dispatch number that bypasses the public queue.",
    ],
    quickFacts: [
      { label: "Fleet size", value: "5 – 200+ vehicles" },
      { label: "Dispatch", value: "Priority · dedicated line" },
      { label: "Billing", value: "Monthly consolidated · 30 days" },
      { label: "Reporting", value: "Per-vehicle, per-depot, per-driver" },
    ],
    benefits: [
      { title: "Priority dispatch", body: "Fleet vehicles jump the public queue on a dedicated dispatch line — critical when a delivery van is off the road." },
      { title: "30-day invoicing", body: "One consolidated monthly invoice — no drivers paying by card and reclaiming on expenses." },
      { title: "Fleet reporting", body: "CSV or PDF reporting on tyre spend per vehicle, per depot, per driver, per month." },
      { title: "Volume pricing", body: "Wholesale-linked pricing on premium brands scaled to your monthly volume." },
      { title: "SLAs available", body: "Guaranteed response times contractually available for national fleet contracts." },
      { title: "Compliance ready", body: "Fleet Operator Recognition Scheme (FORS) compatible documentation and disposal certificates included." },
    ],
    process: [
      { title: "Onboard your fleet", body: "Vehicle list, driver contacts and depot locations captured. Standing tyre specs recorded per vehicle." },
      { title: "Dedicated line", body: "Fleet drivers use a priority number that bypasses the public queue and reaches the fleet dispatcher directly." },
      { title: "Attend & fit", body: "Vans dispatched with the correct tyres to depot, driver location, or roadside — with photo receipt to the fleet manager." },
      { title: "Monthly reporting", body: "Consolidated invoice plus reporting emailed on the 1st of the following month." },
    ],
    vehicleTypes: ["Private hire cars", "Taxi (PCO/black cab)", "Last-mile delivery vans", "Contractor vans (Transit/Sprinter/Ducato)", "Corporate leasing fleets", "Motorhome & event fleets"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Single point of contact", body: "One dedicated fleet manager on our side — same person every time you call." },
      { title: "Full audit trail", body: "Every fit photo-receipted, timestamped, geolocated and reported — clean audit trail for insurers and auditors." },
      { title: "FORS-aligned", body: "Documentation, disposal, and driver-safety practices aligned with the FORS scheme requirements." },
      { title: "Family-run reliability", body: "Not a franchise — you deal with the owners. Decisions happen fast because they happen once." },
    ],
    faqs: [
      { q: "What's the minimum fleet size?", a: "We onboard from 5 vehicles. Smaller than that, standard mobile fitting is usually the right fit." },
      { q: "How does invoicing work?", a: "One consolidated invoice per month, 30-day payment terms, itemised per vehicle registration for easy reconciliation." },
      { q: "Can you supply reports for FORS audits?", a: "Yes — every fit is photo-receipted, geolocated and stored. We provide FORS-aligned reports on request." },
      { q: "Do you offer SLAs?", a: "For fleets of 20+ vehicles we offer contractual response-time SLAs, typically 60–120 minutes to depot." },
      { q: "Which tyre brands do you supply on fleet contracts?", a: "All 26 premium brands, with volume-linked pricing. Michelin Agilis, Continental VancoContact and Bridgestone Duravis for vans; Michelin CrossClimate and Continental AllSeasonContact for corporate cars." },
      { q: "Can drivers call you directly?", a: "Yes — drivers use a dedicated fleet number. Authorisation is pre-agreed with the fleet manager." },
      { q: "Do you handle winter changeovers for corporate fleets?", a: "Yes — seasonal changeover programmes with tyre storage available for corporate fleets in London and the Home Counties." },
      { q: "Can you handle a national contract via a London base?", a: "Within the M25 and Home Counties, yes. Beyond that we partner with vetted regional fleets on national contracts." },
    ],
    related: ["van-tyre-replacement", "mobile-tyre-replacement", "workplace-tyre-fitting", "premium-tyre-brands", "same-day-tyre-fitting"],
  },

  "van-tyre-replacement": {
    slug: "van-tyre-replacement",
    category: "fitting",
    navLabel: "Van Tyre Replacement",
    h1: "Mobile Van Tyre Replacement in London",
    eyebrow: "Vans · LGVs · Light Commercials",
    metaTitle: "Van Tyre Replacement London | Mobile & Commercial",
    metaDescription:
      "Mobile van tyre replacement across London. C, CP and reinforced tyres for Transit, Sprinter, Ducato and Crafter. Load-rated fitting, 24/7.",
    hero: imgVanTyreReplacement,
    keywords: {
      primary: "van tyre replacement London",
      secondary: ["van tyre fitting", "mobile van tyres", "commercial van tyre replacement", "transit tyre fitting", "sprinter tyre fitting"],
    },
    intro: [
      "Van tyres are not car tyres. Load index, ply rating, sidewall stiffness and speed rating all matter far more on a laden Transit than on a family SUV. Under-specifying a van tyre — or fitting a passenger-car tyre to a light commercial — is illegal, unsafe and invalidates your commercial insurance.",
      "Sam's Mobile Tyres specialises in mobile van tyre replacement across London for Transit, Transit Custom, Sprinter, Vito, Crafter, Ducato, Boxer, Relay, Movano and Master. We carry Michelin Agilis, Continental VancoContact, Bridgestone Duravis and Pirelli Carrier — the proper C, CP and reinforced tyres load-rated for real commercial use.",
    ],
    quickFacts: [
      { label: "Van types", value: "Transit · Sprinter · Ducato · Crafter" },
      { label: "Load ratings", value: "Full commercial (C, CP, reinforced)" },
      { label: "Weight limit", value: "Up to 3.5t GVW mobile · 4.25t on request" },
      { label: "Service level", value: "24/7 · overnight available" },
    ],
    benefits: [
      { title: "Load-rated correctly", body: "C, CP and reinforced tyres matched to your van's V5C — never a passenger-car substitute." },
      { title: "Commercial brands only", body: "Michelin Agilis, Continental VancoContact, Bridgestone Duravis, Pirelli Carrier, Goodyear Efficient Grip Cargo." },
      { title: "Overnight service", body: "For couriers and multi-drop fleets, we fit overnight so the van is on the road at 6am." },
      { title: "Twin-wheel fitting", body: "Full twin-wheel and Luton/box-van fitting including inner-outer rotation." },
      { title: "Fleet-friendly billing", body: "Card, PO number, or 30-day invoicing on fleet accounts." },
      { title: "Correct pressures set", body: "Laden and unladen pressures set to manufacturer spec — critical for tyre life and fuel economy." },
    ],
    process: [
      { title: "Book by reg or size", body: "Text the reg or sidewall size — we confirm the correct C-rated tyre and total price." },
      { title: "Slot to fit your route", body: "Depot, driver's home, delivery HQ or overnight — pick the slot that keeps the van earning." },
      { title: "Fit & torque", body: "Balanced, torqued to LGV spec (usually 140–180 Nm), photographed and receipted." },
      { title: "Pressure set to load", body: "Laden and unladen pressures set per the door-jamb placard; TPMS reset where fitted." },
    ],
    vehicleTypes: ["Ford Transit / Custom / Connect", "Mercedes Sprinter / Vito", "VW Crafter / Transporter", "Fiat Ducato / Peugeot Boxer / Citroën Relay", "Renault Master / Vauxhall Movano", "Iveco Daily (up to 3.5t)"],
    tyreBrands: ["Michelin Agilis", "Continental VancoContact", "Bridgestone Duravis", "Pirelli Carrier", "Goodyear Efficient Grip Cargo", "Hankook Vantra"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Commercial specialists", body: "Van tyres aren't a sideline — they're a core service, and we stock the commercial brands properly." },
      { title: "Overnight capability", body: "For courier and multi-drop fleets, overnight fitting keeps vans earning during the day." },
      { title: "Fleet-linked pricing", body: "Volume-linked pricing available for fleets from 5 vehicles up." },
      { title: "Photo audit trail", body: "Every fit photographed and receipted — clean audit trail for insurers." },
    ],
    faqs: [
      { q: "Can I fit passenger-car tyres to my van to save money?", a: "No — it's illegal, unsafe and invalidates your commercial insurance. Van tyres carry a 'C' load-index rating (Commercial); the passenger-car equivalent won't handle the weight." },
      { q: "How much is a van tyre?", a: "Van tyre pricing depends on size, load rating and brand. Text your reg or the sidewall code and we'll confirm a total price within minutes. Fleet-linked rates available." },
      { q: "Do you fit tyres to Luton vans and box-vans?", a: "Yes — up to 3.5t GVW mobile as standard, and 4.25t on request. Twin-wheel rears included." },
      { q: "Can you fit tyres to my van overnight?", a: "Yes — overnight and pre-6am slots available for courier and multi-drop fleets, at no premium." },
      { q: "Do you handle motorhomes?", a: "Yes — motorhome CP-rated tyres (Continental VanContact CP, Michelin Agilis CamperCP) stocked and fitted." },
      { q: "Do you have fleet accounts?", a: "Yes — see our Fleet Services page. Volume pricing and monthly invoicing available from 5 vehicles." },
      { q: "What about TPMS on newer vans?", a: "Yes — TPMS reset included on Transit, Sprinter, Crafter and any van with factory TPMS. Sensor replacement handled if needed." },
      { q: "Can you fit reinforced (XL) tyres?", a: "Yes — reinforced XL and 'C'-rated tyres stocked and fitted correctly with the higher torque specs they require." },
    ],
    related: ["fleet-mobile-tyre-services", "mobile-tyre-replacement", "workplace-tyre-fitting", "tpms-sensor-replacement", "same-day-tyre-fitting"],
  },

  "same-day-tyre-fitting": {
    slug: "same-day-tyre-fitting",
    category: "fitting",
    navLabel: "Same-Day Tyre Fitting",
    h1: "Same-Day Mobile Tyre Fitting in London",
    eyebrow: "Book Now · Fit Today",
    metaTitle: "Same-Day Mobile Tyre Fitting London | Book & Fit Today",
    metaDescription:
      "Same-day mobile tyre fitting across London. Book before 4pm and we'll fit today at your home, office or roadside. Premium tyres, no waiting.",
    hero: imgSameDayTyreFitting,
    keywords: {
      primary: "same day tyre fitting London",
      secondary: ["fast tyre replacement", "urgent tyre fitting", "book tyres today London", "mobile tyre fitting today"],
    },
    intro: [
      "Booked a road trip for tomorrow and just noticed a shredded tyre? Failed an MOT this morning on tread depth? Sam's Mobile Tyres runs a same-day mobile tyre fitting service across London — book before 4pm and we'll be at your address, office or roadside before the evening.",
      "Same-day doesn't mean 'squeezed in badly'. Every same-day fit gets the same premium brands, dynamic balancing, torque-controlled fitting and photo receipt as a scheduled visit. The only difference is you don't have to wait until Tuesday.",
    ],
    quickFacts: [
      { label: "Cut-off", value: "Book before 4pm for same-day" },
      { label: "Typical slot", value: "2–5 hour window" },
      { label: "Weekends", value: "Same-day Saturday & Sunday" },
      { label: "Surcharge", value: "None" },
    ],
    benefits: [
      { title: "Book to fitting under 6 hours", body: "Typical same-day cycle: book 10am, van arrives by 3pm, driving away by 4pm." },
      { title: "Weekends included", body: "Same-day Saturday and Sunday — no 'we're closed at weekends' answering machine." },
      { title: "No premium price", body: "Same-day fitting priced identically to a scheduled slot. No urgency surcharge." },
      { title: "MOT-passing tyres", body: "Fitted in time for your MOT re-test. Full compliant documentation." },
      { title: "26 premium brands", body: "Full brand choice — not 'we'll fit whatever's on the van'." },
      { title: "Photo receipts", body: "Torque reading, tyre serial and tread depth photographed and texted." },
    ],
    process: [
      { title: "Text or call before 4pm", body: "Give us your reg, tyre size, and location. Total price confirmed within minutes." },
      { title: "Same-day slot booked", body: "A 2–5 hour arrival window texted to you. Live ETA sent when the van rolls out." },
      { title: "Fit at your location", body: "Home, office, gym, kerbside — the van arrives with your chosen tyres, balancer and mat." },
      { title: "Photo receipt", body: "Tread, torque and tyre serial photographed. Full VAT receipt emailed within an hour." },
    ],
    vehicleTypes: ["All cars", "Vans up to 3.5t", "SUVs & 4x4s", "Executive & luxury", "EVs & hybrids"],
    tyreBrands: ALL_BRANDS,
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Real same-day", body: "Not 'same day if we're free' — six vans on shift means we're free." },
      { title: "Weekend inclusive", body: "Same-day Sat and Sun at no premium, live-answered." },
      { title: "26 brands in stock", body: "Central depot with the volume to fulfil same-day requests across all common fitments." },
      { title: "MOT retest compatible", body: "Fitted in time for a same-day MOT retest slot — most Enfield and North London MOT stations offer this." },
    ],
    faqs: [
      { q: "How late can I book for same-day?", a: "Book by 4pm on weekdays for guaranteed same-day. Later bookings we'll accept if we have stock and van capacity." },
      { q: "Is same-day fitting more expensive?", a: "No — same price as a scheduled slot. No urgency surcharge, no cut-off premium." },
      { q: "Can you do same-day on the weekend?", a: "Yes — Saturday and Sunday same-day fitting is available and priced identically." },
      { q: "Do you carry stock for premium brands same-day?", a: "For the top 10 fitments (17\", 18\", 19\", 20\") in Michelin, Continental, Bridgestone and Pirelli, yes. Rarer sizes are couriered from the depot in 3–5 hours." },
      { q: "What if my tyre is unusual?", a: "Text us the size — most sizes we can source same-day from a network of London tyre wholesalers." },
      { q: "Do I need to be home for the fitting?", a: "No — leave the keys somewhere agreed. We photograph the tyres before and after, and text you when we're done." },
      { q: "Can you fit before MOT retest?", a: "Yes — very common. Book with time to spare and we'll fit ahead of your retest slot." },
      { q: "What if you can't fit today?", a: "On the very rare occasion we can't, we'll tell you immediately — never a 'we'll try, then don't turn up' commitment." },
    ],
    related: ["emergency-mobile-tyre-fitting", "mobile-tyre-replacement", "home-tyre-fitting", "workplace-tyre-fitting", "premium-tyre-brands"],
  },

  "premium-tyre-brands": {
    slug: "premium-tyre-brands",
    category: "fitting",
    navLabel: "Premium Tyre Brands",
    h1: "Premium Tyre Brands We Fit in London",
    eyebrow: "Michelin · Continental · Bridgestone · Pirelli & more",
    metaTitle: "Premium Tyre Brands London | Michelin, Continental, Pirelli",
    metaDescription:
      "26 premium tyre brands fitted at your London kerb: Michelin, Continental, Bridgestone, Pirelli, Goodyear, Dunlop, Hankook, Yokohama and more.",
    hero: imgPremiumTyreBrands,
    keywords: {
      primary: "premium tyre brands London",
      secondary: ["Michelin tyres London", "Continental tyres London", "Pirelli fitting London", "Bridgestone mobile fitting"],
    },
    intro: [
      "The tyre is the only part of your car that touches the road. Every safety-critical decision the vehicle makes — braking, cornering, aquaplaning resistance, ABS, ESP, adaptive cruise — is only as good as the four contact patches beneath you. That is why we only fit tyres from brands we would put on our own family cars, and never budget grey-imported tyres or unbranded 'ditch-finders'.",
      "We stock and fit 26 premium brands across London, each matched to your vehicle's exact OEM spec — load rating, speed index, and where applicable OEM markings for BMW (★), Mercedes (MO), Audi (AO), Porsche (N-rated), Jaguar/Land Rover (LR), and Tesla (T0/T1).",
    ],
    quickFacts: [
      { label: "Brands stocked", value: "26 premium (0 budget)" },
      { label: "OEM markings", value: "★ · MO · AO · N0-N7 · LR · T0/T1" },
      { label: "Warranty", value: "Full UK manufacturer warranty" },
      { label: "Speed ratings", value: "H · V · W · Y · Y+" },
    ],
    benefits: [
      { title: "OEM-marked tyres", body: "★, MO, AO, N, LR and T0/T1 markings stocked for premium marques — insurance-critical for cars still under warranty." },
      { title: "26 brands · one visit", body: "Full brand choice, not 'we'll fit whatever's on the van'. Pick by budget, longevity or performance." },
      { title: "Speed-rating matched", body: "V, W, Y and Y+ speed ratings matched exactly — a lower rating fails MOT and invalidates insurance." },
      { title: "Full UK warranty", body: "Every tyre carries full UK manufacturer warranty. We handle warranty claims on your behalf." },
      { title: "No grey imports", body: "Every tyre is UK-market stock, DOT-current, from authorised distributors. No parallel imports." },
      { title: "Compound-matched", body: "Summer, all-season, winter and EV-specific compounds available — the right compound for the right season." },
    ],
    process: [
      { title: "Tell us your vehicle", body: "Registration or V5 details. We look up the exact OEM spec including any manufacturer marking." },
      { title: "Compare on price & purpose", body: "We quote 2–3 options at different price points — usually a premium (Michelin/Continental), a mid (Bridgestone/Goodyear) and a value-premium (Hankook/Yokohama)." },
      { title: "Delivered & fitted", body: "Chosen tyre delivered on the van, balanced, torqued and photographed at your location." },
      { title: "Registered warranty", body: "Where applicable we register the warranty on your behalf — Michelin, Continental and Pirelli all support this." },
    ],
    vehicleTypes: ["All cars", "SUVs & 4x4s", "Executive & luxury", "Vans (Michelin Agilis / Continental VancoContact)", "Motorsport-derived (Pirelli P Zero / Michelin Pilot Sport)", "EVs (Michelin e·Primacy / Continental EcoContact)"],
    tyreBrands: ALL_BRANDS,
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Zero budget brands", body: "We deliberately do not stock unbranded or grey-import tyres. Every tyre is one we would fit to our own vehicles." },
      { title: "OEM-mark specialists", body: "★, MO, AO, N-rated and T0/T1 tyres properly identified and stocked — many mobile fitters skip this." },
      { title: "Warranty handling", body: "Any warranty claim, we deal with the manufacturer on your behalf." },
      { title: "26 real brands", body: "Not 'we can source it' — 26 brands actually in London stock." },
    ],
    faqs: [
      { q: "What's the difference between Michelin and a budget tyre?", a: "Independent tests routinely show 8–12m shorter wet-braking distances from 50mph on premium tyres. On winter compounds the gap widens further. Over 30,000 miles a premium tyre also typically wears more evenly, meaning safer performance at the end of its life." },
      { q: "Do I need OEM-marked tyres on my BMW/Mercedes/Audi/Porsche/Tesla?", a: "For a vehicle still under manufacturer warranty, yes — non-marked tyres can invalidate the warranty. For older vehicles it's a personal choice; the marked versions are tuned for the vehicle's specific chassis dynamics." },
      { q: "What are the top 3 brands you'd recommend?", a: "Michelin, Continental and Pirelli, in that order — with Bridgestone Turanza as a very close fourth for saloons and executive cars. For SUVs, Michelin Latitude Sport and Continental CrossContact." },
      { q: "Do you stock Michelin Pilot Sport 5?", a: "Yes — Pilot Sport 5 and PS4S in the common performance sizes (17\"–20\"). Rarer fitments sourced same-day from the depot." },
      { q: "Are budget tyres ever OK?", a: "For a low-mileage second car on which you don't drive fast or in bad weather, a mid-brand like Falken or Kumho is acceptable. Genuine budget/unbranded tyres we don't fit — the safety compromise isn't worth a small saving upfront." },
      { q: "What about run-flats?", a: "Michelin (ZP), Continental (SSR), Bridgestone (RFT) and Pirelli (r-f) run-flats all stocked in common sizes for BMW, Mercedes and Mini fitments." },
      { q: "Do you supply Tesla T0/T1 tyres?", a: "Yes — Michelin Primacy 4 T0 and Michelin Pilot Sport 4 T0/T1 for Model 3, Model Y, Model S and Model X." },
      { q: "How is speed rating important?", a: "You must fit tyres with a speed rating at or above the vehicle's design speed — otherwise MOT fail and insurance invalidation. We match exactly." },
    ],
    related: ["mobile-tyre-replacement", "winter-tyres", "summer-tyres", "all-season-tyres", "mobile-tyre-fitting-luxury-cars"],
  },

  "winter-tyres": {
    slug: "winter-tyres",
    category: "fitting",
    navLabel: "Winter Tyres",
    h1: "Winter Tyre Fitting in London",
    eyebrow: "Cold-Weather Compound · 3PMSF Certified",
    metaTitle: "Winter Tyres London | Mobile Fitting & Storage",
    metaDescription:
      "Winter tyre supply, fitting and off-season storage across London. 3PMSF certified compounds — dramatically shorter braking below 7°C.",
    hero: imgWinterTyres,
    keywords: {
      primary: "winter tyres London",
      secondary: ["winter tyre fitting", "cold weather tyres London", "3PMSF tyres", "seasonal tyre changeover London"],
    },
    intro: [
      "Below 7°C, the rubber compound in a summer tyre hardens and loses grip — regardless of tread depth. Winter tyres use a softer, higher-silica compound that stays pliable in cold, wet, snow and ice conditions. The safety difference is not marginal: independent tests routinely show winter tyres stopping 8–15 metres shorter than summer tyres from 30mph on cold, wet UK roads.",
      "Sam's Mobile Tyres supplies, fits and stores 3PMSF-certified winter tyres from Michelin, Continental, Pirelli, Bridgestone and Goodyear. Full changeover — usually October/November — done at your home or office. Summer tyres stored in our climate-controlled facility until spring.",
    ],
    quickFacts: [
      { label: "Certification", value: "3PMSF (three-peak mountain snowflake)" },
      { label: "Compound activation", value: "Below 7°C" },
      { label: "Changeover season", value: "Oct/Nov & Mar/Apr" },
      { label: "Storage option", value: "Available on request" },
    ],
    benefits: [
      { title: "3PMSF certified", body: "Only genuine three-peak-mountain-snowflake tyres — not misleading 'M+S' markings that mean nothing legally." },
      { title: "8–15m shorter braking", body: "Independent test data: winter tyres stop 8–15m shorter from 30mph on cold, wet UK roads." },
      { title: "Storage included option", body: "Off-season storage in climate-controlled facility quoted per tyre per month. Picked up, delivered, remounted." },
      { title: "Full 3PMSF range", body: "Michelin Alpin 6, Continental WinterContact TS 870, Pirelli Cinturato Winter, Bridgestone Blizzak LM." },
      { title: "Reg-plate scheduling", body: "We schedule your changeover based on your registration and last year's date. No need to remember." },
      { title: "OEM-mark preserved", body: "For BMW ★, Mercedes MO, Audi AO — winter equivalents stocked to preserve your warranty compliance." },
    ],
    process: [
      { title: "Book your first season", body: "Choose your winter tyre brand. We fit at your location in October or November." },
      { title: "Store the summers", body: "Optional — your summer tyres removed, cleaned, tagged and stored." },
      { title: "Spring swap", body: "Auto-scheduled changeover in March/April at your address. Summer tyres remounted, winters cleaned and stored." },
      { title: "Long-term rotation", body: "Two sets rotating each year doubles the useful life of both — usually 8+ years across the two sets." },
    ],
    vehicleTypes: ["All cars", "SUVs & 4x4s", "Vans", "Executive & luxury", "EVs (winter EV-compound available)"],
    tyreBrands: ["Michelin Alpin 6", "Continental WinterContact TS 870", "Pirelli Cinturato Winter 2", "Bridgestone Blizzak LM", "Goodyear UltraGrip Performance +", "Hankook Winter i*cept"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Storage included", body: "Climate-controlled, tagged, insured off-season storage — most mobile fitters don't offer this." },
      { title: "Reg-scheduled changeovers", body: "We remember when your changeover is due; you don't." },
      { title: "Genuine 3PMSF", body: "No misleading M+S tyres marketed as 'winter'. Genuine cold-weather compound only." },
      { title: "OEM-mark specialists", body: "Winter equivalents for premium marques stocked with the correct OEM markings." },
    ],
    faqs: [
      { q: "Do I really need winter tyres in London?", a: "The UK doesn't mandate them, but from a safety perspective they are transformative below 7°C — which is most December, January and February days in London, even without snow. Wet grip and braking improvements alone justify them." },
      { q: "When should I switch to winter tyres?", a: "October and November — as soon as overnight temperatures start reliably dropping below 7°C. Don't wait for snow." },
      { q: "Can I use winter tyres all year?", a: "You can, but the softer compound wears fast above 20°C and reduces summer wet-grip performance. Ideally rotate seasonally." },
      { q: "Are all-season tyres a compromise or a good option?", a: "For London and the Home Counties, high-quality all-season tyres (Michelin CrossClimate 2, Continental AllSeasonContact) are an excellent single-set solution — genuinely 3PMSF certified and rated for both seasons." },
      { q: "How much is winter tyre storage?", a: "Storage pricing depends on tyre size and season length. Quoted upfront when you book the swap. Full storage-and-swap season packages available at a discount." },
      { q: "Do you fit winter tyres on Range Rovers / SUVs?", a: "Yes — Michelin Latitude Alpin, Continental CrossContact Winter, and Pirelli Scorpion Winter all stocked for common SUV fitments." },
    ],
    related: ["summer-tyres", "all-season-tyres", "premium-tyre-brands", "mobile-tyre-replacement", "tpms-sensor-replacement"],
  },

  "summer-tyres": {
    slug: "summer-tyres",
    category: "fitting",
    navLabel: "Summer Tyres",
    h1: "Summer Tyre Fitting in London",
    eyebrow: "Warm-Weather Compound · Maximum Grip",
    metaTitle: "Summer Tyres London | Mobile Fitting & Supply",
    metaDescription:
      "Summer tyre supply and fitting across London. Michelin Primacy, Continental PremiumContact, Bridgestone Turanza and more — fitted at your kerb.",
    hero: imgSummerTyres,
    keywords: {
      primary: "summer tyres London",
      secondary: ["summer tyre fitting", "warm weather tyres", "high performance summer tyres London"],
    },
    intro: [
      "Summer tyres are optimised for warm, dry and wet performance above 7°C. They use a harder compound that resists heat build-up on motorway runs, and tread patterns designed to disperse standing water at high speed. Fitted correctly they give the best possible braking, cornering and fuel economy in temperate UK conditions.",
      "Sam's Mobile Tyres supplies and fits premium summer tyres from Michelin, Continental, Bridgestone, Pirelli, Goodyear and 21 more brands. Same-day mobile fitting at your home, office or roadside across London.",
    ],
    quickFacts: [
      { label: "Optimal range", value: "7°C and above" },
      { label: "Wet-braking", value: "Best-in-class for warm-wet UK conditions" },
      { label: "Wear life", value: "Typically 25,000–40,000 miles" },
      { label: "Speed ratings", value: "V · W · Y · Y+" },
    ],
    benefits: [
      { title: "Superior warm-weather grip", body: "Compound optimised above 7°C — dry braking, wet handling and high-speed stability all class-leading." },
      { title: "Longer life", body: "Harder summer compound wears more slowly than winter or aggressive all-season tyres." },
      { title: "Better fuel economy", body: "Lower rolling resistance than winter or aggressive all-season equivalents — meaningful mpg improvement." },
      { title: "Performance choices", body: "From EU A-rated eco tyres (Michelin e·Primacy) to full track-capable (Michelin Pilot Sport 5, Pirelli P Zero)." },
      { title: "OEM markings stocked", body: "★, MO, AO, N-rated and T0/T1 stocked in premium summer fitments." },
      { title: "26 brand choice", body: "Full brand range at your kerb — pick by budget, longevity or performance." },
    ],
    process: [
      { title: "Choose by purpose", body: "We ask about your driving: motorway commute, city, mixed, or performance. Compound matched accordingly." },
      { title: "Fit at your kerb", body: "Delivered, balanced, torqued and photographed at your home or office." },
      { title: "Correct pressures", body: "Cold pressures set to the door-jamb placard — critical for warm-weather tyre life and mpg." },
      { title: "TPMS reset", body: "TPMS relearn or sensor programming as required. All modern relearn procedures supported." },
    ],
    vehicleTypes: ["Family cars", "Executive & luxury", "SUVs & 4x4s", "Performance & sports", "Hybrids & EVs"],
    tyreBrands: ["Michelin Primacy 4+", "Michelin Pilot Sport 5", "Continental PremiumContact 7", "Bridgestone Turanza 6", "Pirelli P Zero PZ4", "Goodyear EfficientGrip Performance 2"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Compound-matched to your driving", body: "Not just 'a summer tyre' — the right summer tyre for your mileage and usage." },
      { title: "OEM-mark specialists", body: "Manufacturer-approved marked tyres properly identified and stocked." },
      { title: "26-brand choice", body: "Genuine choice at your kerb — most mobile fitters carry 3–5." },
      { title: "Same-day fitting", body: "Same-day capacity across most premium summer fitments." },
    ],
    faqs: [
      { q: "Can I use summer tyres year-round?", a: "In central London and the South East, yes — the vast majority of drivers do. If you frequently drive to the Peak District or Scotland in winter, consider a seasonal or all-season set." },
      { q: "How do I choose between eco and performance summer tyres?", a: "Eco (Michelin e·Primacy) prioritises mpg and long life. Performance (Pilot Sport 5, P Zero) prioritises grip and cornering. Bridgestone Turanza 6 and Continental PremiumContact 7 are excellent all-rounders." },
      { q: "Do summer tyres last longer than winter?", a: "Yes — typically 25,000–40,000 miles versus 15,000–25,000 for winter, because the compound is harder." },
      { q: "What's the ideal summer tyre for a family SUV?", a: "Michelin Latitude Tour HP, Continental CrossContact H/T, or Pirelli Scorpion Verde — long-life, quiet, good wet-grip." },
      { q: "Do you stock EV-specific summer tyres?", a: "Yes — Michelin e·Primacy, Continental EcoContact 6 Q, Bridgestone Turanza Eco. EV compounds resist torque wear and reduce road noise." },
    ],
    related: ["winter-tyres", "all-season-tyres", "premium-tyre-brands", "mobile-tyre-replacement", "wheel-balancing"],
  },

  "all-season-tyres": {
    slug: "all-season-tyres",
    category: "fitting",
    navLabel: "All-Season Tyres",
    h1: "All-Season Tyre Fitting in London",
    eyebrow: "One Set · Year-Round · 3PMSF Certified",
    metaTitle: "All-Season Tyres London | CrossClimate & AllSeasonContact",
    metaDescription:
      "All-season tyre fitting across London. Michelin CrossClimate 2 and Continental AllSeasonContact — genuine 3PMSF certified, one set year-round.",
    hero: imgAllSeasonTyres,
    keywords: {
      primary: "all season tyres London",
      secondary: ["all weather tyres London", "CrossClimate fitting London", "AllSeasonContact London", "3PMSF all season"],
    },
    intro: [
      "All-season tyres used to be a compromise: worse than summers in summer, worse than winters in winter. That changed with the current generation — Michelin CrossClimate 2 and Continental AllSeasonContact 2 deliver genuine cold-weather 3PMSF certification while retaining summer wet-braking distances within 1–2m of dedicated summer tyres.",
      "For London and the Home Counties, where genuine snow is rare but cold, wet, and greasy roads dominate October through March, a high-end all-season set is often the single best value-and-safety compromise available. Sam's Mobile Tyres stocks and fits the current generation of premium all-seasons at your London kerb.",
    ],
    quickFacts: [
      { label: "Certification", value: "3PMSF (like winter tyres)" },
      { label: "Season", value: "Year-round · single set" },
      { label: "Best for", value: "London, Home Counties, urban driving" },
      { label: "Wear life", value: "25,000–35,000 miles typical" },
    ],
    benefits: [
      { title: "Genuine 3PMSF", body: "Not misleading 'M+S' — Michelin CrossClimate 2 and Continental AllSeasonContact 2 carry full three-peak-mountain-snowflake." },
      { title: "One set, year-round", body: "No changeover cost, no storage cost, no reg-plate scheduling. Fit once, use for years." },
      { title: "Summer performance close to premium summer", body: "Independent tests: 1–2m of Michelin Primacy on wet-braking from 50mph — a genuinely small compromise." },
      { title: "Winter grip far ahead of summer", body: "8–12m shorter cold-wet braking than a summer tyre from 30mph. Below 7°C the gap widens further." },
      { title: "EV-compound available", body: "CrossClimate 2 Tesla-approved (T0) and Continental AllSeasonContact 2 for hybrids and EVs." },
      { title: "Full mobile fit", body: "Fitted, balanced, torqued at your London kerb — no garage trip." },
    ],
    process: [
      { title: "Confirm suitability", body: "For urban and Home Counties driving, all-seasons are usually ideal. If you commute to Scotland or the Peak District regularly, we may still recommend dedicated winter." },
      { title: "Choose brand", body: "Michelin CrossClimate 2 (premium) or Continental AllSeasonContact 2 (premium alternative). Goodyear Vector 4Seasons Gen-3 as mid-premium." },
      { title: "Fit at your kerb", body: "Delivered, balanced, torqued at your home or office. Photo receipt." },
      { title: "Peace-of-mind winter", body: "Genuine 3PMSF grip through the cold months — no compromise between seasons." },
    ],
    vehicleTypes: ["Family cars", "SUVs & 4x4s", "Hybrids & EVs", "Executive & luxury", "Small commercial vans"],
    tyreBrands: ["Michelin CrossClimate 2", "Continental AllSeasonContact 2", "Goodyear Vector 4Seasons Gen-3", "Pirelli Cinturato All Season SF2", "Bridgestone Weather Control A005"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Genuine 3PMSF only", body: "We only fit certified 3PMSF all-seasons — never M+S-only tyres marketed misleadingly." },
      { title: "Right fit for London", body: "For urban/Home-Counties driving, this is often the honest best-value choice — we'll say so." },
      { title: "Tesla T0 stocked", body: "CrossClimate 2 T0 for Model 3 and Model Y stocked in common sizes." },
      { title: "26-brand choice", body: "Full brand range on-hand — pick by budget or purpose." },
    ],
    faqs: [
      { q: "Are all-season tyres as good as dedicated summer + winter sets?", a: "In pure test data, no — a dedicated winter tyre still wins in ice/snow and a dedicated summer tyre wins on 30°C track days. In real UK driving, the compromise is small, and eliminating the twice-yearly changeover more than compensates." },
      { q: "Are all-season tyres legal for winter driving?", a: "Yes — 3PMSF-certified all-seasons meet all UK and European legal cold-weather requirements. Same certification as full winter tyres." },
      { q: "Which is better — CrossClimate 2 or AllSeasonContact 2?", a: "Very close. CrossClimate 2 has a slight edge in dry summer performance; AllSeasonContact 2 has a slight edge in wet cold braking. Both are excellent choices." },
      { q: "How long do all-season tyres last?", a: "25,000–35,000 miles typically — closer to summer tyres than winter, because they're used year-round." },
      { q: "Are they good for EVs?", a: "Yes — Michelin CrossClimate 2 T0 is Tesla-approved and available for Model 3 and Model Y. Continental has an EV-optimised AllSeasonContact 2 variant." },
      { q: "What about performance cars?", a: "For dedicated performance cars we'd still recommend summer tyres. All-seasons are best for family, urban and light-executive use." },
    ],
    related: ["winter-tyres", "summer-tyres", "premium-tyre-brands", "mobile-tyre-replacement", "wheel-balancing"],
  },

  "wheel-balancing": {
    slug: "wheel-balancing",
    category: "specialist",
    navLabel: "Wheel Balancing",
    h1: "Mobile Wheel Balancing in London",
    eyebrow: "Dynamic Balance · On-Board Balancer",
    metaTitle: "Mobile Wheel Balancing London | Vibration-Free Driving",
    metaDescription:
      "Mobile wheel balancing across London. Dynamic on-board Hunter-grade balancing — vibration-free driving up to motorway speeds.",
    hero: imgWheelBalancing,
    keywords: {
      primary: "wheel balancing London",
      secondary: ["mobile wheel balancing", "dynamic wheel balancing", "tyre balancing London"],
    },
    intro: [
      "A steering-wheel wobble at 55–70 mph, a subtle vibration through the seat, or uneven tread wear across a set of tyres — all classic signs of an out-of-balance wheel. Correct dynamic wheel balancing is a precision job: sub-5-gram accuracy, with weights positioned to match the wheel's specific geometry.",
      "Every wheel we fit is balanced on an on-board dynamic balancer to sub-5-gram tolerance. Balancing-only visits — where you already have tyres fitted elsewhere but the drive is rough — are also available across London.",
    ],
    quickFacts: [
      { label: "Accuracy", value: "Sub-5g dynamic" },
      { label: "Machine", value: "Hunter-grade on-board balancer" },
      { label: "Time per wheel", value: "10–15 minutes" },
      { label: "Weights", value: "Adhesive & clip-on, alloy-safe" },
    ],
    benefits: [
      { title: "Sub-5g accuracy", body: "Well below the 15g imbalance threshold that starts to cause perceptible wobble at motorway speeds." },
      { title: "On-board balancer", body: "Hunter-grade dynamic balancer on the van — no need to remove wheels to a garage." },
      { title: "Alloy-safe weights", body: "Adhesive weights on painted alloys — never hammered clip-ons on cosmetic wheels." },
      { title: "Included in every fit", body: "Balancing is part of every tyre fit as standard — never an added-on fee." },
      { title: "Uneven-wear diagnosis", body: "We inspect the tyre for wear patterns that suggest alignment, not just balance, issues." },
      { title: "TPMS-safe", body: "Balanced without disturbing the TPMS sensor or valve — no reset required after." },
    ],
    process: [
      { title: "Assess the symptom", body: "Where is the vibration felt — steering wheel (front wheels) or seat (rear wheels)? What speed?" },
      { title: "Remove & inspect", body: "Wheel removed, cleaned of old weight residue, visually inspected for wheel damage or contamination." },
      { title: "Dynamic balance", body: "Spun on the balancer; weights positioned to sub-5g accuracy on inner and outer planes." },
      { title: "Refit & torque", body: "Torqued to spec, photographed. Test drive on request." },
    ],
    vehicleTypes: ["All cars", "SUVs & 4x4s", "Vans up to 3.5t", "Executive & luxury", "Motorsport & track cars"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Included in every fit", body: "Not a paid extra — balancing is a non-negotiable part of the fitting job." },
      { title: "Alloy-safe weights", body: "Adhesive weights on cosmetic wheels; never hammer-fitted clip-ons on painted alloys." },
      { title: "Precision equipment", body: "Weekly-calibrated Hunter-grade dynamic balancer — same class as high-end garage rigs." },
      { title: "Honest diagnosis", body: "If the vibration is alignment or a bent wheel — not balance — we say so, and don't charge to re-balance uselessly." },
    ],
    faqs: [
      { q: "Do I need balancing if I've just had new tyres fitted?", a: "Yes — every new tyre should be balanced. If you weren't offered balancing with your new tyres, we'd honestly recommend re-doing them. It should be included, not extra." },
      { q: "How do I know if my wheels are out of balance?", a: "Vibration at specific speeds (usually 55–75mph), a wobbling steering wheel, or uneven tyre wear are the classic signs. Rear-wheel imbalance is felt through the seat, front-wheel through the steering." },
      { q: "How much is mobile wheel balancing?", a: "Balance-only visits are quoted upfront on the call. Balancing is included free with any new tyre fit — no add-on charge." },
      { q: "Can you balance run-flat tyres?", a: "Yes — run-flats need balancing exactly like standard tyres. All our vans handle them without issue." },
      { q: "Will balancing fix a wobble at all speeds?", a: "Balancing fixes speed-specific vibrations (usually 55–75mph). Constant wobble at all speeds suggests bent wheel, damaged tyre, or alignment issue — we diagnose during the visit." },
      { q: "Do you check for alignment during balancing?", a: "We visually check tread-wear patterns for alignment symptoms and honestly recommend an alignment specialist if needed. Alignment requires a fixed rig we don't carry mobile." },
    ],
    related: ["mobile-tyre-replacement", "tpms-sensor-replacement", "tyre-pressure-check", "premium-tyre-brands", "mobile-puncture-repair"],
  },

  "tpms-sensor-replacement": {
    slug: "tpms-sensor-replacement",
    category: "specialist",
    navLabel: "TPMS Sensor Replacement",
    h1: "Mobile TPMS Sensor Replacement in London",
    eyebrow: "Tyre Pressure Warning · Sensor Programming",
    metaTitle: "TPMS Sensor Replacement London | Mobile Programming",
    metaDescription:
      "Mobile TPMS sensor replacement across London. Direct and indirect systems — programmed, registered and cleared at your kerb.",
    hero: imgTpmsSensorReplacement,
    keywords: {
      primary: "TPMS sensor replacement London",
      secondary: ["tyre pressure sensor replacement", "TPMS programming London", "TPMS light reset"],
    },
    intro: [
      "The tyre pressure warning light on your dashboard doesn't only mean 'check the pressures'. On a direct TPMS system — used by most cars sold since 2014 — every wheel has an individual sensor with a battery, and after 5–7 years the batteries fail one by one. Replacement isn't just physical; the new sensor has to be programmed with the correct ID, then paired with the vehicle.",
      "Sam's Mobile Tyres carries multi-protocol programmable TPMS sensors (Autel MX-Sensor, Bartec, Alligator) compatible with virtually every car on UK roads, and full diagnostic tooling to program, register and clear the light at your London kerb.",
    ],
    quickFacts: [
      { label: "Sensor life", value: "5–7 years typical" },
      { label: "Systems handled", value: "Direct & indirect" },
      { label: "Programming", value: "Multi-protocol, all major brands" },
      { label: "Reset", value: "OBD or auto-relearn, on-scene" },
    ],
    benefits: [
      { title: "Multi-protocol sensors", body: "Autel and Bartec programmable sensors cover 98% of UK-market vehicles from a single stock." },
      { title: "Programmed to your vehicle", body: "Sensor programmed to your exact vehicle's ID protocol before it goes in the tyre." },
      { title: "Vehicle relearn included", body: "OBD relearn or auto-relearn drive-cycle instructions — the warning light doesn't just get 'reset', it's cleared correctly." },
      { title: "Full BMS coding capability", body: "Where the TPMS integrates with wider BMS (BMW, Mercedes), full coding is included, not just sensor swap." },
      { title: "Alloy-safe fitting", body: "Sensor mounted with alloy-friendly torque; wheel refitted with new valve service pack." },
      { title: "Fitted with tyre fit or standalone", body: "Sensor replacement can be part of a new tyre fit or a standalone visit." },
    ],
    process: [
      { title: "Diagnose the fault", body: "OBD scan identifies which sensor is faulty — no unnecessary replacement of good sensors." },
      { title: "Program the new sensor", body: "Sensor ID cloned or new-programmed to match the vehicle protocol." },
      { title: "Fit inside the tyre", body: "Wheel dismounted; sensor fitted with new valve pack; wheel refitted and balanced." },
      { title: "Vehicle relearn", body: "OBD relearn (BMW, Mercedes, VW) or auto drive-cycle (Ford, Vauxhall) completes the pairing." },
    ],
    vehicleTypes: ["All post-2014 cars (mandatory TPMS)", "SUVs & 4x4s", "Executive & luxury", "Vans (where fitted)", "EVs & hybrids"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Real programming, not blind reset", body: "We program the sensor ID correctly — never a blind 'reset' that leaves the fault present." },
      { title: "Multi-brand stock", body: "One programmable sensor part covers most of the market — no waiting for a specific-brand part." },
      { title: "OBD & auto-relearn", body: "All major relearn procedures supported — no 'come back to the garage for the relearn'." },
      { title: "Photo diagnosis", body: "OBD scan screenshot supplied — clear evidence the correct sensor was replaced." },
    ],
    faqs: [
      { q: "Do I have to replace TPMS sensors when I get new tyres?", a: "Not always — sensors are separate components. But if a sensor is old (5+ years), we recommend replacing it while the tyre is off. Prevents a return visit within months." },
      { q: "How long do TPMS sensors last?", a: "Typically 5–7 years. Battery is sealed and non-replaceable, so at end of life the whole sensor is renewed." },
      { q: "How much is TPMS sensor replacement?", a: "Quoted upfront by sensor count — includes programming, fitting and relearn. Multi-sensor discounts available. Call +44 7949 891689 for a live quote." },
      { q: "My TPMS light came on — is a sensor bad?", a: "Could be a sensor, or genuinely low pressure. We diagnose with the OBD tool first — no unnecessary sensor replacement." },
      { q: "Do vans have TPMS?", a: "Newer commercial vehicles yes — Sprinter, Crafter, Transit Custom. Older Transits often don't have it factory-fitted." },
      { q: "Can you handle BMW/Mercedes/Audi TPMS?", a: "Yes — full OBD relearn capability for all common premium marques including staggered fitments." },
    ],
    related: ["mobile-tyre-replacement", "tyre-pressure-check", "wheel-balancing", "premium-tyre-brands", "van-tyre-replacement"],
  },

  "tyre-pressure-check": {
    slug: "tyre-pressure-check",
    category: "specialist",
    navLabel: "Tyre Pressure Check",
    h1: "Mobile Tyre Pressure Check & Adjustment in London",
    eyebrow: "Pressure · Tread · Condition",
    metaTitle: "Tyre Pressure Check London | Mobile Inspection",
    metaDescription:
      "Mobile tyre pressure check and full tyre condition inspection across London. Free with any fit; standalone quoted upfront.",
    hero: imgTyrePressureCheck,
    keywords: {
      primary: "tyre pressure check London",
      secondary: ["mobile tyre inspection", "tyre condition check", "tyre pressure adjustment London"],
    },
    intro: [
      "Correct tyre pressure is the single biggest factor in tyre life, fuel economy and safety. Even 5 PSI under the door-jamb placard reduces wet-braking by measurable margins, cuts fuel economy by 3–5%, and accelerates uneven wear. And yet the majority of UK drivers only check pressures when a warning light appears.",
      "Sam's Mobile Tyres offers a mobile pressure and full condition check across London: pressures set precisely, tread depths measured, sidewalls inspected for damage, and TPMS status confirmed. Included free with any fitting visit; standalone visits quoted upfront.",
    ],
    quickFacts: [
      { label: "Pressures set", value: "To door-jamb / handbook spec" },
      { label: "Tread measured", value: "Digital gauge, per-tyre" },
      { label: "Sidewall inspection", value: "Included" },
      { label: "TPMS status", value: "OBD-checked" },
    ],
    benefits: [
      { title: "Precise digital gauges", body: "Calibrated digital gauges — not petrol-station guesswork." },
      { title: "Placard-spec matched", body: "Pressures set to the vehicle's door-jamb placard for laden or unladen operation as required." },
      { title: "Full condition inspection", body: "Tread depth, sidewall cracks, kerb damage, uneven wear patterns all noted and photographed." },
      { title: "TPMS status", body: "OBD-checked to confirm no dormant TPMS faults." },
      { title: "Photo report", body: "Every tyre photographed with a labelled report — great for pre-purchase inspections." },
      { title: "Free with any fit", body: "Included as standard on any fitting visit — never a pretext to sell more tyres." },
    ],
    process: [
      { title: "Pressure measurement", body: "Cold pressures read on each tyre with a calibrated digital gauge." },
      { title: "Set to placard", body: "Pressures set to the manufacturer placard — laden or unladen as appropriate." },
      { title: "Condition inspection", body: "Tread depth per tyre, sidewall condition, wear pattern, and DOT age recorded." },
      { title: "Report & recommendations", body: "Photo report sent by text; honest recommendations if replacement is genuinely needed." },
    ],
    vehicleTypes: ["All cars", "SUVs & 4x4s", "Vans", "Motorhomes", "Fleet vehicles"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "No upsell pressure", body: "The pressure check is not a pretext — we tell you honestly what you need and what you don't." },
      { title: "Calibrated gauges", body: "Weekly-calibrated digital gauges — no petrol-station accuracy." },
      { title: "Photo report", body: "Great for used-car pre-purchase inspections and fleet audits." },
      { title: "Free with fit", body: "Included on any fitting visit — no artificial add-on charges." },
    ],
    faqs: [
      { q: "What pressure should my tyres be?", a: "The door-jamb placard is the single authoritative source for your specific vehicle. It usually shows two figures: normal load and full load. Never the pressure moulded on the tyre sidewall — that's the maximum." },
      { q: "How often should I check tyre pressures?", a: "Monthly for daily-drivers, weekly for high-mileage or commercial use. Always before a long trip." },
      { q: "Can under-inflation cause a blowout?", a: "Yes — under-inflated tyres flex excessively, heat up beyond design temperature and can fail catastrophically at motorway speeds." },
      { q: "How much is a mobile pressure check?", a: "Free with any fitting visit. Standalone visits are quoted upfront — usually booked by fleets or as part of a pre-purchase inspection." },
      { q: "Do you check my spare?", a: "Yes — space-saver and full-size spares checked and reported. Very often the most-forgotten tyre." },
      { q: "What is a 'safe' tread depth?", a: "The legal minimum in the UK is 1.6mm across the central 75% of the tread. We honestly flag anything below 3mm as approaching replacement — wet-braking performance drops sharply below 3mm." },
    ],
    related: ["wheel-balancing", "tpms-sensor-replacement", "mobile-puncture-repair", "mobile-tyre-replacement", "fleet-mobile-tyre-services"],
  },

  "emergency-blowout-assistance": {
    slug: "emergency-blowout-assistance",
    category: "emergency",
    navLabel: "Emergency Blowout Assistance",
    h1: "Emergency Blowout Assistance in London",
    eyebrow: "Roadside · 24/7 · Rapid",
    metaTitle: "Emergency Blowout Assistance London | 24/7 Roadside",
    metaDescription:
      "24/7 emergency blowout assistance across London and the M25 corridor. On-scene tyre replacement after a blowout, typically within 30 minutes.",
    hero: imgEmergencyBlowoutAssistance,
    keywords: {
      primary: "emergency blowout assistance London",
      secondary: ["tyre blowout help", "roadside blowout service", "M25 tyre blowout", "motorway blowout tyre"],
    },
    intro: [
      "A blowout at speed is one of the most alarming things that can happen behind the wheel — a violent bang, sudden pull, and a shredded sidewall. It's also almost never repairable: the internal structure of the tyre is destroyed. What you need is a fast, safe, on-scene replacement — not a two-hour wait for recovery.",
      "Sam's Mobile Tyres runs a dedicated 24/7 blowout response service across London and the M25 corridor. Highways-trained crew, hi-vis kit, warning cones, and a fully-loaded van dispatched to your exact location — median arrival 28 minutes.",
    ],
    quickFacts: [
      { label: "Availability", value: "24/7 · 365" },
      { label: "Response", value: "28 min median" },
      { label: "Motorways", value: "M25 · M1 · M4 · M11 · A406 · A13" },
      { label: "Payment", value: "Card on-site, corporate invoicing" },
    ],
    benefits: [
      { title: "Fastest possible response", body: "Live-answered line, nearest van dispatched, live ETA. Median 28 minutes across London." },
      { title: "Highways-trained crew", body: "Every technician trained for hard-shoulder and refuge-area work. Cones, beacons and hi-vis always deployed." },
      { title: "Correct tyre on the van", body: "Not just a spare — the actual matched replacement tyre delivered to you." },
      { title: "No night surcharge", body: "3am price is 3pm price. Emergencies don't come with premium invoices." },
      { title: "Card on-site", body: "Chip-and-pin, Apple Pay, Google Pay all accepted at the roadside." },
      { title: "Photo receipts", body: "Tyre serial, tread and torque photographed and texted — proof of a safe, correct fit." },
    ],
    process: [
      { title: "Call & locate", body: "Share your location — postcode, what3words, or motorway marker. We confirm safety." },
      { title: "Immediate dispatch", body: "Nearest van rolls immediately with the correct matched tyre. Live ETA texted." },
      { title: "Site made safe", body: "Cones, beacons and hi-vis deployed. On smart motorways, Highways England coordinated before attending." },
      { title: "Fit & drive", body: "Tyre fitted, balanced, torqued, photographed. You drive away with a full receipt." },
    ],
    vehicleTypes: ["Cars", "SUVs & 4x4s", "Vans up to 3.5t", "Executive & luxury", "Motorhomes"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Live-answered 24/7", body: "One number, live dispatcher, every hour of every day." },
      { title: "Highways-trained", body: "Specifically trained for high-risk hard-shoulder work — this isn't a driveway service that also attends motorways." },
      { title: "Fully insured", body: "£10m public liability. Insurance certificates on request for corporate accounts." },
      { title: "5-star track record", body: "5.0★ across 76 verified Google reviews — highest band across London mobile assistance." },
    ],
    faqs: [
      { q: "Can a blown tyre be repaired?", a: "Almost never. A true blowout destroys the internal structure of the tyre. We'll bring a matched replacement and fit on-scene." },
      { q: "How fast can you get to a motorway blowout?", a: "For lay-bys and service stations, dispatch is immediate. For live hard-shoulder incidents on smart motorways we coordinate with Highways England — attendance typically 45–70 minutes end-to-end including their clearance." },
      { q: "Is a blowout dangerous?", a: "Yes — most drivers pull hard against the affected side. Grip the wheel firmly, ease off (don't brake hard), and steer toward the hard shoulder or lay-by. Do NOT stand behind the vehicle after stopping." },
      { q: "What causes a blowout?", a: "Under-inflation heating the sidewall, kerb strikes weakening the carcass, ageing (10+ year old tyres), impact damage from potholes, and running heavily overloaded." },
      { q: "Do you attend blowouts in Central London?", a: "Yes — most streets accessible. Ultra-narrow one-ways may need us to work partly on the pavement with cones deployed." },
      { q: "What if I don't have a spare?", a: "That's the norm now — many modern cars come without spares. We bring the actual matched replacement tyre; no need for a spare." },
    ],
    related: ["emergency-mobile-tyre-fitting", "roadside-tyre-assistance", "mobile-tyre-replacement", "same-day-tyre-fitting", "jump-start-service"],
  },

  "locking-wheel-key-recovery": {
    slug: "locking-wheel-key-recovery",
    category: "specialist",
    navLabel: "Locking Wheel Key Recovery",
    h1: "Locking Wheel Nut Key Recovery in London",
    eyebrow: "Lost Key · Replacement Sourcing",
    metaTitle: "Locking Wheel Key Recovery London | Sourcing & Replacement",
    metaDescription:
      "Lost your locking wheel nut key? We source replacements or extract without the key. Mobile service across London.",
    hero: imgLockingWheelKeyRecovery,
    keywords: {
      primary: "locking wheel key recovery",
      secondary: ["lost locking wheel nut key", "replacement locking wheel nut key London", "wheel nut key sourcing"],
    },
    intro: [
      "Losing your locking wheel nut key is more common than you'd think — it often lives loose in the glovebox and quietly vanishes. When you go to change a wheel or a tyre and can't find the key, you have two choices: order a replacement (if you have the key code) or have the locking nuts extracted and replaced.",
      "Sam's Mobile Tyres does both. If you can find the master key code (on the original key or in your service pack), we can order a factory replacement in days. If you've lost the code as well, our mobile extraction service removes the locking nuts alloy-safe and fits a fresh set — same visit.",
    ],
    quickFacts: [
      { label: "Replacement key delivery", value: "3–5 working days" },
      { label: "Mobile extraction", value: "Same-day, at your address" },
      { label: "Alloy damage", value: "None in >98% of cases" },
      { label: "Replacement nuts", value: "Fitted same visit" },
    ],
    benefits: [
      { title: "Two paths to fixed", body: "Replacement key if the code is recoverable; mobile extraction if not." },
      { title: "Master brand coverage", body: "McGard, Peugeot, Ford, VW, BMW, Mercedes, Audi, Volvo, Vauxhall, Toyota, Nissan and most aftermarket." },
      { title: "Fresh set fitted", body: "New locking set fitted and its key given directly to you — not left rattling in the glovebox." },
      { title: "Mobile — no tow", body: "Everything done at your home, work or roadside. No specialist garage trip." },
      { title: "Fast turnaround", body: "Same-day extraction; 3–5 day replacement key if code is available." },
      { title: "Photographic record", body: "Every extraction photographed. New key handed to you in a sealed pack." },
    ],
    process: [
      { title: "Check for the code", body: "Original key often has the code stamped on it. Service pack, main dealer, or manufacturer records may also hold it." },
      { title: "Order or extract", body: "If code found — factory replacement in 3–5 days. If not — mobile extraction booked." },
      { title: "Extract & replace", body: "Purpose-built extraction sockets remove the nut alloy-safe. New locking set fitted." },
      { title: "Keys handed over", body: "New master key handed directly to you; old broken/coded set retained for records." },
    ],
    vehicleTypes: ["All cars", "All vans", "SUVs & 4x4s", "Motorhomes", "Classics with aftermarket lockings"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Both paths under one roof", body: "Key sourcing or mobile extraction — you don't have to shop around." },
      { title: "Alloy-safe every time", body: ">98% of extractions leave zero alloy damage. Insurance-backed on the rare exception." },
      { title: "Replacement stock", body: "Standard chrome, black or fresh McGard sets stocked and fitted immediately." },
      { title: "Photo & receipt", body: "Every job photographed with new key in evidence pack." },
    ],
    faqs: [
      { q: "How do I find my locking wheel nut key code?", a: "Usually stamped on the plastic head of the original key, or in your car's service pack (McGard cards). Main dealers can retrieve it from the VIN in most cases." },
      { q: "How long for a replacement key?", a: "3–5 working days from confirmed code. Same-day extraction is faster if you can't wait." },
      { q: "Can you extract without any key at all?", a: "Yes — our multi-brand extraction kit grips the outside of the nut and removes it without needing any key. This is the more common outcome now that many drivers lose both key and code." },
      { q: "How much does key recovery cost?", a: "Key sourcing and mobile extraction are quoted upfront on the call — depends on vehicle brand and lock condition. Call +44 7949 891689 for a live quote." },
      { q: "Will you damage my alloys?", a: "In >98% of cases, no. On the rare exception our insurance covers repair." },
      { q: "Can I get a locking-nut-free vehicle?", a: "Yes — if you'd rather not have lockings at all, we can extract and replace with standard nuts. Insurance rarely requires lockings today." },
    ],
    related: ["locking-wheel-nut-removal", "emergency-mobile-tyre-fitting", "roadside-tyre-assistance", "mobile-tyre-replacement", "mobile-puncture-repair"],
  },

  "home-tyre-fitting": {
    slug: "home-tyre-fitting",
    category: "fitting",
    navLabel: "Home Tyre Fitting",
    h1: "Home Tyre Fitting in London",
    eyebrow: "Fitted on Your Driveway",
    metaTitle: "Home Tyre Fitting London | Driveway & Kerbside Service",
    metaDescription:
      "Mobile home tyre fitting across London. Fitted on your driveway or kerbside — premium brands, balanced, torqued, disposed of. Book online.",
    hero: imgHomeTyreFitting,
    keywords: {
      primary: "home tyre fitting London",
      secondary: ["driveway tyre fitting", "tyre fitting at home", "mobile home tyres London"],
    },
    intro: [
      "The idea of a tyre-fitting garage — drop the car off, wait in a plastic chair, get called two hours later — has been overdue for reinvention for decades. Sam's Mobile Tyres fits at your home instead. Driveway, kerbside, private car park, communal parking — we come to you across every London borough and the M25 corridor.",
      "Everything a garage does, we do at your address: dismount, balance, torque-controlled fit, TPMS reset, old-tyre disposal, VAT receipt. The only difference: you save the two hours, and the drop-off, and the collection.",
    ],
    quickFacts: [
      { label: "Location", value: "Driveway · kerbside · private parking" },
      { label: "Slot length", value: "60–90 minutes for four tyres" },
      { label: "Weekend", value: "Included — no premium" },
      { label: "Access needs", value: "1 metre around each wheel" },
    ],
    benefits: [
      { title: "Full garage service at home", body: "Nothing skipped. Balancing, torque control, disposal, TPMS reset — all done on the van." },
      { title: "Weekends & evenings", body: "Fit around your day: early mornings, late evenings, weekends — no premium." },
      { title: "You don't need to be home", body: "Leave the keys somewhere agreed. Photos of every step texted to you as we work." },
      { title: "Full brand choice", body: "26 premium brands on the van or same-day from the depot." },
      { title: "Photo receipts", body: "Every tyre photographed with serial, tread and torque reading. Full VAT receipt emailed." },
      { title: "Contactless payment", body: "Card, Apple Pay, Google Pay at your kerb. Corporate 30-day invoicing available." },
    ],
    process: [
      { title: "Book by reg or size", body: "Text your reg or sidewall size. Full quoted price confirmed within minutes." },
      { title: "Pick your slot", body: "Same-day, next-day, weekend, evening — pick the 60–90 minute window that works." },
      { title: "We arrive at your home", body: "Van rolls up loaded with your tyres, mat, balancer and payment terminal. Set up in minutes." },
      { title: "Fit & finish", body: "Balanced, torqued, photographed. Old tyres taken away for licensed recycling." },
    ],
    vehicleTypes: ["All cars", "SUVs & 4x4s", "Vans up to 3.5t", "Executive & luxury", "EVs & hybrids", "Classics"],
    tyreBrands: ALL_BRANDS,
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "Family-run, not franchise", body: "Same team every visit. You'll get to know your technician." },
      { title: "No hidden costs", body: "Balancing, valves, disposal, VAT — all included in one price." },
      { title: "Full brand choice", body: "26 premium brands actually available — not 'we'll fit whatever's on the van'." },
      { title: "5.0★ · 76 reviews", body: "Highest verified Google rating band across London mobile fitters." },
    ],
    faqs: [
      { q: "Do you need a driveway to fit at my home?", a: "No — kerbside on a residential street is fine, provided we have safe access around the wheels. Communal parking, gated developments and private car parks are all fine." },
      { q: "How long does home tyre fitting take?", a: "60–90 minutes for a full four-tyre changeover. 25–35 minutes for a single tyre." },
      { q: "Do you fit tyres in Central London?", a: "Yes — including congestion-charge zones. Parking permits are the driver's responsibility." },
      { q: "Can I leave the car and go to work?", a: "Yes — leave the keys somewhere agreed. We photograph everything and text you when done." },
      { q: "How much does home fitting cost vs a garage?", a: "Comparable or lower — we don't have garage overheads. And you save the two hours of drop-off/collection." },
      { q: "Do you fit tyres on Sundays?", a: "Yes — no weekend premium." },
      { q: "What if my parking is very tight?", a: "We can usually work with 1m around each wheel. If access is genuinely impossible we'll say so before dispatch and suggest a nearby location." },
    ],
    related: ["mobile-tyre-replacement", "same-day-tyre-fitting", "workplace-tyre-fitting", "premium-tyre-brands", "wheel-balancing"],
  },

  "workplace-tyre-fitting": {
    slug: "workplace-tyre-fitting",
    category: "fitting",
    navLabel: "Workplace Tyre Fitting",
    h1: "Workplace Tyre Fitting in London",
    eyebrow: "Fitted at Your Office",
    metaTitle: "Workplace Tyre Fitting London | Office Car Park Service",
    metaDescription:
      "Mobile workplace tyre fitting across London. Fitted in your office car park while you work — premium brands, no time off, no wait.",
    hero: imgWorkplaceTyreFitting,
    keywords: {
      primary: "workplace tyre fitting London",
      secondary: ["office tyre fitting", "office car park tyres", "mobile tyres at work London"],
    },
    intro: [
      "Take an hour of your working day for a tyre change? No thanks. Sam's Mobile Tyres fits at your workplace — office car park, business park, industrial estate, or any commercial parking site — across every London borough and the M25 corridor. You don't lose the day; you just find your tyres done at 5pm.",
      "For businesses, we can arrange bulk fitting days: a van attends the site, and any employee who's booked in gets their tyres done during working hours. Popular with tech, finance and creative agencies with 50+ staff.",
    ],
    quickFacts: [
      { label: "Where", value: "Office car park · business park · industrial estate" },
      { label: "Slot", value: "60–90 minutes" },
      { label: "Bulk days", value: "Available for 5+ employees" },
      { label: "Payment", value: "Personal card or corporate invoice" },
    ],
    benefits: [
      { title: "No time off work", body: "Fit while you're at your desk. Keys left with reception, tyres done by end of day." },
      { title: "Bulk-day discounts", body: "For 5+ employees booking the same day, per-fit discount applies." },
      { title: "Corporate billing available", body: "Per-employee, per-team or centrally billed — 30-day invoice terms." },
      { title: "Full brand choice", body: "26 premium brands available at your kerb." },
      { title: "Weekends possible", body: "Weekend workplace fitting for retail parks, event venues and 7-day operations." },
      { title: "Access-friendly", body: "Multi-storey car parks with 2.1m+ headroom, business-park kerbs, and industrial-estate loading bays all standard." },
    ],
    process: [
      { title: "Book individually or as a team", body: "For a single employee — book yourself. For 5+, we set up a shared calendar for your office manager." },
      { title: "Location approved", body: "We check accessibility for the workplace parking. Most sites are fine; we flag anything that isn't." },
      { title: "Van attends", body: "Van rolls up during working hours. Employees leave keys with reception — no interruption to work." },
      { title: "Text-when-done", body: "You get texted a photo receipt when your car's ready — usually before 5pm." },
    ],
    vehicleTypes: ["All employee cars", "Company cars & pool fleets", "Executive & luxury", "Vans & light commercials"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "HR-team friendly", body: "One point of contact for booking; easy per-team or central billing." },
      { title: "No downtime for staff", body: "Not a single hour lost — the work happens at their car, not at them." },
      { title: "Full brand choice", body: "Employees pick their own brand — not 'we'll fit whatever'." },
      { title: "Fully insured", body: "£10m public liability. Certificates provided to facilities managers." },
    ],
    faqs: [
      { q: "Do I need approval from my office to book workplace fitting?", a: "For a private car in a company car park, usually just informing reception is enough. For a corporate booking day, we deal with facilities directly." },
      { q: "Can you fit tyres in a multi-storey?", a: "Yes — provided there's 2.1m+ headroom. Most modern multi-storeys work fine." },
      { q: "How does bulk-day pricing work?", a: "For 5+ employees on the same day, a per-fit discount applies. Larger groups (20+) get further tiered discounts." },
      { q: "Can the company be invoiced instead of individuals?", a: "Yes — 30-day corporate invoice. Or per-employee card payment — whichever you prefer." },
      { q: "Do you fit company car / lease vehicles?", a: "Yes — lease-company approval is the driver's responsibility, but the fitting itself is standard." },
      { q: "Can this be a company benefit?", a: "Yes — several London tech and finance firms offer this as a workplace perk. We handle setup and invoicing." },
    ],
    related: ["fleet-mobile-tyre-services", "mobile-tyre-replacement", "home-tyre-fitting", "same-day-tyre-fitting", "premium-tyre-brands"],
  },

  "mobile-tyre-fitting-luxury-cars": {
    slug: "mobile-tyre-fitting-luxury-cars",
    category: "specialist",
    navLabel: "Luxury Car Tyre Fitting",
    h1: "Mobile Tyre Fitting for Luxury Cars in London",
    eyebrow: "Mercedes · BMW · Audi · Tesla · Porsche · Range Rover",
    metaTitle: "Luxury Car Tyre Fitting London | Mercedes, BMW, Porsche",
    metaDescription:
      "Specialist mobile tyre fitting for luxury cars across London: Mercedes, BMW, Audi, Tesla, Porsche, Range Rover. OEM-marked tyres, staggered fitments.",
    hero: imgMobileTyreFittingLuxuryCars,
    keywords: {
      primary: "luxury car tyre fitting London",
      secondary: ["Mercedes tyre fitting London", "BMW tyre fitting London", "Tesla tyre fitting London", "Porsche N-rated tyres London", "Range Rover tyres London"],
    },
    intro: [
      "Luxury cars are not a bigger version of regular cars. Their chassis dynamics are developed on specific tyres — Porsche uses N-ratings (N0–N7); Mercedes uses MO; BMW uses ★; Audi uses AO; Tesla uses T0 and T1; Jaguar/Land Rover uses LR. Fitting a non-marked equivalent — even from the same brand — subtly changes how the car steers, brakes and handles, and can invalidate a manufacturer warranty.",
      "Sam's Mobile Tyres specialises in luxury and executive mobile tyre fitting across London. Every OEM marking properly stocked, staggered fitments (different-width front and rear) handled correctly, run-flats (ZP, SSR, RFT, r-f) supported, and TPMS/BMS coding done on-site.",
    ],
    quickFacts: [
      { label: "OEM markings", value: "★ · MO · AO · N0–N7 · LR · T0/T1" },
      { label: "Staggered fitments", value: "Handled correctly, direction of rotation observed" },
      { label: "Run-flats", value: "ZP · SSR · RFT · r-f all fitted" },
      { label: "Coding", value: "BMS/TPMS on-site for BMW, Merc, Audi, JLR" },
    ],
    benefits: [
      { title: "OEM markings stocked", body: "Every major manufacturer marking held in stock — never a 'close enough' substitute." },
      { title: "Staggered fitment specialists", body: "BMW M-series, Porsche 911, Mercedes AMG, Audi RS — different-width tyres front/rear handled correctly." },
      { title: "Run-flat capable", body: "Every van tooled for run-flat bead-seating. Michelin ZP, Bridgestone RFT, Continental SSR, Pirelli r-f all fitted." },
      { title: "Full BMS coding", body: "Battery/TPMS coding on-site for BMW, Mercedes, Audi, VW, Volvo, Land Rover, Jaguar." },
      { title: "Alloy-safe fitting", body: "Adhesive weights and rim-friendly bead-seating tools — never marked, never scratched." },
      { title: "Discretion", body: "Familiar with high-value vehicles, gated developments, chauffeur pool cars and event-day scheduling." },
    ],
    process: [
      { title: "Vehicle spec confirmed", body: "V5 or reg checked against manufacturer's OEM database — correct marking and staggered spec identified." },
      { title: "Correct tyre sourced", body: "N, MO, AO, ★, T0, T1 or LR marking sourced. Never a same-brand-different-marking substitute." },
      { title: "Fit at your location", body: "Home, private garage, gated development, or event venue — the van attends discreetly." },
      { title: "Coded & torqued", body: "TPMS/BMS coded on-site; torque to manufacturer's exact spec; photo receipt sent." },
    ],
    vehicleTypes: ["Mercedes-Benz", "BMW", "Audi", "Porsche", "Tesla", "Range Rover & Land Rover", "Jaguar", "Bentley & Rolls-Royce (by arrangement)", "Ferrari & Lamborghini (by arrangement)"],
    tyreBrands: ["Michelin Pilot Sport 5 / 4S / PS4 ZP", "Continental SportContact 7 / 6 SSR", "Bridgestone Potenza Sport RFT", "Pirelli P Zero PZ4 / r-f", "Goodyear Eagle F1 SuperSport"],
    coverageAreas: COVERAGE_LONDON,
    whyUs: [
      { title: "OEM-mark specialists", body: "We know exactly which N-rating your 911 has and which MO your S-Class needs. Most mobile fitters don't." },
      { title: "Staggered-fitment fluent", body: "M-series, AMG, RS, GT — different widths front and rear are our normal, not an exception." },
      { title: "Full coding capability", body: "BMS/TPMS coding on every van — critical on premium marques." },
      { title: "Discreet & insured", body: "£10m public liability. Familiar with gated developments and event-day scheduling for high-value cars." },
    ],
    faqs: [
      { q: "Do I have to use OEM-marked tyres on my luxury car?", a: "For a vehicle still under manufacturer warranty, yes — non-marked tyres can invalidate the warranty. Post-warranty, the marked version is still the correct engineering choice: the chassis was developed on it." },
      { q: "What's the difference between N0, N1, N2, N3, N4, N5, N6 and N7?", a: "Porsche uses these to designate tyres homologated for a specific model/generation. N0 is oldest; N7 is current 992-generation. Fitting an N3 on a 992 doesn't work with the chassis tuning — we always match exactly." },
      { q: "Do you fit run-flats on BMWs?", a: "Yes — Michelin Pilot Sport 4 ZP, Bridgestone Potenza Sport RFT, and Continental SportContact 7 SSR all stocked for common M-series and 3/5/7-series fitments." },
      { q: "Can you fit tyres to my Tesla?", a: "Yes — Michelin Primacy 4 T0/T1 and Pilot Sport 4 T0 stocked for Model 3, Model Y, Model S. Full battery-preservation practices during fitting." },
      { q: "Do you handle staggered fitments?", a: "Yes — different-width front/rear tyres and direction-of-rotation are standard for our luxury service. M-series, AMG, RS, GT-R, GT3 all handled correctly." },
      { q: "Can you attend at a gated development?", a: "Yes — we deal with a lot of gated developments across Chelsea, Kensington, Hampstead and St John's Wood. Concierge/estate manager coordination as required." },
      { q: "Do you fit tyres at private events?", a: "Yes — Goodwood, Silverstone, London Concours and similar events by advance arrangement. Discreet, out-of-shot service." },
      { q: "Is your service more expensive for luxury cars?", a: "Not for our labour — the tyres themselves are more expensive because of the marking and construction. Our fitting price is the same standard." },
    ],
    related: ["premium-tyre-brands", "mobile-tyre-replacement", "tpms-sensor-replacement", "wheel-balancing", "home-tyre-fitting"],
  },
};

export const ALL_SERVICE_SLUGS = Object.keys(SERVICES);
export const ALL_SERVICES: ServiceEntry[] = Object.values(SERVICES);
