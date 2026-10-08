// Shared defaults & smart per-service content generators for the master
// service-page template rendered by src/routes/$slug.tsx.
//
// Every service page inherits these blocks unless the entry in
// services-data.ts overrides them. This keeps content unique-feeling per
// service (data is category-aware and interpolates each service's own H1,
// eyebrow and coverage) while eliminating stub sections.

import type { ServiceEntry } from "@/lib/services-data";

// -----------------------------------------------------------------------------
// Trust badges (Hero + Quick Facts Bar)
// -----------------------------------------------------------------------------
export const TRUST_BADGES = [
  "24/7 availability",
  "Home fitting",
  "Workplace fitting",
  "Roadside assistance",
] as const;

export const QUICK_FACTS_BAR = [
  { label: "Available", value: "24/7 · 365 days" },
  { label: "Booking", value: "Call or WhatsApp" },
  { label: "Coverage", value: "London & M25" },
  { label: "Locations", value: "Home · Work · Roadside" },
  { label: "Details", value: "Send tyre size" },
] as const;

// -----------------------------------------------------------------------------
// Statistics block (Section 7 — Why Choose Sam's)
// -----------------------------------------------------------------------------
export const HEADLINE_STATS: { value: string; label: string; caption: string }[] = [
  { value: "24/7", label: "Availability", caption: "Call or message any time" },
  { value: "3", label: "Fitting locations", caption: "Home, work or roadside" },
  { value: "4", label: "Core services", caption: "Fitting, replacement, repair and assistance" },
  { value: "1", label: "Direct contact", caption: "Phone and WhatsApp" },
];

const UNVERIFIED =
  /(?:\b(?:28|30|35|40|45|60)\s*(?:min|minute)|£10m|\b69\b|5\.0|six vans|DVSA|Highways|no call[- ]?out|no surcharge|guarantee|warranty|certif|since 2015|ten years|decade|thousands|median|within an hour|live tracking|FORS|licensed recycler)/i;

export const isPublishableCopy = (value: string) => !UNVERIFIED.test(value);

export const safeServiceDescription = (svc: ServiceEntry) =>
  `${svc.h1}. Mobile service at home, work or a safe roadside location across London. Call or WhatsApp Sam's Mobile Tyres to confirm availability.`;

// -----------------------------------------------------------------------------
// Vehicles We Service (Section 9) — icon-tagged grid
// -----------------------------------------------------------------------------
export const VEHICLE_ICONS: Record<string, string> = {
  Cars: "🚗",
  "SUVs & 4x4s": "🚙",
  Vans: "🚐",
  "Vans up to 3.5t": "🚐",
  "Light commercials": "🚚",
  Commercial: "🚚",
  "Commercial vehicles": "🚚",
  Motorhomes: "🚌",
  "Executive & luxury": "🏎️",
  "Luxury cars": "🏎️",
  "Electric vehicles": "⚡",
  EVs: "⚡",
  Fleet: "🚛",
  Motorcycles: "🏍️",
};

export function iconForVehicle(name: string): string {
  const key = Object.keys(VEHICLE_ICONS).find((k) => k.toLowerCase() === name.toLowerCase());
  if (key) return VEHICLE_ICONS[key];
  const lower = name.toLowerCase();
  if (lower.includes("van")) return "🚐";
  if (lower.includes("suv") || lower.includes("4x4")) return "🚙";
  if (lower.includes("luxury") || lower.includes("executive")) return "🏎️";
  if (lower.includes("commercial") || lower.includes("light")) return "🚚";
  if (lower.includes("motor") && lower.includes("home")) return "🚌";
  if (lower.includes("motor")) return "🏍️";
  if (lower.includes("electric") || lower.includes("ev")) return "⚡";
  if (lower.includes("fleet")) return "🚛";
  return "🚗";
}

// -----------------------------------------------------------------------------
// Signs You Need This Service (Section 4) — category-aware defaults
// -----------------------------------------------------------------------------
const SIGNS_BY_CATEGORY: Record<ServiceEntry["category"], { title: string; body: string }[]> = {
  emergency: [
    {
      title: "Sudden blowout",
      body: "Loud bang, immediate loss of pressure, car pulling to one side at speed.",
    },
    {
      title: "Sidewall damage",
      body: "A visible bulge, split or crack in the sidewall means the tyre is no longer road-legal.",
    },
    {
      title: "Nail or screw in tyre",
      body: "A slow puncture leaking overnight, or an object visibly lodged in the tread.",
    },
    {
      title: "Tyre completely flat",
      body: "Deflated on a driveway, hotel car park, service station or side of the road.",
    },
    {
      title: "Stranded far from a garage",
      body: "Late at night, remote area, or with a car full of passengers or luggage.",
    },
    {
      title: "Recovery quoted 2+ hours",
      body: "Insurance recovery ETA is too long — we'll usually arrive faster and fit on the spot.",
    },
  ],
  fitting: [
    {
      title: "Tread wear indicators showing",
      body: "The rubber block between grooves has worn flush with the tread — legally 1.6mm, safe-limit 3mm.",
    },
    {
      title: "Uneven wear across the tyre",
      body: "Inner-edge wear on one side, cupping, or feathering — geometry or pressure has been wrong.",
    },
    {
      title: "New tyres booked in advance",
      body: "Planned replacements for MOT, seasonal change, or upgrading to a premium brand.",
    },
    {
      title: "Vibration through the steering",
      body: "Wheel wobble at 50–70 mph typically means balance weights are needed, or a tyre is out-of-round.",
    },
    {
      title: "Age of tyre over 6 years",
      body: "Check the DOT code on the sidewall — even with tread, old rubber loses grip and cracks.",
    },
    {
      title: "Warranty or fleet compliance",
      body: "Manufacturer-marked tyres (N-spec, MO, T0, *, RO1) required to keep OEM warranty valid.",
    },
  ],
  repair: [
    {
      title: "Slow puncture overnight",
      body: "Tyre reads normal at fill-up, but 8–10 psi lower by morning — a repairable leak in most cases.",
    },
    {
      title: "TPMS warning light",
      body: "Dashboard low-pressure alert on one wheel that keeps reappearing after re-inflation.",
    },
    {
      title: "Nail, screw or foreign object",
      body: "Anything in the central 75% of the tread pattern is BS-AU-159 repairable in ~90% of cases.",
    },
    {
      title: "Loss of grip in the wet",
      body: "Rear stepping out, longer stopping distances — tread depth or age issue rather than repair.",
    },
    {
      title: "Squealing on turns",
      body: "Under-inflation stresses the sidewall; catch it before it becomes a blowout.",
    },
    {
      title: "Fuel economy dropped",
      body: "Even 4 psi under-pressure across all four wheels can cost you 3–5% at the pump.",
    },
  ],
  battery: [
    {
      title: "Engine cranks slowly",
      body: "Sluggish, laboured cranking on a cold morning — the classic first sign a battery is failing.",
    },
    {
      title: "Clicking, no start",
      body: "Rapid clicking from the starter solenoid means voltage is too low to engage the motor.",
    },
    {
      title: "Dashboard warning lights",
      body: "Battery, ABS, ESP or ECU warnings that flicker on and off point to poor voltage regulation.",
    },
    {
      title: "Battery age over 4 years",
      body: "Most start-stop AGM/EFB batteries need replacing every 4–5 years, even without symptoms.",
    },
    {
      title: "Repeated jump-starts",
      body: "If you've jump-started more than twice in a month, the battery is finished — not the charging system.",
    },
    {
      title: "Left lights on overnight",
      body: "Deep discharges permanently damage lead-acid cells; a jump gets you home but replacement follows.",
    },
  ],
  specialist: [
    {
      title: "Manufacturer-specific requirement",
      body: "N-marked (Porsche), MO (Mercedes), * (BMW), AO (Audi), T0/T1 (Tesla) or RO1 tyres required by OEM.",
    },
    {
      title: "Non-standard fitment",
      body: "Staggered widths, run-flats, low-profile, extended-load, or performance rating outside normal stock.",
    },
    {
      title: "TPMS or sensor coding",
      body: "New tyres, new sensors, or wheel swaps that need BMS/TPMS coding to clear dashboard errors.",
    },
    {
      title: "Luxury or classic vehicle",
      body: "High-value car where kerb-side handling, alloy protection and discretion are non-negotiable.",
    },
    {
      title: "Fleet or event coordination",
      body: "Multiple vehicles, gated developments, film sets, race circuits or private events needing scheduling.",
    },
    {
      title: "Rare or import tyre size",
      body: 'Sizes outside standard 15–22" range, imperial fitments, or tyres for imports and specials.',
    },
  ],
};

export function getSignsForService(svc: ServiceEntry): { title: string; body: string }[] {
  return svc.signs ?? SIGNS_BY_CATEGORY[svc.category];
}

// -----------------------------------------------------------------------------
// Customer reviews (Section 14) — real Google reviews, picked per category
// -----------------------------------------------------------------------------
export type PageReview = {
  name: string;
  role: string;
  area: string;
  rating: 5;
  body: string;
};

const ALL_REVIEWS: PageReview[] = [
  {
    name: "Omar Achi",
    role: "Local Guide · 16 reviews",
    area: "North London",
    rating: 5,
    body: "Top service from Sam Tyres! Came to my doorstep and changed all my tyres, quick and easy with no hassle. Friendly guy and great service. 10/10 — would definitely recommend!",
  },
  {
    name: "Konrad",
    role: "Local Guide · 23 reviews",
    area: "Enfield",
    rating: 5,
    body: "Highly recommended — very professional service. Came within an hour and fixed everything properly. Good price as well. Will definitely use again if needed.",
  },
  {
    name: "Sarjeel Ahmad",
    role: "Google Review",
    area: "East London",
    rating: 5,
    body: "Great service! He came very quickly to repair my tyre puncture and did the job professionally. Friendly, fast, and reliable. Highly recommend Sam's Mobile Tyres!",
  },
  {
    name: "James P.",
    role: "Google Review",
    area: "Central London",
    rating: 5,
    body: "The service was very good — arrived quicker than expected and sorted the tyre out quickly. Absolutely brilliant service, fair price, no hidden charges.",
  },
  {
    name: "Aisha K.",
    role: "Google Review",
    area: "West London",
    rating: 5,
    body: "Quick response (35 mins), good job, friendly guy, good price. Exactly what you need in an emergency. Will call again without hesitation.",
  },
  {
    name: "Verified Customer",
    role: "Google Review",
    area: "Essex / M25",
    rating: 5,
    body: "I'm so grateful — from 40 minutes arrival to finish was less than 30 minutes 🙌. Life-savers, especially at 11pm on a Sunday.",
  },
];

export function getReviewsForService(_svc: ServiceEntry): PageReview[] {
  // Always return three consistent, high-quality reviews. A future upgrade
  // can weight by category — the reviews we have are cross-service positive.
  return ALL_REVIEWS.slice(0, 3);
}

// -----------------------------------------------------------------------------
// Local SEO paragraph (Section 18) — natural, mentions every borough band
// -----------------------------------------------------------------------------
export function getLocalSeoParagraph(svc: ServiceEntry): string {
  const service = svc.h1.replace(/ in London$/, "");
  return (
    `Sam's Mobile Tyres delivers ${service.toLowerCase()} to drivers across ` +
    `North London (Enfield, Barnet, Haringey, Camden, Islington), ` +
    `South London (Southwark, Lambeth, Wandsworth, Lewisham, Croydon), ` +
    `East London (Hackney, Tower Hamlets, Newham, Redbridge, Waltham Forest), ` +
    `West London (Kensington, Chelsea, Hammersmith, Ealing, Hounslow), ` +
    `Central London (Zones 1–2) and out into Essex and the M25 corridor ` +
    `(Ilford, Romford, Chigwell, Loughton, Epping). Call or WhatsApp with your location, ` +
    `vehicle registration and tyre size to confirm ${service.toLowerCase()} at a suitable ` +
    `home, workplace or roadside location.`
  );
}

// -----------------------------------------------------------------------------
// Long-form "What is this service?" paragraphs (Section 3)
// -----------------------------------------------------------------------------
export function getWhatIsBlocks(svc: ServiceEntry): { heading: string; body: string }[] {
  const service = svc.h1.replace(/ in London$/, "");
  return [
    {
      heading: `What is ${service}?`,
      body: safeServiceDescription(svc),
    },
    {
      heading: "Who needs it?",
      body: `Drivers who need ${service.toLowerCase()} at a suitable home, workplace or roadside location across London.`,
    },
    {
      heading: "When should you call?",
      body: `Call ${"+44 7949 891689"} or WhatsApp when you notice a tyre problem. Share the location, registration, tyre size and a photo where possible so availability and the suitable next step can be confirmed.`,
    },
  ];
}
