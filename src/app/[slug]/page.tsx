import { Metadata } from "next";
import { zones, getZoneBySlug, allServiceZones, getServiceZoneBySlug } from "@/config/site";
import ZonePageClient from "./ZonePageClient";
import DepannageZonePageClient from "./DepannageZonePageClient";
import InstallationZonePageClient from "./InstallationZonePageClient";
import ReparationZonePageClient from "./ReparationZonePageClient";
import EntretienZonePageClient from "./EntretienZonePageClient";

// Map service key to client component
const serviceComponents: Record<string, React.ComponentType<{ slug: string }>> = {
  depannage: DepannageZonePageClient,
  installation: InstallationZonePageClient,
  reparation: ReparationZonePageClient,
  entretien: EntretienZonePageClient,
};

export function generateStaticParams() {
  const zoneParams = zones.map((zone) => ({ slug: zone.slug }));
  const serviceParams = allServiceZones.map((sz) => ({ slug: sz.slug }));
  return [...zoneParams, ...serviceParams];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  // Check service subcity pages
  const serviceZone = getServiceZoneBySlug(slug);
  if (serviceZone) {
    const prep = serviceZone.department === "Paris" ? "dans le" : "a";
    const parentZone = getZoneBySlug(serviceZone.zoneSlug);
    const postalCode = parentZone?.postalCode || "";
    const title = serviceZone.config.metaTitle(serviceZone.name, postalCode);
    const description = serviceZone.config.metaDesc(prep, serviceZone.name, postalCode);
    return {
      title,
      description,
      alternates: { canonical: `https://depannage-porte-sectionnelle-paris.fr/${slug}/` },
      openGraph: {
        title,
        description,
        url: `https://depannage-porte-sectionnelle-paris.fr/${slug}/`,
        images: [serviceZone.config.image],
      },
    };
  }

  // Regular zone page
  const zone = getZoneBySlug(slug);
  if (!zone) {
    return { title: "Page introuvable | Depannage Porte Sectionnelle Paris" };
  }
  const zoneIndex = zones.indexOf(zone);
  const descriptionTemplates = [
    `Depannage urgent porte sectionnelle a ${zone.name} (${zone.postalCode}). Technicien sur place en 30 min, 24h/24 et 7j/7. Devis gratuit, appelez le 09 72 12 41 41.`,
    `Installation porte sectionnelle a ${zone.name} (${zone.postalCode}). Pose neuve et remplacement par techniciens certifies. Devis gratuit au 09 72 12 41 41.`,
    `Entretien porte sectionnelle a ${zone.name} (${zone.postalCode}). Contrat preventif, graissage, reglage ressorts et cables. Devis gratuit au 09 72 12 41 41.`,
    `Reparation porte sectionnelle a ${zone.name} (${zone.postalCode}) : ressorts, cables, panneaux, moteur. Toutes marques. Contactez-nous au 09 72 12 41 41.`,
    `Motorisation porte sectionnelle a ${zone.name} (${zone.postalCode}). Moteurs Somfy, Hormann, Marantec. Automatisation et domotique. Tel : 09 72 12 41 41.`,
  ];
  const description = descriptionTemplates[zoneIndex % descriptionTemplates.length];
  return {
    title: `Porte Sectionnelle ${zone.name} (${zone.postalCode}) | Depannage 24h/24`,
    description,
    alternates: { canonical: `https://depannage-porte-sectionnelle-paris.fr/${slug}/` },
    openGraph: {
      title: `Porte Sectionnelle ${zone.name} (${zone.postalCode}) | Depannage 24h/24`,
      description,
      url: `https://depannage-porte-sectionnelle-paris.fr/${slug}/`,
      images: ["https://depannage-porte-sectionnelle-paris.fr/images/portes/hero-porte-sectionnelle-fond.webp"],
    },
  };
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Check service subcity pages
  const serviceZone = getServiceZoneBySlug(slug);
  if (serviceZone) {
    const Component = serviceComponents[serviceZone.service];
    if (Component) return <Component slug={slug} />;
  }

  return <ZonePageClient slug={slug} />;
}
