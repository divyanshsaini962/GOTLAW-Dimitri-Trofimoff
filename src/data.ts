import { Review } from './types';

export const FIRM_INFO = {
  name: "Gotlaw — Dimitri Trofimoff Lawyer",
  shortName: "Gotlaw",
  lawyer: "Dimitri Trofimoff",
  title: "Barrister & Solicitor",
  tagline: "Down to earth Ottawa lawyer. Committed to legal excellence.",
  address: "430 Hazeldean Rd Unit 6, Ottawa, ON K2L 1T9",
  tollFree: "1.888.511.9118",
  local: "613.499.9781",
  fax: "705.703.9033",
  email: "office@gotlaw.ca",
  website: "gotlaw.ca",
  facebook: "facebook.com/theverybestlawyer",
  linkedin: "linkedin.com/in/dimitritrofimoff",
  hours: "Mon–Sat 9:00AM – 5:00PM",
  areasServed: ["Ottawa", "Kanata", "Perth", "Brockville", "Nepean", "Renfrew County", "Lanark County"],
  languages: ["English", "Russian (fluent)"],
  memberships: [
    { name: "Law Society of Ontario", icon: "🏛️" },
    { name: "Criminal Lawyers' Association", icon: "⚖️" },
    { name: "JusticeNet", icon: "🤝" },
    { name: "Legal Aid Ontario", icon: "🏥" }
  ],
  googleCalendarLink: "https://calendar.app.google/hVL4YFpbzkahWsTF8",
  ratingText: "4.8/5 on LawyerRatingz (34 reviews) | 5.0 Google Rating"
};

export const REVIEWS_DATA: Review[] = [
  {
    id: "1",
    author: "Client feedback",
    title: "Highly Professional",
    rating: 5,
    text: "Working with Dimitri and the team at Trofimoff has been an absolute pleasure. Diligent, friendly, and extremely professional.",
    source: "Google",
    date: "May 2026"
  },
  {
    id: "2",
    author: "Client feedback",
    title: "Seamless Travel Notarization",
    rating: 5,
    text: "Dimitri helped us with consent for travel letter notarization. Friendly, professional, easy, and prompt to deal with.",
    source: "Google",
    date: "April 2026"
  },
  {
    id: "3",
    author: "Nicholas A. Xynnis",
    title: "Barrister & Solicitor",
    rating: 5,
    text: "Highly qualified and extremely competent at what he does.",
    source: "Professional",
    date: "March 2026"
  },
  {
    id: "4",
    author: "Glenn E.J. Sandberg",
    title: "Sandberg Williams",
    rating: 5,
    text: "We have worked together for over two years and have recently welcomed Dmitry to our practice group. His combination of international educational backgrounds and hands-on correctional system experience makes him an exceptional asset to any client.",
    source: "Professional",
    date: "February 2026"
  },
  {
    id: "5",
    author: "Client feedback",
    title: "Excellent Criminal Defence Lawyer",
    rating: 5,
    text: "Dimitri provided exceptional guidance during a very stressful police interaction. His immediate, calm advice saved me from making critical errors. Highly recommended.",
    source: "LawyerRatingz",
    date: "June 2026"
  },
  {
    id: "6",
    author: "Client feedback",
    title: "Committed Family Law Support",
    rating: 5,
    text: "He handled my separation agreement with extreme precision and compassion. He was down-to-earth, explained everything clearly, and got us a fair result without endless litigation.",
    source: "LawyerRatingz",
    date: "January 2026"
  },
  {
    id: "7",
    author: "Client feedback",
    title: "Quick Notary Services",
    rating: 5,
    text: "Fast, affordable, and flexible. Met Dimitri in Kanata for standard certified copy commissioning. He explained the documents fully and completed the notary process in minutes.",
    source: "Alignable",
    date: "December 2025"
  }
];

export const OFFICE_LOCATIONS = [
  {
    name: "Ottawa / Kanata Office (Primary)",
    address: "430 Hazeldean Rd Unit 6, Ottawa, ON K2L 1T9",
    status: "Main Practice & Boardroom",
    details: "Convenient parking, accessible entrance.",
    lat: 45.2977,
    lng: -75.9015,
  },
  {
    name: "Perth Office",
    address: "Perth, ON (By Appointment)",
    status: "Meeting Space Available",
    details: "Available for family & criminal defense consultation.",
  },
  {
    name: "Brockville Office",
    address: "Brockville, ON (By Appointment)",
    status: "Meeting Space Available",
    details: "Serving Leeds and Grenville counties.",
  }
];

export const CRIMINAL_WHY_CHOOSE = [
  "Bilingual Representation: Complete counsel in both English and Russian, ensuring you fully understand every strategic option.",
  "Deep System Insight: As a former Ontario Probation & Parole Officer, Dimitri understands how prosecutors, police officers, and judges approach court cases.",
  "24/7 Availability for Emergencies: Quick action is critical following an arrest. Call 1.888.511.9118 at any hour.",
  "Clear, Structured Pricing: Upfront block fees or estimated hourly rates so you never face unexpected legal costs.",
  "Geographic Coverage: Serving Ottawa, Kanata, Perth, Brockville, Renfrew, and Lanark, with frequent travel across Eastern Ontario."
];

export const NOTARY_SERVICES_LIST = [
  { title: "Certification of Copies", desc: "Verifying and sealing true copies of original passports, birth certificates, and degrees." },
  { title: "Witnessing Signatures", desc: "Formal verification of identity and signature execution for deeds, contracts, and legal forms." },
  { title: "Commissioning of Oaths", desc: "Administering oaths and solemn declarations for affidavits, statutory statements, and court filings." },
  { title: "Travel Consent Letters", desc: "Custom draft and notarization of permission letters for children traveling abroad with one parent or guardian." },
  { title: "Invitation Letters", desc: "Drafting or notarizing official support letters required for Canadian visa and immigration applications." },
  { title: "Immigration Documents", desc: "Witnessing, verifying, or translating declarations for IRCC and other international consulates." },
  { title: "Power of Attorney", desc: "Official witnessing of medical, financial, and general power of attorney declarations." },
  { title: "Statutory Declarations", desc: "Administering statutory statements required for common-law union confirmation, marital status, or name changes." }
];

export const FAMILY_SERVICES_LIST = [
  { title: "Divorce Representation", desc: "Navigating both contested and uncontested divorces with a focus on quick, fair, and legally sound resolutions." },
  { title: "Separation Agreements", desc: "Drafting comprehensive, binding agreements detailing custody, support, and property division to avoid court." },
  { title: "Child Custody & Access", desc: "Protecting parent-child relationships and advocating for custody and visitation arrangements in the child's best interests." },
  { title: "Child Support", desc: "Calculating federal guidelines, determining special/extraordinary expenses (Section 7), and adjusting existing orders." },
  { title: "Spousal Support (Alimony)", desc: "Assessing entitlement, duration, and quantum of support under the Spousal Support Advisory Guidelines (SSAG)." },
  { title: "Property Division", desc: "Resolving complex asset splits, matrimonial home rights, pension evaluations, and debt allocations." },
  { title: "Restraining Orders", desc: "Securing emergency protection orders to guarantee safety and peace of mind during sensitive separations." },
  { title: "Cohabitation & Prenuptial Agreements", desc: "Structuring clear agreements for couples entering relationships, preserving family assets, and providing future security." }
];
