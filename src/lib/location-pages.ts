export type LocationPage = {
  slug: string;
  name: string;
  postcode: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  localHeading: string;
  localCopy: string;
  homeCopy: string;
  workplaceCopy: string;
  roadsideCopy: string;
  roads: string[];
  faqs: { q: string; a: string }[];
  nearby: string[];
};

export const LOCATIONS: Record<string, LocationPage> = {
  "mobile-tyre-fitting-enfield": {
    slug: "mobile-tyre-fitting-enfield",
    name: "Enfield",
    postcode: "EN1, EN2 and EN3",
    title: "Mobile Tyre Fitting Enfield | 24/7 Emergency Tyres",
    description:
      "24/7 mobile tyre fitting in Enfield for tyre replacement, puncture repair and roadside assistance at home, work or roadside. Call Sam's Mobile Tyres.",
    h1: "24/7 Mobile Tyre Fitting in Enfield",
    intro:
      "A flat or damaged tyre should not mean arranging recovery and waiting at a garage. Sam's Mobile Tyres comes to drivers across Enfield with mobile fitting, replacement, puncture assessment and roadside tyre assistance, day or night.",
    localHeading: "Mobile tyre help across Enfield",
    localCopy:
      "We cover Enfield Town and the surrounding EN1, EN2 and EN3 districts. Whether your vehicle is on a driveway near Bush Hill Park, outside work around Enfield Highway or stopped safely near the A10, tell us the tyre size and exact location so the right equipment and replacement options can be prepared before dispatch.",
    homeCopy:
      "Book fitting at your Enfield home without taking time out for a garage visit. A safe driveway, private parking bay or suitable kerbside space is normally all that is needed.",
    workplaceCopy:
      "If the vehicle is parked at work, share the business address, access instructions and parking details. The fitting can be arranged around your availability.",
    roadsideCopy:
      "For roadside calls, move to the safest available position and share a pin or nearby landmark. We will confirm what assistance is suitable before travel.",
    roads: ["A10", "A110", "M25 Junction 25", "EN1", "EN2", "EN3"],
    faqs: [
      {
        q: "Do you provide mobile tyre fitting throughout Enfield?",
        a: "Yes. Mobile tyre fitting is available across the EN1, EN2 and EN3 areas at suitable homes, workplaces and roadside locations.",
      },
      {
        q: "Can you replace a tyre near the A10 or M25?",
        a: "We assist around the A10 and the Enfield side of M25 Junction 25 where the vehicle is in a safe, accessible position. Share your exact location when calling.",
      },
      {
        q: "Can a puncture be repaired instead of replacing the tyre?",
        a: "A repair depends on the position and extent of the damage and the condition of the tyre. It must be inspected before a safe repair can be confirmed.",
      },
      {
        q: "What information should I send before the visit?",
        a: "Send your location, registration, tyre size from the sidewall and a clear photo of the damaged tyre where possible.",
      },
    ],
    nearby: [
      "mobile-tyre-fitting-edmonton",
      "mobile-tyre-fitting-waltham-cross",
      "mobile-tyre-fitting-cheshunt",
    ],
  },
  "mobile-tyre-fitting-waltham-cross": {
    slug: "mobile-tyre-fitting-waltham-cross",
    name: "Waltham Cross",
    postcode: "EN8",
    title: "Mobile Tyre Fitting Waltham Cross | 24/7 Tyre Help",
    description:
      "Mobile tyre fitting in Waltham Cross, EN8, available 24/7 for replacements, puncture assessment and roadside tyre assistance. Call or WhatsApp.",
    h1: "Mobile Tyre Fitting in Waltham Cross",
    intro:
      "Sam's Mobile Tyres provides 24/7 tyre assistance across Waltham Cross. We come to suitable home, workplace and roadside locations for mobile fitting, tyre replacement and puncture assessment, avoiding an unnecessary trip to a tyre depot.",
    localHeading: "Tyre assistance around EN8 and Junction 25",
    localCopy:
      "Waltham Cross sits beside the A10, A121 and M25 Junction 25, so a precise location matters. For calls from the town centre, retail areas or connecting roads, send a postcode or map pin and explain whether the vehicle is in a car park, on private ground or safely off the live carriageway.",
    homeCopy:
      "Home fitting is available across EN8 where there is level, accessible space around the vehicle. Share any gate, height or parking restrictions before booking.",
    workplaceCopy:
      "For workplace visits near the town centre or local retail and industrial areas, provide reception or security instructions so access can be arranged smoothly.",
    roadsideCopy:
      "If the problem happens near the A10, A121 or M25 approaches, prioritise personal safety and give the direction of travel, nearest junction and a live location pin.",
    roads: ["A10", "A121", "M25 Junction 25", "EN8"],
    faqs: [
      {
        q: "Do you fit tyres at homes in Waltham Cross?",
        a: "Yes, provided the vehicle is on safe and accessible ground with enough room to work around the affected wheel.",
      },
      {
        q: "Is mobile tyre replacement available around EN8 at night?",
        a: "The service operates 24/7. Availability and the appropriate tyre option are confirmed when you call or message.",
      },
      {
        q: "What should I do after a tyre problem near Junction 25?",
        a: "Move away from moving traffic if it is safe to do so, switch on hazard lights and share your direction, junction and exact map location.",
      },
      {
        q: "Do I need to know my tyre size?",
        a: "It helps. The size is printed on the tyre sidewall; a clear photo can be sent by WhatsApp if you are unsure how to read it.",
      },
    ],
    nearby: [
      "mobile-tyre-fitting-enfield",
      "mobile-tyre-fitting-cheshunt",
      "mobile-tyre-fitting-waltham-abbey",
    ],
  },
  "mobile-tyre-fitting-cheshunt": {
    slug: "mobile-tyre-fitting-cheshunt",
    name: "Cheshunt",
    postcode: "EN7",
    title: "Mobile Tyre Fitting Cheshunt | 24/7 Emergency Service",
    description:
      "24/7 mobile tyre fitting in Cheshunt, EN7, for damaged tyres, puncture assessment and replacement at home, work or a safe roadside location.",
    h1: "24/7 Mobile Tyre Fitting in Cheshunt",
    intro:
      "Need tyre help without arranging a tow or garage appointment? Sam's Mobile Tyres covers Cheshunt with mobile fitting, replacement, puncture assessment and roadside assistance at suitable locations, including homes and workplaces across EN7.",
    localHeading: "Mobile fitting from Cheshunt to the A10 corridor",
    localCopy:
      "Calls in Cheshunt can range from residential driveways to busy routes linking the A10 and A1170. When contacting us, include the full postcode, vehicle registration and tyre size. For roadside assistance, a location pin and direction of travel help identify the safest way to reach you.",
    homeCopy:
      "Arrange fitting on a driveway or suitable private parking area in Cheshunt. Let us know if the vehicle is in underground, gated or restricted parking.",
    workplaceCopy:
      "A workplace visit can be arranged where the site permits mobile maintenance. Share site access, parking and contact-person details before dispatch.",
    roadsideCopy:
      "For a flat tyre away from home, stop somewhere safe and visible. Do not continue driving on a deflated tyre, as this can damage the wheel and tyre further.",
    roads: ["A10", "A1170", "M25 corridor", "EN7"],
    faqs: [
      {
        q: "Which parts of Cheshunt do you cover?",
        a: "We cover the EN7 area and nearby routes, subject to safe vehicle access and current availability.",
      },
      {
        q: "Can you assess a puncture at my home?",
        a: "Yes. The tyre must be inspected to decide whether the damage can be safely repaired or whether replacement is required.",
      },
      {
        q: "Can you help on the A10 near Cheshunt?",
        a: "Roadside assistance is available where the vehicle has reached a safe and accessible position. Provide the direction and a precise map pin.",
      },
      {
        q: "Can I arrange tyre fitting while I am at work?",
        a: "Yes, if the workplace permits it and there is a suitable area around the vehicle. Send access instructions when booking.",
      },
    ],
    nearby: [
      "mobile-tyre-fitting-waltham-cross",
      "mobile-tyre-fitting-enfield",
      "mobile-tyre-fitting-waltham-abbey",
    ],
  },
  "mobile-tyre-fitting-edmonton": {
    slug: "mobile-tyre-fitting-edmonton",
    name: "Edmonton",
    postcode: "N9 and N18",
    title: "Mobile Tyre Fitting Edmonton | 24/7 Roadside Help",
    description:
      "Mobile tyre fitting in Edmonton, N9 and N18. Get 24/7 tyre replacement, puncture assessment and roadside assistance at your location.",
    h1: "Mobile Tyre Fitting in Edmonton",
    intro:
      "Sam's Mobile Tyres brings tyre fitting and roadside tyre assistance to drivers across Edmonton, 24 hours a day. We attend suitable locations in N9 and N18 for replacement tyres, puncture assessment and help with damaged or flat tyres.",
    localHeading: "Practical tyre help for busy Edmonton roads",
    localCopy:
      "Edmonton's mix of residential streets, workplace parking and major routes means access details are important. If you are near the A10, A406 or Meridian Way, share your direction of travel and a live pin. In residential areas, confirm whether the vehicle is on a driveway, estate parking or kerbside space.",
    homeCopy:
      "Home fitting can be booked across N9 and N18 where the vehicle is safely parked with working room beside the affected wheel.",
    workplaceCopy:
      "For commercial sites and workplace car parks, check that mobile work is permitted and send any gate, reception or loading-area instructions.",
    roadsideCopy:
      "On a busy urban road, personal safety comes first. Move out of the traffic flow if possible and do not stand beside the vehicle where passing traffic is close.",
    roads: ["A10", "A406", "Meridian Way", "N9", "N18"],
    faqs: [
      {
        q: "Do you cover both N9 and N18?",
        a: "Yes. We provide mobile tyre assistance across Edmonton's N9 and N18 districts at safe, accessible locations.",
      },
      {
        q: "Can you attend a vehicle near the North Circular?",
        a: "We can assist near the A406 where the vehicle is safely stopped and accessible. Send a precise location and direction of travel.",
      },
      {
        q: "Will you bring a replacement tyre?",
        a: "After you provide the tyre size, registration and damage details, available replacement options can be confirmed before dispatch.",
      },
      {
        q: "Can you work in an estate or controlled car park?",
        a: "Usually, if there is enough space and permission. Tell us about barriers, height limits or permits when booking.",
      },
    ],
    nearby: ["mobile-tyre-fitting-enfield", "mobile-tyre-fitting-chingford"],
  },
  "mobile-tyre-fitting-chingford": {
    slug: "mobile-tyre-fitting-chingford",
    name: "Chingford",
    postcode: "E4",
    title: "Mobile Tyre Fitting Chingford | 24/7 Tyre Assistance",
    description:
      "24/7 mobile tyre fitting in Chingford, E4, for replacement tyres, puncture assessment and roadside assistance at home, work or roadside.",
    h1: "24/7 Mobile Tyre Fitting in Chingford",
    intro:
      "For a flat, punctured or damaged tyre in Chingford, Sam's Mobile Tyres can come to a suitable home, workplace or roadside location. The 24/7 service covers mobile fitting, replacement and puncture assessment across E4.",
    localHeading: "Tyre fitting across Chingford and E4",
    localCopy:
      "From residential streets around Chingford to connections with the A406, A112 and A1009, each call begins with your exact location and tyre details. Clear access information is especially useful around narrow roads, controlled parking and the routes beside Epping Forest.",
    homeCopy:
      "Avoid arranging a garage visit by booking at a suitable driveway or parking space. The area must be firm, level and accessible for safe work.",
    workplaceCopy:
      "Mobile fitting can be arranged at work where the landowner allows it. Provide parking-zone and entry details so the visit can be planned correctly.",
    roadsideCopy:
      "If you are stopped near woodland or on an unlit route, use hazard lights, stay somewhere safe and share a live location rather than relying only on a road name.",
    roads: ["A406", "A112", "A1009", "E4"],
    faqs: [
      {
        q: "Is mobile tyre fitting available throughout Chingford?",
        a: "Yes. We cover E4 at suitable residential, workplace and roadside locations, subject to access and availability.",
      },
      {
        q: "Can you help near Epping Forest roads?",
        a: "We can attend accessible locations around Chingford. A live map pin is important where landmarks and road names may be unclear.",
      },
      {
        q: "Can you repair every puncture?",
        a: "No. Sidewall damage, larger injuries and unsafe tyre condition can require replacement. The tyre must be inspected before repair is confirmed.",
      },
      {
        q: "What photos should I send on WhatsApp?",
        a: "Send the full wheel, the visible damage, the tyre-size markings and the vehicle's location where it is safe to take those photos.",
      },
    ],
    nearby: [
      "mobile-tyre-fitting-edmonton",
      "mobile-tyre-fitting-enfield",
      "mobile-tyre-fitting-waltham-abbey",
    ],
  },
  "mobile-tyre-fitting-waltham-abbey": {
    slug: "mobile-tyre-fitting-waltham-abbey",
    name: "Waltham Abbey",
    postcode: "EN9",
    title: "Mobile Tyre Fitting Waltham Abbey | 24/7 Tyre Help",
    description:
      "Mobile tyre fitting in Waltham Abbey, EN9, available 24/7 for tyre replacement, puncture assessment and roadside assistance near the M25 corridor.",
    h1: "Mobile Tyre Fitting in Waltham Abbey",
    intro:
      "Sam's Mobile Tyres provides 24/7 mobile tyre fitting and roadside tyre assistance across Waltham Abbey. Drivers in EN9 can request replacement tyres or puncture assessment at suitable home, workplace and roadside locations.",
    localHeading: "EN9 coverage near the M25 corridor",
    localCopy:
      "Waltham Abbey connects local streets with the A10, A121 and M25 Junction 26. For help on or near these routes, share the direction of travel, nearest junction and a map pin. For town and residential calls, a full postcode and clear parking instructions help avoid delays finding the vehicle.",
    homeCopy:
      "Book a mobile visit at home where there is a safe driveway or suitable parking space. Mention gates, permits or restricted access before the visit.",
    workplaceCopy:
      "For business parks and workplace locations around EN9, provide the site name, entrance and a contact who can authorise access if required.",
    roadsideCopy:
      "If a tyre fails near an M25 approach, stop only where safe and follow official motorway safety guidance. Give the precise junction and carriageway direction when calling.",
    roads: ["A10", "A121", "M25 Junction 26", "EN9"],
    faqs: [
      {
        q: "Do you offer mobile tyre fitting across EN9?",
        a: "Yes. Waltham Abbey and the EN9 district are covered at suitable homes, workplaces and safe roadside locations.",
      },
      {
        q: "Can you attend near M25 Junction 26?",
        a: "Assistance is available around the junction where the vehicle is in a safe, accessible position. Share the exact carriageway and direction.",
      },
      {
        q: "Can you fit a tyre in a workplace car park?",
        a: "Yes, subject to site permission, safe working space and access for the service vehicle.",
      },
      {
        q: "How can I speed up the booking call?",
        a: "Have your registration, tyre size, exact location and a description or photo of the damage ready.",
      },
    ],
    nearby: [
      "mobile-tyre-fitting-waltham-cross",
      "mobile-tyre-fitting-cheshunt",
      "mobile-tyre-fitting-chingford",
    ],
  },
  "mobile-tyre-fitting-st-albans": {
    slug: "mobile-tyre-fitting-st-albans",
    name: "St Albans",
    postcode: "AL1, AL2, AL3 and AL4",
    title: "Mobile Tyre Fitting St Albans | 24/7 Emergency Tyres",
    description:
      "24/7 mobile tyre fitting in St Albans, AL1 to AL4, for tyre replacement, puncture assessment and roadside assistance at home, work or roadside.",
    h1: "24/7 Mobile Tyre Fitting in St Albans",
    intro:
      "A damaged tyre in St Albans does not need a tow to a garage. Sam's Mobile Tyres attends homes, workplaces and safe roadside locations across the city with mobile fitting, replacement and puncture assessment, day or night.",
    localHeading: "Mobile tyre help across St Albans",
    localCopy:
      "We cover the city centre, Marshalswick, Fleetville, London Colney and the surrounding AL1 to AL4 postcodes. Whether the vehicle is parked near the Cathedral, on an estate off the A1081 or stopped near the M25 and M1 interchange, share your exact location and tyre size so the right equipment is loaded before we set off.",
    homeCopy:
      "Book fitting at your St Albans home without a garage trip. A driveway, private parking bay or suitable kerbside space is normally enough room to work safely.",
    workplaceCopy:
      "For business parks and office sites around St Albans, share the address, parking arrangement and any entry instructions so the visit can be planned around your day.",
    roadsideCopy:
      "If the tyre fails on the A1081, A414 or near the M25/M1 interchange, get the vehicle as far from moving traffic as possible and share a live location pin.",
    roads: ["A1081", "A414", "M25 Junction 21", "M1 Junction 6", "AL1", "AL3"],
    faqs: [
      {
        q: "Do you provide mobile tyre fitting throughout St Albans?",
        a: "Yes. Mobile tyre fitting covers AL1 to AL4, including the city centre, Marshalswick, Fleetville and London Colney, at suitable homes, workplaces and roadside locations.",
      },
      {
        q: "Can you help near the M25/M1 interchange?",
        a: "We assist around the interchange where the vehicle is in a safe, accessible position. Share the exact junction, direction of travel and a live pin.",
      },
      {
        q: "Is a same-day replacement tyre available in St Albans?",
        a: "In most cases, yes, subject to size and availability. Send the tyre size from the sidewall and registration so options can be confirmed before dispatch.",
      },
      {
        q: "Can a puncture be repaired instead of replacing the tyre?",
        a: "It depends on the position and extent of the damage and the tyre's condition. It must be inspected on-site before a safe repair can be confirmed.",
      },
    ],
    nearby: ["mobile-tyre-fitting-watford", "mobile-tyre-fitting-stevenage"],
  },
  "mobile-tyre-fitting-watford": {
    slug: "mobile-tyre-fitting-watford",
    name: "Watford",
    postcode: "WD17, WD18, WD24 and WD25",
    title: "Mobile Tyre Fitting Watford | 24/7 Tyre Assistance",
    description:
      "Mobile tyre fitting in Watford, WD17 to WD25, available 24/7 for replacement tyres, puncture assessment and roadside assistance near the M1 and M25.",
    h1: "24/7 Mobile Tyre Fitting in Watford",
    intro:
      "Sam's Mobile Tyres brings mobile fitting, tyre replacement and puncture assessment to drivers across Watford, 24 hours a day, at suitable homes, workplaces and roadside locations across WD17 to WD25.",
    localHeading: "Tyre help across Watford and the M1/M25 corridor",
    localCopy:
      "Watford sits at the meeting point of the M1 and M25, so a precise location matters. For calls from the town centre, Cassiobury, Bushey or Garston, send a postcode or map pin and let us know whether the vehicle is in a car park, on private ground or stopped safely off a live carriageway.",
    homeCopy:
      "Home fitting is available across Watford where there is level, accessible space around the vehicle. Mention any gate codes, height restrictions or permit parking before booking.",
    workplaceCopy:
      "For office parks and workplace sites near the town centre or the M1 corridor, share reception details or entry instructions so access can be arranged smoothly.",
    roadsideCopy:
      "If the problem happens near the M1, M25 or A41, prioritise personal safety, stay clear of live lanes and give the direction of travel and nearest junction.",
    roads: ["A41", "A412", "M1 Junction 5", "M25 Junction 19", "M25 Junction 20", "WD17"],
    faqs: [
      {
        q: "Do you fit tyres at homes in Watford?",
        a: "Yes, provided the vehicle is on safe and accessible ground with enough space to work around the affected wheel.",
      },
      {
        q: "Is mobile tyre replacement available in Watford at night?",
        a: "The service operates 24/7. Availability and the appropriate tyre option are confirmed when you call or message.",
      },
      {
        q: "What should I do after a tyre problem near the M1/M25?",
        a: "Move away from moving traffic if it is safe to do so, switch on hazard lights and share your direction of travel, nearest junction and a live map pin.",
      },
      {
        q: "Do you cover Cassiobury, Bushey and Garston as well as the town centre?",
        a: "Yes, across WD17 to WD25, subject to safe access and current availability.",
      },
    ],
    nearby: ["mobile-tyre-fitting-st-albans", "mobile-tyre-fitting-enfield"],
  },
  "mobile-tyre-fitting-harlow": {
    slug: "mobile-tyre-fitting-harlow",
    name: "Harlow",
    postcode: "CM17, CM18, CM19 and CM20",
    title: "Mobile Tyre Fitting Harlow | 24/7 Emergency Tyres",
    description:
      "24/7 mobile tyre fitting in Harlow, CM17 to CM20, for tyre replacement, puncture repair assessment and roadside assistance at home, work or roadside.",
    h1: "24/7 Mobile Tyre Fitting in Harlow",
    intro:
      "A flat or damaged tyre in Harlow does not need to mean a tow and a wait at a garage. Sam's Mobile Tyres attends homes, workplaces and safe roadside locations across the town with mobile fitting, replacement and puncture assessment.",
    localHeading: "Mobile tyre help across Harlow and the M11 corridor",
    localCopy:
      "Harlow's town centre, Old Harlow and the surrounding neighbourhoods sit close to the A414 and M11 Junction 7. When you call, share the full postcode, vehicle registration and tyre size, and for roadside calls near the M11 give the direction of travel and a live map pin.",
    homeCopy:
      "Book fitting on a driveway or suitable private parking area in Harlow. Let us know about any estate barriers, permits or restricted parking before the visit.",
    workplaceCopy:
      "For business parks and office sites around Harlow, share the site name, access instructions and a contact who can authorise entry if required.",
    roadsideCopy:
      "For a flat tyre near the A414 or M11, stop somewhere safe and visible, keep hazard lights on and do not continue driving on a deflated tyre.",
    roads: ["A414", "A1025", "M11 Junction 7", "CM18", "CM20"],
    faqs: [
      {
        q: "Which parts of Harlow do you cover?",
        a: "We cover CM17 to CM20, including the town centre and Old Harlow, subject to safe vehicle access and current availability.",
      },
      {
        q: "Can you help near M11 Junction 7?",
        a: "Roadside assistance is available where the vehicle has reached a safe, accessible position. Provide the direction of travel and a precise map pin.",
      },
      {
        q: "Can a puncture be assessed at my home in Harlow?",
        a: "Yes. The tyre must be inspected to decide whether it can be safely repaired or whether replacement is required.",
      },
      {
        q: "Can I arrange tyre fitting while I am at work?",
        a: "Yes, if the workplace permits mobile maintenance and there is suitable space around the vehicle. Send access instructions when booking.",
      },
    ],
    nearby: ["mobile-tyre-fitting-epping", "mobile-tyre-fitting-bishops-stortford"],
  },
  "mobile-tyre-fitting-bishops-stortford": {
    slug: "mobile-tyre-fitting-bishops-stortford",
    name: "Bishop's Stortford",
    postcode: "CM23",
    title: "Mobile Tyre Fitting Bishop's Stortford | 24/7 Tyre Help",
    description:
      "Mobile tyre fitting in Bishop's Stortford, CM23, available 24/7 for tyre replacement, puncture assessment and roadside assistance near the M11.",
    h1: "24/7 Mobile Tyre Fitting in Bishop's Stortford",
    intro:
      "Sam's Mobile Tyres provides 24/7 mobile tyre fitting and roadside tyre assistance across Bishop's Stortford. Drivers in CM23 can request replacement tyres or puncture assessment at suitable home, workplace and roadside locations.",
    localHeading: "CM23 coverage near the M11 and Stansted",
    localCopy:
      "Bishop's Stortford connects local streets with the A1250, A120 and M11 Junction 8. For help on or near these routes, share the direction of travel, nearest junction and a map pin. For town and residential calls, a full postcode and clear parking instructions help avoid delays finding the vehicle.",
    homeCopy:
      "Book a mobile visit at home where there is a safe driveway or suitable parking space. Mention gates, permits or restricted access before the visit.",
    workplaceCopy:
      "For business parks and workplace locations around CM23, provide the site name, entrance details and a contact who can authorise access if required.",
    roadsideCopy:
      "If a tyre fails near the M11 or A120, stop only where safe, keep hazard lights on and give the precise junction and carriageway direction when calling.",
    roads: ["A1250", "A120", "M11 Junction 8", "CM23"],
    faqs: [
      {
        q: "Do you offer mobile tyre fitting across CM23?",
        a: "Yes. Bishop's Stortford and the surrounding CM23 district are covered at suitable homes, workplaces and safe roadside locations.",
      },
      {
        q: "Can you attend near M11 Junction 8?",
        a: "Assistance is available around the junction where the vehicle is in a safe, accessible position. Share the exact carriageway and direction of travel.",
      },
      {
        q: "Can you fit a tyre in a workplace car park?",
        a: "Yes, subject to site permission, safe working space and access for the service vehicle.",
      },
      {
        q: "How can I speed up the booking call?",
        a: "Have your registration, tyre size, exact location and a description or photo of the damage ready before you call or message.",
      },
    ],
    nearby: ["mobile-tyre-fitting-stansted", "mobile-tyre-fitting-harlow"],
  },
  "mobile-tyre-fitting-stansted": {
    slug: "mobile-tyre-fitting-stansted",
    name: "Stansted",
    postcode: "CM24",
    title: "Mobile Tyre Fitting Stansted | 24/7 Airport-Area Tyres",
    description:
      "24/7 mobile tyre fitting in Stansted and Stansted Mountfitchet, CM24, for tyre replacement, puncture assessment and roadside help near the airport.",
    h1: "24/7 Mobile Tyre Fitting in Stansted",
    intro:
      "Whether you are near Stansted Mountfitchet village or travelling close to the airport, Sam's Mobile Tyres offers mobile fitting, tyre replacement and puncture assessment at suitable homes, workplaces and roadside locations across CM24.",
    localHeading: "Tyre assistance around Stansted and the airport corridor",
    localCopy:
      "Traffic around Stansted often includes airport drop-offs, long-stay car parks and the A120/M11 corridor. Share your exact location, whether that is a car park name, terminal area or residential road, along with the tyre size and registration, so the right equipment is prepared before dispatch.",
    homeCopy:
      "Home fitting is available across Stansted Mountfitchet and nearby CM24 addresses where there is safe, level space to work around the vehicle.",
    workplaceCopy:
      "For business parks or sites near the airport, share the company name, gate or car park references and any security clearance needed for access.",
    roadsideCopy:
      "If a tyre fails on the A120 or approaching the airport, move to the safest available position, keep hazard lights on and share a live map pin or car park reference.",
    roads: ["A120", "M11 Junction 8", "B1383", "CM24"],
    faqs: [
      {
        q: "Do you cover Stansted Airport car parks and drop-off areas?",
        a: "We can attend accessible car park and roadside locations near the airport where it is safe to work. Share the car park name or terminal reference when calling.",
      },
      {
        q: "Is mobile tyre fitting available in Stansted Mountfitchet village?",
        a: "Yes, at suitable homes and roadside locations across CM24, subject to access and availability.",
      },
      {
        q: "Can you replace a tyre before an early flight?",
        a: "Call as early as possible with your location, tyre size and time constraint so we can confirm whether a visit can be arranged in time.",
      },
      {
        q: "What information speeds up an airport-area callout?",
        a: "A precise pin or car park bay reference, your registration and tyre size help us reach you quickly in a busy area.",
      },
    ],
    nearby: ["mobile-tyre-fitting-bishops-stortford", "mobile-tyre-fitting-harlow"],
  },
  "mobile-tyre-fitting-epping": {
    slug: "mobile-tyre-fitting-epping",
    name: "Epping",
    postcode: "CM16",
    title: "Mobile Tyre Fitting Epping | 24/7 Tyre Assistance",
    description:
      "24/7 mobile tyre fitting in Epping, CM16, for tyre replacement, puncture assessment and roadside assistance near Epping Forest and the M25.",
    h1: "24/7 Mobile Tyre Fitting in Epping",
    intro:
      "Sam's Mobile Tyres covers Epping with mobile fitting, tyre replacement and puncture assessment at suitable homes, workplaces and roadside locations, including routes around Epping Forest and the M25.",
    localHeading: "Tyre help around Epping and the M25 corridor",
    localCopy:
      "Epping's town centre, surrounding villages and the routes toward M25 Junction 26/27 each need slightly different access details. Share your postcode or a map pin, the tyre size and whether the vehicle is on a driveway, in a car park or stopped near woodland roads.",
    homeCopy:
      "Book fitting at a driveway or suitable private parking space in Epping. Let us know about any gated access or parking restrictions before the visit.",
    workplaceCopy:
      "For workplace visits around Epping, share the site address and entry instructions so the fitting can be arranged around your schedule.",
    roadsideCopy:
      "If you are stopped near Epping Forest or an unlit stretch of road, use hazard lights, stay somewhere safe and share a live location pin rather than relying on a road name alone.",
    roads: ["B1393", "A113", "M25 Junction 26", "M25 Junction 27", "CM16"],
    faqs: [
      {
        q: "Do you provide mobile tyre fitting throughout Epping?",
        a: "Yes, across CM16 at suitable homes, workplaces and roadside locations, subject to access and availability.",
      },
      {
        q: "Can you help near Epping Forest roads?",
        a: "We can attend accessible locations around Epping. A live map pin is important where landmarks and road names may be unclear among woodland routes.",
      },
      {
        q: "Can you attend near M25 Junction 26 or 27?",
        a: "Assistance is available where the vehicle is in a safe, accessible position near the junctions. Share the exact carriageway and direction of travel.",
      },
      {
        q: "Can every puncture be repaired?",
        a: "No. Sidewall damage, larger injuries and unsafe tyre condition can require replacement. The tyre must be inspected before repair is confirmed.",
      },
    ],
    nearby: ["mobile-tyre-fitting-waltham-abbey", "mobile-tyre-fitting-harlow"],
  },
  "mobile-tyre-fitting-ware": {
    slug: "mobile-tyre-fitting-ware",
    name: "Ware",
    postcode: "SG12",
    title: "Mobile Tyre Fitting Ware | 24/7 Emergency Tyres",
    description:
      "24/7 mobile tyre fitting in Ware, SG12, for tyre replacement, puncture assessment and roadside assistance at home, work or a safe roadside location.",
    h1: "24/7 Mobile Tyre Fitting in Ware",
    intro:
      "A damaged tyre in Ware does not need a tow to a garage. Sam's Mobile Tyres attends homes, workplaces and safe roadside locations across SG12 with mobile fitting, replacement and puncture assessment.",
    localHeading: "Mobile tyre help across Ware and the A10 corridor",
    localCopy:
      "Ware sits along the A10 between Hertford and the M25 corridor. When you call, share the full postcode, vehicle registration and tyre size, and for calls near the A10 or A119 give the direction of travel and a live map pin.",
    homeCopy:
      "Arrange fitting on a driveway or suitable private parking area in Ware. Let us know if the vehicle is in restricted or permit parking before booking.",
    workplaceCopy:
      "A workplace visit can be arranged where the site permits mobile maintenance. Share site access, parking and a contact-person's details before dispatch.",
    roadsideCopy:
      "For a flat tyre along the A10 or A119, stop somewhere safe and visible, keep hazard lights on and avoid continuing on a deflated tyre.",
    roads: ["A10", "A119", "A1170", "SG12"],
    faqs: [
      {
        q: "Which parts of Ware do you cover?",
        a: "We cover the SG12 area and nearby routes, subject to safe vehicle access and current availability.",
      },
      {
        q: "Can you help along the A10 near Ware?",
        a: "Roadside assistance is available where the vehicle has reached a safe and accessible position. Provide the direction of travel and a precise map pin.",
      },
      {
        q: "Can you assess a puncture at my home in Ware?",
        a: "Yes. The tyre must be inspected to decide whether the damage can be safely repaired or whether replacement is required.",
      },
      {
        q: "Can I arrange tyre fitting while I am at work?",
        a: "Yes, if the workplace permits it and there is a suitable area around the vehicle. Send access instructions when booking.",
      },
    ],
    nearby: ["mobile-tyre-fitting-waltham-cross", "mobile-tyre-fitting-cheshunt"],
  },
  "mobile-tyre-fitting-stevenage": {
    slug: "mobile-tyre-fitting-stevenage",
    name: "Stevenage",
    postcode: "SG1 and SG2",
    title: "Mobile Tyre Fitting Stevenage | 24/7 Tyre Help",
    description:
      "Mobile tyre fitting in Stevenage, SG1 and SG2, available 24/7 for tyre replacement, puncture assessment and roadside assistance near the A1(M).",
    h1: "24/7 Mobile Tyre Fitting in Stevenage",
    intro:
      "Sam's Mobile Tyres provides 24/7 mobile tyre fitting and roadside tyre assistance across Stevenage. Drivers in SG1 and SG2 can request replacement tyres or puncture assessment at suitable home, workplace and roadside locations.",
    localHeading: "SG1/SG2 coverage near the A1(M)",
    localCopy:
      "Stevenage connects local streets with the A602, A1072 and the A1(M) at Junctions 7 and 8. For help on or near these routes, share the direction of travel, nearest junction and a map pin. For town and residential calls, a full postcode and clear parking instructions help avoid delays finding the vehicle.",
    homeCopy:
      "Book a mobile visit at home where there is a safe driveway or suitable parking space. Mention gates, permits or restricted access before the visit.",
    workplaceCopy:
      "For business parks and workplace locations around Stevenage, provide the site name, entrance details and a contact who can authorise access if required.",
    roadsideCopy:
      "If a tyre fails near the A1(M), stop only where safe and follow official motorway safety guidance, then give the precise junction and carriageway direction when calling.",
    roads: ["A602", "A1072", "A1(M) Junction 7", "A1(M) Junction 8", "SG1"],
    faqs: [
      {
        q: "Do you offer mobile tyre fitting across Stevenage?",
        a: "Yes. SG1, SG2 and the surrounding district are covered at suitable homes, workplaces and safe roadside locations.",
      },
      {
        q: "Can you attend near A1(M) Junction 7 or 8?",
        a: "Assistance is available around the junctions where the vehicle is in a safe, accessible position. Share the exact carriageway and direction of travel.",
      },
      {
        q: "Can you fit a tyre in a workplace car park?",
        a: "Yes, subject to site permission, safe working space and access for the service vehicle.",
      },
      {
        q: "How can I speed up the booking call?",
        a: "Have your registration, tyre size, exact location and a description or photo of the damage ready before you call or message.",
      },
    ],
    nearby: ["mobile-tyre-fitting-ware", "mobile-tyre-fitting-st-albans"],
  },
  "mobile-tyre-fitting-ilford": {
    slug: "mobile-tyre-fitting-ilford",
    name: "Ilford",
    postcode: "IG1, IG2, IG3, IG4 and IG6",
    title: "Mobile Tyre Fitting Ilford | 24/7 Emergency Tyres",
    description:
      "24/7 mobile tyre fitting in Ilford, IG1 to IG6, for tyre replacement, puncture assessment and roadside assistance at home, work or roadside.",
    h1: "24/7 Mobile Tyre Fitting in Ilford",
    intro:
      "For a flat, punctured or damaged tyre in Ilford, Sam's Mobile Tyres can come to a suitable home, workplace or roadside location. The 24/7 service covers mobile fitting, replacement and puncture assessment across IG1 to IG6.",
    localHeading: "Tyre fitting across Ilford and the IG postcodes",
    localCopy:
      "From residential streets around Ilford town centre to connections with the A12, A118 and North Circular (A406), each call begins with your exact location and tyre details. Clear access information is especially useful around controlled parking zones and busy junctions.",
    homeCopy:
      "Avoid a garage visit by booking at a suitable driveway or parking space in Ilford. The area must be firm, level and accessible for safe work.",
    workplaceCopy:
      "Mobile fitting can be arranged at work where the landowner allows it. Provide parking-zone and entry details so the visit can be planned correctly.",
    roadsideCopy:
      "If you are stopped near the A12, A118 or North Circular, use hazard lights, stay somewhere safe and share a live location pin rather than relying only on a road name.",
    roads: ["A12", "A118", "A406", "IG1", "IG3"],
    faqs: [
      {
        q: "Is mobile tyre fitting available throughout Ilford?",
        a: "Yes. We cover IG1 to IG6 at suitable residential, workplace and roadside locations, subject to access and availability.",
      },
      {
        q: "Can you help near the North Circular (A406)?",
        a: "We can attend accessible locations near the A406 where the vehicle is safely stopped. A live map pin and direction of travel help us reach you.",
      },
      {
        q: "Can you repair every puncture?",
        a: "No. Sidewall damage, larger injuries and unsafe tyre condition can require replacement. The tyre must be inspected before repair is confirmed.",
      },
      {
        q: "What photos should I send on WhatsApp?",
        a: "Send the full wheel, the visible damage, the tyre-size markings and the vehicle's location where it is safe to take those photos.",
      },
    ],
    nearby: ["mobile-tyre-fitting-chingford", "mobile-tyre-fitting-edmonton"],
  },
  "mobile-tyre-fitting-north-london": {
    slug: "mobile-tyre-fitting-north-london",
    name: "North London",
    postcode: "N1 - N22, EN1 - EN3, NW1 - NW11",
    title: "Mobile Tyre Fitting North London | 24/7 Emergency Tyres",
    description:
      "24/7 mobile tyre fitting across North London. Rapid 30-45 min arrival in Enfield, Barnet, Haringey, Camden & Islington. Home, work or roadside.",
    h1: "24/7 Mobile Tyre Fitting in North London",
    intro:
      "Stuck with a puncture, flat battery or tyre blowout anywhere across North London? Sam's Mobile Tyres operates dedicated mobile fitting vans 24 hours a day, bringing professional tyre replacement, puncture repairs and roadside recovery directly to your driveway or roadside location.",
    localHeading: "Rapid mobile tyre dispatch throughout North London",
    localCopy:
      "Our technicians cover the whole of North London including Enfield, Edmonton, Finchley, Barnet, Wood Green, Tottenham, Highgate and Camden. Strategically stationed near key arterial routes like the A406 North Circular, A10 and A1, we provide industry-leading 30 to 45 minute arrival times 24/7.",
    homeCopy:
      "We replace and balance car, SUV, EV and van tyres directly on your driveway or residential parking space anywhere in North London without garage hassle.",
    workplaceCopy:
      "Keep your day moving. Our mobile technicians fit tyres at office car parks, commercial estates and industrial parks across North London while you work.",
    roadsideCopy:
      "Safely pulled over on the A406 North Circular, A10, or local road? Send us your live WhatsApp location and our emergency rapid response van will reach you fast.",
    roads: ["A406 North Circular", "A10 Great Cambridge Rd", "A1", "A503", "M25 J23-J25"],
    faqs: [
      {
        q: "How fast can you reach a stranded driver in North London?",
        a: "Our typical emergency response time across North London is 30 to 45 minutes, depending on traffic and exact location.",
      },
      {
        q: "Do you supply both budget and premium tyres on mobile vans?",
        a: "Yes. We stock all major sizes from premium brands like Michelin, Continental and Pirelli, down to reliable mid-range and budget tyres.",
      },
      {
        q: "Do you operate all night across North London?",
        a: "Yes, Sam's Mobile Tyres runs a full 24/7/365 emergency service, day, night, weekends and bank holidays.",
      },
      {
        q: "Can you fit tyres on commercial vans and light goods vehicles?",
        a: "Absolutely. We supply and fit reinforced commercial (C-rated and XL) tyres for delivery vans, trades, and fleet vehicles across North London.",
      },
    ],
    nearby: [
      "mobile-tyre-fitting-enfield",
      "mobile-tyre-fitting-edmonton",
      "mobile-tyre-fitting-chingford",
    ],
  },
  "mobile-tyre-fitting-essex": {
    slug: "mobile-tyre-fitting-essex",
    name: "Essex",
    postcode: "CM16, CM17, CM19, CM20, IG1-IG10",
    title: "Mobile Tyre Fitting Essex | 24/7 Roadside & Home Tyres",
    description:
      "24/7 mobile tyre fitting across West Essex. Serving Harlow, Epping, Loughton, Brentwood, Stansted and surrounding areas with 30-50 min response times.",
    h1: "24/7 Mobile Tyre Fitting Across Essex",
    intro:
      "From emergency tyre punctures on the M11 to scheduled tyre replacements at home in Epping or Harlow, Sam's Mobile Tyres provides dependable, rapid mobile tyre fitting across West Essex 24 hours a day.",
    localHeading: "Complete mobile tyre coverage in Essex",
    localCopy:
      "We serve towns and rural communities across West Essex including Epping, Harlow, Loughton, Chigwell, Stansted, and Ongar. Our vans are fully equipped with heavy-duty tyre changers and digital wheel balancers to handle all tyre sizes up to 24 inches.",
    homeCopy:
      "Convenient driveway tyre replacement anywhere in Essex. We bring the tyre bay to your door so you never have to waste your Saturday at a tyre shop.",
    workplaceCopy:
      "We fit tyres at business parks, logistics hubs, and workplaces across Essex with minimal disruption to your schedule or commercial operations.",
    roadsideCopy:
      "Stranded near the M11, A414, or A12? Stay safe, turn on your hazard lights, and call our 24/7 Essex mobile tyre dispatch team for rapid assistance.",
    roads: ["M11", "M25 J26-J28", "A414", "A104", "A12"],
    faqs: [
      {
        q: "What areas of Essex do you cover?",
        a: "We cover West and South-West Essex, including Harlow, Epping, Brentwood, Loughton, Stansted, Waltham Abbey, and Ilford.",
      },
      {
        q: "Can you attend roadside emergencies on the M11 in Essex?",
        a: "Yes, we provide emergency roadside tyre assistance across the M11 corridor and connecting A-roads wherever vehicles are safely located.",
      },
      {
        q: "Do you offer mobile puncture repairs in Essex?",
        a: "Yes, if your tyre damage is within the central 75% tread area and meets BS AU 159 standards, we will safely repair it on the spot.",
      },
    ],
    nearby: [
      "mobile-tyre-fitting-harlow",
      "mobile-tyre-fitting-epping",
      "mobile-tyre-fitting-stansted",
    ],
  },
  "mobile-tyre-fitting-hertfordshire": {
    slug: "mobile-tyre-fitting-hertfordshire",
    name: "Hertfordshire",
    postcode: "AL1-AL10, WD3-WD25, EN6-EN11, SG1-SG14",
    title: "Mobile Tyre Fitting Hertfordshire | 24/7 Fast Callouts",
    description:
      "Comprehensive 24/7 mobile tyre fitting across Hertfordshire. Serving Watford, St Albans, Stevenage, Ware, Cheshunt and Hertford with rapid arrival.",
    h1: "24/7 Mobile Tyre Fitting in Hertfordshire",
    intro:
      "Whether you're stranded roadside on the A1(M) or need fresh tyres fitted outside your home in St Albans or Watford, Sam's Mobile Tyres delivers prompt, professional mobile tyre replacement across Hertfordshire 24/7.",
    localHeading: "Hertfordshire-wide mobile tyre network",
    localCopy:
      "Covering South and East Hertfordshire including Watford, St Albans, Cheshunt, Ware, Stevenage, Welwyn Garden City, and Hatfield. Our mobile units carry the latest pneumatic equipment, digital balancers, and a comprehensive inventory of tyres.",
    homeCopy:
      "Skip the garage waiting room. We replace tyres on your driveway anywhere in Hertfordshire, complete with new valves, digital wheel balancing, and old tyre disposal.",
    workplaceCopy:
      "Fleet and private vehicle tyre replacements carried out on-site at commercial centres in Watford, Hatfield, and Stevenage.",
    roadsideCopy:
      "Emergency tyre fitting along the A1(M), A414, A10 and M25 junctions. Call our emergency hotline for immediate dispatch.",
    roads: ["A1(M)", "A10", "A414", "M1 J4-J8", "M25 J18-J25"],
    faqs: [
      {
        q: "How quickly can you attend in Hertfordshire?",
        a: "Depending on location, our mobile vans arrive within 30 to 50 minutes anywhere in our primary Hertfordshire coverage zones.",
      },
      {
        q: "Can you change tyres on 4x4s and prestige cars?",
        a: "Yes, we specialize in high-performance, run-flat, EV and 4x4 tyres with non-marking alloy-safe tools.",
      },
      {
        q: "Are your mobile tyre fitters insured?",
        a: "All technicians are fully trained, accredited, and carry comprehensive motor trade and public liability insurance.",
      },
    ],
    nearby: [
      "mobile-tyre-fitting-watford",
      "mobile-tyre-fitting-st-albans",
      "mobile-tyre-fitting-cheshunt",
      "mobile-tyre-fitting-ware",
    ],
  },
  "mobile-tyre-fitting-m25-corridor": {
    slug: "mobile-tyre-fitting-m25-corridor",
    name: "M25 Corridor",
    postcode: "M25 Junctions 16 to 28",
    title: "Mobile Tyre Fitting M25 Corridor | 24/7 Motorway Emergency",
    description:
      "24/7 emergency mobile tyre fitting along the M25 motorway corridor (J16 to J28). Rapid roadside assistance at service stations and safe turnoffs.",
    h1: "24/7 Mobile Tyre Fitting on the M25 Corridor",
    intro:
      "A tyre blowout or severe puncture on the London Orbital Motorway is dangerous and stressful. Sam's Mobile Tyres provides dedicated 24/7 emergency mobile tyre replacement covering M25 Junctions 16 to 28 and connecting service areas.",
    localHeading: "Emergency motorway & service area tyre replacement",
    localCopy:
      "We provide rapid mobile tyre response for drivers stopped at M25 service areas (South Mimms, Cobham, Thurrock), motorway slip roads, and adjacent arterial routes. Our heavy-duty mobile workshop vans carry commercial jacks and impact equipment to complete tyre changes safely and swiftly.",
    homeCopy:
      "Living near the M25 ring? We provide scheduled and same-day driveway tyre replacements for residents living in communities bordering the London orbital.",
    workplaceCopy:
      "Commercial logistics and transit vehicles operating near M25 distribution hubs can book emergency roadside tyre swaps or scheduled fleet maintenance.",
    roadsideCopy:
      "If you suffer a blowout on the M25, pull into an emergency refuge area or service station if possible, step behind the safety barrier, and call our emergency line immediately.",
    roads: ["M25 (J16-J28)", "A1(M) J1 South Mimms", "M11 J6", "A10 J25"],
    faqs: [
      {
        q: "Can you replace tyres directly on motorway hard shoulders?",
        a: "Where safety regulations allow and emergency protection is in place, or preferably at emergency refuge areas and service stations, our certified technicians can perform emergency roadside tyre swaps.",
      },
      {
        q: "Which M25 service stations do you attend?",
        a: "We attend South Mimms Services (M25 J23 / A1(M)), London Gateway, and nearby turnoff facilities 24 hours a day.",
      },
      {
        q: "What tyre sizes do you stock for motorway emergencies?",
        a: "Our vans carry standard passenger car, SUV, run-flat, and commercial van tyre sizes for immediate motorway fitting.",
      },
    ],
    nearby: [
      "mobile-tyre-fitting-enfield",
      "mobile-tyre-fitting-cheshunt",
      "mobile-tyre-fitting-st-albans",
    ],
  },
};

export const ALL_LOCATION_SLUGS = Object.keys(LOCATIONS);

// Approximate town-centre coordinates, used for GeoCoordinates in per-location
// structured data (schema.org Place). Precision to ~3 decimal places is
// standard practice for local-area SEO/AEO markup.
export const LOCATION_GEO: Record<string, { lat: number; lng: number }> = {
  "mobile-tyre-fitting-enfield": { lat: 51.652, lng: -0.081 },
  "mobile-tyre-fitting-waltham-cross": { lat: 51.687, lng: -0.033 },
  "mobile-tyre-fitting-cheshunt": { lat: 51.702, lng: -0.032 },
  "mobile-tyre-fitting-edmonton": { lat: 51.614, lng: -0.055 },
  "mobile-tyre-fitting-chingford": { lat: 51.63, lng: 0.006 },
  "mobile-tyre-fitting-waltham-abbey": { lat: 51.687, lng: -0.001 },
  "mobile-tyre-fitting-st-albans": { lat: 51.752, lng: -0.336 },
  "mobile-tyre-fitting-watford": { lat: 51.657, lng: -0.396 },
  "mobile-tyre-fitting-harlow": { lat: 51.772, lng: 0.092 },
  "mobile-tyre-fitting-bishops-stortford": { lat: 51.871, lng: 0.16 },
  "mobile-tyre-fitting-stansted": { lat: 51.902, lng: 0.201 },
  "mobile-tyre-fitting-epping": { lat: 51.7, lng: 0.112 },
  "mobile-tyre-fitting-ware": { lat: 51.809, lng: -0.033 },
  "mobile-tyre-fitting-stevenage": { lat: 51.902, lng: -0.202 },
  "mobile-tyre-fitting-ilford": { lat: 51.559, lng: 0.074 },
  "mobile-tyre-fitting-north-london": { lat: 51.588, lng: -0.115 },
  "mobile-tyre-fitting-essex": { lat: 51.734, lng: 0.469 },
  "mobile-tyre-fitting-hertfordshire": { lat: 51.809, lng: -0.237 },
  "mobile-tyre-fitting-m25-corridor": { lat: 51.691, lng: -0.203 },
};
