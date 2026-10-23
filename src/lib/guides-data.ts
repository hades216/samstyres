// Data-driven "Guides" content — informational articles that support the
// core service/location pages for AEO (answer-engine citation) and organic
// long-tail search. Follows the same record+template pattern as
// src/lib/location-pages.ts, rendered generically by
// src/components/guide-page.tsx via the "guide" branch of src/routes/$slug.tsx.
//
// Content here is general UK tyre/road-safety knowledge — it deliberately
// avoids company-specific numbers (response times, prices, founding facts)
// per seo-claims-verification.md. Anything specific to Sam's Mobile Tyres
// stays limited to confirmed facts (phone, 24/7 availability, coverage area).

import emergencyBlowout from "@/assets/svc/emergency-blowout-assistance.webp";
import emergencyFitting from "@/assets/svc/emergency-mobile-tyre-fitting.webp";
import premiumTyreBrands from "@/assets/svc/premium-tyre-brands.webp";
import homeTyreFitting from "@/assets/svc/home-tyre-fitting.webp";
import lockingWheelKeyRecovery from "@/assets/svc/locking-wheel-key-recovery.webp";
import mobileTyreReplacement from "@/assets/svc/mobile-tyre-replacement.webp";
import workplaceTyreFitting from "@/assets/svc/workplace-tyre-fitting.webp";
import vanTyreReplacement from "@/assets/svc/van-tyre-replacement.webp";
import tyreCloseup from "@/assets/tyre-closeup.webp";
import tpmsSensor from "@/assets/svc/tpms-sensor-replacement.webp";

export type GuideBlock =
  | { type: "text"; heading: string; paragraphs: string[] }
  | {
      type: "pair";
      heading: string;
      copy?: string;
      left: { label: string; tone: "good" | "bad"; items: string[] };
      right: { label: string; tone: "good" | "bad"; items: string[] };
    }
  | { type: "steps"; heading: string; copy?: string; steps: { t: string; d: string }[] }
  | { type: "list"; heading: string; copy?: string; items: { t: string; d: string }[] }
  | { type: "callout"; heading: string; body: string };

export type GuideEntry = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  dek: string;
  hero: string;
  datePublished: string;
  dateModified: string;
  intro: string[];
  blocks: GuideBlock[];
  faqs: { q: string; a: string }[];
  related: { label: string; slug: string }[];
};

export const GUIDES: Record<string, GuideEntry> = {
  "m25-tyre-blowout-what-to-do": {
    slug: "m25-tyre-blowout-what-to-do",
    title: "What to Do After a Tyre Blowout on the M25 | Sam's Mobile Tyres",
    description:
      "A tyre blowout on the M25 or another smart motorway is frightening but manageable. Here's the safe sequence: control the car, find a refuge, call for help.",
    eyebrow: "Guide · Motorway Safety",
    h1: "What to do after a tyre blowout on the M25",
    dek: "A blowout at speed is one of the most frightening things that can happen on a motorway. Here is the safe sequence to follow, in order.",
    hero: emergencyBlowout,
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    intro: [
      "A sudden loss of pressure at motorway speed — usually a loud bang followed by the car pulling hard to one side — is a tyre blowout. It is more common on hot days, on underinflated tyres, and on worn tread. What you do in the first ten seconds and the following few minutes matters far more than what caused it.",
      "Large stretches of the M25 operate as an all-lane-running smart motorway, which means there is no continuous hard shoulder. That changes the safe response compared with a traditional motorway, so it is worth knowing the sequence before you need it.",
    ],
    blocks: [
      {
        type: "steps",
        heading: "The safe sequence",
        copy: "Follow these steps in order. Do not skip straight to changing the tyre.",
        steps: [
          {
            t: "Hold the wheel firmly",
            d: "Grip the steering wheel with both hands, ease off the accelerator and let the car slow naturally. Do not brake hard or swerve — a sudden steering or braking input on a blown tyre is what causes loss of control.",
          },
          {
            t: "Signal and move left",
            d: "Once speed has dropped and it is safe, indicate and move across to the nearest verge, emergency refuge area (ERA) or, if on a section with a hard shoulder, the hard shoulder itself.",
          },
          {
            t: "Get out safely, on the left",
            d: "If you can, exit the vehicle from the passenger side, away from live traffic, and stand behind a barrier or well back from the carriageway. Put on a hi-vis vest if you have one.",
          },
          {
            t: "Call for help",
            d: "On a smart motorway with an ERA, use the roadside SOS phone if available — it identifies your exact location automatically. Otherwise call National Highways (0300 123 5000, free, 24/7) or 999 if you are in a live lane and cannot move.",
          },
          {
            t: "Arrange the tyre fix",
            d: "Once you are somewhere safe, call a mobile tyre fitter to attend the refuge area or arrange recovery to a safer location if the refuge area itself isn't suitable for roadside work.",
          },
        ],
      },
      {
        type: "pair",
        heading: "Refuge area vs stopping in a live lane",
        copy: "What matters most is where the car ends up, not how it got there.",
        left: {
          label: "Emergency refuge area / hard shoulder",
          tone: "good",
          items: [
            "Marked with blue signs roughly every 1.5 miles on all-lane-running sections",
            "Has an SOS phone that connects directly to National Highways",
            "Exit the vehicle on the side away from traffic wherever possible",
            "Wait behind the barrier, not next to the car",
          ],
        },
        right: {
          label: "Stopped in a live running lane",
          tone: "bad",
          items: [
            "Switch on hazard lights immediately",
            "Do not attempt to change the tyre yourself",
            "Stay belted in with seatbelts on if you cannot safely exit",
            "Call 999 — this is treated as an emergency, not a breakdown",
          ],
        },
      },
      {
        type: "callout",
        heading: "Is a blown tyre repairable?",
        body: "Almost never. A blowout typically tears the tread or sidewall structure, which falls outside the UK's BS AU 159 repair standard. Treat it as a replacement and have the wheel and surrounding arch checked for secondary damage from debris.",
      },
    ],
    faqs: [
      {
        q: "Is it safe to change a tyre myself on the M25 hard shoulder?",
        a: "National Highways advises against changing a tyre on a live hard shoulder or running lane — it's one of the most dangerous places on the road network. Get to a refuge area or verge, call for help, and wait well away from the carriageway rather than attempting a roadside change.",
      },
      {
        q: "What is a smart motorway refuge area (ERA)?",
        a: "An ERA is a marked lay-by set back from the carriageway on all-lane-running motorway sections, used when there's no continuous hard shoulder. They're spaced at intervals and each has an orange SOS phone that connects directly to the National Highways control room.",
      },
      {
        q: "Who do I call if I break down on the M25?",
        a: "National Highways on 0300 123 5000 (free, 24/7) for smart motorway incidents, or 999 if you're stopped in a live lane and can't move to safety. Once you're safely off the carriageway, call a mobile tyre fitter or your recovery provider for the tyre itself.",
      },
      {
        q: "Can I get a tyre fitted at an emergency refuge area?",
        a: "It depends on the specific location and traffic conditions — refuge areas are narrow and close to live lanes, so a fitter will assess whether it's safe to work there or whether the vehicle needs to be recovered to a safer spot first.",
      },
    ],
    related: [
      { label: "Emergency blowout assistance", slug: "emergency-blowout-assistance" },
      { label: "Roadside tyre assistance", slug: "roadside-tyre-assistance" },
      { label: "Waltham Cross (M25 J25)", slug: "mobile-tyre-fitting-waltham-cross" },
    ],
  },

  "emergency-tyre-fitting-a10-enfield": {
    slug: "emergency-tyre-fitting-a10-enfield",
    title: "Emergency Tyre Fitting Near the A10 in Enfield | Sam's Mobile Tyres",
    description:
      "Stopped with a damaged tyre near the A10 in Enfield? Here's how to stop safely, share your exact location, and get mobile tyre help to you.",
    eyebrow: "Guide · Enfield & the A10",
    h1: "Emergency tyre fitting near the A10 in Enfield",
    dek: "What to do if a tyre fails while you're driving through Enfield or along the A10 corridor.",
    hero: emergencyFitting,
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    intro: [
      "The A10 runs straight through Enfield, connecting to the North Circular, M25 Junction 25 and the Hertfordshire towns beyond. It's a busy dual carriageway in places and a slower local road in others, so the safe response to a tyre problem depends on exactly where you are.",
      "The most useful thing you can do before calling anyone is find the safest possible stopping point and know precisely where that is — vague directions cost time that matters when you're on or near a live carriageway.",
    ],
    blocks: [
      {
        type: "list",
        heading: "Where to stop, depending on where you are",
        items: [
          {
            t: "On the A10 itself",
            d: "Look for a slip road, service area, or wide verge rather than stopping on the carriageway. If the tyre is still holding air, it's often safer to continue slowly to the next safe pull-in than to stop on a fast-moving dual carriageway.",
          },
          {
            t: "Around Enfield Town or EN1–EN3 residential streets",
            d: "Pull onto a side road, driveway, or a quiet stretch away from a junction. Avoid stopping on double yellow lines or blocking a driveway if you can help it.",
          },
          {
            t: "Near M25 Junction 25",
            d: "Treat this like a motorway situation — get well off the carriageway, ideally into the services or the first safe turning, before stopping.",
          },
        ],
      },
      {
        type: "steps",
        heading: "What to have ready when you call",
        copy: "This is the information that lets a mobile fitter confirm availability and bring the right tyre first time.",
        steps: [
          {
            t: "Exact location",
            d: "A postcode, a what3words reference, or a description of the nearest landmark, junction or shop front. A pin dropped from your phone's maps app and sent by WhatsApp is the fastest way to share this precisely.",
          },
          {
            t: "Vehicle registration",
            d: "This lets the correct tyre size be checked against the vehicle even before you read the sidewall.",
          },
          {
            t: "Tyre size from the sidewall",
            d: "Printed in a format like 205/55 R16 91V — see our guide on reading a tyre sidewall if you're not sure which numbers matter.",
          },
          {
            t: "A photo of the damage",
            d: "Helps confirm whether this looks like a repairable puncture or a replacement situation before the fitter arrives.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you provide emergency tyre fitting near the A10 in Enfield?",
        a: "Yes. We cover the A10 through Enfield and connecting roads, attending safe, accessible locations at the roadside, at home or at work.",
      },
      {
        q: "Is it safe to drive on a damaged tyre to find somewhere safer?",
        a: "It depends on the damage. A slow puncture that's still holding some air can often be driven a short distance to a safer stopping point at low speed. A tyre that's flat, has visible sidewall damage, or is making noise on the rim should not be driven — stop as soon as it's safely possible.",
      },
      {
        q: "What should I do if I've broken down near M25 Junction 25?",
        a: "Treat it as a motorway situation: get to the nearest safe refuge, verge or service area rather than stopping on the carriageway, then call for help. See our M25 blowout guide for the full safe sequence.",
      },
    ],
    related: [
      { label: "Mobile tyre fitting in Enfield", slug: "mobile-tyre-fitting-enfield" },
      { label: "Emergency tyre fitting", slug: "emergency-mobile-tyre-fitting" },
      { label: "Roadside tyre assistance", slug: "roadside-tyre-assistance" },
    ],
  },

  "can-a-run-flat-tyre-be-repaired": {
    slug: "can-a-run-flat-tyre-be-repaired",
    title: "Can a Run-Flat Tyre Be Repaired? | Sam's Mobile Tyres",
    description:
      "Run-flat tyres are built differently from standard tyres, and that changes whether a puncture can be safely repaired. Here's how to tell.",
    eyebrow: "Guide · Run-Flat Tyres",
    h1: "Can a run-flat tyre be repaired?",
    dek: "Run-flats are engineered differently to standard tyres, and that changes the repair-or-replace decision.",
    hero: premiumTyreBrands,
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    intro: [
      "Run-flat tyres (marked RFT, ROF, SSR, ZP, EMT or similar depending on the manufacturer) use a reinforced sidewall that can support the vehicle's weight for a limited distance after a total loss of pressure, rather than relying on a separate support ring or sealant.",
      "That reinforced sidewall is exactly what makes the repair question different from a standard tyre. Most tyre manufacturers and UK industry bodies such as TyreSafe advise against repairing a run-flat that has been driven in a deflated or low-pressure state, because the internal structure can suffer damage that isn't visible from the outside.",
    ],
    blocks: [
      {
        type: "pair",
        heading: "Repairable vs replacement",
        copy: "The general industry position most manufacturers apply to run-flats.",
        left: {
          label: "May be assessed for repair",
          tone: "good",
          items: [
            "Punctured while still at or near normal running pressure",
            "Not driven any meaningful distance in a deflated state",
            "Damage is in the central tread area, within standard repair limits",
            "No visible sidewall distortion or internal structural damage",
          ],
        },
        right: {
          label: "Replacement required",
          tone: "bad",
          items: [
            "Driven any distance with the tyre significantly deflated",
            "Any sidewall damage or bulging",
            "The reinforced sidewall shows signs of overheating or separation",
            "Manufacturer guidance for that specific tyre excludes repair outright",
          ],
        },
      },
      {
        type: "text",
        heading: "Why the sidewall history matters more than it looks",
        paragraphs: [
          "A standard tyre driven flat for even a short distance is usually visibly ruined. A run-flat is designed to keep supporting the car while looking almost normal from the outside — which means the internal damage from being driven deflated can be invisible without a full internal inspection after the tyre is removed from the wheel.",
          "This is why an honest assessment always starts with a simple question: how far, and at what pressure, was this tyre driven before you noticed the problem? If you're not sure, treat it as driven flat and have it properly inspected rather than assumed repairable.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are run-flat tyres more expensive to replace than standard tyres?",
        a: "Run-flats generally cost more than an equivalent standard tyre because of the reinforced sidewall construction — the exact price depends on the brand, size and specification. Call or WhatsApp your tyre size and vehicle details for a quote.",
      },
      {
        q: "Can I fit a standard tyre instead of a run-flat as a replacement?",
        a: "On some vehicles, yes — but many cars fitted with run-flats as standard don't carry a spare wheel and may have a TPMS or suspension calibration set up around run-flat tyre characteristics. Check your vehicle handbook or ask when booking.",
      },
      {
        q: "How do I know if my tyre is a run-flat?",
        a: "Look on the sidewall for RFT, ROF, SSR, ZP, EMT or a manufacturer-specific code (BMW uses a star, for example). Our guide on reading a tyre sidewall covers where to look.",
      },
    ],
    related: [
      { label: "Mobile tyre replacement", slug: "mobile-tyre-replacement" },
      { label: "Mobile puncture repair", slug: "mobile-puncture-repair" },
      { label: "Reading a tyre sidewall", slug: "how-to-read-a-tyre-sidewall" },
    ],
  },

  "mobile-tyre-fitting-cost-enfield": {
    slug: "mobile-tyre-fitting-cost-enfield",
    title: "What Affects the Cost of Mobile Tyre Fitting in Enfield | Sam's Mobile Tyres",
    description:
      "There's no single price for mobile tyre fitting — here's what actually drives the cost, and what to have ready for an accurate quote.",
    eyebrow: "Guide · Pricing Factors",
    h1: "What affects the cost of mobile tyre fitting in Enfield",
    dek: "There's no single number that applies to every job — here's what actually moves the price, and how to get an accurate quote quickly.",
    hero: homeTyreFitting,
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    intro: [
      "Anyone searching for a price online will find wildly different numbers, because mobile tyre fitting cost depends on genuinely variable factors — not a flat callout fee. Rather than quote a figure that won't match most real jobs, here's what actually drives the price up or down, so you know what to expect and what to have ready when you ask for a quote.",
    ],
    blocks: [
      {
        type: "list",
        heading: "The main factors",
        items: [
          {
            t: "Tyre size and specification",
            d: "Larger rim diameters, wider profiles, low-profile and run-flat or reinforced tyres all cost more than a standard mid-size tyre, purely because the tyre itself is more expensive to buy in.",
          },
          {
            t: "Brand tier",
            d: "Premium manufacturer brands sit at a different price point to budget or mid-range brands. Both are legal and safe when correctly rated for the vehicle — it's a trade-off of cost against tread life and wet-weather performance.",
          },
          {
            t: "Repair vs replacement",
            d: "A BS AU 159 puncture repair, when the damage qualifies, is a smaller job than supplying and fitting a new tyre — see our repair-or-replace guide for how that decision gets made.",
          },
          {
            t: "Number of tyres",
            d: "Fitting multiple tyres in one visit is more efficient than separate call-outs, which is usually reflected in the total.",
          },
          {
            t: "Location and access",
            d: "A straightforward driveway or car park is quicker to work at than a tight residential street, a multi-storey car park, or a roadside location requiring extra care.",
          },
          {
            t: "Timing",
            d: "Availability at short notice, overnight, or during high-demand periods can affect price differently to a booking made with more flexibility.",
          },
        ],
      },
      {
        type: "steps",
        heading: "What to have ready for an accurate quote",
        steps: [
          {
            t: "Vehicle registration or make/model",
            d: "Lets the correct tyre size and specification be checked quickly.",
          },
          {
            t: "Tyre size from the sidewall",
            d: "If you can read it, this speeds things up — see our sidewall guide if you're unsure which numbers to send.",
          },
          {
            t: "How many tyres need attention",
            d: "One, a pair (often recommended on the same axle), or a full set.",
          },
          {
            t: "Your location and preferred timing",
            d: "Home, work or roadside, and roughly when you'd like it done.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is mobile tyre fitting more expensive than a garage?",
        a: "Not necessarily — mobile fitting removes the need to take time off, arrange a lift, or wait at a depot, which has its own value. The tyre and labour cost itself is generally comparable to garage pricing for the same tyre and job type.",
      },
      {
        q: "Do you charge a call-out fee?",
        a: "Ask when you call — pricing is confirmed upfront based on your specific vehicle, tyre and location before any work is booked, so there are no surprises.",
      },
      {
        q: "How do I get an exact price for my car?",
        a: `Call or WhatsApp ${"+44 7949 891689"} with your registration, tyre size (if known) and location, and we'll confirm the price before booking anything.`,
      },
    ],
    related: [
      { label: "Mobile tyre replacement", slug: "mobile-tyre-replacement" },
      { label: "Mobile tyre fitting in Enfield", slug: "mobile-tyre-fitting-enfield" },
      { label: "Puncture repair or replacement?", slug: "puncture-repair-or-tyre-replacement" },
    ],
  },

  "lost-locking-wheel-nut-key": {
    slug: "lost-locking-wheel-nut-key",
    title: "Lost Locking Wheel Nut Key: What to Do | Sam's Mobile Tyres",
    description:
      "Can't find your locking wheel nut key? Here's where to check first, what to avoid, and the safe ways to get the wheel off anyway.",
    eyebrow: "Guide · Locking Wheel Nuts",
    h1: "Lost locking wheel nut key: what to do",
    dek: "Locking wheel nuts protect your alloys from theft — until the key itself goes missing. Here's how to sort it without damaging the wheel.",
    hero: lockingWheelKeyRecovery,
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    intro: [
      "A locking wheel nut key (sometimes called a locking wheel nut adapter) is a uniquely patterned socket that fits one specific locking nut design, used to deter wheel theft. It's small, easily separated from the rest of the toolkit, and genuinely common to lose — which is a problem the moment you need to remove a wheel.",
    ],
    blocks: [
      {
        type: "list",
        heading: "Check these places before assuming it's gone",
        items: [
          {
            t: "The boot floor, under the carpet",
            d: "Most manufacturers store it clipped inside the spare wheel well or next to the jack, not loose in the boot.",
          },
          {
            t: "The glovebox and door pockets",
            d: "Some owners move it here for convenience — worth a quick check even if it seems unlikely.",
          },
          {
            t: "The service history wallet or folder",
            d: "Previous owners or garages sometimes tuck it in with the documents rather than back in the boot.",
          },
          {
            t: "With a previous keeper, if the car changed hands recently",
            d: "If you bought the car used, it's worth a message to the previous owner or dealer — a surprising number of missing keys turn up this way.",
          },
        ],
      },
      {
        type: "callout",
        heading: "Avoid DIY removal methods",
        body: "Hammering on a universal 'locking nut removal' socket, using pliers, or grinding the nut off can damage the wheel stud, the alloy itself, or the hub — turning a lost-key problem into an expensive repair. These methods exist commercially but are best left to someone experienced with the specific wheel and nut in front of them.",
      },
      {
        type: "steps",
        heading: "Your options",
        steps: [
          {
            t: "Order a replacement key by code",
            d: "Many locking nut manufacturers can cut a replacement from the pattern number stamped on the nut itself, or via your dealer using the vehicle's security details.",
          },
          {
            t: "Use a specialist extraction tool",
            d: "A trained fitter can use a purpose-made extraction socket matched to the nut, which grips and removes it without damaging the wheel — this is the safest fallback when no key can be sourced in time.",
          },
          {
            t: "Have the locking nuts replaced with standard ones",
            d: "Once the wheel is off, it's common to fit standard nuts (or a fresh set of locking nuts with a new key kept somewhere safe) to avoid the same problem next time.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can any garage remove a locking wheel nut without the key?",
        a: "It needs the right specialist extraction socket for that specific nut pattern, plus care not to damage the alloy or stud — not every workshop carries every pattern, so it's worth checking before you book.",
      },
      {
        q: "Will removing a locking nut without a key damage my alloy wheels?",
        a: "Done correctly with a proper extraction tool, no. Done with improvised methods like grips or a hammer and chisel, it very often will — that's the main risk to avoid.",
      },
      {
        q: "Can I just order a new key online?",
        a: "If you know the manufacturer and the pattern number stamped on the nut, some suppliers can cut a replacement. If you don't have that information, an extraction is usually faster.",
      },
    ],
    related: [
      { label: "Locking wheel key recovery", slug: "locking-wheel-key-recovery" },
      { label: "Locking wheel nut removal", slug: "locking-wheel-nut-removal" },
      { label: "Mobile tyre replacement", slug: "mobile-tyre-replacement" },
    ],
  },

  "puncture-repair-or-tyre-replacement": {
    slug: "puncture-repair-or-tyre-replacement",
    title: "Mobile Puncture Repair or Full Tyre Replacement? | Sam's Mobile Tyres",
    description:
      "Not every puncture needs a new tyre — but not every puncture is repairable either. Here's the decision framework and what happens at each stage.",
    eyebrow: "Guide · Repair vs Replace",
    h1: "Mobile puncture repair or full tyre replacement?",
    dek: "The right call depends on where the damage is, how big it is, and what condition the rest of the tyre is in.",
    hero: mobileTyreReplacement,
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    intro: [
      "A puncture doesn't automatically mean a new tyre, and it doesn't automatically mean a quick repair either — the correct answer depends on a small set of specific factors that any competent inspection checks before doing anything else. Here's how the decision actually gets made.",
    ],
    blocks: [
      {
        type: "pair",
        heading: "What decides it",
        left: {
          label: "Usually repairable",
          tone: "good",
          items: [
            "Damage sits in the central three-quarters of the tread",
            "Puncture hole is 6mm or smaller in diameter",
            "No sidewall or shoulder involvement",
            "Tyre hasn't been driven any distance while flat",
            "Legal tread depth remains across the tyre",
          ],
        },
        right: {
          label: "Needs replacement",
          tone: "bad",
          items: [
            "Any damage to the sidewall or shoulder",
            "A cut, bulge, or visible cord/belt exposure",
            "Driven flat or significantly underinflated for any distance",
            "A second injury within 40mm of a previous repair",
            "Tread worn close to or below the 1.6mm legal minimum",
          ],
        },
      },
      {
        type: "steps",
        heading: "How the inspection works",
        steps: [
          {
            t: "External check",
            d: "The whole tyre is examined for the position and size of the damage, sidewall condition and overall tread wear before anything is removed.",
          },
          {
            t: "Dismount and internal inspection",
            d: "The tyre comes off the wheel so the inside of the casing can be checked for damage that isn't visible externally — this step is what separates a proper assessment from a quick guess.",
          },
          {
            t: "The decision",
            d: "If the damage sits inside the repairable criteria and the internal inspection is clear, a BS AU 159 plug-and-patch repair goes ahead. If not, replacement is recommended and the reasons are explained.",
          },
        ],
      },
      {
        type: "callout",
        heading: "After a repair",
        body: "A correctly repaired tyre should be rebalanced and refitted to the manufacturer's torque setting. It's worth checking pressure again after a day or two of driving, and keeping an eye on the repaired area for any change.",
      },
    ],
    faqs: [
      {
        q: "How do I know if my puncture is repairable before calling?",
        a: "A quick way to check is whether the object (nail, screw) is visible somewhere in the centre of the tread rather than near the edge or sidewall, and whether you noticed and stopped driving promptly rather than continuing on a flat tyre. A photo sent by WhatsApp helps confirm before a visit.",
      },
      {
        q: "Is a repaired tyre as safe as a new one?",
        a: "A correctly executed BS AU 159 repair, on a tyre that qualifies, restores the tyre to a safe, legal, MOT-passable condition for the remainder of its normal life. It's a different question from replacement — both are safe outcomes when applied to the right situation.",
      },
      {
        q: "Can you repair a tyre at the roadside?",
        a: "Yes — mobile puncture assessment and repair, where the puncture qualifies, can be carried out at a suitable home, workplace or roadside location using mobile equipment.",
      },
    ],
    related: [
      { label: "Mobile puncture repair", slug: "mobile-puncture-repair" },
      { label: "Mobile tyre replacement", slug: "mobile-tyre-replacement" },
      { label: "Puncture repair guide (BS AU 159)", slug: "puncture-repair-guide" },
    ],
  },

  "how-long-does-mobile-tyre-fitting-take": {
    slug: "how-long-does-mobile-tyre-fitting-take",
    title: "How Long Does Mobile Tyre Fitting Take? | Sam's Mobile Tyres",
    description:
      "Mobile tyre fitting has two separate time components — getting to you, and doing the job. Here's what affects each one.",
    eyebrow: "Guide · What to Expect",
    h1: "How long does mobile tyre fitting take?",
    dek: "There are two separate clocks running — how long it takes to reach you, and how long the job itself takes once the fitter arrives.",
    hero: workplaceTyreFitting,
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    intro: [
      "It's a reasonable question with a genuinely variable answer, because two different things are being asked at once: how long until someone gets to you, and how long the fitting itself takes once they're there. Treating them separately makes the answer much more useful than a single number would be.",
    ],
    blocks: [
      {
        type: "list",
        heading: "Dispatch time — getting to you",
        items: [
          {
            t: "Your location",
            d: "Distance from the current job and general traffic conditions on the route both matter — this varies call to call, which is why it's confirmed when you contact us rather than promised in advance.",
          },
          {
            t: "Time of day",
            d: "Rush-hour traffic in London and the M25 corridor affects travel time more than distance alone would suggest.",
          },
          {
            t: "Current job queue",
            d: "Mobile fitting means the same technician moves between locations — availability is checked live when you call rather than being a fixed slot system.",
          },
        ],
      },
      {
        type: "list",
        heading: "On-site time — the job itself",
        items: [
          {
            t: "Repair vs replacement",
            d: "A BS AU 159 puncture repair (dismount, internal inspection, plug-and-patch, rebalance, refit) takes longer than it looks because of the internal inspection step — see the puncture repair guide for the full six-step process.",
          },
          {
            t: "Number of wheels",
            d: "Each additional tyre adds time, though fitting several in one visit is more efficient overall than separate call-outs.",
          },
          {
            t: "Wheel access",
            d: "A locking wheel nut with a key on hand, easy access to level ground, and no complications keep things moving — a lost key, awkward parking, or low-profile/run-flat tyres can all add time.",
          },
          {
            t: "Balancing and torque check",
            d: "A proper finish includes dynamic rebalancing and torquing to the manufacturer's setting, not just bolting the wheel back on.",
          },
        ],
      },
      {
        type: "callout",
        heading: "What we won't do",
        body: "We won't quote a fixed arrival time or job duration before knowing your specific situation — a guaranteed number that doesn't hold up in real traffic or on a real job isn't useful to you. Call or WhatsApp and we'll give you a realistic estimate for your specific case.",
      },
    ],
    faqs: [
      {
        q: "Can you give me an exact arrival time?",
        a: "We'll give you a realistic estimate based on your location and current job load when you call, rather than a fixed promise made in advance — traffic and live availability both genuinely affect it.",
      },
      {
        q: "Is mobile fitting slower than taking the car to a garage?",
        a: "It removes the travel and waiting time at a depot entirely, which for most people more than offsets any difference in the fitting itself. The fitting process is fundamentally the same equipment and steps either way.",
      },
      {
        q: "What can I do to speed things up before the fitter arrives?",
        a: "Have your tyre size and registration ready, park on firm level ground with room to work, locate your locking wheel nut key if you have one, and share your exact location by pin or postcode when you call.",
      },
    ],
    related: [
      { label: "Same-day tyre fitting", slug: "same-day-tyre-fitting" },
      { label: "Mobile tyre replacement", slug: "mobile-tyre-replacement" },
      { label: "Puncture repair guide (BS AU 159)", slug: "puncture-repair-guide" },
    ],
  },

  "emergency-van-tyre-replacement-north-london": {
    slug: "emergency-van-tyre-replacement-north-london",
    title: "Emergency Van Tyre Replacement in North London | Sam's Mobile Tyres",
    description:
      "A van tyre failure is a different problem to a car — load, axle position and tyre rating all matter. Here's what to check and share.",
    eyebrow: "Guide · Commercial & Van Tyres",
    h1: "Emergency van tyre replacement in North London",
    dek: "A van tyre failure isn't just a bigger version of a car problem — load, axle position and tyre rating all change what's needed.",
    hero: vanTyreReplacement,
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    intro: [
      "Vans carry load, run on tyres rated specifically for that load, and losing one mid-route usually means lost working time as well as a safety issue. Getting the right information together quickly makes the difference between a fast fix and a long delay.",
    ],
    blocks: [
      {
        type: "list",
        heading: "What to have ready when you call",
        items: [
          {
            t: "Vehicle and axle details",
            d: "Which wheel — front, rear, and which side — plus whether it's a single or twin-wheel rear axle, common on larger panel vans and Lutons.",
          },
          {
            t: "Load status",
            d: "Whether the van is loaded, and roughly how heavily, since this affects the tyre load index required and how the vehicle should be approached for a safe roadside change.",
          },
          {
            t: "Tyre size and load/speed rating",
            d: "Van tyres carry a load index rating that matters more than on a typical car tyre — fitting an underrated replacement, even temporarily, is a safety and legal issue.",
          },
          {
            t: "Exact location and access",
            d: "Commercial vehicles are often larger and harder to move to an ideal spot — a postcode plus a description of parking restrictions or loading bay access helps plan the visit.",
          },
        ],
      },
      {
        type: "steps",
        heading: "Stopping safely in a larger vehicle",
        steps: [
          {
            t: "Prioritise width and visibility",
            d: "A van takes up more road space and has larger blind spots — look for a stopping point with enough clearance for both the vehicle and anyone working around it.",
          },
          {
            t: "Use hazard warning triangles if carried",
            d: "Especially relevant on faster roads or where visibility is reduced, and standard practice for many commercial fleets.",
          },
          {
            t: "Consider the load when exiting",
            d: "A loaded van sits differently and may need extra care on an incline or soft ground before anyone works underneath or beside a wheel.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you cover van and commercial tyre call-outs across North London?",
        a: "Yes — mobile van tyre replacement is available across North London and the surrounding priority coverage areas, at suitable depots, roadside locations or business premises.",
      },
      {
        q: "Can any tyre be fitted to a van, or does it need a specific rating?",
        a: "Vans need a tyre with a load index rated for the vehicle's maximum load — fitting an underrated tyre, even as a temporary fix, isn't safe or legal. Share your registration and load status so the correct rating is confirmed.",
      },
      {
        q: "Can you attend a business premises or loading bay?",
        a: "Where access allows, yes — share the site details, any access restrictions and parking/loading bay information when you call so the visit can be planned properly.",
      },
    ],
    related: [
      { label: "Van tyre replacement", slug: "van-tyre-replacement" },
      { label: "Fleet mobile tyre services", slug: "fleet-mobile-tyre-services" },
      { label: "Roadside tyre assistance", slug: "roadside-tyre-assistance" },
    ],
  },

  "how-to-read-a-tyre-sidewall": {
    slug: "how-to-read-a-tyre-sidewall",
    title: "How to Read a Tyre Sidewall: Size, Load Index & Speed Rating | Sam's Mobile Tyres",
    description:
      "Tyre sidewalls carry every specification you need — size, construction, load index, speed rating and age. Here's how to decode them.",
    eyebrow: "Guide · Tyre Basics",
    h1: "How to read a tyre sidewall",
    dek: "Every number and letter on the sidewall means something specific. Here's how to decode a marking like 205/55 R16 91V.",
    hero: tyreCloseup,
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    intro: [
      "A tyre sidewall carries a compact code that fully specifies the tyre — width, profile, construction, rim size, load capacity and maximum speed rating. Once you know how to read it, it's the fastest way to check you're getting a correct, legal replacement, and it's exactly what's needed when requesting a quote or a mobile fitting.",
    ],
    blocks: [
      {
        type: "text",
        heading: "Breaking down an example: 205/55 R16 91V",
        paragraphs: [
          "205 is the tyre's width in millimetres, measured sidewall to sidewall. 55 is the aspect ratio — the sidewall height as a percentage of that width, so a lower number means a lower-profile tyre. R stands for radial construction, the standard for almost all modern car tyres. 16 is the rim diameter in inches the tyre is built to fit.",
          "91 is the load index — a coded number (not a direct weight figure) representing the maximum load the tyre can carry at full inflation. V is the speed rating, a letter code for the maximum speed the tyre is rated to sustain. Both the load index and speed rating need to match or exceed the vehicle manufacturer's minimum requirement.",
        ],
      },
      {
        type: "list",
        heading: "Other markings worth knowing",
        items: [
          {
            t: "DOT date code",
            d: "A four-digit code (e.g. 2324) gives the week and year of manufacture — '2324' means the 23rd week of 2024. Tyres over roughly six years old are generally recommended for closer inspection regardless of tread depth.",
          },
          {
            t: "Run-flat markings",
            d: "RFT, ROF, SSR, ZP, EMT, or a manufacturer-specific mark (a star for BMW, for example) all indicate a run-flat tyre — see our run-flat repair guide for why that changes the repair decision.",
          },
          {
            t: "Manufacturer-specific fitment codes",
            d: "Marks like N-spec (Porsche), MO (Mercedes), AO (Audi) or * (BMW) show the tyre has been approved by that manufacturer for the specific vehicle — relevant for keeping a warranty or matching OEM specification.",
          },
          {
            t: "Tread wear indicators",
            d: "Small raised bars within the tread grooves mark the 1.6mm legal minimum — when the tread has worn flush with these bars, the tyre is at the legal limit.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I fit a tyre with a different load index or speed rating?",
        a: "You can fit a tyre rated equal to or higher than the vehicle manufacturer's specification, but not lower — an underrated tyre is both a safety issue and can affect insurance validity. Always match or exceed the original rating unless a manufacturer explicitly approves an alternative.",
      },
      {
        q: "Does tyre width or profile affect ride comfort?",
        a: "Generally, a lower profile (smaller aspect-ratio number) gives sharper handling but a firmer ride, while a higher profile absorbs bumps more comfortably. Changing from the manufacturer's specified size can also affect the accuracy of the speedometer and ABS/traction systems.",
      },
      {
        q: "What tyre size does my car need?",
        a: "The correct size is on your current tyre's sidewall and usually also on a sticker inside the driver's door frame or in the vehicle handbook. Send us that size, or your registration, and we'll confirm before quoting.",
      },
    ],
    related: [
      { label: "Mobile tyre replacement", slug: "mobile-tyre-replacement" },
      { label: "Premium tyre brands", slug: "premium-tyre-brands" },
      { label: "Run-flat repair guide", slug: "can-a-run-flat-tyre-be-repaired" },
    ],
  },

  "tpms-warning-light-meaning": {
    slug: "tpms-warning-light-meaning",
    title: "TPMS Warning Light: What It Means and What to Do | Sam's Mobile Tyres",
    description:
      "A TPMS light isn't always a puncture — temperature changes and sensor faults trigger it too. Here's how to work out which one you're dealing with.",
    eyebrow: "Guide · Dashboard Warnings",
    h1: "TPMS warning light: what it means and what to do",
    dek: "A tyre pressure warning light is worth taking seriously, but it isn't automatically a puncture. Here's how to work out which it is.",
    hero: tpmsSensor,
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    intro: [
      "TPMS (Tyre Pressure Monitoring System) has been mandatory on new UK cars since 2012, and it's designed to catch pressure loss before it becomes a visible problem or a safety issue. When the warning light comes on, it means the system has detected a pressure reading outside the expected range on at least one wheel — not necessarily a puncture.",
    ],
    blocks: [
      {
        type: "list",
        heading: "The most common causes",
        items: [
          {
            t: "A drop in outside temperature",
            d: "Tyre pressure falls roughly 1 psi for every 5–10°C drop in temperature. A cold snap overnight is one of the most common, and least serious, causes of a TPMS light.",
          },
          {
            t: "A slow puncture",
            d: "A small nail or screw can leak air gradually over hours or days rather than causing an immediate flat — this is exactly the kind of loss TPMS is designed to catch early.",
          },
          {
            t: "A faulty or low-battery sensor",
            d: "Direct TPMS systems use a small battery-powered sensor inside each wheel, which can fail or run down over time (typically after several years) independent of the actual tyre pressure.",
          },
          {
            t: "A wheel change without sensor recalibration",
            d: "Fitting a spare, swapping to winter wheels, or a recent tyre change can occasionally leave the system needing a reset or recalibration to read correctly again.",
          },
        ],
      },
      {
        type: "steps",
        heading: "What to do when the light comes on",
        steps: [
          {
            t: "Check all four pressures",
            d: "Use a garage forecourt or home gauge to check every tyre against the correct pressure, found on a sticker inside the driver's door frame or in the handbook — not the number printed on the tyre sidewall itself, which is a maximum, not a recommendation.",
          },
          {
            t: "Top up as needed",
            d: "If one or more tyres are low, inflate to the correct pressure and see whether the warning clears (it may take a short drive for the system to re-read).",
          },
          {
            t: "Inspect for a puncture",
            d: "If a tyre keeps losing pressure after being topped up, check the tread and sidewall for anything visible, and treat it as a likely puncture needing assessment.",
          },
          {
            t: "Get it checked if the light persists",
            d: "If all pressures read correctly and the light stays on, the sensor itself may be faulty — this needs a proper diagnostic check rather than guesswork.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is it safe to keep driving with the TPMS light on?",
        a: "For a short distance to check and correct pressures, generally yes — but don't ignore it long-term. Persistent low pressure affects handling, fuel economy and tyre wear, and can mask a genuine slow puncture.",
      },
      {
        q: "Why does my TPMS light come on every winter?",
        a: "Cold weather is one of the most common triggers — tyre pressure drops with temperature, and a tyre correctly inflated in summer can read as under-pressure once temperatures fall. Check and top up pressures at each significant temperature change.",
      },
      {
        q: "Can a TPMS sensor be replaced during a tyre change?",
        a: "Yes — if a sensor is faulty, it's typically replaced while the tyre is already off the wheel, which is the most efficient time to do it.",
      },
    ],
    related: [
      { label: "TPMS sensor replacement", slug: "tpms-sensor-replacement" },
      { label: "Mobile tyre fitting", slug: "mobile-tyre-replacement" },
      { label: "Reading a tyre sidewall", slug: "how-to-read-a-tyre-sidewall" },
    ],
  },
  "uk-tyre-law": {
    slug: "uk-tyre-law",
    title: "UK Tyre Law: Legal Tread Depth, MOT Rules & Fines | Sam's Mobile Tyres",
    description:
      "A complete guide to UK tyre law: the 1.6mm legal tread limit, tyre age rules, mixing cross-ply and radial, MOT failure points, and £2,500 penalty fines.",
    eyebrow: "Guide · UK Legislation",
    h1: "UK Tyre Law: What Every Driver Must Know",
    dek: "Driving on illegal or defective tyres puts lives at risk and carries severe legal penalties. Here is what UK law mandates for cars, light commercial vans, and trailers.",
    hero: tyreCloseup,
    datePublished: "2026-01-15",
    dateModified: "2026-03-20",
    intro: [
      "In the UK, tyre regulations are strictly enforced under the Road Vehicles (Construction and Use) Regulations 1986. Operating a vehicle with tyres below legal limits not only compromises vehicle control and braking distance, but also exposes drivers to substantial fines, penalty points, and invalidated motor insurance.",
      "Whether you manage a commercial fleet or commute daily around North London, understanding the 1.6mm tread standard, sidewall damage limits, and tyre load ratings keeps your vehicle roadworthy and compliant.",
    ],
    blocks: [
      {
        type: "text",
        heading: "The 1.6mm Minimum Tread Depth Rule",
        paragraphs: [
          "For passenger cars, light utility vans and light trailers, the law specifies a minimum tyre tread depth of 1.6 millimetres across the central three-quarters of the tyre's breadth, and around the entire circumference.",
          "While 1.6mm is the legal threshold, motoring safety bodies and tyre manufacturers strongly recommend replacing tyres once they reach 3mm, as wet-weather braking distance increases drastically below this point.",
        ],
      },
      {
        type: "pair",
        heading: "Legal vs Illegal Tyre Conditions",
        left: {
          label: "Road-Legal Standard",
          tone: "good",
          items: [
            "Tread depth ≥ 1.6mm across central 75%",
            "Correct load and speed index for vehicle",
            "No visible cords, ply or structural bulges",
            "Matching radial tyres on the same axle",
          ],
        },
        right: {
          label: "MOT Failure & Illegal",
          tone: "bad",
          items: [
            "Tread below 1.6mm in any continuous band",
            "Sidewall lumps, bulges, or tears deeper than 25mm",
            "Exposed internal plies or steel cords",
            "Temporary spare used at excessive speeds",
          ],
        },
      },
      {
        type: "steps",
        heading: "How to check your tyre tread at home",
        steps: [
          {
            t: "The 20p Coin Test",
            d: "Insert a 20p coin into the main grooves of the tyre. If the outer band of the coin is hidden, your tread is above the 1.6mm legal limit. If the outer band is visible, your tyres may be illegal.",
          },
          {
            t: "Inspect Tread Wear Indicators (TWIs)",
            d: "Modern tyres feature raised rubber bars at 1.6mm within the tyre grooves. When the tread wears flush with these bars, immediate replacement is required.",
          },
          {
            t: "Inspect the Inner & Outer Sidewalls",
            d: "Check both the exterior and interior sidewalls for bulges, cracks, or embedded road debris such as screws or glass.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is the penalty for driving on illegal tyres in the UK?",
        a: "Police can issue a fine of up to £2,500 and 3 penalty points per illegal tyre. If all four tyres are defective, you face up to £10,000 in fines and 12 penalty points (an automatic driving ban).",
      },
      {
        q: "Does a bald tyre invalidate car insurance?",
        a: "Yes. If an accident occurs and your vehicle has illegal or bald tyres, insurance companies can refuse to pay out claims for vehicle damage.",
      },
      {
        q: "Are the tread depth rules the same for commercial vans?",
        a: "Yes, goods vehicles not exceeding 3,500kg (3.5t GVW) are held to the same 1.6mm minimum tread requirement as passenger cars.",
      },
    ],
    related: [
      { label: "Mobile tyre replacement", slug: "mobile-tyre-replacement" },
      { label: "Puncture repair guide", slug: "puncture-repair-or-tyre-replacement" },
      { label: "Reading a tyre sidewall", slug: "how-to-read-a-tyre-sidewall" },
    ],
  },
  "wheel-balancing-explained": {
    slug: "wheel-balancing-explained",
    title: "Why Does My Steering Wheel Vibrate? Wheel Balancing Explained | Sam's Mobile Tyres",
    description:
      "Steering wheel shaking between 50-70 mph? Learn the symptoms of unbalanced wheels, why balancing matters, and how mobile digital balancing cures vibrations.",
    eyebrow: "Guide · Vehicle Maintenance",
    h1: "Why Your Steering Wheel Vibrates: Wheel Balancing Explained",
    dek: "Vibrations through your steering wheel or vehicle seat are clear indicators of unbalanced wheels or rim damage. Here's what causes it and how it is fixed.",
    hero: workplaceTyreFitting,
    datePublished: "2026-02-01",
    dateModified: "2026-03-22",
    intro: [
      "Even high-specification tyres and alloy wheels are not perfectly uniform in weight distribution. Minute differences in rubber density or wheel manufacturing create heavy spots that cause the wheel to wobble at motorway speeds.",
      "Wheel balancing attaches precision counterweights to your rims so the tyre assembly spins completely true, eliminating steering wheel vibrations, premature suspension wear, and uneven tyre tread scalloping.",
    ],
    blocks: [
      {
        type: "text",
        heading: "Wheel Balancing vs Wheel Alignment",
        paragraphs: [
          "Many drivers confuse wheel balancing with wheel tracking (alignment). Wheel balancing compensates for weight disparities around the rotating wheel unit using clip-on or adhesive weights.",
          "Wheel alignment, conversely, adjusts the angles of the wheels so they point straight and parallel to the vehicle centerline (toe, camber, and caster angles).",
        ],
      },
      {
        type: "list",
        heading: "Common symptoms of unbalanced tyres",
        items: [
          {
            t: "Steering wheel shake at 50 to 70 mph",
            d: "Vibrations felt directly through the steering wheel usually point to unbalance in the front wheels.",
          },
          {
            t: "Seat or floorboard vibration",
            d: "Vibrations felt in the driver's seat or cabin floor typically point to out-of-balance rear wheels.",
          },
          {
            t: "Cupped or scalloped tread wear",
            d: "Unbalanced wheels bounce slightly as they rotate, causing irregular wavy hollows across the tyre surface.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How often should car wheels be balanced?",
        a: "Wheels should be balanced whenever new tyres are fitted, if a balance weight has fallen off, or every 5,000 to 8,000 miles during routine rotation.",
      },
      {
        q: "Can mobile tyre fitters balance wheels on a driveway?",
        a: "Yes. Our mobile fitting vans are equipped with computerized electronic wheel balancers that provide the exact same calibration precision as fixed garage workshops.",
      },
    ],
    related: [
      { label: "Mobile tyre replacement", slug: "mobile-tyre-replacement" },
      { label: "Puncture repair or replacement", slug: "puncture-repair-or-tyre-replacement" },
      { label: "Tyre pressure check", slug: "tyre-pressure-check" },
    ],
  },
  "car-battery-life": {
    slug: "car-battery-life",
    title: "How Long Does a Car Battery Last? Signs It Needs Replacing | Sam's Mobile Tyres",
    description:
      "Average UK car battery lifespan, early warning signs of failure, winter battery care, and 24/7 mobile battery testing and replacement services.",
    eyebrow: "Guide · Battery Health",
    h1: "How Long Does a Car Battery Last? Signs It's Time to Replace",
    dek: "A dead battery is the number one cause of roadside breakdowns in the UK. Understand lifespan expectations and how to spot a failing battery before you get stranded.",
    hero: emergencyFitting,
    datePublished: "2026-02-10",
    dateModified: "2026-03-24",
    intro: [
      "Most standard lead-acid and AGM car batteries have a reliable lifespan of three to five years under typical UK driving conditions. However, recurring short journeys, extreme winter temperatures, and auxiliary electrical demands can accelerate degradation.",
      "Recognizing the early warning signs of battery failure allows you to replace the unit at home or work before you find yourself immobilised on a cold morning.",
    ],
    blocks: [
      {
        type: "text",
        heading: "Why Cold Weather Kills Weak Batteries",
        paragraphs: [
          "When temperatures drop below freezing, a battery's chemical reaction slows down, cutting its available cranking power by up to 35%. Simultaneously, cold engine oil thickens, requiring up to 50% more power from the starter motor.",
          "A battery that performs acceptably in August will frequently collapse on the first frosty morning in November.",
        ],
      },
      {
        type: "list",
        heading: "5 Warning signs your battery is failing",
        items: [
          {
            t: "Sluggish engine turnover",
            d: "When you turn the ignition, the engine cranks slowly or hesitates noticeably before firing.",
          },
          {
            t: "Dim headlights and electrical glitches",
            d: "Headlights appear dull at idle, or dashboard lights flicker when activating seat heaters or blowers.",
          },
          {
            t: "Clicking sound on ignition",
            d: "A rapid clicking noise when turning the key indicates insufficient electrical current reaching the starter solenoid.",
          },
          {
            t: "Swollen battery casing or sulfur smell",
            d: "Physical swelling or a rotten-egg scent indicates severe overheating and internal battery short-circuiting.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can a mobile technician test and replace my battery on my driveway?",
        a: "Yes. We carry diagnostic battery conductance testers and stock common 12V AGM and standard batteries for on-site fitting across London.",
      },
      {
        q: "What is the difference between an AGM and standard car battery?",
        a: "AGM (Absorbent Glass Mat) batteries are designed for modern stop-start vehicles and handle frequent charge cycles. Standard flooded batteries are suitable for vehicles without stop-start systems.",
      },
    ],
    related: [
      { label: "Jump start service", slug: "jump-start-service" },
      { label: "24/7 Car recovery", slug: "car-recovery" },
      { label: "Roadside tyre assistance", slug: "roadside-tyre-assistance" },
    ],
  },
};

export const ALL_GUIDE_SLUGS = Object.keys(GUIDES);

