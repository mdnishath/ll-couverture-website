export const site = {
  name: "L.L COUVERTURE",
  tagline: "Couvreur · Charpentier",
  phone: "06 41 26 02 59",
  phoneHref: "tel:+33641260259",
  email: "livaycouverture@gmail.com",
  address: ["77 rue de l'Hermitage", "91290 Arpajon"],
  hours: ["Lun – Ven : 07:00 – 19:00", "Sam : 08:00 – 17:00"],
  area: "Arpajon & Essonne (91)",
  url: "https://ll-couverture-website.vercel.app",
} as const;

export type Service = {
  slug: string;
  title: string;
  titleAccent?: string;
  text: string;
  image: string;
};

const IMG =
  "https://api.couverturejjm.com/wp-content/uploads/2026/03";

export const heroImage = `${IMG}/Sage-Roofing-South-West-Our-Services-New-Roofs-Almondsbury-Hero-Image.jpg`;
export const wideImage = `${IMG}/WhatsApp-Image-2026-03-07-at-3.54.22-AM.jpeg`;

export const services: Service[] = [
  {
    slug: "zinguerie",
    title: "Zinguerie",
    text: "Façonnage sur mesure du zinc : noues, solins, habillages de cheminée et raccords parfaitement étanches.",
    image: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.35-AM.jpeg`,
  },
  {
    slug: "renovation-toiture",
    title: "Rénovation de Toiture",
    text: "Dépose, isolation, écran sous-toiture et pose neuve en tuiles ou ardoises, avec évacuation des gravats.",
    image: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.36-AM.jpeg`,
  },
  {
    slug: "urgence",
    title: "Réparation de Fuite",
    titleAccent: "— Urgence",
    text: "Recherche d'infiltration et mise hors d'eau rapide, bâchage provisoire compris si la météo l'impose.",
    image: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.37-AM.jpeg`,
  },
  {
    slug: "rives",
    title: "Rénovation de Rives",
    text: "Reprise des rives, planches de bois traitées et bandeaux en aluminium laqué pour une ligne nette.",
    image: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.38-AM.jpeg`,
  },
  {
    slug: "gouttieres",
    title: "Réparation de Gouttières",
    text: "Nettoyage, ressoudure, remplacement de descentes et pose de crapaudines contre les feuilles.",
    image: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.39-AM.jpeg`,
  },
  {
    slug: "charpente",
    title: "Charpente & Toiture",
    text: "Traitement, renfort ou remplacement de pièces de charpente traditionnelles et fermettes.",
    image: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.40-AM.jpeg`,
  },
];

export const serviceOptions = [
  "Zinguerie",
  "Rénovation de toiture",
  "Réparation de fuite — urgence",
  "Rénovation de rives",
  "Réparation de gouttières",
  "Charpente & toiture",
];

export type Project = {
  location: string;
  title: string;
  meta: string;
  before: string;
  after: string;
};

export const projects: Project[] = [
  {
    location: "Arpajon · 91",
    title: "Réfection complète en tuiles plates",
    meta: "120 m² · charpente renforcée · 9 jours de chantier",
    before: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.35-AM.jpeg`,
    after: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.36-AM.jpeg`,
  },
  {
    location: "Ollainville · 91",
    title: "Zinguerie et habillage de cheminée",
    meta: "Zinc naturel · noues refaites · 3 jours",
    before: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.37-AM.jpeg`,
    after: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.38-AM.jpeg`,
  },
  {
    location: "Égly · 91",
    title: "Gouttières aluminium et descentes",
    meta: "32 ml · rives reprises · 2 jours",
    before: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.39-AM.jpeg`,
    after: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.40-AM.jpeg`,
  },
];

export const towns = [
  "Arpajon",
  "Ollainville",
  "Égly",
  "Saint-Germain-lès-Arpajon",
  "La Norville",
  "Bruyères-le-Châtel",
  "Marolles-en-Hurepoix",
  "Leuville-sur-Orge",
  "Longpont-sur-Orge",
  "Montlhéry",
  "Linas",
  "Brétigny-sur-Orge",
];

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services", children: services },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
] as const;
