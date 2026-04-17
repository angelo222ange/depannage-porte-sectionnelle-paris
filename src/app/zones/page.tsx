import { Metadata } from "next";
import { zones, siteConfig } from "@/config/site";
import ZonesPageClient from "./ZonesPageClient";

export const metadata: Metadata = {
  title: "Zones d'Intervention | Depannage Porte Sectionnelle Paris",
  description: "Zones d'intervention : Paris et Ile-de-France. Installation et depannage porte sectionnelle, intervention en 30 min. Appelez le 09 72 12 41 41.",
  alternates: { canonical: "https://depannage-porte-sectionnelle-paris.fr/zones/" },
};

export default function ZonesPage() {
  return <ZonesPageClient />;
}
