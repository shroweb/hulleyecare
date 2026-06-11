export const site = {
  name: "Vision Plus Eyecare",
  phone: "01482 225545",
  phoneTel: "tel:+441482225545",
  email: "info@visionplus-eyecare.co.uk",
  emailHref: "mailto:info@visionplus-eyecare.co.uk",
  address: {
    line1: "283 Holderness Road",
    city: "Hull",
    postcode: "HU8 8TE",
  },
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Vision+Plus+Eyecare+283+Holderness+Road+Hull+HU8+8TE",
  mapsEmbed:
    "https://www.google.com/maps?q=283+Holderness+Road,+Hull,+HU8+8TE&output=embed",
  hours: [
    { day: "Monday to Friday", time: "9:30am to 5:30pm" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],
  nav: [
    { to: "/", label: "Home" },
    { to: "/services/nhs-eye-exams", label: "NHS Eye Exams" },
    { to: "/services/private-eye-exams", label: "Private Eye Exams" },
    { to: "/services/childrens-eyecare", label: "Children's Eyecare" },
    { to: "/services/contact-lenses", label: "Contact Lenses" },
    { to: "/services/frames-and-lenses", label: "Frames & Lenses" },
    { to: "/services/sunglasses", label: "Sunglasses" },
    { to: "/about", label: "About" },
    { to: "/reviews", label: "Reviews" },
    { to: "/contact", label: "Contact" },
  ],
} as const;

export const services = [
  {
    slug: "nhs-eye-exams",
    name: "NHS Eye Exams",
    blurb: "Free sight tests for eligible patients.",
    icon: "Eye",
  },
  {
    slug: "private-eye-exams",
    name: "Private Eye Exams",
    blurb: "Thorough private exam for £35.",
    icon: "ShieldCheck",
  },
  {
    slug: "childrens-eyecare",
    name: "Children's Eyecare",
    blurb: "Free NHS exams and myopia management.",
    icon: "Baby",
  },
  {
    slug: "contact-lenses",
    name: "Contact Lenses",
    blurb: "Daily, monthly and extended wear from £19 a month.",
    icon: "CircleDot",
  },
  {
    slug: "frames-and-lenses",
    name: "Frames & Lenses",
    blurb: "Designer and budget frames, fitted around your life.",
    icon: "Glasses",
  },
  {
    slug: "sunglasses",
    name: "Prescription Sunglasses",
    blurb: "Polarised, photochromic and designer options from £25.",
    icon: "Sun",
  },
] as const;

export const reviews = [
  {
    quote:
      "On entering the shop we received a polite greeting from the 2 ladies behind the desk. I didn't have to wait long (minutes) before the process of testing my eyes was underway. I left the shop knowing everything was spot on. Thanks to all concerned.",
    name: "Geoffrey Wheelhouse",
    source: "Google",
  },
  {
    quote:
      "Just had an eye test — 1st class service. Chose my glasses under no pressure to buy. Excellent service from start to finish by very knowledgeable staff. Looking forward to getting the glasses now. Highly recommend this opticians.",
    name: "Dave Daniel",
    source: "Google",
  },
  {
    quote:
      "Just picked up mine and my husband's glasses — both absolutely perfect fit. What a first class service. Highly recommended.",
    name: "Jan Daniel",
    source: "Google",
  },
  {
    quote:
      "Brought my daughter in for her first eye test. They were patient and made her feel relaxed the whole way through.",
    name: "Local patient",
    source: "Google",
  },
  {
    quote:
      "Sorted my varifocals out properly after a bad experience elsewhere. Honest advice and a fair price.",
    name: "Patient",
    source: "Google",
  },
  {
    quote:
      "Free adjustments whenever I pop in. Hard to find that level of aftercare anywhere else.",
    name: "Long-standing patient",
    source: "Google",
  },
];

export const brands = [
  "Gucci", "Prada", "Armani", "Versace", "Calvin Klein",
  "Ralph Lauren", "Tommy Hilfiger", "Hugo Boss", "Nike",
];
