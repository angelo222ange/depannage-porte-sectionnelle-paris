export const siteConfig = {
  name: "Porte Sectionnelle Paris",
  domain: "porte-sectionnelle-paris.fr",
  url: "https://porte-sectionnelle-paris.fr",
  telephone: "09 72 12 41 41",
  telephoneHref: "tel:0972124141",
  email: "contact@porte-sectionnelle-paris.fr",
  colors: {
    accent: "#FF6333",
    accentLight: "#FFF1EC",
    bg: "#F6F7F9",
    text: "#000000",
    textMuted: "#3B3B3B",
    white: "#FFFFFF",
    black: "#000000",
  },
  borderRadius: "16px",
  font: "var(--font-figtree), sans-serif",
};

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
}

export const services: Service[] = [
  {
    slug: "installation-porte-sectionnelle",
    title: "Installation de porte sectionnelle",
    shortTitle: "Installation",
  },
  {
    slug: "depannage-porte-sectionnelle",
    title: "Depannage de porte sectionnelle",
    shortTitle: "Depannage",
  },
  {
    slug: "reparation-porte-sectionnelle",
    title: "Reparation de porte sectionnelle",
    shortTitle: "Reparation",
  },
  {
    slug: "motorisation-porte-sectionnelle",
    title: "Motorisation de porte sectionnelle",
    shortTitle: "Motorisation",
  },
  {
    slug: "entretien-porte-sectionnelle",
    title: "Entretien de porte sectionnelle",
    shortTitle: "Entretien",
  },
  {
    slug: "porte-sectionnelle-industrielle",
    title: "Porte sectionnelle industrielle",
    shortTitle: "Industrielle",
  },
  {
    slug: "porte-de-garage",
    title: "Porte de garage sectionnelle",
    shortTitle: "Porte de garage",
  },
];

export interface Zone {
  slug: string;
  name: string;
  department: string;
  postalCode: string;
}

// All 20 arrondissements + banlieues strategiques Ile-de-France
export const zones: Zone[] = [
  // Paris — 20 arrondissements
  { slug: "porte-sectionnelle-paris-1", name: "Paris 1er", department: "Paris", postalCode: "75001" },
  { slug: "porte-sectionnelle-paris-2", name: "Paris 2eme", department: "Paris", postalCode: "75002" },
  { slug: "porte-sectionnelle-paris-3", name: "Paris 3eme", department: "Paris", postalCode: "75003" },
  { slug: "porte-sectionnelle-paris-4", name: "Paris 4eme", department: "Paris", postalCode: "75004" },
  { slug: "porte-sectionnelle-paris-5", name: "Paris 5eme", department: "Paris", postalCode: "75005" },
  { slug: "porte-sectionnelle-paris-6", name: "Paris 6eme", department: "Paris", postalCode: "75006" },
  { slug: "porte-sectionnelle-paris-7", name: "Paris 7eme", department: "Paris", postalCode: "75007" },
  { slug: "porte-sectionnelle-paris-8", name: "Paris 8eme", department: "Paris", postalCode: "75008" },
  { slug: "porte-sectionnelle-paris-9", name: "Paris 9eme", department: "Paris", postalCode: "75009" },
  { slug: "porte-sectionnelle-paris-10", name: "Paris 10eme", department: "Paris", postalCode: "75010" },
  { slug: "porte-sectionnelle-paris-11", name: "Paris 11eme", department: "Paris", postalCode: "75011" },
  { slug: "porte-sectionnelle-paris-12", name: "Paris 12eme", department: "Paris", postalCode: "75012" },
  { slug: "porte-sectionnelle-paris-13", name: "Paris 13eme", department: "Paris", postalCode: "75013" },
  { slug: "porte-sectionnelle-paris-14", name: "Paris 14eme", department: "Paris", postalCode: "75014" },
  { slug: "porte-sectionnelle-paris-15", name: "Paris 15eme", department: "Paris", postalCode: "75015" },
  { slug: "porte-sectionnelle-paris-16", name: "Paris 16eme", department: "Paris", postalCode: "75016" },
  { slug: "porte-sectionnelle-paris-17", name: "Paris 17eme", department: "Paris", postalCode: "75017" },
  { slug: "porte-sectionnelle-paris-18", name: "Paris 18eme", department: "Paris", postalCode: "75018" },
  { slug: "porte-sectionnelle-paris-19", name: "Paris 19eme", department: "Paris", postalCode: "75019" },
  { slug: "porte-sectionnelle-paris-20", name: "Paris 20eme", department: "Paris", postalCode: "75020" },
  // Ile-de-France — banlieues strategiques
  { slug: "porte-sectionnelle-boulogne-billancourt", name: "Boulogne-Billancourt", department: "Hauts-de-Seine (92)", postalCode: "92100" },
  { slug: "porte-sectionnelle-neuilly-sur-seine", name: "Neuilly-sur-Seine", department: "Hauts-de-Seine (92)", postalCode: "92200" },
  { slug: "porte-sectionnelle-levallois-perret", name: "Levallois-Perret", department: "Hauts-de-Seine (92)", postalCode: "92300" },
  { slug: "porte-sectionnelle-issy-les-moulineaux", name: "Issy-les-Moulineaux", department: "Hauts-de-Seine (92)", postalCode: "92130" },
  { slug: "porte-sectionnelle-nanterre", name: "Nanterre", department: "Hauts-de-Seine (92)", postalCode: "92000" },
  { slug: "porte-sectionnelle-saint-denis", name: "Saint-Denis", department: "Seine-Saint-Denis (93)", postalCode: "93200" },
  { slug: "porte-sectionnelle-montreuil", name: "Montreuil", department: "Seine-Saint-Denis (93)", postalCode: "93100" },
  { slug: "porte-sectionnelle-vincennes", name: "Vincennes", department: "Val-de-Marne (94)", postalCode: "94300" },
  { slug: "porte-sectionnelle-ivry-sur-seine", name: "Ivry-sur-Seine", department: "Val-de-Marne (94)", postalCode: "94200" },
  { slug: "porte-sectionnelle-creteil", name: "Creteil", department: "Val-de-Marne (94)", postalCode: "94000" },
  { slug: "porte-sectionnelle-argenteuil", name: "Argenteuil", department: "Val-d'Oise (95)", postalCode: "95100" },
  { slug: "porte-sectionnelle-versailles", name: "Versailles", department: "Yvelines (78)", postalCode: "78000" },
];

export function getZoneBySlug(slug: string): Zone | undefined {
  return zones.find((z) => z.slug === slug);
}

export function getNeighborZones(currentSlug: string, count = 6): Zone[] {
  const idx = zones.findIndex((z) => z.slug === currentSlug);
  if (idx === -1) return zones.slice(0, count);
  const neighbors: Zone[] = [];
  for (let i = 1; neighbors.length < count && i < zones.length; i++) {
    const next = zones[(idx + i) % zones.length];
    neighbors.push(next);
  }
  return neighbors;
}

// Depannage subcity pages
// ── Generic subcity service system ──
// Add a new service = add 1 entry to subcityServices. That's it.

export interface ServiceZone {
  slug: string;
  zoneSlug: string;
  name: string;
  department: string;
  service: string; // "depannage", "installation", etc.
}

export interface SubcityServiceConfig {
  key: string;          // "depannage", "installation", etc.
  prefix: string;       // "depannage-porte-sectionnelle"
  titleLabel: string;   // "Depannage"
  image: string;        // OG image
  metaTitle: (name: string, pc: string) => string;
  metaDesc: (prep: string, name: string, pc: string) => string;
}

export const subcityServices: SubcityServiceConfig[] = [
  {
    key: "depannage",
    prefix: "depannage-porte-sectionnelle",
    titleLabel: "Depannage",
    image: "/images/portes/depannage-porte-sectionnelle.webp",
    metaTitle: (name, pc) => `Depannage Porte Sectionnelle ${name} (${pc}) | 24h/24`,
    metaDesc: (prep, name, pc) => `Depannage porte sectionnelle ${prep} ${name} (${pc}) en urgence 24h/24. Technicien sur place en 30 min. Tel : 09 72 12 41 41.`,
  },
  {
    key: "installation",
    prefix: "installation-porte-sectionnelle",
    titleLabel: "Installation",
    image: "/images/portes/installation-porte-sectionnelle.webp",
    metaTitle: (name, pc) => `Installation Porte Sectionnelle ${name} (${pc})`,
    metaDesc: (prep, name, pc) => `Installation porte sectionnelle ${prep} ${name} (${pc}). Pose neuve, remplacement, garantie 10 ans. Devis gratuit au 09 72 12 41 41.`,
  },
  {
    key: "reparation",
    prefix: "reparation-porte-sectionnelle",
    titleLabel: "Reparation",
    image: "/images/portes/reparation-porte-sectionnelle.webp",
    metaTitle: (name, pc) => `Reparation Porte Sectionnelle ${name} (${pc}) | Toutes Marques`,
    metaDesc: (prep, name, pc) => `Reparation porte sectionnelle ${prep} ${name} (${pc}). Ressorts, cables, panneaux, motorisation. Devis gratuit au 09 72 12 41 41.`,
  },
  {
    key: "entretien",
    prefix: "entretien-porte-sectionnelle",
    titleLabel: "Entretien",
    image: "/images/portes/entretien-porte-sectionnelle.webp",
    metaTitle: (name, pc) => `Entretien Porte Sectionnelle ${name} (${pc}) | Maintenance`,
    metaDesc: (prep, name, pc) => `Entretien porte sectionnelle ${prep} ${name} (${pc}). Contrat annuel, checklist 20 points, graissage, reglage. Devis gratuit au 09 72 12 41 41.`,
  },
];

// Generate all subcity zones for all services
export const allServiceZones: ServiceZone[] = subcityServices.flatMap(svc =>
  zones.map(z => ({
    slug: `${svc.prefix}-${z.slug.replace("porte-sectionnelle-", "")}`,
    zoneSlug: z.slug,
    name: z.name,
    department: z.department,
    service: svc.key,
  }))
);

export function getServiceZoneBySlug(slug: string): (ServiceZone & { config: SubcityServiceConfig }) | undefined {
  const sz = allServiceZones.find(z => z.slug === slug);
  if (!sz) return undefined;
  const config = subcityServices.find(s => s.key === sz.service)!;
  return { ...sz, config };
}

export function getNeighborServiceZones(currentSlug: string, count = 6): ServiceZone[] {
  const current = allServiceZones.find(z => z.slug === currentSlug);
  if (!current) return [];
  // Only neighbors of the same service
  const sameService = allServiceZones.filter(z => z.service === current.service);
  const idx = sameService.findIndex(z => z.slug === currentSlug);
  if (idx === -1) return sameService.slice(0, count);
  const neighbors: ServiceZone[] = [];
  for (let i = 1; neighbors.length < count && i < sameService.length; i++) {
    neighbors.push(sameService[(idx + i) % sameService.length]);
  }
  return neighbors;
}

// Legacy aliases (used by existing client components — avoid breaking imports)
export type DepannageZone = ServiceZone;
export type InstallationZone = ServiceZone;
export type ReparationZone = ServiceZone;
export type EntretienZone = ServiceZone;
export const depannageZones = allServiceZones.filter(z => z.service === "depannage");
export const installationZones = allServiceZones.filter(z => z.service === "installation");
export const reparationZones = allServiceZones.filter(z => z.service === "reparation");
export const entretienZones = allServiceZones.filter(z => z.service === "entretien");
export const getDepannageZoneBySlug = (slug: string) => depannageZones.find(z => z.slug === slug);
export const getInstallationZoneBySlug = (slug: string) => installationZones.find(z => z.slug === slug);
export const getReparationZoneBySlug = (slug: string) => reparationZones.find(z => z.slug === slug);
export const getEntretienZoneBySlug = (slug: string) => entretienZones.find(z => z.slug === slug);
export const getNeighborDepannageZones = (slug: string, count = 6) => getNeighborServiceZones(slug, count);
export const getNeighborInstallationZones = (slug: string, count = 6) => getNeighborServiceZones(slug, count);
export const getNeighborReparationZones = (slug: string, count = 6) => getNeighborServiceZones(slug, count);
export const getNeighborEntretienZones = (slug: string, count = 6) => getNeighborServiceZones(slug, count);
